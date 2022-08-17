/**
 * Stations List
 */

global.stationCodeIcons = {
	"MAIN": {color_bg: "#002084", color_bg_darker: "#001E68", color_border: "#002C9B", color_text: "#FFF", circle: false,},
	"MUGITA": {color_bg: "#EF9300", color_bg_darker: "#BF6D00", color_border: "#FFA828", color_text: "#FFF", circle: false,},
	"OSJ": {color_bg: "#AD23F7", color_bg_darker: "#8422D1", color_border: "#B74FFC", color_text: "#FFF", circle: false,},
	"AOYAMA": {color_bg: "#0AC60A", color_bg_darker: "#00A300", color_border: "#0EDB0E", color_text: "#FFF", circle: false,},
	"AIDA": {color_bg: "#00C1BC", color_bg_darker: "#00938C", color_border: "#00E5D9", color_text: "#FFF", circle: false,},
	"TENDOJI": {color_bg: "#FF1D1D", color_bg_darker: "#DB1B1B", color_border: "#FF3636", color_text: "#FFF", circle: false,},
	"KOUDAKAIGAN": {color_bg: "#33CC33", color_bg_darker: "#00CC99", color_border: "#66FF66", color_text: "#FFF", circle: false,},
	"SUBWAY18": {color_bg: "#FFF", color_bg_darker: "#FFF", color_border: "#59392C", color_text: "#000", circle: true,},
};

global.stations = {
	"AOY": {isDepot: true, name: "青山車両基地", name_eng: "Aoyama Train Depot"},
	"SNS": {isDepot: true, name: "砂田南留置線", name_eng: "Sunada South Train Sidings"},
	"SND": {isDepot: true, name: "砂田東車両基地", name_eng: "Sunada East Train Depot"},
	"KTR": {isDepot: true, name: "小栃原車両基地", name_eng: "Kotorihara Train Depot"},
	"MMI": {isDepot: true, name: "百石留置線", name_eng: "Momoishi Train Sidings"},
	"OMT": {isDepot: true, name: "大元車両基地", name_eng: "Ōmoto Train Depot"},
	"KYJ": {isDepot: true, name: "光祐寺車両基地", name_eng: "Kōyūji Train Depot"},
	"KFK": {isDepot: true, name: "加福町車両基地", name_eng: "Kafukuchō Train Depot"},
	"TIR": {isDepot: true, name: "大理留置線", name_eng: "Tairi Train Sidings"},
	"AKD": {isDepot: true, name: "赤田車両基地", name_eng: "Akada Train Depot"},
	"KNS": {isDepot: true, name: "小西車両基地", name_eng: "Konishi Train Depot"},
	"MGT": {isDepot: true, name: "麥田川車両基地", name_eng: "Mugitagawa Train Depot"},
	"AKH": {isDepot: true, name: "赤柱留置線", name_eng: "Akahashira Train Sidings"},
	"ASM": {isDepot: true, name: "浅水留置線", name_eng: "Asamizu Train Sidings"},
	"SHZ": {isDepot: true, name: "新羽崎車両基地", name_eng: "Shin-Hazaki Train Depot"},
	"MMJ": {isDepot: true, name: "南向島留置線", name_eng: "Minamimukojima Train Sidings"},
	"DNE": {isDepot: true, name: "田園車両基地", name_eng: "Den'en Train Depot"},
	"CDG": {isDepot: true, name: "千鳥谷留置線", name_eng: "Chidorigaya Train Sidings"},
	"RYK": {isDepot: true, name: "緑地車両基地", name_eng: "Ryokuchi Train Depot"},
	"AIH": {isDepot: true, name: "藍北車両基地", name_eng: "Aihoku Train Depot"},
	"KYD": {isDepot: true, name: "興田車両基地", name_eng: "Kyōda Train Depot"},
	"MRO": {isDepot: true, name: "森尾留置線", name_eng: "Morio Train Sidings"},
	"ADC": {isDepot: true, name: "安達留置線", name_eng: "Adachi Train Sidings"},
	"DSN": {isDepot: true, name: "大仙王車両基地", name_eng: "Daisenō Train Depot"},
	"NZH": {isDepot: true, name: "沼津原車両基地", name_eng: "Numazuhara Train Depot"},

	"101": {
		code: "MK/01", name: "麥急河田", name_eng: "Mugikyū-Kawada", stationCodeIcon: "MAIN", tracks: 10,
		defaultTransferTime: 7,
	},
	"102": {code: "MK/02", name: "北河田", name_eng: "Kawada North", stationCodeIcon: "MAIN"},
	"103": {code: "MK/03", name: "七国町", name_eng: "Nanakunichō", stationCodeIcon: "MAIN"},
	"104": {
		code: "MK/04", name: "新川橋", name_eng: "Shinkawahashi", stationCodeIcon: "MAIN", tracks: 6,
		defaultTransferTime: 5,
		transfer: [
			{between: ["1", "2", "3", "4"], and: ["5", "6"], transferTime: 4},
		],
	},
	"105": {code: "MK/05", name: "船津", name_eng: "Funatsu", stationCodeIcon: "MAIN"},
	"106": {code: "MK/06", name: "東船津", name_eng: "Funatsu East", stationCodeIcon: "MAIN"},
	"107": {code: "MK/07", name: "西大手", name_eng: "Ōte West", stationCodeIcon: "MAIN"},
	"108": {code: "MK/08", name: "麥急大手", name_eng: "Mugikyū-Ōte", stationCodeIcon: "MAIN"},
	"109": {code: "MK/09", name: "麥急八喜", name_eng: "Mugikyū-Hachiki", stationCodeIcon: "MAIN"},
	"110": {code: "MK/10", name: "麥急西湾", name_eng: "Mugikyū-Saiwan", stationCodeIcon: "MAIN"},
	"111": {code: "MK/11", name: "西田生", name_eng: "Tashō West", stationCodeIcon: "MAIN"},
	"112": {
		code: "MK/12", name: "麥急田生", name_eng: "Mugikyū-Tashō", stationCodeIcon: "MAIN", tracks: 4,
		transfer: [
			//{between: ["1"], and: ["2"], transferTime: 0.5},
			//{between: ["3"], and: ["4"], transferTime: 0.5},
			{from: ["1"], to: ["3"], transferTime: 3},
			{from: ["2"], to: ["4"], transferTime: 3},
		],
	},
	"113": {
		code: "MK/13", name: "麥急青山", name_eng: "Mugikyū-Aoyama", stationCodeIcon: "MAIN",
		tracks: ["1","2","3","4","5","6","7", "8","11","12","13","14","15","16","17","18"],
		defaultTransferTime: 5,
		transfer: [
			//Cross-platform
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
			{between: ["4"], and: ["5"], transferTime: 0.5},
			{between: ["5"], and: ["6"], transferTime: 0.5},
			{between: ["11"], and: ["12"], transferTime: 0.5},
			{between: ["11"], and: ["13"], transferTime: 1},
			{between: ["12"], and: ["13"], transferTime: 0.5},
			{between: ["14"], and: ["15"], transferTime: 0.5},
			{between: ["14"], and: ["16"], transferTime: 1},
			{between: ["15"], and: ["16"], transferTime: 0.5},
			//Between upper and lower floor
			{between: ["1", "2"], and: ["11", "12"], transferTime: 2.5},
			{between: ["3", "2"], and: ["13", "12"], transferTime: 2.5},
			{between: ["4", "5"], and: ["14", "15"], transferTime: 2.5},
			{between: ["6", "5"], and: ["16", "15"], transferTime: 2.5},
			//Between upper floor and Sunada Line
			{between: ["11", "12", "13", "14", "15", "16"], and: ["17", "18"], transferTime: 5},
			//Between lower floor and Sunada Line
			{between: ["1", "2", "3", "4", "5", "6"], and: ["17", "18"], transferTime: 4},
			//Between upper floor and Aoyama Line
			{between: ["11", "12", "13", "14", "15", "16"], and: ["7", "8"], transferTime: 2.5},
			//Between lower floor and Aoyama Line
			{between: ["1", "2", "3", "4", "5", "6"], and: ["7", "8"], transferTime: 2.5},
			//Between Sunada Line and Aoyama Line
			{between: ["17", "18"], and: ["7", "8"], transferTime: 5},
			//Excluded
			{between: ["11", "12", "13"], and: ["14", "15", "16"], excluded: true},
			{between: ["1", "3"], and: ["4", "6"], excluded: true},
		],
	},
	"114": {code: "MK/14", name: "青山大町", name_eng: "Aoyama-Ōmachi", stationCodeIcon: "MAIN"},
	"115": {
		code: "MK/15", name: "東青山", name_eng: "Aoyama East", stationCodeIcon: "MAIN", tracks: 4,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
			{between: ["1"], and: ["1"], transferTime: 0},
			{between: ["2"], and: ["2"], transferTime: 0},
			{between: ["3"], and: ["3"], transferTime: 0},
			{between: ["4"], and: ["4"], transferTime: 0},
		],
	},
	"116": {code: "MK/16", name: "麥急春宮", name_eng: "Mugikyū-Harumiya", stationCodeIcon: "MAIN"},
	"117": {code: "MK/17", name: "春代田", name_eng: "Haruyoda", stationCodeIcon: "MAIN"},
	"118": {code: "MK/18", name: "松木", name_eng: "Matsuki", stationCodeIcon: "MAIN"},
	"119": {code: "MK/19", name: "四つ葉", name_eng: "Yottsuba", stationCodeIcon: "MAIN"},
	"120": {code: "MK/20", name: "砂西", name_eng: "Sunada West", stationCodeIcon: "MAIN"},
	"121": {
		code: "MK/21", name: "麥急砂田", name_eng: "Mugikyū-Sunada", stationCodeIcon: "MAIN", tracks: 6,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["4"], and: ["3"], transferTime: 0.5},
			{between: ["1"], and: ["5"], transferTime: 0.5},
			{between: ["4"], and: ["6"], transferTime: 0.5},
			{between: ["2"], and: ["5"], transferTime: 3},
			{between: ["3"], and: ["6"], transferTime: 3},
			{between: ["1", "2"], and: ["6"], transferTime: 3},
			{between: ["3", "4"], and: ["5"], transferTime: 3},
		],
	},
	"122": {code: "MK/22", name: "砂田競馬場前", name_eng: "Sunada Racecourse", name_short: "砂田馬場", stationCodeIcon: "MAIN"},
	"123": {code: "MK/23", name: "広原町", name_eng: "Hirowarachō", stationCodeIcon: "MAIN"},
	"124": {code: "MK/24", name: "広林町", name_eng: "Hirobayashichō", stationCodeIcon: "MAIN"},
	"125": {
		code: "MK/25", name: "栃原川", name_eng: "Tochiharagawa", stationCodeIcon: "MAIN", tracks: 4,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"126": {code: "MK/26", name: "美松町", name_eng: "Mimatsuchō", stationCodeIcon: "MAIN"},
	"127": {
		code: "MK/27", name: "水馬山", name_eng: "Mizumayama", stationCodeIcon: "MAIN", tracks: 4,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"128": {code: "MK/28", name: "富安町西", name_eng: "Tomiyasuchō West", stationCodeIcon: "MAIN"},
	"129": {code: "MK/29", name: "富安町東", name_eng: "Tomiyasuchō East", stationCodeIcon: "MAIN"},
	"130": {code: "MK/30", name: "西大浦公園", name_eng: "Ōura West Park", name_short: "西大浦公", stationCodeIcon: "MAIN"},
	"131": {
		code: "MK/31", name: "大浦", name_eng: "Ōura", stationCodeIcon: "MAIN", tracks: 8,
		defaultTransferTime: 4,
		transfer: [
			//Within Main Line
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
			{between: ["4"], and: ["5"], transferTime: 0.5},
			{between: ["5"], and: ["6"], transferTime: 0.5},
			{between: ["1"], and: ["3"], transferTime: 3},
			{between: ["4"], and: ["6"], transferTime: 3},
			//Between Main Line and Oura Line
			{between: ["1", "2", "3"], and: ["7"], transferTime: 2},
			{between: ["4", "5", "6"], and: ["8"], transferTime: 2},
			{between: ["1", "2", "3"], and: ["8"], transferTime: 3},
			{between: ["4", "5", "6"], and: ["7"], transferTime: 3},
		],
	},
	"132": {code: "MK/32", name: "広福町", name_eng: "Hirofukuchō", stationCodeIcon: "MAIN"},
	"133": {code: "MK/33", name: "光祐寺", name_eng: "Kōyūji", stationCodeIcon: "MAIN", tracks: 3},
	"134": {code: "MK/34", name: "和興山", name_eng: "Kazuokiyama", stationCodeIcon: "MAIN"},
	"135": {
		code: "MK/35", name: "華明町", name_eng: "Kameichō", stationCodeIcon: "MAIN", tracks: 4,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"136": {code: "MK/36", name: "祥華町西", name_eng: "Shokachō West", stationCodeIcon: "MAIN"},
	"137": {code: "MK/37", name: "祥華町東", name_eng: "Shokachō East", stationCodeIcon: "MAIN"},
	"138": {code: "MK/38", name: "新太平", name_eng: "Shin-Taihei", stationCodeIcon: "MAIN"},
	"139": {
		code: "MK/39", name: "麥急上水", name_eng: "Mugikyū-Jōsui", stationCodeIcon: "MAIN", tracks: 8,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["3", "4", "5", "6"],
		transfer: [
			{between: ["3"], and: ["5"], transferTime: 0.5},
			{between: ["5"], and: ["7"], transferTime: 0.5},
			{between: ["3"], and: ["7"], transferTime: 1},
			{between: ["4"], and: ["6"], transferTime: 0.5},
			{between: ["6"], and: ["8"], transferTime: 0.5},
			{between: ["4"], and: ["8"], transferTime: 1},
			//From lower floor to upper floor
			{from: ["4"], to: ["3", "5"], transferTime: 2},
			{from: ["4"], to: ["7"], transferTime: 3},
			{from: ["6"], to: ["3", "5", "7"], transferTime: 2},
			{from: ["8"], to: ["3"], transferTime: 3},
			{from: ["8"], to: ["5", "7"], transferTime: 2},
		],
	},
	"140": {code: "MK/40", name: "新花園", name_eng: "Shin-Hanazono", stationCodeIcon: "MAIN"},
	"141": {code: "MK/41", name: "青龍", name_eng: "Aoiryū", stationCodeIcon: "MAIN"},
	"142": {
		code: "MK/42", name: "麥急深井", name_eng: "Mugikyū-Fukai", stationCodeIcon: "MAIN", tracks: 4,
		defaultTransferTime: 4,
	},
	"143": {code: "MK/43", name: "石梨", name_eng: "Ishinashi", stationCodeIcon: "MAIN"},
	"144": {code: "MK/44", name: "西大理", name_eng: "Tairi West", stationCodeIcon: "MAIN"},
	"145": {
		code: "MK/45", name: "大理", name_eng: "Tairi", stationCodeIcon: "MAIN", tracks: 8,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["3"], transferTime: 0.5},
			{between: ["3"], and: ["5"], transferTime: 0.5},
			{between: ["1"], and: ["5"], transferTime: 3},
			{between: ["2"], and: ["4"], transferTime: 0.5},
			{between: ["4"], and: ["6"], transferTime: 0.5},
			{between: ["2"], and: ["6"], transferTime: 3},
			{between: ["1", "2", "3", "4", "5", "6"], and: ["7", "8"], transferTime: 3},
		],
	},
	"146": {code: "MK/46", name: "大理石本町", name_eng: "Tairi-Ishihommachi", name_short: "石本町", stationCodeIcon: "MAIN"},
	"147": {code: "MK/47", name: "大理学園前", name_eng: "Tairi Campus Area", name_short: "学園前", stationCodeIcon: "MAIN"},
	"148": {code: "MK/48", name: "藍川橋", name_eng: "Aikawahashi", stationCodeIcon: "MAIN"},
	"149": {code: "MK/49", name: "藍田市役所前", name_eng: "Aida City Hall", name_short: "藍田市役", stationCodeIcon: "MAIN"},
	"150": {
		code: "MK/50", name: "麥急藍田", name_eng: "Mugikyū-Aida", stationCodeIcon: "MAIN", tracks: 9,
		defaultTransferTime: 5,
		transferOnSamePlatform: ["1","2","3","4"],
		transfer: [
			{between: ["1"], and: ["3"], transferTime: 0.5},
			{between: ["3"], and: ["5"], transferTime: 0.5},
			{between: ["1"], and: ["5"], transferTime: 4},
			{between: ["2"], and: ["4"], transferTime: 0.5},
			{between: ["4"], and: ["6"], transferTime: 0.5},
			{between: ["2"], and: ["6"], transferTime: 4},
			{between: ["1", "3", "5"], and: ["7"], transferTime: 3},
			{between: ["1", "3", "5"], and: ["8", "9"], transferTime: 4},
			{between: ["2", "4", "6"], and: ["7", "8", "9"], transferTime: 3},
		],
	},
	"151": {code: "MK/51", name: "藍田新街道", name_eng: "Aida Avenue", name_short: "新街道", stationCodeIcon: "MAIN"}, 
	"152": {code: "MK/52", name: "藍田緑地公園", name_eng: "Aida Green Park", name_short: "緑地公園", stationCodeIcon: "MAIN"},
	"153": {code: "MK/53", name: "紅葉町", name_eng: "Koyochō", stationCodeIcon: "MAIN"},
	"154": {
		code: "MK/54", name: "藍田武", name_eng: "Aida-Takeshi", stationCodeIcon: "MAIN", tracks: 6,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["3", "4"],
		transfer: [
			{between: ["1"], and: ["3"], transferTime: 3},
			{between: ["2"], and: ["4"], transferTime: 3},
			{between: ["1", "2", "3", "4"], and: ["5", "6"], transferTime: 3},
		],
	},
	"155": {code: "MK/55", name: "天海ヶ丘", name_eng: "Amamigaoka", stationCodeIcon: "MAIN"},
	"156": {code: "MK/56", name: "大鳥台", name_eng: "Ōtoridai", stationCodeIcon: "MAIN"},
	"157": {code: "MK/57", name: "西赤田", name_eng: "Akada West", stationCodeIcon: "MAIN"},
	"158": {
		code: "MK/58", name: "麥急赤田", name_eng: "Mugikyū-Akada", stationCodeIcon: "MAIN", tracks: 12,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["3", "4", "5", "6"],
		transfer: [
			//Same Platform
			{between: ["3"], and: ["4"], transferTime: 0.5},
			{between: ["5"], and: ["6"], transferTime: 0.5},
			{between: ["7"], and: ["8"], transferTime: 0.5},
			{between: ["9"], and: ["10"], transferTime: 0.5},
			//Adjacent Floor - Same Direction
			{between: ["3", "4"], and: ["1", "7", "8"], transferTime: 2},
			{between: ["5", "6"], and: ["2", "9", "10"], transferTime: 2},
			//Between Top and Bottom Floors - Same Direction
			{between: ["1"], and: ["7", "8"], transferTime: 3},
			{between: ["1"], and: ["7", "8"], transferTime: 3},
			{between: ["2"], and: ["9", "10"], transferTime: 3},
			{between: ["2"], and: ["9", "10"], transferTime: 3},
			//Opposite Direction
			{from: ["9", "10"], to: ["3", "4"], transferTime: 4},
			{from: ["9", "10"], to: ["1"], transferTime: 5},
			{from: ["5", "6"], to: ["7", "8"], transferTime: 4},
			{from: ["5", "6"], to: ["3", "4"], transferTime: 5},
			{from: ["5", "6"], to: ["1"], transferTime: 4},
			{from: ["2"], to: ["7", "8"], transferTime: 5},
			{from: ["2"], to: ["3", "4"], transferTime: 4},
			//Kouda Kaigan
			{between: ["1", "2"], and: ["11", "12"], transferTime: 7},
			{between: ["3", "4", "5", "6"], and: ["11", "12"], transferTime: 6},
			{between: ["7", "8", "9", "10"], and: ["11", "12"], transferTime: 5},
		],
	},
	"159": {code: "MK/59", name: "天空橋", name_eng: "Skywalk", stationCodeIcon: "MAIN"},
	"160": {code: "MK/60", name: "整備場前", name_eng: "Maintenance Area", stationCodeIcon: "MAIN"},
	"161": {code: "MK/61", name: "ターミナル1/2", name_eng: "Terminal 1/2", name_short: "タ1/2", stationCodeIcon: "MAIN"},
	"162": {code: "MK/62", name: "香田空港", name_eng: "Kōda Airport", stationCodeIcon: "MAIN", tracks: 4},
	"201": {code: "MT/01", name: "赤田東町", name_eng: "Akada Higashimachi", stationCodeIcon: "MUGITA"},
	"202": {code: "MT/02", name: "百歳", name_eng: "Momotose", stationCodeIcon: "MUGITA"},
	"203": {code: "MT/03", name: "家用", name_eng: "Yayō", stationCodeIcon: "MUGITA"},
	"204": {code: "MT/04", name: "賀成", name_eng: "Kasei", stationCodeIcon: "MUGITA"},
	"205": {code: "MT/05", name: "西小西", name_eng: "Konishi West", stationCodeIcon: "MUGITA"},
	"206": {
		code: "MT/06", name: "小西市", name_eng: "Konishi-shi", stationCodeIcon: "MUGITA", tracks: 6,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["2", "5"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
			{between: ["1"], and: ["3"], transferTime: 2},
			{between: ["4"], and: ["5"], transferTime: 0.5},
			{between: ["5"], and: ["6"], transferTime: 0.5},
			{between: ["4"], and: ["6"], transferTime: 2},
			{from: ["4", "5", "6"], to: ["1", "2", "3"], transferTime: 3},
		],
	},
	"207": {code: "MT/07", name: "高見台", name_eng: "Takamidai", stationCodeIcon: "MUGITA"},
	"208": {code: "MT/08", name: "新屋", name_eng: "Shin'ya", stationCodeIcon: "MUGITA"},
	"209": {code: "MT/09", name: "下津", name_eng: "Shimotsu", stationCodeIcon: "MUGITA"},
	"210": {code: "MT/10", name: "上津", name_eng: "Kamitsu", stationCodeIcon: "MUGITA"},
	"211": {
		code: "MT/11", name: "田心市", name_eng: "Tashin-shi", stationCodeIcon: "MUGITA", tracks: 3,
		defaultTransferTime: 4,
		transfer: [
			{between: ["2"], and: ["1"], transferTime: 0.5},
			{between: ["3"], and: ["1"], transferTime: 3},
		],
	},
	"212": {code: "MT/12", name: "盛土", name_eng: "Morido", stationCodeIcon: "MUGITA"},
	"213": {
		code: "MT/13", name: "森島市", name_eng: "Morishima-shi", stationCodeIcon: "MUGITA", tracks: 4,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["2", "3"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"214": {code: "MT/14", name: "森島見", name_eng: "Morishimami", stationCodeIcon: "MUGITA"},
	"215": {code: "MT/15", name: "麥田川", name_eng: "Mugitagawa", stationCodeIcon: "MUGITA"},
	"216": {code: "MT/16", name: "麥田泉源", name_eng: "Mugita-Izugen", stationCodeIcon: "MUGITA"},
	"217": {
		code: "MT/17", name: "美景台", name_eng: "Mikeidai", stationCodeIcon: "MUGITA", tracks: 4,
		defaultTransferTime: 3,
	},
	"218": {code: "MT/18", name: "麥田大杉", name_eng: "Mugita-Ōsugi", stationCodeIcon: "MUGITA"},
	"219": {code: "MT/19", name: "麥田根津", name_eng: "Mugita-Nezu", stationCodeIcon: "MUGITA"},
	"220": {code: "MT/20", name: "麥田原", name_eng: "Mugitawara", stationCodeIcon: "MUGITA", tracks: 4},

	"231": {code: "MT/31", name: "大斑鳩", name_eng: "Ōikaru", stationCodeIcon: "MUGITA"},
	"232": {code: "MT/32", name: "大鶴", name_eng: "Ōtsuru", stationCodeIcon: "MUGITA"},
	"233": {code: "MT/33", name: "熊野田市", name_eng: "Kumanoda-shi", stationCodeIcon: "MUGITA"},
	"234": {code: "MT/34", name: "石槻", name_eng: "Ishitsuki", stationCodeIcon: "MUGITA"},
	"235": {code: "MT/35", name: "美利町", name_eng: "Mirimachi", stationCodeIcon: "MUGITA"},
	"236": {code: "MT/36", name: "麥急赤柱", name_eng: "Mugikyū-Akahashira", stationCodeIcon: "MUGITA"},
	"237": {
		code: "MT/37", name: "浅水市場", name_eng: "Asamizu Market", stationCodeIcon: "MUGITA", tracks: 6,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["1", "2"],
		transfer: [
			{between: ["1"], and: ["3", "4"], transferTime: 2},
			{between: ["2"], and: ["3", "4"], transferTime: 4},
			{between: ["1"], and: ["5", "6"], transferTime: 4},
			{between: ["2"], and: ["5", "6"], transferTime: 2},
			{between: ["3", "4"], and: ["5", "6"], transferTime: 4},
		],
	},
	"238": {code: "MT/38", name: "浅水ビーチ", name_eng: "Asamizu Beach", name_short: "浅水ビ", stationCodeIcon: "MUGITA"},
	"239": {code: "MT/39", name: "浅水", name_eng: "Asamizu", stationCodeIcon: "MUGITA", tracks: 4},

	"251": {code: "MT/51", name: "魚浦", name_eng: "Sakanaura", stationCodeIcon: "MUGITA", tracks: 1},
	"252": {code: "MT/52", name: "山川", name_eng: "Yamagawa", stationCodeIcon: "MUGITA"},
	"253": {code: "MT/53", name: "榛子", name_eng: "Shinshi", stationCodeIcon: "MUGITA", tracks: 1},
	"254": {code: "MT/54", name: "小谷", name_eng: "Kotani", stationCodeIcon: "MUGITA", tracks: 1},
	"255": {code: "MT/55", name: "元居", name_eng: "Motoi", stationCodeIcon: "MUGITA", tracks: 1},
	"256": {code: "MT/56", name: "金銭町", name_eng: "Kinsenmachi", stationCodeIcon: "MUGITA"},
	"257": {
		code: "MT/57", name: "沼津原", name_eng: "Numazuhara", stationCodeIcon: "MUGITA", tracks: 3,
		defaultTransferTime: 3,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 3},
			{between: ["1"], and: ["3"], transferTime: 1},
		],
	},

	"501": {
		code: "MI/01", name: "天堂寺", name_eng: "Tendōji", stationCodeIcon: "TENDOJI",
		tracks: ["3","4","5","6"],
		defaultTransferTime: 5,
		transferOnSamePlatform: ["4", "5"],
		transfer: [
			{between: ["3"], and: ["4"], transferTime: 0.5},
			{between: ["5"], and: ["6"], transferTime: 0.5},
		],
	},
	"502": {code: "MI/02", name: "新天堂寺", name_eng: "Shin-Tendōji", stationCodeIcon: "TENDOJI"},
	"503": {
		code: "MI/03", name: "新今川", name_eng: "Shin-Imagawa", stationCodeIcon: "TENDOJI", tracks: 3,
		defaultTransferTime: 5,
		transferOnSamePlatform: ["1", "2", "3"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
		],
	},
	"504": {code: "MI/04", name: "中埠頭", name_eng: "Central Pierhead", stationCodeIcon: "TENDOJI"},
	"505": {code: "MI/05", name: "国際展示場", name_eng: "Exhibition Center", name_short: "展示場", stationCodeIcon: "TENDOJI"},
	"506": {code: "MI/06", name: "トレードセンター", name_eng: "Trade Center", name_short: "トレード", stationCodeIcon: "TENDOJI"},
	"507": {
		code: "MI/07", name: "臨海新都心中央", name_eng: "Waterfront Central", name_short: "臨海新都", stationCodeIcon: "TENDOJI", tracks: 3,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["1", "2", "3"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
		],
	},
	"508": {code: "MI/08", name: "海浜公園", name_eng: "Waterfront Park", stationCodeIcon: "TENDOJI"},
	"509": {code: "MI/09", name: "南向島", name_eng: "Minamimukojima", stationCodeIcon: "TENDOJI"},
	"510": {code: "MI/10", name: "浜洲", name_eng: "Hamasu", stationCodeIcon: "TENDOJI"},

	"361": {code: "MU/61", name: "南上水公園", name_eng: "South Jōsui Park", name_short: "南上水公", stationCodeIcon: "OSJ"},
	"362": {
		code: "MU/62", name: "上水市役所前", name_eng: "Jōsui City Hall", name_short: "上水市役", stationCodeIcon: "OSJ",
		defaultTransferTime: 4,
		transferOnSamePlatform: ["1", "2"],
	},
	"363": {code: "MU/63", name: "盛景", name_eng: "Morikage", stationCodeIcon: "OSJ"},
	"364": {code: "MU/64", name: "彩園", name_eng: "Ayaen", stationCodeIcon: "OSJ"},
	"365": {code: "MU/65", name: "水下", name_eng: "Mizushita", stationCodeIcon: "OSJ"},
	"366": {code: "MU/66", name: "富地", name_eng: "Tomichi", stationCodeIcon: "OSJ"},
	"367": {
		code: "MU/67", name: "花都", name_eng: "Hanato", stationCodeIcon: "OSJ", tracks: 4,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["2", "3"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"368": {code: "MU/68", name: "雲泉", name_eng: "Unsen", stationCodeIcon: "OSJ"},
	"369": {code: "MU/69", name: "白和町", name_eng: "Shirawachō", stationCodeIcon: "OSJ"},
	"370": {code: "MU/70", name: "保栄町", name_eng: "Hoeichō", stationCodeIcon: "OSJ"},
	"371": {
		code: "MU/71", name: "加福町", name_eng: "Kafukuchō", stationCodeIcon: "OSJ", tracks: 4,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["2", "3"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"372": {code: "MU/72", name: "天平町", name_eng: "Tenpyochō", stationCodeIcon: "OSJ"},
	"373": {code: "MU/73", name: "馬色町", name_eng: "Mashikichō", stationCodeIcon: "OSJ"},
	"374": {code: "MU/74", name: "石湖町", name_eng: "Sekikochō", stationCodeIcon: "OSJ"},
	"375": {code: "MU/75", name: "大清川", name_eng: "Taiseigawa", stationCodeIcon: "OSJ"},
	"376": {code: "MU/76", name: "清河北", name_eng: "Kiyokawa North", stationCodeIcon: "OSJ"},
	"377": {
		code: "MU/77", name: "清河南", name_eng: "Kiyokawa South", stationCodeIcon: "OSJ", tracks: 3,
		defaultTransferTime: 4,
	},

	"354": {code: "MU/54", name: "文錦地", name_eng: "Bunkinchi", stationCodeIcon: "OSJ"},
	"353": {code: "MU/53", name: "芦ノ湖", name_eng: "Ashinoko", stationCodeIcon: "OSJ"},
	"352": {code: "MU/52", name: "吉井", name_eng: "Yoshii", stationCodeIcon: "OSJ"},
	"351": {code: "MU/51", name: "上水新町", name_eng: "Jōsui-shinmachi", stationCodeIcon: "OSJ"},

	"301": {code: "MU/01", name: "青山医院", name_eng: "Aoyama Polyclinic", stationCodeIcon: "OSJ"},
	"302": {code: "MU/02", name: "下青山", name_eng: "Shita-Aoyama", stationCodeIcon: "OSJ"},
	"303": {code: "MU/03", name: "神仙池", name_eng: "Shinsenji", stationCodeIcon: "OSJ"},
	"304": {code: "MU/04", name: "吉祥ヶ丘", name_eng: "Kishogaoka", stationCodeIcon: "OSJ"},
	"305": {code: "MU/05", name: "名成", name_eng: "Meisei", stationCodeIcon: "OSJ"},
	"306": {code: "MU/06", name: "香粉", name_eng: "Kako", stationCodeIcon: "OSJ"},
	"307": {code: "MU/07", name: "大為", name_eng: "Ōtame", stationCodeIcon: "OSJ"},
	"308": {code: "MU/08", name: "砂田南新町", name_eng: "Sunada-Minamishinchō", name_short: "南新町", stationCodeIcon: "OSJ"},
	"309": {code: "MU/09", name: "砂田市役所前", name_eng: "Sunada City Hall", name_short: "砂田市役", stationCodeIcon: "OSJ"},
	"322": {code: "MU/22", name: "新城市", name_eng: "Shinjōshi", stationCodeIcon: "OSJ"},
	"323": {code: "MU/23", name: "銀城町", name_eng: "Ginjōchō", stationCodeIcon: "OSJ"},
	"324": {code: "MU/24", name: "砂田本町", name_eng: "Sunada-Hommachi", stationCodeIcon: "OSJ"},
	"325": {code: "MU/25", name: "小栃原", name_eng: "Kotorihara", stationCodeIcon: "OSJ"},
	"326": {code: "MU/26", name: "大涌橋", name_eng: "Ōwakuhashi", stationCodeIcon: "OSJ"},
	"327": {code: "MU/27", name: "俊景", name_eng: "Toshikage", stationCodeIcon: "OSJ"},
	"328": {code: "MU/28", name: "雅典", name_eng: "Masanori", stationCodeIcon: "OSJ"},
	"329": {code: "MU/29", name: "百石", name_eng: "Momoishi", stationCodeIcon: "OSJ"},

	"332": {code: "MU/32", name: "広福橋", name_eng: "Hirofukuhashi", stationCodeIcon: "OSJ"},
	"333": {code: "MU/33", name: "大浦市役所前", name_eng: "Ōura City Hall", name_short: "大浦市役", stationCodeIcon: "OSJ"},
	"334": {code: "MU/34", name: "大浦センター", name_eng: "Ōura Center", name_short: "大浦セン", stationCodeIcon: "OSJ"},
	"335": {code: "MU/35", name: "宝郷橋", name_eng: "Takarasatohashi", stationCodeIcon: "OSJ"},
	"336": {code: "MU/36", name: "太和町", name_eng: "Futoshiwachō", stationCodeIcon: "OSJ"},
	"337": {code: "MU/37", name: "大元", name_eng: "Ōmoto", stationCodeIcon: "OSJ"},
	"338": {code: "MU/38", name: "教育大前", name_eng: "Education University", stationCodeIcon: "OSJ"},
	"339": {code: "MU/39", name: "鳳園", name_eng: "Ōtorien", stationCodeIcon: "OSJ"},
	"340": {code: "MU/40", name: "三門", name_eng: "Sanmon", stationCodeIcon: "OSJ"},
	"341": {code: "MU/41", name: "大尾", name_eng: "Taibi", stationCodeIcon: "OSJ"},

	"412": {code: "MY/12", name: "青山新町", name_eng: "Aoyama-shinmachi", stationCodeIcon: "AOYAMA", tracks: 3},
	"414": {code: "MY/14", name: "青山市役所前", name_eng: "Aoyama City Hall", stationCodeIcon: "AOYAMA", name_short: "青山市役", tracks: 3},
	"415": {code: "MY/15", name: "上青山", name_eng: "Kami-Aoyama", stationCodeIcon: "AOYAMA"},
	"416": {code: "MY/16", name: "永泉", name_eng: "Eisen", stationCodeIcon: "AOYAMA"},
	"417": {code: "MY/17", name: "三聖ヶ丘", name_eng: "Sanseigaoka", stationCodeIcon: "AOYAMA"},
	"418": {code: "MY/18", name: "夏松町", name_eng: "Natsumatsumachi", stationCodeIcon: "AOYAMA"},
	"419": {code: "MY/19", name: "岩部", name_eng: "Iwabe", stationCodeIcon: "AOYAMA"},
	"420": {code: "MY/20", name: "茂林", name_eng: "Morin", stationCodeIcon: "AOYAMA"},
	"421": {
		code: "MY/21", name: "麥急新田", name_eng: "Mugikyū-Shinden", stationCodeIcon: "AOYAMA", tracks: 4,
		transferOnSamePlatform: ["1", "4"],
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"422": {code: "MY/22", name: "上新田", name_eng: "Kami-Shinden", stationCodeIcon: "AOYAMA"},
	"423": {code: "MY/23", name: "福田本町", name_eng: "Fukuda-Honmachi", stationCodeIcon: "AOYAMA"},
	"424": {
		code: "MY/24", name: "麥急福田", name_eng: "Mugikyū-Fukuda", stationCodeIcon: "AOYAMA",
		defaultTransferTime: 4,
	},
	"425": {code: "MY/25", name: "田園前", name_eng: "Den'enmae", stationCodeIcon: "AOYAMA"},
	"426": {
		code: "MY/26", name: "田園中央", name_eng: "Den'en-chūō", stationCodeIcon: "AOYAMA", tracks: 4,
		transferOnSamePlatform: ["1", "4"],
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
		],
	},
	"427": {code: "MY/27", name: "世田町", name_eng: "Setamachi", stationCodeIcon: "AOYAMA"},
	"428": {code: "MY/28", name: "高坂", name_eng: "Kosaka", stationCodeIcon: "AOYAMA"},
	"429": {code: "MY/29", name: "分倍河川", name_eng: "Bubaikasen", stationCodeIcon: "AOYAMA"},
	"430": {code: "MY/30", name: "神山", name_eng: "Kamiyama", stationCodeIcon: "AOYAMA"},
	"431": {code: "MY/31", name: "緑葉台", name_eng: "Rokuyodai", stationCodeIcon: "AOYAMA"},
	"432": {code: "MY/32", name: "千鳥谷", name_eng: "Chidorigaya", stationCodeIcon: "AOYAMA", tracks: 3},

	"702": {code: "MA/02", name: "武新", name_eng: "Takeshin", stationCodeIcon: "AIDA"},
	"703": {code: "MA/03", name: "紅葉広場", name_eng: "Maple Square", stationCodeIcon: "AIDA"},
	"704": {code: "MA/04", name: "中央会館", name_eng: "Central Hall", stationCodeIcon: "AIDA"},
	"705": {code: "MA/05", name: "緑地公園南口", name_eng: "Green Park South Gate", stationCodeIcon: "AIDA", name_short: "緑地南口", tracks: 3},
	"706": {code: "MA/06", name: "ビジネスパーク", name_eng: "Business Park", stationCodeIcon: "AIDA", name_short: "ビジネス"},
	"708": {code: "MA/08", name: "藍田中央公園", name_eng: "Aida Central Park", stationCodeIcon: "AIDA", name_short: "中央公園",
		transferOnSamePlatform: ["2"],
	},
	"709": {code: "MA/09", name: "会景", name_eng: "Kaikei", stationCodeIcon: "AIDA",
		transferOnSamePlatform: ["2"],
	},
	"710": {code: "MA/10", name: "藍田国鉄前", name_eng: "Aida National Station", stationCodeIcon: "AIDA", name_short: "藍田国鉄",
		defaultTransferTime: 4,
		transferOnSamePlatform: ["2"],
	},
	"711": {code: "MA/11", name: "内街", name_eng: "Uchimachi", stationCodeIcon: "AIDA"},
	"712": {code: "MA/12", name: "長田", name_eng: "Nagata", stationCodeIcon: "AIDA", tracks: 4},
	"713": {code: "MA/13", name: "協和台", name_eng: "Kyōwadai", stationCodeIcon: "AIDA"},
	"714": {code: "MA/14", name: "大平山", name_eng: "Ōhirayama", stationCodeIcon: "AIDA",
		transferOnSamePlatform: ["2"],
	},
	"715": {code: "MA/15", name: "新開山", name_eng: "Shinkaizan", stationCodeIcon: "AIDA"},
	"716": {code: "MA/16", name: "藍北中央", name_eng: "Aihoku Central", stationCodeIcon: "AIDA", tracks: 5,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["1", "2", "3", "4"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["3"], and: ["4"], transferTime: 0.5},
			{between: ["1","2"], and: ["3","4"], transferTime: 3},
			{between: ["1","2","3","4"], and: ["5"], transferTime: 3},
		],
	},
	"717": {code: "MA/17", name: "徳田", name_eng: "Tokuda", stationCodeIcon: "AIDA"},
	"718": {code: "MA/18", name: "広田", name_eng: "Hiroda", stationCodeIcon: "AIDA"},
	"719": {code: "MA/19", name: "山上公園", name_eng: "Yamagami Park", stationCodeIcon: "AIDA"},
	"720": {code: "MA/20", name: "興田", name_eng: "Kyōda", stationCodeIcon: "AIDA"},
	"721": {code: "MA/21", name: "康雅", name_eng: "Yasumasa", stationCodeIcon: "AIDA", tracks: 3,
		transferOnSamePlatform: ["1", "2"],
		transfer: [
			{between: ["2"], and: ["3"], transferTime: 0.5},
			{from: ["2", "3"], to: ["1"], transferTime: 3},
		],
	},
	"722": {code: "MA/22", name: "五木山", name_eng: "Gokiyama", stationCodeIcon: "AIDA", tracks: 1},
	"723": {code: "MA/23", name: "枝那町", name_eng: "Edanamachi", stationCodeIcon: "AIDA", tracks: 1},
	"724": {code: "MA/24", name: "連谷", name_eng: "Rendani", stationCodeIcon: "AIDA", tracks: 1},
	"725": {code: "MA/25", name: "六野", name_eng: "Mutsuno", stationCodeIcon: "AIDA"},
	"726": {code: "MA/26", name: "上森尾", name_eng: "Kami-Morio", stationCodeIcon: "AIDA", tracks: 1},
	"727": {code: "MA/27", name: "森尾", name_eng: "Morio", stationCodeIcon: "AIDA", tracks: 1},
	"731": {code: "MA/31", name: "ハイスクエア", name_eng: "Hi Square", stationCodeIcon: "AIDA", name_short: "ハイスク"},
	"732": {code: "MA/32", name: "山景", name_eng: "Yamakage", stationCodeIcon: "AIDA"},
	"733": {code: "MA/33", name: "風光台", name_eng: "Fūkōdai", stationCodeIcon: "AIDA"},
	"734": {code: "MA/34", name: "安泰", name_eng: "Antai", stationCodeIcon: "AIDA"},
	"735": {code: "MA/35", name: "安達", name_eng: "Adachi", stationCodeIcon: "AIDA"},
	"752": {code: "MA/52", name: "北大理", name_eng: "Tairi North", stationCodeIcon: "AIDA"},
	"753": {code: "MA/53", name: "大理山口", name_eng: "Tairi-Yamaguchi", stationCodeIcon: "AIDA"},
	"754": {code: "MA/54", name: "高影山", name_eng: "Takakageyama", stationCodeIcon: "AIDA"},
	"755": {code: "MA/55", name: "雲山", name_eng: "Kumoyama", stationCodeIcon: "AIDA"},
	"756": {code: "MA/56", name: "緑ヶ丘", name_eng: "Midorigaoka", stationCodeIcon: "AIDA"},
	"757": {code: "MA/57", name: "藍ヶ丘", name_eng: "Aigaoka", stationCodeIcon: "AIDA"},
	"758": {code: "#/#", name: "藍北信号場", name_eng: "Aihoku Signal Station", stationCodeIcon: "AIDA", tracks: 4},

	"802": {code: "KC/02", name: "本赤田", name_eng: "Hon-Akada", name_eng_short: "HAD", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"803": {code: "KC/03", name: "海野", name_eng: "Umino", name_eng_short: "UMN", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"804": {code: "KC/04", name: "津屋", name_eng: "Tsuya", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"805": {code: "KC/05", name: "高津", name_eng: "Takatsu", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"806": {code: "KC/06", name: "姫老", name_eng: "Himerō", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"807": {code: "KC/07", name: "九鬼湾", name_eng: "Kukiwan", name_eng_short: "KKW", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"808": {code: "KC/08", name: "地玉", name_eng: "Jigoku", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"809": {code: "KC/09", name: "竹園", name_eng: "Takezono", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"810": {code: "KC/10", name: "大仙王", name_eng: "Daisen-ō", name_eng_short: "DSN", stationCodeIcon: "KOUDAKAIGAN", tracks: 3},
	"811": {code: "KC/11", name: "見浜", name_eng: "Mihama", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"812": {code: "KC/12", name: "三丈", name_eng: "Mitake", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"813": {code: "KC/13", name: "大方", name_eng: "Ōkata", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"814": {code: "KC/14", name: "水正", name_eng: "Mizumasa", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"815": {code: "KC/15", name: "牛群", name_eng: "Ushigun", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"816": {code: "KC/16", name: "釜火", name_eng: "Kamahi", name_eng_short: "KMH", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"817": {code: "KC/17", name: "樹小", name_eng: "Kishō", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"818": {code: "KC/18", name: "岡村", name_eng: "Okamura", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"819": {code: "KC/19", name: "谷子", name_eng: "Taniko", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"820": {code: "KC/20", name: "岸鳩", name_eng: "Kishihato", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"821": {code: "KC/21", name: "河清水", name_eng: "Kawashimizu", name_eng_short: "KSM", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"822": {code: "KC/22", name: "西浅水", name_eng: "Asamizu West", name_eng_short: "AMW", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"824": {code: "KC/24", name: "浅水町屋", name_eng: "Asamizu-Machiya", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"825": {code: "KC/25", name: "相谷", name_eng: "Aidani", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"826": {code: "KC/26", name: "吾郷", name_eng: "Agō", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"827": {code: "KC/27", name: "豊木", name_eng: "Toyoki", name_eng_short: "TYK", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"828": {code: "KC/28", name: "常藤", name_eng: "Tsunetō", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"829": {code: "KC/29", name: "後山田", name_eng: "Ushiroyamada", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"830": {code: "KC/30", name: "天明", name_eng: "Tenmei", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"831": {code: "KC/31", name: "下花", name_eng: "Shimohana", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"832": {code: "KC/32", name: "小沼", name_eng: "Konuma", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"834": {code: "KC/34", name: "短川", name_eng: "Tankawa", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"835": {code: "KC/35", name: "低畑", name_eng: "Hikubata", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"836": {code: "KC/36", name: "九唐村", name_eng: "Kyūtōmura", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"837": {code: "KC/37", name: "海長崎", name_eng: "Uminagasaki", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"838": {code: "KC/38", name: "深水浦", name_eng: "Fukamiura", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"839": {code: "KC/39", name: "夏日浜", name_eng: "Kajitsuhama", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"840": {code: "KC/40", name: "祐津", name_eng: "Yūtsu", name_eng_short: "YUT", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"841": {code: "KC/41", name: "山竹", name_eng: "Yamatake", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"842": {code: "KC/42", name: "見丘", name_eng: "Mioka", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"843": {code: "KC/43", name: "新馬", name_eng: "Arauma", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"844": {code: "KC/44", name: "林口", name_eng: "Hayashiguchi", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"845": {
		code: "KC/45", name: "安山", name_eng: "Yasuyama", name_eng_short: "YSY", stationCodeIcon: "KOUDAKAIGAN", tracks: 3,
		defaultTransferTime: 0.5,
	},
	"846": {code: "KC/46", name: "尾野", name_eng: "Ono", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"847": {code: "KC/47", name: "美景台北", name_eng: "Mikeidai North", name_eng_short: "MKN", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"854": {code: "KC/54", name: "原東", name_eng: "Haratō", name_eng_short: "HRT", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"853": {code: "KC/53", name: "海岸公園", name_eng: "Coast Park", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"852": {code: "KC/52", name: "低宮", name_eng: "Hikumiya", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"851": {code: "KC/51", name: "高宮", name_eng: "Takamiya", stationCodeIcon: "KOUDAKAIGAN", tracks: 1},
	"898": {code: "#/#", name: "金鐘信号場", name_eng: "Kinsō Signal Point", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},
	"899": {code: "#/#", name: "九唐信号場", name_eng: "Kyūtō Signal Point", stationCodeIcon: "KOUDAKAIGAN", tracks: 2},

	"916": {code: "18-/16", name: "南新空港", name_eng: "Nanshin Airport", stationCodeIcon: "SUBWAY18"},
	"915": {
		code: "18-/15", name: "新羽崎", name_eng: "Shin-Hazaki", stationCodeIcon: "SUBWAY18", tracks: 3,
		defaultTransferTime: 4,
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
		],
	},
	"914": {code: "18-/14", name: "河童町", name_eng: "Kappamachi", stationCodeIcon: "SUBWAY18"},
	"913": {code: "18-/13", name: "やおがわ", name_eng: "Yaogawa", stationCodeIcon: "SUBWAY18"},
	"912": {code: "18-/12", name: "西長宿", name_eng: "Nagajuku West", stationCodeIcon: "SUBWAY18"},
	"911": {
		code: "18-/11", name: "長宿", name_eng: "Nagajuku", stationCodeIcon: "SUBWAY18",
		defaultTransferTime: 4,
		tracks: ["5", "6", "7"],
		transferOnSamePlatform: ["5", "6", "7"],
		transfer: [
			{between: ["5"], and: ["6"], transferTime: 0.5},
			{between: ["6"], and: ["7"], transferTime: 0.5},
		],
	},
	"910": {code: "18-/10", name: "宋王橋", name_eng: "Sōōbashi", stationCodeIcon: "SUBWAY18",},
	"909": {code: "18-/09", name: "中本町", name_eng: "Nakahommachi", stationCodeIcon: "SUBWAY18"},
	"908": {code: "18-/08", name: "本町橋", name_eng: "Hommachibashi", stationCodeIcon: "SUBWAY18"},
	"907": {
		code: "18-/07", name: "王谷", name_eng: "Ōtani", stationCodeIcon: "SUBWAY18",
		defaultTransferTime: 4,
		tracks: ["5", "6", "7"],
		transferOnSamePlatform: ["5", "6", "7"],
		transfer: [
			{between: ["5"], and: ["6", "7"], transferTime: 2},
			{between: ["6"], and: ["7"], transferTime: 0.5},
		],
	},
	"906": {code: "18-/06", name: "東王谷", name_eng: "Ōtani East", stationCodeIcon: "SUBWAY18"},
	"905": {code: "18-/05", name: "新太子", name_eng: "Shin-Taishi", stationCodeIcon: "SUBWAY18"},
	"904": {code: "18-/04", name: "天合橋", name_eng: "Tengōbashi", stationCodeIcon: "SUBWAY18"},
	"903": {
		code: "18-/03", name: "九堂", name_eng: "Kudō", stationCodeIcon: "SUBWAY18", tracks: 3,
		defaultTransferTime: 4,
		transferOnSamePlatform: ["1", "2", "3"],
		transfer: [
			{between: ["1"], and: ["2"], transferTime: 0.5},
			{between: ["2"], and: ["3"], transferTime: 0.5},
		],
	},
	"902": {code: "18-/02", name: "長町", name_eng: "Nagamachi", stationCodeIcon: "SUBWAY18"},
};

global.stations["101"].name_eng_short = "KWD";
global.stations["104"].name_eng_short = "SKH";
global.stations["108"].name_eng_short = "OTE";
global.stations["113"].name_eng_short = "AOY";
global.stations["114"].name_eng_short = "AYO";
global.stations["115"].name_eng_short = "AYE";
global.stations["117"].name_eng_short = "HYD";
global.stations["121"].name_eng_short = "SND";
global.stations["125"].name_eng_short = "THG";
global.stations["127"].name_eng_short = "MMY";
global.stations["131"].name_eng_short = "OUR";
global.stations["133"].name_eng_short = "KYJ";
global.stations["135"].name_eng_short = "KMC";
global.stations["138"].name_eng_short = "STH";
global.stations["139"].name_eng_short = "JOS";
global.stations["140"].name_eng_short = "SHN";
global.stations["142"].name_eng_short = "FKI";
global.stations["144"].name_eng_short = "TRW";
global.stations["145"].name_eng_short = "TIR";
global.stations["148"].name_eng_short = "AKH";
global.stations["150"].name_eng_short = "AID";
global.stations["152"].name_eng_short = "AGP";
global.stations["154"].name_eng_short = "ADT";
global.stations["156"].name_eng_short = "OTD";
global.stations["158"].name_eng_short = "AKD";
global.stations["162"].name_eng_short = "KDA";
global.stations["206"].name_eng_short = "KSS";
global.stations["211"].name_eng_short = "TSS";
global.stations["213"].name_eng_short = "MSS";
global.stations["215"].name_eng_short = "MTG";
global.stations["216"].name_eng_short = "MTI";
global.stations["217"].name_eng_short = "MKD";
global.stations["220"].name_eng_short = "MTW";
global.stations["233"].name_eng_short = "KND";
global.stations["236"].name_eng_short = "AHS";
global.stations["237"].name_eng_short = "AMM";
global.stations["239"].name_eng_short = "AMZ";
global.stations["257"].name_eng_short = "NZH";
global.stations["916"].name_eng_short = "NSA";
global.stations["915"].name_eng_short = "SHZ";
global.stations["911"].name_eng_short = "NGJ";
global.stations["907"].name_eng_short = "OTN";
global.stations["903"].name_eng_short = "KUD";
global.stations["501"].name_eng_short = "TDJ";
global.stations["507"].name_eng_short = "WFC";
global.stations["307"].name_eng_short = "OTM";
global.stations["308"].name_eng_short = "SDM";
global.stations["324"].name_eng_short = "KTH";
global.stations["328"].name_eng_short = "MMI";
global.stations["337"].name_eng_short = "OMT";
global.stations["341"].name_eng_short = "TAB";
global.stations["362"].name_eng_short = "JCH";
global.stations["364"].name_eng_short = "AYE";
global.stations["367"].name_eng_short = "HNT";
global.stations["371"].name_eng_short = "KFC";
global.stations["373"].name_eng_short = "MSC";
global.stations["374"].name_eng_short = "SKC";
global.stations["377"].name_eng_short = "KKS";
global.stations["354"].name_eng_short = "BKC";
global.stations["412"].name_eng_short = "AYS";
global.stations["418"].name_eng_short = "NMM";
global.stations["421"].name_eng_short = "SHD";
global.stations["426"].name_eng_short = "DEC";
global.stations["427"].name_eng_short = "STM";
global.stations["432"].name_eng_short = "CDG";
global.stations["705"].name_eng_short = "GPS";
global.stations["710"].name_eng_short = "ANS";
global.stations["712"].name_eng_short = "NGT";
global.stations["716"].name_eng_short = "AHC";
global.stations["718"].name_eng_short = "HRD";
global.stations["721"].name_eng_short = "YSM";
global.stations["722"].name_eng_short = "GKY";
global.stations["727"].name_eng_short = "MRO";
global.stations["731"].name_eng_short = "HSQ";
global.stations["735"].name_eng_short = "ADC";