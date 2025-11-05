package com.smartmeter.model;

import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/**
 * MeterRequestMasterId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class MeterRequestMasterId implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;

	private String commandName;
	private String commandCode;
	private String meterNo;

	// Constructors

	/** default constructor */
	public MeterRequestMasterId() {
	}

	/** full constructor */
	public MeterRequestMasterId(String commandName,
			String commandCode, String meterNo) {
		this.commandName = commandName;
		this.commandCode = commandCode;
		this.meterNo = meterNo;
	}

	// Property accessors

	
	

	public String getCommandName() {
		return this.commandName;
	}

	public void setCommandName(String commandName) {
		this.commandName = commandName;
	}

	public String getCommandCode() {
		return this.commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}

	public String getMeterNo() {
		return this.meterNo;
	}

	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof MeterRequestMasterId))
			return false;
		MeterRequestMasterId castOther = (MeterRequestMasterId) other;

		return  ((this.getCommandName() == castOther.getCommandName()) || (this
						.getCommandName() != null
						&& castOther.getCommandName() != null && this
						.getCommandName().equals(castOther.getCommandName())))
				&& ((this.getCommandCode() == castOther.getCommandCode()) || (this
						.getCommandCode() != null
						&& castOther.getCommandCode() != null && this
						.getCommandCode().equals(castOther.getCommandCode())))
				&& ((this.getMeterNo() == castOther.getMeterNo()) || (this
						.getMeterNo() != null && castOther.getMeterNo() != null && this
						.getMeterNo().equals(castOther.getMeterNo())));
	}

	public int hashCode() {
		int result = 17;

		
		result = 37
				* result
				+ (getCommandName() == null ? 0 : this.getCommandName()
						.hashCode());
		result = 37
				* result
				+ (getCommandCode() == null ? 0 : this.getCommandCode()
						.hashCode());
		result = 37 * result
				+ (getMeterNo() == null ? 0 : this.getMeterNo().hashCode());
		return result;
	}

}