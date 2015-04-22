<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="f"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML >
<html>
<head>
<base href="<%=basePath%>">

<title>生理</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="images/more_sex.png" rel="shortcut icon" />
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/footer.css">
<script type="text/javascript" src="js/jquery.1.4.2-min.js"></script>

<link rel="stylesheet" type="text/css" href="css/health.css">
<link rel="stylesheet" type="text/css" href="css/news_health.css">

<!-- 头条  -->
<link rel="stylesheet" type="text/css" href="css/slide.css">
<script type="text/javascript" src="js/advancedSlider.js"></script>
<script type="text/javascript" src="js/excanvas.compiled.js"></script>
<script type="text/javascript" src="js/mouse.js"></script>
<script>
	$(document).ready(function() {
		var text = $("div").html().replace(/&lt;br\s*\/&gt;/g, "");
		$("div").html(text);
	});
</script>

</head>

<body>
	<!-- 内容部 -->
	<div id="main">
		<%@ include file="header.jsp"%>

		<!--首页幻灯片 开始-->
		<%@ include file="main_first.jsp"%>

		<!--首页幻灯片结束-->


		<div class="green_leaf_r">
			<img src="images/green_leaf_r.jpg" alt="green leaf" />
		</div>

		<br /> <br />
		<div class="point">
			<div class="photo">
				<img src="images/health.png" />
			</div>
			<div class="content">
				<p>一周要闻</p>
			</div>

		</div>

		<br> <br> <br>

		<s:iterator value="infoList" var="f">
			<div class="news">
				<div class="news_img">
					<a href="<s:property value="#f.contentId"/>/<s:property value="#f.id"/>.html
" target="_blank"><img src="images/bed.png" height="140" alt="<s:property value="#f.title"/>" /> </a>
				</div>
				<div class="news_title">
					<h4>
						<a href="<s:property value="#f.contentId"/>/<s:property value="#f.id"/>.html
" target="_blank" title="<s:property value="#f.title"/>"><s:property value="#f.title" /> </a>
					</h4>
				</div>
				<div class="count">
					<img src="images/click_num.png" width="18" height="12" />
					<s:property value="#f.click" />
				</div>
				<br> <br>

				<div class="news_content">
					<p>
					<div style="width: 420px; height:50px; text-overflow:ellipsis; overflow: hidden;">
						<s:property value="#f.content" />
					</div>
					</p>
				</div>
				<br> <span class=""><s:property value="#f.time"></s:property> </span>
				<hr class="line">
			</div>

		</s:iterator>

		<div class="news">
			<div class="paging">
				<span> <a href="phsyiology/page_<s:property value='page>1?page-1:1'/>.html">上一页</a> </span> <span> <a href="phsyiology/page_<s:property value='page+1'/>.html">下一页</a> </span> <span class="paging2"><a href="phsyiology/page_<s:property value='page=1'/>.html"> 首页</a> </span>

				<s:iterator var="p" begin="1" end="5">
					<span><a href="phsyiology/page_<s:property value='#p'/>.html"><s:property value='#p' /> </a> </span>
				</s:iterator>

				<span><a href="phsyiology/page_<s:property value='page=infoSizeList.size/7'/>.html">尾页</a> </span>

			</div>

		</div>
		<!-- 底部 -->
		<%@ include file="footer.jsp"%>

	</div>


</body>
</html>
