var MyServer = require('./myserver');
var Router = require('./router');
var RQHandler = require('./requestHandlers');

var server = new MyServer();
var router = new Router();
var handle = {};
handle["/"] = RQHandler.start;
handle["/start"] = RQHandler.start;
handle["/upload"] = RQHandler.upload;
server.start(router.route, handle);
/*
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);*/