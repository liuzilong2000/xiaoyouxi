// 雷的个数
var leishu = 30; 
// 格子的个数
var kuan = 20;
var gao = 20;
var geshu = kuan * gao;
var box = document.getElementById('box');
box.style.width = kuan * 30 + 30 + 'px';
box.style.height = gao * 30 + 30 + 'px';

var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var ul = document.getElementById('ul');
btn.onclick = function(){
    var inpV = inp.value;
    if(!isNaN(inpV) && inpV > 0){
        if(inpV > geshu){
            inpV = geshu;
        }
        ul.innerHTML = '';
        saolei(inpV);
    }else{
        alert('请输入数字或正值');
    }
    
}

saolei(leishu);
function saolei(leishu){
    var lei = '<img src="images/bomb.jpg" alt="">';
    var leishu = leishu || 30;
    // --------------------------------------生成小格子------------------------------------------

    var arr = [];
    var arr1 = [];
    for(var i = 0; i < geshu; i++){
        var li = document.createElement('li');
        var div = document.createElement('div');
        li.setAttribute('zdy',i);
        li.setAttribute('zuodianji','0');
       
        li.appendChild(div);
        ul.appendChild(li);
        arr.push(li);
        arr1.push(li);
        // 给li点击事件
        // 右键
        li.onclick = dianji;
        // 左键
        li.oncontextmenu = zuo;
    }
    // -----------------------------------------随机生成雷----------------------------------------
    var lis =  ul.childNodes;
    var liLength = ul.childNodes.length;
    for(var i = 0; i < leishu; i++){
        var random = Math.floor(Math.random() * liLength);
        if(arr1[random] !== 'NaN'){
            lis[random].children[0].innerHTML = lei;
            arr1.splice(random,1,'NaN');
        }else{
            i--;
        }
        
    }
    
    // ----------------------------------------------生成数字--------------------------------------
    for(var i = 0; i < liLength; i++){
        sun(i,kuan);
    }
    function sun(i,w,h){
        var a = 0;
        if(lis[i].children[0].innerHTML !== lei){
            if(lis[i - (w+1)] && lis[i - (w+1)].children[0].innerHTML == lei && i % w !== 0){
                a += 1;
            }
            if(lis[i - w] && lis[i - w].children[0].innerHTML == lei){
                a += 1;
            }
            if(lis[i - (w-1)] && lis[i - (w-1)].children[0].innerHTML == lei && i % w !== (w-1)){
                a += 1;
            }
            if(lis[i - 1] && lis[i - 1].children[0].innerHTML == lei && i % w !== 0){
                a += 1;
            }
            if(lis[i + 1] && lis[i + 1].children[0].innerHTML == lei && i % w !== (w-1)){
                a += 1;
            }
            if(lis[i + (w-1)] && lis[i + (w-1)].children[0].innerHTML == lei && i % w !== 0){
                a += 1;
            }
            if(lis[i + w] && lis[i + w].children[0].innerHTML == lei){
                a += 1;
            }
            if(lis[i + (w+1)] && lis[i + (w+1)].children[0].innerHTML == lei && i % w !== (w-1)){
                a += 1;
            }
            if(a !== 0){
                lis[i].children[0].innerHTML = a;
                if(a == 2){
                    lis[i].children[0].style.color = 'rgb(149, 236, 9)';
                }else if(a == 3){
                    lis[i].children[0].style.color = 'rgb(187, 236, 9)';
                }else if(a == 4){
                    lis[i].children[0].style.color = 'rgb(236, 213, 9)';
                }else if(a == 5){
                    lis[i].children[0].style.color = 'rgb(236, 164, 9)';
                }else if(a == 6){
                    lis[i].children[0].style.color = 'rgb(236, 119, 9)';
                }else if(a == 7){
                    lis[i].children[0].style.color = 'rgb(236, 81, 9)';
                }else if(a == 8){
                    lis[i].children[0].style.color = 'rgb(250, 3, 3)';
                }
                lis[i].setAttribute('shu',a);
            }else if(a == 0){
                lis[i].setAttribute('shu','');
            }
        }else{
            lis[i].setAttribute('shu',lei);
        }
    }
    // -------------------------------------------点击显示下面内容-----------------------------------
    var baozha = document.getElementById('baozha');
    function dianji(){
        if(this.children[0].innerHTML !== '<img src="images/flag.jpg" alt="">'){
            this.style.backgroundColor = '#fff';
            this.children[0].style.display = 'block';
            var center =  this.children[0].innerHTML;
            var zdy = this.getAttribute('zdy');
            kong(zdy,center,kuan);
            victory();
            // 比较是否是炸弹如果是则失败
            if(center == lei){
                baozha.innerHTML = '<img src="images/baozha.gif" alt="">';
                for(var i = 0; i < liLength; i++){
                    lis[i].onclick = over;
                    lis[i].oncontextmenu = over;
                    if(lis[i].children[0].innerHTML == '<img src="images/flag.jpg" alt="">'){
                        lis[i].children[0].innerHTML =  lis[i].getAttribute('shu');
                    }
                    lis[i].children[0].style.display = 'block';
                }
                setTimeout(function(){
                    baozha.innerHTML = '';
                    alert('游戏结束！');
                },1000)
            }
        }
    }
    function over(){
        alert('游戏结束请刷新，重新开始！');
    }
    function kong(zdy,center,kuan){
        // 点击判断是空后,接着判断相邻的是否为空，如果是接着此效果
        if(center == ''){
            function left(zdy,center){
                if( arr[Number(zdy) - 1] && zdy % kuan !== 0 && center == '' &&  arr[Number(zdy) - 1].children[0].style.display !== 'block'){
                    arr[Number(zdy) - 1].style.backgroundColor = '#fff';
                    arr[Number(zdy) - 1].children[0].style.display = 'block';
                    if(arr[Number(zdy) - 1].children[0].innerHTML == '<img src="images/flag.jpg" alt="">'){
                        arr[Number(zdy) - 1].children[0].style.display = 'inline-block';
                    }
                    bottom(zdy - 1,arr[Number(zdy) - 1].children[0].innerHTML);
                    top(zdy - 1,arr[Number(zdy) - 1].children[0].innerHTML);
                    left(zdy - 1,arr[Number(zdy) - 1].children[0].innerHTML);
                }
            }
            left(zdy,center);

            function right(zdy,center){
                if(arr[Number(zdy) + 1] && zdy % kuan !== (kuan-1) && center == '' &&  arr[Number(zdy) + 1].children[0].style.display !== 'block'){
                    arr[Number(zdy) + 1].style.backgroundColor = '#fff';
                    arr[Number(zdy) + 1].children[0].style.display = 'block';
                    if(arr[Number(zdy) + 1].children[0].innerHTML == '<img src="images/flag.jpg" alt="">'){
                        arr[Number(zdy) + 1].children[0].style.display = 'inline-block';
                    }
                    right(Number(zdy) + 1,arr[Number(zdy) + 1].children[0].innerHTML);
                    top(Number(zdy) + 1,arr[Number(zdy) + 1].children[0].innerHTML);
                    bottom(Number(zdy) + 1,arr[Number(zdy) + 1].children[0].innerHTML);
                }
            }
            right(zdy,center);

            function bottom(zdy,center){
                if(arr[Number(zdy) + kuan] && center == '' &&  arr[Number(zdy) + kuan].children[0].style.display !== 'block'){
                    arr[Number(zdy) + kuan].style.backgroundColor = '#fff';
                    arr[Number(zdy) + kuan].children[0].style.display = 'block';
                    if(arr[Number(zdy) + kuan].children[0].innerHTML == '<img src="images/flag.jpg" alt="">'){
                        arr[Number(zdy) + kuan].children[0].style.display = 'inline-block';
                    }
                    
                    bottom(Number(zdy) + kuan,arr[Number(zdy) + kuan].children[0].innerHTML);
                    left(Number(zdy) + kuan,arr[Number(zdy) + kuan].children[0].innerHTML);
                    right(Number(zdy) + kuan,arr[Number(zdy) + kuan].children[0].innerHTML);
                    
                }
            }
            bottom(zdy,center);
            
            function top(zdy,center){
                if(arr[Number(zdy) - kuan] && center == '' &&  arr[Number(zdy) - kuan].children[0].style.display !== 'block'){
                    arr[Number(zdy) - kuan].style.backgroundColor = '#fff';
                    arr[Number(zdy) - kuan].children[0].style.display = 'block';
                    if(arr[Number(zdy) - kuan].children[0].innerHTML == '<img src="images/flag.jpg" alt="">'){
                        arr[Number(zdy) - kuan].children[0].style.display = 'inline-block';
                    }
                    
                    top(Number(zdy) - kuan,arr[Number(zdy) - kuan].children[0].innerHTML);
                    left(Number(zdy) - kuan,arr[Number(zdy) - kuan].children[0].innerHTML);
                    right(Number(zdy) - kuan,arr[Number(zdy) - kuan].children[0].innerHTML);
                }
            }
            top(zdy,center);
        }
    }
// --------------------------------------------左键插小红旗-----------------------------------------
    function zuo(e){
        e.preventDefault();
        var conter = this.getAttribute('shu');
        if(this.children[0].style.display !== 'block'){
            var zuodianji = this.getAttribute('zuodianji');
            if(zuodianji == 0){
                this.children[0].innerHTML = '<img src="images/flag.jpg" alt="">';
                this.children[0].style.display = 'inline-block';
                this.setAttribute('zuodianji','1');
            }else if(zuodianji == 1){
                this.children[0].innerHTML = conter;
                this.children[0].style.display = 'none';
                this.style.backgroundColor = 'rgb(122, 128, 123)';
                this.setAttribute('zuodianji','0');
            }
        }
    }
// ---------------------------------------------当界面只剩雷没有点开则胜利------------------------------------
    var shengli = false;
    function victory(){
        var v = 0;
        for(var i = 0; i < liLength; i++){
            if(lis[i].children[0].innerHTML !== lei && lis[i].children[0].style.display == 'block' && shengli == false){
                v++;
                if(liLength - v == leishu){
                    shengli = true;
                    victory();
                }
            }
            if(shengli){
                if(lis[i].children[0].innerHTML == '<img src="images/flag.jpg" alt="">'){
                    lis[i].children[0].innerHTML = lei;
                }
                lis[i].children[0].style.display = 'block';
                baozha.innerHTML = '<img src="images/yanhua.gif" alt="">';
            }
        }
        if(shengli){
            for(var j = 0; j < liLength; j++){
                lis[j].onclick = over;
                lis[j].oncontextmenu = over;
            }
            setTimeout(function(){
                baozha.innerHTML = '';
                alert('恭喜获胜！！！');
            },3000);
        }
    }
}



