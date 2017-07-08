    //creates the min and max numbers for the computer's pick, as well as the initial win loss record
    var min = 0;
    var max = 24;
    var win = 0;
    var loss = 0;
    var guesses = 9;
    // creating an empty array of past moves

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
    function resetGuess(){
    	var random = Math.floor(Math.random() * (max - min + 1) + min);
    	var letter = alphebetSoup[random];
    	return letter;

    }
    //initiallizing for the first round
    var compMind = resetGuess();
    console.log(compMind);
    //what happens when we guess a key on the key board
	document.onkeyup = function(event) {
    	var press = event.key;
    	console.log(press)
    	if (compMind == press) {
    		win ++;
    		compMind=resetGuess()
    		console.log("wins: " + win)
    		console.log("New comp " + compMind)
    	}
    	else if ((alphebetSoup.indexOf(press) != -1) && guesses > 1) {
    		guesses --;
    		console.log("guesses " + guesses)
    	} 
    	else if (alphebetSoup.indexOf(press) != -1){
    		loss ++;
    		guesses = 9;
    		compMind=resetGuess()
    		console.log("losses " + loss) 
    		console.log("new comp " +compMind)
    	}
    }


    //

