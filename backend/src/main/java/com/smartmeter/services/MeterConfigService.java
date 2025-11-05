package com.smartmeter.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.model.Meterconfig;
import com.smartmeter.repository.MeterConfigRepositoy;

@Service
public class MeterConfigService {

	@Autowired
	private MeterConfigRepositoy meterConfigRepositoy; 
	
	public Meterconfig masterConfig(Meterconfig meterconfig) {
		return meterConfigRepositoy.save(meterconfig);
	}

}
