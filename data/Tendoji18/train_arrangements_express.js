/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * Main Line System : Express (130kph) [EE]
 */

var alt104_D = function(pivot, isPH, isEven){
	if (pivot.getValue() % 600 != 0) return [];
	if (pivot.getValue() % 1200 != (isEven ? 0 : 600)) return [];
	var trains = ["AY14", "AY16", "AY18", "AY20"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104"];
		if (func.isTrainExists("AY", trains[i], pivot.sub(10,0), isPH, "104")) return ["alt104"];
	}
	return [];
};

var alt104_U = function(pivot, isPH, isEven){
	if (pivot.getValue() % 600 != 0) return [];
	if (pivot.getValue() % 1200 != (isEven ? 0 : 600)) return [];
	var trains = ["AY13", "AY15", "AY17", "AY19"];
	//with Aoyama trains departing in Kawada
	for (var i in trains){
		if (func.isTrainExists("AY", trains[i], pivot, isPH, "104")) return ["alt104"];
		if (func.isTrainExists("AY", trains[i], pivot.add(10,0), isPH, "104")) return ["alt104"];
	}
	return [];
};

global.train_arrangements["EE"] = {
	showArrivals: ["139"],
	mileage: {
		"101": 0.0, "113": 12.0, "115": 15.9, "121": 22.5, "131": 34.5, "133": 36.8, "139": 45.0,
		"352": 47.9, "354": 50.5, "362": 48.0, "367": 53.8, "371": 58.6, "374": 62.2, "377": 68.1,
	},
	returnableStations: {
		"101":{turnoverTime: 3, samePlatform: true},
		"113":{turnoverTime: 0, samePlatform: true}, //#
		"115":{turnoverTime: 0, samePlatform: true}, //#
		"131":{turnoverTime: 5, samePlatform: false},
		"133":{turnoverTime: 0, samePlatform: true}, //#
		"139":{turnoverTime: 0, samePlatform: true}, //#
		"354":{turnoverTime: 2, samePlatform: true},
		"377":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 200, digits: 3, 
		minsShift: {"01": -4.0, "02": +11.5, "03": -7.0, "04": +13.5, "05": -7.0, "06": +16.5},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 200, digits: 3}),
	patterns: {
		/**
		 * Rapid Express / Express - Main Line & Josui Line South
		 */
		"EE06": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				//If there is no Semi-Express (SEX) departing at Kawada, it is an Express (EXP), otherwise, it is a Rapid Express (REX).
				if (!func.isTrainExists("EE", "EE04", pivot, isPH, "101")){
					arr.push("exp");
					if (pivot.modulo(20,0).getValue() == 0) arr.push("exp1");
					else arr.push("exp2");
					//S.S.Rapid Train
					if (func.isTrainExists("TU", "TU02", pivot, isPH, "115") || func.isTrainExists("TU", "TU04", pivot, isPH, "115")) arr.push("ssr");
					else arr.push("exp_type");
				}else{
					//For REX, check if AE/A Liner departing in Kawada
					if (func.isTrainExists("AE", "AE02", pivot.sub(10,0), isPH, "101")) arr.push("y");
					if (func.isTrainExists("AE", "AE52", pivot.sub(10,0), isPH, "101")) arr.push("y");
				}
				//Alt 104
				arr = arr.concat(alt104_D(pivot, isPH));
				//
				return arr;
			},
			runs: [
				{at: $("05:40"), begin: "121"},
				{at: $("05:50"), begin: "131", mod: "alt131"},
				{at: $("06:00"), begin: "362", mod: "alt362"},
				{at: $("06:10"), begin: "374", mod: "alt374"},
				{start: $("06:30"), end: $("01:10"), interval: 20},
			],
		},
		"EE05": { //UP...
			runs: [
				{start: $("05:30"), end: $("00:10"), interval: 20},
				{at: $("00:30"), terminate: "374", mod: "alt374"},
				{at: $("00:40"), terminate: "362", mod: "alt362"},
				{at: $("00:50"), terminate: "131", mod: "alt131"},
				{at: $("01:00"), terminate: "121"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				//If there is no Semi-Express (SEX) departing at Kawada, it is an Express (EXP), otherwise, it is a Rapid Express (REX).
				if (!func.isTrainExists("EE", "EE03", pivot, isPH, "101")){
					arr.push("exp");
					if (pivot.modulo(20,0).getValue() == 0) arr.push("exp2");
					else arr.push("exp1");
					//S.S.Rapid Train
					if (func.isTrainExists("TU", "TU01", pivot, isPH, "115") || func.isTrainExists("TU", "TU03", pivot, isPH, "115")) arr.push("ssr");
					else arr.push("exp_type");
				}else{
					//For REX, check if AE/A Liner departing in Kawada
					if (func.isTrainExists("AE", "AE01", pivot.add(10,0), isPH, "101")) arr.push("y");
					if (func.isTrainExists("AE", "AE51", pivot.add(10,0), isPH, "101")) arr.push("y");
				}
				//Alt 104
				arr = arr.concat(alt104_U(pivot, isPH));
				//
				return arr;
			},
		},

		/**
		 * Semi Express - Main Line & Josui Line North
		*/
		"EE04": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				if (pivot.modulo(20,0).getValue() != 0) arr.push("alt101");
				//S.S.Rapid Train
				if (func.isTrainExists("TU", "TU02", pivot, isPH, "115") || func.isTrainExists("TU", "TU04", pivot, isPH, "115")) arr.push("ssr");
				//Alt 104
				arr = arr.concat(alt104_D(pivot, isPH, true));
				//
				return arr;
			},
			runs_wk: [
				{at: $("06:20"), mod: "alt354"},
				{start: $("06:40"), end: $("07:20"), interval: 20},
				{start: $("07:40"), end: $("09:40"), interval: 10},
				{start: $("10:00"), end: $("17:00"), interval: 20},
				{start: $("17:20"), end: $("22:20"), interval: 10},
				{start: $("22:40"), end: $("01:00"), interval: 20},
			],
			runs_ph: [
				{at: $("06:20"), mod: "alt354"},
				{start: $("06:40"), end: $("01:00"), interval: 20},
			],
		},
		"EE03": { //UP...
			runs_wk: [
				{start: $("05:40"), end: $("07:00"), interval: 20},
				{start: $("07:20"), end: $("09:20"), interval: 10},
				{start: $("09:40"), end: $("16:40"), interval: 20},
				{start: $("17:00"), end: $("22:00"), interval: 10},
				{start: $("22:20"), end: $("00:00"), interval: 20},
				{at: $("00:20"), mod: "alt354"},
			],
			runs_ph: [
				{start: $("05:40"), end: $("00:00"), interval: 20},
				{at: $("00:20"), mod: "alt354"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				if (pivot.modulo(20,0).getValue() == 0) arr.push("alt101");
				//S.S.Rapid Train
				if (func.isTrainExists("TU", "TU01", pivot, isPH, "115") || func.isTrainExists("TU", "TU03", pivot, isPH, "115")) arr.push("ssr");
				//Alt 104
				arr = arr.concat(alt104_U(pivot, isPH, true));
				//
				return arr;
			},
		},

		/**
		 * Sectional Semi Express - Main Line & Josui Line North
		*/
		"EE02": { //DN...
			mod: function(pivot, isPH){
				var arr = [];
				if (pivot.modulo(20,0).getValue() != 0) arr.push("alt101");
				if (!func.isTrainExists("EE", "EE04", pivot.sub(10,0), isPH, "131")) arr.push("l");
				//S.S.Rapid Train
				if (func.isTrainExists("TU", "TU02", pivot, isPH, "115") || func.isTrainExists("TU", "TU04", pivot, isPH, "115")) arr.push("ssr");
				//Alt 104
				arr = arr.concat(alt104_D(pivot, isPH, true));
				//
				return arr;
			},
			runs: [
				{start: $("06:20"), end: $("07:00"), interval: 10, begin: "133"},
				{start: $("07:10"), end: $("00:30"), interval: 10},
				{start: $("00:40"), end: $("01:00"), interval: 20, terminate: "133", mod: "local"},
				{start: $("01:20"), end: $("02:00"), interval: 10, terminate: "133", mod: "local"},
				{at: $("02:20"), terminate: "133", mod: "local"},
				{at: $("02:40"), terminate: "139", mod: "local"},
			],
		},
		"EE01": { //UP...
			runs: [
				{at: $("04:00"),  begin: "139", mod: "local"},
				{at: $("04:20"),  begin: "133", mod: "local"},
				{start: $("04:40"), end: $("05:20"), interval: 10, begin: "133", mod: "local"},
				{start: $("05:40"), end: $("06:00"), interval: 20, begin: "133", mod: "local"},
				{start: $("06:10"), end: $("23:30"), interval: 10},
				{start: $("23:40"), end: $("00:20"), interval: 10, terminate: "133"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				if (pivot.modulo(20,0).getValue() == 0) arr.push("alt101");
				if (!func.isTrainExists("EE", "EE03", pivot.add(10,0), isPH, "131")) arr.push("l");
				//S.S.Rapid Train
				if (func.isTrainExists("TU", "TU01", pivot, isPH, "115") || func.isTrainExists("TU", "TU03", pivot, isPH, "115")) arr.push("ssr");
				//Alt 104
				arr = arr.concat(alt104_U(pivot, isPH, true));
				//
				return arr;
			},
		},

		/**
		 * Non-Revenue Trains
		*/
		"EE52": { //光祐寺車両基地 ➜ 大浦
			timeShifting: -5, //To "fake" the run number assigner
			mod: function(pivot, isPH){return []},
			runs_wk: [
				{start: $("06:30"), end: $("07:50"), interval: 20},
				{start: $("08:10"), end: $("08:50"), interval: 20},
				{start: $("17:50"), end: $("18:30"), interval: 20},
			],
			runs_ph: [
				{start: $("06:30"), end: $("07:50"), interval: 20},
			],
		},
		"EE51": { //大浦 ➜ 光祐寺車両基地
			timeShifting: +5, //To "fake" the run number assigner
			runs_wk: [
				{start: $("08:10"), end: $("08:50"), interval: 20},
				{start: $("20:50"), end: $("21:30"), interval: 20},
				{start: $("22:50"), end: $("00:10"), interval: 20},
			],
			runs_ph: [
				{start: $("22:50"), end: $("00:10"), interval: 20},
			],
			mod: function(pivot, isPH){return []},
		},
		"EE54": { //光祐寺 (逆方向) ➜ 光祐寺車両基地
			mod: function(pivot, isPH){return []},
			runs: [
				{at: $("00:40")}, {at: $("01:00")},
				{start: $("01:20"), end: $("02:00"), interval: 10},
				{at: $("02:20")},
			],
		},
		"EE53": { //光祐寺車両基地 ➜ 光祐寺 (逆方向)
			runs: [
				{at: $("04:20")},
				{start: $("04:40"), end: $("05:20"), interval: 10},
				{at: $("05:40")}, {at: $("06:00")},
			],
			mod: function(pivot, isPH){return []},
		},
		"EE56": { //光祐寺車両基地 ➜ 光祐寺 (順方向)
			mod: function(pivot, isPH){return []},
			runs: [
				{start: $("06:20"), end: $("07:00"), interval: 20},
			],
		},
		"EE55": { //光祐寺 (順方向) ➜ 光祐寺車両基地
			runs: [
				{start: $("23:40"), end: $("00:20"), interval: 20},
			],
			mod: function(pivot, isPH){return []},
		},
		"EE64": { //清河南 ➜ 加福町車両基地
			mod: function(pivot, isPH){return []},
			runs: [
				{start: $("01:30"), end: $("02:10"), interval: 20},
			],
		},
		"EE63": { //加福町車両基地 ➜ 清河南
			runs: [
				{start: $("04:30"), end: $("05:10"), interval: 20},
			],
			mod: function(pivot, isPH){return []},
		},

		/**
		 * The End
		 */
	},
};