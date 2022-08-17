/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }
var N = "3:30";

var noMod = function(){ return []; };

/**
 * Run No Modifier
 */

runOrderModifier = function(num, isPH){
	return num;
}

$showArrivals = ["810", "816", "257", "840"];
$mileage = {"158": 0.0, "802": 1.8, "803": 6.4, "807": 12.6, "810": 18.0, "816": 30.5, "821": 41.2, "822": 44.4, "237": 46.0, "827": 54.8, "257": 68.2, "840": 88.8, "845": 103.0, "217": 109.0, "854": 96.8};
$returnableStations = {
	"158": {turnoverTime: 1, samePlatform: true},
	"802": {turnoverTime: 0, samePlatform: false},
	"803": {turnoverTime: 1, samePlatform: true},
	"807": {turnoverTime: 1, samePlatform: true},
	"810": {turnoverTime: 1, samePlatform: true},
	"816": {turnoverTime: 1, samePlatform: true},
	"237": {turnoverTime: 1, samePlatform: true},
	"257": {turnoverTime: 1, samePlatform: true},
	"840": {turnoverTime: 1, samePlatform: true},
	"217": {turnoverTime: 1, samePlatform: true},
	"854": {turnoverTime: 1, samePlatform: true},
};

/**
 * West Rail
 */

global.train_arrangements["KW"] = {
	showArrivals: $showArrivals,
	mileage: $mileage,
	returnableStations: $returnableStations,
	tripNo: global.standardFn.tripNo.bind({baseNum: 0, initial: "K", digits: 2, 
		minsShift: {"03": +10, },
		runOrderModifier: runOrderModifier,
		hourModifier: function(hours, pivotNum, runOrder){
			if (runOrder == 8){
				if (pivotNum % 3600 >= 2400) hours += 60;
				else if (pivotNum % 3600 >= 1200) hours += 30;
			}
			if (runOrder == 13 || runOrder == 14){
				if (pivotNum % 3600 >= 3000) hours += 70;
				else if (pivotNum % 3600 >= 2400) hours += 60;
				else if (pivotNum % 3600 >= 1800) hours += 50;
				else if (pivotNum % 3600 >= 1200) hours += 40;
				else if (pivotNum % 3600 >= 600) hours += 30;
			}
			return hours;
		},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 0, initial: "K", digits: 2, 
		runOrderModifier: runOrderModifier,
	}),
	patterns: {
		"KW01": {
			mod: function(pivot, isPH, mod){
			},
			runs: [
				{at: $("04:10"), begin: "816"},
				{at: $("04:30"), begin: "810"},
				{at: $("04:50"), begin: "803"},
				{start: $("05:10"), end: $("00:10"), interval: 20},
				{at: $("00:30"), mod: "alt_237"},
				{at: $("00:50"), terminate: "816"},
				{at: $("01:10"), terminate: "810"},
				{at: $("01:30"), terminate: "803"},
			],
		},
		"KW02": {
			mod: function(pivot, isPH, mod){
			},
			runs: [
				{at: $("05:00"), begin: "803"},
				{at: $("05:20"), begin: "810"},
				{at: $("05:40"), begin: "816"},
				{at: $("06:00"), mod: "alt_237"},
				{start: $("06:20"), end: $("01:20"), interval: 20},
				{at: $("01:40"), terminate: "803"},
				{at: $("02:00"), terminate: "810"},
				{at: $("02:20"), terminate: "816"},
			],
		},
		"KW03": {
			mod: function(pivot, isPH, mod){
			},
			runs_wk: [
				{start: $("05:00"), end: $("06:00"), interval: 20, terminate: "802", mod: "shuttle"},
				{start: $("06:20"), end: $("06:20"), interval: 20},
				{start: $("06:40"), end: $("09:00"), interval: 20, mod: "long"},
				{start: $("09:20"), end: $("16:00"), interval: 20, terminate: "802", mod: "shuttle"},
				{start: $("16:20"), end: $("16:20"), interval: 20},
				{start: $("16:40"), end: $("21:00"), interval: 20, mod: "long"},
				{start: $("21:20"), end: $("01:20"), interval: 20, terminate: "802", mod: "shuttle"},
			],
			runs_ph: [
				{start: $("05:00"), end: $("01:20"), interval: 20, terminate: "802", mod: "shuttle"},
			],
		},
		"KW04": {
			mod: function(pivot, isPH, mod){
			},
			runs_wk: [
				{start: $("05:10"), end: $("06:10"), interval: 20, begin: "802", mod: "shuttle"},
				{start: $("06:30"), end: $("08:50"), interval: 20, mod: "long"},
				{start: $("09:10"), end: $("09:10"), interval: 20},
				{start: $("09:30"), end: $("16:10"), interval: 20, begin: "802", mod: "shuttle"},
				{start: $("16:30"), end: $("20:50"), interval: 20, mod: "long"},
				{start: $("21:10"), end: $("21:10"), interval: 20},
				{start: $("21:30"), end: $("01:30"), interval: 20, begin: "802", mod: "shuttle"},
			],
			runs_ph: [
				{start: $("05:10"), end: $("01:30"), interval: 20, begin: "802", mod: "shuttle"},
			],
		},
		"KW05": {
			mod: function(pivot, isPH, mod){
			},
			runs_wk: [
				{start: $("06:25"), end: $("09:05"), interval: 10},
				{start: $("16:25"), end: $("20:55"), interval: 10},
			],
		},
		"KW06": {
			mod: function(pivot, isPH, mod){
			},
			runs_wk: [
				{start: $("06:25"), end: $("09:05"), interval: 10},
				{start: $("16:25"), end: $("20:55"), interval: 10},
			],
		},
	},
};

/**
 * East Rail
 */

global.train_arrangements["KE"] = {
	showArrivals: $showArrivals,
	mileage: $mileage,
	returnableStations: $returnableStations,
	tripNo: global.standardFn.tripNo.bind({baseNum: 50, initial: "K", digits: 2, 
		minsShift: {"03": +10, },
		runOrderModifier: runOrderModifier,
		hourModifier: function(hours, pivotNum, runOrder){
			return hours;
		},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 50, initial: "K", digits: 2, 
		runOrderModifier: runOrderModifier,
	}),
	patterns: {
		"KE01": {
			mod: function(pivot, isPH, mod){
			},
			runs: [
				{at: $("05:00"), begin: "845"},
				{at: $("05:30"), begin: "840"},
				{at: $("06:00"), begin: "257"},
				{start: $("06:30"), end: $("01:30"), interval: 30},
				{at: $("02:00"), terminate: "840"},
				{at: $("02:30"), terminate: "257"},
				{at: $("03:00"), terminate: "827", mod: "alt_827"},
			],
		},
		"KE02": {
			mod: function(pivot, isPH, mod){
			},
			runs: [
				{at: $("03:30"), begin: "827"},
				{at: $("04:00"), begin: "257"},
				{at: $("04:30"), begin: "840"},
				{start: $("05:00"), end: $("00:00"), interval: 30},
				{at: $("00:30"), terminate: "257"},
				{at: $("01:00"), terminate: "840"},
				{at: $("01:30"), terminate: "845"},
			],
		},
		"KE05": {
			mod: function(pivot, isPH, mod){
			},
			runs: [
				{start: $("05:15"), end: $("01:15"), interval: 30},
				{at: $("01:45"), terminate: "845"},
			],
		},
		"KE06": {
			mod: function(pivot, isPH, mod){
			},
			runs: [
				{at: $("04:45"), begin: "845"},
				{start: $("05:15"), end: $("01:15"), interval: 30},
			],
		},
		"KE03": {
			mod: function(pivot, isPH, mod){
			},
			runs_wk: [
				{start: $("08:15"), end: $("10:15"), interval: 30},
				{start: $("17:45"), end: $("22:15"), interval: 30},
			],
		},
		"KE04": {
			mod: function(pivot, isPH, mod){
			},
			runs_wk: [
				{start: $("05:15"), end: $("07:15"), interval: 30},
				{start: $("14:45"), end: $("19:15"), interval: 30},
			],
		},
	},
};