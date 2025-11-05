package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;


/**
 * MonthlyBillingData entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name ="monthly_billing_data")
public class MonthlyBillingData  implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	// Fields
@EmbeddedId
	private MonthlyBillingDataId id;
	private Double kwhImport;
	private Double kwhImportT1;
	private Double kwhImportT2;
	private Double kwhImportT3;
	private Double kwhImportT4;
	private Double kwhImportT5;
	private Double kwhImportT6;
	private Double kwhImportT7;
	private Double kwhImportT8;
	private Double kwhExport;
	private Double kwhExportT1;
	private Double kwhExportT2;
	private Double kwhExportT3;
	private Double kwhExportT4;
	private Double kwhExportT5;
	private Double kwhExportT6;
	private Double kwhExportT7;
	private Double kwhExportT8;
	private Double kvahImport;
	private Double kvahImportT1;
	private Double kvahImportT2;
	private Double kvahImportT3;
	private Double kvahImportT4;
	private Double kvahImportT5;
	private Double kvahImportT6;
	private Double kvahImportT7;
	private Double kvahImportT8;
	private Double kvahExport;
	private Double kvahExportT1;
	private Double kvahExportT2;
	private Double kvahExportT3;
	private Double kvahExportT4;
	private Double kvahExportT5;
	private Double kvahExportT6;
	private Double kvahExportT7;
	private Double kvahExportT8;
	private Double kwMd;
	private String kwMdOccurtime;
	private Double kwMdT1;
	private String kwMdOccurtimeT1;
	private Double kwMdT2;
	private String kwMdOccurtimeT2;
	private Double kwMdT3;
	private String kwMdOccurtimeT3;
	private Double kwMdT4;
	private String kwMdOccurtimeT4;
	private Double kwMdT5;
	private String kwMdOccurtimeT5;
	private Double kwMdT6;
	private String kwMdOccurtimeT6;
	private Double kwMdT7;
	private String kwMdOccurtimeT7;
	private Double kwMdT8;
	private String kwMdOccurtimeT8;
	private Double kweMd;
	private String kweMdOccurtime;
	private Double kweMdT1;
	private String kweMdOccurtimeT1;
	private Double kweMdT2;
	private String kweMdOccurtimeT2;
	private Double kweMdT3;
	private String kweMdOccurtimeT3;
	private Double kweMdT4;
	private String kweMdOccurtimeT4;
	private Double kweMdT5;
	private String kweMdOccurtimeT5;
	private Double kweMdT6;
	private String kweMdOccurtimeT6;
	private Double kweMdT7;
	private String kweMdOccurtimeT7;
	private Double kweMdT8;
	private String kweMdOccurtimeT8;
	private Double kvaMd;
	private String kvaMdOccurtime;
	private Double kvaMdT1;
	private String kvaMdOccurtimeT1;
	private Double kvaMdT2;
	private String kvaMdOccurtimeT2;
	private Double kvaMdT3;
	private String kvaMdOccurtimeT3;
	private Double kvaMdT4;
	private String kvaMdOccurtimeT4;
	private Double kvaMdT5;
	private String kvaMdOccurtimeT5;
	private Double kvaMdT6;
	private String kvaMdOccurtimeT6;
	private Double kvaMdT7;
	private String kvaMdOccurtimeT7;
	private Double kvaMdT8;
	private String kvaMdOccurtimeT8;
	private Double kvaeMd;
	private String kvaeMdOccurtime;
	private Double kvaeMdT1;
	private String kvaeMdOccurtimeT1;
	private Double kvaeMdT2;
	private String kvaeMdOccurtimeT2;
	private Double kvaeMdT3;
	private String kvaeMdOccurtimeT3;
	private Double kvaeMdT4;
	private String kvaeMdOccurtimeT4;
	private Double kvaeMdT5;
	private String kvaeMdOccurtimeT5;
	private Double kvaeMdT6;
	private String kvaeMdOccurtimeT6;
	private Double kvaeMdT7;
	private String kvaeMdOccurtimeT7;
	private Double kvaeMdT8;
	private String kvaeMdOccurtimeT8;
	private Double cummdKwimport;
	private Double cummdKwexport;
	private Double cummdKvaimport;
	private Double cummdKvaexport;
	private Double kvarhQ1;
	private Double kvarhQ2;
	private Double kvarhQ3;
	private Double kvarhQ4;
	private String powerOffDuration;
	private String powerOnDuration;
	private Integer tamperCount;
	private Double averagePf;
	private Timestamp insertedDate;
	private String accountNo;
	private String extraField1;
	private String extraField2;
	private String extraField3;
	private String extraField4;
	private String extraField5;
	private String extraField6;
	private String extraField7;
	private String extraField8;
	private String extraField9;
	private String extraField10;
	private String extraField11;
	private String extraField12;
	private String extraField13;
	private String extraField14;
	private String extraField15;
	private String extraField16;
	private String extraField17;
	private String extraField18;
	private String extraField19;
	private String extraField20;
	private String manufactureSpecific;
	private Integer requestId;
	// Constructors

	/** default constructor */
	public MonthlyBillingData() {
	}

	/** minimal constructor */
	public MonthlyBillingData(MonthlyBillingDataId id) {
		this.id = id;
	}

	/** full constructor */
	public MonthlyBillingData(MonthlyBillingDataId id, Double kwhImport,
			Double kwhImportT1, Double kwhImportT2, Double kwhImportT3,
			Double kwhImportT4, Double kwhImportT5, Double kwhImportT6,
			Double kwhImportT7, Double kwhImportT8, Double kwhExport,
			Double kwhExportT1, Double kwhExportT2, Double kwhExportT3,
			Double kwhExportT4, Double kwhExportT5, Double kwhExportT6,
			Double kwhExportT7, Double kwhExportT8, Double kvahImport,
			Double kvahImportT1, Double kvahImportT2, Double kvahImportT3,
			Double kvahImportT4, Double kvahImportT5, Double kvahImportT6,
			Double kvahImportT7, Double kvahImportT8, Double kvahExport,
			Double kvahExportT1, Double kvahExportT2, Double kvahExportT3,
			Double kvahExportT4, Double kvahExportT5, Double kvahExportT6,
			Double kvahExportT7, Double kvahExportT8, Double kwMd,
			String kwMdOccurtime, Double kwMdT1, String kwMdOccurtimeT1,
			Double kwMdT2, String kwMdOccurtimeT2, Double kwMdT3,
			String kwMdOccurtimeT3, Double kwMdT4, String kwMdOccurtimeT4,
			Double kwMdT5, String kwMdOccurtimeT5, Double kwMdT6,
			String kwMdOccurtimeT6, Double kwMdT7, String kwMdOccurtimeT7,
			Double kwMdT8, String kwMdOccurtimeT8, Double kweMd,
			String kweMdOccurtime, Double kweMdT1, String kweMdOccurtimeT1,
			Double kweMdT2, String kweMdOccurtimeT2, Double kweMdT3,
			String kweMdOccurtimeT3, Double kweMdT4, String kweMdOccurtimeT4,
			Double kweMdT5, String kweMdOccurtimeT5, Double kweMdT6,
			String kweMdOccurtimeT6, Double kweMdT7, String kweMdOccurtimeT7,
			Double kweMdT8, String kweMdOccurtimeT8, Double kvaMd,
			String kvaMdOccurtime, Double kvaMdT1, String kvaMdOccurtimeT1,
			Double kvaMdT2, String kvaMdOccurtimeT2, Double kvaMdT3,
			String kvaMdOccurtimeT3, Double kvaMdT4, String kvaMdOccurtimeT4,
			Double kvaMdT5, String kvaMdOccurtimeT5, Double kvaMdT6,
			String kvaMdOccurtimeT6, Double kvaMdT7, String kvaMdOccurtimeT7,
			Double kvaMdT8, String kvaMdOccurtimeT8, Double kvaeMd,
			String kvaeMdOccurtime, Double kvaeMdT1, String kvaeMdOccurtimeT1,
			Double kvaeMdT2, String kvaeMdOccurtimeT2, Double kvaeMdT3,
			String kvaeMdOccurtimeT3, Double kvaeMdT4,
			String kvaeMdOccurtimeT4, Double kvaeMdT5,
			String kvaeMdOccurtimeT5, Double kvaeMdT6,
			String kvaeMdOccurtimeT6, Double kvaeMdT7,
			String kvaeMdOccurtimeT7, Double kvaeMdT8,
			String kvaeMdOccurtimeT8, Double cummdKwimport,
			Double cummdKwexport, Double cummdKvaimport, Double cummdKvaexport,
			Double kvarhQ1, Double kvarhQ2, Double kvarhQ3, Double kvarhQ4,
			String powerOffDuration, String powerOnDuration,
			Integer tamperCount, Double averagePf, Timestamp insertedDate,
			String accountNo, String extraField1, String extraField2,
			String extraField3, String extraField4, String extraField5,
			String extraField6, String extraField7, String extraField8,
			String extraField9, String extraField10, String extraField11,
			String extraField12, String extraField13, String extraField14,
			String extraField15, String extraField16, String extraField17,
			String extraField18, String extraField19, String extraField20,
			String manufactureSpecific,Integer requestId) {
		this.id = id;
		this.kwhImport = kwhImport;
		this.kwhImportT1 = kwhImportT1;
		this.kwhImportT2 = kwhImportT2;
		this.kwhImportT3 = kwhImportT3;
		this.kwhImportT4 = kwhImportT4;
		this.kwhImportT5 = kwhImportT5;
		this.kwhImportT6 = kwhImportT6;
		this.kwhImportT7 = kwhImportT7;
		this.kwhImportT8 = kwhImportT8;
		this.kwhExport = kwhExport;
		this.kwhExportT1 = kwhExportT1;
		this.kwhExportT2 = kwhExportT2;
		this.kwhExportT3 = kwhExportT3;
		this.kwhExportT4 = kwhExportT4;
		this.kwhExportT5 = kwhExportT5;
		this.kwhExportT6 = kwhExportT6;
		this.kwhExportT7 = kwhExportT7;
		this.kwhExportT8 = kwhExportT8;
		this.kvahImport = kvahImport;
		this.kvahImportT1 = kvahImportT1;
		this.kvahImportT2 = kvahImportT2;
		this.kvahImportT3 = kvahImportT3;
		this.kvahImportT4 = kvahImportT4;
		this.kvahImportT5 = kvahImportT5;
		this.kvahImportT6 = kvahImportT6;
		this.kvahImportT7 = kvahImportT7;
		this.kvahImportT8 = kvahImportT8;
		this.kvahExport = kvahExport;
		this.kvahExportT1 = kvahExportT1;
		this.kvahExportT2 = kvahExportT2;
		this.kvahExportT3 = kvahExportT3;
		this.kvahExportT4 = kvahExportT4;
		this.kvahExportT5 = kvahExportT5;
		this.kvahExportT6 = kvahExportT6;
		this.kvahExportT7 = kvahExportT7;
		this.kvahExportT8 = kvahExportT8;
		this.kwMd = kwMd;
		this.kwMdOccurtime = kwMdOccurtime;
		this.kwMdT1 = kwMdT1;
		this.kwMdOccurtimeT1 = kwMdOccurtimeT1;
		this.kwMdT2 = kwMdT2;
		this.kwMdOccurtimeT2 = kwMdOccurtimeT2;
		this.kwMdT3 = kwMdT3;
		this.kwMdOccurtimeT3 = kwMdOccurtimeT3;
		this.kwMdT4 = kwMdT4;
		this.kwMdOccurtimeT4 = kwMdOccurtimeT4;
		this.kwMdT5 = kwMdT5;
		this.kwMdOccurtimeT5 = kwMdOccurtimeT5;
		this.kwMdT6 = kwMdT6;
		this.kwMdOccurtimeT6 = kwMdOccurtimeT6;
		this.kwMdT7 = kwMdT7;
		this.kwMdOccurtimeT7 = kwMdOccurtimeT7;
		this.kwMdT8 = kwMdT8;
		this.kwMdOccurtimeT8 = kwMdOccurtimeT8;
		this.kweMd = kweMd;
		this.kweMdOccurtime = kweMdOccurtime;
		this.kweMdT1 = kweMdT1;
		this.kweMdOccurtimeT1 = kweMdOccurtimeT1;
		this.kweMdT2 = kweMdT2;
		this.kweMdOccurtimeT2 = kweMdOccurtimeT2;
		this.kweMdT3 = kweMdT3;
		this.kweMdOccurtimeT3 = kweMdOccurtimeT3;
		this.kweMdT4 = kweMdT4;
		this.kweMdOccurtimeT4 = kweMdOccurtimeT4;
		this.kweMdT5 = kweMdT5;
		this.kweMdOccurtimeT5 = kweMdOccurtimeT5;
		this.kweMdT6 = kweMdT6;
		this.kweMdOccurtimeT6 = kweMdOccurtimeT6;
		this.kweMdT7 = kweMdT7;
		this.kweMdOccurtimeT7 = kweMdOccurtimeT7;
		this.kweMdT8 = kweMdT8;
		this.kweMdOccurtimeT8 = kweMdOccurtimeT8;
		this.kvaMd = kvaMd;
		this.kvaMdOccurtime = kvaMdOccurtime;
		this.kvaMdT1 = kvaMdT1;
		this.kvaMdOccurtimeT1 = kvaMdOccurtimeT1;
		this.kvaMdT2 = kvaMdT2;
		this.kvaMdOccurtimeT2 = kvaMdOccurtimeT2;
		this.kvaMdT3 = kvaMdT3;
		this.kvaMdOccurtimeT3 = kvaMdOccurtimeT3;
		this.kvaMdT4 = kvaMdT4;
		this.kvaMdOccurtimeT4 = kvaMdOccurtimeT4;
		this.kvaMdT5 = kvaMdT5;
		this.kvaMdOccurtimeT5 = kvaMdOccurtimeT5;
		this.kvaMdT6 = kvaMdT6;
		this.kvaMdOccurtimeT6 = kvaMdOccurtimeT6;
		this.kvaMdT7 = kvaMdT7;
		this.kvaMdOccurtimeT7 = kvaMdOccurtimeT7;
		this.kvaMdT8 = kvaMdT8;
		this.kvaMdOccurtimeT8 = kvaMdOccurtimeT8;
		this.kvaeMd = kvaeMd;
		this.kvaeMdOccurtime = kvaeMdOccurtime;
		this.kvaeMdT1 = kvaeMdT1;
		this.kvaeMdOccurtimeT1 = kvaeMdOccurtimeT1;
		this.kvaeMdT2 = kvaeMdT2;
		this.kvaeMdOccurtimeT2 = kvaeMdOccurtimeT2;
		this.kvaeMdT3 = kvaeMdT3;
		this.kvaeMdOccurtimeT3 = kvaeMdOccurtimeT3;
		this.kvaeMdT4 = kvaeMdT4;
		this.kvaeMdOccurtimeT4 = kvaeMdOccurtimeT4;
		this.kvaeMdT5 = kvaeMdT5;
		this.kvaeMdOccurtimeT5 = kvaeMdOccurtimeT5;
		this.kvaeMdT6 = kvaeMdT6;
		this.kvaeMdOccurtimeT6 = kvaeMdOccurtimeT6;
		this.kvaeMdT7 = kvaeMdT7;
		this.kvaeMdOccurtimeT7 = kvaeMdOccurtimeT7;
		this.kvaeMdT8 = kvaeMdT8;
		this.kvaeMdOccurtimeT8 = kvaeMdOccurtimeT8;
		this.cummdKwimport = cummdKwimport;
		this.cummdKwexport = cummdKwexport;
		this.cummdKvaimport = cummdKvaimport;
		this.cummdKvaexport = cummdKvaexport;
		this.kvarhQ1 = kvarhQ1;
		this.kvarhQ2 = kvarhQ2;
		this.kvarhQ3 = kvarhQ3;
		this.kvarhQ4 = kvarhQ4;
		this.powerOffDuration = powerOffDuration;
		this.powerOnDuration = powerOnDuration;
		this.tamperCount = tamperCount;
		this.averagePf = averagePf;
		this.insertedDate = insertedDate;
		this.accountNo = accountNo;
		this.extraField1 = extraField1;
		this.extraField2 = extraField2;
		this.extraField3 = extraField3;
		this.extraField4 = extraField4;
		this.extraField5 = extraField5;
		this.extraField6 = extraField6;
		this.extraField7 = extraField7;
		this.extraField8 = extraField8;
		this.extraField9 = extraField9;
		this.extraField10 = extraField10;
		this.extraField11 = extraField11;
		this.extraField12 = extraField12;
		this.extraField13 = extraField13;
		this.extraField14 = extraField14;
		this.extraField15 = extraField15;
		this.extraField16 = extraField16;
		this.extraField17 = extraField17;
		this.extraField18 = extraField18;
		this.extraField19 = extraField19;
		this.extraField20 = extraField20;
		this.manufactureSpecific = manufactureSpecific;
		this.requestId=requestId;
	}

	// Property accessors

	public MonthlyBillingDataId getId() {
		return this.id;
	}

	public void setId(MonthlyBillingDataId id) {
		this.id = id;
	}

	public Double getKwhImport() {
		return this.kwhImport;
	}

	public void setKwhImport(Double kwhImport) {
		this.kwhImport = kwhImport;
	}

	public Double getKwhImportT1() {
		return this.kwhImportT1;
	}

	public void setKwhImportT1(Double kwhImportT1) {
		this.kwhImportT1 = kwhImportT1;
	}

	public Double getKwhImportT2() {
		return this.kwhImportT2;
	}

	public void setKwhImportT2(Double kwhImportT2) {
		this.kwhImportT2 = kwhImportT2;
	}

	public Double getKwhImportT3() {
		return this.kwhImportT3;
	}

	public void setKwhImportT3(Double kwhImportT3) {
		this.kwhImportT3 = kwhImportT3;
	}

	public Double getKwhImportT4() {
		return this.kwhImportT4;
	}

	public void setKwhImportT4(Double kwhImportT4) {
		this.kwhImportT4 = kwhImportT4;
	}

	public Double getKwhImportT5() {
		return this.kwhImportT5;
	}

	public void setKwhImportT5(Double kwhImportT5) {
		this.kwhImportT5 = kwhImportT5;
	}

	public Double getKwhImportT6() {
		return this.kwhImportT6;
	}

	public void setKwhImportT6(Double kwhImportT6) {
		this.kwhImportT6 = kwhImportT6;
	}

	public Double getKwhImportT7() {
		return this.kwhImportT7;
	}

	public void setKwhImportT7(Double kwhImportT7) {
		this.kwhImportT7 = kwhImportT7;
	}

	public Double getKwhImportT8() {
		return this.kwhImportT8;
	}

	public void setKwhImportT8(Double kwhImportT8) {
		this.kwhImportT8 = kwhImportT8;
	}

	public Double getKwhExport() {
		return this.kwhExport;
	}

	public void setKwhExport(Double kwhExport) {
		this.kwhExport = kwhExport;
	}

	public Double getKwhExportT1() {
		return this.kwhExportT1;
	}

	public void setKwhExportT1(Double kwhExportT1) {
		this.kwhExportT1 = kwhExportT1;
	}

	public Double getKwhExportT2() {
		return this.kwhExportT2;
	}

	public void setKwhExportT2(Double kwhExportT2) {
		this.kwhExportT2 = kwhExportT2;
	}

	public Double getKwhExportT3() {
		return this.kwhExportT3;
	}

	public void setKwhExportT3(Double kwhExportT3) {
		this.kwhExportT3 = kwhExportT3;
	}

	public Double getKwhExportT4() {
		return this.kwhExportT4;
	}

	public void setKwhExportT4(Double kwhExportT4) {
		this.kwhExportT4 = kwhExportT4;
	}

	public Double getKwhExportT5() {
		return this.kwhExportT5;
	}

	public void setKwhExportT5(Double kwhExportT5) {
		this.kwhExportT5 = kwhExportT5;
	}

	public Double getKwhExportT6() {
		return this.kwhExportT6;
	}

	public void setKwhExportT6(Double kwhExportT6) {
		this.kwhExportT6 = kwhExportT6;
	}

	public Double getKwhExportT7() {
		return this.kwhExportT7;
	}

	public void setKwhExportT7(Double kwhExportT7) {
		this.kwhExportT7 = kwhExportT7;
	}

	public Double getKwhExportT8() {
		return this.kwhExportT8;
	}

	public void setKwhExportT8(Double kwhExportT8) {
		this.kwhExportT8 = kwhExportT8;
	}

	public Double getKvahImport() {
		return this.kvahImport;
	}

	public void setKvahImport(Double kvahImport) {
		this.kvahImport = kvahImport;
	}

	public Double getKvahImportT1() {
		return this.kvahImportT1;
	}

	public void setKvahImportT1(Double kvahImportT1) {
		this.kvahImportT1 = kvahImportT1;
	}

	public Double getKvahImportT2() {
		return this.kvahImportT2;
	}

	public void setKvahImportT2(Double kvahImportT2) {
		this.kvahImportT2 = kvahImportT2;
	}

	public Double getKvahImportT3() {
		return this.kvahImportT3;
	}

	public void setKvahImportT3(Double kvahImportT3) {
		this.kvahImportT3 = kvahImportT3;
	}

	public Double getKvahImportT4() {
		return this.kvahImportT4;
	}

	public void setKvahImportT4(Double kvahImportT4) {
		this.kvahImportT4 = kvahImportT4;
	}

	public Double getKvahImportT5() {
		return this.kvahImportT5;
	}

	public void setKvahImportT5(Double kvahImportT5) {
		this.kvahImportT5 = kvahImportT5;
	}

	public Double getKvahImportT6() {
		return this.kvahImportT6;
	}

	public void setKvahImportT6(Double kvahImportT6) {
		this.kvahImportT6 = kvahImportT6;
	}

	public Double getKvahImportT7() {
		return this.kvahImportT7;
	}

	public void setKvahImportT7(Double kvahImportT7) {
		this.kvahImportT7 = kvahImportT7;
	}

	public Double getKvahImportT8() {
		return this.kvahImportT8;
	}

	public void setKvahImportT8(Double kvahImportT8) {
		this.kvahImportT8 = kvahImportT8;
	}

	public Double getKvahExport() {
		return this.kvahExport;
	}

	public void setKvahExport(Double kvahExport) {
		this.kvahExport = kvahExport;
	}

	public Double getKvahExportT1() {
		return this.kvahExportT1;
	}

	public void setKvahExportT1(Double kvahExportT1) {
		this.kvahExportT1 = kvahExportT1;
	}

	public Double getKvahExportT2() {
		return this.kvahExportT2;
	}

	public void setKvahExportT2(Double kvahExportT2) {
		this.kvahExportT2 = kvahExportT2;
	}

	public Double getKvahExportT3() {
		return this.kvahExportT3;
	}

	public void setKvahExportT3(Double kvahExportT3) {
		this.kvahExportT3 = kvahExportT3;
	}

	public Double getKvahExportT4() {
		return this.kvahExportT4;
	}

	public void setKvahExportT4(Double kvahExportT4) {
		this.kvahExportT4 = kvahExportT4;
	}

	public Double getKvahExportT5() {
		return this.kvahExportT5;
	}

	public void setKvahExportT5(Double kvahExportT5) {
		this.kvahExportT5 = kvahExportT5;
	}

	public Double getKvahExportT6() {
		return this.kvahExportT6;
	}

	public void setKvahExportT6(Double kvahExportT6) {
		this.kvahExportT6 = kvahExportT6;
	}

	public Double getKvahExportT7() {
		return this.kvahExportT7;
	}

	public void setKvahExportT7(Double kvahExportT7) {
		this.kvahExportT7 = kvahExportT7;
	}

	public Double getKvahExportT8() {
		return this.kvahExportT8;
	}

	public void setKvahExportT8(Double kvahExportT8) {
		this.kvahExportT8 = kvahExportT8;
	}

	public Double getKwMd() {
		return this.kwMd;
	}

	public void setKwMd(Double kwMd) {
		this.kwMd = kwMd;
	}

	public String getKwMdOccurtime() {
		return this.kwMdOccurtime;
	}

	public void setKwMdOccurtime(String kwMdOccurtime) {
		this.kwMdOccurtime = kwMdOccurtime;
	}

	public Double getKwMdT1() {
		return this.kwMdT1;
	}

	public void setKwMdT1(Double kwMdT1) {
		this.kwMdT1 = kwMdT1;
	}

	public String getKwMdOccurtimeT1() {
		return this.kwMdOccurtimeT1;
	}

	public void setKwMdOccurtimeT1(String kwMdOccurtimeT1) {
		this.kwMdOccurtimeT1 = kwMdOccurtimeT1;
	}

	public Double getKwMdT2() {
		return this.kwMdT2;
	}

	public void setKwMdT2(Double kwMdT2) {
		this.kwMdT2 = kwMdT2;
	}

	public String getKwMdOccurtimeT2() {
		return this.kwMdOccurtimeT2;
	}

	public void setKwMdOccurtimeT2(String kwMdOccurtimeT2) {
		this.kwMdOccurtimeT2 = kwMdOccurtimeT2;
	}

	public Double getKwMdT3() {
		return this.kwMdT3;
	}

	public void setKwMdT3(Double kwMdT3) {
		this.kwMdT3 = kwMdT3;
	}

	public String getKwMdOccurtimeT3() {
		return this.kwMdOccurtimeT3;
	}

	public void setKwMdOccurtimeT3(String kwMdOccurtimeT3) {
		this.kwMdOccurtimeT3 = kwMdOccurtimeT3;
	}

	public Double getKwMdT4() {
		return this.kwMdT4;
	}

	public void setKwMdT4(Double kwMdT4) {
		this.kwMdT4 = kwMdT4;
	}

	public String getKwMdOccurtimeT4() {
		return this.kwMdOccurtimeT4;
	}

	public void setKwMdOccurtimeT4(String kwMdOccurtimeT4) {
		this.kwMdOccurtimeT4 = kwMdOccurtimeT4;
	}

	public Double getKwMdT5() {
		return this.kwMdT5;
	}

	public void setKwMdT5(Double kwMdT5) {
		this.kwMdT5 = kwMdT5;
	}

	public String getKwMdOccurtimeT5() {
		return this.kwMdOccurtimeT5;
	}

	public void setKwMdOccurtimeT5(String kwMdOccurtimeT5) {
		this.kwMdOccurtimeT5 = kwMdOccurtimeT5;
	}

	public Double getKwMdT6() {
		return this.kwMdT6;
	}

	public void setKwMdT6(Double kwMdT6) {
		this.kwMdT6 = kwMdT6;
	}

	public String getKwMdOccurtimeT6() {
		return this.kwMdOccurtimeT6;
	}

	public void setKwMdOccurtimeT6(String kwMdOccurtimeT6) {
		this.kwMdOccurtimeT6 = kwMdOccurtimeT6;
	}

	public Double getKwMdT7() {
		return this.kwMdT7;
	}

	public void setKwMdT7(Double kwMdT7) {
		this.kwMdT7 = kwMdT7;
	}

	public String getKwMdOccurtimeT7() {
		return this.kwMdOccurtimeT7;
	}

	public void setKwMdOccurtimeT7(String kwMdOccurtimeT7) {
		this.kwMdOccurtimeT7 = kwMdOccurtimeT7;
	}

	public Double getKwMdT8() {
		return this.kwMdT8;
	}

	public void setKwMdT8(Double kwMdT8) {
		this.kwMdT8 = kwMdT8;
	}

	public String getKwMdOccurtimeT8() {
		return this.kwMdOccurtimeT8;
	}

	public void setKwMdOccurtimeT8(String kwMdOccurtimeT8) {
		this.kwMdOccurtimeT8 = kwMdOccurtimeT8;
	}

	public Double getKweMd() {
		return this.kweMd;
	}

	public void setKweMd(Double kweMd) {
		this.kweMd = kweMd;
	}

	public String getKweMdOccurtime() {
		return this.kweMdOccurtime;
	}

	public void setKweMdOccurtime(String kweMdOccurtime) {
		this.kweMdOccurtime = kweMdOccurtime;
	}

	public Double getKweMdT1() {
		return this.kweMdT1;
	}

	public void setKweMdT1(Double kweMdT1) {
		this.kweMdT1 = kweMdT1;
	}

	public String getKweMdOccurtimeT1() {
		return this.kweMdOccurtimeT1;
	}

	public void setKweMdOccurtimeT1(String kweMdOccurtimeT1) {
		this.kweMdOccurtimeT1 = kweMdOccurtimeT1;
	}

	public Double getKweMdT2() {
		return this.kweMdT2;
	}

	public void setKweMdT2(Double kweMdT2) {
		this.kweMdT2 = kweMdT2;
	}

	public String getKweMdOccurtimeT2() {
		return this.kweMdOccurtimeT2;
	}

	public void setKweMdOccurtimeT2(String kweMdOccurtimeT2) {
		this.kweMdOccurtimeT2 = kweMdOccurtimeT2;
	}

	public Double getKweMdT3() {
		return this.kweMdT3;
	}

	public void setKweMdT3(Double kweMdT3) {
		this.kweMdT3 = kweMdT3;
	}

	public String getKweMdOccurtimeT3() {
		return this.kweMdOccurtimeT3;
	}

	public void setKweMdOccurtimeT3(String kweMdOccurtimeT3) {
		this.kweMdOccurtimeT3 = kweMdOccurtimeT3;
	}

	public Double getKweMdT4() {
		return this.kweMdT4;
	}

	public void setKweMdT4(Double kweMdT4) {
		this.kweMdT4 = kweMdT4;
	}

	public String getKweMdOccurtimeT4() {
		return this.kweMdOccurtimeT4;
	}

	public void setKweMdOccurtimeT4(String kweMdOccurtimeT4) {
		this.kweMdOccurtimeT4 = kweMdOccurtimeT4;
	}

	public Double getKweMdT5() {
		return this.kweMdT5;
	}

	public void setKweMdT5(Double kweMdT5) {
		this.kweMdT5 = kweMdT5;
	}

	public String getKweMdOccurtimeT5() {
		return this.kweMdOccurtimeT5;
	}

	public void setKweMdOccurtimeT5(String kweMdOccurtimeT5) {
		this.kweMdOccurtimeT5 = kweMdOccurtimeT5;
	}

	public Double getKweMdT6() {
		return this.kweMdT6;
	}

	public void setKweMdT6(Double kweMdT6) {
		this.kweMdT6 = kweMdT6;
	}

	public String getKweMdOccurtimeT6() {
		return this.kweMdOccurtimeT6;
	}

	public void setKweMdOccurtimeT6(String kweMdOccurtimeT6) {
		this.kweMdOccurtimeT6 = kweMdOccurtimeT6;
	}

	public Double getKweMdT7() {
		return this.kweMdT7;
	}

	public void setKweMdT7(Double kweMdT7) {
		this.kweMdT7 = kweMdT7;
	}

	public String getKweMdOccurtimeT7() {
		return this.kweMdOccurtimeT7;
	}

	public void setKweMdOccurtimeT7(String kweMdOccurtimeT7) {
		this.kweMdOccurtimeT7 = kweMdOccurtimeT7;
	}

	public Double getKweMdT8() {
		return this.kweMdT8;
	}

	public void setKweMdT8(Double kweMdT8) {
		this.kweMdT8 = kweMdT8;
	}

	public String getKweMdOccurtimeT8() {
		return this.kweMdOccurtimeT8;
	}

	public void setKweMdOccurtimeT8(String kweMdOccurtimeT8) {
		this.kweMdOccurtimeT8 = kweMdOccurtimeT8;
	}

	public Double getKvaMd() {
		return this.kvaMd;
	}

	public void setKvaMd(Double kvaMd) {
		this.kvaMd = kvaMd;
	}

	public String getKvaMdOccurtime() {
		return this.kvaMdOccurtime;
	}

	public void setKvaMdOccurtime(String kvaMdOccurtime) {
		this.kvaMdOccurtime = kvaMdOccurtime;
	}

	public Double getKvaMdT1() {
		return this.kvaMdT1;
	}

	public void setKvaMdT1(Double kvaMdT1) {
		this.kvaMdT1 = kvaMdT1;
	}

	public String getKvaMdOccurtimeT1() {
		return this.kvaMdOccurtimeT1;
	}

	public void setKvaMdOccurtimeT1(String kvaMdOccurtimeT1) {
		this.kvaMdOccurtimeT1 = kvaMdOccurtimeT1;
	}

	public Double getKvaMdT2() {
		return this.kvaMdT2;
	}

	public void setKvaMdT2(Double kvaMdT2) {
		this.kvaMdT2 = kvaMdT2;
	}

	public String getKvaMdOccurtimeT2() {
		return this.kvaMdOccurtimeT2;
	}

	public void setKvaMdOccurtimeT2(String kvaMdOccurtimeT2) {
		this.kvaMdOccurtimeT2 = kvaMdOccurtimeT2;
	}

	public Double getKvaMdT3() {
		return this.kvaMdT3;
	}

	public void setKvaMdT3(Double kvaMdT3) {
		this.kvaMdT3 = kvaMdT3;
	}

	public String getKvaMdOccurtimeT3() {
		return this.kvaMdOccurtimeT3;
	}

	public void setKvaMdOccurtimeT3(String kvaMdOccurtimeT3) {
		this.kvaMdOccurtimeT3 = kvaMdOccurtimeT3;
	}

	public Double getKvaMdT4() {
		return this.kvaMdT4;
	}

	public void setKvaMdT4(Double kvaMdT4) {
		this.kvaMdT4 = kvaMdT4;
	}

	public String getKvaMdOccurtimeT4() {
		return this.kvaMdOccurtimeT4;
	}

	public void setKvaMdOccurtimeT4(String kvaMdOccurtimeT4) {
		this.kvaMdOccurtimeT4 = kvaMdOccurtimeT4;
	}

	public Double getKvaMdT5() {
		return this.kvaMdT5;
	}

	public void setKvaMdT5(Double kvaMdT5) {
		this.kvaMdT5 = kvaMdT5;
	}

	public String getKvaMdOccurtimeT5() {
		return this.kvaMdOccurtimeT5;
	}

	public void setKvaMdOccurtimeT5(String kvaMdOccurtimeT5) {
		this.kvaMdOccurtimeT5 = kvaMdOccurtimeT5;
	}

	public Double getKvaMdT6() {
		return this.kvaMdT6;
	}

	public void setKvaMdT6(Double kvaMdT6) {
		this.kvaMdT6 = kvaMdT6;
	}

	public String getKvaMdOccurtimeT6() {
		return this.kvaMdOccurtimeT6;
	}

	public void setKvaMdOccurtimeT6(String kvaMdOccurtimeT6) {
		this.kvaMdOccurtimeT6 = kvaMdOccurtimeT6;
	}

	public Double getKvaMdT7() {
		return this.kvaMdT7;
	}

	public void setKvaMdT7(Double kvaMdT7) {
		this.kvaMdT7 = kvaMdT7;
	}

	public String getKvaMdOccurtimeT7() {
		return this.kvaMdOccurtimeT7;
	}

	public void setKvaMdOccurtimeT7(String kvaMdOccurtimeT7) {
		this.kvaMdOccurtimeT7 = kvaMdOccurtimeT7;
	}

	public Double getKvaMdT8() {
		return this.kvaMdT8;
	}

	public void setKvaMdT8(Double kvaMdT8) {
		this.kvaMdT8 = kvaMdT8;
	}

	public String getKvaMdOccurtimeT8() {
		return this.kvaMdOccurtimeT8;
	}

	public void setKvaMdOccurtimeT8(String kvaMdOccurtimeT8) {
		this.kvaMdOccurtimeT8 = kvaMdOccurtimeT8;
	}

	public Double getKvaeMd() {
		return this.kvaeMd;
	}

	public void setKvaeMd(Double kvaeMd) {
		this.kvaeMd = kvaeMd;
	}

	public String getKvaeMdOccurtime() {
		return this.kvaeMdOccurtime;
	}

	public void setKvaeMdOccurtime(String kvaeMdOccurtime) {
		this.kvaeMdOccurtime = kvaeMdOccurtime;
	}

	public Double getKvaeMdT1() {
		return this.kvaeMdT1;
	}

	public void setKvaeMdT1(Double kvaeMdT1) {
		this.kvaeMdT1 = kvaeMdT1;
	}

	public String getKvaeMdOccurtimeT1() {
		return this.kvaeMdOccurtimeT1;
	}

	public void setKvaeMdOccurtimeT1(String kvaeMdOccurtimeT1) {
		this.kvaeMdOccurtimeT1 = kvaeMdOccurtimeT1;
	}

	public Double getKvaeMdT2() {
		return this.kvaeMdT2;
	}

	public void setKvaeMdT2(Double kvaeMdT2) {
		this.kvaeMdT2 = kvaeMdT2;
	}

	public String getKvaeMdOccurtimeT2() {
		return this.kvaeMdOccurtimeT2;
	}

	public void setKvaeMdOccurtimeT2(String kvaeMdOccurtimeT2) {
		this.kvaeMdOccurtimeT2 = kvaeMdOccurtimeT2;
	}

	public Double getKvaeMdT3() {
		return this.kvaeMdT3;
	}

	public void setKvaeMdT3(Double kvaeMdT3) {
		this.kvaeMdT3 = kvaeMdT3;
	}

	public String getKvaeMdOccurtimeT3() {
		return this.kvaeMdOccurtimeT3;
	}

	public void setKvaeMdOccurtimeT3(String kvaeMdOccurtimeT3) {
		this.kvaeMdOccurtimeT3 = kvaeMdOccurtimeT3;
	}

	public Double getKvaeMdT4() {
		return this.kvaeMdT4;
	}

	public void setKvaeMdT4(Double kvaeMdT4) {
		this.kvaeMdT4 = kvaeMdT4;
	}

	public String getKvaeMdOccurtimeT4() {
		return this.kvaeMdOccurtimeT4;
	}

	public void setKvaeMdOccurtimeT4(String kvaeMdOccurtimeT4) {
		this.kvaeMdOccurtimeT4 = kvaeMdOccurtimeT4;
	}

	public Double getKvaeMdT5() {
		return this.kvaeMdT5;
	}

	public void setKvaeMdT5(Double kvaeMdT5) {
		this.kvaeMdT5 = kvaeMdT5;
	}

	public String getKvaeMdOccurtimeT5() {
		return this.kvaeMdOccurtimeT5;
	}

	public void setKvaeMdOccurtimeT5(String kvaeMdOccurtimeT5) {
		this.kvaeMdOccurtimeT5 = kvaeMdOccurtimeT5;
	}

	public Double getKvaeMdT6() {
		return this.kvaeMdT6;
	}

	public void setKvaeMdT6(Double kvaeMdT6) {
		this.kvaeMdT6 = kvaeMdT6;
	}

	public String getKvaeMdOccurtimeT6() {
		return this.kvaeMdOccurtimeT6;
	}

	public void setKvaeMdOccurtimeT6(String kvaeMdOccurtimeT6) {
		this.kvaeMdOccurtimeT6 = kvaeMdOccurtimeT6;
	}

	public Double getKvaeMdT7() {
		return this.kvaeMdT7;
	}

	public void setKvaeMdT7(Double kvaeMdT7) {
		this.kvaeMdT7 = kvaeMdT7;
	}

	public String getKvaeMdOccurtimeT7() {
		return this.kvaeMdOccurtimeT7;
	}

	public void setKvaeMdOccurtimeT7(String kvaeMdOccurtimeT7) {
		this.kvaeMdOccurtimeT7 = kvaeMdOccurtimeT7;
	}

	public Double getKvaeMdT8() {
		return this.kvaeMdT8;
	}

	public void setKvaeMdT8(Double kvaeMdT8) {
		this.kvaeMdT8 = kvaeMdT8;
	}

	public String getKvaeMdOccurtimeT8() {
		return this.kvaeMdOccurtimeT8;
	}

	public void setKvaeMdOccurtimeT8(String kvaeMdOccurtimeT8) {
		this.kvaeMdOccurtimeT8 = kvaeMdOccurtimeT8;
	}

	public Double getCummdKwimport() {
		return this.cummdKwimport;
	}

	public void setCummdKwimport(Double cummdKwimport) {
		this.cummdKwimport = cummdKwimport;
	}

	public Double getCummdKwexport() {
		return this.cummdKwexport;
	}

	public void setCummdKwexport(Double cummdKwexport) {
		this.cummdKwexport = cummdKwexport;
	}

	public Double getCummdKvaimport() {
		return this.cummdKvaimport;
	}

	public void setCummdKvaimport(Double cummdKvaimport) {
		this.cummdKvaimport = cummdKvaimport;
	}

	public Double getCummdKvaexport() {
		return this.cummdKvaexport;
	}

	public void setCummdKvaexport(Double cummdKvaexport) {
		this.cummdKvaexport = cummdKvaexport;
	}

	public Double getKvarhQ1() {
		return this.kvarhQ1;
	}

	public void setKvarhQ1(Double kvarhQ1) {
		this.kvarhQ1 = kvarhQ1;
	}

	public Double getKvarhQ2() {
		return this.kvarhQ2;
	}

	public void setKvarhQ2(Double kvarhQ2) {
		this.kvarhQ2 = kvarhQ2;
	}

	public Double getKvarhQ3() {
		return this.kvarhQ3;
	}

	public void setKvarhQ3(Double kvarhQ3) {
		this.kvarhQ3 = kvarhQ3;
	}

	public Double getKvarhQ4() {
		return this.kvarhQ4;
	}

	public void setKvarhQ4(Double kvarhQ4) {
		this.kvarhQ4 = kvarhQ4;
	}

	public String getPowerOffDuration() {
		return this.powerOffDuration;
	}

	public void setPowerOffDuration(String powerOffDuration) {
		this.powerOffDuration = powerOffDuration;
	}

	public String getPowerOnDuration() {
		return this.powerOnDuration;
	}

	public void setPowerOnDuration(String powerOnDuration) {
		this.powerOnDuration = powerOnDuration;
	}

	public Integer getTamperCount() {
		return this.tamperCount;
	}

	public void setTamperCount(Integer tamperCount) {
		this.tamperCount = tamperCount;
	}

	public Double getAveragePf() {
		return this.averagePf;
	}

	public void setAveragePf(Double averagePf) {
		this.averagePf = averagePf;
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

	public String getExtraField4() {
		return this.extraField4;
	}

	public void setExtraField4(String extraField4) {
		this.extraField4 = extraField4;
	}

	public String getExtraField5() {
		return this.extraField5;
	}

	public void setExtraField5(String extraField5) {
		this.extraField5 = extraField5;
	}

	public String getExtraField6() {
		return this.extraField6;
	}

	public void setExtraField6(String extraField6) {
		this.extraField6 = extraField6;
	}

	public String getExtraField7() {
		return this.extraField7;
	}

	public void setExtraField7(String extraField7) {
		this.extraField7 = extraField7;
	}

	public String getExtraField8() {
		return this.extraField8;
	}

	public void setExtraField8(String extraField8) {
		this.extraField8 = extraField8;
	}

	public String getExtraField9() {
		return this.extraField9;
	}

	public void setExtraField9(String extraField9) {
		this.extraField9 = extraField9;
	}

	public String getExtraField10() {
		return this.extraField10;
	}

	public void setExtraField10(String extraField10) {
		this.extraField10 = extraField10;
	}

	public String getExtraField11() {
		return this.extraField11;
	}

	public void setExtraField11(String extraField11) {
		this.extraField11 = extraField11;
	}

	public String getExtraField12() {
		return this.extraField12;
	}

	public void setExtraField12(String extraField12) {
		this.extraField12 = extraField12;
	}

	public String getExtraField13() {
		return this.extraField13;
	}

	public void setExtraField13(String extraField13) {
		this.extraField13 = extraField13;
	}

	public String getExtraField14() {
		return this.extraField14;
	}

	public void setExtraField14(String extraField14) {
		this.extraField14 = extraField14;
	}

	public String getExtraField15() {
		return this.extraField15;
	}

	public void setExtraField15(String extraField15) {
		this.extraField15 = extraField15;
	}

	public String getExtraField16() {
		return this.extraField16;
	}

	public void setExtraField16(String extraField16) {
		this.extraField16 = extraField16;
	}

	public String getExtraField17() {
		return this.extraField17;
	}

	public void setExtraField17(String extraField17) {
		this.extraField17 = extraField17;
	}

	public String getExtraField18() {
		return this.extraField18;
	}

	public void setExtraField18(String extraField18) {
		this.extraField18 = extraField18;
	}

	public String getExtraField19() {
		return this.extraField19;
	}

	public void setExtraField19(String extraField19) {
		this.extraField19 = extraField19;
	}

	public String getExtraField20() {
		return this.extraField20;
	}

	public void setExtraField20(String extraField20) {
		this.extraField20 = extraField20;
	}

	public String getManufactureSpecific() {
		return this.manufactureSpecific;
	}

	public void setManufactureSpecific(String manufactureSpecific) {
		this.manufactureSpecific = manufactureSpecific;
	}

	public Integer getRequestId() {
		return requestId;
	}

	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}
	
	
}