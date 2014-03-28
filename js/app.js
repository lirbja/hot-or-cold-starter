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

        //gets temperature of user's guess
        var temperature = function() {

            //gets userNumber
            var userNumber = $('#userGuess').val();

            //appends user guess to #guesslist
            $('#guessList').append("<span>" + userNumber + ", " + "</span>");

            //counts user guesses
            var guessNumber = [];
            $("#guessList").find("span").each(function(){
                guessNumber.push($(this).html());
            });

            //logs # of user guesses to span#count
            $('#count').empty();
            $('#count').append(guessNumber.length);


            //finds diff
            var diff = Math.abs(userNumber - sysNumber);

            // compares userNumber to sysNumber
            if (diff === 0) {
                return('BINGO!');
            }
            else if (diff >= 70) {
                return('Ice Cold');
            }
            else if (diff >= 50) {
                return('Cold');
            }   
            else if (diff >= 30) {
                return('Warm');
            }                     
            else if (diff >= 20) {
                return('Hot');
            }
            else if (diff >= 10 || diff < 10) {
                return('Very Hot');
            }
        };

        //displays temperature of user's guess
        $("#feedback").html(temperature);    



};


});