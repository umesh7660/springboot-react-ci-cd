package com.smartmeter.DTO;

public class LoadsurveyDataDTO {
	private String meterNo;
	//private Date lsDate;
	private String lsDatetime;
//	private Integer interval;
//	private Integer intervalid;
	private Double kwhImport;
	//private String kwhImportunit;
	private Double kwhExport;
	//private String kwhExportunit;
//	private Double blkengyQi;
//	private Double blkengyQii;
//	private Double blkengyQiii;
//	private Double blkengyQiv;
	private Double kvahImport;
	//private String kvahImportunit;
	private Double kvahExport;
	//private String kvahExportunit;
	private Double kvarhImport;
	//private String kvarhImportunit;
	private Double kvarhExport;
	//private String kvarhExportunit;

	private Double kwImport;
//	private String kwImportunit;
	private Double kwExport;
	//private String kwExportunit;
	private Double kvaImport;
	//private String kvaImportunit;
	private Double kvaExport;
//	private String kvaExportunit;
	private Double kvarImport;
	//private String kvarImportunit;
	private Double kvarExport;
	//private String kvarExportunit;
	private Double currentRPhase;
	private Double currentYPhase;
	private Double currentBPhase;
	private Double avgCurrent;
	private Double minCurrent;
	private Double maxCurrent;
	private Double voltageRPhase;
	private Double voltageYPhase;
	private Double voltageBPhase;
	private Double avgVoltage;
	private Double minVoltage;
	private Double maxVoltage;
	private Double pfRPhase;
	private Double pfYPhase;
	private Double pfBPhase;
	private Double avgPf;
	private Double avgFrequency;
	private Double neutralCurrent;
	private String insertedDate;
	private String accountNo;
	
	
//	private String extraField1;
//	private String extraField2;
//	private String extraField3;
//	private Double convertedKwhImport;
//	private Double convertedKwhExport;
//	private Double convertedKvahImport;
//	private Double convertedKvahExport;
//	private Double convertedKvarhImport;
//	private Double convertedKvarhExport;
//	private Double convertedKvarImport;
//	private Double convertedKvarExport;
//	private Double convertedKwImport;
//	private Double convertedKwExport;
//	private Double convertedKvaImport;
//	private Double convertedKvaExport;
	public String getMeterNo() {
		return meterNo;
	}

	public String getLsDatetime() {
		return lsDatetime;
	}
//	public Integer getInterval() {
//		return interval;
//	}
//	public Integer getIntervalid() {
//		return intervalid;
//	}
	
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
	
	public Double getKvarhImport() {
		return kvarhImport;
	}
	
	public Double getKvarhExport() {
		return kvarhExport;
	}
	
	public Double getKvarImport() {
		return kvarImport;
	}
	
	public Double getKvarExport() {
		return kvarExport;
	}
	
	public Double getKwImport() {
		return kwImport;
	}
	
	public Double getKwExport() {
		return kwExport;
	}
	
	public Double getKvaImport() {
		return kvaImport;
	}
	
	public Double getKvaExport() {
		return kvaExport;
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
	public Double getAvgCurrent() {
		return avgCurrent;
	}
	public Double getMinCurrent() {
		return minCurrent;
	}
	public Double getMaxCurrent() {
		return maxCurrent;
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
	public Double getAvgVoltage() {
		return avgVoltage;
	}
	public Double getMinVoltage() {
		return minVoltage;
	}
	public Double getMaxVoltage() {
		return maxVoltage;
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
	public Double getAvgPf() {
		return avgPf;
	}
	public Double getAvgFrequency() {
		return avgFrequency;
	}
	
	public String getInsertedDate() {
		return insertedDate;
	}
	public String getAccountNo() {
		return accountNo;
	}
	
//	public Double getConvertedKwhImport() {
//		return convertedKwhImport;
//	}
//	public Double getConvertedKwhExport() {
//		return convertedKwhExport;
//	}
//	public Double getConvertedKvahImport() {
//		return convertedKvahImport;
//	}
//	public Double getConvertedKvahExport() {
//		return convertedKvahExport;
//	}
//	public Double getConvertedKvarhImport() {
//		return convertedKvarhImport;
//	}
//	public Double getConvertedKvarhExport() {
//		return convertedKvarhExport;
//	}
//	public Double getConvertedKvarImport() {
//		return convertedKvarImport;
//	}
//	public Double getConvertedKvarExport() {
//		return convertedKvarExport;
//	}
//	public Double getConvertedKwImport() {
//		return convertedKwImport;
//	}
//	public Double getConvertedKwExport() {
//		return convertedKwExport;
//	}
//	public Double getConvertedKvaImport() {
//		return convertedKvaImport;
//	}
//	public Double getConvertedKvaExport() {
//		return convertedKvaExport;
//	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public void setLsDatetime(String lsDatetime) {
		this.lsDatetime = lsDatetime;
	}
//	public void setInterval(Integer interval) {
//		this.interval = interval;
//	}
//	public void setIntervalid(Integer intervalid) {
//		this.intervalid = intervalid;
//	}

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
	
	public void setKvarhImport(Double kvarhImport) {
		this.kvarhImport = kvarhImport;
	}
	
	public void setKvarhExport(Double kvarhExport) {
		this.kvarhExport = kvarhExport;
	}
	
	public void setKvarImport(Double kvarImport) {
		this.kvarImport = kvarImport;
	}

	public void setKvarExport(Double kvarExport) {
		this.kvarExport = kvarExport;
	}
	
	public void setKwImport(Double kwImport) {
		this.kwImport = kwImport;
	}

	public void setKwExport(Double kwExport) {
		this.kwExport = kwExport;
	}
	
	public void setKvaImport(Double kvaImport) {
		this.kvaImport = kvaImport;
	}
	
	public void setKvaExport(Double kvaExport) {
		this.kvaExport = kvaExport;
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
	public void setAvgCurrent(Double avgCurrent) {
		this.avgCurrent = avgCurrent;
	}
	public void setMinCurrent(Double minCurrent) {
		this.minCurrent = minCurrent;
	}
	public void setMaxCurrent(Double maxCurrent) {
		this.maxCurrent = maxCurrent;
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
	public void setAvgVoltage(Double avgVoltage) {
		this.avgVoltage = avgVoltage;
	}
	public void setMinVoltage(Double minVoltage) {
		this.minVoltage = minVoltage;
	}
	public void setMaxVoltage(Double maxVoltage) {
		this.maxVoltage = maxVoltage;
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
	public void setAvgPf(Double avgPf) {
		this.avgPf = avgPf;
	}
	public void setAvgFrequency(Double avgFrequency) {
		this.avgFrequency = avgFrequency;
	}
		
	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}	
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public Double getNeutralCurrent() {
		return neutralCurrent;
	}

	public void setNeutralCurrent(Double neutralCurrent) {
		this.neutralCurrent = neutralCurrent;
	}


	
	
	
//	public void setConvertedKwhImport(Double convertedKwhImport) {
//		this.convertedKwhImport = convertedKwhImport;
//	}
//	public void setConvertedKwhExport(Double convertedKwhExport) {
//		this.convertedKwhExport = convertedKwhExport;
//	}
//	public void setConvertedKvahImport(Double convertedKvahImport) {
//		this.convertedKvahImport = convertedKvahImport;
//	}
//	public void setConvertedKvahExport(Double convertedKvahExport) {
//		this.convertedKvahExport = convertedKvahExport;
//	}
//	public void setConvertedKvarhImport(Double convertedKvarhImport) {
//		this.convertedKvarhImport = convertedKvarhImport;
//	}
//	public void setConvertedKvarhExport(Double convertedKvarhExport) {
//		this.convertedKvarhExport = convertedKvarhExport;
//	}
//	public void setConvertedKvarImport(Double convertedKvarImport) {
//		this.convertedKvarImport = convertedKvarImport;
//	}
//	public void setConvertedKvarExport(Double convertedKvarExport) {
//		this.convertedKvarExport = convertedKvarExport;
//	}
//	public void setConvertedKwImport(Double convertedKwImport) {
//		this.convertedKwImport = convertedKwImport;
//	}
//	public void setConvertedKwExport(Double convertedKwExport) {
//		this.convertedKwExport = convertedKwExport;
//	}
//	public void setConvertedKvaImport(Double convertedKvaImport) {
//		this.convertedKvaImport = convertedKvaImport;
//	}
//	public void setConvertedKvaExport(Double convertedKvaExport) {
//		this.convertedKvaExport = convertedKvaExport;
//	}
	
	/*
	 * public void setExtraField1(String extraField1) { this.extraField1 =
	 * extraField1; } public void setExtraField2(String extraField2) {
	 * this.extraField2 = extraField2; } public void setExtraField3(String
	 * extraField3) { this.extraField3 = extraField3; } public Date getLsDate() {
	 * return lsDate; } public String getKwhImportunit() { return kwhImportunit; }
	 * public void setKvarImportunit(String kvarImportunit) { this.kvarImportunit =
	 * kvarImportunit; } public void setKwImportunit(String kwImportunit) {
	 * this.kwImportunit = kwImportunit; } public void setKwImportunit(String
	 * kwImportunit) { this.kwImportunit = kwImportunit; } public void
	 * setKwExportunit(String kwExportunit) { this.kwExportunit = kwExportunit; }
	 * public void setKvaImportunit(String kvaImportunit) { this.kvaImportunit =
	 * kvaImportunit; } public void setKvaExportunit(String kvaExportunit) {
	 * this.kvaExportunit = kvaExportunit; } public void setKwhImportunit(String
	 * kwhImportunit) { this.kwhImportunit = kwhImportunit; } public void
	 * setKwhExportunit(String kwhExportunit) { this.kwhExportunit = kwhExportunit;
	 * } public void setBlkengyQi(Double blkengyQi) { this.blkengyQi = blkengyQi; }
	 * public void setBlkengyQii(Double blkengyQii) { this.blkengyQii = blkengyQii;
	 * } public void setBlkengyQiii(Double blkengyQiii) { this.blkengyQiii =
	 * blkengyQiii; } public void setBlkengyQiv(Double blkengyQiv) { this.blkengyQiv
	 * = blkengyQiv; } public void setKvahImportunit(String kvahImportunit) {
	 * this.kvahImportunit = kvahImportunit; } public void setKvahExportunit(String
	 * kvahExportunit) { this.kvahExportunit = kvahExportunit; } public void
	 * setKvarhImportunit(String kvarhImportunit) { this.kvarhImportunit =
	 * kvarhImportunit; } public void setKvarhExportunit(String kvarhExportunit) {
	 * this.kvarhExportunit = kvarhExportunit; } public String getExtraField1() {
	 * return extraField1; } public String getExtraField2() { return extraField2; }
	 * public String getExtraField3() { return extraField3; } public void
	 * setLsDate(Date lsDate) { this.lsDate = lsDate; } public String
	 * getKwhExportunit() { return kwhExportunit; } public Double getBlkengyQi() {
	 * return blkengyQi; } public Double getBlkengyQii() { return blkengyQii; }
	 * public Double getBlkengyQiii() { return blkengyQiii; } public Double
	 * getBlkengyQiv() { return blkengyQiv; } public String getKvahImportunit() {
	 * return kvahImportunit; } public String getKvahExportunit() { return
	 * kvahExportunit; } public String getKvarhImportunit() { return
	 * kvarhImportunit; } public String getKvarhExportunit() { return
	 * kvarhExportunit; } public String getKvarImportunit() { return kvarImportunit;
	 * } public String getKvarExportunit() { return kvarExportunit; } public String
	 * getKwImportunit() { return kwImportunit; } public String getKwExportunit() {
	 * return kwExportunit; } public String getKvaImportunit() { return
	 * kvaImportunit; } public String getKvaExportunit() { return kvaExportunit; }
	 */
}
