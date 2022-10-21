const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;

    res.send("The Result of calculation is " + result);
});

app.post("/bmicalculator", function (req, res) {
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var bmi = w / (h * w);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("Server is running on Port 3000");
});