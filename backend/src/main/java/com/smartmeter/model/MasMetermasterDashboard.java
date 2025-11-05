// default package
package com.smartmeter.model;
import java.sql.Timestamp;

import javax.persistence.Embedded;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * MasMetermasterDashboard entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "mas_metermaster_dashboard")
public class MasMetermasterDashboard implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	// Fields
	@EmbeddedId
	private MasMetermasterDashboardId id;
	private String instantAvailable;
	private String billingAvailable;
	private String lsAvailable;
	private String eventsAvailable;
	private Timestamp insertedDate;
	private String dailybillingData;

	// Constructors

	/** default constructor */
	public MasMetermasterDashboard() {
	}

	/** minimal constructor */
	public MasMetermasterDashboard(MasMetermasterDashboardId id) {
		this.id = id;
	}

	/** full constructor */
	public MasMetermasterDashboard(MasMetermasterDashboardId id,
			String instantAvailable, String billingAvailable,
			String lsAvailable, String eventsAvailable, Timestamp insertedDate,
			String dailybillingData) {
		this.id = id;
		this.instantAvailable = instantAvailable;
		this.billingAvailable = billingAvailable;
		this.lsAvailable = lsAvailable;
		this.eventsAvailable = eventsAvailable;
		this.insertedDate = insertedDate;
		this.dailybillingData = dailybillingData;
	}

	// Property accessors

	public MasMetermasterDashboardId getId() {
		return this.id;
	}

	public void setId(MasMetermasterDashboardId id) {
		this.id = id;
	}

	public String getInstantAvailable() {
		return this.instantAvailable;
	}

	public void setInstantAvailable(String instantAvailable) {
		this.instantAvailable = instantAvailable;
	}

	public String getBillingAvailable() {
		return this.billingAvailable;
	}

	public void setBillingAvailable(String billingAvailable) {
		this.billingAvailable = billingAvailable;
	}

	public String getLsAvailable() {
		return this.lsAvailable;
	}

	public void setLsAvailable(String lsAvailable) {
		this.lsAvailable = lsAvailable;
	}

	public String getEventsAvailable() {
		return this.eventsAvailable;
	}

	public void setEventsAvailable(String eventsAvailable) {
		this.eventsAvailable = eventsAvailable;
	}

	public Timestamp getInsertedDate() {
		return this.insertedDate;
	}

	public void setInsertedDate(Timestamp insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getDailybillingData() {
		return this.dailybillingData;
	}

	public void setDailybillingData(String dailybillingData) {
		this.dailybillingData = dailybillingData;
	}

}