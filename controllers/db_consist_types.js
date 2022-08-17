exports.db_update = function(req, res){

	if (global.db != null){
		//Clear original collection
		global.db.collection("consist_types").remove({}, function(err) {
			if (err) throw err;
			//Prepare Data
			var myObj = [];
			for (var i in global.train_consists){
				var $ = global.train_consists[i];
				if (i != ""){
					myObj.push({
						id: i,
						remark: {
							j: $.remark, e: $.remark_eng, c: $.remark_chi, k: $.remark_kor,
						},
						noOfCars: $.noOfCars,
						others: $.others,
					});
				}
			}
			//Add Data
			global.db.collection("consist_types").insertMany(myObj, function(err, res) {
				if (err) throw err;
				console.log("Collection: consist_types");
				console.log("No of documents inserted: " + res.insertedCount);
			});
		});
		res.send("db_consist_types");
	}
	else{
		res.send("Failed");
	}

};