package com.smartmeter.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smartmeter.model.MasterData;

@Repository
public interface AvailabilityRepository extends JpaRepository<MasterData, String> {

	 @Query(value = "SELECT mmd.meter_date, COUNT(m.meter_no) AS TOTAL_METER_COUNT, "
	            + "COUNT(CASE WHEN (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) "
	            + "AND (:meterNo IS NULL OR :meterNo = '' OR m.meter_no = :meterNo) "
	            + "AND mmd.meter_date BETWEEN :startdate AND :enddate THEN 1 END) AS COMMUNICATION_COUNT, "
	            + "COUNT(CASE WHEN (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) "
	            + "AND (:meterNo IS NULL OR :meterNo = '' OR m.meter_no = :meterNo) "
	            + "AND mmd.meter_date IS NULL THEN 1 END) AS NONCOMMUNICATION_COUNT "
	            + "FROM Master_Data m "
	            + "LEFT JOIN Mas_Metermaster_Dashboard mmd ON m.meter_No = mmd.meter_No "
	            + "LEFT JOIN user_details ud ON m.level1_id = ud.level1_id "
	            + "WHERE (:meterNo IS NULL OR :meterNo = '' OR m.meter_no = :meterNo) "
	            + "AND mmd.meter_date BETWEEN :startdate AND :enddate "
	            + "AND (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) "
	            + "AND (:level1id IS NULL OR m.level1_id = :level1id) "
	            + "GROUP BY mmd.meter_date "
	            + "ORDER BY mmd.meter_date DESC", nativeQuery = true)
	    List<Object[]> getCountAvailability(@Param("level1id") int level1id, @Param("section") String section, 
	                                        @Param("meterNo") String meterNo, @Param("startdate") Date startDate, 
	                                        @Param("enddate") Date endDate);

	    // Query for DAILY BILLING Data
	    @Query(value = "SELECT m.meter_date, COUNT(DISTINCT m.meter_no) AS EXPECTED_DAILYBILLING_COUNT, "
	            + "COUNT(CASE WHEN l.meter_no IS NOT NULL AND l.billing_date = m.meter_date "
	            + "AND (:meterNo1 IS NULL OR :meterNo1 = '' OR md.meter_no = :meterNo1) THEN 1 END) AS DAILYBILLING_DATA_RECEIVED, "
	            + "ROUND(COUNT(CASE WHEN l.meter_no IS NOT NULL AND l.billing_date = m.meter_date "
	            + "AND (:meterNo1 IS NULL OR :meterNo1 = '' OR md.meter_no = :meterNo1) THEN 1 END) * 100.0 / "
	            + "(COUNT(DISTINCT m.meter_no)), 2) AS DAILYBILLING_PERCENTAGE "
	            + "FROM Mas_Metermaster_Dashboard m "
	            + "LEFT JOIN DAILY_BILLING l ON m.meter_no = l.meter_no "
	            + "JOIN master_data md ON m.meter_no = md.meter_no "
	            + "LEFT JOIN user_details ud ON md.level1_id = ud.level1_id "
	            + "WHERE m.meter_date BETWEEN :startdate AND :enddate "
	            + "AND (:level1id IS NULL OR md.level1_id = :level1id) "
	            + "AND (:meterNo1 IS NULL OR :meterNo1 = '' OR md.meter_no = :meterNo1) "
	            + "AND (:section IS NULL OR :section = 'ALL' OR md.modem_manufacturername = :section) "
	            + "GROUP BY m.meter_date "
	            + "ORDER BY m.meter_date DESC", nativeQuery = true)
	    List<Object[]> getCountDailybilling(@Param("level1id") int level1id, @Param("section") String section, 
	                                        @Param("meterNo1") String meterNo1, @Param("startdate") Date startDate, 
	                                        @Param("enddate") Date endDate);


   
    // Query for LOADSURVEY Data
    @Query(value = "SELECT m.meter_date, COUNT(DISTINCT m.meter_no) * 48 AS EXPECTED_LOADSURVEY_COUNT, "
            + "COUNT(CASE WHEN l.meter_no IS NOT NULL AND l.ls_date = m.meter_date THEN 1 END) AS LOADSURVEY_DATA_RECEIVED, "
            + "ROUND(COUNT(CASE WHEN l.meter_no IS NOT NULL AND l.ls_date = m.meter_date THEN 1 END) * 100.0 / "
            + "(COUNT(DISTINCT m.meter_no) * 48), 2) AS LOADSURVEY_PERCENTAGE "
            + "FROM Mas_Metermaster_Dashboard m "
            + "LEFT JOIN LOADSURVEY_DATA l ON m.meter_no = l.meter_no "
            + "JOIN master_data md ON m.meter_no = md.meter_no "
            + "LEFT JOIN user_details ud ON md.level1_id = ud.level1_id "
            + "WHERE m.meter_date BETWEEN :startdate AND :enddate "
            + "AND (:meterNo IS NULL OR :meterNo = '' OR md.meter_no = :meterNo) "
            + "AND (:level1id IS NULL OR md.level1_id = :level1id) "
            + "AND (:section IS NULL OR :section = 'ALL' OR md.modem_manufacturername = :section) "
            + "GROUP BY m.meter_date "
            + "ORDER BY m.meter_date DESC", nativeQuery = true)
    List<Object[]> getCountLoadsurvey(@Param("level1id") int level1id, @Param("section") String section, 
                                      @Param("meterNo") String meterNo, @Param("startdate") Date startDate, 
                                      @Param("enddate") Date endDate);

    // Query for MONTHLY BILLING Data
    @Query(value = "SELECT m.meter_date, COUNT(DISTINCT m.meter_no) AS EXPECTED_BILLING_COUNT, "
            + "COUNT(CASE WHEN l.meter_no IS NOT NULL AND l.billing_date = m.meter_date THEN 1 END) AS BILLING_DATA_RECEIVED, "
            + "ROUND(COUNT(CASE WHEN l.meter_no IS NOT NULL AND l.billing_date = m.meter_date THEN 1 END) * 100.0 / "
            + "(COUNT(DISTINCT m.meter_no)), 2) AS BILLING_PERCENTAGE "
            + "FROM Mas_Metermaster_Dashboard m "
            + "LEFT JOIN MONTHLY_BILLING_DATA l ON m.meter_no = l.meter_no "
            + "JOIN master_data MD ON m.meter_no = MD.meter_no "
            + "LEFT JOIN user_details ud ON MD.level1_id = ud.level1_id "
            + "WHERE m.meter_date BETWEEN :startdate AND :enddate "
            + "AND (:meterNo IS NULL OR :meterNo = '' OR MD.meter_no = :meterNo) "
            + "AND (:level1id IS NULL OR MD.level1_id = :level1id) "
            + "AND (:section IS NULL OR :section = 'ALL' OR MD.modem_manufacturername = :section) "
            + "GROUP BY m.meter_date "
            + "ORDER BY m.meter_date DESC", nativeQuery = true)
    List<Object[]> getCountMonthly(@Param("level1id") int level1id, @Param("section") String section, 
                                   @Param("meterNo") String meterNo, @Param("startdate") Date startDate, 
                                   @Param("enddate") Date endDate);
}
