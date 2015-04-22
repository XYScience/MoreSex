<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!-- 头部热门精选 -->
<div class="first_hot">
	<!-- 左图片区 -->
	<div class="img_container">
		<div class="img_left">
			<img alt="" src="images/01.jpg"> <span class="img1_title"></span>
		</div>

		<div class="img_right">
			<img alt="" src="images/02.jpg"> <img alt=""
				src="images/03.jpg">
		</div>
	</div>

	<!-- 右列表区 -->
	<div style="width:30px;height:310px;float:left;"></div>
	<div class="hot_lists">
	  <h2>热门精选</h2>
	  <ul style="list-style-type:none">
	  <s:iterator value="infoList2" var="f2">
	   <li><p><a
							href="DetailsAction?contentId=<s:property value="#f2.contentId"/>"
							target="_blank" title="<s:property value="#f2.title"/>"> <s:property
								value="#f2.title" /> </a></p></li>
								
								</s:iterator>
	  </ul>
	 
	</div>
</div>
