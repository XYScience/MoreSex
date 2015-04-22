package com.moresex.entity;

/**
 * Article entity. @author MyEclipse Persistence Tools
 */

public class Article implements java.io.Serializable {

	// Fields

	private Integer id;
	private String title;
	private String author;
	private String source;
	private String sourceUrl;
	private String url;
	private String content;
	private String time;
	private String type;
	private String contentId;
	private Integer click;
	private String imgUrl;
	private String imgAddress;

	// Constructors

	/** default constructor */
	public Article() {
	}

	/** full constructor */
	public Article(String title, String author, String source,
			String sourceUrl, String url, String content, String time,
			String type, String contentId, Integer click, String imgUrl,
			String imgAddress) {
		this.title = title;
		this.author = author;
		this.source = source;
		this.sourceUrl = sourceUrl;
		this.url = url;
		this.content = content;
		this.time = time;
		this.type = type;
		this.contentId = contentId;
		this.click = click;
		this.imgUrl = imgUrl;
		this.imgAddress = imgAddress;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public String getSource() {
		return this.source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getSourceUrl() {
		return this.sourceUrl;
	}

	public void setSourceUrl(String sourceUrl) {
		this.sourceUrl = sourceUrl;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTime() {
		return this.time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getContentId() {
		return this.contentId;
	}

	public void setContentId(String contentId) {
		this.contentId = contentId;
	}

	public Integer getClick() {
		return this.click;
	}

	public void setClick(Integer click) {
		this.click = click;
	}

	public String getImgUrl() {
		return this.imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getImgAddress() {
		return this.imgAddress;
	}

	public void setImgAddress(String imgAddress) {
		this.imgAddress = imgAddress;
	}

}