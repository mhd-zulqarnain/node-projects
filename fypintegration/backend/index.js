var express = require("express")
var app = express();
var bodyParser = require("body-parser")
var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer()


/*app.get('/',(req,res) =>{

 })*/
app.use(bodyParser.json())
var messeges = [{text: "hello", owner: "tim"}, {text: "hi", owner: "jim"}, {text: "hi", owner: "last msg"}]

/*access control to allow app to use services*/
var api = express.Router();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept")
    next()
});

/*we add router to make work easy*/
// app.get('/api/messges',function (req,res){
api.get('/messges', function (req, res) {
    res.json(messeges)
});

api.post('/messges', function (req, res) {
    //messeges.push()
    //console.log("test")
    var formData = req;
    console.log(req.body)
    //res.sendStatus(200)
});

/*app.post('/profile', upload.array(), function (req, res, next) {
 // req.body contains the text fields
 })*/


app.use("/api", api)
app.listen(1234)
