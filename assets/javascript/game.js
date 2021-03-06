	// assigning variables 

var princesses = [
	
	["C", "I", "N", "D", "E", "R", "E", "L", "L", "A"],
	["J", "A", "S", "M", "I", "N", "E"],
	["A", "U", "R", "O", "R", "A"],
	["R", "A", "P", "U", "N", "Z", "E", "L"],
	["M", "U", "L", "A", "N"],
	["M", "E", "R", "I", "D", "A"],
	["A", "R", "I", "E", "L"],
	["P", "O", "C", "O", "H", "O", "N", "T", "A", "S"],
	["T", "I", "A", "N", "A"],
	["B", "E", "L", "L", "E"]
	];


var wins = 0;
var losses = 0;
var guessesLeft = 6; //6 wrong guesses per game
var guessesMade = [];
var emptyWord = [];
var sub = 0;
// randomly selects a letter of the alphabet via its place in the options array
var winningWord = princesses[Math.floor(Math.random()*princesses.
		length)];
var text = " ";
var audioWin = new Audio('assets/images/music.mp3');
var audioLoss = new Audio('assets/images/loss.mp3');
//reset function
function resetStats () {
	guessesLeft = 6;
	guessesMade = [];
	winningWord = princesses[Math.floor(Math.random()*princesses.
		length)];
	emptyWord = [];
	blanks();
};

function delayRestart () {
	location.reload();
};
	console.log(winningWord);
	console.log("a reset has been called");
	


// if word is guessed this function is called
function winner () {

//winning soundtrack
	audioWin.play();
	
//selects the winning image	
	if (winningWord == princesses[0]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/cin-mirror.jpg'>"
}
	if (winningWord == princesses[1]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/jas-mirror.jpg'>"
}
	if (winningWord == princesses[2]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/aur-mirror.jpg'>"
}
	if (winningWord == princesses[3]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/rap-mirror.jpg'>"
}
	if (winningWord == princesses[4]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/mul-mirror.jpg'>"
}
	if (winningWord == princesses[5]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/meri-mirror.jpg'>"
}
	if (winningWord == princesses[6]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/ariel-mirror.jpg'>"
}
	if (winningWord == princesses[7]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/poc-mirror.jpg'>"
}
	if (winningWord == princesses[8]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/tiana-mirror.jpg'>"
}
	if (winningWord == princesses[9]) {
		document.getElementById("displayside").innerHTML = "<img src='assets/images/belle-mirror.jpg'>"
}
	//alert box and reset
	alert("You have chosen correctly!\nPlease press 'OK' and we will restart in 5 seconds");
	setTimeout(delayRestart, 6000);
	

}

// function for the blank underscores
function blanks () {
	for (b= 0; b < winningWord.length; b++) {
		emptyWord.push(" _ ");

	}
}

//call blank function and then display it to DOM
blanks();
document.getElementById("blanks").innerHTML = (emptyWord.join(''));

//actual game place starts when a key is pressed and released
document.onkeyup = function() {

	document.getElementById("blanks").innerHTML = (emptyWord.join(''));
	
//changes all letters to capitals 			
	var userguess = String.fromCharCode(event.keyCode).
		toUpperCase();

//replaces the _ with correct letters
	var sub = winningWord.indexOf(userguess);
	if (sub !== -1) {
		for (h=0; h<winningWord.length; h++) {
			if (winningWord[h] == userguess) {
				emptyWord[h] = userguess;
				document.getElementById("blanks").innerHTML = (emptyWord.join(''));
				console.log(emptyWord);
//if all letters are chosen correctly, calls winner function
				if (emptyWord.toString() == winningWord.toString()) {
					winner();
				}
				}
			}
		}
//records wrong guesses	
	else {	
		guessesLeft--;
		document.getElementById("guessremaining").innerHTML = "Number of Wrong Guesses Remaining :" + "<br/>" + "<br/>" + (guessesLeft);
	};
//shows letters chosen	
		guessesMade.push(userguess);
		document.getElementById("guessed").innerHTML = "Letters Already Chosen :" + "<br/>" + "<br/>" + (guessesMade.join(', '));
//		
		if (guessesLeft < 1) {
			losses++;
			document.getElementById("blanks").innerHTML = (winningWord.join(' '));
			document.getElementById("displayside").innerHTML = "<img src='assets/images/mal-mirror.jpg'>"
			// alert("Mirror, Mirror on the wall, you are not the smartest of all\nPlease press OK to play again.");
			audioLoss.play();
			alert("You have chosen poorly!\nPlease press 'OK' and we will restart in 5 seconds");
			setTimeout(delayRestart, 5000);
			resetStats();


		}
		
};

