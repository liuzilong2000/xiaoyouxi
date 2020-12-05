//----------------------Food-----------------------------
;(function(window,undefined){
// 食物对象
// 宽，高，横纵坐标，颜色
var elements = [];
var nums = -1;
(function Food(options){
	options = options || {};
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.r = options.r || 0;
	this.g = options.g || 0;
	this.b = options.b || 0;
	this.x = options.x || 0;
	this.y = options.y || 0;
	// 创建方法
	Food.prototype.init = function(map,num){
		delfood();
		var div = document.createElement('div');
		map.appendChild(div);
		elements.push(div);
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		// 先脱离文档流
		div.style.position = 'absolute';
		this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width + 'px';
		this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height + 'px';
		div.style.left = this.x;
		div.style.top = this.y;
		this.r = parseInt(Math.random() * (255 - 0) + 0);
		this.g = parseInt(Math.random() * (255 - 0) + 0);
		this.b = parseInt(Math.random() * (255 - 0) + 0);
		div.style.backgroundColor = 'rgb('+ this.r +','+ this.g +','+ this.b +')';
		// 边框
		div.style.borderStyle = 'solid';
		div.style.borderColor = 'rgb('+ this.b +','+ this.r +','+ this.g +')';
		div.style.borderWidth = '2px';
		div.style.borderRadius = '25%';
		div.style.boxSizing = 'border-box';
		// 分数
		nums++;
		num.innerText = ('总分：'+ nums);
	}
	window.Food = Food;
})();
// 删除食物
function delfood(){
	for(var i = elements.length - 1; i >= 0; i--){
		// 删除页面的食物
		elements[i].parentNode.removeChild(elements[i]);
		// 删除数组中的食物
		elements.splice(i,1);
	}
}
})(window,undefined)
//----------------------Snake------------------------------
// 创建蛇
;(function(window,undefined){
	var elements = [];
	function Snake(options){
		options = options || {};
		this.width = options.width || 20;
		this.height = options.height || 20;
		// 蛇移动的方向
		this.direction = options.direction || 'right';
		this.body = [
			{x: 3, y: 2, color: 'red'},
			{x: 2, y: 2, color: 'blue'},
			{x: 1, y: 2, color: 'blue'}
		];
	}
	Snake.prototype.render = function(map,food){
		remove();
		var r = parseInt(Math.random() * (255 - 0) + 0);
		var g = parseInt(Math.random() * (255 - 0) + 0);
		var b = parseInt(Math.random() * (255 - 0) + 0);
		for(var i = 0, len = this.body.length; i < len; i++){
			var object = this.body[i];
			// 创建div(蛇节)
			var div = document.createElement('div');
			div.style.position = 'absolute';
			map.appendChild(div);
			elements.push(div);
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
			div.style.left = object.x * this.width + 'px';
			div.style.top = object.y * this.height + 'px';
			div.style.backgroundColor = object.color;
			elements[0].style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
			div.style.borderColor = 'rgb('+ food.r +','+ food.g +','+ food.b +')';
			div.style.borderRadius = '50%';
			div.style.boxSizing = 'border-box';
			div.style.borderStyle = 'solid';
			div.style.borderWidth = '2px';
		}
	}
	// 删除蛇节
	function remove(){
		for(var i = elements.length - 1;i >= 0; i--){
			// 删除页面的蛇节
			elements[i].parentNode.removeChild(elements[i]);
			// 删除数组中的蛇节
			elements.splice(i,1);
		}
	}
	window.Snake = Snake;
	// 蛇的移动
	Snake.prototype.move = function(food,map){
		// 让身体移动到上一个身体的坐标
		for(var i = this.body.length - 1; i > 0; i--){
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}
		// 控制蛇头移动的方向
		var head = this.body[0];
		switch(this.direction){
			case 'right':
				head.x += 1;
				break;
			case 'left':
				head.x -= 1;
				break;
			case 'top':
				head.y -= 1;
				break;
			case 'bottom':
				head.y += 1;
				break;
		}
		var headX = head.x * this.width + 'px';
		var headY = head.y * this.height + 'px';
		if(headX === food.x && headY === food.y){
			// 获取蛇节的最后一节
			var last = this.body[this.body.length - 1];
			this.body.push({
				x: last.x,
				y: last.y,
				color:'rgb('+ food.r +','+ food.g +','+ food.b +')'
			})
			// 随机在地图上生成一个食物
			food.init(map,num);
		}
		
	}
})(window,undefined)
//---------------------------Missile------------------------
;(function(window,undefined){
	var missiles = [];
	function Missile(options){
		options = options || {}
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.color = options.color || 'red';
		this.x = options.x || 0;
		this.y = options.y || 0;
	}
	Missile.prototype.mis = function(big,map,snake){
		runMissile(big,map,snake)
		var div = document.createElement('div');
		big.appendChild(div);
		missiles.push(div);
		div.style.position = 'absolute'
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.color;
		this.x = -100+'px';
		this.y = parseInt(Math.random() * (big.offsetHeight / div.offsetHeight))*div.offsetHeight + 'px';
		div.style.left = this.x;
		div.style.top = this.y;

	}
	function runMissile(big,map,snake){
		var a = -100;

		var time = setInterval(function(){
			a+=20
			var x = snake.body[0].x;
			var y = snake.body[0].y;
			missiles[0].style.left = a + 'px';
			var mx = missiles[0].offsetLeft / 20 - 2;
			var my = missiles[0].offsetTop / 20;
			if(missiles[0].offsetLeft == 900){
				missiles[0].parentNode.removeChild(missiles[0]);
				missiles.splice(0,1)
				clearInterval(time)
				var b = new Missile(big,map,snake);
				b.mis(big,map,snake)
			}else if(mx == x && my == y){
				alert('ll')
			}
			console.log('宽'+missiles[0].offsetLeft / 20)
			console.log('高'+missiles[0].offsetTop / 20)
			console.log('x'+x)
			console.log('y'+y)
		},150)
	}
	
	window.Missile = Missile;
})(window,undefined)
//--------------------------game-------------------------------
;(function(window,undefined){
	var that;
	function Game(map,num,big){
		this.food = new Food();
		this.snake = new Snake();
		this.missile = new Missile();
		this.map = map;
		this.num = num;
		this.big = big;
		that = this;
	}
	Game.prototype.start = function(){
		// 1.把食物和蛇渲染到界面上
		this.food.init(this.map, this.num);
		this.snake.render(this.map,this.food);
		//this.missile.mis(this.big,this.map,this.snake)
		// 2.游戏的逻辑
		// 蛇移动
		runSnake();
		// 移动的方向
		binkey();
	}
	

	// 蛇移动的方向
	function binkey(){
		document.addEventListener('keydown',function(e){
			switch (e.keyCode){
				case 37:
					if(that.snake.direction == 'right'){
						that.snake.direction = 'right';
					}else{
						that.snake.direction = 'left';
					}
				break;
				case 38:
					if(that.snake.direction == 'bottom'){
						that.snake.direction = 'bottom';
					}else{
						that.snake.direction = 'top';
					}
				break;
				case 39:
					if(that.snake.direction == 'left'){
						that.snake.direction = 'left';
					}else{
						that.snake.direction = 'right';
					}
				break;
				case 40:
					if(that.snake.direction == 'top'){
						that.snake.direction = 'top';
					}else{
						that.snake.direction = 'bottom';
					}
				break;
			}
		},false)
	}
	function runSnake(){
		var timeId = setInterval(function(){
			that.snake.move(that.food,that.map);
			that.snake.render(that.map,that.food);
			// 遇到边界停止游戏
			var maxX = that.map.offsetWidth / that.snake.width;
			var maxY = that.map.offsetHeight / that.snake.height;
			var headX = that.snake.body[0].x;
			var headY = that.snake.body[0].y;
			// 碰到身体结束游戏
			for(var i = that.snake.body.length - 1; i > 0; i--){
				var x = that.snake.body[i].x;
				var y = that.snake.body[i].y;
				if(headX == x && headY == y){
					alert('游戏结束');
					clearInterval(timeId);
				}
			}
			// 遇到边界停止游戏
			if(headX >= maxX || headX < 0){
				alert('游戏结束');
				clearInterval(timeId);
			}else if(headY >= maxY || headY < 0){
				alert('游戏结束');
				clearInterval(timeId);
			}
		},150)
	}
	window.Game = Game;
})(window,undefined)

//---------------------------main---------------------------
;(function(window,undefined){
	var map = document.getElementById('map');
	var num = document.getElementById('num');
	var big = document.getElementById('big');
	var btn2 = document.getElementById('btn2');
	// 开始
	var a = 0;
	btn2.onclick = function(){
		if(a == 0){
			var game = new Game(map,num,big);
			game.start();
		}else{
			location.reload(false);
		}
		a++;
	}
	
})(window,undefined)

