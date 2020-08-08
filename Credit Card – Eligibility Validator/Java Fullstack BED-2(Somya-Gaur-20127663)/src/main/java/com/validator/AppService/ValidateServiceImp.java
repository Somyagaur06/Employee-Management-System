package com.validator.AppService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.validator.AppDao.ValidateDaoImp;
import com.validator.AppPojo.AppBean;

@Component
public class ValidateServiceImp implements ValidateService {
     @Autowired
	private ValidateDaoImp dao;
	
	
	public void ValidateServiceImp(ValidateDaoImp check) {
		
		this.dao=dao;
		
	}
	
	
	
	
	public int check(String panNo) {
		
		AppBean result=dao.check(panNo);
		
		if(result==null)
		
			return -1;
		
		else
		{
			double score=result.getCreditScore();
	if(score<5)
		
		return 0;
	else
			
		return 1;
	}
	}


      
	public void addData(List<AppBean> data) {
		
		this.dao.addData(data);
	}
}
