var FlippyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  this.$node.addClass("putin");
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

FlippyDancer.prototype.lineUp = function(top) { 
  // this.rotateDeg -= 30;
  // var transformVal = 'rotate(' + this.rotateDeg.toString() + 'deg)';
  // var styleSettings = {transform: transformVal};
  //debugger;
  Dancer.prototype.lineUp.apply(this, [top]);
  // this.stopDancing = true;  
  // this.top = top;
  // this.left = 100;
  // this.setPosition(this.top, this.left);
  var removeRotation = function(){
    this.$node.css('transform','none');
  };
   setTimeout(removeRotation.bind(this), 500);
  
  
  //this.$node.removeAttr('transform');
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