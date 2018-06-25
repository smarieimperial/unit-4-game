        var wins = 0;
    	var losses = 0;
        var total = 0;

        var arrayWins = [];  //array to hold wins and to push wins to
        var arrayLosses = [];  //array to hold losses and to push losses to

        $('#wins').text(wins);  // using jquery prints the number 0 to screen
        $('#losses').text(losses);  // using jquery prints the number 0 to screen
        $('#totalScore').text(total);  // using jquery prints the number 0 to screen

        function youwin() {
            document.write($(this).data('youwin')); 
            // or this code:
            // var printyouwin = $('#wins');
            // printyouwin.text('You win!');
        }
        function youLose() {
            //document.write($(this).data('youlose'));
            // or this code:
            var printloss = $('#losses');
            printloss.text('You lose!');
        }
     
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; // print to screen a random number in a box for example 33 that
        //the player has to reach. Random number to be between 19 and 120.
        }
        document.querySelector('#randomNumber').innerText = getRandomIntInclusive(19, 120);
        
        function getRandomGemNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; // random number generator that prints out once to screen.
        }

        var red = [];
    	$('#redgem').on('click', function() {
    	var gem = $(this);
        console.log(getRandomGemNumber(1, 12)); // Player clicks on the red gem the random number is generated
        //alert("" + getRandomGemNumber(1, 12));
        red.push(getRandomGemNumber);  //and 5 is held in an array
        var updateRed = $('#totalScore');  //update #totalScore to be increased by 5
        updateRed.text(red);
    });

        $('#yellowgem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#cleargem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#greengem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#dullpurplegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#purplegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#bluegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

    if (totalScore == getRandomIntInclusive) {
            youwin(); // calls the youWin() function from above
            wins++;  // increments wins +1
            arrayWins.push('wins'); // code to push win to array which can be retrieved later
            $('#wins').text(arrayWins); // should update wins to +1 (from array) & prints to screen
            $('#totalScore').text(total); //totalScore is back to 0
            document.querySelector('#randomNumber').innerText = getRandomIntInclusive(19, 120); 
            // new random number is generated and printed to screen
            ($('#losses').text(arrayLosses));  // code to print current losses from array
        }
        
    // if (totalScore < getRandomIntInclusive) {
    //         youLose();  // calls the youLose() function from above
    //         losses++;  // increments losses to +1
    //         arrayLosses.push('losses');  // pushes losses to array which can be retrieved later
    //         $('#losses').text(arrayLosses);  // updates losses to +1 (from array) & prints to screen
    //         $('#totalScore').text(total); //totalScore is back to 0
    //         document.querySelector('#randomNumber').innerText = getRandomIntInclusive(19, 120); 
    //         // new random number is generated and printed to screen
    //         $('#wins').text(arrayWins);  // code to print current wins from array    
    //     }