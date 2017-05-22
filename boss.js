var Boss = function (x, y, container,link) {

  this.x = x;
  this.y = y;


  this.div;

  this.size = 50;

  this.container = container;

  this.show = function() {

    this.div = document.createElement('div');
    this.div.style.position = 'absolute';
    this.div.style.width = '30px';
    this.div.style.height = '30px';
    this.div.style.backgroundColor = 'black';
    this.div.style.left = (this.x * this.size) + 'px';
    this.div.style.top = (this.y * this.size) + 'px';
    this.container.appendChild(this.div);

  }

  this.go = function() {



    var _this = this;

    setInterval(function() {
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var minusOrPlus = Math.random() < 0.5 ? -1 : 1;

      _this.x += plusOrMinus;
      _this.y += minusOrPlus;

      if(_this.x <= 0){
        _this.x = 0;
      }

      if(_this.y <= 0){
        _this.y = 0;
      }

      if(_this.x >= 12){
        _this.x = 12;
      }

      if(_this.y >= 12){
        _this.y = 12;
      }

      _this.div.style.left = (_this.x * _this.size) + 'px';
      _this.div.style.top = (_this.y * _this.size) + 'px';
    },250);

  }

  this.despawn = function() {

    this.x = -1000;
    this.y = -1000;

    link.kills += 1;
    this.div.remove();

    setTimeout(function(){
      link.spawn();
    },500);

  }


  this.go();
  this.show();

}
