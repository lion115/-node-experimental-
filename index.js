var hhtp = require("http"),
express = require("express");

var app =express();

app.get("/", function(req, res){
    res.end("jopa")
});

http.rceateServer(app).listen(3000);