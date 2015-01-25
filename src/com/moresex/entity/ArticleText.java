package com.moresex.entity;

/**
 * ArticleText entity. @author MyEclipse Persistence Tools
 */

public class ArticleText implements java.io.Serializable {

	// Fields

	private Integer id;
	private ArticleInfo articleInfo;
	private String content;
	private String subTitle;

	// Constructors

	/** default constructor */
	public ArticleText() {
	}

	/** full constructor */
	public ArticleText(ArticleInfo articleInfo, String content, String subTitle) {
		this.articleInfo = articleInfo;
		this.content = content;
		this.subTitle = subTitle;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ArticleInfo getArticleInfo() {
		return this.articleInfo;
	}

	public void setArticleInfo(ArticleInfo articleInfo) {
		this.articleInfo = articleInfo;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getSubTitle() {
		return this.subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

}