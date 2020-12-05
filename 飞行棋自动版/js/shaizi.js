var sz_box = document.getElementById('sz-box');
var max = 6;
var min = 0;
var arr = [obj={x:-85,z:-5},obj={x:5,y:-175},obj={x:5,y:-85},obj={x:5,y:85},obj={x:5,y:-5},obj={x:95,z:5}];
var a = 0;
sz_box.onclick = function(){
    window.random = Math.floor(Math.random() * (max - min)) + min;
    var x1 = arr[random].x + 3600;
    var y1 = arr[random].y + 3600;
    var z1 = arr[random].z + 3600;
    if(a == 1){
        x1 -= 3600;
        y1 -= 3600;
        z1 -= 3600;
        a = 0;
    }else{
        a = 1;
    }
    if(z1){
        sz_box.style.transform = 'rotatex('+x1+'deg) rotatez('+z1+'deg)';
    }else{
        sz_box.style.transform = 'rotatex('+x1+'deg) rotatey('+y1+'deg)';
    }
}