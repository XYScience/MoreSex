package com.moresex.dao;

import java.util.List;

import com.moresex.entity.ArticleInfo;
import com.moresex.entity.ArticleText;

public interface InfoDao {
	
    public List<ArticleInfo> getInfo();
	
    public List<ArticleText> getContent();

	public List<ArticleInfo> getInfo(int page);

	public List<ArticleInfo> getAllInfo(int pageAll);

	public List<ArticleInfo> getHomeInfo(int page);
}
