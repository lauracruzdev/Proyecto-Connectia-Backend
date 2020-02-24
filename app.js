const db = require('./models');


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var users = require('./routes/users');
const productos =require('./routes/products')




var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE, PATCH");
    next();
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/usuarios', users);
app.use('/productos', productos);


// db.sequelize.sync();
module.exports = app;
