package com.smartmeter.controller;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smartmeter.DTO.DailyBillingDataDTO;
import com.smartmeter.DTO.EventsSummaryDataDTO;
import com.smartmeter.DTO.InstantDataDTO;
import com.smartmeter.DTO.LoadsurveyDataDTO;
import com.smartmeter.DTO.MinVoltageMaxLoadDTO;
import com.smartmeter.DTO.MonthlyBillingDataDTO;
import com.smartmeter.DTO.TamperEventsDTO;
import com.smartmeter.model.UserMaster;
import com.smartmeter.services.SingleMeterViewService;

@RestController
@RequestMapping("/api/singlemeterView")
public class SingleMeterViewController {

	@Autowired
	private SingleMeterViewService singlemeterviewService;

	@GetMapping("/ondemandIntantData")
	public Map<String, List<InstantDataDTO>> getInstantData1(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("requestId") String requestId,
			@RequestParam("commandName") String commandName, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate) throws ParseException {
		return singlemeterviewService.getInstantData(meterNo, startdate, enddate, requestId, level1id);
	}

	@GetMapping("/instantData")
	public Map<String, List<InstantDataDTO>> getInstantData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate) throws ParseException {
		return singlemeterviewService.getInstantData(meterNo, startdate, enddate, "", level1id);
	}

	@GetMapping("/instantDataLatest")
	public List<InstantDataDTO> getLatestInstantData(@RequestParam("meterNo") String meterNo) throws ParseException {
		return singlemeterviewService.getLatestInstantData(meterNo);
	}

	@GetMapping("/loadsurveyData")
	public Map<String, List<LoadsurveyDataDTO>> getLoadsurveyData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate) throws ParseException {
		return singlemeterviewService.getLoadsurveyData(meterNo, startdate, enddate, "", level1id);
	}

	@GetMapping("/ondemandLoadsurveyData")
	public Map<String, List<LoadsurveyDataDTO>> getOndemandLoadsurveyData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("requestId") String requestId,
			@RequestParam("startdate") String startdate, @RequestParam("enddate") String enddate)
			throws ParseException {
		return singlemeterviewService.getLoadsurveyData(meterNo, startdate, enddate, requestId, level1id);
	}

	@GetMapping("/minVoltageMaxLoadData")
	public List<MinVoltageMaxLoadDTO> getMinVoltageMaxLoadData(@RequestParam("meterNo") String meterNo)
			throws ParseException {
		return singlemeterviewService.fetchMinVoltageMaxLoadData(meterNo);
	}

	@GetMapping("/dailybillingData")
	public Map<String, List<DailyBillingDataDTO>> getDailyBillingData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate) throws ParseException {
		return singlemeterviewService.getDailyBillingData(meterNo, startdate, enddate, "", level1id);
	}

	@GetMapping("/ondemandDailybillingData")
	public Map<String, List<DailyBillingDataDTO>> getOndemandDailyBillingData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate, @RequestParam("requestId") String requestId)
			throws ParseException {
		return singlemeterviewService.getDailyBillingData(meterNo, startdate, enddate, requestId, level1id);
	}

	@GetMapping("/billingData")
	public Map<String, List<MonthlyBillingDataDTO>> getBillingData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate) throws ParseException {
		return singlemeterviewService.getBillingData(meterNo, startdate, enddate, "", level1id);
	}

	@GetMapping("/ondemandBillingData")
	public Map<String, List<MonthlyBillingDataDTO>> getBillingData(@RequestParam("level1id") int level1id,
			@RequestParam("meterNo") String meterNo, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate, @RequestParam("requestId") String requestId)
			throws ParseException {
		return singlemeterviewService.getBillingData(meterNo, startdate, enddate, requestId, level1id);
	}

	@GetMapping("/eventData")
	public Map<String, List<EventsSummaryDataDTO>> getEventData(@RequestParam("level1id") int level1id,
			@RequestParam String meterNo, @RequestParam String startDate, @RequestParam String endDate)
			throws ParseException {
		return singlemeterviewService.getEventData(meterNo, startDate, endDate, "", level1id);
	}

	@GetMapping("/OndemandEventData")
	public Map<String, List<EventsSummaryDataDTO>> getOndeamdEventData(@RequestParam("level1id") int level1id,
			@RequestParam String meterNo, @RequestParam String startDate, @RequestParam String endDate,
			@RequestParam("requestId") String requestId) throws ParseException {
		return singlemeterviewService.getEventData(meterNo, startDate, endDate, requestId, level1id);
	}

	@GetMapping("/eventDataNotRestoration")
	public List<TamperEventsDTO> getEventDataNotRestoration(@RequestParam String meterNo,
			@RequestParam String startDate, @RequestParam String endDate,@RequestParam int level1id) throws ParseException {
		return singlemeterviewService.getEventDataNotRestoration(meterNo, startDate, endDate,level1id);
	}

	@GetMapping("/eventDataLog")
	public List<String> getEventDataLog(@RequestParam String meterNo, @RequestParam String startDate,
			@RequestParam String endDate,@RequestParam int level1id) throws ParseException {
		return singlemeterviewService.getEventDataLog(meterNo, startDate, endDate,level1id);
	}

}
