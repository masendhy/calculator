const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;


    res.send("<h2>The result of the calculation is</h2>" + result);
});


app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post("/bmicalculator", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("<h2> Your BMI is</h2> " + bmi);

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})