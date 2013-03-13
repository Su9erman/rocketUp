/*********
*
*rocketUp v0.1.0;
*author:Su9erman - www.su9er.com;
*github:https://github.com/Su9erman;
*
* picture:from http://www.geekpark.net/;
* copyright 2013 &copy; Su9erman
* 
*********/


;(function($){

	$.rocketUp = function(config){

		//Load your configuration
		config = $.extend({
			//Default configuration
			rocketName:"rocketUp",  //元素ID
			UpSpeed:600,          	//滚动条回顶速度(ms)
			rocketShow:100,		  	//回顶图标显示的高度
			top:"70%",			  	//回顶图标所在位置
			right:"0",				//同上
			rocketSpeed:400,		//火箭回顶速度(ms)
			background:"url(images/rocket_up.png)no-repeat"
		},config);

		//定义简写，方便下面调用
		var rocketid = "#" + config.rocketName,
			usp = config.UpSpeed,
			rs = config.rocketShow,
			rsd = config.rocketSpeed,
			tp = config.top,
			rt = config.right,
			bg = config.background,
			click_flag = 0,//点击标志
			timer = null,
			pos = -149;

		//添加回顶div标签
		$("<div></div>",{
			id:config.rocketName  //回顶标签的ID
		}).appendTo("body");
		//给回顶标签加样式
		$(rocketid).css({
			"display":"none",
			"position":"fixed",
			"top":tp,
			"right":rt,
			"width":"149px",
			"height":"250px",
			"background":bg + " 0 0",
			"z-index":"9999",
			"cursor":"pointer"
		});


		//鼠标划过CSS
		$(rocketid).hover(function(){
			$(rocketid).css("background",bg + " -149px 0");
		},function(){
			$(rocketid).css("background",bg + " 0 0");
		});


		$(window).scroll(function(){

			if($(window).scrollTop() > rs){
				$(rocketid).fadeIn();
			}else{
				if(!click_flag){
					$(rocketid).fadeOut();
				}		
			}

		});
 
		$(rocketid).click(function(){

			click_flag = 1;

			timer = setInterval(function(){

				if(pos <= -745){
					pos = -149;
				}

				pos += -149;

				$(rocketid).css("backgroundPosition",pos + "px 0");

			},100);

			$("html,body").animate({
				scrollTop:0
			},usp,function(){

				$(rocketid).animate({
					top:0
				},rsd,function(){
					click_flag = 0;
					clearInterval(timer);
					$(rocketid).css({"backgroundPosition" : "0 0","display":"none","top":tp});
				});

			});

		});

	}

})(jQuery);