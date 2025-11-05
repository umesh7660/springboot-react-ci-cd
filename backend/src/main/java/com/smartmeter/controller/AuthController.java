package com.smartmeter.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.smartmeter.model.UserMaster;
import com.smartmeter.repository.NavbarHeaderRepository;
import com.smartmeter.repository.RoleNavbarMappingRepository;
import com.smartmeter.services.AuthService;
import com.smartmeter.services.NavbarService;
import com.smartmeter.services.UserMasterService;
import com.smartmeter.utils.EncAndDecLogic;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private AuthService authService;

	@Autowired
	private UserMasterService userMasterService;

	@Autowired
	private NavbarService navbarService;

	@Autowired
	private RoleNavbarMappingRepository roleNavbarMappingRepository;

	@Autowired
	private NavbarHeaderRepository navbarHeaderRepository;

	@PostMapping("/login")
	public ResponseEntity<?> login(HttpSession session,@RequestBody UserMaster user, HttpServletRequest request) throws Exception {
		System.out.println("Received user: " + user); // Debugging log

		if (user.getId() == null || user.getId().getUserLoginid() == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request: userLoginid is missing");
		}

		boolean isAuthenticated = authService.authenticate(user.getId().getUserLoginid(), user.getPassword());
		if (!isAuthenticated) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}

		Optional<UserMaster> optionalUser = userMasterService.findByUserLoginid(user.getId().getUserLoginid());

		if (!optionalUser.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}

		UserMaster userMaster = optionalUser.get();
		userMaster.setPassword(EncAndDecLogic.decrypt(userMaster.getPassword()));

		// Fetch roleId
		Integer roleId = authService.getRoleId(user.getId().getUserLoginid());
		
		

		List<String> headerid = new ArrayList<>();
		// List<String> headerList = navbarHeaderRepository.findAllNames();
		List<String> reportNames = new ArrayList<>();
		try {
			List<String> navbarIds = roleNavbarMappingRepository.findByNavabarId(roleId, "TRUE");
			if (navbarIds != null) {
				for (String navbarId : navbarIds) {
					String name = navbarService.findByName(navbarId);
					List<String> headerList = navbarService.findByNavbarHeaderId(navbarId);

					if (name != null) {
						reportNames.add(name);
						headerid.addAll(headerList);
					}
				}
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error fetching navbar data: " + e.getMessage());
		}

		Set<String> set = new HashSet<>(headerid);
		List<String> uniqueList = new ArrayList<>(set);

		List<String> headeName = new ArrayList<String>();
		for (String str : uniqueList) {
			String name = navbarHeaderRepository.findByName(Integer.parseInt(str));
			if (name != null) {
				headeName.add(name);
			}
		}

		// Construct response
		Map<String, Object> response = new HashMap<>();
		response.put("user", userMaster);
		response.put("headerList", headeName);
		response.put("reportNames", reportNames);
		

		return ResponseEntity.ok(response);
	}

//	@GetMapping("/forgot-password")
//	public String forgotPassword (@RequestParam("userLoginid") String userLoginid) {
//		return userLoginid;
//		
//	}
	@GetMapping("/forgot-password")
	public ResponseEntity<String> forgotPassword(@RequestParam("userLoginid") String userLoginid) {
		Optional<UserMaster> response = authService.findByUserLoginid(userLoginid);
		if (response.isPresent()) {
			return ResponseEntity.ok("found");
		}
		return null;
	}

	@PostMapping("/reset-password")
	@ResponseBody
	public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> request) throws Exception {
		String userLoginid = request.get("userLoginid");
		String password = request.get("password");
		Optional<UserMaster> optionalUser = userMasterService.findByUserLoginid(userLoginid);
		if (userLoginid == null || password == null) {
			return ResponseEntity.badRequest().body("Missing parameters");
		}
		if (optionalUser.isPresent()) {
			UserMaster user = optionalUser.get();
			String encryptedPassword = EncAndDecLogic.encrypt(password);
			user.setPassword(encryptedPassword);
			// Save the updated user
			userMasterService.save(user);

			return ResponseEntity.ok("success");
		}

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
	}

	

}
