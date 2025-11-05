package com.smartmeter.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.smartmeter.DTO.NavBarDTO;
import com.smartmeter.model.MasRole;
import com.smartmeter.model.NavBar;
import com.smartmeter.model.NavbarHeader;
import com.smartmeter.model.Rolenavbarmapping;
import com.smartmeter.repository.MasRoleRepository;
import com.smartmeter.repository.NavbarHeaderRepository;
import com.smartmeter.repository.NavbarRepository;
import com.smartmeter.repository.RoleNavbarMappingRepository;

import io.swagger.v3.oas.annotations.Operation;

@Controller
@RequestMapping("/api/role")
public class RoleManagementController {
	@Autowired
	private MasRoleRepository masRoleRepository;

	@Autowired
	private RoleNavbarMappingRepository roleNavbarMappingRepository;

	@Autowired
	private NavbarHeaderRepository navbarHeaderRepository;

	@Autowired
	private NavbarRepository navbarRepository;

	@GetMapping("/fetchRoles")
	@ResponseBody
	public List<MasRole> getRoles() {
		List<MasRole> list = masRoleRepository.findAll(); // Fetching all roles from the database
		return list;
	}

	@GetMapping("/fetchRoleMappings")
	@ResponseBody
	public List<Rolenavbarmapping> getRoleMappings(@RequestParam("roleId") Integer roleId) {
		return roleNavbarMappingRepository.findByRoleId(roleId);
	}

	@Operation(summary = "Fetch and edit navbar details based on role", description = "Retrieve and modify navbar details for a specific role")
	@GetMapping("/editNavbarheaderMapping")
	@ResponseBody
	public List<Map<String, Object>> fetchAndEditNavbarheaderMapping(@RequestParam("roleId") String roleId) {
		List<NavbarHeader> headerList = navbarHeaderRepository.findAll();
		List<Map<String, Object>> result = new ArrayList<>();

		for (NavbarHeader header : headerList) {
			List<NavBar> navBars = navbarRepository.findByNavbarHeaderid(header.getNavbarHeaderid());
			List<NavBarDTO> navBarDTOs = new ArrayList<>();

			for (NavBar nv : navBars) {
				if (nv.getParentId() != null && nv.getParentId() != 0) {
					continue; // Skip child items in the top-level list
				}

				// Fetch the isactive status from RoleNavbarMapping
				Rolenavbarmapping parentRoleMapping = roleNavbarMappingRepository
						.findByRoleIdAndNavbarId(Integer.parseInt(roleId), nv.getNavbarId());
				String parentIsActive = (parentRoleMapping != null && "TRUE".equals(parentRoleMapping.getIsactive()))
						? "TRUE"
						: "FALSE";

				List<NavBarDTO> subItems = null;

				if ("1".equals(nv.getHaschild())) {
					List<NavBar> childNavs = navbarRepository.findByParentId(nv.getNavbarId());
					subItems = childNavs.stream().map(child -> {
						Rolenavbarmapping childRoleMapping = roleNavbarMappingRepository
								.findByRoleIdAndNavbarId(Integer.parseInt(roleId), child.getNavbarId());
						String childIsActive = (childRoleMapping != null
								&& "TRUE".equals(childRoleMapping.getIsactive())) ? "TRUE" : "FALSE";

						return new NavBarDTO(child.getNavbarId(), child.getName(), child.getControllerName(),
								child.getActionName(), child.getArea(), child.getImageClass(), childIsActive, // Set the
																												// isActive
																												// status
																												// for
																												// child
																												// items
								child.getParentId(), child.getIsParent(), child.getHaschild(), child.getModuleName(),
								child.getNavbarHeaderid(), null);
					}).collect(Collectors.toList());
				}

				NavBarDTO dto = new NavBarDTO(nv.getNavbarId(), nv.getName(), nv.getControllerName(),
						nv.getActionName(), nv.getArea(), nv.getImageClass(), parentIsActive, nv.getParentId(),
						nv.getIsParent(), nv.getHaschild(), nv.getModuleName(), nv.getNavbarHeaderid(), subItems);
				navBarDTOs.add(dto);
			}

			Map<String, Object> headerMap = new HashMap<>();
			headerMap.put("navbarHeaderId", header.getNavbarHeaderid());
			headerMap.put("headerName", header.getName());
			headerMap.put("navbars", navBarDTOs);
			result.add(headerMap);
		}

		return result;
	}

	@Operation(summary = "Create  navbar details based on role", description = "Create navbar details for a specific role")

	@GetMapping("/createNavbarheaderMapping")
	@ResponseBody
	public List<Map<String, Object>> createNavbarHeaderMapping() {
		List<NavbarHeader> headerList = navbarHeaderRepository.findAll();
		List<Map<String, Object>> result = new ArrayList<>();

		// Loop through each header
		for (NavbarHeader header : headerList) {
			// Retrieve navbars for the current header
			List<NavBar> navBars = navbarRepository.findByNavbarHeaderid(header.getNavbarHeaderid());
			List<NavBarDTO> navBarDTOs = new ArrayList<>();

			for (NavBar nv : navBars) {
				// Skip if this item is a child
				if (nv.getParentId() != null && nv.getParentId() != 0) {
					continue; // Skip child items in the top-level list
				}

				List<NavBarDTO> subItems = null;

				if ("1".equals(nv.getHaschild())) {
					List<NavBarDTO> childNavs = navbarRepository.findBySubItems(nv.getNavbarId());
					subItems = childNavs.stream()
							.map(child -> new NavBarDTO(child.getNavbarId(), child.getName(), child.getControllerName(),
									child.getActionName(), child.getArea(), child.getImageClass(), "FALSE",
									child.getParentId(), child.getIsParent(), child.getHaschild(),
									child.getModuleName(), child.getNavbarHeaderid(), null))
							.collect(Collectors.toList());
				}

				NavBarDTO dto = new NavBarDTO(nv.getNavbarId(), nv.getName(), nv.getControllerName(),
						nv.getActionName(), nv.getArea(), nv.getImageClass(), "FALSE", nv.getParentId(),
						nv.getIsParent(), nv.getHaschild(), nv.getModuleName(), nv.getNavbarHeaderid(), subItems);
				navBarDTOs.add(dto);
			}

			// Create header map with headerName and its associated navbars
			Map<String, Object> headerMap = new HashMap<>();
			headerMap.put("headerName", header.getName());
			headerMap.put("navbars", navBarDTOs);
			result.add(headerMap);
		}

		return result;
	}

	@Operation(summary = "Submit navbar details", description = "Submit navbar details")
	@PostMapping("/submitNavbarheaderMapping")
	@ResponseBody
	public ResponseEntity<?> submitNavbarheaderMapping(@RequestBody Map<String, Object> requestPayload) {
		try {
			// Extract role details
			String roleNameMapping = (String) requestPayload.get("roleName");
			// String roleIdMapping = (String) requestPayload.get("roleId");

			// Save role if it does not exist
			MasRole existingRole = masRoleRepository.findByRoleType(roleNameMapping);
			Integer roleId;
			if (existingRole == null) {
				MasRole ms = new MasRole();
				ms.setRoleType(roleNameMapping);
				ms.setInsertedBy("admin");
				ms.setInsertedDate(Timestamp.valueOf(LocalDateTime.now()));
				MasRole savedRole = masRoleRepository.save(ms);
				roleId = savedRole.getRoleId();
			} else {
				roleId = existingRole.getRoleId();
			}

			@SuppressWarnings("unchecked")
			List<Map<String, Object>> headerMappings = (List<Map<String, Object>>) requestPayload.get("cardData");

			if (headerMappings != null) {
				for (Map<String, Object> headerMap : headerMappings) {
					// Extract header name and check if it exists
					String headerName = (String) headerMap.get("headerName");
					List<NavbarHeader> existingHeaders = navbarHeaderRepository.findByName(headerName);
					NavbarHeader headerEntity;

					if (existingHeaders.isEmpty()) {
						headerEntity = new NavbarHeader();
						headerEntity.setName(headerName);
						headerEntity.setDescription(headerName);
						headerEntity = navbarHeaderRepository.save(headerEntity);
					} else {
						headerEntity = existingHeaders.get(0);
					}

					@SuppressWarnings("unchecked")
					List<Map<String, Object>> navbarsList = (List<Map<String, Object>>) headerMap.get("navbars");
					if (navbarsList != null) {
						for (Map<String, Object> navBarMap : navbarsList) {
							Integer navbarId = (Integer) navBarMap.get("navbarId");
							Optional<NavBar> navBarOpt = navbarRepository.findById(navbarId);

							if (navBarOpt.isPresent()) {
								NavBar navBar = navBarOpt.get();

								// Handle status conversion (Boolean or String)
								Object statusObj = navBarMap.get("status");
								String status = (statusObj instanceof Boolean)
										? ((Boolean) statusObj ? "TRUE" : "FALSE")
										: statusObj.toString();

								navBar.setStatus(status);
								navbarRepository.save(navBar);

								// Update role-navbar mapping
								Rolenavbarmapping roleNavMapping = roleNavbarMappingRepository
										.findByRoleIdAndNavbarId(roleId, navbarId);
								if (roleNavMapping == null) {
									roleNavMapping = new Rolenavbarmapping();
									roleNavMapping.setRoleId(roleId);
									roleNavMapping.setNavbarId(navbarId);
								}
								roleNavMapping.setIsactive(status);
								roleNavbarMappingRepository.save(roleNavMapping);
							}

							// Handle sub-items
							@SuppressWarnings("unchecked")
							List<Map<String, Object>> subItemsList = (List<Map<String, Object>>) navBarMap
									.get("subItems");
							if (subItemsList != null) {
								for (Map<String, Object> subItemsMap : subItemsList) {
									Integer subNavbarId = (Integer) subItemsMap.get("navbarId");
									Optional<NavBar> subNavBarOpt = navbarRepository.findById(subNavbarId);
									Object statusObj = subItemsMap.get("status");
									String status = (statusObj instanceof Boolean)
											? ((Boolean) statusObj ? "TRUE" : "FALSE")
											: statusObj.toString();
									if (subNavBarOpt.isPresent()) {
										NavBar subNavBar = subNavBarOpt.get();
										subNavBar.setStatus(status);
										navbarRepository.save(subNavBar);
									}

									// Update RoleNavbarMapping for sub-items
									Rolenavbarmapping subItemMapping = roleNavbarMappingRepository
											.findByRoleIdAndNavbarId(roleId, subNavbarId);
									if (subItemMapping == null) {
										subItemMapping = new Rolenavbarmapping();
										subItemMapping.setRoleId(roleId);
										subItemMapping.setNavbarId(subNavbarId);
									}
									subItemMapping.setIsactive(status);
									roleNavbarMappingRepository.save(subItemMapping);
								}
							}
						}
					}
				}
			}
			return ResponseEntity.ok("Navbar header mapping submitted successfully.");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error processing navbar header mapping: " + e.getMessage());
		}
	}

	@Operation(summary = "Fetch and edit navbar details based on role", description = "Retrieve and modify navbar details for a specific role")
	@DeleteMapping("/deleteRole")
	@ResponseBody
	public ResponseEntity<String> deleteRole(@RequestParam("roleId") Integer roleId) {
		try {
			// Assuming you have a method to delete role mappings first
			List<Rolenavbarmapping> roleMappings = roleNavbarMappingRepository.findByRoleId(roleId);
			if (!roleMappings.isEmpty()) {
				roleNavbarMappingRepository.deleteAll(roleMappings); // Delete related role mappings
			}
			List<MasRole> list = masRoleRepository.findByRoleId(roleId);

			if (!list.isEmpty()) {
				masRoleRepository.deleteAll(list); // Delete related role mappings
			}
			// Now delete the role itself
			//roleNavbarMappingRepository.deleteById(roleId);
			//masRoleRepository.deleteById(roleId);// Assuming roleRepository handles roles

			return ResponseEntity.ok("Role deleted successfully!");
		} catch (Exception e) {
			return ResponseEntity.status(500).body("Error deleting role!");
		}
	}

}
