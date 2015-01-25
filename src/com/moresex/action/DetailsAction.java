package com.moresex.action;

import java.util.ArrayList;
import java.util.List;

import com.moresex.dao.IDetailsDao;
import com.moresex.dao.impl.DetailsDaoImpl;
import com.moresex.entity.ArticleText;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class DetailsAction extends ActionSupport {
	private String articleUrl;
	private List<ArticleText> contentList = new ArrayList<ArticleText>();

	public List<ArticleText> getContentList() {
		return contentList;
	}

	public void setContentList(List<ArticleText> contentList) {
		this.contentList = contentList;
	}

	public String getArticleUrl() {
		return articleUrl;
	}

	public void setArticleUrl(String articleUrl) {
		this.articleUrl = articleUrl;
	}

	/**
	 * article_text 表进行访问得到文章内容
	 */
	public String doQ() {

		IDetailsDao detailsDao = new DetailsDaoImpl();
		contentList = detailsDao.getDetails(articleUrl);
		System.out.println("contentList..."+contentList.get(0).getContent());
		return SUCCESS;
	}

}
