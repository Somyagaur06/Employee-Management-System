package com.validator.AppPojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="creditCard")
public class AppBean {
   
	@Id
	private String panNo;
	
	@Column
	private double creditScore;
	
	
	public String getPanNo() {
		return panNo;
	}
	
	public AppBean() {
		
	}
	
	
	public AppBean(String panNo,double credit ) {
		
		this.panNo=panNo;
		this.creditScore=credit;
	}


	public void setPanNo(String panNo) {
		this.panNo = panNo;
	}


	public double getCreditScore() {
		return creditScore;
	}


	public void setCreditScore(double creditScore) {
		this.creditScore = creditScore;
	}


	
	
}
