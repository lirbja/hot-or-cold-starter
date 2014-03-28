$(document).ready(function(){

  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

        //generates random number
        function randomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
        }
        var sysNumber = (randomNumber(1, 100));
        alert(sysNumber); //temporary for testing

    //calls newGame on click
    $('form').on('click', '#guessButton', function(e) {
          e.preventDefault();
          newGame();
    });

      //on click, game starts
      var newGame = function() {

        //var sysNumber = 100; //for testing - to be removed

        //gets userNumber
        var userNumber = $('#userGuess').val();

        //finds diff
        var diff = Math.abs(userNumber - sysNumber);

        // compares userNumber to sysNumber
        if (diff === 0) {
            alert('BINGO!');
        }
        else if (diff >= 70) {
            alert('Ice Cold');
        }
        else if (diff >= 50) {
            alert('Cold');
        }   
        else if (diff >= 30) {
            alert('Warm');
        }                     
        else if (diff >= 20) {
            alert('Hot');
        }
        else if (diff >= 10) {
            alert('Very Hot');
        }
        
        //appends user guess to #guesslist

        //counts user guesses and logs to span#count

    };


});