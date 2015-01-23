<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>技巧</title>
    
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
<script type="text/javascript">
	$(document).ready(function() {
		$('.slider').advancedSlider({
			width : 900,
			height : 310,
			pauseSlideshowOnHover : true,

			slideProperties : {
				0 : {
					effectType : 'scale',
					horizontalSlices : '10',
					verticalSlices : '3',
					//	slicePattern : 'spiralCenterToMarginCW',
					sliceDelay : '80',
					sliceDuration : '700',
					captionSize : '40',
					slideshowDelay : 3000,
					captionHideEffect : 'slide'

				},

				1 : {
					effectType : 'slide',
					horizontalSlices : '10',
					verticalSlices : '1',
					slicePattern : 'rightToLeft',
					captionSize : '40',
					slideshowDelay : 3000,
					sliceDuration : '700'
				},

				2 : {
					effectType : 'scale',
					horizontalSlices : '10',
					verticalSlices : '5',
					captionSize : '40',
					slideshowDelay : 3000,
					sliceDuration : '700'
				},
				3 : {
					effectType : 'height',
					horizontalSlices : '1',
					verticalSlices : '15',
					slicePattern : 'bottomToTop',
					slicePoint : 'centerTop',
					sliceDuration : '700',
					captionSize : '40',
					slideshowDelay : 3000,
					captionHideEffect : 'slide'
				},
				4 : {
					effectType : 'slide',
					horizontalSlices : '6',
					verticalSlices : '3',
					slicePattern : 'topLeftToBottomRight',
					slideStartPosition : 'rightBottom',
					slideStartRatio : '0.5',
					captionSize : '40',
					slideshowDelay : 3000,
					sliceDuration : '700'
				},

			}
		});
	});
</script>

  </head>
  
  <body>
   <!-- 内容部 -->
	<div id="main">
		<%@ include file="header.jsp"%>
		
		<div class="point">
			<div class="photo">
				<img src="images/health.png" />
			</div>
			<div class="content">
				<p>技巧要点</p>
			</div>
			</div>
		
		<%@ include file="slide.jsp"%>
		<div class="green_leaf_r">
			<img src="images/green_leaf_r.jpg" alt="green leaf" />
		</div>
		
		
		<br/><br/>
		<div class="point">
			<div class="photo">
				<img src="images/health.png" />
			</div>
			<div class="content">
				<p>一周要闻</p>
			</div>
	   </div>
	   
   
	   <br><br><br>
	   
	   
	   <s:iterator value="infoList" var="f" >
	   <div class="news"> 
	        <div class="news_img">
                <a href="#" ><img src="images/bed.png" height="140" alt="夫妻到底该不该分床睡" /></a>
                </div>
                <div class="news_title">
                <h4><a href="#" title='夫妻到底该不该分床睡'><s:property value="#f.title"/></a> </h4>
                </div>
                <div class="count">
               <img src="/tpl/default/images/icon3.png" width="18" height="12" />589
                </div>
                
                    <div class="news_content"><p>
	1、年轻夫妇-----孩子成为分床的原因 
	有一天，在性医学门诊，医生接诊一位50岁男子，说自己患ED(即勃起功能障碍)有...</p></div><br>
	
	<span class=""><s:property value="#f.time"/></span>
	<hr class="line">
	</div>
	
	 </s:iterator>
	
	 <a href="skillAction.action?page=<s:property value='page>1?page-1:1'/>">上一页</a> &nbsp;&nbsp;
     <a href="skillAction.action?page=<s:property value='page+1'/>">下一页</a>
		
		
	</div>
	<!-- 底部 -->
	<%@ include file="footer.jsp"%>
  </body>
</html>
