// 获取所有地图li
var map_ul = document.getElementById('map-ul');
var map_li = map_ul.children;
var map_ulL = map_li.length;
// 给li添加背景颜色自定义属性
for(var i = 0; i < 13; i++){
    map_li[4 * i].setAttribute('bg','red');
    map_li[4 * i + 1].setAttribute('bg','yellow');
    map_li[4 * i + 2].setAttribute('bg','blue');
    map_li[4 * i + 3].setAttribute('bg','green');

}
map_li[49].setAttribute('bg','');
map_li[36].setAttribute('bg','');
map_li[23].setAttribute('bg','');
map_li[10].setAttribute('bg','');
// 黄色
var li1_div = document.getElementById('li1').children[0];
var yellowC = document.getElementById('yellowC');
var yellowC_lis = yellowC.children;
// 蓝色
var li15_div = document.getElementById('li15').children[0];
var blueC = document.getElementById('blueC');
var blueC_lis = blueC.children;
// 绿色
var li29_div = document.getElementById('li29').children[0];
var greenC = document.getElementById('greenC');
var greenC_lis = greenC.children;
// 红色
var li43_div = document.getElementById('li43').children[0];
var redC = document.getElementById('redC');
var redC_lis = redC.children;





// for(var i = 0; i < map_ulL; i++){
//     map_li[i].children[0].innerText = i;
// }

//------------------------------------------------------------ 骰子------------------------------------------------------------------
var touzi_dong = true;
var sz_box1 = document.getElementById('sz-box1');
sz_box1.setAttribute('color','yellow');

var sz_box2 = document.getElementById('sz-box2');
sz_box2.setAttribute('color','blue');


var sz_box3 = document.getElementById('sz-box3');
sz_box3.setAttribute('color','green');

var sz_box4 = document.getElementById('sz-box4');
sz_box4.setAttribute('color','red');

var touzi_box = document.getElementById('touzi-box');
// 创建自定义属性
for(var i = 0; i < 4; i++){
    touzi_box.children[i].setAttribute('zdy','0');
    touzi_box.children[i].setAttribute('qi','0');
    touzi_box.children[i].setAttribute('bushuhou','0');
    touzi_box.children[i].setAttribute('bushuqian','0');
    touzi_box.children[i].setAttribute('qifei','0');
    touzi_box.children[i].setAttribute('zuohou','0');
    touzi_box.children[i].setAttribute('feiji','0');
    touzi_box.children[i].setAttribute('zuohou2','0');
}

// ---------------------------------------------骰子点击事件---------------------------------------
var a = 0;
sz_box1.onclick = function(){
    if(touzi_dong){
        a = 1;
    }
    if(touzi_dong && this.getAttribute('feiji') < 4){
        touzi(sz_box1,li1_div);
        touzi_dong = false;
    }
    
    
}
sz_box2.onclick = function(){
    if(touzi_dong){
        a = 2;
    }
    if(touzi_dong && this.getAttribute('feiji') < 4){
        touzi(sz_box2,li15_div);
        touzi_dong = false;
    }
    
}
sz_box3.onclick = function(){
    if(touzi_dong){
        a = 3;
    }
    if(touzi_dong && this.getAttribute('feiji') < 4){
        touzi(sz_box3,li29_div);
        touzi_dong = false;
    }
    
    
}
sz_box4.onclick = function(){
    if(touzi_dong){
        a = 0;
    }
    if(touzi_dong && this.getAttribute('feiji') < 4){
        touzi(sz_box4,li43_div);
        touzi_dong = false;
    }
    
}

// -------------------------------------------自动模式------------------------------------
var hua = document.getElementById('hua');
var hua_box = document.getElementById('hua-box');
var switch1 = true;
var timer;

hua_box.onclick = function(){
    if(switch1){
        hua.style.marginLeft = '50%';
        hua.innerText = '开';
        hua.style.backgroundColor = 'rgb(66, 243, 12)';
        function fun(){
            if(a == 0){
                sz_box1.click();
            }else if(a == 1){
                sz_box2.click();
            }else if(a == 2){
                sz_box3.click();
            }else if(a == 3){
                sz_box4.click();
            }
        }
        fun();
        timer = setInterval(fun,3200);
        switch1 = false;
    }else{
        hua.style.marginLeft = '0px';
        hua.innerText = '关';
        hua.style.backgroundColor = 'rgb(240, 64, 10)';
        clearInterval(timer);
        switch1 = true;
    }
};
// -----------------------------------------------骰子----------------------------------------
var max = 6;
var min = 0;
var arr = [obj={x:-85,z:-5},obj={x:5,y:-175},obj={x:5,y:-85},obj={x:5,y:85},obj={x:5,y:-5},obj={x:95,z:5}];

function touzi(btn,li_div){
//    获取自定义
    var zdy = btn.getAttribute('zdy');
    var color = btn.getAttribute('color');
    var qi = btn.getAttribute('qi');
    var feiji = Number(btn.getAttribute('feiji'));
    var bushuhou = Number(btn.getAttribute('bushuhou'));
    var bushuqian = Number(btn.getAttribute('bushuqian'));
    var qifei = Number(btn.getAttribute('qifei'));
    var zuihou = Number(btn.getAttribute('zuihou'));
    var zuihou2 = Number(btn.getAttribute('zuihou2'));


    var random = Math.floor(Math.random() * (max - min)) + min;
    // var random = 0;
    var x1 = arr[random].x + 3600;
    var y1 = arr[random].y + 3600;
    var z1 = arr[random].z + 3600;
    if(zdy == 1){
        x1 -= 3600;
        y1 -= 3600;
        z1 -= 3600;
        btn.setAttribute('zdy','0');
    }else{
        btn.setAttribute('zdy','1');
    }
    if(z1){
        btn.style.transform = 'rotatex('+x1+'deg) rotatez('+z1+'deg)';
    }else{
        btn.style.transform = 'rotatex('+x1+'deg) rotatey('+y1+'deg)';
    }
    // ------------------------------------------棋子移动------------------------------------------
    setTimeout(function(){
        // 骰出6出飞机
        if(random == 5 && qi == 0){
            // 判断飞机场有几架飞机
            for(var i = 0; i < 4; i++){
                if(color == 'yellow'){             //黄
                    var yellow_li = yellowC_lis[i];
                    if(yellow_li.innerHTML){
                        d = i;
                        var colorC_lis = yellowC_lis;
                        break;
                    }
                }else if(color == 'blue'){          //蓝
                    var blue_li = blueC_lis[i];
                    if(blue_li.innerHTML){
                        d = i;
                        var colorC_lis = blueC_lis;
                        break;
                    }
                }else if(color == 'green'){         //绿
                    var green_li = greenC_lis[i];
                    if(green_li.innerHTML){
                        d = i;
                        var colorC_lis = greenC_lis;
                        break;
                    }
                }else if(color == 'red'){           //红
                    var red_li = redC_lis[i];
                    if(red_li.innerHTML){
                        d = i;
                        var colorC_lis = redC_lis;
                        break;
                    }
                }
            }
            
            li_div.innerHTML = colorC_lis[d].innerHTML;
            colorC_lis[d].innerHTML = '';
            btn.setAttribute('qi','1');
            btn.setAttribute('qifei','1');
        }else if(qifei == 1){
            // 起飞
            btn.setAttribute('bushuhou',bushuhou + random);
            bushuhou = Number(btn.getAttribute('bushuhou'));
            // 黄色从第一个开始
            if(color == 'yellow'){
                if(bushuhou == 5 || bushuhou == 1){
                    zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                    btn.setAttribute('bushuhou',bushuhou + 4);
                    bushuhou = Number(btn.getAttribute('bushuhou'));
                }
                zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                map_li[bushuhou].children[0].innerHTML =  li_div.innerHTML;
            }else if(color == 'blue'){
                // 蓝色从第13个开始
                btn.setAttribute('bushuhou',bushuhou + 13);
                bushuhou = Number(btn.getAttribute('bushuhou'));
                if(bushuhou == 18 || bushuhou == 14){
                    zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                    btn.setAttribute('bushuhou',bushuhou + 4);
                    bushuhou = Number(btn.getAttribute('bushuhou'));
                }
                zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                map_li[bushuhou].children[0].innerHTML =  li_div.innerHTML;
            }else if(color == 'green'){
                // 绿色从第26个开始
                btn.setAttribute('bushuhou',bushuhou + 26);
                bushuhou = Number(btn.getAttribute('bushuhou'));
                if(bushuhou == 31 || bushuhou == 27){
                    zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                    btn.setAttribute('bushuhou',bushuhou + 4);
                    bushuhou = Number(btn.getAttribute('bushuhou'));
                }
                zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                map_li[bushuhou].children[0].innerHTML =  li_div.innerHTML;
            }else if(color == 'red'){
                // 红色从第39个开始
                btn.setAttribute('bushuhou',bushuhou + 39);
                bushuhou = Number(btn.getAttribute('bushuhou'));
                if(bushuhou == 44 || bushuhou == 40){
                    zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                    btn.setAttribute('bushuhou',bushuhou + 4);
                    bushuhou = Number(btn.getAttribute('bushuhou'));
                }
                zhuang(bushuhou);// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
                map_li[bushuhou].children[0].innerHTML =  li_div.innerHTML;
            }
            
            li_div.innerHTML = '';
            btn.setAttribute('bushuqian',bushuhou);
            bushuqian = Number(btn.getAttribute('bushuqian'));
            btn.setAttribute('qifei','2');
        }else if(qifei == 2){
            btn.setAttribute('bushuhou',bushuhou + random + 1);
            bushuhou = Number(btn.getAttribute('bushuhou'));

            if(color == 'yellow'){
                // 黄色飞机
                yellowFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou);
            }else if(color == 'blue'){
                // 蓝色
                blueFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou,zuihou2)
            }else if(color == 'green'){
                // 绿色
                greenFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou,zuihou2)
            }else if(color == 'red'){
                // 红色
                redFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou,zuihou2)
            }
        }
        touzi_dong = true;
    },3100)
}



// --------------------------------------------飞机事件---------------------------------------
// 当后面飞机撞到前面飞机时出现动态图
var images = document.getElementById('images');
function img(){
    images.innerHTML = '<img src="images/xiangzhuang.gif" alt="">';
    setTimeout(function(){
        images.innerHTML = '';
    },2000);
}
// 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
function zhuang(bushuhou){
    if(map_li[bushuhou].children[0].children[0]){
        if(map_li[bushuhou].children[0].children[0].className == 'feiji huang'){
            yellowC_lis[0].innerHTML = map_li[bushuhou].children[0].innerHTML;
            img()
            initialization(sz_box1);// 初始化条件
        }else if(map_li[bushuhou].children[0].children[0].className == 'feiji lan'){
            blueC_lis[0].innerHTML = map_li[bushuhou].children[0].innerHTML;
            img()
            initialization(sz_box2);// 初始化条件
        }else if(map_li[bushuhou].children[0].children[0].className == 'feiji lv'){
            greenC_lis[0].innerHTML = map_li[bushuhou].children[0].innerHTML;
            img()
            initialization(sz_box3);// 初始化条件
        }else if(map_li[bushuhou].children[0].children[0].className == 'feiji hong'){
            redC_lis[0].innerHTML = map_li[bushuhou].children[0].innerHTML;
            img()
            initialization(sz_box4);// 初始化条件
        }
        map_li[bushuhou].children[0].innerHTML = '';
    }
}



// 初始化条件
function initialization(btn){
    btn.setAttribute('qi','0');
    btn.setAttribute('qifei','0');
    btn.setAttribute('zuihou','0');
    btn.setAttribute('bushuhou','0');
    btn.setAttribute('bushuqian','0');
    btn.setAttribute('zuihou2','0');
}

// 移动
function yidong(bushuqian,bushuhou,btn){
    var div =  map_li[bushuqian].children[0].innerHTML;
    map_li[bushuqian].children[0].innerHTML = '';
    // 当后面飞机撞到前面飞机时把前面飞机撞回飞机场 
    zhuang(bushuhou);

    map_li[bushuhou].children[0].innerHTML = div;
    btn.setAttribute('bushuqian',bushuhou);
    bushuqian = Number(btn.getAttribute('bushuqian'));
}




// 一样颜色跳过
function skip(btn,bushuhou,bushuqian,color,zuihou){
    yidong(bushuqian,bushuhou,btn);
    btn.setAttribute('bushuqian',bushuhou);
    bushuqian = Number(btn.getAttribute('bushuqian'));
    
    // 黄
    if(bushuhou == 17 && color == 'yellow'){
        btn.setAttribute('bushuhou',bushuhou + 12);
        bushuhou = Number(btn.getAttribute('bushuhou'));
        if(map_li[60].children[0].children[0]){
            greenC_lis[0].innerHTML = map_li[60].children[0].innerHTML;
            initialization(sz_box3);
            map_li[60].children[0].innerHTML = '';
        }
    }else if(bushuhou == 30 && color == 'blue'){// 蓝
        btn.setAttribute('bushuhou',bushuhou + 12);
        bushuhou = Number(btn.getAttribute('bushuhou'));
        if(map_li[66].children[0].children[0]){
            redC_lis[0].innerHTML = map_li[66].children[0].innerHTML;
            initialization(sz_box4);
            map_li[66].children[0].innerHTML = '';
        }
    }else if(bushuhou == 43 && color == 'green'){// 绿
        btn.setAttribute('bushuhou','3');
        bushuhou = Number(btn.getAttribute('bushuhou'));
        btn.setAttribute('zuihou','1');
        zuihou = Number(btn.getAttribute('zuihou'));
        if(map_li[72].children[0].children[0]){
            yellowC_lis[0].innerHTML = map_li[72].children[0].innerHTML;
            initialization(sz_box1);
            map_li[72].children[0].innerHTML = '';
        }
    }else if(bushuhou == 4 && color == 'red'){// 红
        btn.setAttribute('bushuhou',bushuhou + 12);
        bushuhou = Number(btn.getAttribute('bushuhou'));
        if(map_li[54].children[0].children[0]){
            blueC_lis[0].innerHTML = map_li[54].children[0].innerHTML;
            initialization(sz_box2);
            map_li[54].children[0].innerHTML = '';
        }
    }else{
        btn.setAttribute('bushuhou',bushuhou + 4);
        bushuhou = Number(btn.getAttribute('bushuhou'));
    }
    yidong(bushuqian,bushuhou,btn);
}

// 飞机到终点掉头起飞飞走
function feizou(over,dushu){
    var bu = 0;
    var jiaodu = 0;
    var gaodu = 0;
    var jiaodutime = setInterval(function(){
        if(dushu == 0){
            jiaodu += 0;
        }else if(dushu < 0){
            jiaodu -= 5;
        }else{
            jiaodu += 5;
        }
        if(over){
            over.style.transform = 'rotate('+jiaodu+'deg)';
        }
        if(jiaodu == dushu){
            clearInterval(jiaodutime);
            var gaodutime = setInterval(function(){
                gaodu += 10;
                over.style.transform = 'rotate('+jiaodu+'deg) translatez('+gaodu+'px)';
                if(gaodu == 500){
                    clearInterval(gaodutime);
                    var butime = setInterval(function(){
                        bu -= 10;
                        over.style.transform = 'rotate('+jiaodu+'deg) translatez('+gaodu+'px) translatey('+bu+'px)';
                        if(bu == -500){
                            clearInterval(butime);
                        }
                    },30)
                }
            },30)
        }
    },30)
}

// ---------------------------------------------------飞机--------------------------------------------------
function yellowFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou){
     // 黄
     if(bushuhou > 49 && zuihou == 0 && color == 'yellow'){
        btn.setAttribute('bushuhou',bushuhou + 20);
        bushuhou = Number(btn.getAttribute('bushuhou'));
        btn.setAttribute('zuihou','1');
    }
    if(bushuhou > 75 && color == 'yellow'){
        // 点数超过终点后退
        btn.setAttribute('bushuhou', 75 - (bushuhou - 75));
        bushuhou = Number(btn.getAttribute('bushuhou'));
        yidong(bushuqian,bushuhou,btn);
    }else if(bushuhou == 75 && color == 'yellow'){
        // 飞机完成
        yidong(bushuqian,bushuhou,btn);
        var over = map_li[bushuhou].children[0].children[0];
        feizou(over,90);
        setTimeout(function(){
            map_li[bushuhou].children[0].innerHTML = '';
        },3540);
        // 获胜条件
        btn.setAttribute('feiji', feiji + 1);
        feiji = Number(btn.getAttribute('feiji'));
        if(feiji == 4){
            alert('黄色飞机获胜');
        }
        console.log('黄 = '+ feiji);
        // 初始化条件
        initialization(btn);
    }else{
        if(map_li[bushuhou].getAttribute('bg') == 'yellow'){
            skip(btn,bushuhou,bushuqian,color);
        }else{
            yidong(bushuqian,bushuhou,btn);
        }
    }
}






function blueFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou,zuihou2){
    // 蓝
    if(bushuhou > 51 && zuihou == 0 && color == 'blue' || bushuhou == 50 && zuihou == 0 && color == 'blue'){

        if(bushuhou == 50){
            btn.setAttribute('bushuhou','2');
            bushuhou = Number(btn.getAttribute('bushuhou'));
            yidong(bushuqian,bushuhou,btn);
        }else{
            btn.setAttribute('bushuhou',bushuhou - 52);
            bushuhou = Number(btn.getAttribute('bushuhou'));
            yidong(bushuqian,bushuhou,btn);
        }
        btn.setAttribute('zuihou','1');
        zuihou = Number(btn.getAttribute('zuihou'));
    }else if(bushuhou > 10 && color == 'blue' && zuihou == 1 && zuihou2 == 0){
        btn.setAttribute('bushuhou',bushuhou + 41);
        bushuhou = Number(btn.getAttribute('bushuhou'));
        btn.setAttribute('zuihou2','1');
        zuihou2 = Number(btn.getAttribute('zuihou2'));
        yidong(bushuqian,bushuhou,btn);
        if(bushuhou == 57 && color == 'blue'){
            // 飞机完成
            var over = map_li[bushuhou].children[0].children[0];
            feizou(over,180);
            setTimeout(function(){
                map_li[bushuhou].children[0].innerHTML = '';
            },3660);
            // 获胜条件
            btn.setAttribute('feiji', feiji + 1);
            feiji = Number(btn.getAttribute('feiji'));
            if(feiji == 4){
                alert('蓝色飞机获胜');
            }
            console.log('蓝 = '+ feiji);
            // 初始化条件
            initialization(btn);
        }
    }else if(bushuhou > 57 && color == 'blue' && zuihou == 1){
       // 点数超过终点后退
       btn.setAttribute('bushuhou', 57 - (bushuhou - 57));
       bushuhou = Number(btn.getAttribute('bushuhou'));
       yidong(bushuqian,bushuhou,btn);
   }else if(bushuhou == 57 && color == 'blue'){
       // 飞机完成
       yidong(bushuqian,bushuhou,btn);
       var over = map_li[bushuhou].children[0].children[0];
       feizou(over,180);
       setTimeout(function(){
           map_li[bushuhou].children[0].innerHTML = '';
       },3660);
       // 获胜条件
       btn.setAttribute('feiji', feiji + 1);
       feiji = Number(btn.getAttribute('feiji'));
       if(feiji == 4){
           alert('蓝色飞机获胜');
       }
       console.log('蓝 = '+ feiji);
       // 初始化条件
       initialization(btn);
   }else{
       if(map_li[bushuhou].getAttribute('bg') == 'blue'){
           skip(btn,bushuhou,bushuqian,color)
       }else{
           yidong(bushuqian,bushuhou,btn);
       }
   }
}

function greenFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou,zuihou2){
    // 绿
    if(bushuhou > 51 && zuihou == 0 && color == 'green' || bushuhou == 51 && zuihou == 0 && color == 'green'){
        if(bushuhou == 51){
            btn.setAttribute('bushuhou','3');
            bushuhou = Number(btn.getAttribute('bushuhou'));
            yidong(bushuqian,bushuhou,btn);
        }else{
            btn.setAttribute('bushuhou',bushuhou - 52);
            bushuhou = Number(btn.getAttribute('bushuhou'));
            yidong(bushuqian,bushuhou,btn);
        }
        btn.setAttribute('zuihou','1');
        zuihou = Number(btn.getAttribute('zuihou'));
    }else if(bushuhou > 23 && color == 'green' && zuihou == 1 && zuihou2 == 0){
        btn.setAttribute('bushuhou',bushuhou + 34);
        zuihou = Number(btn.getAttribute('zuihou'));
        btn.setAttribute('zuihou2','1');
        zuihou2 = Number(btn.getAttribute('zuihou2'));
        yidong(bushuqian,bushuhou,btn);
        if(bushuhou == 63 && color == 'green'){
            // 飞机完成
            var over = map_li[bushuhou].children[0].children[0];
            feizou(over,-90);
            setTimeout(function(){
                map_li[bushuhou].children[0].innerHTML = '';
            },3540);
             // 获胜条件
             btn.setAttribute('feiji', feiji + 1);
             var feiji = Number(btn.getAttribute('feiji'));
             if(feiji == 4){
                 alert('绿色飞机获胜');
             }
             console.log('绿 = '+ feiji);
             // 初始化条件
             initialization(btn);
         }
    }else if(bushuhou > 63 && color == 'green' && zuihou == 1){
       // 点数超过终点后退
       btn.setAttribute('bushuhou', 63 - (bushuhou - 63));
       bushuhou = Number(btn.getAttribute('bushuhou'));
       yidong(bushuqian,bushuhou,btn);
   }else if(bushuhou == 63 && color == 'green'){
      // 飞机完成
      yidong(bushuqian,bushuhou,btn);
      var over = map_li[bushuhou].children[0].children[0];
      feizou(over,-90);
      setTimeout(function(){
          map_li[bushuhou].children[0].innerHTML = '';
      },3540);
       // 获胜条件
       btn.setAttribute('feiji', feiji + 1);
       feiji = Number(btn.getAttribute('feiji'));
       if(feiji == 4){
           alert('绿色飞机获胜');
       }
       console.log('绿 = '+ feiji);
       // 初始化条件
       initialization(btn);
   }else{
       if(map_li[bushuhou].getAttribute('bg') == 'green'){
           skip(btn,bushuhou,bushuqian,color,zuihou)
       }else{
           yidong(bushuqian,bushuhou,btn);
       }
   }
}

function redFeiji(bushuhou,bushuqian,color,btn,feiji,zuihou,zuihou2){
    // 红
    if(bushuhou > 51 && zuihou == 0 && color == 'red' || bushuhou == 48 && zuihou == 0 && color == 'red'){
        if(bushuhou == 48){
            btn.setAttribute('bushuhou','0');
            bushuhou = Number(btn.getAttribute('bushuhou'));
            yidong(bushuqian,bushuhou,btn);
        }else{
            btn.setAttribute('bushuhou',bushuhou - 52);
            bushuhou = Number(btn.getAttribute('bushuhou'));
            yidong(bushuqian,bushuhou,btn);
        }
        btn.setAttribute('zuihou','1');
        zuihou = Number(btn.getAttribute('zuihou'));

    }else if(bushuhou > 36 && color == 'red' && zuihou == 1 && zuihou2 == 0){
        btn.setAttribute('bushuhou',bushuhou + 27);
        bushuhou = Number(btn.getAttribute('bushuhou'));
        btn.setAttribute('zuihou2','1');
        zuihou2 = Number(btn.getAttribute('zuihou2'));
        yidong(bushuqian,bushuhou,btn);
        if(bushuhou == 69 && color == 'red'){
            // 飞机完成
            var over = map_li[bushuhou].children[0].children[0];
            feizou(over,0);
            setTimeout(function(){
                map_li[bushuhou].children[0].innerHTML = '';
            },3000);
            // 获胜条件
            btn.setAttribute('feiji', feiji + 1);
            feiji = Number(btn.getAttribute('feiji'));
            if(feiji == 4){
                alert('红色飞机获胜');
            }
            console.log('红 = '+ feiji);
            // 初始化条件
            initialization(btn);
        }
    }else if(bushuhou > 69 && color == 'red' && zuihou2 == 1){
       // 点数超过终点后退
       btn.setAttribute('bushuhou', 69 - (bushuhou - 69));
       bushuhou = Number(btn.getAttribute('bushuhou'));
       yidong(bushuqian,bushuhou,btn);
   }else if(bushuhou == 69 && color == 'red'){
       // 飞机完成
       yidong(bushuqian,bushuhou,btn);
       var over = map_li[bushuhou].children[0].children[0];
       feizou(over,0);
       setTimeout(function(){
           map_li[bushuhou].children[0].innerHTML = '';
       },3000);
       // 获胜条件
       btn.setAttribute('feiji', feiji + 1);
       feiji = Number(btn.getAttribute('feiji'));
       if(feiji == 4){
           alert('红色飞机获胜');
       }
       console.log('红 = '+ feiji);
       // 初始化条件
       initialization(btn);
   }else{
        if(map_li[bushuhou].getAttribute('bg') == 'red'){
            skip(btn,bushuhou,bushuqian,color)
        }else{
            yidong(bushuqian,bushuhou,btn);
        }
    }
}











