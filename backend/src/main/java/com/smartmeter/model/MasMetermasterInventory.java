// default package
package com.smartmeter.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * MasMetermasterInventory entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "mas_metermaster_inventory")
public class MasMetermasterInventory implements java.io.Serializable {

	// Fields

	private static final long serialVersionUID = 1L;
	@EmbeddedId
	private MasMetermasterInventoryId id;

	// Constructors

	/** default constructor */
	public MasMetermasterInventory() {
	}

	/** full constructor */
	public MasMetermasterInventory(MasMetermasterInventoryId id) {
		this.id = id;
	}

	// Property accessors

	public MasMetermasterInventoryId getId() {
		return this.id;
	}

	public void setId(MasMetermasterInventoryId id) {
		this.id = id;
	}

}