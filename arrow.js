var Arrow = function(x,y,direction, container, badguy, link) {

  this.x = x;
  this.y = y;
  this.direction = direction;
  this.container = container;
  this.size = 50;

  this.div;

  this.go = function() {

    if(this.direction === 'left'){
      this.x -= 1;
    } else if(this.direction === 'right'){
      this.x += 1;
    } else if(this.direction === 'up'){
      this.y -= 1;
    } else if(this.direction === 'down'){
      this.y += 1;
    }

    if(this.x > 30 || this.y > 30 || this.x < 0 || this.y < 0){

      this.dispawn();

    }

    var _this = this;

    this.div.style.left = (this.x * this.size) + 'px';
    this.div.style.top = (this.y * this.size) + 'px';

    if(this.x === badguy.x && this.y === badguy.y) {
      badguy.despawn();
    }

    setTimeout(function(){
      _this.go();
    },100);

  }

  this.show = function() {

    this.div = document.createElement('div');
    this.div.style.position = 'absolute';
    this.div.style.width = '30px';
    this.div.style.height = '30px';
    this.div.style.backgroundColor = 'yellow';
    this.div.style.left = (this.x * this.size) + 'px';
    this.div.style.top = (this.y * this.size) + 'px';
    this.container.appendChild(this.div);

  }

  this.dispawn = function() {

    this.div.remove();


  }

  this.show();
  this.go();

}
