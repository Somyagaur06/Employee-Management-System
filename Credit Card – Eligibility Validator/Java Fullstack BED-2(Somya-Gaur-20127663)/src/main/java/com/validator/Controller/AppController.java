package com.validator.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


import com.validator.AppService.ValidateServiceImp;

@Controller

public class AppController {
	private ValidateServiceImp service;
	
	@Autowired
	public AppController(ValidateServiceImp service) {
		
		this.service=service;
	}
	
	
	
	@RequestMapping("/check")
	public String check(@RequestParam("panNo") String panNo) {
		
	int value=service.check(panNo);
		
	if (value == 1) {
		return "success";
	} else if (value == 0) {
		return "fail";
	}
	return "invalid";

	}
		

}
