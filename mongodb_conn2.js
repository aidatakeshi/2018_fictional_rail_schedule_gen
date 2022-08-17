var $ = {
	user: "mk_timetable",
	password: "xxxxxxxxxxxxxxxxxx",
	url: "xxx.xxx.xxx.xxx",
	port: 27017,
	auth: "admin",
	db: "mk_timetable",
};

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://"+$.user+":"+$.password+"@"+$.url+":"+$.port+"/"+$.db, {useNewUrlParser: true}, function(err, mydb) {
	global.db = mydb;
	console.log("DB connected");
});