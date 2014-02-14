enchant();

window.onload = function () {
	var game = new Game(320, 420);
	var counter_flg_x = 1;
	var counter_flg_y = 1;
	var no_random_x = 0;
	var no_random_y = 0;

	var counter_event;
	var button_event;
	var kijun_x = 210;
	var kijun_y = 210;
	var p = 0;
	var nanido = 4;
	var pause = 1;
	var button_on = false;
	var game_over = false;
	var maxData;
	game.preload('button.png', 'fish1.png', 'mato1.png');
	game.onload = function () {
		// リアルタイム点数用配列
		var fish_point_a = Array(500);
		var fish_point_a_num = 0;
		
		//まと設置
		var mato1 = new Sprite(210, 210);
		var mato1_s = new Surface(210, 210);
		mato1_s.context.beginPath();
		mato1_s.context.arc(105, 105, 100, 0, Math.PI*2, true);
		mato1_s.context.fillStyle  = "#CCC";
		mato1_s.context.fill();

		mato1.image = mato1_s;
		mato1.x = 10;
		mato1.y = 10;
		game.rootScene.addChild(mato1);

		var mato2 = new Sprite(210, 210);
		var mato2_s = new Surface(210, 210);
		mato2_s.context.beginPath();
		mato2_s.context.arc(105, 105, 90, 0, Math.PI*2, true);
		mato2_s.context.fillStyle  = "#FFF";
		mato2_s.context.fill();

		mato2.image = mato2_s;
		mato2.x = 10;
		mato2.y = 10;
		game.rootScene.addChild(mato2);

		var mato3 = new Sprite(210, 210);
		var mato3_s = new Surface(210, 210);
		mato3_s.context.beginPath();
		mato3_s.context.arc(105, 105, 60, 0, Math.PI*2, true);
		mato3_s.context.fillStyle  = "#CCC";
		mato3_s.context.fill();

		mato3.image = mato3_s;
		mato3.x = 10;
		mato3.y = 10;
		game.rootScene.addChild(mato3);

		var mato4 = new Sprite(210, 210);
		var mato4_s = new Surface(210, 210);
		mato4_s.context.beginPath();
		mato4_s.context.arc(105, 105, 50, 0, Math.PI*2, true);
		mato4_s.context.fillStyle  = "#FFF";
		mato4_s.context.fill();

		mato4.image = mato4_s;
		mato4.x = 10;
		mato4.y = 10;
		game.rootScene.addChild(mato4);
		
		var mato5 = new Sprite(210, 210);
		var mato5_s = new Surface(210, 210);
		mato5_s.context.beginPath();
		mato5_s.context.arc(105, 105, 20, 0, Math.PI*2, true);
		mato5_s.context.fillStyle  = "#CCC";
		mato5_s.context.fill();

		mato5.image = mato5_s;
		mato5.x = 10;
		mato5.y = 10;
		game.rootScene.addChild(mato5);
		
		// お魚
		var fish = new Sprite(40, 20);
		fish.image = game.assets['fish1.png'];
		fish.x = 50;
		fish.y = 50;
		 fish.rotation=180;
		
		// ボタン
		var button2 = new Sprite(210, 210);
		var button2_s = new Surface(210, 210);
		button2_s.context.beginPath();
		button2_s.context.arc(105, 105, 50, 0, Math.PI*2, true);
		button2_s.context.fillStyle  = "#CCC";
		button2_s.context.fill();
		button2.image = button2_s;
		button2.x = 10;
		button2.y = 180;
		game.rootScene.addChild(button2);
		
		var button = new Sprite(210, 210);
		var button_s = new Surface(210, 210);
		button_s.context.beginPath();
		button_s.context.font = "50pt 'ＭＳ Ｐゴシック'";
		button_s.context.fillText("押", 70,130);
		button_s.context.fillStyle = "#000";

		button.image = button_s;
		button.x = 10;
		button.y = 180;
		game.rootScene.addChild(button);

		// ポイント
		var point = new Label();
		point.x = 0;
		point.y = 0;
		point.text = "ポイント：" + p + "P";
		
		// 残り時間
		var frame = new Label();
		frame.x = 180;
		frame.y = 0;
		frame.text = 300;
		game.rootScene.addChild(frame);
		
		// インフォメーション
		var Ready = new Label();
		Ready.x = 50;
		Ready.y = 100;
		Ready.color = "blue";
		Ready.font = "font-size:larger";
//		Ready.font = "background-color:#fff;";
		
		// もう一回やるかな？
		var Reload = new Label("");
		Reload.x = 60;
		Reload.y = 230;
		Reload.color = "red";
		Reload.font = "size:20px";
		
		// 最高得点
		var max = new Label("");
		max.x = 10;
		max.y = 350;
		max.font = "size:20pt";
		game.rootScene.addChild(max);
		$.get("get.php", function(data){
			max.text = "最高スコア：" + data;
			maxData = data.split(":");
		});
		
		// ランダム
		fish.addEventListener(enchant.Event.ENTER_FRAME,counter_event = function () {
			if (game.frame <= 30) {
				if (game.frame == 0) {
					Ready.text = "READY…";
				} else if (game.frame == 20) {
					Ready.text = "GO!!";
				} else if (game.frame == 30) {
					Ready.text = "";
				}
			} else {
				if (330-game.frame == 0) {
					frame.text = 330-game.frame;
					if (p<=500) {
						Ready.text = "まだまだだね。";
					} else if (p<=1000) {
						Ready.text = "まぁまぁかな。";
					} else if (p<=1500) {
						Ready.text = "それなりかな。";
					} else if (p<=2000) {
						Ready.text = "結構やるねー";
					} else {
						Ready.text = "すげーー！！";
					}
					button_on = false;
					if (p > maxData[1]) {
						$("a[rel^='prettyPopin']").attr("href", "max.php?point="+p);
						$("a[rel^='prettyPopin']").click();
					}
				}
				if (330-game.frame == -30) {
					Reload.text = "もう一回遊べるどん！<BR>ボタンを押してね！";
					game_over = true;
				}
				if (330-game.frame > 0) {
					button_on = true;
					frame.text = 330-game.frame;
				
					if (this.x >= kijun_x) {
						counter_flg_x = -1;
						fish.rotation=0;
						this.x =  this.x + (nanido * counter_flg_x);
						no_random_x = 1;
					} else if (this.x <= 10) {
						counter_flg_x = 1;
						fish.rotation=180;
						this.x =  this.x + (nanido * counter_flg_x);
						no_random_x = 1;
					}
					if (this.y >= kijun_y) {
						counter_flg_y = -1;
						fish.rotation=0;
						this.y =  this.y + (nanido * counter_flg_y);
						no_random_y = 1;
					} else if (this.y <= 10) {
						counter_flg_y = 1;
						fish.rotation=180;
						this.y =  this.y + (nanido * counter_flg_y);
						no_random_y = 1;
					}

					if (Math.random() >= 0.75) {
						if (no_random_x == 0 && Math.random() >= 0.75) {
							counter_flg_x *= -1;
							fish.rotation += 180;
						}
						if (no_random_y == 0 && Math.random() >= 0.75) {
							counter_flg_y *= -1;
							fish.rotation += 180;
						}
					}
					
					if ((this.x >= (kijun_x / 2 - 20)) && (this.x <= (kijun_x / 2 + 20))) {
						this.x =  this.x + ((nanido * 3) * counter_flg_x)
					} else if ((this.x >= (kijun_x / 2 - 50)) && (this.x <= (kijun_x / 2 + 50))) {
						this.x =  this.x + ((nanido * 2) * counter_flg_x)
					} else {
						this.x =  this.x + (nanido * counter_flg_x)
					}

					if ((this.y >= (kijun_y / 2 - 20)) && (this.y <= (kijun_y / 2 + 20))) {
						this.y =  this.y + ((nanido * 3) * counter_flg_y)
					} else if ((this.y >= (kijun_y / 2 - 50)) && (this.y <= (kijun_y / 2 + 50))) {
						this.y =  this.y + ((nanido * 2) * counter_flg_y)
					} else {
						this.y =  this.y + (nanido * counter_flg_y)
					}
					
					no_random_x = 0;
					no_random_y = 0;
				}
			}
		 });
		 
		 button.addEventListener(enchant.Event.TOUCH_START, button_event = function() {
		 	if (game_over) {
		 		game.frame = 0;
		 		button_on = false;
		 		p = 0;
		 		game_over = false;
		 		Reload.text = "";
		 		Ready.text = ""
		 		point.text = "ポイント：0P";
		 		for(i=0;i<fish_point_a_num;i++) {
		 			fish_point_a[i].text = "";
		 		}
		 		fish_point_a_num = 0;
		 		$.get("get.php", function(data){
					max.text = "最高スコア：" + data;
					maxData = data.split(":");
				});
		 	} else {
			 	if (button_on) {
				 	var fish_p = 0;
					if (fish.x - (kijun_x / 2) < 0) {
						fish_p = 10 + kijun_x - (fish.x - (kijun_x / 2)) * -1 * 2;
					} else {
						fish_p = 10 + kijun_x - (fish.x - (kijun_x / 2)) * 2;
					}
					
					if (fish.y - (kijun_y / 2) < 0) {
						fish_p += 10 + kijun_y - (fish.y - (kijun_y / 2)) * -1 * 2;
					} else {
						fish_p += 10 + kijun_y - (fish.y - (kijun_y / 2)) * 2;
					}
					fish_p -= 200;
					p += fish_p;
					fish_point_a[fish_point_a_num] = new Label();
					fish_point_a[fish_point_a_num].x = fish.x;
					fish_point_a[fish_point_a_num].y = fish.y;
					fish_point_a[fish_point_a_num].color = fish_p < 0 ? "#FF0000" : "#000000";
					fish_point_a[fish_point_a_num].text = fish_p;
					game.rootScene.addChild(fish_point_a[fish_point_a_num]);
					fish_point_a_num++;
					point.text = "ポイント：" + p + "P";
					button_on = false;
				}
			}
		 })
		
		game.rootScene.addChild(fish);
		game.rootScene.addChild(point);
		game.rootScene.addChild(Ready);
		game.rootScene.addChild(Reload);
		
		game.start();
	};
};