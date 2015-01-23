package com.moresex.action;

import java.util.ArrayList;
import java.util.List;
import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.Info;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class SkillAction extends ActionSupport{
	
	List<Info> infoList = new ArrayList<Info>();
	
	List<Info> infoSizeList = new ArrayList<Info>();
	
	List<Info> infoAverageList = new ArrayList<Info>();
	
	private int page = 1;
	
	
	
	public List<Info> getInfoAverageList() {
		return infoAverageList;
	}


	public void setInfoAverageList(List<Info> infoAverageList) {
		this.infoAverageList = infoAverageList;
	}


	public List<Info> getInfoSizeList() {
		return infoSizeList;
	}


	public void setInfoSizeList(List<Info> infoSizeList) {
		this.infoSizeList = infoSizeList;
	}


	public List<Info> getInfoList() {
		return infoList;
	}


	public void setInfoList(List<Info> infoList) {
		this.infoList = infoList;
	}


	public int getPage() {
		return page;
	}


	public void setPage(int page) {
		this.page = page;
	}


	public String getSkill(){
		
		InfoDao dao = new InfoDaoImpl();
		infoList = dao.getInfo(page);
		
		infoSizeList = dao.getAllInfo(dao.getInfo().size());
		
		
		return SUCCESS;
	}

}
