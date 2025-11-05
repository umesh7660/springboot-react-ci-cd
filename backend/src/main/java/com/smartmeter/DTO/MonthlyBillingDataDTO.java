package com.smartmeter.DTO;

public class MonthlyBillingDataDTO {
    private String meterNo;
    private String billingDate;

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
	/*
	 * private Double kvarhQ1; private Double kvarhQ2; private Double kvarhQ3;
	 * private Double kvarhQ4;
	 */
    private String powerOffDuration;
    private String powerOnDuration;
    private Integer tamperCount;
    private Double averagePf;
    public String getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(String insertedDate) {
		this.insertedDate = insertedDate;
	}

	private String insertedDate;
    private String accountNo;

	/*
	 * private String extraField1; private String extraField2; private String
	 * extraField3;
	 */
    // Constructor
    public MonthlyBillingDataDTO() {
    }

	public String getMeterNo() {
		return meterNo;
	}

	public String getBillingDate() {
		return billingDate;
	}

	public Double getKwhImport() {
		return kwhImport;
	}

	public Double getKwhImportT1() {
		return kwhImportT1;
	}

	public Double getKwhImportT2() {
		return kwhImportT2;
	}

	public Double getKwhImportT3() {
		return kwhImportT3;
	}

	public Double getKwhImportT4() {
		return kwhImportT4;
	}

	public Double getKwhImportT5() {
		return kwhImportT5;
	}

	public Double getKwhImportT6() {
		return kwhImportT6;
	}

	public Double getKwhImportT7() {
		return kwhImportT7;
	}

	public Double getKwhImportT8() {
		return kwhImportT8;
	}

	public Double getKwhExport() {
		return kwhExport;
	}

	public Double getKwhExportT1() {
		return kwhExportT1;
	}

	public Double getKwhExportT2() {
		return kwhExportT2;
	}

	public Double getKwhExportT3() {
		return kwhExportT3;
	}

	public Double getKwhExportT4() {
		return kwhExportT4;
	}

	public Double getKwhExportT5() {
		return kwhExportT5;
	}

	public Double getKwhExportT6() {
		return kwhExportT6;
	}

	public Double getKwhExportT7() {
		return kwhExportT7;
	}

	public Double getKwhExportT8() {
		return kwhExportT8;
	}

	public Double getKvahImport() {
		return kvahImport;
	}

	public Double getKvahImportT1() {
		return kvahImportT1;
	}

	public Double getKvahImportT2() {
		return kvahImportT2;
	}

	public Double getKvahImportT3() {
		return kvahImportT3;
	}

	public Double getKvahImportT4() {
		return kvahImportT4;
	}

	public Double getKvahImportT5() {
		return kvahImportT5;
	}

	public Double getKvahImportT6() {
		return kvahImportT6;
	}

	public Double getKvahImportT7() {
		return kvahImportT7;
	}

	public Double getKvahImportT8() {
		return kvahImportT8;
	}

	public Double getKvahExport() {
		return kvahExport;
	}

	public Double getKvahExportT1() {
		return kvahExportT1;
	}

	public Double getKvahExportT2() {
		return kvahExportT2;
	}

	public Double getKvahExportT3() {
		return kvahExportT3;
	}

	public Double getKvahExportT4() {
		return kvahExportT4;
	}

	public Double getKvahExportT5() {
		return kvahExportT5;
	}

	public Double getKvahExportT6() {
		return kvahExportT6;
	}

	public Double getKvahExportT7() {
		return kvahExportT7;
	}

	public Double getKvahExportT8() {
		return kvahExportT8;
	}

	public Double getKwMd() {
		return kwMd;
	}

	public String getKwMdOccurtime() {
		return kwMdOccurtime;
	}

	public Double getKwMdT1() {
		return kwMdT1;
	}

	public String getKwMdOccurtimeT1() {
		return kwMdOccurtimeT1;
	}

	public Double getKwMdT2() {
		return kwMdT2;
	}

	public String getKwMdOccurtimeT2() {
		return kwMdOccurtimeT2;
	}

	public Double getKwMdT3() {
		return kwMdT3;
	}

	public String getKwMdOccurtimeT3() {
		return kwMdOccurtimeT3;
	}

	public Double getKwMdT4() {
		return kwMdT4;
	}

	public String getKwMdOccurtimeT4() {
		return kwMdOccurtimeT4;
	}

	public Double getKwMdT5() {
		return kwMdT5;
	}

	public String getKwMdOccurtimeT5() {
		return kwMdOccurtimeT5;
	}

	public Double getKwMdT6() {
		return kwMdT6;
	}

	public String getKwMdOccurtimeT6() {
		return kwMdOccurtimeT6;
	}

	public Double getKwMdT7() {
		return kwMdT7;
	}

	public String getKwMdOccurtimeT7() {
		return kwMdOccurtimeT7;
	}

	public Double getKwMdT8() {
		return kwMdT8;
	}

	public String getKwMdOccurtimeT8() {
		return kwMdOccurtimeT8;
	}

	public Double getKweMd() {
		return kweMd;
	}

	public String getKweMdOccurtime() {
		return kweMdOccurtime;
	}

	public Double getKweMdT1() {
		return kweMdT1;
	}

	public String getKweMdOccurtimeT1() {
		return kweMdOccurtimeT1;
	}

	public Double getKweMdT2() {
		return kweMdT2;
	}

	public String getKweMdOccurtimeT2() {
		return kweMdOccurtimeT2;
	}

	public Double getKweMdT3() {
		return kweMdT3;
	}

	public String getKweMdOccurtimeT3() {
		return kweMdOccurtimeT3;
	}

	public Double getKweMdT4() {
		return kweMdT4;
	}

	public String getKweMdOccurtimeT4() {
		return kweMdOccurtimeT4;
	}

	public Double getKweMdT5() {
		return kweMdT5;
	}

	public String getKweMdOccurtimeT5() {
		return kweMdOccurtimeT5;
	}

	public Double getKweMdT6() {
		return kweMdT6;
	}

	public String getKweMdOccurtimeT6() {
		return kweMdOccurtimeT6;
	}

	public Double getKweMdT7() {
		return kweMdT7;
	}

	public String getKweMdOccurtimeT7() {
		return kweMdOccurtimeT7;
	}

	public Double getKweMdT8() {
		return kweMdT8;
	}

	public String getKweMdOccurtimeT8() {
		return kweMdOccurtimeT8;
	}

	public Double getKvaMd() {
		return kvaMd;
	}

	public String getKvaMdOccurtime() {
		return kvaMdOccurtime;
	}

	public Double getKvaMdT1() {
		return kvaMdT1;
	}

	public String getKvaMdOccurtimeT1() {
		return kvaMdOccurtimeT1;
	}

	public Double getKvaMdT2() {
		return kvaMdT2;
	}

	public String getKvaMdOccurtimeT2() {
		return kvaMdOccurtimeT2;
	}

	public Double getKvaMdT3() {
		return kvaMdT3;
	}

	public String getKvaMdOccurtimeT3() {
		return kvaMdOccurtimeT3;
	}

	public Double getKvaMdT4() {
		return kvaMdT4;
	}

	public String getKvaMdOccurtimeT4() {
		return kvaMdOccurtimeT4;
	}

	public Double getKvaMdT5() {
		return kvaMdT5;
	}

	public String getKvaMdOccurtimeT5() {
		return kvaMdOccurtimeT5;
	}

	public Double getKvaMdT6() {
		return kvaMdT6;
	}

	public String getKvaMdOccurtimeT6() {
		return kvaMdOccurtimeT6;
	}

	public Double getKvaMdT7() {
		return kvaMdT7;
	}

	public String getKvaMdOccurtimeT7() {
		return kvaMdOccurtimeT7;
	}

	public Double getKvaMdT8() {
		return kvaMdT8;
	}

	public String getKvaMdOccurtimeT8() {
		return kvaMdOccurtimeT8;
	}

	public Double getKvaeMd() {
		return kvaeMd;
	}

	public String getKvaeMdOccurtime() {
		return kvaeMdOccurtime;
	}

	public Double getKvaeMdT1() {
		return kvaeMdT1;
	}

	public String getKvaeMdOccurtimeT1() {
		return kvaeMdOccurtimeT1;
	}

	public Double getKvaeMdT2() {
		return kvaeMdT2;
	}

	public String getKvaeMdOccurtimeT2() {
		return kvaeMdOccurtimeT2;
	}

	public Double getKvaeMdT3() {
		return kvaeMdT3;
	}

	public String getKvaeMdOccurtimeT3() {
		return kvaeMdOccurtimeT3;
	}

	public Double getKvaeMdT4() {
		return kvaeMdT4;
	}

	public String getKvaeMdOccurtimeT4() {
		return kvaeMdOccurtimeT4;
	}

	public Double getKvaeMdT5() {
		return kvaeMdT5;
	}

	public String getKvaeMdOccurtimeT5() {
		return kvaeMdOccurtimeT5;
	}

	public Double getKvaeMdT6() {
		return kvaeMdT6;
	}

	public String getKvaeMdOccurtimeT6() {
		return kvaeMdOccurtimeT6;
	}

	public Double getKvaeMdT7() {
		return kvaeMdT7;
	}

	public String getKvaeMdOccurtimeT7() {
		return kvaeMdOccurtimeT7;
	}

	public Double getKvaeMdT8() {
		return kvaeMdT8;
	}

	public String getKvaeMdOccurtimeT8() {
		return kvaeMdOccurtimeT8;
	}

	public Double getCummdKwimport() {
		return cummdKwimport;
	}

	public Double getCummdKwexport() {
		return cummdKwexport;
	}

	public Double getCummdKvaimport() {
		return cummdKvaimport;
	}

	public Double getCummdKvaexport() {
		return cummdKvaexport;
	}

	
	public String getPowerOffDuration() {
		return powerOffDuration;
	}

	public String getPowerOnDuration() {
		return powerOnDuration;
	}

	public Integer getTamperCount() {
		return tamperCount;
	}

	public Double getAveragePf() {
		return averagePf;
	}


	public String getAccountNo() {
		return accountNo;
	}

	
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public void setBillingDate(String billingDate) {
		this.billingDate = billingDate;
	}

	public void setKwhImport(Double kwhImport) {
		this.kwhImport = kwhImport;
	}

	public void setKwhImportT1(Double kwhImportT1) {
		this.kwhImportT1 = kwhImportT1;
	}

	public void setKwhImportT2(Double kwhImportT2) {
		this.kwhImportT2 = kwhImportT2;
	}

	public void setKwhImportT3(Double kwhImportT3) {
		this.kwhImportT3 = kwhImportT3;
	}

	public void setKwhImportT4(Double kwhImportT4) {
		this.kwhImportT4 = kwhImportT4;
	}

	public void setKwhImportT5(Double kwhImportT5) {
		this.kwhImportT5 = kwhImportT5;
	}

	public void setKwhImportT6(Double kwhImportT6) {
		this.kwhImportT6 = kwhImportT6;
	}

	public void setKwhImportT7(Double kwhImportT7) {
		this.kwhImportT7 = kwhImportT7;
	}

	public void setKwhImportT8(Double kwhImportT8) {
		this.kwhImportT8 = kwhImportT8;
	}

	public void setKwhExport(Double kwhExport) {
		this.kwhExport = kwhExport;
	}

	public void setKwhExportT1(Double kwhExportT1) {
		this.kwhExportT1 = kwhExportT1;
	}

	public void setKwhExportT2(Double kwhExportT2) {
		this.kwhExportT2 = kwhExportT2;
	}

	public void setKwhExportT3(Double kwhExportT3) {
		this.kwhExportT3 = kwhExportT3;
	}

	public void setKwhExportT4(Double kwhExportT4) {
		this.kwhExportT4 = kwhExportT4;
	}

	public void setKwhExportT5(Double kwhExportT5) {
		this.kwhExportT5 = kwhExportT5;
	}

	public void setKwhExportT6(Double kwhExportT6) {
		this.kwhExportT6 = kwhExportT6;
	}

	public void setKwhExportT7(Double kwhExportT7) {
		this.kwhExportT7 = kwhExportT7;
	}

	public void setKwhExportT8(Double kwhExportT8) {
		this.kwhExportT8 = kwhExportT8;
	}

	public void setKvahImport(Double kvahImport) {
		this.kvahImport = kvahImport;
	}

	public void setKvahImportT1(Double kvahImportT1) {
		this.kvahImportT1 = kvahImportT1;
	}

	public void setKvahImportT2(Double kvahImportT2) {
		this.kvahImportT2 = kvahImportT2;
	}

	public void setKvahImportT3(Double kvahImportT3) {
		this.kvahImportT3 = kvahImportT3;
	}

	public void setKvahImportT4(Double kvahImportT4) {
		this.kvahImportT4 = kvahImportT4;
	}

	public void setKvahImportT5(Double kvahImportT5) {
		this.kvahImportT5 = kvahImportT5;
	}

	public void setKvahImportT6(Double kvahImportT6) {
		this.kvahImportT6 = kvahImportT6;
	}

	public void setKvahImportT7(Double kvahImportT7) {
		this.kvahImportT7 = kvahImportT7;
	}

	public void setKvahImportT8(Double kvahImportT8) {
		this.kvahImportT8 = kvahImportT8;
	}

	public void setKvahExport(Double kvahExport) {
		this.kvahExport = kvahExport;
	}

	public void setKvahExportT1(Double kvahExportT1) {
		this.kvahExportT1 = kvahExportT1;
	}

	public void setKvahExportT2(Double kvahExportT2) {
		this.kvahExportT2 = kvahExportT2;
	}

	public void setKvahExportT3(Double kvahExportT3) {
		this.kvahExportT3 = kvahExportT3;
	}

	public void setKvahExportT4(Double kvahExportT4) {
		this.kvahExportT4 = kvahExportT4;
	}

	public void setKvahExportT5(Double kvahExportT5) {
		this.kvahExportT5 = kvahExportT5;
	}

	public void setKvahExportT6(Double kvahExportT6) {
		this.kvahExportT6 = kvahExportT6;
	}

	public void setKvahExportT7(Double kvahExportT7) {
		this.kvahExportT7 = kvahExportT7;
	}

	public void setKvahExportT8(Double kvahExportT8) {
		this.kvahExportT8 = kvahExportT8;
	}

	public void setKwMd(Double kwMd) {
		this.kwMd = kwMd;
	}

	public void setKwMdOccurtime(String kwMdOccurtime) {
		this.kwMdOccurtime = kwMdOccurtime;
	}

	public void setKwMdT1(Double kwMdT1) {
		this.kwMdT1 = kwMdT1;
	}

	public void setKwMdOccurtimeT1(String kwMdOccurtimeT1) {
		this.kwMdOccurtimeT1 = kwMdOccurtimeT1;
	}

	public void setKwMdT2(Double kwMdT2) {
		this.kwMdT2 = kwMdT2;
	}

	public void setKwMdOccurtimeT2(String kwMdOccurtimeT2) {
		this.kwMdOccurtimeT2 = kwMdOccurtimeT2;
	}

	public void setKwMdT3(Double kwMdT3) {
		this.kwMdT3 = kwMdT3;
	}

	public void setKwMdOccurtimeT3(String kwMdOccurtimeT3) {
		this.kwMdOccurtimeT3 = kwMdOccurtimeT3;
	}

	public void setKwMdT4(Double kwMdT4) {
		this.kwMdT4 = kwMdT4;
	}

	public void setKwMdOccurtimeT4(String kwMdOccurtimeT4) {
		this.kwMdOccurtimeT4 = kwMdOccurtimeT4;
	}

	public void setKwMdT5(Double kwMdT5) {
		this.kwMdT5 = kwMdT5;
	}

	public void setKwMdOccurtimeT5(String kwMdOccurtimeT5) {
		this.kwMdOccurtimeT5 = kwMdOccurtimeT5;
	}

	public void setKwMdT6(Double kwMdT6) {
		this.kwMdT6 = kwMdT6;
	}

	public void setKwMdOccurtimeT6(String kwMdOccurtimeT6) {
		this.kwMdOccurtimeT6 = kwMdOccurtimeT6;
	}

	public void setKwMdT7(Double kwMdT7) {
		this.kwMdT7 = kwMdT7;
	}

	public void setKwMdOccurtimeT7(String kwMdOccurtimeT7) {
		this.kwMdOccurtimeT7 = kwMdOccurtimeT7;
	}

	public void setKwMdT8(Double kwMdT8) {
		this.kwMdT8 = kwMdT8;
	}

	public void setKwMdOccurtimeT8(String kwMdOccurtimeT8) {
		this.kwMdOccurtimeT8 = kwMdOccurtimeT8;
	}

	public void setKweMd(Double kweMd) {
		this.kweMd = kweMd;
	}

	public void setKweMdOccurtime(String kweMdOccurtime) {
		this.kweMdOccurtime = kweMdOccurtime;
	}

	public void setKweMdT1(Double kweMdT1) {
		this.kweMdT1 = kweMdT1;
	}

	public void setKweMdOccurtimeT1(String kweMdOccurtimeT1) {
		this.kweMdOccurtimeT1 = kweMdOccurtimeT1;
	}

	public void setKweMdT2(Double kweMdT2) {
		this.kweMdT2 = kweMdT2;
	}

	public void setKweMdOccurtimeT2(String kweMdOccurtimeT2) {
		this.kweMdOccurtimeT2 = kweMdOccurtimeT2;
	}

	public void setKweMdT3(Double kweMdT3) {
		this.kweMdT3 = kweMdT3;
	}

	public void setKweMdOccurtimeT3(String kweMdOccurtimeT3) {
		this.kweMdOccurtimeT3 = kweMdOccurtimeT3;
	}

	public void setKweMdT4(Double kweMdT4) {
		this.kweMdT4 = kweMdT4;
	}

	public void setKweMdOccurtimeT4(String kweMdOccurtimeT4) {
		this.kweMdOccurtimeT4 = kweMdOccurtimeT4;
	}

	public void setKweMdT5(Double kweMdT5) {
		this.kweMdT5 = kweMdT5;
	}

	public void setKweMdOccurtimeT5(String kweMdOccurtimeT5) {
		this.kweMdOccurtimeT5 = kweMdOccurtimeT5;
	}

	public void setKweMdT6(Double kweMdT6) {
		this.kweMdT6 = kweMdT6;
	}

	public void setKweMdOccurtimeT6(String kweMdOccurtimeT6) {
		this.kweMdOccurtimeT6 = kweMdOccurtimeT6;
	}

	public void setKweMdT7(Double kweMdT7) {
		this.kweMdT7 = kweMdT7;
	}

	public void setKweMdOccurtimeT7(String kweMdOccurtimeT7) {
		this.kweMdOccurtimeT7 = kweMdOccurtimeT7;
	}

	public void setKweMdT8(Double kweMdT8) {
		this.kweMdT8 = kweMdT8;
	}

	public void setKweMdOccurtimeT8(String kweMdOccurtimeT8) {
		this.kweMdOccurtimeT8 = kweMdOccurtimeT8;
	}

	public void setKvaMd(Double kvaMd) {
		this.kvaMd = kvaMd;
	}

	public void setKvaMdOccurtime(String kvaMdOccurtime) {
		this.kvaMdOccurtime = kvaMdOccurtime;
	}

	public void setKvaMdT1(Double kvaMdT1) {
		this.kvaMdT1 = kvaMdT1;
	}

	public void setKvaMdOccurtimeT1(String kvaMdOccurtimeT1) {
		this.kvaMdOccurtimeT1 = kvaMdOccurtimeT1;
	}

	public void setKvaMdT2(Double kvaMdT2) {
		this.kvaMdT2 = kvaMdT2;
	}

	public void setKvaMdOccurtimeT2(String kvaMdOccurtimeT2) {
		this.kvaMdOccurtimeT2 = kvaMdOccurtimeT2;
	}

	public void setKvaMdT3(Double kvaMdT3) {
		this.kvaMdT3 = kvaMdT3;
	}

	public void setKvaMdOccurtimeT3(String kvaMdOccurtimeT3) {
		this.kvaMdOccurtimeT3 = kvaMdOccurtimeT3;
	}

	public void setKvaMdT4(Double kvaMdT4) {
		this.kvaMdT4 = kvaMdT4;
	}

	public void setKvaMdOccurtimeT4(String kvaMdOccurtimeT4) {
		this.kvaMdOccurtimeT4 = kvaMdOccurtimeT4;
	}

	public void setKvaMdT5(Double kvaMdT5) {
		this.kvaMdT5 = kvaMdT5;
	}

	public void setKvaMdOccurtimeT5(String kvaMdOccurtimeT5) {
		this.kvaMdOccurtimeT5 = kvaMdOccurtimeT5;
	}

	public void setKvaMdT6(Double kvaMdT6) {
		this.kvaMdT6 = kvaMdT6;
	}

	public void setKvaMdOccurtimeT6(String kvaMdOccurtimeT6) {
		this.kvaMdOccurtimeT6 = kvaMdOccurtimeT6;
	}

	public void setKvaMdT7(Double kvaMdT7) {
		this.kvaMdT7 = kvaMdT7;
	}

	public void setKvaMdOccurtimeT7(String kvaMdOccurtimeT7) {
		this.kvaMdOccurtimeT7 = kvaMdOccurtimeT7;
	}

	public void setKvaMdT8(Double kvaMdT8) {
		this.kvaMdT8 = kvaMdT8;
	}

	public void setKvaMdOccurtimeT8(String kvaMdOccurtimeT8) {
		this.kvaMdOccurtimeT8 = kvaMdOccurtimeT8;
	}

	public void setKvaeMd(Double kvaeMd) {
		this.kvaeMd = kvaeMd;
	}

	public void setKvaeMdOccurtime(String kvaeMdOccurtime) {
		this.kvaeMdOccurtime = kvaeMdOccurtime;
	}

	public void setKvaeMdT1(Double kvaeMdT1) {
		this.kvaeMdT1 = kvaeMdT1;
	}

	public void setKvaeMdOccurtimeT1(String kvaeMdOccurtimeT1) {
		this.kvaeMdOccurtimeT1 = kvaeMdOccurtimeT1;
	}

	public void setKvaeMdT2(Double kvaeMdT2) {
		this.kvaeMdT2 = kvaeMdT2;
	}

	public void setKvaeMdOccurtimeT2(String kvaeMdOccurtimeT2) {
		this.kvaeMdOccurtimeT2 = kvaeMdOccurtimeT2;
	}

	public void setKvaeMdT3(Double kvaeMdT3) {
		this.kvaeMdT3 = kvaeMdT3;
	}

	public void setKvaeMdOccurtimeT3(String kvaeMdOccurtimeT3) {
		this.kvaeMdOccurtimeT3 = kvaeMdOccurtimeT3;
	}

	public void setKvaeMdT4(Double kvaeMdT4) {
		this.kvaeMdT4 = kvaeMdT4;
	}

	public void setKvaeMdOccurtimeT4(String kvaeMdOccurtimeT4) {
		this.kvaeMdOccurtimeT4 = kvaeMdOccurtimeT4;
	}

	public void setKvaeMdT5(Double kvaeMdT5) {
		this.kvaeMdT5 = kvaeMdT5;
	}

	public void setKvaeMdOccurtimeT5(String kvaeMdOccurtimeT5) {
		this.kvaeMdOccurtimeT5 = kvaeMdOccurtimeT5;
	}

	public void setKvaeMdT6(Double kvaeMdT6) {
		this.kvaeMdT6 = kvaeMdT6;
	}

	public void setKvaeMdOccurtimeT6(String kvaeMdOccurtimeT6) {
		this.kvaeMdOccurtimeT6 = kvaeMdOccurtimeT6;
	}

	public void setKvaeMdT7(Double kvaeMdT7) {
		this.kvaeMdT7 = kvaeMdT7;
	}

	public void setKvaeMdOccurtimeT7(String kvaeMdOccurtimeT7) {
		this.kvaeMdOccurtimeT7 = kvaeMdOccurtimeT7;
	}

	public void setKvaeMdT8(Double kvaeMdT8) {
		this.kvaeMdT8 = kvaeMdT8;
	}

	public void setKvaeMdOccurtimeT8(String kvaeMdOccurtimeT8) {
		this.kvaeMdOccurtimeT8 = kvaeMdOccurtimeT8;
	}

	public void setCummdKwimport(Double cummdKwimport) {
		this.cummdKwimport = cummdKwimport;
	}

	public void setCummdKwexport(Double cummdKwexport) {
		this.cummdKwexport = cummdKwexport;
	}

	public void setCummdKvaimport(Double cummdKvaimport) {
		this.cummdKvaimport = cummdKvaimport;
	}

	public void setCummdKvaexport(Double cummdKvaexport) {
		this.cummdKvaexport = cummdKvaexport;
	}


	public void setPowerOffDuration(String powerOffDuration) {
		this.powerOffDuration = powerOffDuration;
	}

	public void setPowerOnDuration(String powerOnDuration) {
		this.powerOnDuration = powerOnDuration;
	}

	public void setTamperCount(Integer tamperCount) {
		this.tamperCount = tamperCount;
	}

	public void setAveragePf(Double averagePf) {
		this.averagePf = averagePf;
	}


	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	/*
	 * public void setKvarhQ1(Double kvarhQ1) { this.kvarhQ1 = kvarhQ1; }
	 * 
	 * public void setKvarhQ2(Double kvarhQ2) { this.kvarhQ2 = kvarhQ2; }
	 * 
	 * public void setKvarhQ3(Double kvarhQ3) { this.kvarhQ3 = kvarhQ3; }
	 * 
	 * public void setKvarhQ4(Double kvarhQ4) { this.kvarhQ4 = kvarhQ4; } public
	 * void setExtraField1(String extraField1) { this.extraField1 = extraField1; }
	 * 
	 * public void setExtraField2(String extraField2) { this.extraField2 =
	 * extraField2; }
	 * 
	 * public void setExtraField3(String extraField3) { this.extraField3 =
	 * extraField3; } public String getExtraField1() { return extraField1; }
	 * 
	 * public String getExtraField2() { return extraField2; }
	 * 
	 * public String getExtraField3() { return extraField3; } public Double
	 * getKvarhQ1() { return kvarhQ1; }
	 * 
	 * public Double getKvarhQ2() { return kvarhQ2; }
	 * 
	 * public Double getKvarhQ3() { return kvarhQ3; }
	 * 
	 * public Double getKvarhQ4() { return kvarhQ4; }
	 */

}
