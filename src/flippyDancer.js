var FlippyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.toggle();
  this.rotateDeg = 0;
};

FlippyDancer.prototype = Object.create(Dancer.prototype);
FlippyDancer.prototype.constructor = FlippyDancer;

FlippyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // debugger;
  this.rotate();
};

FlippyDancer.prototype.rotate = function() { 
  this.rotateDeg+=30;
  var transformVal = 'rotate(' + this.rotateDeg.toString() + 'deg)';
  var styleSettings = {transform: transformVal};
  this.$node.css(styleSettings);
};


// var FlippyDancer = function(top, left, timeBetweenSteps) {
//   Dancer.apply(this, [top, left, timeBetweenSteps]);
//   this.$node.toggle();
// };

// FlippyDancer.prototype = Object.create(Dancer.prototype);
// FlippyDancer.prototype.constructor = FlippyDancer;

// FlippyDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   debugger;
//   this.rotate();
//   // debugger;
// };

// FlippyDancer.prototype.rotate = function() { 
//   //store current rotate value and add 45 to it
//   // debugger;
//   var styleSettings = {
//     transform: rotate(30deg)
//   };
//   this.$node.css(styleSettings);
// };