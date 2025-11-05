package com.smartmeter.model;
import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * MasRole entity. @author MyEclipse Persistence Tools
 */

@Entity
public class MasRole implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer roleId;
	private String roleType;
	private String insertedBy;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private Timestamp insertedDate;

	// Constructors

	/** default constructor */
	public MasRole() {
	}

	/** minimal constructor */

	/** full constructor */
	public MasRole(Integer roleId, String roleType, String insertedBy,
			Timestamp insertedDate) {
		this.roleType = roleType;
		this.insertedBy = insertedBy;
		this.insertedDate = insertedDate;
	}

	// Property accessors


	public String getRoleType() {
		return this.roleType;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public String getInsertedBy() {
		return this.insertedBy;
	}

	public void setInsertedBy(String insertedBy) {
		this.insertedBy = insertedBy;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

}