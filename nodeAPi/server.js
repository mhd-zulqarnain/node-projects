var express = require('express'); //call exprss from the module   
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan')
var mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// configure app to use bodyParser()
// this will let us get the data from a POST

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User = require('./app/models/user'); // get our mongoose model
mongoose.connect(config.database);
app.set('superSecret', config.secret);


var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        messege: 'welcome to  the app!'
    });
});


app.get('/setup', function () {

    var nick = new User({
        name: "fareed",
        password: "pass011",
        admin: true
    });
    nick.save(function (err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });

});


app.use('/api', router);
app.listen(port);
console.log("the port is on the #", port);

