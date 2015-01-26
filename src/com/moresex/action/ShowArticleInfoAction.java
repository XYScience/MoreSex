package com.moresex.action;

import java.util.ArrayList;
import java.util.List;

import com.moresex.dao.InfoDao;
import com.moresex.dao.impl.InfoDaoImpl;
import com.moresex.entity.ArticleInfo;
import com.opensymphony.xwork2.ActionSupport;
/**
 * 查询文章信息
 * @author Administrator
 *
 */
public class ShowArticleInfoAction extends ActionSupport{
	
	private String articleUrl;
	private List<ArticleInfo> titleInfo = new ArrayList<ArticleInfo>();
	public List<ArticleInfo> getTitle(){
//		  InfoDao  mInfoDao = new InfoDaoImpl();
//		  mInfoDao.get
		return titleInfo;
	}

}
