package com.validator.configuration;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import com.validator.AppPojo.AppBean;
import com.validator.AppService.ValidateServiceImp;

@Component
@EnableWebMvc
@ComponentScan(basePackages="com.validator")
public class AppConfig {
	ValidateServiceImp service;
	
	@Autowired
	public AppConfig(ValidateServiceImp service) {
		
		this.service=service;
	}
	
	@Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }
	
	
	
	@PostConstruct
	@Bean
	public Object addData() {
		
		List<AppBean> details=new ArrayList<AppBean>();
		
		details.add(new AppBean("AXSSP1122H", 3.10));
		
		details.add(new AppBean("APPSA3355P", 8.50));
		
		details.add(new AppBean("APPXA2244X", 9.50));
		
		details.add(new AppBean("AXVPS7766V", 1.50));
		
		details.add(new AppBean("ASXPS2121S", 5.10));
		
		
		
		service.addData(details);
		
		return new Object();
		
	}
	

}
