package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * EventsSummaryData entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "events_summary_data")
public class EventsSummaryData implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private EventsSummaryDataId id;
	private Timestamp eventResdatetime;
	private Integer duration;
	private String eventDescription;
	private Double voltageRPhaseOcc;
	private Double voltageYPhaseOcc;
	private Double voltageBPhaseOcc;
	private Double currentRPhaseOcc;
	private Double currentYPhaseOcc;
	private Double currentBPhaseOcc;
	private Double pfRPhaseOcc;
	private Double pfYPhaseOcc;
	private Double pfBPhaseOcc;
	private Double activecurrentRPhaseOcc;
	private Double activecurrentYPhaseOcc;
	private Double activecurrentBPhaseOcc;
	private Double kwhImportOcc;
	private Double kwhExportOcc;
	private Double kvahImportOcc;
	private Double kvahExportOcc;
	private Double neutralCurrentOcc;
	private Double voltageRPhaseRes;
	private Double voltageYPhaseRes;
	private Double voltageBPhaseRes;
	private Double currentRPhaseRes;
	private Double currentYPhaseRes;
	private Double currentBPhaseRes;
	private Double pfRPhaseRes;
	private Double pfYPhaseRes;
	private Double pfBPhaseRes;
	private Double activecurrentRPhaseRes;
	private Double activecurrentYPhaseRes;
	private Double activecurrentBPhaseRes;
	private Double kwhImportRes;
	private Double kwhExportRes;
	private Double kvahImportRes;
	private Double kvahExportRes;
	private Double neutralCurrentRes;
	private Timestamp insertedDate;
	private String accountNo;
	private String extraField1;
	private String extraField2;
	private String extraField3;
	private Integer requestId;
	// Constructors

	/** default constructor */
	public EventsSummaryData() {
	}

	/** minimal constructor */
	public EventsSummaryData(EventsSummaryDataId id) {
		this.id = id;
	}

	/** full constructor */
	public EventsSummaryData(EventsSummaryDataId id,
			Timestamp eventResdatetime, Integer duration,
			String eventDescription, Double voltageRPhaseOcc,
			Double voltageYPhaseOcc, Double voltageBPhaseOcc,
			Double currentRPhaseOcc, Double currentYPhaseOcc,
			Double currentBPhaseOcc, Double pfRPhaseOcc, Double pfYPhaseOcc,
			Double pfBPhaseOcc, Double activecurrentRPhaseOcc,
			Double activecurrentYPhaseOcc, Double activecurrentBPhaseOcc,
			Double kwhImportOcc, Double kwhExportOcc, Double kvahImportOcc,
			Double kvahExportOcc, Double neutralCurrentOcc,
			Double voltageRPhaseRes, Double voltageYPhaseRes,
			Double voltageBPhaseRes, Double currentRPhaseRes,
			Double currentYPhaseRes, Double currentBPhaseRes,
			Double pfRPhaseRes, Double pfYPhaseRes, Double pfBPhaseRes,
			Double activecurrentRPhaseRes, Double activecurrentYPhaseRes,
			Double activecurrentBPhaseRes, Double kwhImportRes,
			Double kwhExportRes, Double kvahImportRes, Double kvahExportRes,
			Double neutralCurrentRes, Timestamp insertedDate, String accountNo,
			String extraField1, String extraField2, String extraField3,Integer requestId ) {
		this.id = id;
		this.eventResdatetime = eventResdatetime;
		this.duration = duration;
		this.eventDescription = eventDescription;
		this.voltageRPhaseOcc = voltageRPhaseOcc;
		this.voltageYPhaseOcc = voltageYPhaseOcc;
		this.voltageBPhaseOcc = voltageBPhaseOcc;
		this.currentRPhaseOcc = currentRPhaseOcc;
		this.currentYPhaseOcc = currentYPhaseOcc;
		this.currentBPhaseOcc = currentBPhaseOcc;
		this.pfRPhaseOcc = pfRPhaseOcc;
		this.pfYPhaseOcc = pfYPhaseOcc;
		this.pfBPhaseOcc = pfBPhaseOcc;
		this.activecurrentRPhaseOcc = activecurrentRPhaseOcc;
		this.activecurrentYPhaseOcc = activecurrentYPhaseOcc;
		this.activecurrentBPhaseOcc = activecurrentBPhaseOcc;
		this.kwhImportOcc = kwhImportOcc;
		this.kwhExportOcc = kwhExportOcc;
		this.kvahImportOcc = kvahImportOcc;
		this.kvahExportOcc = kvahExportOcc;
		this.neutralCurrentOcc = neutralCurrentOcc;
		this.voltageRPhaseRes = voltageRPhaseRes;
		this.voltageYPhaseRes = voltageYPhaseRes;
		this.voltageBPhaseRes = voltageBPhaseRes;
		this.currentRPhaseRes = currentRPhaseRes;
		this.currentYPhaseRes = currentYPhaseRes;
		this.currentBPhaseRes = currentBPhaseRes;
		this.pfRPhaseRes = pfRPhaseRes;
		this.pfYPhaseRes = pfYPhaseRes;
		this.pfBPhaseRes = pfBPhaseRes;
		this.activecurrentRPhaseRes = activecurrentRPhaseRes;
		this.activecurrentYPhaseRes = activecurrentYPhaseRes;
		this.activecurrentBPhaseRes = activecurrentBPhaseRes;
		this.kwhImportRes = kwhImportRes;
		this.kwhExportRes = kwhExportRes;
		this.kvahImportRes = kvahImportRes;
		this.kvahExportRes = kvahExportRes;
		this.neutralCurrentRes = neutralCurrentRes;
		this.insertedDate = insertedDate;
		this.accountNo = accountNo;
		this.extraField1 = extraField1;
		this.extraField2 = extraField2;
		this.extraField3 = extraField3;
		this.requestId = requestId;
	}

	// Property accessors

	public EventsSummaryDataId getId() {
		return this.id;
	}

	public void setId(EventsSummaryDataId id) {
		this.id = id;
	}

	public Timestamp getEventResdatetime() {
		return this.eventResdatetime;
	}

	public void setEventResdatetime(Timestamp eventResdatetime) {
		this.eventResdatetime = eventResdatetime;
	}

	public Integer getDuration() {
		return this.duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public String getEventDescription() {
		return this.eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	public Double getVoltageRPhaseOcc() {
		return this.voltageRPhaseOcc;
	}

	public void setVoltageRPhaseOcc(Double voltageRPhaseOcc) {
		this.voltageRPhaseOcc = voltageRPhaseOcc;
	}

	public Double getVoltageYPhaseOcc() {
		return this.voltageYPhaseOcc;
	}

	public void setVoltageYPhaseOcc(Double voltageYPhaseOcc) {
		this.voltageYPhaseOcc = voltageYPhaseOcc;
	}

	public Double getVoltageBPhaseOcc() {
		return this.voltageBPhaseOcc;
	}

	public void setVoltageBPhaseOcc(Double voltageBPhaseOcc) {
		this.voltageBPhaseOcc = voltageBPhaseOcc;
	}

	public Double getCurrentRPhaseOcc() {
		return this.currentRPhaseOcc;
	}

	public void setCurrentRPhaseOcc(Double currentRPhaseOcc) {
		this.currentRPhaseOcc = currentRPhaseOcc;
	}

	public Double getCurrentYPhaseOcc() {
		return this.currentYPhaseOcc;
	}

	public void setCurrentYPhaseOcc(Double currentYPhaseOcc) {
		this.currentYPhaseOcc = currentYPhaseOcc;
	}

	public Double getCurrentBPhaseOcc() {
		return this.currentBPhaseOcc;
	}

	public void setCurrentBPhaseOcc(Double currentBPhaseOcc) {
		this.currentBPhaseOcc = currentBPhaseOcc;
	}

	public Double getPfRPhaseOcc() {
		return this.pfRPhaseOcc;
	}

	public void setPfRPhaseOcc(Double pfRPhaseOcc) {
		this.pfRPhaseOcc = pfRPhaseOcc;
	}

	public Double getPfYPhaseOcc() {
		return this.pfYPhaseOcc;
	}

	public void setPfYPhaseOcc(Double pfYPhaseOcc) {
		this.pfYPhaseOcc = pfYPhaseOcc;
	}

	public Double getPfBPhaseOcc() {
		return this.pfBPhaseOcc;
	}

	public void setPfBPhaseOcc(Double pfBPhaseOcc) {
		this.pfBPhaseOcc = pfBPhaseOcc;
	}

	public Double getActivecurrentRPhaseOcc() {
		return this.activecurrentRPhaseOcc;
	}

	public void setActivecurrentRPhaseOcc(Double activecurrentRPhaseOcc) {
		this.activecurrentRPhaseOcc = activecurrentRPhaseOcc;
	}

	public Double getActivecurrentYPhaseOcc() {
		return this.activecurrentYPhaseOcc;
	}

	public void setActivecurrentYPhaseOcc(Double activecurrentYPhaseOcc) {
		this.activecurrentYPhaseOcc = activecurrentYPhaseOcc;
	}

	public Double getActivecurrentBPhaseOcc() {
		return this.activecurrentBPhaseOcc;
	}

	public void setActivecurrentBPhaseOcc(Double activecurrentBPhaseOcc) {
		this.activecurrentBPhaseOcc = activecurrentBPhaseOcc;
	}

	public Double getKwhImportOcc() {
		return this.kwhImportOcc;
	}

	public void setKwhImportOcc(Double kwhImportOcc) {
		this.kwhImportOcc = kwhImportOcc;
	}

	public Double getKwhExportOcc() {
		return this.kwhExportOcc;
	}

	public void setKwhExportOcc(Double kwhExportOcc) {
		this.kwhExportOcc = kwhExportOcc;
	}

	public Double getKvahImportOcc() {
		return this.kvahImportOcc;
	}

	public void setKvahImportOcc(Double kvahImportOcc) {
		this.kvahImportOcc = kvahImportOcc;
	}

	public Double getKvahExportOcc() {
		return this.kvahExportOcc;
	}

	public void setKvahExportOcc(Double kvahExportOcc) {
		this.kvahExportOcc = kvahExportOcc;
	}

	public Double getNeutralCurrentOcc() {
		return this.neutralCurrentOcc;
	}

	public void setNeutralCurrentOcc(Double neutralCurrentOcc) {
		this.neutralCurrentOcc = neutralCurrentOcc;
	}

	public Double getVoltageRPhaseRes() {
		return this.voltageRPhaseRes;
	}

	public void setVoltageRPhaseRes(Double voltageRPhaseRes) {
		this.voltageRPhaseRes = voltageRPhaseRes;
	}

	public Double getVoltageYPhaseRes() {
		return this.voltageYPhaseRes;
	}

	public void setVoltageYPhaseRes(Double voltageYPhaseRes) {
		this.voltageYPhaseRes = voltageYPhaseRes;
	}

	public Double getVoltageBPhaseRes() {
		return this.voltageBPhaseRes;
	}

	public void setVoltageBPhaseRes(Double voltageBPhaseRes) {
		this.voltageBPhaseRes = voltageBPhaseRes;
	}

	public Double getCurrentRPhaseRes() {
		return this.currentRPhaseRes;
	}

	public void setCurrentRPhaseRes(Double currentRPhaseRes) {
		this.currentRPhaseRes = currentRPhaseRes;
	}

	public Double getCurrentYPhaseRes() {
		return this.currentYPhaseRes;
	}

	public void setCurrentYPhaseRes(Double currentYPhaseRes) {
		this.currentYPhaseRes = currentYPhaseRes;
	}

	public Double getCurrentBPhaseRes() {
		return this.currentBPhaseRes;
	}

	public void setCurrentBPhaseRes(Double currentBPhaseRes) {
		this.currentBPhaseRes = currentBPhaseRes;
	}

	public Double getPfRPhaseRes() {
		return this.pfRPhaseRes;
	}

	public void setPfRPhaseRes(Double pfRPhaseRes) {
		this.pfRPhaseRes = pfRPhaseRes;
	}

	public Double getPfYPhaseRes() {
		return this.pfYPhaseRes;
	}

	public void setPfYPhaseRes(Double pfYPhaseRes) {
		this.pfYPhaseRes = pfYPhaseRes;
	}

	public Double getPfBPhaseRes() {
		return this.pfBPhaseRes;
	}

	public void setPfBPhaseRes(Double pfBPhaseRes) {
		this.pfBPhaseRes = pfBPhaseRes;
	}

	public Double getActivecurrentRPhaseRes() {
		return this.activecurrentRPhaseRes;
	}

	public void setActivecurrentRPhaseRes(Double activecurrentRPhaseRes) {
		this.activecurrentRPhaseRes = activecurrentRPhaseRes;
	}

	public Double getActivecurrentYPhaseRes() {
		return this.activecurrentYPhaseRes;
	}

	public void setActivecurrentYPhaseRes(Double activecurrentYPhaseRes) {
		this.activecurrentYPhaseRes = activecurrentYPhaseRes;
	}

	public Double getActivecurrentBPhaseRes() {
		return this.activecurrentBPhaseRes;
	}

	public void setActivecurrentBPhaseRes(Double activecurrentBPhaseRes) {
		this.activecurrentBPhaseRes = activecurrentBPhaseRes;
	}

	public Double getKwhImportRes() {
		return this.kwhImportRes;
	}

	public void setKwhImportRes(Double kwhImportRes) {
		this.kwhImportRes = kwhImportRes;
	}

	public Double getKwhExportRes() {
		return this.kwhExportRes;
	}

	public void setKwhExportRes(Double kwhExportRes) {
		this.kwhExportRes = kwhExportRes;
	}

	public Double getKvahImportRes() {
		return this.kvahImportRes;
	}

	public void setKvahImportRes(Double kvahImportRes) {
		this.kvahImportRes = kvahImportRes;
	}

	public Double getKvahExportRes() {
		return this.kvahExportRes;
	}

	public void setKvahExportRes(Double kvahExportRes) {
		this.kvahExportRes = kvahExportRes;
	}

	public Double getNeutralCurrentRes() {
		return this.neutralCurrentRes;
	}

	public void setNeutralCurrentRes(Double neutralCurrentRes) {
		this.neutralCurrentRes = neutralCurrentRes;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getAccountNo() {
		return this.accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public String getExtraField1() {
		return this.extraField1;
	}

	public void setExtraField1(String extraField1) {
		this.extraField1 = extraField1;
	}

	public String getExtraField2() {
		return this.extraField2;
	}

	public void setExtraField2(String extraField2) {
		this.extraField2 = extraField2;
	}

	public String getExtraField3() {
		return this.extraField3;
	}

	public void setExtraField3(String extraField3) {
		this.extraField3 = extraField3;
	}

	public Integer getRequestId() {
		return requestId;
	}

	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}

}