/**
 * Require Modules
 */
var func = require("./functions.js");
var Time = require("./Time.js");

/**
 * Global variables
 */

var runs;
var arriveTime;
var departTime;
var returnableStations;

/**
 * Default functions
 */

var defaultFn = {
	tripNo: function(pattern, pivot, tripOrder, runOrder, upbound, isPH){ //Trip Number
		return func.ten(pivot.getHours2()) + func.ten((2 * runOrder) + ((upbound) ? 1 : 2));
	},
	runNo: function(runOrder, upbound, isPH){ //Run Number
		return func.ten((2 * runOrder) + ((upbound) ? 1 : 2));
	},
	refNo: function(pattern, pivot, tripOrder, isPH){
		return "";
	},
	runType: function(runOrder, isPH){
		return "-";
	}
};

/**
 * Assign Run Numbers
 */

exports.assignRunNumbers = function (group, isPH){
	var dayType = isPH ? "ph" : "wk";
	//(1) Prepare returnableStations and set up default values
	returnableStations = global.train_arrangements[group].returnableStations;
	for (var i in returnableStations){
		if (returnableStations[i].turnoverTime == null) returnableStations[i].turnoverTime = 2;
		if (returnableStations[i].samePlatform == null) returnableStations[i].samePlatform = true;
		if (returnableStations[i].capacity == null || returnableStations[i].samePlatform == true) returnableStations[i].capacity = 1;
	}
	//(2) Prepare runs list
	runs = [];
	for (var pattern in global.timetable[group]){
		for (var j in global.timetable[group][pattern][dayType]){
			var myTrip = global.timetable[group][pattern][dayType][j];
			var obj = {};
			//pattern, index, runNoOrder, upbound
			obj.pattern = pattern;
			obj.index = parseInt(j);
			obj.runNoOrder = -1;
			obj.upbound = myTrip.upbound;
			//pivot, nis
			obj.pivot = myTrip.pivot;
			obj.nis = (myTrip.trainType == "#");
			//beginStop, terminateStop
			obj.beginStop = myTrip.beginStop;
			obj.terminateStop = myTrip.terminateStop;
			//beginTrack, beginPropagate
			var propagate = (returnableStations[obj.beginStop] != null) //Only at returnable stations
				&& (global.stations[obj.beginStop].isDepot != true); //Not for depots
			if (propagate){
				obj.beginTrack = (returnableStations[obj.beginStop].samePlatform) ? myTrip.beginTrack : "#";
				obj.beginPropagate = true;
			}else{
				obj.beginTrack = "";
				obj.beginPropagate = false;
			}
			//terminateTrack, terminatePropagate
			var propagate = (returnableStations[obj.terminateStop]) //Only at returnable stations
				&& (global.stations[obj.terminateStop].isDepot != true); //Not for depots
			if (propagate != null){
				obj.terminateTrack = (returnableStations[obj.terminateStop].samePlatform) ? myTrip.terminateTrack : "#";
				obj.terminatePropagate = true;
			}else{
				obj.terminateTrack = "";
				obj.terminatePropagate = false;
			}
			//beginTime, terminateTime
			obj.beginTime = Time.t(myTrip.beginTime).getValue();
			obj.terminateTime = Time.t(myTrip.terminateTime).getValue();
			if (obj.beginTime < global.dayTurnover){
				obj.beginTime += 86400;
				obj.terminateTime += 86400;
			}else if (obj.terminateTime < global.dayTurnover){
				obj.terminateTime += 86400;
			}
			//Consider time shifting
			if (global.train_arrangements[group].patterns[pattern].timeShifting != null){
				var ts = global.train_arrangements[group].patterns[pattern].timeShifting * 60;
				obj.beginTime += ts;
				obj.terminateTime += ts;
			}
			//Push to list
			runs.push(obj);
		}
	}
	//(3) Prepare arriveTime and departTime lists
	//New lists
	arriveTime = {};
	departTime = {};
	for (var i in returnableStations){
		arriveTime[i] = {};
		departTime[i] = {};
	}
	//Add runs into the lists
	for (var i in runs){
		var beginStop = runs[i].beginStop;
		var beginTrack = runs[i].beginTrack;
		var terminateStop = runs[i].terminateStop;
		var terminateTrack = runs[i].terminateTrack;
		if (returnableStations[beginStop] != null){
			if (departTime[beginStop][beginTrack] == null) departTime[beginStop][beginTrack] = [];
			departTime[beginStop][beginTrack].push({
				i: parseInt(i),
				time: runs[i].beginTime,
				pattern: runs[i].pattern,
				index: runs[i].index,
			});
		}
		if (returnableStations[terminateStop] != null){
			if (arriveTime[terminateStop][terminateTrack] == null) arriveTime[terminateStop][terminateTrack] = [];
			arriveTime[terminateStop][terminateTrack].push({
				i: parseInt(i),
				time: runs[i].terminateTime,
				pattern: runs[i].pattern,
				index: runs[i].index,
			});
		}
	}
	//Sort lists
	var compareFn = function(a, b) {
		if (a.time < b.time) return -1;
		else if (a.time > b.time) return 1;
		else return 0;
	}
	for (var i in departTime){
		for (var j in departTime[i]){
			departTime[i][j].sort(compareFn);
		}
	}
	for (var i in arriveTime){
		for (var j in arriveTime[i]){
			arriveTime[i][j].sort(compareFn);
		}
	}
	//(4) Assign run numbers
	var runNoCounter = 0;
	for (var i in runs){
		if (runs[i].runNoOrder == -1){
			runs[i].runNoOrder = runNoCounter;
			//Propagate
			propagateUp(runs[i], runNoCounter);
			propagateDown(runs[i], runNoCounter);
			//Increment counter
			runNoCounter++;
		}
	}
	//(5) Output the run numbers and related infromation to the global variable
	for (var i in runs){
		var pattern = runs[i].pattern;
		var index = runs[i].index;
		var runOrder = runs[i].runNoOrder;
		var upbound = runs[i].upbound;
		var nis = runs[i].nis;
		var pivot = Time.hm(runs[i].pivot);
		//Run No
		var runNoFn = (global.train_arrangements[group].runNo != null) ? global.train_arrangements[group].runNo : defaultFn.runNo;
		global.timetable[group][pattern][dayType][index].runNo = runNoFn(runOrder, upbound, isPH);
		global.timetable[group][pattern][dayType][index].runNoPair = runNoFn(runOrder, true, isPH)+"|"+runNoFn(runOrder, false, isPH);
		//Run Type
		var runTypeFn = (global.train_arrangements[group].runType != null) ? global.train_arrangements[group].runType : defaultFn.runType;
		global.timetable[group][pattern][dayType][index].runType = runTypeFn(runOrder, isPH);
		//Only for in service
		if (!nis){
			//Trip No
			var tripNoFn = (global.train_arrangements[group].tripNo != null) ? global.train_arrangements[group].tripNo : defaultFn.tripNo;
			global.timetable[group][pattern][dayType][index].tripNo = tripNoFn(pattern, pivot, index, runOrder, upbound, isPH);
			//Ref No
			var refNoFn = (global.train_arrangements[group].refNo != null) ? global.train_arrangements[group].refNo : defaultFn.refNo;
			global.timetable[group][pattern][dayType][index].refNo = refNoFn(pattern, pivot, index, isPH);
		}
	}
};

/**
 * Propagate run number
 */

var propagateUp = function(myRun, runNoOrder){
	//Only when propagate is allowed
	if (myRun.beginPropagate){
		var departTime = myRun.beginTime;
		var stop = myRun.beginStop;
		var track = myRun.beginTrack;
		var turnoverTime = returnableStations[stop].turnoverTime * 60;
		var capacity = returnableStations[stop].capacity;
		//Find prev arrive time
		var prev = prevArriveWithoutRunNo(stop, track, departTime - turnoverTime);
		if (prev != null){
			var arriveTime = runs[prev.i].terminateTime;
			//Check if within global.maximumDwell
			if (departTime - arriveTime <= global.maximumDwell){
				//Check number of depart trains between
				var noOfTrains = noOfTrainsDepartBetween(stop, track, departTime, arriveTime + turnoverTime);
				if (noOfTrains < capacity){
					runs[prev.i].runNoOrder = runNoOrder;
					//Propagate
					propagateUp(runs[prev.i], runNoOrder);
				}
			}
		}
	}
};

var propagateDown = function(myRun, runNoOrder){
	//Only when propagate is allowed
	if (myRun.terminatePropagate){
		var arriveTime = myRun.terminateTime;
		var stop = myRun.terminateStop;
		var track = myRun.terminateTrack;
		var turnoverTime = returnableStations[stop].turnoverTime * 60;
		var capacity = returnableStations[stop].capacity;
		//Find next depart time
		var next = nextDepartWithoutRunNo(stop, track, arriveTime + turnoverTime);
		if (next != null){
			var departTime = runs[next.i].beginTime;
			//Check if within global.maximumDwell
			if (departTime - arriveTime <= global.maximumDwell){
				//Check number of arrive trains between
				var noOfTrains = noOfTrainsArriveBetween(stop, track, arriveTime, departTime - turnoverTime);
				if (noOfTrains < capacity){
					runs[next.i].runNoOrder = runNoOrder;
					//Propagate
					propagateDown(runs[next.i], runNoOrder);
				}
			}
		}
	}
};

/**
 * Generate Run No Summary
 */

exports.runNoSummary = function(group, isPH){
	var dayType = isPH ? "ph" : "wk";
	//Prepare variables
	var data = { runNos: [], runTypes: [], byRunNo: {}, byRunType: {}, };
	//For each pattern
	for (var i in global.timetable[group]){
		//For each trip
		for (var j in global.timetable[group][i][dayType]){
			var myTrip = global.timetable[group][i][dayType][j];
			var myRunNo = myTrip.runNoPair;
			var myRunType = myTrip.runType;
			var isNIS = (myTrip.trainType == "#");
			//Get beginTime & terminateTime in seconds format
			var beginTime = Time.t(myTrip.beginTime).getValue();
			var terminateTime = Time.t(myTrip.terminateTime).getValue();
			if (beginTime < global.dayTurnover){
				beginTime += 86400;
				terminateTime += 86400;
			}else if (terminateTime < global.dayTurnover){
				terminateTime += 86400;
			}
			//For run no, create new object if null
			if (data.byRunNo[myRunNo] == null){
				data.runNos.push(myRunNo);
				data.byRunNo[myRunNo] = {
					runType: myRunType,
					beginStop: "", beginTrack: "", terminateStop: "", terminateTrack: "",
					beginStopName: "", terminateStopName: "",
					beginTime: global.dayTurnover + 86400, terminateTime: global.dayTurnover, //dummy time
					noOfTrips: 0, distance: 0, distance_p: 0, distance_n: 0, //revenue trips only
				};
			}
			//For run type, create new object if null
			if (data.byRunType[myRunType] == null){
				data.runTypes.push(myRunType);
				data.byRunType[myRunType] = {
					noOfTrips: 0, distance: 0, distance_p: 0, distance_n: 0, //revenue trips only
				};
			}
			//Begin
			if (beginTime < data.byRunNo[myRunNo].beginTime){
				if (global.stations[myTrip.beginStop] == null) console.log("Stop", myTrip.beginStop, "not found");
				data.byRunNo[myRunNo].beginTime = beginTime;
				data.byRunNo[myRunNo].beginStop = myTrip.beginStop;
				data.byRunNo[myRunNo].beginStopName = global.stations[myTrip.beginStop].name;
				data.byRunNo[myRunNo].beginTrack = myTrip.beginTrack;
			}
			//Terminate
			if (terminateTime > data.byRunNo[myRunNo].terminateTime){
				if (global.stations[myTrip.terminateStop] == null) console.log("Stop", myTrip.terminateStop, "not found");
				data.byRunNo[myRunNo].terminateTime = terminateTime;
				data.byRunNo[myRunNo].terminateStop = myTrip.terminateStop;
				data.byRunNo[myRunNo].terminateStopName = global.stations[myTrip.terminateStop].name;
				data.byRunNo[myRunNo].terminateTrack = myTrip.terminateTrack;
			}
			//For revenue service only
			if (!isNIS){
				data.byRunNo[myRunNo].noOfTrips += 1;
				data.byRunNo[myRunNo].distance += myTrip.distance;
				data.byRunNo[myRunNo].distance_p += myTrip.distance_p;
				data.byRunNo[myRunNo].distance_n += myTrip.distance_n;
				data.byRunType[myRunType].noOfTrips += 1;
				data.byRunType[myRunType].distance += myTrip.distance;
				data.byRunType[myRunType].distance_p += myTrip.distance_p;
				data.byRunType[myRunType].distance_n += myTrip.distance_n;
			}
		}
	}
	//Change time format to string
	for (var myRunNo in data.byRunNo){
		data.byRunNo[myRunNo].beginTime = Time.t(data.byRunNo[myRunNo].beginTime).toString();
		data.byRunNo[myRunNo].terminateTime = Time.t(data.byRunNo[myRunNo].terminateTime).toString();
	}
	//Sort lists
	data.runNos.sort();
	data.runTypes.sort();
	//Put back to global variable
	global.runSummary[group][dayType] = data;
};

/**
 * Useful functions
 */

var nextDepartWithoutRunNo = function(stop, track, time, excludingTime){ //time uses numerical value
	if (excludingTime != true){
		if (departTime[stop][track] != null){
			for (var j = 0; j < departTime[stop][track].length; j++){
				if (departTime[stop][track][j].time >= time){
					var index = departTime[stop][track][j].i;
					if (runs[index].runNoOrder == -1){
						return departTime[stop][track][j];
						break;
					}
				}
			}
		}
	}
};

var prevArriveWithoutRunNo = function(stop, track, time, excludingTime){ //time uses numerical value
	if (excludingTime != true){
		if (arriveTime[stop][track] != null){
			for (var j = arriveTime[stop][track].length - 1; j >= 0; j--){
				if (arriveTime[stop][track][j].time <= time){
					var index = arriveTime[stop][track][j].i;
					if (runs[index].runNoOrder == -1){
						return arriveTime[stop][track][j];
						break;
					}
				}
			}
		}
	}
};

var noOfTrainsDepartBetween = function(stop, track, time1, time2){ //time1 < time2, use numerical value
	var counter = 0;
	if (time1 > time2) time2 = [time1, time1 = time2][0]; //swap
	for (var i = 0; i < departTime[stop][track].length; i++){
		var time = departTime[stop][track][i].time;
		if (time > time1 && time2 > time) counter++;
	}
	return counter;
};

var noOfTrainsArriveBetween = function(stop, track, time1, time2){ //time1 < time2, use numerical value
	var counter = 0;
	if (time1 > time2) time2 = [time1, time1 = time2][0]; //swap
	for (var i = 0; i < arriveTime[stop][track].length; i++){
		var time = arriveTime[stop][track][i].time;
		if (time > time1 && time2 > time) counter++;
	}
	return counter;
};