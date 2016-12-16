(function  () {
	
	var Bird = function  (options) {
		this._init(options);
	};

	Bird.prototype = {
		constructor:Bird,
		_init:function  (options) {
			this.ctx = options.ctx;
			var cv = ctx.canvas;
			this.img = options.img;
			this.imgW = this.img.width / 3;
		    this.imgH = this.img.height;
		    this.drawW = cv.width / 7;
		    this.drawH = this.imgH / this.imgW * this.drawW;
		    this.fromIndex = 0;
		    this.y = options.y;
		    this.x = 100;
		    this.speed = 0;
		    this.a = 0.001;
		    this.maxSpeed = 0.5;//最大速度
		    this.maxAngle = 45;//最大旋转角度
		    this.curAngle = 0;//一开始的角度
		    // console.log(this.y);
		},
		draw:function  (delat) {
			// console.log(delat);       

			this.y +=  this.speed*delat + 1/2 * this.a * delat * delat;
			this.speed += this.a * delat;
			var ctx = this.ctx;

			ctx.save();
			// ctx.beginPath();

			this.curAngle = this.speed / this.maxSpeed * this.maxAngle;
			if(this.curAngle >= this.maxAngle){
				this.curAngle = this.maxAngle;
			}
			ctx.translate(this.x,this.y);
			ctx.rotate(this.curAngle / 180 * Math.PI);
			ctx.drawImage(this.img, this.imgW*Math.floor(this.fromIndex), 0,
			this.imgW, this.imgH,-this.drawW/2,-this.drawH/2,this.drawW,this.drawH);

			this.fromIndex+=0.1;
			this.fromIndex %= 3;

			ctx.restore();
		}
	}

	Fly.getBird = function  (options) {
		return new Bird(options);
	};
}).call(Fly);