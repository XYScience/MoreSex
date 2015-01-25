package com.moresex.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import com.moresex.dao.InfoDao;
import com.moresex.entity.ArticleInfo;
import com.moresex.entity.HibernateSessionFactory;

public class InfoDaoImpl implements InfoDao{

	private  final int PAGE_SIZE = 7;
	
	@Override
	public List<ArticleInfo> getInfo() {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from ArticleInfo f");
		List<ArticleInfo> list = query.list();
		//System.out.println(list.size());
		return list;
	}

	@Override
	public List<ArticleInfo> getInfo(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from ArticleInfo f");
		query.setFirstResult((page-1)*PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);
		
		List<ArticleInfo> list = query.list();

		return list;
	}

	@Override
	public List<ArticleInfo> getAllInfo(int pageAll) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from ArticleInfo f");
		List<ArticleInfo> list = query.list();

		return list;
	}


}
