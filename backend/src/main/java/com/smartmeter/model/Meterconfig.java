package com.smartmeter.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Meterconfig entity. @author MyEclipse Persistence Tools
 */

@Entity
@Table(name = "meterconfig")
public class Meterconfig implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@Id
	private String metermake;
	private String configparam;

	// Constructors

	/** default constructor */
	public Meterconfig() {
	}

	/** minimal constructor */
	public Meterconfig(String metermake) {
		this.metermake = metermake;
	}

	/** full constructor */
	public Meterconfig(String metermake, String configparam) {
		this.metermake = metermake;
		this.configparam = configparam;
	}

	// Property accessors

	public String getMetermake() {
		return this.metermake;
	}

	public void setMetermake(String metermake) {
		this.metermake = metermake;
	}

	public String getConfigparam() {
		return this.configparam;
	}

	public void setConfigparam(String configparam) {
		this.configparam = configparam;
	}

}