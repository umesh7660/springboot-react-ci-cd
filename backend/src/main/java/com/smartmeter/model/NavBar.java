package com.smartmeter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * NavBar entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "nav_bar_new")
public class NavBar implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment ID
	    @Column(name = "navbar_id") 
	private Integer navbarId;
	private String name;
	private String controllerName;
	private String actionName;
	private String area;
	private String imageClass;
	private String status;
	private Integer parentId;
	private String isParent;
	private String haschild;
	private String moduleName;
	private Integer navbarHeaderid;

	// Constructors

	/** default constructor */
	public NavBar() {
	}

	/** minimal constructor */
	public NavBar(Integer navbarId) {
		this.navbarId = navbarId;
	}

	/** full constructor */
	public NavBar(Integer navbarId, String name, String controllerName,
			String actionName, String area, String imageClass, String status,
			Integer parentId, String isParent, String haschild,
			String moduleName, Integer navbarHeaderid) {
		this.navbarId = navbarId;
		this.name = name;
		this.controllerName = controllerName;
		this.actionName = actionName;
		this.area = area;
		this.imageClass = imageClass;
		this.status = status;
		this.parentId = parentId;
		this.isParent = isParent;
		this.haschild = haschild;
		this.moduleName = moduleName;
		this.navbarHeaderid = navbarHeaderid;
	}

	// Property accessors

	public Integer getNavbarId() {
		return this.navbarId;
	}

	public void setNavbarId(Integer navbarId) {
		this.navbarId = navbarId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getControllerName() {
		return this.controllerName;
	}

	public void setControllerName(String controllerName) {
		this.controllerName = controllerName;
	}

	public String getActionName() {
		return this.actionName;
	}

	public void setActionName(String actionName) {
		this.actionName = actionName;
	}

	public String getArea() {
		return this.area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getImageClass() {
		return this.imageClass;
	}

	public void setImageClass(String imageClass) {
		this.imageClass = imageClass;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getParentId() {
		return this.parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getIsParent() {
		return this.isParent;
	}

	public void setIsParent(String isParent) {
		this.isParent = isParent;
	}

	public String getHaschild() {
		return this.haschild;
	}

	public void setHaschild(String haschild) {
		this.haschild = haschild;
	}

	public String getModuleName() {
		return this.moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public Integer getNavbarHeaderid() {
		return this.navbarHeaderid;
	}

	public void setNavbarHeaderid(Integer navbarHeaderid) {
		this.navbarHeaderid = navbarHeaderid;
	}

}