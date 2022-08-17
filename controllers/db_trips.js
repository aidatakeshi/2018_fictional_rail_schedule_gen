//Step 1
exports.db_update = function(req, res){
	if (global.db != null){
		res.send("db_trips");
		//Clear up collections
		var collectionsToBeRemoved = 2;
		var collectionRemovedFunction = function(err){
			if (err) throw err;
			collectionsToBeRemoved--;
			if (collectionsToBeRemoved <= 0){
				initTrips();
			}
		}
		global.db.collection("trips_wk").remove({}, collectionRemovedFunction);
		global.db.collection("trips_ph").remove({}, collectionRemovedFunction);
	}else{
		res.send("Failed");
	}
};

//Step 2

var patterns;

var initTrips = function(){
	console.log("Collection: trip_wk, trip_ph");
	console.log(" - old data removed");
	//Reset
	patterns = [];
	//For each pattern
	for (var a in global.timetable){
		for (var b in global.timetable[a]){
			patterns.push({a: a, b: b, c: "wk"});
			patterns.push({a: a, b: b, c: "ph"});
		}
	}
	//Add collection
	addPatternToCollection(0);
};

//Step 3

var addPatternToCollection = function(n){
	if (n < patterns.length){
		var group = patterns[n].a;
		var pattern = patterns[n].b;
		var dayType = patterns[n].c;
		var myObj = [];
		for (var j in global.timetable[group][pattern][dayType]){
			var $ = global.timetable[group][pattern][dayType][j]
			if (isEntryValid($)){
				myObj.push(convertToDocument($, group, pattern, dayType));
			}
		}
		//Add Data
		if (myObj.length > 0){
			global.db.collection("trips_" + dayType).insertMany(myObj, function(err, res) {
				if (err) throw err;
				console.log(" - " + pattern + " / " + dayType + " : " + res.insertedCount + " trip(s) inserted");
				addPatternToCollection(n+1);
			});
		}else{
			addPatternToCollection(n+1);
		}
	}else{
		console.log(" - all data inserted");
	}
};

//Check if entry is valid
var isEntryValid = function($){
	if ($.trainType == "#") return false;
	if ($.trainType == "") return false;
	return true;
};

//Convert entry to document format
var convertToDocument = function($, group, pattern, dayType){
	initStopIndexInLine();
	//Obj
	return {
		tripNo: $.tripNo,
		refNo: $.refNo,
		group: group,
		pattern: pattern,
		refTime: $.refTime,
		/*dayType: dayType, //##
		pivot: $.pivot, //##*/
		trainType: $.trainType,
		upbound: $.upbound,
		beginStop: $.beginStop,
		terminateStop: $.terminateStop,
		distance: $.distance,
		distance_mugikyu: $.distance_p,
		consist: $.consist,
		otherInfo: function($$){
			if ($$ == null) return {};
			return $$;
		}($.otherInfo),
		timetable: function($$){
			var arr = [];
			var line;
			var linePrev;
			var upbound;
			for (var i = 0 ; i < $$.length; i++){
				if ($$[i].arrive != null || $$[i].depart != null || $$[i].pass != null){
					if ($$[i].line != null){
						linePrev = line;
						upboundPrev = upbound;
						line = $$[i].line;
					}
					if ($$[i].upbound != null) upbound  = $$[i].upbound;
					arr.push(function($$$, i){
						var obj = {
							stop: $$$.stop,
							track: $$$.track,
							linePrev: "",
							line: line,
							stopIndexInLinePrev: "",
							stopIndexInLine: getStopIndexInLine(line, $$$.stop),
							upboundPrev: "",
							upbound: upbound,
						};
						if (i == 0 || line == linePrev){
							delete obj.linePrev;
							delete obj.stopIndexInLinePrev;
							delete obj.upboundPrev;
						}else{
							obj.linePrev = linePrev;
							obj.stopIndexInLinePrev = getStopIndexInLine(linePrev, $$$.stop);
							obj.upboundPrev = upboundPrev;
						}
						if (obj.stopIndexInLinePrev == null){
							delete obj.stopIndexInLinePrev;
							delete obj.linePrev;
							delete obj.upboundPrev;
						}
						if ($$$.arrive){
							obj.arrive = $hmm($$$.arrive);
							obj.arrive_ss = $ss($$$.arrive);
							if (global.train_arrangements[group].patterns[pattern].alightOnly != null){
								if (global.train_arrangements[group].patterns[pattern].alightOnly.indexOf($$$.stop) != -1) obj.alightOnly = true;
							}
						}
						if ($$$.depart){
							obj.depart = $hmm($$$.depart);
							obj.depart_ss = $ss($$$.depart);
							if (global.train_arrangements[group].patterns[pattern].boardOnly != null){
								if (global.train_arrangements[group].patterns[pattern].boardOnly.indexOf($$$.stop) != -1) obj.boardOnly = true;
							}
						}
						if ($$$.pass){
							obj.pass = $hmm($$$.pass);
							obj.pass_ss = $ss($$$.pass);
						}
						if (obj.stopIndexInLine == null) delete obj.stopIndexInLine;
						return obj;
					}($$[i], i));
				}
			}
			return arr;
		}($.timetable),
	};
};

//Convert h:mm(ss) = h:mm
var $hmm = function(str){
	return str.slice(0, -4);
}

//Convert h:mm(ss) to plain seconds, +86400 for before 3am
var $ss = function(str){
	var s = str.split("(").join(":").split(")").join("").split(":");
	var num = parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
	if (num < 3600 * 3) num += 86400;
	return num;
}

//Stop index in line
var stopIndexInLine;
var initStopIndexInLine = function(){
	stopIndexInLine = {};
	for (var myLine in global.lines){
		stopIndexInLine[myLine] = {};
		for (var i in global.lines[myLine].stations){
			var id = global.lines[myLine].stations[i].id;
			stopIndexInLine[myLine][id] = i;
		}
	}
}

var getStopIndexInLine = function(line, stop){
	if (stopIndexInLine[line] != null){
		if (stopIndexInLine[line][stop] != null){
			return parseInt(stopIndexInLine[line][stop]);
		}
	}
};