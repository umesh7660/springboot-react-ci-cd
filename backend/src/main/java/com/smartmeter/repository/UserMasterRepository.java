package com.smartmeter.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smartmeter.model.UserMaster;
import com.smartmeter.model.UserMasterId;
@Repository
public interface UserMasterRepository extends JpaRepository<UserMaster, UserMasterId> {
    Optional<UserMaster> findById(String userLoginid);
 
        // Custom query to find user by userLoginid (inside UserMasterId)
    // 🔹 Correctly reference the field inside the composite key
    @Query("SELECT u FROM UserMaster u WHERE u.id.userLoginid = :userLoginid")
    Optional<UserMaster> findByUserLoginid(@Param("userLoginid") String userLoginid);

    
    @Query("SELECT u.roleId FROM UserMaster u WHERE u.id.userLoginid = :userLoginid")
	Integer findByRoleId(@Param("userLoginid") String userLoginid);
    

}
