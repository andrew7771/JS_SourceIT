// глобальнве переменные a, b, c
var a = 30, b  = 20, c = 10;

function oy () {
	var res = 0;

	if (a>b)
	{
		if (a>c)
		{
			a*=100;
			res += a;

			if (b>c)
			{
				b*=10;
				res +=b +c;
			}
			else
			{
				c*=10;
				res += c +b;
			}
		}
	}
	else if (a<b)
	{
		if (b <c)
		{
			c*= 100;
			res +=c;

			if (a < b)
			{ 
				b*=10;
				res +=b +a;
			}
			else
			{
			 a*=10;
			 res +=a +b;
			}
		}
	}
	return res;
}

var res = oy();
console.log(res);
