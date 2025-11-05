// default package
package com.smartmeter.model;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * MasterData entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "master_data")
public class MasterData implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@Id
	private String meterNo;
	@Column(name = "level1_id")
    private Integer level1Id;

    @Column(name = "level2_id")
    private Integer level2Id;

    @Column(name = "level3_id")
    private Integer level3Id;

    @Column(name = "level4_id")
    private Integer level4Id;

    @Column(name = "level5_id")
    private Integer level5Id;

    @Column(name = "level6_id")
    private Integer level6Id;

    @Column(name = "level7_id")
    private Integer level7Id;

    @Column(name = "level8_id")
    private Integer level8Id;

    @Column(name = "level9_id")
    private Integer level9Id;

    @Column(name = "level10_id")
    private Integer level10Id;

    @Column(name = "level1_code")
    private String level1Code;

    @Column(name = "level2_code")
    private String level2Code;

    @Column(name = "level3_code")
    private String level3Code;

    @Column(name = "level4_code")
    private String level4Code;

    @Column(name = "level5_code")
    private String level5Code;

    @Column(name = "level6_code")
    private String level6Code;

    @Column(name = "level7_code")
    private String level7Code;

    @Column(name = "level8_code")
    private String level8Code;

    @Column(name = "level9_code")
    private String level9Code;

    @Column(name = "level10_code")
    private String level10Code;
    
	private String acno;
	private String consumerId;
	private String consumerNo;
	private String consumerName;
	private String address;
	private String category;
	private Integer subCategory;
	private Double cdKva;
	private Double mf;
	private String make;
	private String unit;
	private String phase;
	private Timestamp connectionDate;
	private String flag;
	private String substationName;
	private String substationCode;
	private String feederCode;
	private String feederName;
	private String dtrCode;
	private String dtrName;
	private String modemNumber;
	private String modemMdn;
	private String simProviderName;
	private Long mobileNo;
	private String tod;
	private String voltageRating;
	private String modemManufacturername;
	private String modemshedulecommunication;
	private String ipAddress;
	private String portNumber;
	private String meterPhonenumber;
	private String latitude;
	private String longitude;
	private String ledgerno;
	private String billingcycle;
	private String networkmapping;
	private String metertype;
	private String locationofmeter;
	private String assetno;
	private String billingparameterType;
	private Double avgUnits;
	private String meterconnectionType;
	private String maxdemandPercentage;
	private String billingdate;
	private String overloadLimit;
	private String overcurrentLimit;
	private String undervoltage;
	private String overvoltage;
	private String profilecapturedperiod;
	private String topcovertamper;
	private String instailKwhreading;
	private String demandIntigration;
	private String communicationsetting;
	private String reducedmaxdemand;
	private Timestamp insertedDate;
	private String realaystatus;
	private String happyhoursStart;
	private String happyhoursEnd;
	private String emergencyCredit;
	private String instantFreq;
	private String rawFreq;
	private String alarmFreq;
	private String emergencyDays;
	private String brownperiodDays;
	private String gatewayName;
	private String connectionTime;

	// Constructors

	/** default constructor */
	public MasterData() {
	}

	/** minimal constructor */
	public MasterData(String meterNo) {
		this.meterNo = meterNo;
	}

	/** full constructor */
	public MasterData(String meterNo, Integer level1Id, Integer level2Id,
			Integer level3Id, Integer level4Id, Integer level5Id,
			Integer level6Id, Integer level7Id, Integer level8Id,
			Integer level9Id, Integer level10Id, String level1Code,
			String level2Code, String level3Code, String level4Code,
			String level5Code, String level6Code, String level7Code,
			String level8Code, String level9Code, String level10Code,
			String acno, String consumerId, String consumerNo,
			String consumerName, String address, String category,
			Integer subCategory, Double cdKva, Double mf, String make,
			String unit, String phase, Timestamp connectionDate, String flag,
			String substationName, String substationCode, String feederCode,
			String feederName, String dtrCode, String dtrName,
			String modemNumber, String modemMdn, String simProviderName,
			Long mobileNo, String tod, String voltageRating,
			String modemManufacturername, String modemshedulecommunication,
			String ipAddress, String portNumber, String meterPhonenumber,
			String latitude, String longitude, String ledgerno,
			String billingcycle, String networkmapping, String metertype,
			String locationofmeter, String assetno,
			String billingparameterType, Double avgUnits,
			String meterconnectionType, String maxdemandPercentage,
			String billingdate, String overloadLimit, String overcurrentLimit,
			String undervoltage, String overvoltage,
			String profilecapturedperiod, String topcovertamper,
			String instailKwhreading, String demandIntigration,
			String communicationsetting, String reducedmaxdemand,
			Timestamp insertedDate, String realaystatus,
			String happyhoursStart, String happyhoursEnd,
			String emergencyCredit, String instantFreq, String rawFreq,
			String alarmFreq, String emergencyDays, String brownperiodDays,
			String gatewayName, String connectionTime) {
		this.meterNo = meterNo;
		this.level1Id = level1Id;
		this.level2Id = level2Id;
		this.level3Id = level3Id;
		this.level4Id = level4Id;
		this.level5Id = level5Id;
		this.level6Id = level6Id;
		this.level7Id = level7Id;
		this.level8Id = level8Id;
		this.level9Id = level9Id;
		this.level10Id = level10Id;
		this.level1Code = level1Code;
		this.level2Code = level2Code;
		this.level3Code = level3Code;
		this.level4Code = level4Code;
		this.level5Code = level5Code;
		this.level6Code = level6Code;
		this.level7Code = level7Code;
		this.level8Code = level8Code;
		this.level9Code = level9Code;
		this.level10Code = level10Code;
		this.acno = acno;
		this.consumerId = consumerId;
		this.consumerNo = consumerNo;
		this.consumerName = consumerName;
		this.address = address;
		this.category = category;
		this.subCategory = subCategory;
		this.cdKva = cdKva;
		this.mf = mf;
		this.make = make;
		this.unit = unit;
		this.phase = phase;
		this.connectionDate = connectionDate;
		this.flag = flag;
		this.substationName = substationName;
		this.substationCode = substationCode;
		this.feederCode = feederCode;
		this.feederName = feederName;
		this.dtrCode = dtrCode;
		this.dtrName = dtrName;
		this.modemNumber = modemNumber;
		this.modemMdn = modemMdn;
		this.simProviderName = simProviderName;
		this.mobileNo = mobileNo;
		this.tod = tod;
		this.voltageRating = voltageRating;
		this.modemManufacturername = modemManufacturername;
		this.modemshedulecommunication = modemshedulecommunication;
		this.ipAddress = ipAddress;
		this.portNumber = portNumber;
		this.meterPhonenumber = meterPhonenumber;
		this.latitude = latitude;
		this.longitude = longitude;
		this.ledgerno = ledgerno;
		this.billingcycle = billingcycle;
		this.networkmapping = networkmapping;
		this.metertype = metertype;
		this.locationofmeter = locationofmeter;
		this.assetno = assetno;
		this.billingparameterType = billingparameterType;
		this.avgUnits = avgUnits;
		this.meterconnectionType = meterconnectionType;
		this.maxdemandPercentage = maxdemandPercentage;
		this.billingdate = billingdate;
		this.overloadLimit = overloadLimit;
		this.overcurrentLimit = overcurrentLimit;
		this.undervoltage = undervoltage;
		this.overvoltage = overvoltage;
		this.profilecapturedperiod = profilecapturedperiod;
		this.topcovertamper = topcovertamper;
		this.instailKwhreading = instailKwhreading;
		this.demandIntigration = demandIntigration;
		this.communicationsetting = communicationsetting;
		this.reducedmaxdemand = reducedmaxdemand;
		this.insertedDate = insertedDate;
		this.realaystatus = realaystatus;
		this.happyhoursStart = happyhoursStart;
		this.happyhoursEnd = happyhoursEnd;
		this.emergencyCredit = emergencyCredit;
		this.instantFreq = instantFreq;
		this.rawFreq = rawFreq;
		this.alarmFreq = alarmFreq;
		this.emergencyDays = emergencyDays;
		this.brownperiodDays = brownperiodDays;
		this.gatewayName = gatewayName;
		this.connectionTime = connectionTime;
	}

	// Property accessors

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public Integer getLevel1Id() {
		return this.level1Id;
	}

	public void setLevel1Id(Integer level1Id) {
		this.level1Id = level1Id;
	}

	public Integer getLevel2Id() {
		return this.level2Id;
	}

	public void setLevel2Id(Integer level2Id) {
		this.level2Id = level2Id;
	}

	public Integer getLevel3Id() {
		return this.level3Id;
	}

	public void setLevel3Id(Integer level3Id) {
		this.level3Id = level3Id;
	}

	public Integer getLevel4Id() {
		return this.level4Id;
	}

	public void setLevel4Id(Integer level4Id) {
		this.level4Id = level4Id;
	}

	public Integer getLevel5Id() {
		return this.level5Id;
	}

	public void setLevel5Id(Integer level5Id) {
		this.level5Id = level5Id;
	}

	public Integer getLevel6Id() {
		return this.level6Id;
	}

	public void setLevel6Id(Integer level6Id) {
		this.level6Id = level6Id;
	}

	public Integer getLevel7Id() {
		return this.level7Id;
	}

	public void setLevel7Id(Integer level7Id) {
		this.level7Id = level7Id;
	}

	public Integer getLevel8Id() {
		return this.level8Id;
	}

	public void setLevel8Id(Integer level8Id) {
		this.level8Id = level8Id;
	}

	public Integer getLevel9Id() {
		return this.level9Id;
	}

	public void setLevel9Id(Integer level9Id) {
		this.level9Id = level9Id;
	}

	public Integer getLevel10Id() {
		return this.level10Id;
	}

	public void setLevel10Id(Integer level10Id) {
		this.level10Id = level10Id;
	}

	public String getLevel1Code() {
		return this.level1Code;
	}

	public void setLevel1Code(String level1Code) {
		this.level1Code = level1Code;
	}

	public String getLevel2Code() {
		return this.level2Code;
	}

	public void setLevel2Code(String level2Code) {
		this.level2Code = level2Code;
	}

	public String getLevel3Code() {
		return this.level3Code;
	}

	public void setLevel3Code(String level3Code) {
		this.level3Code = level3Code;
	}

	public String getLevel4Code() {
		return this.level4Code;
	}

	public void setLevel4Code(String level4Code) {
		this.level4Code = level4Code;
	}

	public String getLevel5Code() {
		return this.level5Code;
	}

	public void setLevel5Code(String level5Code) {
		this.level5Code = level5Code;
	}

	public String getLevel6Code() {
		return this.level6Code;
	}

	public void setLevel6Code(String level6Code) {
		this.level6Code = level6Code;
	}

	public String getLevel7Code() {
		return this.level7Code;
	}

	public void setLevel7Code(String level7Code) {
		this.level7Code = level7Code;
	}

	public String getLevel8Code() {
		return this.level8Code;
	}

	public void setLevel8Code(String level8Code) {
		this.level8Code = level8Code;
	}

	public String getLevel9Code() {
		return this.level9Code;
	}

	public void setLevel9Code(String level9Code) {
		this.level9Code = level9Code;
	}

	public String getLevel10Code() {
		return this.level10Code;
	}

	public void setLevel10Code(String level10Code) {
		this.level10Code = level10Code;
	}

	public String getAcno() {
		return this.acno;
	}

	public void setAcno(String acno) {
		this.acno = acno;
	}

	public String getConsumerId() {
		return this.consumerId;
	}

	public void setConsumerId(String consumerId) {
		this.consumerId = consumerId;
	}

	public String getConsumerNo() {
		return this.consumerNo;
	}

	public void setConsumerNo(String consumerNo) {
		this.consumerNo = consumerNo;
	}

	public String getConsumerName() {
		return this.consumerName;
	}

	public void setConsumerName(String consumerName) {
		this.consumerName = consumerName;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCategory() {
		return this.category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getSubCategory() {
		return this.subCategory;
	}

	public void setSubCategory(Integer subCategory) {
		this.subCategory = subCategory;
	}

	public Double getCdKva() {
		return this.cdKva;
	}

	public void setCdKva(Double cdKva) {
		this.cdKva = cdKva;
	}

	public Double getMf() {
		return this.mf;
	}

	public void setMf(Double mf) {
		this.mf = mf;
	}

	public String getMake() {
		return this.make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getUnit() {
		return this.unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getPhase() {
		return this.phase;
	}

	public void setPhase(String phase) {
		this.phase = phase;
	}

	public Timestamp getConnectionDate() {
		return this.connectionDate;
	}

	public void setConnectionDate(Timestamp connectionDate) {
		this.connectionDate = connectionDate;
	}

	public String getFlag() {
		return this.flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getSubstationName() {
		return this.substationName;
	}

	public void setSubstationName(String substationName) {
		this.substationName = substationName;
	}

	public String getSubstationCode() {
		return this.substationCode;
	}

	public void setSubstationCode(String substationCode) {
		this.substationCode = substationCode;
	}

	public String getFeederCode() {
		return this.feederCode;
	}

	public void setFeederCode(String feederCode) {
		this.feederCode = feederCode;
	}

	public String getFeederName() {
		return this.feederName;
	}

	public void setFeederName(String feederName) {
		this.feederName = feederName;
	}

	public String getDtrCode() {
		return this.dtrCode;
	}

	public void setDtrCode(String dtrCode) {
		this.dtrCode = dtrCode;
	}

	public String getDtrName() {
		return this.dtrName;
	}

	public void setDtrName(String dtrName) {
		this.dtrName = dtrName;
	}

	public String getModemNumber() {
		return this.modemNumber;
	}

	public void setModemNumber(String modemNumber) {
		this.modemNumber = modemNumber;
	}

	public String getModemMdn() {
		return this.modemMdn;
	}

	public void setModemMdn(String modemMdn) {
		this.modemMdn = modemMdn;
	}

	public String getSimProviderName() {
		return this.simProviderName;
	}

	public void setSimProviderName(String simProviderName) {
		this.simProviderName = simProviderName;
	}

	public Long getMobileNo() {
		return this.mobileNo;
	}

	public void setMobileNo(Long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getTod() {
		return this.tod;
	}

	public void setTod(String tod) {
		this.tod = tod;
	}

	public String getVoltageRating() {
		return this.voltageRating;
	}

	public void setVoltageRating(String voltageRating) {
		this.voltageRating = voltageRating;
	}

	public String getModemManufacturername() {
		return this.modemManufacturername;
	}

	public void setModemManufacturername(String modemManufacturername) {
		this.modemManufacturername = modemManufacturername;
	}

	public String getModemshedulecommunication() {
		return this.modemshedulecommunication;
	}

	public void setModemshedulecommunication(String modemshedulecommunication) {
		this.modemshedulecommunication = modemshedulecommunication;
	}

	public String getIpAddress() {
		return this.ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getPortNumber() {
		return this.portNumber;
	}

	public void setPortNumber(String portNumber) {
		this.portNumber = portNumber;
	}

	public String getMeterPhonenumber() {
		return this.meterPhonenumber;
	}

	public void setMeterPhonenumber(String meterPhonenumber) {
		this.meterPhonenumber = meterPhonenumber;
	}

	public String getLatitude() {
		return this.latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return this.longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLedgerno() {
		return this.ledgerno;
	}

	public void setLedgerno(String ledgerno) {
		this.ledgerno = ledgerno;
	}

	public String getBillingcycle() {
		return this.billingcycle;
	}

	public void setBillingcycle(String billingcycle) {
		this.billingcycle = billingcycle;
	}

	public String getNetworkmapping() {
		return this.networkmapping;
	}

	public void setNetworkmapping(String networkmapping) {
		this.networkmapping = networkmapping;
	}

	public String getMetertype() {
		return this.metertype;
	}

	public void setMetertype(String metertype) {
		this.metertype = metertype;
	}

	public String getLocationofmeter() {
		return this.locationofmeter;
	}

	public void setLocationofmeter(String locationofmeter) {
		this.locationofmeter = locationofmeter;
	}

	public String getAssetno() {
		return this.assetno;
	}

	public void setAssetno(String assetno) {
		this.assetno = assetno;
	}

	public String getBillingparameterType() {
		return this.billingparameterType;
	}

	public void setBillingparameterType(String billingparameterType) {
		this.billingparameterType = billingparameterType;
	}

	public Double getAvgUnits() {
		return this.avgUnits;
	}

	public void setAvgUnits(Double avgUnits) {
		this.avgUnits = avgUnits;
	}

	public String getMeterconnectionType() {
		return this.meterconnectionType;
	}

	public void setMeterconnectionType(String meterconnectionType) {
		this.meterconnectionType = meterconnectionType;
	}

	public String getMaxdemandPercentage() {
		return this.maxdemandPercentage;
	}

	public void setMaxdemandPercentage(String maxdemandPercentage) {
		this.maxdemandPercentage = maxdemandPercentage;
	}

	public String getBillingdate() {
		return this.billingdate;
	}

	public void setBillingdate(String billingdate) {
		this.billingdate = billingdate;
	}

	public String getOverloadLimit() {
		return this.overloadLimit;
	}

	public void setOverloadLimit(String overloadLimit) {
		this.overloadLimit = overloadLimit;
	}

	public String getOvercurrentLimit() {
		return this.overcurrentLimit;
	}

	public void setOvercurrentLimit(String overcurrentLimit) {
		this.overcurrentLimit = overcurrentLimit;
	}

	public String getUndervoltage() {
		return this.undervoltage;
	}

	public void setUndervoltage(String undervoltage) {
		this.undervoltage = undervoltage;
	}

	public String getOvervoltage() {
		return this.overvoltage;
	}

	public void setOvervoltage(String overvoltage) {
		this.overvoltage = overvoltage;
	}

	public String getProfilecapturedperiod() {
		return this.profilecapturedperiod;
	}

	public void setProfilecapturedperiod(String profilecapturedperiod) {
		this.profilecapturedperiod = profilecapturedperiod;
	}

	public String getTopcovertamper() {
		return this.topcovertamper;
	}

	public void setTopcovertamper(String topcovertamper) {
		this.topcovertamper = topcovertamper;
	}

	public String getInstailKwhreading() {
		return this.instailKwhreading;
	}

	public void setInstailKwhreading(String instailKwhreading) {
		this.instailKwhreading = instailKwhreading;
	}

	public String getDemandIntigration() {
		return this.demandIntigration;
	}

	public void setDemandIntigration(String demandIntigration) {
		this.demandIntigration = demandIntigration;
	}

	public String getCommunicationsetting() {
		return this.communicationsetting;
	}

	public void setCommunicationsetting(String communicationsetting) {
		this.communicationsetting = communicationsetting;
	}

	public String getReducedmaxdemand() {
		return this.reducedmaxdemand;
	}

	public void setReducedmaxdemand(String reducedmaxdemand) {
		this.reducedmaxdemand = reducedmaxdemand;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getRealaystatus() {
		return this.realaystatus;
	}

	public void setRealaystatus(String realaystatus) {
		this.realaystatus = realaystatus;
	}

	public String getHappyhoursStart() {
		return this.happyhoursStart;
	}

	public void setHappyhoursStart(String happyhoursStart) {
		this.happyhoursStart = happyhoursStart;
	}

	public String getHappyhoursEnd() {
		return this.happyhoursEnd;
	}

	public void setHappyhoursEnd(String happyhoursEnd) {
		this.happyhoursEnd = happyhoursEnd;
	}

	public String getEmergencyCredit() {
		return this.emergencyCredit;
	}

	public void setEmergencyCredit(String emergencyCredit) {
		this.emergencyCredit = emergencyCredit;
	}

	public String getInstantFreq() {
		return this.instantFreq;
	}

	public void setInstantFreq(String instantFreq) {
		this.instantFreq = instantFreq;
	}

	public String getRawFreq() {
		return this.rawFreq;
	}

	public void setRawFreq(String rawFreq) {
		this.rawFreq = rawFreq;
	}

	public String getAlarmFreq() {
		return this.alarmFreq;
	}

	public void setAlarmFreq(String alarmFreq) {
		this.alarmFreq = alarmFreq;
	}

	public String getEmergencyDays() {
		return this.emergencyDays;
	}

	public void setEmergencyDays(String emergencyDays) {
		this.emergencyDays = emergencyDays;
	}

	public String getBrownperiodDays() {
		return this.brownperiodDays;
	}

	public void setBrownperiodDays(String brownperiodDays) {
		this.brownperiodDays = brownperiodDays;
	}

	public String getGatewayName() {
		return this.gatewayName;
	}

	public void setGatewayName(String gatewayName) {
		this.gatewayName = gatewayName;
	}

	public String getConnectionTime() {
		return this.connectionTime;
	}

	public void setConnectionTime(String connectionTime) {
		this.connectionTime = connectionTime;
	}

}