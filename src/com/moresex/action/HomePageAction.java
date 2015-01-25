package com.moresex.action;

import java.util.ArrayList;
import java.util.List;

import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.ArticleInfo; 
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class HomePageAction extends ActionSupport {

	List<ArticleInfo> infoList = new ArrayList<ArticleInfo>();
	private int page = 1;

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

	public String getHomePage() {

		InfoDao dao = new InfoDaoImpl();
		infoList = dao.getHomeInfo(page);

		return SUCCESS;
	}

}
