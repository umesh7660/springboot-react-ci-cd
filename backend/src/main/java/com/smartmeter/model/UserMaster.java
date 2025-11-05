package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "user_details")
public class UserMaster implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private UserMasterId id;
	private String fullName;
	private String password;
	private String emailAddress;
	private String cellPhone;
	private String city;
	private Integer roleId;
	private String roleType;
	private String userStatus;
	@Column(name = "level1_id")
	private Integer level1Id;
	@Column(name = "level2_id")
	private Integer level2Id;
	@Column(name = "level3_id")
	private Integer level3Id;
	@Column(name = "level4_id")
	private Integer level4Id;
	@Column(name = "level5_id")
	private Integer level5Id;
	@Column(name = "level6_id")
	private Integer level6Id;
	@Column(name = "level7_id")
	private Integer level7Id;
	@Column(name = "level8_id")
	private Integer level8Id;
	@Column(name = "level9_id")
	private Integer level9Id;
	@Column(name = "level10_id")
	private Integer level10Id;
	
	private String createdBy;
	private Timestamp creationDate;

	// Constructors

	/** default constructor */
	public UserMaster() {
	}

	/** minimal constructor */
	public UserMaster(UserMasterId id, Integer roleId,
			Integer scopeAccessvalueid) {
		this.id = id;
		this.roleId = roleId;
	}

	/** full constructor */
	public UserMaster(UserMasterId id, String fullName, String password,
			String emailAddress, String cellPhone, String officeLandline,
			String officeAddress, String department, String city,
			Integer roleId,String roleType, String userStatus, 
			Integer level1Id, Integer level2Id,
			Integer level3Id, Integer level4Id, Integer level5Id,
			Integer level6Id, Integer level7Id, Integer level8Id,
			Integer level9Id, Integer level10Id, String createdBy,
			Timestamp creationDate) {
		this.id = id;
		this.fullName = fullName;
		this.password = password;
		this.emailAddress = emailAddress;
		this.cellPhone = cellPhone;
		this.city = city;
		this.roleId = roleId;
		this.roleType = roleType;
		this.userStatus = userStatus;
		this.level1Id = level1Id;
		this.level2Id = level2Id;
		this.level3Id = level3Id;
		this.level4Id = level4Id;
		this.level5Id = level5Id;
		this.level6Id = level6Id;
		this.level7Id = level7Id;
		this.level8Id = level8Id;
		this.level9Id = level9Id;
		this.level10Id = level10Id;
		this.createdBy = createdBy;
		this.creationDate = creationDate;
	}

	// Property accessors

	public UserMasterId getId() {
		return this.id;
	}

	public void setId(UserMasterId id) {
		this.id = id;
	}

	public String getFullName() {
		return this.fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailAddress() {
		return this.emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getCellPhone() {
		return this.cellPhone;
	}

	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}

	
	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Integer getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	
	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public Integer getLevel1Id() {
		return this.level1Id;
	}

	public void setLevel1Id(Integer level1Id) {
		this.level1Id = level1Id;
	}

	public Integer getLevel2Id() {
		return this.level2Id;
	}

	public void setLevel2Id(Integer level2Id) {
		this.level2Id = level2Id;
	}

	public Integer getLevel3Id() {
		return this.level3Id;
	}

	public void setLevel3Id(Integer level3Id) {
		this.level3Id = level3Id;
	}

	public Integer getLevel4Id() {
		return this.level4Id;
	}

	public void setLevel4Id(Integer level4Id) {
		this.level4Id = level4Id;
	}

	public Integer getLevel5Id() {
		return this.level5Id;
	}

	public void setLevel5Id(Integer level5Id) {
		this.level5Id = level5Id;
	}

	public Integer getLevel6Id() {
		return this.level6Id;
	}

	public void setLevel6Id(Integer level6Id) {
		this.level6Id = level6Id;
	}

	public Integer getLevel7Id() {
		return this.level7Id;
	}

	public void setLevel7Id(Integer level7Id) {
		this.level7Id = level7Id;
	}

	public Integer getLevel8Id() {
		return this.level8Id;
	}

	public void setLevel8Id(Integer level8Id) {
		this.level8Id = level8Id;
	}

	public Integer getLevel9Id() {
		return this.level9Id;
	}

	public void setLevel9Id(Integer level9Id) {
		this.level9Id = level9Id;
	}

	public Integer getLevel10Id() {
		return this.level10Id;
	}

	public void setLevel10Id(Integer level10Id) {
		this.level10Id = level10Id;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Timestamp getCreationDate() {
		return this.creationDate;
	}

	public void setCreationDate(Timestamp creationDate) {
		this.creationDate = creationDate;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

}