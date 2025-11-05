package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * InstantData entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "instant_data")
public class InstantData implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
// Fields    
	@EmbeddedId
	private InstantDataId id;
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
	private Timestamp insertedDate;
	private String accountNo;
	private String extraField1;
	private String extraField2;
	private String extraField3;
	private String extraField4;
	private String noOfPowerfailures;
	private String cumPowerOffDuration;
	private Integer cumTamperCount;
	private Integer cumBillingCount;
	private Integer cumProgrammingCount;
	private Timestamp billingDate;
	private Double cumengyQi;
	private Double cumengyQii;
	private Double cumengyQiii;
	private Double cumengyQiv;
	private String cumPowerOnDuration;
	private String manufactureSpecific;
	private Integer neutralCurrent;
	private Double angleOfL1l2;
	private Double angleOfL1l3;
	private String loadLimitStatus;
	private Double activeThresholdLoadlimit;
	private Double mdKwimp;
	private Timestamp mdKwimpOcctime;
	private Double mdKwexp;
	private Timestamp mdKwexpOcctime;
	private Double mdKvaimp;
	private Timestamp mdKvaimpOcctime;
	private Double mdKvaexp;
	private Timestamp mdKvaexpOcctime;

	private Integer requestId;
	// Constructors

	/** default constructor */
	public InstantData() {
	}

	/** minimal constructor */
	public InstantData(InstantDataId id) {
		this.id = id;
	}

	/** full constructor */
	public InstantData(InstantDataId id, Double voltageRphase, Double voltageYphase, Double voltageBphase,
			Double currentRphase, Double currentYphase, Double currentBphase, Double rphasePf, Double yphasePf,
			Double bphasePf, Double averagePf, Double activePower, Double apparentPower, Double reactivePower,
			Double activeEnergyimp, Double apparentEnergyimp, Double reactiveEnergylagimp, Double reactiveEnergyleadimp,
			Double activeEnergyexp, Double apparentEnergyexp, Double reactiveEnergylagexp, Double reactiveEnergyleadexp,
			Double frequency, Timestamp insertedDate, String accountNo, String extraField1, String extraField2,
			String extraField3, String extraField4, String noOfPowerfailures, String cumPowerOffDuration,
			Integer cumTamperCount, Integer cumBillingCount, Integer cumProgrammingCount, Timestamp billingDate,
			Double cumengyQi, Double cumengyQii, Double cumengyQiii, Double cumengyQiv, String cumPowerOnDuration,
			String manufactureSpecific, Integer neutralCurrent, Double angleOfL1l2, Double angleOfL1l3,
			String loadLimitStatus, Double activeThresholdLoadlimit, Double mdKwimp, Timestamp mdKwimpOcctime,
			Double mdKwexp, Timestamp mdKwexpOcctime, Double mdKvaimp, Timestamp mdKvaimpOcctime, Double mdKvaexp,
			Timestamp mdKvaexpOcctime,Integer requestId) {
		this.id = id;
		this.voltageRphase = voltageRphase;
		this.voltageYphase = voltageYphase;
		this.voltageBphase = voltageBphase;
		this.currentRphase = currentRphase;
		this.currentYphase = currentYphase;
		this.currentBphase = currentBphase;
		this.rphasePf = rphasePf;
		this.yphasePf = yphasePf;
		this.bphasePf = bphasePf;
		this.averagePf = averagePf;
		this.activePower = activePower;
		this.apparentPower = apparentPower;
		this.reactivePower = reactivePower;
		this.activeEnergyimp = activeEnergyimp;
		this.apparentEnergyimp = apparentEnergyimp;
		this.reactiveEnergylagimp = reactiveEnergylagimp;
		this.reactiveEnergyleadimp = reactiveEnergyleadimp;
		this.activeEnergyexp = activeEnergyexp;
		this.apparentEnergyexp = apparentEnergyexp;
		this.reactiveEnergylagexp = reactiveEnergylagexp;
		this.reactiveEnergyleadexp = reactiveEnergyleadexp;
		this.frequency = frequency;
		this.insertedDate = insertedDate;
		this.accountNo = accountNo;
		this.extraField1 = extraField1;
		this.extraField2 = extraField2;
		this.extraField3 = extraField3;
		this.extraField4 = extraField4;
		this.noOfPowerfailures = noOfPowerfailures;
		this.cumPowerOffDuration = cumPowerOffDuration;
		this.cumTamperCount = cumTamperCount;
		this.cumBillingCount = cumBillingCount;
		this.cumProgrammingCount = cumProgrammingCount;
		this.billingDate = billingDate;
		this.cumengyQi = cumengyQi;
		this.cumengyQii = cumengyQii;
		this.cumengyQiii = cumengyQiii;
		this.cumengyQiv = cumengyQiv;
		this.cumPowerOnDuration = cumPowerOnDuration;
		this.manufactureSpecific = manufactureSpecific;
		this.neutralCurrent = neutralCurrent;
		this.angleOfL1l2 = angleOfL1l2;
		this.angleOfL1l3 = angleOfL1l3;
		this.loadLimitStatus = loadLimitStatus;
		this.activeThresholdLoadlimit = activeThresholdLoadlimit;
		this.mdKwimp = mdKwimp;
		this.mdKwimpOcctime = mdKwimpOcctime;
		this.mdKwexp = mdKwexp;
		this.mdKwexpOcctime = mdKwexpOcctime;
		this.mdKvaimp = mdKvaimp;
		this.mdKvaimpOcctime = mdKvaimpOcctime;
		this.mdKvaexp = mdKvaexp;
		this.mdKvaexpOcctime = mdKvaexpOcctime;
		this.requestId = requestId;
	}

	// Property accessors

	public InstantDataId getId() {
		return this.id;
	}

	public void setId(InstantDataId id) {
		this.id = id;
	}

	public Double getVoltageRphase() {
		return this.voltageRphase;
	}

	public void setVoltageRphase(Double voltageRphase) {
		this.voltageRphase = voltageRphase;
	}

	public Double getVoltageYphase() {
		return this.voltageYphase;
	}

	public void setVoltageYphase(Double voltageYphase) {
		this.voltageYphase = voltageYphase;
	}

	public Double getVoltageBphase() {
		return this.voltageBphase;
	}

	public void setVoltageBphase(Double voltageBphase) {
		this.voltageBphase = voltageBphase;
	}

	public Double getCurrentRphase() {
		return this.currentRphase;
	}

	public void setCurrentRphase(Double currentRphase) {
		this.currentRphase = currentRphase;
	}

	public Double getCurrentYphase() {
		return this.currentYphase;
	}

	public void setCurrentYphase(Double currentYphase) {
		this.currentYphase = currentYphase;
	}

	public Double getCurrentBphase() {
		return this.currentBphase;
	}

	public void setCurrentBphase(Double currentBphase) {
		this.currentBphase = currentBphase;
	}

	public Double getRphasePf() {
		return this.rphasePf;
	}

	public void setRphasePf(Double rphasePf) {
		this.rphasePf = rphasePf;
	}

	public Double getYphasePf() {
		return this.yphasePf;
	}

	public void setYphasePf(Double yphasePf) {
		this.yphasePf = yphasePf;
	}

	public Double getBphasePf() {
		return this.bphasePf;
	}

	public void setBphasePf(Double bphasePf) {
		this.bphasePf = bphasePf;
	}

	public Double getAveragePf() {
		return this.averagePf;
	}

	public void setAveragePf(Double averagePf) {
		this.averagePf = averagePf;
	}

	public Double getActivePower() {
		return this.activePower;
	}

	public void setActivePower(Double activePower) {
		this.activePower = activePower;
	}

	public Double getApparentPower() {
		return this.apparentPower;
	}

	public void setApparentPower(Double apparentPower) {
		this.apparentPower = apparentPower;
	}

	public Double getReactivePower() {
		return this.reactivePower;
	}

	public void setReactivePower(Double reactivePower) {
		this.reactivePower = reactivePower;
	}

	public Double getActiveEnergyimp() {
		return this.activeEnergyimp;
	}

	public void setActiveEnergyimp(Double activeEnergyimp) {
		this.activeEnergyimp = activeEnergyimp;
	}

	public Double getApparentEnergyimp() {
		return this.apparentEnergyimp;
	}

	public void setApparentEnergyimp(Double apparentEnergyimp) {
		this.apparentEnergyimp = apparentEnergyimp;
	}

	public Double getReactiveEnergylagimp() {
		return this.reactiveEnergylagimp;
	}

	public void setReactiveEnergylagimp(Double reactiveEnergylagimp) {
		this.reactiveEnergylagimp = reactiveEnergylagimp;
	}

	public Double getReactiveEnergyleadimp() {
		return this.reactiveEnergyleadimp;
	}

	public void setReactiveEnergyleadimp(Double reactiveEnergyleadimp) {
		this.reactiveEnergyleadimp = reactiveEnergyleadimp;
	}

	public Double getActiveEnergyexp() {
		return this.activeEnergyexp;
	}

	public void setActiveEnergyexp(Double activeEnergyexp) {
		this.activeEnergyexp = activeEnergyexp;
	}

	public Double getApparentEnergyexp() {
		return this.apparentEnergyexp;
	}

	public void setApparentEnergyexp(Double apparentEnergyexp) {
		this.apparentEnergyexp = apparentEnergyexp;
	}

	public Double getReactiveEnergylagexp() {
		return this.reactiveEnergylagexp;
	}

	public void setReactiveEnergylagexp(Double reactiveEnergylagexp) {
		this.reactiveEnergylagexp = reactiveEnergylagexp;
	}

	public Double getReactiveEnergyleadexp() {
		return this.reactiveEnergyleadexp;
	}

	public void setReactiveEnergyleadexp(Double reactiveEnergyleadexp) {
		this.reactiveEnergyleadexp = reactiveEnergyleadexp;
	}

	public Double getFrequency() {
		return this.frequency;
	}

	public void setFrequency(Double frequency) {
		this.frequency = frequency;
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

	public String getNoOfPowerfailures() {
		return this.noOfPowerfailures;
	}

	public void setNoOfPowerfailures(String noOfPowerfailures) {
		this.noOfPowerfailures = noOfPowerfailures;
	}

	public String getCumPowerOffDuration() {
		return this.cumPowerOffDuration;
	}

	public void setCumPowerOffDuration(String cumPowerOffDuration) {
		this.cumPowerOffDuration = cumPowerOffDuration;
	}

	public Integer getCumTamperCount() {
		return this.cumTamperCount;
	}

	public void setCumTamperCount(Integer cumTamperCount) {
		this.cumTamperCount = cumTamperCount;
	}

	public Integer getCumBillingCount() {
		return this.cumBillingCount;
	}

	public void setCumBillingCount(Integer cumBillingCount) {
		this.cumBillingCount = cumBillingCount;
	}

	public Integer getCumProgrammingCount() {
		return this.cumProgrammingCount;
	}

	public void setCumProgrammingCount(Integer cumProgrammingCount) {
		this.cumProgrammingCount = cumProgrammingCount;
	}

	public Timestamp getBillingDate() {
		return this.billingDate;
	}

	public void setBillingDate(Timestamp billingDate) {
		this.billingDate = billingDate;
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

	public String getCumPowerOnDuration() {
		return this.cumPowerOnDuration;
	}

	public void setCumPowerOnDuration(String cumPowerOnDuration) {
		this.cumPowerOnDuration = cumPowerOnDuration;
	}

	public String getManufactureSpecific() {
		return this.manufactureSpecific;
	}

	public void setManufactureSpecific(String manufactureSpecific) {
		this.manufactureSpecific = manufactureSpecific;
	}

	public Integer getNeutralCurrent() {
		return this.neutralCurrent;
	}

	public void setNeutralCurrent(Integer neutralCurrent) {
		this.neutralCurrent = neutralCurrent;
	}

	public Double getAngleOfL1l2() {
		return this.angleOfL1l2;
	}

	public void setAngleOfL1l2(Double angleOfL1l2) {
		this.angleOfL1l2 = angleOfL1l2;
	}

	public Double getAngleOfL1l3() {
		return this.angleOfL1l3;
	}

	public void setAngleOfL1l3(Double angleOfL1l3) {
		this.angleOfL1l3 = angleOfL1l3;
	}

	public String getLoadLimitStatus() {
		return this.loadLimitStatus;
	}

	public void setLoadLimitStatus(String loadLimitStatus) {
		this.loadLimitStatus = loadLimitStatus;
	}

	public Double getActiveThresholdLoadlimit() {
		return this.activeThresholdLoadlimit;
	}

	public void setActiveThresholdLoadlimit(Double activeThresholdLoadlimit) {
		this.activeThresholdLoadlimit = activeThresholdLoadlimit;
	}

	public Double getMdKwimp() {
		return this.mdKwimp;
	}

	public void setMdKwimp(Double mdKwimp) {
		this.mdKwimp = mdKwimp;
	}

	public Timestamp getMdKwimpOcctime() {
		return this.mdKwimpOcctime;
	}

	public void setMdKwimpOcctime(Timestamp mdKwimpOcctime) {
		this.mdKwimpOcctime = mdKwimpOcctime;
	}

	public Double getMdKwexp() {
		return this.mdKwexp;
	}

	public void setMdKwexp(Double mdKwexp) {
		this.mdKwexp = mdKwexp;
	}

	public Timestamp getMdKwexpOcctime() {
		return this.mdKwexpOcctime;
	}

	public void setMdKwexpOcctime(Timestamp mdKwexpOcctime) {
		this.mdKwexpOcctime = mdKwexpOcctime;
	}

	public Double getMdKvaimp() {
		return this.mdKvaimp;
	}

	public void setMdKvaimp(Double mdKvaimp) {
		this.mdKvaimp = mdKvaimp;
	}

	public Timestamp getMdKvaimpOcctime() {
		return this.mdKvaimpOcctime;
	}

	public void setMdKvaimpOcctime(Timestamp mdKvaimpOcctime) {
		this.mdKvaimpOcctime = mdKvaimpOcctime;
	}

	public Double getMdKvaexp() {
		return this.mdKvaexp;
	}

	public void setMdKvaexp(Double mdKvaexp) {
		this.mdKvaexp = mdKvaexp;
	}

	public Timestamp getMdKvaexpOcctime() {
		return this.mdKvaexpOcctime;
	}

	public void setMdKvaexpOcctime(Timestamp mdKvaexpOcctime) {
		this.mdKvaexpOcctime = mdKvaexpOcctime;
	}

	public Integer getRequestId() {
		return requestId;
	}

	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}

}