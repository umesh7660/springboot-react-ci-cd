package com.smartmeter.DTO;

import java.sql.Timestamp;

public class EventsSummaryDataDTO {

	
	private String meterNo;
	private String eventDescription;
	private String eventOccdatetime;
	private String eventResdatetime;
	private String duration;

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
	private String insertedDate;
	public String getMeterNo() {
		return meterNo;
	}
	public String getEventDescription() {
		return eventDescription;
	}
	public String getEventOccdatetime() {
		return eventOccdatetime;
	}
	public String getEventResdatetime() {
		return eventResdatetime;
	}
	public String getDuration() {
		return duration;
	}
	public Double getVoltageRPhaseOcc() {
		return voltageRPhaseOcc;
	}
	public Double getVoltageYPhaseOcc() {
		return voltageYPhaseOcc;
	}
	public Double getVoltageBPhaseOcc() {
		return voltageBPhaseOcc;
	}
	public Double getCurrentRPhaseOcc() {
		return currentRPhaseOcc;
	}
	public Double getCurrentYPhaseOcc() {
		return currentYPhaseOcc;
	}
	public Double getCurrentBPhaseOcc() {
		return currentBPhaseOcc;
	}
	public Double getPfRPhaseOcc() {
		return pfRPhaseOcc;
	}
	public Double getPfYPhaseOcc() {
		return pfYPhaseOcc;
	}
	public Double getPfBPhaseOcc() {
		return pfBPhaseOcc;
	}
	public Double getActivecurrentRPhaseOcc() {
		return activecurrentRPhaseOcc;
	}
	public Double getActivecurrentYPhaseOcc() {
		return activecurrentYPhaseOcc;
	}
	public Double getActivecurrentBPhaseOcc() {
		return activecurrentBPhaseOcc;
	}
	public Double getKwhImportOcc() {
		return kwhImportOcc;
	}
	public Double getKwhExportOcc() {
		return kwhExportOcc;
	}
	public Double getKvahImportOcc() {
		return kvahImportOcc;
	}
	public Double getKvahExportOcc() {
		return kvahExportOcc;
	}
	public Double getNeutralCurrentOcc() {
		return neutralCurrentOcc;
	}
	public Double getVoltageRPhaseRes() {
		return voltageRPhaseRes;
	}
	public Double getVoltageYPhaseRes() {
		return voltageYPhaseRes;
	}
	public Double getVoltageBPhaseRes() {
		return voltageBPhaseRes;
	}
	public Double getCurrentRPhaseRes() {
		return currentRPhaseRes;
	}
	public Double getCurrentYPhaseRes() {
		return currentYPhaseRes;
	}
	public Double getCurrentBPhaseRes() {
		return currentBPhaseRes;
	}
	public Double getPfRPhaseRes() {
		return pfRPhaseRes;
	}
	public Double getPfYPhaseRes() {
		return pfYPhaseRes;
	}
	public Double getPfBPhaseRes() {
		return pfBPhaseRes;
	}
	public Double getActivecurrentRPhaseRes() {
		return activecurrentRPhaseRes;
	}
	public Double getActivecurrentYPhaseRes() {
		return activecurrentYPhaseRes;
	}
	public Double getActivecurrentBPhaseRes() {
		return activecurrentBPhaseRes;
	}
	public Double getKwhImportRes() {
		return kwhImportRes;
	}
	public Double getKwhExportRes() {
		return kwhExportRes;
	}
	public Double getKvahImportRes() {
		return kvahImportRes;
	}
	public Double getKvahExportRes() {
		return kvahExportRes;
	}
	public Double getNeutralCurrentRes() {
		return neutralCurrentRes;
	}
	public String getInsertedDate() {
		return insertedDate;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}
	public void setEventOccdatetime(String eventOccdatetime) {
		this.eventOccdatetime = eventOccdatetime;
	}
	public void setEventResdatetime(String eventResdatetime) {
		this.eventResdatetime = eventResdatetime;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public void setVoltageRPhaseOcc(Double voltageRPhaseOcc) {
		this.voltageRPhaseOcc = voltageRPhaseOcc;
	}
	public void setVoltageYPhaseOcc(Double voltageYPhaseOcc) {
		this.voltageYPhaseOcc = voltageYPhaseOcc;
	}
	public void setVoltageBPhaseOcc(Double voltageBPhaseOcc) {
		this.voltageBPhaseOcc = voltageBPhaseOcc;
	}
	public void setCurrentRPhaseOcc(Double currentRPhaseOcc) {
		this.currentRPhaseOcc = currentRPhaseOcc;
	}
	public void setCurrentYPhaseOcc(Double currentYPhaseOcc) {
		this.currentYPhaseOcc = currentYPhaseOcc;
	}
	public void setCurrentBPhaseOcc(Double currentBPhaseOcc) {
		this.currentBPhaseOcc = currentBPhaseOcc;
	}
	public void setPfRPhaseOcc(Double pfRPhaseOcc) {
		this.pfRPhaseOcc = pfRPhaseOcc;
	}
	public void setPfYPhaseOcc(Double pfYPhaseOcc) {
		this.pfYPhaseOcc = pfYPhaseOcc;
	}
	public void setPfBPhaseOcc(Double pfBPhaseOcc) {
		this.pfBPhaseOcc = pfBPhaseOcc;
	}
	public void setActivecurrentRPhaseOcc(Double activecurrentRPhaseOcc) {
		this.activecurrentRPhaseOcc = activecurrentRPhaseOcc;
	}
	public void setActivecurrentYPhaseOcc(Double activecurrentYPhaseOcc) {
		this.activecurrentYPhaseOcc = activecurrentYPhaseOcc;
	}
	public void setActivecurrentBPhaseOcc(Double activecurrentBPhaseOcc) {
		this.activecurrentBPhaseOcc = activecurrentBPhaseOcc;
	}
	public void setKwhImportOcc(Double kwhImportOcc) {
		this.kwhImportOcc = kwhImportOcc;
	}
	public void setKwhExportOcc(Double kwhExportOcc) {
		this.kwhExportOcc = kwhExportOcc;
	}
	public void setKvahImportOcc(Double kvahImportOcc) {
		this.kvahImportOcc = kvahImportOcc;
	}
	public void setKvahExportOcc(Double kvahExportOcc) {
		this.kvahExportOcc = kvahExportOcc;
	}
	public void setNeutralCurrentOcc(Double neutralCurrentOcc) {
		this.neutralCurrentOcc = neutralCurrentOcc;
	}
	public void setVoltageRPhaseRes(Double voltageRPhaseRes) {
		this.voltageRPhaseRes = voltageRPhaseRes;
	}
	public void setVoltageYPhaseRes(Double voltageYPhaseRes) {
		this.voltageYPhaseRes = voltageYPhaseRes;
	}
	public void setVoltageBPhaseRes(Double voltageBPhaseRes) {
		this.voltageBPhaseRes = voltageBPhaseRes;
	}
	public void setCurrentRPhaseRes(Double currentRPhaseRes) {
		this.currentRPhaseRes = currentRPhaseRes;
	}
	public void setCurrentYPhaseRes(Double currentYPhaseRes) {
		this.currentYPhaseRes = currentYPhaseRes;
	}
	public void setCurrentBPhaseRes(Double currentBPhaseRes) {
		this.currentBPhaseRes = currentBPhaseRes;
	}
	public void setPfRPhaseRes(Double pfRPhaseRes) {
		this.pfRPhaseRes = pfRPhaseRes;
	}
	public void setPfYPhaseRes(Double pfYPhaseRes) {
		this.pfYPhaseRes = pfYPhaseRes;
	}
	public void setPfBPhaseRes(Double pfBPhaseRes) {
		this.pfBPhaseRes = pfBPhaseRes;
	}
	public void setActivecurrentRPhaseRes(Double activecurrentRPhaseRes) {
		this.activecurrentRPhaseRes = activecurrentRPhaseRes;
	}
	public void setActivecurrentYPhaseRes(Double activecurrentYPhaseRes) {
		this.activecurrentYPhaseRes = activecurrentYPhaseRes;
	}
	public void setActivecurrentBPhaseRes(Double activecurrentBPhaseRes) {
		this.activecurrentBPhaseRes = activecurrentBPhaseRes;
	}
	public void setKwhImportRes(Double kwhImportRes) {
		this.kwhImportRes = kwhImportRes;
	}
	public void setKwhExportRes(Double kwhExportRes) {
		this.kwhExportRes = kwhExportRes;
	}
	public void setKvahImportRes(Double kvahImportRes) {
		this.kvahImportRes = kvahImportRes;
	}
	public void setKvahExportRes(Double kvahExportRes) {
		this.kvahExportRes = kvahExportRes;
	}
	public void setNeutralCurrentRes(Double neutralCurrentRes) {
		this.neutralCurrentRes = neutralCurrentRes;
	}
	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}
	
	
}
