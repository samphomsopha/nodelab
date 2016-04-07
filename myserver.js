var http = require('http');
var url = require('url');

var MyServer = function () {};

MyServer.prototype.start = function (router, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.")
		//run our router
		router(handle, pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log('Server running on port 8080.');
};

module.exports = MyServer;