This is my first trial of using Node.js & Express.js during 2018 - 19, for generating a working timetable of a fully fictional Japanese-style railway. It consists of the following features:

* Generating a timetable set by reading data hard-coded in /data folder.
* Assigning "train runs" (multiple train trips using the same trainset) by considering turnovers at terminal stations.
* Enabling preview of train schedules for each line, or in each station.
* Generating station timetable in PDF format.
* Checking if there are non-rational scheduling, such as having two trains calling in the same station track at the same time, or passing the crossing at the same time.
* Saving the timetable data into a MongoDB database defined in mongodb_conn2.js.

This is my first work related to fictional railways, and indeed Node.js were used solely for alleviating the tedious manual train scheduling (perhaps in Excel). Therefore, it is indeed a hard-coded Node.js script.

The code for this project is for study purposes only.