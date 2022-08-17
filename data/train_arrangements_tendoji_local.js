/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Tendoji Line Local Train
 */

var n = -22.0;

var TE_init = function(){
	global.train_arrangements["TE"] = {
		showArrivals: ["913","909","905","501","505","509"],
		mileage: {
			"113": 15.0, "510": 11.1, "509": 9.0, "507": 6.7, "505": 4.8, "501": 0.0,
			"916": n, "915": n+ 3.3, "913": n+ 7.2, "911": n+ 10.5, "909": n+ 12.5, "907": n+ 14.8, "905": n+ 17.5, "903": n+ 19.9,
		},
		returnableStations: {
			"915": {turnoverTime: 0, samePlatform: true},
			"916": {turnoverTime: 2, samePlatform: true},
			"501": {turnoverTime: 5, samePlatform: false},
			"507": {turnoverTime: 5, samePlatform: false},
			"509": {turnoverTime: 0, samePlatform: true},
			"113": {turnoverTime: 7, samePlatform: false},
		},
		tripNo: global.standardFn.tripNo.bind({initial: "T", baseNum: 0, digits: 2, 
			minsShift: {"01": +2.5, "02": +6.5, "03": +4.5, "04": +12.5},
		}),
		runNo: global.standardFn.runNo.bind({initial: "T", baseNum: 0, digits: 2}),
		patterns: {
			"TE04": { //Local DN II
				mod: TEx4_mod,
				runs: [
					{at: $("05:10"), begin: "907"},
					{at: $("05:20"), begin: "903"},
					{at: $("05:30"), begin: "501"},
					{start: $("05:40"), end: $("00:50"), interval: 10},
					{at: $("01:00"), terminate: "911"},
					{at: $("01:10"), terminate: "907"},
					{at: $("01:20"), terminate: "903"},
					{at: $("01:30"), terminate: "501"},
				],
			},
			"TE03": { //Local UP II
				runs: [
					{at: $("05:10"), begin: "501"},
					{at: $("05:20"), begin: "903"},
					{at: $("05:30"), begin: "907"},
					{at: $("05:40"), begin: "911"},
					{start: $("05:50"), end: $("01:00"), interval: 10},
					{at: $("01:10"), terminate: "501"},
					{at: $("01:20"), terminate: "903"},
					{at: $("01:30"), terminate: "907"},
				],
				mod: TEx3_mod,
			},

			"TE02": { //Local DN I
				mod: TEx2_mod,
				runs_wk: [
					{start: $("06:00"), end: $("06:50"), interval: 10}, //, begin: "509"},
					{start: $("07:00"), end: $("07:10"), interval: 10}, //, begin: "509"},
					{start: $("07:20"), end: $("09:50"), interval: 10, begin: "113"},
					{start: $("10:00"), end: $("17:20"), interval: 10, begin: "507"},
					{start: $("17:30"), end: $("17:40"), interval: 10}, //, begin: "509"},
					{start: $("17:50"), end: $("22:50"), interval: 10, begin: "113"},
					{start: $("23:00"), end: $("23:20"), interval: 10, begin: "507"},
					{start: $("23:30"), end: $("00:20"), interval: 10, begin: "507", terminate: "915"},
				],
				runs_ph: [
					{start: $("06:00"), end: $("06:50"), interval: 10}, //, begin: "509"},
					{start: $("07:00"), end: $("23:20"), interval: 10, begin: "507"},
					{start: $("23:30"), end: $("00:20"), interval: 10, begin: "507", terminate: "915"},
				],
			},
			"TE01": { //Local UP II
				runs_wk: [
					{start: $("06:20"), end: $("07:10"), interval: 10, terminate: "113", begin: "915"},
					{start: $("07:20"), end: $("08:50"), interval: 10, terminate: "113"},
					{start: $("09:00"), end: $("09:10"), interval: 10}, //, terminate: "509"},
					{start: $("09:20"), end: $("16:40"), interval: 10, terminate: "507"},
					{start: $("16:50"), end: $("21:50"), interval: 10, terminate: "113"},
					{start: $("22:00"), end: $("22:10"), interval: 10}, //, terminate: "509"},
					{start: $("22:20"), end: $("23:40"), interval: 10, terminate: "507"},
					{start: $("23:50"), end: $("00:40"), interval: 10}, //, terminate: "509"},
				],
				runs_ph: [
					{start: $("06:20"), end: $("07:10"), interval: 10, terminate: "507", begin: "915"},
					{start: $("07:20"), end: $("23:40"), interval: 10, terminate: "507"},
					{start: $("23:50"), end: $("00:40"), interval: 10}, //, terminate: "509"},
				],
				mod: TEx1_mod,
			},

			"TE54": { //新羽崎 ➜ 新羽崎車両基地
				mod: TEx4_mod,
				runs: [
					{start: $("00:30"), end: $("00:50"), interval: 10},
				],
			},
			"TE53": { //新羽崎車両基地 ➜ 新羽崎
				runs: [
					{start: $("05:50"), end: $("06:10"), interval: 10},
				],
				mod: TEx3_mod,
			},
			"TE52": { //新羽崎 ➜ 新羽崎車両基地
				mod: TEx2_mod,
				runs: [
					{start: $("23:30"), end: $("00:20"), interval: 10},
				],
			},
			"TE51": { //新羽崎車両基地 ➜ 新羽崎
				runs: [
					{start: $("06:20"), end: $("07:10"), interval: 10},
				],
				mod: TEx1_mod,
			},
			"TE62": { //青山車両基地 ➜ 麥急青山
				timeShifting: -7,
				mod: function(){return []},
				runs_wk: [
					{start: $("5:12"), end: $("6:42"), interval: 10},
					{start: $("5:27"), end: $("5:37"), interval: 10},
					{start: $("17:02"), end: $("17:12"), interval: 10},
				],
				runs_ph: [
					{start: $("5:12"), end: $("6:22"), interval: 10},
					{start: $("5:27"), end: $("5:37"), interval: 10},
				],
			},
			"TE61": { //麥急青山 ➜ 青山車両基地
				timeShifting: +7,
				runs_wk: [
					{start: $("9:20"), end: $("9:30"), interval: 10},
					{start: $("22:20"), end: $("22:30"), interval: 10},
					{start: $("0:10"), end: $("1:20"), interval: 10},
					{start: $("0:55"), end: $("1:05"), interval: 10},
				],
				runs_ph: [
					{start: $("0:10"), end: $("1:20"), interval: 10},
					{start: $("0:55"), end: $("1:05"), interval: 10},
				],
				mod: function(){return []},
			},

		},
	};
};

//Modifications

var TEx4_mod = function(pivot, isPH, _mod){
	var A = func.isTrainExists("TR", "TR02", pivot.add(10,0), isPH, "501") || func.isTrainExists("TR", "TR04", pivot.add(10,0), isPH, "501") ? 100 : 0;
	var B = func.isTrainExists("TR", "TR02", pivot, isPH, "501") || func.isTrainExists("TR", "TR04", pivot, isPH, "501") ? 10 : 0;
	var C = func.isTrainExists("TR", "TR02", pivot.sub(10,0), isPH, "501") || func.isTrainExists("TR", "TR04", pivot.sub(10,0), isPH, "501") ? 1 : 0;
	var S = func.isTrainExists("TS", "TS02", pivot.sub(10,0), isPH, "501") || func.isTrainExists("TS", "TS04", pivot.sub(10,0), isPH, "501") ? 1 : 0;
	if (!A && B && C) return ["n1", "a"];
	else if (!A && !B && C) return ["n2", "a"];
	else if (A && B && !C) return ["m1"];
	else if (A && !B && !C) return ["m2"];
	else if (!A && !B && !C) return pivot.after(15,0,0) ? ["n3"] : ["m3"];
	else return S ? [""] : ["a"];
};
var TEx3_mod = function(pivot, isPH, _mod){
	var A = func.isTrainExists("TR", "TR01", pivot.sub(10,0), isPH, "501") || func.isTrainExists("TR", "TR03", pivot.sub(10,0), isPH, "501") ? 100 : 0;
	var B = func.isTrainExists("TR", "TR01", pivot, isPH, "501") || func.isTrainExists("TR", "TR03", pivot, isPH, "501") ? 10 : 0;
	var C = func.isTrainExists("TR", "TR01", pivot.add(10,0), isPH, "501") || func.isTrainExists("TR", "TR03", pivot.add(10,0), isPH, "501") ? 1 : 0;
	var S = func.isTrainExists("TS", "TS01", pivot.add(10,0), isPH, "501") || func.isTrainExists("TS", "TS03", pivot.add(10,0), isPH, "501");
	if (!A && B && C) return ["n1", "a"];
	else if (!A && !B && C) return ["n2", "a"];
	else if (A && B && !C) return ["m1"];
	else if (A && !B && !C) return ["m2"];
	else if (!A && !B && !C) return pivot.before(15,0,0) ? ["n3"] : ["m3"];
	else return S ? [""] : ["a"];
};
var TEx2_mod = function(pivot, isPH, _mod){
	return func.isTrainExists("TS", "TS02", pivot, isPH, "501") || func.isTrainExists("TS", "TS04", pivot, isPH, "501") ? [] : ["a"];
};
var TEx1_mod = function(pivot, isPH, _mod){
	return func.isTrainExists("TS", "TS01", pivot, isPH, "501") || func.isTrainExists("TS", "TS03", pivot, isPH, "501") ? [] : ["a"];
};

TE_init();