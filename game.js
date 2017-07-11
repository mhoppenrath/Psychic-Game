    //creates the min and max numbers for the computer's pick, as well as the initial win loss record
    var min = 0;
    var max = 24;
    var win = 0;
    var loss = 0;
    var guesses = 9;
    // creating an empty array of past moves
    var moves= [];
    //creates a array with all the letters between a-z. Case is not an issue due to on event key
    var alphebetSoup = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    // the function to create the computer's guess
    function resetGuess() {
        var random = Math.floor(Math.random() * (max - min + 1) + min);
        var letter = alphebetSoup[random]; //technically could return here but want to make it more readible
        return letter;

    }
    //initiallizing for the first round
    var compMind = resetGuess();
    console.log(compMind);
    //what happens when we guess a key on the key board
    document.onkeyup = function(event) {
        var press = event.key;
   //this is for getting the letters that have been guessed
        console.log(press)
        if (moves.indexOf(press) == -1){
        	var movesMade = document.getElementById("yourMoves");
      			var newMove = document.createElement("div");
				newMove.innerHTML = press;
      			movesMade.appendChild(newMove); //this will crete a list that then adds the lastest press to the bottom
        	if (compMind == press) {
            	win++;
            	guesses = 9;
            	compMind = resetGuess()
            	console.log("wins: " + win)
            	console.log("New comp " + compMind)
            	document.getElementById("yourMoves").innerHTML = "";
            	moves = [];// adds one to the win count, couses the computer to reset it's guess and the clears the move array
        	} else if ((alphebetSoup.indexOf(press) != -1) && guesses > 1) {
            	guesses--;
            	console.log("guesses " + guesses);
            	var moveMade = press
            	moves.push(moveMade);// removes a guess count, creates a variable that is then pushed into the move made
        	} else if (alphebetSoup.indexOf(press) != -1) {
            	loss++;
            	guesses = 9;
            	compMind = resetGuess();
            	console.log("losses " + loss);
            	console.log("new comp " + compMind);
            	document.getElementById("yourMoves").innerHTML = "";
            	moves = []; //adds one to the loss count, then resets guess counter and clears the move array
        }

        //this section will create the various counters that track the record and guesses left once the first key is pressed

        var counters =
          "<div class=\"col-md-6\"><h2>You wins: <mark>" + win + "</mark></h2></div>" +
          "<div class=\"col-md-6\"><h2>You losses: <mark>" + loss + "</mark></h2></div>"+
          "<div class=\"col-md-6\"><h2>guesses left: <mark>" + guesses + "</mark></h2></div>";

   		document.getElementById("counter").innerHTML=counters;

    }
    }

    //
    // THIS SECTION IS FOR THE DATA TO BE VISUALIZED
    //Fist groups is the various counters



    //