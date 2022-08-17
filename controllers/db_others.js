exports.db_update = function(req, res){

	if (global.db != null){
		//Clear original collection
		global.db.collection("planner").remove({}, function(err) {
			if (err) throw err;
			//Add Data
			global.db.collection("planner").insertOne(global.planner, function(err, res) {
				if (err) throw err;
				console.log("Collection: planner");
				console.log("Entry Inserted");
			});
		});
		global.db.collection("fares").remove({}, function(err) {
			if (err) throw err;
			//Add Data
			global.db.collection("fares").insertOne(global.fares, function(err, res) {
				if (err) throw err;
				console.log("Collection: fares");
				console.log("Entry Inserted");
			});
		});
		global.db.collection("timetable_pdf").remove({}, function(err) {
			if (err) throw err;
			//Add Data
			global.db.collection("timetable_pdf").insertOne(global.timetable_pdf, function(err, res) {
				if (err) throw err;
				console.log("Collection: timetable_pdf");
				console.log("Entry Inserted");
			});
		});
		global.db.collection("z-oper-illu").remove({}, function(err) {
			if (err) throw err;
			//Add Data
			global.db.collection("z-oper-illu").insertOne(global.oper_illu, function(err, res) {
				if (err) throw err;
				console.log("Collection: z-oper-illu");
				console.log("Entry Inserted");
			});
		});
		res.send("db_others");
	}
	else{
		res.send("Failed");
	}

};