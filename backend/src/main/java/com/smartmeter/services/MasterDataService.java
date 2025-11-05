package com.smartmeter.services;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.smartmeter.DTO.EventsSummaryDataDTO;
import com.smartmeter.DTO.MasterDataDTO;
import com.smartmeter.DTO.TamperEventsDTO;
import com.smartmeter.model.CommunicationDataPojo;
import com.smartmeter.model.MasMetermasterInventoryId;
import com.smartmeter.model.MasterData;
import com.smartmeter.model.MeterLocationDTO;
import com.smartmeter.model.TampersPojo;
import com.smartmeter.model.UserMaster;
import com.smartmeter.repository.MasterDataRepository;

@Service
public class MasterDataService {

	@Autowired
	private MasterDataRepository masterDataRepository;

	public Map<String, Long> getAllMeterCounts() {
		List<Object[]> result = masterDataRepository.getAllMeterCounts();

		if (result.isEmpty()) {
			return Collections.emptyMap();
		}

		Object[] row = result.get(0);

		Map<String, Long> meterCounts = new HashMap();
		meterCounts.put("SinglePhaseCount", ((Number) row[0]).longValue());
		meterCounts.put("ThreePhaseCount", ((Number) row[1]).longValue());
		meterCounts.put("DTCount", ((Number) row[2]).longValue());
		meterCounts.put("FeederCount", ((Number) row[3]).longValue());
		meterCounts.put("CommunicationCount", ((Number) row[4]).longValue());
		meterCounts.put("NonCommunicationCount", ((Number) row[5]).longValue());
		meterCounts.put("InventoryCount", ((Number) row[6]).longValue());

		return meterCounts;
	}

	public List<Object[]> getThreePhaseMeterCount(String section, int level1id) {
		return masterDataRepository.countByThreePhaseMeters(section,level1id);
	}

	public List<Object[]> getSinglePhaseMeterCount(String section, int level1id) {
		// TODO Auto-generated method stub
		return masterDataRepository.countBySinglePhaseMeters(section,level1id);
	}

	public List<Object[]> getDtPhaseMeterCount(String section, int level1id) {
		// TODO Auto-generated method stub
		return masterDataRepository.countByDTMeters(section,level1id);
	}

	public List<Object[]> getFeederMeterCount(String section, int level1id) {
		// TODO Auto-generated method stub
		return masterDataRepository.countByFeederMeters(section,level1id);
	}

	public List<Object[]> getCommunicationDetails(String section, int level1id) {
		// TODO Auto-generated method stub
		return masterDataRepository.countByCommunications(section,level1id);
	}

	public List<CommunicationDataPojo> findCommunicationMeters(int level1id) {
		return masterDataRepository.findCommunicationMeters(level1id);
	}

	public List<MasterDataDTO> findNonCommunicationMeters(String section, int level1id) {
		List<MasterData> results = masterDataRepository.findNonCommunicationMeters(section,level1id);
		List<MasterDataDTO> list = new ArrayList<>();

		for (MasterData obj : results) {
			MasterDataDTO data = new MasterDataDTO(obj.getMeterNo() != null ? obj.getMeterNo() : "",
					obj.getConsumerName() != null ? obj.getConsumerName() : "",
					obj.getConsumerNo() != null ? obj.getConsumerNo() : "",
					obj.getModemNumber() != null ? obj.getModemNumber() : "",
					obj.getAddress() != null ? obj.getAddress() : "",
					obj.getCategory() != null ? obj.getCategory() : "",
					obj.getSubCategory() != null ? obj.getSubCategory() : 0,
					obj.getCdKva() != null ? obj.getCdKva() : 0.0, obj.getMf() != null ? obj.getMf() : 0.0,
					obj.getMake() != null ? obj.getMake() : "", obj.getPhase() != null ? obj.getPhase() : "",
					obj.getConnectionDate() != null ? obj.getConnectionDate().toString() : "",
					obj.getSubstationName() != null ? obj.getSubstationName() : "",
					obj.getSubstationCode() != null ? obj.getSubstationCode() : "",
					obj.getFeederCode() != null ? obj.getFeederCode() : "",
					obj.getFeederName() != null ? obj.getFeederName() : "",
					obj.getDtrCode() != null ? obj.getDtrCode() : "", obj.getDtrName() != null ? obj.getDtrName() : "",
					obj.getModemMdn() != null ? obj.getModemMdn() : "",
					obj.getSimProviderName() != null ? obj.getSimProviderName() : "");

			list.add(data);
		}
		return list;
	}

	public List<MasMetermasterInventoryId> findAllInventoryMeters() {
		return masterDataRepository.findAllInventoryMeters();
	}

	public List<CommunicationDataPojo> getThreePhaseMeters(String section, int level1id) {
		return masterDataRepository.findThreePhaseMeters(section,level1id);
	}

	public List<CommunicationDataPojo> getSinglePhaseMeters(String section, int level1id) {
		return masterDataRepository.findOnePhaseMeters(section,level1id);
	}

	public List<CommunicationDataPojo> getDTPhaseMeters(String section, int level1id) {
		return masterDataRepository.findDTPhaseMeters(section,level1id);
	}

	public List<CommunicationDataPojo> getFeederPhaseMeters(String section, int level1id) {
		return masterDataRepository.findFeederPhaseMeters(section,level1id);
	}

	public List<MasterDataDTO> getAllSinglePhaseMeters(String section,int level1id) {
		List<MasterData> results = masterDataRepository.findAllSinglePhaseMeters(section,level1id);
		List<MasterDataDTO> list = new ArrayList<>();

		for (MasterData obj : results) {
			MasterDataDTO data = new MasterDataDTO(obj.getMeterNo() != null ? obj.getMeterNo() : "",
					obj.getConsumerName() != null ? obj.getConsumerName() : "",
					obj.getConsumerNo() != null ? obj.getConsumerNo() : "",
					obj.getModemNumber() != null ? obj.getModemNumber() : "",
					obj.getAddress() != null ? obj.getAddress() : "",
					obj.getCategory() != null ? obj.getCategory() : "",
					obj.getSubCategory() != null ? obj.getSubCategory() : 0,
					obj.getCdKva() != null ? obj.getCdKva() : 0.0, obj.getMf() != null ? obj.getMf() : 0.0,
					obj.getMake() != null ? obj.getMake() : "", obj.getPhase() != null ? obj.getPhase() : "",
					obj.getConnectionDate() != null ? obj.getConnectionDate().toString() : "",
					obj.getSubstationName() != null ? obj.getSubstationName() : "",
					obj.getSubstationCode() != null ? obj.getSubstationCode() : "",
					obj.getFeederCode() != null ? obj.getFeederCode() : "",
					obj.getFeederName() != null ? obj.getFeederName() : "",
					obj.getDtrCode() != null ? obj.getDtrCode() : "", obj.getDtrName() != null ? obj.getDtrName() : "",
					obj.getModemMdn() != null ? obj.getModemMdn() : "",
					obj.getSimProviderName() != null ? obj.getSimProviderName() : "");

			list.add(data);
		}
		return list;
	}
	/*
	 * public List<MasterData> getAllThreePhaseMeters(){ return
	 * masterDataRepository.findAllThreePhaseMeters(); }
	 */

	public List<MasterDataDTO> getAllThreePhaseMeters(String section,int level1id) {
		List<MasterData> results = masterDataRepository.findAllThreePhaseMeters(section,level1id);
		List<MasterDataDTO> list = new ArrayList<>();

		for (MasterData obj : results) {
			MasterDataDTO data = new MasterDataDTO(obj.getMeterNo() != null ? obj.getMeterNo() : "",
					obj.getConsumerName() != null ? obj.getConsumerName() : "",
					obj.getConsumerNo() != null ? obj.getConsumerNo() : "",
					obj.getModemNumber() != null ? obj.getModemNumber() : "",
					obj.getAddress() != null ? obj.getAddress() : "",
					obj.getCategory() != null ? obj.getCategory() : "",
					obj.getSubCategory() != null ? obj.getSubCategory() : 0,
					obj.getCdKva() != null ? obj.getCdKva() : 0.0, obj.getMf() != null ? obj.getMf() : 0.0,
					obj.getMake() != null ? obj.getMake() : "", obj.getPhase() != null ? obj.getPhase() : "",
					obj.getConnectionDate() != null ? obj.getConnectionDate().toString() : "",
					obj.getSubstationName() != null ? obj.getSubstationName() : "",
					obj.getSubstationCode() != null ? obj.getSubstationCode() : "",
					obj.getFeederCode() != null ? obj.getFeederCode() : "",
					obj.getFeederName() != null ? obj.getFeederName() : "",
					obj.getDtrCode() != null ? obj.getDtrCode() : "", obj.getDtrName() != null ? obj.getDtrName() : "",
					obj.getModemMdn() != null ? obj.getModemMdn() : "",
					obj.getSimProviderName() != null ? obj.getSimProviderName() : "");

			list.add(data);
		}
		return list;

	}

	public List<MasterDataDTO> findAllDTCPhaseMeters(String section,int level1id) {
		List<MasterData> results = masterDataRepository.findAllDtPhaseMeters(section,level1id);

		List<MasterDataDTO> list = new ArrayList<>();

		for (MasterData obj : results) {
			MasterDataDTO data = new MasterDataDTO(obj.getMeterNo() != null ? obj.getMeterNo() : "",
					obj.getConsumerName() != null ? obj.getConsumerName() : "",
					obj.getConsumerNo() != null ? obj.getConsumerNo() : "",
					obj.getModemNumber() != null ? obj.getModemNumber() : "",
					obj.getAddress() != null ? obj.getAddress() : "",
					obj.getCategory() != null ? obj.getCategory() : "",
					obj.getSubCategory() != null ? obj.getSubCategory() : 0,
					obj.getCdKva() != null ? obj.getCdKva() : 0.0, obj.getMf() != null ? obj.getMf() : 0.0,
					obj.getMake() != null ? obj.getMake() : "", obj.getPhase() != null ? obj.getPhase() : "",
					obj.getConnectionDate() != null ? obj.getConnectionDate().toString() : "",
					obj.getSubstationName() != null ? obj.getSubstationName() : "",
					obj.getSubstationCode() != null ? obj.getSubstationCode() : "",
					obj.getFeederCode() != null ? obj.getFeederCode() : "",
					obj.getFeederName() != null ? obj.getFeederName() : "",
					obj.getDtrCode() != null ? obj.getDtrCode() : "", obj.getDtrName() != null ? obj.getDtrName() : "",
					obj.getModemMdn() != null ? obj.getModemMdn() : "",
					obj.getSimProviderName() != null ? obj.getSimProviderName() : "");

			list.add(data);
		}
		return list;
	}

	public List<MasterDataDTO> getAllFeederPhaseMeters(String section,int level1id) {
		List<MasterData> results = masterDataRepository.findAllFeederPhaseMeters(section,level1id);
		List<MasterDataDTO> list = new ArrayList<>();

		for (MasterData obj : results) {
			MasterDataDTO data = new MasterDataDTO(obj.getMeterNo() != null ? obj.getMeterNo() : "",
					obj.getConsumerName() != null ? obj.getConsumerName() : "",
					obj.getConsumerNo() != null ? obj.getConsumerNo() : "",
					obj.getModemNumber() != null ? obj.getModemNumber() : "",
					obj.getAddress() != null ? obj.getAddress() : "",
					obj.getCategory() != null ? obj.getCategory() : "",
					obj.getSubCategory() != null ? obj.getSubCategory() : 0,
					obj.getCdKva() != null ? obj.getCdKva() : 0.0, obj.getMf() != null ? obj.getMf() : 0.0,
					obj.getMake() != null ? obj.getMake() : "", obj.getPhase() != null ? obj.getPhase() : "",
					obj.getConnectionDate().toString() != null ? obj.getConnectionDate().toString() : "",
					obj.getSubstationName() != null ? obj.getSubstationName() : "",
					obj.getSubstationCode() != null ? obj.getSubstationCode() : "",
					obj.getFeederCode() != null ? obj.getFeederCode() : "",
					obj.getFeederName() != null ? obj.getFeederName() : "",
					obj.getDtrCode() != null ? obj.getDtrCode() : "", obj.getDtrName() != null ? obj.getDtrName() : "",
					obj.getModemMdn() != null ? obj.getModemMdn() : "",
					obj.getSimProviderName() != null ? obj.getSimProviderName() : "");

			list.add(data);
		}
		return list;
	}

	public List<Object[]> getLast7DaysCountCommunicationDetails(String section, int level1id) {
		return masterDataRepository.countLast7DaysCommunications(section,level1id);
	}

	public List<CommunicationDataPojo> getLast7DaysCommunicationDetails(Date date, int level1id) {
		return masterDataRepository.last7DaysCommunications(date,level1id);
	}

	public List<MasterData> getLast7DaysNonCommunicationDetails(Date date,String section, int level1id) {
		return masterDataRepository.last7DaysNonCommunications(date,section,level1id);
	}

//	public List<MasMetermasterInventoryId> getLast7DaysInventoryDetails(String dayDate) {
//		return masterDataRepository.last7DaysInventory(dayDate);
//	}
	public List<CommunicationDataPojo> getLast7DaysRFCommunicationDetails(Date date, int level1id) {
		return masterDataRepository.last7DaysRFCommunications(date,level1id);
	}

	public List<Object[]> getTamperCounts(String section, int level1id) {
		List<Object[]> tamperData = masterDataRepository.tamperCounts(section,level1id);
		return tamperData;
	}

	public List<TamperEventsDTO> gettamperData(String eventCode,String section, int level1id) {
		List<Object[]> rawResults = masterDataRepository.tamperData(Integer.parseInt(eventCode),level1id);
		List<TamperEventsDTO> eventDataList = new ArrayList<>();

		for (Object[] row : rawResults) {
			TamperEventsDTO data = new TamperEventsDTO();
			data.setMeterNo(row[1].toString());
			data.setEventCode(row[2].toString());
			data.setOccDatetime(row[3].toString());
			data.setResDatetime("-");
			data.setInserteddate(row[5].toString());
			data.setUpdated_date(row[6].toString());
			data.setStatus(row[7].toString());
			data.setEventDesc(row[8].toString());
			eventDataList.add(data);
		}
		return eventDataList;

	}

	public List<TamperEventsDTO> gettamperSummary(String startDate, String endDate, String meterNo,int level1id)
			throws ParseException {
		Date startdate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(startDate + " 00:00:00");
		Date enddate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(endDate + " 23:59:59");

		List<Object[]> rawResults = masterDataRepository.gettamperSummary(startdate, enddate, meterNo,level1id);
		List<TamperEventsDTO> eventDataList = new ArrayList<>();

		for (Object[] row : rawResults) {
			TamperEventsDTO data = new TamperEventsDTO();
			data.setMeterNo(row[1].toString());
			data.setEventCode(row[2].toString());
			data.setOccDatetime(row[3].toString());
			if (row[4] != null) {
				data.setResDatetime(row[4].toString());
			} else {
				data.setResDatetime("-");
			}
			data.setInserteddate(row[5].toString());
			data.setUpdated_date(row[6].toString());
			data.setStatus(row[7].toString());
			data.setEventDesc((String) row[8]);

			eventDataList.add(data);
		}
		return eventDataList;

	}

	public List<MeterLocationDTO> fetchmetersLocations() {
		return masterDataRepository.fetchmetersLocations();
	}

	public List<String> fetchMeterList(int page, int limit,int level1id) {
		Pageable pageable = PageRequest.of(page, limit);
		return masterDataRepository.fetchMeterList(pageable,level1id); // Extract paged content
	}

	public List<MasterData> fetchmeterDetails(String meterNo, int level1id) {
		// TODO Auto-generated method stub
		return masterDataRepository.fetchmeterDetails(meterNo,level1id);
	}

	public  String fetchManufacture(String meterNo) {
		// TODO Auto-generated method stub
		return masterDataRepository.fetchManufacture(meterNo);
	}

	
	public List<CommunicationDataPojo> findRFCommunicationMeters(int level1id) {
		return masterDataRepository.findRFCommunicationMeters(level1id);
	}

	public MasterData meterDataUpdate(MasterData masterData) {
		return masterDataRepository.save(masterData);
		
	}

	public String meterDataDelete(MasterData masterData) {
	    masterDataRepository.delete(masterData);
	    return "Deleted successfully";
	}



}
