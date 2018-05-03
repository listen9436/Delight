
//独立对象容器
//var obj_box = {obj1, obj2};
//全局变量容器
//var globalVar_box = {gvar1, gvar2};
//动画模板容器
//var animate_box = {amimate1, animate2};
//模板类容器
//var templet_box = {templet1, templet2};

var sub_menu = [
[
	["数学","node",["lineFirst","random","minus","getPosx","getPosy","getWidth","getHeight","opAdd","opSub","opMul","opDiv","opGreat","opLess","opGOE","opLOE","opNE"],["lineFirst","random","minus","setPosx","setPosy","setText","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],[
		["随机数","leaf",["lineFirst","random","minus","getPosx","getPosy","getWidth","getHeight","opAdd","opSub","opMul","opDiv","opGreat","opLess","opGOE","opLOE","opNE"],["lineFirst","random","minus","setPosx","setPosy","setText","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],"random"],
		["取绝对值","leaf",[""],[""],"NOUSED"],
		["平方根","leaf",[""],[""],"NOUSED"],
		["取整","leaf",[""],[""],"NOUSED"],
		["取余","leaf",[""],[""],"NOUSED"],
		["取x的y次方","leaf",[""],[""],"NOUSED"],
		["取正弦值","leaf",[""],[""],"NOUSED"],
		["取余弦值","leaf",[""],[""],"NOUSED"],
		["取正切值","leaf",[""],[""],"NOUSED"],
		["取余切值","leaf",[""],[""],"NOUSED"],
		["取反正弦值","leaf",[""],[""],"NOUSED"],
		["取反余弦值","leaf",[""],[""],"NOUSED"],
		["取反正切值","leaf",[""],[""],"NOUSED"],
		["取反余切值","leaf",[""],[""],"NOUSED"]]
	],
	["日期时间","node",[""],[""],[
		["当前日期(年月日)","leaf",[""],[""],"NOUSED"],
		["当前年","leaf",[""],[""],"NOUSED"],
		["当前月","leaf",[""],[""],"NOUSED"],
		["当前日","leaf",[""],[""],"NOUSED"],
		["当前时间(时分秒)","leaf",[""],[""],"NOUSED"],
		["当前时","leaf",[""],[""],"NOUSED"],
		["当前分","leaf",[""],[""],"NOUSED"],
		["当前秒","leaf",[""],[""],"NOUSED"],
		["当前豪秒","leaf",[""],[""],"NOUSED"]]
	],
	["系统","node",["lineFirst","random","minus","opAdd","opSub","opMul","opDiv","opGreat","opLess","opEqual","opGOE","opLOE","opNE"],["lineFirst","random","minus","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],[
		["创建模板对象","leaf",[""],["lineFirst"],"createTemplet"],
		["运行控制","node",[""],["lineFirst","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],[
			["运行间隔(毫秒)","leaf",["lineFirst"],["lineFirst","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],"interval"],
			["暂停运行","leaf",[""],["lineFirst"],"pauseGame"],
			["恢复运行","leaf",[""],["lineFirst"],"resumeGame"]]
		],
		["场景入口选择","leaf",[""],["lineFirst"],"sceneSelect"],
		["音乐音效","node",[""],["lineFirst"],[
			["播放音乐","leaf",[""],["lineFirst"],"NOUSED"],
			["播放音效","leaf",[""],["lineFirst"],"playSound"],
			["停止音乐","leaf",[""],["lineFirst"],"NOUSED"],
			["停止音效","leaf",[""],["lineFirst"],"NOUSED"],
			["暂停音乐","leaf",[""],["lineFirst"],"NOUSED"],
			["暂停音效","leaf",[""],["lineFirst"],"NOUSED"],
			["停止全部声音","leaf",[""],["lineFirst"],"NOUSED"]]
		]]
	]
],
[
	["负","leaf",["lineFirst"],[""],"minus"],
	["加","leaf",["objVar","globalVar","digitValue","strValue","getMousex","getMousey"],["objVar","globalVar","digitValue","strValue","getMousex","getMousey"],"opAdd"],
	["减","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opSub"],
	["乘","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opMul"],
	["除","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opDiv"],
	["大于","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opGreat"],
	["小于","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opLess"],
	["等于","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opEqual"],
	["不等于","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opNE"],
	["大于等于","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opGOE"],
	["小于等于","leaf",["objVar","globalVar","digitValue","getMousex","getMousey"],["objVar","globalVar","digitValue","getMousex","getMousey"],"opLOE"],
	["赋值为","leaf",["objVar","globalVar"],["objVar","globalVar"],"opAssign"],
	["增加","leaf",["objVar","globalVar"],["objVar","globalVar"],"opAddA"],
	["减少","leaf",["objVar","globalVar"],["objVar","globalVar"],"opSubA"],
	["乘为","leaf",["objVar","globalVar"],["objVar","globalVar"],"opMulA"],
	["除为","leaf",["objVar","globalVar"],["objVar","globalVar"],"opDivA"]
],
[
	["碰撞于","leaf",["templet","scroll","text","button"],[""],"intersect"],
	["x轴位置","leaf",["templet","scroll","text","button"],["templet","scroll","text","button"],"getPosx"],
	["y轴位置","leaf",["templet","scroll","text","button"],["templet","scroll","text","button"],"getPosy"],
	["宽度","leaf",["templet","scroll","text","button"],["templet","scroll","text","button"],"getWidth"],
	["高度","leaf",["templet","scroll","text","button"],["templet","scroll","text","button"],"getHeight"],
	["鼠标x位置","leaf",["stage"],["stage"],"getMousex"],
	["鼠标y位置","leaf",["stage"],["stage"],"getMousey"],
	["x轴全局位置","leaf",[""],[""],"NOUSED"],
	["y轴全局位置","leaf",[""],[""],"NOUSED"],
	["取得子对象","leaf",[""],[""],"NOUSED"],
	["可见","leaf",[""],[""],"NOUSED"],
	["不可见","leaf",[""],[""],"NOUSED"],
	["旋转角度","leaf",[""],[""],"NOUSED"],
	["倾斜角度","leaf",[""],[""],"NOUSED"],
	["横向缩放比例","leaf",[""],[""],"NOUSED"],
	["纵向缩放比例","leaf",[""],[""],"NOUSED"]
],
[
	["鼠标移动","leaf",["stage"],["stage"],"eventMousemove"],
	["单击","leaf",[""],[""],"NOUSED"],
	["双击","leaf",[""],[""],"NOUSED"],
	["右键单击","leaf",[""],[""],"NOUSED"],
	["右键双击","leaf",[""],[""],"NOUSED"],
	["滚轮滚动","leaf",[""],[""],"NOUSED"],
	["拖拽移动","leaf",[""],[""],"NOUSED"],
	["鼠标悬停进入","leaf",[""],[""],"NOUSED"],
	["鼠标悬停离开","leaf",[""],[""],"NOUSED"]
],
[
	["按钮按下","leaf",["button"],[""],"btnClick"],
	["鼠标悬停","leaf",["button"],[""],"btnHover"],
	["单击文本框","leaf",["text"],["text"],"textClick"]
],
[
	["立即动作","node",[""],["templet","button","scroll","text"],[
		["设定x轴位置","leaf",[""],["templet","button","scroll","text"],"setPosx"],
		["设定y轴位置","leaf",[""],["templet","button","scroll","text"],"setPosy"],
		["设定层级","leaf",[""],[""],"NOUSED"],
		["销毁自己","leaf",[""],[""],"NOUSED"],
		["设为可见","leaf",[""],[""],"NOUSED"],
		["设为不可见","leaf",[""],[""],"NOUSED"],
		["以子对象加入到","leaf",[""],[""],"NOUSED"],
		["更改图片为","leaf",[""],[""],"NOUSED"],
		["旋转角度为","leaf",[""],[""],"NOUSED"],
		["倾斜角度为","leaf",[""],[""],"NOUSED"],
		["横向缩放为","leaf",[""],[""],"NOUSED"],
		["纵向缩放为","leaf",[""],[""],"NOUSED"]]
	],
	["延续性动作","node",[""],["templet","button","scroll","text"],[
		["播放动画","leaf",[""],["templet","button","scroll","text"],"runAnimation"],
		["直线运动到","leaf",[""],[""],"NOUSED"],
		["直线位移","leaf",[""],[""],"NOUSED"],
		["跳跃到","leaf",[""],[""],"NOUSED"],
		["跳跃位移","leaf",[""],[""],"NOUSED"],
		["闪烁","leaf",[""],[""],"NOUSED"],
		["淡入","leaf",[""],[""],"NOUSED"],
		["淡出","leaf",[""],[""],"NOUSED"],
		["放大","leaf",[""],[""],"NOUSED"],
		["缩小","leaf",[""],[""],"NOUSED"],
		["横向缩放","leaf",[""],[""],"NOUSED"],
		["纵向缩放","leaf",[""],[""],"NOUSED"],
		["倾斜","leaf",[""],[""],"NOUSED"],
		["横向倾斜","leaf",[""],[""],"NOUSED"],
		["纵向倾斜","leaf",[""],[""],"NOUSED"]]
	]
],
[
	["开始滚动","leaf",[""],["scroll"],"beginScroll"],
	["停止滚动","leaf",[""],["scroll"],"NOUSED"],
	["设置背景","leaf",[""],["scroll"],"NOUSED"],
	["背景滚动开关","leaf",[""],["scroll"],"NOUSED"],
	["滚动方向","leaf",[""],["scroll"],"NOUSED"],
	["滚动速度","leaf",[""],["scroll"],"NOUSED"],
	["设置文本","leaf",[""],["button","text",],"setText"],
	["设置字体","leaf",[""],["button","text",],"NOUSED"],
	["设置字号","leaf",[""],["button","text",],"NOUSED"],
	["字体颜色","leaf",[""],["button","text",],"NOUSED"],
	["自动换行","leaf",[""],["button","text",],"NOUSED"],
	["设置背景图片","leaf",[""],["button",],"NOUSED"]
]
]

var tree_stuct =[
["独立对象",["lineFirst","random","minus","intersect","opAdd","opSub","opMul","opDiv","opGreat","opLess","opEqual","opGOE","opLOE","opNE"],["lineFirst","random","minus","setPosx","setPosy","setText","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],list_obj,0],
["模板对象",["lineFirst","random","minus","intersect","opAdd","opSub","opMul","opDiv","opGreat","opLess","opEqual","opGOE","opLOE","opNE"],["lineFirst","createTemplet","random","minus","setPosx","setPosy","setText","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],list_templet,0],
["全局变量",["lineFirst","random","minus","opAdd","opSub","opMul","opDiv","opGreat","opLess","opEqual","opGOE","opLOE","opNE"],["lineFirst","random","minus","setPosx","setPosy","setText","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],list_globalVar,0],
["函数库",["lineFirst","random","minus","getPosx","getPosy","getWidth","getHeight","opAdd","opSub","opMul","opDiv","opGreat","opLess","opEqual","opGOE","opLOE","opNE"],["lineFirst","random","minus","setPosx","setPosy","setText","opAdd","opSub","opMul","opDiv","opAssign","opAddA","opSubA","opMulA","opDivA"],get_subMenu,1],
["操作符",["lineFirst","digitValue","strValue","objVar","globalVar","runInterval","getPosx","getPosy","getWidth","getHeight"],["digitValue","strValue","objVar","globalVar","setPosx","setPosy"],get_subMenu,2],
["对象状态",["stage","templet"],["stage","templet"],get_subMenu,3],
["系统事件",["stage","templet"],["stage","templet"],get_subMenu,4],
["控件事件",["button","scroll","text"],[""],get_subMenu,5],
["执行动作",[""],["templet","button","scroll","text"],get_subMenu,6],
["控件处理",[""],["button","scroll","text"],get_subMenu,7]
];

//特殊的前置元素
var special_previous={
	playSound:fileOpen,
	runAnimation:listAnimation,
}

function fileOpen(){
	//打开文件选择音乐
	//注意选择后将元素属性设为"soundPath"
}

function listAnimation(){
	//列出动画模板供选择
	//注意选择后将元素属性设为"animateName"
}
//create_tree();

function create_tree(type, previous){
	//type: 触发--"triger"  操作--"manipulation"; previous: ID字串
	/*ID区分：使用字串
	行首："lineFirst", 
	输入的数字："digitValue"，
	输入的字串："strValue"，
	独立对象类型-舞台："stage"，按钮："button"，文本框："text"，卷轴："scroll"，精灵："sprite"
	模板对象："templet"
	成员变量："objVar"，
	全局变量："globalVar"，
	其他使用定义的字串，没用到的内容统一使用"NOUSED"
	*/
	//如果是特殊前置元素，执行相应的function列出选择项
	for(var k in special_previous){
		if(previous == k){
			special_previous[k]();
			return;
		}
	}
	//否则进行智能过滤
	for(var i=0; i<tree_stuct.length; i++){
		var index = 0;
		if(type == "triger"){index == 1;}
		else if(type == "manipulation") {index == 2;}
		else alert("type error!");
		if(previous == "NOUSED"){
			//前置元素为没用到的ID，不进行过滤，直接加入
			addNode(tree_struct[i][0],"node");
			tree_struct[i][3](type, previous, tree_struct[i][4]);
		}
		else{
			for(var ii=0; ii<tree_struct[i][index].length; i++){
				if(previous == tree_struct[i][index][ii]){
					//将字串作为可展开节点增加在树中
					addNode(tree_struct[i][0],"node");
					//给此节点添加下级菜单
					tree_struct[i][3](type, previous, tree_struct[i][4]-1);
					break;
				}
			}
		}
	}
}

function addNode(string,type){
	//将string作为节点加入树中
	//type："node"--可展开项   "leaf"--不可展开子项
	//对leaf需设定其点击后的返回ID字串
	//Todo:请自行添加代码
	
	
}

function list_obj(){
	//首先添加“舞台”作为第一个leaf，
	//再遍历独立对象，调用addNode将其name字段文本作为leaf添加
}

function list_templet(){
	//遍历模板类，调用addNode将其name字段文本作为leaf添加
}

function list_globalVar(){
	//遍历全局变量，addNode将其name字段文本作为leaf添加
}
get_subMenu();
function get_subMenu(type, previous, menuArray){
	//生成下级菜单，并递归调用生成该级下所有下级菜单项
	for(var i=0; i<menuArray.length; i++){
		var index = (type == "triger")?2:3;
		if(menuArray[i][1] == "leaf"){
			//未用到的内容，不过滤条件直接出现
			if(menuArray[i][2] == "" && menuArray[i][3] == ""){
				addNode(menuArray[i][0],"leaf");
				//Todo：设置此树叶的选中返回值为 menuArray[4]
				console.log(1);
			}
			//按触发|操作中的前置元素条件进行过滤
			else{
				for(var ii=0; ii<menuArray[i][index].length; ii++){
					if(previous == menuArray[i][index][ii]){
						addNode(menuArray[i][0],"leaf");
						//Todo：设置此树叶的选中返回值为 menuArray[4]
						break;
					}
				}
			}
		}
		else if(menuArray[1] == "node"){
			if(menuArray[2] == "" && menuArray[3] == ""){
				addNode(menuArray[i][0],"node");
				get_subMenu(type, previous, menuArray[i][4]);
			}
			else{
				for(var ii=0; ii<menuArray[i][index].length; i++){
					if(previous == menuArray[i][index][ii]){
						addNode(menuArray[i][0],"node");
						get_subMenu(type, previous, menuArray[i][4]);
						break;
					}
				}
			}
		}
		else alert("menuArray node type error!");
	}
}