/**
 * [[Summary]]
 * 
 * isInArray (item, array) --> Boolean
 * exports.isTrainExists = function(group, pattern, pivot, isPH, stop, mod) --> Boolean
 * - group [e.g."AE"] pattern [e.g."AE01"] pivot [Time] isPH [Boolean] stop [optional, stop code], mod [in string or array]
 * exports.modSelect(obj, mod) --> Select the attribute in an object according to the mod. If not found, than select default.
 * - obj [can be either object or string] mod [in string or array]
 * exports.getOneTrainTrip(group, pattern, pivot, isPH, begin, terminate, mod) --> Return object indicating a train trip
 * - group [e.g."AE"] pattern [e.g. "AE01"], pivot [Time] isPH [Boolean] begin [optional, stop code] terminate [optional, stop code] mod [in string or array]
 * exports.getTrainTripsInAPattern(group, pattern, isPH) --> Return an array of runs with train trips
 * - group [e.g."AE"] pattern [e.g. "AE01"], isPH [Boolean]
 */

/**
 * Require Modules
 */
var Time = require("./Time.js");

/**
 * Train Trip Format (placed here for emphasis)
 */

var tripEntryFormat = function(){
	return {
		pivot: "",
		tripNo: "", runNo: "", runNoPair: "", refNo: "", runType: "",
		trainType: "", upbound: "",
		//_Stop: stop code e.g. "101", _Track: track number e.g. "5", _Index: index in pattern template, _Time: [Time]
		beginStop: "", beginTrack: "", beginIndex: -1, beginTime: "",
		terminateStop: "", terminateTrack: "", terminateIndex: -1, terminateTime: "",
		distance: 0, distance_p: 0, distance_n: 0, travelTime: "", avgSpeed: 0,
		timetable: {},
	};
}

/**
 * Check if entry contains in array
 */

var isInArray = function(item, array){
	var p = 0;
	while (p < array.length){
		if (array[p] == item){
			return true;
			p = array.length;
		}
		p++;
	}
	return false;
};
exports.isInArray = isInArray;

/**
 * Change string to array
 */

var array = function(item){
	if (Array.isArray(item)){
		return item;
	}else if (item != null){
		return [item];
	}else{
		return [];
	}
};
exports.array = array;

/**
 * Ten / Hundred
 */

var ten = function(num){
	return ((num < 10) ? "0" : "") + num;
};
exports.ten = ten;

var hundred = function(num){
	return ((num < 100) ? "0" : "") + ((num < 10) ? "0" : "") + num;
};
exports.hundred = hundred;

/**
 * Check if train exists in a run list
 */

exports.isTrainExists = function(group, pattern, pivot, isPH, stop, mod){
	//Obtain the correct runs array
	if (global.train_arrangements[group].patterns[pattern] == null){
		console.log("Pattern", pattern, "not found");
	}else if (global.train_arrangements[group].patterns[pattern].runs != null){
		var myRuns = global.train_arrangements[group].patterns[pattern].runs;
	}else if (global.train_arrangements[group].patterns[pattern].runs_wk != null && isPH == false){
		var myRuns = global.train_arrangements[group].patterns[pattern].runs_wk;
	}else if (global.train_arrangements[group].patterns[pattern].runs_ph != null && isPH == true){
		var myRuns = global.train_arrangements[group].patterns[pattern].runs_ph;
	}else{
		var myRuns = [];
	}
	//For each item in the runs
	for (var i in myRuns){
		var smallFlag = true;
		//(1) Check if within time
		if (smallFlag){
			if (myRuns[i].at != null){
				//..Type 1: with at
				if (!myRuns[i].at.equal(pivot)) smallFlag = false;
			}else if ((myRuns[i].start != null) && (myRuns[i].end != null) && (myRuns[i].interval != null)){
				//..Type 2: with begin, end
				var startV = myRuns[i].start.getValue();
				var pivotV = pivot.getValue();
				var endV = myRuns[i].end.getValue();
				//Case 1 fulfil: startV <= pivotV <= endV
				if (startV <= pivotV && pivotV <= endV){
				//Case 2 fulfil: pivotV <= endV <= startV
				}else if (pivotV <= endV && endV <= startV){
				//Case 3 fulfil: endV <= startV <= pivotV
				}else if (endV <= startV && startV <= pivotV){
				//Else, not fulfil
				}else{
					smallFlag = false;
				}
				//Check also interval
				var interval = myRuns[i].interval * 60;
				var timeDiff = pivotV - startV;
				if (timeDiff < 0) timeDiff += 86400;
				if (timeDiff % interval != 0) smallFlag = false;
			}else{
				//Error
				smallFlag = false;
			}
		}
		//(2) Check if within stop
		if (smallFlag){
			if (stop != null){
				var stopIndex = global.train_patterns[pattern].stopOrders[stop];
				if (stopIndex == null){
					smallFlag = false;
				}else{
					if (myRuns[i].begin != null){
						var beginIndex = global.train_patterns[pattern].stopOrders[myRuns[i].begin];
						if (beginIndex == null || beginIndex > stopIndex) smallFlag = false;
					}
					if (myRuns[i].terminate != null){
						var terminateIndex = global.train_patterns[pattern].stopOrders[myRuns[i].terminate];
						if (terminateIndex == null || terminateIndex < stopIndex) smallFlag = false;
					}
				}
			}
		}
		//(3) Check if mod exists
		if (smallFlag){
			if (mod != null){
				if (myRuns[i].mod){
					var myMod = array(myRuns[i].mod);
				}else{
					var myMod = [];
				}
				var mod_arr = array(mod);
				for (var j in mod_arr){
					if (!isInArray(mod_arr[j], myMod)) smallFlag = false;
				}
			}
		}
		//Return false
		if (smallFlag) return true;
	}
	return false;
};

/**
 * Select data according to mod
 */

exports.modSelect = function(obj, mod){
	var mod_arr = array(mod);
	//Null --> return null
	if (obj == null){
		return null;
	}
	//Not object --> direct return
	if (typeof obj !== 'object'){
		return obj;
	}
	//Object --> see attribute
	for (var i in mod_arr){
		var m = mod_arr[i];
		if (obj[m] != null){
			if (obj[m] === "") return null;
			else return obj[m];
		}
	}
	//Default value
	if (obj.default === null || obj.default === "") return null;
	else return obj.default;
};
var modSelect = exports.modSelect;

/**
 * Get train trip data according to mod
 */

exports.getOneTrainTrip = function(group, pattern, pivot, isPH, begin, terminate, mod){
	if (global.train_patterns[pattern] == null) console.log("Pattern",pattern,"not found");
	var pivot_t = Time.hm(global.train_patterns[pattern].pivot);
	var stopOrders = global.train_patterns[pattern].stopOrders;
	if (global.train_arrangements[group] != null){
		var mileage = global.train_arrangements[group].mileage;
	}

	//(1) Set up data object
	var data = tripEntryFormat();

	data.pivot = pivot.toString();
	data.timetable = JSON.parse(JSON.stringify(global.train_patterns[pattern].template));

	//(2) Get mods by mod function
	var mod_arr = array(mod);
	var modFunction = global.train_arrangements[group].patterns[pattern].mod;
	if (modFunction != null){
		var mod_additional = array(modFunction(pivot, isPH, mod_arr));
		mod_arr = mod_arr.concat(mod_additional);
	}

	//(3) Determine train type & consist
	if (global.train_patterns[pattern].trainType != null){
		data.trainType = modSelect(global.train_patterns[pattern].trainType, mod_arr);
	}else{
		data.trainType = "#";
	}
	if (global.train_patterns[pattern].consist != null){
		data.consist = modSelect(global.train_patterns[pattern].consist, mod_arr);
		data.consist_short = (global.train_consists[data.consist] == null) ? "" : global.train_consists[data.consist].remark_short;
	}else{
		data.consist = "";
		data.consist_short = "";
	}

	data.upbound = modSelect(global.train_patterns[pattern].upbound, mod_arr);

	//(4) Determine Reference Time (RefTime)
	if (global.train_patterns[pattern].refTime != null && data.trainType != "#"){
		data.refTime = function(refTime, pivot1, pivot2, mods){
			var obj = {};
			var dayTurnover = (refTime.dayTurnover) ? refTime.dayTurnover : global.dayTurnover;
			for (var line in refTime){
				if (line != "dayTurnover"){
					var $time = modSelect(refTime[line], mods);
					var s = Time.t($time).getValue() - pivot_t.getValue() + pivot.getValue();
					if (s < dayTurnover) s += 86400;
					obj[line] = s / 3600;
				}
			}
			return obj;
		}(global.train_patterns[pattern].refTime, pivot_t, pivot, mod_arr);
	}else{
		data.refTime = {};
	}

	//(5) For each stop, select data by mod information
	for (var i in data.timetable){
		//Type A: stop
		if (data.timetable[i].stop){
			//Track Number
			data.timetable[i].track = modSelect(data.timetable[i].track, mod_arr);
			//Line
			data.timetable[i].line = modSelect(data.timetable[i].line, mod_arr);
			//Direction
			data.timetable[i].upbound = modSelect(data.timetable[i].upbound, mod_arr);
			//Arrive Time
			if (data.timetable[i].arrive != null){
				var $time = modSelect(data.timetable[i].arrive, mod_arr);
				if ($time == null) delete data.timetable[i].arrive;
				else data.timetable[i].arrive = Time.t($time).sub(pivot_t).add(pivot).toString();
			}
			//Depart Time
			if (data.timetable[i].depart != null){
				var $time = modSelect(data.timetable[i].depart, mod_arr);
				if ($time == null) delete data.timetable[i].depart;
				else data.timetable[i].depart = Time.t($time).sub(pivot_t).add(pivot).toString();
			}
			//Pass Time
			if (data.timetable[i].pass != null){
				var $time = modSelect(data.timetable[i].pass, mod_arr);
				if ($time == null) delete data.timetable[i].pass;
				else data.timetable[i].pass = Time.t($time).sub(pivot_t).add(pivot).toString();
			}
		}
		//Type B: cross
		else if (data.timetable[i].cross){
			//Start Time
			var $time1 = modSelect(data.timetable[i].start, mod_arr);
			var $time2 = modSelect(data.timetable[i].end, mod_arr);
			if ($time1 != null && $time2 != null){
				data.timetable[i].start = Time.t($time1).sub(pivot_t).add(pivot).toString();
				data.timetable[i].end = Time.t($time2).sub(pivot_t).add(pivot).toString();
			}else{
				data.timetable[i] = {};
			}
		}
	}

	//(6) For passing stop, remove arrive and depart
	for (var i in data.timetable){
		if (data.timetable[i].pass != null){
			delete data.timetable[i].arrive;
			delete data.timetable[i].depart;
		}
	}

	//(7) Handle "begin", "terminate" (shorten trips)
	data.beginIndex = 0;
	data.terminateIndex = data.timetable.length - 1;
	if (begin != null) if (stopOrders[begin] != null) data.beginIndex = stopOrders[begin];
	if (terminate != null) if (stopOrders[terminate] != null) data.terminateIndex = stopOrders[terminate];
	var frontCutoff = data.beginIndex;
	var backCutoff = data.timetable.length - 1 - data.terminateIndex;
	for (var i = 0; i < frontCutoff; i++) data.timetable.shift();
	for (var i = 0; i < backCutoff; i++) data.timetable.pop();

	//(8) Shorten trip if first or last entry is illegal
	var isNull = function(obj, attr){
		if (obj == null) return true;
		if (obj[attr] == null) return true;
		return false;
	}
	while (isNull(data.timetable[0], "depart") && data.timetable.length > 0){
		data.timetable.shift();
		data.beginIndex++;
	};
	while (isNull(data.timetable[data.timetable.length-1], "arrive") && data.timetable.length > 0){
		data.timetable.pop();
		data.terminateIndex--;
	};

	//(9) Remove "arrive" of first entry and "depart", "line", "upbound" of last entry
	delete data.timetable[0].arrive;
	var n = data.timetable.length - 1;
	delete data.timetable[n].depart;
	delete data.timetable[n].line;
	delete data.timetable[n].upbound;

	//(10) Begin time & terminate time - considering time shifting
	var beginTime = data.timetable[0].depart;
	var terminateTime = data.timetable[n].arrive;
	data.beginTime = Time.t(beginTime).toString();
	data.terminateTime = Time.t(terminateTime).toString();

	//(11) Update misc information
	data.beginStop = data.timetable[0].stop;
	data.beginTrack = data.timetable[0].track;
	data.terminateStop = data.timetable[n].stop;
	data.terminateTrack = data.timetable[n].track;

	//(12) Splice timetable item with empty data
	for (var i = data.timetable.length - 1; i >= 0; i--){
		if (data.timetable[i].arrive == null && data.timetable[i].depart == null && data.timetable[i].pass == null){
			if (data.timetable[i].cross == null && data.timetable[i].upbound != null){
				data.timetable[i] = {};
			}
		}
	}

	//(13) Mileage
	if (mileage != null){
		var mileage1 = mileage[data.beginStop];
		var mileage2 = mileage[data.terminateStop];
		if (mileage1 != null && mileage2 != null){
			var smaller = Math.min(mileage1, mileage2);
			var greater = Math.max(mileage1, mileage2);
			data.distance = greater - smaller;
			if (greater > 0 && smaller > 0){
				data.distance_p = greater - smaller;
				data.distance_n = 0;
			}else if (greater < 0 && smaller < 0){
				data.distance_p = 0;
				data.distance_n = greater - smaller;
			}else{
				data.distance_p = greater;
				data.distance_n = -smaller;
			}
		}
	}
	//Travel Time
	var time1 = data.timetable[0].depart;
	var time2 = data.timetable[n].arrive;
	if (time1 != null && time2 != null){
		data.travelTime = Time.t(time2).sub(Time.t(time1)).toString();
	}
	//Avg speed
	if (data.travelTime != ""){
		data.avgSpeed = (data.distance / Time.t(data.travelTime).getValue() * 3600).toFixed(2);
	}

	//(11) Return the object
	return data;
};

/**
 * Get Train Trips in a Pattern
 */

exports.getTrainTripsInAPattern = function(group, pattern, isPH){
	
	//(1) Set up data array
	var data = [];

	//(2) Select the runs list
	if (global.train_arrangements[group].patterns[pattern].runs != null){
		var runsList = global.train_arrangements[group].patterns[pattern].runs;
	}else if (global.train_arrangements[group].patterns[pattern].runs_wk != null && isPH == false){
		var runsList = global.train_arrangements[group].patterns[pattern].runs_wk;
	}else if (global.train_arrangements[group].patterns[pattern].runs_ph != null && isPH == true){
		var runsList = global.train_arrangements[group].patterns[pattern].runs_ph;
	}else{
		var runsList = [];
	}

	//(3) Intepolate the "start", "end" to separate trips --> new array
	var runsList_s = [];
	for (var i in runsList){
		//Single
		if (runsList[i].at != null){
			runsList_s.push({
				at: runsList[i].at,
				begin: runsList[i].begin,
				terminate: runsList[i].terminate,
				mod: array(runsList[i].mod),
			});
		}
		//Multiple
		if (runsList[i].start != null && runsList[i].end != null && runsList[i].interval != null){
			var interval = runsList[i].interval;
			var numberOfTrips = Math.floor((runsList[i].end).sub(runsList[i].start).div(interval, 0) + 1);
			for (var j = 0; j < numberOfTrips; j++){
				runsList_s.push({
					at: runsList[i].start.add(interval * j, 0),
					begin: runsList[i].begin,
					terminate: runsList[i].terminate,
					mod: array(runsList[i].mod),
				});
			}
		}
	}

	//(4) Push Timetable
	for (var i in runsList_s){
		var pivot = runsList_s[i].at;
		var begin = runsList_s[i].begin;
		var terminate = runsList_s[i].terminate;
		var mod = runsList_s[i].mod;
		var oneTrip = exports.getOneTrainTrip(group, pattern, pivot, isPH, begin, terminate, mod);
		data.push(oneTrip);
	}

	//(x) Return the array
	return data;
};