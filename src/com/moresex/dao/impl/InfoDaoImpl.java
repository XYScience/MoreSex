package com.moresex.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import com.moresex.dao.InfoDao;
import com.moresex.entity.HibernateSessionFactory;
import com.moresex.entity.Info;

public class InfoDaoImpl implements InfoDao{

	private  final int PAGE_SIZE = 7;
	
	@Override
	public List<Info> getInfo() {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Info f");
		List<Info> list = query.list();
		System.out.print(list);
		return list;
	}

	@Override
	public List<Info> getInfo(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Info f");
		query.setFirstResult((page-1)*PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);
		
		List<Info> list = query.list();

		return list;
	}

}
