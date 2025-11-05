package com.smartmeter.model;

import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;

/**
 * UserMasterId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class UserMasterId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	
	private String userLoginid;

	// Constructors

	/** default constructor */
	public UserMasterId() {
	}

	/** full constructor */
	public UserMasterId(String userLoginid) {
		this.userLoginid = userLoginid;
	}

	// Property accessors

	

	public String getUserLoginid() {
		return this.userLoginid;
	}

	public void setUserLoginid(String userLoginid) {
		this.userLoginid = userLoginid;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserMasterId))
			return false;
		UserMasterId castOther = (UserMasterId) other;

		return  ((this.getUserLoginid() == castOther.getUserLoginid()) || (this
						.getUserLoginid() != null
						&& castOther.getUserLoginid() != null && this
						.getUserLoginid().equals(castOther.getUserLoginid())));
	}

	public int hashCode() {
		int result = 17;

		result = 37
				* result
				+ (getUserLoginid() == null ? 0 : this.getUserLoginid()
						.hashCode());
		return result;
	}

}