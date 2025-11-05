package com.smartmeter.model;

public class TampersPojo {
	private String meterNo;
	private String tamperCode;
	private String tamperDate;
	private String insertedDate;
	
	
	public TampersPojo(String meterNo, String tamperCode, String tamperDate, String insertedDate) {
		this.meterNo = meterNo;
		this.tamperCode = tamperCode;
		this.tamperDate = tamperDate;
		this.insertedDate = insertedDate;
	}
	public String getMeterNo() {
		return meterNo;
	}
	public String getTamperCode() {
		return tamperCode;
	}
	public String getTamperDate() {
		return tamperDate;
	}
	public String getInsertedDate() {
		return insertedDate;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public void setTamperCode(String tamperCode) {
		this.tamperCode = tamperCode;
	}
	public void setTamperDate(String tamperDate) {
		this.tamperDate = tamperDate;
	}
	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}
	

}
