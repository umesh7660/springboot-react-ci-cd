package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * LoadsurveyDataValidation entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "loadsurvey_data")
public class LoadsurveyData implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private LoadsurveyDataId id;
	private Double kwhImport;
	private String kwhImportunit;
	private Double kwhExport;
	private String kwhExportunit;
	private Double blkengyQi;
	private Double blkengyQii;
	private Double blkengyQiii;
	private Double blkengyQiv;
	private Double kvahImport;
	private String kvahImportunit;
	private Double kvahExport;
	private String kvahExportunit;
	private Double kvarhImport;
	private String kvarhImportunit;
	private Double kvarhExport;
	private String kvarhExportunit;
	private Double kvarImport;
	private String kvarImportunit;
	private Double kvarExport;
	private String kvarExportunit;
	private Double kwImport;
	private String kwImportunit;
	private Double kwExport;
	private String kwExportunit;
	private Double kvaImport;
	private String kvaImportunit;
	private Double kvaExport;
	private String kvaExportunit;
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
	private Double avgNeucurr;
	private Timestamp insertedDate;
	private String accountNo;
	private String extraField1;
	private String extraField2;
	private String extraField3;
	private Double convertedKwhImport;
	private Double convertedKwhExport;
	private Double convertedKvahImport;
	private Double convertedKvahExport;
	private Double convertedKvarhImport;
	private Double convertedKvarhExport;
	private Double convertedKvarImport;
	private Double convertedKvarExport;
	private Double convertedKwImport;
	private Double convertedKwExport;
	private Double convertedKvaImport;
	private Double convertedKvaExport;
	private Integer requestId;

	// Constructors

	/** default constructor */
	public LoadsurveyData() {
	}

	/** minimal constructor */
	public LoadsurveyData(LoadsurveyDataId id) {
		this.id = id;
	}

	/** full constructor */
	public LoadsurveyData(LoadsurveyDataId id,
			Double kwhImport, String kwhImportunit, Double kwhExport,
			String kwhExportunit, Double blkengyQi, Double blkengyQii,
			Double blkengyQiii, Double blkengyQiv, Double kvahImport,
			String kvahImportunit, Double kvahExport, String kvahExportunit,
			Double kvarhImport, String kvarhImportunit, Double kvarhExport,
			String kvarhExportunit, Double kvarImport, String kvarImportunit,
			Double kvarExport, String kvarExportunit, Double kwImport,
			String kwImportunit, Double kwExport, String kwExportunit,
			Double kvaImport, String kvaImportunit, Double kvaExport,
			String kvaExportunit, Double currentRPhase, Double currentYPhase,
			Double currentBPhase, Double avgCurrent, Double minCurrent,
			Double maxCurrent, Double voltageRPhase, Double voltageYPhase,
			Double voltageBPhase, Double avgVoltage, Double minVoltage,
			Double maxVoltage, Double pfRPhase, Double pfYPhase,
			Double pfBPhase, Double avgPf, Double avgFrequency,
			Double avgNeucurr, Timestamp insertedDate, String accountNo,
			String extraField1, String extraField2, String extraField3,
			Double convertedKwhImport, Double convertedKwhExport,
			Double convertedKvahImport, Double convertedKvahExport,
			Double convertedKvarhImport, Double convertedKvarhExport,
			Double convertedKvarImport, Double convertedKvarExport,
			Double convertedKwImport, Double convertedKwExport,
			Double convertedKvaImport, Double convertedKvaExport,Integer requestId) {
		this.id = id;
		this.kwhImport = kwhImport;
		this.kwhImportunit = kwhImportunit;
		this.kwhExport = kwhExport;
		this.kwhExportunit = kwhExportunit;
		this.blkengyQi = blkengyQi;
		this.blkengyQii = blkengyQii;
		this.blkengyQiii = blkengyQiii;
		this.blkengyQiv = blkengyQiv;
		this.kvahImport = kvahImport;
		this.kvahImportunit = kvahImportunit;
		this.kvahExport = kvahExport;
		this.kvahExportunit = kvahExportunit;
		this.kvarhImport = kvarhImport;
		this.kvarhImportunit = kvarhImportunit;
		this.kvarhExport = kvarhExport;
		this.kvarhExportunit = kvarhExportunit;
		this.kvarImport = kvarImport;
		this.kvarImportunit = kvarImportunit;
		this.kvarExport = kvarExport;
		this.kvarExportunit = kvarExportunit;
		this.kwImport = kwImport;
		this.kwImportunit = kwImportunit;
		this.kwExport = kwExport;
		this.kwExportunit = kwExportunit;
		this.kvaImport = kvaImport;
		this.kvaImportunit = kvaImportunit;
		this.kvaExport = kvaExport;
		this.kvaExportunit = kvaExportunit;
		this.currentRPhase = currentRPhase;
		this.currentYPhase = currentYPhase;
		this.currentBPhase = currentBPhase;
		this.avgCurrent = avgCurrent;
		this.minCurrent = minCurrent;
		this.maxCurrent = maxCurrent;
		this.voltageRPhase = voltageRPhase;
		this.voltageYPhase = voltageYPhase;
		this.voltageBPhase = voltageBPhase;
		this.avgVoltage = avgVoltage;
		this.minVoltage = minVoltage;
		this.maxVoltage = maxVoltage;
		this.pfRPhase = pfRPhase;
		this.pfYPhase = pfYPhase;
		this.pfBPhase = pfBPhase;
		this.avgPf = avgPf;
		this.avgFrequency = avgFrequency;
		this.avgNeucurr = avgNeucurr;
		this.insertedDate = insertedDate;
		this.accountNo = accountNo;
		this.extraField1 = extraField1;
		this.extraField2 = extraField2;
		this.extraField3 = extraField3;
		this.convertedKwhImport = convertedKwhImport;
		this.convertedKwhExport = convertedKwhExport;
		this.convertedKvahImport = convertedKvahImport;
		this.convertedKvahExport = convertedKvahExport;
		this.convertedKvarhImport = convertedKvarhImport;
		this.convertedKvarhExport = convertedKvarhExport;
		this.convertedKvarImport = convertedKvarImport;
		this.convertedKvarExport = convertedKvarExport;
		this.convertedKwImport = convertedKwImport;
		this.convertedKwExport = convertedKwExport;
		this.convertedKvaImport = convertedKvaImport;
		this.convertedKvaExport = convertedKvaExport;
		this.requestId=requestId;
	}

	// Property accessors

	public LoadsurveyDataId getId() {
		return this.id;
	}

	public void setId(LoadsurveyDataId id) {
		this.id = id;
	}

	public Double getKwhImport() {
		return this.kwhImport;
	}

	public void setKwhImport(Double kwhImport) {
		this.kwhImport = kwhImport;
	}

	public String getKwhImportunit() {
		return this.kwhImportunit;
	}

	public void setKwhImportunit(String kwhImportunit) {
		this.kwhImportunit = kwhImportunit;
	}

	public Double getKwhExport() {
		return this.kwhExport;
	}

	public void setKwhExport(Double kwhExport) {
		this.kwhExport = kwhExport;
	}

	public String getKwhExportunit() {
		return this.kwhExportunit;
	}

	public void setKwhExportunit(String kwhExportunit) {
		this.kwhExportunit = kwhExportunit;
	}

	public Double getBlkengyQi() {
		return this.blkengyQi;
	}

	public void setBlkengyQi(Double blkengyQi) {
		this.blkengyQi = blkengyQi;
	}

	public Double getBlkengyQii() {
		return this.blkengyQii;
	}

	public void setBlkengyQii(Double blkengyQii) {
		this.blkengyQii = blkengyQii;
	}

	public Double getBlkengyQiii() {
		return this.blkengyQiii;
	}

	public void setBlkengyQiii(Double blkengyQiii) {
		this.blkengyQiii = blkengyQiii;
	}

	public Double getBlkengyQiv() {
		return this.blkengyQiv;
	}

	public void setBlkengyQiv(Double blkengyQiv) {
		this.blkengyQiv = blkengyQiv;
	}

	public Double getKvahImport() {
		return this.kvahImport;
	}

	public void setKvahImport(Double kvahImport) {
		this.kvahImport = kvahImport;
	}

	public String getKvahImportunit() {
		return this.kvahImportunit;
	}

	public void setKvahImportunit(String kvahImportunit) {
		this.kvahImportunit = kvahImportunit;
	}

	public Double getKvahExport() {
		return this.kvahExport;
	}

	public void setKvahExport(Double kvahExport) {
		this.kvahExport = kvahExport;
	}

	public String getKvahExportunit() {
		return this.kvahExportunit;
	}

	public void setKvahExportunit(String kvahExportunit) {
		this.kvahExportunit = kvahExportunit;
	}

	public Double getKvarhImport() {
		return this.kvarhImport;
	}

	public void setKvarhImport(Double kvarhImport) {
		this.kvarhImport = kvarhImport;
	}

	public String getKvarhImportunit() {
		return this.kvarhImportunit;
	}

	public void setKvarhImportunit(String kvarhImportunit) {
		this.kvarhImportunit = kvarhImportunit;
	}

	public Double getKvarhExport() {
		return this.kvarhExport;
	}

	public void setKvarhExport(Double kvarhExport) {
		this.kvarhExport = kvarhExport;
	}

	public String getKvarhExportunit() {
		return this.kvarhExportunit;
	}

	public void setKvarhExportunit(String kvarhExportunit) {
		this.kvarhExportunit = kvarhExportunit;
	}

	public Double getKvarImport() {
		return this.kvarImport;
	}

	public void setKvarImport(Double kvarImport) {
		this.kvarImport = kvarImport;
	}

	public String getKvarImportunit() {
		return this.kvarImportunit;
	}

	public void setKvarImportunit(String kvarImportunit) {
		this.kvarImportunit = kvarImportunit;
	}

	public Double getKvarExport() {
		return this.kvarExport;
	}

	public void setKvarExport(Double kvarExport) {
		this.kvarExport = kvarExport;
	}

	public String getKvarExportunit() {
		return this.kvarExportunit;
	}

	public void setKvarExportunit(String kvarExportunit) {
		this.kvarExportunit = kvarExportunit;
	}

	public Double getKwImport() {
		return this.kwImport;
	}

	public void setKwImport(Double kwImport) {
		this.kwImport = kwImport;
	}

	public String getKwImportunit() {
		return this.kwImportunit;
	}

	public void setKwImportunit(String kwImportunit) {
		this.kwImportunit = kwImportunit;
	}

	public Double getKwExport() {
		return this.kwExport;
	}

	public void setKwExport(Double kwExport) {
		this.kwExport = kwExport;
	}

	public String getKwExportunit() {
		return this.kwExportunit;
	}

	public void setKwExportunit(String kwExportunit) {
		this.kwExportunit = kwExportunit;
	}

	public Double getKvaImport() {
		return this.kvaImport;
	}

	public void setKvaImport(Double kvaImport) {
		this.kvaImport = kvaImport;
	}

	public String getKvaImportunit() {
		return this.kvaImportunit;
	}

	public void setKvaImportunit(String kvaImportunit) {
		this.kvaImportunit = kvaImportunit;
	}

	public Double getKvaExport() {
		return this.kvaExport;
	}

	public void setKvaExport(Double kvaExport) {
		this.kvaExport = kvaExport;
	}

	public String getKvaExportunit() {
		return this.kvaExportunit;
	}

	public void setKvaExportunit(String kvaExportunit) {
		this.kvaExportunit = kvaExportunit;
	}

	public Double getCurrentRPhase() {
		return this.currentRPhase;
	}

	public void setCurrentRPhase(Double currentRPhase) {
		this.currentRPhase = currentRPhase;
	}

	public Double getCurrentYPhase() {
		return this.currentYPhase;
	}

	public void setCurrentYPhase(Double currentYPhase) {
		this.currentYPhase = currentYPhase;
	}

	public Double getCurrentBPhase() {
		return this.currentBPhase;
	}

	public void setCurrentBPhase(Double currentBPhase) {
		this.currentBPhase = currentBPhase;
	}

	public Double getAvgCurrent() {
		return this.avgCurrent;
	}

	public void setAvgCurrent(Double avgCurrent) {
		this.avgCurrent = avgCurrent;
	}

	public Double getMinCurrent() {
		return this.minCurrent;
	}

	public void setMinCurrent(Double minCurrent) {
		this.minCurrent = minCurrent;
	}

	public Double getMaxCurrent() {
		return this.maxCurrent;
	}

	public void setMaxCurrent(Double maxCurrent) {
		this.maxCurrent = maxCurrent;
	}

	public Double getVoltageRPhase() {
		return this.voltageRPhase;
	}

	public void setVoltageRPhase(Double voltageRPhase) {
		this.voltageRPhase = voltageRPhase;
	}

	public Double getVoltageYPhase() {
		return this.voltageYPhase;
	}

	public void setVoltageYPhase(Double voltageYPhase) {
		this.voltageYPhase = voltageYPhase;
	}

	public Double getVoltageBPhase() {
		return this.voltageBPhase;
	}

	public void setVoltageBPhase(Double voltageBPhase) {
		this.voltageBPhase = voltageBPhase;
	}

	public Double getAvgVoltage() {
		return this.avgVoltage;
	}

	public void setAvgVoltage(Double avgVoltage) {
		this.avgVoltage = avgVoltage;
	}

	public Double getMinVoltage() {
		return this.minVoltage;
	}

	public void setMinVoltage(Double minVoltage) {
		this.minVoltage = minVoltage;
	}

	public Double getMaxVoltage() {
		return this.maxVoltage;
	}

	public void setMaxVoltage(Double maxVoltage) {
		this.maxVoltage = maxVoltage;
	}

	public Double getPfRPhase() {
		return this.pfRPhase;
	}

	public void setPfRPhase(Double pfRPhase) {
		this.pfRPhase = pfRPhase;
	}

	public Double getPfYPhase() {
		return this.pfYPhase;
	}

	public void setPfYPhase(Double pfYPhase) {
		this.pfYPhase = pfYPhase;
	}

	public Double getPfBPhase() {
		return this.pfBPhase;
	}

	public void setPfBPhase(Double pfBPhase) {
		this.pfBPhase = pfBPhase;
	}

	public Double getAvgPf() {
		return this.avgPf;
	}

	public void setAvgPf(Double avgPf) {
		this.avgPf = avgPf;
	}

	public Double getAvgFrequency() {
		return this.avgFrequency;
	}

	public void setAvgFrequency(Double avgFrequency) {
		this.avgFrequency = avgFrequency;
	}

	public Double getAvgNeucurr() {
		return this.avgNeucurr;
	}

	public void setAvgNeucurr(Double avgNeucurr) {
		this.avgNeucurr = avgNeucurr;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getAccountNo() {
		return this.accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public String getExtraField1() {
		return this.extraField1;
	}

	public void setExtraField1(String extraField1) {
		this.extraField1 = extraField1;
	}

	public String getExtraField2() {
		return this.extraField2;
	}

	public void setExtraField2(String extraField2) {
		this.extraField2 = extraField2;
	}

	public String getExtraField3() {
		return this.extraField3;
	}

	public void setExtraField3(String extraField3) {
		this.extraField3 = extraField3;
	}

	public Double getConvertedKwhImport() {
		return this.convertedKwhImport;
	}

	public void setConvertedKwhImport(Double convertedKwhImport) {
		this.convertedKwhImport = convertedKwhImport;
	}

	public Double getConvertedKwhExport() {
		return this.convertedKwhExport;
	}

	public void setConvertedKwhExport(Double convertedKwhExport) {
		this.convertedKwhExport = convertedKwhExport;
	}

	public Double getConvertedKvahImport() {
		return this.convertedKvahImport;
	}

	public void setConvertedKvahImport(Double convertedKvahImport) {
		this.convertedKvahImport = convertedKvahImport;
	}

	public Double getConvertedKvahExport() {
		return this.convertedKvahExport;
	}

	public void setConvertedKvahExport(Double convertedKvahExport) {
		this.convertedKvahExport = convertedKvahExport;
	}

	public Double getConvertedKvarhImport() {
		return this.convertedKvarhImport;
	}

	public void setConvertedKvarhImport(Double convertedKvarhImport) {
		this.convertedKvarhImport = convertedKvarhImport;
	}

	public Double getConvertedKvarhExport() {
		return this.convertedKvarhExport;
	}

	public void setConvertedKvarhExport(Double convertedKvarhExport) {
		this.convertedKvarhExport = convertedKvarhExport;
	}

	public Double getConvertedKvarImport() {
		return this.convertedKvarImport;
	}

	public void setConvertedKvarImport(Double convertedKvarImport) {
		this.convertedKvarImport = convertedKvarImport;
	}

	public Double getConvertedKvarExport() {
		return this.convertedKvarExport;
	}

	public void setConvertedKvarExport(Double convertedKvarExport) {
		this.convertedKvarExport = convertedKvarExport;
	}

	public Double getConvertedKwImport() {
		return this.convertedKwImport;
	}

	public void setConvertedKwImport(Double convertedKwImport) {
		this.convertedKwImport = convertedKwImport;
	}

	public Double getConvertedKwExport() {
		return this.convertedKwExport;
	}

	public void setConvertedKwExport(Double convertedKwExport) {
		this.convertedKwExport = convertedKwExport;
	}

	public Double getConvertedKvaImport() {
		return this.convertedKvaImport;
	}

	public void setConvertedKvaImport(Double convertedKvaImport) {
		this.convertedKvaImport = convertedKvaImport;
	}

	public Double getConvertedKvaExport() {
		return this.convertedKvaExport;
	}

	public void setConvertedKvaExport(Double convertedKvaExport) {
		this.convertedKvaExport = convertedKvaExport;
	}

	public Integer getRequestId() {
		return requestId;
	}

	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}

	
}