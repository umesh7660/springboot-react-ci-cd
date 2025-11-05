package com.smartmeter.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smartmeter.DTO.MasterDataDTO;
import com.smartmeter.model.CommunicationDataPojo;
import com.smartmeter.model.MasMetermasterInventoryId;
import com.smartmeter.model.MasterData;
import com.smartmeter.model.MeterLocationDTO;
import com.smartmeter.model.TampersPojo;
import com.smartmeter.model.UserMaster;

@Repository
public interface MasterDataRepository extends JpaRepository<MasterData, String> {

	@Query("SELECT " + "SUM(CASE WHEN m.phase = '1P' THEN 1 ELSE 0 END) AS singlePhaseCount, "
			+ "SUM(CASE WHEN m.phase = '3P' THEN 1 ELSE 0 END) AS threePhaseCount, "
			+ "SUM(CASE WHEN m.phase = 'DTC' THEN 1 ELSE 0 END) AS dtCount, "
			+ "SUM(CASE WHEN m.phase = 'FEEDER' THEN 1 ELSE 0 END) AS feederCount, "
			+ "COUNT(CASE WHEN mmd.id.meterDate = CURRENT_DATE THEN 1 ELSE NULL END) AS communicationCount, "
			+ "COUNT(CASE WHEN mmd.id.meterDate != CURRENT_DATE THEN 1 ELSE NULL END) AS nonCommunicationCount, "
			+ "COUNT(mmi.id.meterNo) AS inventoryCount " + "FROM MasterData m "
			+ "LEFT JOIN MasMetermasterDashboard mmd ON mmd.id.meterNo = m.meterNo "
			+ "LEFT JOIN MasMetermasterInventory mmi ON mmd.id.meterNo = mmi.id.meterNo")
	List<Object[]> getAllMeterCounts();

	
	@Query("SELECT "
		     + "COUNT(DISTINCT CASE WHEN m.phase = '3P' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id THEN m.meterNo END), "
		     + "COUNT(DISTINCT CASE WHEN m.phase = '3P' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id AND mmd.id.meterDate = CURRENT_DATE THEN m.meterNo END) "
		     + "FROM MasterData m "
		     + "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
		     + "LEFT JOIN UserMaster us ON us.level1Id = m.level1Id")
	List<Object[]> countByThreePhaseMeters(String section, int level1id);

	
	@Query("SELECT "
		     + "COUNT(DISTINCT CASE WHEN m.phase = '1P' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id THEN m.meterNo END), "
		     + "COUNT(DISTINCT CASE WHEN m.phase = '1P' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id AND mmd.id.meterDate = CURRENT_DATE THEN m.meterNo END) "
		     + "FROM MasterData m "
		     + "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
		     + "LEFT JOIN UserMaster us ON us.level1Id = m.level1Id")
	List<Object[]> countBySinglePhaseMeters(String section,int level1id);

	@Query("SELECT "
		     + "COUNT(DISTINCT CASE WHEN m.phase = 'DTC' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id THEN m.meterNo END), "
		     + "COUNT(DISTINCT CASE WHEN m.phase = 'DTC' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id AND mmd.id.meterDate = CURRENT_DATE THEN m.meterNo END) "
		     + "FROM MasterData m "
		     + "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
		     + "LEFT JOIN UserMaster us ON us.level1Id = m.level1Id")
		List<Object[]> countByDTMeters(@Param("section") String section, @Param("level1id") int level1id);

	@Query("SELECT "
		     + "COUNT(DISTINCT CASE WHEN m.phase = 'FEEDER' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id THEN m.meterNo END), "
		     + "COUNT(DISTINCT CASE WHEN m.phase = 'FEEDER' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
		     + "AND us.level1Id = :level1id AND mmd.id.meterDate = CURRENT_DATE THEN m.meterNo END) "
		     + "FROM MasterData m "
		     + "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
		     + "LEFT JOIN UserMaster us ON us.level1Id = m.level1Id")
	List<Object[]> countByFeederMeters(String section, int level1id);

	@Query("SELECT "
		     + "COUNT(DISTINCT CASE WHEN mmd.id.meterDate = CURRENT_DATE AND m.modemManufacturername = 'GPRS' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) THEN m.meterNo END) AS GPRS_COMMUNICATION_COUNT, "

		     + "(COUNT(DISTINCT CASE WHEN (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) THEN m.meterNo END) "
		     + "- "
		     + "COUNT(DISTINCT CASE WHEN mmd.id.meterDate = CURRENT_DATE AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) THEN m.meterNo END)) AS NON_COMMUNICATION_COUNT, "

		     + "COUNT(DISTINCT CASE WHEN mmd.id.meterDate = CURRENT_DATE AND m.modemManufacturername = 'RF' AND "
		     + "(:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) THEN m.meterNo END) AS RF_COMMUNICATION_COUNT "

		     + "FROM MasterData m "
		     + "LEFT JOIN MasMetermasterDashboard mmd "
		     + "ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
		     + "JOIN UserMaster us ON us.level1Id = m.level1Id "
		     + "WHERE us.level1Id = :level1id")
		List<Object[]> countByCommunications(@Param("section") String section, @Param("level1id") int level1id);


	@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo("
		     + "mmd.id.meterNo, "
		     + "TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), "
		     + "mmd.instantAvailable, mmd.billingAvailable, mmd.lsAvailable, "
		     + "mmd.eventsAvailable, TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'), "
		     + "mmd.dailybillingData) "
		     + "FROM MasterData m "
		     + "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
		     + "LEFT JOIN MasMetermasterInventory mmi ON mmd.id.meterNo = mmi.id.meterNo "
		     + "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id "
		     + "WHERE mmd.id.meterNo IS NOT NULL AND m.modemManufacturername = 'GPRS' "
		     + "AND ud.level1Id = :level1id")
		List<CommunicationDataPojo> findCommunicationMeters(@Param("level1id") int level1id);



	// TO_CHAR(mtd.id.tamperDate, 'YYYY-MM-DD HH24:MI:SS')
		@Query(
			    value = "SELECT DISTINCT m.* " +
			            "FROM master_data m " +
			            "LEFT JOIN mas_metermaster_dashboard mmd " +
			            "    ON m.meter_no = mmd.meter_no AND mmd.meter_date = CURRENT_DATE " +
			            "LEFT JOIN mas_metermaster_inventory mmi " +
			            "    ON mmd.meter_no = mmi.meter_no " +
			            "LEFT JOIN user_master ud " +
			            "    ON ud.level1_id = m.level1_id " +
			            "WHERE m.meter_no NOT IN ( " +
			            "    SELECT m_inner.meter_no " +
			            "    FROM master_data m_inner " +
			            "    LEFT JOIN mas_metermaster_dashboard mmd_inner " +
			            "        ON m_inner.meter_no = mmd_inner.meter_no AND mmd_inner.meter_date = CURRENT_DATE " +
			            "    LEFT JOIN mas_metermaster_inventory mmi_inner " +
			            "        ON mmd_inner.meter_no = mmi_inner.meter_no " +
			            "    LEFT JOIN user_master ud_inner " +
			            "        ON ud_inner.level1_id = m_inner.level1_id " +
			            "    WHERE mmd_inner.meter_no IS NOT NULL " +
			            ") " +
			            "AND (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) " +
			            "AND ud.level1_id = :level1id",
			    nativeQuery = true
			)
			List<MasterData> findNonCommunicationMeters(@Param("section") String section, @Param("level1id") int level1id);


	@Query("SELECT mmi.id " + "FROM MasMetermasterInventory mmi")
	List<MasMetermasterInventoryId> findAllInventoryMeters();

	@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo(mmd.id.meterNo, TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), "
			+ " mmd.instantAvailable,mmd.billingAvailable,mmd.lsAvailable,mmd.eventsAvailable, TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'), mmd.dailybillingData) "
			+ "FROM MasMetermasterDashboard mmd " + "LEFT JOIN MasterData m ON m.meterNo = mmd.id.meterNo "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id "
			+ "WHERE mmd.id.meterDate = CURRENT_DATE AND m.phase = '3P' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<CommunicationDataPojo> findThreePhaseMeters(String section,int level1id);

	@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo(mmd.id.meterNo, TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), "
			+ " mmd.instantAvailable,mmd.billingAvailable,mmd.lsAvailable,mmd.eventsAvailable,TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'),mmd.dailybillingData) "
			+ "FROM MasMetermasterDashboard mmd " + "LEFT JOIN MasterData m ON m.meterNo = mmd.id.meterNo "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id "
			+ "WHERE mmd.id.meterDate = CURRENT_DATE AND m.phase = '1P' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<CommunicationDataPojo> findOnePhaseMeters(String section, int level1id);

	@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo(mmd.id.meterNo, TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), "
			+ " mmd.instantAvailable,mmd.billingAvailable,mmd.lsAvailable,mmd.eventsAvailable,TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'),mmd.dailybillingData) "
			+ "FROM MasMetermasterDashboard mmd " + "LEFT JOIN MasterData m ON m.meterNo = mmd.id.meterNo "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id "
			+ "WHERE mmd.id.meterDate = CURRENT_DATE AND m.phase = 'DTC' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<CommunicationDataPojo> findDTPhaseMeters(String section,int level1id);

	@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo(mmd.id.meterNo,  TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), "
			+ " mmd.instantAvailable,mmd.billingAvailable,mmd.lsAvailable,mmd.eventsAvailable,TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'),mmd.dailybillingData) "
			+ "FROM MasMetermasterDashboard mmd " + "LEFT JOIN MasterData m ON m.meterNo = mmd.id.meterNo "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id "
			+ "WHERE mmd.id.meterDate = CURRENT_DATE AND m.phase = 'FEEDER' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<CommunicationDataPojo> findFeederPhaseMeters(String section,int level1id);

	@Query(value = "SELECT DISTINCT  m FROM MasterData m "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id WHERE phase = '1P' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<MasterData> findAllSinglePhaseMeters(String section,int level1id);

	@Query(value = "SELECT DISTINCT  m FROM MasterData m  "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id WHERE m.phase='3P' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<MasterData> findAllThreePhaseMeters(String section,int level1id);

	@Query(value = "SELECT DISTINCT  m FROM MasterData m  "
			+ "INNER JOIN UserMaster ud ON ud.level1Id = m.level1Id  WHERE m.phase='DTC' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<MasterData> findAllDtPhaseMeters(String section,int level1id);

	@Query(value = "SELECT DISTINCT  m FROM MasterData m  "
			+ "LEFT JOIN UserMaster ud ON ud.level1Id = m.level1Id  WHERE m.phase='FEEDER' "
			+ "AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ "AND ud.level1Id = :level1id ")
	List<MasterData> findAllFeederPhaseMeters(String section,int level1id);

	@Query(value = 
		    "WITH TotalMeters AS ( " +
		    "    SELECT COUNT(DISTINCT m.meter_no) AS TOTAL_COUNT " +
		    "    FROM master_data m " +
		    "    LEFT JOIN user_details ud ON m.level1_Id = ud.level1_Id " +
		    "    WHERE m.modem_manufacturername IN ('RF', 'GPRS') " +
		    "      AND (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) " +
		    "      AND ud.level1_Id = :level1id " +
		    "), " +
		    "CommunicationData AS ( " +
		    "    SELECT m.meter_no, m.modem_manufacturername, mmd.meter_date " +
		    "    FROM master_data m " +
		    "    LEFT JOIN mas_metermaster_dashboard mmd " +
		    "        ON m.meter_no = mmd.meter_no AND mmd.meter_date >= CURRENT_DATE - INTERVAL '6 days' " +
		    "    LEFT JOIN user_details ud ON m.level1_Id = ud.level1_Id " +
		    "    WHERE m.modem_manufacturername IN ('RF', 'GPRS') " +
		    "      AND (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) " +
		    "      AND ud.level1_Id = :level1id " +
		    ") " +
		    "SELECT " +
		    "    COALESCE(cd.meter_date, CURRENT_DATE) AS meter_date, " +
		    "    COUNT(DISTINCT CASE WHEN cd.modem_manufacturername = 'GPRS' AND cd.meter_date IS NOT NULL THEN cd.meter_no END) AS communication_count, " +
		    "    (tm.TOTAL_COUNT - COUNT(DISTINCT CASE WHEN cd.meter_date IS NOT NULL THEN cd.meter_no END)) AS non_communication_count, " +
		    "    COUNT(DISTINCT CASE WHEN cd.modem_manufacturername = 'RF' AND cd.meter_date IS NOT NULL THEN cd.meter_no END) AS rf_communication_count " +
		    "FROM CommunicationData cd " +
		    "JOIN TotalMeters tm ON 1=1 " +
		    "GROUP BY cd.meter_date, tm.TOTAL_COUNT " +
		    "ORDER BY cd.meter_date " +
		    "LIMIT 7", 
		    nativeQuery = true)
		List<Object[]> countLast7DaysCommunications(@Param("section") String section, @Param("level1id") int level1id);

		
		
		@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo(" +
			       "mmd.id.meterNo, " +
			       "TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), " +
			       "mmd.instantAvailable, " +
			       "mmd.billingAvailable, " +
			       "mmd.lsAvailable, " +
			       "mmd.eventsAvailable, " +
			       "TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'), " +
			       "mmd.dailybillingData) " +
			       "FROM MasterData md " +
			       "JOIN UserMaster ud on ud.level1Id=md.level1Id " +  // assuming MasterData has a `userDetails` field mapped to UserDetails or UserMaster
			       "JOIN MasMetermasterDashboard mmd ON md.meterNo = mmd.id.meterNo " +
			       "WHERE mmd.id.meterDate = :date " +
			       "AND md.modemManufacturername = 'GPRS' " +
			       "AND ud.level1Id = :level1id")
			List<CommunicationDataPojo> last7DaysCommunications(@Param("date") Date date, @Param("level1id") int level1id);


	@Query("SELECT DISTINCT m " + "FROM MasterData m "
			+ "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = :date "
			+ "LEFT JOIN MasMetermasterInventory mmi ON mmd.id.meterNo = mmi.id.meterNo LEFT JOIN UserMaster ud on "
			+ " ud.level1Id=m.level1Id " + "WHERE m.meterNo NOT IN ( "
			+ "    SELECT mmd.id.meterNo " + "    FROM MasterData m "
			+ "    LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = :date  "
			+ "    LEFT JOIN MasMetermasterInventory mmi ON mmd.id.meterNo = mmi.id.meterNo "
			+ " LEFT JOIN UserMaster ud on ud.level1Id=m.level1Id"
			+ "    WHERE mmd.id.meterNo IS NOT NULL ) AND (:section IS NULL OR :section = 'ALL' OR m.modemManufacturername = :section) "
			+ " AND ud.level1Id=:level1id")
	List<MasterData> last7DaysNonCommunications(@Param("date") Date date,@Param("section") String section, @Param("level1id") int level1id);

	
	@Query("SELECT DISTINCT new com.smartmeter.model.CommunicationDataPojo(" +
		       "mmd.id.meterNo, " +
		       "TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'), " +
		       "mmd.instantAvailable, mmd.billingAvailable, mmd.lsAvailable, mmd.eventsAvailable, " +
		       "TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'), " +
		       "mmd.dailybillingData) " +
		       "FROM MasterData md " +
		       "JOIN UserMaster um on um.level1Id = md.level1Id " + // assumes a field `userMaster` in MasterData mapped with @ManyToOne
		       "INNER JOIN MasMetermasterDashboard mmd ON md.meterNo = mmd.id.meterNo " +
		       "WHERE mmd.id.meterDate = :dayDate " +
		       "AND md.modemManufacturername = 'RF' " +
		       "AND um.level1Id = :level1id")
		List<CommunicationDataPojo> last7DaysRFCommunications(@Param("dayDate") Date dayDate,
		                                                       @Param("level1id") int level1id);

	@Query(value = 
		    "SELECT e.event_code, " +
		    "       COALESCE(te.event_count, 0) AS event_count " +
		    "FROM (VALUES " +
		    "     (9, 'Event 9'), " +
		    "     (57, 'Event 57'), " +
		    "     (63, 'Event 63'), " +
		    "     (67, 'Event 67'), " +
		    "     (101, 'Event 101')) AS e(event_code, event_desc) " +
		    "LEFT JOIN (" +
		    "    SELECT te.event_code, COUNT(DISTINCT te.meter_no) AS event_count " +
		    "    FROM tamper_events te " +
		    "    JOIN master_data m ON te.meter_no = m.meter_no " +
		    "    JOIN user_details ud ON ud.level1_id = m.level1_id " +
		    "    WHERE te.status = 'ACTIVE' " +
		    "      AND DATE(te.occ_datetime) = CURRENT_DATE " +
		    "      AND ud.level1_id = :level1id " +
		    "      AND (:section IS NULL OR :section = 'ALL' OR m.modem_manufacturername = :section) " +
		    "    GROUP BY te.event_code " +
		    ") te ON e.event_code = te.event_code " +
		    "ORDER BY e.event_code", nativeQuery = true)

List<Object[]> tamperCounts(@Param("section") String section, @Param("level1id") int level1id);




	@Query(value = "  SELECT DISTINCT te.* FROM tamper_events te RIGHT JOIN master_data md \r\n"
			+ "    ON md.meter_no = te.meter_no  "
		    + " LEFT JOIN user_details ud on ud.level1_id=md.level1_id "
			+ "WHERE  te.status = 'ACTIVE' and te.event_code= :eventCode AND  ud.level1_id=:level1id  ", nativeQuery = true)
	List<Object[]> tamperData(@Param("eventCode") int eventCode, int level1id);

	@Query(value = "  SELECT DISTINCT md.* " + "FROM tamper_events md\r\n" + "RIGHT JOIN master_data te "
			+ "    ON md.meter_no = te.meter_no  left join user_details ud on ud.level1_id = te.level1_id " + "WHERE md.occ_datetime  BETWEEN :startdate AND :enddate"
			+ " AND (:meterNo IS NULL OR :meterNo = '' OR md.meter_no = :meterNo) and  ud.level1_id=:level1id ", nativeQuery = true)
	List<Object[]> gettamperSummary(@Param("startdate") Date startdate, @Param("enddate") Date enddate,
			@Param("meterNo") String meterNo,@Param("level1id") int level1id);

	@Query("SELECT new com.smartmeter.model.MeterLocationDTO(m.meterNo, m.longitude, m.latitude) "
			+ "FROM MasterData m LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo "
			+ "WHERE mmd.id.meterDate >= CURRENT_DATE "
			+ "AND m.meterNo IS NOT NULL AND m.latitude IS NOT NULL AND m.longitude IS NOT NULL")
	List<MeterLocationDTO> fetchmetersLocations();

	@Query("SELECT distinct md.meterNo FROM MasterData md left join UserMaster ud on "
			+ "ud.level1Id=md.level1Id where ud.level1Id = :level1id ")
	List<String> fetchMeterList(Pageable pageablem,@Param("level1id") int level1id);

	@Query(value = "Select m FROM MasterData m  left join UserMaster ud on ud.level1Id=m.level1Id WHERE (:meterNo IS NULL OR :meterNo = '' OR m.meterNo = :meterNo) AND ud.level1Id = :level1id")
	List<MasterData> fetchmeterDetails(@Param("meterNo") String meterNo, int level1id);

	@Query(value = "Select m.modemManufacturername FROM MasterData m WHERE m.meterNo=:meterNo")
	String fetchManufacture(String meterNo);


	
	@Query("SELECT new com.smartmeter.model.CommunicationDataPojo(mmd.id.meterNo, TO_CHAR(mmd.id.meterDate, 'YYYY-MM-DD HH24:MI:SS'),"
			+ "mmd.instantAvailable,mmd.billingAvailable,mmd.lsAvailable,mmd.eventsAvailable, TO_CHAR(mmd.insertedDate, 'YYYY-MM-DD HH24:MI:SS'),mmd.dailybillingData) "
			+ "FROM MasterData m "
			+ "LEFT JOIN MasMetermasterDashboard mmd ON m.meterNo = mmd.id.meterNo AND mmd.id.meterDate = CURRENT_DATE "
			+ "LEFT JOIN MasMetermasterInventory mmi ON mmd.id.meterNo = mmi.id.meterNo "
			+ "LEFT JOIN UserMaster us ON us.level1Id = m.level1Id "
			+ "WHERE mmd.id.meterNo IS NOT NULL AND m.modemManufacturername='RF' AND us.level1Id = :level1id ")
	List<CommunicationDataPojo> findRFCommunicationMeters(int level1id);

}
