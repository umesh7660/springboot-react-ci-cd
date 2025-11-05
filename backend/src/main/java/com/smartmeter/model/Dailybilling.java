package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Dailybilling2016 entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "daily_billing")
public class Dailybilling implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private DailybillingId id;
	private Double cumengyKwhImp;
	private Double cumengyKwhExp;
	private Double cumengyKvahImp;
	private Double cumengyKvahExp;
	private Double cumengyQi;
	private Double cumengyQii;
	private Double cumengyQiii;
	private Double cumengyQiv;
	private Timestamp insertedDate;
	private String accountNo;
	private String extraField1;
	private String extraField2;
	private String extraField3;
	private Integer requestId;
	// Constructors

	/** default constructor */
	public Dailybilling() {
	}

	/** minimal constructor */
	public Dailybilling(DailybillingId id) {
		this.id = id;
	}

	/** full constructor */
	public Dailybilling(DailybillingId id, Double cumengyKwhImp,
			Double cumengyKwhExp, Double cumengyKvahImp, Double cumengyKvahExp,
			Double cumengyQi, Double cumengyQii, Double cumengyQiii,
			Double cumengyQiv, Timestamp insertedDate, String accountNo,
			String extraField1, String extraField2, String extraField3, Integer requestId) {
		this.id = id;
		this.cumengyKwhImp = cumengyKwhImp;
		this.cumengyKwhExp = cumengyKwhExp;
		this.cumengyKvahImp = cumengyKvahImp;
		this.cumengyKvahExp = cumengyKvahExp;
		this.cumengyQi = cumengyQi;
		this.cumengyQii = cumengyQii;
		this.cumengyQiii = cumengyQiii;
		this.cumengyQiv = cumengyQiv;
		this.insertedDate = insertedDate;
		this.accountNo = accountNo;
		this.extraField1 = extraField1;
		this.extraField2 = extraField2;
		this.extraField3 = extraField3;
		this.requestId =requestId;
	}

	// Property accessors

	public DailybillingId getId() {
		return this.id;
	}

	public void setId(DailybillingId id) {
		this.id = id;
	}

	public Double getCumengyKwhImp() {
		return this.cumengyKwhImp;
	}

	public void setCumengyKwhImp(Double cumengyKwhImp) {
		this.cumengyKwhImp = cumengyKwhImp;
	}

	public Double getCumengyKwhExp() {
		return this.cumengyKwhExp;
	}

	public void setCumengyKwhExp(Double cumengyKwhExp) {
		this.cumengyKwhExp = cumengyKwhExp;
	}

	public Double getCumengyKvahImp() {
		return this.cumengyKvahImp;
	}

	public void setCumengyKvahImp(Double cumengyKvahImp) {
		this.cumengyKvahImp = cumengyKvahImp;
	}

	public Double getCumengyKvahExp() {
		return this.cumengyKvahExp;
	}

	public void setCumengyKvahExp(Double cumengyKvahExp) {
		this.cumengyKvahExp = cumengyKvahExp;
	}

	public Double getCumengyQi() {
		return this.cumengyQi;
	}

	public void setCumengyQi(Double cumengyQi) {
		this.cumengyQi = cumengyQi;
	}

	public Double getCumengyQii() {
		return this.cumengyQii;
	}

	public void setCumengyQii(Double cumengyQii) {
		this.cumengyQii = cumengyQii;
	}

	public Double getCumengyQiii() {
		return this.cumengyQiii;
	}

	public void setCumengyQiii(Double cumengyQiii) {
		this.cumengyQiii = cumengyQiii;
	}

	public Double getCumengyQiv() {
		return this.cumengyQiv;
	}

	public void setCumengyQiv(Double cumengyQiv) {
		this.cumengyQiv = cumengyQiv;
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

	public Integer getRequestId() {
		return requestId;
	}

	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}

	
}