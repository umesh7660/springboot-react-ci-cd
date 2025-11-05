package com.smartmeter.DTO;

import java.sql.Timestamp;
import java.util.Date;

public class EventDataDTO {

	private String meterNo;
    private Timestamp eventDatetime;
    private String eventCode;
    private Date eventDate;
    private String eventDescription;
    private Double voltageRPhase;
    private Double voltageYPhase;
    private Double voltageBPhase;
    private Double currentRPhase;
    private Double currentYPhase;
    private Double currentBPhase;
    private Double pfRPhase;
    private Double pfYPhase;
    private Double pfBPhase;
    private Double activecurrentRPhase;
    private Double activecurrentYPhase;
    private Double activecurrentBPhase;
    private Double kwhImport;
    private Double kwhExport;
    private Double kvahImport;
    private Double kvahExport;
    private Integer tamperCount;
    private Double neutralCurrent;
    private Double totalPf;
    private Integer temperature;
    private Timestamp insertedDate;
    private String accountNo;
    private String extraField1;
    private String extraField2;
    private String extraField3;
    private String eventStatus;
	public String getMeterNo() {
		return meterNo;
	}
	public Timestamp getEventDatetime() {
		return eventDatetime;
	}
	public String getEventCode() {
		return eventCode;
	}
	public Date getEventDate() {
		return eventDate;
	}
	public String getEventDescription() {
		return eventDescription;
	}
	public Double getVoltageRPhase() {
		return voltageRPhase;
	}
	public Double getVoltageYPhase() {
		return voltageYPhase;
	}
	public Double getVoltageBPhase() {
		return voltageBPhase;
	}
	public Double getCurrentRPhase() {
		return currentRPhase;
	}
	public Double getCurrentYPhase() {
		return currentYPhase;
	}
	public Double getCurrentBPhase() {
		return currentBPhase;
	}
	public Double getPfRPhase() {
		return pfRPhase;
	}
	public Double getPfYPhase() {
		return pfYPhase;
	}
	public Double getPfBPhase() {
		return pfBPhase;
	}
	public Double getActivecurrentRPhase() {
		return activecurrentRPhase;
	}
	public Double getActivecurrentYPhase() {
		return activecurrentYPhase;
	}
	public Double getActivecurrentBPhase() {
		return activecurrentBPhase;
	}
	public Double getKwhImport() {
		return kwhImport;
	}
	public Double getKwhExport() {
		return kwhExport;
	}
	public Double getKvahImport() {
		return kvahImport;
	}
	public Double getKvahExport() {
		return kvahExport;
	}
	public Integer getTamperCount() {
		return tamperCount;
	}
	public Double getNeutralCurrent() {
		return neutralCurrent;
	}
	public Double getTotalPf() {
		return totalPf;
	}
	public Integer getTemperature() {
		return temperature;
	}
	public Timestamp getInsertedDate() {
		return insertedDate;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public String getExtraField1() {
		return extraField1;
	}
	public String getExtraField2() {
		return extraField2;
	}
	public String getExtraField3() {
		return extraField3;
	}
	public String getEventStatus() {
		return eventStatus;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public void setEventDatetime(Timestamp eventDatetime) {
		this.eventDatetime = eventDatetime;
	}
	public void setEventCode(String eventCode) {
		this.eventCode = eventCode;
	}
	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}
	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}
	public void setVoltageRPhase(Double voltageRPhase) {
		this.voltageRPhase = voltageRPhase;
	}
	public void setVoltageYPhase(Double voltageYPhase) {
		this.voltageYPhase = voltageYPhase;
	}
	public void setVoltageBPhase(Double voltageBPhase) {
		this.voltageBPhase = voltageBPhase;
	}
	public void setCurrentRPhase(Double currentRPhase) {
		this.currentRPhase = currentRPhase;
	}
	public void setCurrentYPhase(Double currentYPhase) {
		this.currentYPhase = currentYPhase;
	}
	public void setCurrentBPhase(Double currentBPhase) {
		this.currentBPhase = currentBPhase;
	}
	public void setPfRPhase(Double pfRPhase) {
		this.pfRPhase = pfRPhase;
	}
	public void setPfYPhase(Double pfYPhase) {
		this.pfYPhase = pfYPhase;
	}
	public void setPfBPhase(Double pfBPhase) {
		this.pfBPhase = pfBPhase;
	}
	public void setActivecurrentRPhase(Double activecurrentRPhase) {
		this.activecurrentRPhase = activecurrentRPhase;
	}
	public void setActivecurrentYPhase(Double activecurrentYPhase) {
		this.activecurrentYPhase = activecurrentYPhase;
	}
	public void setActivecurrentBPhase(Double activecurrentBPhase) {
		this.activecurrentBPhase = activecurrentBPhase;
	}
	public void setKwhImport(Double kwhImport) {
		this.kwhImport = kwhImport;
	}
	public void setKwhExport(Double kwhExport) {
		this.kwhExport = kwhExport;
	}
	public void setKvahImport(Double kvahImport) {
		this.kvahImport = kvahImport;
	}
	public void setKvahExport(Double kvahExport) {
		this.kvahExport = kvahExport;
	}
	public void setTamperCount(Integer tamperCount) {
		this.tamperCount = tamperCount;
	}
	public void setNeutralCurrent(Double neutralCurrent) {
		this.neutralCurrent = neutralCurrent;
	}
	public void setTotalPf(Double totalPf) {
		this.totalPf = totalPf;
	}
	public void setTemperature(Integer temperature) {
		this.temperature = temperature;
	}
	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	public void setExtraField1(String extraField1) {
		this.extraField1 = extraField1;
	}
	public void setExtraField2(String extraField2) {
		this.extraField2 = extraField2;
	}
	public void setExtraField3(String extraField3) {
		this.extraField3 = extraField3;
	}
	public void setEventStatus(String eventStatus) {
		this.eventStatus = eventStatus;
	}

}
