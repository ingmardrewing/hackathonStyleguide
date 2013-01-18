/*
Script for taking screenshots.
Run with "casperjs screenshots.js"
*/

var index_path = '/Users/idrewing/Sites/hackathonStyleguide/mockup/index.html';

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
	this.captureSelector('title.png', '.screenshot_heading_pageinfo');
});

casper.then(function () {
	this.captureSelector('toc.png', '.screenshot_toc');
});

casper.then(function () {
	this.captureSelector('headings.png', '.screenshot_headings');
});

casper.then(function () {
	this.captureSelector('list.png', '.screenshot_list');
});

casper.then(function () {
	this.captureSelector('numberedlist.png', '.screenshot_numberedlist');
});

casper.then(function () {
	this.captureSelector('panel.png', '.screenshot_panel');
});

casper.then(function () {
	this.captureSelector('hr.png', '.screenshot_hr');
});

casper.then(function () {
	this.captureSelector('table.png', '.screenshot_tables');
});

casper.run();
