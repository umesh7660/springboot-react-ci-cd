package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * RealtimeTamperMaster entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="realtime_tamper_master")
public class RealtimeTamperMaster implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@Id
	private String tamperCode;
	private String alarmCode;
	private String alarmStatus;
	private String ccEventId;
	private String tamperDescription;
	private String alarmDescription;
	private Timestamp insertedDate;

	// Constructors

	/** default constructor */
	public RealtimeTamperMaster() {
	}

	/** minimal constructor */
	public RealtimeTamperMaster(String tamperCode) {
		this.tamperCode = tamperCode;
	}

	/** full constructor */
	public RealtimeTamperMaster(String tamperCode, String alarmCode,
			String alarmStatus, String ccEventId, String tamperDescription,
			String alarmDescription, Timestamp insertedDate) {
		this.tamperCode = tamperCode;
		this.alarmCode = alarmCode;
		this.alarmStatus = alarmStatus;
		this.ccEventId = ccEventId;
		this.tamperDescription = tamperDescription;
		this.alarmDescription = alarmDescription;
		this.insertedDate = insertedDate;
	}

	// Property accessors

	public String getTamperCode() {
		return this.tamperCode;
	}

	public void setTamperCode(String tamperCode) {
		this.tamperCode = tamperCode;
	}

	public String getAlarmCode() {
		return this.alarmCode;
	}

	public void setAlarmCode(String alarmCode) {
		this.alarmCode = alarmCode;
	}

	public String getAlarmStatus() {
		return this.alarmStatus;
	}

	public void setAlarmStatus(String alarmStatus) {
		this.alarmStatus = alarmStatus;
	}

	public String getCcEventId() {
		return this.ccEventId;
	}

	public void setCcEventId(String ccEventId) {
		this.ccEventId = ccEventId;
	}

	public String getTamperDescription() {
		return this.tamperDescription;
	}

	public void setTamperDescription(String tamperDescription) {
		this.tamperDescription = tamperDescription;
	}

	public String getAlarmDescription() {
		return this.alarmDescription;
	}

	public void setAlarmDescription(String alarmDescription) {
		this.alarmDescription = alarmDescription;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

}