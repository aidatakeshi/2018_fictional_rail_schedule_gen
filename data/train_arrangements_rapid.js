/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Rapid Trains (130kph) [TR][TS]
 */

var c = 3.0; //Mileage for Kawada
var n = -22.0; //Mileage for Nanshin Airport
var stopNearbyDepot = {turnoverTime: 0, samePlatform: false};

/**
 * Rapid, Commuter Rapid & Special Rapid - Main Line & Tendoji Line
*/

var PH_TR_DN = {
	CommuterRapid: [],
	Rapid: [
		{at: $("05:30"), begin: "114", mod: "alt114"}, //Aoyama E.
		{at: $("05:40"), begin: "121"}, //Sunada
		{at: $("05:50"), begin: "139"}, //Josui
		{at: $("06:00"), begin: "142", mod: "alt142"}, //Fukai
		{at: $("06:10"), begin: "150", mod: "alt150"}, //Aida
		{start: $("06:20"), end: $("07:00"), interval: 10, begin: "158"}, //Akada
		//
		{start: $("07:10"), end: $("00:30"), interval: 10},
	],
	RapidKawada: [
		{start: $("00:40"), end: $("01:00"), interval: 10, terminate: "113"},
		{at: $("01:10")},
		{at: $("01:20"), terminate: "113"}, //t Aoyama
		{at: $("01:30"), mod: "alt101"},
		{at: $("01:40"), terminate: "113"}, //t Aoyama
		{at: $("01:50"), terminate: "150", mod: "alt150"}, //t Aida
		{at: $("02:10"), terminate: "139"}, //t Josui
		{at: $("02:20"), terminate: "142", mod: "alt142"}, //t Fukai
	],
	SpecialRapid: [
		{at: $("01:50")}, //t Aoyama E.
	],
};

var WK_TR_DN = {
	Rapid: [
		{at: $("05:30"), begin: "114", mod: "alt114"}, //Aoyama E.
		{at: $("05:40"), begin: "121"}, //Sunada
		{at: $("05:50"), begin: "139"}, //Josui
		{at: $("06:00"), begin: "142", mod: "alt142"}, //Fukai
		{at: $("06:10"), begin: "150", mod: "alt150"}, //Aida
		{start: $("06:20"), end: $("07:00"), interval: 10, begin: "158"}, //Akada
		//
		{start: $("07:10"), end: $("07:50"), interval: 10},
		{at: $("08:00"), begin: "154", mod: "com"}, //Aida Takeshi
		{start: $("08:10"), end: $("09:50"), interval: 10, mod: "com"},
		{at: $("09:50"), terminate: "158", mod: "local"}, //t Akada
		{start: $("10:00"), end: $("00:30"), interval: 10},
	],
	RapidKawada: PH_TR_DN.RapidKawada,
	SpecialRapid: PH_TR_DN.SpecialRapid,
};

var PH_TR_UP = {
	SpecialRapid: [
		{at: $("04:50")}, //b Aoyama E.
	],
	RapidKawada: [
		{at: $("04:20"), begin: "142", mod: "alt142"}, //b Fukai
		{at: $("04:30"), begin: "139"}, //b Josui
		{at: $("04:50"), begin: "150", mod: "alt150"}, //b Aida
		{at: $("05:00"), begin: "113"}, //b Aoyama
		{at: $("05:10"), mod: "alt101"},
		{at: $("05:20"), begin: "113"}, //b Aoyama
		{at: $("05:30")},
		{start: $("05:40"), end: $("06:00"), interval: 10, begin: "113"},
	],
	Rapid: [
		{start: $("06:10"), end: $("23:30"), interval: 10},
		{start: $("23:40"), end: $("00:20"), interval: 10, terminate: "158"}, //Akada
		{at: $("00:30"), terminate: "150", mod: "alt150"}, //Aida
		{at: $("00:40"), terminate: "142", mod: "alt142"}, //Fukai
		{at: $("00:50"), terminate: "139"}, //Josui
		{at: $("01:00"), terminate: "121"}, //Sunada
		{at: $("01:10"), terminate: "114", mod: "alt114"}, //Aoyama E.
	],
};

var WK_TR_UP = {
	SpecialRapid: PH_TR_UP.SpecialRapid,
	RapidKawada:  PH_TR_UP.RapidKawada,
	Rapid:  PH_TR_UP.Rapid,
};

//Object for TR

global.train_arrangements["TR"] = {
	showArrivals: ["113","158"],
	mileage: {
		"101": 0.0 +c, "113": 12.0 +c, "114": 13.4 +c, "115": 14.7 +c, "121": 22.5 +c, "125": 27.1 +c, "131": 34.5 +c, "135": 40.1 +c, "139": 45.0 +c,
		"142": 55.2 +c, "145": 63.8 +c, "150": 70.0 +c, "154": 74.0 +c, "158": 79.3 +c, "162": 87.0 +c,
		"507": 6.7, "501": 0.0,
		"916": n, "915": n+ 3.3, "911": n+ 10.5,
	},
	returnableStations: {
		"101": {turnoverTime: 2, samePlatform: true},
		"114": {turnoverTime: 2, samePlatform: true},
		"113": stopNearbyDepot, "115": stopNearbyDepot, "125": stopNearbyDepot, "131": stopNearbyDepot,
		"135": stopNearbyDepot, "142": stopNearbyDepot, "145": stopNearbyDepot, "154": stopNearbyDepot, "158": stopNearbyDepot,
		"162": {turnoverTime: 2, samePlatform: true},
		"507": stopNearbyDepot, "915": stopNearbyDepot,
		"916": {turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "R", baseNum: 0, digits: 2, 
		minsShift: {"01": +2.0, "02": +9.0, "03": +2.0, "04": +9.0, "05": +2.0, "06": +9.0},
	}),
	runNo: global.standardFn.runNo.bind({initial: "R", baseNum: 0, digits: 2}),
	patterns: {
		"TR02": { //Rapid DN
			mod: function(pivot, isPH, _mod){
				var arr = [];
				if (func.isInArray("com", _mod)){
					//If this is a Commuter Rapid
					//Time shift at Koda Airport if there is A Liner
					if (func.isTrainExists("AE", "AE02", pivot.sub(20,0), isPH, "162", "a")) arr.push("c");
					else arr.push("b");
					//Use platform 3/4 in Koda Airport alternatively
					if (pivot.add(10,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				}else{
					//If this is a Rapid
					//Time shift at Koda Airport if there is A Liner
					if (func.isTrainExists("AE", "AE02", pivot.sub(30,0), isPH, "162", "a")) arr.push("a");
					//Use platform 3/4 in Koda Airport alternatively
					if (pivot.add(20,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				}
				return arr;
			},
			runs_wk: WK_TR_DN.Rapid,
			runs_ph: PH_TR_DN.Rapid,
		},
		"TR04": { //Rapid (Kawada) DN
			mod: function(pivot, isPH){
				var arr = [];
				//Time shift at Koda Airport if there is A Liner
				if (func.isTrainExists("AE", "AE02", pivot.sub(30,0), isPH, "162", "a")) arr.push("a");
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.add(20,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				return arr;
			},
			runs_wk: WK_TR_DN.RapidKawada,
			runs_ph: PH_TR_DN.RapidKawada,
		},
		"TR06": { //Special Rapid DN
			mod: function(pivot, isPH){
				var arr = [];
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.add(30,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				return arr;
			},
			runs_wk: WK_TR_DN.SpecialRapid,
			runs_ph: PH_TR_DN.SpecialRapid,
		},
		"TR05": { //Special Rapid UP
			mod: function(pivot, isPH){
				var arr = [];
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.add(20,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				return arr;
			},
			runs_wk: WK_TR_UP.SpecialRapid,
			runs_ph: PH_TR_UP.SpecialRapid,
		},
		"TR03": { //Rapid (Kawada) UP
			mod: function(pivot, isPH){
				var arr = [];
				//Time shift at Koda Airport if there is A Liner
				if (func.isTrainExists("AE", "AE01", pivot.add(30,0), isPH, "162", "a")) arr.push("a");
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.add(30,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				return arr;
			},
			runs_wk: WK_TR_UP.RapidKawada,
			runs_ph: PH_TR_UP.RapidKawada,
		},
		"TR01": { //Rapid UP
			mod: function(pivot, isPH){
				var arr = [];
				//Time shift at Koda Airport if there is A Liner
				if (func.isTrainExists("AE", "AE01", pivot.add(30,0), isPH, "162", "a")) arr.push("a");
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.add(30,0).modulo(40,0).getValue() <= 10 * 60) arr.push("alt162");
				return arr;
				console.log(arr);
			},
			runs_wk: WK_TR_UP.Rapid,
			runs_ph: PH_TR_UP.Rapid,
		},

		//Non-revenue trains
		"TR52": { //赤田車両基地 ➜ 麥急赤田
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:20"), end: $("07:00"), interval: 10},
			],
		},
		"TR51": { //麥急赤田 ➜ 赤田車両基地
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("23:40"), end: $("00:20"), interval: 10},
			],
		},
		"TR54": { //麥急青山 ➜ 南向島車両基地
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("00:40"), end: $("01:00"), interval: 10},
				{start: $("01:20"), end: $("01:40"), interval: 20},
			],
		},
		"TR53": { //南向島車両基地 ➜ 麥急青山
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("05:00"), end: $("05:20"), interval: 20},
				{start: $("05:40"), end: $("06:00"), interval: 10},
			],
		},
		"TR62": { //赤田車両基地 ➜ 藍田武
			mod: function(pivot, isPH){ return []},
			runs_wk: [
				{at: $("08:00")},
			],
		},
		"TR64": { //麥急赤田 ➜ 赤田車両基地
			mod_wk: function(pivot, isPH){ return []},
			runs_wk: [
				{at: $("10:00")},
			],
		},
		//End
	},
};

/**
 * Sectional Rapid & Holiday Rapid - Main Line & Tendoji Line
*/

global.train_arrangements["TS"] = {
	showArrivals: ["113"],
	mileage: {
		"113": 12.0 +c, "115": 14.7 +c, "121": 22.5 +c, "123": 24.8 +c, "125": 27.1 +c, "131": 34.5 +c,
		"112": 13.6, "507": 6.7, "501": 0.0, "915": n+ 3.3, "911": n+ 10.5,
	},
	returnableStations: {
		"113": {turnoverTime: 5, samePlatform: false},
		"115": stopNearbyDepot, 
		"121": {turnoverTime: 5, samePlatform: false},
		"123": stopNearbyDepot, 
		"131": {turnoverTime: 5, samePlatform: false},
		"507": stopNearbyDepot,
		"911": {turnoverTime: 5, samePlatform: false},
		"915": stopNearbyDepot,
	},
	tripNo: global.standardFn.tripNo.bind({initial: "S", baseNum: 0, digits: 2, 
		minsShift: {"01": -3.0, "02": +14.0, "03": -3.0, "04": +14.0, "05": -1.0, "06": +9.0},
		runOrderModifier: function(num){
			return num + (num >= 17 ? 8 : 0); //For P.M. runs, start from 51 (order 25)
		},
	}),
	runNo: global.standardFn.runNo.bind({initial: "S", baseNum: 0, digits: 2,
		runOrderModifier: function(num){
			return num + (num >= 17 ? 8 : 0); //For P.M. runs, start from 51 (order 25)
		},
	}),
	patterns: {
		"TS02": { //Sectional Rapid DN
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				//A.M.
				{start: $("07:20"), end: $("08:00"), interval: 10, begin: "121"},
				{start: $("08:10"), end: $("09:40"), interval: 10},
			],
		},
		"TS01": { //Sectional Rapid UP
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				//A.M.
				{start: $("06:00"), end: $("06:20"), interval: 10, begin: "123", mod: "local"},
				{start: $("06:30"), end: $("06:50"), interval: 10, begin: "115", mod: "local"},
				{start: $("07:00"), end: $("07:30"), interval: 10},
				{start: $("07:40"), end: $("08:10"), interval: 10, terminate: "121"},
				{start: $("08:20"), end: $("09:20"), interval: 10, terminate: "113"},
			],
		},
		"TS04": { //Sectional Rapid DN
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				//P.M.
				{start: $("17:00"), end: $("17:30"), interval: 10, begin: "113"},
				{start: $("17:40"), end: $("21:50"), interval: 10, begin: "121"},
			],
		},
		"TS03": { //Sectional Rapid UP
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				//P.M.
				{start: $("17:00"), end: $("21:50"), interval: 10, terminate: "121"},
			],
		},
		"TS06": { //Holiday Rapid DN
			mod: function(pivot, isPH, _mod){ return []; },
			runs_ph: [
				{start: $("09:30"), end: $("20:20"), interval: 10, terminate: "911"},
				{start: $("20:30"), end: $("21:20"), interval: 10},
			],
		},
		"TS05": { //Holiday Rapid UP
			mod: function(pivot, isPH, _mod){ return []; },
			runs_ph: [
				{start: $("09:00"), end: $("09:50"), interval: 10},
				{start: $("10:00"), end: $("20:50"), interval: 10, begin: "911"},
			],
		},

		//Non-revenue trains
		"TS51": { //砂田東車両基地 ➜ 広原町
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("06:00"), end: $("06:20"), interval: 10},
			],
		},
		"TS53": { //麥急砂田 ➜ 砂田東車両基地
			timeShifting: +5, //To "fake" the run number assigner
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("07:40"), end: $("08:10"), interval: 10},
				{start: $("20:30"), end: $("21:50"), interval: 10},
			],
		},
		"TS54": { //砂田東車両基地 ➜ 麥急砂田
			timeShifting: -5, //To "fake" the run number assigner
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("07:20"), end: $("08:00"), interval: 10},
				{start: $("17:40"), end: $("18:20"), interval: 10},
			],
		},
		"TS55": { //麥急青山 ➜ 青山車両基地
			timeShifting: +5,
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("08:20"), end: $("09:20"), interval: 10},
			],
		},
		"TS56": { //青山車両基地 ➜ 麥急青山
			timeShifting: -5,
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("17:00"), end: $("17:30"), interval: 10},
			],
		},
		"TS57": { //青山車両基地 ➜ 東青山
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("06:30"), end: $("06:50"), interval: 10},
			],
		},
		"TS61": { //新羽崎車両基地 ➜ 新羽崎
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("07:00"), end: $("07:50"), interval: 10},
				{start: $("17:00"), end: $("17:30"), interval: 10},
			],
			runs_ph: [
				{start: $("09:00"), end: $("09:50"), interval: 10},
			],
		},
		"TS62": { //新羽崎 ➜ 新羽崎車両基地
			mod: function(pivot, isPH, _mod){ return []; },
			runs_wk: [
				{start: $("08:50"), end: $("09:40"), interval: 10},
				{start: $("21:20"), end: $("21:50"), interval: 10},
			],
			runs_ph: [
				{start: $("20:30"), end: $("21:20"), interval: 10},
			],
		},
		"TS65": { //麥急青山 ➜ 青山車両基地
			timeShifting: +5,
			mod: function(pivot, isPH, _mod){ return []; },
			runs_ph: [
				{start: $("20:30"), end: $("20:50"), interval: 10},
			],
		},
		"TS66": { //青山車両基地 ➜ 麥急青山
			timeShifting: -5,
			mod: function(pivot, isPH, _mod){ return []; },
			runs_ph: [
				{start: $("09:30"), end: $("09:50"), interval: 10},
			],
		},

		//End
	},
};