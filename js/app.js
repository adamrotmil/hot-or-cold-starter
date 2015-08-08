function newGame() {
	var secretNumber = Math.floor((Math.random() * 100) + 1);
	var guessCount = 0;
	var feedback = "Make your Guess!";
	document.getElementById("count").textContent = (guessCount.toString());
	document.getElementById("feedback").textContent = (feedback.toString());
	/* --- guess button behaviors ---*/
	$(document).on('click', '.button', function(e) {
		e.preventDefault();
		var diff = Math.abs(secretNumber - parseInt(userGuess.value));
		if (diff === 0) {
			var feedback = "you got it!";
		} else if (diff < 5) {
			var feedback = "so hot!";
		} else if (diff < 20) {
			var feedback = "warm...";
		} else if (diff < 40) {
			var feedback = "cool...";
		} else if (diff < 50) {
			var feedback = "cold";
		} else if (diff < 99) {
			var feedback = "ice ice baby";
		}
		guessCount++;
		document.getElementById("count").textContent = (guessCount.toString());
		document.getElementById("feedback").textContent = (feedback.toString());
	});
};
$(document).ready(function() {
	/*--- Display information modal box ---*/
	$(".what").click(function() {
		$(".overlay").fadeIn(1000);

	});
	/*--- Hide information modal box ---*/
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});

	$(".new").click(function() {
		userGuess.value = "Enter your Guess"
		newGame();
	});
	newGame();
});