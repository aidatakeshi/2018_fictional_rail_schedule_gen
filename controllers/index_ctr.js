/**
 * Require Modules
 */
var func = require("../functions.js");
var Time = require("../Time.js");

exports.render = function(req, res){
	var data = {
		//patterns
		patterns: function(){
			var patterns = {};
			for (var i in global.timetable){
				patterns[i] = [];
				for (var j in global.timetable[i]){
					patterns[i].push(j);
				}
			}
			return patterns;
		}(),
		//crosses
		crossovers: global.crossoverSummary.crosses,
		//stations
		stations: function(){
			var arr = [];
			for (var i in global.stationSummary.stations){
				var station = global.stationSummary.stations[i];
				var name = global.stationSummary.byStation[station].name;
				var tracks = global.stationSummary.byStation[station].tracks;
				arr.push({
					stop: station,
					name: name,
					tracks: tracks,
					directions: function(){
						var arr = [];
						for (var d in global.stationSummary.byStation[station].byDirection){
							if (d.split("/")[0] != "undefined"){
								var $d = d.split("/");
								var text = global.lines[$d[0]].name + " " + $d[0] + " / " + ($d[1] == "u" ? "UP" : "DN");
								arr.push({direction: d, text: text});
							}
						}
						return arr;
					}(),
				});
			}
			return arr;
		}(),
	};
	res.render('index', data);
};