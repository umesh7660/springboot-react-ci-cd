package com.smartmeter.model;

public class CommunicationDataPojo {
	private String meterNo;
	private String meterDate;
	private String instantAvailable;
	private String billingAvailable;
	private String lsAvailable;
	private String eventsAvailable;
	private String insertedDate;
	private String dailybillingData;

	// Constructor
	/*
	 * public CommunicationDataPojo(String meterNo, Date meterDate, String
	 * instantAvailable, String billingAvailable, String lsAvailable, String
	 * eventsAvailable, Timestamp insertedDate, String dailyBillingData) {
	 */
	public CommunicationDataPojo(String meterNo, String meterDate, String instantAvailable, String billingAvailable,
			String lsAvailable, String eventsAvailable, String insertedDate,String dailybillingData) {
		this.meterNo = meterNo;
		this.meterDate = meterDate;
		this.instantAvailable = instantAvailable;
		this.billingAvailable = billingAvailable;
		this.lsAvailable = lsAvailable;
		this.eventsAvailable = eventsAvailable;
		this.insertedDate = insertedDate;
		this.dailybillingData = dailybillingData;

		/*
		 * this.lsAvailable = lsAvailable; this.eventsAvailable = eventsAvailable;
		 * this.insertedDate = insertedDate; this.dailyBillingData = dailyBillingData;
		 */
	}

	// Getters and Setters
	public String getMeterNo() {
		return meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public String getMeterDate() {
		return meterDate;
	}

	public void setMeterDate(String meterDate) {
		this.meterDate = meterDate;
	}

	public String getInstantAvailable() {
		return instantAvailable;
	}

	public void setInstantAvailable(String instantAvailable) {
		this.instantAvailable = instantAvailable;
	}

	public String getBillingAvailable() {
		return billingAvailable;
	}

	public void setBillingAvailable(String billingAvailable) {
		this.billingAvailable = billingAvailable;
	}

	public String getLsAvailable() {
		return lsAvailable;
	}

	public void setLsAvailable(String lsAvailable) {
		this.lsAvailable = lsAvailable;
	}

	public String getEventsAvailable() {
		return eventsAvailable;
	}

	public void setEventsAvailable(String eventsAvailable) {
		this.eventsAvailable = eventsAvailable;
	}

	public String getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getDailyBillingData() {
		return dailybillingData;
	}

	public void setDailyBillingData(String dailyBillingData) {
		this.dailybillingData = dailyBillingData;
	}
}
