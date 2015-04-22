<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML>
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

<link href="css/index_details.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/today_focus.js"></script>

<!-- 头部幻灯片  -->
<link rel="stylesheet" type="text/css" href="css/slide.css">
<script type="text/javascript" src="js/advancedSlider.js"></script>
<script type="text/javascript" src="js/excanvas.compiled.js"></script>

<script>
	$(document).ready(function() {
		var text = $("div").html().replace(/&lt;br\s*\/&gt;/g, "");
		$("div").html(text);

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
		<div>
			<%@ include file="header.jsp"%>
			<%@ include file="slide.jsp"%>
			<div class="green_leaf_r">
				<img src="images/green_leaf_r.jpg" alt="green leaf" />
			</div>
			<div class="index_details">
				<p>
					<a class="index_title" href="skill.html" target="_blank">技巧</a>
				</p>
				<hr color="#5B6" width="799" />
				<%@ include file="index_skill.jsp"%>
			</div>
			<div class="index_details">
				<p>
					<a class="index_title" href="health.html" target="_blank">健康</a>
				</p>
				<hr color="#5B6" width="799" />
				<%@ include file="index_health.jsp"%>
			</div>
			<div class="index_details">
				<p>
					<a class="index_title" href="physiology.html" target="_blank">生理</a>
				</p>
				<hr color="#5B6" width="799" />
				<%@ include file="index_physiology.jsp"%>
			</div>
			<div class="index_details">
				<p>
					<a class="index_title" href="mentality.html" target="_blank">心理</a>
				</p>
				<hr color="#5B6" width="799" />
				<%@ include file="index_mentality.jsp"%>
			</div>
			<div class="index_details">
				<p>
					<a class="index_title" href="birthControl.html" target="_blank">避孕</a>
				</p>
				<hr color="#5B6" width="799" />
				<%@ include file="index_birthControl.jsp"%>
			</div>
		</div>
		<!-- 底部 -->
		<%@ include file="footer.jsp"%>
	</div>
</body>
</html>

