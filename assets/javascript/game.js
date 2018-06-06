/*Watch the demo.
The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
Here's how the app works:



There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.


The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.


When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



Option 1 Game design notes


The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.*/

$(document).ready(function () {
  //var images = ["../images/image-1.jpg"];
  var luckyNumber = 21;
  var counter = 0;
  var numberOne = [8];
  var numberTwo = [7];
  var numberThree = [6];
  var numberFour = [15];
  $('numberOne numberTwo numberThree numberFour').text(luckyNumber);
  //Adjusting crystal image 1.
  for (var i = 0; i < numberOne.length; i++) {
    var image1 = $('<img>');

    image1.attr('data-num', numberOne[i]);
    image1.attr('src', './assets/images/image-1.jpg');
    image1.attr('alt', 'purple crystal');
    image1.addClass('crystalImage');
    $('#crystals').append(image1);
  }
  //Adjusting crystal image 2.
  for (var i = 0; i < numberTwo.length; i++) {
    var image2 = $('<img>');

    image2.attr('data-num', numberTwo[i]);
    image2.attr('src', './assets/images/image-2.jpg');
    image2.attr('alt', 'pink crystal');
    image2.addClass('crystalImage');
    $('#crystals').append(image2);
  }
  //Adjusting crystal image 3.
  for (var i = 0; i < numberThree.length; i++) {
    var image3 = $('<img>');

    image3.attr('data-num', numberThree[i]);
    image3.attr('src', './assets/images/image-3.jpg');
    image3.attr('alt', 'violet crystal');
    image3.addClass('crystalImage');
    $('#crystals').append(image3);
  }
  //Adjusting crystal image 4.
  for (var i = 0; i < numberFour.length; i++) {
    var image4 = $('<img>');

    image4.attr('data-num', numberFour[i]);
    image4.attr('src', './assets/images/image-4.jpg');
    image4.attr('alt', 'clear crystal');
    image4.addClass('crystalImage');
    $('#crystals').append(image4);
  }
  //Resetting counter & guess clicks
  $('#reset').on('click', function () {
    reset();
  });

  function reset() {
    console.log("Yessir!");
    counter = 0;
    $('#yourGuess').text(counter);
    numberOne = [8];
    numberTwo = [7];
    numberThree = [6];
    numberFour = [15];
    $('numberOne numberTwo numberThree number4').text(luckyNumber);
    console.log('Working?');
  };
  //Random click addition + 'this' functionality.
  $('.crystalImage').on('click', function () {
    counter = counter + parseInt($(this).data('num'));

    $('#yourGuess').text(counter);
    if (counter == luckyNumber) {
      alert('You must be clairvoyant!');
      reset();
      console.log("try it");
    } else if (counter > luckyNumber) {
      alert('Miss Cleo would be ashamed!');
      reset();
    }
  });

});