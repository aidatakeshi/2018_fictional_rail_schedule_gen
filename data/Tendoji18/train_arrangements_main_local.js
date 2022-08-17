/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Main Line & Josui Line North Local Trains (110kph) [OL][OT][JN]
 */

global.train_arrangements["OL"] = {
	showArrivals: ["139", "145", "152", "156"],
	mileage: {
		"101": 0.0, "108": 6.5, "113": 12.0, "115": 15.9, "117": 17.1, "121": 22.5, "125": 27.1, "127": 29.6, "131": 34.5, "133": 36.8, "135": 40.1, "138": 43.7, "139": 45.0,
		"140": 50.7, "142": 55.2, "145": 63.8, "148": 67.8, "150": 70.0, "152": 72.0, "154": 74.0, "156": 76.1, "158": 79.3, "354": 50.5,
	},
	returnableStations: {
		"101":{turnoverTime: 2, samePlatform: true},
		"113":{turnoverTime: 3, samePlatform: false},
		"115":{turnoverTime: 0, samePlatform: true},
		"121":{turnoverTime: 3, samePlatform: false},
		"133":{turnoverTime: 3, samePlatform: false},
		"139":{turnoverTime: 3, samePlatform: false},
		"158":{turnoverTime: 3, samePlatform: false},
		"354":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 0, digits: 3, 
		minsShift: {"01": +4.5, "02": +2.0, "03": 0.0, "04": +7.0},
		dayTurnover: {"01": 3 * 3600, "02": 4 * 3600},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 0, digits: 3}),
	patterns: {

		/**
		 * Local - Main Line (all-day service)
		*/

		"OL02": { //DN Akada...
			mod: function(pivot, isPH){
				var arr = [];
				//When having commuter rapid service --> p
				if (func.isTrainExists("TR", "TR02", pivot.sub(60,0), isPH, "158", "com")) arr.push("p");
				//When having no rapid service --> p
				if (!func.isTrainExists("TR", "TR02", pivot.sub(60,0), isPH, "158"))
					if (!func.isTrainExists("TR", "TR04", pivot.sub(60,0), isPH, "158"))
						if (!func.isTrainExists("TR", "TR06", pivot.sub(60,0), isPH, "158")) arr.push("p");
				//When having holiday rapid service --> alt113
				if (func.isTrainExists("TS", "TS06", pivot, isPH, "113")) arr.push("alt113");
				if (func.isTrainExists("TS", "TS66", pivot, isPH, "113")) arr.push("alt113");
				return arr;
			},
			runs: [
				{at: $("05:20"), interval: 10, begin: "108"}, //b Ote
				{at: $("05:30"), interval: 10, begin: "113"}, //b Aoyama
				{at: $("05:40"), interval: 10, begin: "117"}, //b Haruyoda
				{at: $("05:50"), interval: 10, begin: "121"}, //b Sunada
				{at: $("06:00"), interval: 10, begin: "125", mod: "s125"}, //b Tochiharagawa
				{at: $("06:10"), interval: 10, begin: "131"}, //b Oura
				{at: $("06:20"), interval: 10, begin: "135"}, //b Kameicho
				{at: $("06:30"), interval: 10, begin: "138", mod: "s138"}, //b Shin-Taihei
				{at: $("06:40"), interval: 10, begin: "142", mod: "alt142"}, //b Fukai
				{at: $("06:50"), interval: 10, begin: "145"}, //b Tairi
				{at: $("07:00"), interval: 10, begin: "148"}, //b Aikawa Bridge
				{at: $("07:10"), interval: 10, begin: "152", mod: "alt152"}, //b Aida Green Park
				{at: $("07:20"), interval: 10, begin: "156", mod: "alt156"}, //b Ōtoridai
				{start: $("07:30"), end: $("01:20"), interval: 10},
				{at: $("01:30"), interval: 10, mod: "alt101"},
				{at: $("01:40"), interval: 10, terminate: "108"}, //t Ote
				{at: $("01:50"), interval: 10, terminate: "113"}, //t Aoyama
				{at: $("02:00"), interval: 10, terminate: "117", mod: "s117"}, //t Haruyoda
				{at: $("02:10"), interval: 10, terminate: "121", mod: "s121"}, //t Sunada
				{at: $("02:20"), interval: 10, terminate: "125"}, //t Tochiharagawa
				{at: $("02:30"), interval: 10, terminate: "131"}, //t Oura
				{at: $("02:40"), interval: 10, terminate: "135"}, //t Kameicho
				{at: $("02:50"), interval: 10, terminate: "138"}, //t Shin-Taihei
				{at: $("03:00"), interval: 10, terminate: "140", mod: "alt140"}, //t Shin-Hanazono
				{at: $("03:10"), interval: 10, terminate: "145"}, //t Tairi
				{at: $("03:20"), interval: 10, terminate: "148"}, //t Aikawa Bridge
			],
		},
		"OL01": { //UP Akada...
			runs: [
				{at: $("03:20"), interval: 10, begin: "148"}, //b Aikawa Bridge
				{at: $("03:30"), interval: 10, begin: "145"}, //b Tairi
				{at: $("03:40"), interval: 10, begin: "140", mod: "alt140"}, //b Shin-Hanazono
				{at: $("03:50"), interval: 10, begin: "138"}, //b Shin-Taihei
				{at: $("04:00"), interval: 10, begin: "135"}, //b Kameicho
				{at: $("04:10"), interval: 10, begin: "131"}, //b Oura
				{at: $("04:20"), interval: 10, begin: "125"}, //b Tochiharagawa
				{at: $("04:30"), interval: 10, begin: "121", mod: "s121"}, //b Sunada
				{at: $("04:40"), interval: 10, begin: "117", mod: "s117"}, //b Haruyoda
				{at: $("04:50"), interval: 10, begin: "113"}, //b Aoyama
				{at: $("05:00"), interval: 10, begin: "108"}, //b Ote
				{at: $("05:10"), interval: 10, mod: "alt101"},
				{start: $("05:20"), end: $("23:10"), interval: 10},
				{at: $("23:20"), interval: 10, terminate: "156", mod: "alt154"}, //t Ōtoridai
				{at: $("23:30"), interval: 10, terminate: "152", mod: "alt152"}, //t Aida Green Park
				{at: $("23:40"), interval: 10, terminate: "148"}, //t Aikawa Bridge
				{at: $("23:50"), interval: 10, terminate: "145"}, //t Tairi
				{at: $("00:00"), interval: 10, terminate: "142", mod: "alt142"}, //t Fukai
				{at: $("00:10"), interval: 10, terminate: "138", mod: "s138"}, //t Shin-Taihei
				{at: $("00:20"), interval: 10, terminate: "135"}, //t Kameicho
				{at: $("00:30"), interval: 10, terminate: "131"}, //t Oura
				{at: $("00:40"), interval: 10, terminate: "125", mod: "s125"}, //t Tochiharagawa
				{at: $("00:50"), interval: 10, terminate: "121"}, //t Sunada
				{at: $("01:00"), interval: 10, terminate: "117"}, //t Haruyoda
				{at: $("01:10"), interval: 10, terminate: "113"}, //t Aoyama
				{at: $("01:20"), interval: 10, terminate: "108"}, //t Ote
				
			],
			mod: function(pivot, isPH){
				var arr = [];
				//When having holiday rapid service --> alt113
				if (func.isTrainExists("TS", "TS05", pivot, isPH, "113")) arr.push("alt113");
				if (func.isTrainExists("TS", "TS65", pivot, isPH, "113")) arr.push("alt113");
				return arr;
			},
		},

		"OL04": { //DN Sunada...
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:00"), end: $("06:10"), interval: 10, begin: "113", mod: "alt113"},
				{start: $("06:20"), end: $("00:50"), interval: 10},
				{start: $("01:00"), end: $("01:20"), interval: 10, terminate: "115"},
			],
		},
		"OL03": { //UP Sunada...
			runs: [
				{start: $("05:20"), end: $("05:40"), interval: 10, begin: "115"},
				{start: $("05:50"), end: $("00:20"), interval: 10},
				{start: $("00:30"), end: $("00:40"), interval: 10, terminate: "113", mod: "alt113"},
			],
			mod: function(pivot, isPH){ return []},
		},

		//Non-revenue
		"OL52": { //赤田車両基地 ➜ 麥急赤田
			timeShifting: -5,
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("07:30"), end: $("07:50"), interval: 10},
			],
		},
		"OL51": { //麥急赤田 ➜ 赤田車両基地
			timeShifting: +5,
			runs: [
				{start: $("22:50"), end: $("23:10"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},
		"OL54": { //砂田東車両基地 ➜ 麥急砂田
			timeShifting: -5,
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:20"), end: $("06:50"), interval: 10},
			],
		},
		"OL53": { //麥急砂田 ➜ 砂田東車両基地
			timeShifting: +5,
			runs: [
				{start: $("23:50"), end: $("00:20"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},
		"OL56": { //青山車両基地 ➜ 麥急青山
			timeShifting: -5,
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:00"), end: $("06:10"), interval: 10},
			],
		},
		"OL55": { //麥急青山 ➜ 青山車両基地
			timeShifting: +5,
			runs: [
				{start: $("00:30"), end: $("00:40"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},
		"OL58": { //東青山 ➜ 青山車両基地
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("01:00"), end: $("01:20"), interval: 10},
			],
		},
		"OL57": { //青山車両基地 ➜ 東青山
			runs: [
				{start: $("05:20"), end: $("05:40"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},

	},
};

global.train_arrangements["OT"] = {
	showArrivals: [],
	mileage: {
		"101": 0.0, "113": 12.0, "115": 15.9, "121": 22.5, "123": 24.8, "125": 27.1, "127": 29.6, "131": 34.5, "133": 36.8,
	},
	returnableStations: {
		"101":{turnoverTime: 2, samePlatform: true},
		"113":{turnoverTime: 3, samePlatform: false},
		"115":{turnoverTime: 0, samePlatform: true},
		"121":{turnoverTime: 3, samePlatform: false},
		"133":{turnoverTime: 3, samePlatform: false},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 100, digits: 3, 
		minsShift: {"01": +2.0, "02": +4.5, "03": +2.0, "04": +4.5},
		runOrderModifier: function(num){
			return num + (num >= 21 ? 25 - 21 : 0); //For P.M. runs, start from 201 (order 26)
		},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 100, digits: 3,
		runOrderModifier: function(num){
			return num + (num >= 21 ? 25 - 21 : 0); //For P.M. runs, start from 201 (order 26)
		}
	}),
	patterns: {

		/**
		 * Local - Main Line (rush hour service)
		*/

		"OT02": { //A.M. DN
			mod: function(pivot, isPH){
				var arr = [];
				//Half of the services are shortened to Aoyama
				if (pivot.modulo(10,0).getValue() != 0) arr.push("aoy", "alt113");
				return arr;
			},
			runs_wk: [
				{start: $("07:15"), end: $("08:05"), interval: 5, begin: "121"}, //b Sunada / Aoyama
				{start: $("08:10"), end: $("09:45"), interval: 5}, //b Koyuji / Aoyama
			],
		},
		"OT01": { //A.M. UP
			runs_wk: [
				{start: $("07:15"), end: $("08:50"), interval: 5, terminate: "121"}, //t Aoyama / Sunada
				{start: $("08:55"), end: $("09:45"), interval: 5, terminate: "113", mod: "alt113"}, //t Aoyama
			],
			mod: function(pivot, isPH){
				var arr = [];
				//Half of the services are shortened to Aoyama
				if (pivot.modulo(10,0).getValue() != 0) arr.push("aoy", "alt113");
				return arr;
			},
		},

		"OT04": { //P.M. DN
			mod: function(pivot, isPH){
				var arr = [];
				//Half of the services are shortened to Aoyama
				if (pivot.modulo(10,0).getValue() != 0) arr.push("aoy", "alt113");
				return arr;
			},
			runs_wk: [
				{start: $("17:05"), end: $("17:55"), interval: 5, begin: "113", mod: "alt113"}, //b Aoyama
				{start: $("18:00"), end: $("19:35"), interval: 5, begin: "121"}, //b Sunada
				{start: $("19:40"), end: $("20:10"), interval: 5},
			],
		},
		"OT03": { //P.M. UP
			runs_wk: [
				{start: $("17:05"), end: $("19:20"), interval: 5}, //Koyuji
				{start: $("19:25"), end: $("20:10"), interval: 5, terminate: "121"}, //Sunada
			],
			mod: function(pivot, isPH){
				var arr = [];
				//Half of the services are shortened to Aoyama
				if (pivot.modulo(10,0).getValue() != 0) arr.push("aoy", "alt113");
				return arr;
			},
		},
		
		//Non-revenue
		"OT52": { //光祐寺車両基地 ➜ 光祐寺
			timeShifting: -5,
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:55"), end: $("08:25"), interval: 10},
			],
		},
		"OT51": { //光祐寺 ➜ 光祐寺車両基地
			timeShifting: +5,
			runs: [
				{start: $("18:56"), end: $("20:26"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},
		"OT54": { //砂田東車両基地 ➜ 麥急砂田
			timeShifting: -5,
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:31"), end: $("07:11"), interval: 10},
				{start: $("17:11"), end: $("18:41"), interval: 10},
			],
		},
		"OT53": { //麥急砂田 ➜ 砂田東車両基地
			timeShifting: +5,
			runs: [
				{start: $("08:00"), end: $("09:30"), interval: 10},
				{start: $("20:10"), end: $("20:50"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},
		"OT56": { //青山車両基地 ➜ 麥急青山
			timeShifting: -5,
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("06:44"), end: $("07:34"), interval: 10},
				{start: $("16:34"), end: $("17:24"), interval: 5},
			],
		},
		"OT55": { //麥急青山 ➜ 青山車両基地
			timeShifting: +5,
			runs: [
				{start: $("09:17"), end: $("10:07"), interval: 5},
				{start: $("19:37"), end: $("20:27"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},
	},
};

global.train_arrangements["JN"] = {
	showArrivals: [],
	mileage: {
		"133": 36.8, "139": 45.0, "354": 50.5,
	},
	returnableStations: {
		"133":{turnoverTime: 2, samePlatform: true},
		"139":{turnoverTime: 0, samePlatform: true},
		"354":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 142, digits: 3, shortTrip: true,
		minsShift: {"01": -1.0, "02": +9.0},
		runOrderModifier: function(num){
			return num + (num >= 3 ? 25 - 3 : 0); //For P.M. runs, start from 193 (order 22)
		},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 142, digits: 3,
		runOrderModifier: function(num){
			return num + (num >= 3 ? 25 - 3 : 0); //For P.M. runs, start from 193 (order 22)
		}
	}),
	patterns: {

		/**
		 * Local - Josui Line North (rush hour service)
		*/

		"JN02": { //DN Josui Line N...
			mod: function(pivot, isPH){ return []},
			runs_wk: [
				{start: $("07:30"), end: $("09:30"), interval: 10},
				{start: $("09:40"), end: $("10:00"), interval: 10, mod: "l"},
				{start: $("16:30"), end: $("20:30"), interval: 10},
				{start: $("20:40"), end: $("21:00"), interval: 10, mod: "l"},
			],
		},
		"JN01": { //UP Josui Line N...
			runs_wk: [
				{start: $("07:00"), end: $("07:20"), interval: 10, mod: "l"},
				{start: $("07:30"), end: $("09:30"), interval: 10},
				{start: $("16:00"), end: $("16:20"), interval: 10, mod: "l"},
				{start: $("16:30"), end: $("20:30"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},

		"JN52": { //光祐寺 ➜ 光祐寺車両基地
			mod: function(pivot, isPH){ return []},
			runs_wk: [
				{start: $("09:40"), end: $("10:00"), interval: 10},
				{start: $("20:40"), end: $("21:00"), interval: 10},
			],
		},
		"JN51": { //光祐寺車両基地 ➜ 光祐寺
			runs_wk: [
				{start: $("07:00"), end: $("07:20"), interval: 10},
				{start: $("16:00"), end: $("16:20"), interval: 10, mod: "l"},
			],
			mod: function(pivot, isPH){ return []},
		},
		"JN82": { //麥急上水 ➜ 折り返線B
			mod: function(pivot, isPH){ return []},
			runs_wk: [
				{start: $("07:30"), end: $("09:30"), interval: 10},
				{start: $("16:30"), end: $("20:30"), interval: 10},
			],
		},
		"JN81": { //折り返線B ➜ 麥急上水
			runs_wk: [
				{start: $("07:30"), end: $("09:30"), interval: 10},
				{start: $("16:30"), end: $("20:30"), interval: 10},
			],
			mod: function(pivot, isPH){ return []},
		},

	},
};