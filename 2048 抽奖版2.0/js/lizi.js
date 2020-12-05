;(function(){
    var myCanvas = document.getElementById('myCanvas');
    var cxt = myCanvas.getContext('2d');
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    myCanvas.width = winWidth;
    myCanvas.height = winHeight;
    // 生成60个点
    var arr = [];
    var arrlength = arr.length;
    var arr1 = [];
    var dians = 500;
    if(winWidth >= 1900){
        dians = 1000;
    }
    // window.onresize = function(){
    //     winWidth = window.innerWidth;
    //     winHeight = window.innerHeight;
    //     if(winWidth >= 1800){
    //         dians = 1000;
    //     }else{
    //         dians = 500;
    //     }
    //     console.log(winWidth)
    // }
    
    
    for(var i = 0; i < dians; i++){
        dian();
    }
    // 点
    
    function dian(){
        var x = Math.floor(Math.random()*winWidth);
        var y = Math.floor(Math.random()*winHeight);
        var obj = {
            left : x,
            top : y
        };
        arr.push(obj);
    
        // 每个点方向不同
        var sun = Math.floor(Math.random()*4);
        if(sun == 0){
            var obj1 = {
                topSpeed : 1,
                leftSpeed : 1
            }
        }else if(sun == 1){
            var obj1 = {
                topSpeed : -1,
                leftSpeed : -1
            }
        }else if(sun == 2){
            var obj1 = {
                topSpeed : -1,
                leftSpeed : 1
            }
        }else if(sun == 3){
            var obj1 = {
                topSpeed : 1,
                leftSpeed : -1
            }
        }
        
        arr1.push(obj1);
    }
    
    
    
    // 点移动
    var arr1length = arr1.length;
    setInterval(function(){
        clearCanvas();
        var maxleft = winWidth - 3;
        var maxtop = winHeight - 3;
        for(var i = 0; i < arr1length; i++){
            arr[i].top += arr1[i].topSpeed;
            arr[i].left += arr1[i].leftSpeed;
            if(arr[i].left < 0 || arr[i].left > maxleft){
                arr1[i].leftSpeed *= -1;
            }else if(arr[i].top < 0 || arr[i].top > maxtop){
                arr1[i].topSpeed *= -1;
            }
            // dian()
            // 生成点
            cxt.fillStyle = '#fff';
            cxt.beginPath();
            cxt.arc(arr[i].left,arr[i].top,3,0,Math.PI*2,true);
            cxt.closePath();
            cxt.fill();
        } 
       xian()
    },30)
    function xian(){
         // 点连线
         for(var j = 0; j < arr.length; j++){
            for(var i = 0; i < arr.length; i++){
                if(Math.abs(arr[j].left - arr[i].left) < 50 && Math.abs(arr[j].top - arr[i].top) < 50){
                    cxt.moveTo(arr[j].left,arr[j].top);
                    cxt.lineTo(arr[i].left,arr[i].top);
                }
            }
        }
        var bgcolor = cxt.createLinearGradient(0,0,winWidth,winHeight);
        bgcolor.addColorStop(0,'pink');
        bgcolor.addColorStop(0.1,'red');
        bgcolor.addColorStop(0.2,'green');
        bgcolor.addColorStop(0.3,'yellow');
        bgcolor.addColorStop(0.4,'yellow');
        bgcolor.addColorStop(0.5,'rgb(7, 215, 252)');
        bgcolor.addColorStop(0.6,'rgb(64, 252, 7)');
        bgcolor.addColorStop(0.7,'rgb(252, 138, 7)');
        bgcolor.addColorStop(0.8,'rgb(252, 7, 81)');
        bgcolor.addColorStop(0.9,'rgb(224, 12, 243)');
        bgcolor.addColorStop(1,'blue');
        cxt.strokeStyle = bgcolor;
        cxt.stroke();
    }
    //    清空画布
    function clearCanvas(){
        var c = document.getElementById('myCanvas');
        var cxt = c.getContext('2d');
        c.height = c.height;
    }
    // 鼠标移动
    var x = 0;
    var y = 0;
    var obj = {
            left : x,
            top : y
        };
    arr.push(obj);
    var myCanvasL = myCanvas.offsetLeft;
    var myCanvasT = myCanvas.offsetTop;
    document.onmousemove = function(e){
        var left = e.pageX;
        var top = e.pageY;
        // console.log(left)
        arr[arr.length - 1].left = left - myCanvasL;
        arr[arr.length - 1].top = top - myCanvasT;
    }
})();

