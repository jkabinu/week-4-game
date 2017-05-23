$(document).ready(function() {
      // When random-button is clicked...
      $("#target-button").on("click", function() {
        // generates a random number
        var random = Math.floor(Math.random() * 120) +1;
        // ... and then dump the random number into our target-number span.
        $("#target-number").html(random);
      });
    });

  //array of guess options
  var guessOptions = [10, 5, 3, 7];
  // loop to create crystals for every guessOption.
  for (var i = 0; i < guessOptions.length; i++) {
    // imageCrystal is created for each iteration
    var imageCrystal = $("<img>");
    // each crystal is given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    
    
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", guessOptions[i]);
   
}

  
  // Now the click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    $("#guess-number").append(data-crystalvalue);


});


    