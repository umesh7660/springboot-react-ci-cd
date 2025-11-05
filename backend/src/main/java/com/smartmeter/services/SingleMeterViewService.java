package com.smartmeter.services;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.DTO.DailyBillingDataDTO;
import com.smartmeter.DTO.EventsSummaryDataDTO;
import com.smartmeter.DTO.InstantDataDTO;
import com.smartmeter.DTO.LoadsurveyDataDTO;
import com.smartmeter.DTO.MinVoltageMaxLoadDTO;
import com.smartmeter.DTO.MonthlyBillingDataDTO;
import com.smartmeter.DTO.TamperEventsDTO;
import com.smartmeter.repository.SingleMeterViewRepository;

@Service
public class SingleMeterViewService {

	@Autowired
	private SingleMeterViewRepository singleMeterViewRepository;

	public Map<String, List<InstantDataDTO>> getInstantData(String meterNo, String startdate, String enddate,
			String requestId, int level1id) throws ParseException {

		Date startDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(startdate + " 00:00:00");
		Date endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(enddate + " 23:59:59");
		List<Object[]> rawResult = null;
		if (!requestId.equals(null) && !requestId.equals("")) {
			rawResult = singleMeterViewRepository.getOnDemandInstantData(meterNo, startDate, endDate, requestId,level1id);
		} else {
			rawResult = singleMeterViewRepository.getInstantData(meterNo, startDate, endDate,level1id);

		}
		List<InstantDataDTO> list = new ArrayList<InstantDataDTO>();
		for (Object[] row : rawResult) {
			InstantDataDTO data = new InstantDataDTO();

			data.setMeterNo((String) row[0]);

			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

			data.setInstantDate(row[1] != null ? sdf.format((Timestamp) row[1]) : null);
			data.setVoltageRphase(row[2] != null ? (Double) row[2] : 0.0);
			data.setVoltageYphase(row[3] != null ? (Double) row[3] : 0.0);
			data.setVoltageBphase(row[4] != null ? (Double) row[4] : 0.0);
			data.setCurrentRphase(row[5] != null ? (Double) row[5] : 0.0);
			data.setCurrentYphase(row[6] != null ? (Double) row[6] : 0.0);
			data.setCurrentBphase(row[7] != null ? (Double) row[7] : 0.0);
			data.setRphasePf(row[8] != null ? (Double) row[8] : 0.0);
			data.setYphasePf(row[9] != null ? (Double) row[9] : 0.0);
			data.setBphasePf(row[10] != null ? (Double) row[10] : 0.0);
			data.setAveragePf(row[11] != null ? (Double) row[11] : 0.0);
			data.setActivePower(row[12] != null ? (Double) row[12] : 0.0);
			data.setApparentPower(row[13] != null ? (Double) row[13] : 0.0);
			data.setReactivePower(row[14] != null ? (Double) row[14] : 0.0);
			data.setActiveEnergyimp(row[15] != null ? (Double) row[15] : 0.0);
			data.setApparentEnergyimp(row[16] != null ? (Double) row[16] : 0.0);
			data.setReactiveEnergylagimp(row[36] != null ? (Double) row[36] : 0.0);
			data.setReactiveEnergyleadimp(row[37] != null ? (Double) row[37] : 0.0);
			data.setActiveEnergyexp(row[19] != null ? (Double) row[19] : 0.0);
			data.setApparentEnergyexp(row[20] != null ? (Double) row[20] : 0.0);
			data.setReactiveEnergylagexp(row[38] != null ? (Double) row[38] : 0.0);
			data.setReactiveEnergyleadexp(row[39] != null ? (Double) row[39] : 0.0);
			data.setFrequency(row[23] != null ? (Double) row[23] : 0.0);

			data.setInsertedDate(row[24] != null ? sdf.format((Timestamp) row[24]) : null);
			data.setAccountNo((String) row[25]);

			data.setNoofPowerFailure(row[30] != null ? (String) row[30] : "");
			data.setCumPowerFailureDuration(row[31] != null ? (String) row[31] : "");
			data.setCumTamperCount(row[32] != null ? (Integer) row[32] : 0);
			data.setCumBillingDate(row[33] != null ? (Integer) row[33] : 0);
			data.setCumProgrammingCount(row[34] != null ? (Integer) row[34] : 0);
			data.setBillingDate(row[35] != null ? row[35].toString() : "");
			data.setCumengyQi(row[36] != null ? (Double) row[36] : 0.0);
			data.setCumengyQi(row[37] != null ? (Double) row[37] : 0.0);
			data.setCumengyQi(row[38] != null ? (Double) row[38] : 0.0);
			data.setCumengyQi(row[39] != null ? (Double) row[39] : 0.0);

			data.setCumPowerOnDuration(row[40] != null ? (String) row[40] : "");
			data.setManufactureSpecific(row[41] != null ? (String) row[41] : "");
			data.setNeutralCurrent(row[42] != null ? (Double) row[42] : 0);
			data.setAngleOfL1L2(row[43] != null ? (Double) row[43] : 0.0);
			data.setAngleOfL1L3(row[44] != null ? (Double) row[44] : 0.0);
			data.setLoadLimitStatus(row[45] != null ? (String) row[45] : "");
			data.setActivethresholdLoadLimit(row[46] != null ? (Double) row[46] : 0.0);

			data.setMaxDemandKwImport(row[47] != null ? (Double) row[47] : 0.0);
			data.setMaxDemandKwImportDate(row[48] != null ? row[48].toString() : "");
			data.setMaxDemandKwExport(row[49] != null ? (Double) row[49] : 0.0);
			data.setMaxDemandKwExportDate(row[50] != null ? row[50].toString() : "");
			data.setMaxDemandKvaImport(row[51] != null ? (Double) row[51] : 0.0);
			data.setMaxDemandKvaImportDate(row[52] != null ? row[52].toString() : "");
			data.setMaxDemandKvaExport(row[53] != null ? (Double) row[53] : 0.0);
			data.setMaxDemandKvaExportDate(row[54] != null ? row[54].toString() : "");

			list.add(data);
		}

		List<InstantDataDTO> reversedList = new ArrayList<>(list);
		Collections.reverse(reversedList);

		// Return both lists in a map
		Map<String, List<InstantDataDTO>> result = new HashMap<>();
		result.put("original", list);
		result.put("reversed", reversedList);
		return result;
	}

	public static String adjustStartDate(String startdate) throws ParseException {
		SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = inputFormat.parse(startdate);

		SimpleDateFormat outputFormat = new SimpleDateFormat("yyyy-MM-'01'"); // Fixed day as 01
		return outputFormat.format(date);
	}

	public Map<String, List<LoadsurveyDataDTO>> getLoadsurveyData(String meterNo, String startdate, String enddate,
			String requestId,int level1Id) throws ParseException {
		Date startDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(startdate + " 00:00:00");
		Date endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(enddate + " 23:59:59");
		List<Object[]> rawResults = null;

		if (!requestId.equals(null) && !requestId.equals("")) {
			rawResults = singleMeterViewRepository.getOndemandLoadsurveyData(meterNo, startDate, endDate, requestId,level1Id);
		} else {
			rawResults = singleMeterViewRepository.getLoadsurveyData(meterNo, startDate, endDate,level1Id);
		}
		List<LoadsurveyDataDTO> billingDataList = new ArrayList<>();
		for (Object[] row : rawResults) {
			LoadsurveyDataDTO data = new LoadsurveyDataDTO();

			// Adjust the index positions based on your updated array
			data.setMeterNo((String) row[0]); // Example: Assuming row[0] still corresponds to MeterNo
			// data.setLsDate((Date) row[2]); // Adjusted index, assuming row[1] now
			// contains LsDate
			if (row[1] != null) {
				Timestamp String = (Timestamp) row[1]; // Cast to String
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setLsDatetime(sdf.format(String)); // Convert & set as String
			} else {
				data.setLsDatetime(null); // Handle null case
			}

			// data.setInterval((Integer) row[3]);
			// data.setIntervalid((Integer) row[4]);
			data.setKwhImport((Double) row[5]);

			data.setKwhExport((Double) row[7]);

			data.setKvahImport((Double) row[13]);

			data.setKvahExport((Double) row[15]);

			data.setKvarhImport((Double) row[17]);

			data.setKvarhExport((Double) row[19]);

			data.setKvarImport((Double) row[21]);

			data.setKvarExport((Double) row[23]);

			data.setKwImport((Double) row[25]);

			data.setKwExport((Double) row[27]);

			data.setKvaImport((Double) row[29]);

			data.setKvaExport((Double) row[31]);

			data.setCurrentRPhase((Double) row[33]);
			data.setCurrentYPhase((Double) row[34]);
			data.setCurrentBPhase((Double) row[35]);
			data.setAvgCurrent((Double) row[36]);
			data.setMinCurrent((Double) row[37]);
			data.setMaxCurrent((Double) row[38]);
			data.setVoltageRPhase((Double) row[39]);
			data.setVoltageYPhase((Double) row[40]);
			data.setVoltageBPhase((Double) row[41]);
			data.setAvgVoltage((Double) row[42]);
			data.setMinVoltage((Double) row[43]);
			data.setMaxVoltage((Double) row[44]);
			data.setPfRPhase((Double) row[45]);
			data.setPfYPhase((Double) row[46]);
			data.setPfBPhase((Double) row[47]);
			data.setAvgPf((Double) row[48]);
			data.setAvgFrequency((Double) row[49]);
			data.setNeutralCurrent((Double) row[50]);
			if (row[51] != null) {
				Timestamp String = (Timestamp) row[51]; // Cast to String
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setInsertedDate(sdf.format(String)); // Convert & set as String
			} else {
				data.setInsertedDate(null); // Handle null case
			}
			data.setAccountNo((String) row[52]);

			billingDataList.add(data);

		}
		List<LoadsurveyDataDTO> reversedList = new ArrayList<>(billingDataList);
		Collections.reverse(reversedList);

		// Return both lists in a map
		Map<String, List<LoadsurveyDataDTO>> result = new HashMap<>();
		result.put("original", billingDataList);
		result.put("reversed", reversedList);
		return result;
	}

	public List<MinVoltageMaxLoadDTO> fetchMinVoltageMaxLoadData(String meterNo) {
		List<Object[]> rawResult = singleMeterViewRepository.getMinVoltageMaxLoad(meterNo);
		List<MinVoltageMaxLoadDTO> loadList = new ArrayList<MinVoltageMaxLoadDTO>();
		for (Object[] obj : rawResult) {
			MinVoltageMaxLoadDTO data = new MinVoltageMaxLoadDTO();
			String timeString = null;
			if (obj[1] != null) {
				Timestamp timestamp = (Timestamp) obj[1];
				SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
				timeString = sdf.format(timestamp);
			}
			data.setTime(timeString);
			data.setMinVoltage((Double) obj[43]);
			data.setMaxVoltage((Double) obj[44]);
			data.setMinCurrent((Double) obj[37]);
			data.setMaxCurrent((Double) obj[38]);
			loadList.add(data);
		}
		return loadList;
	}

	public Map<String, List<MonthlyBillingDataDTO>> getBillingData(String meterNo, String startdate, String enddate, String requestId,int level1Id)
			throws ParseException {
		// TODO Auto-generated method stub
		String newStartDate = adjustStartDate(startdate);

		Date startDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(newStartDate + " 00:00:00");
		Date endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(enddate + " 23:59:59");

		List<Object[]> rawResults = null;
		if(!requestId.equals(null) && !requestId.equals("")) {
			rawResults =singleMeterViewRepository.getOndemandBillingData(meterNo, startDate, endDate,requestId, level1Id);
		}else {
			rawResults =singleMeterViewRepository.getBillingData(meterNo, startDate, endDate, level1Id);
		}
		List<MonthlyBillingDataDTO> billingDataList = new ArrayList<>();

		for (Object[] row : rawResults) {
			MonthlyBillingDataDTO data = new MonthlyBillingDataDTO();

			data.setMeterNo((String) row[0]);

			if (row[1] != null) {
				Timestamp String = (Timestamp) row[1]; // Cast to String
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setBillingDate(sdf.format(String)); // Convert & set as String
			} else {
				data.setBillingDate(null); // Handle null case
			}
			// Setting kwhImport and its T values
			data.setKwhImport((Double) row[2]);
			data.setKwhImportT1((Double) row[3]);
			data.setKwhImportT2((Double) row[4]);
			data.setKwhImportT3((Double) row[5]);
			data.setKwhImportT4((Double) row[6]);
			data.setKwhImportT5((Double) row[7]);
			data.setKwhImportT6((Double) row[8]);
			data.setKwhImportT7((Double) row[9]);
			data.setKwhImportT8((Double) row[10]);

			// Setting kwhExport and its T values
			data.setKwhExport((Double) row[11]);
			data.setKwhExportT1((Double) row[12]);
			data.setKwhExportT2((Double) row[13]);
			data.setKwhExportT3((Double) row[14]);
			data.setKwhExportT4((Double) row[15]);
			data.setKwhExportT5((Double) row[16]);
			data.setKwhExportT6((Double) row[17]);
			data.setKwhExportT7((Double) row[18]);
			data.setKwhExportT8((Double) row[19]);

			// Setting kvahImport and its T values
			data.setKvahImport((Double) row[20]);
			data.setKvahImportT1((Double) row[21]);
			data.setKvahImportT2((Double) row[22]);
			data.setKvahImportT3((Double) row[23]);
			data.setKvahImportT4((Double) row[24]);
			data.setKvahImportT5((Double) row[25]);
			data.setKvahImportT6((Double) row[26]);
			data.setKvahImportT7((Double) row[27]);
			data.setKvahImportT8((Double) row[28]);

			// Setting kvahExport and its T values
			data.setKvahExport((Double) row[29]);
			data.setKvahExportT1((Double) row[30]);
			data.setKvahExportT2((Double) row[31]);
			data.setKvahExportT3((Double) row[32]);
			data.setKvahExportT4((Double) row[33]);
			data.setKvahExportT5((Double) row[34]);
			data.setKvahExportT6((Double) row[35]);
			data.setKvahExportT7((Double) row[36]);
			data.setKvahExportT8((Double) row[37]);

			// Setting kwMd and related values
			data.setKwMd((Double) row[38]);
			data.setKwMdOccurtime((String) row[39]);
			data.setKwMdT1((Double) row[40]);
			data.setKwMdOccurtimeT1((String) row[41]);
			data.setKwMdT2((Double) row[42]);
			data.setKwMdOccurtimeT2((String) row[43]);
			data.setKwMdT3((Double) row[44]);
			data.setKwMdOccurtimeT3((String) row[45]);
			data.setKwMdT4((Double) row[46]);
			data.setKwMdOccurtimeT4((String) row[47]);
			data.setKwMdT5((Double) row[48]);
			data.setKwMdOccurtimeT5((String) row[49]);
			data.setKwMdT6((Double) row[50]);
			data.setKwMdOccurtimeT6((String) row[51]);
			data.setKwMdT7((Double) row[52]);
			data.setKwMdOccurtimeT7((String) row[53]);
			data.setKwMdT8((Double) row[54]);
			data.setKwMdOccurtimeT8((String) row[55]);

			// Setting kweMd and related values
			data.setKweMd((Double) row[56]);
			data.setKweMdOccurtime((String) row[57]);
			data.setKweMdT1((Double) row[58]);
			data.setKweMdOccurtimeT1((String) row[59]);
			data.setKweMdT2((Double) row[60]);
			data.setKweMdOccurtimeT2((String) row[61]);
			data.setKweMdT3((Double) row[62]);
			data.setKweMdOccurtimeT3((String) row[63]);
			data.setKweMdT4((Double) row[64]);
			data.setKweMdOccurtimeT4((String) row[65]);
			data.setKweMdT5((Double) row[66]);
			data.setKweMdOccurtimeT5((String) row[67]);
			data.setKweMdT6((Double) row[68]);
			data.setKweMdOccurtimeT6((String) row[69]);
			data.setKweMdT7((Double) row[70]);
			data.setKweMdOccurtimeT7((String) row[71]);
			data.setKweMdT8((Double) row[72]);
			data.setKweMdOccurtimeT8((String) row[73]);

			// Setting kvaMd and related values
			data.setKvaMd((Double) row[74]);
			data.setKvaMdOccurtime((String) row[75]);
			data.setKvaMdT1((Double) row[76]);
			data.setKvaMdOccurtimeT1((String) row[77]);
			data.setKvaMdT2((Double) row[78]);
			data.setKvaMdOccurtimeT2((String) row[79]);
			data.setKvaMdT3((Double) row[80]);
			data.setKvaMdOccurtimeT3((String) row[81]);
			data.setKvaMdT4((Double) row[82]);
			data.setKvaMdOccurtimeT4((String) row[83]);
			data.setKvaMdT5((Double) row[84]);
			data.setKvaMdOccurtimeT5((String) row[85]);
			data.setKvaMdT6((Double) row[86]);
			data.setKvaMdOccurtimeT6((String) row[87]);
			data.setKvaMdT7((Double) row[88]);
			data.setKvaMdOccurtimeT7((String) row[89]);
			data.setKvaMdT8((Double) row[90]);
			data.setKvaMdOccurtimeT8((String) row[91]);

			// Setting kvaeMd and related values
			data.setKvaeMd((Double) row[92]);
			data.setKvaeMdOccurtime((String) row[93]);
			data.setKvaeMdT1((Double) row[94]);
			data.setKvaeMdOccurtimeT1((String) row[95]);
			data.setKvaeMdT2((Double) row[96]);
			data.setKvaeMdOccurtimeT2((String) row[97]);
			data.setKvaeMdT3((Double) row[98]);
			data.setKvaeMdOccurtimeT3((String) row[99]);
			data.setKvaeMdT4((Double) row[100]);
			data.setKvaeMdOccurtimeT4((String) row[101]);
			data.setKvaeMdT5((Double) row[102]);
			data.setKvaeMdOccurtimeT5((String) row[103]);
			data.setKvaeMdT6((Double) row[104]);
			data.setKvaeMdOccurtimeT6((String) row[105]);
			data.setKvaeMdT7((Double) row[106]);
			data.setKvaeMdOccurtimeT7((String) row[107]);
			data.setKvaeMdT8((Double) row[108]);
			data.setKvaeMdOccurtimeT8((String) row[109]);

			// Setting cummd values
			data.setCummdKwimport((Double) row[110]);
			data.setCummdKwexport((Double) row[111]);
			data.setCummdKvaimport((Double) row[112]);
			data.setCummdKvaexport((Double) row[113]);

			// Setting kvarh values
			/*
			 * data.setKvarhQ1((Double) row[114]); data.setKvarhQ2((Double) row[115]);
			 * data.setKvarhQ3((Double) row[116]); data.setKvarhQ4((Double) row[117]);
			 */

			// Setting powerOff and powerOn durations
			data.setPowerOffDuration((String) row[118]);
			data.setPowerOnDuration((String) row[119]);

			// Setting tamperCount and averagePf
			data.setTamperCount((Integer) row[120]);
			data.setAveragePf((Double) row[121]);

			// Setting insertedDate
			if (row[122] != null) {
				Timestamp String = (Timestamp) row[122]; // Cast to String
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setInsertedDate(sdf.format(String)); // Convert & set as String
			} else {
				data.setInsertedDate(null); // Handle null case
			}
			// Setting accountNo and extra fields
			data.setAccountNo((String) row[123]);

			// Add to list
			billingDataList.add(data);
		}

		List<MonthlyBillingDataDTO> reversedList = new ArrayList<>(billingDataList);
		Collections.reverse(reversedList);

		// Return both lists in a map
		Map<String, List<MonthlyBillingDataDTO>> result = new HashMap<>();
		result.put("original", billingDataList);
		result.put("reversed", reversedList);
		return result;
	}

	public Map<String, List<DailyBillingDataDTO>> getDailyBillingData(String meterNo, String startdate, String enddate,
			String requestId,int level1Id) throws ParseException {
		// TODO Auto-generated method stub
		Date startDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(startdate + " 00:00:00");
		Date endDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(enddate + " 23:59:59");

		List<Object[]> rawResults = null;
		if(!requestId.equals(null) && !requestId.equals("")) {
			 rawResults = singleMeterViewRepository.getOndemandDailyBillingData(meterNo, startDate, endDate,requestId,level1Id);
		}else {
			 rawResults = singleMeterViewRepository.getDailyBillingData(meterNo, startDate, endDate,level1Id);

		}
		List<DailyBillingDataDTO> billingDataList = new ArrayList<>();

		for (Object[] row : rawResults) {
			DailyBillingDataDTO data = new DailyBillingDataDTO();

			data.setMeterNo((String) row[0]);

			// Convert Timestamp to String for billingDatetime
			if (row[1] != null) {
				Timestamp timestamp = (Timestamp) row[1]; // Corrected variable name
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				data.setBillingDatetime(sdf.format(timestamp));
			} else {
				data.setBillingDatetime(null);
			}

			// Convert Timestamp to String for billingDate (if applicable)
			if (row[2] != null) {
				Date timestamp = (Date) row[2];
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				data.setBillingDate(sdf.format(timestamp));
			} else {
				data.setBillingDate(null);
			}

			// Setting numeric fields
			data.setCumEngyKwhImp(row[3] != null ? ((Number) row[3]).doubleValue() : null);
			data.setCumEngyKwhExp(row[4] != null ? ((Number) row[4]).doubleValue() : null);
			data.setCumEngyKvahImp(row[5] != null ? ((Number) row[5]).doubleValue() : null);
			data.setCumEngyKvahExp(row[6] != null ? ((Number) row[6]).doubleValue() : null);

			// Convert Timestamp to String for insertedDate
			if (row[11] != null) {
				Date timestamp = (Date) row[11];
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				data.setInsertedDate(sdf.format(timestamp));
			} else {
				data.setInsertedDate(null);
			}

			// Account Number
			data.setAccountNo(row[12] != null ? (String) row[12] : null);

			data.setMdKwImport(row[16] != null ? (Double) row[16] : 0.0);
			data.setMdKwImportDate(row[17] != null ? row[17].toString() : "");
			data.setMdKvaImport(row[18] != null ? (Double) row[18] : 0.0);
			data.setMdKvaImportDate(row[19] != null ? row[19].toString() : "");
			data.setMdKwExport(row[20] != null ? (Double) row[20] : 0.0);
			data.setMdKwExportDate(row[21] != null ? row[21].toString() : "");
			data.setMdKvaExport(row[22] != null ? (Double) row[22] : 0.0);
			data.setMdKvaExportDate(row[23] != null ? row[23].toString() : "");

			billingDataList.add(data);
		}
		List<DailyBillingDataDTO> reversedList = new ArrayList<>(billingDataList);
		Collections.reverse(reversedList);

		// Return both lists in a map
		Map<String, List<DailyBillingDataDTO>> result = new HashMap<>();
		result.put("original", billingDataList);
		result.put("reversed", reversedList);
		return result;
	}

	public List<InstantDataDTO> getLatestInstantData(String meterNo) {
		// TODO Auto-generated method stub
		List<Object[]> rawResult = singleMeterViewRepository.getLatestInstantData(meterNo);
		Collections.reverse(rawResult);

		List<InstantDataDTO> list = new ArrayList<InstantDataDTO>();
		for (Object[] row : rawResult) {
			InstantDataDTO data = new InstantDataDTO();
			data.setMeterNo((String) row[0]);

			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

			data.setInstantDate(row[1] != null ? sdf.format((Timestamp) row[1]) : null);
			data.setVoltageRphase(row[2] != null ? (Double) row[2] : 0.0);
			data.setVoltageYphase(row[3] != null ? (Double) row[3] : 0.0);
			data.setVoltageBphase(row[4] != null ? (Double) row[4] : 0.0);
			data.setCurrentRphase(row[5] != null ? (Double) row[5] : 0.0);
			data.setCurrentYphase(row[6] != null ? (Double) row[6] : 0.0);
			data.setCurrentBphase(row[7] != null ? (Double) row[7] : 0.0);
			data.setRphasePf(row[8] != null ? (Double) row[8] : 0.0);
			data.setYphasePf(row[9] != null ? (Double) row[9] : 0.0);
			data.setBphasePf(row[10] != null ? (Double) row[10] : 0.0);
			data.setAveragePf(row[11] != null ? (Double) row[11] : 0.0);
			data.setActivePower(row[12] != null ? (Double) row[12] : 0.0);
			data.setApparentPower(row[13] != null ? (Double) row[13] : 0.0);
			data.setReactivePower(row[14] != null ? (Double) row[14] : 0.0);
			data.setActiveEnergyimp(row[15] != null ? (Double) row[15] : 0.0);
			data.setApparentEnergyimp(row[16] != null ? (Double) row[16] : 0.0);
			data.setReactiveEnergylagimp(row[17] != null ? (Double) row[17] : 0.0);
			data.setReactiveEnergyleadimp(row[18] != null ? (Double) row[18] : 0.0);
			data.setActiveEnergyexp(row[19] != null ? (Double) row[19] : 0.0);
			data.setApparentEnergyexp(row[20] != null ? (Double) row[20] : 0.0);
			data.setReactiveEnergylagexp(row[21] != null ? (Double) row[21] : 0.0);
			data.setReactiveEnergyleadexp(row[22] != null ? (Double) row[22] : 0.0);
			data.setFrequency(row[23] != null ? (Double) row[23] : 0.0);

			data.setInsertedDate(row[24] != null ? sdf.format((Timestamp) row[24]) : null);
			data.setAccountNo((String) row[25]);

			data.setNoofPowerFailure(row[30] != null ? (String) row[30] : "");
			data.setCumPowerFailureDuration(row[31] != null ? (String) row[31] : "");
			data.setCumTamperCount(row[32] != null ? (Integer) row[32] : 0);
			data.setCumBillingDate(row[33] != null ? (Integer) row[33] : 0);
			data.setCumProgrammingCount(row[34] != null ? (Integer) row[34] : 0);
			data.setBillingDate(row[35] != null ? row[35].toString() : "");
			data.setCumengyQi(row[36] != null ? (Double) row[36] : 0.0);
			data.setCumengyQi(row[37] != null ? (Double) row[37] : 0.0);
			data.setCumengyQi(row[38] != null ? (Double) row[38] : 0.0);
			data.setCumengyQi(row[39] != null ? (Double) row[39] : 0.0);

			data.setCumPowerOnDuration(row[40] != null ? (String) row[40] : "");
			data.setManufactureSpecific(row[41] != null ? (String) row[41] : "");
			data.setNeutralCurrent(row[42] != null ? (Double) row[42] : 0);
			data.setAngleOfL1L2(row[43] != null ? (Double) row[43] : 0.0);
			data.setAngleOfL1L3(row[44] != null ? (Double) row[44] : 0.0);
			data.setLoadLimitStatus(row[45] != null ? (String) row[45] : "");
			data.setActivethresholdLoadLimit(row[46] != null ? (Double) row[46] : 0.0);

			data.setMaxDemandKwImport(row[47] != null ? (Double) row[47] : 0.0);
			data.setMaxDemandKwImportDate(row[48] != null ? row[48].toString() : "");
			data.setMaxDemandKwExport(row[49] != null ? (Double) row[49] : 0.0);
			data.setMaxDemandKwExportDate(row[50] != null ? row[50].toString() : "");
			data.setMaxDemandKvaImport(row[51] != null ? (Double) row[51] : 0.0);
			data.setMaxDemandKvaImportDate(row[52] != null ? row[52].toString() : "");
			data.setMaxDemandKvaExport(row[53] != null ? (Double) row[53] : 0.0);
			data.setMaxDemandKvaExportDate(row[54] != null ? row[54].toString() : "");

			list.add(data);
		}
		return list;
	}

	public Map<String, List<EventsSummaryDataDTO>> getEventData(String meterNo, String startDate, String endDate, String requestId, int level1id)
			throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date startDate1 = sdf.parse(startDate);
		Date endDate1 = sdf.parse(endDate);
		Calendar cal = Calendar.getInstance();
		cal.setTime(endDate1);
		cal.set(Calendar.HOUR_OF_DAY, 23);
		cal.set(Calendar.MINUTE, 59);
		cal.set(Calendar.SECOND, 59);
		cal.set(Calendar.MILLISECOND, 999);
		endDate1 = cal.getTime();
		List<Object[]> rawResults = null;
		if(!requestId.equals(null) && !requestId.equals("")) {
			rawResults =singleMeterViewRepository.getOndemandEventData(meterNo, startDate1, endDate1,requestId,level1id);
		}else {
			rawResults =singleMeterViewRepository.getEventData(meterNo, startDate1, endDate1,level1id);	
		}
		List<EventsSummaryDataDTO> eventDataList = new ArrayList<>();

		for (Object[] row : rawResults) {
			EventsSummaryDataDTO data = new EventsSummaryDataDTO();
			data.setMeterNo((String) row[0]);
			if (row[1] != null) {
				Timestamp String = (Timestamp) row[1]; // Cast to String
				SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setEventOccdatetime(sdf1.format(String)); // Convert & set as String
			} else {
				data.setEventOccdatetime(null); // Handle null case
			}

			if (row[2] != null) {
				Timestamp String = (Timestamp) row[2]; // Cast to String
				SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setEventResdatetime(sdf1.format(String)); // Convert & set as String
			} else {
				data.setEventResdatetime(null); // Handle null case
			}

			if (row[3] != null) {
				int totalSeconds = (int) row[3];
				int hours = totalSeconds / 3600;
				int minutes = (totalSeconds % 3600) / 60;
				int seconds = totalSeconds % 60;
				String formattedDuration = String.format("%02d:%02d:%02d", hours, minutes, seconds);
				data.setDuration(formattedDuration);
			} else {
				data.setDuration("0");
			}
//			data.setEventCode((String) row[4]);
			data.setEventDescription((String) row[5]);
			data.setVoltageRPhaseOcc((Double) row[6]);
			data.setVoltageYPhaseOcc((Double) row[7]);
			data.setVoltageBPhaseOcc((Double) row[8]);
			data.setCurrentRPhaseOcc((Double) row[9]);
			data.setCurrentYPhaseOcc((Double) row[10]);
			data.setCurrentBPhaseOcc((Double) row[11]);
			data.setPfRPhaseOcc((Double) row[12]);
			data.setPfYPhaseOcc((Double) row[13]);
			data.setPfBPhaseOcc((Double) row[14]);
			data.setActivecurrentRPhaseOcc((Double) row[15]);
			data.setActivecurrentYPhaseOcc((Double) row[16]);
			data.setActivecurrentBPhaseOcc((Double) row[17]);
			data.setKwhImportOcc((Double) row[18]);
			data.setKwhExportOcc((Double) row[19]);
			data.setKvahImportOcc((Double) row[20]);
			data.setKvahExportOcc((Double) row[21]);
			data.setNeutralCurrentOcc((Double) row[22]);
			data.setVoltageRPhaseRes((Double) row[23]);
			data.setVoltageYPhaseRes((Double) row[24]);
			data.setVoltageBPhaseRes((Double) row[25]);
			data.setCurrentRPhaseRes((Double) row[26]);
			data.setCurrentYPhaseRes((Double) row[27]);
			data.setCurrentBPhaseRes((Double) row[28]);
			data.setPfRPhaseRes((Double) row[29]);
			data.setPfYPhaseRes((Double) row[30]);
			data.setPfBPhaseRes((Double) row[31]);
			data.setActivecurrentRPhaseRes((Double) row[32]);
			data.setActivecurrentYPhaseRes((Double) row[33]);
			data.setActivecurrentBPhaseRes((Double) row[34]);
			data.setKwhImportRes((Double) row[35]);
			data.setKwhExportRes((Double) row[36]);
			data.setKvahImportRes((Double) row[37]);
			data.setKvahExportRes((Double) row[38]);
			data.setNeutralCurrentRes((Double) row[39]);
			if (row[40] != null) {
				Timestamp String = (Timestamp) row[40]; // Cast to String
				SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Define format
				data.setInsertedDate(sdf1.format(String)); // Convert & set as String
			} else {
				data.setInsertedDate(null); // Handle null case
			}
//			data.setAccountNo((String) row[41]);

			eventDataList.add(data);
		}
		List<EventsSummaryDataDTO> reversedList = new ArrayList<>(eventDataList);
		Collections.reverse(reversedList);

		// Return both lists in a map
		Map<String, List<EventsSummaryDataDTO>> result = new HashMap<>();
		result.put("original", eventDataList);
		result.put("reversed", reversedList);
		return result;
	}

	public List<TamperEventsDTO> getEventDataNotRestoration(String meterNo, String startDate, String endDate, int level1id)
			throws ParseException {

		// Parse start and end dates
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date startDate1 = sdf.parse(startDate + " 00:00:00");
		Date endDate1 = sdf.parse(endDate + " 23:59:59");

		List<Object[]> rawResults = singleMeterViewRepository.getEventDataNotRestoration(meterNo, startDate1, endDate1,level1id);
		List<TamperEventsDTO> list = new ArrayList<>();

		for (Object[] obj : rawResults) {
			TamperEventsDTO data = new TamperEventsDTO();

			// Ensure obj has enough elements to avoid IndexOutOfBoundsException
			if (obj.length >= 9) {
				data.setMeterNo(obj[1] != null ? obj[1].toString() : "-");
				data.setEventCode(obj[2] != null ? obj[2].toString() : "-");
				data.setOccDatetime(obj[3] != null ? obj[3].toString() : "-");

				// Handling null values
				data.setResDatetime(obj[4] != null ? obj[4].toString() : "-");
				data.setInserteddate(obj[5] != null ? obj[5].toString() : "-");
				data.setUpdated_date(obj[6] != null ? obj[6].toString() : "-");
				data.setStatus(obj[7] != null ? obj[7].toString() : "-");
				data.setEventDesc(obj[8] != null ? obj[8].toString() : "-");

				list.add(data);
			}
		}

		return list;
	}

	public List<String> getEventDataLog(String meterNo, String startDate, String endDate, int level1id) throws ParseException {

		Date startDate1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(startDate + " 00:00:00");
		Date endDate1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(endDate + " 23:59:59");
		List<Object[]> rawResults = singleMeterViewRepository.getEventDataLog(meterNo, startDate1, endDate1,level1id);
		List<String> list = new ArrayList<String>();
		for (Object[] obj : rawResults) {
			list.add(obj[1].toString() + " (" + obj[0].toString() + ") - " + obj[2].toString());

		}
		return list;
	}

}
