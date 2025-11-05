package com.smartmeter.repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import com.smartmeter.model.MeterRequestMaster;
import com.smartmeter.model.MeterRequestMasterId;

@Repository
public interface OnDemandRepository extends JpaRepository<MeterRequestMaster, MeterRequestMasterId> {

	@Query(value = "SELECT command_name,command_code FROM meter_command_master",nativeQuery = true)
	List<Object[]> fetchDemandType();

	
	@Query(value = "SELECT mrm.* FROM master_data md "
	        + "LEFT JOIN meter_request_master mrm ON mrm.meter_no = md.meter_no "
	        + "LEFT JOIN user_details ud ON ud.level1_id = md.level1_id "
	        + "WHERE requestset_datetime BETWEEN :startDate1 AND :endDate1 "
	        + "AND md.level1_id = :level1id "
	        + "AND (:demandName IS NULL OR :demandName = '' OR :demandName = 'All' OR command_name = :demandName)", 
	        nativeQuery = true)
	List<Object[]> getOnDemandData(@Param("demandName") String demandName, 
	                              @Param("startDate1") Timestamp startDate1, 
	                              @Param("endDate1") Timestamp endDate1,
	                              @Param("level1id") int level1id);


}
