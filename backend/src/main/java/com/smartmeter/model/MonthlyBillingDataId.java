package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Embeddable;


/**
 * MonthlyBillingDataId entity. @author MyEclipse Persistence Tools
 */

@Embeddable
public class MonthlyBillingDataId  implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String meterNo;
	private Timestamp billingDate;

	// Constructors

	/** default constructor */
	public MonthlyBillingDataId() {
	}

	/** full constructor */
	public MonthlyBillingDataId(String meterNo, Timestamp billingDate) {
		this.meterNo = meterNo;
		this.billingDate = billingDate;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public Timestamp getBillingDate() {
		return this.billingDate;
	}

	public void setBillingDate(Timestamp billingDate) {
		this.billingDate = billingDate;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof MonthlyBillingDataId))
			return false;
		MonthlyBillingDataId castOther = (MonthlyBillingDataId) other;

		return ((this.getMeterNo() == castOther.getMeterNo()) || (this
				.getMeterNo() != null && castOther.getMeterNo() != null && this
				.getMeterNo().equals(castOther.getMeterNo())))
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
				+ (getBillingDate() == null ? 0 : this.getBillingDate()
						.hashCode());
		return result;
	}
}