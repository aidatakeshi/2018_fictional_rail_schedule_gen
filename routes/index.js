var express = require('express');
var router = express.Router();

var index_ctr = require('../controllers/index_ctr');

router.get('/', index_ctr.render);

var pattern_ctr = require('../controllers/pattern_ctr');

router.get('/pattern/:group/:isPH', pattern_ctr.render);
router.get('/pattern_json/:group', pattern_ctr.renderJSON);

var crossover_ctr = require('../controllers/crossover_ctr');

router.get('/crossover/:cross/:isPH', crossover_ctr.render);

var station_ctr = require('../controllers/station_ctr');

router.get('/station/:stop/track/:track', station_ctr.byTrack_render);
router.get('/station/:stop/direction/:line/:direction', station_ctr.byDirection_render);
router.get('/overall/:dayType', station_ctr.overall_render);

var db_consist_types = require('../controllers/db_consist_types');
var db_lines = require('../controllers/db_lines');
var db_stations = require('../controllers/db_stations');
var db_train_types = require('../controllers/db_train_types');
var db_trips = require('../controllers/db_trips');
var db_others = require('../controllers/db_others');

router.get('/db_update/consist_types', db_consist_types.db_update);
router.get('/db_update/lines', db_lines.db_update);
router.get('/db_update/stations', db_stations.db_update);
router.get('/db_update/train_types', db_train_types.db_update);
router.get('/db_update/trips', db_trips.db_update);
router.get('/db_update/others', db_others.db_update);

module.exports = router;
