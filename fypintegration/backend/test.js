var express = require("express")
var app = express();
var bodyParser= require("body-parser")
var multer = require('multer');
var upload = multer();





/*app.get('/',(req,res) =>{

 })*/
app.use(bodyParser.json())
var messeges = [{text: "hello", owner: "tim"},{text: "hi", owner: "jim"}]

/*access control to allow app to use services*/
var api = express.Router();


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept")
    next()
});

/*we add router to make work easy*/
// app.get('/api/messges',function (req,res){
api.get('/messges',function (req,res){
    res.json(messeges)
});

/*api.post('/messges',  upload.fields([]), function (req, res, next) {
 // req.body contains the text fields
 formData = req.body;
 console.log('form data', formData);
 res.sendStatus(200);

 })*/

api.post('/messges',function (req,res){
    console.log( req.body.text)

    //messeges.push(req.body)
    // res.sendStatus(req.body.text)
});

app.use("/api",api)
app.listen(1234)
