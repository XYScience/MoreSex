package com.moresex.dao;

import java.util.List;

import com.moresex.entity.Article;


public interface InfoDao {
	
    public List<Article> getInfo();
	
    public List<Article> getContent();

	public List<Article> getInfo_skill(int page);
	
	public List<Article> getInfo_health(int page);
	
	public List<Article> getInfo_birth(int page);
	
	public List<Article> getInfo_mentality(int page);
	
	public List<Article> getInfo_physiology(int page);

	public List<Article> getAllInfo(int pageAll);

	public List<Article> getHomeInfoTop(int page);

	public List<Article> getHomeInfoSkill(int page); 
	
	public List<Article> getHomeInfoHealth(int page); 
	
	public List<Article> getHomeInfoPhysiology(int page); 
	
	public List<Article> getHomeInfoMentality(int page); 
	
	public List<Article> getHomeInfoBirthControl(int page); 
	
	// ¶þ¼¶Ò³Ãæ
	public List<Article> getHomeInfo2_skill(int page);
	
	public List<Article> getHomeInfo2_health(int page);
	
	public List<Article> getHomeInfo2_mentality(int page);
	
	public List<Article> getHomeInfo2_birth(int page);
	
	public List<Article> getHomeInfo2_physiology(int page);
}
