exports.db_update = function(req, res){

	if (global.db != null){
		//Clear original collection
		global.db.collection("lines").remove({}, function(err) {
			if (err) throw err;
			//Prepare Data
			var myObj = [];
			for (var i in global.lines){
				var $ = global.lines[i];
				if (i != ""){
					myObj.push({
						id: i,
						name: {
							j: $.name, e: $.name_eng, c: $.name_chi, k: $.name_kor,
						},
						color: $.color,
						types: $.types,
						refTimeAt: $.refTimeAt,
						tracks: $.tracks,
						stations: $.stations,
					});
				}
			}
			//Add Data
			global.db.collection("lines").insertMany(myObj, function(err, res) {
				if (err) throw err;
				console.log("Collection: lines");
				console.log("No of documents inserted: " + res.insertedCount);
			});
		});
		res.send("db_lines");
	}
	else{
		res.send("Failed");
	}

};