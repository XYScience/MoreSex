<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s"%>

<!--首页幻灯片 开始-->
<div class="slide clearfix">
	<div class="slider">
		<s:iterator value="infoListTop" var="f" begin="0" end="0"> 
			<div class="slider-item">
				<a href="DetailsAction?contentId=<s:property value="#f.contentId"/>" title="#f.title" target="_blank"><img src="images/1.jpg" alt="" /> <img class="thumbnail" src="images/11.jpg" alt="" /> </a>
				<div class="caption">
					<s:property value="#f.title" />
				</div>
			</div>
		</s:iterator>
		<s:iterator value="infoListTop" var="f" begin="1" end="1">
			<div class="slider-item">
				<a href="DetailsAction?contentId=<s:property value="#f.contentId"/>" title="#f.title" target="_blank"><img src="images/2.jpg" alt="" /> <img class="thumbnail" src="images/22.jpg" alt="" /> </a>
				<div class="caption">
					<s:property value="#f.title" />
				</div>
			</div>
		</s:iterator>
		<s:iterator value="infoListTop" var="f" begin="2" end="2">
			<div class="slider-item">
				<a href="DetailsAction?contentId=<s:property value="#f.contentId"/>" title="#f.title" target="_blank"><img src="images/3.jpg" alt="" /> <img class="thumbnail" src="images/33.jpg" alt="" /> </a>
				<div class="caption">
					<s:property value="#f.title" />
				</div>
			</div>
		</s:iterator>
		<s:iterator value="infoListTop" var="f" begin="3" end="3">
			<div class="slider-item">
				<a href="DetailsAction?contentId=<s:property value="#f.contentId"/>" title="#f.title" target="_blank"><img src="images/4.jpg" alt="" /> <img class="thumbnail" src="images/44.jpg" alt="" /> </a>
				<div class="caption">
					<s:property value="#f.title" />
				</div>
			</div>
		</s:iterator>
		<s:iterator value="infoListTop" var="f" begin="4" end="4">
			<div class="slider-item">
				<a href="DetailsAction?contentId=<s:property value="#f.contentId"/>" title="#f.title" target="_blank"><img src="images/5.jpg" alt="" /> <img class="thumbnail" src="images/55.jpg" alt="" /> </a>
				<div class="caption">
					<s:property value="#f.title" />
				</div>
			</div>
		</s:iterator>
	</div>
</div>

<!--首页幻灯片结束-->
