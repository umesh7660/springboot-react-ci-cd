package com.smartmeter.services;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.DTO.OnDemandMaster;
import com.smartmeter.model.MeterRequestMaster;
import com.smartmeter.model.MeterRequestMasterId;
import com.smartmeter.repository.OnDemandRepository;

@Service
public class OnDemandService {

	@Autowired
	private OnDemandRepository ondemandRepository;
	public Map<String, String> fetchDemandType() {
	    List<Object[]> result = ondemandRepository.fetchDemandType();
	    return result.stream()
                .collect(Collectors.toMap(row -> (String) row[0], row -> (String) row[1]));
	}
	@SuppressWarnings("unchecked")
	public MeterRequestMaster save(String commandCode, String meterNo, String commandName, String manufacturername) {
	    // Manually generate a unique requestId (e.g., using a sequence, UUID, or DB logic)

	    // Create composite key
	    MeterRequestMasterId requestId = new MeterRequestMasterId(commandName,commandCode, meterNo);

	    // Create main entity and assign the ID
	    MeterRequestMaster request = new MeterRequestMaster();
	    request.setId(requestId);
	    request.setPriorityType(0);
	    request.setRequestsetDatetime(new Timestamp(System.currentTimeMillis()));
	    request.setStatus("Processing");
	    request.setModemManufacturername(manufacturername);// Example status
	    request.setInsertedDate(new Timestamp(System.currentTimeMillis()));

	    // Save the entity using save(), not saveAll()
	    return ondemandRepository.save(request);
	}
	
	
	public List<OnDemandMaster> getOnDemandData(String demandName, String startdate, String enddate,int level1id) throws ParseException {
		Date startDate1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(startdate + " 00:00:00");
		Date endDate1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(enddate + " 23:59:59");
		 Timestamp startTimestamp = new Timestamp(startDate1.getTime());
		    Timestamp endTimestamp = new Timestamp(endDate1.getTime());

		    // Call repository method with Timestamp parameters
		    List<Object[]> rawResults = ondemandRepository.getOnDemandData(demandName, startTimestamp, endTimestamp,level1id);
		    Collections.reverse(rawResults);
		//List<Object[]> rawResults = ondemandRepository.getOnDemandData(demandName,startDate1.toString(),endDate1.toString());
		List<OnDemandMaster> list = new ArrayList<OnDemandMaster>();
		
		for(Object[] obj : rawResults) {
			OnDemandMaster data=new OnDemandMaster();
			data.setRequestId(obj[0] != null ? obj[0].toString() : "-");
			data.setMeterNo(obj[6] != null ? obj[6].toString() : "-");
			data.setCommmandName(obj[1] != null ? obj[1].toString() : "-");
			data.setStatus(obj[4] != null ? obj[4].toString() : "-");
			data.setRequestSetDateTime(obj[5] != null ? obj[5].toString() : "-");
			data.setRequestProcessDateTime(obj[7] != null ? obj[7].toString() : "-");
			data.setResponseStatus(obj[11] != null ? obj[11].toString() : "-");
			data.setValue(obj[15] != null ? obj[15].toString() : "-");
			list.add(data);
		}
		return list;
	}
	

}
