/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

var n = 12.0 - 1.0;
var noMod = function(){ return []; };

global.train_arrangements["AY"] = {
	showArrivals: ["416", "418", "421", "426"],
	mileage: {
		"101": 0.0, "412": 12.0, "418": 18.9, "421": 24.2, "424": 28.8, "426": 32.7, "427": 34.5, "432": 47.0,
	},
	returnableStations: {
		"101":{turnoverTime: 3, samePlatform: true},
		"412":{turnoverTime: 2, samePlatform: true},
		"421":{turnoverTime: 5, samePlatform: false},
		"426":{turnoverTime: 20, samePlatform: false},
		"427":{turnoverTime: 0, samePlatform: true},
		"432":{turnoverTime: 2, samePlatform: true},
	},
	tripNo: global.standardFn.tripNo.bind({baseNum: 300, digits: 3, 
		minsShift: {"02": +15, "04": +20, "05": -10, "06": +25, "08": +20, "09": -10, "10": +20, "12": +10, "13": -10, "14": +25, "15": -10, "16": +25},
	}),
	runNo: global.standardFn.runNo.bind({baseNum: 300, digits: 3}),
	patterns: {
		/**
		 * 青山線快速運用列車 (AY01 - 02)
		 */

		"AY02": { //快速 千鳥谷 ➜ 青山新町 Odd
			runs: [
				{start: $("5:50"), end: $("1:30"), interval: 20},
			], mod: noMod,
		},
		"AY01": { //快速 青山新町 ➜ 千鳥谷 Odd
			runs: [
				{start: $("5:10"), end: $("0:50"), interval: 20},
			], mod: noMod,
		},
		"AY52": { //回送 千鳥谷TS ➜ 千鳥谷 / 青山新町 ➜ 青山TD Odd
			runs: [
				{at: $("6:10"), terminate: "432"},
				{start: $("1:10"), end: $("1:30"), interval: 20, begin: "412"},
			], mod: noMod,
		},
		"AY51": { //回送 青山TD ➜ 青山新町 / 千鳥谷 ➜ 千鳥谷TS Odd
			runs: [
				{start: $("5:10"), end: $("5:30"), interval: 20, terminate: "412"},
				{at: $("0:30"), begin: "432"},
			], mod: noMod,
		},
		
		/**
		 * 青山線各停運用列車 - 千鳥谷 (AY03/04/07/08)
		 */
		"AY04": { //Downbound Odd
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AY", "AY12", pivot.sub(10,0), isPH, "431")) arr.push("p");
				if (func.isTrainExists("AY", "AY14", pivot, isPH, "431")) arr.push("q");
				if (!func.isTrainExists("AY", "AY02", pivot.sub(20,0), isPH, "426")) arr.push("n");
				return arr;
			},
			runs: [
				{at: $("5:35"), begin: "418", mod: "alt418"},
				{at: $("5:55"), begin: "426"},
				{at: $("6:10"), mod: "alt432"},
				{start: $("6:30"), end: $("1:30"), interval: 20},
				{at: $("1:50"), terminate: "421"},
				{at: $("2:10").sub(2,30), terminate: "427"},
			],
		},
		"AY08": { //Downbound Even
			runs: [
				{at: $("5:45"), begin: "421"},
				{at: $("6:00"), begin: "426", mod: "q"},
				{start: $("6:20"), end: $("1:40"), interval: 20},
				{at: $("2:00").sub(2,30), terminate: "427"},
				{at: $("2:20").sub(2,30), terminate: "427"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AY", "AY12", pivot.sub(20,0), isPH, "426")) arr.push("p");
				if (func.isTrainExists("AY", "AY14", pivot.sub(10,0), isPH, "427")) arr.push("q");
				if (func.isTrainExists("AY", "AY02", pivot.sub(30,0), isPH, "431", "s")) arr.push("q");
				if (!func.isTrainExists("AY", "AY02", pivot.sub(10,0), isPH, "431")) arr.push("n");
				return arr;
			},
		},
		"AY07": { //Upbound Even
			runs: [
				{at: $("4:20").add(2,30), begin: "427"},
				{at: $("4:40").add(2,30), begin: "427"},
				{start: $("5:00"), end: $("0:20"), interval: 20},
				{at: $("0:40"), terminate: "426", mod: "q"},
				{at: $("0:55"), terminate: "421"},
			],
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AY", "AY11", pivot.add(20,0), isPH, "426")) arr.push("p");
				if (func.isTrainExists("AY", "AY13", pivot.add(10,0), isPH, "427")) arr.push("q");
				if (func.isTrainExists("AY", "AY01", pivot.add(30,0), isPH, "431", "s")) arr.push("q");
				if (!func.isTrainExists("AY", "AY01", pivot.add(10,0), isPH, "431")) arr.push("n");
				return arr;
			},
		},
		"AY03": { //Upbound Odd
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AY", "AY11", pivot.add(10,0), isPH, "431")) arr.push("p");
				if (func.isTrainExists("AY", "AY13", pivot, isPH, "431")) arr.push("q");
				if (!func.isTrainExists("AY", "AY01", pivot.add(20,0), isPH, "426")) arr.push("n");
				return arr;
			},
			runs: [
				{at: $("4:30").add(2,30), begin: "427"},
				{at: $("4:50"), begin: "421"},
				{start: $("5:10"), end: $("0:10"), interval: 20},
				{at: $("0:30"), mod: "alt432"},
				{at: $("0:45"), terminate: "426"},
				{at: $("1:05"), terminate: "418", mod: "alt418"},
			],
		},
		"AY54": { //Downbound Odd NIS
			mod: noMod,
			runs: [
				{at: $("2:10").sub(2,30), terminate: "DNE"},
				{at: $("1:30"), begin: "412"},
			],
		},
		"AY58": { //Downbound Even NIS
			runs: [
				{at: $("2:00").sub(2,30), terminate: "DNE"},
				{at: $("2:20").sub(2,30), terminate: "DNE"},
			],
			mod: noMod,
		},
		"AY57": { //Upbound Even NIS
			runs: [
				{at: $("4:20").add(2,30), begin: "DNE"},
				{at: $("4:40").add(2,30), begin: "DNE"},
			],
			mod: noMod,
		},
		"AY53": { //Upbound Odd NIS
			mod: noMod,
			runs: [
				{at: $("5:10"), terminate: "412"},
				{at: $("4:30").add(2,30), begin: "DNE"},
			],
		},

		/**
		 * 青山線各停運用列車 - 田園中央 / 新田 (AY05/06/09/10)
		 */

		"AY06": { //Downbound Odd
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AY", "AY14", pivot, isPH, "420")) arr.push("q");
				return arr;
			},
			runs: [
				{start: $("06:30"), end: $("00:30"), interval: 20},
			],
		},
		"AY10": { //Downbound Even
			runs: [
				{start: $("06:40"), end: $("01:00"), interval: 20},
			],
			mod: noMod,
		},
		"AY09": { //Upbound Even
			runs: [
				{start: $("05:40"), end: $("00:00"), interval: 20},
			],
			mod: noMod,
		},
		"AY05": { //Upbound Odd
			mod: function(pivot, isPH){
				var arr = [];
				if (func.isTrainExists("AY", "AY13", pivot, isPH, "420")) arr.push("q");
				return arr;
			},
			runs: [
				{start: $("06:10"), end: $("00:10"), interval: 20},
			],
		},
		"AY56": { //Downbound Odd NIS
			TimeShifting: -20,
			mod: noMod,
			runs: [
				{at: $("06:05"), mod: "alt"}, //For AY08
				{start: $("06:30"), end: $("07:30"), interval: 20},
			],
		},
		"AY60": { //Downbound Even NIS
			runs: [
				{start: $("00:40"), end: $("01:00"), interval: 20},
			],
			mod: noMod,
		},
		"AY59": { //Upbound Even NIS
			runs: [
				{start: $("05:40"), end: $("06:00"), interval: 20},
			],
			mod: noMod,
		},
		"AY55": { //Upbound Odd NIS
			TimeShifting: +20,
			mod: noMod,
			runs: [
				{start: $("23:10"), end: $("00:10"), interval: 20},
				{at: $("00:35"), mod: "alt"}, //For AY07
			],
		},

		/**
		 * 青山線直通運用列車 (AY11 - 20)
		 */

		"AY11": { //区間快速 青山新町 ➜ 千鳥谷 (AM) Even
			runs_wk: [
				{start: $("6:00"), end: $("7:00"), interval: 20, mod: "nis", begin: "DNE"},
				{start: $("7:20"), end: $("9:40"), interval: 20},
			], mod: noMod,
		},
		"AY14": { //通勤急行 千鳥谷 ➜ 麥急河田 (AM) Odd
			runs_wk: [
				{start: $("7:30"), end: $("9:50"), interval: 20}
			], mod: noMod,
		},
		"AY16": { //通勤準急 田園中央 ➜ 麥急河田 (AM) Even
			runs_wk: [
				{start: $("7:40"), end: $("9:40"), interval: 20}
			], mod: noMod,
		},
		"AY12": { //区間快速 千鳥谷 ➜ 青山新町 (PM) Even
			runs_wk: [
				{start: $("17:20"), end: $("22:00"), interval: 20},
				{start: $("22:20"), end: $("23:20"), interval: 20, mod: "nis", terminate: "DNE"},
			], mod: noMod,
		},
		"AY13": { //通勤急行 麥急河田 ➜ 千鳥谷 (PM) Odd
			runs_wk: [
				{start: $("17:10"), end: $("21:50"), interval: 20},
			], mod: noMod,
		},
		"AY15": { //通勤準急 麥急河田 ➜ 田園中央 (PM) Even
			runs_wk: [
				{start: $("18:00"), end: $("20:00"), interval: 20},
			], mod: noMod,
		},
		"AY18": { //回送 青山新町 ➜ 青山TD ➜ 麥急河田 (PM) Odd
			runs_wk: [
				{start: $("17:10"), end: $("17:30"), interval: 20, begin: "AOY"},
				{start: $("17:50"), end: $("21:50"), interval: 20},
				{start: $("22:10"), end: $("22:30"), interval: 20, terminate: "AOY"},
			], mod: noMod,
		},
		"AY17": { //回送 麥急河田 ➜ 青山TD ➜ 青山新町 (AM) Odd
			runs_wk: [
				{start: $("6:50"), end: $("7:10"), interval: 20, begin: "AOY"},
				{start: $("7:30"), end: $("9:10"), interval: 20},
				{start: $("9:30"), end: $("9:50"), interval: 20, terminate: "AOY"},
			], mod: noMod,
		},
		"AY20": { //回送 青山TD ➜ 麥急河田 (PM) Even
			runs_wk: [
				{start: $("18:00"), end: $("20:00"), interval: 20},
			], mod: noMod,
		},
		"AY19": { //回送 麥急河田 ➜ 青山TD (AM) Even
			runs_wk: [
				{start: $("7:40"), end: $("9:40"), interval: 20}
			], mod: noMod,
		},
		"AY62": { //千鳥谷TS ➜ 千鳥谷 Even
			runs_wk: [{start: $("17:20"), end: $("18:20"), interval: 20}], mod: noMod,
		},
		"AY61": { //千鳥谷 ➜ 千鳥谷TS Even
			runs_wk: [{start: $("8:40"), end: $("9:40"), interval: 20}], mod: noMod,
		},
		"AY66": { //田園TD ➜ 田園中央 Even
			timeShifting: -20,
			runs_wk: [{start: $("7:40"), end: $("9:40"), interval: 20}], mod: noMod,
		},
		"AY65": { //田園中央 ➜ 田園TD Even
			timeShifting: +20,
			runs_wk: [{start: $("18:00"), end: $("20:00"), interval: 20}], mod: noMod,
		},

		/**
		 * The End
		 */
	},
};