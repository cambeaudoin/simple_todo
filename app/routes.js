var Todo = require('./models/todo');

// Routes
//API
//get all the todos
app.get('/api/todos', function(req, res) {

  // use mongoose to get all todos in the database
  Todo.find(function(err, todos) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      res.send(err)
    }
    res.json(todos); // return all todos in JSON format
  });
});

app.post('/api/todos', function(req, res) {
  // Create a todo
  Todo.create({
    text: req.body.text,
    done: false
  }, function(err, todo) {
    if (err) {
      res.send(err);
    }
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  });
});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id: req.params.todo_id
  }, function(err, todo) {
    if (err) {
      res.send(err);
    }
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err)
      }
      res.json(todos);
    });
  });
});

// application
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
})
