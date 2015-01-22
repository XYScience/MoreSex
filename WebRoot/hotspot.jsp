<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="hotspot bnspic">
	<!-- /big_pic -->
	<div class="big_pic">
		<ul>
			<li class="on"><a href="#"><img
					src="images/today_focus1.jpg" title="###" /><span class="txt">简介1</span>
			</a>
			</li>
			<li><a href="#"><img src="images/today_focus2.jpg"
					title="###" /><span class="txt">简介2</span> </a>
			</li>
			<li><a href="#"><img src="images/today_focus3.jpg"
					title="####" /><span class="txt">简介3</span> </a>
			</li>
			<li><a href="#"><img src="images/today_focus1.jpg"
					title="###" /><span class="txt">简介4</span> </a>
			</li>
			<li><a href="#"><img src="images/today_focus2.jpg"
					title="###" /><span class="txt">简介5</span> </a>
			</li>
			<li><a href="#"><img src="images/today_focus3.jpg"
					title="####" /><span class="txt">简介6</span> </a>
			</li>
		</ul>
	</div>
	<!-- /small_pic -->
	<div class="small_pic clearfix">
		<ul>
			<li class="on"><a href="#"><img
					src="images/today_focus1.jpg" alt="图片说明" /> </a>
			</li>
			<li><a href="#"><img src="images/today_focus2.jpg"
					alt="图片说明" /> </a>
			</li>
			<li><a href="#"><img src="images/today_focus3.jpg"
					alt="图片说明" /> </a>
			</li>
			<li><a href="#"><img src="images/today_focus1.jpg"
					alt="图片说明" /> </a>
			</li>
			<li><a href="#"><img src="images/today_focus2.jpg"
					alt="图片说明" /> </a>
			</li>
			<li><a href="#"><img src="images/today_focus3.jpg"
					alt="图片说明" /> </a>
			</li>
		</ul>
	</div>
</div>
<script>
	$(".small_pic li").mouseover(function() {
		$(this).addClass("on").siblings().removeClass("on");
		var preNumber = $(this).prevAll().size() + 1;
		$(".big_pic li").removeClass("on");
		$(".big_pic li:nth-child(" + preNumber + ")").addClass("on");
	});
</script>