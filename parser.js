//Parser contructor
var Parser = function() {};

//Parses the spedified text
Parser.prototype.parse = function(text) {
	var results = {};

	//break up the file into lines
	var lines = text.split('\n');

	lines.forEach(function(line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if (!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	return results;
};

module.exports = Parser;