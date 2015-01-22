package com.moresex.entity;

import java.sql.Timestamp;

/**
 * Info entity. @author MyEclipse Persistence Tools
 */

public class Info implements java.io.Serializable {

	// Fields

	private Integer id;
	private String title;
	private Timestamp time;
	private String source;
	private String author;
	private String url;

	// Constructors

	/** default constructor */
	public Info() {
	}

	/** full constructor */
	public Info(String title, Timestamp time, String source, String author,
			String url) {
		this.title = title;
		this.time = time;
		this.source = source;
		this.author = author;
		this.url = url;
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

	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}