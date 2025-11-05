package com.smartmeter.DTO;

public class NavbarHeaderDTO {
	private String name;
	private String description;
	
	
	
	public NavbarHeaderDTO(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}
	public NavbarHeaderDTO() {
		// TODO Auto-generated constructor stub
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
