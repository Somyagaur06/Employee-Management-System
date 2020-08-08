package com.validator.AppDao;

import java.util.List;

import com.validator.AppPojo.AppBean;

public interface ValidateDao {

	public AppBean check(String panNo);
	
	public void addData(List<AppBean> data);
}
