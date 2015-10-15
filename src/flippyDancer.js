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
  this.$node.css("rotate", this.$node.css("rotate")+90);
};