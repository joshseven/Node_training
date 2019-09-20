var express = require('express');
var app = express();
var bodyParer = require('body-parser');

app.use(bodyParer.json());
app.use(bodyParer.urlencoded({extended: false}));

// Similar to JSON coding
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
    {
        "id": "23434k",
        "text":"Water",
    }
];

app.get('/ingredients', function(request, response){
    response.send(ingredients);
});

app.post('/ingredients', function(request, response){
    var ingredient= request.body;
    if(!ingredient || ingredient.text === ""){
        response.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
})


app.put('/ingredients/:ingredientId',function(request, response){
    
    var newText = request.body.text;

    if (!newText|| newText===""){
        response.status(500).send({error: "You must provide ingredient text"})
    } else {
        for (var x = 0; x < ingredients.length; x++){
            var ing = ingredients[x];

            if (ing.id === request.params.ingredientId){
                    ingredients[x].text = newText;
                    break;
            }
        }
        response.send(ingredients);
    }
});

app.listen(3000, function(){
    console.log("First API running on port 3000!!!");
});

