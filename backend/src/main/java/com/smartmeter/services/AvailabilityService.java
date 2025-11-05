package com.smartmeter.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.DTO.AvailabilityDataDTO;
import com.smartmeter.repository.AvailabilityRepository;

@Service
public class AvailabilityService {

	@Autowired
	private AvailabilityRepository availabilityRepository;

	public AvailabilityDataDTO getCountAvailability(int level1id, String section, String meterNo, Date startDate, Date endDate) {
		// Fetch the data from the repository methods
		List<Object[]> meterConfig = availabilityRepository.getCountAvailability(level1id,section,meterNo,startDate,endDate);
		System.out.println("meterConfig" );
		List<Object[]> loadCount = availabilityRepository.getCountLoadsurvey(level1id,section,meterNo,startDate,endDate);
		System.out.println("loadCount" );
		List<Object[]> dailyCount = availabilityRepository.getCountDailybilling(level1id,section,meterNo,startDate,endDate);
		System.out.println("dailyCount" );
		List<Object[]> billingCount = availabilityRepository.getCountMonthly(level1id,section,meterNo,startDate,endDate);
		System.out.println("billingCount" );
		// Create AvailabilityDataDTO for each type of data
		AvailabilityDataDTO meterDataDTO = new AvailabilityDataDTO();
		meterDataDTO.setMeterConfig(meterConfig);
		meterDataDTO.setLoadCount(loadCount);
		meterDataDTO.setDailyCount(dailyCount);
		meterDataDTO.setBillingCount(billingCount);

		// Return the map
		return meterDataDTO;
	}
}
