//Main Application: v1
//Anahita Safari

/////// importing modules and packages
var myFun = require ("./calculator");
var sum = myFun.sum;
var mult =  myFun.mult;
var div = myFun.div;


//variables
var x=5;
var y=4;
var z=0;

// Boundry Test
var w = sum(5,4);
console.log ( " 5 plus 4 equals: " + sum(5,4));
console.log (x + " * " + y + " = " + mult(x,y));
console.log ( x + " / " + z + " = " + div(x,z));
 
