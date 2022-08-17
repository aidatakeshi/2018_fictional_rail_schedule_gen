/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Limited Express Trains [LA][LB][LC]
 */

global.train_arrangements["LA"] = {
	showArrivals: [],
	mileage: { "101": 0.0, "113": 12.0, "154": 74.0, "158": 79.3, "162": 87.0, "206": 94.8 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"158":{turnoverTime: 0, samePlatform: true},
		"162":{turnoverTime: 5, samePlatform: true},
		"206":{turnoverTime: 0, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "E", baseNum: 0, digits: 2, minsShift: {"01": -2, "02": +9}}),
	runNo: global.standardFn.runNo.bind({initial: "E", baseNum: 0, digits: 2}),
	refNo: global.standardFn.refNo.bind({baseNum: 100, digits: 3, numShift1: 0, numShift2: 3}),
	patterns: {
		"LA02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//with Aoyama trains departing in Kawada
				var trains = ["AY14", "AY16", "AY18", "AY20"];
				for (var i in trains){
					if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) var alt104 = true;
					if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) var alt104 = true;
				}
				if (alt104) arr.push("alt104", "aol");
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.modulo(40,0).getValue() != 0) arr.push("alt162");
				//
				return arr;
			},
			runs: [
				{start: $("06:00"), end: $("06:20"), interval: 20, begin: "206", mod: "kns"},
				{start: $("06:40"), end: $("01:40"), interval: 20},
			],
		},
		"LA01": { //UP...
			runs: [
				{start: $("05:00"), end: $("00:00"), interval: 20},
				{start: $("00:20"), end: $("00:40"), interval: 20, terminate: "206", mod: "kns"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//with Aoyama trains departing in Kawada
				var trains = ["AY13", "AY15", "AY17", "AY19"];
				for (var i in trains){
					if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) var alt104 = true;
					if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) var alt104 = true;
				}
				if (alt104) arr.push("alt104", "aol");
				//Use platform 3/4 in Koda Airport alternatively
				if (pivot.modulo(40,0).getValue() != 0)  arr.push("alt162");
				//
				return arr;
			},
		},
		"LA52": { //DN NIS
			mod: function(pivot, isPH){
				return [];
			},
			runs: [
				{start: $("05:22"), end: $("05:42"), interval: 20},
			],
		},
		"LA51": { //UP NIS
			runs: [
				{start: $("00:58"), end: $("01:18"), interval: 20},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
		"LA56": { //DN NIS
			mod: function(pivot, isPH){ return [];},
			runs: [
				{start: $("06:00"), end: $("06:20"), interval: 20},
			],
		},
		"LA55": { //UP NIS
			runs: [
				{start: $("00:20"), end: $("00:40"), interval: 20},
			],
			mod: function(pivot, isPH){ return [];},
		},
	},
};

global.train_arrangements["LB"] = {
	showArrivals: ["206"],
	mileage: { "101": 0.0, "154": 74.0, "158": 79.3, "206": 94.8, "220": 132.0 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"206":{turnoverTime: 0, samePlatform: true},
		"220":{turnoverTime: 5, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "E", baseNum: 12, digits: 2, minsShift: {"01": -2, "02": +9},
		runOrderModifier: function(num){
			return (num + 7) % 9;
		}
	}),
	runNo: global.standardFn.runNo.bind({initial: "E", baseNum: 12, digits: 2,
		runOrderModifier: function(num){
			return (num + 7) % 9;
		}
	}),
	refNo: global.standardFn.refNo.bind({baseNum: 300, digits: 3, numShift1: 0, numShift2: 0}),
	patterns: {
		"LB02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//with M Liner with the same pivot
				if (func.isTrainExists("AB", "AB02", pivot, isPH, "206")) arr.push("p");
				//with Aoyama trains departing in Kawada
				var trains = ["AY14", "AY16", "AY18", "AY20"];
				for (var i in trains){
					if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) var alt104 = true;
					if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) var alt104 = true;
				}
				if (alt104) arr.push("alt104", "aol");
				//Use 12-car train during rush hours
				if (!isPH && pivot.afterOrAt($("07:30")) && pivot.beforeOrAt($("09:30"))) arr.push("long");
				if (!isPH && pivot.afterOrAt($("17:50")) && pivot.beforeOrAt($("19:50"))) arr.push("long");
				//
				return arr;
			},
			runs: [
				{at: $("05:50"), begin: "154", mod: "a"},
				{at: $("06:10"), begin: "206"},
				{start: $("06:30"), end: $("00:50"), interval: 20},
			],
		},
		"LB01": { //UP...
			runs: [
				{start: $("05:50"), end: $("00:10"), interval: 20},
				{at: $("00:30"), terminate: "206"},
				{at: $("00:50"), terminate: "154", mod: "a"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//with M Liner with the same pivot
				if (func.isTrainExists("AB", "AB01", pivot, isPH, "206")) arr.push("p");
				//with Aoyama trains departing in Kawada
				var trains = ["AY13", "AY15", "AY17", "AY19"];
				for (var i in trains){
					if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) var alt104 = true;
					if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) var alt104 = true;
				}
				if (alt104) arr.push("alt104", "aol");
				//Use 12-car train during rush hours
				if (!isPH && pivot.afterOrAt($("07:30")) && pivot.beforeOrAt($("09:30"))) arr.push("long");
				if (!isPH && pivot.afterOrAt($("17:50")) && pivot.beforeOrAt($("19:50"))) arr.push("long");
				//
				return arr;
			},
		},
		"LB52": { //DN NIS
			mod: function(pivot, isPH){
				return [];
			},
			runs: [
				{at: $("06:10")},
			],
		},
		"LB51": { //UP NIS
			runs: [
				{at: $("00:30")},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
		"LB54": { //DN NIS
			mod: function(pivot, isPH){
				return [];
			},
			runs: [
				{start: $("01:10"), end: $("02:50"), interval: 20},
			],
		},
		"LB53": { //UP NIS
			runs: [
				{start: $("03:50"), end: $("05:30"), interval: 20},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
	},
};

global.train_arrangements["LC"] = {
	showArrivals: ["206"],
	mileage: { "101": 0.0, "158": 79.3, "206": 94.8, "239": 120.5 },
	returnableStations: {
		"101":{turnoverTime: 5, samePlatform: true},
		"239":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({initial: "F", baseNum: 12, digits: 2, minsShift: {"01": -2, "02": +9},
		runOrderModifier: function(num){
			return (num + 0) % 9;
		}
	}),
	runNo: global.standardFn.runNo.bind({initial: "F", baseNum: 12, digits: 2,
		runOrderModifier: function(num){
			return (num + 0) % 9;
		}
	}),
	refNo: global.standardFn.refNo.bind({baseNum: 300, digits: 3, numShift1: 2, numShift2: 2}),
	patterns: {
		"LC02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//with M Liner with the same pivot
				if (func.isTrainExists("AB", "AB02", pivot, isPH, "206")) arr.push("p");
				//with Aoyama trains departing in Kawada
				var trains = ["AY14", "AY16", "AY18", "AY20"];
				for (var i in trains){
					if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) var alt104 = true;
					if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) var alt104 = true;
				}
				if (alt104) arr.push("alt104", "aol");
				//
				return arr;
			},
			runs: [
				{start: $("06:30"), end: $("07:10"), interval: 20},
				{start: $("07:30"), end: $("00:10"), interval: 20},
			],
		},
		"LC01": { //UP...
			runs: [
				{start: $("06:30"), end: $("23:10"), interval: 20},
				{start: $("23:30"), end: $("0:10"), interval: 20},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//with M Liner with the same pivot
				if (func.isTrainExists("AB", "AB01", pivot, isPH, "206")) arr.push("p");
				//with Aoyama trains departing in Kawada
				var trains = ["AY13", "AY15", "AY17", "AY19"];
				for (var i in trains){
					if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) var alt104 = true;
					if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) var alt104 = true;
				}
				if (alt104) arr.push("alt104", "aol");
				//
				return arr;
			},
		},
		"LC54": { //DN NIS
			mod: function(pivot, isPH){
				return [];
			},
			runs: [
				{start: $("00:30"), end: $("02:30"), interval: 20},
				{at: $("02:50"), terminate: "ASM", mod: "a"},
			],
		},
		"LC53": { //UP NIS
			runs: [
				{at: $("03:50"), begin: "ASM", mod: "a"},
				{start: $("04:10"), end: $("06:10"), interval: 20},
			],
			mod: function(pivot, isPH){
				return [];
			},
		},
	},
};