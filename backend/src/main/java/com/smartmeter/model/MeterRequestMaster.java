package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * MeterRequestMaster entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="meter_request_master")
public class MeterRequestMaster implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	// Fields
@EmbeddedId
	private MeterRequestMasterId id;
	private Integer priorityType;
	private String status;
	private Timestamp requestsetDatetime;
	private Timestamp requestprocessDatetime;
	private Timestamp scheduleTime;
	private String requestType;
	private String inputField;
	private String outputField;
	private Timestamp insertedDate;
	private String insertedBy;
	private String modemManufacturername;
	private String value;

	// Constructors

	/** default constructor */
	public MeterRequestMaster() {
	}

	/** minimal constructor */
	public MeterRequestMaster(MeterRequestMasterId id, Integer priorityType,
			String status, Timestamp requestsetDatetime) {
		this.id = id;
		this.priorityType = priorityType;
		this.status = status;
		this.requestsetDatetime = requestsetDatetime;
	}

	/** full constructor */
	public MeterRequestMaster(MeterRequestMasterId id, Integer priorityType,
			String status, Timestamp requestsetDatetime,
			Timestamp requestprocessDatetime, Timestamp scheduleTime,
			String requestType, String inputField, String outputField,
			Timestamp insertedDate, String insertedBy,String modemManufacturername,String value) {
		this.id = id;
		this.priorityType = priorityType;
		this.status = status;
		this.requestsetDatetime = requestsetDatetime;
		this.requestprocessDatetime = requestprocessDatetime;
		this.scheduleTime = scheduleTime;
		this.requestType = requestType;
		this.inputField = inputField;
		this.outputField = outputField;
		this.insertedDate = insertedDate;
		this.insertedBy = insertedBy;
		this.modemManufacturername = modemManufacturername;
		this.value = value;
	}

	// Property accessors

	public MeterRequestMasterId getId() {
		return this.id;
	}

	public void setId(MeterRequestMasterId id) {
		this.id = id;
	}

	public Integer getPriorityType() {
		return this.priorityType;
	}

	public void setPriorityType(Integer priorityType) {
		this.priorityType = priorityType;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Timestamp getRequestsetDatetime() {
		return this.requestsetDatetime;
	}

	public void setRequestsetDatetime(Timestamp requestsetDatetime) {
		this.requestsetDatetime = requestsetDatetime;
	}

	public Timestamp getRequestprocessDatetime() {
		return this.requestprocessDatetime;
	}

	public void setRequestprocessDatetime(Timestamp requestprocessDatetime) {
		this.requestprocessDatetime = requestprocessDatetime;
	}

	public Timestamp getScheduleTime() {
		return this.scheduleTime;
	}

	public void setScheduleTime(Timestamp scheduleTime) {
		this.scheduleTime = scheduleTime;
	}

	public String getRequestType() {
		return this.requestType;
	}

	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}

	public String getInputField() {
		return this.inputField;
	}

	public void setInputField(String inputField) {
		this.inputField = inputField;
	}

	public String getOutputField() {
		return this.outputField;
	}

	public void setOutputField(String outputField) {
		this.outputField = outputField;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getInsertedBy() {
		return this.insertedBy;
	}

	public void setInsertedBy(String insertedBy) {
		this.insertedBy = insertedBy;
	}

	public String getModemManufacturername() {
		return modemManufacturername;
	}

	public void setModemManufacturername(String modemManufacturername) {
		this.modemManufacturername = modemManufacturername;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}