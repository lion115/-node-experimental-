var hhtp = require("http"),
var express = require("express");

var app =express();

app.get("/", function(req, res){
    res.end("jopa")
});

http.createServer(app).listen(3000);