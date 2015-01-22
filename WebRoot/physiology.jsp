<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
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
		<%@ include file="slide.jsp"%>
		<div class="green_leaf_r">
			<img src="images/green_leaf_r.jpg" alt="green leaf" />
		</div>
		
	</div>
	<!-- 底部 -->
	<%@ include file="footer.jsp"%>
  </body>
</html>
