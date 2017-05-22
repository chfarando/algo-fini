var Link = function(x,y,container, cross) {

  this.x = x;
  this.y = y;

  this.cross = cross;

  this.container = container;

  this.kills = 0;

  this.size = 50;

  this.speed = 1;

  this.div;

  this.badguy;

  this.show = function() {

    this.div = document.createElement('div');
    this.div.style.position = 'absolute';
    this.div.style.width = '30px';
    this.div.style.height = '30px';
    this.div.style.backgroundColor = 'green';
    this.div.style.left = (this.x * this.size) + 'px';
    this.div.style.top = (this.y * this.size) + 'px';
    this.container.appendChild(this.div);

  }

  this.listen = function() {

    var _this = this;

    window.addEventListener('keypress', function(e){

        // UP
        if (e.keyCode === _this.cross[0]) {
          _this.direction = 'up';
          _this.go();
        }

        // RIGHT
        if(e.keyCode === _this.cross[1]) {
          _this.direction = 'right';
          _this.go();
        }

        // LEFT
        if(e.keyCode === _this.cross[2]) {
          _this.direction = 'left';
          _this.go();
        }

        // DOWN
        if (e.keyCode === _this.cross[3]) {
          _this.direction = 'down';
          _this.go();
        }

        if (e.keyCode === 102){
          _this.shoot();
        }

    });


  }

  this.go = function(){

    if(this.direction === 'up') {
      this.y -= this.speed;
    } else if(this.direction === 'down'){
      this.y += this.speed;
    } else if(this.direction === 'left'){
      this.x -= this.speed;
    } else if (this.direction === 'right'){
      this.x += this.speed;
    } else{
      return false;
    }

    this.div.style.left = (this.x * this.size) + 'px';
    this.div.style.top = (this.y * this.size) + 'px';

  }

  this.shoot = function() {

    var arrow = new Arrow(this.x,this.y,this.direction, this.container, this.badguy, this);

  }

















































































































































  

  this.spawn = function() {

    if(this.kills < 200) {
      this.badguy = new Badguy(5,5, this.container,this);
    } else {
      this.container.style.backgroundColor = 'orange';
      this.badguy = new Boss(5,5,this.container, this);
    }

  }


  this.show();
  this.listen();
  this.spawn();

}
