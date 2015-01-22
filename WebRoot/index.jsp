<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<!--<base href="<%=basePath%>"> -->

<title>MoreSex两性</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link href="images/more_sex.png" rel="shortcut icon" />
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/footer.css">
<script type="text/javascript" src="js/jquery.1.4.2-min.js"></script>
<!-- 今日关注 -->
<link href="css/today_focus.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/today_focus.js"></script>
<script type="text/javascript">

	$(function() {

		$("#desSlideshow1").desSlideshow({
			autoplay : 'enable',//选项:enable,disable
			slideshow_width : '800',//幻灯片窗口宽度
			slideshow_height : '300',//幻灯片窗口的高度
			thumbnail_width : '400',//导航条宽度
			time_Interval : '4000',//以毫秒为单位
			directory : 'images/'// images目录下的flash-on.gif 和 flashtext-bg.jpg 图片
		});

	});
</script>

<!-- 热点 -->
<link href="css/hotspot.css" rel="stylesheet" type="text/css" />

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
		<div class="today_focus">
			<p>今日关注</p>
			<hr color="#5B6" width="800" />
			<%@ include file="today_focus.jsp"%>
		</div>
		<div class="hotspot">
			<p>热点</p>
			<hr color="#5B6" width="800" />
			<%@ include file="hotspot.jsp"%>
		</div>
	</div>
	<!-- 底部 -->
	<%@ include file="footer.jsp"%>
</body>
</html>
