/**
 * Train Type List
 */

global.train_consists = {
	"": {
		remark: null, remark_eng: null, 
	},
	"#": {
		remark: null, remark_eng: null, 
	},
	"N08": {
		remark: "8両編成", remark_eng: "8 Cars", 
		remark_chi: "8节车厢", remark_kor: "8량편성", 
		noOfCars: 8, others: {
		},
	},
	"N12": {
		remark: "12両編成", remark_eng: "12 Cars", 
		remark_chi: "12节车厢", remark_kor: "12량편성", 
		noOfCars: 12, others: {
		},
	},
	"U02": {
		remark: "2両編成", remark_eng: "2 Cars", 
		remark_chi: "2节车厢", remark_kor: "2량편성", 
		noOfCars: 2, others: {
		},
	},
	"U04": {
		remark: "4両編成", remark_eng: "4 Cars", 
		remark_chi: "4节车厢", remark_kor: "4량편성", 
		noOfCars: 4, others: {
		},
	},
	"U06": {
		remark: "6両編成", remark_eng: "6 Cars", 
		remark_chi: "6节车厢", remark_kor: "6량편성", 
		noOfCars: 6, others: {
		},
	},
	"K02": {
		remark: "2両編成 (3ドア)", remark_eng: "2 Cars (3 doors)", 
		remark_chi: "2节车厢 (3门)", remark_kor: "2량편성 (3문)", 
		noOfCars: 2, others: {
		},
	},
	"K04": {
		remark: "4両編成 (3ドア)", remark_eng: "4 Cars (3 doors)", 
		remark_chi: "4节车厢 (3门)", remark_kor: "4량편성 (3문)", 
		noOfCars: 4, others: {
		},
	},
	"K04_W1": {
		remark: "4両編成 (後2両は大仙王まで) (3ドア)", remark_eng: "4 Cars (Rear 2 Cars terminate at Daisen-ō) (3 doors)", 
		remark_chi: "4节车厢 (后2节只往大仙王) (3门)", remark_kor: "4량편성 (후2량은다이센왕까지) (3문)", 
		noOfCars: 4, others: {
		},
	},
	"K04_W2": {
		remark: "4両編成 (前2両は大仙王から) (3ドア)", remark_eng: "4 Cars (Front 2 Cars begin at Daisen-ō) (3 doors)", 
		remark_chi: "4节车厢 (前2节大仙王出发) (3门)", remark_kor: "4량편성 (전2량은다이센왕에서) (3문)", 
		noOfCars: 4, others: {
		},
	},
	"K04_E1": {
		remark: "4両編成 (後2両は祐津まで) (3ドア)", remark_eng: "4 Cars (Rear 2 Cars terminate at Yūtsu) (3 doors)", 
		remark_chi: "4节车厢 (后2节只往佑津) (3门)", remark_kor: "4량편성 (후2량은유츠까지) (3문)", 
		noOfCars: 4, others: {
		},
	},
	"K04_E2": {
		remark: "4両編成 (前2両は祐津から) (3ドア)", remark_eng: "4 Cars (Front 2 Cars begin at Yūtsu) (3 doors)", 
		remark_chi: "4节车厢 (前2节佑津出发) (3门)", remark_kor: "4량편성 (전2량은유츠에서) (3문)", 
		noOfCars: 4, others: {
		},
	},
	"S06": {
		remark: "6両編成", remark_eng: "6 Cars", 
		remark_chi: "6节车厢", remark_kor: "6량편성", 
		noOfCars: 6, others: {
		},
	},
	"a05": {
		remark: "5両編成", remark_eng: "5 Cars", 
		remark_chi: "5节车厢", remark_kor: "5량편성", 
		noOfCars: 5, others: {
		},
	},
	"L08A": {
		remark: "8両編成、一部特別車 (指定席)", remark_eng: "8 Cars with Special Car (reserved)", combined: {"L08B": "F16"},
		remark_chi: "8节车厢，有特别车 (对号座)", remark_kor: "8량편성, 일부차는특수차 (지정석)", 
		noOfCars: 8, others: {
			reserved: true,
		},
	},
	"L08B": {
		remark: "8両編成、一部特別車 (指定席)", remark_eng: "8 Cars with Special Car (reserved)", combined: {"L08A": "F16"},
		remark_chi: "8节车厢，有特别车 (对号座)", remark_kor: "8량편성, 일부차는특수차 (지정석)", 
		noOfCars: 8, others: {
			reserved: true,
		},
	},
	"L16": { //8+8
		remark: "16両編成、一部特別車 (指定席)", remark_eng: "15 Cars with Special Car (reserved)", 
		remark_chi: "16节车厢，有特别车 (对号座)", remark_kor: "15량편성, 일부차는특수차 (지정석)", 
		noOfCars: 16, others: {
			reserved: true,
		},
	},
	"A12": {
		remark: "12両編成、全車指定席、荷物車附き", remark_eng: "12 Cars with all-reserved seating and luggage cars", 
		remark_chi: "12节车厢，全车对号座，附有行李卡", remark_kor: "12량편성, 전차지정석, 수화물자동차가있다", 
		noOfCars: 12, others: {
			nonReserved: false, liner: true, intownCheckin: true,
		},
	},
};