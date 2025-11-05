package com.smartmeter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SmartMeterAppApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(SmartMeterAppApplication.class, args);
    }
}
