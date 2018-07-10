        
        var wins = 0;
    	var losses = 0;
        var total = 0;

//write a function, when each jewel is clicked, the total will add up so, if red = 3, 
// yellow = 5, green = 1, purple = 8
//and the number in pink box is = 20
// then if player clicks on red 2x, yellow 2x, purple 1x, then the total will = 23
// and the game will be 23 > 20 therefore 'You lose!' gets printed to screen
//and losses gets updated to 1.

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

        // random number generator between 1-12 
            function getRandomGemNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }
        
// test the #redgem code that prints out a random gem number to the blue box 'total score' for example
// first click, the number 4 is generated. Then on second click & so on, the 'total score' is
// incremented +4 each time, +4 again until end of game:
//==============================================

    var clicked = Math.ceil(Math.random()*12);
    var red = clicked;

    $('#redgem').on('click', function() {
       // var gem = $(this);
    document.querySelector('#totalScore').innerText = red;  
    total = red;
    });

// =============================================

    var clicked = Math.ceil(Math.random()*12);
    var yellow = clicked;
        $('#yellowgem').on('click', function() {
        //var gem = $(this);
        //console.log(getRandomGemNumber(1, 12));
        document.querySelector('#totalScore').innerText = yellow;  
    });
    var clicked = Math.ceil(Math.random()*12);
    var green = clicked;
        $('#greengem').on('click', function() {
        //var gem = $(this);
        //console.log(getRandomGemNumber(1, 12));
        document.querySelector('#totalScore').innerText = green; 
    });
    var clicked = Math.ceil(Math.random()*12);
    var purple = clicked;
        $('#purplegem').on('click', function() {
        //var gem = $(this);
        //var clicked = getRandomGemNumber(1, 12);
        document.querySelector('#totalScore').innerText = purple; 
    });

// ==============================================

    function youwin() {
        document.querySelector('#updateMe').innerText = ('You Win!');
    }
    function youLose() {
        document.querySelector('#update').innerText = ('You lose!');
    }

// ===============================================

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