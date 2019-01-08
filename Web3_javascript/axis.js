//################################
// Simple string variables
//################################
var name = "Anahita";
var age = "31";

var message = "Hi, I am " + name + " and I am " + age + " years old!";
//console.log(messege);

//################################
// Array variable
//################################
var students = ["Timmy", "Janessa", "Arun", "Heimer"];
var naughtyList = [];
naughtyList.push(students[0]); /// push for adding and element
var index = naughtyList.indexOf("Timmy");
if (index > -1) {
    naughtyList.splice(index, 1); ///splice for deleting an element. 
                                  //// not the best practice. 
                                  ///splice not supported in internet explorer 7 and 8.
}
console.log(naughtyList);

//################################
// Loops
//################################
var total = 10;
for (var x=0; x<total; x++){
    console.log(x);
}

for (var x=0; x< students.length; x +=2 ){
    console.log(students[x]);
}

//################################
// Functions
//################################
function area (length, width){
    return length*width;
}

var area1 = area(20, 40);
var area2 = area (30, 50);
var someOfArea = area1 + area2;

console.log("sum of the areas is: " + someOfArea);

var rectangles = [];
rectangles.push (area1);
rectangles.push (area2);
console.log("rectacgel aray is : " + rectangles);

/// Balance Function
var bankBalace = 500;
function makeTransaction(priceOfSale){
    if (priceOfSale < bankBalace){
        console.log("Purchase Successful. Approved!");
        bankBalace -= priceOfSale;
    } else {
        console.log("Purchase Unseccessful. Denied!");
    }   
}

makeTransaction(20);
console.log(bankBalace);

makeTransaction(300);
console.log(bankBalace);

makeTransaction(200);
console.log(bankBalace);

var cuponTransaction = function(priceOfSale, cupon){
    if (priceOfSale - cupon < bankBalace){
        console.log("Purchase Successful. Approved!");
        bankBalace -= priceOfSale - cupon;
    } else {
        console.log("Purchase Unseccessful. Denied!");
    }      
}; 

cuponTransaction(30, 20);
console.log(bankBalace);

var printCustomerName = function (first, last){ /// if we define functions like this, we can use them in an array.
    console.log("First Name: " + fist + " Last Name: " + last);
}; 

var applyForCreditCard = function (creditScore, salary){
    ///process some functions here.
}

var bankOperations=  [];
bankOperations.push(cuponTransaction, printCustomerName, applyForCreditCard);

//################################
//######## JS Objects ############
//################################
//First way of creating an object
var student0 = {       // This is a literal object. We put valeus when we are creating it.
    firstName: "John", // atribute or Property or key of an object 
    lastName: "Parker", // Seperate key values with ","
    age: 7
};

console.log(student0.firstName);
console.log(student0["firstName"]); //Another way of calling a key.


//Second way of creating an object.
///It depend what approach your team is using.
var student1 =  new Object(); //Creating and empty object. 
student1.firstName = "Linda";
student1.lastName = "Zhu";
student1.age = 8;

//Third way of creating an object.
var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bu";
student2.age = 9;

var student4 = {
    firstName: "Jesica", // atribute or Property or key of an object 
    lastName: "Parker", // Seperate key values with ","
    age: 7,
    greeting: function(){ // We can use functions as the value of attributes in an object.
        return "Hi, My name is " + this.firstName + " and I am " + this.age + " years old!";
    }
};

console.log(student4.greeting()); //// If the attribute is a function, we put paranthesis at the end

var students = []; 
students.push(student0);
students.push(student1);
students.push(student2);
students.push(student4);

console.log(students);

for (var index = 0; index < students.length; index ++){
    console.log(students[index]); //prints pbjects...
}

//Forth way of creating an object
function Student (first, last, age){ // An object which is a function...
    this.firstName = first; // assigning the keys with the arguments of the function.
    this.lastName = last;   // take attention to the "=" instead of ":"
    this.age = age;
    this.greeting = function(){ // We can use functions as the value of attributes in an object.
        return "Hi, My name is " + this.firstName + " and I am " + this.age + " years old!";
    };    /// Pay attention to the "semicolon" here.
}

var s1 = new Student("Ana", "Safari", 31); /// pay attention to the "new"
console.log(s1);
console.log(s1.greeting());

///Adding objects to the array
var naughtyStudenets = [];
naughtyStudenets.push(new Student("Luke", "Peters", 54));
naughtyStudenets.push(new Student("David", "McDonnell", 40));
naughtyStudenets.push(new Student("Lora", "Hilis", 45));

for (var index=0; index < naughtyStudenets.length; index ++){
    console.log(naughtyStudenets[index].greeting());
}

var topStudent = students [2];
//################################
/////for in loop
//################################
for (var i in topStudent){
    console.log(topStudent[i]);
}

//################################
///// Bind
//################################

//Alex's Garage
this.car = "HOnda Civic";

var marksGarage = {
    car : "Aston Martin",
    getCar : function (){
        return this.car;
    
    }
}

console.log(marksGarage.getCar()); /// Cool

var storeForlaterUse1 = marksGarage.getCar();
console.log(storeForlaterUse1); ///storForlaterUse1 is not a function here
                                /// it returns Aston Martin

var storeForlaterUse = marksGarage.getCar; ////storeForlaterUse is a function here
console.log(storeForlaterUse()); ///// What????? it returns HOnda civic.... "this" here refers to the Alex's this.

var realGetCar = marksGarage.getCar.bind(marksGarage);
console.log(realGetCar());
/////or
var realGetCar = storeForlaterUse.bind(marksGarage);
console.log(realGetCar());