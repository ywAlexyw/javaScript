/***
 *  小羊的动画
 * 1，小羊自身的动画    小羊移动的动画
 * 2，动画的协调
 * 3，羊群？
 *
 *
 *
 *
 */

var sheepShaun = {
  sPars: {
    speed: 7, //速度
    backNum: 0, //背景动画的位置变量x
    frequency: 70, //频率
    stage: document.getElementsByClassName("stage")[0], //舞台
    maxSheep: 8
  },
  init: function() {
    this.creatSheep(); //创建羊
  },
  creatSheep: function() {
    function SheepClass(data) {
      //羊的类  构造函数
      this.sheep = document.createElement("div"); //创建一只羊
      data.stage.appendChild(this.sheep); //放到舞台上
      this.sheep.className = "sheep";
      this.frequency = Math.floor(Math.random() * data.frequency) + 30; //30~100
      this.speed = data.speed;
      this.backNum = data.backNum;
      this.stage = data.stage;
      this.top = 0;
      this.currSpeed = data.speed;
    }

    var oneSheep = new SheepClass(this.sPars); //创建一只羊 实例
    // 动画开启
    this.sheepRunning(oneSheep);

    //多只羊 ？

    var _this = this;
    var timer = setInterval(function() {
      // this指向的window
      var sheeps = _this.sPars.stage.children.length; //舞台上有多少只羊
      if (sheeps < _this.sPars.maxSheep) {
        var oneSheep = new SheepClass(_this.sPars); //创建一只羊 实例
        _this.sheepRunning(oneSheep);
      }
    }, 1000);
  },
  sheepRunning: function(obj) {
    //动画

    obj.sheepAnimate = setInterval(function() {
      obj.backNum = obj.backNum + obj.sheep.offsetWidth;
      if (obj.backNum >= 1312) {
        obj.backNum = 0;
      }
      var cot = obj.sheep.offsetLeft - obj.speed;
      if (cot <= -obj.sheep.offsetWidth) {
        clearInterval(obj.sheepAnimate);
        console.log("remove");
        obj.stage.removeChild(obj.sheep);
      }
      obj.sheep.style.left = cot + "px"; //yi移动动画
      obj.sheep.style.backgroundPosition =
        -obj.backNum + "px " + obj.top + "px";
    }, obj.frequency);

    // 小羊拖拽
    obj.sheep.onmousedown = function(e) {
      //记录按下点
      obj.speed = 0;
      obj.top = -128;

      obj.x = e.pageX;
      obj.y = e.pageY;

      document.onmousemove = function(e) {
        var chax = e.pageX - obj.x;
        var chay = e.pageY - obj.y;
        obj.sheep.style.left = chax + obj.sheep.offsetLeft + "px";
        obj.sheep.style.top = chay + obj.sheep.offsetTop + "px";

        obj.x = e.pageX; //更新最新的点
        obj.y = e.pageY;
      };

      this.onmouseup = function(e) {
        document.onmousemove = null;
        obj.speed = obj.currSpeed;
        obj.top = 0;
      };
    };
  }
};
sheepShaun.init();

// var sheep = document.getElementsByClassName("sheep")[0]; //获取羊的dom元素
// //自身动画 核心动画
// var backNum = 0;
// var speed  = 10 ;
// var sheepAnimate = setInterval(function() {
//   backNum = backNum + 164;
//   if(backNum >= 1312){
//     backNum = 0;
//   }
//   var cot = sheep.offsetLeft - speed;
//   if(cot<=-164){
//     clearInterval(sheepAnimate);
//     console.log('remove')
//   }
//   sheep.style.left = cot + 'px';//yi移动动画
//   sheep.style.backgroundPosition = -backNum + "px " + "0" + "px";
// }, 50);
