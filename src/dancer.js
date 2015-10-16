var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
  this.stopDancing = false;
};

Dancer.prototype.step = function() {
  if (!this.stopDancing) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top, left) {
  var currentWidth = this.$node.css('width');
  var currentHeight = this.$node.css('height');
  var ratio = top/$(".danceFloor").height() + 1;


  //new height = (ratio) * old height
  //higher top value = larger image

  var styleSettings = {
    top: top,
    left: left,
    width: (ratio * currentWidth).toString().concat('%'),
    height: (ratio * currentHeight).toString().concat('%')

  };
  
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left) {
  this.stopDancing = true;
  this.top = top;
  this.left = left || $(".danceFloor").width()/2;
  //this.setPosition(this.top, this.left);
  setTimeout(this.setPosition.bind(this, this.top, this.left), 500);
};


Dancer.prototype.tackle = function(targetDancer) {
  // debugger;
  this.stopDancing = true;
  targetDancer.stopDancing = true;
  var tacklerWidth = this.$node.width();
  var targetWidth = targetDancer.$node.width();

  var tacklerNewLeft = ($('.danceFloor').width()/2) - ((tacklerWidth + targetWidth)/2) - tacklerWidth;
  var targetNewLeft = tacklerNewLeft + tacklerWidth + tacklerWidth + targetWidth;

  setTimeout(this.setPosition.bind(this, $('.danceFloor').height()/2, tacklerNewLeft), 500);
  setTimeout(targetDancer.setPosition.bind(targetDancer, $('.danceFloor').height()/2, targetNewLeft), 500);
  // this.setPosition.apply(this, ($('.danceFloor').height()/2, tacklerNewLeft));
  // targetDancer.setPosition($('.danceFloor').height()/2, targetNewLeft);
  // left postion of this.$node = dancefloor width/2 - total width 
};



// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);

 

// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step

//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };