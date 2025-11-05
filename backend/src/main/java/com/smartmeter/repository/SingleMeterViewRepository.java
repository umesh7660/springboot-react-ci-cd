package com.smartmeter.repository;

import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smartmeter.model.InstantData;

@Repository
public interface SingleMeterViewRepository extends JpaRepository<InstantData, Id> {

	@Query(value = "SELECT DISTINCT  id.* " + "FROM master_data md " + "INNER JOIN instant_data id ON md.meter_no = id.meter_no LEFT JOIN user_details ud on"
			+ " ud.level1_id=md.level1_id "
			+ "WHERE id.instant_date >= :startDate " + "AND id.instant_date <= :endDate "
			+ "AND (:meterNo IS NULL OR :meterNo = '' OR id.meter_no = :meterNo) AND ud.level1_id=:level1id "
			+ "ORDER BY id.instant_date DESC", nativeQuery = true)
	List<Object[]> getInstantData(@Param("meterNo") String meterNo, @Param("startDate") Date startDate,
			@Param("endDate") Date endDate, int level1id);

	@Query(value = "SELECT DISTINCT id.* " // Fixed SEECT -> SELECT
			+ "FROM master_data md " + "INNER JOIN loadsurvey_data id ON md.meter_no = id.meter_no  "
			+ " LEFT JOIN user_details ud on  ud.level1_id = md.level1_id "
			+ "WHERE id.ls_datetime BETWEEN :startDate AND :endDate AND "
			+ "(:meterNo IS NULL OR :meterNo = '' OR id.meter_no = :meterNo) AND ud.level1_id=:level1id "
			+ "order by id.ls_datetime  DESC", nativeQuery = true)
	List<Object[]> getLoadsurveyData(@Param("meterNo") String meterNo, @Param("startDate") Date startDate,
			@Param("endDate") Date endDate,int level1id);

	@Query(value = "SELECT * FROM loadsurvey_data WHERE meter_no = :meterNo AND ls_date = CURRENT_DATE", nativeQuery = true)
	List<Object[]> getMinVoltageMaxLoad(@Param("meterNo") String meterNo);

	@Query(value = "SELECT DISTINCT dba.* " + "FROM master_data md "
			+ "INNER JOIN daily_billing dba ON md.meter_no = dba.meter_no  LEFT JOIN user_details ud on  ud.level1_id = md.level1_id "
			+ "WHERE dba.billing_date BETWEEN :startDate AND :endDate "
			+ "AND (COALESCE(:meterNo, '') = '' OR dba.meter_no = :meterNo) AND ud.level1_id=:level1id "
			+ "ORDER BY dba.billing_date DESC", nativeQuery = true)
	List<Object[]> getDailyBillingData(@Param("meterNo") String meterNo, @Param("startDate") Date startDate,
			@Param("endDate") Date endDate, int level1id);

	@Query(value = "SELECT DISTINCT mbd.*" + "FROM master_data md "
			+ "INNER JOIN monthly_billing_data mbd ON md.meter_no = mbd.meter_no "
			+ "LEFT JOIN user_details ud on  ud.level1_id = md.level1_id " + "WHERE  "
			+ " mbd.billing_date BETWEEN :startDate AND :endDate AND "
			+ " (:meterNo IS NULL OR :meterNo = '' OR mbd.meter_no = :meterNo) AND ud.level1_id=:level1id "
			+ " order by mbd.billing_date  DESC", nativeQuery = true)
	List<Object[]> getBillingData(@Param("meterNo") String meterNo, @Param("startDate") Date startDate,
			@Param("endDate") Date endDate, int level1id);

	@Query(value = "SELECT DISTINCT id.* " // Fixed SEECT -> SELECT
			+ "FROM master_data md " + "INNER JOIN instant_data id ON md.meter_no = id.meter_no Where  "
			+ "id.instant_date >= current_date AND (:meterNo IS NULL OR :meterNo = '' OR id.meter_no = :meterNo) order by id.instant_date desc  limit 12", nativeQuery = true)
	List<Object[]> getLatestInstantData(@Param("meterNo") String meterNo);

	@Query(value = "SELECT DISTINCT ed.* FROM master_data md" + " LEFT JOIN events_summary_data ed ON md.meter_no = ed.meter_no "
			+ " LEFT JOIN user_details ud on  ud.level1_id = md.level1_id  "
			+ "WHERE ed.event_occdatetime BETWEEN :startDate AND :endDate "
			+ " AND (:meterNo IS NULL OR :meterNo = '' OR ed.meter_no = :meterNo)  AND ud.level1_id=:level1id  order by ed.event_occdatetime desc ", nativeQuery = true)
	List<Object[]> getEventData(@Param("meterNo") String meterNo, @Param("startDate") Date startDate,
			@Param("endDate") Date endDate, int level1id);
	
	
	@Query(value = "SELECT DISTINCT te.* FROM master_data ms "
	        + "LEFT JOIN tamper_events te ON ms.meter_no = te.meter_no "
	        + "LEFT JOIN user_details ud ON ms.level1_id = ud.level1_id "
	        + "WHERE te.status = 'ACTIVE' "
	        + "AND te.occ_datetime BETWEEN :startDate AND :endDate "
	        + "AND (:meterNo IS NULL OR :meterNo = '' OR te.meter_no = :meterNo) "
	        + "AND ud.level1_id = :level1id", nativeQuery = true)
	List<Object[]> getEventDataNotRestoration(
	        @Param("meterNo") String meterNo, 
	        @Param("startDate") Date startDate, 
	        @Param("endDate") Date endDate, 
	        @Param("level1id") int level1id);


	@Query(value = "SELECT DISTINCT te.event_code, te.event_desc, te.meter_no "
	        + "FROM tamper_events te "
	        + "JOIN master_data m ON te.meter_no = m.meter_no "
	        + "JOIN user_details ud ON ud.level1_id = m.level1_id "
	        + "WHERE te.status = 'ACTIVE' "
	        + "AND te.occ_datetime BETWEEN :startDate AND :endDate "
	        + "AND (:meterNo IS NULL OR :meterNo = '' OR te.meter_no = :meterNo) "
	        + "AND ud.level1_id = :level1id", nativeQuery = true)
	List<Object[]> getEventDataLog(@Param("meterNo") String meterNo, 
	                               @Param("startDate") Date startDate,
	                               @Param("endDate") Date endDate, 
	                               @Param("level1id") int level1id);


	@Query(value = "SELECT DISTINCT id.* " + "FROM master_data md " + "INNER JOIN instant_data id ON md.meter_no = id.meter_no LEFT JOIN user_details on  ud.level1_id = md.level1_id   "
			+ "WHERE id.instant_date >= :startDate " + "AND id.instant_date <= :endDate "
			+ "AND (:meterNo IS NULL OR :meterNo = '' OR id.meter_no = :meterNo) "
			+ "AND (:requestId IS NULL OR :requestId = '' OR id.request_id = CAST(:requestId AS INTEGER)) AND ud.level1_id=:level1id "
			+ "ORDER BY id.instant_date DESC", nativeQuery = true)
	List<Object[]> getOnDemandInstantData(String meterNo, Date startDate, Date endDate, String requestId, int level1id);

	@Query(value = "SELECT DISTINCT id.* " // Fixed SEECT -> SELECT
			+ "FROM master_data md " + "INNER JOIN loadsurvey_data id ON md.meter_no = id.meter_no "
					+ "LEFT JOIN user_details ud on ud.level1_id=md.level1_id "
			+ "WHERE id.ls_datetime BETWEEN :startDate AND :endDate AND "
			+ "(:meterNo IS NULL OR :meterNo = '' OR id.meter_no = :meterNo) "
			+ "AND (:requestId IS NULL OR :requestId = '' OR id.request_id = CAST(:requestId AS INTEGER))  AND ud.level1_id=:level1id "
			+ "order by id.ls_datetime  DESC", nativeQuery = true)
	List<Object[]> getOndemandLoadsurveyData(String meterNo, Date startDate, Date endDate, String requestId,int level1id);

	@Query(value = "SELECT DISTINCT dba.* " + "FROM master_data md "
			+ "INNER JOIN daily_billing dba ON md.meter_no = dba.meter_no "
			+ "LEFT JOIN user_details ud on ud.level1_id=md.level1_id "
			+ "WHERE dba.billing_date BETWEEN :startDate AND :endDate "
			+ "AND (COALESCE(:meterNo, '') = '' OR dba.meter_no = :meterNo) "
			+ "AND (:requestId IS NULL OR :requestId = '' OR id.request_id = CAST(:requestId AS INTEGER)) AND ud.level1_id=:level1id "
			+ "ORDER BY dba.billing_date DESC", nativeQuery = true)
	List<Object[]> getOndemandDailyBillingData(String meterNo, Date startDate, Date endDate, String requestId,int level1id);
	
	@Query(value = "SELECT DISTINCT mbd.*" + "FROM master_data md "
			+ "INNER JOIN monthly_billing_data mbd ON md.meter_no = mbd.meter_no"
			+ " LEFT JOIN user_details ud on ud.level1_id=md.level1_id " + "WHERE  "
			+ " mbd.billing_date BETWEEN :startDate AND :endDate AND "
			+ " (:meterNo IS NULL OR :meterNo = '' OR mbd.meter_no = :meterNo) "
			+ "AND (:requestId IS NULL OR :requestId = '' OR id.request_id = CAST(:requestId AS INTEGER)) AND ud.level1_id=:level1id "
			+ " order by mbd.billing_date  DESC", nativeQuery = true)
	List<Object[]> getOndemandBillingData(String meterNo, Date startDate, Date endDate, String requestId,int level1id);

	@Query(value = "SELECT DISTINCT ed.* FROM master_data md" + " LEFT JOIN events_summary_data ed ON md.meter_no = ed.meter_no "
			+ " LEFT JOIN user_details ud on ud.level1_id=md.level1_id "
			+ "WHERE ed.event_occdatetime BETWEEN :startDate AND :endDate "
			+ " AND (:meterNo IS NULL OR :meterNo = '' OR ed.meter_no = :meterNo) "
			+ "AND (:requestId IS NULL OR :requestId = '' OR id.request_id = CAST(:requestId AS INTEGER)) AND ud.level1_id=:level1id "
			+ "order by ed.event_occdatetime desc ", nativeQuery = true)
	List<Object[]> getOndemandEventData(String meterNo, Date startDate, Date endDate, String requestId, int level1id);

}
