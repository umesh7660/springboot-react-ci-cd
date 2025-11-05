package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * TamperMeterMaster entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "tamper_meter_master")
public class TamperMeterMaster implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@Id
	private String meterNo;
	private String tamperStatus;
	private Timestamp insertedDate;
	private Timestamp meterDate;

	// Constructors

	/** default constructor */
	public TamperMeterMaster() {
	}

	/** minimal constructor */
	public TamperMeterMaster(String meterNo) {
		this.meterNo = meterNo;
	}

	/** full constructor */
	public TamperMeterMaster(String meterNo, String tamperStatus,
			Timestamp insertedDate, Timestamp meterDate) {
		this.meterNo = meterNo;
		this.tamperStatus = tamperStatus;
		this.insertedDate = insertedDate;
		this.meterDate = meterDate;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public String getTamperStatus() {
		return this.tamperStatus;
	}

	public void setTamperStatus(String tamperStatus) {
		this.tamperStatus = tamperStatus;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

	public Timestamp getMeterDate() {
		return this.meterDate;
	}

	public void setMeterDate(Timestamp meterDate) {
		this.meterDate = meterDate;
	}

}