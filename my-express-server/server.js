const express = require("express")

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello,Aniket<h1>");
});

app.get("/contact", function (req, res) {
    res.send("<h1>Contact : 8380919553</h1>")
});

app.get("/about", function (req, res) {
    res.send("<h1>Name : Aniket</h1><h2>Contact : 8380919553</h2>")
});

app.get("/Home", function (req, res) {
    res.send("<h1>Name : Aniket</h1>")
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});