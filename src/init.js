$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 500
    );
    $(".danceFloor").append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".LineUpDancersButton").on('click', function(event) {
    var top = 100;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(top);
      top += 50;
    }
  });

  $(".danceFloor").click(function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].stopDancing = false;
      //reposition dancers randomly
      window.dancers[i].setPosition($("body").height() * Math.random(),
      $("body").width() * Math.random());
      window.dancers[i].step();
    }
  });

  $(".danceBattleButton").click(function() {
    var topStart = 100;

    var tackler1;
    var tackler2;

    for(var i = 0; i < window.dancers.length-1; i += 2){
      //i and i+1 to have same top value
      //left value of i should be 300
      //left value of i+1 should be danceFloor.width()-300
      // window.dancers[i].stopDancing = true;
      // window.dancers[i+1].stopDancing = true;
      window.dancers[i].lineUp(topStart, 100);
      window.dancers[i+1].lineUp(topStart, $(".danceFloor").width()-300);

      // setTimeout(window.dancers[i].setPosition.bind(window.dancers[i], topStart, 300),500);
      // setTimeout(window.dancers[i+1].setPosition.bind(window.dancers[i+1], topStart, $(".danceFloor").width()-300),500);
      topStart+=100;
      
      console.log('window.dancers[i] before mouseOver', window.dancers[i]);
      tackler1 = window.dancers[i];
      tackler2 = window.dancers[i+1];
      console.log('tackler1 before mouseover', tackler1);
      console.log('tackler2 before mouseover', tackler2);

      window.dancers[i].$node.mouseover(window.dancers[i].tackle.bind(window.dancers[i], tackler2));
      window.dancers[i+1].$node.mouseover(window.dancers[i+1].tackle.bind(window.dancers[i+1], tackler1));
    }
  });

  $(".BLOWMYMIND").click(function() {
    //window.dancers[0].tackle(window.dancers[1]);
    if($(".danceFloor").hasClass("normal")){
      $(".danceFloor").removeClass("normal");
      $(".danceFloor").css("background-image", "url('blownMind.gif')");
    } else {
      $(".danceFloor").addClass("normal");
      $(".danceFloor").css("background-image", "url('dancefloor.jpg')");
    }
   });
});

