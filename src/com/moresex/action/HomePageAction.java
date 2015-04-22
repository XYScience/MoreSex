package com.moresex.action;

import java.util.ArrayList;
import java.util.List;

import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.Article;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class HomePageAction extends ActionSupport {

	List<Article> infoListTop = new ArrayList<Article>();
	List<Article> infoListSkill = new ArrayList<Article>();
	List<Article> infoListHealth = new ArrayList<Article>();
	List<Article> infoListPhysiology = new ArrayList<Article>();
	List<Article> infoListMentality = new ArrayList<Article>();
	List<Article> infoListBirthControl = new ArrayList<Article>();
	

	private int page = 1;
 
	public List<Article> getInfoListTop() {
		return infoListTop;
	}

	public void setInfoListTop(List<Article> infoListTop) {
		this.infoListTop = infoListTop;
	}

	public List<Article> getInfoListSkill() {
		return infoListSkill;
	}

	public void setInfoListSkill(List<Article> infoListSkill) {
		this.infoListSkill = infoListSkill;
	}

	public List<Article> getInfoListHealth() {
		return infoListHealth;
	}

	public void setInfoListHealth(List<Article> infoListHealth) {
		this.infoListHealth = infoListHealth;
	}

	public List<Article> getInfoListPhysiology() {
		return infoListPhysiology;
	}

	public void setInfoListPhysiology(List<Article> infoListPhysiology) {
		this.infoListPhysiology = infoListPhysiology;
	}

	public List<Article> getInfoListMentality() {
		return infoListMentality;
	}

	public void setInfoListMentality(List<Article> infoListMentality) {
		this.infoListMentality = infoListMentality;
	}

	public List<Article> getInfoListBirthControl() {
		return infoListBirthControl;
	}

	public void setInfoListBirthControl(List<Article> infoListBirthControl) {
		this.infoListBirthControl = infoListBirthControl;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public String getHomePage() {

		InfoDao dao = new InfoDaoImpl();
		infoListTop = dao.getHomeInfoTop(page);
		infoListSkill = dao.getHomeInfoSkill(page); 
		infoListHealth = dao.getHomeInfoHealth(page); 
		infoListPhysiology = dao.getHomeInfoPhysiology(page); 
		infoListMentality = dao.getHomeInfoMentality(page); 
		infoListBirthControl = dao.getHomeInfoBirthControl(page); 
		
		return SUCCESS;
	}

}
