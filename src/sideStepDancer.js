var SideStepDancer = function(top, left, timeBetweenSteps) {
  BouncyDancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.removeClass("thor");
  this.$node.addClass("dancer_guy");
  this.$node.toggle();
  //this.hasMoved = false;
};

SideStepDancer.prototype = Object.create(BouncyDancer.prototype);
SideStepDancer.prototype.constructor = SideStepDancer;

SideStepDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //BouncyDancer.prototype.setPosition.apply(this, [this.top+200, this.left]);
  if (this.hasMoved) {
    this.left += 50;
    this.setPosition(this.top, this.left);
    this.hasMoved = false;
  } else {
    this.left -= 50;
    this.setPosition(this.top, this.left);
    this.hasMoved = true;
  }
  //this.$node.toggle();
};