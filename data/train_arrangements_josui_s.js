/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Josui Line South [JS]
 */

global.train_arrangements["JS"] = {
	showArrivals: ["364", "367", "371"],
	mileage: { "139": 0.0, "364": 5.4, "367": 8.8,	"371": 13.6, "373": 16.0, "377": 23.1 },
	returnableStations: {
		"139":{turnoverTime: 0, samePlatform: true},
		"367":{turnoverTime: 5, samePlatform: false},
		"371":{turnoverTime: 5, samePlatform: false},
		"373":{turnoverTime: 0, samePlatform: false},
		"377":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 700, digits: 3, shortTrip: true,
		minsShift: {"01": +5, "03": +5, "05": 0, "07": +4, "09": 0, "02": +3, "04": +4, "06": +14, "08": +4, "10": +8}
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 700, digits: 3}),
	patterns: {

		/**
		 * 清河南 - 加福町 (各駅停車)
		 */

		"JS10": { //DN
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS02", pivot.sub(10,0), isPH, "139")) return []; //with Section Express
				else if (func.isTrainExists("EE", "EE06", pivot.add(30,0), isPH, "371")) return ["a"]; //with Rapid Express
				else return ["b"];
			},
			runs: [
				{at: $("05:20"), begin: "364", mod: ["a", "alt364"]},
				{at: $("05:40"), begin: "371"},
				{start: $("06:00"), end: $("01:20"), interval: 20},
				{at: $("01:35"), terminate: "373"},
				{at: $("01:55"), terminate: "373"},
			],
		},
		"JS90": { //DN.
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS02", pivot.sub(10,0), isPH, "139")) return []; //with Section Express
				else if (func.isTrainExists("EE", "EE06", pivot.add(30,0), isPH, "371")) return ["a"]; //with Rapid Express
				else return ["b"];
			},
			runs: [
				{start: $("05:20"), end: $("01:20"), interval: 20},
			],
		},
		"JS89": { //UP.
			runs: [
				{start: $("05:20"), end: $("01:20"), interval: 20},
			],
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS01", pivot.add(10,0), isPH, "139")) return []; //with Section Express
				else if (func.isTrainExists("EE", "EE05", pivot.sub(30,0), isPH, "371")) return ["a"]; //with Rapid Express
				else return ["b"];
			},
		},
		"JS09": { //UP
			runs: [
				{at: $("04:45"), begin: "373", mod: "x"},
				{at: $("05:05"), begin: "373", mod: "x"},
				{start: $("05:20"), end: $("00:40"), interval: 20},
				{at: $("01:00"), terminate: "371"},
				{at: $("01:20"), terminate: "364", mod: ["a", "alt364"]},
			],
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS01", pivot.add(10,0), isPH, "139")) return []; //with Section Express
				else if (func.isTrainExists("EE", "EE05", pivot.sub(30,0), isPH, "371")) return ["a"]; //with Rapid Express
				else return ["b"];
			},
		},

		/**
		 * 清河南 - 加福町 (各駅停車)
		 */

		"JS06": { //DN
			mod: function(pivot, isPH){
				var SEE = (func.isTrainExists("JS", "JS02", pivot.sub(20,0), isPH, "377")); //Section Express
				var RAP =  (func.isTrainExists("EE", "EE06", pivot.add(40,0), isPH, "139")); //Rapid Express / Express
				if (SEE) return [];
				else if (RAP) return ["a"];
				else return ["b"];
			},
			runs: [
				{at: $("05:30"), begin: "367", mod: "alt367"},
				{at: $("05:50"), begin: "371", mod: "alt371"},
				{start: $("06:10"), end: $("01:10"), interval: 20},
				{start: $("01:25"), end: $("02:05"), interval: 20, terminate: "373"},
			],
		},
		"JS86": { //DN.
			mod: function(pivot, isPH){
				var SEE = (func.isTrainExists("JS", "JS02", pivot.sub(20,0), isPH, "377")); //Section Express
				var RAP =  (func.isTrainExists("EE", "EE06", pivot.add(40,0), isPH, "139")); //Rapid Express / Express
				if (SEE) return [];
				else if (RAP) return ["a"];
				else return ["b"];
			},
			runs: [
				{start: $("05:30"), end: $("01:10"), interval: 20},
			],
		},
		"JS85": { //UP.
			runs: [
				{start: $("05:30"), end: $("01:10"), interval: 20},
			],
			mod: function(pivot, isPH){
				var SEE = (func.isTrainExists("JS", "JS01", pivot.add(20,0), isPH, "377")); //Section Express
				var RAP =  (func.isTrainExists("EE", "EE05", pivot.sub(40,0), isPH, "139")); //Rapid Express / Express
				if (SEE) return [];
				else if (RAP) return ["a"];
				else return ["b"];
			},
		},
		"JS05": { //UP
			runs: [
				{start: $("04:35"), end: $("05:15"), interval: 20, begin: "373"},
				{start: $("05:30"), end: $("00:30"), interval: 20},
				{at: $("00:50"), terminate: "371", mod: "alt371"},
				{at: $("01:10"), terminate: "367", mod: "alt367"},
			],
			mod: function(pivot, isPH){
				var SEE = (func.isTrainExists("JS", "JS01", pivot.add(20,0), isPH, "377")); //Section Express
				var RAP =  (func.isTrainExists("EE", "EE05", pivot.sub(40,0), isPH, "139")); //Rapid Express / Express
				if (SEE) return [];
				else if (RAP) return ["a"];
				else return ["b"];
			},
		},

		/**
		 * 清河南 - 花都 (各駅停車)
		 */

		"JS08": { //DN
			mod: function(pivot, isPH){return [];},
			runs: [
				{start: $("06:00"), end: $("00:20"), interval: 20},
			],
		},
		"JS88": { //DN.
			mod: function(pivot, isPH){return [];},
			runs: [
				{start: $("06:00"), end: $("00:20"), interval: 20},
			],
		},
		"JS87": { //UP.
			runs: [
				{start: $("06:20"), end: $("00:40"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS07": { //UP
			runs: [
				{start: $("06:20"), end: $("00:40"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},

		/**
		 * 清河南 - 加福町 (各駅停車)
		 */

		"JS04": { //DN
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS02", pivot, isPH, "139")) return []; //with Section Express with the same pivot
				else return ["a"];
			},
			runs: [
				{start: $("06:10"), end: $("00:30"), interval: 20},
			],
		},
		"JS84": { //DN.
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS02", pivot, isPH, "139")) return []; //with Section Express with the same pivot
				else return ["a"];
			},
			runs: [
				{start: $("06:10"), end: $("00:30"), interval: 20},
			],
		},
		"JS83": { //UP.
			runs: [
				{start: $("06:10"), end: $("00:30"), interval: 20},
			],
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS01", pivot, isPH, "139")) return []; //with Section Express with the same pivot
				else return ["a"];
			},
		},
		"JS03": { //UP
			runs: [
				{start: $("06:10"), end: $("00:30"), interval: 20},
			],
			mod: function(pivot, isPH){
				if (func.isTrainExists("JS", "JS01", pivot, isPH, "139")) return []; //with Section Express with the same pivot
				else return ["a"];
			},
		},

		/**
		 * 清河南 - 麥急上水 (区間急行)
		 */

		"JS02": { //DN
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("06:50"), end: $("09:30"), interval: 20},
				{start: $("16:10"), end: $("17:10"), interval: 20, begin: "371", mod: "s"},
				{start: $("17:30"), end: $("21:10"), interval: 20},
				{start: $("21:30"), end: $("22:30"), interval: 20, terminate: "373", mod: "local"},
			],
		},
		"JS82": { //DN.
			mod: function(pivot, isPH){return [];},
			runs_wk: [
				{start: $("06:50"), end: $("09:30"), interval: 20},
				{start: $("16:10"), end: $("21:10"), interval: 20},
			],
		},
		"JS81": { //UP.
			runs_wk: [
				{start: $("07:10"), end: $("09:50"), interval: 20},
				{start: $("16:30"), end: $("21:30"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS01": { //UP
			runs_wk: [
				{start: $("05:50"), end: $("06:50"), interval: 20, begin: "373", mod: "local"},
				{start: $("07:10"), end: $("08:30"), interval: 20},
				{start: $("08:50"), end: $("09:50"), interval: 20, terminate: "371", mod: "s"},
				{start: $("16:30"), end: $("21:30"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},

		/**
		 * Non-Revenue
		 */

		"JS51": { //花都 ➜ 加福町車両基地
			timeShifting: +5,
			runs: [
				{start: $("00:10"), end: $("00:50"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS52": { //加福町車両基地 ➜ 花都
			timeShifting: -5,
			runs: [
				{start: $("05:41"), end: $("06:21"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS53": { //加福町 ➜ 加福町車両基地
			timeShifting: +5,
			runs_wk: [
				{start: $("09:00"), end: $("10:00"), interval: 20},
				{start: $("00:11"), end: $("00:51"), interval: 20},
				{at: $("01:17")}, {at: $("01:22")},
			],
			runs_ph: [
				{start: $("00:11"), end: $("00:51"), interval: 20},
				{at: $("01:17")}, {at: $("01:22")},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS54": { //加福町車両基地 ➜ 加福町
			timeShifting: -5,
			runs_wk: [
				{at: $("05:09")}, {at: $("05:14")},
				{start: $("05:40"), end: $("06:20"), interval: 20},
				{start: $("15:51"), end: $("16:51"), interval: 20},
			],
			runs_ph: [
				{at: $("05:09")}, {at: $("05:14")},
				{start: $("05:40"), end: $("06:20"), interval: 20},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS55": { //加福町車両基地 ➜ 馬色町
			runs_wk: [
				{start: $("05:05"), end: $("05:45"), interval: 10},
				{start: $("06:00"), end: $("07:00"), interval: 20},
			],
			runs_ph: [
				{start: $("05:05"), end: $("05:45"), interval: 10},
			],
			mod: function(pivot, isPH){return [];},
		},
		"JS56": { //馬色町 ➜ 加福町車両基地
			runs_wk: [
				{start: $("21:12"), end: $("22:12"), interval: 20},
				{start: $("00:46"), end: $("01:26"), interval: 10},
			],
			runs_ph: [
				{start: $("00:46"), end: $("01:26"), interval: 10},
			],
			mod: function(pivot, isPH){return [];},
		},

		/**
		 * End
		 */
	},
};