package com.smartmeter.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartmeter.DTO.OnDemandMaster;
import com.smartmeter.model.MeterRequestMaster;
import com.smartmeter.services.MasterDataService;
import com.smartmeter.services.OnDemandService;

@RestController
@RequestMapping("/api/")
public class OnDemandController {

	@Autowired
	private OnDemandService ondemandService;

	@Autowired
	private MasterDataService masterDataService;
	
	@GetMapping("ondemand/fetchDemandType")
	public Map<String, String> fetchDemandType() {
		return ondemandService.fetchDemandType();
	}

	@GetMapping("ondemand/getOnDemandData")
	public List<OnDemandMaster> getOnDemandData(@RequestParam("demandName") String demandName,
			@RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate , 
			@RequestParam("level1id") int level1id)
			throws ParseException {
		return ondemandService.getOnDemandData(demandName, startdate, enddate,level1id);
	}

	@PostMapping("ondemand/getondemandRequest")
	public ResponseEntity<List<MeterRequestMaster>> getOndemandRequest(@RequestBody Map<String, Object> requestData) {
		@SuppressWarnings("unchecked")
		List<String> meterNos = (List<String>) requestData.get("meterNo");
		String demandTypeNames = (String) requestData.get("demandTypeNames");
		String demandTypeCodes = (String) requestData.get("demandTypeCodes");
		
	
		DateTimeFormatter inputFormatter = null;
		DateTimeFormatter outputFormatter = null;
		String fromDateTime = null;
		String toDateTime = null;
		if (demandTypeNames.equals("loadsurveydata")) {
			fromDateTime = (String) requestData.get("fromDate");
			toDateTime = (String) requestData.get("toDate");

			// Define formatter to parse the input format
			inputFormatter = DateTimeFormatter.ISO_DATE_TIME; // Handles "2025-03-23T09:55:00.000Z"

			// Parse as LocalDateTime
			LocalDateTime fromDateTimeParsed = LocalDateTime.parse(fromDateTime, inputFormatter);
			LocalDateTime toDateTimeParsed = LocalDateTime.parse(toDateTime, inputFormatter);

			// Convert to desired format
			outputFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
			fromDateTime = fromDateTimeParsed.format(outputFormatter);
			toDateTime = toDateTimeParsed.format(outputFormatter);
		}else if (demandTypeNames.equals("eventsdata")) {// Extract date-time strings from request
			fromDateTime = (String) requestData.get("fromDate");
			toDateTime = (String) requestData.get("toDate");

			// Define formatter to parse the input format
			inputFormatter = DateTimeFormatter.ISO_DATE_TIME; // Handles "2025-03-23T09:55:00.000Z"

			// Parse as LocalDateTime
			LocalDateTime fromDateTimeParsed = LocalDateTime.parse(fromDateTime, inputFormatter);
			LocalDateTime toDateTimeParsed = LocalDateTime.parse(toDateTime, inputFormatter);

			// Convert to desired format
			outputFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
			fromDateTime = fromDateTimeParsed.format(outputFormatter);
			toDateTime = toDateTimeParsed.format(outputFormatter);
		} else if (demandTypeNames.equals("dailybillingdata")) {
			fromDateTime = (String) requestData.get("fromDate");
			toDateTime = (String) requestData.get("toDate");
			LocalDate fromdate = LocalDate.parse(fromDateTime.substring(0, 10));
			LocalDate todate = LocalDate.parse(toDateTime.substring(0, 10));
			fromDateTime = fromdate.atStartOfDay().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
			toDateTime = todate.atStartOfDay().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));

		} else if (demandTypeNames.equals("billingdata")) {
			fromDateTime = (String) requestData.get("fromDate");
			toDateTime = (String) requestData.get("toDate");
			LocalDate fromdate = LocalDate.parse(fromDateTime.substring(0, 10));
			LocalDate todate = LocalDate.parse(toDateTime.substring(0, 10));
			fromDateTime = fromdate.atStartOfDay().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
			toDateTime = todate.atStartOfDay().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
		} else if (demandTypeNames.equals("rtcchange")) {
			toDateTime = (String) requestData.get("toDate");

			// Null check
			if (toDateTime == null) {
				throw new IllegalArgumentException("Missing fromDate or toDate in request data");
			}

			// Define formatter to parse the input format
			inputFormatter = DateTimeFormatter.ISO_DATE_TIME; // Handles "2025-03-23T09:55:00.000Z"

			try {
				// Parse as LocalDateTime
				LocalDateTime toDateTimeParsed = LocalDateTime.parse(toDateTime, inputFormatter);

				// Convert to desired format
			 outputFormatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
				toDateTime = toDateTimeParsed.format(outputFormatter);

			} catch (DateTimeParseException e) {
				// Handle incorrect date format
				throw new IllegalArgumentException("Invalid date format", e);
			}

			System.err.println("Parsed fromDateTime: " + fromDateTime + ", toDateTime: " + toDateTime);
		}

	
		List<MeterRequestMaster> savedRequests = new ArrayList<>();

		// Iterate and save each commandCode separately
		for (String meterNo : meterNos) {
			String manufacturername = masterDataService.fetchManufacture(meterNo);
			
			String commandCode = null;
			if (demandTypeNames.equals("ping")) {
				commandCode = demandTypeCodes + "#" + meterNo;
			} else if (demandTypeNames.equals("readfulldata")) {
				commandCode = demandTypeCodes + "01#" + meterNo;
			} else if (demandTypeNames.equals("instantdata")) {
				commandCode = demandTypeCodes + "01#" + meterNo;
			} else if(demandTypeNames.equals("rtcchange")) {
				commandCode = demandTypeCodes + "01#"+ toDateTime +"#"+ meterNo;
			} else {
				commandCode = demandTypeCodes + "01#" + fromDateTime + "#" + toDateTime + "#" + meterNo;
			}
			MeterRequestMaster savedRequest = ondemandService.save(commandCode, meterNo, demandTypeNames,manufacturername);
			savedRequests.add(savedRequest);
		}

		return ResponseEntity.ok(savedRequests);
	}

}
