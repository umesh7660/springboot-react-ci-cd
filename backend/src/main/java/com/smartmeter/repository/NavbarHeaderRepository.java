package com.smartmeter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.smartmeter.model.NavbarHeader;

public interface NavbarHeaderRepository extends JpaRepository<NavbarHeader, Long> {

	List<NavbarHeader> findByName(String headerName);
    // You can add custom query methods here if needed

	@Query("SELECT n.name FROM NavbarHeader n")
	List<String> findAllNames();

	 @Query("SELECT n.name FROM NavbarHeader n WHERE n.navbarHeaderid = :navbarHeaderid")	    
	String findByName(@Param("navbarHeaderid") Integer navbarHeaderid);

}

