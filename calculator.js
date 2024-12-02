const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => res.sendFile(__dirname+"/index.html"));

app.post("/", (req, res) => {
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send(`Sum of ${num1} and ${num2} is: ${result}`)
});

app.get("/bmiCalculator", (req,res) => res.sendFile(__dirname + "/bmiCalculator.html"));
app.post("/bmiCalculator", (req,res) => {
    let weight = req.body.weight;
    let height = req.body.height;

    let bmi = weight / (height * height);

    res.send(`<h1 style="color: red">Bmi is: ${bmi}. `);
});

app.listen(3000, () => console.log("server is running on port 3000"));
