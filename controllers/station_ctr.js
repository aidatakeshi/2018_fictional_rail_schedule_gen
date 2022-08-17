/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");

/**
 * Data format:
 * data.summary, //Directly copy global.stationSummary.byStation[stop].byTrack[track]
 * data.train_types, //Directly copy global.train_types
 */

exports.byTrack_render = function(req, res){
	//REQ params
	var cross = req.params.cross;
	var stop = req.params.stop;
	var track = req.params.track;
	//Set up data
	var data = {
		cross: cross,
		stop: req.params.stop,
		stopName: global.stations[stop].name,
		stopNameEng: global.stations[stop].name_eng,
		stopCode: global.stations[stop].code,
		track: req.params.track,
		summary: global.stationSummary.byStation[stop].byTrack[track],
		train_types: global.train_types,
	};
	//res.send(JSON.stringify(data));
	res.render('station_track', data);
};

/**
 * Data format:
 * data.summary, //Directly copy global.stationSummary.byStation[stop].byDirection[direction]
 * data.train_types, //Directly copy global.train_types
 */

exports.byDirection_render = function(req, res){
	//REQ params
	var cross = req.params.cross;
	var stop = req.params.stop;
	var line = req.params.line;
	var direction = req.params.direction;
	//Set up data
	var data = {
		cross: cross,
		stop: req.params.stop,
		stopName: global.stations[stop].name,
		stopNameEng: global.stations[stop].name_eng,
		stopCode: global.stations[stop].code,
		lineName: global.lines[line].name,
		lineNameEng: global.lines[line].name_eng,
		direction: req.params.direction,
		summary: global.stationSummary.byStation[stop].byDirection[line + "/" + direction],
		train_types: global.train_types,
	};
	//res.send(JSON.stringify(data));
	res.render('station_direction', data);
};

/**
 * Data format:
 * data.stationSummary, //Directly copy global.stationSummary
 * data.depotSummary, //Directly copy global.depotSummary
 * data.stations, //Directly copy global.stations
 */

exports.overall_render = function(req, res){
	//REQ params
	var dayType = req.params.dayType;
	//Set up data
	var data = {
		dayType: dayType,
		stationSummary: global.stationSummary,
		depotSummary: global.depotSummary,
		stations: global.stations,
		train_types: global.train_types,
	};
	//res.send(JSON.stringify(data));
	res.render('station_overall', data);
};