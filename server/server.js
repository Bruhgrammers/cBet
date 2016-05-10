// Express Setup
var express = require('express');
var app = express();

// DB Setup
var db = require('./db/schema.js');

// Routes Setup
require('./routes.js')(app, express);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methhods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
  next();
});

app.set('port', process.env.PORT || 3000);


if (module.parent) {
  module.exports = app;
} else {
  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
}