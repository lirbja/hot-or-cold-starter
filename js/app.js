
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//on click, game starts
  	$('form').on('click', '#guessButton', function() {
  		//generates random number
  		function randomNumber(min, max) {
  			return Math.floor(Math.random()*(max-min+1)+min);
  		}
  		var sysNumber = (randomNumber(1, 100));
  		//gets userNumber
  		var userNumber = $('#userGuess').val();
  		//compares userNumber to sysNumber
  		if () {

  		}
  		else if () {

  		}
  		else if () {

  		}
  		else if () {

  		}
  		else if () {

  		}
  		else {

  		}
  		//appends user guess to #guesslist

  		//counts user guesses and logs to span#count

  	});


});