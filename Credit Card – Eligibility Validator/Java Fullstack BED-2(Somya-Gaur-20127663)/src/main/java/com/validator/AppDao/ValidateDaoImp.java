package com.validator.AppDao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Component;

import com.validator.AppPojo.AppBean;
import com.validator.configuration.HibernateConfig;


@Component
public class ValidateDaoImp implements ValidateDao {

	private HibernateConfig conf;
	private LocalSessionFactoryBean bean;
	private SessionFactory factory;
	private Session session;
	private Transaction trans;
	
	
	
	@Autowired
	public ValidateDaoImp(HibernateConfig conf) {
		this.conf=conf;
		
	factory=conf.getSessionFactory();
		
		session=(Session)this.factory.openSession();
		
		
		
	}
	
	

	public void addData(List<AppBean> data) {
		
		try {
		trans=session.beginTransaction();
		
		for(AppBean details:data)
		this.session.save(details);
		trans.commit();
	}
		catch(Exception e) {
			e.printStackTrace();
			trans.rollback();
		}
		
	}
	
	
	public AppBean check(String panNo) {
		
		AppBean result=session.get(AppBean.class, panNo);
		
		if(result !=null)
		return result;
		else
			return null;
	}
}
