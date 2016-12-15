(function  () {
	
	var Land = function  (options) {
		this._init(options);
	};

	Land.prototype = {
		constructor:Land,
		_init:function  (options) {
			this.ctx = options.ctx;
			this.x = options.x;
			this.y = options.y;
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
        		this.x += this.imgW * 4;
        	}
        	ctx.drawImage(this.img,this.x,this.y,this.imgW,this.imgH);

			ctx.restore();
		}
	}

	Fly.getLand = function  (options) {
		return new Land(options);
	};
}).call(Fly);