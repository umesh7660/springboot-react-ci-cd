package com.smartmeter.model;

public class MeterLocationDTO {
	private String meterNo;
	private String longitude;
	private String latitude;
	
	
	public MeterLocationDTO(String meterNo, String longitude, String latitude) {
		this.meterNo = meterNo;
		this.longitude = longitude;
		this.latitude = latitude;
	}
	public String getMeterNo() {
		return meterNo;
	}
	public String getLongitude() {
		return longitude;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	
}
