package com.moresex.dao;

import java.util.List;

import com.moresex.entity.Article;


public interface IDetailsDao {
	/**
	 * 
	 * @param titile
	 * @return
	 */
	public List<Article> getDetails(String articleUrl, int click);

}
