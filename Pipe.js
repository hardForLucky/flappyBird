(function  () {
	
	var Pipe = function  (options) {
		this._init(options);
	};

	Pipe.prototype = {
		constructor:Pipe,
		_init:function  (options) {
			this.ctx = options.ctx;
			this.cvW = this.ctx.canvas.width;
			this.cvH = this.ctx.canvas.height;
			this.x = options.x;
			this.upY = 0;
			this.downY = 0;
			this.imgUp = options.imgUp;
			this.imgDown = options.imgDown;
			this.imgW = this.cvW/6;
			this.imgH = this.imgUp.height;
			this.space = this.cvH/5;
			this.step = 2;
			this.initPipeY();
		},
		draw:function  () {
			var ctx = this.ctx;
			ctx.save();
			// ctx.beginPath();
        	
        	this.x -=this.step;
        	if(this.x <= -this.imgW){
        		this.x += this.imgW*3*3;
        		this.initPipeY();
        	}
        	
        	//画管道
        	ctx.drawImage(this.imgUp,this.x,this.upY,this.imgW,this.imgH);
        	ctx.drawImage(this.imgDown,this.x,this.downY,this.imgW,this.imgH);

        	this.initPath();
			ctx.restore();
		},
		initPipeY:function  () {
			var upHeight = Math.floor(Math.random()*this.cvH/3) + this.cvH/6;
			this.upY = upHeight - this.imgH;
			this.downY = upHeight + this.space;
		},
		initPath:function  () {
			this.ctx.rect(this.x-12,this.upY+14,this.imgW+28,this.imgH);
			this.ctx.rect(this.x-12,this.downY-14,this.imgW+28,this.imgH);
			// this.ctx.fill();
		}
	}

	Fly.getPipe = function  (options) {
		return new Pipe(options);
	};
}).call(Fly);