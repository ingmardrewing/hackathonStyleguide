/*
Script for taking screenshots.
Run with "casperjs screenshots.js"
*/

var index_path = '/Users/idrewing/Sites/hackathonStyleguide/mockup/index.html'

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

casper.then(function () {
	this.captureSelector('title.png', '#title-heading');
});

casper.then(function () {
	this.captureSelector('table.png', '.table-wrap');
});

casper.run();