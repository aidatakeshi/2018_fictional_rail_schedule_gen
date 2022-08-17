/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

var noMod = function(){ return []; };

/**
 * Run No Modifier
 */

runOrderModifier = function(num, isPH){
	return num;
}

/**
 * Objects
 */

var m145 = 20.1 - 13.4;

global.train_arrangements["B"] = {
	showArrivals: ["754", "716"],
	mileage: {
		"145": m145, "716": 20.1, "721": 25.8, "731": 21.1, "735": 25.3,
	},
	returnableStations: {
		"145": {turnoverTime: 0, samePlatform: true},
		"716": {turnoverTime: 5, samePlatform: false},
		"718": {turnoverTime: 5, samePlatform: false},
		"721": {turnoverTime: 2, samePlatform: true},
		"735": {turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 200, initial: "_", digits: 3, 
		minsShift: {"11": -5.5, "13": -5.5, "15": -0.5, "17": -0.5, "12": +4.5, "14": +4.5, "16": -0.5, "18": -0.5},
		runOrderModifier: runOrderModifier,
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 200, digits: 3,
		runOrderModifier: runOrderModifier,
	}),
	patterns: {
		"B14": { //快速 / 通勤快速 安達 ➜ 大理
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (func.isTrainExists("A", "A08", pivot.sub(10,0), isPH, "716") && !isPH) arr.push("p");
				if (!func.isTrainExists("B", "B16", pivot.sub(10,0), isPH, "716")) arr.push("n");
				return arr;
			},
			runs: [
				{at: $("05:10"), begin: "716"},
				{start: $("05:20"), end: $("01:10"), interval: 10},
				{at: $("01:20"), terminate: "731"},
				{at: $("01:30"), terminate: "716"},
			],
		},
		"B13": { //快速 / 通勤快速 大理 ➜ 安達
			runs: [
				{at: $("05:00"), begin: "716"},
				{at: $("05:10"), begin: "731"},
				{start: $("05:20"), end: $("01:10"), interval: 10},
				{at: $("01:20"), terminate: "716"},
			],
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (func.isTrainExists("A", "A07", pivot.add(10,0), isPH, "716") && !isPH) arr.push("p");
				if (!func.isTrainExists("B", "B15", pivot.add(10,0), isPH, "716")) arr.push("n");
				return arr;
			},
		},
		"B54": {
			runs: [
				{start: $("05:10"), end: $("01:10"), interval: 10},
			],
		},
		"B53": {
			runs: [
				{start: $("05:20"), end: $("01:20"), interval: 10},
			],
		},
		"B16": { //普通 藍北中央 ➜ 大理
			mod: function(pivot, isPH, mod){
				if (isPH) return "alt716";
				return [];
			},
			runs: [
				{start: $("05:30"), end: $("06:20"), interval: 10, mod: "default"},
				{start: $("06:30"), end: $("00:10"), interval: 10},
			],
		},
		"B15": { //普通 大理 ➜ 藍北中央
			runs: [
				{start: $("06:20"), end: $("00:00"), interval: 10},
				{start: $("00:10"), end: $("01:00"), interval: 10, mod: "default"},
			],
			mod: function(pivot, isPH, mod){
				if (isPH) return "alt716";
				return [];
			},
		},
		"B56": {
			runs: [
				{start: $("05:30"), end: $("00:10"), interval: 10},
			],
		},
		"B55": {
			runs: [
				{start: $("06:20"), end: $("01:00"), interval: 10},
			],
		},
		"B18": { //通勤快速 康雅 ➜ 大理
			mod: noMod,
			runs_wk: [
				{start: $("06:30"), end: $("09:00"), interval: 10},
				{start: $("17:20"), end: $("21:20"), interval: 10},
			],
		},
		"B17": { //通勤快速 大理 ➜ 康雅
			runs_wk: [
				{start: $("07:10"), end: $("08:40"), interval: 10},
				{start: $("17:00"), end: $("22:00"), interval: 10},
			],
			mod: noMod,
		},
		"B58": {},
		"B57": {},
		"B12": { //普通 藍北中央 ➜ 大理
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (!func.isTrainExists("B", "B18", pivot, isPH, "716")) arr.push("a");
				return arr;
			},
			runs_wk: [
				{start: $("06:40"), end: $("09:10"), interval: 10},
				{start: $("16:10"), end: $("21:10"), interval: 10},
			],
		},
		"B11": { //普通 大理 ➜ 藍北中央
			runs_wk: [
				{start: $("07:20"), end: $("09:50"), interval: 10},
				{start: $("16:50"), end: $("21:50"), interval: 10},
			],
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (!func.isTrainExists("B", "B17", pivot, isPH, "716")) arr.push("a");
				return arr;
			},
		},
		"B52": {},
		"B51": {},
	},
};

global.train_arrangements["B"].patterns.B51.mod = global.train_arrangements["B"].patterns.B11.mod;
global.train_arrangements["B"].patterns.B52.mod = global.train_arrangements["B"].patterns.B12.mod;
global.train_arrangements["B"].patterns.B53.mod = global.train_arrangements["B"].patterns.B13.mod;
global.train_arrangements["B"].patterns.B54.mod = global.train_arrangements["B"].patterns.B14.mod;
global.train_arrangements["B"].patterns.B55.mod = global.train_arrangements["B"].patterns.B15.mod;
global.train_arrangements["B"].patterns.B56.mod = global.train_arrangements["B"].patterns.B16.mod;
global.train_arrangements["B"].patterns.B57.mod = global.train_arrangements["B"].patterns.B17.mod;
global.train_arrangements["B"].patterns.B58.mod = global.train_arrangements["B"].patterns.B18.mod;

global.train_arrangements["B"].patterns.B51.runs_wk = global.train_arrangements["B"].patterns.B11.runs_wk;
global.train_arrangements["B"].patterns.B52.runs_wk = global.train_arrangements["B"].patterns.B12.runs_wk;
global.train_arrangements["B"].patterns.B57.runs_wk = global.train_arrangements["B"].patterns.B17.runs_wk;
global.train_arrangements["B"].patterns.B58.runs_wk = global.train_arrangements["B"].patterns.B18.runs_wk;