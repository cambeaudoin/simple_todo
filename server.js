// Setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Config
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(methodOverride());

// Define Model
var Todo = mongoose.model('Todo', {text: String})

// Routes
  //API
  //get all the todos
  app.get('/api/todos', function(req, res) {

  })


// Listen
app.listen(1338);
console.log("App listening on port 1338 change")
