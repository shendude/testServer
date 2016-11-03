var express = require('express');
var path = require('path');
var vision = require('@google-cloud/vision');
var upload = require('express-fileupload');


var app = express();

app.use(upload());
app.use('/', express.static(path.join(__dirname, '/../client')));

app.post('/upload', function(req, res) {
  var file;
  if (!req.files) {
    res.send('No picture uploaded');
    return;
  }
  file = req.files.photo;
  file.mv(path.join(__dirname, '/photos/file.jpg'), function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('file uploaded!');
    }
  });
});


app.listen(1337, function() {
  console.log('listening to port 1337');
});