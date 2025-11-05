package com.smartmeter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * NavbarHeader entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "navbar_header_new")  // Ensure this matches your actual table name
public class NavbarHeader implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	 
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment ID
	    @Column(name = "navbar_headerid") 
	private Integer navbarHeaderid;
	private String name;
	private String description;

	// Constructors

	/** default constructor */
	public NavbarHeader() {
	}

	/** minimal constructor */
	public NavbarHeader(Integer navbarHeaderid, String name) {
		this.navbarHeaderid = navbarHeaderid;
		this.name = name;
	}

	/** full constructor */
	public NavbarHeader(Integer navbarHeaderid, String name, String description) {
		this.navbarHeaderid = navbarHeaderid;
		this.name = name;
		this.description = description;
	}

	// Property accessors

	public Integer getNavbarHeaderid() {
		return this.navbarHeaderid;
	}

	public void setNavbarHeaderid(Integer navbarHeaderid) {
		this.navbarHeaderid = navbarHeaderid;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
}