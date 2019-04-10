/// creating a calculator
// Anahita Safari

/**This script includes for functions including the four substantial arithmetic function
applied to two numbers. Each function has two arguments and all the functions are exported.*/

/// summation function
var sum = function (num1, num2) {
	return num1+num2;
};

console.log(sum(2,3));
// Subtraction function
var sub = function (num1, num2){
	return num1 - num2;
};


// multiplication function
var mult = function (num1, num2) {
	return num1*num2
};

// Division function
var div = function (num1, num2) {
	if (num2==0) {
		console.log("Error: divide by zero")}
	else 
		return num1/num2
};



module.exports = {sum, sub, mult, div};

