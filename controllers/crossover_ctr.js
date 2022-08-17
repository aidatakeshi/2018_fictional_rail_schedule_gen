/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");

/**
 * Data format:
 * data.summary, //Directly copy global.crossoverSummary[cross][isPH]
 * data.train_types, //Directly copy global.train_types
 */

exports.render = function(req, res){
	//REQ params
	var cross = req.params.cross;
	var isPH = req.params.isPH;
	//Set up data
	var data = {
		cross: cross,
		isPH: isPH,
		summary: global.crossoverSummary.byCross[cross][isPH],
		train_types: global.train_types,
	};
	//res.send(JSON.stringify(data));
	res.render('crossover', data);
};

exports.renderJSON = function(req, res){
	//REQ params
	var cross = req.params.cross;
	var data = global.crossoverSummary.byCross[cross];
	res.send(JSON.stringify(data));
};