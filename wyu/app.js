var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var chemicals = require('./routes/ingredients');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.configure(function () {
//     
//     app.use(express.logger('dev'));   'default', 'short', 'tiny', 'dev' 
//     app.use(express.bodyParser()),
//     app.use(express.static(path.join(__dirname, 'public')));
// });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//serve static html page
app.use(express.static(__dirname + '/public'));


app.get('/product', chemicals.findAll);
app.get('/product/:id', chemicals.findProductListById);
app.get('/product/:id/list/:lid', chemicals.findIngredientsListById);

//app.get('/products', chemicals.findAll);
//app.get('/ingredient', chemicals.findAll);
//app.get('/effects/:id', chemicals.findById);



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


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
  
//});

module.exports = app;



///**********///
// var insertDocument = function(db, callback){
//   db.collection('ProductTable').insertOne({
//     "hairs": [
//       {"product_name": "Shampoo"},
//       {"product_name": "Conditioner"},
//       {"product_name": "Hair Spray"},
//       {"product_name": "Hair Mask"},
//       {"product_name": "Heat Protectant"},
//       {"product_name": "Hair Mousse"},
//       {"product_name": "Hair Serum"},
//       {"product_name": "Hair Gel"},
//       {"product_name": "Poamdes"}
//     ],
//     "makeup": [
//       {"product_name": "Primer"},
//       {"product_name": "Foundation"},
//       {"product_name": "Compact"},
//       {"product_name": "Loose Mineral Powder"},
//       {"product_name": "Blush"},
//       {"product_name": "Highlighter"},
//       {"product_name": "Concealer"},
//       {"product_name": "Kohl"},
//       {"product_name": "Eye Shadow"},
//       {"product_name": "Eye Liner"},
//       {"product_name": "Mascara"},
//       {"product_name": "Lipstick"},
//       {"product_name": "Lip Gloss"},
//       {"product_name": "Bronzer"}
//     ],
//     "skin":[
//       {"product_name": "Soap"},
//       {"product_name": "Body Wash"},
//       {"product_name": "Deodorant"},
//       {"product_name": "Scrub"},
//       {"product_name": "Face Wash"},
//       {"product_name": "Face Pack"},
//       {"product_name": "Serum"},
//       {"product_name": "Moisturizer"},
//       {"product_name": "Cleanser"},
//       {"product_name": "Lotion"},
//       {"product_name": "Sunscreen"},
//       {"product_name": "Toner"}
//     ]
//   }, function(err, result){
//     assert.equal(err, null);
//     console.log("Product List Table Inserted");
//     callback(result);
//   });
// };

// MongoClient.connect(url, function(err,db){
//   assert.equal(null, err);
//   insertDocument(db, function(){
//     db.close();
//   });
// });

