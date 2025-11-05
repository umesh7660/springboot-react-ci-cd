package com.smartmeter.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MeterCommandMaster {
	@Id
	private String commandName;
	private String commandCode;
	public String getCommandName() {
		return commandName;
	}
	public String getCommandCode() {
		return commandCode;
	}
	public void setCommandName(String commandName) {
		this.commandName = commandName;
	}
	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	
}
