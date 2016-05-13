var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Article = require('./models/Article');

var app = express();

mongoose.connect('mongodb://localhost/articles');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  Article.find({}, function(err,articles){
    res.locals.articles = articles;
    res.render('index');
  });
});

app.get('/add', function(req, res){
  res.render('add');
});

app.post('/add', function(req, res){
  var article = new Article(req.body);
  article.save(function(err, id){
    res.redirect('/');
  });
});

app.get('/del/:id', function(req, res){
  var id = req.params.id;
  Article.remove({_id:id}, function(){
    res.redirect('/');
  })
});
app.get('/edit/:id', function(req, res){
  var id = req.params.id;
  Article.findById(id, function(err, article){
    res.locals.article = article;
    res.render('edit');
  });
});
app.post('/update/:id', function(req, res){
  var id = req.params.id;
  var title = req.body.title;
  var body = req.body.body;
  Article.findById(id, function(err, article){
    article.title = title;
    article.body = body;
    article.save(function(){
      res.redirect('/');
    });
  });

});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
