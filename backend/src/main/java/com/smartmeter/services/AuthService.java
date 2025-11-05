package com.smartmeter.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.smartmeter.model.UserMaster;
import com.smartmeter.repository.UserMasterRepository;
import com.smartmeter.utils.EncAndDecLogic;

@Service
public class AuthService {

    @Autowired
    private UserMasterRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean authenticate(String userLoginid, String password) throws Exception {
        Optional<UserMaster> userOptional = userRepository.findByUserLoginid(userLoginid);

        if (userOptional.isPresent()) {
            UserMaster user = userOptional.get();
            String decryptedPassword = EncAndDecLogic.decrypt(user.getPassword()); // Decrypt stored password
            return password.equals(decryptedPassword); // Compare input password with decrypted password
        }

        return false;
    }

	public Integer getRoleId(String userLoginid) {
		 Integer roleId= userRepository.findByRoleId(userLoginid);
		// TODO Auto-generated method stub
		return roleId;
	}

	public Optional<UserMaster> findByUserLoginid(String userLoginid) {
		
		return userRepository.findByUserLoginid(userLoginid);
	}
	
	

}
