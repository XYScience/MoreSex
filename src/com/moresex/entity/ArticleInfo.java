package com.moresex.entity;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * ArticleInfo entity. @author MyEclipse Persistence Tools
 */

public class ArticleInfo implements java.io.Serializable {

	// Fields

	private String articleUrl;
	private String title;
	private String author;
	private Timestamp time;
	private String source;
	private Integer click;
	private Set articleTexts = new HashSet(0);

	// Constructors

	/** default constructor */
	public ArticleInfo() {
	}

	/** full constructor */
	public ArticleInfo(String title, String author, Timestamp time,
			String source, Integer click, Set articleTexts) {
		this.title = title;
		this.author = author;
		this.time = time;
		this.source = source;
		this.click = click;
		this.articleTexts = articleTexts;
	}

	// Property accessors

	public String getArticleUrl() {
		return this.articleUrl;
	}

	public void setArticleUrl(String articleUrl) {
		this.articleUrl = articleUrl;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Timestamp getTime() {
		return this.time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public String getSource() {
		return this.source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public Integer getClick() {
		return this.click;
	}

	public void setClick(Integer click) {
		this.click = click;
	}

	public Set getArticleTexts() {
		return this.articleTexts;
	}

	public void setArticleTexts(Set articleTexts) {
		this.articleTexts = articleTexts;
	}

}