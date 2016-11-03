var express = require('express');
var path = require('path');
var Vision = require('@google-cloud/vision');
var upload = require('express-fileupload');

var app = express();

var config = {
  projectId: 'testapp-148322',
  keyFilename: path.join(__dirname, '/testapp-cd0ba168840f.json')
};
var vision = Vision(config);

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