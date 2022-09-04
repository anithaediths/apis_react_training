// add this line below the other import statements
const helmet = require('helmet');
var express = require('express');
const planjs = require('./plans/plans.js')
var app = express();
var PORT = 3000;

// add this line below const app = express();
app.use(helmet());
app.use(express.json());

// add this line below the helmet import statement
const compression = require('compression');

// add this below app.use(helmet())
app.use(compression()); //Compress all routes

app.get("/", (req, res) => {
    res.status(200).json({ name: "some one" });
});


app.listen(process.env.PORT || 3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


app.get("/getPlan", planjs);
