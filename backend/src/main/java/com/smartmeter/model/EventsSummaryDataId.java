package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Embeddable;

/**
 * EventsSummaryDataId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class EventsSummaryDataId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String meterNo;
	private Timestamp eventOccdatetime;
	private String eventCode;

	// Constructors

	/** default constructor */
	public EventsSummaryDataId() {
	}

	/** full constructor */
	public EventsSummaryDataId(String meterNo, Timestamp eventOccdatetime,
			String eventCode) {
		this.meterNo = meterNo;
		this.eventOccdatetime = eventOccdatetime;
		this.eventCode = eventCode;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public Timestamp getEventOccdatetime() {
		return this.eventOccdatetime;
	}

	public void setEventOccdatetime(Timestamp eventOccdatetime) {
		this.eventOccdatetime = eventOccdatetime;
	}

	public String getEventCode() {
		return this.eventCode;
	}

	public void setEventCode(String eventCode) {
		this.eventCode = eventCode;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof EventsSummaryDataId))
			return false;
		EventsSummaryDataId castOther = (EventsSummaryDataId) other;

		return ((this.getMeterNo() == castOther.getMeterNo()) || (this
				.getMeterNo() != null && castOther.getMeterNo() != null && this
				.getMeterNo().equals(castOther.getMeterNo())))
				&& ((this.getEventOccdatetime() == castOther
						.getEventOccdatetime()) || (this.getEventOccdatetime() != null
						&& castOther.getEventOccdatetime() != null && this
						.getEventOccdatetime().equals(
								castOther.getEventOccdatetime())))
				&& ((this.getEventCode() == castOther.getEventCode()) || (this
						.getEventCode() != null
						&& castOther.getEventCode() != null && this
						.getEventCode().equals(castOther.getEventCode())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		result = 37
				* result
				+ (getEventOccdatetime() == null ? 0 : this
						.getEventOccdatetime().hashCode());
		result = 37 * result
				+ (getEventCode() == null ? 0 : this.getEventCode().hashCode());
		return result;
	}

}