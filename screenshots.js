/*
Script for taking screenshots.
Run with "casperjs screenshots.js"
*/

var index_path = '/Users/kbecker/hackathon/hackathonStyleguide/mockup/index.html'

var casper = require('casper').create({
	viewportSize: {
		width: 800,
		height: 600
	}
});

casper.start(index_path, function() {
});

casper.then(function () {
	this.captureSelector('tasklist.png', '.inline-task-list');
});
	
casper.run();