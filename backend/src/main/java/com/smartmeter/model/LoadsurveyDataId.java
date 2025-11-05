package com.smartmeter.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Embeddable;

/**
 * LoadsurveyDataValidationId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class LoadsurveyDataId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String meterNo;
	private Date lsDate;
	private Timestamp lsDatetime;
	private Integer interval;
	private Integer intervalid;
	private Integer ruleId;

	// Constructors

	/** default constructor */
	public LoadsurveyDataId() {
	}

	/** full constructor */
	public LoadsurveyDataId(String meterNo, Date lsDate,
			Timestamp lsDatetime, Integer interval, Integer intervalid,
			Integer ruleId) {
		this.meterNo = meterNo;
		this.lsDate = lsDate;
		this.lsDatetime = lsDatetime;
		this.interval = interval;
		this.intervalid = intervalid;
		this.ruleId = ruleId;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public Date getLsDate() {
		return this.lsDate;
	}

	public void setLsDate(Date lsDate) {
		this.lsDate = lsDate;
	}

	public Timestamp getLsDatetime() {
		return this.lsDatetime;
	}

	public void setLsDatetime(Timestamp lsDatetime) {
		this.lsDatetime = lsDatetime;
	}

	public Integer getInterval() {
		return this.interval;
	}

	public void setInterval(Integer interval) {
		this.interval = interval;
	}

	public Integer getIntervalid() {
		return this.intervalid;
	}

	public void setIntervalid(Integer intervalid) {
		this.intervalid = intervalid;
	}

	public Integer getRuleId() {
		return this.ruleId;
	}

	public void setRuleId(Integer ruleId) {
		this.ruleId = ruleId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof LoadsurveyDataId))
			return false;
		LoadsurveyDataId castOther = (LoadsurveyDataId) other;

		return ((this.getMeterNo() == castOther.getMeterNo()) || (this
				.getMeterNo() != null && castOther.getMeterNo() != null && this
				.getMeterNo().equals(castOther.getMeterNo())))
				&& ((this.getLsDate() == castOther.getLsDate()) || (this
						.getLsDate() != null && castOther.getLsDate() != null && this
						.getLsDate().equals(castOther.getLsDate())))
				&& ((this.getLsDatetime() == castOther.getLsDatetime()) || (this
						.getLsDatetime() != null
						&& castOther.getLsDatetime() != null && this
						.getLsDatetime().equals(castOther.getLsDatetime())))
				&& ((this.getInterval() == castOther.getInterval()) || (this
						.getInterval() != null
						&& castOther.getInterval() != null && this
						.getInterval().equals(castOther.getInterval())))
				&& ((this.getIntervalid() == castOther.getIntervalid()) || (this
						.getIntervalid() != null
						&& castOther.getIntervalid() != null && this
						.getIntervalid().equals(castOther.getIntervalid())))
				&& ((this.getRuleId() == castOther.getRuleId()) || (this
						.getRuleId() != null && castOther.getRuleId() != null && this
						.getRuleId().equals(castOther.getRuleId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		result = 37 * result
				+ (getLsDate() == null ? 0 : this.getLsDate().hashCode());
		result = 37
				* result
				+ (getLsDatetime() == null ? 0 : this.getLsDatetime()
						.hashCode());
		result = 37 * result
				+ (getInterval() == null ? 0 : this.getInterval().hashCode());
		result = 37
				* result
				+ (getIntervalid() == null ? 0 : this.getIntervalid()
						.hashCode());
		result = 37 * result
				+ (getRuleId() == null ? 0 : this.getRuleId().hashCode());
		return result;
	}

}