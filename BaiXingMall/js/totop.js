;(function($){
	$.fn.extend({
		"toTop":function(options){
			
			var DEFAULT={"speed":1000,"change":"show"}
			var setting=$.extend(DEFAULT,options||{});
			
			this.each(function(){//this==$(this) jQuery对象
				var target=$(this);
				$(window).on("scroll",function(){//监控window的滚动条
					if($(window).scrollTop()>50){
						if(setting.change=="show"){
							target.show();
						}else if(setting.change=="fade"){
							target.fadeIn();
						}else if(setting.change=="slide"){
							target.slideDown();
						}
					}else{
						if(setting.change=="show"){
							target.hide();
						}else if(setting.change=="fade"){
							target.fadeOut();
						}else if(setting.change=="slide"){
							target.slideUp();
						}
					}
				});
				$(this).on("click",function(){
					$("html,body").animate({"scrollTop":0},options.speed);
				})
			})
		}
	})
})(jQuery);
