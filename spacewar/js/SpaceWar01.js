/*
飞机大战示例代码
*/

//引擎初始化
Laya.init(480, 622, Laya.WebGL);
Laya.stage.scaleMode = "noscale";
Laya.stage.alignH = "center";
Laya.stage.screenMode = "none";
Laya.stage.bgColor = "#ffffff";
//Laya.Stat.show(0, 50);

//通用类继承
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var MAX_ZORDER = 100;

//全局变量声明
var score;
var hpLabel,infoLabel,scoreLabel,pauseBtn,scroll1;			//独立对象
var scene1_node;						//scene1 主循环caller，测试使用Node不成功，使用Sprite OK
var Enemy_jet1_box;						//敌方飞机1 容器。每种已经创建对象的类均有一个容器，容器名称约定：类对象名_box
var My_jet_box;							//己方飞机容器
var My_bullet_box;						//己方飞机炮弹容器
var scene1_box_array = new Array();

//载入图集，进入scene1入口 
//注意：工具中可以只使用单张图片，生成脚本时，将单张图片合并为图集。图集应有最大尺寸，每个场景生成一个和多个图集。这样场景入口均以load图集方式首次进入。
Laya.loader.load("res/atlas/war.json", Laya.Handler.create(this, Scene1), null, Laya.Loader.ATLAS);

//场景1入口
function Scene1() {
	//全局变量赋初值
	score=0;
	scene1_node = new Laya.Sprite();
	Laya.stage.addChild(scene1_node);
	Enemy_jet1_box = new Laya.Sprite();
	My_jet_box = new Laya.Sprite();
	My_bullet_box = new Laya.Sprite();
	scene1_box_array = [Enemy_jet1_box, My_jet_box, My_bullet_box];
	
	//动画模板
	Laya.Animation.createFrames(["war/enemy1_down1.png", "war/enemy1_down2.png", "war/enemy1_down3.png", "war/enemy1_down4.png"], "enemy1_down");
	Laya.Animation.createFrames(["war/enemy2_down1.png", "war/enemy2_down2.png", "war/enemy2_down3.png", "war/enemy2_down4.png"], "enemy2_down");
	Laya.Animation.createFrames(["war/hero_down1.png", "war/hero_down2.png", "war/hero_down3.png", "war/hero_down4.png"], "hero_down");
	//Laya.Animation.createFrames(["war/hero_fly1.png", "war/hero_fly2.png"], "hero_fly");		//己方飞机先不用动画
	
	//独立对象
	//背景卷轴滚动
	//注意：背景卷轴先在场景页中设置滚动属性，再于场景入口中书写“启动滚动”逻辑。滚动代码由工具自己生成。
	scroll1=new Laya.Sprite();
	scroll1.bg1=new Laya.Sprite();
	scroll1.bg1.loadImage("res/background.png");
	scroll1.addChild(scroll1.bg1);
	scroll1.bg2=new Laya.Sprite();
	scroll1.bg2.loadImage("res/background.png");
	scroll1.bg2.pos(0,-622);
	scroll1.addChild(scroll1.bg2);
	Laya.stage.addChild(scroll1);
	Laya.timer.frameLoop(1,scroll1,scroll1_loop);
	function scroll1_loop(){
		scroll1.y += 1;
		if(scroll1.bg1.y + scroll1.y >= 622){
			scroll1.bg1.y -= 622*2;
		}
		if(scroll1.bg2.y + scroll1.y >= 622){
			scroll1.bg2.y -= 622*2;
		}
	}
	
	//暂停按钮
	pauseBtn = new Laya.Button("war/btn_pause.png");
	pauseBtn.pos(403,14);
	pauseBtn.stateNum = 1;
	Laya.stage.addChild(pauseBtn);
	pauseBtn.zOrder = MAX_ZORDER;
	pauseBtn.on("click",pauseBtn,pauseBtn_click);
	function pauseBtn_click(event){
		event.stopPropagation();
		infoLabel.text = "游戏已暂停，点击任意位置恢复游戏";
		game_pause();
		Laya.stage.once("click", infoLabel, infoLabel_click);
	}
	function infoLabel_click(event){
		infoLabel.text = "";
		game_resume(1);
	}
	
	//得分文本框
	scoreLabel = new Laya.Label("得分: 0");
	scoreLabel.pos(180,14);
	scoreLabel.color = "#000";
	scoreLabel.align = "left";
	scoreLabel.valign = "middle";
	scoreLabel.width = 150;
	scoreLabel.height = 40;
	scoreLabel.fontSize = 20;
	Laya.stage.addChild(scoreLabel);
	scoreLabel.zOrder = MAX_ZORDER;
	
	//血量文本框
	hpLabel = new Laya.Label();
	hpLabel.text = "血量：5";
	hpLabel.pos(24,14);
	hpLabel.color = "#000";
	hpLabel.align = "left";
	hpLabel.valign = "middle";
	hpLabel.width = 100;
	hpLabel.height = 40;
	hpLabel.fontSize = 20;
	Laya.stage.addChild(hpLabel);
	hpLabel.zOrder = MAX_ZORDER;
	
	//游戏暂停、结束文本
	infoLabel = new Laya.Label();
	infoLabel.text = "";
	infoLabel.pos(44,480);
	infoLabel.width = 392;
	infoLabel.height = 102;
	infoLabel.fontSize = 30;
	infoLabel.color = "#ffffff";
	infoLabel.align = "center";
	infoLabel.wordWrap = true;
	Laya.stage.addChild(infoLabel);
	infoLabel.zOrder = MAX_ZORDER;
	
	//创建己方飞机
//	var objMy_jet = Laya.Pool.getItemByClass("My_jet", My_jet);		//类模板对象均使用对象池创建/回收
//	objMy_jet.pos(190,640);
//	objMy_jet.event_proc();				//类模板对象，创建后需要调用event_proc以激活事件响应
//	My_jet_box.addChild(objMy_jet);			//自动生成此语句，以加入容器

	//类对象容器加入舞台
	for (var i=0; i<scene1_box_array.length; i++){
		Laya.stage.addChild(scene1_box_array[i]);
	}	
	
	//使流程调度类生效
	Laya.timer.frameLoop(1,scene1_node,scene1_schedule_class);
	
	//游戏主循环，使模板类调度生效
	Laya.timer.frameLoop(1,scene1_node,scene1_mainloop); 
}

//主循环，遍历所有已经实例化的类对象，调用其schedule()函数
function scene1_mainloop(){
	for(var i = 0; i < scene1_box_array.length; i++){
		for (var ii = scene1_box_array[i].numChildren -1; ii > -1; ii--){
			var foo = scene1_box_array[i].getChildAt(ii);
			foo.schedule();
		}
	}
}

//流程调度类
function scene1_schedule_class(){
	//按时间间隔动态创建敌方飞机1对象，并加入容器。在此调度类中只动态创建了敌方飞机。
	if(Laya.timer.currFrame % 80 === 0){		
		//模板类对象均使用对象池创建，缓存以提高效率
		var foo = Laya.Pool.getItemByClass("Enemy_jet1", Enemy_jet1);		//这里使用约定的类名称字串作为对象池str标记即可
		foo.pos(Math.random() * 400 + 40, -Math.random() * 200 - 100);
		//创建对象后，使其事件响应生效
		foo.event_proc();
		//Enemy_jet1_box 作为敌方飞机1类对象容器，可通过子对象进行遍历；相比使用array存储精灵对象要节省语句
		Enemy_jet1_box.addChild(foo);
	}
}

//敌方飞机 父类
var Enemy_jet = (function (_super) {
    __extends(Enemy_jet, _super);
    function Enemy_jet() {
        _super.call(this);
        this.init();
    }
	//构造-成员变量
    Enemy_jet.prototype.init = function () {
		this.HP = 1;
		this.speed = 1;
		this.pool_str = "Enemy_jet";		//自动生成的对象池中此类对象string标志，使用此类名称以保持通用性
	}
	//触发|操作
	Enemy_jet.prototype.schedule = function(){
		if(this.y < 622 + 100){
			this.y += this.speed;
		}
		else{
			this.removeSelf();
			Laya.Pool.recover("enemy", this);
		}
	}
	//事件响应处理，此类无响应故为空
	Enemy_jet.prototype.event_proc = function(){
		return;
	}
	//停止事件响应
	Enemy_jet.prototype.stop_event_proc = function(){
		return;
	}
	return Enemy_jet;
}(Laya.Animation));			//引擎中Animation派生于Sprite，并可使用play()播放动画。故直接从Animation派生。

//敌方飞机1 派生类
//并非真正意义的派生，只是“拷贝”
var Enemy_jet1 = (function (_super) {
    __extends(Enemy_jet1, _super);
    function Enemy_jet1() {
        _super.call(this);
        this.init();
    }
	//构造-成员变量
    Enemy_jet1.prototype.init = function () {
		this.HP = 1;
		this.speed = 4;
		this.hitRadius = 18;
		this.loadImage("war/enemy1_fly1.png");
		this.autoSize = true;
		this.pool_str = "Enemy_jet1";
	}
	//事件响应处理
	Enemy_jet1.prototype.event_proc = function(){
		return;
	}
	//停止事件响应
	Enemy_jet1.prototype.stop_event_proc = function(){
		return;
	}
	//触发|操作
	Enemy_jet1.prototype.schedule = function(){
		if(this.y < 622 + 100){
			this.y += this.speed;
		}
		else{
			//销毁自己
			this.graphics.clear();
			this.removeSelf();
			this.init();
			Laya.Pool.recover(this.pool_str, this);
			return;
		}
		//与己方飞机碰撞
		for( var i = My_jet_box.numChildren - 1; i > -1; i--) {		//虽然己方飞机类只有一个实例对象，但为通用性起见，依然使用遍历方式
			var my_jet = My_jet_box.getChildAt(i);
			if(intersectWith(this, my_jet)==true ){
				if(this.HP > 0){									//操作中嵌套“触发/操作”，过滤掉碰撞持续发生的情况
					my_jet.HP -= 1;
					hpLabel.text = "血量：" + my_jet.HP;
				}
				this.HP -= 1;
			}
		}		
		if(this.HP == 0){
			score += 1;
			scoreLabel.text = "得分：" + score;
			Laya.SoundManager.playSound("res/sound/enemy1_down.mp3");
			this.interval = 50;
			this.play(0,false,"enemy1_down");
			this.once("complete",this,this.onActionComplete);
			this.HP -=1;				//使爆炸动画只发生一次，以HP==0为发生条件；否则被炮弹击毁会一直重复播放爆炸动画
		}
	}
	Enemy_jet1.prototype.onActionComplete = function(){
		//销毁自己
		this.graphics.clear();			//动画播放完，图像会停留在最后一张，故需调用clear
		this.removeSelf();
		this.init();					//对象池回收时，保留此对象最后状态，故需再做一次初始化
		Laya.Pool.recover(this.pool_str,this);
	}
	return Enemy_jet1;
}(Laya.Animation));

//己方飞机类
var My_jet = (function (_super) {
	__extends(My_jet, _super);
	function My_jet(){
		_super.call(this);
		this.init();
	}
	My_jet.prototype.init = function(){
		this.HP = 5;
		this.hitRadius = 30;
		this.loadImage("war/hero_fly1.png");
		this.autoSize = true;
		//不知为何先getBounds再setBounds，重新获取后出错。不知是否由于loadImage的异步导致。但此Image已经缓存，应该不存在影响。
		//因为要设置锚点为中心点，但引擎中没有直接设置中心的函数（pivotX/pivotY只能是数值），故设置autoSize后通过height/width获取。
		//var bounds = this.getBounds();
		//this.setBounds(bounds);			
		this.pool_str = "My_jet";
	}
	My_jet.prototype.event_proc = function(){
		Laya.stage.on("mousemove", this, this.onMouseMove);
	}
	//事件停止响应为代码自动生成，不需在界面上操作
	My_jet.prototype.stop_event_proc = function(){
		Laya.stage.off("mousemove",this,this.onMouseMove);
	}
	My_jet.prototype.onMouseMove = function(event){
		//使机身中心点在鼠标所在位置。也可以通过设置锚点实现，这体现了逻辑设计的多样性。
		this.pos(Laya.stage.mouseX-this.width/2, Laya.stage.mouseY-this.height/2);
	}
	My_jet.prototype.schedule = function(){
		if(this.HP == 0){
			//逻辑上自机爆炸在上面敌方飞机碰撞处更准确，写在这里界面积木块会少
			Laya.SoundManager.playSound("res/sound/game_over.mp3");
			this.play(0,false,"hero_down");
			this.once("complete",this,this.onActionComplete);
			//游戏暂停，指的是该场景的调度类、主循环、事件响应停止；参数为场景序号，这样生成代码简洁
			game_pause(1);
			infoLabel.text = "游戏结束，点击这里重新开始";
			infoLabel.once("click",infoLabel,infoLabel_click);
			function infoLabel_click(){
				//需要将卷轴滚动的timer清掉，此语句为工具自动生成，不需界面操作
				Laya.timer.clearAll(scroll1);
				goto_scene_entry(1);
			}
			return;
		}
		//生成炮弹，当然也可以放到流程控制类中实现
//		if(Laya.timer.currFrame % 24 === 0){
//			var foo = Laya.Pool.getItemByClass("My_bullet", My_bullet);
//			Laya.SoundManager.playSound("res/sound/bullet.mp3");
//			foo.pos((this.x + this.width/2 - foo.width/2),(this.y - foo.height - 10));
//			foo.event_proc();
//			My_bullet_box.addChild(foo);
//		}
	}
	My_jet.prototype.onActionComplete = function(){
		this.graphics.clear();
		this.removeSelf();
		this.init();
		Laya.Pool.recover(this.pool_str,this);
	}
	return My_jet;
}(Laya.Animation));

//己方飞机炮弹类
//var My_bullet = (function(_super){
//	__extends(My_bullet, _super);
//	function My_bullet(){
//		_super.call(this);
//		this.init();
//	}
//	My_bullet.prototype.init = function(){		
//		this.speed = 6;
//		this.hitRadius = 4;
//		this.loadImage("war/bullet1.png");
//		this.autoSize = true;
//		this.pool_str = "My_bullet";
//	}
//	My_bullet.prototype.event_proc = function(){
//	}
//	My_bullet.prototype.stop_event_proc = function(){
//	}
//	My_bullet.prototype.schedule = function(){
//		if(this.y < -30){
//			//超出屏幕上方，销毁自己
//			this.graphics.clear();
//			this.removeSelf();
//			this.init();
//			Laya.Pool.recover(this.pool_str,this);
//			return;
//		}
//		else{
//			this.y -= this.speed;
//		}
//		//碰撞敌方飞机
//		for( var i = Enemy_jet1_box.numChildren - 1; i > -1; i--) {
//			var foo = Enemy_jet1_box.getChildAt(i);
//			if(intersectWith(this,foo) == true && this.y >=0 && foo.HP > 0){		//防止屏幕外的碰撞，已经爆炸的敌机不挡炮弹
//				foo.HP -= 1;										//敌方飞机已经有了爆炸处理逻辑
//				this.graphics.clear();
//				this.removeSelf();
//				this.init();
//				Laya.Pool.recover(this.pool_str,this);
//				return;
//			}
//		}
//	}
//	return My_bullet;
//}(Laya.Animation));

//系统函数库“游戏暂停”，使对应场景的游戏流程、事件响应停止
function game_pause(scene_number){
	//此游戏只有一个场景，故scene_number参数没使用
	Laya.timer.clear(scene1_node,scene1_mainloop);
	Laya.timer.clear(scene1_node,scene1_schedule_class);
	
	for(var i = 0; i < scene1_box_array.length; i++){
		for (var ii = scene1_box_array[i].numChildren -1; ii > -1; ii--){
			var foo = scene1_box_array[i].getChildAt(ii);
			foo.stop_event_proc();
		}
	}
}

//系统函数库函数“游戏恢复”，使对应场景的游戏流程、事件响应启动
function game_resume(scene_number){
	Laya.timer.frameLoop(1,scene1_node,scene1_mainloop);
	Laya.timer.frameLoop(1,scene1_node,scene1_schedule_class);
	
	for(var i = 0; i < scene1_box_array.length; i++){
		for (var ii = scene1_box_array[i].numChildren -1; ii > -1; ii--){
			var foo = scene1_box_array[i].getChildAt(ii);
			foo.event_proc();
		}
	}
}

//初始化并进入对应场景入口
function goto_scene_entry(){
	//接收场景参数，这里并未使用；需优化
	var arg = arguments[0];
	//回收所有模板类对象子节点
	//注意：如有多个场景，跳转到不同场景时，原场景的模板类对象不用回收，销毁自己后对象池将其类清空即可（clearBySign）,因下个场景不需此类，回收只会随着场景增多不断增加内存
	for(var i = 0; i < scene1_box_array.length; i++){
		for (var ii = scene1_box_array[i].numChildren -1; ii > -1; ii--){
			var foo = scene1_box_array[i].getChildAt(ii);
			foo.graphics.clear();			
			foo.removeSelf();
			foo.init();					
			Laya.Pool.recover(this.pool_str,foo);
		}
	}
	//清除其他所有子节点
	Laya.stage.removeChildren();		//只能remove，destory崩溃；先remove再destory依然崩溃
	//进入对应场景入口
	Scene1();
}

//碰撞检测，先按半径方式检测，后续应提供按图形矩形区域的检测，就不用再设置碰撞半径了；但半径方式可作为一种碰撞方式在工具中保留
function intersectWith(obj1,obj2){
	var hitRadius = obj1.hitRadius + obj2.hitRadius;
	if (Math.abs((obj1.x+obj1.width/2) - (obj2.x+obj2.width/2)) < hitRadius && Math.abs((obj1.y+obj1.height/2) - (obj2.y+obj2.height/2)) < hitRadius) {
		return	true;
	}
	return false;
}