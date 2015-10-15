var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass("thor");
  this.$node.toggle();
  this.hasMoved = false;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //BouncyDancer.prototype.setPosition.apply(this, [this.top+200, this.left]);
  if (this.hasMoved) {
    this.top += 70;
    this.setPosition(this.top, this.left);
    this.hasMoved = false;
  } else {
    this.top -= 70;
    this.setPosition(this.top, this.left);
    this.hasMoved = true;
  }
  //this.$node.toggle();
};


