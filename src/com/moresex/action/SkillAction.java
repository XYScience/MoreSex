package com.moresex.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.RequestAware;

import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.Info;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class SkillAction extends ActionSupport implements RequestAware {

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

	public String getSkill() {

		InfoDao dao = new InfoDaoImpl();
		infoList = dao.getInfo(page);

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
	}

	Map<String, Object> request;
}
