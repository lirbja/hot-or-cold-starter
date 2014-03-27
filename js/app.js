
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
  		// var sysNumber = (randomNumber(1, 100));
      var sysNumber = 100; //for testing - to be removed


  		//gets userNumber
  		var userNumber = $('#userGuess').val();
      //finds diff
      var diff = (userNumber - sysNumber)
  		//compares userNumber to sysNumber
  		if (diff === 0) {
          alert('BINGO!');
  		}
      // NEED TO DEBUG THIS STUFF!!!
      // else if ((1 >= diff && diff <= 10) || (-1 <= diff && diff >=- 10)) {
      //     alert('Very Hot');
      // }
      else if ((11 >= diff && diff <= 20) || (-11 <= diff && diff >=-20)) {
          alert('Hot');
      }   
      else if ((21 >= diff && diff <= 30) || (-21 <= diff && diff >=-30)) {
          alert('Warm');
      }                     
  		else if ((31 >= diff && diff <= 50) || (-31 <= diff && diff >=-50)) {
          alert('Cold');
  		}
  		else if (diff > 50 || diff < -50) {
          alert('Ice Cold');
  		}
  		//appends user guess to #guesslist

  		//counts user guesses and logs to span#count

  	});


});