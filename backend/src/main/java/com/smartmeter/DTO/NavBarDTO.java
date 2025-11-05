package com.smartmeter.DTO;

import java.util.List;

public class NavBarDTO {

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
	private List<NavBarDTO> subItems;
	
	
	public NavBarDTO(Integer navbarId, String name, String controllerName, String actionName, String area,
			String imageClass, String status, Integer parentId, String isParent, String haschild, String moduleName,
			Integer navbarHeaderid) {
		super();
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
	public NavBarDTO(Integer navbarId, String name, String controllerName, String actionName, String area,
			String imageClass, String status, Integer parentId, String isParent, String haschild, String moduleName,
			Integer navbarHeaderid,List<NavBarDTO> subItems) {
		super();
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
		this.subItems = subItems;
	}
	public Integer getNavbarId() {
		return navbarId;
	}
	public String getName() {
		return name;
	}
	public String getControllerName() {
		return controllerName;
	}
	public String getActionName() {
		return actionName;
	}
	public String getArea() {
		return area;
	}
	public String getImageClass() {
		return imageClass;
	}
	public String getStatus() {
		return status;
	}
	public Integer getParentId() {
		return parentId;
	}
	public String getIsParent() {
		return isParent;
	}
	public String getHaschild() {
		return haschild;
	}
	public String getModuleName() {
		return moduleName;
	}
	public Integer getNavbarHeaderid() {
		return navbarHeaderid;
	}
	public void setNavbarId(Integer navbarId) {
		this.navbarId = navbarId;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setControllerName(String controllerName) {
		this.controllerName = controllerName;
	}
	public void setActionName(String actionName) {
		this.actionName = actionName;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public void setImageClass(String imageClass) {
		this.imageClass = imageClass;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public void setIsParent(String isParent) {
		this.isParent = isParent;
	}
	public void setHaschild(String haschild) {
		this.haschild = haschild;
	}
	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	public void setNavbarHeaderid(Integer navbarHeaderid) {
		this.navbarHeaderid = navbarHeaderid;
	}
	public List<NavBarDTO> getSubItems() {
		return subItems;
	}
	public void setSubItems(List<NavBarDTO> subItems) {
		this.subItems = subItems;
	}
	
	
}
