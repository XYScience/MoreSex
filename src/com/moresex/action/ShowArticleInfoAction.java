package com.moresex.action;

import java.util.ArrayList;
import java.util.List;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;

import org.apache.struts2.interceptor.RequestAware;

import com.moresex.dao.IDetailsDao;
import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.DetailsDaoImpl;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.ArticleInfo;
import com.moresex.entity.ArticleText;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 查询文章信息
 * 
 * @author Administrator
 * 
 */
public class ShowArticleInfoAction extends ActionSupport {

	private String articleUrl;

	public String getArticleUrl() {
		return articleUrl;
	}

	public void setArticleUrl(String articleUrl) {
		this.articleUrl = articleUrl;
	}

	public List<ArticleText> getTitleInfo() {
		return titleInfo;
	}

	public void setTitleInfo(List<ArticleText> titleInfo) {
		this.titleInfo = titleInfo;
	}

	private List<ArticleText> titleInfo = new ArrayList<ArticleText>();

	public String getTitle() {
		IDetailsDao mDetailsDao = new DetailsDaoImpl();
		titleInfo = mDetailsDao.getDetails(articleUrl);
//		System.out.println(titleInfo);
		// mInfoDao.get
		return SUCCESS;
	}

}
