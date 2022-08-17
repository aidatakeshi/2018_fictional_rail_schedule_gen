/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Sunada Line & Oura Line
 */

global.train_arrangements["SU"] = {
	showArrivals: [],
	mileage: { "113": 0.0, "304": 5.5, "307": 9.8, "308": 11.3, "121": 14.0, "325": 18.8, "329": 24.7 },
	returnableStations: {
		"113":{turnoverTime: 2, samePlatform: true},
		"307":{turnoverTime: 0, samePlatform: true},
		"308":{turnoverTime: 5, samePlatform: false},
		"325":{turnoverTime: 5, samePlatform: false},
		"329":{turnoverTime: 5, samePlatform: false},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 500, digits: 3, shortTrip: true,
		minsShift: {"01": +2.5, "02": -5, "03": 0, "04": -2.0}
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 500, digits: 3}),
	patterns: {
		"SU02": { //DN...
			mod: function(pivot, isPH){return [];},
			runs: [
				{at: $("05:15"), begin: "307"}, //b Otame
				{at: $("05:25"), begin: "307"}, //b Otame
				{at: $("05:35"), begin: "325"}, //b Kotorihara
				{start: $("05:45"), end: $("05:55"), interval: 10},
				{at: $("06:00"), begin: "325"}, {at: $("06:05")}, //b Kotorihara & Full-trip
				{at: $("06:10"), begin: "325"}, {at: $("06:15")}, //b Kotorihara & Full-trip
				{at: $("06:20"), begin: "325"}, {at: $("06:25")}, //b Kotorihara & Full-trip
				{at: $("06:30"), begin: "325"}, {at: $("06:35")}, //b Kotorihara & Full-trip
				{start: $("06:40"), end: $("00:20"), interval: 5},
				{start: $("00:25"), end: $("01:15"), interval: 10},
				{at: $("01:25"), terminate: "308"}, //t Minanishinmachi
			],
		},
		"SU01": { //UP...
			runs: [
				{at: $("05:05"), begin: "308"}, //b Minanishinmachi
				{start: $("05:15"), end: $("06:05"), interval: 10},
				{start: $("06:10"), end: $("23:50"), interval: 5},
				{at: $("23:55")}, {at: $("00:00"), terminate: "325"}, //t Kotorihara & Full-trip
				{at: $("00:05")}, {at: $("00:10"), terminate: "325"}, //t Kotorihara & Full-trip
				{at: $("00:15")}, {at: $("00:20"), terminate: "325"}, //t Kotorihara & Full-trip
				{at: $("00:25")}, {at: $("00:30"), terminate: "325"}, //t Kotorihara & Full-trip
				{start: $("00:35"), end: $("00:45"), interval: 10},
				{at: $("00:55"), terminate: "325"}, //t Kotorihara
				{at: $("01:05"), terminate: "307"}, //t Otame
				{at: $("01:15"), terminate: "307"}, //t Otame

			],
			mod: function(pivot, isPH){return [];},
		},
		"SU04": { //DN...
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("06:45"), end: $("06:55"), interval: 5, begin: "307"},
				{start: $("07:00"), end: $("09:30"), interval: 5, begin: "325"},
				{start: $("09:35"), end: $("09:45"), interval: 5, terminate: "308", begin: "325"},
				//
				{start: $("16:30"), end: $("16:40"), interval: 5, begin: "307"},
				{start: $("16:45"), end: $("21:45"), interval: 5, begin: "325"},
			],
			runs_ph: [
				{start: $("09:30"), end: $("20:30"), interval: 10, begin: "325", terminate: "308"},
			],
		},
		"SU03": { //UP...
			runs_wk: [
				{start: $("06:45"), end: $("09:15"), interval: 5, terminate: "325"},
				{start: $("09:20"), end: $("09:30"), interval: 5, terminate: "307"},
				//
				{start: $("16:15"), end: $("16:25"), interval: 5, begin: "308", terminate: "325"},
				{start: $("16:30"), end: $("21:30"), interval: 5, terminate: "325"},
				{start: $("21:35"), end: $("21:45"), interval: 5, terminate: "307"},
			],
			runs_ph: [
				{start: $("09:00"), end: $("20:00"), interval: 10, begin: "308", terminate: "325"},
			],
			mod: function(pivot, isPH){return [];},
		},
		"SU52": { //小栃原車両基地 ➜ 小栃原
			timeShifting: -5,
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{at: $("05:07")},
				{start: $("05:32"), end: $("06:02"), interval: 10},
				//
				{start: $("06:32"), end: $("07:22"), interval: 5, mod: "a"},
				{start: $("16:17"), end: $("16:52"), interval: 5, mod: "a"},
			],
			runs_ph: [
				{at: $("05:07")},
				{start: $("05:32"), end: $("06:02"), interval: 10},
				//
				{start: $("09:02"), end: $("09:32"), interval: 10, mod: "a"},
			],
		},
		"SU51": { //小栃原 ➜ 小栃原車両基地
			timeShifting: +5,
			runs_wk: [
				{start: $("09:09"), end: $("09:44"), interval: 5, mod: "a"},
				{start: $("21:09"), end: $("21:59"), interval: 5, mod: "a"},
				//
				{start: $("00:29"), end: $("00:59"), interval: 10},
				{at: $("01:24")},
			],
			runs_ph: [
				{start: $("19:59"), end: $("20:29"), interval: 10, mod: "a"},
				//
				{start: $("00:29"), end: $("00:59"), interval: 10},
				{at: $("01:24")},
			],
			mod: function(pivot, isPH){return [];},
		},
		"SU54": { //百石留置線 ➜ 百石
			timeShifting: -5,
			mod: function(pivot, isPH){return [];},
			runs: [
				{start: $("05:08"), end: $("05:48"), interval: 10},
				{start: $("06:08"), end: $("06:48"), interval: 10},
			],
		},
		"SU53": { //百石 ➜ 百石留置線
			timeShifting: +5,
			runs: [
				{start: $("23:44"), end: $("00:24"), interval: 10},
				{start: $("00:44"), end: $("01:24"), interval: 10},
			],
			mod: function(pivot, isPH){return [];},
		},
		"SU56": { //砂田南留置線 ➜ 大為
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("05:04"), end: $("05:14"), interval: 10},
				//
				{start: $("06:34"), end: $("06:44"), interval: 5, mod: "a"},
				{start: $("16:19"), end: $("16:29"), interval: 5, mod: "a"},
			],
			runs_ph: [
				{start: $("05:04"), end: $("05:14"), interval: 10},
				//
			],
		},
		"SU55": { //大為 ➜ 砂田南留置線
			runs_wk: [
				{start: $("09:33"), end: $("09:43"), interval: 5, mod: "a"},
				{start: $("21:48"), end: $("21:58"), interval: 5, mod: "a"},
				//
				{start: $("01:18"), end: $("01:28"), interval: 10},
			],
			runs_ph: [
				//
				{start: $("01:18"), end: $("01:28"), interval: 10},
			],
			mod: function(pivot, isPH){return [];},
		},
		"SU58": { //砂田南新町 ➜ 砂田南留置線
			timeShifting: +5,
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("09:21"), end: $("09:31"), interval: 5, mod: "a"},
				//
				{at: $("01:11")},
			],
			runs_ph: [
				//
				{at: $("01:11")},
			],
		},
		"SU57": { //砂田南留置線 ➜ 砂田南新町
			timeShifting: -5,
			runs_wk: [
				{at: $("05:21")},
				//
				{start: $("16:31"), end: $("16:41"), interval: 5, mod: "a"},
			],
			runs_ph: [
				{at: $("05:21")},
				//
			],
			mod: function(pivot, isPH){return [];},
		},
	},
};

global.train_arrangements["OU"] = {
	showArrivals: [],
	mileage: { "131": 0.0, "337": 7.0, "338": 8.6, "341": 13.9 },
	returnableStations: {
		"131":{turnoverTime: 5, samePlatform: false, capacity: 2},
		"337":{turnoverTime: 5, samePlatform: false},
		"341":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 600, digits: 3, shortTrip: true,
		minsShift: {"01": -2.0, "02": 0, "03": -4.5, "04": +2.5}
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 600, digits: 3}),
	patterns: {
		"OU02": { //DN...
			mod: function(pivot, isPH){return [];},
			runs: [
				{at: $("05:15"), begin: "337", mod: "alt337"}, //b "Siu Lung Cheung"
				{at: $("05:25"), mod: "alt341"},
				{start: $("05:35"), end: $("05:45"), interval: 10},
				{at: $("05:50"), begin: "337"}, {at: $("05:55")}, //b "Siu Lung Cheung" / Full-trip
				{at: $("06:00"), begin: "337"}, {at: $("06:05")}, //b "Siu Lung Cheung" / Full-trip
				{at: $("06:10"), begin: "337"}, {at: $("06:15")}, //b "Siu Lung Cheung" / Full-trip
				{at: $("06:20"), begin: "337"}, {at: $("06:25")}, //b "Siu Lung Cheung" / Full-trip
				{start: $("06:30"), end: $("00:35"), interval: 5},
				{start: $("00:40"), end: $("01:10"), interval: 10},
				//
				{at: $("00:45"), terminate: "337"},
				{start: $("01:20"), end: $("01:40"), interval: 10, terminate: "337"},
			],
		},
		"OU01": { //UP...
			runs: [
				{start: $("04:50"), end: $("05:10"), interval: 10, begin: "337"},
				{at: $("05:45"), begin: "337"},
				//
				{start: $("05:20"), end: $("05:50"), interval: 10},
				{start: $("05:55"), end: $("00:00"), interval: 5},
				{at: $("00:05")}, {at: $("00:10"), terminate: "337"},  //t "Siu Lung Cheung" / Full-trip
				{at: $("00:15")}, {at: $("00:20"), terminate: "337"},  //t "Siu Lung Cheung" / Full-trip
				{at: $("00:25")}, {at: $("00:30"), terminate: "337"},  //t "Siu Lung Cheung" / Full-trip
				{at: $("00:35")}, {at: $("00:40"), terminate: "337"},  //t "Siu Lung Cheung" / Full-trip
				{start: $("00:45"), end: $("00:55"), interval: 10},
				{at: $("01:05"), mod: "alt341"},
				{at: $("01:15"), terminate: "337", mod: "alt337"}, //t "Siu Lung Cheung"
			],
			mod: function(pivot, isPH){return [];},
		},
		"OU04": { //DN...
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("06:30"), end: $("09:00"), interval: 5, begin: "337"},
				{start: $("16:30"), end: $("21:30"), interval: 5, begin: "337"},
			],
			runs_ph: [
				{start: $("09:30"), end: $("20:30"), interval: 10, begin: "337"},
			],
		},
		"OU03": { //UP...
			runs_wk: [
				{start: $("06:30"), end: $("09:00"), interval: 5, terminate: "337"},
				{start: $("16:30"), end: $("21:30"), interval: 5, terminate: "337"},
			],
			runs_ph: [
				{start: $("09:30"), end: $("20:30"), interval: 10, terminate: "337"},
			],
			mod: function(pivot, isPH){return [];},
		},
		"OU52": { //大元車両基地 ➜ 大元 (順)
			timeShifting: -5,
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("05:37"), end: $("06:07"), interval: 10},
				{start: $("06:17"), end: $("06:52"), interval: 5, mod: "a"},
				{start: $("16:17"), end: $("16:52"), interval: 5, mod: "a"},
			],
			runs_ph: [
				{start: $("05:37"), end: $("06:07"), interval: 10},
				{start: $("09:17"), end: $("09:47"), interval: 10, mod: "a"},
			],
		},
		"OU51": { //大元 ➜ 大元車両基地 (順)
			timeShifting: +5,
			runs_wk: [
				{start: $("08:39"), end: $("09:14"), interval: 5, mod: "a"},
				{start: $("21:09"), end: $("21:44"), interval: 5, mod: "a"},
				{start: $("00:24"), end: $("00:54"), interval: 10},
			],
			runs_ph: [
				{start: $("20:14"), end: $("20:44"), interval: 10, mod: "a"},
				{start: $("00:24"), end: $("00:54"), interval: 10},
			],
			mod: function(pivot, isPH){return [];},
		},
		"OU54": { //大元車両基地 ➜ 大元 (逆)
			timeShifting: -5,
			mod: function(pivot, isPH){return [];},
			runs: [
				{start: $("05:05"), end: $("05:25"), interval: 10},
				{at: $("06:00")},
			],
		},
		"OU53": { //大元 ➜ 大元車両基地 (逆)
			timeShifting: +5,
			runs: [
				{at: $("00:32")},
				{start: $("01:07"), end: $("01:27"), interval: 10},
			],
			mod: function(pivot, isPH){return [];},
		},
	},
};