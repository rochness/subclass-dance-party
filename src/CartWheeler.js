var CartWheeler = function(top, left, timeBetweenSteps) {
  FlippyDancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass("spongebob");
  this.$node.removeClass("putin");
  this.$node.toggle();
  this.direction = "right";
};

CartWheeler.prototype = Object.create(FlippyDancer.prototype);
CartWheeler.prototype.constructor = CartWheeler;

CartWheeler.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.rotate();
  this.move();
};

CartWheeler.prototype.move = function() { 
  if (this.left >= $("body").width()) {
    this.direction = "left";
  } 
  if (this.left <= 0){
    this.direction = "right";
  }
  
  if (this.direction === "right") {
    this.left += 100;
  } else {
    this.left -= 100;
  }

  this.setPosition(this.top, this.left);
};