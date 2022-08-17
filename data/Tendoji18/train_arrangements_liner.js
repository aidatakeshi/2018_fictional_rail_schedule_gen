/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Liner Trains [AE][AA][AB][AC]
 */

global.train_arrangements["AE"] = {
	showArrivals: [],
	mileage: { "101": 0.0, "162": 87.0 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"162":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "X", baseNum: 0, digits: 2, minsShift: {"01": 0, "02": 7}}),
	runNo: global.standardFn.runNo.bind({initial: "X", baseNum: 0, digits: 2}),
	refNo: global.standardFn.refNo.bind({baseNum: 000, digits: 3, numShift1: 0, numShift2: 0}),
	patterns: {
		"AE02": { //DN...
			boardOnly: ["162", "161", "158", "154", "150"],
			alightOnly: ["104", "101"],
			mod: function(pivot, isPH){
				if (pivot.modulo(40,0).getValue() != 0) return ["alt162"]; //Use platform 1/2 in Koda Airport alternatively
				else return [];
			},
			runs: [
				{start: $("08:00"), end: $("09:40"), interval: 20, mod: "a"},
				{start: $("10:00"), end: $("00:00"), interval: 20},
			],
		},
		"AE01": { //UP...
			runs: [
				{start: $("06:00"), end: $("17:40"), interval: 20},
				{start: $("18:00"), end: $("22:00"), interval: 20, mod: "a"},
			],
			mod: function(pivot, isPH){
				if (pivot.modulo(40,0).getValue() != 0) return ["alt162"]; //Use platform 1/2 in Koda Airport alternatively
				else return [];
			},
			alightOnly: ["162", "161", "158", "154", "150"],
			boardOnly: ["104", "101"],
		},
		"AE52": { //DN NIS...
			mod: function(pivot, isPH){
				return [];
			},
			runs: [
				{start: $("06:00"), end: $("07:40"), interval: 20},
			],
		},
		"AE51": { //UP NIS...
			runs: [
				{start: $("22:20"), end: $("00:00"), interval: 20},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
	},
};

global.train_arrangements["AA"] = {
	showArrivals: ["206"],
	mileage: { "101": 0.0, "158": 79.3 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"158":{turnoverTime: 0, samePlatform: false},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "E", baseNum: 70, digits: 2, minsShift: {"01": 0, "02": 7}}),
	runNo: global.standardFn.runNo.bind({initial: "E", baseNum: 70, digits: 2}),
	refNo: global.standardFn.refNo.bind({baseNum: 800, digits: 3, numShift1: 0, numShift2: 0}),
	patterns: {
		"AA02": { //DN...
			boardOnly: ["158", "154", "150"],
			alightOnly: ["104", "101"],
			mod: function(pivot, isPH){
				return [];
			},
			runs_ph: [
				{start: $("08:30"), end: $("22:30"), interval: 60},
			],
		},
		"AA01": { //UP...
			runs_ph: [
				{start: $("08:30"), end: $("22:30"), interval: 60},
			],
			mod: function(pivot, isPH){
				return [];
			},
			alightOnly: ["158", "154", "150"],
			boardOnly: ["104", "101"],
		},
		"AA52": { //DN...
			mod: function(pivot, isPH){
				return [];
			},
			runs_ph: [
				{at: $("08:30")},{at: $("09:30")},
			],
		},
		"AA51": { //UP...
			runs_ph: [
				{at: $("21:30")},{at: $("22:30")},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
	},
};

var CLE_RunOrderModifier = function(num){
	if (num >= 9) num -= 9;	
	return num;
};

var M_Liner_D_Mod = function(pivot, isPH){
	var trains = ["AY14", "AY16", "AY18", "AY20"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104"];
		if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) return ["alt104"];
	}
	return [];
};

var M_Liner_U_Mod = function(pivot, isPH){
	var trains = ["AY13", "AY15", "AY17", "AY19"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104"];
		if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) return ["alt104"];
	}
	return [];
};

global.train_arrangements["AB"] = {
	showArrivals: ["206"],
	mileage: { "101": 0.0, "150": 70.0, "158": 79.3, "206": 94.8, "220": 132.0 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"158":{turnoverTime: 0, samePlatform: true},
		"220":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({
		initial: "E", baseNum: 70, digits: 2, minsShift: {"01": 0, "02": 7},
		runOrderModifier: CLE_RunOrderModifier
	}),
	runNo: global.standardFn.runNo.bind({
		initial: "E", baseNum: 70, digits: 2,
		runOrderModifier: CLE_RunOrderModifier
	}),
	refNo: global.standardFn.refNo.bind({baseNum: 700, digits: 3, numShift1: 0, numShift2: 0}),
	patterns: {
		"AB02": { //DN...
			mod: M_Liner_D_Mod,
			runs_wk: [
				{start: $("07:30"), end: $("10:10"), interval: 20},
				{start: $("20:30"), end: $("22:30"), interval: 60, begin: "158", mod: "S"},
			],
		},
		"AB01": { //UP...
			runs_wk: [
				{start: $("17:30"), end: $("20:10"), interval: 20},
				{start: $("20:30"), end: $("22:30"), interval: 60},
			],
			mod: M_Liner_U_Mod,
		},
		"AB56": { //DN...
			mod: function(pivot, isPH){
				return [];
			},
			runs_wk: [
				{start: $("20:30"), end: $("22:30"), interval: 60},
			],
		},
		"AB52": { //DN NIS...
			mod: M_Liner_D_Mod,
			runs_wk: [
				{start: $("17:30"), end: $("20:10"), interval: 20},
			],
		},
		"AB51": { //UP NIS...
			runs_wk: [
				{start: $("07:30"), end: $("10:10"), interval: 20},
			],
			mod: M_Liner_U_Mod,
		},
		"AB54": { //麥田原 ➜ 小西車両基地
			mod: function(pivot, isPH){
				return [];
			},
			runs_wk: [
				{at: $("20:50")}, {at: $("21:10")},
			],
		},
		"AB53": { //小西車両基地 ➜ 麥田原
			runs_wk: [
				{start: $("06:50"), end: $("07:10"), interval: 20},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
		"AB64": { //麥田原 ➜ 麥田川車両基地
			mod: function(pivot, isPH){
				return [];
			},
			runs_wk: [
				{at: $("21:50")}, {at: $("22:10")},
				{at: $("22:50")}, {at: $("23:10")},
				{at: $("23:30")}, {at: $("00:30")}, {at: $("01:30")},
			],
		},
		"AB63": { //麥田川車両基地 ➜ 麥田原
			runs_wk: [
				{start: $("04:30"), end: $("06:30"), interval: 20},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
	},
};

global.train_arrangements["AC"] = {
	showArrivals: ["206"],
	mileage: { "101": 0.0, "150": 70.0, "158": 79.3, "206": 94.8, "239": 120.5 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"158":{turnoverTime: 0, samePlatform: true},
		"239":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({
		initial: "F", baseNum: 70, digits: 2, minsShift: {"01": 0, "02": 7},
		runOrderModifier: CLE_RunOrderModifier
	}),
	runNo: global.standardFn.runNo.bind({
		initial: "F", baseNum: 70, digits: 2,
		runOrderModifier: CLE_RunOrderModifier
	}),
	refNo: global.standardFn.refNo.bind({baseNum: 700, digits: 3, numShift1: 0, numShift2: 0}),
	patterns: {
		"AC02": { //DN...
			mod: M_Liner_D_Mod,
			runs_wk: global.train_arrangements.AB.patterns.AB02.runs_wk,
		},
		"AC01": { //UP...
			runs_wk: global.train_arrangements.AB.patterns.AB01.runs_wk,
			mod: M_Liner_U_Mod,
		},
		"AC56": { //DN...
			mod: function(pivot, isPH){
				return [];
			},
			runs_wk: global.train_arrangements.AB.patterns.AB56.runs_wk,
		},
		"AC52": { //DN NIS...
			mod: M_Liner_D_Mod,
			runs_wk: global.train_arrangements.AB.patterns.AB52.runs_wk,
		},
		"AC51": { //UP NIS...
			runs_wk: global.train_arrangements.AB.patterns.AB51.runs_wk,
			mod: M_Liner_U_Mod,
		},
		"AC54": { //DN NIS...
			mod: function(pivot, isPH){
				return [];
			},
			runs_wk: global.train_arrangements.AB.patterns.AB54.runs_wk.concat(global.train_arrangements.AB.patterns.AB64.runs_wk),
		},
		"AC53": { //UP NIS...
			runs_wk: global.train_arrangements.AB.patterns.AB63.runs_wk.concat(global.train_arrangements.AB.patterns.AB53.runs_wk),
			mod: function(pivot, isPH){
				return [];
			},
		},
	},
};