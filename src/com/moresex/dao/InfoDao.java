package com.moresex.dao;

import java.util.List;

import com.moresex.entity.ArticleInfo;

public interface InfoDao {
	
    public List<ArticleInfo> getInfo();
	
	public List<ArticleInfo> getInfo(int page);
	
	public List<ArticleInfo> getAllInfo(int pageAll);
	
}
