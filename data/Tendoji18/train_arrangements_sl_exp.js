/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Semi Limited Express Trains / "S" Local [LS]
 */

var alt104_D = function(pivot, isPH, isEven){
	if (pivot.getValue() % 600 != 0) return [];
	if (pivot.getValue() % 1200 != (isEven ? 0 : 600)) return [];
	var trains = ["AY14", "AY16", "AY18", "AY20"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104"];
		if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) return ["alt104"];
	}
	return [];
};

var alt104_U = function(pivot, isPH, isEven){
	if (pivot.getValue() % 600 != 0) return [];
	if (pivot.getValue() % 1200 != (isEven ? 0 : 600)) return [];
	var trains = ["AY13", "AY15", "AY17", "AY19"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104"];
		if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) return ["alt104"];
	}
	return [];
};

var mod_D = function(pivot, isPH){
	var arr = [];
	//When having commuter rapid service
	if (func.isTrainExists("TR", "TR02", pivot, isPH, "158", "com")) arr.push("p");
	//When having no rapid service
	if (!func.isTrainExists("TR", "TR02", pivot, isPH, "158"))
		if (!func.isTrainExists("TR", "TR04", pivot, isPH, "158")) arr.push("p");
	//Alt 104
	arr = arr.concat(alt104_D(pivot, isPH, true));
	//
	return arr;
};

var mod_U = function(pivot, isPH){
	var arr = [];
	//Alt 104
	arr = arr.concat(alt104_U(pivot, isPH, true));
	//
	return arr;
};

global.train_arrangements["LS"] = {
	showArrivals: ["156"],
	mileage: { "101": 0.0, "145": 63.8,	"150": 70.0, "158": 79.3 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"145":{turnoverTime: 5, samePlatform: false},
		"158":{turnoverTime: 5, samePlatform: false},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "Z", baseNum: 0, digits: 2, minsShift: {"01": -5.5, "02": +12}}),
	runNo: global.standardFn.runNo.bind({initial: "Z", baseNum: 0, digits: 2}),
	patterns: {
		"LS02": { //DN...
			mod: mod_D,
			runs: [
				{start: $("06:50"), end: $("23:50"), interval: 20},
				{start: $("00:10"), end: $("01:10"), interval: 20, terminate: "145", mod: "local"},
			],
		},
		"LS01": { //UP...
			runs: [
				{start: $("05:30"), end: $("06:30"), interval: 20, begin: "145", mod: "local"},
				{start: $("06:50"), end: $("23:50"), interval: 20},
			],
			mod: mod_U,
		},
		"LS04": { //DN...
			mod: mod_D,
			runs_wk: [
				{start: $("07:00"), end: $("07:20"), interval: 20, terminate: "145", mod: "local"},
				{start: $("07:40"), end: $("09:40"), interval: 20},
				{start: $("10:00"), end: $("17:00"), interval: 20, terminate: "145", mod: "local"},
				{start: $("17:20"), end: $("22:00"), interval: 20},
				{start: $("22:20"), end: $("01:00"), interval: 20, terminate: "145", mod: "local"},
			],
			runs_ph: [
				{start: $("07:00"), end: $("01:00"), interval: 20, terminate: "145", mod: "local"},
			],
		},
		"LS03": { //UP...
			runs_wk: [
				{start: $("05:40"), end: $("07:00"), interval: 20, begin: "145", mod: "local"},
				{start: $("07:20"), end: $("09:20"), interval: 20},
				{start: $("09:40"), end: $("16:40"), interval: 20, begin: "145", mod: "local"},
				{start: $("17:00"), end: $("21:40"), interval: 20},
				{start: $("22:00"), end: $("23:40"), interval: 20, begin: "145", mod: "local"},
			],
			runs_ph: [
				{start: $("05:40"), end: $("23:40"), interval: 20, begin: "145", mod: "local"},
			],
			mod: mod_U,
		},
		"LS52": { //DN NIS 大理 ➜ 大理車両基地
			timeShifting: +5, //To "fake" the run number assigner
			mod: function(pivot, isPH){
				return [];
			},
			runs_wk: [ //914 934 2134 2154 2314 2334 2354 014 024
				{at:$("10:00")},{at:$("10:20")},{at:$("22:20")},{at:$("22:40")},
				{at:$("0:00")},{at:$("0:20")},{at:$("0:40")},{at:$("1:00")},{at:$("1:10")},
			],
			runs_ph: [ //2314 2334 2354 014 024
				{at:$("0:00")},{at:$("0:20")},{at:$("0:40")},{at:$("1:00")},{at:$("1:10")},
			],
		},
		"LS51": { //UP NIS 大理車両基地 ➜ 大理
			runs_wk: [ //608 618 638 658 708 718 738 1658 1718
				{at:$("5:30")},{at:$("5:40")},{at:$("6:00")},{at:$("6:20")},{at:$("6:30")},
				{at:$("6:40")},{at:$("7:00")},{at:$("16:20")},{at:$("16:40")},
			],
			runs_ph: [ //608 618 638 658 718
				{at:$("5:30")},{at:$("5:40")},{at:$("6:00")},{at:$("6:20")},{at:$("6:40")},
			],
			mod: function(pivot, isPH){
				return [];
			},
			timeShifting: -5, //To "fake" the run number assigner
		},
		"LS54": { //DN NIS 赤田車両基地 ➜ 麥急赤田
			timeShifting: -5, //To "fake" the run number assigner
			mod: function(pivot, isPH){
				if (false) return ["p"]; //When having morning rapid service
				else return [];
			},
			runs: [ //534 544 554 604 614 624 634
				{start: $("6:50"), end: $("7:50"), interval: 10},
			],
		},
		"LS53": { //UP NIS 麥急赤田 ➜ 赤田車両基地
			runs: [ //2357 007 017 027 037 047 057
				{start: $("22:50"), end: $("23:50"), interval: 10},
			],
			mod: function(pivot, isPH){
				return [];
			},
			timeShifting: +5, //To "fake" the run number assigner
		},
	},
};