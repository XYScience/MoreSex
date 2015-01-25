<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s"%>

<div class="today_focus clearfix">

	<div id="desSlideshow1" class="desSlideshow">
		<div class="switchBigPic">
			<s:iterator value="infoList" var="f">
				<div>
					<a href="<s:property value="#f.url"/>" title="#" target="_blank"><img
						class="pic" src="images/001.jpg" width="380" height="300" alt="#" />
					</a>
					<p>
						<s:property value="#f.title" />
					</p>
				</div>
			</s:iterator>

		</div>

		<ul class="nav">
			<s:iterator value="infoList" var="f">
				<li><a href="<s:property value="#f.url"/>" title="#"
					target="_blank"><s:property value="#f.title" /> </a>
				</li>

			</s:iterator>
		</ul>

	</div>

</div>
