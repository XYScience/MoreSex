<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s"%>

<div class="indexTopic_main">
	<div class="indexTopic_main_img">
		<img src="http://img.cndzys.com/upload/image/20150311/201503111727158178.jpg" width="230" height="157">
	</div>
	<s:iterator value="infoListSkill" var="f" begin="0" end="0">
		<h3>
			<a href="<s:property value="#f.contentId"/>/<s:property value="#f.id"/>.html
" title="#f.title" target="_blank"><s:property value="#f.title" /> </a>
		</h3>
		<p>
		<div class="cont" style="width: 520px; height:70px; text-overflow:ellipsis; overflow: hidden;">
			<s:property value="#f.content" />
		</div>
		</p>

	</s:iterator>
	<p class="label">
		标签： <span>爱情</span> | <span> 浪漫</span> | <span> 姿势</span>
	</p>
</div>
<div class="indexTopic_list">
	<ul>
		<s:iterator value="infoListSkill" var="f" begin="1" end="5">
			<li>
				<div class="indexTopic_list_right">
					<a target="_blank" href="<s:property value="#f.contentId"/>/<s:property value="#f.id"/>.html
					">&nbsp;&nbsp;<s:property value="#f.title" /> </a>
				</div> <span class="stat" style="visibility: visible;"><s:property value="#f.click" /> </span></li>
		</s:iterator>
	</ul>
</div>

