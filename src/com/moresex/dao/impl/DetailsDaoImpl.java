package com.moresex.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.moresex.dao.IDetailsDao;
import com.moresex.entity.ArticleInfo;
import com.moresex.entity.ArticleText;
import com.moresex.entity.HibernateSessionFactory;

public class DetailsDaoImpl implements IDetailsDao {
	private final int PAGE = 1;
	private Integer click = 0;

	@Override
	public List<ArticleText> getDetails(String articleurl) {
		Session session = HibernateSessionFactory.getSession();
		Query query = session
				.createQuery("from ArticleText at where at.articleInfo.articleUrl=:articleurl");
		query.setParameter("articleurl", articleurl);
		// query.setFirstResult(PAGE);
		List<ArticleText> list = query.list();

		// 点击量增加
		Transaction tx = session.beginTransaction();
		try {
			ArticleInfo articleInfo = (ArticleInfo) session.get(
					ArticleInfo.class, articleurl); 
			//判断click字段是否为空
			if (articleInfo.getClick()==null) {
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
