exports.db_update = function(req, res){

	if (global.db != null){
		//Clear original collection
		global.db.collection("stations").remove({}, function(err) {
			if (err) throw err;
			//Prepare Data
			var myObj = [];
			for (var i in global.stations){
				var $ = global.stations[i];
				if ($.isDepot != true){
					myObj.push(convertToDocument(i,$));
				}
			}
			//Add Data
			global.db.collection("stations").insertMany(myObj, function(err, res) {
				if (err) throw err;
				console.log("Collection: stations");
				console.log("No of documents inserted: " + res.insertedCount);
			});
		});
		res.send("db_stations");
	}
	else{
		res.send("Failed");
	}

};

var convertToDocument = function(i, $){
	//Tracks
	var tracks = function(){
		//Default: 2 tracks
		if ($.tracks == null){
			return ["1","2"];
		}
		//Number
		else if (!isNaN($.tracks)){
			var arr = [];
			for (var i = 1; i <= $.tracks; i++){
				arr.push(i+"");
			}
			return arr;
		}
		//Array
		else{
			return $.tracks;
		}
	}();
	//Transfer
	var transfer = function(){
		var obj = {};
		var addToObj = function(a,b,time){
			if (obj[a] == null) obj[a] = {};
			obj[a][b] = time;
		}
		var removeAtObj = function(a,b){
			if (obj[a] != null) delete obj[a][b];
		}
		//defaultTransferTime
		if ($.defaultTransferTime != null){
			for (var i in tracks){for (var j in tracks){
				if (tracks[i] != tracks[j]) addToObj(tracks[i], tracks[j], $.defaultTransferTime);
			}}
		}
		//transferOnSamePlatform
		if ($.transferOnSamePlatform != null){
			for (var i in $.transferOnSamePlatform){
				addToObj($.transferOnSamePlatform[i], $.transferOnSamePlatform[i], 2); //To prevent from boarding the same train
			}
		}
		//transfer
		if ($.transfer != null){
			for (var i in $.transfer){
				var item = $.transfer[i];
				//between, and
				if (item.between){
					for (var i in item.between){
						for (var j in item.and){
							if (item.excluded){
								removeAtObj(item.between[i], item.and[j]);
								removeAtObj(item.and[j], item.between[i]);
							}else if (item.transferTime != null){
								addToObj(item.between[i], item.and[j], item.transferTime);
								addToObj(item.and[j], item.between[i], item.transferTime);
							}
						}
					}
				}
				//from, to
				if (item.from){
					for (var i in item.from){
						for (var j in item.to){
							if (item.excluded){
								removeAtObj(item.from[i], item.to[j]);
							}else if (item.transferTime != null){
								addToObj(item.from[i], item.to[j], item.transferTime);
							}
						}
					}
				}
				//
			}
		}
		//Return
		return obj;
	}();
	//Return Object
	return {
		id: i,
		code: $.code.split("/").join(""),
		code1: $.code.split("/")[0], code2: $.code.split("/")[1],
		stationCodeIcon: global.stationCodeIcons[$.stationCodeIcon],
		name: {
			j: $.name, e: $.name_eng,
			c: $.name, k: $.name_eng, //Temporary
		},
		name_short: {
			j: ($.name_short != null) ? $.name_short : $.name,
			e: ($.name_eng_short != null) ? $.name_eng_short : "?",
			c: ($.name_short != null) ? $.name_short : $.name,
			k: ($.name_eng_short != null) ? $.name_eng_short : "?",
		},
		tracks: tracks,
		transfer: transfer,
	};
	return {id: i};
};