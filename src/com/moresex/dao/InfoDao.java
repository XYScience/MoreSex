package com.moresex.dao;

import java.util.List;

import com.moresex.entity.Info;


public interface InfoDao {
	
    public List<Info> getInfo();
	
	public List<Info> getInfo(int page);

}
