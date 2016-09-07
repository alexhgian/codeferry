'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express  = require('express');
var mongoose = require('mongoose');

var config = {
    seedDB: true,
    port: process.env.PORT || 9000,
    mongo: {
        uri: 'localhost/lensferry_test',
        options: {}
    }
}

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

if(config.seedDB){ require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);





var Thing = require('./thing.model');
var router = express.Router();
router.get('/', function(req, res){
    Thing.find(function (err, things) {
      if(err) { return handleError(res, err); }
      return res.json(200, things);
    });
});

app.use('/api/things', router);





// Start server
server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});


// Expose app
exports = module.exports = app;
