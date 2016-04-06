//require my new parser.js file
var Parser = require('./parser');

//load the fs (filesystem) module
var fs = require('fs');

fs.readFile('example_log.txt', function(err, logData){
	// body
	if (err) {
		console.log(err);
		throw err;
	}
	//logData is a buffer convert to a string
	var text = logData.toString();

	//create a new instance of parser
	var parser = new Parser();

	console.log(parser.parse(text))
});
