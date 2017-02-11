function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fill() {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(getRandomInt(0,100));
	}
	return arr;
}

function indexes (val, array) {
	var index  = -1;
	for (var i = 0; i < array.length; i++) {
		if ( array[i] === val) return i;
	}
	return index;
}

//var result = indexes(2, arr);
