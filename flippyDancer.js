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
  //store current rotate value and add 45 to it
  var styleSettings = {
    transform: rotate(30deg)
  };
  this.$node.css(styleSettings);
  
  // transform: rotate(7deg);

  //convert that value into a string
  //create a string that begins with rotate(
  //   //concat that string with value string + 'deg)'
  // this.$node.animate({'transform':'rotate(30deg)'}, 500);
  //this.$node.toggleClass('box-rotate');
};