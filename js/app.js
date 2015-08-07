/* --- pick random number from 1 to 100 ---*/
var myNumber = Math.floor((Math.random() * 100) + 1);

$(document).ready(function() {

	/*--- Display information modal box ---*/
	$(".what").click(function() {
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});

	/* --- test --- */
	console.log(myNumber);

	/* --- compare guess to secret number ---*/
	$(document).on('click', '.button', function(e) {
		e.preventDefault();
		var diff = Math.abs(myNumber - parseInt(userGuess.value));
		console.log("difference is " + diff); // test
		if (diff < 20) {
			console.log("warm");
		} else
			console.log("cold");
	});
});