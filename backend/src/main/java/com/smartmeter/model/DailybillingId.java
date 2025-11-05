package com.smartmeter.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Embeddable;

/**
 * Dailybilling2016Id entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class DailybillingId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String meterNo;
	private Timestamp billingDatetime;
	private Date billingDate;

	// Constructors

	/** default constructor */
	public DailybillingId() {
	}

	/** full constructor */
	public DailybillingId(String meterNo, Timestamp billingDatetime,
			Date billingDate) {
		this.meterNo = meterNo;
		this.billingDatetime = billingDatetime;
		this.billingDate = billingDate;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public Timestamp getBillingDatetime() {
		return this.billingDatetime;
	}

	public void setBillingDatetime(Timestamp billingDatetime) {
		this.billingDatetime = billingDatetime;
	}

	public Date getBillingDate() {
		return this.billingDate;
	}

	public void setBillingDate(Date billingDate) {
		this.billingDate = billingDate;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof DailybillingId))
			return false;
		DailybillingId castOther = (DailybillingId) other;

		return ((this.getMeterNo() == castOther.getMeterNo()) || (this
				.getMeterNo() != null && castOther.getMeterNo() != null && this
				.getMeterNo().equals(castOther.getMeterNo())))
				&& ((this.getBillingDatetime() == castOther
						.getBillingDatetime()) || (this.getBillingDatetime() != null
						&& castOther.getBillingDatetime() != null && this
						.getBillingDatetime().equals(
								castOther.getBillingDatetime())))
				&& ((this.getBillingDate() == castOther.getBillingDate()) || (this
						.getBillingDate() != null
						&& castOther.getBillingDate() != null && this
						.getBillingDate().equals(castOther.getBillingDate())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		result = 37
				* result
				+ (getBillingDatetime() == null ? 0 : this.getBillingDatetime()
						.hashCode());
		result = 37
				* result
				+ (getBillingDate() == null ? 0 : this.getBillingDate()
						.hashCode());
		return result;
	}

}