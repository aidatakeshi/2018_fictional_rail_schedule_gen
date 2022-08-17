/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

var noMod = function(){ return []; };

/**
 * Train to Morio (take time at 六野 as standard)
 */

var isAt725 = function(time){
	return (time.getValue() % (20 * 60) != 0);
};

/**
 * Run No Modifier
 */

runOrderModifier = function(num, isPH){
	return num;
}

/**
 * Objects
 */

global.train_arrangements["A"] = {
	showArrivals: ["712", "716"],
	mileage: {
		"154": 0.0, "705": 4.4, "150": 6.5, "710": 9.1, "712": 11.4, "716": 20.1, "721": 25.8, "722": 28.5, "727": 35.3, "731": 21.1, "735": 25.3,
	},
	returnableStations: {
		"154": {turnoverTime: 5, samePlatform: false},
		"705": {turnoverTime: 2, samePlatform: true},
		"716": {turnoverTime: 5, samePlatform: false},
		"721": {turnoverTime: 1, samePlatform: true},
		"722": {turnoverTime: 2, samePlatform: true},
		"727": {turnoverTime: 2, samePlatform: true},
		"735": {turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 0, initial: "_", digits: 3, 
		minsShift: {"01": -3.0, "03": -3.0, "05": +2.0, "07": +2.0, "02": +2.0, "04": +2.0, "06": -3.0, "08": -3.0, "22": +5.0, "26": 0},
		runOrderModifier: runOrderModifier,
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 0, digits: 3,
		runOrderModifier: runOrderModifier,
	}),
	patterns: {
		"A04": { //普通 安達 ➜ 藍田武
			mod: function(pivot, isPH, mod){
				var arr = [];
				var p = false;
				var q = false;
				if (func.isTrainExists("A", "A26", pivot, isPH, "716"))				{	arr.push("q1");		q = true;	}
				else if (func.isTrainExists("A", "A08", pivot, isPH, "716"))		{	arr.push("p1");		p = true;	}
				if (func.isTrainExists("A", "A22", pivot.add(10,0), isPH, "150"))	{	arr.push("q2");		q = true;	}
				else if (func.isTrainExists("A", "A08", pivot, isPH, "150"))		{	arr.push("p2");		p = true;	}
				if (q) arr.push("q");
				if (p) arr.push("p");
				return arr;
			},
			runs: [
				{start: $("5:20"), end: $("23:50"), interval: 10},
				{start: $("0:00"), end: $("0:10"), interval: 10, terminate: "705"},
				{start: $("0:20"), end: $("1:20"), interval: 10, terminate: "731"},
			],
		},
		"A03": { //普通 藍田武 ➜ 安達
			runs: [
				{start: $("5:10"), end: $("6:10"), interval: 10, begin: "731"},
				{start: $("6:20"), end: $("6:30"), interval: 10, begin: "705"},
				{start: $("6:40"), end: $("1:10"), interval: 10},
			],
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (func.isTrainExists("A", "A07", pivot, isPH, "716")) arr.push("p");
				return arr;
			},
		},
		"A06": { //普通 森尾/康雅 ➜ 安達
			mod: function(pivot, isPH, mod){
				var arr = [];
				var q = false;
				if (!func.isTrainExists("A", "A02", pivot.add(10,0), isPH, "716")) 		arr.push("n");
				if (func.isTrainExists("A", "A22", pivot.add(10,0), isPH, "716")) {		arr.push("q1"); q = true; }
				if (func.isTrainExists("A", "A26", pivot.add(10,0), isPH, "150")) {		arr.push("q2"); q = true; }
				if (q) arr.push("q");
				if (func.isTrainExists("A", "A08", pivot, isPH, "716") && !isPH) arr.push("p");
				if (!isAt725(pivot.sub(20,0))) arr.push("s");
				return arr;
			},
			runs: [
				{at: $("4:30"), interval: 10, begin: "150"},
				{at: $("4:40"), interval: 10, begin: "710"},
				{at: $("4:50"), interval: 10, begin: "712"},
				{at: $("5:00"), interval: 10, begin: "716"},
				{at: $("5:10"), interval: 10, begin: "721"},
				{at: $("5:20"), interval: 10, begin: "721", mod: "alt721"},
				{start: $("5:30"), end: $("0:30"), interval: 10},
				{at: $("0:40"), interval: 10, terminate: "705"},
				{at: $("0:50"), interval: 10, terminate: "150"},
				{at: $("1:00"), interval: 10, terminate: "710"},
				{at: $("1:10"), interval: 10, terminate: "712"},
				{at: $("1:20"), interval: 10, terminate: "716"},
				{at: $("1:30"), interval: 10, terminate: "721"},
			],
		},
		"A05": { //普通 藍田武 ➜ 森尾/康雅
			runs: [
				{at: $("4:50"), interval: 10, begin: "721"},
				{at: $("5:10"), interval: 10, begin: "716"},
				{at: $("5:20"), interval: 10, begin: "712"},
				{at: $("5:30"), interval: 10, begin: "710"},
				{at: $("5:40"), interval: 10, begin: "150"},
				{at: $("5:50"), interval: 10},
				{at: $("6:00"), interval: 10, begin: "705"},
				{start: $("6:10"), end: $("1:00"), interval: 10},
				{at: $("1:10"), interval: 10, terminate: "721", mod: "alt721"},
				{at: $("1:20"), interval: 10, terminate: "721"},
				{at: $("1:30"), interval: 10, terminate: "716"},
				{at: $("1:40"), interval: 10, terminate: "712"},
				{at: $("1:50"), interval: 10, terminate: "710"},
				{at: $("2:00"), interval: 10, terminate: "150"},
			],
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (!func.isTrainExists("A", "A01", pivot.sub(10,0), isPH, "716")) arr.push("n");
				if (func.isTrainExists("A", "A07", pivot, isPH, "716") && !isPH) arr.push("p");
				if (!isAt725(pivot.add(20,0))) arr.push("s");
				return arr;
			},
		},
		"A02": { //快速 五木山 ➜ 藍田武
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (func.isTrainExists("A", "A22", pivot, isPH, "716")) arr.push("q");
				return arr;
			},
			runs: [
				{start: $("5:20"), end: $("0:00"), interval: 10},
				{start: $("0:10"), end: $("0:10"), interval: 10, terminate: "705"},
				{start: $("0:20"), end: $("1:40"), interval: 10, terminate: "721", mod: "lcl"},
			],
		},
		"A01": { //快速 藍田武 ➜ 五木山
			runs: [
				{start: $("4:50"), end: $("6:10"), interval: 10, begin: "721", mod: "lcl"},
				{start: $("6:20"), end: $("6:20"), interval: 10, begin: "705"},
				{start: $("6:30"), end: $("1:10"), interval: 10},
			],
			mod: noMod,
		},
		"A08": { //快速 安達 ➜ 藍田武 ; 藍北中央 ➜ 公園南口
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (isPH) arr.push("h");
				if (func.isTrainExists("A", "A26", pivot, isPH, "716")) arr.push("q");
				return arr;
			},
			runs_wk: [
				{start: $("6:30"), end: $("9:00"), interval: 10},
				{start: $("16:20"), end: $("17:10"), interval: 10, begin: "716"},
				{start: $("17:20"), end: $("20:40"), interval: 10},
				{start: $("20:50"), end: $("22:20"), interval: 10, terminate: "731", mod: "nis"},
			],
			runs_ph: [
				{start: $("9:00"), end: $("21:00"), interval: 10},
			],
		},
		"A07": { //快速 藍田武 ➜ 安達 ; 公園南口 ➜ 藍北中央
			runs_wk: [
				{start: $("6:10"), end: $("6:20"), interval: 10, begin: "731", mod: "nis"},
				{start: $("6:30"), end: $("7:40"), interval: 10, begin: "705"},
				{start: $("7:50"), end: $("8:40"), interval: 10},
				{start: $("8:50"), end: $("10:20"), interval: 10, terminate: "716"},
				{start: $("17:00"), end: $("17:30"), interval: 10, begin: "705"},
				{start: $("17:40"), end: $("22:00"), interval: 10},
			],
			runs_ph: [
				{start: $("10:00"), end: $("22:00"), interval: 10},
			],
			mod: function(pivot, isPH, mod){
				var arr = [];
				if (isPH) arr.push("h");
				return arr;
			},
		},
		"A22": { //快速 通勤急行 ➜ 藍田武
			runs_wk: [
				{start: $("7:20"), end: $("8:10"), interval: 10},
			],
			mod: noMod,
		},
		"A26": { //快速 通勤急行 ➜ 藍田武
			runs_wk: [
				{start: $("7:10"), end: $("8:00"), interval: 10},
			],
			mod: noMod,
		},
	},
};