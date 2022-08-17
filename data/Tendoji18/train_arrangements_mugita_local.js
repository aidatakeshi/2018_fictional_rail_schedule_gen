/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Mugita Area Local Trains [MB][MC][MT]
 */

global.train_arrangements["MB"] = {
	showArrivals: ["206", "213"],
	mileage: { "158": 79.3, "206": 94.8, "211": 108.8, "213": 116.1, "215": 124.6, "216": 126.2, "220": 132.0 },
	returnableStations: {
		"158":{turnoverTime: 8, samePlatform: false},
		"206":{turnoverTime: 0, samePlatform: true},
		"211":{turnoverTime: 5, samePlatform: false},
		"213":{turnoverTime: 0, samePlatform: true},
		"215":{turnoverTime: 0, samePlatform: true},
		"216":{turnoverTime: 0, samePlatform: true},
		"220":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "G", baseNum: 0, digits: 2, minsShift: {"01": +3.5, "02": +10}}),
	runNo: global.standardFn.runNo.bind({initial: "G", baseNum: 0, digits: 2}),
	patterns: {
		"MB02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AB", "AB02", pivot.add(30,0), isPH, "206")) arr.push("p"); //Has M Liner --> "p"
				if (!func.isTrainExists("RB", "RB02", pivot.add(60,0), isPH, "206"))
					if (!func.isTrainExists("LA", "LA02", pivot.add(40,0), isPH, "206", "kns"))
						arr.push("m"); //No Rapid Exp --> "m"
				if (!func.isTrainExists("LB", "LB02", pivot.add(30,0), isPH, "206")) arr.push("n"); //No Ltd Exp --> "n"
				//6-car sets
				if (!isPH){
					if (pivot.afterOrAt($("7:20")) && pivot.beforeOrAt($("8:40"))) arr.push("long"); //Morning
					if (pivot.afterOrAt($("16:20")) && pivot.beforeOrAt($("20:40"))) arr.push("long"); //Morning
				}
				//
				return arr;
			},
			runs: [
				{at: $("5:20"), begin: "206"},
				{at: $("5:40"), begin: "213", mod: "t213b"},
				{at: $("6:00"), mod: "alt220"},
				{start: $("6:20"), end: $("1:20"), interval: 20},
				{start: $("1:28"), end: $("2:08"), interval: 20, terminate: "216"},
			],
		},
		"MB01": { //UP...
			runs: [
				{start: $("4:32"), end: $("5:12"), interval: 20, begin: "216"},
				{start: $("5:20"), end: $("0:20"), interval: 20},
				{at: $("0:40"), mod: "alt220"},
				{at: $("1:00"), terminate: "213", mod: "t213b"},
				{at: $("1:20"), terminate: "206"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AB", "AB01", pivot.sub(30,0), isPH, "206")) arr.push("p"); //Has M Liner --> "p"
				if (!func.isTrainExists("RB", "RB01", pivot.sub(60,0), isPH, "206"))
					if (!func.isTrainExists("LA", "LA01", pivot.sub(40,0), isPH, "206", "kns"))
						arr.push("m"); //No Rapid Exp --> "n"
				if (!func.isTrainExists("LB", "LB01", pivot.sub(30,0), isPH, "206")) arr.push("n"); //No Ltd Exp --> "n"
				//6-car sets
				if (!isPH){
					if (pivot.afterOrAt($("7:20")) && pivot.beforeOrAt($("8:40"))) arr.push("long"); //Morning
					if (pivot.afterOrAt($("16:20")) && pivot.beforeOrAt($("20:40"))) arr.push("long"); //Morning
				}
				//
				return arr;
			},
		},
		"MB04": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AB", "AB02", pivot.add(40,0), isPH, "206")) arr.push("p"); //Has M Liner --> "p"
				if (!func.isTrainExists("LB", "LB02", pivot.add(40,0), isPH, "206"))
					if (!func.isTrainExists("LA", "LA02", pivot.add(20,0), isPH, "206", "kns"))
						arr.push("n"); //No Rapid Exp --> "n"
				//6-car sets
				if (!isPH){
					if (pivot.afterOrAt($("7:10")) && pivot.beforeOrAt($("8:30"))) arr.push("long"); //Morning
					if (pivot.afterOrAt($("16:10")) && pivot.beforeOrAt($("20:30"))) arr.push("long"); //Morning
				}
				//
				return arr;
			},
			runs: [
				{at: $("5:30"), mod: "t211"},
				{at: $("5:50")},
				{start: $("6:10"), end: $("6:30"), interval: 20, mod: "l"},
				{start: $("6:50"), end: $("1:10"), interval: 20},
			],
		},
		"MB03": { //UP...
			runs: [
				{start: $("5:30"), end: $("23:50"), interval: 20},
				{start: $("0:10"), end: $("0:30"), interval: 20, mod: "l"},
				{at: $("0:50")},
				{at: $("1:10"), mod: "t211"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AB", "AB01", pivot.sub(40,0), isPH, "206")) arr.push("p"); //Has M Liner --> "p"
				if (!func.isTrainExists("LB", "LB01", pivot.sub(40,0), isPH, "206"))
					if (!func.isTrainExists("LA", "LA01", pivot.sub(20,0), isPH, "206", "kns"))
						arr.push("n"); //No Rapid Exp --> "n"
				//6-car sets
				if (!isPH){
					if (pivot.afterOrAt($("7:30")) && pivot.beforeOrAt($("8:50"))) arr.push("long"); //Morning
					if (pivot.afterOrAt($("16:30")) && pivot.beforeOrAt($("20:50"))) arr.push("long"); //Morning
				}
				//
				return arr;
			},
		},
		"MB52": { //DN...
			mod: function(pivot, isPH){ return []; },
			runs: [
				{at: $("5:20"),},
			],
		},
		"MB51": { //UP...
			runs: [
				{at: $("1:20"),},
			],
			mod: function(pivot, isPH){ return []; },
		},
		"MB54": { //DN...
			mod: function(pivot, isPH){ return []; },
			runs: [
				{start: $("1:28"), end: $("2:08"), interval: 20},
			],
		},
		"MB53": { //UP...
			runs: [
				{start: $("4:32"), end: $("5:12"), interval: 20},
			],
			mod: function(pivot, isPH){ return []; },
		},
		"MB56": { //DN...
			mod: function(pivot, isPH){ return []; },
			runs: [
				{start: $("6:10"), end: $("6:30"), interval: 20},
			],
		},
		"MB55": { //UP...
			runs: [
				{start: $("0:10"), end: $("0:30"), interval: 20},
			],
			mod: function(pivot, isPH){ return []; },
		},
	},
};

global.train_arrangements["MC"] = {
	showArrivals: [],
	mileage: { "206": 94.8, "236": 110.5, "239": 120.5 },
	returnableStations: {
		"206":{turnoverTime: 0, samePlatform: false},
		"236":{turnoverTime: 5, samePlatform: false},
		"239":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "G", baseNum: 50, digits: 2, minsShift: {"01": +12, "02": -2}}),
	runNo: global.standardFn.runNo.bind({initial: "G", baseNum: 50, digits: 2}),
	patterns: {
		"MC02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//2-car sets
				if (!isPH){ //WK
					if (pivot.afterOrAt($("3:00")) && pivot.beforeOrAt($("6:00"))) arr.push("short"); //Morning
					if (pivot.afterOrAt($("23:00")) && pivot.beforeOrAt($("3:00"))) arr.push("short"); //Night
				}else{ //PH
					if (pivot.afterOrAt($("3:00")) && pivot.beforeOrAt($("7:20"))) arr.push("short"); //Morning
					if (pivot.afterOrAt($("23:00")) && pivot.beforeOrAt($("3:00"))) arr.push("short"); //Night
				}
				//
				return arr;
			},
			runs_wk: [
				{start: $("5:20"), end: $("7:00"), interval: 20},
				{start: $("7:20"), end: $("8:20"), interval: 20, mod: "l"},
				{start: $("8:40"), end: $("16:00"), interval: 20},
				{start: $("16:20"), end: $("18:20"), interval: 20, mod: "l"},
				{start: $("18:40"), end: $("1:20"), interval: 20},
			],
			runs_ph: [
				{start: $("5:20"), end: $("1:20"), interval: 20},
			],
		},
		"MC01": { //UP...
			runs_wk: [
				{start: $("5:20"), end: $("6:20"), interval: 20},
				{start: $("6:40"), end: $("7:40"), interval: 20, mod: "l"},
				{start: $("8:00"), end: $("15:20"), interval: 20},
				{start: $("15:40"), end: $("17:40"), interval: 20, mod: "l"},
				{start: $("18:00"), end: $("1:20"), interval: 20},
			],
			runs_ph: [
				{start: $("5:20"), end: $("1:20"), interval: 20},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//2-car sets
				if (!isPH){ //WK
					if (pivot.afterOrAt($("3:00")) && pivot.beforeOrAt($("6:20"))) arr.push("short"); //Morning
					if (pivot.afterOrAt($("23:20")) && pivot.beforeOrAt($("3:00"))) arr.push("short"); //Night
				}else{ //PH
					if (pivot.afterOrAt($("3:00")) && pivot.beforeOrAt($("7:40"))) arr.push("short"); //Morning
					if (pivot.afterOrAt($("23:20")) && pivot.beforeOrAt($("3:00"))) arr.push("short"); //Night
				}
				//
				return arr;
			},
		},
		"MC54": { //DN...
			mod: function(pivot, isPH){ return [];},
			runs: [
				{at: $("5:00")},
			],
		},
		"MC53": { //UP...
			runs: [
				{at: $("1:40")},
			],
			mod: function(pivot, isPH){return []; },
		},
		"MC52": { //DN...
			timeShifting: -5, //To "fake" the run number assigner
			mod: function(pivot, isPH){ return [];},
			runs: [
				{start: $("5:20"), end: $("5:40"), interval: 20},
			],
		},
		"MC51": { //UP...
			timeShifting: +5, //To "fake" the run number assigner
			runs: [
				{start: $("1:00"), end: $("1:20"), interval: 20},
			],
			mod: function(pivot, isPH){return []; },
		},
	},
};

global.train_arrangements["MT"] = {
	showArrivals: [],
	mileage: { "211": 108.8, "252": 113.3, "256": 121.3, "257": 124.1 },
	returnableStations: {
		"211":{turnoverTime: 0, samePlatform: true},
		"257":{turnoverTime: 0, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "G", baseNum: 80, digits: 2, minsShift: {"01": -8, "02": 0}}),
	runNo: global.standardFn.runNo.bind({initial: "G", baseNum: 80, digits: 2}),
	patterns: {
		"MT02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//4-car sets
				if (!isPH){
					if (pivot.afterOrAt($("6:20")) && pivot.beforeOrAt($("8:20"))) arr.push("long"); //Morning
					if (pivot.afterOrAt($("16:40")) && pivot.beforeOrAt($("21:40"))) arr.push("long"); //Night
				}
				//
				return arr;
			},
			runs: [
				{start: $("5:20"), end: $("1:00"), interval: 20},
				{at: $("1:20"), },
			],
		},
		"MT01": { //UP...
			runs: [
				{at: $("5:00"), },
				{start: $("5:20"), end: $("1:00"), interval: 20},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//4-car sets
				if (!isPH){
					if (pivot.afterOrAt($("5:20")) && pivot.beforeOrAt($("7:20"))) arr.push("long"); //Morning
					if (pivot.afterOrAt($("15:40")) && pivot.beforeOrAt($("20:40"))) arr.push("long"); //Night
				}
				//
				return arr;
			},
		},
	},
};