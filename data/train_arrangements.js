/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");
var $ = function(str){ return Time.hm(str); }

/**
 * For each pattern group:
 * showArrivals: ["xxx"]
 * mileage: { "xxx": 0.0 }, [negative value indicates other company lines]
 * returnableStations: {"xxx":{ //Default Value
 *    turnoverTime: 2, //2 minutes
 *    samePlatform: true, //Turnover at the same platform
 *    capacity: 1, //Only 1 train could turnover at the same time, only used when samePlatform = false
 * }}
 * basePattern: "XX02", [the pattern that assigns the first run number]
 * 
 * tripNo: function(pattern, pivot, tripOrder, runOrder, upbound)
 * runNo: function(runOrder, upbound)
 * refNo: function(pattern, pivot, tripOrder) [optional]
 * runType: function(runOrder) [optional]
 */

var initArrangements = function(){
	global.train_arrangements = {};
	require("./train_arrangements_liner.js");
	require("./train_arrangements_ltd_exp.js");
	require("./train_arrangements_sl_exp.js");
	require("./train_arrangements_rapid_exp.js");
	require("./train_arrangements_express.js");
	require("./train_arrangements_rapid.js");
	require("./train_arrangements_tendoji_local.js");
	require("./train_arrangements_main_local.js");
	require("./train_arrangements_mugita_local.js");
	require("./train_arrangements_josui_s.js");
	require("./train_arrangements_sunada_oura.js");
	require("./train_arrangements_aoyama.js");
	require("./train_arrangements_a_aida.js");
	require("./train_arrangements_a_tairi.js");
	require("./train_arrangements_koudakaigan.js");
};


/**
 * Standard functions
 */

global.standardFn = {
	/**
	 * TripNo:
	 * - initial: e.g. "A", default ""
	 * - baseNum: e.g. 100, default 0
	 * - minsShift["xx"]: e.g. 10, default 0 (xx is the last two digit of the pattern)
	 * - digits: default 3
	 * - dayTurnover["xx"]: default 3 * 3600
	 * - shortTrip: default false //For round trips shorter than 1 hour
	 * - runOrderModifier(num)
	 * - tripOrderModifier(num)
	 */
	tripNo: function(pattern, pivot, tripOrder, runOrder, upbound, isPH){
		if (this.initial == null) this.initial = "";
		if (this.baseNum == null) this.baseNum = 0;
		if (this.digits == null) this.digits = 2;
		if (this.minsShift == null) this.minsShift = 0;
		if (this.runOrderModifier != null) runOrder = this.runOrderModifier(runOrder, isPH);
		if (this.tripOrderModifier != null) runOrder = this.tripOrderModifier(tripOrder, isPH);
		var patternStr = pattern.slice(-2);
		var patternNo = parseInt(patternStr);
		if (patternNo >= 50) return "";
		else{
			var upbound = (patternNo % 2) == 1;
			var number = this.baseNum + runOrder * 2 + (upbound ? 1 : 2);
			number = number.toString();
			while (number.length < this.digits){
				number = "0" + number;
			}
			var pivotNum = pivot.getValue();
			if (this.minsShift[patternStr] != null){
				pivotNum -= this.minsShift[patternStr] * 60;
			}
			var dayTurnover = global.dayTurnover;
			if (this.dayTurnover != null){
				if (this.dayTurnover[patternStr] != null){
					var dayTurnover = this.dayTurnover[patternStr];
				}
			}
			if (pivotNum < dayTurnover) pivotNum += 86400;
			var hours = Math.floor(pivotNum / 3600);
			if (this.shortTrip){
				if (Array.isArray(this.shortTrip)){
					if (this.shortTrip.indexOf(runOrder) >= 0) var flag1 = true;
				}else{
					var flag1 = true;
				}
				if (flag1){
					if (pivotNum % 3600 >= 1800) hours += 50;
				}
			}else if (this.hourModifier){
				hours = this.hourModifier(hours, pivotNum, runOrder);
			}
			return func.ten(hours) + this.initial + number;
		}
	},
	/**
	 * RunNo:
	 * - initial: e.g. "A", default ""
	 * - baseNum: e.g. 100, default 0
	 * - digits: default 3
	 * - runOrderModifier(num)
	 */
	runNo: function(runOrder, upbound, isPH){
		if (this.initial == null) this.initial = "";
		if (this.baseNum == null) this.baseNum = 0;
		if (this.digits == null) this.digits = 2;
		if (this.runOrderModifier != null) runOrder = this.runOrderModifier(runOrder, isPH);
		var number = this.baseNum + runOrder * 2 + (upbound ? 1 : 2);
		number = number.toString();
		while (number.length < this.digits){
			number = "0" + number;
		}
		return this.initial + number;
	},
	/**
	 * RefNo:
	 * - initial: e.g. "A", default ""
	 * - baseNum: e.g. 100, default 0
	 * - digits: default 3
	 * - numShift1: default 0
	 * - numShift2: default 0
	 * - tripOrderModifier(num)
	 */
	refNo: function(pattern, pivot, tripOrder, isPH){
		if (this.initial == null) this.initial = "";
		if (this.baseNum == null) this.baseNum = 0;
		if (this.digits == null) this.digits = 2;
		if (this.numShift1 == null) this.numShift1 = 0;
		if (this.numShift2 == null) this.numShift2 = 0;
		if (this.tripOrderModifier != null) runOrder = this.tripOrderModifier(runOrder, isPH);
		var patternStr = pattern.slice(-2);
		var patternNo = parseInt(patternStr);
		if (patternNo >= 50) return "";
		else{
			var upbound = (patternNo % 2) == 1;
			if (upbound) var number = this.baseNum + (tripOrder + this.numShift1) * 2 + 1;
			else var number = this.baseNum + (tripOrder + this.numShift2) * 2 + 2;
			number = number.toString();
			while (number.length < this.digits){
				number = "0" + number;
			}
			return this.initial + number;
		}
	},
};

initArrangements();