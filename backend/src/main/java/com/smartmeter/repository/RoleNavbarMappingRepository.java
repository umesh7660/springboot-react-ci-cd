package com.smartmeter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.smartmeter.model.Rolenavbarmapping;

public interface RoleNavbarMappingRepository extends JpaRepository<Rolenavbarmapping, Integer>{


	//Rolenavbarmapping findByRoleId(Integer roleId);
	List<Rolenavbarmapping> findByRoleId(Integer roleId);

	Rolenavbarmapping findByRoleIdAndNavbarId(Integer roleId, int navbarId);
	
	@Query("SELECT r.navbarId FROM Rolenavbarmapping r WHERE r.roleId = :roleId AND r.isactive = :isActive")
	List<String> findByNavabarId(Integer roleId, String isActive);

	
}
