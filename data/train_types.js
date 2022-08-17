/**
 * Train Type List
 */

global.train_types = {
	"LOC": {
		name: "各駅停車", name_short: "各停", name_eng: "Local", name_eng_short: "Local", priority: 1,
		name_chi: "各站停车", name_chi_short: "各停", name_kor: "각역정차", name_kor_short: "각정",
		color: {bg: "#cccccc", text: "#000"},
	},
	"LCL": {
		name: "普通", name_short: "普通", name_eng: "Local", name_eng_short: "Local", priority: 11,
		name_chi: "普通", name_chi_short: "普通", name_kor: "공통", name_kor_short: "공통",
		color: {bg: "#cccccc", text: "#000"},
	},
	"SER": {
		name: "区間快速", name_short: "区快", name_eng: "Sectional Rapid", name_eng_short: "S.Rapid", priority: 12,
		name_chi: "区间快速", name_chi_short: "区快", name_kor: "구간쾌속", name_kor_short: "구쾌",
		color: {bg: "#9E00F2", text: "#FFF"},
	},
	"HOR": {
		name: "休日快速", name_short: "休快", name_eng: "Holiday Rapid", name_eng_short: "H.Rapid", priority: 13,
		name_chi: "假日快速", name_chi_short: "假快", name_kor: "휴일쾌속", name_kor_short: "휴쾌",
		color: {bg: "#FF33B1", text: "#FFF"},
	},
	"SSE": {
		name: "区間準急", name_short: "区準", name_eng: "Sectional Semi-Express", name_eng_short: "S.S.Exp.", priority: 14,
		name_chi: "区间准急", name_chi_short: "区准", name_kor: "구간준급", name_kor_short: "구준",
		color: {bg: "#006BE0", text: "#FFF"},
	},
	"SEX": {
		name: "準急", name_short: "準急", name_eng: "Semi-Express", name_eng_short: "S.Exp.", priority: 15,
		name_chi: "准急", name_chi_short: "准急", name_kor: "준급", name_kor_short: "준급",
		color: {bg: "#00C12D", text: "#FFF"},
	},
	"SEE": {
		name: "区間急行", name_short: "区急", name_eng: "Sectional Express", name_eng_short: "S.Exp.", priority: 16,
		name_chi: "区间急行", name_chi_short: "区急", name_kor: "구간급행", name_kor_short: "구급",
		color: {bg: "#FF33B1", text: "#FFF"},
	},
	"COR": {
		name: "通勤快速", name_short: "通快", name_eng: "Commuter Rapid", name_eng_short: "C.Rapid", priority: 17,
		name_chi: "通勤快速", name_chi_short: "通快", name_kor: "통근쾌속", name_kor_short: "통쾌",
		color: {bg: "#EAA200", text: "#333"},
	},
	"RAP": {
		name: "快速", name_short: "快速", name_eng: "Rapid", name_eng_short: "Rapid", priority: 17,
		name_chi: "快速", name_chi_short: "快速", name_kor: "쾌속", name_kor_short: "쾌속",
		color: {bg: "#EAA200", text: "#FFF"},
	},
	"SPR": {
		name: "特別快速", name_short: "特快", name_eng: "Special Rapid", name_eng_short: "Sp.Rapid", priority: 18,
		name_chi: "特別快速", name_chi_short: "特快", name_kor: "특별쾌속", name_kor_short: "특쾌",
		color: {bg: "#EAA200", text: "#900"},
	},
	"EXP": {
		name: "急行", name_short: "急行", name_eng: "Express", name_eng_short: "Express", priority: 19,
		name_chi: "急行", name_chi_short: "急行", name_kor: "급행", name_kor_short: "급행",
		color: {bg: "#FF6700", text: "#FFF"},
	},
	"REX": {
		name: "快速急行", name_short: "快急", name_eng: "Rapid Express", name_eng_short: "R.Exp.", priority: 20,
		name_chi: "快速急行", name_chi_short: "快急", name_kor: "쾌속급행", name_kor_short: "쾌급",
		color: {bg: "#E45E00", text: "#FFF"},
	},
	"SLE": {
		name: "区間特急", name_short: "区特", name_eng: "Sectional Limited Express", name_eng_short: "S.L.Exp.", priority: 21,
		name_chi: "区间特急", name_chi_short: "区特", name_kor: "구간특급", name_kor_short: "구특",
		color: {bg: "#006037", text: "#FFF"},
	},
	"LEX": {
		name: "特急", name_short: "特急", name_eng: "Limited Express", name_eng_short: "Ltd.Exp.", priority: 22,
		name_chi: "特急", name_chi_short: "特急", name_kor: "특급", name_kor_short: "특급",
		color: {bg: "#CE0040", text: "#FFF"},
	},
	"CLE": {
		name: "通勤特急", name_short: "通特", name_eng: "Commuter Limited Express", name_eng_short: "C.L.Exp.", priority: 23,
		name_chi: "通勤特急", name_chi_short: "通特", name_kor: "통근특급", name_kor_short: "통특",
		color: {bg: "#41004C", text: "#FFF"},
	},
	"RLE": {
		name: "快速特急", name_short: "快特", name_eng: "Rapid Limited Express", name_eng_short: "R.L.Exp.", priority: 24,
		name_chi: "快速特急", name_chi_short: "快特", name_kor: "쾌속특급", name_kor_short: "쾌특",
		color: {bg: "#750030", text: "#FFF"},
	},
	"ALR": {
		name: "AEライナー", name_short: "AE", name_eng: "AE Liner", name_eng_short: "AE Liner", priority: 25,
		name_chi: "AE Liner", name_chi_short: "AE Liner", name_kor: "AE라이너", name_kor_short: "AE라",
		color: {bg: "#001C44", text: "#FC6"}, liner: true,
	},
	"AEL": {
		name: "AEライナー", name_short: "AE", name_eng: "AE Liner", name_eng_short: "AE Liner", priority: 26,
		name_chi: "AE Liner", name_chi_short: "AE Liner", name_kor: "AE라이너", name_kor_short: "AE라",
		color: {bg: "#001C44", text: "#CFF"}, liner: true,
	},

	//Aoyama Line
	"AOC": {
		name: "通勤準急", name_short: "通準", name_eng: "Commuter Semi-Express", name_eng_short: "C.S.Exp.", priority: 2,
		name_chi: "通勤准急", name_chi_short: "通准", name_kor: "통근준급", name_kor_short: "통준",
		color: {bg: "#803EFF", text: "#FFF"},
	},
	"AOE": {
		name: "通勤急行", name_short: "通急", name_eng: "Commuter Express", name_eng_short: "C.Exp.", priority: 3,
		name_chi: "通勤急行", name_chi_short: "通急", name_kor: "통근급행", name_kor_short: "통급",
		color: {bg: "#FF4040", text: "#FFF"},
	},
	"AOS": {
		name: "区間快速", name_short: "区快", name_eng: "Sectional Rapid", name_eng_short: "S.Rapid", priority: 4,
		name_chi: "区间快速", name_chi_short: "区快", name_kor: "구간쾌속", name_kor_short: "구쾌",
		color: {bg: "#79C108", text: "#FFF"},
	},
	"AOR": {
		name: "快速", name_short: "快速", name_eng: "Rapid", name_eng_short: "Rapid", priority: 5,
		name_chi: "快速", name_chi_short: "快速", name_kor: "쾌속", name_kor_short: "쾌속",
		color: {bg: "#20D35C", text: "#FFF"},
	},

	//Aida Line
	"ADL": {
		name: "普通", name_short: "普通", name_eng: "Local", name_eng_short: "Local", priority: 1,
		name_chi: "普通", name_chi_short: "普通", name_kor: "공통", name_kor_short: "공통",
		color: {bg: "#cccccc", text: "#000"},
	},
	"ADO": {
		name: "普通", name_short: "普通", name_eng: "Local", name_eng_short: "Local", priority: 2,
		name_chi: "普通", name_chi_short: "普通", name_kor: "공통", name_kor_short: "공통",
		color: {bg: "#FF0653", text: "#FFF"},
	},
	"ADE": {
		name: "通勤急行", name_short: "通急", name_eng: "Commuter Express", name_eng_short: "C.Exp.", priority: 3,
		name_chi: "通勤急行", name_chi_short: "通急", name_kor: "통근급행", name_kor_short: "통급",
		color: {bg: "#0FCC00", text: "#FFF"},
	},
	"ADC": {
		name: "通勤快速", name_short: "通快", name_eng: "Commuter Rapid", name_eng_short: "C.Rapid", priority: 4,
		name_chi: "通勤快速", name_chi_short: "通快", name_kor: "통근쾌속", name_kor_short: "통쾌",
		color: {bg: "#0046B5", text: "#FFF"},
	},
	"ADR": {
		name: "快速", name_short: "快速", name_eng: "Rapid", name_eng_short: "Rapid", priority: 5,
		name_chi: "快速", name_chi_short: "快速", name_kor: "쾌속", name_kor_short: "쾌속",
		color: {bg: "#008FCE", text: "#FFF"},
	},
	//Kouda Kaigan
	"KKW": {
		name: "普通 (香田海岸鉄道)", name_short: "普通", name_eng: "Local (Kouda Coastal R.)", name_eng_short: "Local", priority: 0,
		name_chi: "普通 (香田海岸铁道)", name_chi_short: "普通", name_kor: "공통 (코우다해안철도)", name_kor_short: "공통",
		color: {bg: "#00CC99", text: "#000"},
	},
	"KKS": {
		name: "普通 (香田海岸鉄道)", name_short: "普通", name_eng: "Local (Kouda Coastal R.)", name_eng_short: "Local", priority: 0,
		name_chi: "普通 (香田海岸铁道)", name_chi_short: "普通", name_kor: "공통 (코우다해안철도)", name_kor_short: "공통",
		color: {bg: "#00CC99", text: "#000"},
	},
	"KKE": {
		name: "普通 (香田海岸鉄道)", name_short: "普通", name_eng: "Local (Kouda Coastal R.)", name_eng_short: "Local", priority: 0,
		name_chi: "普通 (香田海岸铁道)", name_chi_short: "普通", name_kor: "공통 (코우다해안철도)", name_kor_short: "공통",
		color: {bg: "#33CC33", text: "#000"},
	},
};