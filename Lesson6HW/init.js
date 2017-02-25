(function timeHandler() {

	setInterval(getCurrentTime,1000);


	function getCurrentTime () {
		
			var day = new Date();

			var hours = day.getUTCHours()+2;
			var minutes = day.getUTCMinutes();
			var seconds = day.getUTCSeconds();

			hours = checkVal(hours);
			minutes = checkVal(minutes);
			seconds = checkVal(seconds);


			$("time").innerHTML =  hours + ":" 
							+  minutes + ":" 
							+  seconds;
		
	}
})();


function $ (id) {
	return document.getElementById(id);
}

function checkVal (val) {
	if (val< 10) {
		val = "0" + val;
	}
	return val;
}


(function doSmth () {
	var arr = [];

	for (var i = 0; i < 10; i++) {
	   (function doIt (index) {
	   		 arr.push(function() {
	       console.log(index);
	   	   });
	   })(i);   
	}

	console.log(arr[0]()); 
	console.log(arr[3]()); 
	console.log(arr[9]()); 
})();


(function show (argument) {
	for (var i = 1; i <= 10; i++) {
		(function calc(index) {
			setTimeout(function() {
 			console.log(
     		'%c' + index ,
     		'color: green; font-weight: bold;');
 		}, 1000 * i); 
		})(i); 		
 	}
})();


