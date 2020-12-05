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


    
        
    btn.onclick = function(){
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
                            xc(5)
                        }else if(deg > 22.5 && deg <= 76.5){
                            xc(4)
                        }else if(deg > 76.5 && deg <= 112.5){
                            xc(3)
                        }else if(deg > 112.5 && deg <= 157.5){
                            xc(2);
                        }else if(deg > 157.5 && deg <= 202.5){
                            xc(1)
                        }else if(deg > 202.5 && deg <= 247.5){
                            alert('再来2次');
                        }else if(deg > 247.5 && deg <= 292.5){
                            alert('倒退3步');
                        }else if(deg > 292.5 && deg <= 337.5){
                            xc(6)
                        }else if(deg > 337.5 && deg <= 382.5){
                            xc(5)
                        }
                    },3500)
                
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
         alert('请走'+sun+'步')
    }
})();
