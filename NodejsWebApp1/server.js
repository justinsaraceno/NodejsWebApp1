var http = require('http');
var express = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");

//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash"); // vash view engine

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// map the routes
controllers.init(app);


app.get("/", function(req, res) {
    //res.send("<html><body><h1>Express</h1></body></html>");
    res.render("index", { title: "Express + Vash" });
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Justin", isValid: true, group: "Super Admin" });
});

var port = process.env.port || 1337;
var server = http.createServer(app);
server.listen(port);