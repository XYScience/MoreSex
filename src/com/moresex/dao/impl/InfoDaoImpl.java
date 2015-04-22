package com.moresex.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.moresex.dao.InfoDao;
import com.moresex.entity.Article;
import com.moresex.entity.HibernateSessionFactory;

public class InfoDaoImpl implements InfoDao {

	private final int PAGE_SIZE = 7;
	private final int PAGE_SIZE_HOME = 6;
	private final int PAGE_SIZE_HOME_TOP = 5;

	@Override
	public List<Article> getInfo() {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shenghuo'");
		List<Article> list = query.list();

		return list;

	}

	@Override
	public List<Article> getInfo_skill(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shenghuo'");
		query.setFirstResult((page - 1) * PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);

		List<Article> list = query.list();
		// System.out.println("list....."+list.get(2).getContent());
		return list;
	}

	@Override
	public List<Article> getInfo_health(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'jiankang'");
		query.setFirstResult((page - 1) * PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);

		List<Article> list = query.list();
		// System.out.println("list....."+list.get(2).getContent());
		return list;
	}

	@Override
	public List<Article> getInfo_birth(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'biyun'");
		query.setFirstResult((page - 1) * PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);

		List<Article> list = query.list();
		// System.out.println("list....."+list.get(2).getContent());
		return list;
	}

	@Override
	public List<Article> getInfo_mentality(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'xinli'");
		query.setFirstResult((page - 1) * PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);

		List<Article> list = query.list();
		// System.out.println("list....."+list.get(2).getContent());
		return list;
	}

	@Override
	public List<Article> getInfo_physiology(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shengli'");
		query.setFirstResult((page - 1) * PAGE_SIZE);
		query.setMaxResults(PAGE_SIZE);

		List<Article> list = query.list();
		// System.out.println("list....."+list.get(2).getContent());
		return list;
	}

	@Override
	public List<Article> getAllInfo(int pageAll) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shenghuo'");
		List<Article> list = query.list();

		return list;
	}

	@Override
	public List<Article> getContent() {
		Session session = HibernateSessionFactory.getSession();
		List<Article> list = session.createCriteria(Article.class).list();
		// System.out.println(list.size());

		return list;
	}

	// 主界面幻灯片块
	public List<Article> getHomeInfoTop(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Article f");
		query.setFirstResult((page - 1) * PAGE_SIZE_HOME_TOP);
		query.setMaxResults(PAGE_SIZE_HOME_TOP);

		List<Article> list = query.list();

		return list;
	}

	// 主界面技巧块
	public List<Article> getHomeInfoSkill(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shenghuo'");
		query.setFirstResult((page - 1) * PAGE_SIZE_HOME);
		query.setMaxResults(PAGE_SIZE_HOME);

		List<Article> list = query.list();

		return list;
	}
	// 主界面健康块
	public List<Article> getHomeInfoHealth(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Article f where f.type = 'jiankang'");
		query.setFirstResult((page - 1) * PAGE_SIZE_HOME);
		query.setMaxResults(PAGE_SIZE_HOME);
		
		List<Article> list = query.list();
		
		return list;
	}
	// 主界面身理块
	public List<Article> getHomeInfoPhysiology(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Article f where f.type = 'shengli'");
		query.setFirstResult((page - 1) * PAGE_SIZE_HOME);
		query.setMaxResults(PAGE_SIZE_HOME);
		
		List<Article> list = query.list();
		
		return list;
	}
	// 主界面生理块
	public List<Article> getHomeInfoMentality(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Article f where f.type = 'xinli'");
		query.setFirstResult((page - 1) * PAGE_SIZE_HOME);
		query.setMaxResults(PAGE_SIZE_HOME);
		
		List<Article> list = query.list();
		
		return list;
	}
	// 主界面避孕块
	public List<Article> getHomeInfoBirthControl(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session.createQuery("from Article f where f.type = 'biyun'");
		query.setFirstResult((page - 1) * PAGE_SIZE_HOME);
		query.setMaxResults(PAGE_SIZE_HOME);
		
		List<Article> list = query.list();
		
		return list;
	}

	public List<Article> getHomeInfo2_skill(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shenghuo'");
		query.setFirstResult((page - 1) * 1);
		query.setMaxResults(12);

		List<Article> list = query.list();

		return list;
	}

	public List<Article> getHomeInfo2_health(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'jiankang'");
		query.setFirstResult((page - 1) * 1);
		query.setMaxResults(12);

		List<Article> list = query.list();

		return list;
	}

	public List<Article> getHomeInfo2_mentality(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'xinli'");
		query.setFirstResult((page - 1) * 1);
		query.setMaxResults(12);

		List<Article> list = query.list();

		return list;
	}

	public List<Article> getHomeInfo2_birth(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'biyun'");
		query.setFirstResult((page - 1) * 1);
		query.setMaxResults(12);

		List<Article> list = query.list();

		return list;
	}

	public List<Article> getHomeInfo2_physiology(int page) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article f where f.type = 'shengli'");
		query.setFirstResult((page - 1) * 1);
		query.setMaxResults(12);

		List<Article> list = query.list();

		return list;
	}

}
