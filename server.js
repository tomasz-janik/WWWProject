var express = require('express');
var app = express();
var fs = require("fs");

var file = [];

fs.readFile('data.json', function read(err, data) {
    if (!err) {
        file = JSON.parse(data)
    }
});

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/data/:index', function (req, res) {
    var startIndex = req.params.index;
    console.log(startIndex);
    var hasMore = startIndex + 10 < file.length;
    console.log(hasMore);
    var endIndex = hasMore ? startIndex + 10 : file.length; 
    var response = {
        'hasMore': hasMore,
        'data': [...file].slice(startIndex, endIndex)
    };
    res.send(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host = 'localhost';
    var port = '8081';

    console.log("Example app listening at http://%s:%s", host, port)
})