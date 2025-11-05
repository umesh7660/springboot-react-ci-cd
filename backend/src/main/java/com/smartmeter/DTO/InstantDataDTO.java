package com.smartmeter.DTO;

public class InstantDataDTO {
	private String meterNo;
	private String instantDate;
	private Double voltageRphase;
	private Double voltageYphase;
	private Double voltageBphase;
	private Double currentRphase;
	private Double currentYphase;
	private Double currentBphase;
	private Double rphasePf;
	private Double yphasePf;
	private Double bphasePf;
	private Double averagePf;
	private Double activePower;
	private Double apparentPower;
	private Double reactivePower;
	private Double activeEnergyimp;
	private Double apparentEnergyimp;
	private Double reactiveEnergylagimp;
	private Double reactiveEnergyleadimp;
	private Double activeEnergyexp;
	private Double apparentEnergyexp;
	private Double reactiveEnergylagexp;
	private Double reactiveEnergyleadexp;
	private Double frequency;
	private String insertedDate;
	private String accountNo;

	private Double maxDemandKwImport;
	private String maxDemandKwImportDate;
	private Double maxDemandKvaImport;
	private String maxDemandKvaImportDate;
	private Double maxDemandKwExport;
	private String maxDemandKwExportDate;
	private Double maxDemandKvaExport;
	private String maxDemandKvaExportDate;

	private String noofPowerFailure;
	private String cumPowerFailureDuration;
	private Integer cumTamperCount;
	private Integer cumBillingDate;
	private Integer cumProgrammingCount;
	private String billingDate;

	private Double cumengyQi;
	private Double cumengyQii;
	private Double cumengyQiii;
	private Double cumengyQiv;
	private String CumPowerOnDuration;
	private String manufactureSpecific;
	private Double neutralCurrent;
	private Double angleOfL1L2;
	private Double angleOfL1L3;
	private String loadLimitStatus;
	private Double activethresholdLoadLimit;

	
	public Double getCumengyQi() {
		return cumengyQi;
	}

	public Double getCumengyQii() {
		return cumengyQii;
	}

	public Double getCumengyQiii() {
		return cumengyQiii;
	}

	public Double getCumengyQiv() {
		return cumengyQiv;
	}

	public void setCumengyQi(Double cumengyQi) {
		this.cumengyQi = cumengyQi;
	}

	public void setCumengyQii(Double cumengyQii) {
		this.cumengyQii = cumengyQii;
	}

	public void setCumengyQiii(Double cumengyQiii) {
		this.cumengyQiii = cumengyQiii;
	}

	public void setCumengyQiv(Double cumengyQiv) {
		this.cumengyQiv = cumengyQiv;
	}

	public String getMeterNo() {
		return meterNo;
	}

	public String getInstantDate() {
		return instantDate;
	}

	public Double getVoltageRphase() {
		return voltageRphase;
	}

	public Double getVoltageYphase() {
		return voltageYphase;
	}

	public Double getVoltageBphase() {
		return voltageBphase;
	}

	public Double getCurrentRphase() {
		return currentRphase;
	}

	public Double getCurrentYphase() {
		return currentYphase;
	}

	public Double getCurrentBphase() {
		return currentBphase;
	}

	public Double getRphasePf() {
		return rphasePf;
	}

	public Double getYphasePf() {
		return yphasePf;
	}

	public Double getBphasePf() {
		return bphasePf;
	}

	public Double getAveragePf() {
		return averagePf;
	}

	public Double getActivePower() {
		return activePower;
	}

	public Double getApparentPower() {
		return apparentPower;
	}

	public Double getReactivePower() {
		return reactivePower;
	}

	public Double getActiveEnergyimp() {
		return activeEnergyimp;
	}

	public Double getApparentEnergyimp() {
		return apparentEnergyimp;
	}

	public Double getReactiveEnergylagimp() {
		return reactiveEnergylagimp;
	}

	public Double getReactiveEnergyleadimp() {
		return reactiveEnergyleadimp;
	}

	public Double getActiveEnergyexp() {
		return activeEnergyexp;
	}

	public Double getApparentEnergyexp() {
		return apparentEnergyexp;
	}

	public Double getReactiveEnergylagexp() {
		return reactiveEnergylagexp;
	}

	public Double getReactiveEnergyleadexp() {
		return reactiveEnergyleadexp;
	}

	public Double getFrequency() {
		return frequency;
	}

	public String getInsertedDate() {
		return insertedDate;
	}

	public String getAccountNo() {
		return accountNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public void setInstantDate(String instantDate) {
		this.instantDate = instantDate;
	}

	public void setVoltageRphase(Double voltageRphase) {
		this.voltageRphase = voltageRphase;
	}

	public void setVoltageYphase(Double voltageYphase) {
		this.voltageYphase = voltageYphase;
	}

	public void setVoltageBphase(Double voltageBphase) {
		this.voltageBphase = voltageBphase;
	}

	public void setCurrentRphase(Double currentRphase) {
		this.currentRphase = currentRphase;
	}

	public void setCurrentYphase(Double currentYphase) {
		this.currentYphase = currentYphase;
	}

	public void setCurrentBphase(Double currentBphase) {
		this.currentBphase = currentBphase;
	}

	public void setRphasePf(Double rphasePf) {
		this.rphasePf = rphasePf;
	}

	public void setYphasePf(Double yphasePf) {
		this.yphasePf = yphasePf;
	}

	public void setBphasePf(Double bphasePf) {
		this.bphasePf = bphasePf;
	}

	public void setAveragePf(Double averagePf) {
		this.averagePf = averagePf;
	}

	public void setActivePower(Double activePower) {
		this.activePower = activePower;
	}

	public void setApparentPower(Double apparentPower) {
		this.apparentPower = apparentPower;
	}

	public void setReactivePower(Double reactivePower) {
		this.reactivePower = reactivePower;
	}

	public void setActiveEnergyimp(Double activeEnergyimp) {
		this.activeEnergyimp = activeEnergyimp;
	}

	public void setApparentEnergyimp(Double apparentEnergyimp) {
		this.apparentEnergyimp = apparentEnergyimp;
	}

	public void setReactiveEnergylagimp(Double reactiveEnergylagimp) {
		this.reactiveEnergylagimp = reactiveEnergylagimp;
	}

	public void setReactiveEnergyleadimp(Double reactiveEnergyleadimp) {
		this.reactiveEnergyleadimp = reactiveEnergyleadimp;
	}

	public void setActiveEnergyexp(Double activeEnergyexp) {
		this.activeEnergyexp = activeEnergyexp;
	}

	public void setApparentEnergyexp(Double apparentEnergyexp) {
		this.apparentEnergyexp = apparentEnergyexp;
	}

	public void setReactiveEnergylagexp(Double reactiveEnergylagexp) {
		this.reactiveEnergylagexp = reactiveEnergylagexp;
	}

	public void setReactiveEnergyleadexp(Double reactiveEnergyleadexp) {
		this.reactiveEnergyleadexp = reactiveEnergyleadexp;
	}

	public void setFrequency(Double frequency) {
		this.frequency = frequency;
	}

	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public Double getMaxDemandKwImport() {
		return maxDemandKwImport;
	}

	public String getMaxDemandKwImportDate() {
		return maxDemandKwImportDate;
	}

	public Double getMaxDemandKvaImport() {
		return maxDemandKvaImport;
	}

	public String getMaxDemandKvaImportDate() {
		return maxDemandKvaImportDate;
	}

	public Double getMaxDemandKwExport() {
		return maxDemandKwExport;
	}

	public String getMaxDemandKwExportDate() {
		return maxDemandKwExportDate;
	}

	public Double getMaxDemandKvaExport() {
		return maxDemandKvaExport;
	}

	public String getMaxDemandKvaExportDate() {
		return maxDemandKvaExportDate;
	}

	public void setMaxDemandKwImport(Double maxDemandKwImport) {
		this.maxDemandKwImport = maxDemandKwImport;
	}

	public void setMaxDemandKwImportDate(String maxDemandKwImportDate) {
		this.maxDemandKwImportDate = maxDemandKwImportDate;
	}

	public void setMaxDemandKvaImport(Double maxDemandKvaImport) {
		this.maxDemandKvaImport = maxDemandKvaImport;
	}

	public void setMaxDemandKvaImportDate(String maxDemandKvaImportDate) {
		this.maxDemandKvaImportDate = maxDemandKvaImportDate;
	}

	public void setMaxDemandKwExport(Double maxDemandKwExport) {
		this.maxDemandKwExport = maxDemandKwExport;
	}

	public void setMaxDemandKwExportDate(String maxDemandKwExportDate) {
		this.maxDemandKwExportDate = maxDemandKwExportDate;
	}

	public void setMaxDemandKvaExport(Double maxDemandKvaExport) {
		this.maxDemandKvaExport = maxDemandKvaExport;
	}

	public void setMaxDemandKvaExportDate(String maxDemandKvaExportDate) {
		this.maxDemandKvaExportDate = maxDemandKvaExportDate;
	}

	public String getNoofPowerFailure() {
		return noofPowerFailure;
	}

	public String getCumPowerFailureDuration() {
		return cumPowerFailureDuration;
	}

	public Integer getCumTamperCount() {
		return cumTamperCount;
	}

	public Integer getCumBillingDate() {
		return cumBillingDate;
	}

	public Integer getCumProgrammingCount() {
		return cumProgrammingCount;
	}

	public String getBillingDate() {
		return billingDate;
	}

	public String getCumPowerOnDuration() {
		return CumPowerOnDuration;
	}

	public String getManufactureSpecific() {
		return manufactureSpecific;
	}

	public Double getNeutralCurrent() {
		return neutralCurrent;
	}

	public Double getAngleOfL1L2() {
		return angleOfL1L2;
	}

	public Double getAngleOfL1L3() {
		return angleOfL1L3;
	}

	public String getLoadLimitStatus() {
		return loadLimitStatus;
	}

	public Double getActivethresholdLoadLimit() {
		return activethresholdLoadLimit;
	}

	public void setNoofPowerFailure(String noofPowerFailure) {
		this.noofPowerFailure = noofPowerFailure;
	}

	public void setCumPowerFailureDuration(String cumPowerFailureDuration) {
		this.cumPowerFailureDuration = cumPowerFailureDuration;
	}

	public void setCumTamperCount(Integer cumTamperCount) {
		this.cumTamperCount = cumTamperCount;
	}

	public void setCumBillingDate(Integer cumBillingDate) {
		this.cumBillingDate = cumBillingDate;
	}

	public void setCumProgrammingCount(Integer cumProgrammingCount) {
		this.cumProgrammingCount = cumProgrammingCount;
	}

	public void setBillingDate(String billingDate) {
		this.billingDate = billingDate;
	}

	public void setCumPowerOnDuration(String cumPowerOnDuration) {
		CumPowerOnDuration = cumPowerOnDuration;
	}

	public void setManufactureSpecific(String manufactureSpecific) {
		this.manufactureSpecific = manufactureSpecific;
	}

	public void setNeutralCurrent(Double neutralCurrent) {
		this.neutralCurrent = neutralCurrent;
	}

	public void setAngleOfL1L2(Double angleOfL1L2) {
		this.angleOfL1L2 = angleOfL1L2;
	}

	public void setAngleOfL1L3(Double angleOfL1L3) {
		this.angleOfL1L3 = angleOfL1L3;
	}

	public void setLoadLimitStatus(String loadLimitStatus) {
		this.loadLimitStatus = loadLimitStatus;
	}

	public void setActivethresholdLoadLimit(Double activethresholdLoadLimit) {
		this.activethresholdLoadLimit = activethresholdLoadLimit;
	}

	
	
}
