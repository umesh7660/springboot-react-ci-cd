package com.smartmeter.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartmeter.DTO.AvailabilityDataDTO;
import com.smartmeter.services.AvailabilityService;

@RestController
@RequestMapping("/api/")
public class AvailabilityController {

    @Autowired
    private AvailabilityService availabilityService; // Use instance injection instead of static

    @GetMapping("count/availability")
    public AvailabilityDataDTO getCountAvailability(@RequestParam("section") String section,@RequestParam("meterNo") String meterNo,
			@RequestParam("startdate") String startdate, @RequestParam("enddate") String enddate,@RequestParam("level1id") int level1id) throws ParseException{
      
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date startDate = sdf.parse(startdate + " 00:00:00");
		Date endDate = sdf.parse(enddate + " 23:59:59");

    	return availabilityService.getCountAvailability(level1id,section,meterNo,startDate,endDate);
    }
}
