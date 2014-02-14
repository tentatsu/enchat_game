enchant();

window.onload = function () {
	var game = new Game(320, 320);
	var counter_flg = 1;
	var button_flg = 1;
	var counter_event;
	var kijun_x = 300;
	game.preload('button.png');
	game.onload = function () {
		//くまさん何匹出すか
		var num = 10;
		var bear = Array(num);
		//カウンター設置
		var counter_back = new Sprite(kijun_x, 30);
//		counter_back.backgroundColor = '#FF0000';
		counter_back.background = '-moz-linear-gradient(left, #f00, #ff0, #f00)';
		counter_back.background = '-webkit-gradient(linear, left center, right center, from(#f00), color-stop(50%, #ff0), to(#f00))';

		counter_back.x = 10;
		counter_back.y = 50;
		var counter = new Sprite(10, 30);
		counter.backgroundColor = '#0000FF';
		counter.x = kijun_x/2;
		counter.y = 50;
		
		var button = new Sprite(100, 100);
		button.image = game.assets['button.png'];
		button.x = 110;
		button.y = 100;

		var point = new Label();
		point.x = 0;
		point.y = 0;
		
		counter.addEventListener(enchant.Event.ENTER_FRAME,counter_event = function () {
			if (this.x >= kijun_x) {
			 counter_flg = -1;
			} else if (this.x <= 10) {
			 counter_flg = 1;
			}
			if ((this.x >= (kijun_x / 2 - 20)) && (this.x <= (kijun_x / 2 + 20))) {
				this.x =  this.x + (15 * counter_flg)
			} else if ((this.x >= (kijun_x / 2 - 50)) && (this.x <= (kijun_x / 2 + 50))) {
				this.x =  this.x + (10 * counter_flg)
			} else {
				this.x =  this.x + (5 * counter_flg)
			}
		 });
		 
		 button.addEventListener(enchant.Event.TOUCH_START, function() {
		 	if (button_flg == 1) {
			 	counter.removeEventListner(enchant.Event.ENTER_FRAME, counter_event);
				var p = 0;
				if (counter.x - (kijun_x / 2) < 0) {
					p = 10 + kijun_x - (counter.x - (kijun_x / 2)) * -1 * 2;
				} else {
					p = 10 + kijun_x - (counter.x - (kijun_x / 2)) * 2;
				}
				point.text = "ポイント：" + p + "P";
				game.rootScene.addChild(point);
				button_flg = 0;
			} else {
				counter.addEventListener(enchant.Event.ENTER_FRAME,counter_event);
				point.text = "";
				game.rootScene.addChild(point);
				button_flg = 1;
			}
		 })
		
		game.rootScene.addChild(counter_back);
		game.rootScene.addChild(counter);
		game.rootScene.addChild(button);
	};
	game.start();
};