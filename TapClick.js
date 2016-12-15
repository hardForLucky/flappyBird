(function  (w) {
	var tap = function  (ele,callback) {
		if(ele && typeof ele == "object"){
			var start = 0;
			var isMove = false;
			ele.addEventListener("touchstart",function  (e) {
				start = Date.now();
			});
			ele.addEventListener("touchmove",function  (e) {
				isMove = true;
			});
			ele.addEventListener("touchend",function  (e) {
				if(!isMove && (Date.now()- start) <=150 ){
					e.offsetX = e.changedTouches[0].clientX;
					e.offsetY = e.changedTouches[0].clientY;
					callback && callback(e);
				}
				isMove = false;
			});
		}
	}

	var tapClick = null;
	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
		console.log("手机");
		tapClick = tap;
	}else {
		console.log("电脑");
		tapClick = function  (ele,callback) {
			ele.addEventListener('click',callback);
		}
	}

	w.tapClick = tapClick;
})(window);