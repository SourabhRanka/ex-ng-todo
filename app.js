var express = require('express');
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//app.use(express.bodyParser());

// var url = "mongodb://localhost:27017/tododb";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log('tododb database created');
//   db.createCollection("todolist", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

var todos = [];

app.get('/api/todos', function (req, res) {
  res.send(todos);
});

app.post('/api/todos', function (req, res) {
  console.log(req.body.text);
  todos.push(req.body.text);
  res.send(todos);
});

app.delete('/api/todos/:todo_id', function (req, res) {
  console.log(req.params.todo_id);
  todos.splice(req.params.todo_id, 1);
  res.send(todos);
});


app.listen(8080);
console.log('Server listening');
















// 'use strict';
// var http = require('http');
// var fs = require('fs');

// const util = require('util');

// console.log('program started');
// http.createServer(function (req, res) {
//   console.log('server requested');
//   console.log(util.inspect(req.url, { depth: 1 }));
//   if (req.url === '/') {
//     console.log('inside /');
//     fs.readFile('js-todo/index.html', function (err, data) {
//       res.writeHead(200, { 'content-type': 'text/html' });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     console.log('else part');
//     fs.readFile('js-todo/' + req.url, function (err, data) {
//       if(err){
//         return err;
//       }
//       res.writeHead(200);
//       res.write(data);
//       res.end();
//     });
//     //res.write('hello world');
//     //res.end();
//   }



// }).listen(8080);