$(function(){
	//nav-tab
	$(".nav").find(".nav_li").click(function(){
		$(this).addClass("nav_active").siblings(".nav_li").removeClass("nav_active");
		$(".menu").find(".menu_list").eq($(this).index()).addClass("menu_active").siblings(".menu_list").removeClass("menu_active");
		$(".contentBox").find(".content_list").eq($(this).index()).fadeIn(0).siblings(".content_list").fadeOut(0);
		$(".bianji").fadeOut(0); //把编辑页关闭
	})
	//场景_menu
	$(".changjing_right").find(".iconBox").click(function(){
		$(this).addClass("iconBox_active").siblings(".iconBox").removeClass("iconBox_active");
	})
	//menu_绘制矩形
	var kongjianN = 0;
	$("#kongjian").click(function(){
		kongjianN++;
		if(kongjianN == 1){
			$(".content_cj_right").fadeIn();
			$(".cjR_listone").fadeOut(0);
			$(".xueliangTxt").fadeIn();
		}
		if(kongjianN == 2){
			$(".content_cj_right").fadeIn();
			$(".cjR_listone").fadeOut(0);
			$(".defenTxt").fadeIn();
		}
		if(kongjianN == 3){
			$(".content_cj_right").fadeIn();
			$(".cjR_listone").fadeOut(0);
			$(".zantingTxt").fadeIn();
		}
		var x1,y1,x2,y2;
		$("#cj_canvas").mousedown(function(e){
			x1 = event.offsetX;
			y1 = event.offsetY;
			var rectangle = $('<div class="rect"></div>')
			rectangle.attr("id","Rectangle");
			rectangle.css({width:0,height:0,"position":"absolute",left:x1,top:y1,"border-radius":"4px"});
			$("#cj_canvas").append(rectangle);
//			rectangle = null;
			$("#cj_canvas").mousemove(function(){
				x2 = event.offsetX;
				y2 = event.offsetY;
				var w = x2 - x1 +"px";
				var h = y2 - y1 +"px";
				if(kongjianN == 1){
					$(".draw_x1").val(x1);
					$(".draw_y1").val(y1);
					$(".draw_w1").val(w);
					$(".draw_h1").val(h);
				}
				if(kongjianN == 2){
					$(".draw_x2").val(x1);
					$(".draw_y2").val(y1);
					$(".draw_w2").val(w);
					$(".draw_h2").val(h);
				}
				if(kongjianN == 3){
					$(".draw_x3").val(x1);
					$(".draw_y3").val(y1);
					$(".draw_w3").val(w);
					$(".draw_h3").val(h);
				}
				if(kongjianN == 4){
					$(".draw_x4").val(x1);
					$(".draw_y4").val(y1);
					$(".draw_w4").val(w);
					$(".draw_h4").val(h);
				}
				
				$("#Rectangle").css({width:w,height:h});
			})
		})
		$("#cj_canvas").mouseup(function(){
			$("#Rectangle").removeAttr("id");
			$("#cj_canvas").unbind("mousedown");
			$("#cj_canvas").unbind("mousemove");
		})
	})
	//文本框
	$("#cj_canvas").on("click",".rect",function(){
//		var inp = $("<input class='db_inp' value='' type='text'/>");
//		inp.css({width:"100%",height:"100%",background:"transparent"});
		if(kongjianN == 1){
			$(".rect").append($("#input1"));
			$("#input1").css({"display":"block",width:"100%",height:"100%",background:"transparent"});
			$(".rect").attr("id","input_yd1");
			$(".rect").removeClass("rect");
		}
		if(kongjianN == 2){
			$(".rect").append($("#input2"));
			$("#input2").css({"display":"block",width:"100%",height:"100%",background:"transparent"});
			$("#input2").fadeIn(0);
			$(".rect").attr("id","input_yd2");
			$(".rect").removeClass("rect");
		}
		if(kongjianN == 3){
			$(".rect").append($("#input3"));
			$("#input3").css({"display":"block",width:"100%",height:"100%",background:"transparent"});
			$("#input3").fadeIn(0);
			$(".rect").attr("id","input_yd3");
			$(".rect").removeClass("rect");
		}
	})
	
	$("#cj_canvas").on("click","input",function(ev){
		var event = window.event || ev;
		event.cancelBubble = true;
		$(".icon_tianchong").find("img").attr("src","images/icon-1.png");
		$(".icon_xiantiao").find("img").attr("src","images/icon-2.png");
		$(".icon_shanchu").find("img").attr("src","images/icon-3.png");
		$(".icon_fuzhi").find("img").attr("src","images/icon-4.png");
		$(".iconBox_dingceng").find("img").attr("src","images/icon-11.png");
		$(".iconBox_dongzuo").find("img").attr("src","images/icon-6.png");
		$(".iconBox_juanzhou").find("img").attr("src","images/icon-08.png");
		$(".iconBox_jingling").find("img").attr("src","images/icon-07.png");
		$(".changjing_left").find("img").attr("src","images/changjing_l1.png");
		
	})
	//监听input
	$("#input1").bind('input porpertychange',function(){
		var a = $("#input1").val();
		$("#xueliang").val(a);
	});
	$("#input2").bind('input porpertychange',function(){
		var b = $("#input2").val();
		$("#defen").val(b);
	});
	$("#input3").bind('input porpertychange',function(){
		var c = $("#input3").val();
		$("#zanting").val(c);
	});
	
	//暂停文字隐藏 - 监听select选中项
//	$(".juanzhou_select").click(function(){
//		var fou = $(".zantingTxt").find(".juanzhou_select option:selected").text();
//		if(fou == "否"){
//			$("#input3").fadeOut();
//		}else{
//			$("#input3").fadeIn();
//		}
//	})
	//显示相应属性框
	$("#input1").click(function(){
		$(".cjR_listone").fadeOut(0);
		$(".xueliangTxt").fadeIn(0);
	})
	$("#input2").click(function(){
		$(".cjR_listone").fadeOut(0);
		$(".defenTxt").fadeIn(0);
	})
	$("#input3").click(function(){
		$(".cjR_listone").fadeOut(0);
		$(".zantingTxt").fadeIn(0);
	})
	
	//属性底下的OK  -血量
	$(".cjRight_ok_xl").click(function(){
		$(this).css("background","#FF0000");
		var a = parseInt($(".draw_x1").val());
		var b = parseInt($(".draw_y1").val());
		$("#input_yd1").css({left:a,top:b});
		$("#input_yd1").find(".db_inp").css("box-shadow","none");
		console.log(a+","+b)
	})
	//属性底下的OK  -血量
	$(".cjRight_ok_df").click(function(){
		$(this).css("background","#FF0000");
		var a = parseInt($(".draw_x2").val());
		var b = parseInt($(".draw_y2").val());
		$("#input_yd2").css({left:a,top:b});
		$("#input_yd2").find(".db_inp").css("box-shadow","none");
	})
	//属性底下的OK  -暂停
	$(".cjRight_ok_zt").click(function(){
		$(this).css("background","#FF0000");
		var a = parseInt($(".draw_x3").val());
		var b = parseInt($(".draw_y3").val());
		$("#input_yd3").css({left:a,top:b});
		$("#input_yd3").find(".db_inp").css("box-shadow","none");
		$("#input3").fadeOut();
	})
	//属性底下的OK  -暂停按钮
	$(".cjRight_ok_ztB").click(function(){
		$(this).css("background","#FF0000");
	})
	//属性底下的OK  -卷轴
	$(".cjRight_ok_jz").click(function(){
		$(this).css("background","#FF0000");
	})
		
	//按钮
	$("#kongjian_btn").click(function(){
		var cj_btn_file = "<div class='cj_btn_file' title='点击上传图片'>按钮1<input id='cj_Btnfile' type='file' accept='image/*'/></div>";
		$("#cj_canvas").append(cj_btn_file);
		$(".cjR_listone").fadeOut(0);
		$(".content_cj_right").fadeIn();
		$(".zantingBtn").fadeIn();
	})
	$("#cj_canvas").on("click",".cj_btn_file",function(event){
            var event = window.event || ev;
			event.cancelBubble = true;
			$(".icon_tianchong").find("img").attr("src","images/icon-1.png");
			$(".icon_xiantiao").find("img").attr("src","images/icon-2.png");
			$(".icon_shanchu").find("img").attr("src","images/icon-3.png");
			$(".icon_fuzhi").find("img").attr("src","images/icon-4.png");
			$(".iconBox_dingceng").find("img").attr("src","images/icon-11.png");
			$(".iconBox_dongzuo").find("img").attr("src","images/icon-6.png");
			$(".iconBox_juanzhou").find("img").attr("src","images/icon-08.png");
			$(".iconBox_jingling").find("img").attr("src","images/icon-07.png");
			$(".changjing_left").find("img").attr("src","images/changjing_l1.png");
			
			$(".cjR_listone").fadeOut(0);
			$(".zantingBtn").fadeIn(0);
	});
	//上传
	$("#cj_canvas").on("change","#cj_Btnfile",function(){
		var obj = $("#cj_Btnfile")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".cj_btn_file").html("<img src="+this.result+" />");
            $(".cj_btn_file").css({background:"transparent"});
            $(".cj_btn_file").attr("title","暂停.png");
       	}
        reader.readAsDataURL(obj);
	})
	
	//卷轴
	$(".iconBox_juanzhou").click(function(){
		var cj_btn_file2 = "<div class='cj_btn_file2' title='点击上传图片'>卷轴<input id='juanzhouFile' type='file' accept='image/*'/></div>";
		$("#cj_canvas").append(cj_btn_file2);
		$(".content_cj_right").fadeIn();
		$(".cjR_listone").fadeOut(0);
		$(".juanzhouTxt").fadeIn();
	})
	
	$("#cj_canvas").on("click",".cj_btn_file2",function(event){
            var event = window.event || ev;
			event.cancelBubble = true;
			$(".icon_tianchong").find("img").attr("src","images/icon-01.png");
			$(".icon_xiantiao").find("img").attr("src","images/icon-02.png");
			$(".icon_shanchu").find("img").attr("src","images/icon-03.png");
			$(".icon_fuzhi").find("img").attr("src","images/icon-04.png");
			$(".iconBox_dingceng").find("img").attr("src","images/icon-011.png");
			$(".iconBox_dongzuo").find("img").attr("src","images/icon-06.png");
			$(".iconBox_juanzhou").find("img").attr("src","images/icon-8.png");
			$(".iconBox_jingling").find("img").attr("src","images/icon-07.png");
			$(".changjing_left").find("img").attr("src","images/changjing_l2.png");
			$(".cjR_listone").fadeOut(0);
			$(".juanzhouTxt").fadeIn(0);
	});
	//上传
	$("#cj_canvas").on("change","#juanzhouFile",function(){
		var obj = $("#juanzhouFile")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $("#cj_canvas").css("background","url(images/background.png)");
			$(".cj_btn_file2").fadeOut(0);
       	}
        reader.readAsDataURL(obj);
	})
		
	//mb_menu
	$(".moban_menu").find(".iconBox").click(function(){
		$(this).addClass("iconBox_active").siblings(".iconBox").removeClass("iconBox_active");
	})
	
	//menu_ hover
	$(".iconBox").hover(function(){
		$(this).find("ul").stop().slideDown(200);
	},function(){
		$(this).find("ul").stop().slideUp(200);
	})	
	
	
	//动画边框
	$(".donghua_cont").find(".donghua_cont_list").click(function(ev){
		var event = window.event || ev;
		event.cancelBubble = true;
		$(".donghua_cont").find(".donghua_cont_list").removeClass("donghua_cont_list_active");
		$(this).addClass("donghua_cont_list_active");
		$(".donghua_menu .donghua_shanchu").find("img").attr("src","images/icon-3.png");
		$(".donghua_menu .donghua_fuzhi").find("img").attr("src","images/icon-4.png");
		$(".donghua_menu .donghua_yulan").find("img").attr("src","images/icon-30.png");
	})
	
	//动画上传
	$(".donghua_list_pic1").on("change","#donghua_pic1",function(){
		var obj = $("#donghua_pic1")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic1").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic2").on("change","#donghua_pic2",function(){
		var obj = $("#donghua_pic2")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic2").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic3").on("change","#donghua_pic3",function(){
		var obj = $("#donghua_pic3")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic3").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic4").on("change","#donghua_pic4",function(){
		var obj = $("#donghua_pic4")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic4").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic5").on("change","#donghua_pic5",function(){
		var obj = $("#donghua_pic5")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic5").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic6").on("change","#donghua_pic6",function(){
		var obj = $("#donghua_pic6")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic6").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic7").on("change","#donghua_pic7",function(){
		var obj = $("#donghua_pic7")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic7").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic8").on("change","#donghua_pic8",function(){
		var obj = $("#donghua_pic8")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic8").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic9").on("change","#donghua_pic9",function(){
		var obj = $("#donghua_pic9")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic9").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})
	$(".donghua_list_pic10").on("change","#donghua_pic10",function(){
		var obj = $("#donghua_pic10")[0].files[0];
		var reader = new FileReader();
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".donghua_list_pic10").html("<img src="+this.result+" />");
       	}
        reader.readAsDataURL(obj);
	})	
	
	//新建动画
	var newDonghua = 0;
	$(".create_newDonghua").click(function(){
		newDonghua++;
		if(newDonghua == 1){
			$(".donghua_cont_list1").fadeIn();
		}else{
			$(".donghua_cont_list2").fadeIn();
		}
	})
	var donghuaPic = 0;
	$(".donghua_pic_xz1").click(function(){
		donghuaPic++;
		if(donghuaPic == 1){
			$(".donghua_list_pic4").fadeIn();
		}
		if(donghuaPic == 2){
			$(".donghua_list_pic5").fadeIn();
		}
	})
	var donghuaPic2 = 0;
	$(".donghua_pic_xz2").click(function(){
		donghuaPic2++;
		if(donghuaPic2 == 1){
			$(".donghua_list_pic9").fadeIn();
		}
		if(donghuaPic2 == 2){
			$(".donghua_list_pic10").fadeIn();
		}
	})
	
	
	$(".BLBL_jia").click(function(){
		$(".BLBL_defen").css("display","flex").fadeIn(0);
	})

	//新建精灵类
	var createJL = 0;
	$(".create_jl").click(function(){
		createJL++;
		if(createJL == 1){
			$(".sprite_cont").fadeIn(0).addClass("animated bounceInRight").on("webkitAnimationEnd",function(){
				$(".sprite_cont").removeClass("animated bounceInRight");
				$(".sprite_tit").fadeIn(0).addClass("animated swing").on("webkitAnimationEnd",function(){
					$(".sprite_tit").removeClass("animated swing");
				});
			});	
		}
		if(createJL == 2){
			$(".mb_jifang").css("display","block");
			$(".jifang_cont").fadeIn(0).addClass("animated bounceInRight").on("webkitAnimationEnd",function(){
				$(".jifang_cont").removeClass("animated bounceInRight");
				$(".jifang_tit").fadeIn(0).addClass("animated swing").on("webkitAnimationEnd",function(){
					$(".jifang_tit").removeClass("animated swing");
				});
			});	
		}
		if(createJL == 3){
			$(".mb_paodan").css("display","block");
			$(".paodan_cont").fadeIn(0).addClass("animated bounceInRight").on("webkitAnimationEnd",function(){
				$(".paodan_cont").removeClass("animated bounceInRight");
				$(".paodan_tit").fadeIn(0).addClass("animated swing").on("webkitAnimationEnd",function(){
					$(".paodan_tit").removeClass("animated swing");
				});
			});	
		}	
	})
	//选中敌机父类
	$(".sprite_cont").find(".contClass_redkuang").click(function(){
		$(".create_ps").find("img").attr("src","images/icon-15.png");
		$(".create_ps").find("span").css("opacity",1);
		$(".create_ps").css("color","#333");
	})
	$(".jifang_cont").find(".contClass_redkuang").click(function(){
		$(".create_ps").find("img").attr("src","images/icon-15.png");
		$(".create_ps").find("span").css("opacity",1);
		$(".create_ps").css("color","#333");
	})
	$(".paodan_cont").find(".contClass_redkuang").click(function(){
		$(".create_ps").find("img").attr("src","images/icon-15.png");
		$(".create_ps").find("span").css("opacity",1);
		$(".create_ps").css("color","#333");
	})
	//派生敌机子类
	$(".create_ps").click(function(){
		$(".create_ps").find("img").attr("src","images/icon-26.png");
		$(".create_ps").find("span").css("opacity",0.2);
		$(".create_ps").css("color","#bbbbbb");
		$(".mb_line").fadeIn(200);
		$(".sprite_zi1").fadeIn(0).addClass("animated lightSpeedIn").on("webkitAnimationEnd",function(){
			$(".sprite_zi1").removeClass("animated lightSpeedIn");
			$(".zi1_tit").fadeIn(0).addClass("animated jello");
		});
	})
	
	//新建流程类
	$(".create_lc").click(function(){
		$(".mb_liucheng").css("display","block");
		$(".liucheng_cont").fadeIn(0).addClass("animated bounceInRight").on("webkitAnimationEnd",function(){
			$(".liucheng_cont").removeClass("animated bounceInRight");
			$(".liucheng_tit").fadeIn(0).addClass("animated swing").on("webkitAnimationEnd",function(){
				$(".liucheng_tit").removeClass("animated swing");
			});
		});	
	})
		
	//类选中时
	$(".contClass_redkuang").click(function(ev){
		var event = window.event || ev;
		event.cancelBubble = true;
		$(".contClass_redkuang").css("border","solid 1px #cbd0d9");
		$(this).css("border","solid 2px #f4333c");
		$(".mb_class_cont").removeClass("contClass_active");
		$(this).parents(".mb_class_cont").addClass("contClass_active");	
		
		$(".mbIocn_sc").find("img").attr("src","images/icon-18.png");
		$(".mbIocn_fz").find("img").attr("src","images/icon-19.png");
		$(".mbIocn_zt").find("img").attr("src","images/icon-20.png");
	})
	$(".rukou_cont").find(".contClass_redkuang").click(function(){
		$(".create_ps").find("img").attr("src","images/icon-26.png");
		$(".create_ps").find("span").css("opacity",0.2);
		$(".create_ps").css("color","#bbbbbb");
	})
	$(".liucheng_cont").find(".contClass_redkuang").click(function(){
		$(".create_ps").find("img").attr("src","images/icon-26.png");
		$(".create_ps").find("span").css("opacity",0.2);
		$(".create_ps").css("color","#bbbbbb");
	})
	
	
	//精灵父类编辑入口
	$(".sprite_cont").dblclick(function(){
		$(".bianji").fadeIn(0);
		$(".bianji_ZI1,.bianji_LC,.bianji_rk,.bianji_pd,.bianji_JF").fadeOut(0);
		$(".bianji_F").fadeIn(0);
		$("#DF_VAL1").text("成员变量：2")
		$("#ZI_VAL1").text("成员变量：2");
	})
	//精灵子类编辑入口
	$(".sprite_zi1").dblclick(function(){
		$(".bianji").fadeIn(0);
		$(".bianji_F,.bianji_LC,.bianji_rk,.bianji_pd,.bianji_JF").fadeOut(0);
		$(".bianji_ZI1").fadeIn(0);
		$(".letsgo").find("img").attr("src","images/icon-23.png");
	})
	//流程类编辑入口
	$(".liucheng_cont").dblclick(function(){
		$(".bianji").fadeIn(0);
		$(".bianji_F,.bianji_ZI1,.bianji_JF,.bianji_rk,.bianji_pd").fadeOut(0);
		$(".bianji_LC").fadeIn(0);
	})
	//入口类模板
	$(".rukou_cont").dblclick(function(){
		$(".bianji").fadeIn(0);
		$(".bianji_F,.bianji_ZI1,.bianji_JF,.bianji_LC,.bianji_pd").fadeOut(0);
		$(".bianji_rk").fadeIn(0);
		$("#RK_VAL").text("触发操作：1");
	})
	//炮弹类编辑
	$(".paodan_cont").dblclick(function(){
		$(".bianji").fadeIn(0);
		$(".bianji_F,.bianji_ZI1,.bianji_JF,.bianji_LC,.bianji_rk").fadeOut(0);
		$(".bianji_pd").fadeIn(0);
		$("#PD_VAL1").text("成员变量：1");
	})
	
	//己方飞机编辑入口
	$(".jifang_cont").dblclick(function(){
		$(".bianji").fadeIn(0);
		$(".bianji_F,.bianji_pd,.bianji_ZI1,.bianji_LC,.bianji_rk").fadeOut(0);
		$(".bianji_JF").fadeIn(0);
		$("#JF_VAL1").text("成员变量：1");
	})
	


	//返回模板
	$(".back_mb").click(function(){
		$(".bianji").fadeOut(0);
	})
	
	//编辑,外框
	$(".bianji_list").click(function(){
		$(".bianji_list").find(".bj_kuang").removeClass("bj_kuang_active");
		$(this).find(".bj_kuang").addClass("bj_kuang_active");
	})
	
	
	//编辑，变量
	$(".blList_jia1").click(function(){
		if($(".bjBL_list1").css("display") == "none"){
			$(".bjBL_list1").css("display","flex").fadeIn();
		}else{
			$(".bjBL_list2").css("display","flex").fadeIn();
		}
	})
	
	$(".blList_jia2").click(function(){
		$(".bjBL_list3").css("display","flex").fadeIn();
	})
	$(".blList_jia3").click(function(){
		$(".bjBL_list4").css("display","flex").fadeIn();
	})
	
	//上传图片
	$("#file_DJ1pic").change(function(){
		var obj = $("#file_DJ1pic")[0].files[0];
		var reader = new FileReader();
		//读取文件过程方法
        reader.onloadstart = function (e) {
//          console.log("开始读取....");
        }
        reader.onprogress = function (e) {
//          console.log("正在读取中....");
        }
        reader.onabort = function (e) {
//          console.log("中断读取....");
        }
        reader.onerror = function (e) {
//          console.log("读取异常....");
        }
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".file_pic_dj1").find("img").attr("src",this.result).fadeIn(0);
            $(".zi1_cont_r1").find("img").attr("src",this.result).fadeIn(0);
       	}
        reader.readAsDataURL(obj);
	})
	
	$("#file_JFpic").change(function(){
		var obj = $("#file_JFpic")[0].files[0];
		var reader = new FileReader();
		//读取文件过程方法
        reader.onloadstart = function (e) {
//          console.log("开始读取....");
        }
        reader.onprogress = function (e) {
//          console.log("正在读取中....");
        }
        reader.onabort = function (e) {
//          console.log("中断读取....");
        }
        reader.onerror = function (e) {
//          console.log("读取异常....");
        }
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".file_pic_jf").find("img").attr("src",this.result).fadeIn(0);
       		$(".jf_cont_r1").find("img").attr("src",this.result).fadeIn(0);
        }
        reader.readAsDataURL(obj);
	})
	$("#file_PDpic").change(function(){
		var obj = $("#file_PDpic")[0].files[0];
		var reader = new FileReader();
		//读取文件过程方法
        reader.onloadstart = function (e) {
//          console.log("开始读取....");
        }
        reader.onprogress = function (e) {
//          console.log("正在读取中....");
        }
        reader.onabort = function (e) {
//          console.log("中断读取....");
        }
        reader.onerror = function (e) {
//          console.log("读取异常....");
        }
        reader.onload = function (e) {
//          console.log("成功读取....");
            $(".file_pic_pd").find("img").attr("src",this.result).fadeIn(0);
       		$(".pd_cont_r1").find("img").attr("src",this.result).fadeIn(0);
        }
        reader.readAsDataURL(obj);
	})
	
	//炮弹触发操作对
	$(".cha_paodao").click(function(){
		$(".line_fccz_pd").fadeIn(0);
	})
	
	//入口触发操作对
	$(".cha_fccz_rk").click(function(){
		$("#RK_fccz").fadeIn(0);
	})
	
	
	
	
	//触发操作- 边框
	$(".CFCZ_cont_div").click(function(ev){
		var event = window.event || ev;
		event.cancelBubble = true;
		$(".CFCZ_cont_div").removeClass("CFCZ_cont_active");
		$(".CFCZ_cont_div").prev().removeClass("CFCZ_cont_active");
		$(".CFCZ_cont_div").find(".CFCZ_cont_jia").css("display","none");
		$(this).addClass("CFCZ_cont_active");
		$(".db_xuanze").css("display","none");
		$(this).find(".db_xuanze").css("display","inline-block");
		$(this).prev().addClass("CFCZ_cont_active");
		$(this).find(".CFCZ_cont_jia").css("display","inline-block");
		
		$(".bianji_list").find(".bj_kuang").removeClass("bj_kuang_active");
		$(this).parents(".bianji_list").find(".bj_kuang").addClass("bj_kuang_active");
	})
	$(document).click(function () {
        $(".CFCZ_cont_div").removeClass("CFCZ_cont_active");
        $(".CFCZ_cont_div").prev().removeClass("CFCZ_cont_active");
        $(".mb_class_cont").removeClass("contClass_active");  //取消类模板框
        $(".contClass_redkuang").css("border","solid 1px #cbd0d9");
        $(".CFCZ_cont_div").find(".CFCZ_cont_jia").css("display","none");//取消加号
        $(".create_ps").find("img").attr("src","images/icon-26.png");//灰色派生
		$(".create_ps").find("span").css("opacity",0.2);
		$(".create_ps").css("color","#bbbbbb");
				
		//菜单灰色
		$(".icon_tianchong").find("img").attr("src","images/icon-01.png");
		$(".icon_xiantiao").find("img").attr("src","images/icon-02.png");
		$(".icon_shanchu").find("img").attr("src","images/icon-03.png");
		$(".icon_fuzhi").find("img").attr("src","images/icon-04.png");
		$(".iconBox_dingceng").find("img").attr("src","images/icon-011.png");
		$(".iconBox_dongzuo").find("img").attr("src","images/icon-06.png");
		$(".iconBox_juanzhou").find("img").attr("src","images/icon-8.png");
		$(".iconBox_jingling").find("img").attr("src","images/icon-7.png");
		$(".changjing_left").find("img").attr("src","images/changjing_l2.png");
		
		$(".mbIocn_sc").find("img").attr("src","images/icon-03.png");
		$(".mbIocn_fz").find("img").attr("src","images/icon-04.png");
		$(".mbIocn_zt").find("img").attr("src","images/icon-05.png");
		
		//动画边框
		$(".donghua_cont").find(".donghua_cont_list").removeClass("donghua_cont_list_active");
		$(".donghua_menu .donghua_shanchu").find("img").attr("src","images/icon-03.png");
		$(".donghua_menu .donghua_fuzhi").find("img").attr("src","images/icon-04.png");
		$(".donghua_menu .donghua_yulan").find("img").attr("src","images/icon-31.png");
    });
	
		
	//演示
	var letGoindex = 0;
	$(".letsgo").click(function(){
		letGoindex++;
		if(letGoindex == 1){
			$(".ifram_box").fadeIn(0);
			$(".asdasd").fadeIn(0);
			$(".asdasd").attr("src","../spacewar/space_war01.html");
		}
		if(letGoindex == 2){
			$(".ifram_box").fadeIn(0);
			$(".asdasd").fadeIn(0);
			$(".asdasd").attr("src","../spacewar/space_war02.html");
		}
		if(letGoindex == 3){
			$(".ifram_box").fadeIn(0);
			$(".asdasd").fadeIn(0);
			$(".asdasd").attr("src","../spacewar/space_war03.html");
		}
	});
	$(".close_ifram").click(function(){
		$(".ifram_box").fadeOut(0);
	})
//	//监听键盘
//	$(window).bind('keypress',function(event){
//      if (event.keyCode == '27') {
//          $(".ifram_box").fadeOut(0);
//      }
//  });
	
	//触发操作部分
	var xinhang_m = "<div class='xinhang xinhang_active' data_tm='2'><div class='haha'></div><div class='db666Box'><a class='db666'>双击选择</a><div class='menu_bg'><a class='close_menuBox'></a><a class='menu_katong'></a><div class='menuBox'></div></div></div></div>";
	var xinhang_t = "<div class='xinhang xinhang_active' data_tm='1'><div class='haha'></div><div class='db666Box'><a class='db666'>双击选择</a><div class='menu_bg'><a class='close_menuBox'></a><a class='menu_katong'></a><div class='menuBox'></div></div></div></div>";
	var xinhang_wch = "<div class='xinhang xinhang_active' data_tm='2'><div class='haha'></div><div class='db666Box'><a class='db666'>双击选择</a><div class='menu_bg'><a class='close_menuBox'></a><a class='menu_katong'></a><div class='menuBox'></div></div></div></div>";
	//行首-触发
	var box1 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>独立对象</h1><ul class='menu_1'><li class='wutai'data-tm='duli'>舞台</li><li class='juanzhou'data-tm='duli'>背景卷轴</li><li class='duli'data-tm='duli'>得分文本框</li><li class='duli'data-tm='duli'>血量文本框</li><li class='duli'data-tm='duli'>信息文本框</li><li class='zanting'data-tm='duli'>暂停按钮</li></ul><h1><span class='menu_icon'></span>模板对象</h1><ul class='menu_1'><li class='moban'>敌方飞机</li><li class='moban'>敌方飞机1</li><li class='moban'>己方飞机</li><li class='moban'>己方飞机炮弹</li></ul><h1><span class='menu_icon'></span>成员变量</h1><ul class='menu_1'><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机1</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方炮弹</h2><ul class='menu_2'><li class='chengyuan'>速度</li></ul></li></ul><h1><span class='menu_icon'></span>全局变量</h1><ul class='menu_1'><li class='quanju'>得分</li></ul><h1><span class='menu_icon'></span>函数库</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>数学</h2><ul class='menu_2'><li class='hanshu'>取随机数于</li><li class='hanshu'>取绝对值</li><li class='hanshu'>平方根</li><li class='hanshu'>取整</li><li class='hanshu'>取余</li><li class='hanshu'>取x的y次方</li><li class='hanshu'>取正弦值</li><li class='hanshu'>取余弦值</li><li class='hanshu'>取正切值</li><li class='hanshu'>取反正弦值</li><li class='hanshu'>取反余弦值</li><li class='hanshu'>取反正切值</li><li class='hanshu'>取反余切值</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>日期时间</h2><ul class='menu_2'><li class='shijian'>当前日期（年月日）</li><li class='shijian'>当前年</li><li class='shijian'>当前月</li><li class='shijian'>当前日</li><li class='shijian'>当前时间（时分秒）</li><li class='shijian'>当前时</li><li class='shijian'>当前分</li><li class='shijian'>当前秒</li><li class='shijian'>当前毫秒</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>系统</h2><ul class='menu_2'><li><h3 class='menu_h3'><span class='menu_icon menu_icon2'></span>运行控制</h3><ul class='menu_3'><li class='shijian'>运行间隔（毫秒）</li></ul></li></ul></li></ul><h1><span class='menu_icon'></span>操作符</h1><ul class='menu_1'><li class='fu'>负</li></ul></div>";
				
	//行首-操作
	var box2 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>独立对象</h1><ul class='menu_1'><li class='wutai'data-tm='duli'>舞台</li><li class='juanzhou'data-tm='duli'>背景卷轴</li><li class='duli'data-tm='duli'>得分文本框</li><li class='duli'data-tm='duli'>血量文本框</li><li class='duli'data-tm='duli'>信息文本框</li><li class='zanting'data-tm='duli'>暂停按钮</li></ul><h1><span class='menu_icon'></span>模板对象</h1><ul class='menu_1'><li class='moban'>敌方飞机</li><li class='moban'>敌方飞机1</li><li class='moban'>己方飞机</li><li class='moban'>己方飞机炮弹</li></ul><h1><span class='menu_icon'></span>成员变量</h1><ul class='menu_1'><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机1</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方炮弹</h2><ul class='menu_2'><li class='chengyuan'>速度</li></ul></li></ul><h1><span class='menu_icon'></span>全局变量</h1><ul class='menu_1'><li class='quanju'>得分</li></ul><h1><span class='menu_icon'></span>函数库</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>数学</h2><ul class='menu_2'><li class='hanshu'>取随机数于</li><li class='hanshu'>取绝对值</li><li class='hanshu'>平方根</li><li class='hanshu'>取整</li><li class='hanshu'>取余</li><li class='hanshu'>取x的y次方</li><li class='hanshu'>取正弦值</li><li class='hanshu'>取余弦值</li><li class='hanshu'>取正切值</li><li class='hanshu'>取反正弦值</li><li class='hanshu'>取反余弦值</li><li class='hanshu'>取反正切值</li><li class='hanshu'>取反余切值</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>日期时间</h2><ul class='menu_2'><li class='shijian'>当前日期（年月日）</li><li class='shijian'>当前年</li><li class='shijian'>当前月</li><li class='shijian'>当前日</li><li class='shijian'>当前时间（时分秒）</li><li class='shijian'>当前时</li><li class='shijian'>当前分</li><li class='shijian'>当前秒</li><li class='shijian'>当前毫秒</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>系统</h2><ul class='menu_2'><li class='chuangjian'>创建模板对象</li><li><h3 class='menu_h3'><span class='menu_icon menu_icon2'></span>运行控制</h3><ul class='menu_3'><li class='shijian'>运行间隔（毫秒）</li><li class='bukezeng'>暂停运行</li><li class='bukezeng'>恢复运行</li></ul></li><li><h3 class='menu_h3'><span class='menu_icon menu_icon2'></span>场景入口选择</h3><ul class='menu_3'><li>场景1</li></ul></li><li><h3 class='menu_h3'><span class='menu_icon menu_icon2'></span>音乐音效</h3><ul class='menu_3'><li class='openMusic'>播放音乐</li><li class='openMusic'>播放音效</li><li class='bukezeng'>停止音乐</li><li class='bukezeng'>停止音效</li><li class='bukezeng'>暂停音乐</li><li class='bukezeng'>暂停音效</li><li class='bukezeng'>停止全部声音</li></ul></li></ul></li></ul><h1><span class='menu_icon'></span>操作符</h1><ul class='menu_1'><li class='fu'>负</li></ul></div>";
				
	//前置为：2（模板对象），触发中
	var box3 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='mobanXZ'>碰撞于</li><li class='shijian'>x轴位置</li><li class='shijian'>y轴位置</li><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='shijian'>x轴全局位置</li><li class='shijian'>y轴全局位置</li><li class='mobanXZ'>取得子对象</li><li class='bukezeng'>可见</li><li class='bukezeng'>不可见</li><li class='shijian'>旋转角度</li><li class='shijian'>倾斜角度</li><li class='shijian'>横向缩放比例</li><li class='shijian'>纵向缩放比例</li></ul><h1><span class='menu_icon'></span>系统事件</h1><ul class='menu_1'><li class='bukezeng'>鼠标移动</li><li class='bukezeng'>单击</li><li class='bukezeng'>双击</li><li class='bukezeng'>右键单击</li><li class='bukezeng'>右键双击</li><li class='bukezeng'>滚轮滚动</li><li class='bukezeng'>拖拽移动</li><li class='bukezeng'>鼠标悬停进入</li><li class='bukezeng'>鼠标悬停离开</li></ul></div>";
				
	//前置为：2（模板对象），操作中
	var box4 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>x轴位置</li><li class='shijian'>y轴位置</li><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='shijian'>x轴全局位置</li><li class='shijian'>y轴全局位置</li><li class='mobanXZ'>取得子对象</li><li class='shijian'>旋转角度</li><li class='shijian'>倾斜角度</li><li class='shijian'>横向缩放比例</li><li class='shijian'>纵向缩放比例</li></ul><h1><span class='menu_icon'></span>执行动作</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>立即执行</h2><ul class='menu_2'><li class='hanshu'>设定x轴位置</li><li class='hanshu'>设定y轴位置</li><li class='hanshu'>设定层级</li><li class='bukezeng'>销毁自己</li><li class='bukezeng'>设为可见</li><li class='bukezeng'>设为不可见</li><li class='mobanXZ'>以子对象加入到</li><li class='openPic'>更改图片为</li><li class='hanshu'>旋转角度为</li><li class='hanshu'>倾斜角度为</li><li class='hanshu'>横向缩放为</li><li class='hanshu'>纵向缩放为</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>延续性动作</h2><ul class='menu_2'><li class='donghuaXZ'>播放动画</li><li class='hanshu'>直线运动到</li><li class='hanshu'>直线位移</li><li class='hanshu'>跳跃到</li><li class='hanshu'>跳跃位移</li><li class='hanshu'>闪烁</li><li class='hanshu'>淡入</li><li class='hanshu'>淡出</li><li class='hanshu'>放大</li><li class='hanshu'>缩小</li><li class='hanshu'>横向缩放</li><li class='hanshu'>纵向缩放</li><li class='hanshu'>倾斜</li><li class='hanshu'>横向倾斜</li><li class='hanshu'>纵向倾斜</li></ul></li></ul></div>";

	//前置为：11（舞台），触发中
	var box5 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='mobanXZ'>取得子对象</li></ul><h1><span class='menu_icon'></span>系统事件</h1><ul class='menu_1'><li class='bukezeng'>鼠标移动</li><li class='bukezeng'>单击</li><li class='bukezeng'>双击</li><li class='bukezeng'>右键单击</li><li class='bukezeng'>右键双击</li><li class='bukezeng'>滚轮滚动</li><li class='bukezeng'>拖拽移动</li><li class='bukezeng'>鼠标悬停进入</li><li class='bukezeng'>鼠标悬停离开</li></ul></div>";

	//前置为：11（舞台），操作中
	var box6 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='mobanXZ'>取得子对象</li></ul></div>";

	//前置为：12（卷轴），操作中
	var box8 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>x轴位置</li><li class='shijian'>y轴位置</li><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='shijian'>x轴全局位置</li><li class='shijian'>y轴全局位置</li><li class='mobanXZ'>取得子对象</li><li class='shijian'>旋转角度</li><li class='shijian'>倾斜角度</li><li class='shijian'>横向缩放比例</li><li class='shijian'>纵向缩放比例</li></ul><h1><span class='menu_icon'></span>执行动作</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>立即执行</h2><ul class='menu_2'><li class='hanshu'>设定x轴位置</li><li class='hanshu'>设定y轴位置</li><li class='hanshu'>设定层级</li><li class='bukezeng'>销毁自己</li><li class='bukezeng'>设为可见</li><li class='bukezeng'>设为不可见</li><li class='mobanXZ'>以子对象加入到</li><li class='openPic'>更改图片为</li><li class='hanshu'>旋转角度为</li><li class='hanshu'>倾斜角度为</li><li class='hanshu'>横向缩放为</li><li class='hanshu'>纵向缩放为</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>延续性动作</h2><ul class='menu_2'><li class='donghuaXZ'>播放动画</li><li class='hanshu'>直线运动到</li><li class='hanshu'>直线位移</li><li class='hanshu'>跳跃到</li><li class='hanshu'>跳跃位移</li><li class='hanshu'>闪烁</li><li class='hanshu'>淡入</li><li class='hanshu'>淡出</li><li class='hanshu'>放大</li><li class='hanshu'>缩小</li><li class='hanshu'>横向缩放</li><li class='hanshu'>纵向缩放</li><li class='hanshu'>倾斜</li><li class='hanshu'>横向倾斜</li><li class='hanshu'>纵向倾斜</li></ul></li></ul><h1><span class='menu_icon'></span>控件处理</h1><ul class='menu_1'><li class='bukezeng'>开始滚动</li><li class='bukezeng'>停止滚动</li><li class='openPic'>设置背景</li><li class='hanshu'>背景滚动开关</li><li class='hanshu'>滚动方向</li><li class='hanshu'>滚动速度</li></ul></div>";

	//前置为：13（文本框），触发中
	var box9 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>x轴位置</li><li class='shijian'>y轴位置</li><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='mobanXZ'>取得子对象</li><li class='bukezeng'>可见</li><li class='bukezeng'>不可见</li><li class='shijian'>旋转角度</li><li class='shijian'>倾斜角度</li><li class='shijian'>横向缩放比例</li><li class='shijian'>纵向缩放比例</li></ul><h1><span class='menu_icon'></span>控件事件</h1><ul class='menu_1'><li class='bukezeng'>单击文本框</li></ul></div>";

	//前置为：13（文本框），操作中
	var box10 ="<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>x轴位置</li><li class='shijian'>y轴位置</li><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='mobanXZ'>取得子对象</li><li class='bukezeng'>可见</li><li class='bukezeng'>不可见</li><li class='shijian'>旋转角度</li><li class='shijian'>倾斜角度</li><li class='shijian'>横向缩放比例</li><li class='shijian'>纵向缩放比例</li></ul><h1><span class='menu_icon'></span>执行动作</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>立即执行</h2><ul class='menu_2'><li class='hanshu'>设定x轴位置</li><li class='hanshu'>设定y轴位置</li><li class='hanshu'>设定层级</li><li class='bukezeng'>销毁自己</li><li class='bukezeng'>设为可见</li><li class='bukezeng'>设为不可见</li><li class='mobanXZ'>以子对象加入到</li><li class='openPic'>更改图片为</li><li class='hanshu'>旋转角度为</li><li class='hanshu'>倾斜角度为</li><li class='hanshu'>横向缩放为</li><li class='hanshu'>纵向缩放为</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>延续性动作</h2><ul class='menu_2'><li class='hanshu'>直线运动到</li><li class='hanshu'>直线位移</li><li class='hanshu'>跳跃到</li><li class='hanshu'>跳跃位移</li><li class='hanshu'>闪烁</li><li class='hanshu'>淡入</li><li class='hanshu'>淡出</li><li class='hanshu'>放大</li><li class='hanshu'>缩小</li><li class='hanshu'>横向缩放</li><li class='hanshu'>纵向缩放</li><li class='hanshu'>倾斜</li><li class='hanshu'>横向倾斜</li><li class='hanshu'>纵向倾斜</li></ul></li></ul><h1><span class='menu_icon'></span>控件处理</h1><ul class='menu_1'><li class='shezhitxt'>设置文本</li><li class='shijian2'>设置字体</li><li class='shijian'>设置字号</li><li class='shijian'>字体颜色</li><li class='hanshu'>自动换行</li></ul></div>";
				
	//前置为：14（按钮），触发中
	var box11 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>对象状态</h1><ul class='menu_1'><li class='shijian'>x轴位置</li><li class='shijian'>y轴位置</li><li class='shijian'>宽度</li><li class='shijian'>高度</li><li class='shijian'>鼠标x位置</li><li class='shijian'>鼠标y位置</li><li class='mobanXZ'>取得子对象</li><li class='bukezeng'>可见</li><li class='bukezeng'>不可见</li><li class='shijian'>旋转角度</li><li class='shijian'>倾斜角度</li><li class='shijian'>横向缩放比例</li><li class='shijian'>纵向缩放比例</li></ul><h1><span class='menu_icon'></span>控件事件</h1><ul class='menu_1'><li class='bukezeng'>按钮按下</li><li class='bukezeng'>鼠标悬停</li></ul></div>";
				
	//前置为：9（模板对象选择），触发中
	var box13 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>模板对象</h1><ul class='menu_1'><li class='moban'>敌方飞机</li><li class='moban'>敌方飞机1</li><li class='moban'>己方飞机</li><li class='moban'>己方飞机炮弹</li></ul></div>";
				
	//前置为：3（变量）/5（数字类型）/15（字串型），触发中
	var box14 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>操作符</h1><ul class='menu_1'><li class='cz_xing'>加</li><li class='cz_xing'>减</li><li class='cz_xing'>乘</li><li class='cz_xing'>除</li><li class='bj_xing'>大于</li><li class='bj_xing'>小于</li><li class='bj_xing'>等于</li><li class='bj_xing'>不等于</li><li class='bj_xing'>大于等于</li><li class='bj_xing'>小于等于</li></ul></div>";
				
	//前置为：3（变量）/5（数字类型）15（字串型），操作中
	var box15 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>操作符</h1><ul class='menu_1'><li class='cz_xing'>加</li><li class='cz_xing'>减</li><li class='cz_xing'>乘</li><li class='cz_xing'>除</li><li class='cz_xing'>负</li><li class='fz_xing'>赋值为</li><li class='fz_xing'>增加</li><li class='fz_xing'>减少</li><li class='fz_xing'>乘为</li><li class='fz_xing'>除为</li></ul></div>";
				
	//前置为：4（带参数的函数）/8（运算型操作符）/16（比较型操作符）/17（赋值型操作符），触发/操作中
	var box16 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>独立对象</h1><ul class='menu_1'><li class='wutai'data-tm='duli'>舞台</li><li class='juanzhou'data-tm='duli'>背景卷轴</li><li class='duli'data-tm='duli'>得分文本框</li><li class='duli'data-tm='duli'>血量文本框</li><li class='duli'data-tm='duli'>信息文本框</li><li class='zanting'data-tm='duli'>暂停按钮</li></ul><h1><span class='menu_icon'></span>模板对象</h1><ul class='menu_1'><li class='moban'>敌方飞机</li><li class='moban'>敌方飞机1</li><li class='moban'>己方飞机</li><li class='moban'>己方飞机炮弹</li></ul><h1><span class='menu_icon'></span>成员变量</h1><ul class='menu_1'><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机1</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方炮弹</h2><ul class='menu_2'><li class='chengyuan'>速度</li></ul></li></ul><h1><span class='menu_icon'></span>全局变量</h1><ul class='menu_1'><li class='quanju'>得分</li></ul><h1><span class='menu_icon'></span>函数库</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>数学</h2><ul class='menu_2'><li class='hanshu'>取随机数于</li><li class='hanshu'>取绝对值</li><li class='hanshu'>平方根</li><li class='hanshu'>取整</li><li class='hanshu'>取余</li><li class='hanshu'>取x的y次方</li><li class='hanshu'>取正弦值</li><li class='hanshu'>取余弦值</li><li class='hanshu'>取正切值</li><li class='hanshu'>取反正弦值</li><li class='hanshu'>取反余弦值</li><li class='hanshu'>取反正切值</li><li class='hanshu'>取反余切值</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>日期时间</h2><ul class='menu_2'><li class='shijian'>当前日期（年月日）</li><li class='shijian'>当前年</li><li class='shijian'>当前月</li><li class='shijian'>当前日</li><li class='shijian'>当前时间（时分秒）</li><li class='shijian'>当前时</li><li class='shijian'>当前分</li><li class='shijian'>当前秒</li><li class='shijian'>当前毫秒</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>系统</h2><ul class='menu_2'><li><h3 class='menu_h3'><span class='menu_icon menu_icon2'></span>运行控制</h3><ul class='menu_3'><li class='shijian'>运行间隔（毫秒）</li></ul></li></ul></li></ul></div>";
				
	//前置为  shijian, shijian2
	var inputBox = "<div class='menu_chushi'><div class='inpBox'><input class='inp_txt' type='text'value=''data_inp='inp_txt'/><button class='inpBox_btn'>确定</button></div><h1><span class='menu_icon'></span>独立对象</h1><ul class='menu_1'><li class='wutai'data-tm='duli'>舞台</li><li class='juanzhou'data-tm='duli'>背景卷轴</li><li class='duli'data-tm='duli'>得分文本框</li><li class='duli'data-tm='duli'>血量文本框</li><li class='duli'data-tm='duli'>信息文本框</li><li class='zanting'data-tm='duli'>暂停按钮</li></ul><h1><span class='menu_icon'></span>模板对象</h1><ul class='menu_1'><li class='moban'>敌方飞机</li><li class='moban'>敌方飞机1</li><li class='moban'>己方飞机</li><li class='moban'>己方飞机炮弹</li></ul><h1><span class='menu_icon'></span>成员变量</h1><ul class='menu_1'><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>敌方飞机1</h2><ul class='menu_2'><li class='chengyuan'>血量</li><li class='chengyuan'>速度</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方飞机</h2><ul class='menu_2'><li class='chengyuan'>血量</li></ul></li><li><h2 class='menu_h2 heihei'><span class='menu_icon'></span>己方炮弹</h2><ul class='menu_2'><li class='chengyuan'>速度</li></ul></li></ul><h1><span class='menu_icon'></span>全局变量</h1><ul class='menu_1'><li class='quanju'>得分</li></ul><h1><span class='menu_icon'></span>函数库</h1><ul class='menu_1'><li><h2 class='menu_h2'><span class='menu_icon'></span>数学</h2><ul class='menu_2'><li class='hanshu'>取随机数于</li><li class='hanshu'>取绝对值</li><li class='hanshu'>平方根</li><li class='hanshu'>取整</li><li class='hanshu'>取余</li><li class='hanshu'>取x的y次方</li><li class='hanshu'>取正弦值</li><li class='hanshu'>取余弦值</li><li class='hanshu'>取正切值</li><li class='hanshu'>取反正弦值</li><li class='hanshu'>取反余弦值</li><li class='hanshu'>取反正切值</li><li class='hanshu'>取反余切值</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>日期时间</h2><ul class='menu_2'><li class='shijian'>当前日期（年月日）</li><li class='shijian'>当前年</li><li class='shijian'>当前月</li><li class='shijian'>当前日</li><li class='shijian'>当前时间（时分秒）</li><li class='shijian'>当前时</li><li class='shijian'>当前分</li><li class='shijian'>当前秒</li><li class='shijian'>当前毫秒</li></ul></li><li><h2 class='menu_h2'><span class='menu_icon'></span>系统</h2><ul class='menu_2'><li><h3 class='menu_h3'><span class='menu_icon menu_icon2'></span>运行控制</h3><ul class='menu_3'><li class='shijian'>运行间隔（毫秒）</li></ul></li></ul></li></ul><h1><span class='menu_icon'></span>操作符</h1><ul class='menu_1'><li class='fu'>负</li></ul></div>";
				
	//前置为  chuangjian 
	var box17 = "<div class='menu_chushi'><h1><span class='menu_icon'></span>模板对象</h1><ul class='menu_1'><li class='moban'>敌方飞机</li><li class='moban'>敌方飞机1</li><li class='moban'>己方飞机</li><li class='moban'>己方飞机炮弹</li></ul></div>";

	//设置文本 == shezhitxt
	var box18 = "<div class='menu_chushi'><div class='inpBox'><input class='inp_txt' type='text'value=''data_inp='inp_txt'/><button class='inpBox_btn'>确定</button></div></div>";
				
	//现有动画列表
	var boxDonghua = "<div class='menu_chushi'><h1><span class='menu_icon'></span>动画列表</h1><ul class='menu_1'><li class='donghuaList'>敌方飞机1爆炸</li><li class='donghuaList'>己方飞机爆炸</li></ul></div>";
				
	//选有音乐列表
	var boxMusic = "<div class='menu_chushi'><div class='file_music'><a>选择音乐</a><input type='file'class='music'value='' accept='audio/*'/></div></div>";

//模板对象 == moban
//变量 == chengyuan
//全局变量 == quanju
//带参数的函数 == hanshu
//数字类型 == shijian
//子串类型 == shijian2
//不可增加后续元素 == bukyzeng
//打开文件，音乐 == openMusic
//运算型操作符 == cz_xing
//模板对象选择 == mobanXZ
//选择动画面板 == donghuaXZ
//舞台 == wutai
//卷轴 == juanzhou
//文本框 == duli
//暂停按钮 == zanting
//比较性操作符 == bj_xing
//赋值型操作符 == fz_xing
//创建模板对象  == chuangjian

	$(".kuangkuang").click(function(){
		$(".kuangkuang").removeClass("kuangkuang_active");
		$(".kk_title").removeClass("kkTitle_active");
		$(this).addClass("kuangkuang_active");
		$(this).find(".kk_title").addClass("kkTitle_active");
	})
	
	$(".xinhang").click(function(){
		$(".xinhang").removeClass("xinhang_active");
		$(this).addClass("xinhang_active");
	})
	
	//嵌套-入口
	$(".qiantao_RK").click(function(){
		$("#rk_CZK").css({height:400});
		$(".rk_fccz").fadeIn(0);
	})
	
	//嵌套- 子类1
	$(".qiantao_ZI1").click(function(){
		$("#zi1_CZK").css({height:350,paddingTop:320,paddingBottom:120});
		$(".zi1_fccz").fadeIn(0);
	})
	
	//ok - 父类
	$(".ok_F").click(function(){
//		if($(this).hasClass("kk_title_ok_active")) {
//			$(this).removeClass("kk_title_ok_active");
//		}else{
			$(this).addClass("kk_title_ok_active");
//		}
		$(".line_fccz2_F").fadeIn(0);
		
		$("#DF_VAL2").text("触发操作：1")
		$("#ZI_VAL2").text("触发操作：1");
	})
	
	//炮弹
	$(".ok_PD").click(function(){
//		if($(this).hasClass("kk_title_ok_active")) {
//			$(this).removeClass("kk_title_ok_active");
//		}else{
			$(this).addClass("kk_title_ok_active");
//		}
		$(".line_fccz2_PD").fadeIn(0);
		$("#PD_VAL2").text("触发操作：2");
	})
	
	//己方飞机OK
	$("#OK_JFJF").click(function(){
		$(this).addClass("kk_title_ok_active222");
		$("#JF_VAL2").text("触发操作：2")
	})
	
	//子1插触发操作
	 var zi1zi1 = 0;
	 $(".cha_fccz_ZI1").click(function(){
	 	zi1zi1++;
	 	if(zi1zi1 == 1){
	 		$("#zi1_FCCZ").fadeIn(0);
	 	}else{
	 		$("#zi1_FCCZ2").fadeIn(0);
	 		$("#ZI_VAL2").text("触发操作：3");
	 	}
	 })
	
	//己方
	$(".qiantao_JF").click(function(){
		$("#jf_CZK").css({height:550,paddingBottom:450});
		$(".jf_fccz").fadeIn(0);
	})
	
	//插入己方触发操作
	$(".cha_JF_FCCZ").click(function(){
		$("#JF_FCCZ").fadeIn(0);
	})
	
	
//	//敌方1编辑- 穿帮事件
//	$(".bianji_ZI1").find(".chuanbang").click(function(){
//		
//	})
	
	
	var leixing;   //存放新行类型
	
	//插新行
	$(".cha_xinhang").click(function(){
		$(".xinhang").removeClass("xinhang_active");
		leixing = $(".kuangkuang.kuangkuang_active").attr("data_tm");
		console.log("插入新行的类型："+leixing);
		if(leixing == 1){
			$(".kuangkuang.kuangkuang_active").append(xinhang_t);
		}else{
			$(".kuangkuang.kuangkuang_active").append(xinhang_m);
		}
		
		//双击选择
		db666();
	})
	
	//插入完成后
	$(".success_after").click(function(){
		$(".xinhang").removeClass("xinhang_active");
		leixing = $(".kuangkuang.kuangkuang_active").attr("data_tm");
		if(leixing == 1){
			$(".kuangkuang.kuangkuang_active").append(xinhang_t);
		}else{
			$(".kuangkuang.kuangkuang_active").append(xinhang_wch);
		}
		var thisT_wch = "<a class='thisT_wch'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成后：<a>";
		$(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(thisT_wch);
		
		db666();
	})
	
	//双击选择
	db666();
	function db666(){
		$(".xinhang_active").find(".db666").dblclick(function(){
			$(".menuBox").html("");
			var tmd = $(this).parents(".xinhang_active").attr("data_tm");
			console.log(tmd);
			if(tmd == 1){
				$(".menu_bg").fadeIn(0);
				$(this).next(".menu_bg").find(".menuBox").append(box1);
				$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
				$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
				data_t();
				hhh();
			}
			else{
				$(".menu_bg").fadeIn(0);
				$(this).next(".menu_bg").find(".menuBox").append(box2);
				$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
				$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
				data_m();
				xxx();
			}
		})
	}
	
	
	function hhh() {
		//取消盒子默认事件
		$(".menu_bg").click(function(ev){
			var event = window.event || ev;
			event.cancelBubble = true;
		})
		
		//h1
		$(".menuBox").find("h1").click(function() {
			$(this).next(".menu_1").toggle();
			if($(this).find("span").hasClass("menu_icon_active")) {
				$(this).find("span").removeClass("menu_icon_active");
			} else {
				$(this).find("span").addClass("menu_icon_active");
			}
		})
		
		//菜单中hover
		$(".menu_1").find("li").hover(function() {
			$(".menu_1").find("li").css("background-color","");
			$(this).css({"background-color":"#FCE8C6","cursor":"pointer"});
		});
		
		//h2
		$(".menu_h2").click(function(event) {
			event.stopPropagation();
			$(this).next(".menu_2").toggle();
			if($(this).find("span").hasClass("menu_icon_active")) {
				$(this).find("span").removeClass("menu_icon_active");
			} else {
				$(this).find("span").addClass("menu_icon_active");
			}
		});
		//h3
		$(".menu_h3").click(function(event) {
			event.stopPropagation();
			$(this).next(".menu_3").toggle();
			if($(this).find("span").hasClass("menu_icon_active")) {
				$(this).find("span").removeClass("menu_icon_active");
			} else {
				$(this).find("span").addClass("menu_icon_active");
			}
		});

		$(".menu_chushi").find("li").click(function(event) {
			event.stopPropagation();
			leixing = $(this).attr("class");
			console.log(leixing);
			data_t();

			var t = $(this).text();
			if(leixing == "moban" || leixing == "duli" || leixing == "wutai" || leixing == "juanzhou" || leixing == "zanting"){
				var thisT_a = "<a class='thisT_a'>" + t + "<a>";
			}else if(leixing == "quanju"){
				var thisT_a = "<a class='thisT_q'>" + t + "<a>";
			}else if(leixing == "chengyuan"){
				var chengyuanNM = $(this).parent().prev(".heihei").text();
//				console.log(chengyuanNM);
				var thisT_a = "<a class='thisT_a'>" + chengyuanNM + t + "<a>";
			}else{
				var thisT_a = "<a class='thisT_b'>" + t + "<a>";
			}
						
			$(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(thisT_a);

			//积木动画
			$(".menu_bg").fadeOut(0);
			$(".db666").fadeOut(0,function(){
				$(".db666").fadeIn(0).addClass("animated fadeInDownBig");
			})
			$(".menu_bg").delay(800).fadeIn();
		})

		$(".inpBox").find(".inpBox_btn").click(function() {
			var inpNum = $(".inpBox").find("input").val();
			leixing = $(".inpBox").find("input").attr("data_inp");
			data_t();
			console.log(leixing);
			console.log(inpNum);
			if(inpNum == ""){
				var thisT_a = "<a class='thisT_c'>空白<a>";
			}else{
				var thisT_a = "<a class='thisT_c'>" + inpNum + "<a>";		
			}
			$(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(thisT_a);
			
			//积木动画
			$(".menu_bg").fadeOut(0);
			$(".db666").fadeOut(0,function(){
				$(".db666").fadeIn(0).addClass("animated fadeInDownBig");
			})
			$(".menu_bg").delay(800).fadeIn();
		
		})

		$(".menu_bg>.close_menuBox").click(function() {
			$(".db666Box").remove();
		})
	}

	function xxx() {
		//取消盒子默认事件
		$(".menu_bg").click(function(ev){
			var event = window.event || ev;
			event.cancelBubble = true;
		})
		//h1
		$(".menuBox").find("h1").click(function() {
			$(this).next(".menu_1").toggle();
			if($(this).find("span").hasClass("menu_icon_active")) {
				$(this).find("span").removeClass("menu_icon_active");
			} else {
				$(this).find("span").addClass("menu_icon_active");
			}
		})
		
		//菜单中hover
		$(".menu_1").find("li").hover(function() {
			$(".menu_1").find("li").css("background-color","");
			$(this).css({"background-color":"#FCE8C6","cursor":"pointer"});
		});
		
		
		//h2
		$(".menu_h2").click(function(event) {
			event.stopPropagation();
			$(this).next(".menu_2").toggle();
			if($(this).find("span").hasClass("menu_icon_active")) {
				$(this).find("span").removeClass("menu_icon_active");
			} else {
				$(this).find("span").addClass("menu_icon_active");
			}
		});
		//h3
		$(".menu_h3").click(function(event) {
			event.stopPropagation();
			$(this).next(".menu_3").toggle();
			if($(this).find("span").hasClass("menu_icon_active")) {
				$(this).find("span").removeClass("menu_icon_active");
			} else {
				$(this).find("span").addClass("menu_icon_active");
			}
		});

		$(".menu_chushi").find("li").click(function(event) {
			event.stopPropagation();
			leixing = $(this).attr("class");
			console.log(leixing);
			data_m();
			
			var t = $(this).text();
			if(leixing == "moban" || leixing == "duli" || leixing == "wutai" || leixing == "juanzhou" || leixing == "zanting"){
				var thisT_a = "<a class='thisT_a'>" + t + "<a>";
			}else if(leixing == "openMusic"){
				var thisT_a = "<a class='thisT_b'>" + t + "<a>";
				$(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(boxMusic);
				setTimeout(xuanzeYY(),100);
				function xuanzeYY(){
					$(".music").click(function(){
						console.log(1);
					})
					$(".music").change(function(e){
						var obj = $(".music")[0].files[0];
						var reader = new FileReader();
				        reader.onload = function (e) {	
				           var thisT_music = "<a class='thisT_b'>" + obj.name + "<a>";
				           $(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(thisT_music);
				           $(".file_music").remove();
				       	}
				        reader.readAsDataURL(obj);
				        
					})

				}
			}else if(leixing == "chengyuan"){
				var chengyuanNM = $(this).parent().prev(".heihei").text();
//				console.log(chengyuanNM);
				var thisT_a = "<a class='thisT_a'>" + chengyuanNM + t + "<a>";
			}else if(leixing == "quanju"){
				var thisT_a = "<a class='thisT_q'>" + t + "<a>";
			}else{
				var thisT_a = "<a class='thisT_b'>" + t + "<a>";
			}

			$(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(thisT_a);
				
			//积木动画
			$(".menu_bg").fadeOut(0);
			$(".db666").fadeOut(0,function(){
				$(".db666").fadeIn(0).addClass("animated fadeInDownBig");
			})
			$(".menu_bg").delay(800).fadeIn();
		})

		$(".inpBox").find(".inpBox_btn").click(function() {
			var inpNum = $(".inpBox").find("input").val();
			leixing = $(".inpBox").find("input").attr("data_inp");
			data_m();
			console.log(inpNum);
			
			if(inpNum == ""){
				var thisT_a = "<a class='thisT_c'>空白<a>";
			}else{
				var thisT_a = "<a class='thisT_c'>" + inpNum + "<a>";		
			}
			$(".kuangkuang.kuangkuang_active").find(".xinhang_active>.haha").append(thisT_a);
		
			//积木动画
			$(".menu_bg").fadeOut(0);
			$(".db666").fadeOut(0,function(){
				$(".db666").fadeIn(0).addClass("animated fadeInDownBig");
			})
			$(".menu_bg").delay(800).fadeIn();	
		})
		
		$(".menu_bg>.close_menuBox").click(function() {
			$(".db666Box").remove();
		})
	}

	function data_t() {
		if(leixing == "moban") {
			$(".menuBox").html("");
			$(".menuBox").append(box3);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "chengyuan") {
			$(".menuBox").html("");
			$(".menuBox").append(box14);
			//$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "quanju") {
			$(".menuBox").html("");
			$(".menuBox").append(box14);
			//$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "hanshu") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "shijian") {
			$(".menuBox").html("");
			$(".menuBox").append(box14);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "bukezeng") {
			$(".menuBox").html("");
			$(".db666Box").remove();
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
		}
		if(leixing == "openMusic") {
			$(".menuBox").html("");
			$(".db666Box").remove();
		}
		if(leixing == "openPic") {
			$(".menuBox").html("");
			$(".db666Box").remove();
		}
		if(leixing == "cz_xing") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "mobanXZ") {
			$(".menuBox").html("");
			$(".menuBox").append(box13);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "donghuaXZ") {
			//$(".menuBox").html("");
			//$(".menuBox").append(box13);
		}
		if(leixing == "wutai") {
			$(".menuBox").html("");
			$(".menuBox").append(box5);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "juanzhou") {
			$(".menuBox").html("");
			$(".menuBox").append(box8);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "duli") {
			$(".menuBox").html("");
			$(".menuBox").append(box9);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "zanting") {
			$(".menuBox").html("");
			$(".menuBox").append(box11);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "shijian2") {
			$(".menuBox").html("");
			$(".menuBox").append(box14);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "bj_xing") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "fz_xing") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "inp_txt") {
			$(".menuBox").html("");
			$(".menuBox").append(box15);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "shezhitxt") {
			$(".menuBox").html("");
			$(".menuBox").append(box18);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			hhh();
		}
		if(leixing == "donghuaList") {
			$(".menuBox").html("");
			$(".db666Box").remove();
		}

	}

	function data_m() {
		if(leixing == "moban") {
			$(".menuBox").html("");
			$(".menuBox").append(box4);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "chengyuan") {
			$(".menuBox").html("");
			$(".menuBox").append(box15);
			//$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "quanju") {
			$(".menuBox").html("");
			$(".menuBox").append(box15);
			//$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "hanshu") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "shijian") {
			$(".menuBox").html("");
			$(".menuBox").append(box15);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "bukezeng") {
			$(".menuBox").html("");
			$(".db666Box").remove();
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
		}
		if(leixing == "openMusic") {
			$(".menuBox").html("");
			$(".db666Box").remove();
		}
		if(leixing == "openPic") {
			$(".menuBox").html("");
			$(".db666Box").remove();
		}
		if(leixing == "cz_xing") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "donghuaXZ") {
			$(".menuBox").html("");
			$(".menuBox").append(boxDonghua);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "wutai") {
			$(".menuBox").html("");
			$(".menuBox").append(box6);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "juanzhou") {
			$(".menuBox").html("");
			$(".menuBox").append(box8);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "duli") {
			$(".menuBox").html("");
			$(".menuBox").append(box10);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "shijian2") {
			$(".menuBox").html("");
			$(".menuBox").append(box15);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "bj_xing") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "fz_xing") {
			$(".menuBox").html("");
			//$(".menuBox").append(box16);
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "chuangjian") {
			$(".menuBox").html("");
			$(".menuBox").append(box17);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "inp_txt") {
			$(".menuBox").html("");
			$(".menuBox").append(box14);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "shezhitxt") {
			$(".menuBox").html("");
			$(".menuBox").append(box18);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		if(leixing == "fu"){
			$(".menuBox").html("");
			$(".menuBox").append(inputBox);
			$(".menu_chushi").find("h1").eq(0).next(".menu_1").slideDown(0);
			$(".menu_chushi").find("h1").eq(0).find("span").addClass("menu_icon_active");
			xxx();
		}
		
		if(leixing == "donghuaList") {
			$(".menuBox").html("");
			$(".db666Box").remove();
		}
		
	}
})
