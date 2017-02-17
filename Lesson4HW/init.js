function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initMatrix (h, w) {
	matr = [];
	for (var i = 0; i < h; i++) {
		matr[i] = [];
		for (var j = 0; j < w; j++) {
			matr[i][j] = getRandomInt(0,100);
		}
	}
	return matr;
}
   
    
function borderСlockwise (matrix) {	
	var leftSide = [];

	//getting top from matrix to result
	var result = matrix[0].slice();

	//getting bottom from matrix and make it reverse
	var bottomArr = matrix[matrix.length-1].slice().reverse();

	for (var i = 1; i < matrix.length-1; i++) 
	{
		//getting rightSide and concat it to top(result)
		result = result.concat(matrix[i][matrix[i].length-1]);

		//left side
		leftSide = leftSide.concat(matrix[i][0]);
	}

	// full concatenation: concat of result (top+right) and bottom and concat reversed leftSide
	result = result.concat(bottomArr).concat(leftSide.reverse());	
	return result;
}

function counterСlockWise (matrix) {	
	var rightSide = [];
	var result = [];

	//reversed top
	var top = matrix[0].slice(1,matrix.length-1).reverse();
	
	//bottom
	var bottomArr = matrix[matrix.length-1].slice(1,matrix.length);

	for (var i = 0; i < matrix.length; i++) 
	{		
		//write left into result
		result = result.concat(matrix[i][0]);

		//right side
		if (i === matrix.length-1) {
			continue;
		}
		else {
			rightSide = rightSide.concat(matrix[i][matrix.length-1]);
		}
	}

	// full
	result = result.concat(bottomArr).concat(rightSide.reverse()).concat(top);
	return result;
}

function triangleTheMainDiagonal (matrix) {
	
	//top
	var result = matrix[0].slice();
	
	var diagonal = [];

	for (var i = 1; i <  matrix.length; i++) {
		 
		 //top + right
		 result = result.concat(matrix[i][matrix.length-1]);

		 //getting the main diagonal
		 if (i === matrix.length -1)
		 	continue;
		 else  diagonal = diagonal.concat(matrix[i][i]);
	}

	//adding diagonal to result
	result = result.concat(diagonal.reverse());
	return result;
}

function triangleSecondaryDiagonal (matrix) {
	var result,
		secondary = [],
		rightSide = [],
		// bottom
		bottomArr = matrix[matrix.length-1].slice(1,matrix.length-1);

	for (var i = 0; i < matrix.length; i++) 
	{
		// elements from the secondary diagonal
		secondary = secondary.concat(matrix[i][matrix[i].length-i-1]);
		
		// right side
		if (i != 0)
			rightSide = rightSide.concat(matrix[i][matrix.length-1])
		else continue;
	}
	 //result = result.reverse().concat(rightSide).concat(bottomArr);
	 result = secondary.slice().concat(bottomArr).concat(rightSide.reverse());

	return result;
}

//output

// var matrix = initMatrix(5,5);
// console.table(matrix);

// var result = borderСlockwise(matrix);
// console.log(result);

// var result = counterСlockWise(matrix);
// console.log(result);

// var result = triangleTheMainDiagonal(matrix);
// console.log(result);

// var result = triangleSecondaryDiagonal(matrix);
// console.log(result);
