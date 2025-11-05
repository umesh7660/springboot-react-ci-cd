package com.smartmeter.DTO;

public class OnDemandMaster {
	private String requestId;
	private String meterNo;
	private String commmandName;
	private String status;
	private String requestSetDateTime;
	private String requestProcessDateTime;
	private String responseStatus;
	private String value;

	
	
	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	public String getMeterNo() {
		return meterNo;
	}

	public String getCommmandName() {
		return commmandName;
	}

	public String getStatus() {
		return status;
	}

	public String getRequestSetDateTime() {
		return requestSetDateTime;
	}

	public String getRequestProcessDateTime() {
		return requestProcessDateTime;
	}

	public String getResponseStatus() {
		return responseStatus;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public void setCommmandName(String commmandName) {
		this.commmandName = commmandName;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setRequestSetDateTime(String requestSetDateTime) {
		this.requestSetDateTime = requestSetDateTime;
	}

	public void setRequestProcessDateTime(String requestProcessDateTime) {
		this.requestProcessDateTime = requestProcessDateTime;
	}

	public void setResponseStatus(String responseStatus) {
		this.responseStatus = responseStatus;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	
	
}
