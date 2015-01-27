package com.moresex.dao;

import java.util.List;

import com.moresex.entity.ArticleText;

public interface IDetailsDao {
	/**
	 * 
	 * @param titile
	 * @return
	 */
	public List<ArticleText> getDetails(String articleUrl); 

}
