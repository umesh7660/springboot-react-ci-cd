package com.smartmeter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartmeter.model.UserToken;
import com.smartmeter.services.UserTokenService;

@RestController
@RequestMapping("/api/user-token")
public class UserTokenController {

    @Autowired
    private UserTokenService userTokenService;

    @PostMapping("/insert")
    public String insertToken(@RequestBody UserToken rq) {
        userTokenService.insertUserToken(rq);
        return "Token inserted successfully!";
    }
}
