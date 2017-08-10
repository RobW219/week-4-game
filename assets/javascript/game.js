$(document).ready(function() {
	var compNumber= Math.floor(Math.random() * 200 ) + 30;
	var playerGuess= 0;
	var wins= 0;
	var losses= 0;
	var greenCrystal= Math.floor(Math.random() * 20) + 1;
	var yellowCrystal= Math.floor(Math.random() * 20) + 1;
	var blueCrystal= Math.floor(Math.random() * 20) + 1;
	var redCrystal= Math.floor(Math.random() * 20) + 1;
	
	$("#randomNumber").text(compNumber);
	console.log(compNumber);

	$("#playerNumber").text(playerGuess);

	function reset() {
		compNumber= Math.floor(Math.random() * 200 ) + 30;
		$("#randomNumber").text(compNumber);
		console.log(compNumber);
		playerGuess= 0;
		$("#playerNumber").text(playerGuess);
		greenCrystal= Math.floor(Math.random() * 20) + 1;
	 	yellowCrystal= Math.floor(Math.random() * 20) + 1;
	 	blueCrystal= Math.floor(Math.random() * 20) + 1;
		redCrystal= Math.floor(Math.random() * 20) + 1;
		console.log(greenCrystal);
		console.log(yellowCrystal);
		console.log(blueCrystal);
		console.log(redCrystal);
	}
	
	console.log(greenCrystal);
	console.log(yellowCrystal);
	console.log(blueCrystal);
	console.log(redCrystal);
	
	$("#crys1").on("click", function() {
		redCrystal= parseInt(redCrystal);
		playerGuess += redCrystal;
		$("#playerNumber").text(playerGuess);

		if (playerGuess > compNumber) {
			alert("You Lose!");
			losses ++;
			$("#lossNumber").text(parseInt(losses));
			reset();
		} 

		else if (playerGuess === compNumber) {
			alert("You Win!");
			wins ++;
			$("#winNumber").text(parseInt(wins));
			reset();
		}		
	})


	$("#crys2").on("click", function() {
		blueCrystal= parseInt(blueCrystal);
		playerGuess += blueCrystal;
		$("#playerNumber").text(playerGuess);
		
		if (playerGuess > compNumber) {
			alert("You Lose!");
			losses ++;
			$("#lossNumber").text(parseInt(losses));
			reset();
		} 

		else if (playerGuess === compNumber) {
			alert("You Win!");
			wins ++;
			$("#winNumber").text(parseInt(wins));
			reset();
		}
	})

	$("#crys3").on("click", function() {
		yellowCrystal= parseInt(yellowCrystal);
		playerGuess += yellowCrystal;
		$("#playerNumber").text(playerGuess);

		if (playerGuess > compNumber) {
			alert("You Lose!");
			losses ++;
			$("#lossNumber").text(parseInt(losses));
			reset();
		} 

		else if (playerGuess === compNumber) {
			alert("You Win!");
			wins ++;
			$("#winNumber").text(parseInt(wins));
			reset();
		}
	})

	$("#crys4").on("click", function() {
		greenCrystal= parseInt(greenCrystal);
		playerGuess += greenCrystal;
		$("#playerNumber").text(playerGuess);

		if (playerGuess > compNumber) {
			alert("You Lose!");
			losses ++;
			$("#lossNumber").text(parseInt(losses));
			reset();
		} 

		else if (playerGuess === compNumber) {
			alert("You Win!");
			wins ++;
			$("#winNumber").text(parseInt(wins));
			reset();
		}
	})

})