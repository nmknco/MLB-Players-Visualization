var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
app.use('/static', express.static(path.join(__dirname, '../0x7f/static')));
app.use('/data', express.static(path.join(__dirname, '../0x7f/data')));

var port = 7450;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../0x7f/v3.html'));
});

app.listen(port, function() {
    console.log('App listening on port %d', port);
});