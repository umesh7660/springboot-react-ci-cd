// default package
package com.smartmeter.model;

import java.util.Date;

import javax.persistence.Embeddable;

/**
 * MasMetermasterDashboardId entity. @author MyEclipse Persistence Tools
 */

@Embeddable
public class MasMetermasterDashboardId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String meterNo;
	private Date meterDate;

	// Constructors

	/** default constructor */
	public MasMetermasterDashboardId() {
	}

	/** full constructor */
	public MasMetermasterDashboardId(String meterNo, Date meterDate) {
		this.meterNo = meterNo;
		this.meterDate = meterDate;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public Date getMeterDate() {
		return this.meterDate;
	}

	public void setMeterDate(Date meterDate) {
		this.meterDate = meterDate;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof MasMetermasterDashboardId))
			return false;
		MasMetermasterDashboardId castOther = (MasMetermasterDashboardId) other;

		return ((this.getMeterNo() == castOther.getMeterNo()) || (this
				.getMeterNo() != null && castOther.getMeterNo() != null && this
				.getMeterNo().equals(castOther.getMeterNo())))
				&& ((this.getMeterDate() == castOther.getMeterDate()) || (this
						.getMeterDate() != null
						&& castOther.getMeterDate() != null && this
						.getMeterDate().equals(castOther.getMeterDate())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		result = 37 * result
				+ (getMeterDate() == null ? 0 : this.getMeterDate().hashCode());
		return result;
	}

}