/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");

/**
 * Data format:
 * data.showArrivals["101"] = true,
 * data.patterns["AE01"].label,
 * data.patterns["AE01"].remarks,
 * data.patterns["AE01"].stops[i].code,
 * data.patterns["AE01"].stops[i].name,
 * data.patterns["AE01"].trips[i], //Directly copy the trip entry object
 * data.train_types, //Directly copy global.train_types
 */

exports.render = function(req, res){
	//REQ params
	var group = req.params.group;
	var isPH = req.params.isPH;
	//Set up data
	var data = {
		group: group,
		isPH: isPH,
		//Show arrivals
		showArrivals: function(){
			var obj = {};
			for (var i in global.train_arrangements[group].showArrivals){
				if ( global.train_arrangements[group] == null) console.log(group);
				obj[global.train_arrangements[group].showArrivals[i]] = true;
			}
			return obj;
		}(),
		//Patterns
		patterns: function(){
			var obj = {};
			for (var pattern in global.train_arrangements[group].patterns){
				obj[pattern] = {
					//Label
					label: global.train_patterns[pattern].label,
					//Remarks
					remarks:global.train_patterns[pattern].remarks,
					//Stops
					stops: function(pattern){
						var arr = [];
						for (var i in global.train_patterns[pattern].template){
							var stop = global.train_patterns[pattern].template[i].stop;
							//Stop
							if (stop != null){
								arr.push({code: stop, name: global.stations[stop].name});
							}
							//Not stop
							else{
								arr.push({code: "", name: ""});
							}
						}
						return arr;
					}(pattern),
					//Trips
					trips: global.timetable[group][pattern][isPH],
				};
			}
			return obj;
		}(),
		//Train Types
		train_types: global.train_types,
		//Summary
		summary: global.runSummary[group][isPH],
	};
	//res.send(JSON.stringify(data));
	res.render('pattern', data);
};

exports.renderJSON = function(req, res){
	//REQ params
	var group = req.params.group;
	var data = global.timetable[group];
	res.send(JSON.stringify(data));
};