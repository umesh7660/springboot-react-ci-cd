package com.smartmeter.services;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.DTO.UserMasterDTO;
import com.smartmeter.model.UserMaster;
import com.smartmeter.model.UserMasterId;
import com.smartmeter.repository.UserMasterRepository;
import com.smartmeter.utils.EncAndDecLogic;

@Service
public class UserMasterService {
	@Autowired
	private  UserMasterRepository userMasterRepository;

	public void save(UserMasterDTO userMaster, UserMaster userLoginDetails) throws Exception  {

		UserMaster user = new UserMaster();		

		Timestamp creationDate = null;
        if (userMaster.getCreationDate() != null) {
            creationDate = new Timestamp(userMaster.getCreationDate().getTime());
        }
        
		UserMasterId userMasterid = new UserMasterId();
		userMasterid.setUserLoginid(userMaster.getUserLoginid());

		// Set other user fields
		user.setFullName(userMaster.getFullName());
		//user.setPassword(EncAndDecLogic.encrypt(userMaster.getPassword()));
		user.setPassword(EncAndDecLogic.encrypt(userMaster.getPassword())); // Hash password before saving

		user.setEmailAddress(userMaster.getEmailAddress());
		user.setCellPhone(userMaster.getCellPhone());
		
		user.setCity(userMaster.getCity());
		user.setRoleId(userMaster.getRoleId());
		user.setUserStatus(userMaster.getUserStatus());	
		
		user.setCreatedBy(userLoginDetails.getId().getUserLoginid());
		user.setCreationDate(userMaster.getCreationDate()!=null?creationDate:Timestamp.valueOf(LocalDateTime.now()));

		// Set the composite key in the user object
		user.setId(userMasterid);
		
		userMasterRepository.save(user);
	}


	public Optional<UserMaster> findByUserLoginid(String userLoginid) {
		return userMasterRepository.findByUserLoginid(userLoginid);
	}


	public UserMaster save(UserMaster user) {
		return userMasterRepository.save(user);
	}

	
	
}
