<%@page import="com.opensymphony.xwork2.Action"%>
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

<title>My JSP 'index.jsp' starting page</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css" href="css/details.css">
<link rel="stylesheet" type="text/css" href="css/footer.css">
 <link rel="stylesheet" type="text/css" href="css/main.css"> 
<link href="images/more_sex.png" rel="shortcut icon" />
<style type="text/css">

</style>
</head>

<body>


<%@ include file="header.jsp" %>
	<s:iterator value="details" var="d">
<!-- 		<span class=""><s:property value="#d.title" /> </span> -->
<!-- 		<span class=""><s:property value="#d.content" /> </span> -->
<!-- 		<span class=""><s:property value="#d.title" /> </span> -->
<!-- 		<span class=""><s:property value="#d.title" /> </span> -->
	</s:iterator>
<!-- 主题内容 -->
	<div class="con">
	
		<!-- 	左侧内容 -->
		<div class="con_left">
		
		
		
			<div class="con_left_title" >
			<s:div value="infoList" var="f">
				<h1><s:property value="#f.title" /></h1>
				<div class="info">
					<span>作者：</span> <span>时间：</span> <span>来源：</span>
				</div>
				</s:div>
			</div>
			
			<div class="content_text">
			<s:iterator value="contentList" var="con">
				<em>文章导读</em>
				<p>请求数据</p>
				<p>
					<img alt="testimg01" style="width:550px;height:380px," src="images/testimg02.png">

				</p>
				
					<p><span><s:property value="con.content"/></span></p>
				
				</s:iterator> 
			</div>
			  
			
			
			<div class="paging">
				<a href="#">1</a> <a href="http://www.baidu.com">2</a>
			</div>
			<div class="love">
				<span class="span"></span>
				<h2>猜你喜欢</h2>
				<span class="love_a1"> <a rel="nofollow" target="_blank"
					href="#">干燥</a> <a rel="nofollow" target="_blank" href="#">阴凉</a> </span>
				<span class="love_a4"> <a rel="nofollow" href="#"
					title="分享到QQ空间">分享</a> </span> <span class="love_a3"><a
					rel="nofollow" href="#">不感兴趣</a> </span> <span class="love_a2"><a
					rel="nofollow" href="#">喜欢</a> </span>
			</div>
			<div class="hot_title">
				<h3>相关文章</h3>
			</div>
			<div class="left_bottom_list1">
				<ul>
					<li class="list_bottom_list1"><span> <a href="#"> <img
								width="120" height="132" alt="测试" src="images/testimg02.png"></img>
						</a> </span>
					</li>

					<li class="list_bottom_list2"><span> <a href="#"> <img
								width="120" height="132" alt="测试" src="images/testimg02.png"></img>
						</a> </span>
					</li>

					<li class="list_bottom_list3"><span> <a href="#"> <img
								width="120" height="132" alt="测试" src="images/testimg02.png"></img>
						</a> </span>
					</li>

					<li class="list_bottom_list4"><span> <a href="#"> <img
								width="120" height="132" alt="测试" src="images/testimg02.png"></img>
						</a> </span>
					</li>

					<li class="list_bottom_list5"><span> <a href="#"> <img
								width="120" height="132" alt="测试" src="images/testimg02.png"></img>
						</a> </span>
					</li>

					<li class="list_bottom_list6"><span> <a href="#"> <img
								width="120" height="132" alt="测试" src="images/testimg02.png"></img>
						</a> </span>
					</li>

				</ul>
			</div>
		</div>

		<!-- 右侧的内容 -->
		<div class="con_right">
			<div class="hot_links">
				<h3>热门链接</h3>
				<ul>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
					<li><a href="http://www.baidu.com">生活</a>
					</li>
				</ul>
				<div class="clear"></div>
			</div><!-- hot_links end -->
			<div class="hot_title">
				<h3>一周热门</h3>
			</div>
			<div class="hot_img1"><a  href="javaScript:void(0)"><img width="110" height="132" alt="一周热门" src="images/testimg02.png"></img></a></div>
			<div class="hot_img2"><a  href="javaScript:void(0)"><img width="110" height="132" alt="一周热门" src="images/testimg02.png"></img></a></div>
			<div class="hot_img1"><a  href="javaScript:void(0)"><img width="110" height="132" alt="一周热门" src="images/testimg02.png"></img></a></div>
			<div class="hot_img2"><a  href="javaScript:void(0)"><img width="110" height="132" alt="一周热门" src="images/testimg02.png"></img></a></div>	
		</div>
	</div>

  <%@ include file="footer.jsp"  %>
</body>
</html>
