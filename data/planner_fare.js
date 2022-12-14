/**
 * Data for Trip Planner and Fares
 */

global.planner = {
	settings: {
		max_transfers: 4, //Maximum of 4 transfers
		waiting_time_1: 60 * 60, //The first/last trip shall be 60 minutes within the set time
		waiting_time_2: 60 * 60, //The transfer time shall be 20 minutes maximum (except walking time)
		travel_time_deviation: Infinity * 60, //Among all suggested results, if the time is over Infinity minutes longer than the shortest plan, discard it
		travel_time_deviation_liner: 10 * 60, //For trip with liner, if the time is over 10 minutes longer than the shortest plan, discard it
	},
	check_coupled_trains: [
		{replaceFrom: "E", strIndex: 2, replaceTo: "F"},
		{replaceFrom: "F", strIndex: 2, replaceTo: "E"},
		{replaceFrom: "L", strIndex: 2, replaceTo: "N"},
		{replaceFrom: "N", strIndex: 2, replaceTo: "L"},
	],
};

var mst = -50; //Transfer Discount betweeen Nanshin Subway and Mugikyu;

global.fares = {
	specialFareStations: [
		{from: 161, to: 162, fareType: "AIRPORT"},
		{from: 201, to: 220, fareType: "MUGITA"},
		{from: 231, to: 239, fareType: "MUGITA"},
		{from: 251, to: 255, fareType: "MUGITA"},
		{from: 412, to: 412, fareType: "AOYAMA"},
		{from: 414, to: 432, fareType: "AOYAMA"},
		{from: 502, to: 510, fareType: "TENDOJI"},
		{from: 501, to: 501, fareType: "TENDOJI_STA"},
		{from: 902, to: 916, fareType: "TENDOJI_SUB"},
		{from: 702, to: 706, fareType: "AIDA"},
		{from: 708, to: 727, fareType: "AIDA"},
		{from: 731, to: 735, fareType: "AIDA"},
		{from: 752, to: 757, fareType: "AIDA"},
		{from: 801, to: 899, fareType: "MUGITA"},
	],
	fareMultiplier: {
		"KW": 2.0,
		"KE": 2.0,
		"KY": 2.0,
	},
	specialFares: {
		"default": {
			"default": {normal: 0, discount: 0},
			"AIRPORT": {normal: 200, discount: 200},
			"MUGITA": {normal: 50, discount: 50},
			"AOYAMA": {normal: 30, discount: 30},
			"TENDOJI": {normal: 50, discount: 50},
			"TENDOJI_STA": {normal: 50, discount: 50},
			"TENDOJI_SUB": {normal: 50+mst, discount: 50+mst, fareTypes: [{fareType: "default", before: "501"}, {fareType: "NANSHIN_SUBWAY", after: "501"}]},
			"AIDA": {normal: 50, discount: 50},
		},
		"AIRPORT": {
			"default": {normal: 200, discount: 200},
			"AIRPORT": {normal: 200, discount: 200},
			"MUGITA": {normal: 250, discount: 250},
			"AOYAMA": {normal: 230, discount: 230},
			"TENDOJI": {normal: 250, discount: 250},
			"TENDOJI_STA": {normal: 250, discount: 250},
			"TENDOJI_SUB": {normal: 250+mst, discount: 250+mst, fareTypes: [{fareType: "default", before: "501"}, {fareType: "NANSHIN_SUBWAY", after: "501"}]},
			"AIDA": {normal: 250, discount: 250},
		},
		"MUGITA": {
			"default": {normal: 50, discount: 50},
			"AIRPORT": {normal: 250, discount: 250},
			"MUGITA": {normal: 50, discount: 50},
			"AOYAMA": {normal: 80, discount: 80},
			"TENDOJI": {normal: 100, discount: 100},
			"TENDOJI_STA": {normal: 100, discount: 100},
			"TENDOJI_SUB": {normal: 100+mst, discount: 100+mst, fareTypes: [{fareType: "default", before: "501"}, {fareType: "NANSHIN_SUBWAY", after: "501"}]},
			"AIDA": {normal: 100, discount: 100},
		},
		"AOYAMA": {
			"default": {normal: 30, discount: 30},
			"AIRPORT": {normal: 230, discount: 230},
			"MUGITA": {normal: 80, discount: 80},
			"AOYAMA": {normal: 30, discount: 30},
			"TENDOJI": {normal: 80, discount: 80},
			"TENDOJI_STA": {normal: 80, discount: 80},
			"TENDOJI_SUB": {normal: 80+mst, discount: 80+mst, fareTypes: [{fareType: "default", before: "501"}, {fareType: "NANSHIN_SUBWAY", after: "501"}]},
			"AIDA": {normal: 80, discount: 80},
		},
		"TENDOJI": {
			"default": {normal: 50, discount: 50},
			"AIRPORT": {normal: 250, discount: 250},
			"MUGITA": {normal: 100, discount: 100},
			"AOYAMA": {normal: 80, discount: 80},
			"TENDOJI": {normal: 50, discount: 50},
			"TENDOJI_STA": {normal: 50, discount: 50},
			"TENDOJI_SUB": {normal: 50+mst, discount: 50+mst, fareTypes: [{fareType: "default", before: "501"}, {fareType: "NANSHIN_SUBWAY", after: "501"}]},
			"AIDA": {normal: 100, discount: 100},
		},
		"TENDOJI_STA": {
			"default": {normal: 50, discount: 50},
			"AIRPORT": {normal: 250, discount: 250},
			"MUGITA": {normal: 100, discount: 100},
			"AOYAMA": {normal: 80, discount: 80},
			"TENDOJI": {normal: 50, discount: 50},
			"TENDOJI_STA": {normal: 0, discount: 0},
			"TENDOJI_SUB": {normal: 0, discount: 0, fareTypes: [{fareType: "NANSHIN_SUBWAY"}]},
			"AIDA": {normal: 100, discount: 100},
		},
		"TENDOJI_SUB": {
			"default": {normal: 50+mst, discount: 50+mst, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
			"AIRPORT": {normal: 250+mst, discount: 250+mst, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
			"MUGITA": {normal: 100+mst, discount: 100+mst, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
			"AOYAMA": {normal: 80+mst, discount: 80+mst, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
			"TENDOJI": {normal: 50+mst, discount: 50+mst, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
			"TENDOJI_STA": {normal: 0, discount: 0, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
			"TENDOJI_SUB": {normal: 0, discount: 0, fareTypes: [{fareType: "NANSHIN_SUBWAY"}]},
			"AIDA": {normal: 100+mst, discount: 100+mst, fareTypes: [{fareType: "NANSHIN_SUBWAY", before: "501"}, {fareType: "default", after: "501"}]},
		},
		"AIDA": {
			"default": {normal: 50, discount: 50},
			"AIRPORT": {normal: 250, discount: 250},
			"MUGITA": {normal: 100, discount: 100},
			"AOYAMA": {normal: 80, discount: 80},
			"TENDOJI": {normal: 100, discount: 100},
			"TENDOJI_STA": {normal: 100, discount: 100},
			"TENDOJI_SUB": {normal: 100+mst, discount: 100+mst, fareTypes: [{fareType: "default", before: "501"}, {fareType: "NANSHIN_SUBWAY", after: "501"}]},
			"AIDA": {normal: 50, discount: 50},
		},
	},
	premiumFee: {
		liner: [
			{minMileage: 0, fee: {normal: 400, discount: 400}},
			{minMileage: 80, fee: {normal: 500, discount: 500}},
		],
		reserved: [
			{minMileage: 0, fee: {normal: 200, discount: 200}},
			{minMileage: 20, fee: {normal: 300, discount: 300}},
			{minMileage: 40, fee: {normal: 400, discount: 400}},
			{minMileage: 60, fee: {normal: 500, discount: 500}},
			{minMileage: 80, fee: {normal: 600, discount: 600}},
			{minMileage: 100, fee: {normal: 700, discount: 700}},
			{minMileage: 120, fee: {normal: 800, discount: 800}},
		],
	},
	premiumFeeSurcharges: {
		liner: {
			"others": {
				"others": {normal: 0, discount: 0},
				"AIRPORT": {normal: 100, discount: 100},
			},
			"AIRPORT": {
				"others": {normal: 100, discount: 100},
				"AIRPORT": {normal: 100, discount: 100},
			},
		},
		reserved: {
			"others": {
				"others": {normal: 0, discount: 0},
				"AIRPORT": {normal: 100, discount: 100},
			},
			"AIRPORT": {
				"others": {normal: 100, discount: 100},
				"AIRPORT": {normal: 100, discount: 100},
			},
		},
	},
	surchargeText: [
		{
			j: "香田空港・ターミナル1/2駅 (乗車券)",
			e: "Kōda Airport, Terminal 1/2 Station (fare)",
			c: "香田机场、第2/3客运大楼站 (乘车券)",
			k: "고다공항、터미널1/2역 (승차권)",
			normal: 200,
			discount: 200,
		},
		{
			j: "香田空港・ターミナル1/2駅 (ライナー / 特別車料金)",
			e: "Kōda Airport, Terminal 1/2 Station (Liner / Special Car fee)",
			c: "香田机场、第2/3客运大楼站 (Liner / 特别车附加费)",
			k: "고다공항、터미널1/2역 (라이너 / 특수차량요금)",
			normal: 100,
			discount: 100,
		},
		{
			j: "青山線",
			e: "Aoyama Line",
			c: "青山線",
			k: "아오야마선",
			normal: 30,
			discount: 30,
		},
		{
			j: "麥急天堂寺線 (地下鉄直通以外)",
			e: "Mugikyū Tendōji Line (except traveling to Subway line)",
			c: "麦急天堂寺線 (地铁直通除外)",
			k: "밀급천당사원선 (지하철직행을제외하고)",
			normal: 50,
			discount: 50,
		},
		{
			j: "藍田線・森尾線・安達線・大理線",
			e: "Aida, Morio, Adachi and Tairi Lines",
			c: "蓝田线・森尾线・安达线・大理线",
			k: "란티안선、모리선、아다치선 · 대리선",
			normal: 50,
			discount: 50,
		},
		{
			j: "麥田原線・浅水線・田心線 (香田海岸鉄道を除く)",
			e: "Mugitawara, Asamizu and Tashin Lines (except from / to Kōda Coast Railway Lines)",
			c: "麦田原线、浅水线、田心线 (除了往返香田海岸铁道)",
			k: "밀급밀타하라선、밀급천수선、밀급티안신선 (왕복코우다해안철도제외)",
			normal: 50,
			discount: 50,
		},
	],
	fareBasis:{
		"default": [
			{minMileage: 0, fare: {IC: {normal: 100, discount: 100}, ticket: {normal: 100, discount: 100}}},
			{minMileage: 5, fare: {IC: {normal: 115, discount: 115}, ticket: {normal: 120, discount: 120}}},
			{minMileage: 7, fare: {IC: {normal: 130, discount: 130}, ticket: {normal: 130, discount: 130}}},
			{minMileage: 9, fare: {IC: {normal: 145, discount: 145}, ticket: {normal: 150, discount: 150}}},
			{minMileage: 11, fare: {IC: {normal: 160, discount: 160}, ticket: {normal: 160, discount: 160}}},
			{minMileage: 13, fare: {IC: {normal: 175, discount: 175}, ticket: {normal: 180, discount: 180}}},
			{minMileage: 15, fare: {IC: {normal: 190, discount: 190}, ticket: {normal: 190, discount: 190}}},
			{minMileage: 17, fare: {IC: {normal: 205, discount: 205}, ticket: {normal: 210, discount: 210}}},
			{minMileage: 19, fare: {IC: {normal: 220, discount: 220}, ticket: {normal: 220, discount: 220}}},
			{minMileage: 21, fare: {IC: {normal: 235, discount: 235}, ticket: {normal: 240, discount: 240}}},
			{minMileage: 23, fare: {IC: {normal: 250, discount: 250}, ticket: {normal: 250, discount: 250}}},
			{minMileage: 25, fare: {IC: {normal: 280, discount: 280}, ticket: {normal: 280, discount: 280}}},
			{minMileage: 30, fare: {IC: {normal: 310, discount: 310}, ticket: {normal: 310, discount: 310}}},
			{minMileage: 35, fare: {IC: {normal: 340, discount: 340}, ticket: {normal: 340, discount: 340}}},
			{minMileage: 40, fare: {IC: {normal: 370, discount: 370}, ticket: {normal: 370, discount: 370}}},
			{minMileage: 45, fare: {IC: {normal: 400, discount: 400}, ticket: {normal: 400, discount: 400}}},
			{minMileage: 50, fare: {IC: {normal: 430, discount: 430}, ticket: {normal: 430, discount: 430}}},
			{minMileage: 55, fare: {IC: {normal: 460, discount: 460}, ticket: {normal: 460, discount: 460}}},
			{minMileage: 60, fare: {IC: {normal: 490, discount: 490}, ticket: {normal: 490, discount: 490}}},
			{minMileage: 65, fare: {IC: {normal: 520, discount: 520}, ticket: {normal: 520, discount: 520}}},
			{minMileage: 70, fare: {IC: {normal: 550, discount: 550}, ticket: {normal: 550, discount: 550}}},
			{minMileage: 75, fare: {IC: {normal: 595, discount: 595}, ticket: {normal: 600, discount: 600}}},
			{minMileage: 85, fare: {IC: {normal: 640, discount: 640}, ticket: {normal: 640, discount: 640}}},
			{minMileage: 95, fare: {IC: {normal: 685, discount: 685}, ticket: {normal: 690, discount: 690}}},
			{minMileage: 105, fare: {IC: {normal: 730, discount: 730}, ticket: {normal: 730, discount: 730}}},
			{minMileage: 115, fare: {IC: {normal: 775, discount: 775}, ticket: {normal: 780, discount: 780}}},
			{minMileage: 125, fare: {IC: {normal: 820, discount: 820}, ticket: {normal: 820, discount: 820}}},
			{minMileage: 135, fare: {IC: {normal: 865, discount: 865}, ticket: {normal: 870, discount: 870}}},
			{minMileage: 145, fare: {IC: {normal: 910, discount: 910}, ticket: {normal: 910, discount: 910}}},
			{minMileage: 155, fare: {IC: {normal: 955, discount: 955}, ticket: {normal: 960, discount: 960}}},
			{minMileage: 165, fare: {IC: {normal: 1000, discount: 1000}, ticket: {normal: 1000, discount: 1000}}},
			{minMileage: 175, fare: {IC: {normal: 1045, discount: 1045}, ticket: {normal: 1050, discount: 1050}}},
			{minMileage: 185, fare: {IC: {normal: 1090, discount: 1090}, ticket: {normal: 1090, discount: 1090}}},
		],
		"NANSHIN_SUBWAY": [
			{minMileage: 0, fare: {IC: {normal: 180, discount: 90}, ticket: {normal: 180, discount: 90}}},
			{minMileage: 3, fare: {IC: {normal: 230, discount: 115}, ticket: {normal: 230, discount: 120}}},
			{minMileage: 7, fare: {IC: {normal: 280, discount: 140}, ticket: {normal: 280, discount: 140}}},
			{minMileage: 13, fare: {IC: {normal: 320, discount: 160}, ticket: {normal: 320, discount: 160}}},
			{minMileage: 19, fare: {IC: {normal: 370, discount: 185}, ticket: {normal: 370, discount: 190}}},
		],
	},
};