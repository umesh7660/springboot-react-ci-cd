package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * MeterTamperDetails entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "meter_tamper_details")
public class MeterTamperDetails implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	// Fields
	@EmbeddedId
	private MeterTamperDetailsId id;
	private Timestamp insertedDate;

	// Constructors

	/** default constructor */
	public MeterTamperDetails() {
	}

	/** minimal constructor */
	public MeterTamperDetails(MeterTamperDetailsId id) {
		this.id = id;
	}

	/** full constructor */
	public MeterTamperDetails(MeterTamperDetailsId id, Timestamp insertedDate) {
		this.id = id;
		this.insertedDate = insertedDate;
	}

	// Property accessors

	public MeterTamperDetailsId getId() {
		return this.id;
	}

	public void setId(MeterTamperDetailsId id) {
		this.id = id;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

}