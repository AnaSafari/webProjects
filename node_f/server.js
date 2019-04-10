
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); ///npm install --save body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



// or app = require('express')(); // putting brackets to instantiate it. 

//Getting Data! It should usually be from a database such as MangoDB or MySQL
//But here we create the data in the code: An array that stores a list of objects
var ingredients = [
    {
        "id":"232kAk",
        "text":"eggs"
    }, 
    {
        "id":"dkP345",
        "text":"Milk"
    }, 
    {
        "id":"dkcuu7",
        "text":"Bacon"
    }, 
    {
        "id":"73hdy",
        "text":"Frogs Legs"
    }   
];


app.get('/', function (request, response){
    response.send(ingredients);
    console.log("API running on port 64313! Test in first get /");
    
});
//app.get('/', function (request, response){
//    response.send('My API');
//    console.log("API running on port 64313! Test in first get /");
//    
//});  // '/' means the base URL e.g. www.google.com and not www.google.com/sth
// The above code means whatever request that goes to the base url get it and respond to it.
// We always have to send a response back. 

app.get('/funions', function(req, res){
    res.send('Yo, Give me some funcions foo');
    console.log("API running on port 64313! Test in second get /");
});

app.get('/funions/fun', function(req, res){
    res.send('Yo, Give me some more funions baz');
    console.log("API running on port 64313! Test in third get /");
});

app.post('/', function(request, response){
    var ingredient = request.body;
    if (!ingredient || ingredient.text === ""){
        response.status(500).send({error:"Your ingredient must have text!"})
        } else {
            ingredients.push(ingredient);
            response.status(200).send(ingredients);
        }
    
});




// To update data
// We pass the ingredientId as a parameter to the URL

app.put('/:ingredientId', function(request, response){
    var ingredientId = request.params.ingredientId;
    var newText = request.body.text;
    
    var objectFound = false;
    
    if (!newText || newText === ""){
        response.status(500).send({error:"You must provide ingredient text"});
//        response.status(500).send(ingredientId);
    } else {
        for (var x = 0; x < ingredients.length; x++){
            var ing = ingredients[x];
            if (ing.id === ingredientId){
                ing.text = newText;
                objectFound = true;
                break;
            }    
        }
        if (!objectFound){
                response.status(500).send({error:"Ingredient id not found"})        
        } else {
            response.send(ingredients);
        }       
    } 
});








app.listen(64313, function(){
    console.log("API running on port 64313!");
    
});

/// In the browser type:
/// localhost:64313
/// and then
/// localhost:64313/funions
