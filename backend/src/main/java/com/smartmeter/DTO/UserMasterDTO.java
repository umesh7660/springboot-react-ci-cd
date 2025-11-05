package com.smartmeter.DTO;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonFormat;

public class UserMasterDTO {

	private String userLoginid;
	private String fullName;
	private String password;
	private String emailAddress;
	private String cellPhone;

	private String city;
	private Integer roleId;
	private String roleType;
	private String profilePath;

	private String createdBy;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private Date creationDate;

	private String userStatus;
	private Integer level1Id;
	private Integer level2Id;
	private Integer level3Id;
	private Integer level4Id;
	private Integer level5Id;
	private Integer level6Id;
	private Integer level7Id;
	private Integer level8Id;
	private Integer level9Id;
	private Integer level10Id;

	// private Timestamp creationDate;

	public UserMasterDTO(String userLoginid, String fullName, String password, String emailAddress, String cellPhone,
			String city, String userStatus, Integer roleId, String createdBy, Timestamp creationDate) {
		this.userLoginid = userLoginid;
		this.fullName = fullName;
		this.password = password;
		this.emailAddress = emailAddress;
		this.cellPhone = cellPhone;
		this.city = city;
		this.userStatus = userStatus;
		this.roleId = roleId;
		this.createdBy = createdBy;
		this.creationDate = creationDate;
	}

	public UserMasterDTO(String userLoginid, String fullName, String password, String emailAddress, String cellPhone,
			String city, Integer roleId, String roleType, String userStatus, String profilePath, String createdBy,
			Date creationDate) {
		super();
		this.userLoginid = userLoginid;
		this.fullName = fullName;
		this.password = password;
		this.emailAddress = emailAddress;
		this.cellPhone = cellPhone;
		this.city = city;
		this.roleId = roleId;
		this.roleType = roleType;
		this.userStatus = userStatus;
		this.profilePath = profilePath;
		this.createdBy = createdBy;
		this.creationDate = creationDate;
	}

	public UserMasterDTO(String userLoginid, String fullName, String password, String emailAddress, String cellPhone,
			String city, Integer roleId, String roleType, String userStatus, MultipartFile profileImage,
			String createdBy, Date creationDate) {
		super();
		this.userLoginid = userLoginid;
		this.fullName = fullName;
		this.password = password;
		this.emailAddress = emailAddress;
		this.cellPhone = cellPhone;
		this.city = city;
		this.roleId = roleId;
		this.roleType = roleType;
		this.userStatus = userStatus;
		this.createdBy = createdBy;
		this.creationDate = creationDate;
	}

	public UserMasterDTO() {
		// TODO Auto-generated constructor stub
	}

	public String getUserLoginid() {
		return userLoginid;
	}

	public String getFullName() {
		return fullName;
	}

	public String getPassword() {
		return password;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public String getCellPhone() {
		return cellPhone;
	}

	public String getCity() {
		return city;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public Integer getLevel1Id() {
		return level1Id;
	}

	public Integer getLevel2Id() {
		return level2Id;
	}

	public Integer getLevel3Id() {
		return level3Id;
	}

	public Integer getLevel4Id() {
		return level4Id;
	}

	public Integer getLevel5Id() {
		return level5Id;
	}

	public Integer getLevel6Id() {
		return level6Id;
	}

	public Integer getLevel7Id() {
		return level7Id;
	}

	public Integer getLevel8Id() {
		return level8Id;
	}

	public Integer getLevel9Id() {
		return level9Id;
	}

	public Integer getLevel10Id() {
		return level10Id;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setUserLoginid(String userLoginid) {
		this.userLoginid = userLoginid;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

	public void setLevel1Id(Integer level1Id) {
		this.level1Id = level1Id;
	}

	public void setLevel2Id(Integer level2Id) {
		this.level2Id = level2Id;
	}

	public void setLevel3Id(Integer level3Id) {
		this.level3Id = level3Id;
	}

	public void setLevel4Id(Integer level4Id) {
		this.level4Id = level4Id;
	}

	public void setLevel5Id(Integer level5Id) {
		this.level5Id = level5Id;
	}

	public void setLevel6Id(Integer level6Id) {
		this.level6Id = level6Id;
	}

	public void setLevel7Id(Integer level7Id) {
		this.level7Id = level7Id;
	}

	public void setLevel8Id(Integer level8Id) {
		this.level8Id = level8Id;
	}

	public void setLevel9Id(Integer level9Id) {
		this.level9Id = level9Id;
	}

	public void setLevel10Id(Integer level10Id) {
		this.level10Id = level10Id;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getRoleType() {
		return roleType;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

	public String getProfilePath() {
		return profilePath;
	}

	public void setProfilePath(String profilePath) {
		this.profilePath = profilePath;
	}

}
