package com.smartmeter.DTO;

public class TamperEventsDTO {

	private String meterNo;

	private String eventCode;
	public String getEventDesc() {
		return eventDesc;
	}

	public void setEventDesc(String eventDesc) {
		this.eventDesc = eventDesc;
	}

	private String eventDesc;
	private String occDatetime;
	private String resDatetime;
	private String inserteddate;
	private String updated_date;
	private String status;

	public String getMeterNo() {
		return meterNo;
	}

	public String getEventCode() {
		return eventCode;
	}

	public String getOccDatetime() {
		return occDatetime;
	}

	public String getResDatetime() {
		return resDatetime;
	}

	public String getInserteddate() {
		return inserteddate;
	}

	public String getUpdated_date() {
		return updated_date;
	}

	public String getStatus() {
		return status;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public void setEventCode(String eventCode) {
		this.eventCode = eventCode;
	}

	public void setOccDatetime(String occDatetime) {
		this.occDatetime = occDatetime;
	}

	public void setResDatetime(String resDatetime) {
		this.resDatetime = resDatetime;
	}

	public void setInserteddate(String inserteddate) {
		this.inserteddate = inserteddate;
	}

	public void setUpdated_date(String updated_date) {
		this.updated_date = updated_date;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
