/**
 * Lines List
 */

global.lines = {
	"MK": {
		name: "麥急本線", name_eng: "Mugikyū Main Line", name_chi: "麦急本线", name_kor: "밀급본선",
		color: {bg: "#002084", bg_darker: "#001E68", text: "#FFF"},
		refTimeAt: {
			UP: {station: "101", depart: true},
			DN: {station: "101", depart: false},
		},
		types: ["AEL", "CLE", "RLE", "LEX", "SLE", "REX", "EXP", "SPR", "RAP", "COR", "SSR", "SEX", "SSE", "SER", "AOC", "AOE"],
		tracks: {
			overall: ["A", "B", "C"],
			default: "A",
			sections: [
				{until: "113", until_inclusive: false, A: true, C: true},
				{until: "139", until_inclusive: true, A: true, B: true, C: true},
				{until: "147", until_inclusive: false, A: true, B: true},
				{until: "148", until_inclusive: true, A: true, B: true, C: true},
				{until: "158", until_inclusive: true, A: true, B: true},
				{until: "162", until_inclusive: true, A: true},
			],
			byType: {
				"AEL": [], "ALR": [], "CLE": [], "RLE": [], "LEX": [],
				"SLE": [{track: "B", from: "145", from_inclusive: true}],
				"REX": [{track: "B", from: "113", from_inclusive: true, to: "139"}],
				"EXP": [{track: "B", from: "113", from_inclusive: true, to: "139"}],
				"SPR": [{track: "B", from: "113", from_inclusive: true, to: "139"}],
				"RAP": [{track: "B", from: "113", from_inclusive: true, to: "158"}],
				"COR": [{track: "B", from: "113", from_inclusive: true, to: "158"}],
				"SEX": [
					{track: "B", from: "113", from_inclusive: true, to: "131"},
					{track: "C", from: "131", from_inclusive: true, to: "139"}
				],
				"SSE": [
					{track: "B", from: "113", from_inclusive: true, to: "121"},
					{track: "C", from: "121", from_inclusive: false, to: "139"}
				],
				"SER": [{track: "C", from: "113", from_inclusive: true, to: "139"}],
				"LOC": [
					{track: "C", to: "139"},
					{track: "B", from: "139", from_inclusive: false, to: "147"},
					{track: "C", from: "147", from_inclusive: true, to: "148"},
					{track: "B", from: "148", from_inclusive: false, to: "158"},
				],
				"AOC": [], "AOE": [],
			},
		},
		stations: [
			{id: "101", mileage: 0.0, types: ["AEL", "CLE", "RLE", "LEX", "SLE", "REX", "EXP", "RAP", "SEX", "SSE", "AOC", "AOE"]},
			{id: "102", mileage: 0.8},
			{id: "103", mileage: 1.8},
			{id: "104", mileage: 2.7, types: ["AEL", "CLE", "RLE", "LEX", "SLE", "REX", "EXP", "RAP", "SEX", "SSE", "AOC", "AOE"], showArrival: true},
			{id: "105", mileage: 3.6},
			{id: "106", mileage: 4.5},
			{id: "107", mileage: 5.5},
			{id: "108", mileage: 6.5},
			{id: "109", mileage: 7.7},
			{id: "110", mileage: 8.7},
			{id: "111", mileage: 9.7},
			{id: "112", mileage: 10.6},
			{id: "113", mileage: 12.0, types: ["LEX", "SLE", "REX", "EXP", "RAP", "COR", "SEX", "SSE", "SER"], showArrival: true},
			{id: "114", mileage: 13.4, types: ["SPR", "SER"]},
			{id: "115", mileage: 14.7, types: ["REX", "EXP", "SPR", "RAP", "COR", "SEX", "SSE", "SER"]},
			{id: "116", mileage: 15.9, types: ["SPR", "SER"]},
			{id: "117", mileage: 17.1, types: ["SER"]},
			{id: "118", mileage: 18.4, types: ["SER"]},
			{id: "119", mileage: 19.7, types: ["SER"]},
			{id: "120", mileage: 21.2, types: ["SER"]},
			{id: "121", mileage: 22.5, types: ["REX", "EXP", "SPR", "RAP", "COR", "SEX", "SSE", "SER"], showArrival: true},
			{id: "122", mileage: 23.7, types: ["SSE", "SER"]},
			{id: "123", mileage: 24.8, types: ["SSE", "SER"]},
			{id: "124", mileage: 25.9, types: ["SSE", "SER"]},
			{id: "125", mileage: 27.1, types: ["SPR", "RAP", "COR", "SSE", "SER"]},
			{id: "126", mileage: 28.2, types: ["SSE", "SER"]},
			{id: "127", mileage: 29.6, types: ["EXP", "SEX", "SSE", "SER"]},
			{id: "128", mileage: 31.1, types: ["SSR", "SSE"]},
			{id: "129", mileage: 32.2, types: ["SSR", "SSE"]},
			{id: "130", mileage: 33.3, types: ["SSR", "SSE"]},
			{id: "131", mileage: 34.5, types: ["REX", "EXP", "SPR", "RAP", "COR", "SSR", "SEX", "SSE"], showArrival: true},
			{id: "132", mileage: 35.6, types: ["SSR", "SEX", "SSE"]},
			{id: "133", mileage: 36.8, types: ["SSR", "SEX", "SSE"]},
			{id: "134", mileage: 38.5, types: ["SSR", "SEX", "SSE"]},
			{id: "135", mileage: 40.1, types: ["EXP", "SPR", "RAP", "COR", "SSR", "SEX", "SSE"]},
			{id: "136", mileage: 41.3, types: ["SSR", "SEX", "SSE"]},
			{id: "137", mileage: 42.4, types: ["SSR", "SEX", "SSE"]},
			{id: "138", mileage: 43.7, types: ["SSR", "SEX", "SSE"]},
			{id: "139", mileage: 45.0, types: ["REX", "EXP", "SPR", "RAP", "COR", "SEX", "SSE"], showArrival: true},
			{id: "140", mileage: 50.7, types: []},
			{id: "141", mileage: 53.1, types: []},
			{id: "142", mileage: 55.2, types: ["RAP", "COR"]},
			{id: "143", mileage: 57.1, types: []},
			{id: "144", mileage: 61.9, types: []},
			{id: "145", mileage: 63.8, types: ["LEX", "SLE", "RAP", "COR"], showArrival: true},
			{id: "146", mileage: 65.2, types: ["SLE"]},
			{id: "147", mileage: 66.7, types: ["SLE"]},
			{id: "148", mileage: 67.8, types: ["SLE"]},
			{id: "149", mileage: 68.9, types: ["SLE"]},
			{id: "150", mileage: 70.0, types: ["RLE", "LEX", "REX", "SLE", "SPR", "RAP", "COR"], types2: ["AEL"], showArrival: true},
			{id: "151", mileage: 71.0, types: ["SLE", "COR"]},
			{id: "152", mileage: 72.0, types: ["SLE", "COR"], showArrival: true},
			{id: "153", mileage: 73.0, types: ["SLE", "COR"]},
			{id: "154", mileage: 74.0, types: ["CLE", "RLE", "REX", "SLE", "RAP", "COR"], types2: ["AEL", "LEX"], showArrival: true},
			{id: "155", mileage: 75.1, types: ["SLE", "COR"]},
			{id: "156", mileage: 76.1, types: ["SLE", "COR"], showArrival: true},
			{id: "157", mileage: 77.7, types: ["SLE", "COR"]},
			{id: "158", mileage: 79.3, types: ["RLE", "LEX", "REX", "SLE", "RAP", "COR"], types2: ["AEL"], showArrival: true},
			{id: "159", mileage: 82.6, types: ["SPR", "RAP", "COR"]},
			{id: "160", mileage: 83.8, types: ["SPR", "RAP", "COR"]},
			{id: "161", mileage: 85.7, types: ["AEL", "LEX", "SPR", "RAP", "COR"], showArrival: true},
			{id: "162", mileage: 87.0, types: ["AEL", "LEX", "SPR", "RAP", "COR"]},
		],
	},
	"MT": {
		name: "麥急麥田原線", name_eng: "Mugikyū Mugitawara Line", name_chi: "麦急麦田原线", name_kor: "밀급밀타하라선",
		color: {bg: "#EF9300", bg_darker: "#BF6D00", text: "#FFF"},
		refTimeAt: {
			UP: {station: "158", depart: true},
			DN: {station: "158", depart: false},
		},
		types: ["CLE", "LEX", "REX"],
		stations: [
			{id: "158", mileage: 0.0, types: ["LEX", "REX"]},
			{id: "201", mileage: 2.5, types: []},
			{id: "202", mileage: 4.6, types: []},
			{id: "203", mileage: 7.0, types: []},
			{id: "204", mileage: 9.7, types: []},
			{id: "205", mileage: 13.2, types: []},
			{id: "206", mileage: 15.5, types: ["CLE", "LEX", "REX"], showArrival: true},
			{id: "207", mileage: 18.0, types: []},
			{id: "208", mileage: 20.6, types: []},
			{id: "209", mileage: 23.3, types: []},
			{id: "210", mileage: 26.5, types: []},
			{id: "211", mileage: 29.5, types: ["CLE", "LEX", "REX"]},
			{id: "212", mileage: 32.8, types: ["CLE", "REX"]},
			{id: "213", mileage: 36.8, types: ["CLE", "LEX", "REX"], showArrival: true},
			{id: "214", mileage: 39.5, types: []},
			{id: "215", mileage: 45.3, types: ["CLE", "REX"]},
			{id: "216", mileage: 46.9, types: ["CLE", "REX"]},
			{id: "217", mileage: 48.5, types: ["CLE", "LEX", "REX"]},
			{id: "218", mileage: 50.0, types: ["CLE", "REX"]},
			{id: "219", mileage: 51.4, types: ["CLE", "REX"]},
			{id: "220", mileage: 52.7, types: ["CLE", "LEX", "REX"]},
		],
	},
	"MA": {
		name: "麥急浅水線", name_eng: "Mugikyū Asamizu Line", name_chi: "麦急浅水线", name_kor: "밀급천수선",
		color: {bg: "#EF9300", bg_darker: "#BF6D00", text: "#FFF"},
		refTimeAt: {
			UP: {station: "206", depart: true},
			DN: {station: "206", depart: false},
		},
		types: ["CLE", "LEX", "REX"],
		stations: [
			{id: "206", mileage: 0.0, types: ["CLE", "LEX", "REX"]},
			{id: "231", mileage: 2.8, types: ["CLE", "REX"]},
			{id: "232", mileage: 5.2, types: ["CLE", "REX"]},
			{id: "233", mileage: 8.0, types: ["CLE", "LEX", "REX"]},
			{id: "234", mileage: 10.6, types: ["CLE", "REX"]},
			{id: "235", mileage: 12.8, types: ["CLE", "REX"]},
			{id: "236", mileage: 15.7, types: ["CLE", "LEX", "REX"]},
			{id: "237", mileage: 22.7, types: ["CLE", "LEX", "REX"]},
			{id: "238", mileage: 24.2, types: ["LEX", "REX"]},
			{id: "239", mileage: 25.7, types: ["CLE", "LEX", "REX"]},
		],
	},
	"MS": {
		name: "麥急田心線", name_eng: "Mugikyū Tashin Line", name_chi: "麦急田心线", name_kor: "밀급티안신선",
		color: {bg: "#EF9300", bg_darker: "#BF6D00", text: "#FFF"},
		refTimeAt: {
			UP: {station: "211", depart: true},
			DN: {station: "211", depart: false},
		},
		stations: [
			{id: "211", mileage: 0.0},
			{id: "251", mileage: 2.3},
			{id: "252", mileage: 4.5},
			{id: "253", mileage: 6.2},
			{id: "254", mileage: 8.3},
			{id: "255", mileage: 10.5},
			{id: "256", mileage: 12.5},
			{id: "257", mileage: 15.3},
		],
	},
	"JS": {
		name: "麥急上水南線", name_eng: "Mugikyū Josui Line South", name_chi: "麦急上水南線", name_kor: "밀급상수남선",
		color: {bg: "#AD23F7", bg_darker: "#8422D1", text: "#FFF"},
		refTimeAt: {
			UP: {station: "139", depart: true},
			DN: {station: "139", depart: false},
		},
		types: ["REX", "EXP", "SEE"],
		stations: [
			{id: "139", mileage: 0.0, types: ["REX", "EXP", "SEE"]},
			{id: "361", mileage: 1.8, types: []},
			{id: "362", mileage: 3.0, types: ["REX", "EXP", "SEE"]},
			{id: "363", mileage: 4.2, types: []},
			{id: "364", mileage: 5.4, types: [], showArrival: true},
			{id: "365", mileage: 6.5, types: []},
			{id: "366", mileage: 7.6, types: []},
			{id: "367", mileage: 8.8, types: ["REX", "EXP"], showArrival: true},
			{id: "368", mileage: 10.0, types: []},
			{id: "369", mileage: 11.2, types: ["SEE"]},
			{id: "370", mileage: 12.4, types: ["SEE"]},
			{id: "371", mileage: 13.6, types: ["REX", "EXP", "SEE"], showArrival: true},
			{id: "372", mileage: 14.8, types: ["SEE"]},
			{id: "373", mileage: 16.0, types: ["SEE"]},
			{id: "374", mileage: 17.2, types: ["SEE"], types2: ["EXP"]},
			{id: "375", mileage: 19.9, types: ["SEE"]},
			{id: "376", mileage: 21.6, types: ["REX", "EXP", "SEE"]},
			{id: "377", mileage: 23.1, types: ["REX", "EXP", "SEE"]},
		],
	},
	"JN": {
		name: "麥急上水北線", name_eng: "Mugikyū Josui Line North", name_chi: "麦急上水北線", name_kor: "밀급상수북선",
		color: {bg: "#AD23F7", bg_darker: "#8422D1", text: "#FFF"},
		refTimeAt: {
			UP: {station: "139", depart: true},
			DN: {station: "139", depart: false},
		},
		types: ["SEX", "SSE"],
		stations: [
			{id: "139", mileage: 0.0, types: ["SEX", "SSE"]},
			{id: "351", mileage: 1.7, types: ["SEX", "SSE"]},
			{id: "352", mileage: 2.9, types: ["SEX", "SSE"]},
			{id: "353", mileage: 4.0, types: ["SEX", "SSE"]},
			{id: "354", mileage: 5.5, types: ["SEX", "SSE"]},
		],
	},
	"OU": {
		name: "麥急大浦線", name_eng: "Mugikyū Ōura Line", name_chi: "麦急大浦线", name_kor: "밀급오우라선",
		color: {bg: "#AD23F7", bg_darker: "#8422D1", text: "#FFF"},
		refTimeAt: {
			UP: {station: "131", depart: true},
			DN: {station: "131", depart: false},
		},
		stations: [
			{id: "131", mileage: 0.0},
			{id: "332", mileage: 1.4},
			{id: "333", mileage: 2.3},
			{id: "334", mileage: 3.4},
			{id: "335", mileage: 4.5},
			{id: "336", mileage: 5.7},
			{id: "337", mileage: 7.0},
			{id: "338", mileage: 8.6},
			{id: "339", mileage: 10.5},
			{id: "340", mileage: 12.3},
			{id: "341", mileage: 13.9},
		],
	},
	"SU": {
		name: "麥急砂田線", name_eng: "Mugikyū Sunada Line", name_chi: "麦急砂田线", name_kor: "밀급스나선",
		color: {bg: "#AD23F7", bg_darker: "#8422D1", text: "#FFF"},
		refTimeAt: {
			UP: {station: "113", depart: true},
			DN: {station: "113", depart: false},
		},
		stations: [
			{id: "113", mileage: 0.0},
			{id: "301", mileage: 1.6},
			{id: "302", mileage: 2.9},
			{id: "303", mileage: 4.2},
			{id: "304", mileage: 5.5},
			{id: "305", mileage: 7.1},
			{id: "306", mileage: 8.5},
			{id: "307", mileage: 9.8},
			{id: "308", mileage: 11.3},
			{id: "309", mileage: 12.3},
			{id: "121", mileage: 14.0},
			{id: "322", mileage: 15.2},
			{id: "323", mileage: 16.3},
			{id: "324", mileage: 17.5},
			{id: "325", mileage: 18.8},
			{id: "326", mileage: 20.2},
			{id: "327", mileage: 21.6},
			{id: "328", mileage: 23.1},
			{id: "329", mileage: 24.7},
		],
	},
	"TE": {
		name: "麥急天堂寺線", name_eng: "Mugikyū Tendōji Line", name_chi: "麦急天堂寺線", name_kor: "밀급천당사원선",
		color: {bg: "#FF1D1D", bg_darker: "#DB1B1B", text: "#FFF"},
		refTimeAt: {
			UP: {station: "501", depart: true},
			DN: {station: "501", depart: false},
		},
		types: ["RAP", "COR", "SSR", "SER", "HOR"],
		stations: [
			{id: "501", mileage: 0.0, types: ["RAP", "COR", "SSR", "SER", "HOR"]},
			{id: "502", mileage: 0.9, types: ["SSR"]},
			{id: "503", mileage: 2.0, types: ["RAP", "COR", "SSR", "SER", "HOR"]},
			{id: "504", mileage: 3.8, types: ["HOR"]},
			{id: "505", mileage: 4.8, types: ["HOR"], showArrival: true},
			{id: "506", mileage: 5.8, types: ["HOR"]},
			{id: "507", mileage: 6.7, types: ["RAP", "COR", "SSR", "SER"]},
			{id: "508", mileage: 7.6, types: ["HOR"]},
			{id: "509", mileage: 9.0, types: [], showArrival: true},
			{id: "510", mileage: 11.1, types: []},
			{id: "112", mileage: 13.6, types: ["SER"]},
			{id: "113", mileage: 15.0, types: ["RAP", "COR", "SER", "HOR"]},
		],
	},
	"TS": {
		name: "地下鉄天堂寺線", name_eng: "Subway Tendōji Line", name_chi: "地铁天堂寺線", name_kor: "지하철천당사원선",
		color: {bg: "#754C38", bg_darker: "#59392C", text: "#FFF"},
		refTimeAt: {
			UP: {station: "501", depart: false},
			DN: {station: "501", depart: true},
		},
		types: ["RAP", "COR", "SSR", "SER", "HOR"],
		stations: [
			{id: "916", mileage: 0.0, types: ["RAP", "COR"]},
			{id: "915", mileage: 2.8, types: ["SSR", "RAP", "COR", "SER", "HOR"]},
			{id: "914", mileage: 4.8, types: ["SSR", "SER", "HOR"]},
			{id: "913", mileage: 6.7, types: ["SER", "HOR"], showArrival: true},
			{id: "912", mileage: 8.4, types: ["SSR", "SER", "HOR"]},
			{id: "911", mileage: 10.0, types: ["RAP", "COR", "SSR", "SER", "HOR"]},
			{id: "910", mileage: 10.8, types: []},
			{id: "909", mileage: 12.0, types: [], showArrival: true},
			{id: "908", mileage: 13.1, types: []},
			{id: "907", mileage: 14.3, types: ["RAP", "COR", "SSR", "SER", "HOR"]},
			{id: "906", mileage: 15.7, types: []},
			{id: "905", mileage: 17.0, types: [], showArrival: true},
			{id: "904", mileage: 18.2, types: []},
			{id: "903", mileage: 19.4, types: ["RAP", "COR", "SSR", "SER", "HOR"]},
			{id: "902", mileage: 20.8, types: ["SSR"]},
			{id: "501", mileage: 22.0, types: ["RAP", "COR", "SSR", "SER", "HOR"]},
		],
	},
	"AY": {
		name: "麥急青山線", name_eng: "Mugikyū Aoyama Line", name_chi: "麦急青山線", name_kor: "밀급아오야마선",
		color: {bg: "#0AC60A", bg_darker: "#00A300", text: "#FFF"},
		refTimeAt: {
			UP: {station: "113", depart: true},
			DN: {station: "113", depart: false},
		},
		types: ["AOR", "AOS", "AOE", "AOC"],
		tracks: {
			byType: {
				"AOR": [], "AOS": [],
				"AOE": [{track: null, until: "415"}, {track: "A", from: "415"}],
				"AOC": [{track: null, until: "415"}, {track: "A", from: "415"}],
				"LOC": [],
			},
		},
		stations: [
			{id: "412", mileage: 0.0, types: ["AOR", "AOS"]},
			{id: "113", mileage: 1.0, types: ["AOR", "AOS"]},
			{id: "414", mileage: 2.2, types: ["AOS", "AOC"]},
			{id: "415", mileage: 3.5, types: ["AOS", "AOC"]},
			{id: "416", mileage: 5.0, types: ["AOS", "AOC"], showArrival: true},
			{id: "417", mileage: 6.4, types: ["AOC"]},
			{id: "418", mileage: 7.9, types: ["AOC"], showArrival: true},
			{id: "419", mileage: 7.9, types: ["AOC"]},
			{id: "420", mileage: 11.6, types: ["AOE"]},
			{id: "421", mileage: 13.2, types: ["AOR", "AOS", "AOC"], showArrival: true},
			{id: "422", mileage: 14.6, types: ["AOE"]},
			{id: "423", mileage: 16.0, types: ["AOE"]},
			{id: "424", mileage: 17.8, types: ["AOR", "AOS", "AOC"]},
			{id: "425", mileage: 20.2, types: ["AOE"]},
			{id: "426", mileage: 21.7, types: ["AOR", "AOS", "AOC"], showArrival: true},
			{id: "427", mileage: 23.5, types: ["AOE"]},
			{id: "428", mileage: 25.5, types: ["AOE"]},
			{id: "429", mileage: 29.5, types: ["AOE"]},
			{id: "430", mileage: 32.5, types: ["AOE"]},
			{id: "431", mileage: 34.3, types: ["AOR", "AOS", "AOE"]},
			{id: "432", mileage: 36.0, types: ["AOR", "AOS", "AOE"]},
		],
	},
	"AD": {
		name: "麥急藍田線", name_eng: "Mugikyū Aida Line", name_chi: "麦急蓝田线", name_kor: "밀급란티안선",
		color: {bg: "#00C1BC", bg_darker: "#00938C", text: "#FFF"},
		refTimeAt: {
			UP: {station: "716", depart: false},
			DN: {station: "716", depart: true},
		},
		types: ["ADO", "ADE", "ADC", "ADR"],
		stations: [
			{id: "154", mileage: 0.0, types: ["ADO", "ADE", "ADC", "ADR"]},
			{id: "702", mileage: 1.4, types: ["ADO", "ADE", "ADC", "ADR"]},
			{id: "703", mileage: 2.4, types: ["ADO", "ADE", "ADC", "ADR"]},
			{id: "704", mileage: 3.4, types: ["ADO", "ADE", "ADC", "ADR"]},
			{id: "705", mileage: 4.4, types: ["ADO", "ADC", "ADR"]},
			{id: "706", mileage: 5.2, types: ["ADO", "ADC", "ADR"]},
			{id: "150", mileage: 6.5, types: ["ADO", "ADE", "ADC", "ADR"], showArrival: true},
			{id: "708", mileage: 7.2, types: ["ADO", "ADE", "ADR"]},
			{id: "709", mileage: 7.9, types: ["ADE", "ADC"], types2: ["ADO"]},
			{id: "710", mileage: 9.1, types: ["ADO", "ADC", "ADR"]},
			{id: "711", mileage: 10.3, types: ["ADO"]},
			{id: "712", mileage: 11.4, types: ["ADO"], showArrival: true},
			{id: "713", mileage: 15.2, types: ["ADO"]},
			{id: "714", mileage: 17.1, types: ["ADO", "ADE"]},
			{id: "715", mileage: 18.7, types: ["ADE"], types2: ["ADO"]},
			{id: "758", mileage: 19.8, types: []}, //Signal Station
			{id: "716", mileage: 20.1, types: ["ADO", "ADE", "ADC", "ADR"], showArrival: true},
			{id: "717", mileage: 21.2, types: ["ADO", "ADC", "ADR"]},
			{id: "718", mileage: 22.3, types: ["ADO", "ADC", "ADR"]},
			{id: "719", mileage: 23.4, types: ["ADO", "ADC", "ADR"]},
			{id: "720", mileage: 24.5, types: ["ADO", "ADC", "ADR"]},
			{id: "721", mileage: 25.8, types: ["ADO", "ADC", "ADR"]},
			{id: "722", mileage: 28.5, types: ["ADC", "ADR"]},
		],
	},
	"AM": {
		name: "麥急森尾線", name_eng: "Mugikyū Morio Line", name_chi: "麦急森尾线", name_kor: "밀급모리선",
		color: {bg: "#00C1BC", bg_darker: "#00938C", text: "#FFF"},
		refTimeAt: {
			UP: {station: "721", depart: true},
			DN: {station: "721", depart: false},
		},
		types: ["ADO"],
		stations: [
			{id: "721", mileage: 0.0, types: ["ADO"]},
			{id: "723", mileage: 1.9, types: ["ADO"]},
			{id: "724", mileage: 4.0, types: ["ADO"]},
			{id: "725", mileage: 5.8, types: ["ADO"]},
			{id: "726", mileage: 7.7, types: ["ADO"]},
			{id: "727", mileage: 9.5, types: ["ADO"]},
		],
	},
	"AT": {
		name: "麥急大理線", name_eng: "Mugikyū Tairi Line", name_chi: "麦急大理线", name_kor: "밀급달리선",
		color: {bg: "#00C1BC", bg_darker: "#00938C", text: "#FFF"},
		refTimeAt: {
			UP: {station: "716", depart: false},
			DN: {station: "716", depart: true},
		},
		types: ["ADC", "ADR"],
		stations: [
			{id: "145", mileage: 0.0, types: ["ADC", "ADR"]},
			{id: "752", mileage: 1.4, types: []},
			{id: "753", mileage: 3.0, types: []},
			{id: "754", mileage: 6.3, types: [], showArrival: true},
			{id: "755", mileage: 8.4, types: []},
			{id: "756", mileage: 10.6, types: ["ADR"]},
			{id: "757", mileage: 11.6, types: ["ADR"]},
			{id: "758", mileage: 13.1, types: []}, //Signal Station
			{id: "716", mileage: 13.4, types: ["ADC", "ADR"]},
		],
	},
	"AA": {
		name: "麥急安達線", name_eng: "Mugikyū Adachi Line", name_chi: "麦急安达线", name_kor: "밀급안다선",
		color: {bg: "#00C1BC", bg_darker: "#00938C", text: "#FFF"},
		refTimeAt: {
			UP: {station: "716", depart: false},
			DN: {station: "716", depart: true},
		},
		types: ["ADO", "ADC", "ADR"],
		stations: [
			{id: "716", mileage: 0.0, types: ["ADO", "ADC", "ADR"]},
			{id: "731", mileage: 1.0, types: ["ADO", "ADC", "ADR"]},
			{id: "732", mileage: 2.0, types: ["ADO", "ADC", "ADR"]},
			{id: "733", mileage: 3.0, types: ["ADO", "ADC", "ADR"]},
			{id: "734", mileage: 4.5, types: ["ADO", "ADC", "ADR"]},
			{id: "735", mileage: 5.2, types: ["ADO", "ADC", "ADR"]},
		],
	},
	"KW": {
		name: "香田海岸西線", name_eng: "Kōda Coast West Rail", name_chi: "香田海岸西线", name_kor: "코우다해안서쪽선",
		color: {bg: "#33CC33", bg_darker: "#00CC99", text: "#FFF"},
		refTimeAt: {
			UP: {station: "158", depart: true},
			DN: {station: "158", depart: false},
		},
		types: [],
		stations: [
			{id: "158", mileage: 0.0, types: []},
			{id: "802", mileage: 1.8, types: []},
			{id: "803", mileage: 6.4, types: []},
			{id: "804", mileage: 8.1, types: []},
			{id: "805", mileage: 9.6, types: []},
			{id: "806", mileage: 11.0, types: []},
			{id: "807", mileage: 12.6, types: []},
			{id: "808", mileage: 14.2, types: []},
			{id: "809", mileage: 15.8, types: []},
			{id: "810", mileage: 18.0, types: []},
			{id: "811", mileage: 21.1, types: []},
			{id: "812", mileage: 24.1, types: []},
			{id: "813", mileage: 25.6, types: []},
			{id: "814", mileage: 27.1, types: []},
			{id: "815", mileage: 28.8, types: []},
			{id: "816", mileage: 30.5, types: []},
			{id: "817", mileage: 33.0, types: []},
			{id: "818", mileage: 34.5, types: []},
			{id: "819", mileage: 36.0, types: []},
			{id: "820", mileage: 39.5, types: []},
			{id: "821", mileage: 41.2, types: []},
			{id: "898", mileage: 42.3, types: []},
			{id: "822", mileage: 44.4, types: []},
			{id: "237", mileage: 46.0, types: []},
		],
	},
	"KE": {
		name: "香田海岸東線", name_eng: "Kōda Coast East Rail", name_chi: "香田海岸东线", name_kor: "코우다해안동선",
		color: {bg: "#33CC33", bg_darker: "#00CC99", text: "#FFF"},
		refTimeAt: {
			UP: {station: "217", depart: false},
			DN: {station: "217", depart: true},
		},
		types: [],
		stations: [
			{id: "237", mileage: 46.0, types: []},
			{id: "824", mileage: 47.8, types: []},
			{id: "825", mileage: 49.6, types: []},
			{id: "826", mileage: 52.3, types: []},
			{id: "827", mileage: 54.8, types: []},
			{id: "828", mileage: 57.6, types: []},
			{id: "829", mileage: 60.4, types: []},
			{id: "830", mileage: 62.8, types: []},
			{id: "831", mileage: 65.0, types: []},
			{id: "832", mileage: 66.8, types: []},
			{id: "257", mileage: 68.2, types: []},
			{id: "834", mileage: 70.5, types: []},
			{id: "835", mileage: 73.8, types: []},
			{id: "836", mileage: 77.2, types: []},
			{id: "899", mileage: 78.5, types: []},
			{id: "837", mileage: 80.9, types: []},
			{id: "838", mileage: 83.4, types: []},
			{id: "839", mileage: 86.2, types: []},
			{id: "840", mileage: 88.8, types: []},
			{id: "841", mileage: 93.0, types: []},
			{id: "842", mileage: 97.0, types: []},
			{id: "843", mileage: 99.1, types: []},
			{id: "844", mileage: 101.2, types: []},
			{id: "845", mileage: 103.0, types: []},
			{id: "846", mileage: 105.5, types: []},
			{id: "847", mileage: 107.3, types: []},
			{id: "217", mileage: 109.0, types: []},
		],
	},
	"KY": {
		name: "香田海岸安山支線", name_eng: "Kōda Coast Yasuyama Branch", name_chi: "香田海岸安山支线", name_kor: "코우다해안안산지선",
		color: {bg: "#33CC33", bg_darker: "#00CC99", text: "#FFF"},
		refTimeAt: {
			UP: {station: "845", depart: false},
			DN: {station: "845", depart: true},
		},
		types: [],
		stations: [
			{id: "854", mileage: 96.8, types: []},
			{id: "853", mileage: 98.0, types: []},
			{id: "852", mileage: 99.5, types: []},
			{id: "851", mileage: 101.4, types: []},
			{id: "845", mileage: 103.0, types: []},
		],
	},
};