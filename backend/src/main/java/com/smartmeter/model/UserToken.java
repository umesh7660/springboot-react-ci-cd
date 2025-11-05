package com.smartmeter.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_tokens") 
public class UserToken {
	@Id
	private String userId;
	private String fcmToken;
	
	public UserToken(String userId, String fcmToken) {
		super();
		this.userId = userId;
		this.fcmToken = fcmToken;
	}
	public UserToken() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getUserId() {
		return userId;
	}
	public String getFcmToken() {
		return fcmToken;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setFcmToken(String fcmToken) {
		this.fcmToken = fcmToken;
	}
	
}
