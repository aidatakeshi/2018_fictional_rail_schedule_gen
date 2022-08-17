/**
 * Require Modules
 */
var func = require("./functions.js");
var Time = require("./Time.js");

/**
 * Crossover Track Summary
 */

exports.summarize = function(){
	//Set up object
	global.crossoverSummary = {
		crosses: [],
		byCross: {},
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
						if (myTrip.timetable[j].cross != null){
							var myEntry = myTrip.timetable[j];
							var cross = myEntry.cross;
							//In seconds format
							var start = Time.t(myEntry.start).getValue();
							var end = Time.t(myEntry.end).getValue();
							if (start < global.dayTurnover){
								start += 86400; end += 86400;
							}else if (end < global.dayTurnover){
								end += 86400;
							}
							//If not in crossoverSummary, create an object
							if (global.crossoverSummary.byCross[cross] == null){
								global.crossoverSummary.crosses.push(cross);
								global.crossoverSummary.byCross[cross] = {
									wk: [],
									ph: [],
								}
							}
							//Add into the list
							var obj = {
								start: start,
								end: end,
								beginStop: myTrip.beginStop,
								beginStopName: global.stations[myTrip.beginStop].name,
								terminateStop: myTrip.terminateStop,
								terminateStopName: global.stations[myTrip.terminateStop].name,
								upbound: myTrip.upbound,
								tripNo: myTrip.tripNo,
								runNo: myTrip.runNo,
								trainType: myTrip.trainType,
							};
							global.crossoverSummary.byCross[cross][dayType].push(obj);
							//
						}
					}
				}
			}
		}
	}
	//For each crossover
	for (var cross in global.crossoverSummary.byCross){
		//For each dayType
		for (var dayType in global.crossoverSummary.byCross[cross]){
			//Sort lists
			global.crossoverSummary.byCross[cross][dayType].sort(function(a, b) {
				if (a.start < b.start) return -1;
				else if (a.start > b.start) return 1;
				if (a.end < b.end) return -1;
				else if (a.end > b.end) return 1;
				else return 0;
			});
			//Calculate time gap
			for (var i in global.crossoverSummary.byCross[cross][dayType]){
				if (i == 0){
					global.crossoverSummary.byCross[cross][dayType][i].timeGap = "-";
				}else{
					var gap = global.crossoverSummary.byCross[cross][dayType][i].start - global.crossoverSummary.byCross[cross][dayType][i-1].end;
					if (gap >= 0){
						global.crossoverSummary.byCross[cross][dayType][i].timeGap = Math.floor(gap / 60) + "m" + func.ten(gap % 60) + "s";
					}else{
						global.crossoverSummary.byCross[cross][dayType][i].timeGap = "Overlap";
					}
				}
			}
			//Change all time into string formats
			for (var i in global.crossoverSummary.byCross[cross][dayType]){
				global.crossoverSummary.byCross[cross][dayType][i].start = Time.t(global.crossoverSummary.byCross[cross][dayType][i].start).toString();
				global.crossoverSummary.byCross[cross][dayType][i].end = Time.t(global.crossoverSummary.byCross[cross][dayType][i].end).toString();
			}
		}
	}
	//Sort the crossovers list
	global.crossoverSummary.crosses.sort();
	//
};