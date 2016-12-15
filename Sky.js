(function  () {
	
	var Sky = function  (options) {
		this._init(options);
	};

	Sky.prototype = {
		constructor:Sky,
		_init:function  (options) {
			this.ctx = options.ctx;
			this.x = options.x;
			this.y = 0;
			this.img = options.img;
			this.imgW = this.img.width;
			this.imgH = this.img.height;
			this.step = 2;
		},
		draw:function  () {
			var ctx = this.ctx;
			ctx.save();
			// ctx.beginPath();
        
        	this.x -= this.step;
        	if(this.x <= - this.imgW){
        		this.x += this.imgW * 2;
        	}
        	ctx.drawImage(this.img,this.x,this.y,this.imgW,this.imgH);

			ctx.restore();
		}
	}

	Fly.getSky = function  (options) {
		return new Sky(options);
	};
}).call(Fly);