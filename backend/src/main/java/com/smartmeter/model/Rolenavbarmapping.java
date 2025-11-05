package com.smartmeter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Rolenavbarmapping entity. @author MyEclipse Persistence Tools
 */

@Entity
@Table(name = "rolenavbarmappingdata")
public class Rolenavbarmapping implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use IDENTITY for auto-increment in PostgreSQL
	private Integer rolenavbarmappingdataId;
	private Integer roleId;
	private Integer navbarId;
	private String isactive;


	/** default constructor */
	public Rolenavbarmapping() {
	}

	/** minimal constructor */
	public Rolenavbarmapping(Integer rolenavbarmappingId, Integer roleId,
			Integer navbarId) {
		this.roleId = roleId;
		this.navbarId = navbarId;
	}

	/** full constructor */
	public Rolenavbarmapping(Integer rolenavbarmappingId, Integer roleId,
			Integer navbarId, String isactive) {
		this.roleId = roleId;
		this.navbarId = navbarId;
		this.isactive = isactive;
	}

	// Property accessors

	

	public Integer getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public Integer getNavbarId() {
		return this.navbarId;
	}

	public void setNavbarId(Integer navbarId) {
		this.navbarId = navbarId;
	}

	public String getIsactive() {
		return this.isactive;
	}

	public void setIsactive(String isactive) {
		this.isactive = isactive;
	}

}