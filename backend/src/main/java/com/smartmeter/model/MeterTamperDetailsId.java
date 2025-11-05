package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Embeddable;

/**
 * MeterTamperDetailsId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class MeterTamperDetailsId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String meterNo;
	private String tamperCode;
	private Timestamp tamperDate;

	// Constructors

	/** default constructor */
	public MeterTamperDetailsId() {
	}

	/** full constructor */
	public MeterTamperDetailsId(String meterNo, String tamperCode,
			Timestamp tamperDate) {
		this.meterNo = meterNo;
		this.tamperCode = tamperCode;
		this.tamperDate = tamperDate;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public String getTamperCode() {
		return this.tamperCode;
	}

	public void setTamperCode(String tamperCode) {
		this.tamperCode = tamperCode;
	}

	public Timestamp getTamperDate() {
		return this.tamperDate;
	}

	public void setTamperDate(Timestamp tamperDate) {
		this.tamperDate = tamperDate;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof MeterTamperDetailsId))
			return false;
		MeterTamperDetailsId castOther = (MeterTamperDetailsId) other;

		return ((this.getMeterNo() == castOther.getMeterNo()) || (this
				.getMeterNo() != null && castOther.getMeterNo() != null && this
				.getMeterNo().equals(castOther.getMeterNo())))
				&& ((this.getTamperCode() == castOther.getTamperCode()) || (this
						.getTamperCode() != null
						&& castOther.getTamperCode() != null && this
						.getTamperCode().equals(castOther.getTamperCode())))
				&& ((this.getTamperDate() == castOther.getTamperDate()) || (this
						.getTamperDate() != null
						&& castOther.getTamperDate() != null && this
						.getTamperDate().equals(castOther.getTamperDate())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		result = 37
				* result
				+ (getTamperCode() == null ? 0 : this.getTamperCode()
						.hashCode());
		result = 37
				* result
				+ (getTamperDate() == null ? 0 : this.getTamperDate()
						.hashCode());
		return result;
	}

}