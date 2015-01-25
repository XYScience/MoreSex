package com.moresex.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;

import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.ArticleInfo;
import com.moresex.entity.ArticleText;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class SkillAction extends ActionSupport implements RequestAware {

	List<ArticleInfo> infoList = new ArrayList<ArticleInfo>();

	List<ArticleInfo> infoSizeList = new ArrayList<ArticleInfo>();

	List<ArticleText> infoContentList = new ArrayList<ArticleText>();

	private int page = 1;

	public List<ArticleText> getInfoContentList() {
		return infoContentList;
	}

	public void setInfoContentList(List<ArticleText> infoContentList) {
		this.infoContentList = infoContentList;
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

	public String getSkill() {

		InfoDao dao = new InfoDaoImpl();
		infoList = dao.getInfo(page);
		
		infoContentList = dao.getContent();
		//System.out.println(infoContentList);
		request.put("infoContentList", infoContentList);

		infoSizeList = dao.getAllInfo(dao.getInfo().size());

		int pageCount = infoSizeList.size() % 7 == 0 ? infoSizeList.size() / 7
				: infoSizeList.size() / 7 + 1;
		request.put("pageCount", pageCount);

		return SUCCESS;
	}


	@Override
	public void setRequest(Map<String, Object> arg0) {
		// TODO Auto-generated method stub
		this.request = arg0;
		this.request1 = arg0;
	}

	Map<String, Object> request;
	Map<String, Object> request1;
}
