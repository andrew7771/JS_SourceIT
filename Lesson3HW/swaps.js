var n = 4;
var m = 5;

function swap () {
	var temp = n;
	n = m;
	m = temp;
}


function swap1 () {
	n = n + m;
	m = n - m;
	n = n - m;
}



swap();
// a = 5, b = 4
swap1();
// a = 4, b = 5