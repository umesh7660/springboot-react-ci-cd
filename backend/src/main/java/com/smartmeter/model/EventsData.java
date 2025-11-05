package com.smartmeter.model;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * EventsData entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "events_data")
public class EventsData implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private EventsDataId id;
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
	private Integer requestId;

	// Constructors

	/** default constructor */
	public EventsData() {
	}

	/** minimal constructor */
	public EventsData(EventsDataId id) {
		this.id = id;
	}

	/** full constructor */
	public EventsData(EventsDataId id, Date eventDate, String eventDescription, Double voltageRPhase,
			Double voltageYPhase, Double voltageBPhase, Double currentRPhase, Double currentYPhase,
			Double currentBPhase, Double pfRPhase, Double pfYPhase, Double pfBPhase, Double activecurrentRPhase,
			Double activecurrentYPhase, Double activecurrentBPhase, Double kwhImport, Double kwhExport,
			Double kvahImport, Double kvahExport, Integer tamperCount, Double neutralCurrent, Double totalPf,
			Integer temperature, Timestamp insertedDate, String accountNo, String extraField1, String extraField2,
			String extraField3, String eventStatus,Integer requestId) {
		this.id = id;
		this.eventDate = eventDate;
		this.eventDescription = eventDescription;
		this.voltageRPhase = voltageRPhase;
		this.voltageYPhase = voltageYPhase;
		this.voltageBPhase = voltageBPhase;
		this.currentRPhase = currentRPhase;
		this.currentYPhase = currentYPhase;
		this.currentBPhase = currentBPhase;
		this.pfRPhase = pfRPhase;
		this.pfYPhase = pfYPhase;
		this.pfBPhase = pfBPhase;
		this.activecurrentRPhase = activecurrentRPhase;
		this.activecurrentYPhase = activecurrentYPhase;
		this.activecurrentBPhase = activecurrentBPhase;
		this.kwhImport = kwhImport;
		this.kwhExport = kwhExport;
		this.kvahImport = kvahImport;
		this.kvahExport = kvahExport;
		this.tamperCount = tamperCount;
		this.neutralCurrent = neutralCurrent;
		this.totalPf = totalPf;
		this.temperature = temperature;
		this.insertedDate = insertedDate;
		this.accountNo = accountNo;
		this.extraField1 = extraField1;
		this.extraField2 = extraField2;
		this.extraField3 = extraField3;
		this.eventStatus = eventStatus;
		this.requestId = requestId;
	}

	// Property accessors

	public EventsDataId getId() {
		return this.id;
	}

	public void setId(EventsDataId id) {
		this.id = id;
	}

	public Date getEventDate() {
		return this.eventDate;
	}

	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}

	public String getEventDescription() {
		return this.eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	public Double getVoltageRPhase() {
		return this.voltageRPhase;
	}

	public void setVoltageRPhase(Double voltageRPhase) {
		this.voltageRPhase = voltageRPhase;
	}

	public Double getVoltageYPhase() {
		return this.voltageYPhase;
	}

	public void setVoltageYPhase(Double voltageYPhase) {
		this.voltageYPhase = voltageYPhase;
	}

	public Double getVoltageBPhase() {
		return this.voltageBPhase;
	}

	public void setVoltageBPhase(Double voltageBPhase) {
		this.voltageBPhase = voltageBPhase;
	}

	public Double getCurrentRPhase() {
		return this.currentRPhase;
	}

	public void setCurrentRPhase(Double currentRPhase) {
		this.currentRPhase = currentRPhase;
	}

	public Double getCurrentYPhase() {
		return this.currentYPhase;
	}

	public void setCurrentYPhase(Double currentYPhase) {
		this.currentYPhase = currentYPhase;
	}

	public Double getCurrentBPhase() {
		return this.currentBPhase;
	}

	public void setCurrentBPhase(Double currentBPhase) {
		this.currentBPhase = currentBPhase;
	}

	public Double getPfRPhase() {
		return this.pfRPhase;
	}

	public void setPfRPhase(Double pfRPhase) {
		this.pfRPhase = pfRPhase;
	}

	public Double getPfYPhase() {
		return this.pfYPhase;
	}

	public void setPfYPhase(Double pfYPhase) {
		this.pfYPhase = pfYPhase;
	}

	public Double getPfBPhase() {
		return this.pfBPhase;
	}

	public void setPfBPhase(Double pfBPhase) {
		this.pfBPhase = pfBPhase;
	}

	public Double getActivecurrentRPhase() {
		return this.activecurrentRPhase;
	}

	public void setActivecurrentRPhase(Double activecurrentRPhase) {
		this.activecurrentRPhase = activecurrentRPhase;
	}

	public Double getActivecurrentYPhase() {
		return this.activecurrentYPhase;
	}

	public void setActivecurrentYPhase(Double activecurrentYPhase) {
		this.activecurrentYPhase = activecurrentYPhase;
	}

	public Double getActivecurrentBPhase() {
		return this.activecurrentBPhase;
	}

	public void setActivecurrentBPhase(Double activecurrentBPhase) {
		this.activecurrentBPhase = activecurrentBPhase;
	}

	public Double getKwhImport() {
		return this.kwhImport;
	}

	public void setKwhImport(Double kwhImport) {
		this.kwhImport = kwhImport;
	}

	public Double getKwhExport() {
		return this.kwhExport;
	}

	public void setKwhExport(Double kwhExport) {
		this.kwhExport = kwhExport;
	}

	public Double getKvahImport() {
		return this.kvahImport;
	}

	public void setKvahImport(Double kvahImport) {
		this.kvahImport = kvahImport;
	}

	public Double getKvahExport() {
		return this.kvahExport;
	}

	public void setKvahExport(Double kvahExport) {
		this.kvahExport = kvahExport;
	}

	public Integer getTamperCount() {
		return this.tamperCount;
	}

	public void setTamperCount(Integer tamperCount) {
		this.tamperCount = tamperCount;
	}

	public Double getNeutralCurrent() {
		return this.neutralCurrent;
	}

	public void setNeutralCurrent(Double neutralCurrent) {
		this.neutralCurrent = neutralCurrent;
	}

	public Double getTotalPf() {
		return this.totalPf;
	}

	public void setTotalPf(Double totalPf) {
		this.totalPf = totalPf;
	}

	public Integer getTemperature() {
		return this.temperature;
	}

	public void setTemperature(Integer temperature) {
		this.temperature = temperature;
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

	public String getEventStatus() {
		return this.eventStatus;
	}

	public void setEventStatus(String eventStatus) {
		this.eventStatus = eventStatus;
	}

	public Integer getRequestId() {
		return requestId;
	}

	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}

	
}