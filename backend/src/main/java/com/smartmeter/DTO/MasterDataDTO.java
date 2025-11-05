package com.smartmeter.DTO;

public class MasterDataDTO {

	    private String meterNo;
	    private String consumerName;
	    private String consumerNo;
	    private String modemNumber;
	    private String address;
	    private String category;
	    private int subCategory;  // Changed from Integer to int
	    private double cdKva;      // Changed from Double to double
	    private double mf;         // Changed from Double to double
	    private String make;
	    private String phase;
	    private String connectionDate;  // Changed from Timestamp to Date
	    private String substationName;
	    private String substationCode;
	    private String feederCode;
	    private String feederName;
	    private String dtrCode;
	    private String dtrName;
	    private String modemMdn;
	    private String simProviderName;

	    public MasterDataDTO(String meterNo, String consumerName, String consumerNo, String modemNumber, 
	                         String address, String category, int subCategory, double cdKva, double mf, 
	                         String make, String phase, String connectionDate, String substationName, 
	                         String substationCode, String feederCode, String feederName, String dtrCode, 
	                         String dtrName, String modemMdn, String simProviderName) {
	        this.meterNo = meterNo;
	        this.consumerName = consumerName;
	        this.consumerNo = consumerNo;
	        this.modemNumber = modemNumber;
	        this.address = address;
	        this.category = category;
	        this.subCategory = subCategory;
	        this.cdKva = cdKva;
	        this.mf = mf;
	        this.make = make;
	        this.phase = phase;
	        this.connectionDate = connectionDate;
	        this.substationName = substationName;
	        this.substationCode = substationCode;
	        this.feederCode = feederCode;
	        this.feederName = feederName;
	        this.dtrCode = dtrCode;
	        this.dtrName = dtrName;
	        this.modemMdn = modemMdn;
	        this.simProviderName = simProviderName;
	    }
	


	public String getMeterNo() {
		return meterNo;
	}

	public String getConsumerNo() {
		return consumerNo;
	}
	public String getConsumerName() {
		return consumerName;
	}
	public String getAddress() {
		return address;
	}
	public String getCategory() {
		return category;
	}
	public Integer getSubCategory() {
		return subCategory;
	}
	public Double getCdKva() {
		return cdKva;
	}
	public Double getMf() {
		return mf;
	}
	public String getMake() {
		return make;
	}
	public String getPhase() {
		return phase;
	}
	public String getConnectionDate() {
		return connectionDate;
	}
	public String getSubstationName() {
		return substationName;
	}
	public String getSubstationCode() {
		return substationCode;
	}
	public String getFeederCode() {
		return feederCode;
	}
	public String getFeederName() {
		return feederName;
	}
	public String getDtrCode() {
		return dtrCode;
	}
	public String getDtrName() {
		return dtrName;
	}
	public String getModemNumber() {
		return modemNumber;
	}
	public String getModemMdn() {
		return modemMdn;
	}
	public String getSimProviderName() {
		return simProviderName;
	}
	
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	
	public void setConsumerNo(String consumerNo) {
		this.consumerNo = consumerNo;
	}
	public void setConsumerName(String consumerName) {
		this.consumerName = consumerName;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public void setSubCategory(Integer subCategory) {
		this.subCategory = subCategory;
	}
	public void setCdKva(Double cdKva) {
		this.cdKva = cdKva;
	}
	public void setMf(Double mf) {
		this.mf = mf;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public void setPhase(String phase) {
		this.phase = phase;
	}
	public void setConnectionDate(String connectionDate) {
		this.connectionDate = connectionDate;
	}
	public void setSubstationName(String substationName) {
		this.substationName = substationName;
	}
	public void setSubstationCode(String substationCode) {
		this.substationCode = substationCode;
	}
	public void setFeederCode(String feederCode) {
		this.feederCode = feederCode;
	}
	public void setFeederName(String feederName) {
		this.feederName = feederName;
	}
	public void setDtrCode(String dtrCode) {
		this.dtrCode = dtrCode;
	}
	public void setDtrName(String dtrName) {
		this.dtrName = dtrName;
	}
	public void setModemNumber(String modemNumber) {
		this.modemNumber = modemNumber;
	}
	public void setModemMdn(String modemMdn) {
		this.modemMdn = modemMdn;
	}
	public void setSimProviderName(String simProviderName) {
		this.simProviderName = simProviderName;
	}
	
	

}
