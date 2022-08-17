/**
 * Operation Illustration (運行略図)
 */

var m4 = 30 * (Math.sqrt(2) - 1); //~ 0.414 x 30
var m7 = 30 * (Math.sqrt(2) / 2); //~ 0.707 x 30

if (typeof module === 'undefined') global = {}; //In case of non-nodejs

function init(){
	global.oper_illu = {
		//Main Line
		"main": {
			train_icon_width: 75,
			train_runs: [
				//AE Liner
				{from: "X01", to: "X99", icons: {"50000": 8}},
				//Limited Express
				{from: "E01", to: "E99", icons: {"30000": 25, "31000": 15}},
				//Limited Express
				{from: "F01", to: "F99", icons: {"30000a": 25, "31000a": 15}, hideWhenCoupled: {replaceFrom: "F", replaceTo: "E"}},
				//S. Limited Express
				{from: "Z01", to: "Z99", icons: {"11000": 14}},
				//Josui S.
				{from: "701", to: "799", icons: {"5000": 15, "6000": 8}},
				//Rapid
				{from: "R01", to: "S99", icons: {"10000": 38, "11000": 5}},
				{from: "T01", to: "T99", icons: {"s18000": 31}},
				//Express
				{from: "201", to: "299", icons: {"5000": 12, "6000": 11, "10000": 7, "10000p": 1, "11000": 4}},
				//Main Line Local
				{from: "001", to: "199", icons: {"5000": 4, "6000": 4, "12000a": 8, "12000b": 8, "12000c": 8, "12000d": 8, "12000e": 8, "12000f": 8, "12000g": 8, "12000s": 1}},
				//Mugita Line Local
				{from: "G01", to: "G49", icons: {"20000": 8, "21000": 6}},
				{from: "G51", to: "G99", icons: {"20000": 8}},
				//Aoyama
				{from: "301", to: "499", icons: {"5000a": 43}},
				//Sunada & Oura
				{from: "501", to: "599", icons: {"13000s": 37}},
				{from: "601", to: "699", icons: {"13000o": 21}},
			],
			stations: {
				//Main Line

				"101": [
					{tracks: ["1","2","3","4","5","6","7","8"], upbound: true, location: [270, 210], shift: [+30, 0]},
					{tracks: ["1","2","3","4","5","6","7","8"], upbound: false, location: [270, 210], shift: [-30, 0]},
					{tracks: ["9","10"], upbound: true, location: [450, 210], shift: [+30, 0]},
					{tracks: ["9","10"], upbound: false, location: [450, 210], shift: [-30, 0]},
				],
				"102": [{tracks: ["1"], location: [450, 300], shift: [+30, 0]}, {tracks: ["2"], location: [450, 300], shift: [-30, 0]}],
				"103": [{tracks: ["1"], location: [450, 390], shift: [+30, 0]}, {tracks: ["2"], location: [450, 390], shift: [-30, 0]}],
				"104": [
					{tracks: ["1"], location: [270, 480], shift: [+90, 0]}, {tracks: ["2"], location: [270, 480], shift: [+30, 0]},
					{tracks: ["3"], location: [270, 480], shift: [-90, 0]}, {tracks: ["4"], location: [270, 480], shift: [-30, 0]},
					{tracks: ["5"], location: [450, 480], shift: [+30, 0]}, {tracks: ["6"], location: [450, 480], shift: [-30, 0]},
				],
				"105": [{tracks: ["1"], location: [450, 570], shift: [+30, 0]}, {tracks: ["2"], location: [450, 570], shift: [-30, 0]}],
				"106": [{tracks: ["1"], location: [450, 660], shift: [+30, 0]}, {tracks: ["2"], location: [450, 660], shift: [-30, 0]}],
				"107": [{tracks: ["1"], location: [450, 750], shift: [+30, 0]}, {tracks: ["2"], location: [450, 750], shift: [-30, 0]}],
				"108": [{tracks: ["1"], location: [450, 840], shift: [+30, 0]}, {tracks: ["2"], location: [450, 840], shift: [-30, 0]}],
				"109": [{tracks: ["1"], location: [450, 930], shift: [+30, 0]}, {tracks: ["2"], location: [450, 930], shift: [-30, 0]}],
				"110": [{tracks: ["1"], location: [450, 1020], shift: [+30, 0]}, {tracks: ["2"], location: [450, 1020], shift: [-30, 0]}],
				"111": [{tracks: ["1"], location: [450, 1110], shift: [+30, 0]}, {tracks: ["2"], location: [450, 1110], shift: [-30, 0]}],
				"112": [
					{tracks: ["1"], location: [450, 1200], shift: [+30, 0]}, {tracks: ["4"], location: [450, 1200], shift: [-30, 0]},
					{tracks: ["2"], location: [570, 1200], shift: [+30, 0]}, {tracks: ["3"], location: [570, 1200], shift: [-30, 0]},
				],
				"113": [
					//Rapid
					{tracks: ["1"], location: [270, 1500], shift: [+90, 0]}, {tracks: ["2"], location: [270, 1500], shift: [+30, 0]}, 
					{tracks: ["5"], location: [270, 1500], shift: [-30, 0]}, {tracks: ["6"], location: [270, 1500], shift: [-90, 0]},
					{tracks: ["3"], location: [90, 1500], shift: [+30, 0]}, {tracks: ["4"], location: [90, 1500], shift: [-30, 0]},
					//Aoyama
					{tracks: ["7"], location: [810, 1500], shift: [+30, 0]}, {tracks: ["8"], location: [810, 1500], shift: [-30, 0]}, 
					{tracks: ["0"], location: [690, 1500], shift: [0, 0]}, 
					//Local & Tendoji
					{tracks: ["13"], location: [570, 1470], shift: [+30, 0]}, {tracks: ["14"], location: [570, 1470], shift: [-30, 0]}, 
					{tracks: ["11"], location: [450, 1500], shift: [+30, 0]}, {tracks: ["16"], location: [450, 1500], shift: [-30, 0]}, 
					{tracks: ["12"], location: [450, 1500], shift: [+30, 0]}, {tracks: ["15"], location: [450, 1500], shift: [-30, 0]}, 
					//Sunada
					{tracks: ["17", "18"], upbound: true, location: [570, 1530], shift: [-30, 0]},
					{tracks: ["17", "18"], upbound: false, location: [570, 1530], shift: [+30, 0]}, 
				],
				"114": [{tracks: ["1"], location: [390, 1590], shift: [+m7, +m7]}, {tracks: ["2"], location: [390, 1590], shift: [-m7, -m7]}],
				"115": [
					{tracks: ["1"], location: [330, 1710], shift: [+90, 0]}, {tracks: ["2"], location: [330, 1710], shift: [+30, 0]},
					{tracks: ["3"], location: [330, 1710], shift: [-30, 0]}, {tracks: ["4"], location: [330, 1710], shift: [-90, 0]},
				],
				"116": [{tracks: ["1"], location: [330, 1800], shift: [+30, 0]}, {tracks: ["2"], location: [330, 1800], shift: [-30, 0]}],
				"117": [{tracks: ["1"], location: [330, 1890], shift: [+30, 0]}, {tracks: ["2"], location: [330, 1890], shift: [-30, 0]}],
				"118": [{tracks: ["1"], location: [330, 1980], shift: [+30, 0]}, {tracks: ["2"], location: [330, 1980], shift: [-30, 0]}],
				"119": [{tracks: ["1"], location: [330, 2070], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2070], shift: [-30, 0]}],
				"120": [{tracks: ["1"], location: [330, 2160], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2160], shift: [-30, 0]}],
				"121": [
					{tracks: ["1"], location: [330, 2250], shift: [+90, 0]}, {tracks: ["2"], location: [330, 2250], shift: [+30, 0]},
					{tracks: ["3"], location: [330, 2250], shift: [-30, 0]}, {tracks: ["4"], location: [330, 2250], shift: [-90, 0]},
					{tracks: ["5"], location: [630, 2250], shift: [-30, 0]}, {tracks: ["6"], location: [630, 2250], shift: [+30, 0]},
				],
				"122": [{tracks: ["1"], location: [330, 2340], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2340], shift: [-30, 0]}],
				"123": [{tracks: ["1"], location: [330, 2430], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2430], shift: [-30, 0]}],
				"124": [{tracks: ["1"], location: [330, 2520], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2520], shift: [-30, 0]}],
				"125": [
					{tracks: ["1"], location: [330, 2610], shift: [+90, 0]}, {tracks: ["2"], location: [330, 2610], shift: [+30, 0]},
					{tracks: ["3"], location: [330, 2610], shift: [-30, 0]}, {tracks: ["4"], location: [330, 2610], shift: [-90, 0]},
				],
				"126": [{tracks: ["1"], location: [330, 2700], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2700], shift: [-30, 0]}],
				"127": [
					{tracks: ["1"], location: [330, 2790], shift: [+90, 0]}, {tracks: ["2"], location: [330, 2790], shift: [+30, 0]},
					{tracks: ["3"], location: [330, 2790], shift: [-30, 0]}, {tracks: ["4"], location: [330, 2790], shift: [-90, 0]},
				],
				"128": [{tracks: ["1"], location: [330, 2880], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2880], shift: [-30, 0]}],
				"129": [{tracks: ["1"], location: [330, 2970], shift: [+30, 0]}, {tracks: ["2"], location: [330, 2970], shift: [-30, 0]}],
				"130": [{tracks: ["1"], location: [330, 3060], shift: [+30, 0]}, {tracks: ["2"], location: [330, 3060], shift: [-30, 0]}],
				"131": [
					{tracks: ["1"], location: [330, 3150], shift: [+150, 0]}, {tracks: ["2"], location: [330, 3150], shift: [+90, 0]},
					{tracks: ["3"], location: [330, 3150], shift: [+30, 0]}, {tracks: ["4"], location: [330, 3150], shift: [-30, 0]},
					{tracks: ["5"], location: [330, 3150], shift: [-90, 0]}, {tracks: ["6"], location: [330, 3150], shift: [-150, 0]},
					{tracks: ["7"], location: [630, 3150], shift: [+30, 0]}, {tracks: ["8"], location: [630, 3150], shift: [-30, 0]},
				],
				"132": [{tracks: ["1"], location: [330, 3240], shift: [+30, 0]}, {tracks: ["2"], location: [330, 3240], shift: [-30, 0]}],
				"133": [
					{tracks: ["2"], upbound: true, location: [330, 3330], shift: [+30, 0]},
					{tracks: ["2"], upbound: false, location: [330, 3330], shift: [-30, 0]},
					{tracks: ["1"], location: [330, 3330], shift: [+30, 0]},
					{tracks: ["3"], location: [330, 3330], shift: [-30, 0]},
				],
				"134": [{tracks: ["1"], location: [330, 3420], shift: [+30, 0]}, {tracks: ["2"], location: [330, 3420], shift: [-30, 0]}],
				"135": [
					{tracks: ["1"], location: [330, 3510], shift: [+90, 0]}, {tracks: ["2"], location: [330, 3510], shift: [+30, 0]},
					{tracks: ["3"], location: [330, 3510], shift: [-30, 0]}, {tracks: ["4"], location: [330, 3510], shift: [-90, 0]},
				],
				"136": [{tracks: ["1"], location: [390, 3630], shift: [+30, 0]}, {tracks: ["2"], location: [390, 3630], shift: [-30, 0]}],
				"137": [{tracks: ["1"], location: [390, 3720], shift: [+30, 0]}, {tracks: ["2"], location: [390, 3720], shift: [-30, 0]}],
				"138": [{tracks: ["1"], location: [390, 3810], shift: [+30, 0]}, {tracks: ["2"], location: [390, 3810], shift: [-30, 0]}],
				"139": [
					{tracks: ["1"], location: [90, 3900], shift: [+30, 0]}, {tracks: ["2"], location: [90, 3900], shift: [-30, 0]},
					{tracks: ["3"], location: [270, 3900], shift: [+30, 0]}, {tracks: ["4"], location: [270, 3900], shift: [-30, 0]},
					{tracks: ["5"], location: [390, 3900], shift: [+30, 0]}, {tracks: ["6"], location: [390, 3900], shift: [-30, 0]},
					{tracks: ["7"], location: [570, 3900], shift: [+30, 0]}, {tracks: ["8"], location: [570, 3900], shift: [-30, 0]},
				],
				"140": [{tracks: ["1"], location: [270, 4170], shift: [+30, 0]}, {tracks: ["2"], location: [270, 4170], shift: [-30, 0]}],
				"141": [{tracks: ["1"], location: [270, 4260], shift: [+30, 0]}, {tracks: ["2"], location: [270, 4260], shift: [-30, 0]}],
				"142": [
					{tracks: ["1"], location: [270, 4380], shift: [+90, 0]}, {tracks: ["2"], location: [270, 4380], shift: [+30, 0]},
					{tracks: ["3"], location: [270, 4380], shift: [-30, 0]}, {tracks: ["4"], location: [270, 4380], shift: [-90, 0]},
				],
				"143": [{tracks: ["1"], location: [270, 4470], shift: [+30, 0]}, {tracks: ["2"], location: [270, 4470], shift: [-30, 0]}],
				"144": [{tracks: ["1"], location: [270, 4560], shift: [+30, 0]}, {tracks: ["2"], location: [270, 4560], shift: [-30, 0]}],
				"145": [
					{tracks: ["1"], location: [90, 4740], shift: [+30, 0]}, {tracks: ["2"], location: [90, 4740], shift: [-30, 0]},
					{tracks: ["3"], location: [270, 4740], shift: [+30, 0]}, {tracks: ["4"], location: [270, 4740], shift: [-30, 0]},
					{tracks: ["5"], location: [270, 4740], shift: [+90, 0]}, {tracks: ["6"], location: [270, 4740], shift: [-90, 0]},
				],
				"146": [{tracks: ["1"], location: [270, 4830], shift: [+30, 0]}, {tracks: ["2"], location: [270, 4830], shift: [-30, 0]}],
				"147": [{tracks: ["1"], location: [270, 4920], shift: [+30, 0]}, {tracks: ["2"], location: [270, 4920], shift: [-30, 0]}],
				"148": [{tracks: ["1"], location: [270, 5010], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5010], shift: [-30, 0]}],
				"149": [{tracks: ["1"], location: [270, 5100], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5100], shift: [-30, 0]}],
				"150": [
					{tracks: ["1"], location: [90, 5190], shift: [+30, 0]}, {tracks: ["2"], location: [90, 5190], shift: [-30, 0]},
					{tracks: ["3"], location: [270, 5190], shift: [+30, 0]}, {tracks: ["4"], location: [270, 5190], shift: [-30, 0]},
					{tracks: ["5"], location: [270, 5190], shift: [+90, 0]}, {tracks: ["6"], location: [270, 5190], shift: [-90, 0]},
				],
				"151": [{tracks: ["1"], location: [270, 5280], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5280], shift: [-30, 0]}],
				"152": [{tracks: ["1"], location: [270, 5370], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5370], shift: [-30, 0]}],
				"153": [{tracks: ["1"], location: [270, 5460], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5460], shift: [-30, 0]}],
				"154": [
					{tracks: ["1"], location: [90, 5550], shift: [+30, 0]}, {tracks: ["2"], location: [90, 5550], shift: [-30, 0]},
					{tracks: ["3"], location: [270, 5550], shift: [+30, 0]}, {tracks: ["4"], location: [270, 5550], shift: [-30, 0]},
				],
				"155": [{tracks: ["1"], location: [270, 5640], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5640], shift: [-30, 0]}],
				"156": [{tracks: ["1"], location: [270, 5730], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5730], shift: [-30, 0]}],
				"157": [{tracks: ["1"], location: [270, 5820], shift: [+30, 0]}, {tracks: ["2"], location: [270, 5820], shift: [-30, 0]}],
				"158": [
					{tracks: ["1"], location: [450, 5940], shift: [+30, 0]}, {tracks: ["2"], location: [450, 5940], shift: [-30, 0]},
					{tracks: ["3"], location: [210, 5940], shift: [+30, 0]}, {tracks: ["6"], location: [210, 5940], shift: [-30, 0]},
					{tracks: ["4"], location: [90, 5940], shift: [+30, 0]}, {tracks: ["5"], location: [90, 5940], shift: [-30, 0]},
					{tracks: ["7","8"], location: [330, 5940], shift: [+30, 0]}, {tracks: ["9","10"], location: [330, 5940], shift: [-30, 0]},
				],
				"159": [{tracks: ["1"], location: [90, 6240], shift: [+30, 0]}, {tracks: ["2"], location: [90, 6240], shift: [-30, 0]}],
				"160": [{tracks: ["1"], location: [90, 6330], shift: [+30, 0]}, {tracks: ["2"], location: [90, 6330], shift: [-30, 0]}],
				"161": [{tracks: ["1"], location: [90, 6420], shift: [+30, 0]}, {tracks: ["2"], location: [90, 6420], shift: [-30, 0]}],
				"162": [
					{tracks: ["1","2","3","4"], upbound: true, location: [90, 6510], shift: [+30, 0]},
					{tracks: ["1","2","3","4"], upbound: false, location: [90, 6510], shift: [-30, 0]},
				],

				//Mugitawara Line

				"201": [{tracks: ["1"], location: [540, 6060], shift: [0, -30]}, {tracks: ["2"], location: [540, 6060], shift: [0, +30]}],
				"202": [{tracks: ["1"], location: [630, 6060], shift: [0, -30]}, {tracks: ["2"], location: [630, 6060], shift: [0, +30]}],
				"203": [{tracks: ["1"], location: [720, 6060], shift: [0, -30]}, {tracks: ["2"], location: [720, 6060], shift: [0, +30]}],
				"204": [{tracks: ["1"], location: [810, 6060], shift: [0, -30]}, {tracks: ["2"], location: [810, 6060], shift: [0, +30]}],
				"205": [{tracks: ["1"], location: [900, 6060], shift: [0, -30]}, {tracks: ["2"], location: [900, 6060], shift: [0, +30]}],
				"206": [
					{tracks: ["1"], location: [1080, 6060], shift: [0, -150]}, {tracks: ["2"], location: [1080, 6060], shift: [0, -90]},
					{tracks: ["3"], location: [1080, 6060], shift: [0, -30]}, {tracks: ["4"], location: [1080, 6060], shift: [0, +30]},
					{tracks: ["5"], location: [1080, 6060], shift: [0, +90]}, {tracks: ["6"], location: [1080, 6060], shift: [0, +150]},
				],
				"207": [{tracks: ["1"], location: [1350, 6060], shift: [0, -30]}, {tracks: ["2"], location: [1350, 6060], shift: [0, +30]}],
				"208": [{tracks: ["1"], location: [1440, 6060], shift: [0, -30]}, {tracks: ["2"], location: [1440, 6060], shift: [0, +30]}],
				"209": [{tracks: ["1"], location: [1530, 6060], shift: [0, -30]}, {tracks: ["2"], location: [1530, 6060], shift: [0, +30]}],
				"210": [{tracks: ["1"], location: [1620, 6060], shift: [0, -30]}, {tracks: ["2"], location: [1620, 6060], shift: [0, +30]}],
				"211": [
					{tracks: ["1"], location: [1710, 5970], shift: [0, 0]}, 
					{tracks: ["2"], location: [1710, 6060], shift: [0, -30]}, {tracks: ["3"], location: [1710, 6060], shift: [0, +30]},
				],
				"212": [{tracks: ["1"], location: [1830, 5970], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5970], shift: [+30, 0]}],
				"213": [
					{tracks: ["1"], location: [1830, 5850], shift: [-90, 0]}, {tracks: ["2"], location: [1830, 5850], shift: [-30, 0]},
					{tracks: ["3"], location: [1830, 5850], shift: [+30, 0]}, {tracks: ["4"], location: [1830, 5850], shift: [+90, 0]},
				],
				"214": [{tracks: ["1"], location: [1830, 5760], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5760], shift: [+30, 0]}],
				"215": [{tracks: ["1"], location: [1830, 5670], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5670], shift: [+30, 0]}],
				"216": [{tracks: ["1"], location: [1830, 5580], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5580], shift: [+30, 0]}],
				"217": [{tracks: ["1"], location: [1830, 5490], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5490], shift: [+30, 0]}],
				"218": [{tracks: ["1"], location: [1830, 5400], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5400], shift: [+30, 0]}],
				"219": [{tracks: ["1"], location: [1830, 5310], shift: [-30, 0]}, {tracks: ["2"], location: [1830, 5310], shift: [+30, 0]}],
				"220": [
					{tracks: ["1","2","3","4"], location: [1830, 5220], upbound: true, shift: [-30, 0]},
					{tracks: ["1","2","3","4"], location: [1830, 5220], upbound: false, shift: [+30, 0]},
				],

				//Asamizu Line

				"231": [{tracks: ["1"], location: [1380, 5820], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5820], shift: [+30, 0]}],
				"232": [{tracks: ["1"], location: [1380, 5730], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5730], shift: [+30, 0]}],
				"233": [{tracks: ["1"], location: [1380, 5640], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5640], shift: [+30, 0]}],
				"234": [{tracks: ["1"], location: [1380, 5550], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5550], shift: [+30, 0]}],
				"235": [{tracks: ["1"], location: [1380, 5460], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5460], shift: [+30, 0]}],
				"236": [{tracks: ["1"], location: [1380, 5370], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5370], shift: [+30, 0]}],
				"237": [{tracks: ["1"], location: [1380, 5280], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5280], shift: [+30, 0]}],
				"238": [{tracks: ["1"], location: [1380, 5190], shift: [-30, 0]}, {tracks: ["2"], location: [1380, 5190], shift: [+30, 0]}],
				"239": [
					{tracks: ["1","2","3","4"], location: [1380, 5100], upbound: true, shift: [-30, 0]},
					{tracks: ["1","2","3","4"], location: [1380, 5100], upbound: false, shift: [+30, 0]},
				],

				//Tashin Line

				"251": [{tracks: ["1"], location: [1650, 5850], shift: [0, 0]}],
				"252": [{tracks: ["1"], location: [1650, 5760], shift: [-30, 0]}, {tracks: ["2"], location: [1650, 5760], shift: [+30, 0]}],
				"253": [{tracks: ["1"], location: [1650, 5670], shift: [0, 0]}],
				"254": [{tracks: ["1"], location: [1650, 5580], shift: [0, 0]}],
				"255": [{tracks: ["1"], location: [1650, 5490], shift: [0, 0]}],
				"256": [{tracks: ["1"], location: [1650, 5400], shift: [-30, 0]}, {tracks: ["2"], location: [1650, 5400], shift: [+30, 0]}],
				"257": [{tracks: ["1"], location: [1650, 5310], shift: [0, 0]}],

				//Sunada Line

				"301": [{tracks: ["1"], location: [780, 1800], shift: [0, +30]}, {tracks: ["2"], location: [780, 1800], shift: [0, -30]}],
				"302": [{tracks: ["1"], location: [900, 1800], shift: [0, +30]}, {tracks: ["2"], location: [900, 1800], shift: [0, -30]}],
				"303": [{tracks: ["1"], location: [1020, 1800], shift: [0, +30]}, {tracks: ["2"], location: [1020, 1800], shift: [0, -30]}],
				"304": [{tracks: ["1"], location: [1140, 1800], shift: [0, +30]}, {tracks: ["2"], location: [1140, 1800], shift: [0, -30]}],
				"305": [{tracks: ["1"], location: [1260, 1920], shift: [-30, 0]}, {tracks: ["2"], location: [1260, 1920], shift: [+30, 0]}],
				"306": [{tracks: ["1"], location: [1140, 2040], shift: [0, -30]}, {tracks: ["2"], location: [1140, 2040], shift: [0, +30]}],
				"307": [{tracks: ["1"], location: [1020, 2040], shift: [0, -30]}, {tracks: ["2"], location: [1020, 2040], shift: [0, +30]}],
				"308": [{tracks: ["1"], location: [900, 2040], shift: [0, -30]}, {tracks: ["2"], location: [900, 2040], shift: [0, +30]}],
				"309": [{tracks: ["1"], location: [780, 2040], shift: [0, -30]}, {tracks: ["2"], location: [780, 2040], shift: [0, +30]}],
				"322": [{tracks: ["1"], location: [780, 2370], shift: [0, +30]}, {tracks: ["2"], location: [780, 2370], shift: [0, -30]}],
				"323": [{tracks: ["1"], location: [900, 2370], shift: [0, +30]}, {tracks: ["2"], location: [900, 2370], shift: [0, -30]}],
				"324": [{tracks: ["1"], location: [1020, 2370], shift: [0, +30]}, {tracks: ["2"], location: [1020, 2370], shift: [0, -30]}],
				"325": [{tracks: ["1"], location: [1140, 2370], shift: [0, +30]}, {tracks: ["2"], location: [1140, 2370], shift: [0, -30]}],
				"326": [{tracks: ["1"], location: [1260, 2370], shift: [0, +30]}, {tracks: ["2"], location: [1260, 2370], shift: [0, -30]}],
				"327": [{tracks: ["1"], location: [1380, 2370], shift: [0, +30]}, {tracks: ["2"], location: [1380, 2370], shift: [0, -30]}],
				"328": [{tracks: ["1"], location: [1500, 2370], shift: [0, +30]}, {tracks: ["2"], location: [1500, 2370], shift: [0, -30]}],
				"329": [
					{tracks: ["1","2"], location: [1620, 2370], upbound: true, shift: [0, +30]},
					{tracks: ["1","2"], location: [1620, 2370], upbound: false, shift: [0, -30]},
				],

				//Oura Line

				"332": [{tracks: ["1"], location: [780, 2970], shift: [0, +30]}, {tracks: ["2"], location: [780, 2970], shift: [0, -30]}],
				"333": [{tracks: ["1"], location: [900, 2970], shift: [0, +30]}, {tracks: ["2"], location: [900, 2970], shift: [0, -30]}],
				"334": [{tracks: ["1"], location: [1020, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1020, 2970], shift: [0, -30]}],
				"335": [{tracks: ["1"], location: [1140, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1140, 2970], shift: [0, -30]}],
				"336": [{tracks: ["1"], location: [1260, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1260, 2970], shift: [0, -30]}],
				"337": [{tracks: ["1"], location: [1380, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1380, 2970], shift: [0, -30]}],
				"338": [{tracks: ["1"], location: [1500, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1500, 2970], shift: [0, -30]}],
				"339": [{tracks: ["1"], location: [1620, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1620, 2970], shift: [0, -30]}],
				"340": [{tracks: ["1"], location: [1740, 2970], shift: [0, +30]}, {tracks: ["2"], location: [1740, 2970], shift: [0, -30]}],
				"341": [
					{tracks: ["1","2"], location: [1860, 2970], upbound: true, shift: [0, +30]},
					{tracks: ["1","2"], location: [1860, 2970], upbound: false, shift: [0, -30]},
				],

				//Josui Line

				"351": [{tracks: ["1"], location: [720, 4260], shift: [0, +30]}, {tracks: ["2"], location: [720, 4260], shift: [0, -30]}],
				"352": [{tracks: ["1"], location: [840, 4260], shift: [0, +30]}, {tracks: ["2"], location: [840, 4260], shift: [0, -30]}],
				"353": [{tracks: ["1"], location: [960, 4260], shift: [0, +30]}, {tracks: ["2"], location: [960, 4260], shift: [0, -30]}],
				"354": [
					{tracks: ["1","2"], location: [1080, 4260], upbound: true, shift: [0, +30]},
					{tracks: ["1","2"], location: [1080, 4260], upbound: false, shift: [0, -30]},
				],
				"361": [{tracks: ["1"], location: [720, 4020], shift: [0, -30]}, {tracks: ["2"], location: [720, 4020], shift: [0, +30]}],
				"362": [{tracks: ["1"], location: [840, 4020], shift: [0, -30]}, {tracks: ["2"], location: [840, 4020], shift: [0, +30]}],
				"363": [{tracks: ["1"], location: [960, 4020], shift: [0, -30]}, {tracks: ["2"], location: [960, 4020], shift: [0, +30]}],
				"364": [{tracks: ["1"], location: [1080, 4020], shift: [0, -90]}, {tracks: ["2"], location: [1080, 4020], shift: [0, +90]}],
				"365": [{tracks: ["1"], location: [1200, 4020], shift: [0, -30]}, {tracks: ["2"], location: [1200, 4020], shift: [0, +30]}],
				"366": [{tracks: ["1"], location: [1320, 4020], shift: [0, -30]}, {tracks: ["2"], location: [1320, 4020], shift: [0, +30]}],
				"367": [
					{tracks: ["1"], location: [1440, 4020], shift: [0, -90]}, {tracks: ["2"], location: [1440, 4020], shift: [0, -30]},
					{tracks: ["3"], location: [1440, 4020], shift: [0, +30]}, {tracks: ["4"], location: [1440, 4020], shift: [0, +90]},
				],
				"368": [{tracks: ["1"], location: [1560, 4020], shift: [0, -30]}, {tracks: ["2"], location: [1560, 4020], shift: [0, +30]}],
				"369": [{tracks: ["1"], location: [1680, 4020], shift: [0, -30]}, {tracks: ["2"], location: [1680, 4020], shift: [0, +30]}],
				"370": [{tracks: ["1"], location: [1800, 4020], shift: [0, -30]}, {tracks: ["2"], location: [1800, 4020], shift: [0, +30]}],
				"371": [
					{tracks: ["1"], location: [1890, 4170], shift: [+90, 0]}, {tracks: ["2"], location: [1890, 4170], shift: [+30, 0]},
					{tracks: ["3"], location: [1890, 4170], shift: [-30, 0]}, {tracks: ["4"], location: [1890, 4170], shift: [-90, 0]},
				],
				"372": [{tracks: ["1"], location: [1890, 4260], shift: [+30, 0]}, {tracks: ["2"], location: [1890, 4260], shift: [-30, 0]}],
				"373": [{tracks: ["1"], location: [1890, 4350], shift: [+30, 0]}, {tracks: ["2"], location: [1890, 4350], shift: [-30, 0]}],
				"374": [{tracks: ["1"], location: [1890, 4440], shift: [+30, 0]}, {tracks: ["2"], location: [1890, 4440], shift: [-30, 0]}],
				"375": [{tracks: ["1"], location: [1890, 4530], shift: [+30, 0]}, {tracks: ["2"], location: [1890, 4530], shift: [-30, 0]}],
				"376": [{tracks: ["1"], location: [1890, 4620], shift: [+30, 0]}, {tracks: ["2"], location: [1890, 4620], shift: [-30, 0]}],
				"377": [
					{tracks: ["1","2","3"], upbound: true, location: [1890, 4710], shift: [+30, 0]},
					{tracks: ["1","2","3"], upbound: false, location: [1890, 4710], shift: [-30, 0]}
				],

				//Aoyama Line

				"412": [
					{tracks: ["1","2","3"], upbound: true, location: [810, 1350], shift: [+30, 0]},
					{tracks: ["1","2","3"], upbound: false, location: [810, 1350], shift: [-30, 0]}
				],
				"414": [
					{tracks: ["1"], location: [900, 1590], shift: [0, -30]},
					{tracks: ["3"], location: [900, 1590], shift: [0, +30]},
					{tracks: ["2"], location: [900, 1680], shift: [0, 0]},
				],
				"415": [{tracks: ["1"], location: [1050, 1590], shift: [0, -30]}, {tracks: ["2"], location: [1050, 1590], shift: [0, +30]}],
				"416": [{tracks: ["1"], location: [1140, 1590], shift: [0, -90]}, {tracks: ["2"], location: [1140, 1590], shift: [0, +90]}],
				"417": [{tracks: ["1"], location: [1230, 1590], shift: [0, -30]}, {tracks: ["2"], location: [1230, 1590], shift: [0, +30]}],
				"418": [{tracks: ["1"], location: [1320, 1590], shift: [0, -90]}, {tracks: ["2"], location: [1320, 1590], shift: [0, +90]}],
				"419": [{tracks: ["1"], location: [1410, 1590], shift: [0, -30]}, {tracks: ["2"], location: [1410, 1590], shift: [0, +30]}],
				"420": [{tracks: ["1"], location: [1500, 1590], shift: [0, -30]}, {tracks: ["2"], location: [1500, 1590], shift: [0, +30]}],
				"421": [
					{tracks: ["1"], location: [1590, 1590], shift: [0, -90]}, {tracks: ["2"], location: [1590, 1590], shift: [0, -30]},
					{tracks: ["3"], location: [1590, 1590], shift: [0, +30]}, {tracks: ["4"], location: [1590, 1590], shift: [0, +90]},
				],
				"422": [{tracks: ["1"], location: [1710, 1590], shift: [0, -30]}, {tracks: ["2"], location: [1710, 1590], shift: [0, +30]}],
				"423": [{tracks: ["1"], location: [1800, 1590], shift: [0, -30]}, {tracks: ["2"], location: [1800, 1590], shift: [0, +30]}],
				"424": [{tracks: ["1"], location: [1920, 1680], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 1680], shift: [-30, 0]}],
				"425": [{tracks: ["1"], location: [1920, 1770], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 1770], shift: [-30, 0]}],
				"426": [
					{tracks: ["1"], location: [1920, 1860], shift: [+90, 0]}, {tracks: ["2"], location: [1920, 1860], shift: [+30, 0]},
					{tracks: ["3"], location: [1920, 1860], shift: [-30, 0]}, {tracks: ["4"], location: [1920, 1860], shift: [-90, 0]},
				],
				"427": [{tracks: ["1"], location: [1920, 1950], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 1950], shift: [-30, 0]}],
				"428": [{tracks: ["1"], location: [1920, 2040], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 2040], shift: [-30, 0]}],
				"429": [{tracks: ["1"], location: [1920, 2130], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 2130], shift: [-30, 0]}],
				"430": [{tracks: ["1"], location: [1920, 2220], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 2220], shift: [-30, 0]}],
				"431": [{tracks: ["1"], location: [1920, 2310], shift: [+30, 0]}, {tracks: ["2"], location: [1920, 2310], shift: [-30, 0]}],
				"432": [
					{tracks: ["1","2","3"], upbound: true, location: [1920, 2400], shift: [+30, 0]},
					{tracks: ["1","2","3"], upbound: false, location: [1920, 2400], shift: [-30, 0]}
				],

				//Tendoji Line

				"510": [{tracks: ["1"], location: [690, 1110], shift: [0, +30]}, {tracks: ["2"], location: [690, 1110], shift: [0, -30]}],
				"509": [{tracks: ["1"], location: [780, 1110], shift: [0, +90]}, {tracks: ["2"], location: [780, 1110], shift: [0, -90]}],
				"508": [{tracks: ["1"], location: [870, 1110], shift: [0, +30]}, {tracks: ["2"], location: [870, 1110], shift: [0, -30]}],
				"507": [{tracks: ["1"], location: [960, 1110], shift: [0, +30]}, {tracks: ["2"], location: [960, 1110], shift: [0, -30]}],
				"506": [{tracks: ["1"], location: [1050, 1110], shift: [0, +30]}, {tracks: ["2"], location: [1050, 1110], shift: [0, -30]}],
				"505": [{tracks: ["1"], location: [1140, 1110], shift: [0, +90]}, {tracks: ["2"], location: [1140, 1110], shift: [0, -90]}],
				"504": [{tracks: ["1"], location: [1230, 1110], shift: [0, +30]}, {tracks: ["2"], location: [1230, 1110], shift: [0, -30]}],
				"503": [{tracks: ["1"], location: [1320, 1110], shift: [0, +30]}, {tracks: ["2"], location: [1320, 1110], shift: [0, -30]}],
				"502": [{tracks: ["1"], location: [1410, 1110], shift: [0, +30]}, {tracks: ["2"], location: [1410, 1110], shift: [0, -30]}],
				"501": [
					{tracks: ["3"], location: [1500, 1110], shift: [0, +90]}, {tracks: ["4"], location: [1500, 1110], shift: [0, +30]},
					{tracks: ["5"], location: [1500, 1110], shift: [0, -30]}, {tracks: ["6"], location: [1500, 1110], shift: [0, -90]},
				],
				"902": [{tracks: ["1"], location: [1590, 1110], shift: [0, +30]}, {tracks: ["2"], location: [1590, 1110], shift: [0, -30]}],
				"903": [{tracks: ["1"], location: [1680, 1110], shift: [0, +30]}, {tracks: ["2"], location: [1680, 1110], shift: [0, -30]}],
				"904": [{tracks: ["1"], location: [1800, 990], shift: [+30, 0]}, {tracks: ["2"], location: [1800, 990], shift: [-30, 0]}],
				"905": [{tracks: ["1"], location: [1800, 900], shift: [+90, 0]}, {tracks: ["2"], location: [1800, 900], shift: [-90, 0]}],
				"906": [{tracks: ["1"], location: [1800, 810], shift: [+30, 0]}, {tracks: ["2"], location: [1800, 810], shift: [-30, 0]}],
				"907": [{tracks: ["5"], location: [1800, 720], shift: [+30, 0]}, {tracks: ["6"], location: [1800, 720], shift: [-30, 0]}],
				"908": [{tracks: ["1"], location: [1800, 630], shift: [+30, 0]}, {tracks: ["2"], location: [1800, 630], shift: [-30, 0]}],
				"909": [{tracks: ["1"], location: [1800, 540], shift: [+90, 0]}, {tracks: ["2"], location: [1800, 540], shift: [-90, 0]}],
				"910": [{tracks: ["1"], location: [1800, 450], shift: [+30, 0]}, {tracks: ["2"], location: [1800, 450], shift: [-30, 0]}],
				"911": [{tracks: ["5"], location: [1680, 330], shift: [0, -30]}, {tracks: ["6"], location: [1680, 330], shift: [0, +30]}],
				"912": [{tracks: ["1"], location: [1560, 330], shift: [0, -30]}, {tracks: ["2"], location: [1560, 330], shift: [0, +30]}],
				"913": [{tracks: ["1"], location: [1440, 330], shift: [0, -90]}, {tracks: ["2"], location: [1440, 330], shift: [0, +90]}],
				"914": [{tracks: ["1"], location: [1320, 330], shift: [0, -30]}, {tracks: ["2"], location: [1320, 330], shift: [0, +30]}],
				"915": [
					{tracks: ["2"], location: [1200, 330], shift: [0, -30], upbound: true},
					{tracks: ["2"], location: [1200, 330], shift: [0, +30], upbound: false},
					{tracks: ["1"], location: [1200, 330], shift: [0, -30]},
					{tracks: ["3"], location: [1200, 330], shift: [0, +30]},
				],
				"916": [
					{tracks: ["1","2"], location: [1080, 330], shift: [0, -30], upbound: true},
					{tracks: ["1","2"], location: [1080, 330], shift: [0, +30], upbound: false},
				],
			},

			section_points: [
				//Main Line : Kawada ~ Shinkawahashi
				{from: "101", from_tracks: ["1","2","3","4","5","6","7","8"], to: "104", to_tracks: ["1"], points: [[300, 420, 0.777]]},
				{from: "104", from_tracks: ["3"], to: "101", to_tracks: ["1","2","3","4","5","6","7","8"], points: [[240, 420, 0.222]]},
				//Main Line: Shinkawahashi ~ Aoyama
				{from: "104", from_tracks: ["1","2"], to: "113", to_tracks: ["1","2"], points: [[300, 540, 0.059],[300, 1440, 0.941]]},
				{from: "113", from_tracks: ["5","6"], to: "104", to_tracks: ["3","4"], points: [[240, 1440, 0.059],[240, 540, 0.941]]},
				{from: "104", from_tracks: ["1","2"], to: "113", to_tracks: ["3"], points: [[300, 540, 0.059],[300, 1260+15, 0.779],[120, 1440+15, 0.956]], zIndex: -1},
				{from: "113", from_tracks: ["4"], to: "104", to_tracks: ["3","4"], points: [[60, 1440-15, 0.074],[240, 1260-15, 0.250],[240, 540, 0.941]], zIndex: -1},
				//Main Line: Aoyama ~ Aoyama E.
				{from: "113", from_tracks: ["11","12"], to: "114", to_tracks: ["1"], points: [[450 + 30, 1530 + m4, null]]},
				{from: "114", from_tracks: ["2"], to: "113", to_tracks: ["15","16"], points: [[450 - 30, 1530 - m4, null]]},
				{from: "113", from_tracks: ["1","2"], to: "115", to_tracks: ["1"], points: [[300, 1560, null],[300, 1590, null]], zIndex: -1},
				{from: "115", from_tracks: ["4"], to: "113", to_tracks: ["5","6"], points: [[240, 1560, null]]},
				//Main Line: Aoyama E. ~ Sunada
				{from: "117", from_tracks: ["1"], to: "121", to_tracks: ["1"], points: [[360, 1920, null], [420, 1980, null]]},
				{from: "121", from_tracks: ["4"], to: "117", to_tracks: ["2"], points: [[240, 1980, null], [300, 1920, null]]},
				//Main Line: Oura Station
				{from: "127", from_tracks: ["1"], to: "131", to_tracks: ["1"], points: [[420, 3060, null]]},
				{from: "131", from_tracks: ["6"], to: "127", to_tracks: ["4"], points: [[240, 3060, null]]},
				{from: "131", from_tracks: ["1"], to: "135", to_tracks: ["1"], points: [[420, 3240, null]]},
				{from: "135", from_tracks: ["4"], to: "131", to_tracks: ["6"], points: [[240, 3240, null]]},
				//Main Line: Kameicho - Josui
				{from: "135", from_tracks: ["1"], to: "139", to_tracks: ["3"], points: [[300, 3630, null]], zIndex: +1},
				//Main Line: Josui - Fukai (Local)
				{from: "139", from_tracks: ["5"], to: "140", to_tracks: ["1"], points: [[420, 3930 + m4, null],[300, 4050 + m4, null]], zIndex: -1},
				{from: "140", from_tracks: ["2"], to: "139", to_tracks: ["6"], points: [[240, 4050 - m4, null],[360, 3930 - m4, null]], zIndex: -1},
				{from: "141", from_tracks: ["1"], to: "142", to_tracks: ["1"], points: [[300, 4320, null]]},
				{from: "142", from_tracks: ["4"], to: "141", to_tracks: ["2"], points: [[240, 4320, null]]},
				//Main Line: Fukai - Tairi (Local)
				{from: "142", from_tracks: ["1"], to: "143", to_tracks: ["1"], points: [[300, 4440, null]]},
				{from: "143", from_tracks: ["2"], to: "142", to_tracks: ["4"], points: [[240, 4440, null]]},
				{from: "144", from_tracks: ["1"], to: "145", to_tracks: ["5"], points: [[300, 4680, null]]},
				{from: "145", from_tracks: ["6"], to: "144", to_tracks: ["2"], points: [[240, 4680, null]]},
				//Main Line: Josui - Tairi (Express)
				{from: "139", from_tracks: ["1"], to: "145", to_tracks: ["3"], points: [[120, 4500-15, 0.696],[300, 4680-15, 0.911]], zIndex: -1},
				{from: "145", from_tracks: ["4"], to: "139", to_tracks: ["2"], points: [[240, 4680+15, 0.054],[60, 4500+15, 0.268]], zIndex: -1},
				{from: "139", from_tracks: ["3"], to: "145", to_tracks: ["1"], points: [[300, 3930+15, 0.054],[120, 4110+15, 0.268]], zIndex: -1},
				{from: "145", from_tracks: ["2"], to: "139", to_tracks: ["4"], points: [[60, 4110-15, 0.768],[240, 3930-15, 0.982]], zIndex: -1},
				//Main Line: Tairi - Aida (Local)
				{from: "145", from_tracks: ["5"], to: "146", to_tracks: ["1"], points: [[300, 4800, null]]},
				{from: "146", from_tracks: ["2"], to: "145", to_tracks: ["6"], points: [[240, 4800, null]]},
				{from: "146", from_tracks: ["1"], to: "149", to_tracks: ["1"], points: [[300, 4860, null],[360, 4920, null],[360, 5010, null],[300, 5070, null]]},
				{from: "149", from_tracks: ["2"], to: "146", to_tracks: ["2"], points: [[240, 5070, null],[180, 5010, null],[180, 4920, null],[240, 4860, null]]},
				{from: "149", from_tracks: ["1"], to: "150", to_tracks: ["5"], points: [[300, 5130, null]]},
				{from: "150", from_tracks: ["6"], to: "149", to_tracks: ["2"], points: [[240, 5130, null]]},
				//Main Line: Aida - Aidatakeshi (Local)
				{from: "150", from_tracks: ["5"], to: "151", to_tracks: ["1"], points: [[300, 5250, null]]},
				{from: "151", from_tracks: ["1"], to: "150", to_tracks: ["6"], points: [[240, 5250, null]]},
				{from: "151", from_tracks: ["1"], to: "153", to_tracks: ["1"], points: [[300, 5310, null],[360, 5370, null],[300, 5430, null]]},
				{from: "153", from_tracks: ["2"], to: "151", to_tracks: ["2"], points: [[240, 5430, null],[180, 5370, null],[240, 5310, null]]},
				//Main Line: Aidatakeshi - Akada
				{from: "155", from_tracks: ["1"], to: "157", to_tracks: ["1"], points: [[300, 5670, null],[360, 5730, null],[300, 5790, null]]},
				{from: "157", from_tracks: ["2"], to: "155", to_tracks: ["2"], points: [[240, 5790, null],[180, 5730, null],[240, 5670, null]]},
				{from: "157", from_tracks: ["1"], to: "158", to_tracks: ["7","8"], points: [[300, 5850-m4, null],[360, 5910-m4, null]], zIndex: -1},
				{from: "158", from_tracks: ["9","10"], to: "157", to_tracks: ["2"], points: [[300, 5910+m4, null],[240, 5850+m4, null]], zIndex: -1},
				{from: "154", from_tracks: ["1"], to: "158", to_tracks: ["3"], points: [[120, 5775, 0.577],[240, 5895, 0.885]]},
				{from: "158", from_tracks: ["6"], to: "154", to_tracks: ["2"], points: [[180, 5925, 0.038],[60, 5805, 0.346]]},
				//Main Line: Akada - Koda Airport
				{from: "158", from_tracks: ["7"], to: "159", to_tracks: ["1"], points: [[360, 5985, 0.15],[120, 6225, 0.95]], zIndex: -1},
				{from: "159", from_tracks: ["2"], to: "158", to_tracks: ["10"], points: [[60, 6195, 0.05],[300, 5955, 0.85]], zIndex: -1},
				//Mugitawara Line: Koda - Konishi
				{from: "158", from_tracks: ["3"], to: "201", to_tracks: ["1"], points: [[240, 5970-m4, null], [300+m4, 6030, null]], zIndex: -2},
				{from: "201", from_tracks: ["2"], to: "158", to_tracks: ["6"], points: [[300-m4, 6090, null], [180, 5970+m4, null]], zIndex: -2},
				{from: "158", from_tracks: ["1"], to: "201", to_tracks: ["1"], points: [[480, 6000-m4, null], [510+m4, 6030, null]]},
				{from: "201", from_tracks: ["2"], to: "158", to_tracks: ["2"], points: [[510-m4, 6090, null], [420, 6000+m4, null]]},
				{from: "205", from_tracks: ["1"], to: "206", to_tracks: ["1"], points: [[960, 6030, null]], showDot: true},
				{from: "205", from_tracks: ["1"], to: "206", to_tracks: ["2"], points: [[960, 6030, null], [1020, 5970, null]], showDot: true},
				{from: "206", from_tracks: ["5"], to: "205", to_tracks: ["2"], points: [[1020, 6150, null], [960, 6090, null]], showDot: true},
				{from: "206", from_tracks: ["6"], to: "205", to_tracks: ["2"], points: [[960, 6090, null]], showDot: true},
				//Mugitawara Line: Konishi - Tashinshi
				{from: "206", from_tracks: ["1"], to: "207", to_tracks: ["1"], points: [[1170, 5910, null], [1290, 6030, null]], showDot: true},
				{from: "206", from_tracks: ["2"], to: "207", to_tracks: ["1"], points: [[1230, 5970, null], [1290, 6030, null]], showDot: true},
				{from: "207", from_tracks: ["2"], to: "206", to_tracks: ["5"], points: [[1290, 6090, null], [1230, 6150, null]], showDot: true},
				{from: "207", from_tracks: ["2"], to: "206", to_tracks: ["6"], points: [[1290, 6090, null], [1170, 6210, null]], showDot: true},
				//Asamizu Line
				{from: "206", from_tracks: ["1"], to: "231", to_tracks: ["1"], points: [[1305, 5910, null], [1350, 5865, null]], showDot: true},
				{from: "206", from_tracks: ["2"], to: "231", to_tracks: ["1"], points: [[1245, 5970, null], [1350, 5865, null]], showDot: true},
				{from: "206", from_tracks: ["3"], to: "231", to_tracks: ["1"], points: [[1185, 6030, null], [1350, 5865, null]], showDot: true},
				{from: "231", from_tracks: ["2"], to: "206", to_tracks: ["4"], points: [[1410, 5895, null], [1215, 6090, null]], showDot: true},
				{from: "231", from_tracks: ["2"], to: "206", to_tracks: ["5"], points: [[1410, 5895, null], [1155, 6150, null]], showDot: true},
				{from: "231", from_tracks: ["2"], to: "206", to_tracks: ["6"], points: [[1410, 5895, null], [1095, 6210, null]], showDot: true},
				//Mugita Line: Tashinshi - Mugitawara
				{from: "211", from_tracks: ["2"], to: "212", to_tracks: ["1"], points: [[1770-m4, 6030, null], [1800, 6000-m4, null]], showDot: true},
				{from: "212", from_tracks: ["2"], to: "211", to_tracks: ["3"], points: [[1860, 6000+m4, null], [1770+m4, 6090, null]], showDot: true},
				{from: "212", from_tracks: ["1"], to: "213", to_tracks: ["1"], points: [[1800, 5910, null]], showDot: true},
				{from: "213", from_tracks: ["1"], to: "214", to_tracks: ["1"], points: [[1800, 5790, null]], showDot: true},
				{from: "214", from_tracks: ["2"], to: "213", to_tracks: ["4"], points: [[1860, 5790, null]], showDot: true},
				{from: "213", from_tracks: ["4"], to: "212", to_tracks: ["2"], points: [[1860, 5910, null]], showDot: true},
				//Tashin Line
				{from: "211", from_tracks: ["1"], to: "251", to_tracks: ["1"], points: [[1680, 5970, null], [1650, 5940, null]], showDot: true},
				{from: "251", from_tracks: ["1"], to: "211", to_tracks: ["1"], points: [[1650, 5940, null], [1680, 5970, null]], showDot: true},
				{from: "251", from_tracks: ["1"], to: "252", to_tracks: ["1"], points: [[1650, 5820, null], [1620, 5790, null]], showDot: true},
				{from: "252", from_tracks: ["2"], to: "251", to_tracks: ["1"], points: [[1680, 5790, null], [1650, 5820, null]], showDot: true},
				{from: "252", from_tracks: ["1"], to: "253", to_tracks: ["1"], points: [[1620, 5730, null], [1650, 5700, null]], showDot: true},
				{from: "253", from_tracks: ["1"], to: "252", to_tracks: ["2"], points: [[1650, 5700, null], [1680, 5730, null]], showDot: true},
				{from: "255", from_tracks: ["1"], to: "256", to_tracks: ["1"], points: [[1650, 5460, null], [1620, 5430, null]], showDot: true},
				{from: "256", from_tracks: ["2"], to: "255", to_tracks: ["1"], points: [[1680, 5430, null], [1650, 5460, null]], showDot: true},
				{from: "256", from_tracks: ["1"], to: "257", to_tracks: ["1"], points: [[1620, 5370, null], [1650, 5340, null]], showDot: true},
				{from: "257", from_tracks: ["1"], to: "256", to_tracks: ["2"], points: [[1650, 5340, null], [1680, 5370, null]], showDot: true},
				//Tendouji Line (Subway)
				{from: "914", from_tracks: ["1"], to: "913", to_tracks: ["1"], points: [[1380, 300, null]]},
				{	from: "913", from_tracks: ["1"], to: "912", to_tracks: ["1"], points: [[1500, 300, null]]},
				{	from: "912", from_tracks: ["2"], to: "913", to_tracks: ["2"], points: [[1500, 360, null]]},
				{	from: "913", from_tracks: ["2"], to: "914", to_tracks: ["2"], points: [[1380, 360, null]]},
				{from: "911", from_tracks: ["5"], to: "910", to_tracks: ["1"], points: [[1740+m4, 300, null], [1830, 390-m4, null]]},
				{	from: "910", from_tracks: ["2"], to: "911", to_tracks: ["6"], points: [[1770, 390+m4, null], [1740-m4, 360, null]]},
				{from: "910", from_tracks: ["1"], to: "909", to_tracks: ["1"], points: [[1830, 480, null]]},
				{	from: "909", from_tracks: ["2"], to: "910", to_tracks: ["2"], points: [[1770, 480, null]]},
				{from: "909", from_tracks: ["1"], to: "908", to_tracks: ["1"], points: [[1830, 600, null]]},
				{	from: "908", from_tracks: ["2"], to: "909", to_tracks: ["2"], points: [[1770, 600, null]]},
				{from: "906", from_tracks: ["1"], to: "905", to_tracks: ["1"], points: [[1830, 840, null]]},
				{	from: "905", from_tracks: ["2"], to: "906", to_tracks: ["2"], points: [[1770, 840, null]]},
				{from: "905", from_tracks: ["1"], to: "904", to_tracks: ["1"], points: [[1830, 960, null]]},
				{	from: "904", from_tracks: ["2"], to: "905", to_tracks: ["2"], points: [[1770, 960, null]]},
				{from: "904", from_tracks: ["1"], to: "903", to_tracks: ["1"], points: [[1830, 1050+m4, null], [1740+m4, 1140, null]]},
				{	from: "903", from_tracks: ["2"], to: "904", to_tracks: ["2"], points: [[1740-m4, 1080, null], [1770, 1050-m4, null]]},
				{from: "902", from_tracks: ["1"], to: "501", to_tracks: ["3"], points: [[1560, 1140, null]]},
				{	from: "501", from_tracks: ["6"], to: "902", to_tracks: ["2"], points: [[1560, 1080, null]]},
				//Tendouji Line (Mugikyu)
				{from: "501", from_tracks: ["3"], to: "502", to_tracks: ["1"], points: [[1440, 1140, null]]},
				{	from: "502", from_tracks: ["2"], to: "501", to_tracks: ["6"], points: [[1440, 1080, null]]},
				{from: "504", from_tracks: ["1"], to: "505", to_tracks: ["1"], points: [[1200, 1140, null]]},
				{	from: "505", from_tracks: ["2"], to: "504", to_tracks: ["2"], points: [[1200, 1080, null]]},
				{from: "505", from_tracks: ["1"], to: "506", to_tracks: ["1"], points: [[1080, 1140, null]]},
				{	from: "506", from_tracks: ["2"], to: "505", to_tracks: ["2"], points: [[1080, 1080, null]]},
				{from: "508", from_tracks: ["1"], to: "509", to_tracks: ["1"], points: [[840, 1140, null]]},
				{	from: "509", from_tracks: ["2"], to: "508", to_tracks: ["2"], points: [[840, 1080, null]]},
				{from: "509", from_tracks: ["1"], to: "510", to_tracks: ["1"], points: [[720, 1140, null]]},
				{	from: "510", from_tracks: ["2"], to: "509", to_tracks: ["2"], points: [[720, 1080, null]]},
				{from: "510", from_tracks: ["1"], to: "112", to_tracks: ["2"], points: [[630+m4, 1140, null], [600, 1170+m4, null]]},
				{	from: "112", from_tracks: ["3"], to: "510", to_tracks: ["2"], points: [[540, 1170-m4, null], [630-m4, 1080, null]]},
				//Tendoji Line (Aoyama Entry)
				{from: "112", from_tracks: ["2"], to: "113", to_tracks: ["11","12"], points: [[600, 1350+m4, null], [480, 1470+m4, null]], zIndex: -1},
				{from: "113", from_tracks: ["15","16"], to: "112", to_tracks: ["3"], points: [[420, 1470-m4, null], [540, 1350-m4, null]], zIndex: -1},
				{from: "112", from_tracks: ["2"], to: "113", to_tracks: ["2"],points: [[600, 1230+m4, null], [540+m4, 1290, null], [480+m4, 1290, null], [300, 1470+m4, null]], zIndex: -2},
				{from: "113", from_tracks: ["5"], to: "112", to_tracks: ["3"],points: [[240, 1470-m4, null], [480-m4, 1230, null], [540-m4, 1230, null], [540, 1230-m4, null]], zIndex: -2},
				//Aoyama Line
				{from: "104", from_tracks: ["1","2"], to: "113", to_tracks: ["0"], points: [[300, 540, 0.054], [300, 1290, 0.700], [420, 1410, 0.820], [630, 1410, 0.940], [690, 1470, 0.980]], zIndex: -3},
				{	from: "113", from_tracks: ["0"], to: "104", to_tracks: ["3","4"], points: [[690, 1470, 0.010], [630, 1410, 0.060], [420, 1410, 0.180], [240, 1230, 0.300], [240, 540, 0.946]], zIndex: -3},
				{from: "113", from_tracks: ["0"], to: "414", to_tracks: ["2"], points: [[690, 1530, null], [840, 1680, null]]},
				{	from: "414", from_tracks: ["2"], to: "113", to_tracks: ["0"], points: [[840, 1680, null], [690, 1530, null]]},
				{from: "113", from_tracks: ["7"], to: "414", to_tracks: ["1"], points: [[840, 1530-m4, null], [870+m4, 1560, null]]},
				{	from: "414", from_tracks: ["3"], to: "113", to_tracks: ["8"], points: [[870-m4, 1620, null], [780, 1530+m4, null]]},
				{from: "414", from_tracks: ["2"], to: "415", to_tracks: ["1"], points: [[930, 1680, null]]},
				{	from: "415", from_tracks: ["2"], to: "414", to_tracks: ["2"], points: [[990, 1620, null], [930, 1680, null]]},
				{from: "415", from_tracks: ["1"], to: "416", to_tracks: ["1"], points: [[1080, 1560, null]]},
				{	from: "416", from_tracks: ["2"], to: "415", to_tracks: ["2"], points: [[1080, 1620, null]]},
				{from: "416", from_tracks: ["1"], to: "417", to_tracks: ["1"], points: [[1200, 1560, null]]},
				{	from: "417", from_tracks: ["2"], to: "416", to_tracks: ["2"], points: [[1200, 1620, null]]},
				{from: "417", from_tracks: ["1"], to: "418", to_tracks: ["1"], points: [[1260, 1560, null]]},
				{	from: "418", from_tracks: ["2"], to: "417", to_tracks: ["2"], points: [[1260, 1620, null]]},
				{from: "418", from_tracks: ["1"], to: "419", to_tracks: ["1"], points: [[1380, 1560, null]]},
				{	from: "419", from_tracks: ["2"], to: "418", to_tracks: ["2"], points: [[1380, 1620, null]]},
				{from: "420", from_tracks: ["1"], to: "421", to_tracks: ["1"], points: [[1530, 1560, null]]},
				{	from: "421", from_tracks: ["4"], to: "420", to_tracks: ["2"], points: [[1530, 1620, null]]},
				{from: "421", from_tracks: ["1"], to: "422", to_tracks: ["1"], points: [[1650, 1560, null]]},
				{	from: "422", from_tracks: ["2"], to: "421", to_tracks: ["4"], points: [[1650, 1620, null]]},
				{from: "423", from_tracks: ["1"], to: "424", to_tracks: ["1"], points: [[1860+m4, 1560, null], [1950, 1650-m4, null]]},
				{	from: "424", from_tracks: ["2"], to: "423", to_tracks: ["2"], points: [[1890, 1650+m4, null], [1860-m4, 1620, null]]},
				{from: "425", from_tracks: ["1"], to: "426", to_tracks: ["1"], points: [[1950, 1800, null]]},
				{	from: "426", from_tracks: ["4"], to: "425", to_tracks: ["2"], points: [[1890, 1800, null]]},
				{from: "426", from_tracks: ["1"], to: "427", to_tracks: ["1"], points: [[1950, 1920, null]]},
				{	from: "427", from_tracks: ["2"], to: "426", to_tracks: ["4"], points: [[1890, 1920, null]]},
				//Sunada Line
				{from: "113", from_tracks: ["17","18"], to: "301", to_tracks: ["1"], points: [[540, 1560+m4, null], [630, 1650+m4, null], [630, 1740+m4, null], [720-m4, 1830, null]]},
				{	from: "301", from_tracks: ["2"], to: "113", to_tracks: ["17","18"], points: [[720+m4, 1770, null], [690, 1740-m4, null], [690, 1650-m4, null], [600, 1560-m4, null]]},
				{from: "304", from_tracks: ["1"], to: "305", to_tracks: ["1"], points: [[1200-m4, 1830, null], [1230, 1860+m4, null]]},
				{	from: "305", from_tracks: ["2"], to: "304", to_tracks: ["2"], points: [[1290, 1860-m4, null], [1200+m4, 1770, null]]},
				{from: "305", from_tracks: ["1"], to: "306", to_tracks: ["1"], points: [[1230, 1980-m4, null], [1200-m4, 2010, null]]},
				{	from: "306", from_tracks: ["2"], to: "305", to_tracks: ["2"], points: [[1200+m4, 2070, null], [1290, 1980+m4, null]]},
				{from: "309", from_tracks: ["1"], to: "121", to_tracks: ["5"], points: [[690-m4, 2010, null], [600, 2100-m4, null]]},
				{	from: "121", from_tracks: ["6"], to: "309", to_tracks: ["2"], points: [[660, 2100+m4, null], [690+m4, 2070, null]]},
				{from: "121", from_tracks: ["5"], to: "322", to_tracks: ["1"], points: [[600, 2310+m4, null], [690-m4, 2400, null]]},
				{	from: "322", from_tracks: ["2"], to: "121", to_tracks: ["6"], points: [[690+m4, 2340, null], [660, 2310-m4, null]]},
				//Oura Line
				{from: "131", from_tracks: ["7"], to: "332", to_tracks: ["1"], points: [[660, 3030+m4, null], [690+m4, 3000, null]]},
				{	from: "332", from_tracks: ["2"], to: "131", to_tracks: ["8"], points: [[690-m4, 2940, null], [600, 3030-m4, null]]},
				//Josui Line N
				{from: "139", from_tracks: ["5"], to: "351", to_tracks: ["1"], points: [[420, 3915, null], [450, 3945, null], [450, 4065, null], [675, 4290, null]], zIndex: -4},
				{	from: "139", from_tracks: ["3"], to: "351", to_tracks: ["1"], points: [[300, 3915, null], [675, 4290, null]], zIndex: -4},
				{from: "351", from_tracks: ["2"], to: "139", to_tracks: ["6"], points: [[525, 4230, null], [390, 4095, null], [390, 3975, null], [360, 3945, null]], zIndex: -5},
				{	from: "351", from_tracks: ["2"], to: "139", to_tracks: ["4"], points: [[525, 4230, null], [240, 3945, null]], zIndex: -5},
				//Josui Line S
				{from: "139", from_tracks: ["7"], to: "361", to_tracks: ["1"], points: [[600, 3915, null], [675, 3990, null]], zIndex: -2},
				{	from: "139", from_tracks: ["5"], to: "361", to_tracks: ["1"], points: [[420, 3915, null], [495, 3990, null]], zIndex: -2},
				{	from: "139", from_tracks: ["3"], to: "361", to_tracks: ["1"], points: [[300, 3915, null], [375, 3990, null]], zIndex: -2},
				{	from: "361", from_tracks: ["2"], to: "139", to_tracks: ["8"], points: [[645, 4050, null], [540, 3945, null]], zIndex: -3},
				{	from: "361", from_tracks: ["2"], to: "139", to_tracks: ["6"], points: [[465, 4050, null], [360, 3945, null]], zIndex: -3},
				{	from: "361", from_tracks: ["2"], to: "139", to_tracks: ["4"], points: [[345, 4050, null], [240, 3945, null]], zIndex: -3},
				{from: "363", from_tracks: ["1"], to: "364", to_tracks: ["1"], points: [[1020, 3990, null]]},
				{	from: "364", from_tracks: ["1"], to: "365", to_tracks: ["1"], points: [[1140, 3990, null]]},
				{	from: "364", from_tracks: ["2"], to: "363", to_tracks: ["2"], points: [[1020, 4050, null]]},
				{	from: "365", from_tracks: ["2"], to: "364", to_tracks: ["2"], points: [[1140, 4050, null]]},
				{from: "366", from_tracks: ["1"], to: "367", to_tracks: ["1"], points: [[1380, 3990, null]]},
				{	from: "367", from_tracks: ["1"], to: "368", to_tracks: ["1"], points: [[1500, 3990, null]]},
				{	from: "367", from_tracks: ["4"], to: "366", to_tracks: ["2"], points: [[1380, 4050, null]]},
				{	from: "368", from_tracks: ["2"], to: "367", to_tracks: ["4"], points: [[1500, 4050, null]]},
				{from: "370", from_tracks: ["1"], to: "371", to_tracks: ["1","2"], points: [[1830+m4, 3990, null], [1920, 4080-m4, null], [1920, 4110, null]]},
				{	from: "371", from_tracks: ["3","4"], to: "370", to_tracks: ["2"], points: [[1860, 4110, null], [1860, 4080+m4, null], [1830-m4, 4050, null]]},
				{from: "371", from_tracks: ["1"], to: "372", to_tracks: ["1"], points: [[1920, 4230, null]]},
				{	from: "372", from_tracks: ["2"], to: "371", to_tracks: ["4"], points: [[1860, 4230, null]]},

				//With crossings
				{from: "142", from_tracks: ["1","2"], to: "141", to_tracks: ["2"], points: [[300, 4320, null]]},
				{from: "141", from_tracks: ["1"], to: "142", to_tracks: ["3","4"], points: [[240, 4320, null]]},
				{from: "148", from_tracks: ["1"], to: "147", to_tracks: ["2"], points: [[240, 4950, null]]},
				{from: "152", from_tracks: ["1"], to: "151", to_tracks: ["2"], points: [[240, 5310, null]]},
				{from: "154", from_tracks: ["3"], to: "153", to_tracks: ["2"], points: [[240, 5490, null]]},
				{from: "154", from_tracks: ["1"], to: "150", to_tracks: ["2"], points: [[60, 5490, null]]},
				{from: "150", from_tracks: ["1"], to: "154", to_tracks: ["2"], points: [[120, 5490, null]]},
				{from: "156", from_tracks: ["1"], to: "155", to_tracks: ["2"], points: [[240, 5670, null]]},
				{from: "211", from_tracks: ["2"], to: "210", to_tracks: ["2"], points: [[1650, 6090, null]], showDot: true},
				{from: "210", from_tracks: ["1"], to: "211", to_tracks: ["3"], points: [[1650, 6030, null]], showDot: true},
				{from: "213", from_tracks: ["1","2"], to: "212", to_tracks: ["2"], points: [[1860, 5910, null]], showDot: true},
				{from: "212", from_tracks: ["1"], to: "213", to_tracks: ["3","4"], points: [[1800, 5910, null]], showDot: true},
				{from: "374", from_tracks: ["1"], to: "373", to_tracks: ["2"], points: [[1860, 4380, null]]},
				//
			],
		},
		//Aida Line
		"aida": {
			train_icon_width: 80,
			train_runs: [
				{from: "_001", to: "_999", icons: {"7000": 30, "8000": 35, "9000a": 20, "9000b": 10}},
			],
			stations: {
				//A
				"154": [{tracks: ["5"], location: [390, 180], shift: [+30, 0]},{tracks: ["6"], location: [390, 180], shift: [-30, 0]},],
				"702": [{tracks: ["1"], location: [390, 300], shift: [+30, 0]},{tracks: ["2"], location: [390, 300], shift: [-30, 0]},],
				"703": [{tracks: ["1"], location: [390, 420], shift: [+30, 0]},{tracks: ["2"], location: [390, 420], shift: [-30, 0]},],
				"704": [{tracks: ["1"], location: [390, 540], shift: [+30, 0]},{tracks: ["2"], location: [390, 540], shift: [-30, 0]},],
				"705": [
					{tracks: ["1"], location: [390, 660], shift: [+60, 0]},
					{tracks: ["2"], location: [390, 660], shift: [0, 0]},
					{tracks: ["3"], location: [390, 660], shift: [-60, 0]},
				],
				"706": [{tracks: ["1"], location: [390, 780], shift: [+30, 0]},{tracks: ["2"], location: [390, 780], shift: [-30, 0]},],
				"150": [
					{tracks: ["7"], location: [390, 900], shift: [+60, 0]},
					{tracks: ["8"], location: [390, 900], shift: [0, 0]},
					{tracks: ["9"], location: [390, 900], shift: [-60, 0]},
				],
				"708": [{tracks: ["1"], location: [390, 1020], shift: [+30, 0]},{tracks: ["2"], location: [390, 1020], shift: [-30, 0]},],
				"709": [{tracks: ["1"], location: [390, 1140], shift: [+30, 0]},{tracks: ["2"], location: [390, 1140], shift: [-30, 0]},],
				"710": [{tracks: ["1"], location: [390, 1260], shift: [+30, 0]},{tracks: ["2"], location: [390, 1260], shift: [-30, 0]},],
				"711": [{tracks: ["1"], location: [390, 1380], shift: [+30, 0]},{tracks: ["2"], location: [390, 1380], shift: [-30, 0]},],
				"712": [
					{tracks: ["1"], location: [390, 1500], shift: [+90, 0]},
					{tracks: ["2"], location: [390, 1500], shift: [+30, 0]},
					{tracks: ["3"], location: [390, 1500], shift: [-30, 0]},
					{tracks: ["4"], location: [390, 1500], shift: [-90, 0]},
				],
				"713": [{tracks: ["1"], location: [390, 1740], shift: [+30, 0]},{tracks: ["2"], location: [390, 1740], shift: [-30, 0]},],
				"714": [{tracks: ["1"], location: [390, 1860], shift: [+30, 0]},{tracks: ["2"], location: [390, 1860], shift: [-30, 0]},],
				"715": [{tracks: ["1"], location: [390, 1980], shift: [+30, 0]},{tracks: ["2"], location: [390, 1980], shift: [-30, 0]},],
				//B
				"145": [{tracks: ["7"], location: [690, 1140], shift: [+30, 0]},{tracks: ["8"], location: [690, 1140], shift: [-30, 0]},],
				"752": [{tracks: ["1"], location: [690, 1260], shift: [+30, 0]},{tracks: ["2"], location: [690, 1260], shift: [-30, 0]},],
				"753": [{tracks: ["1"], location: [690, 1380], shift: [+30, 0]},{tracks: ["2"], location: [690, 1380], shift: [-30, 0]},],
				"754": [{tracks: ["1"], location: [690, 1590], shift: [+90, 0]},{tracks: ["2"], location: [690, 1590], shift: [-90, 0]},],
				"755": [{tracks: ["1"], location: [690, 1740], shift: [+30, 0]},{tracks: ["2"], location: [690, 1740], shift: [-30, 0]},],
				"756": [{tracks: ["1"], location: [690, 1860], shift: [+30, 0]},{tracks: ["2"], location: [690, 1860], shift: [-30, 0]},],
				"757": [{tracks: ["1"], location: [690, 1980], shift: [+30, 0]},{tracks: ["2"], location: [690, 1980], shift: [-30, 0]},],
				//C
				"758": [
					{tracks: ["1"], location: [510, 2310], shift: [+120, 0]},
					{tracks: ["2"], location: [510, 2310], shift: [+60, 0]},
					{tracks: ["3"], location: [510, 2310], shift: [0, 0]},
					{tracks: ["4"], location: [510, 2310], shift: [-60, 0]},
				],
				"716": [
					{tracks: ["1"], location: [510, 2400], shift: [+120, 0]},
					{tracks: ["2"], location: [510, 2400], shift: [+60, 0]},
					{tracks: ["3"], location: [510, 2400], shift: [0, 0]},
					{tracks: ["4"], location: [510, 2400], shift: [-60, 0]},
					{tracks: ["5"], location: [510, 2400], shift: [-120, 0]},
				],
				//D
				"731": [{tracks: ["1"], location: [390, 2610], shift: [+30, 0]},{tracks: ["2"], location: [390, 2610], shift: [-30, 0]},],
				"732": [{tracks: ["1"], location: [390, 2730], shift: [+30, 0]},{tracks: ["2"], location: [390, 2730], shift: [-30, 0]},],
				"733": [{tracks: ["1"], location: [390, 2850], shift: [+30, 0]},{tracks: ["2"], location: [390, 2850], shift: [-30, 0]},],
				"734": [{tracks: ["1"], location: [390, 2970], shift: [+30, 0]},{tracks: ["2"], location: [390, 2970], shift: [-30, 0]},],
				"735": [{tracks: ["1"], location: [390, 3120], shift: [+30, 0]},{tracks: ["2"], location: [390, 3120], shift: [-30, 0]},],
				//E
				"717": [{tracks: ["1"], location: [690, 2610], shift: [+30, 0]},{tracks: ["2"], location: [690, 2610], shift: [-30, 0]},],
				"718": [{tracks: ["1"], location: [690, 2730], shift: [+30, 0]},{tracks: ["2"], location: [690, 2730], shift: [-30, 0]},],
				"719": [{tracks: ["1"], location: [690, 2850], shift: [+30, 0]},{tracks: ["2"], location: [690, 2850], shift: [-30, 0]},],
				"720": [{tracks: ["1"], location: [690, 2970], shift: [+30, 0]},{tracks: ["2"], location: [690, 2970], shift: [-30, 0]},],
				"721": [
					{tracks: ["1"], location: [750, 3150], shift: [+30, 0]},
					{tracks: ["2"], location: [750, 3150], shift: [-30, 0]},
					{tracks: ["3"], location: [750, 3150], shift: [-90, 0]},
				],
				"722": [{tracks: ["1"], location: [720, 3360], shift: [0, 0]},],
				//F
				"723": [{tracks: ["1"], location: [600, 3360], shift: [0, 0]},],
				"724": [{tracks: ["1"], location: [600, 3480], shift: [0, 0]},],
				"725": [{tracks: ["1"], location: [600, 3600], shift: [+30, 0]},{tracks: ["2"], location: [600, 3600], shift: [-30, 0]},],
				"726": [{tracks: ["1"], location: [600, 3720], shift: [0, 0]},],
				"727": [{tracks: ["1"], location: [600, 3840], shift: [0, 0]},],
			},

			section_points: [
				//704 - 705
				{from: "704", from_tracks: ["1"], to: "705", to_tracks: ["1"], points: [[420, 600, null], [450, 630, null]], showDot: true},
				{from: "705", from_tracks: ["3"], to: "704", to_tracks: ["2"], points: [[330, 630, null], [360, 600, null]], showDot: true},
				//705 - 706
				{from: "705", from_tracks: ["1"], to: "706", to_tracks: ["1"], points: [[450, 690, null], [420, 720, null]], showDot: true},
				{from: "705", from_tracks: ["2"], to: "706", to_tracks: ["1"], points: [[390, 690, null], [420, 720, null]], showDot: true},
				{from: "706", from_tracks: ["2"], to: "705", to_tracks: ["3"], points: [[360, 720, null], [330, 690, null]], showDot: true},
				{from: "706", from_tracks: ["2"], to: "705", to_tracks: ["2"], points: [[360, 720, null], [390, 690, null]], showDot: true},
				//706 - 150
				{from: "706", from_tracks: ["1"], to: "150", to_tracks: ["7"], points: [[420, 810, null], [450, 840, null]], showDot: true},
				{from: "150", from_tracks: ["8"], to: "706", to_tracks: ["2"], points: [[390, 870, null], [360, 840, null]], showDot: true},
				{from: "150", from_tracks: ["9"], to: "706", to_tracks: ["2"], points: [[330, 870, null], [360, 840, null]], showDot: true},
				//150 - 708
				{from: "150", from_tracks: ["7"], to: "708", to_tracks: ["1"], points: [[450, 960, null], [420, 990, null]], showDot: true},
				{from: "708", from_tracks: ["2"], to: "150", to_tracks: ["8"], points: [[360, 960, null], [390, 930, null]], showDot: true},
				{from: "708", from_tracks: ["2"], to: "150", to_tracks: ["9"], points: [[360, 960, null], [330, 930, null]], showDot: true},
				//711 - 712
				{from: "711", from_tracks: ["1"], to: "712", to_tracks: ["1"], points: [[420, 1410, null], [480, 1470, null]], showDot: true},
				{from: "712", from_tracks: ["4"], to: "711", to_tracks: ["2"], points: [[300, 1470, null], [360, 1410, null]], showDot: true},
				//712 - 713
				{from: "712", from_tracks: ["1"], to: "713", to_tracks: ["1"], points: [[480, 1530, null], [420, 1590, null]], showDot: true},
				{from: "713", from_tracks: ["2"], to: "712", to_tracks: ["4"], points: [[360, 1590, null], [300, 1530, null]], showDot: true},
				//715 - 716
				{from: "715", from_tracks: ["1"], to: "716", to_tracks: ["1"], points: [[420, 2010, null], [480, 2070, null], [510, 2070, null], [630, 2190, null]], showDot: true},
				{from: "715", from_tracks: ["1"], to: "716", to_tracks: ["2"], points: [[420, 2010, null], [480, 2070, null], [510, 2070, null], [630, 2190, null], [630, 2220, null], [570, 2280, null]], showDot: true},
				{from: "716", from_tracks: ["3"], to: "715", to_tracks: ["2"], points: [[510, 2280, null], [450, 2220, null], [450, 2130, null], [360, 2040, null]], showDot: true},
				{from: "716", from_tracks: ["4"], to: "715", to_tracks: ["2"], points: [[450, 2130, null], [360, 2040, null]], showDot: true},
				{from: "716", from_tracks: ["5"], to: "715", to_tracks: ["2"], points: [[390, 2220, null], [450, 2160, null], [450, 2130, null], [360, 2040, null]], showDot: true},
				//715 - 758
				{from: "715", from_tracks: ["1"], to: "758", to_tracks: ["1"], points: [[420, 2010, null], [480, 2070, null], [510, 2070, null], [630, 2190, null]], showDot: true},
				{from: "715", from_tracks: ["1"], to: "758", to_tracks: ["2"], points: [[420, 2010, null], [480, 2070, null], [510, 2070, null], [630, 2190, null], [630, 2220, null], [570, 2280, null]], showDot: true},
				{from: "758", from_tracks: ["3"], to: "715", to_tracks: ["2"], points: [[510, 2280, null], [450, 2220, null], [450, 2130, null], [360, 2040, null]], showDot: true},
				{from: "758", from_tracks: ["4"], to: "715", to_tracks: ["2"], points: [[450, 2130, null], [360, 2040, null]], showDot: true},
				//753 - 754
				{from: "753", from_tracks: ["1"], to: "754", to_tracks: ["1"], points: [[720, 1500, null], [780, 1560, null]], showDot: true},
				{from: "754", from_tracks: ["2"], to: "753", to_tracks: ["2"], points: [[600, 1560, null], [660, 1500, null]], showDot: true},
				//754 - 755
				{from: "754", from_tracks: ["1"], to: "755", to_tracks: ["1"], points: [[780, 1620, null], [720, 1680, null]], showDot: true},
				{from: "755", from_tracks: ["2"], to: "754", to_tracks: ["2"], points: [[660, 1680, null], [600, 1620, null]], showDot: true},
				//757 - 716
				{from: "757", from_tracks: ["1"], to: "716", to_tracks: ["1"], points: [[720, 2040, null], [570, 2190, null], [570, 2220, null], [630, 2280, null]], zIndex: +1, showDot: true},
				{from: "757", from_tracks: ["1"], to: "716", to_tracks: ["2"], points: [[720, 2040, null], [570, 2190, null]], zIndex: +1, showDot: true},
				{from: "716", from_tracks: ["3"], to: "757", to_tracks: ["2"], points: [[510, 2160, null], [660, 2010, null]], zIndex: +1, showDot: true},
				{from: "716", from_tracks: ["4"], to: "757", to_tracks: ["2"], points: [[450, 2280, null], [510, 2220, null], [510, 2160, null], [660, 2010, null]], zIndex: +1, showDot: true},
				//757 - 758
				{from: "757", from_tracks: ["1"], to: "758", to_tracks: ["1"], points: [[720, 2040, null], [570, 2190, null], [570, 2220, null], [630, 2280, null]], zIndex: +1, showDot: true},
				{from: "757", from_tracks: ["1"], to: "758", to_tracks: ["2"], points: [[720, 2040, null], [570, 2190, null]], zIndex: +1, showDot: true},
				{from: "758", from_tracks: ["3"], to: "757", to_tracks: ["2"], points: [[510, 2160, null], [660, 2010, null]], zIndex: +1, showDot: true},
				{from: "758", from_tracks: ["4"], to: "757", to_tracks: ["2"], points: [[450, 2280, null], [510, 2220, null], [510, 2160, null], [660, 2010, null]], zIndex: +1, showDot: true},
				//716 - 731
				{from: "716", from_tracks: ["2"], to: "731", to_tracks: ["1"], points: [[570, 2430, null], [420, 2580, null]], showDot: true},
				{from: "731", from_tracks: ["2"], to: "716", to_tracks: ["4"], points: [[360, 2550, null], [450, 2460, null]], showDot: true},
				//734 - 735
				{from: "734", from_tracks: ["1"], to: "735", to_tracks: ["2"], points: [[420, 3030, null], [360, 3090, null]], showDot: true},
				{from: "735", from_tracks: ["1"], to: "734", to_tracks: ["2"], points: [[420, 3090, null], [360, 3030, null]], showDot: true},
				//716 - 717
				{from: "716", from_tracks: ["1"], to: "717", to_tracks: ["1"], points: [[630, 2460, null], [720, 2550, null]], showDot: true},
				{from: "717", from_tracks: ["2"], to: "716", to_tracks: ["3"], points: [[660, 2580, null], [510, 2430, null]], showDot: true},
				//720 - 721
				{from: "720", from_tracks: ["1"], to: "721", to_tracks: ["1"], points: [[720, 3050, null], [780, 3110, null]], showDot: true},
				{from: "721", from_tracks: ["1"], to: "720", to_tracks: ["2"], points: [[780, 3110, null], [660, 2990, null]], showDot: true},
				{from: "720", from_tracks: ["1"], to: "721", to_tracks: ["3"], points: [[720, 3070, null], [660, 3130, null]], showDot: true},
				//721 - 722
				{from: "722", from_tracks: ["1"], to: "721", to_tracks: ["3"], points: [[720, 3240, null], [660, 3180, null]], showDot: true},
				//721 - 723
				{from: "721", from_tracks: ["2"], to: "723", to_tracks: ["1"], points: [[720, 3180, null], [600, 3300, null]], showDot: true},
				{from: "723", from_tracks: ["1"], to: "721", to_tracks: ["3"], points: [[600, 3300, null], [660, 3240, null]], showDot: true},
				//724 - 725
				{from: "724", from_tracks: ["1"], to: "725", to_tracks: ["1"], points: [[600, 3540, null], [630, 3570, null]], showDot: true},
				{from: "725", from_tracks: ["2"], to: "724", to_tracks: ["1"], points: [[570, 3570, null], [600, 3540, null]], showDot: true},
				//725 - 726
				{from: "725", from_tracks: ["1"], to: "726", to_tracks: ["1"], points: [[630, 3630, null], [600, 3660, null]], showDot: true},
				{from: "726", from_tracks: ["1"], to: "725", to_tracks: ["2"], points: [[600, 3660, null], [570, 3630, null]], showDot: true},
			],

		},
		//Kouda Kaigan Line
		"kaigan": {
			train_icon_width: 80,
			train_runs: [
				{from: "K01", to: "K49", icons: {"kkt100": 9, "kkt200": 3}},
				{from: "K51", to: "K99", icons: {"kkt100": 10, "kkt200": 3}},
			],
			stations: {
				//Common
				"237": [
					{tracks: ["3"], location: [390, 180], shift: [-30, 0]},
					{tracks: ["4"], location: [390, 180], shift: [+30, 0]},
					{tracks: ["5"], location: [690, 180], shift: [+30, 0]},
					{tracks: ["6"], location: [690, 180], shift: [-30, 0]},
				],
				//West Rail
				"822": [{tracks: ["1"], location: [390, 300], shift: [0, 0]}],
				"898": [{tracks: ["1"], location: [390, 420], shift: [-30, 0]}, {tracks: ["2"], location: [390, 420], shift: [+30, 0]}],
				"821": [{tracks: ["1"], location: [390, 480], shift: [0, 0]}],
				"820": [{tracks: ["1"], location: [390, 600], shift: [-30, 0]}, {tracks: ["2"], location: [390, 600], shift: [+30, 0]}],
				"819": [{tracks: ["1"], location: [390, 750], shift: [-30, 0]}, {tracks: ["2"], location: [390, 750], shift: [+30, 0]}],
				"818": [{tracks: ["1"], location: [390, 870], shift: [0, 0]}],
				"817": [{tracks: ["1"], location: [390, 990], shift: [-30, 0]}, {tracks: ["2"], location: [390, 990], shift: [+30, 0]}],
				"816": [{tracks: ["1"], location: [390, 1140], shift: [-30, 0]}, {tracks: ["2"], location: [390, 1140], shift: [+30, 0]}],
				"815": [{tracks: ["1"], location: [390, 1260], shift: [0, 0]}],
				"814": [{tracks: ["1"], location: [390, 1380], shift: [-30, 0]}, {tracks: ["2"], location: [390, 1380], shift: [+30, 0]}],
				"813": [{tracks: ["1"], location: [390, 1500], shift: [0, 0]}],
				"812": [{tracks: ["1"], location: [390, 1620], shift: [-30, 0]}, {tracks: ["2"], location: [390, 1620], shift: [+30, 0]}],
				"811": [{tracks: ["1"], location: [390, 1800], shift: [-30, 0]}, {tracks: ["2"], location: [390, 1800], shift: [+30, 0]}],
				"810": [
					{tracks: ["1"], location: [390, 1980], shift: [-60, 0]},
					{tracks: ["2"], location: [390, 1980], shift: [0, 0]},
					{tracks: ["3"], location: [390, 1980], shift: [+60, 0]},
				],
				"809": [{tracks: ["1"], location: [390, 2160], shift: [-30, 0]}, {tracks: ["2"], location: [390, 2160], shift: [+30, 0]}],
				"808": [{tracks: ["1"], location: [390, 2280], shift: [0, 0]}],
				"807": [{tracks: ["1"], location: [390, 2400], shift: [-30, 0]}, {tracks: ["2"], location: [390, 2400], shift: [+30, 0]}],
				"806": [{tracks: ["1"], location: [390, 2520], shift: [0, 0]}],
				"805": [{tracks: ["1"], location: [390, 2640], shift: [-30, 0]}, {tracks: ["2"], location: [390, 2640], shift: [+30, 0]}],
				"804": [{tracks: ["1"], location: [390, 2760], shift: [0, 0]}],
				"803": [{tracks: ["1"], location: [390, 2880], shift: [-30, 0]}, {tracks: ["2"], location: [390, 2880], shift: [+30, 0]}],
				"802": [{tracks: ["1"], location: [390, 3180], shift: [-30, 0]}, {tracks: ["2"], location: [390, 3180], shift: [+30, 0]}],
				"158": [{tracks: ["11"], location: [390, 3360], shift: [-30, 0]}, {tracks: ["12"], location: [390, 3360], shift: [+30, 0]}],
				//East Rail
				"824": [{tracks: ["1"], location: [690, 300], shift: [0, 0]}],
				"825": [{tracks: ["1"], location: [690, 420], shift: [+30, 0]}, {tracks: ["2"], location: [690, 420], shift: [-30, 0]}],
				"826": [{tracks: ["1"], location: [690, 570], shift: [0, 0]}],
				"827": [{tracks: ["1"], location: [690, 720], shift: [+30, 0]}, {tracks: ["2"], location: [690, 720], shift: [-30, 0]}],
				"828": [{tracks: ["1"], location: [690, 900], shift: [0, 0]}],
				"829": [{tracks: ["1"], location: [690, 1080], shift: [+30, 0]}, {tracks: ["2"], location: [690, 1080], shift: [-30, 0]}],
				"830": [{tracks: ["1"], location: [690, 1200], shift: [0, 0]}],
				"831": [{tracks: ["1"], location: [690, 1320], shift: [+30, 0]}, {tracks: ["2"], location: [690, 1320], shift: [-30, 0]}],
				"832": [{tracks: ["1"], location: [690, 1410], shift: [0, 0]}],
				"257": [{tracks: ["3"], location: [690, 1500], shift: [+30, 0]}, {tracks: ["2"], location: [690, 1500], shift: [-30, 0]}],
				"834": [{tracks: ["1"], location: [690, 1620], shift: [0, 0]}],
				"835": [{tracks: ["1"], location: [690, 1800], shift: [+30, 0]}, {tracks: ["2"], location: [690, 1800], shift: [-30, 0]}],
				"836": [{tracks: ["1"], location: [690, 1980], shift: [0, 0]}],
				"899": [{tracks: ["1"], location: [690, 2070], shift: [+30, 0]}, {tracks: ["2"], location: [690, 2070], shift: [-30, 0]}],
				"837": [{tracks: ["1"], location: [690, 2230], shift: [0, 0]}],
				"838": [{tracks: ["1"], location: [690, 2370], shift: [+30, 0]}, {tracks: ["2"], location: [690, 2370], shift: [-30, 0]}],
				"839": [{tracks: ["1"], location: [690, 2550], shift: [0, 0]}],
				"840": [{tracks: ["1"], location: [690, 2700], shift: [+30, 0]}, {tracks: ["2"], location: [690, 2700], shift: [-30, 0]}],
				"841": [{tracks: ["1"], location: [690, 2970], shift: [+30, 0]}, {tracks: ["2"], location: [690, 2970], shift: [-30, 0]}],
				"842": [{tracks: ["1"], location: [690, 3180], shift: [0, 0]}],
				"843": [{tracks: ["1"], location: [690, 3300], shift: [+30, 0]}, {tracks: ["2"], location: [690, 3300], shift: [-30, 0]}],
				"844": [{tracks: ["1"], location: [690, 3420], shift: [0, 0]}],
				"845": [
					{tracks: ["1"], location: [690, 3540], shift: [-60, 0]},
					{tracks: ["2"], location: [690, 3540], shift: [0, 0]},
					{tracks: ["3"], location: [690, 3540], shift: [+60, 0]}
				],
				"846": [{tracks: ["1"], location: [690, 3720], shift: [+30, 0]}, {tracks: ["2"], location: [690, 3720], shift: [-30, 0]}],
				"847": [{tracks: ["1"], location: [690, 3840], shift: [0, 0]}],
				"217": [{tracks: ["3"], location: [690, 3960], shift: [+30, 0]}, {tracks: ["4"], location: [690, 3960], shift: [-30, 0]}],
				//Spur Line
				"851": [{tracks: ["1"], location: [510, 3480], shift: [0, 0]}],
				"852": [{tracks: ["1"], location: [390, 3480], shift: [0, -30]}, {tracks: ["2"], location: [390, 3480], shift: [0, +30]}],
				"853": [{tracks: ["1"], location: [270, 3480], shift: [0, 0]}],
				"854": [{tracks: ["1"], location: [180, 3480], shift: [0, -30]}, {tracks: ["2"], location: [180, 3480], shift: [0, +30]}],
			},

			section_points: [
				//West Rail
				//237 to 822
				{from: "237", from_tracks: ["3"], to: "822", to_tracks: ["1"], points: [[360, 210, null], [390, 240, null]], showDot: true},
				{from: "237", from_tracks: ["4"], to: "822", to_tracks: ["1"], points: [[420, 210, null], [390, 240, null]], showDot: true},
				{from: "822", from_tracks: ["1"], to: "237", to_tracks: ["3"], points: [[390, 240, null], [360, 210, null]], showDot: true},
				{from: "822", from_tracks: ["1"], to: "237", to_tracks: ["4"], points: [[390, 240, null], [420, 210, null]], showDot: true},
				//822 to 898
				{from: "822", from_tracks: ["1"], to: "898", to_tracks: ["2"], points: [[390, 380, null], [420, 410, null]], showDot: true},
				{from: "898", from_tracks: ["1"], to: "822", to_tracks: ["1"], points: [[360, 410, null], [390, 380, null]], showDot: true},
				//898 to 821
				{from: "898", from_tracks: ["2"], to: "821", to_tracks: ["1"], points: [[420, 430, null], [390, 460, null]], showDot: true},
				{from: "821", from_tracks: ["1"], to: "898", to_tracks: ["1"], points: [[390, 460, null], [360, 430, null]], showDot: true},
				//821 to 820
				{from: "821", from_tracks: ["1"], to: "820", to_tracks: ["2"], points: [[390, 540, null], [420, 570, null]], showDot: true},
				{from: "820", from_tracks: ["2"], to: "821", to_tracks: ["1"], points: [[420, 570, null], [390, 540, null]], showDot: true},
				//820 to 819
				{from: "820", from_tracks: ["2"], to: "819", to_tracks: ["2"], points: [[420, 630, null], [390, 660, null], [390, 690, null], [420, 720, null]], showDot: true},
				{from: "819", from_tracks: ["1"], to: "820", to_tracks: ["2"], points: [[360, 720, null], [390, 690, null], [390, 660, null], [420, 630, null]], showDot: true},
				//819 to 818
				{from: "819", from_tracks: ["2"], to: "818", to_tracks: ["1"], points: [[420, 780, null], [390, 810, null]], showDot: true},
				{from: "818", from_tracks: ["1"], to: "819", to_tracks: ["1"], points: [[390, 810, null], [360, 780, null]], showDot: true},
				//818 to 817
				{from: "818", from_tracks: ["1"], to: "817", to_tracks: ["2"], points: [[390, 930, null], [420, 960, null]], showDot: true},
				{from: "817", from_tracks: ["2"], to: "818", to_tracks: ["1"], points: [[420, 960, null], [390, 930, null]], showDot: true},
				//817 to 816
				{from: "817", from_tracks: ["2"], to: "816", to_tracks: ["2"], points: [[420, 1020, null], [390, 1050, null], [390, 1080, null], [420, 1110, null]], showDot: true},
				{from: "816", from_tracks: ["1"], to: "817", to_tracks: ["2"], points: [[360, 1110, null], [390, 1080, null], [390, 1050, null], [420, 1020, null]], showDot: true},
				//816 to 815
				{from: "816", from_tracks: ["2"], to: "815", to_tracks: ["1"], points: [[420, 1170, null], [390, 1200, null]], showDot: true},
				{from: "815", from_tracks: ["1"], to: "816", to_tracks: ["1"], points: [[390, 1200, null], [360, 1170, null]], showDot: true},
				//815 to 814
				{from: "815", from_tracks: ["1"], to: "814", to_tracks: ["2"], points: [[390, 1320, null], [420, 1350, null]], showDot: true},
				{from: "814", from_tracks: ["2"], to: "815", to_tracks: ["1"], points: [[420, 1350, null], [390, 1320, null]], showDot: true},
				//814 to 813
				{from: "814", from_tracks: ["2"], to: "813", to_tracks: ["1"], points: [[420, 1410, null], [390, 1440, null]], showDot: true},
				{from: "813", from_tracks: ["1"], to: "814", to_tracks: ["2"], points: [[390, 1440, null], [420, 1410, null]], showDot: true},
				//813 to 812
				{from: "813", from_tracks: ["1"], to: "812", to_tracks: ["2"], points: [[390, 1560, null], [420, 1590, null]], showDot: true},
				{from: "812", from_tracks: ["1"], to: "813", to_tracks: ["1"], points: [[360, 1590, null], [390, 1560, null]], showDot: true},
				//812 to 811
				{from: "812", from_tracks: ["2"], to: "811", to_tracks: ["2"], points: [[420, 1650, null], [390, 1680, null], [390, 1740, null], [420, 1770, null]], showDot: true},
				{from: "811", from_tracks: ["2"], to: "812", to_tracks: ["1"], points: [[420, 1770, null], [390, 1740, null], [390, 1680, null], [360, 1650, null]], showDot: true},
				//811 to 810
				{from: "811", from_tracks: ["2"], to: "810", to_tracks: ["2"], points: [[420, 1830, null], [390, 1860, null]], showDot: true},
				{from: "810", from_tracks: ["1"], to: "811", to_tracks: ["2"], points: [[330, 1950, null], [390, 1890, null], [390, 1860, null], [420, 1830, null]], showDot: true},
				//810 to 809
				{from: "810", from_tracks: ["3"], to: "809", to_tracks: ["2"], points: [[450, 2010, null], [390, 2070, null], [390, 2100, null], [420, 2130, null]], showDot: true},
				{from: "810", from_tracks: ["2"], to: "809", to_tracks: ["2"], points: [[390, 2100, null], [420, 2130, null]], showDot: true},
				{from: "809", from_tracks: ["1"], to: "810", to_tracks: ["1"], points: [[360, 2130, null], [390, 2100, null], [390, 2070, null], [330, 2010, null]], showDot: true},
				{from: "809", from_tracks: ["1"], to: "810", to_tracks: ["3"], points: [[360, 2130, null], [390, 2070, null], [390, 2070, null], [450, 2010, null]], showDot: true},
				//809 to 808
				{from: "809", from_tracks: ["2"], to: "808", to_tracks: ["1"], points: [[420, 2190, null], [390, 2220, null]], showDot: true},
				{from: "808", from_tracks: ["1"], to: "809", to_tracks: ["1"], points: [[390, 2220, null], [360, 2190, null]], showDot: true},
				//808 to 807
				{from: "808", from_tracks: ["1"], to: "807", to_tracks: ["2"], points: [[390, 2340, null], [420, 2370, null]], showDot: true},
				{from: "807", from_tracks: ["1"], to: "808", to_tracks: ["1"], points: [[360, 2370, null], [390, 2340, null]], showDot: true},
				//807 to 806
				{from: "807", from_tracks: ["2"], to: "806", to_tracks: ["1"], points: [[420, 2430, null], [390, 2460, null]], showDot: true},
				{from: "806", from_tracks: ["1"], to: "807", to_tracks: ["1"], points: [[390, 2460, null], [360, 2430, null]], showDot: true},
				//806 to 805
				{from: "806", from_tracks: ["1"], to: "805", to_tracks: ["2"], points: [[390, 2580, null], [420, 2610, null]], showDot: true},
				{from: "805", from_tracks: ["1"], to: "806", to_tracks: ["1"], points: [[360, 2610, null], [390, 2580, null]], showDot: true},
				//805 to 804
				{from: "805", from_tracks: ["2"], to: "804", to_tracks: ["1"], points: [[420, 2670, null], [390, 2700, null]], showDot: true},
				{from: "804", from_tracks: ["1"], to: "805", to_tracks: ["1"], points: [[390, 2700, null], [360, 2670, null]], showDot: true},
				//804 to 803
				{from: "804", from_tracks: ["1"], to: "803", to_tracks: ["2"], points: [[390, 2820, null], [420, 2850, null]], showDot: true},
				{from: "803", from_tracks: ["1"], to: "804", to_tracks: ["1"], points: [[360, 2850, null], [390, 2820, null]], showDot: true},
				//803 to 802
				{from: "803", from_tracks: ["2"], to: "802", to_tracks: ["2"], points: [[420, 2910, null], [390, 2940, null], [390, 3120, null], [420, 3150, null]], showDot: true},
				{from: "802", from_tracks: ["1"], to: "803", to_tracks: ["1"], points: [[360, 3150, null], [390, 3120, null], [390, 2940, null], [360, 2910, null]], showDot: true},
				//802 to 158
				{from: "802", from_tracks: ["2"], to: "158", to_tracks: ["11"], points: [[420, 3210, null], [390, 3240, null], [390, 3300, null], [360, 3330, null]], showDot: true},
				{from: "802", from_tracks: ["2"], to: "158", to_tracks: ["12"], points: [[420, 3210, null], [390, 3240, null], [390, 3300, null], [420, 3330, null]], showDot: true},
				{from: "802", from_tracks: ["1"], to: "158", to_tracks: ["11"], points: [[360, 3210, null], [390, 3240, null], [390, 3300, null], [360, 3330, null]], showDot: true},
				{from: "802", from_tracks: ["1"], to: "158", to_tracks: ["12"], points: [[360, 3210, null], [390, 3240, null], [390, 3300, null], [420, 3330, null]], showDot: true},
				{from: "158", from_tracks: ["11"], to: "802", to_tracks: ["1"], points: [[360, 3330, null], [390, 3300, null], [390, 3240, null], [360, 3210, null]], showDot: true},
				{from: "158", from_tracks: ["12"], to: "802", to_tracks: ["1"], points: [[420, 3330, null], [390, 3300, null], [390, 3240, null], [360, 3210, null]], showDot: true},
				{from: "158", from_tracks: ["11"], to: "802", to_tracks: ["2"], points: [[360, 3330, null], [390, 3300, null], [390, 3240, null], [420, 3210, null]], showDot: true},
				{from: "158", from_tracks: ["12"], to: "802", to_tracks: ["2"], points: [[420, 3330, null], [390, 3300, null], [390, 3240, null], [420, 3210, null]], showDot: true},
				//East Rail
				//237 to 824
				{from: "237", from_tracks: ["5"], to: "824", to_tracks: ["1"], points: [[720, 210, null], [690, 240, null]], showDot: true},
				{from: "237", from_tracks: ["6"], to: "824", to_tracks: ["1"], points: [[660, 210, null], [690, 240, null]], showDot: true},
				{from: "824", from_tracks: ["1"], to: "237", to_tracks: ["5"], points: [[690, 240, null], [720, 210, null]], showDot: true},
				{from: "824", from_tracks: ["1"], to: "237", to_tracks: ["6"], points: [[690, 240, null], [660, 210, null]], showDot: true},
				//824 to 825
				{from: "824", from_tracks: ["1"], to: "825", to_tracks: ["1"], points: [[690, 360, null], [720, 390, null]], showDot: true},
				{from: "825", from_tracks: ["2"], to: "824", to_tracks: ["1"], points: [[660, 390, null], [690, 360, null]], showDot: true},
				//825 to 826
				{from: "825", from_tracks: ["1"], to: "826", to_tracks: ["1"], points: [[720, 450, null], [690, 480, null]], showDot: true},
				{from: "826", from_tracks: ["1"], to: "825", to_tracks: ["2"], points: [[690, 480, null], [660, 450, null]], showDot: true},
				//826 to 827
				{from: "826", from_tracks: ["1"], to: "827", to_tracks: ["1"], points: [[690, 660, null], [720, 690, null]], showDot: true},
				{from: "827", from_tracks: ["2"], to: "826", to_tracks: ["1"], points: [[660, 690, null], [690, 660, null]], showDot: true},
				//827 to 828
				{from: "827", from_tracks: ["1"], to: "828", to_tracks: ["1"], points: [[720, 750, null], [690, 780, null]], showDot: true},
				{from: "828", from_tracks: ["1"], to: "827", to_tracks: ["2"], points: [[690, 780, null], [660, 750, null]], showDot: true},
				//828 to 829
				{from: "828", from_tracks: ["1"], to: "829", to_tracks: ["1"], points: [[690, 1020, null], [720, 1050, null]], showDot: true},
				{from: "829", from_tracks: ["2"], to: "828", to_tracks: ["1"], points: [[660, 1050, null], [690, 1020, null]], showDot: true},
				//829 to 830
				{from: "829", from_tracks: ["1"], to: "830", to_tracks: ["1"], points: [[720, 1110, null], [690, 1140, null]], showDot: true},
				{from: "830", from_tracks: ["1"], to: "829", to_tracks: ["2"], points: [[690, 1140, null], [660, 1110, null]], showDot: true},
				//830 to 831
				{from: "830", from_tracks: ["1"], to: "831", to_tracks: ["1"], points: [[690, 1260, null], [720, 1290, null]], showDot: true},
				{from: "831", from_tracks: ["2"], to: "830", to_tracks: ["1"], points: [[660, 1290, null], [690, 1260, null]], showDot: true},
				//831 to 832
				{from: "831", from_tracks: ["1"], to: "832", to_tracks: ["1"], points: [[720, 1350, null], [690, 1380, null]], showDot: true},
				{from: "832", from_tracks: ["1"], to: "831", to_tracks: ["2"], points: [[690, 1380, null], [660, 1350, null]], showDot: true},
				//832 to 257
				{from: "832", from_tracks: ["1"], to: "257", to_tracks: ["2"], points: [[690, 1440, null], [660, 1470, null]], showDot: true},
				{from: "832", from_tracks: ["1"], to: "257", to_tracks: ["3"], points: [[690, 1440, null], [720, 1470, null]], showDot: true},
				{from: "257", from_tracks: ["2"], to: "832", to_tracks: ["1"], points: [[660, 1470, null], [690, 1440, null]], showDot: true},
				//257 to 834
				{from: "257", from_tracks: ["3"], to: "834", to_tracks: ["1"], points: [[720, 1530, null], [690, 1560, null]], showDot: true},
				{from: "834", from_tracks: ["1"], to: "257", to_tracks: ["2"], points: [[690, 1560, null], [660, 1530, null]], showDot: true},
				//834 to 835
				{from: "834", from_tracks: ["1"], to: "835", to_tracks: ["2"], points: [[690, 1740, null], [660, 1770, null]], showDot: true},
				{from: "835", from_tracks: ["2"], to: "834", to_tracks: ["1"], points: [[660, 1770, null], [690, 1740, null]], showDot: true},
				//835 to 836
				{from: "835", from_tracks: ["2"], to: "836", to_tracks: ["1"], points: [[660, 1830, null], [690, 1860, null]], showDot: true},
				{from: "836", from_tracks: ["1"], to: "835", to_tracks: ["2"], points: [[690, 1860, null], [660, 1830, null]], showDot: true},
				//836 to 899
				{from: "836", from_tracks: ["1"], to: "899", to_tracks: ["1"], points: [[690, 2030, null], [720, 2060, null]], showDot: true},
				{from: "899", from_tracks: ["2"], to: "836", to_tracks: ["1"], points: [[660, 2060, null], [690, 2030, null]], showDot: true},
				//899 to 837
				{from: "899", from_tracks: ["1"], to: "837", to_tracks: ["1"], points: [[720, 2080, null], [690, 2110, null]], showDot: true},
				{from: "837", from_tracks: ["1"], to: "899", to_tracks: ["2"], points: [[690, 2110, null], [660, 2080, null]], showDot: true},
				//837 to 838
				{from: "837", from_tracks: ["1"], to: "838", to_tracks: ["2"], points: [[690, 2310, null], [660, 2340, null]], showDot: true},
				{from: "838", from_tracks: ["2"], to: "837", to_tracks: ["1"], points: [[660, 2340, null], [690, 2310, null]], showDot: true},
				//838 to 839
				{from: "838", from_tracks: ["2"], to: "839", to_tracks: ["1"], points: [[660, 2400, null], [690, 2430, null]], showDot: true},
				{from: "839", from_tracks: ["1"], to: "838", to_tracks: ["2"], points: [[690, 2430, null], [660, 2400, null]], showDot: true},
				//839 to 840
				{from: "839", from_tracks: ["1"], to: "840", to_tracks: ["1"], points: [[690, 2640, null], [720, 2670, null]], showDot: true},
				{from: "840", from_tracks: ["2"], to: "839", to_tracks: ["1"], points: [[660, 2670, null], [690, 2640, null]], showDot: true},
				//840 to 841
				{from: "840", from_tracks: ["1"], to: "841", to_tracks: ["2"], points: [[720, 2730, null], [690, 2760, null], [690, 2910, null], [660, 2940, null]], showDot: true},
				{from: "841", from_tracks: ["2"], to: "840", to_tracks: ["2"], points: [[660, 2940, null], [690, 2910, null], [690, 2760, null], [660, 2730, null]], showDot: true},
				//841 to 842
				{from: "841", from_tracks: ["2"], to: "842", to_tracks: ["1"], points: [[660, 3000, null], [690, 3030, null]], showDot: true},
				{from: "842", from_tracks: ["1"], to: "841", to_tracks: ["2"], points: [[690, 3030, null], [660, 3000, null]], showDot: true},
				//842 to 843
				{from: "842", from_tracks: ["1"], to: "843", to_tracks: ["1"], points: [[690, 3240, null], [720, 3270, null]], showDot: true},
				{from: "843", from_tracks: ["2"], to: "842", to_tracks: ["1"], points: [[660, 3270, null], [690, 3240, null]], showDot: true},
				//843 to 844
				{from: "843", from_tracks: ["1"], to: "844", to_tracks: ["1"], points: [[720, 3330, null], [690, 3360, null]], showDot: true},
				{from: "844", from_tracks: ["1"], to: "843", to_tracks: ["2"], points: [[690, 3360, null], [660, 3330, null]], showDot: true},
				//845 to 846
				{from: "845", from_tracks: ["1"], to: "846", to_tracks: ["1"], points: [[630, 3570, null], [690, 3630, null], [690, 3660, null], [720, 3690, null]], showDot: true},
				{from: "846", from_tracks: ["1"], to: "845", to_tracks: ["1"], points: [[720, 3690, null], [690, 3660, null], [690, 3630, null], [630, 3570, null]], showDot: true},
				{from: "845", from_tracks: ["2"], to: "846", to_tracks: ["1"], points: [[690, 3660, null], [720, 3690, null]], showDot: true},
				{from: "846", from_tracks: ["1"], to: "845", to_tracks: ["2"], points: [[720, 3690, null], [690, 3660, null]], showDot: true},
				//846 to 847
				{from: "846", from_tracks: ["1"], to: "847", to_tracks: ["1"], points: [[720, 3750, null], [690, 3780, null]], showDot: true}, 
				{from: "847", from_tracks: ["1"], to: "846", to_tracks: ["1"], points: [[690, 3780, null], [720, 3750, null]], showDot: true}, 
				//847 to 217
				{from: "847", from_tracks: ["1"], to: "217", to_tracks: ["3"], points: [[690, 3900, null], [720, 3930, null]], showDot: true},
				{from: "847", from_tracks: ["1"], to: "217", to_tracks: ["4"], points: [[690, 3900, null], [660, 3930, null]], showDot: true},
				{from: "217", from_tracks: ["3"], to: "847", to_tracks: ["1"], points: [[720, 3930, null], [690, 3900, null]], showDot: true},
				{from: "217", from_tracks: ["4"], to: "847", to_tracks: ["1"], points: [[660, 3930, null], [690, 3900, null]], showDot: true},
				//845 to 851
				{from: "845", from_tracks: ["1"], to: "851", to_tracks: ["1"], points: [[630, 3510, null], [600, 3480, null]], showDot: true},
				{from: "851", from_tracks: ["1"], to: "845", to_tracks: ["1"], points: [[600, 3480, null], [630, 3510, null]], showDot: true},
				//851 to 852
				{from: "851", from_tracks: ["1"], to: "852", to_tracks: ["2"], points: [[450, 3480, null], [420, 3510, null]], showDot: true},
				{from: "852", from_tracks: ["1"], to: "851", to_tracks: ["1"], points: [[420, 3450, null], [450, 3480, null]], showDot: true},
				//852 to 853
				{from: "852", from_tracks: ["2"], to: "853", to_tracks: ["1"], points: [[360, 3510, null], [330, 3480, null]], showDot: true},
				{from: "853", from_tracks: ["1"], to: "852", to_tracks: ["1"], points: [[330, 3480, null], [360, 3450, null]], showDot: true},
				//853 to 854
				{from: "853", from_tracks: ["1"], to: "854", to_tracks: ["1"], points: [[240, 3480, null], [210, 3450, null]], showDot: true},
				{from: "854", from_tracks: ["1"], to: "853", to_tracks: ["1"], points: [[210, 3450, null], [240, 3480, null]], showDot: true},
			],

		},
	};
}

//---------------------------------------------------------------------------------------------

init();