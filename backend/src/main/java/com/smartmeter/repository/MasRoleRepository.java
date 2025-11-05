package com.smartmeter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MasRoleRepository extends JpaRepository<com.smartmeter.model.MasRole, Integer>{

	com.smartmeter.model.MasRole findByRoleType(String roleName);

	List<com.smartmeter.model.MasRole> findByRoleId(Integer roleId);

}
