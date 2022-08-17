/**
 * Require Modules
 */
var func = require("./functions.js");
var Time = require("./Time.js");

/**
 * Station Summary
 * global.stationSummary.stations
 * global.stationSummary.byStation[stop].tracks
 * global.stationSummary.byStation[stop].byTrack[track][dayType]
 * global.depotSummary.depots
 * global.depotSummary.byDepot[depot].groups
 * global.depotSummary.byDepot[depot].byGroup[group][dayType].AMOut
 * global.depotSummary.byDepot[depot].byGroup[group][dayType].AMIn
 * global.depotSummary.byDepot[depot].byGroup[group][dayType].PMOut
 * global.depotSummary.byDepot[depot].byGroup[group][dayType].PMIn
 */

exports.summarize = function(){
	//Set up object
	global.stationSummary = {
		stations: [],
		byStation: {},
	};
	global.depotSummary = {
		depots: [],
		byDepot: {},
	};
	//For each group
	for (var myGroup in global.timetable){
		//For each pattern
		for (var myPattern in global.timetable[myGroup]){
			//For each dayType
			for (var dayType in global.timetable[myGroup][myPattern]){
				//For each trip
				for (var i in global.timetable[myGroup][myPattern][dayType]){
					var myTrip = global.timetable[myGroup][myPattern][dayType][i];
					//For each timetable item
					for (var j in myTrip.timetable){
						if (myTrip.timetable[j].stop != null){
							var myEntry = myTrip.timetable[j];
							var stop = myEntry.stop;
							//In seconds format
							var arrive = -1;
							var depart = -1;
							var pass = -1;
							if (myEntry.arrive != null) arrive = Time.t(myEntry.arrive).getValue();
							if (myEntry.depart != null) depart = Time.t(myEntry.depart).getValue();
							if (myEntry.pass != null) pass = Time.t(myEntry.pass).getValue();
							if (arrive != -1 && arrive < global.dayTurnover){
								arrive += 86400;
								if (depart != -1) depart += 86400;
							}else if (depart != -1 && depart < global.dayTurnover){
								depart += 86400;
							}
							if (pass != -1 && pass < global.dayTurnover){
								pass += 86400;
							}
							//(1) If it is a depot
							if (global.stations[stop].isDepot){
								var depot = stop;
								//Create an object if missing
								if (global.depotSummary.byDepot[depot] == null){
									global.depotSummary.depots.push(depot);
									global.depotSummary.byDepot[depot] = {
										groups: [],
										byGroup: {},
									}
								}
								//Create an object if missing
								if (global.depotSummary.byDepot[depot].byGroup[myGroup] == null){
									global.depotSummary.byDepot[depot].groups.push(myGroup);
									global.depotSummary.byDepot[depot].byGroup[myGroup] = {
										wk: {AMOut: 0, AMIn: 0, PMOut: 0, PMIn: 0},
										ph: {AMOut: 0, AMIn: 0, PMOut: 0, PMIn: 0},
									}
								}
								//Increment counter
								if (myEntry.depart != null){
									if (depart < 3600 * 12){
										global.depotSummary.byDepot[depot].byGroup[myGroup][dayType].AMOut++;
									}else{
										global.depotSummary.byDepot[depot].byGroup[myGroup][dayType].PMOut++;
									}
								}
								if (myEntry.arrive != null){
									if (arrive < 3600 * 12){
										global.depotSummary.byDepot[depot].byGroup[myGroup][dayType].AMIn++;
									}else{
										global.depotSummary.byDepot[depot].byGroup[myGroup][dayType].PMIn++;
									}
								}
							}
							//(2) If it is not a depot
							else{
								var track = myEntry.track;
								//Prepare object
								var null2Space = function(str){
									if (str == null) return "";
									else return str;
								}
								var obj = {
									arrive: arrive,
									depart: depart,
									pass: pass,
									track: track,
									upbound: myTrip.upbound,
									beginStop: myTrip.beginStop,
									beginStopName: global.stations[myTrip.beginStop].name,
									beginStopNameShort: null2Space(global.stations[myTrip.beginStop].name_short),
									terminateStop: myTrip.terminateStop,
									terminateStopName: global.stations[myTrip.terminateStop].name,
									terminateStopNameShort: null2Space(global.stations[myTrip.terminateStop].name_short),
									tripNo: myTrip.tripNo,
									runNo: myTrip.runNo,
									trainType: myTrip.trainType,
									group: myGroup,
								};
								//If not in stationSummary, create an object
								if (global.stationSummary.byStation[stop] == null){
									global.stationSummary.stations.push(stop);
									global.stationSummary.byStation[stop] = {
										name: global.stations[stop].name,
										byTrack: {},
										tracks: [],
										byDirection: {},
										directions: [],
									}
								}
								//By Track...
								if (global.stationSummary.byStation[stop].byTrack[track] == null){
									global.stationSummary.byStation[stop].tracks.push(track);
									global.stationSummary.byStation[stop].byTrack[track] = {wk: [],ph: []}
								}
								global.stationSummary.byStation[stop].byTrack[track][dayType].push(obj);
								//By Direction
								if (myTrip.trainType != "#" && depart != -1){ //In service & Depart only
									var line = myEntry.line;
									var direction = line + "/" + (myTrip.upbound ? "u" : "d");
									if (global.stationSummary.byStation[stop].byDirection[direction] == null){
										global.stationSummary.byStation[stop].byDirection[direction] = {wk: [],ph: []}
										global.stationSummary.byStation[stop].directions.push(direction);
									}
									global.stationSummary.byStation[stop].byDirection[direction][dayType].push(obj);
								}
								//--
							}
						}
					}
				}
			}
		}
	}
	var arrangeList = function(_list){
		var list = JSON.parse(JSON.stringify(_list));
		list.sort(function(a,b){
			/*
			Pass only --> Take pass
			Arrive only --> Take arrive
			Depart only --> Take depart
			Arrive & Depart --> Take average
			*/
			if (a.pass != -1) var $a = a.pass;
			else if (a.depart != -1) var $a = a.depart;
			else if (a.arrive != -1) var $a = a.arrive;
			else var $a = 0;
			if (b.pass != -1) var $b = b.pass;
			else if (b.depart != -1) var $b = b.depart;
			else if (b.arrive != -1) var $b = b.arrive;
			else var $b = 0;
			var a_priority = (a.trainType != "#") ? global.train_types[a.trainType].priority : -1;
			var b_priority = (b.trainType != "#") ? global.train_types[b.trainType].priority : -1;
			if ($a < $b) return -1;
			if ($a > $b) return 1;
			if (a_priority > b_priority) return -1;
			if (a_priority < b_priority) return 1;
			return 0;
		});
		//Change all time into string formats
		for (var i in list){
			if (list[i].pass == -1){
				list[i].pass = "";
			}else{
				list[i].pass = Time.t(list[i].pass).toString();
			}
			if (list[i].arrive == -1){
				list[i].arrive = "";
			}else{
				list[i].arrive = Time.t(list[i].arrive).toString();
			}
			if (list[i].depart == -1){
				list[i].depart = "";
			}else{
				var myTime = Time.t(list[i].depart);
				list[i].depart_h = myTime.getHours2();
				list[i].depart_m = myTime.getMinutes();
				list[i].depart_s = myTime.getSeconds();
				list[i].depart = myTime.toString();
			}
		}
		//Return list
		return list;
	}
	//For each station
	for (var stop in global.stationSummary.byStation){
		//For each track in byTrack
		for (var track in global.stationSummary.byStation[stop].byTrack){
			//For each day type
			for (var dayType in global.stationSummary.byStation[stop].byTrack[track]){
				//Arrange list
				global.stationSummary.byStation[stop].byTrack[track][dayType] = arrangeList(global.stationSummary.byStation[stop].byTrack[track][dayType]);
			}
		}
		//For each direction in byDirection
		for (var direction in global.stationSummary.byStation[stop].byDirection){
			//For each day type
			for (var dayType in global.stationSummary.byStation[stop].byDirection[direction]){
				//Arrange list
				global.stationSummary.byStation[stop].byDirection[direction][dayType] = arrangeList(global.stationSummary.byStation[stop].byDirection[direction][dayType]);
			}
		}
		//Sort the tracks list
		global.stationSummary.byStation[stop].tracks.sort(function(a, b){
			if (a.length == 1) a = "0" + a;
			if (b.length == 1) b = "0" + b;
			if (a < b) return -1;
			if (a > b) return 1;
			return 0;
		});
		global.stationSummary.byStation[stop].directions.sort();
	};
	//Sort the stations list
	global.stationSummary.stations.sort();
	//For each depot
	for (var depot in global.depotSummary.byDepot){
		global.depotSummary.byDepot[depot].groups.sort();
	}
	//Sort the depots list
	global.depotSummary.depots.sort();
	//
};