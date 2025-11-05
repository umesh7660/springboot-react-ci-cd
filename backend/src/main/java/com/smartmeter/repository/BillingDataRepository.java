package com.smartmeter.repository;

import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smartmeter.DTO.MonthlyBillingDataDTO;
import com.smartmeter.model.MonthlyBillingData;

@Repository
public interface BillingDataRepository extends JpaRepository<MonthlyBillingData, Id>{

	@Query(value = "SELECT new com.smartmeter.DTO.MonthlyBillingDataDTO(id.*) FROM master_data md " +
            "INNER JOIN monthly_billing_data id ON md.meter_no = id.meter_no " +
            "WHERE id.meter_no = :meterNo " +
            "AND id.billing_date BETWEEN :startDate AND :endDate order by billing_date desc", 
    nativeQuery = true)
List<MonthlyBillingDataDTO> getBillingData(@Param("meterNo") String meterNo, 
                                     @Param("startDate") Date startDate, 
                                     @Param("endDate") Date endDate);

}
