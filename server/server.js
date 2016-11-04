var express = require('express');
var path = require('path');
var gcloud = require('google-cloud');
var multer = require('multer');

var app = express();
app.use(multer({dest: './uploads/'}).single('photo'));

var config = {
  projectId: 'testapp-148322',
  keyFilename: path.join(__dirname, '/testapp-cd0ba168840f.json')
};
var vision = gcloud.vision(config);

app.use('/', express.static(path.join(__dirname, '/../client')));

app.post('/upload', function(req, res) {
  var dir = '/../' + req.file.path;
  var currPath = path.join(__dirname, dir);
  console.log(req.file.path);

  var options = {
    verbose: true
  };

  vision
    .detectText(currPath, options)
    .then(function(data) {
      res.send(JSON.stringify(data));
    });
});




app.listen(1337, function() {
  console.log('listening to port 1337');
});