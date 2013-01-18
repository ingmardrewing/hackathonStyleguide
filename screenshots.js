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
	this.captureSelector('h1.png', '#ExampleContentPage-UeberschriftH1');
});

casper.then(function () {
	this.captureSelector('h2.png', '#ExampleContentPage-UeberschriftH2');
});

casper.then(function () {
	this.captureSelector('h3.png', '#ExampleContentPage-UeberschriftH3');
});

casper.then(function () {
	this.captureSelector('h4.png', '#ExampleContentPage-UeberschriftH4');
});

casper.then(function () {
	this.captureSelector('h5.png', '#ExampleContentPage-UeberschriftH5');
});

casper.then(function () {
	this.captureSelector('h6.png', '#ExampleContentPage-UeberschriftH6');
});

casper.then(function () {
	this.captureSelector('headings.png', '.screenshot_headings');
});

casper.then(function () {
	this.captureSelector('fliesstext.png', '.screenshot_fliesstext');
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
	this.captureSelector('panelmacros.png', '.screenshot_panel_macros');
});

casper.then(function () {
	this.captureSelector('quote.png', '.screenshot_quote');
});

casper.then(function () {
	this.captureSelector('hr.png', '.screenshot_hr');
});

casper.then(function () {
	this.captureSelector('table.png', '.screenshot_tables');
});

casper.run();
