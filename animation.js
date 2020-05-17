
var timeID = null;

// 当前DOM要移动的元素，current当前的位置，target移动后的位置，step每次移动的距离，每次移动花费的时间
function animation (Dom, current, target, step, time) {

		  		// 保证让当前元素移动的位置要当前元素实际的位置保持一致
		  		current = Dom.offsetLeft;

			  	//判断程序中只允许有一个定时器
			  	if(Dom.timeID != null) {
			  		 //将该定时器停掉
			  		 clearInterval(Dom.timeID);
			  	}
			  	//每隔20毫秒定时器中的代码就执行一次
			  	Dom.timeID = setInterval(function(){

			  		//如果当前位置大于结束位置，向相反的方向移动
			  		if( current > target) {

						  step = -Math.abs(step);
						  //返回X的绝对值
			  		}
			  	 	//如果当前的位置超出了结束位置，停止动画，将当前的位置 设置为结束的位置
			  	 	if( Math.abs(current-target) <= Math.abs(step) ) {

			  	 		//超出结束位置后，将目标位置赋值给当前位置
			  	 		current = target;
			  	 		//超出结束位置，立马要停止动画
			  	 		clearInterval(Dom.timeID);
			  	 	}else {
			  	 		 current += step;
			  	 	}
			  	 	//将current位置赋值给div元素
			  	 	Dom.style.left = current +'px';
			  	 }, time)
}