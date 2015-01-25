package com.moresex.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.moresex.dao.IDetailsDao;
import com.moresex.entity.ArticleText;
import com.moresex.entity.HibernateSessionFactory;


public class DetailsDaoImpl implements IDetailsDao {

	@Override
	public List<ArticleText> getDetails(String articleurl) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from ArticleText at where at.articleInfo.articleUrl=:articleurl");	
		query.setParameter("articleurl", articleurl);
		List<ArticleText> list = query.list();
		System.out.println("list...."+list);
		return list;
		
	}

}
