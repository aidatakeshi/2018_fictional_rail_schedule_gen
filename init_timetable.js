/**
 * Require Data Files
 */
require("./data/lines.js");
require("./data/stations.js");
require("./data/train_types.js");
require("./data/train_patterns.js");
require("./data/train_arrangements.js");
require("./data/train_consists.js");
require("./data/planner_fare.js");
require("./data/timetable_pdf.js");
require("./data/z-oper-illu.js");

/**
 * Require Modules
 */
var func = require("./functions.js");
var Time = require("./Time.js");
var RunNumberAssigner = require("./RunNumberAssigner.js");
var CrossoverTrackSummary = require("./CrossoverTrackSummary.js");
var StationSummary = require("./StationSummary.js");
var mongodb_conn2 = require("./mongodb_conn2.js");

/**
 * Constant
 */

global.dayTurnover = 3 * 3600 + 17 * 60; //3:17 AM
global.maximumDwell = 1 * 3600; //1 hour

/**
 * Init Timetable
 */

exports.init = function(){
	//Pattern Stop Ordering
	patternStopOrdering();
	//Create Train Timetable
	createTimetable();
	// Test logging here
	// ...
};

/**
 * Index Stop Orders in Patterns
 */
var patternStopOrdering = function(){
	for (var i in global.train_patterns){
		global.train_patterns[i].stopOrders = {};
		for (var j = 0; j < global.train_patterns[i].template.length; j++){
			if (global.train_patterns[i].template[j].stop != null){ //Stops only
				global.train_patterns[i].stopOrders[global.train_patterns[i].template[j].stop] = j;
			}
		}
	};
};

/**
 * Create Timetable
 * global.timetable[group][pattern]["wk" or "ph"]
 */

var createTimetable = function(){
	//Create timetable object
	global.timetable = {};
	global.runSummary = {};
	//For each group
	for (var myGroup in global.train_arrangements){
		//Generate timetable
		global.timetable[myGroup] = {};
		global.runSummary[myGroup] = {};
		//For each pattern
		for (var myPattern in global.train_arrangements[myGroup].patterns){
			console.log("Creating timetable for pattern " + myPattern);
			global.timetable[myGroup][myPattern] = {};
			console.log(" - Weekdays (Monday - Friday)");
			global.timetable[myGroup][myPattern].wk = func.getTrainTripsInAPattern(myGroup, myPattern, false);
			console.log(" - Saturdays & Public Holiday");
			global.timetable[myGroup][myPattern].ph = func.getTrainTripsInAPattern(myGroup, myPattern, true);
		}
		//Assign run numbers
		console.log("Assigning run numbers for pattern group " + myGroup);
		console.log(" - Weekdays (Monday - Friday)");
		RunNumberAssigner.assignRunNumbers(myGroup, false);
		console.log(" - Saturdays & Public Holiday");
		RunNumberAssigner.assignRunNumbers(myGroup, true);
		//Generate run no summary
		console.log("Run no. summary for pattern group " + myGroup);
		console.log(" - Weekdays (Monday - Friday)");
		RunNumberAssigner.runNoSummary(myGroup, false);
		console.log(" - Saturdays & Public Holiday");
		RunNumberAssigner.runNoSummary(myGroup, true);
	}
	//Crossover Track Summary
	console.log("Crossover Track Summary");
	CrossoverTrackSummary.summarize();
	//Station Summary
	console.log("Station Summary");
	StationSummary.summarize();
};