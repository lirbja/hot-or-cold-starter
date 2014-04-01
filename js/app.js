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

        //prevents random number from being generated again
        e.preventDefault();       

        //starts new game
        newGame();
    });

        //  ???????   //restart game on clicking New Game
        // $('nav').on('click', '.new', function() {
        //     // alert('haha');
        //     $("#count").html('0');
        //     $("#feedback").html('Make your Guess!');
        //     $("#guessList").empty();
        //     $("#userGuess").prop('disabled', false).val('');
        //     sysNumber = (randomNumber(1, 100));
        //     alert(sysNumber); //temporary for testing
        // });

      //on click, game starts
    var newGame = function() {

        //gets userNumber
        var userNumber = parseInt($("#userGuess").val(),10);

        //checks for validity of userNumber
        var isValid;

        if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
            isValid = 0;
            alert("Please enter a number between 0 and 100.");
        }
        else {
            isValid = 1;
        }

        //does below actions only for valid guesses
        if (isValid === 1) {

            //appends user guesses to #guesslist
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

            // gets temperature of user's guess
            var temperature = function() {

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

            // displays temperature of user's guess
            $("#feedback").html(temperature);   
        }

        //disables input field if diff is 0
        if (diff === 0) {
            $("#userGuess").prop('disabled', true);
            $("#guessButton").prop('disabled', true);
        } 

        //otherwise - clears user input field
        else {
            $('#userGuess').val('');
        }        
    
    };


});