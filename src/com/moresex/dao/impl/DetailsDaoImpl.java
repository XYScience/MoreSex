package com.moresex.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.moresex.dao.IDetailsDao;
import com.moresex.entity.Article;
import com.moresex.entity.HibernateSessionFactory;

public class DetailsDaoImpl implements IDetailsDao {
	private final int PAGE = 1;
	private Integer click = 0;

	@Override
	public List<Article> getDetails(String contentIds, int id) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from Article at where at.contentId=:contentIds");
		query.setParameter("contentIds", contentIds);
		// query.setFirstResult(PAGE);
		List<Article> list = query.list();
		// 如果加入后会报事务冲突错误
		// 点击量增加
		Transaction tx = session.beginTransaction();
		try {
			Article articleInfo = (Article) session.get(Article.class, id);
			// 判断click字段是否为空
			if (articleInfo.getClick() == null) {
				articleInfo.setClick(1);
			} else {
				click = articleInfo.getClick();
				click++;
				articleInfo.setClick(click);
			}
			session.update(articleInfo);
			tx.commit();
			session.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		// System.out.println("list...."+list);

		return list;

	}

}
