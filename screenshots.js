/*
Script for taking screenshots.
Run with "casperjs screenshots.js"
*/

var index_url = 'http://localhost/~idrewing/hackathonStyleguide/index.html'

var casper = require('casper').create({
	viewportSize: {
		width: 800,
		height: 600
	}
});

casper.start(index_url, function() {
});

casper.then(function () {
	this.captureSelector('tasklist.png', '.inline-task-list');
});
	
casper.run();