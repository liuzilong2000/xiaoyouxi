;(function(){
    var btn = document.getElementById('btn');
    var sbox = document.getElementById('sbox');
    var box1 = document.getElementById('box1');
    var style = document.getElementById('style');
    var random1 = 0;
    var sun = 0;
    var max = 10000;
    var min = 5000;
    var arr = ['name','name1'];
    var a = 0;
    var deg = 0;
    var timer = true;
    // 2048
    var lis = ul.children;
    var li_number = lis.length;

    
        
    btn.onclick = function(){
        if(timer){
            timer = false;
            if(fen >= 500){
                window.fen -= 500;
                branch.innerText = fen;
                var random = Math.floor(Math.random() * (max - min)) + min;
                random1 = random + random1;
                if(a == 0){
                    style.innerHTML = style.innerHTML+' @keyframes '+arr[1]+'{0%{transform: translate(-50%, -50%) rotate('+sun+'deg);}100%{transform: translate(-50%, -50%) rotate('+random1+'deg);}}';
                    sbox.style.animation = ''+arr[1]+' 3s forwards';
                    a = 1;
                }else{
                    style.innerHTML = style.innerHTML+' @keyframes '+arr[0]+'{0%{transform: translate(-50%, -50%) rotate('+sun+'deg);}100%{transform: translate(-50%, -50%) rotate('+random1+'deg);}}';
                    sbox.style.animation = ''+arr[0]+' 3s forwards';
                    a = 0;
                }

                sun = random1;
                    setTimeout(function(){
                        deg = (random1 / 360 - Math.floor(random1 / 360)) * 360;
                        if(deg >= 0 && deg < 22.5){
                            xc(4)
                        }else if(deg > 22.5 && deg <= 76.5){
                            xc(64)
                        }else if(deg > 76.5 && deg <= 112.5){
                            xc(16)
                        }else if(deg > 112.5 && deg <= 157.5){
                            xc(32);
                        }else if(deg > 157.5 && deg <= 202.5){
                            xc(2)
                        }else if(deg > 202.5 && deg <= 247.5){
                            alert('很遗憾 再接再厉');
                        }else if(deg > 247.5 && deg <= 292.5){
                            xc(8)
                        }else if(deg > 292.5 && deg <= 337.5){
                            window.fen += 1000;
                            alert('恭喜获得1000分')
                            branch.innerText = fen;
                        }else if(deg > 337.5 && deg <= 382.5){
                            xc(4)
                        }
                        timer = true;
                    },3500)
                
                }else{
                    alert('您的分数不足');
                    timer = true;
            }
        }
    }
    var b = 0;
    setInterval(function(){
        if(b == 0){
            box1.style.transform = 'rotate(25deg)';
            b = 1;
        }else{  
            box1.style.transform = 'rotate(0deg)';
            b = 0;
        }   
    },1000);


    function xc(sun){
        for(var i = 0; i < li_number; i++){
            var li = lis[i];
            var text = li.innerText;
            if(text == sun){
                lis[i].innerText = '';
                lis[i].className = '';
            }
         }
         alert('恭喜 消除所有'+sun+' ')
    }
})();
