package com.smartmeter.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties.Request;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smartmeter.model.UserToken;
import com.smartmeter.repository.UserTokenRepository;

@Service
public class UserTokenService {

    @Autowired
    private UserTokenRepository userTokenRepository;

    @Transactional
    public void insertUserToken(UserToken rq) {
      //  UserToken userToken = new UserToken(userId, fcmToken);
      //  userTokenRepository.save(userToken);
    	System.out.println(rq.getUserId());
    	System.out.println(rq.getFcmToken());
        System.out.println("User Token inserted successfully!");
    }

}
