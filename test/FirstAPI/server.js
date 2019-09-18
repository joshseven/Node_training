var express = require('express');
var app = express();
var bodyParer = require('body-parser');

app.use(bodyParer.json());
app.use(body.bodyParer.urlencoded({extended: false}));

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
        "text":"Break",
    },
    {
        "id": "23434k",
        "text":"Chicken",
    }
];

app.get('/', function(request, response){
    response.send(ingredients);
});

app.listen(3000, function(){
    console.log("First API running on port 3000!");
});

