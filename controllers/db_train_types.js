exports.db_update = function(req, res){

	if (global.db != null){
		//Clear original collection
		global.db.collection("train_types").remove({}, function(err) {
			if (err) throw err;
			//Prepare Data
			var myObj = [];
			for (var i in global.train_types){
				var $ = global.train_types[i];
				if (i != ""){
					myObj.push({
						id: i,
						name: {j: $.name, e: $.name_eng, c: $.name_chi, k: $.name_kor,},
						name_short: {j: $.name_short, e: $.name_eng_short, c: $.name_chi_short, k: $.name_kor_short,},
						color: $.color,
						priority: ($.priority) ? $.priority : 0,
						liner: ($.liner == true),
					});
				}
			}
			//Add Data
			global.db.collection("train_types").insertMany(myObj, function(err, res) {
				if (err) throw err;
				console.log("Collection: train_types");
				console.log("No of documents inserted: " + res.insertedCount);
			});
		});
		res.send("train_types");
	}
	else{
		res.send("Failed");
	}

};