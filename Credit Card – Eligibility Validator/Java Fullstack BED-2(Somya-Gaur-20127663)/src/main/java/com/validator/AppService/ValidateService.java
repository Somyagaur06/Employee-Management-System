package com.validator.AppService;

import java.util.List;

import com.validator.AppPojo.AppBean;

public interface ValidateService {
	
	public int check(String panNo);
	
	public void addData(List<AppBean> data);
	

}
