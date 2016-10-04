var express = require('express');
var router = express.Router();

var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you."},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

router.get('/', function(req, res) {
  res.type('application/json');
  res.json(quotes);
});

router.get('/random', function(req, res) {
  res.type('text/plain');
  var id = Math.floor(Math.random() * quotes.length);
  var q = quotes[id];
  res.send(q.text + '\n By: ' + q.author);
})

module.exports = router;