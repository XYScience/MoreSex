package com.moresex.action;

import java.util.ArrayList;
import java.util.List;

import com.moresex.dao.IDetailsDao;
import com.moresex.dao.impl.DetailsDaoImpl;
import com.moresex.entity.Article;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class DetailsAction extends ActionSupport {

	private String contentId;
	private String title;
	private String author;
	private String source;
	private String time;
	private int id;

	public String getContentId() {
		return contentId;
	}

	public void setContentId(String contentId) {
		this.contentId = contentId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	private List<Article> contentList = new ArrayList<Article>();

	public List<Article> getContentList() {
		return contentList;
	}

	public void setContentList(List<Article> contentList) {
		this.contentList = contentList;
	}

	/**
	 * article_text 表进行访问得到文章内容
	 */
	public String doQ() {

		IDetailsDao detailsDao = new DetailsDaoImpl();
		contentList = detailsDao.getDetails(contentId, id);
		return SUCCESS;
	}
}
