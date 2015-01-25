package com.moresex.action;

import java.util.ArrayList;
import java.util.List;
import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.ArticleInfo;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BirthControlAction extends ActionSupport{
List<ArticleInfo> infoList = new ArrayList<ArticleInfo>();
	
	List<ArticleInfo> infoSizeList = new ArrayList<ArticleInfo>();
	
	List<ArticleInfo> infoAverageList = new ArrayList<ArticleInfo>();
	
	private int page = 1;
	
	
	
	public List<ArticleInfo> getInfoAverageList() {
		return infoAverageList;
	}


	public void setInfoAverageList(List<ArticleInfo> infoAverageList) {
		this.infoAverageList = infoAverageList;
	}


	public List<ArticleInfo> getInfoSizeList() {
		return infoSizeList;
	}


	public void setInfoSizeList(List<ArticleInfo> infoSizeList) {
		this.infoSizeList = infoSizeList;
	}


	public List<ArticleInfo> getInfoList() {
		return infoList;
	}


	public void setInfoList(List<ArticleInfo> infoList) {
		this.infoList = infoList;
	}


	public int getPage() {
		return page;
	}


	public void setPage(int page) {
		this.page = page;
	}


	public String getBirthControl(){
		
		InfoDao dao = new InfoDaoImpl();
		infoList = dao.getInfo(page);
		
		infoSizeList = dao.getAllInfo(dao.getInfo().size());
		
		
		return SUCCESS;
	}
}
