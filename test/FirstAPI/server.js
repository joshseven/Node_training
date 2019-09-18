var express = require('express');
var app = express();
var bodyParer = require('body-parser');

app.use(bodyParer.json());
app.use(bodyParer.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "234kak",
        "text":"eggs",
    },
    {
        "id": "234kaJ",
        "text":"Milk",
    },
    {
        "id": "234kDA",
        "text":"Bread",
    },
    {
        "id": "23434k",
        "text":"Chicken",
    }
];

app.get('/', function(request, response){
    response.send(ingredients);
});

app.post('/', function(request, response){
    var ingredient= request.body;
    if(!ingredient || ingredient.text === ""){
        response.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
})

app.listen(3000, function(){
    console.log("First API running on port 3000!");
});

