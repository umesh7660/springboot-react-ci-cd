package com.smartmeter.DTO;

public class DailyBillingDataDTO {
	private String meterNo;
	private String billingDatetime;
	private String billingDate;
	private Double cumEngyKwhImp;
	private Double cumEngyKwhExp;
	private Double cumEngyKvahImp;
	private Double cumEngyKvahExp;
	/*
	 * private Double cumengyQi; private Double cumengyQii; private Double
	 * cumengyQiii; private Double cumengyQiv;
	 */

	

	
	private Double mdKwImport;
	private String mdKwImportDate;
	private Double mdKvaImport;
	private String mdKvaImportDate;
	private Double mdKwExport;
	private String mdKwExportDate;
	private Double mdKvaExport;
	private String mdKvaExportDate;
	private String accountNo;
	private String insertedDate;

	public String getMeterNo() {
		return meterNo;
	}
	public String getBillingDatetime() {
		return billingDatetime;
	}
	public String getBillingDate() {
		return billingDate;
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
	public void setBillingDatetime(String billingDatetime) {
		this.billingDatetime = billingDatetime;
	}
	public void setBillingDate(String billingDate) {
		this.billingDate = billingDate;
	}
	
	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	public Double getMdKwImport() {
		return mdKwImport;
	}
	public String getMdKwImportDate() {
		return mdKwImportDate;
	}
	public Double getMdKvaImport() {
		return mdKvaImport;
	}
	public String getMdKvaImportDate() {
		return mdKvaImportDate;
	}
	public Double getMdKwExport() {
		return mdKwExport;
	}
	public String getMdKwExportDate() {
		return mdKwExportDate;
	}
	public Double getMdKvaExport() {
		return mdKvaExport;
	}
	public String getMdKvaExportDate() {
		return mdKvaExportDate;
	}
	public void setMdKwImport(Double mdKwImport) {
		this.mdKwImport = mdKwImport;
	}
	public void setMdKwImportDate(String mdKwImportDate) {
		this.mdKwImportDate = mdKwImportDate;
	}
	public void setMdKvaImport(Double mdKvaImport) {
		this.mdKvaImport = mdKvaImport;
	}
	public void setMdKvaImportDate(String mdKvaImportDate) {
		this.mdKvaImportDate = mdKvaImportDate;
	}
	public void setMdKwExport(Double mdKwExport) {
		this.mdKwExport = mdKwExport;
	}
	public void setMdKwExportDate(String mdKwExportDate) {
		this.mdKwExportDate = mdKwExportDate;
	}
	public void setMdKvaExport(Double mdKvaExport) {
		this.mdKvaExport = mdKvaExport;
	}
	public void setMdKvaExportDate(String mdKvaExportDate) {
		this.mdKvaExportDate = mdKvaExportDate;
	}
	public Double getCumEngyKwhImp() {
		return cumEngyKwhImp;
	}
	public Double getCumEngyKwhExp() {
		return cumEngyKwhExp;
	}
	public Double getCumEngyKvahImp() {
		return cumEngyKvahImp;
	}
	public Double getCumEngyKvahExp() {
		return cumEngyKvahExp;
	}
	public void setCumEngyKwhImp(Double cumEngyKwhImp) {
		this.cumEngyKwhImp = cumEngyKwhImp;
	}
	public void setCumEngyKwhExp(Double cumEngyKwhExp) {
		this.cumEngyKwhExp = cumEngyKwhExp;
	}
	public void setCumEngyKvahImp(Double cumEngyKvahImp) {
		this.cumEngyKvahImp = cumEngyKvahImp;
	}
	public void setCumEngyKvahExp(Double cumEngyKvahExp) {
		this.cumEngyKvahExp = cumEngyKvahExp;
	}
	
	
	
	/*
	 * public void setCumengyQi(Double cumengyQi) { this.cumengyQi = cumengyQi; }
	 * public void setCumengyQii(Double cumengyQii) { this.cumengyQii = cumengyQii;
	 * } public void setCumengyQiii(Double cumengyQiii) { this.cumengyQiii =
	 * cumengyQiii; } public void setCumengyQiv(Double cumengyQiv) { this.cumengyQiv
	 * = cumengyQiv; } public Double getCumengyQi() { return cumengyQi; } public
	 * Double getCumengyQii() { return cumengyQii; } public Double getCumengyQiii()
	 * { return cumengyQiii; } public Double getCumengyQiv() { return cumengyQiv; }
	 */
	
}
