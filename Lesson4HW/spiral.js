function generateSpiralInmatrix (length) {
	var matrix =  new Array(length);
	for(var i = 0; i<matrix.length; i++)
	{
		matrix[i] = new Array(length);
	}


	var i = 1, j, k, p = length/2;

	for(k = 1; k<=p; k++)
	{
		for (j = k - 1; j<length - k + 1; j++) 
		{
			matrix[k - 1][j]=i++;
		}
 		for (j = k; j<length- k + 1; j++)
 		{ 
 			matrix[j][length-k] = i++;
 		}
 		for (j = length - k - 1; j>=k-1; --j)
 		{
 			matrix[length-k][j]=i++;
 		} 
 		for (j = length - k - 1; j>=k; j--)  
 		{
 			matrix[j][k-1]=i++;
 		}
	}
	matrix[Math.floor(length/2)][Math.floor(length/2)] = length*length;


	return matrix;
}

var matr = generateSpiralInmatrix(5);
console.table(matr);