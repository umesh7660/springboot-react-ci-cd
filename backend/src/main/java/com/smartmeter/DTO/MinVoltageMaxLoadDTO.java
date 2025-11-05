package com.smartmeter.DTO;

public class MinVoltageMaxLoadDTO {
	private String time;
	private Double minVoltage;
	private Double maxVoltage;
	private Double minCurrent;
	private Double maxCurrent;
	
	public MinVoltageMaxLoadDTO() {
	}
	public MinVoltageMaxLoadDTO(String time,Double minVoltage, Double maxVoltage, Double minCurrent, Double maxCurrent) {
		super();
		this.time=time;
		this.minVoltage = minVoltage;
		this.maxVoltage = maxVoltage;
		this.minCurrent = minCurrent;
		this.maxCurrent = maxCurrent;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Double getMinVoltage() {
		return minVoltage;
	}
	public Double getMaxVoltage() {
		return maxVoltage;
	}
	public Double getMinCurrent() {
		return minCurrent;
	}
	public Double getMaxCurrent() {
		return maxCurrent;
	}
	public void setMinVoltage(Double minVoltage) {
		this.minVoltage = minVoltage;
	}
	public void setMaxVoltage(Double maxVoltage) {
		this.maxVoltage = maxVoltage;
	}
	public void setMinCurrent(Double minCurrent) {
		this.minCurrent = minCurrent;
	}
	public void setMaxCurrent(Double maxCurrent) {
		this.maxCurrent = maxCurrent;
	}
	
}
