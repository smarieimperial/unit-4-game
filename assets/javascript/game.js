var wins = 0;
    	var losses = 0;
        var total = 0;
        $('#wins').text(wins);
        $('#losses').text(losses);
        $('#totalScore').text(total);

        function playerWinsOrLoses() {
        console.log($(this).data('youwin'));
        console.log($(this).data('youlose'));
        } // write code so that if randomNumber == totalScore
        // then print You win!!
        // if randomNumber > totalScore
        // then print You lose!!


        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
        }
        document.querySelector('#randomNumber').innerText = getRandomIntInclusive(19, 120);
        
        function getRandomGemNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
        }

    	$('#redgem').on('click', function() {
    	var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));

        // write code so that when Player clicks on the red gem the random number is created for example 5
        //and 5 is held in a variable. 
        //update #totalScore to be 5
        //when the Player clicks on the same red gem again
        //update #totalScore to be increased by +5
        // total score is now 10 and so on...    
    });

        $('#yellowgem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));
        alert('yellow');
    });

        $('#cleargem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));
        alert('unicorn clear');
    });

        $('#greengem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));
        alert('green');
    });

        $('#dullpurplegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));
        alert('dull purple to blue');
    });

        $('#purplegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));
        alert('sparkling purple');
    });

        $('#bluegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
        alert("" + getRandomGemNumber(1, 12));
        alert('special power blue');
    });
//Game instructions below:
        // print to screen a random number in a box for example 33 that
        //the player has to reach. Random number to be between 19 and 120.

        // code random number generator that prints out once to screen.

        // Print to screen number of Wins.  It should start at 0.

        // Print to screen number of Losses.  It should start at 0. 

        // If player reaches 33 for example print to screen You won!!

        // If player exceeds 33 for example 35 print to screen You lost!!

        // Print to screen the players total score.  It should start at 0.

        // Far right gem in blue #5 is a special gem???  If using this update instructions up top.