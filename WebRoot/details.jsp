<%-- <%@page import="com.opensymphony.xwork2.Action"%>
 --%>
<%@page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
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

<title><s:iterator value="contentList" var="con"></s:iterator> <s:property value="#con.title" />
</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css" href="css/details.css">
<link rel="stylesheet" type="text/css" href="css/footer.css">
<link rel="stylesheet" type="text/css" href="css/main.css">
<link href="images/more_sex.png" rel="shortcut icon" />
<script type="text/javascript" src="js/jquery.1.4.2-min.js"></script>

<script>
	$(document).ready(function() {
		var text = $(".articl").text().replace(/&lt;br\s*\/&gt;/g, '<br/>');
		var temp = "";
		$(".articl").each(function() {
			if (temp.indexOf($(this).html(text)) != -1)
				$(this).remove();
			temp += $(this).html(text);
		});
	});
</script>
</head>

<body><%@ include file="header.jsp"%>


	<!-- 主题内容 -->
	<div class="con">

		<!-- 	左侧内容 -->
		<div class="con_left">

			<div class="con_left_title">
				<!--标题 -->

				<h1>

					<s:property value="#con.title" />

				</h1>
				<div class="info">

					<span>作者：<s:property value="#con.author" /> </span> <span>时间：<s:property value="#con.time"></s:property> </span> <span>来源：<s:property value="#con.source" /> </span>

				</div>

			</div>

			<div class="content_text">
				<em>文章导读</em>
				<p>
					<img alt="testimg01" style="width:550px;height:380px," src="images/testimg02.png">
				</p>
				<div></div>

				<s:iterator value="contentList" var="con">
					<span class="articl"><s:property value="#con.content" /> </span>
				</s:iterator>




			</div>
			<div class="paging"></div>
			<!-- 分页结束 -->
			<div class="love">
				<span class="span"></span>
				<h2>猜你喜欢</h2>

				<span class="love_a1"> <a rel="nofollow" href="javaScript:void(0)">干燥</a> <a rel="nofollow" href="javaScript:void(0)">阴凉</a> </span> <span class="love_a4"> <a rel="nofollow" href="javaScript:void(0)" title="分享到QQ空间">分享</a> </span> <span class="love_a3"><a rel="nofollow" href="javaScript:void(0)">不感兴趣</a> </span> <span class="love_a2"><a rel="nofollow" href="javaScript:void(0)">喜欢</a> </span>
			</div>
			<div class="hot_title">
				<h3>相关文章</h3>
			</div>
			<div class="left_bottom_list1">
				<ul>

					<li class="list_bottom_list1"><a href="javaScript:void(0)"> <img width="150" height="112" alt="测试" src="images/testimg02.png"></img> </a></li>



					<li class="list_bottom_list2"><a href="javaScript:void(0)"> <img width="150" height="112" alt="测试" src="images/testimg02.png"></img> </a></li>



					<li class="list_bottom_list3"><a href="javaScript:void(0)"> <img width="150" height="112" alt="测试" src="images/testimg02.png"></img> </a></li>



					<li class="list_bottom_list4"><a href="javaScript:void(0)"> <img width="150" height="112" alt="测试" src="images/testimg02.png"></img> </a></li>



					<li class="list_bottom_list5"><a href="javaScript:void(0)"> <img width="150" height="112" alt="测试" src="images/testimg02.png"></img> </a></li>



					<li class="list_bottom_list6"><a href="javaScript:void(0)"> <img width="150" height="112" alt="测试" src="images/testimg02.png"></img> </a></li>


				</ul>
			</div>
		</div>

		<!-- 右侧的内容 -->
		<div class="con_right">
			<div class="hot_links">
				<h3>热门链接</h3>
				<ul>
					<li><a href="javaScript:void(0)">生活</a>
					</li>
					<li><a href="javaScript:void(0)">感冒</a>
					</li>
					<li><a href="javaScript:void(0)">发热</a>
					</li>
					<li><a href="javaScript:void(0)">少白头</a>
					</li>
					<li><a href="javaScript:void(0)">糖尿病</a>
					</li>
					<li><a href="javaScript:void(0)">跑步</a>
					</li>
					<li><a href="javaScript:void(0)">上火</a>
					</li>
					<li><a href="javaScript:void(0)">瑜伽</a>
					</li>
				</ul>
				<div class="clear"></div>
			</div>
			<!-- hot_links end -->
			<div class="hot_title">
				<h3>一周热门</h3>
			</div>
			<div class="hot_img1">
				<a href="javaScript:void(0)"><img width="110" height="90" alt="一周热门" src="images/testimg02.png"></img> </a>
			</div>
			<div class="hot_img2">
				<a href="javaScript:void(0)"><img width="110" height="90" alt="一周热门" src="images/testimg02.png"></img> </a>
			</div>
			<div class="hot_img1">
				<a href="javaScript:void(0)"><img width="110" height="90" alt="一周热门" src="images/testimg02.png"></img> </a>
			</div>
			<div class="hot_img2">
				<a href="javaScript:void(0)"><img width="110" height="90" alt="一周热门" src="images/testimg02.png"></img> </a>
			</div>
		</div>
	</div>

	<%@ include file="footer.jsp"%>
</body>
</html>
