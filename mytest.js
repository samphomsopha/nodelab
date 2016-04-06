var a = function(val) {
	console.log('hello '+val);	
};


function execute(someFunc, val) {
	someFunc(val);
}

execute(a, 'world');