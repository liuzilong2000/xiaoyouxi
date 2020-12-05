// 判断是否是移动端
// var u = navigator.userAgent;
// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(window.screen.width>=768){
             flag = true;
    }
    return flag;
}
var isAndroid = !IsPC();





var box = document.getElementById('box');
if(isAndroid){
    box.onclick = function(e){
        e.stopPropagation()
        out();
    }
}

// 地图
var map = document.getElementById('map');
//边框
function border(){
    for(var i = 0; i < 4; i++){
        var border_div = document.createElement('div');
        border_div.className = 'border_box';
        border_div.style.backgroundColor = '#666';
        map.appendChild(border_div);
    }
}
border()
// 地图
function BoxMap(width,height,bgcolor,across,vertical){
    this.width = width || 675;
    this.htight = height || 675;
    this.bgcolor = bgcolor || '#666';
    this.across = across || 15;
    this.vertical = vertical || 15;
}
BoxMap.prototype.ge = function(map){
    map.style.width = this.width+'px';
    map.style.height = this.htight+'px';
    map.style.backgroundColor = this.bgcolor;
    // map.style.backgroundImage = 'url("../images/1.jpg")';
    //background-image: url('../images/1.jpg');
    // 竖线
    for(var i = 0; i < this.vertical; i++){
        var Vdiv = document.createElement('div');
        Vdiv.className = 'vertical';
        Vdiv.style.width = '2px';
        Vdiv.style.height = '100%';
        Vdiv.style.backgroundColor = '#000';
        map.appendChild(Vdiv);
    }
    // 横线
    for(var i = 0; i < this.across; i++){
        var Adiv = document.createElement('div');
        Adiv.className = 'across';
        Adiv.style.width = '100%';
        Adiv.style.height = '2px';
        Adiv.style.backgroundColor = '#000';
        map.appendChild(Adiv);
    }
    var ver = document.getElementsByClassName('vertical');
    var acr = document.getElementsByClassName('across');
    //查找交叉线，在交叉线上面创建的点击范围元素
    for(var i = 0; i < this.vertical; i++){
        // 获取竖线坐标
        var vL = ver[i].offsetLeft;
        for(var j = 0; j < this.across; j++){
            // 获取横线坐标
            var aT = acr[j].offsetTop;
            for(var s = 0; s < 15; s++){
                if(aT + 42*s == vL || aT - 42*s == vL){  //获得交叉位置
                    //创建点击的范围
                    var Rdiv = document.createElement('div');
                    Rdiv.style.position = 'absolute';
                    Rdiv.style.width = '20px';
                    Rdiv.style.height = '20px';
                    Rdiv.style.borderRadius = '50%';
                    Rdiv.setAttribute('big',0);
                    Rdiv.style.left = vL-9+'px'; //创建棋子位置
                    Rdiv.style.top = aT-9+'px';  //创建棋子位置
                    // 在pc端执行
                    if(!isAndroid){
                        Rdiv.onclick = fall;   //添加点击事件
                        Rdiv.onmouseover = over;
                        Rdiv.onmouseout = out;
                    }else{  //移动端
                        Rdiv.onclick = over;
                    }
                    map.appendChild(Rdiv);
                }
            }
        }
    }
}


// 判断到那一方落子    
var a = 0;  
let top_box = document.getElementById('top');
let top_white = top_box.children[0];
let top_black = top_box.children[2];

function takeTurns(){
    if(a == 0){
        top_black.style.border = '1px solid rgb(5, 205, 240)';
        top_white.style.border = '1px solid transparent'
    }else{
        top_white.style.border = '1px solid rgb(5, 205, 240)';
        top_black.style.border = '1px solid transparent';
    }
}
takeTurns()
let arrWhole = [];  //全部点击后棋子
var arrBlack = [];  //黑
var arrWhite = [];  //白
// 点击事件函数
function fall(app){
    function is(thiser){
        var big = thiser.getAttribute('big');
        if(big === '1'){
            return;
        }
        thiser.setAttribute('big',1);
        //点击事件（下棋）
        thiser.style.width = '30px';
        thiser.style.height = '30px';
    
        var obj = 'left:'+thiser.offsetLeft+':top:'+thiser.offsetTop;
        
        if(a === 0){
            //黑棋
            thiser.style.backgroundColor = '#000';
            thiser.style.boxShadow = 'inset 2px 1px 15px -5px #fff';
            arrBlack.push(obj)
            a = 1;
            var color = '黑';
            piece(arrBlack,thiser.offsetLeft,thiser.offsetTop,color,fall)
        }else if(a === 1){
            //白棋
            thiser.style.backgroundColor = '#fff';
            thiser.style.boxShadow = 'inset -2px -3px 15px -3px #000';
            arrWhite.push(obj)
            a = 0;
            var color = '白';
            piece(arrWhite,thiser.offsetLeft,thiser.offsetTop,color,fall)
        }
        arrWhole.push(thiser);
    }
    // pc
    if(!isAndroid){
        is(this)
    }else{ //移动端
        is(app)
    }
    takeTurns()
}
// 鼠标放上事件 只在pc端有用
let arrOver = [];
function over(){
    var big = this.getAttribute('big');
    if(big === '1'){
        return;
    }
    this.style.width = '30px';
    this.style.height = '30px';
    this.style.left =  this.offsetLeft - 5 + 'px'; //棋子位置
    this.style.top = this.offsetTop - 5 + 'px';   //棋子位置
    if(a === 0){
        this.style.backgroundColor = 'rgba(0,0,0,.3)';
        this.style.boxShadow = 'inset -2px -3px 15px -3px #000';
    }else if(a===1){
        this.style.backgroundColor = 'rgba(255,255,255,.3)';
        this.style.boxShadow = 'inset 2px 1px 15px -5px #fff';
    }
    if(isAndroid && this !=arrOver[0]){
        arrOver.push(this);
    }else if(isAndroid){
        this.style.left =  this.offsetLeft + 5 + 'px'; //棋子位置
        this.style.top = this.offsetTop + 5 + 'px';   //棋子位置
    }
}
function out(){
    //pc
    if(!isAndroid){
        var big = this.getAttribute('big');
        if(big === '1'){
            return;
        }
        this.style.width = '20px';
        this.style.height = '20px';
        this.style.left =   this.offsetLeft +5 + 'px'; //棋子位置
        this.style.top = this.offsetTop + 5 + 'px';   //棋子位置
        this.style.boxShadow = '';
        this.style.backgroundColor = 'rgba(0,0,0,0)';
    }else if(arrOver[1]){ //移动
        let arrOut = arrOver.shift();
        
        var big = arrOut.getAttribute('big');
        if(big === '1'){
            return;
        }
        arrOut.style.width = '20px';
        arrOut.style.height = '20px';
        arrOut.style.left =   arrOut.offsetLeft +5 + 'px'; //棋子位置
        arrOut.style.top = arrOut.offsetTop + 5 + 'px';   //棋子位置
        arrOut.style.boxShadow = '';
        arrOut.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    
}

function piece(arr,left,top,color){
    (function(){
        var fen = 0;
        //左
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+(left - 42 * i)+':top:'+top;
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        //右
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+(left + 42 * i)+':top:'+top;
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        ying(fen,color)
    })();
    (function(){
        var fen = 0;
        //下
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+left+':top:'+(top + 42 * i);
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        //上
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+left+':top:'+(top - 42 * i);
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        ying(fen,color)
    })();
    (function(){
        var fen = 0;
        //左上
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+(left - 42 * i)+':top:'+(top - 42 * i);
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        //右下
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+(left + 42 * i)+':top:'+(top + 42 * i);
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        ying(fen,color)
    })();
    (function(){
        var fen = 0;
        //右上
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+(left + 42 * i)+':top:'+(top - 42 * i);
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        //左下
        for(var i = 1; i < arr.length; i++){
            var obj1 = 'left:'+(left - 42 * i)+':top:'+(top + 42 * i);
            if(arr.indexOf(obj1)!== -1){
                fen++;
            }else{
                break
            }
        }
        ying(fen,color)
    })();
    // 获胜判断
    function ying(fen,color){
        if(fen >= 4){
            qiang(); //获胜后再棋盘上面增加一面墙，禁止之后点击
            setTimeout(function(){
                alert(color+'获胜')
            },500);
        }
    }
}
let qiang_ = true; //记录游戏是否结束
//获胜后再棋盘上面增加一面墙，禁止之后点击
function qiang(){
    qiang_ = false;
    var div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100%';
	div.style.backgroundColor = 'rgba(0,0,0,.3)';
    div.style.position = 'absolute';
    div.style.top = '0px';
    div.style.left = '0px';
    map.appendChild(div)
}


// -----------------------------按钮-------------------------------------------

let btns = document.getElementsByClassName('btn');
let again_btn = btns[0].children[0];        //重新开始按钮
let regret_btn = btns[1].children[0];        //悔棋按钮
let transport_btn = btns[1].children[2];     //认输按钮
let confirm_btn = btns[1].children[1];      //确认落子按钮


// 重新开始
again_btn.onclick = function(){
	// 点击后切换按钮样式
	this.className = 'btn_click';
	// 添加定时器去除按钮样式 和 禁止按钮点击时间
	setTimeout(()=>{
		this.className = '';
		// 判断用户是否真的要重新开始
		if(confirm("确实要重新开始吗？")){
		    window.location.reload(); //确定后刷新页面
		}
	},500)
}

//确认落子
if(isAndroid){
    confirm_btn.style.visibility = 'visible';
}
confirm_btn.onclick = function(){
    // 点击后切换按钮样式
    this.className = 'btn_click';
    // 添加定时器去除按钮样式 和 禁止按钮点击时间
    setTimeout(()=>{
        this.className = '';
    },500);
    if(arrOver[0]){
        fall(arrOver[0]);
        arrOver = [];
    }
}

// 认输
transport_btn.onclick = function(){
    if(qiang_){
        // 点击后切换按钮样式
        this.className = 'btn_click';
        // 添加定时器去除按钮样式 和 禁止按钮点击时间
        setTimeout(()=>{
            this.className = '';
            // 判断用户是否真的要认输
            if(confirm("确实要认输吗？")){
                qiang();
                // 判断当前认输是白还是黑  a:0 黑  a:1 白
                if(a==1){
                    setTimeout(function(){
                        alert('白认输')
                    },500);
                }else if(a==0){
                    setTimeout(function(){
                        alert('黑认输')
                    },500);
                }
            }
        },500)
    }
}

// 悔棋
regret_btn.onclick = regret;
function regret(){
    if(qiang_&&arrWhole[0]){
        regret_btn.onclick = null;
        // 点击后切换按钮样式
        this.className = 'btn_click';
        // 添加定时器去除按钮样式 和 禁止按钮点击时间
        setTimeout(()=>{
            this.className = '';
            setTimeout(()=>{
                regret_btn.onclick = regret;
            },300)
        },500)
        // 判断上一步是黑还是白  a:0 黑  a:1 白
        if(a==1){  //黑棋悔棋
            pop(arrBlack)
            a = 0;
        }else if(a==0){  //白棋悔棋
            pop(arrWhite)
            a = 1;
        }
        takeTurns()
    }
}

// 悔棋删除
function pop(arr){
	let arrPop = arr.pop();  //删除数组末尾
    let piecePop = arrWhole.pop(); //删除全部棋子最后一个
    if(piecePop){
        // 还原被删除棋子的样式
        piecePop.style.width = '20px';
        piecePop.style.height = '20px';
        piecePop.style.backgroundColor = 'rgba(0,0,0,0)';
        piecePop.style.boxShadow = 'inset 0px 0px #000';
        piecePop.setAttribute('big',0);
        let srt = arrPop.split(':');
        piecePop.style.left = Number(srt[1]) +5+ 'px'; //棋子位置
        piecePop.style.top = Number(srt[3]) +5+ 'px';   //棋子位置
    }
}

// piece();

var boxmap = new BoxMap();
boxmap.ge(map)