/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Rapid Express (160kph) [RB][RC]
 */

var alt104_D = function(pivot, isPH){
	var trains = ["AY14", "AY16", "AY18", "AY20"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104", "y"];
		if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) return ["alt104", "y"];
	}
	return [];
};

var alt104_U = function(pivot, isPH){
	var trains = ["AY13", "AY15", "AY17", "AY19"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104", "y"];
		if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) return ["alt104", "y"];
	}
	return [];
};

global.train_arrangements["RB"] = {
	showArrivals: ["158", "206"],
	mileage: { "101": 0.0, "121": 22.5, "139": 45.0, "150": 70.0, "154": 74.0, "158": 79.3, "206": 94.8, "215": 124.6, "220": 132.0 },
	returnableStations: {
		"101":{turnoverTime: 3, samePlatform: true},
		"158":{turnoverTime: 0, samePlatform: true},
		"206":{turnoverTime: 0, samePlatform: true},
		"215":{turnoverTime: 0, samePlatform: true},
		"220":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "E", baseNum: 30, digits: 2, minsShift: {"01": -8.5, "02": +15.5},}),
	runNo: global.standardFn.runNo.bind({initial: "E", baseNum: 30, digits: 2}),
	refNo: global.standardFn.refNo.bind({initial: "", baseNum: 550, digits: 3, numShift1: -7, numShift2: -2}),
	patterns: {
		"RB02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//If not coupled with RC, use alternate track in Konishi Station
				if (!func.isTrainExists("RC", "RC02", pivot, isPH, "101")) if (func.isTrainExists("RC", "RC02", pivot, isPH, "206")) arr.push("alt206");
				//with M/S Liner departing in Kawada
				if (func.isTrainExists("AA", "AA02", pivot.sub(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AA", "AA52", pivot.sub(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB02", pivot.sub(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB52", pivot.sub(10,0), isPH, "101")) arr.push("y");
				//Alt 104
				arr = arr.concat(alt104_D(pivot, isPH));
				//
				return arr;
			},
			runs: [
				{start: $("06:20"), end: $("06:40"), interval: 20, begin: "158", mod: "alt158"},
				{start: $("07:00"), end: $("00:40"), interval: 20},
				{start: $("01:00"), end: $("02:20"), interval: 20, terminate: "158"},
			],
		},
		"RB01": { //UP...
			runs: [
				{start: $("04:20"), end: $("05:40"), interval: 20, begin: "158"},
				{start: $("06:00"), end: $("23:40"), interval: 20},
				{start: $("00:00"), end: $("00:20"), interval: 20, terminate: "158", mod: "alt158"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//If not coupled with RC, use alternate track in Konishi Station
				if (!func.isTrainExists("RC", "RC01", pivot, isPH, "101")) if (func.isTrainExists("RC", "RC01", pivot, isPH, "206")) arr.push("alt206");
				//with M/S Liner departing in Kawada
				if (func.isTrainExists("AA", "AA01", pivot.add(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AA", "AA51", pivot.add(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB01", pivot.add(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB51", pivot.add(10,0), isPH, "101")) arr.push("y");
				//Alt 104
				arr = arr.concat(alt104_U(pivot, isPH));
				//
				return arr;
			},
		},
		"RB54": { //麥田原 ➜ 麥田川車両基地
			mod: function(pivot, isPH){ return [""] },
			runs: [
				{start: $("02:40"), end: $("03:20"), interval: 20},
			],
		},
		"RB53": { //麥田川車両基地 ➜ 麥田原
			runs: [
				{start: $("03:20"), end: $("04:00"), interval: 20},
			],
			mod: function(pivot, isPH){ return [""] },
		},
		"RB56": { //麥急赤田 ➜ 赤田車両基地
			mod: function(pivot, isPH){ return [""] },
			runs: [
				{start: $("01:00"), end: $("02:20"), interval: 20},
			],
		},
		"RB55": { //赤田車両基地 ➜ 麥急赤田
			runs: [
				{start: $("04:20"), end: $("05:40"), interval: 20},
			],
			mod: function(pivot, isPH){ return [""] },
		},
		"RB58": { //赤田車両基地 ➜ 麥急赤田
			mod: function(pivot, isPH){ return [""] },
			runs: [
				{start: $("06:20"), end: $("06:40"), interval: 20},
			],
		},
		"RB57": { //麥急赤田 ➜ 赤田車両基地
			runs: [
				{start: $("00:00"), end: $("00:20"), interval: 20},
			],
			mod: function(pivot, isPH){ return [""] },
		},
	},
};

global.train_arrangements["RC"] = {
	showArrivals: ["158", "206"],
	mileage: { "101": 0.0, "121": 22.5, "139": 45.0, "150": 70.0, "154": 74.0, "158": 79.3, "206": 94.8, "239": 120.5 },
	returnableStations: {
		"101":{turnoverTime: 3, samePlatform: true},
		"158":{turnoverTime: 0, samePlatform: true},
		"206":{turnoverTime: 0, samePlatform: true},
		"239":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "F", baseNum: 30, digits: 2, minsShift: {"01": -8.5, "02": +15.5},
		runOrderModifier: function(num){
			return (num + 2) % 11;
		}
	}),
	runNo: global.standardFn.runNo.bind({initial: "F", baseNum: 30, digits: 2,
		runOrderModifier: function(num){
			return (num + 2) % 11;
		}
	}),
	refNo: global.standardFn.refNo.bind({initial: "", baseNum: 550, digits: 3, numShift1: -8, numShift2: 0}),
	patterns: {
		"RC02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//with M Liner departing in Kawada
				if (func.isTrainExists("AA", "AA02", pivot.sub(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AA", "AA52", pivot.sub(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB02", pivot.sub(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB52", pivot.sub(10,0), isPH, "101")) arr.push("y");
				//Alt 104
				arr = arr.concat(alt104_D(pivot, isPH));
				//
				return arr;
			},
			runs: [
				{start: $("07:00"), end: $("00:00"), interval: 20},
				{start: $("00:20"), end: $("02:40"), interval: 20, terminate: "206", mod: "local"},
			],
		},
		"RC01": { //UP...
			runs: [
				{start: $("04:00"), end: $("06:20"), interval: 20, begin: "206", mod: "local"},
				{start: $("06:40"), end: $("23:40"), interval: 20},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//with M Liner departing in Kawada
				if (func.isTrainExists("AA", "AA01", pivot.add(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AA", "AA51", pivot.add(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB01", pivot.add(10,0), isPH, "101")) arr.push("y");
				if (func.isTrainExists("AB", "AB51", pivot.add(10,0), isPH, "101")) arr.push("y");
				//Alt 104
				arr = arr.concat(alt104_U(pivot, isPH));
				//
				return arr;
			},
		},
		"RC52": { //浅水 ➜ 小西車両基地
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("03:00"), end: $("03:20"), interval: 20},
			],
		},
		"RC51": { //小西車両基地 ➜ 浅水
			runs: [
				{start: $("03:20"), end: $("03:40"), interval: 20},
			],
			mod: function(pivot, isPH){ return []},
		},
		"RC54": { //小西市 ➜ 小西車両基地
			mod: function(pivot, isPH){ return []},
			runs: [
				{start: $("00:20"), end: $("02:40"), interval: 20},
			],
		},
		"RC53": { //小西車両基地 ➜ 小西市
			runs: [
				{start: $("04:00"), end: $("06:20"), interval: 20},
			],
			mod: function(pivot, isPH){ return []},
		},
	},
};