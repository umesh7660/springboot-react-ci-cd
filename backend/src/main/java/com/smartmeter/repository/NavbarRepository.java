package com.smartmeter.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.smartmeter.DTO.NavBarDTO;
import com.smartmeter.model.NavBar;

public interface NavbarRepository extends JpaRepository<NavBar, Integer> {

    // Corrected native SQL query
    @Query(value = "SELECT * FROM nav_bar_new WHERE navbar_headerid = :navbarheader_id", nativeQuery = true)
    List<NavBar> findByNavbarHeaderid(@Param("navbarheader_id") Integer navbarheader_id);

    // JPQL query returning DTO for sub-items
    @Query("SELECT new com.smartmeter.DTO.NavBarDTO"
            + "(n.navbarId, n.name, n.controllerName, n.actionName, n.area,"
            + " n.imageClass, n.status, n.parentId, n.isParent, n.haschild, "
            + "n.moduleName, n.navbarHeaderid) FROM NavBar n "
            + "WHERE n.parentId = :navbarId")
    List<NavBarDTO> findBySubItems(@Param("navbarId") Integer navbarId);

    List<NavBar> findByParentId(Integer navbarId);

    // Corrected query to return an Optional
    @Query("SELECT n.name FROM NavBar n WHERE n.navbarId = :navbarId")
    Optional<String> findByName(@Param("navbarId") Integer navbarId);
    
    @Query("SELECT DISTINCT n.navbarHeaderid FROM NavBar n WHERE n.navbarId = :navbarId")
    List<String> findByNavbarHeaderId(@Param("navbarId") Integer navbarId);

}


