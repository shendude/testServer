var express = require('express');
var quote = require('./quote');


var app = express();
app.use('/quote', quote);


app.listen(1337);