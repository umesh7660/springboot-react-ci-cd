package com.smartmeter.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.smartmeter.DTO.UserMasterDTO;
import com.smartmeter.model.Rolenavbarmapping;
import com.smartmeter.model.UserMaster;
import com.smartmeter.model.UserMasterId;
import com.smartmeter.repository.UserMasterRepository;
import com.smartmeter.services.UserMasterService;
import com.smartmeter.utils.EncAndDecLogic;

import io.swagger.v3.oas.annotations.Operation;

@Controller
@RequestMapping("/api/user")
public class UserManagementController {

	@Autowired
	private UserMasterRepository userMasterRepository;

	@Autowired
	private UserMasterService userMasterSevice;
	@Autowired
	private EncAndDecLogic encAndDecLogic;

	@SuppressWarnings("unchecked")
	@GetMapping("/userManagement")
	public String showUserForm(Model model, HttpServletRequest request) {
		HttpSession session = request.getSession();
		List<Rolenavbarmapping> mappingsSession = (List<Rolenavbarmapping>) session.getAttribute("mappings");
		model.addAttribute("mappings", mappingsSession);
		return "userManagement"; // Make sure the JSP file is located in the correct folder (e.g.,
									// /src/main/webapp/WEB-INF/views/)
	}

	@GetMapping("/fetchUsers")
	@ResponseBody
	public List<UserMasterDTO> fetchUsers() throws Exception {
		List<UserMaster> users = userMasterRepository.findAll();
		List<UserMasterDTO> umDto = new ArrayList<UserMasterDTO>();
		for (UserMaster um : users) {
			UserMasterDTO dto = new UserMasterDTO();
			if (um.getId() != null) {
				dto.setUserLoginid(um.getId().getUserLoginid());
			}
			dto.setFullName(um.getFullName());
			dto.setPassword(EncAndDecLogic.decrypt(um.getPassword()));
			dto.setEmailAddress(um.getEmailAddress());
			dto.setCellPhone(um.getCellPhone());
			dto.setCity(um.getCity());
			dto.setRoleId(um.getRoleId());
			dto.setUserStatus(um.getUserStatus());

			dto.setCreatedBy(um.getCreatedBy());
			dto.setCreationDate(um.getCreationDate());
			umDto.add(dto);
		}
		return umDto; // Return the list of users as JSON
	}

	@Operation(summary = "Create or Update User", description = "This API creates a new user or updates an existing user")
	@PostMapping("/submitUserDetails")
	public ResponseEntity<String> createOrUpdateUser(@RequestBody UserMasterDTO userMasterDTO,
			HttpServletRequest request) {
		try {
			/*
			 * HttpSession session = request.getSession(false); // Don't create a new
			 * session if (session == null) { return
			 * ResponseEntity.status(HttpStatus.UNAUTHORIZED).
			 * body("Session expired. Please log in again."); }
			 * 
			 * UserMaster userLoginDetails = (UserMaster)
			 * session.getAttribute("userLoginDetails"); if (userLoginDetails == null) {
			 * return ResponseEntity.status(HttpStatus.UNAUTHORIZED).
			 * body("User details not found in session."); }
			 */
			Timestamp creationDate = null;
			if (userMasterDTO.getCreationDate() != null) {
				creationDate = new Timestamp(userMasterDTO.getCreationDate().getTime());
			}

			// Check if the user exists before saving/updating
			UserMasterId userMasterId = new UserMasterId();
			userMasterId.setUserLoginid(userMasterDTO.getUserLoginid());

			Optional<UserMaster> existingUserOptional = userMasterRepository.findById(userMasterId);

			UserMaster user;
			if (existingUserOptional.isPresent()) {
				// Update existing user
				user = existingUserOptional.get();
				user.setFullName(userMasterDTO.getFullName());
				user.setPassword(EncAndDecLogic.encrypt(userMasterDTO.getPassword())); // Update password
				user.setEmailAddress(userMasterDTO.getEmailAddress());
				user.setCellPhone(userMasterDTO.getCellPhone());
				user.setCity(userMasterDTO.getCity());
				user.setRoleId(userMasterDTO.getRoleId());
				user.setRoleType(userMasterDTO.getRoleType());
				user.setUserStatus(userMasterDTO.getUserStatus());
				user.setCreatedBy(userMasterDTO.getCreatedBy());
				user.setCreationDate(creationDate);
			} else {
				// Create new user
				user = new UserMaster();
				user.setId(userMasterId);
				user.setFullName(userMasterDTO.getFullName());
				user.setPassword(EncAndDecLogic.encrypt(userMasterDTO.getPassword()));
				user.setEmailAddress(userMasterDTO.getEmailAddress());
				user.setCellPhone(userMasterDTO.getCellPhone());
				user.setCity(userMasterDTO.getCity());
				user.setRoleId(userMasterDTO.getRoleId());
				user.setRoleType(userMasterDTO.getRoleType());
				user.setUserStatus(userMasterDTO.getUserStatus());
				user.setCreatedBy(userMasterDTO.getCreatedBy());
				user.setCreationDate(Timestamp.valueOf(LocalDateTime.now()));
			}

			userMasterRepository.save(user);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(existingUserOptional.isPresent() ? "User updated successfully" : "User created successfully");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error creating/updating user: " + e.getMessage());
		}
	}

	@Operation(summary = "Get User Details", description = "This API retrieves user details without updating them")
	@GetMapping("/updateUserDetails")
	@ResponseBody
	public ResponseEntity<UserMasterDTO> updateUserDetails(@RequestParam("userLoginid") String userLoginid)
			throws Exception {
		UserMasterId userMasterId = new UserMasterId();
		userMasterId.setUserLoginid(userLoginid);

		Optional<UserMaster> userOptional = userMasterRepository.findById(userMasterId);

		if (userOptional.isPresent()) {
			UserMaster user = userOptional.get();

			// Decrypt password safely (only if it exists)
			String decryptedPassword = user.getPassword() != null ? EncAndDecLogic.decrypt(user.getPassword()) : null;

			// Map to DTO without modifying the entity object
			UserMasterDTO responseDTO = new UserMasterDTO(user.getId().getUserLoginid(), user.getFullName(),
					decryptedPassword, // Store decrypted password here, but avoid exposing it
					user.getEmailAddress(), user.getCellPhone(), user.getCity(), user.getUserStatus(), user.getRoleId(), // Assuming
					user.getCreatedBy(), user.getCreationDate());

			return ResponseEntity.ok(responseDTO);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@PutMapping(value = "/updateUserProfile")
	@ResponseBody
	public ResponseEntity<UserMasterDTO> updateUserProfile(
	        @RequestPart("userDetails") String userDetailsJson,
	        @RequestPart(value = "profileImage", required = false) MultipartFile profileImage) {
	    
	    try {
	        // Convert JSON string to DTO
	        ObjectMapper objectMapper = new ObjectMapper();
	        UserMasterDTO userMasterDTO = objectMapper.readValue(userDetailsJson, UserMasterDTO.class);

	        // Find existing user
	        Optional<UserMaster> existingUser = userMasterRepository.findByUserLoginid(userMasterDTO.getUserLoginid());

	        if (existingUser==null) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	        }

	        UserMaster user = existingUser.get();
	        user.setFullName(userMasterDTO.getFullName());
	        user.setEmailAddress(userMasterDTO.getEmailAddress());
	        user.setCellPhone(userMasterDTO.getCellPhone());
	        user.setCity(userMasterDTO.getCity());
	        user.setRoleId(userMasterDTO.getRoleId());
	        user.setUserStatus(userMasterDTO.getUserStatus());

	        // Handle profile image update
//	        if (profileImage != null && !profileImage.isEmpty()) {
//	            String imagePath = fileStorageService.saveFile(profileImage);
//	            if (imagePath != null && !imagePath.isBlank()) {
//	                user.setProfileImagePath(imagePath);
//	            }
//	        }

	        // Save updated user
	        userMasterRepository.save(user);

	        // Convert updated entity back to DTO
	        UserMasterDTO updatedDTO = new UserMasterDTO();
	        updatedDTO.setUserLoginid(user.getId().getUserLoginid());
	        updatedDTO.setFullName(user.getFullName());
	        updatedDTO.setEmailAddress(user.getEmailAddress());
	        updatedDTO.setCellPhone(user.getCellPhone());
	        updatedDTO.setCity(user.getCity());
	        updatedDTO.setRoleId(user.getRoleId());
	        updatedDTO.setUserStatus(user.getUserStatus());
	        //updatedDTO.setProfilePath(user.getProfileImagePath()); // Set updated profile image path

	        return ResponseEntity.ok(updatedDTO);
	    } catch (Exception e) {
	        e.printStackTrace(); // Log error for debugging
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
	    }
	}



	@GetMapping("/fetchUserDetails")
	@ResponseBody
	public Optional<UserMaster> getUserDetails(@RequestParam("userId") String userId) {
		return userMasterRepository.findByUserLoginid(userId);
	}

	@Operation(summary = "Delete User", description = "Deletes an existing user by userId")
	@DeleteMapping("/deleteUser")
	public ResponseEntity<String> deleteUser(@RequestParam("userLoginid") String userLoginid) {
		try {
			// Ensure you set all fields in the composite key
			UserMasterId userMasterId = new UserMasterId();
			userMasterId.setUserLoginid(userLoginid);

			// Debugging - Print key before querying
			System.out.println("Deleting user with ID: " + userMasterId);

			// Find the user
			Optional<UserMaster> userOptional = userMasterRepository.findById(userMasterId);
			if (!userOptional.isPresent()) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
			}

			// Delete user
			userMasterRepository.delete(userOptional.get());

			// Verify if deleted
			if (userMasterRepository.existsById(userMasterId)) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
			}

			return ResponseEntity.ok("User deleted successfully");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to delete user: " + e.getMessage());
		}
	}

}
