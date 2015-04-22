package com.moresex.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.apache.struts2.interceptor.RequestAware;
import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.Article;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class MentalityAction extends ActionSupport implements RequestAware {

	List<Article> infoList = new ArrayList<Article>();

	List<Article> infoSizeList = new ArrayList<Article>();

	private int page = 1;
	
	List<Article> infoList2 = new ArrayList<Article>();
	public List<Article> getInfoList2() {
		return infoList2;
	}

	public void setInfoList2(List<Article> infoList2) {
		this.infoList2 = infoList2;
	}

	public List<Article> getInfoSizeList() {
		return infoSizeList;
	}

	public void setInfoSizeList(List<Article> infoSizeList) {
		this.infoSizeList = infoSizeList;
	}

	public List<Article> getInfoList() {
		return infoList;
	}

	public void setInfoList(List<Article> infoList) {
		this.infoList = infoList;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public String getMentality() {

		InfoDao dao = new InfoDaoImpl();
		infoList = dao.getInfo_mentality(page);
		infoList2 = dao.getHomeInfo2_mentality(page);

//		infoSizeList = dao.getAllInfo(dao.getInfo().size());
//		
//		int pageCount = infoSizeList.size() % 7 == 0 ? infoSizeList.size() / 7
//				: infoSizeList.size() / 7 + 1;
//		request.put("pageCount", pageCount);

		return SUCCESS;
	}

	@Override
	public void setRequest(Map<String, Object> arg0) {
		this.request = arg0;
	}

	Map<String, Object> request;
}
