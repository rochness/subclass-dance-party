var FlippyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.toggle();
};

FlippyDancer.prototype = Object.create(Dancer.prototype);
FlippyDancer.prototype.constructor = FlippyDancer;

FlippyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.rotate();
};

FlippyDancer.prototype.rotate = function() { 
  var currDeg = this.$node.css("rotation").slice(0,this.$node.css("rotation").length-3);
  currDeg = Number(currDeg);
  this.$node.css("rotation", (currDeg+90).toString().concat('deg'));
};