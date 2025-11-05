package com.smartmeter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartmeter.model.NavBar;
import com.smartmeter.model.NavbarHeader;
import com.smartmeter.repository.NavbarHeaderRepository;
import com.smartmeter.repository.NavbarRepository;
import com.smartmeter.repository.RoleNavbarMappingRepository;



@RestController
@RequestMapping("/api/navabar")
	public class NavabarController {
	
	@Autowired
	private NavbarHeaderRepository navbarHeaderRepository;
	
	@Autowired
	private NavbarRepository navbarRepository;

	
	@Autowired
	private RoleNavbarMappingRepository roleNavbarMapping ;

	
	
	@PostMapping("/createNavbarHeader")
	public String insertNavbarHeader(
			@RequestParam("name") String name,@RequestParam("description") String description, Model model) {
		// Create NavbarHeader object and set values
		NavbarHeader navbarHeader = new NavbarHeader();
		//navbarHeader.setNavbarHeaderid(navbarHeaderId);
		navbarHeader.setName(name);
		navbarHeader.setDescription(description);

		// Save the data using the service
		navbarHeaderRepository.save(navbarHeader);

		// Add a success message
		model.addAttribute("message", "Navbar Header successfully added!");

		return "redirect:/navbarHeaderList"; // Redirect to a list or another page
	}

	@PostMapping("/createNavbar")
	public String createNavbar(@RequestBody NavBar navbar, Model model) {
		navbarRepository.save(navbar);

		// Add a success message
		model.addAttribute("message", "Navbar Header successfully added!");

		return "redirect:/navbarHeaderList"; // Redirect to a list or another page
	}
	
	@GetMapping("/navbarHeaderList")
	public List<NavbarHeader> listNavbarHeaders(Model model) {
		List<NavbarHeader> navbarHeaders = navbarHeaderRepository.findAll();
		model.addAttribute("navbarHeaders", navbarHeaders);
		return navbarHeaders; // Show all navbar headers in a table
	}
	
	
	
	
	public String getMethodName(@RequestParam String param) {
		return new String();
	}
	
}
