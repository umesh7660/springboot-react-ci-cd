package com.smartmeter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartmeter.model.Meterconfig;

public interface MeterConfigRepositoy extends JpaRepository<Meterconfig, String>{

}
