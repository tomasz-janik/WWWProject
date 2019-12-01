var express = require('express');
var app = express();
var fs = require("fs");

var file = [];
var file2 = [];

fs.readFile('data.json', function read(err, data) {
    if (!err) {
        file = JSON.parse(data)
    }
});

fs.readFile('data2.json', function read(err, data) {
    if (!err) {
        file2 = JSON.parse(data)
    }
});

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/data/:index', function (req, res) {
    var startIndex = parseInt(req.params.index);
    var hasMore = startIndex + 10 < file.length;
    var endIndex = hasMore ? startIndex + 10 : file.length;
    var response = {
        'hasMore': hasMore,
        'data': [...file].slice(startIndex, endIndex)
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(JSON.stringify(response));
})

app.get('/data2', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(JSON.stringify(file2));
})

var server = app.listen(8081, function () {
    var host = 'localhost';
    var port = '8081';

    console.log("Example app listening at http://%s:%s", host, port)
})