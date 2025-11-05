package com.smartmeter.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.repository.BillingDataRepository;

@Service
public class BillingdataService {

	@Autowired
	private BillingDataRepository  billingDataRepository;
}
