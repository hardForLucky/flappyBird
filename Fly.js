/*把全部对象当作这个对象的属性，避免全局污染*/
(function  () {
	var Fly = {};
	// 这个函数的作用 传进一个图片来源数组，和回调函数，根据来源数组创建对应图片对象，
	// 放到一个对象里面，把对象当作回调函数的参数进行调用；
	Fly.loadImages = function  (arrSrc,callback) {
		var count = 0,
			imgList = {};
		arrSrc.forEach(function  (value) {
			var img = new Image();
			img.src = "imgs/"+value+".png";
			imgList[value] = img;
			img.onload = function  () {
				count++;
				if(count === arrSrc.length){
					callback(imgList);
				}
			}
		});
	}

	this.Fly = Fly;
}).call(null);