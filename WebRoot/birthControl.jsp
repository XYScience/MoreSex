<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML >
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>避孕</title>
    
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
		
		
			<!--首页幻灯片 开始-->
	<div class="slide clearfix" >
	<div class="slider">
		<!-- 
		<div class="slider-item">
			<img src="images/1.jpg" alt="" /> <img class="thumbnail"
				src="images/11.jpg" alt="" />
			<div class="caption" ><a href="" ><s:property value="#f.title"/></a></div>
		</div> -->
		
		
		
		
		<!--  <div class="slider-item">
			<img src="images/2.jpg" alt="" /> <img class="thumbnail"
				src="images/22.jpg" alt="" />
			<div class="caption"><a href="" ><s:property value="#f.title"/></a></div>
		</div>-->
		
		
		<!--  
		<div class="slider-item">
			<img src="images/3.jpg" alt="" /> <img class="thumbnail"
				src="images/33.jpg" alt="" />
			<div class="caption"><a href="" ><s:property value="#f.title"/></a></div>
		</div> -->
		
		<!-- <div class="slider-item">
			<img src="images/4.jpg" alt="" /> <img class="thumbnail"
				src="images/44.jpg" alt="" />
			<div class="caption">简介</div>
		</div> -->
		<s:iterator value="infoList" var="f" >
		<div class="slider-item">
			<img src="images/5.jpg" alt="" /> <img class="thumbnail"
				src="images/55.jpg" alt="" />
			<div class="caption"><a href="" ><s:property value="#f.title"/></a></div>
		</div> 
		</s:iterator>
		
	</div>
</div>

<!--首页幻灯片结束-->

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
                <a href="" ><img src="images/bed.png" height="140" alt="<s:property value="#f.title"/>" /></a>
                </div>
                <div class="news_title">
                <h4><a href="" title="<s:property value="#f.title"/>"><s:property value="#f.title"/></a> </h4>
                </div>
                <div class="count">
               <img src="/tpl/default/images/icon3.png" width="18" height="12" /><s:property value="#f.click"/>
                </div>
                
                    <div class="news_content"><p>
	1、年轻夫妇-----孩子成为分床的原因 
	有一天，在性医学门诊，医生接诊一位50岁男子，说自己患ED(即勃起功能障碍)有...</p></div><br>
	
	<span class=""><s:date name="#f.time" format="yyyy-MM-dd"></s:date></span>
	<hr class="line">
	</div>
	
	 </s:iterator>
	
	<div class="news">
		 	<div class="paging">
		 	<span> <a href="skillAction.action?page=<s:property value='page>1?page-1:1'/>">上一页</a></span>
            <span> <a href="skillAction.action?page=<s:property value='page+1'/>">下一页</a></span>
		 	
		 		<span class="paging2"><a href="skillAction.action?page=<s:property value='page=1'/>"> 首页</a></span>
		 		   
		 		    <s:iterator var="p" begin="1" end="5">
		 		    <span><a href="skillAction.action?page=<s:property value='#p'/>"><s:property value='#p'/></a></span>
		 		    </s:iterator>
		 		    
		 			<span><a href="skillAction.action?page=<s:property value='page=infoSizeList.size/7'/>">尾页</a></span>
		 			
	                               共<em><s:property value="infoSizeList.size/7"/></em>页 <em><s:property value="infoSizeList.size"/></em>条
	                               
		 	</div>
		</div>
	</div>
	<!-- 底部 -->
	<%@ include file="footer.jsp"%>
  </body>
</html>
