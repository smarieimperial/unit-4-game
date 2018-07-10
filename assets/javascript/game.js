        var wins = 0;
    	var losses = 0;
        var total = 0;

        var arrayWins = [];  //array to hold wins and to push wins to
        var arrayLosses = [];  //array to hold losses and to push losses to

        $('#wins').text(wins);  // using jquery prints the number 0 to screen
        $('#losses').text(losses);  // using jquery prints the number 0 to screen
        $('#totalScore').text(total);  // using jquery prints the number 0 to screen

        
     
        //this CODE below WORKS ~ prints random number to pink box.
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
            return Math.floor(Math.random() * (max - min + 1)) + min; // random number generator 
        }

        
            
// test the #redgem code that prints out a random gem number to the blue box 'total score' for example
// first click, the number 4 is generated. Then on second click & so on, the 'total score' is
// incremented +4 each time:
        var red = 0;

    	$('#redgem').on('click', function() {
        var gem = $(this);
        var clicked = getRandomIntInclusive(1, 12);
        red = clicked;
        red++;
        document.querySelector('#totalScore').innerText = red; 
        
    });

        $('#yellowgem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#greengem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

        $('#purplegem').on('click', function() {
        var gem = $(this);
        console.log(getRandomGemNumber(1, 12));
    });

    function youwin() {
        document.querySelector('#updateMe').innerText = ('You Win!');
    }

    function youLose() {
        document.querySelector('#update').innerText = ('You lose!');
    }

    if (totalScore == getRandomIntInclusive) {
            youwin(); 
            // calls the youwin() function above
            wins++; 
            // increments wins +1
            document.querySelector('#wins').innerText = wins;
            //<p><h4>Wins: <span id="wins"></span></h4></p>
            
            $('#totalScore').text(); 
            document.querySelector('#randomNumber').innerText = getRandomIntInclusive(19, 120); 
            // new random number is generated and printed to screen
            
        }
        
    if (totalScore < getRandomIntInclusive) {
            youLose(); 
            // calls the youLose() function above 
            losses++;  
            // increments losses to +1
            document.querySelector('#losses').innerText = losses;
            //<p><h4>Losses: <span id="losses"></span></h4></p>

             $('#totalScore').text(); 
             document.querySelector('#randomNumber').innerText = getRandomIntInclusive(19, 120); 
            // new random number is generated and printed to screen
           }