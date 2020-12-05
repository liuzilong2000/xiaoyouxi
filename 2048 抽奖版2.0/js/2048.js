;(function(){
    var box = document.getElementById('box');
    var ul = document.getElementById('ul');
    var branch = document.getElementById('branch');
    var lis = ul.children;
    var li_number = lis.length;
// 设置自定义属性
for(var i = 0; i < li_number; i++){
   var li = lis[i];
   li.setAttribute('zdy',i)
}

// 初始化
for(var i = 0; i < 3; i++){
    var a = Math.floor(Math.random() * 16);
    for(var j = 0; j < li_number; j++){
        if(lis[j].getAttribute('zdy') == a){
            lis[j].className = 'num2';
            lis[j].innerText = '2';
        }
    }
}
var obj = {
    s2:'num2',
    s4:'num4',
    s8:'num8',
    s16:'num16',
    s32:'num32',
    s64:'num64',
    s128:'num128',
    s256:'num256',
    s512:'num512',
    s1024:'num1024',
    s2048:'num2048'
}
// 计分
var fen = 0;
// 右
function righter(for1,for2){
    for(var j = for1; j > for2; j--){          
        for(var i = for1; i > for2; i--){
            if(lis[i].innerText !== '' && Number(lis[i].getAttribute('zdy')) !== for1){
                if(lis[i+1].innerText == ''){
                    lis[i+1].innerText = lis[i].innerText;
                    // 背景颜色
                    var sun = lis[i+1].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[i+1].className = obj[sun2];

                    lis[i].innerText = '';
                    lis[i].className = '';
                }
                if(lis[j].innerText !== '' && j !== for1 && lis[j].innerText == lis[j+1].innerText){
                    lis[j+1].innerText = Number(lis[j].innerText) + Number(lis[j+1].innerText);
                    // 计分
                    fen += Number(lis[j+1].innerText);
                    // 背景颜色
                    var sun = lis[j+1].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[j+1].className = obj[sun2];

                    lis[j].innerText = '';
                    lis[j].className = '';
                }
            }
        }
    }
}
// 左
function lefter(for1,for2){
    for(var j = for1; j < for2; j++){          
        for(var i = for1; i < for2; i++){
            if(lis[i].innerText !== '' && Number(lis[i].getAttribute('zdy')) !== for1){
                if(lis[i-1].innerText == ''){
                    lis[i-1].innerText = lis[i].innerText;
                    // 背景颜色
                    var sun = lis[i-1].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[i-1].className = obj[sun2];

                    lis[i].innerText = '';
                    lis[i].className = '';


                }
                if(lis[j].innerText !== '' && j !== for1 && lis[j].innerText == lis[j-1].innerText){
                    lis[j-1].innerText = Number(lis[j].innerText) + Number(lis[j-1].innerText);
                    // 计分
                    fen += Number(lis[j-1].innerText);
                    // 背景颜色
                    var sun = lis[j-1].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[j-1].className = obj[sun2];
                    
                    lis[j].innerText = '';
                    lis[j].className = '';
                }
            }
        }
    }
}
// 上
function toper(arr){
    var arrTop = arr;
    for(var j = 0; j < 4; j++){          
        for(var i = 0; i < 4; i++){
            if(lis[arrTop[i]].innerText !== '' && Number(lis[arrTop[i]].getAttribute('zdy')) !== arrTop[0]){
                if(lis[arrTop[i]-4].innerText == ''){
                    lis[arrTop[i]-4].innerText = lis[arrTop[i]].innerText;
                    // 背景颜色
                    var sun = lis[arrTop[i]-4].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[arrTop[i]-4].className = obj[sun2];

                    lis[arrTop[i]].innerText = '';
                    lis[arrTop[i]].className = '';
                }
                if(lis[arrTop[j]].innerText !== '' && j !== 0 && lis[arrTop[j]].innerText == lis[arrTop[j]-4].innerText){
                    lis[arrTop[j]-4].innerText = Number(lis[arrTop[j]].innerText) + Number(lis[arrTop[j]-4].innerText);
                    // 计分
                    fen += Number(lis[arrTop[j]-4].innerText);
                    // 背景颜色
                    var sun = lis[arrTop[j]-4].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[arrTop[j]-4].className = obj[sun2];

                    lis[arrTop[j]].innerText = '';
                    lis[arrTop[j]].className = '';
                }
            }
        }
    }
}
// 下
function bottomer(arr){
    var arrBottom = arr;
    for(var j = 0; j < 4; j++){          
        for(var i = 0; i < 4; i++){
            if(lis[arrBottom[i]].innerText !== '' && Number(lis[arrBottom[i]].getAttribute('zdy')) !== arrBottom[0]){
                if(lis[arrBottom[i]+4].innerText == ''){
                    lis[arrBottom[i]+4].innerText = lis[arrBottom[i]].innerText;
                    // 背景颜色
                    var sun = lis[arrBottom[i]+4].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[arrBottom[i]+4].className = obj[sun2];

                    lis[arrBottom[i]].innerText = '';
                    lis[arrBottom[i]].className = '';
                }
                if(lis[arrBottom[j]].innerText !== '' && j !== 0 && lis[arrBottom[j]].innerText == lis[arrBottom[j]+4].innerText){
                    lis[arrBottom[j]+4].innerText = Number(lis[arrBottom[j]].innerText) + Number(lis[arrBottom[j]+4].innerText);
                    // 计分
                    fen += Number( lis[arrBottom[j]+4].innerText);
                    // 背景颜色
                    var sun = lis[arrBottom[j]+4].innerText;
                    if(sun >= 2048){
                        sun = 2048;
                    }
                    var sun2 = 's'+ sun;
                    lis[arrBottom[j]+4].className = obj[sun2];

                    lis[arrBottom[j]].innerText = '';
                    lis[arrBottom[j]].className = '';
                }
            }
        }
    }
}
document.onkeydown = function(e){
    // 左
    if(e.keyCode == 37){
        // 第一行
        lefter(0,4);
        // 第二行
        lefter(4,8);
        // 第三行
        lefter(8,12);
        // 第四行
        lefter(12,16);
        shengcheng()
    }
    // 右
    if(e.keyCode == 39){
        // 第一行
        righter(3,-1);
        // 第二行
        righter(7,3);
        // 第三行
        righter(11,7);
        // 第四行
        righter(15,11);
        shengcheng()
    }
    // 上
    if(e.keyCode == 38){
        // 第一列
        var arrTop1 = [0,4,8,12];
        toper(arrTop1);
        // 第二列
        var arrTop2 = [1,5,9,13];
        toper(arrTop2);
        // 第三列
        var arrTop3 = [2,6,10,14];
        toper(arrTop3);
        // 第四列
        var arrTop4 = [3,7,11,15];
        toper(arrTop4);
        shengcheng()
    }
    // 下
    if(e.keyCode == 40){
        // 第一列
        var arrBottom1 = [12,8,4,0]
        bottomer(arrBottom1);
        // 第二列
        var arrBottom2 = [13,9,5,1]
        bottomer(arrBottom2);
        // 第三列
        var arrBottom3 = [14,10,6,2]
        bottomer(arrBottom3);
        // 第四列
        var arrBottom4 = [15,11,7,3]
        bottomer(arrBottom4);
        shengcheng()
    }

    branch.innerText = fen;
    window.fen = fen;
    
    
    
}
function shengcheng(){
    setTimeout(function(){
    var arr = [];
    var arrlength = arr.length;
    for(var i = 0; i < arrlength; i++){
        arr.pop();
    }
    for(var j = 0; j < li_number; j++){
        var wu = lis[j].innerText;
        if(wu == ''){
            var zdys = lis[j].getAttribute('zdy');
            arr.push(zdys)
        }   
    }
    arrlength = arr.length;
    if(arrlength !== 0){
        var b = Math.floor(Math.random() * arrlength);
        if(fen <= 300){
            lis[arr[b]].className = 'num2';
            lis[arr[b]].innerText = '2';
        }else if(fen >= 300 && fen <= 1000){
            var a = Math.floor(Math.random() * 2);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }
        }else if(fen >= 1000 && fen <= 1500){
            var a = Math.floor(Math.random() * 3);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }else if(a==2){
                lis[arr[b]].className = 'num8';
                lis[arr[b]].innerText = '8';
            }
        }else if(fen >= 1500 && fen <= 5000){
            var a = Math.floor(Math.random() * 4);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }else if(a==2){
                lis[arr[b]].className = 'num8';
                lis[arr[b]].innerText = '8';
            }else if(a==3){
                lis[arr[b]].className = 'num16';
                lis[arr[b]].innerText = '16';
            }
        }else if(fen >= 5000 && fen <= 8000){
            var a = Math.floor(Math.random() * 5);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }else if(a==2){
                lis[arr[b]].className = 'num8';
                lis[arr[b]].innerText = '8';
            }else if(a==3){
                lis[arr[b]].className = 'num16';
                lis[arr[b]].innerText = '16';
            }else if(a==4){
                lis[arr[b]].className = 'num32';
                lis[arr[b]].innerText = '32';
            }
        }else if(fen >= 8000 && fen <= 10000){
            var a = Math.floor(Math.random() * 6);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }else if(a==2){
                lis[arr[b]].className = 'num8';
                lis[arr[b]].innerText = '8';
            }else if(a==3){
                lis[arr[b]].className = 'num16';
                lis[arr[b]].innerText = '16';
            }else if(a==4){
                lis[arr[b]].className = 'num32';
                lis[arr[b]].innerText = '32';
            }else if(a==5){
                lis[arr[b]].className = 'num64';
                lis[arr[b]].innerText = '64';
            }
        }else if(fen >= 10000 && fen <= 20000){
            var a = Math.floor(Math.random() * 7);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }else if(a==2){
                lis[arr[b]].className = 'num8';
                lis[arr[b]].innerText = '8';
            }else if(a==3){
                lis[arr[b]].className = 'num16';
                lis[arr[b]].innerText = '16';
            }else if(a==4){
                lis[arr[b]].className = 'num32';
                lis[arr[b]].innerText = '32';
            }else if(a==5){
                lis[arr[b]].className = 'num64';
                lis[arr[b]].innerText = '64';
            }else if(a==6){
                lis[arr[b]].className = 'num128';
                lis[arr[b]].innerText = '128';
            }
        }else if(fen >= 30000){
            var a = Math.floor(Math.random() * 8);
            if(a == 0){
                lis[arr[b]].className = 'num2';
                lis[arr[b]].innerText = '2';
            }else if(a==1){
                lis[arr[b]].className = 'num4';
                lis[arr[b]].innerText = '4';
            }else if(a==2){
                lis[arr[b]].className = 'num8';
                lis[arr[b]].innerText = '8';
            }else if(a==3){
                lis[arr[b]].className = 'num16';
                lis[arr[b]].innerText = '16';
            }else if(a==4){
                lis[arr[b]].className = 'num32';
                lis[arr[b]].innerText = '32';
            }else if(a==5){
                lis[arr[b]].className = 'num64';
                lis[arr[b]].innerText = '64';
            }else if(a==6){
                lis[arr[b]].className = 'num128';
                lis[arr[b]].innerText = '128';
            }else if(a==7){
                lis[arr[b]].className = 'num256';
                lis[arr[b]].innerText = '256';
            }
        }
    }
},500);
}



// 判断是否是移动端
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

// 如果是启动移动端代码
if(isAndroid){
    var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
    
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
    
        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
    
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
    
        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                break;
            case 1:
                // 上
                // 第一列
                var arrTop1 = [0,4,8,12];
                toper(arrTop1);
                // 第二列
                var arrTop2 = [1,5,9,13];
                toper(arrTop2);
                // 第三列
                var arrTop3 = [2,6,10,14];
                toper(arrTop3);
                // 第四列
                var arrTop4 = [3,7,11,15];
                toper(arrTop4);
                shengcheng()
                branch.innerText = fen;
                break;
            case 2:
                // 下
                // 第一列
                var arrBottom1 = [12,8,4,0]
                bottomer(arrBottom1);
                // 第二列
                var arrBottom2 = [13,9,5,1]
                bottomer(arrBottom2);
                // 第三列
                var arrBottom3 = [14,10,6,2]
                bottomer(arrBottom3);
                // 第四列
                var arrBottom4 = [15,11,7,3]
                bottomer(arrBottom4);
                shengcheng()
                branch.innerText = fen;
                break;
            case 3:
                // 左
                // 第一行
                lefter(0,4);
                // 第二行
                lefter(4,8);
                // 第三行
                lefter(8,12);
                // 第四行
                lefter(12,16);
                shengcheng()
                branch.innerText = fen;
                break;
            case 4:
                // 右
                // 第一行
                righter(3,-1);
                // 第二行
                righter(7,3);
                // 第三行
                righter(11,7);
                // 第四行
                righter(15,11);
                shengcheng()
                branch.innerText = fen;
                break;
            default:
        }
    }, false);
}

// 点击刷新按钮
let again_btn = document.getElementById('again_btn');
again_btn.onclick = function(){
    if(confirm("确实要重新开始吗？")){
        window.location.reload(); //确定后刷新页面
    }
}


})();