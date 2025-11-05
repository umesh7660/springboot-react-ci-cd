// default package
package com.smartmeter.model;

import javax.persistence.Embeddable;

/**
 * MasMetermasterInventoryId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class MasMetermasterInventoryId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	private String discom;
	private String board;
	private String circle;
	private String division;
	private String subdivision;
	private String section;
	private String acno;
	private String meterNo;
	private String category;
	private Double cdKva;
	private String unit;
	private String name;
	private String addr;
	private String mf;
	private String make;
	private String phase;
	private String dssLocation;
	private String hid;
	private String connectiondate;
	private String permanentpolenumber;
	private String phonenumber;
	private String modemDcu;
	private String meterChnageFlag;
	private String flag;
	private Integer subCategory;
	private Double consumerid;
	private String consumerNo;
	private String substation;
	private String feeder;
	private String modemnumber;
	private String modemmdn;
	private String simProviderName;
	private String mobileNo;
	private String tod;
	private String voltageRating;
	private String modemmanufacturername;
	private String billingparameterType;
	private Double avgUnits;
	private String realaystatus;
	private String happyhoursStart;
	private String happyhoursEnd;
	private String emergencyCredit;
	private String instantFreq;
	private String rawFreq;
	private String alarmFreq;
	private String meterconnectionType;
	private String emergencyDays;
	private String brownperiodDays;
	private String maxdemandPercentage;
	private String billinddate;
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
	private String feederCode;
	private String feederName;
	private String dtrStructurecode;
	private String dtrStructurename;
	private String modemshedulecommunication;
	private String ipAddress;
	private String portNumber;
	private String meterPhonenumber;
	private String gatewayName;
	private String connectionTime;
	private String uid;
	private String issueBelongsto;
	private String description;
	private String fieldphonenumber;
	private String latitude;
	private String longitude;
	private String ledgerno;
	private String billingcycle;
	private String networkmapping;
	private String metertype;
	private String locationofmeter;
	private String assetno;

	// Constructors

	/** default constructor */
	public MasMetermasterInventoryId() {
	}

	/** minimal constructor */
	public MasMetermasterInventoryId(String meterNo) {
		this.meterNo = meterNo;
	}

	/** full constructor */
	public MasMetermasterInventoryId(String discom, String board,
			String circle, String division, String subdivision, String section,
			String acno, String meterNo, String category, Double cdKva,
			String unit, String name, String addr, String mf, String make,
			String phase, String dssLocation, String hid,
			String connectiondate, String permanentpolenumber,
			String phonenumber, String modemDcu, String meterChnageFlag,
			String flag, Integer subCategory, Double consumerid,
			String consumerNo, String substation, String feeder,
			String modemnumber, String modemmdn, String simProviderName,
			String mobileNo, String tod, String voltageRating,
			String modemmanufacturername, String billingparameterType,
			Double avgUnits, String realaystatus, String happyhoursStart,
			String happyhoursEnd, String emergencyCredit, String instantFreq,
			String rawFreq, String alarmFreq, String meterconnectionType,
			String emergencyDays, String brownperiodDays,
			String maxdemandPercentage, String billinddate,
			String overloadLimit, String overcurrentLimit, String undervoltage,
			String overvoltage, String profilecapturedperiod,
			String topcovertamper, String instailKwhreading,
			String demandIntigration, String communicationsetting,
			String reducedmaxdemand, String feederCode, String feederName,
			String dtrStructurecode, String dtrStructurename,
			String modemshedulecommunication, String ipAddress,
			String portNumber, String meterPhonenumber, String gatewayName,
			String connectionTime, String uid, String issueBelongsto,
			String description, String fieldphonenumber, String latitude,
			String longitude, String ledgerno, String billingcycle,
			String networkmapping, String metertype, String locationofmeter,
			String assetno) {
		this.discom = discom;
		this.board = board;
		this.circle = circle;
		this.division = division;
		this.subdivision = subdivision;
		this.section = section;
		this.acno = acno;
		this.meterNo = meterNo;
		this.category = category;
		this.cdKva = cdKva;
		this.unit = unit;
		this.name = name;
		this.addr = addr;
		this.mf = mf;
		this.make = make;
		this.phase = phase;
		this.dssLocation = dssLocation;
		this.hid = hid;
		this.connectiondate = connectiondate;
		this.permanentpolenumber = permanentpolenumber;
		this.phonenumber = phonenumber;
		this.modemDcu = modemDcu;
		this.meterChnageFlag = meterChnageFlag;
		this.flag = flag;
		this.subCategory = subCategory;
		this.consumerid = consumerid;
		this.consumerNo = consumerNo;
		this.substation = substation;
		this.feeder = feeder;
		this.modemnumber = modemnumber;
		this.modemmdn = modemmdn;
		this.simProviderName = simProviderName;
		this.mobileNo = mobileNo;
		this.tod = tod;
		this.voltageRating = voltageRating;
		this.modemmanufacturername = modemmanufacturername;
		this.billingparameterType = billingparameterType;
		this.avgUnits = avgUnits;
		this.realaystatus = realaystatus;
		this.happyhoursStart = happyhoursStart;
		this.happyhoursEnd = happyhoursEnd;
		this.emergencyCredit = emergencyCredit;
		this.instantFreq = instantFreq;
		this.rawFreq = rawFreq;
		this.alarmFreq = alarmFreq;
		this.meterconnectionType = meterconnectionType;
		this.emergencyDays = emergencyDays;
		this.brownperiodDays = brownperiodDays;
		this.maxdemandPercentage = maxdemandPercentage;
		this.billinddate = billinddate;
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
		this.feederCode = feederCode;
		this.feederName = feederName;
		this.dtrStructurecode = dtrStructurecode;
		this.dtrStructurename = dtrStructurename;
		this.modemshedulecommunication = modemshedulecommunication;
		this.ipAddress = ipAddress;
		this.portNumber = portNumber;
		this.meterPhonenumber = meterPhonenumber;
		this.gatewayName = gatewayName;
		this.connectionTime = connectionTime;
		this.uid = uid;
		this.issueBelongsto = issueBelongsto;
		this.description = description;
		this.fieldphonenumber = fieldphonenumber;
		this.latitude = latitude;
		this.longitude = longitude;
		this.ledgerno = ledgerno;
		this.billingcycle = billingcycle;
		this.networkmapping = networkmapping;
		this.metertype = metertype;
		this.locationofmeter = locationofmeter;
		this.assetno = assetno;
	}

	// Property accessors

	public String getDiscom() {
		return this.discom;
	}

	public void setDiscom(String discom) {
		this.discom = discom;
	}

	public String getBoard() {
		return this.board;
	}

	public void setBoard(String board) {
		this.board = board;
	}

	public String getCircle() {
		return this.circle;
	}

	public void setCircle(String circle) {
		this.circle = circle;
	}

	public String getDivision() {
		return this.division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getSubdivision() {
		return this.subdivision;
	}

	public void setSubdivision(String subdivision) {
		this.subdivision = subdivision;
	}

	public String getSection() {
		return this.section;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public String getAcno() {
		return this.acno;
	}

	public void setAcno(String acno) {
		this.acno = acno;
	}

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public String getCategory() {
		return this.category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Double getCdKva() {
		return this.cdKva;
	}

	public void setCdKva(Double cdKva) {
		this.cdKva = cdKva;
	}

	public String getUnit() {
		return this.unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddr() {
		return this.addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getMf() {
		return this.mf;
	}

	public void setMf(String mf) {
		this.mf = mf;
	}

	public String getMake() {
		return this.make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getPhase() {
		return this.phase;
	}

	public void setPhase(String phase) {
		this.phase = phase;
	}

	public String getDssLocation() {
		return this.dssLocation;
	}

	public void setDssLocation(String dssLocation) {
		this.dssLocation = dssLocation;
	}

	public String getHid() {
		return this.hid;
	}

	public void setHid(String hid) {
		this.hid = hid;
	}

	public String getConnectiondate() {
		return this.connectiondate;
	}

	public void setConnectiondate(String connectiondate) {
		this.connectiondate = connectiondate;
	}

	public String getPermanentpolenumber() {
		return this.permanentpolenumber;
	}

	public void setPermanentpolenumber(String permanentpolenumber) {
		this.permanentpolenumber = permanentpolenumber;
	}

	public String getPhonenumber() {
		return this.phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getModemDcu() {
		return this.modemDcu;
	}

	public void setModemDcu(String modemDcu) {
		this.modemDcu = modemDcu;
	}

	public String getMeterChnageFlag() {
		return this.meterChnageFlag;
	}

	public void setMeterChnageFlag(String meterChnageFlag) {
		this.meterChnageFlag = meterChnageFlag;
	}

	public String getFlag() {
		return this.flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Integer getSubCategory() {
		return this.subCategory;
	}

	public void setSubCategory(Integer subCategory) {
		this.subCategory = subCategory;
	}

	public Double getConsumerid() {
		return this.consumerid;
	}

	public void setConsumerid(Double consumerid) {
		this.consumerid = consumerid;
	}

	public String getConsumerNo() {
		return this.consumerNo;
	}

	public void setConsumerNo(String consumerNo) {
		this.consumerNo = consumerNo;
	}

	public String getSubstation() {
		return this.substation;
	}

	public void setSubstation(String substation) {
		this.substation = substation;
	}

	public String getFeeder() {
		return this.feeder;
	}

	public void setFeeder(String feeder) {
		this.feeder = feeder;
	}

	public String getModemnumber() {
		return this.modemnumber;
	}

	public void setModemnumber(String modemnumber) {
		this.modemnumber = modemnumber;
	}

	public String getModemmdn() {
		return this.modemmdn;
	}

	public void setModemmdn(String modemmdn) {
		this.modemmdn = modemmdn;
	}

	public String getSimProviderName() {
		return this.simProviderName;
	}

	public void setSimProviderName(String simProviderName) {
		this.simProviderName = simProviderName;
	}

	public String getMobileNo() {
		return this.mobileNo;
	}

	public void setMobileNo(String mobileNo) {
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

	public String getModemmanufacturername() {
		return this.modemmanufacturername;
	}

	public void setModemmanufacturername(String modemmanufacturername) {
		this.modemmanufacturername = modemmanufacturername;
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

	public String getMeterconnectionType() {
		return this.meterconnectionType;
	}

	public void setMeterconnectionType(String meterconnectionType) {
		this.meterconnectionType = meterconnectionType;
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

	public String getMaxdemandPercentage() {
		return this.maxdemandPercentage;
	}

	public void setMaxdemandPercentage(String maxdemandPercentage) {
		this.maxdemandPercentage = maxdemandPercentage;
	}

	public String getBillinddate() {
		return this.billinddate;
	}

	public void setBillinddate(String billinddate) {
		this.billinddate = billinddate;
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

	public String getDtrStructurecode() {
		return this.dtrStructurecode;
	}

	public void setDtrStructurecode(String dtrStructurecode) {
		this.dtrStructurecode = dtrStructurecode;
	}

	public String getDtrStructurename() {
		return this.dtrStructurename;
	}

	public void setDtrStructurename(String dtrStructurename) {
		this.dtrStructurename = dtrStructurename;
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

	public String getUid() {
		return this.uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getIssueBelongsto() {
		return this.issueBelongsto;
	}

	public void setIssueBelongsto(String issueBelongsto) {
		this.issueBelongsto = issueBelongsto;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFieldphonenumber() {
		return this.fieldphonenumber;
	}

	public void setFieldphonenumber(String fieldphonenumber) {
		this.fieldphonenumber = fieldphonenumber;
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

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof MasMetermasterInventoryId))
			return false;
		MasMetermasterInventoryId castOther = (MasMetermasterInventoryId) other;

		return ((this.getDiscom() == castOther.getDiscom()) || (this
				.getDiscom() != null && castOther.getDiscom() != null && this
				.getDiscom().equals(castOther.getDiscom())))
				&& ((this.getBoard() == castOther.getBoard()) || (this
						.getBoard() != null && castOther.getBoard() != null && this
						.getBoard().equals(castOther.getBoard())))
				&& ((this.getCircle() == castOther.getCircle()) || (this
						.getCircle() != null && castOther.getCircle() != null && this
						.getCircle().equals(castOther.getCircle())))
				&& ((this.getDivision() == castOther.getDivision()) || (this
						.getDivision() != null
						&& castOther.getDivision() != null && this
						.getDivision().equals(castOther.getDivision())))
				&& ((this.getSubdivision() == castOther.getSubdivision()) || (this
						.getSubdivision() != null
						&& castOther.getSubdivision() != null && this
						.getSubdivision().equals(castOther.getSubdivision())))
				&& ((this.getSection() == castOther.getSection()) || (this
						.getSection() != null && castOther.getSection() != null && this
						.getSection().equals(castOther.getSection())))
				&& ((this.getAcno() == castOther.getAcno()) || (this.getAcno() != null
						&& castOther.getAcno() != null && this.getAcno()
						.equals(castOther.getAcno())))
				&& ((this.getMeterNo() == castOther.getMeterNo()) || (this
						.getMeterNo() != null && castOther.getMeterNo() != null && this
						.getMeterNo().equals(castOther.getMeterNo())))
				&& ((this.getCategory() == castOther.getCategory()) || (this
						.getCategory() != null
						&& castOther.getCategory() != null && this
						.getCategory().equals(castOther.getCategory())))
				&& ((this.getCdKva() == castOther.getCdKva()) || (this
						.getCdKva() != null && castOther.getCdKva() != null && this
						.getCdKva().equals(castOther.getCdKva())))
				&& ((this.getUnit() == castOther.getUnit()) || (this.getUnit() != null
						&& castOther.getUnit() != null && this.getUnit()
						.equals(castOther.getUnit())))
				&& ((this.getName() == castOther.getName()) || (this.getName() != null
						&& castOther.getName() != null && this.getName()
						.equals(castOther.getName())))
				&& ((this.getAddr() == castOther.getAddr()) || (this.getAddr() != null
						&& castOther.getAddr() != null && this.getAddr()
						.equals(castOther.getAddr())))
				&& ((this.getMf() == castOther.getMf()) || (this.getMf() != null
						&& castOther.getMf() != null && this.getMf().equals(
						castOther.getMf())))
				&& ((this.getMake() == castOther.getMake()) || (this.getMake() != null
						&& castOther.getMake() != null && this.getMake()
						.equals(castOther.getMake())))
				&& ((this.getPhase() == castOther.getPhase()) || (this
						.getPhase() != null && castOther.getPhase() != null && this
						.getPhase().equals(castOther.getPhase())))
				&& ((this.getDssLocation() == castOther.getDssLocation()) || (this
						.getDssLocation() != null
						&& castOther.getDssLocation() != null && this
						.getDssLocation().equals(castOther.getDssLocation())))
				&& ((this.getHid() == castOther.getHid()) || (this.getHid() != null
						&& castOther.getHid() != null && this.getHid().equals(
						castOther.getHid())))
				&& ((this.getConnectiondate() == castOther.getConnectiondate()) || (this
						.getConnectiondate() != null
						&& castOther.getConnectiondate() != null && this
						.getConnectiondate().equals(
								castOther.getConnectiondate())))
				&& ((this.getPermanentpolenumber() == castOther
						.getPermanentpolenumber()) || (this
						.getPermanentpolenumber() != null
						&& castOther.getPermanentpolenumber() != null && this
						.getPermanentpolenumber().equals(
								castOther.getPermanentpolenumber())))
				&& ((this.getPhonenumber() == castOther.getPhonenumber()) || (this
						.getPhonenumber() != null
						&& castOther.getPhonenumber() != null && this
						.getPhonenumber().equals(castOther.getPhonenumber())))
				&& ((this.getModemDcu() == castOther.getModemDcu()) || (this
						.getModemDcu() != null
						&& castOther.getModemDcu() != null && this
						.getModemDcu().equals(castOther.getModemDcu())))
				&& ((this.getMeterChnageFlag() == castOther
						.getMeterChnageFlag()) || (this.getMeterChnageFlag() != null
						&& castOther.getMeterChnageFlag() != null && this
						.getMeterChnageFlag().equals(
								castOther.getMeterChnageFlag())))
				&& ((this.getFlag() == castOther.getFlag()) || (this.getFlag() != null
						&& castOther.getFlag() != null && this.getFlag()
						.equals(castOther.getFlag())))
				&& ((this.getSubCategory() == castOther.getSubCategory()) || (this
						.getSubCategory() != null
						&& castOther.getSubCategory() != null && this
						.getSubCategory().equals(castOther.getSubCategory())))
				&& ((this.getConsumerid() == castOther.getConsumerid()) || (this
						.getConsumerid() != null
						&& castOther.getConsumerid() != null && this
						.getConsumerid().equals(castOther.getConsumerid())))
				&& ((this.getConsumerNo() == castOther.getConsumerNo()) || (this
						.getConsumerNo() != null
						&& castOther.getConsumerNo() != null && this
						.getConsumerNo().equals(castOther.getConsumerNo())))
				&& ((this.getSubstation() == castOther.getSubstation()) || (this
						.getSubstation() != null
						&& castOther.getSubstation() != null && this
						.getSubstation().equals(castOther.getSubstation())))
				&& ((this.getFeeder() == castOther.getFeeder()) || (this
						.getFeeder() != null && castOther.getFeeder() != null && this
						.getFeeder().equals(castOther.getFeeder())))
				&& ((this.getModemnumber() == castOther.getModemnumber()) || (this
						.getModemnumber() != null
						&& castOther.getModemnumber() != null && this
						.getModemnumber().equals(castOther.getModemnumber())))
				&& ((this.getModemmdn() == castOther.getModemmdn()) || (this
						.getModemmdn() != null
						&& castOther.getModemmdn() != null && this
						.getModemmdn().equals(castOther.getModemmdn())))
				&& ((this.getSimProviderName() == castOther
						.getSimProviderName()) || (this.getSimProviderName() != null
						&& castOther.getSimProviderName() != null && this
						.getSimProviderName().equals(
								castOther.getSimProviderName())))
				&& ((this.getMobileNo() == castOther.getMobileNo()) || (this
						.getMobileNo() != null
						&& castOther.getMobileNo() != null && this
						.getMobileNo().equals(castOther.getMobileNo())))
				&& ((this.getTod() == castOther.getTod()) || (this.getTod() != null
						&& castOther.getTod() != null && this.getTod().equals(
						castOther.getTod())))
				&& ((this.getVoltageRating() == castOther.getVoltageRating()) || (this
						.getVoltageRating() != null
						&& castOther.getVoltageRating() != null && this
						.getVoltageRating()
						.equals(castOther.getVoltageRating())))
				&& ((this.getModemmanufacturername() == castOther
						.getModemmanufacturername()) || (this
						.getModemmanufacturername() != null
						&& castOther.getModemmanufacturername() != null && this
						.getModemmanufacturername().equals(
								castOther.getModemmanufacturername())))
				&& ((this.getBillingparameterType() == castOther
						.getBillingparameterType()) || (this
						.getBillingparameterType() != null
						&& castOther.getBillingparameterType() != null && this
						.getBillingparameterType().equals(
								castOther.getBillingparameterType())))
				&& ((this.getAvgUnits() == castOther.getAvgUnits()) || (this
						.getAvgUnits() != null
						&& castOther.getAvgUnits() != null && this
						.getAvgUnits().equals(castOther.getAvgUnits())))
				&& ((this.getRealaystatus() == castOther.getRealaystatus()) || (this
						.getRealaystatus() != null
						&& castOther.getRealaystatus() != null && this
						.getRealaystatus().equals(castOther.getRealaystatus())))
				&& ((this.getHappyhoursStart() == castOther
						.getHappyhoursStart()) || (this.getHappyhoursStart() != null
						&& castOther.getHappyhoursStart() != null && this
						.getHappyhoursStart().equals(
								castOther.getHappyhoursStart())))
				&& ((this.getHappyhoursEnd() == castOther.getHappyhoursEnd()) || (this
						.getHappyhoursEnd() != null
						&& castOther.getHappyhoursEnd() != null && this
						.getHappyhoursEnd()
						.equals(castOther.getHappyhoursEnd())))
				&& ((this.getEmergencyCredit() == castOther
						.getEmergencyCredit()) || (this.getEmergencyCredit() != null
						&& castOther.getEmergencyCredit() != null && this
						.getEmergencyCredit().equals(
								castOther.getEmergencyCredit())))
				&& ((this.getInstantFreq() == castOther.getInstantFreq()) || (this
						.getInstantFreq() != null
						&& castOther.getInstantFreq() != null && this
						.getInstantFreq().equals(castOther.getInstantFreq())))
				&& ((this.getRawFreq() == castOther.getRawFreq()) || (this
						.getRawFreq() != null && castOther.getRawFreq() != null && this
						.getRawFreq().equals(castOther.getRawFreq())))
				&& ((this.getAlarmFreq() == castOther.getAlarmFreq()) || (this
						.getAlarmFreq() != null
						&& castOther.getAlarmFreq() != null && this
						.getAlarmFreq().equals(castOther.getAlarmFreq())))
				&& ((this.getMeterconnectionType() == castOther
						.getMeterconnectionType()) || (this
						.getMeterconnectionType() != null
						&& castOther.getMeterconnectionType() != null && this
						.getMeterconnectionType().equals(
								castOther.getMeterconnectionType())))
				&& ((this.getEmergencyDays() == castOther.getEmergencyDays()) || (this
						.getEmergencyDays() != null
						&& castOther.getEmergencyDays() != null && this
						.getEmergencyDays()
						.equals(castOther.getEmergencyDays())))
				&& ((this.getBrownperiodDays() == castOther
						.getBrownperiodDays()) || (this.getBrownperiodDays() != null
						&& castOther.getBrownperiodDays() != null && this
						.getBrownperiodDays().equals(
								castOther.getBrownperiodDays())))
				&& ((this.getMaxdemandPercentage() == castOther
						.getMaxdemandPercentage()) || (this
						.getMaxdemandPercentage() != null
						&& castOther.getMaxdemandPercentage() != null && this
						.getMaxdemandPercentage().equals(
								castOther.getMaxdemandPercentage())))
				&& ((this.getBillinddate() == castOther.getBillinddate()) || (this
						.getBillinddate() != null
						&& castOther.getBillinddate() != null && this
						.getBillinddate().equals(castOther.getBillinddate())))
				&& ((this.getOverloadLimit() == castOther.getOverloadLimit()) || (this
						.getOverloadLimit() != null
						&& castOther.getOverloadLimit() != null && this
						.getOverloadLimit()
						.equals(castOther.getOverloadLimit())))
				&& ((this.getOvercurrentLimit() == castOther
						.getOvercurrentLimit()) || (this.getOvercurrentLimit() != null
						&& castOther.getOvercurrentLimit() != null && this
						.getOvercurrentLimit().equals(
								castOther.getOvercurrentLimit())))
				&& ((this.getUndervoltage() == castOther.getUndervoltage()) || (this
						.getUndervoltage() != null
						&& castOther.getUndervoltage() != null && this
						.getUndervoltage().equals(castOther.getUndervoltage())))
				&& ((this.getOvervoltage() == castOther.getOvervoltage()) || (this
						.getOvervoltage() != null
						&& castOther.getOvervoltage() != null && this
						.getOvervoltage().equals(castOther.getOvervoltage())))
				&& ((this.getProfilecapturedperiod() == castOther
						.getProfilecapturedperiod()) || (this
						.getProfilecapturedperiod() != null
						&& castOther.getProfilecapturedperiod() != null && this
						.getProfilecapturedperiod().equals(
								castOther.getProfilecapturedperiod())))
				&& ((this.getTopcovertamper() == castOther.getTopcovertamper()) || (this
						.getTopcovertamper() != null
						&& castOther.getTopcovertamper() != null && this
						.getTopcovertamper().equals(
								castOther.getTopcovertamper())))
				&& ((this.getInstailKwhreading() == castOther
						.getInstailKwhreading()) || (this
						.getInstailKwhreading() != null
						&& castOther.getInstailKwhreading() != null && this
						.getInstailKwhreading().equals(
								castOther.getInstailKwhreading())))
				&& ((this.getDemandIntigration() == castOther
						.getDemandIntigration()) || (this
						.getDemandIntigration() != null
						&& castOther.getDemandIntigration() != null && this
						.getDemandIntigration().equals(
								castOther.getDemandIntigration())))
				&& ((this.getCommunicationsetting() == castOther
						.getCommunicationsetting()) || (this
						.getCommunicationsetting() != null
						&& castOther.getCommunicationsetting() != null && this
						.getCommunicationsetting().equals(
								castOther.getCommunicationsetting())))
				&& ((this.getReducedmaxdemand() == castOther
						.getReducedmaxdemand()) || (this.getReducedmaxdemand() != null
						&& castOther.getReducedmaxdemand() != null && this
						.getReducedmaxdemand().equals(
								castOther.getReducedmaxdemand())))
				&& ((this.getFeederCode() == castOther.getFeederCode()) || (this
						.getFeederCode() != null
						&& castOther.getFeederCode() != null && this
						.getFeederCode().equals(castOther.getFeederCode())))
				&& ((this.getFeederName() == castOther.getFeederName()) || (this
						.getFeederName() != null
						&& castOther.getFeederName() != null && this
						.getFeederName().equals(castOther.getFeederName())))
				&& ((this.getDtrStructurecode() == castOther
						.getDtrStructurecode()) || (this.getDtrStructurecode() != null
						&& castOther.getDtrStructurecode() != null && this
						.getDtrStructurecode().equals(
								castOther.getDtrStructurecode())))
				&& ((this.getDtrStructurename() == castOther
						.getDtrStructurename()) || (this.getDtrStructurename() != null
						&& castOther.getDtrStructurename() != null && this
						.getDtrStructurename().equals(
								castOther.getDtrStructurename())))
				&& ((this.getModemshedulecommunication() == castOther
						.getModemshedulecommunication()) || (this
						.getModemshedulecommunication() != null
						&& castOther.getModemshedulecommunication() != null && this
						.getModemshedulecommunication().equals(
								castOther.getModemshedulecommunication())))
				&& ((this.getIpAddress() == castOther.getIpAddress()) || (this
						.getIpAddress() != null
						&& castOther.getIpAddress() != null && this
						.getIpAddress().equals(castOther.getIpAddress())))
				&& ((this.getPortNumber() == castOther.getPortNumber()) || (this
						.getPortNumber() != null
						&& castOther.getPortNumber() != null && this
						.getPortNumber().equals(castOther.getPortNumber())))
				&& ((this.getMeterPhonenumber() == castOther
						.getMeterPhonenumber()) || (this.getMeterPhonenumber() != null
						&& castOther.getMeterPhonenumber() != null && this
						.getMeterPhonenumber().equals(
								castOther.getMeterPhonenumber())))
				&& ((this.getGatewayName() == castOther.getGatewayName()) || (this
						.getGatewayName() != null
						&& castOther.getGatewayName() != null && this
						.getGatewayName().equals(castOther.getGatewayName())))
				&& ((this.getConnectionTime() == castOther.getConnectionTime()) || (this
						.getConnectionTime() != null
						&& castOther.getConnectionTime() != null && this
						.getConnectionTime().equals(
								castOther.getConnectionTime())))
				&& ((this.getUid() == castOther.getUid()) || (this.getUid() != null
						&& castOther.getUid() != null && this.getUid().equals(
						castOther.getUid())))
				&& ((this.getIssueBelongsto() == castOther.getIssueBelongsto()) || (this
						.getIssueBelongsto() != null
						&& castOther.getIssueBelongsto() != null && this
						.getIssueBelongsto().equals(
								castOther.getIssueBelongsto())))
				&& ((this.getDescription() == castOther.getDescription()) || (this
						.getDescription() != null
						&& castOther.getDescription() != null && this
						.getDescription().equals(castOther.getDescription())))
				&& ((this.getFieldphonenumber() == castOther
						.getFieldphonenumber()) || (this.getFieldphonenumber() != null
						&& castOther.getFieldphonenumber() != null && this
						.getFieldphonenumber().equals(
								castOther.getFieldphonenumber())))
				&& ((this.getLatitude() == castOther.getLatitude()) || (this
						.getLatitude() != null
						&& castOther.getLatitude() != null && this
						.getLatitude().equals(castOther.getLatitude())))
				&& ((this.getLongitude() == castOther.getLongitude()) || (this
						.getLongitude() != null
						&& castOther.getLongitude() != null && this
						.getLongitude().equals(castOther.getLongitude())))
				&& ((this.getLedgerno() == castOther.getLedgerno()) || (this
						.getLedgerno() != null
						&& castOther.getLedgerno() != null && this
						.getLedgerno().equals(castOther.getLedgerno())))
				&& ((this.getBillingcycle() == castOther.getBillingcycle()) || (this
						.getBillingcycle() != null
						&& castOther.getBillingcycle() != null && this
						.getBillingcycle().equals(castOther.getBillingcycle())))
				&& ((this.getNetworkmapping() == castOther.getNetworkmapping()) || (this
						.getNetworkmapping() != null
						&& castOther.getNetworkmapping() != null && this
						.getNetworkmapping().equals(
								castOther.getNetworkmapping())))
				&& ((this.getMetertype() == castOther.getMetertype()) || (this
						.getMetertype() != null
						&& castOther.getMetertype() != null && this
						.getMetertype().equals(castOther.getMetertype())))
				&& ((this.getLocationofmeter() == castOther
						.getLocationofmeter()) || (this.getLocationofmeter() != null
						&& castOther.getLocationofmeter() != null && this
						.getLocationofmeter().equals(
								castOther.getLocationofmeter())))
				&& ((this.getAssetno() == castOther.getAssetno()) || (this
						.getAssetno() != null && castOther.getAssetno() != null && this
						.getAssetno().equals(castOther.getAssetno())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getDiscom() == null ? 0 : this.getDiscom().hashCode());
		result = 37 * result
				+ (getBoard() == null ? 0 : this.getBoard().hashCode());
		result = 37 * result
				+ (getCircle() == null ? 0 : this.getCircle().hashCode());
		result = 37 * result
				+ (getDivision() == null ? 0 : this.getDivision().hashCode());
		result = 37
				* result
				+ (getSubdivision() == null ? 0 : this.getSubdivision()
						.hashCode());
		result = 37 * result
				+ (getSection() == null ? 0 : this.getSection().hashCode());
		result = 37 * result
				+ (getAcno() == null ? 0 : this.getAcno().hashCode());
		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		result = 37 * result
				+ (getCategory() == null ? 0 : this.getCategory().hashCode());
		result = 37 * result
				+ (getCdKva() == null ? 0 : this.getCdKva().hashCode());
		result = 37 * result
				+ (getUnit() == null ? 0 : this.getUnit().hashCode());
		result = 37 * result
				+ (getName() == null ? 0 : this.getName().hashCode());
		result = 37 * result
				+ (getAddr() == null ? 0 : this.getAddr().hashCode());
		result = 37 * result + (getMf() == null ? 0 : this.getMf().hashCode());
		result = 37 * result
				+ (getMake() == null ? 0 : this.getMake().hashCode());
		result = 37 * result
				+ (getPhase() == null ? 0 : this.getPhase().hashCode());
		result = 37
				* result
				+ (getDssLocation() == null ? 0 : this.getDssLocation()
						.hashCode());
		result = 37 * result
				+ (getHid() == null ? 0 : this.getHid().hashCode());
		result = 37
				* result
				+ (getConnectiondate() == null ? 0 : this.getConnectiondate()
						.hashCode());
		result = 37
				* result
				+ (getPermanentpolenumber() == null ? 0 : this
						.getPermanentpolenumber().hashCode());
		result = 37
				* result
				+ (getPhonenumber() == null ? 0 : this.getPhonenumber()
						.hashCode());
		result = 37 * result
				+ (getModemDcu() == null ? 0 : this.getModemDcu().hashCode());
		result = 37
				* result
				+ (getMeterChnageFlag() == null ? 0 : this.getMeterChnageFlag()
						.hashCode());
		result = 37 * result
				+ (getFlag() == null ? 0 : this.getFlag().hashCode());
		result = 37
				* result
				+ (getSubCategory() == null ? 0 : this.getSubCategory()
						.hashCode());
		result = 37
				* result
				+ (getConsumerid() == null ? 0 : this.getConsumerid()
						.hashCode());
		result = 37
				* result
				+ (getConsumerNo() == null ? 0 : this.getConsumerNo()
						.hashCode());
		result = 37
				* result
				+ (getSubstation() == null ? 0 : this.getSubstation()
						.hashCode());
		result = 37 * result
				+ (getFeeder() == null ? 0 : this.getFeeder().hashCode());
		result = 37
				* result
				+ (getModemnumber() == null ? 0 : this.getModemnumber()
						.hashCode());
		result = 37 * result
				+ (getModemmdn() == null ? 0 : this.getModemmdn().hashCode());
		result = 37
				* result
				+ (getSimProviderName() == null ? 0 : this.getSimProviderName()
						.hashCode());
		result = 37 * result
				+ (getMobileNo() == null ? 0 : this.getMobileNo().hashCode());
		result = 37 * result
				+ (getTod() == null ? 0 : this.getTod().hashCode());
		result = 37
				* result
				+ (getVoltageRating() == null ? 0 : this.getVoltageRating()
						.hashCode());
		result = 37
				* result
				+ (getModemmanufacturername() == null ? 0 : this
						.getModemmanufacturername().hashCode());
		result = 37
				* result
				+ (getBillingparameterType() == null ? 0 : this
						.getBillingparameterType().hashCode());
		result = 37 * result
				+ (getAvgUnits() == null ? 0 : this.getAvgUnits().hashCode());
		result = 37
				* result
				+ (getRealaystatus() == null ? 0 : this.getRealaystatus()
						.hashCode());
		result = 37
				* result
				+ (getHappyhoursStart() == null ? 0 : this.getHappyhoursStart()
						.hashCode());
		result = 37
				* result
				+ (getHappyhoursEnd() == null ? 0 : this.getHappyhoursEnd()
						.hashCode());
		result = 37
				* result
				+ (getEmergencyCredit() == null ? 0 : this.getEmergencyCredit()
						.hashCode());
		result = 37
				* result
				+ (getInstantFreq() == null ? 0 : this.getInstantFreq()
						.hashCode());
		result = 37 * result
				+ (getRawFreq() == null ? 0 : this.getRawFreq().hashCode());
		result = 37 * result
				+ (getAlarmFreq() == null ? 0 : this.getAlarmFreq().hashCode());
		result = 37
				* result
				+ (getMeterconnectionType() == null ? 0 : this
						.getMeterconnectionType().hashCode());
		result = 37
				* result
				+ (getEmergencyDays() == null ? 0 : this.getEmergencyDays()
						.hashCode());
		result = 37
				* result
				+ (getBrownperiodDays() == null ? 0 : this.getBrownperiodDays()
						.hashCode());
		result = 37
				* result
				+ (getMaxdemandPercentage() == null ? 0 : this
						.getMaxdemandPercentage().hashCode());
		result = 37
				* result
				+ (getBillinddate() == null ? 0 : this.getBillinddate()
						.hashCode());
		result = 37
				* result
				+ (getOverloadLimit() == null ? 0 : this.getOverloadLimit()
						.hashCode());
		result = 37
				* result
				+ (getOvercurrentLimit() == null ? 0 : this
						.getOvercurrentLimit().hashCode());
		result = 37
				* result
				+ (getUndervoltage() == null ? 0 : this.getUndervoltage()
						.hashCode());
		result = 37
				* result
				+ (getOvervoltage() == null ? 0 : this.getOvervoltage()
						.hashCode());
		result = 37
				* result
				+ (getProfilecapturedperiod() == null ? 0 : this
						.getProfilecapturedperiod().hashCode());
		result = 37
				* result
				+ (getTopcovertamper() == null ? 0 : this.getTopcovertamper()
						.hashCode());
		result = 37
				* result
				+ (getInstailKwhreading() == null ? 0 : this
						.getInstailKwhreading().hashCode());
		result = 37
				* result
				+ (getDemandIntigration() == null ? 0 : this
						.getDemandIntigration().hashCode());
		result = 37
				* result
				+ (getCommunicationsetting() == null ? 0 : this
						.getCommunicationsetting().hashCode());
		result = 37
				* result
				+ (getReducedmaxdemand() == null ? 0 : this
						.getReducedmaxdemand().hashCode());
		result = 37
				* result
				+ (getFeederCode() == null ? 0 : this.getFeederCode()
						.hashCode());
		result = 37
				* result
				+ (getFeederName() == null ? 0 : this.getFeederName()
						.hashCode());
		result = 37
				* result
				+ (getDtrStructurecode() == null ? 0 : this
						.getDtrStructurecode().hashCode());
		result = 37
				* result
				+ (getDtrStructurename() == null ? 0 : this
						.getDtrStructurename().hashCode());
		result = 37
				* result
				+ (getModemshedulecommunication() == null ? 0 : this
						.getModemshedulecommunication().hashCode());
		result = 37 * result
				+ (getIpAddress() == null ? 0 : this.getIpAddress().hashCode());
		result = 37
				* result
				+ (getPortNumber() == null ? 0 : this.getPortNumber()
						.hashCode());
		result = 37
				* result
				+ (getMeterPhonenumber() == null ? 0 : this
						.getMeterPhonenumber().hashCode());
		result = 37
				* result
				+ (getGatewayName() == null ? 0 : this.getGatewayName()
						.hashCode());
		result = 37
				* result
				+ (getConnectionTime() == null ? 0 : this.getConnectionTime()
						.hashCode());
		result = 37 * result
				+ (getUid() == null ? 0 : this.getUid().hashCode());
		result = 37
				* result
				+ (getIssueBelongsto() == null ? 0 : this.getIssueBelongsto()
						.hashCode());
		result = 37
				* result
				+ (getDescription() == null ? 0 : this.getDescription()
						.hashCode());
		result = 37
				* result
				+ (getFieldphonenumber() == null ? 0 : this
						.getFieldphonenumber().hashCode());
		result = 37 * result
				+ (getLatitude() == null ? 0 : this.getLatitude().hashCode());
		result = 37 * result
				+ (getLongitude() == null ? 0 : this.getLongitude().hashCode());
		result = 37 * result
				+ (getLedgerno() == null ? 0 : this.getLedgerno().hashCode());
		result = 37
				* result
				+ (getBillingcycle() == null ? 0 : this.getBillingcycle()
						.hashCode());
		result = 37
				* result
				+ (getNetworkmapping() == null ? 0 : this.getNetworkmapping()
						.hashCode());
		result = 37 * result
				+ (getMetertype() == null ? 0 : this.getMetertype().hashCode());
		result = 37
				* result
				+ (getLocationofmeter() == null ? 0 : this.getLocationofmeter()
						.hashCode());
		result = 37 * result
				+ (getAssetno() == null ? 0 : this.getAssetno().hashCode());
		return result;
	}

}