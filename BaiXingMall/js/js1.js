//tab切换
		var navc=document.getElementById("navc");
		var list0=document.getElementById("list0");
		var list1=document.getElementById("list1");
		var listfir=document.getElementById("listfir");
		var listsec=document.getElementById("listsec");
		var list11=document.getElementById("list11");
		var list12=document.getElementById("list12");
		list11.onmouseover=function(){
			listfir.style.display="block";
		};
		list11.onmouseout=function(){
			listfir.style.display="none";
		};
		
		list12.onmouseover=function(){
			listsec.style.display="block";
		};
		list12.onmouseout=function(){
			listsec.style.display="none";
		};
		
		list0.onmouseover=function(){
			list1.style.display="block";
			navc.style.display="block";
		};
		list0.onmouseout=function(){
			list1.style.display="none";
		}
//上下滚动
		var box1=document.getElementById("box1");
		var dinpic1=document.getElementById("dinpic1");
  		 dinpic1.innerHTML+=dinpic1.innerHTML;
  		 var timer,t;
        function scro(){
        	if(box1.scrollTop%360==0){
        		clearInterval(timer);
        		t=setTimeout(mo,1000);
        	}
        	if(box1.scrollTop>=dinpic1.scrollHeight/2){
        		box1.scrollTop=0;
        	}else{
        		box1.scrollTop++;
        	}
        }
        box1.onmouseover=function(){
        	clearInterval(timer);
        	clearInterval(t);
        }
        box1.onmouseout=function(){
        	timer=setInterval(scro,10);
        }
        function mo(){
        	box1.scrollTop++;
        	timer=setInterval(scro,10);
        }
      mo();
//左右滚动
		var box2=document.getElementById("box2");
		var dinpic2=document.getElementById("dinpic2");
  		 dinpic2.innerHTML+=dinpic2.innerHTML;
		 var timer1,t1;
        function scro1(){
        	if(box2.scrollLeft%580==0){
        		clearInterval(timer1);
        		t1=setTimeout(mo1,1000);
        	}
        	if(box2.scrollLeft>=dinpic2.scrollWidth/2){
        		box2.scrollLeft=0;
        	}else{
        		box2.scrollLeft++;
        	}
        }
        box2.onmouseover=function(){
        	clearInterval(timer1);
        	clearInterval(t1);
        }
        box2.onmouseout=function(){
        	timer1=setInterval(scro1,10);
        }
        function mo1(){
        	box2.scrollLeft++;
        	timer1=setInterval(scro1,10);
        }
      mo1();
//    banner轮播
        var pics=document.getElementById("ban1").getElementsByTagName("img");//获取所有img
		var prev=document.getElementById("prev");
		var next=document.getElementById("next");
		var b=document.getElementById("ban1");
		var s=document.getElementById("ico").getElementsByTagName("span");
		var index=3;
		var timer3;
		fadeOut(pics[0]);
		fadeOut(pics[1]);
		prev.onclick=function(){  //往前翻
			if(index==0){
				fadeOut(pics[index]); //index 是0
				index=3;
				fadeIn(pics[index]); //index是2
			}else{
				fadeOut(pics[index]);
				fadeIn(pics[index-1]);
				index--;
			}
			showButton();//让下方小图标和图片切换对象
		}
		next.onclick=function(){
			if(index==3){
				fadeOut(pics[index]);
				index=0;
				fadeIn(pics[index]);
			}else{
				fadeOut(pics[index]);
				fadeIn(pics[index+1]);
				index++;
			}
			showButton();//让下方小图标和图片切换对象
		}
		function change(){
			if(index==3){
				fadeOut(pics[index]);
				index=0;
				fadeIn(pics[index]);
			}else{
				fadeOut(pics[index]);
				fadeIn(pics[index+1]);
				index++;
			}
			showButton();//让下方小图标和图片切换对象
		}
		
		function autoPlay(){   //设置定时器
			timer3=setInterval(change,3000);
		}
		autoPlay();
		function stop(){   //清除定时器
			clearInterval(timer3);
		}
		b.onmouseover=function(){ //鼠标放到div上 清除定时器  按钮出现
			stop();
			prev.style.display="inline-block";
			next.style.display="inline-block";
		}
		b.onmouseout=function(){
			autoPlay();
			prev.style.display="none";
			next.style.display="none";
		}
		//控制小按钮的样式
		function showButton(){
			for(var j=0;j<s.length;j++){
				s[j].className="";
			}
			s[index].className="on";
		}
		for(var k=0;k<s.length;k++){
			s[k].onclick=function(){//给下方的小圆点添加点击事件
				if(this.className=="on"){//优化  如果点击是当前的小圆点  不再执行下方的语句
					return;
				}
				var newIndex=this.getAttribute("index");//点击谁的时候 获取谁的index
				fadeIn(pics[newIndex]);//显示点击新的index对应图片
				fadeOut(pics[index]);//把之前正在显示的老的图片消失
				index=newIndex;
				showButton();
//				debugger;
			}
		}
		//透明度兼容写法
		function setOpacity(elem,level){
			if(elem.filters){
				elem.style.filter="alpha(opacity="+level+")";
			}else{
				elem.style.opacity=level/100;
			}
		}
		//淡入效果
		function fadeIn(elem){
			for(var i=0;i<=100;i++){
				(function(){
					var po=i;
					setTimeout(function(){
						setOpacity(elem,po);
					},po*10);
				})();
			}
		}
		//淡出效果
		function fadeOut(elem){
			for(var i=0;i<=100;i++){
				(function(){
					var po=i;
					setTimeout(function(){
						setOpacity(elem,po);
					},(100-po)*10);
				})();
			}
		}

$(function(){
	//顶部搜索框
	var h=$("#logobar").offset().top;
	$(window).on("scroll",function(){
		if($(window).scrollTop()>=h){
			$("#logobar").css({"position":"fixed",
			"top":0,"bottom":0,"left":0,"right":0,
			"border":"1px solid #cc0000",
			"z-index":10});
		}else{
			$("#logobar").css({"position":"static","border":"none"});
		}
	});
	//搜索框下拉列表
	$("#thing0").on("click",function(){
		if($("#thingli").hide()){
		$("#thingli").show();	
		}else if($("#thingli").show()){
			$("#thingli").hide();
		}

	});
	//toTop
	$("#btndb").toTop({"speed":1000});

});
