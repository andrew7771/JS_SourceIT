(function  booooooooom() {
	var boom = document.getElementById("boom");

	var cD = countDown();
	var stop =  setInterval(cD, 1000);
	

	function countDown () {
		var counter = 10;

		function decrCount () {
			boom.innerHTML = counter;
			counter--; 	

			if (counter == 0) {
				clearInterval(stop);
				boom.innerHTML = "boooooom)))";
			}
		}

		return decrCount;
	}

})();
