var express = require('express');
var app = express();

var rsync = require('readline-sync');

app.get('/', function(request, response){
//    response.send('My Calculator!');
    
    var firstNumber = rsync.question('Please Enter Your First Number:');
    var secondNumber = rsync.question('Please Enter Your Second Number:');
    var operator = rsync.question('Please Enter one of the Operators "/", "*", "+", "-" !');
    var result;
    
    switch(operator) {
        case "+":
            result= parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
            
        case "-":
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
            
        case "/":
            if (parseFloat(secondNumber)===0){
                console.log("Error: division by zero");
                result = "infinity"
            } else {
                result = parseFloat(firstNumber)/parseFloat(secondNumber);
            }
            break;
            
        case "*":
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
            
    }
    
    console.log(firstNumber + operator + secondNumber + " = " + result);
});

app.listen(64313, function(){
//           console.log("API running on port 64313");
           });


