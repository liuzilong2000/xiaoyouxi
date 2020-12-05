var map_ul = document.getElementById('map-ul');
var btn = document.getElementById('btn');

var yellowC = document.getElementById('yellowC');
var yellowC_lis = yellowC.children;

var blueC = document.getElementById('blueC');

var greenC = document.getElementById('greenC');

var redC = document.getElementById('redC');

var lis = map_ul.children;


var yellow_fj1 = document.getElementById('yellow-fj1');
move(yellow_fj1);
var yellow_fj2 = document.getElementById('yellow-fj2');
move(yellow_fj2);
var yellow_fj3 = document.getElementById('yellow-fj3');
move(yellow_fj3);
var yellow_fj4 = document.getElementById('yellow-fj4');
move(yellow_fj4);
var blue_fj1 = document.getElementById('blue-fj1');
move(blue_fj1);
var blue_fj2 = document.getElementById('blue-fj2');
move(blue_fj2);
var blue_fj3 = document.getElementById('blue-fj3');
move(blue_fj3);
var blue_fj4 = document.getElementById('blue-fj4');
move(blue_fj4);
var green_fj1 = document.getElementById('green-fj1');
move(green_fj1);
var green_fj2 = document.getElementById('green-fj2');
move(green_fj2);
var green_fj3 = document.getElementById('green-fj3');
move(green_fj3);
var green_fj4 = document.getElementById('green-fj4');
move(green_fj4);
var red_fj1 = document.getElementById('red-fj1');
move(red_fj1);
var red_fj2 = document.getElementById('red-fj2');
move(red_fj2);
var red_fj3 = document.getElementById('red-fj3');
move(red_fj3);
var red_fj4 = document.getElementById('red-fj4');
move(red_fj4);






function move(feiji){
    feiji.onmousedown = function(e){
        // 获取鼠标的位置
        var pageX1 = e.pageX;
        var pageY1 = e.pageY;
        // 获取元素位置
        var offX = feiji.offsetLeft;
        var offY = feiji.offsetTop;
        // 获取鼠标在元素中的位置
        var offLx = pageX1 - offX;
        var offLy = pageY1 - offY;
        if(!document.onmousemove){
            document.onmousemove = function(e){
                feiji.style.left = e.pageX - offLx + 'px';
                feiji.style.top = e.pageY - offLy + 'px';
            }
        }
    }
    document.onmouseup = function(){
        document.onmousemove = null;
    }
}

