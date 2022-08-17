/**
 * Main Line System : Main Line & Josui Line North Local Trains (110kph) [OL][OT][JN]
 */

/**
 * Local - Main Line (all-day service)
*/

global.train_patterns["OL01"] = {
	"trainType": "LOC",
	"pivot": "11:50", "consist": "N08",
	"label": "各駅停車 A(I)（上リ：麥急河田 ➜ 麥急赤田）",
	"refTime": {"MK": "11:45(30)", dayTurnover: 3 * 3600},
	"remarks": "最高速度110km/h、8両編成。[sXXX]: 時間調整",
	"upbound": true, "template": [
	  {"stop":"101", "track":{"default": "9", "alt101": "10"}, "line":"MK", "upbound":true, "depart":"11:45(30)"},
	  {"stop":"102", "track":"1", "line":"MK", "upbound":true, "arrive":"11:46(50)", "depart":"11:47(30)"},
	  {"stop":"103", "track":"1", "line":"MK", "upbound":true, "arrive":"11:48(50)", "depart":"11:49(30)"},
	  {"stop":"104", "track":"5", "line":"MK", "upbound":true, "arrive":"11:50(45)", "depart":"11:51(45)"},
	  {"stop":"105", "track":"1", "line":"MK", "upbound":true, "arrive":"11:53(00)", "depart":"11:53(45)"},
	  {"stop":"106", "track":"1", "line":"MK", "upbound":true, "arrive":"11:55(00)", "depart":"11:55(40)"},
	  {"stop":"107", "track":"1", "line":"MK", "upbound":true, "arrive":"11:57(15)", "depart":"11:57(55)"},
	  {"stop":"108", "track":"1", "line":"MK", "upbound":true, "arrive":"11:59(30)", "depart":"12:00(10)"},
	  {"stop":"109", "track":"1", "line":"MK", "upbound":true, "arrive":"12:01(35)", "depart":"12:02(15)"},
	  {"stop":"110", "track":"1", "line":"MK", "upbound":true, "arrive":"12:03(35)", "depart":"12:04(15)"},
	  {"stop":"111", "track":"1", "line":"MK", "upbound":true, "arrive":"12:05(35)", "depart":"12:06(15)"},
	  {"stop":"112", "track":"1", "line":"MK", "upbound":true, "arrive":"12:07(45)", "depart":"12:08(25)"},
	  {"stop":"113", "track":{"default": "12", "alt113": "11"}, "line":"MK", "upbound":true, "arrive":"12:10(10)", "depart":"12:11(10)"},
	  {"stop":"114", "track":"1", "line":"MK", "upbound":true, "arrive":"12:12(55)", "depart":"12:13(30)"},
	  {"stop":"115", "track":"2", "line":"MK", "upbound":true, "arrive":"12:15(00)", "depart":"12:16(00)"},
	  {"stop":"116", "track":"1", "line":"MK", "upbound":true, "arrive":"12:17(25)", "depart":"12:18(00)"},
	  {"stop":"117", "track":"1", "line":"MK", "upbound":true, "arrive":"12:19(25)", "depart":{"default":"12:20(00)", "s117":"12:12(30)"}},
	  {"stop":"118", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:21(30)", "s117":"12:14(00)"}, "depart":{"default":"12:22(05)", "s117":"12:14(35)"}},
	  {"stop":"119", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:23(35)", "s117":"12:16(05)"}, "depart":{"default":"12:24(10)", "s117":"12:16(40)"}},
	  {"stop":"120", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:25(45)", "s117":"12:18(15)"}, "depart":{"default":"12:26(20)", "s117":"12:18(50)"}},
	  {"stop":"121", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"12:28(10)", "s117":"12:20(40)"}, "depart":{"default":"12:29(10)", "s121":"12:26(40)", "s125":"12:31(40)"}},
	  {"stop":"122", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:30(35)", "s121":"12:28(05)", "s125":"12:33(05)"}, "depart":{"default":"12:31(10)", "s121":"12:28(40)", "s125":"12:33(40)"}},
	  {"stop":"123", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:32(30)", "s121":"12:30(00)", "s125":"12:35(00)"}, "depart":{"default":"12:33(05)", "s121":"12:30(35)", "s125":"12:35(35)"}},
	  {"stop":"124", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:34(25)", "s121":"12:31(55)", "s125":"12:36(55)"}, "depart":{"default":"12:35(00)", "s121":"12:32(30)", "s125":"12:37(30)"}},
	  {"stop":"125", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"12:36(25)", "s121":"12:33(55)", "s125":"12:38(55)"}, "depart":"12:37(05)"},
	  {"stop":"126", "track":"1", "line":"MK", "upbound":true, "arrive":"12:38(25)", "depart":"12:39(00)"},
	  {"stop":"127", "track":"2", "line":"MK", "upbound":true, "arrive":"12:40(50)", "depart":"12:41(45)"},
	  {"stop":"128", "track":"1", "line":"MK", "upbound":true, "arrive":"12:43(20)", "depart":"12:43(55)"},
	  {"stop":"129", "track":"1", "line":"MK", "upbound":true, "arrive":"12:45(20)", "depart":"12:45(55)"},
	  {"stop":"130", "track":"1", "line":"MK", "upbound":true, "arrive":"12:47(20)", "depart":"12:47(55)"},
	  {"stop":"131", "track":{"default": "2", "alt131": "3"}, "line":"MK", "upbound":true, "arrive":"12:49(40)", "depart":"12:50(40)"},
	  {"stop":"132", "track":"1", "line":"MK", "upbound":true, "arrive":"12:52(05)", "depart":"12:52(40)"},
	  {"stop":"133", "track":"1", "line":"MK", "upbound":true, "arrive":"12:54(05)", "depart":"12:54(45)"},
	  {"stop":"134", "track":"1", "line":"MK", "upbound":true, "arrive":"12:56(25)", "depart":"12:57(00)"},
	  {"stop":"135", "track":"2", "line":"MK", "upbound":true, "arrive":"12:58(55)", "depart":{"default":"12:59(50)", "s138":"13:04(45)"}},
	  {"stop":"136", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:01(15)", "s138":"13:06(10)"}, "depart":{"default":"13:01(50)", "s138":"13:06(45)"}},
	  {"stop":"137", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:03(15)", "s138":"13:08(10)"}, "depart":{"default":"13:03(50)", "s138":"13:08(45)"}},
	  {"stop":"138", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:05(20)", "s138":"13:10(15)"}, "depart":"13:05(55)"},
	  {"stop":"139", "track":"5", "line":"MK", "upbound":true, "arrive":"13:07(50)", "depart":"13:09(40)"},
	  {"stop":"140", "track":{"default": "1", "alt140": "2"}, "line":"MK", "upbound":true, "arrive":"13:13(35)", "depart":"13:14(10)"},
	  {"stop":"141", "track":"1", "line":"MK", "upbound":true, "arrive":"13:16(15)", "depart":"13:16(50)"},
	  {"stop":"142", "track":"2", "line":"MK", "upbound":true, "arrive":"13:18(45)", "depart":"13:19(25)"},
	  {"stop":"143", "track":"1", "line":"MK", "upbound":true, "arrive":"13:21(15)", "depart":"13:21(50)"},
	  {"stop":"144", "track":"1", "line":"MK", "upbound":true, "arrive":"13:25(15)", "depart":"13:25(50)"},
	  {"stop":"145", "track":"5", "line":"MK", "upbound":true, "arrive":"13:27(50)", "depart":"13:32(05)"},
	  {"stop":"146", "track":"1", "line":"MK", "upbound":true, "arrive":"13:33(50)", "depart":"13:34(30)"},
	  {"stop":"147", "track":"1", "line":"MK", "upbound":true, "arrive":"13:36(15)", "depart":"13:36(55)"},
	  {"stop":"148", "track":"1", "line":"MK", "upbound":true, "arrive":"13:38(15)", "depart":"13:38(55)"},
	  {"stop":"149", "track":"1", "line":"MK", "upbound":true, "arrive":"13:40(20)", "depart":"13:41(00)"},
	  {"stop":"150", "track":"3", "line":"MK", "upbound":true, "arrive":"13:42(20)", "depart":"13:43(20)"},
	  {"stop":"151", "track":"1", "line":"MK", "upbound":true, "arrive":"13:44(40)", "depart":"13:45(20)"},
	  {"stop":"152", "track":"1", "line":"MK", "upbound":true, "arrive":"13:46(45)", "depart":"13:49(15)"},
	  {"stop":"153", "track":"1", "line":"MK", "upbound":true, "arrive":"13:50(40)", "depart":"13:51(20)"},
	  {"stop":"154", "track":"3", "line":"MK", "upbound":true, "arrive":"13:52(40)", "depart":"13:53(30)"},
	  {"stop":"155", "track":"1", "line":"MK", "upbound":true, "arrive":"13:54(50)", "depart":"13:55(30)"},
	  {"stop":"156", "track":"1", "line":"MK", "upbound":true, "arrive":"13:56(55)", "depart":"13:57(30)"},
	  {"stop":"157", "track":"1", "line":"MK", "upbound":true, "arrive":"13:59(15)", "depart":"13:59(50)"},
	  {"stop":"158", "track":"8", "arrive":"14:01(30)"},
	],
  };
  global.train_patterns["OL02"] = {
	"trainType": "LOC",
	"pivot": "12:10", "consist": "N08",
	"label": "各駅停車 A(I)（下リ：麥急赤田 ➜ 麥急河田）",
	"refTime": {"MK": "12:08(00)", dayTurnover: 4 * 3600},
	"remarks": "最高速度110km/h、8両編成。[p]: 通勤快速運転時 [sXXX]: 時間調整",
	"upbound": false, "template": [
	  {"stop":"158", "track":"9", "line":"MK", "upbound":false, "depart":{"default":"9:50(30)", "p":"9:52(00)"}},
	  {"stop":"157", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"9:52(10)", "p":"9:53(40)"}, "depart":{"default":"9:52(45)", "p":"9:54(15)"}},
	  {"stop":"156", "track":{"default": "2", "alt156": "1"}, "line":"MK", "upbound":false, "arrive":{"default":"9:54(30)", "p":"9:56(00)"}, "depart":{"default":"9:55(05)", "p":"9:56(35)"}},
	  {"stop":"155", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"9:56(30)", "p":"9:58(00)"}, "depart":{"default":"9:57(10)", "p":"9:58(40)"}},
	  {"stop":"154", "track":{"default": "4", "alt154": "3"}, "line":"MK", "upbound":false, "arrive":{"default":"9:58(30)", "p":"10:00(00)"}, "depart":{"default":"9:59(20)", "p":"10:00(50)"}},
	  {"stop":"153", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:00(40)", "p":"10:02(10)"}, "depart":{"default":"10:01(20)", "p":"10:02(50)"}},
	  {"stop":"152", "track":{"default": "2", "alt152": "1"}, "line":"MK", "upbound":false, "arrive":{"default":"10:02(45)", "p":"10:04(15)"}, "depart":{"default":"10:05(10)", "p":"10:04(55)"}},
	  {"stop":"151", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:06(35)", "p":"10:06(20)"}, "depart":{"default":"10:07(15)", "p":"10:07(00)"}},
	  {"stop":"150", "track":"4", "line":"MK", "upbound":false, "arrive":{"default":"10:08(35)", "p":"10:08(20)"}, "depart":"10:09(35)"},
	  {"stop":"149", "track":"2", "line":"MK", "upbound":false, "arrive":"10:10(55)", "depart":"10:11(35)"},
	  {"stop":"148", "track":"2", "line":"MK", "upbound":false, "arrive":"10:13(00)", "depart":"10:13(40)"},
	  {"stop":"147", "track":{"default": "2", "alt147": "1"}, "line":"MK", "upbound":false, "arrive":"10:15(00)", "depart":"10:15(40)"},
	  {"stop":"146", "track":"2", "line":"MK", "upbound":false, "arrive":"10:17(25)", "depart":"10:18(05)"},
	  {"stop":"145", "track":"6", "line":"MK", "upbound":false, "arrive":"10:19(50)", "depart":"10:23(25)"},
	  {"stop":"144", "track":"2", "line":"MK", "upbound":false, "arrive":"10:25(25)", "depart":"10:26(00)"},
	  {"stop":"143", "track":"2", "line":"MK", "upbound":false, "arrive":"10:29(25)", "depart":"10:30(00)"},
	  {"stop":"142", "track":{"default": "3", "alt142": "2"}, "line":"MK", "upbound":false, "arrive":"10:31(50)", "depart":"10:32(30)"},
	  {"stop":"141", "track":"2", "line":"MK", "upbound":false, "arrive":"10:34(25)", "depart":"10:35(00)"},
	  {"stop":"140", "track":"2", "line":"MK", "upbound":false, "arrive":"10:37(05)", "depart":"10:37(40)"},
	  {"stop":"139", "track":"6", "line":"MK", "upbound":false, "arrive":"10:41(35)", "depart":"10:44(40)"},
	  {"stop":"138", "track":"2", "line":"MK", "upbound":false, "arrive":"10:46(20)", "depart":{"default":"10:46(55)", "s138":"10:42(00)"}},
	  {"stop":"137", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:48(25)", "s138":"10:43(30)"}, "depart":{"default":"10:49(00)", "s138":"10:44(05)"}},
	  {"stop":"136", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:50(25)", "s138":"10:45(30)"}, "depart":{"default":"10:51(00)", "s138":"10:46(05)"}},
	  {"stop":"135", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"10:52(40)", "s138":"10:57(45)"}, "depart":"10:53(35)"},
	  {"stop":"134", "track":"2", "line":"MK", "upbound":false, "arrive":"10:55(15)", "depart":"10:55(50)"},
	  {"stop":"133", "track":"3", "line":"MK", "upbound":false, "arrive":"10:57(30)", "depart":"10:58(10)"},
	  {"stop":"132", "track":"2", "line":"MK", "upbound":false, "arrive":"10:59(35)", "depart":"11:00(10)"},
	  {"stop":"131", "track":{"default": "5", "alt131": "4"}, "line":"MK", "upbound":false, "arrive":"11:01(50)", "depart":"11:02(50)"},
	  {"stop":"130", "track":"2", "line":"MK", "upbound":false, "arrive":"11:04(20)", "depart":"11:04(55)"},
	  {"stop":"129", "track":"2", "line":"MK", "upbound":false, "arrive":"11:06(20)", "depart":"11:06(55)"},
	  {"stop":"128", "track":"2", "line":"MK", "upbound":false, "arrive":"11:08(20)", "depart":"11:08(55)"},
	  {"stop":"127", "track":"3", "line":"MK", "upbound":false, "arrive":"11:10(45)", "depart":"11:11(40)"},
	  {"stop":"126", "track":"2", "line":"MK", "upbound":false, "arrive":"11:13(15)", "depart":"11:13(50)"},
	  {"stop":"125", "track":"3", "line":"MK", "upbound":false, "arrive":"11:15(10)", "depart":{"default":"11:15(50)", "s121":"11:18(20)", "s125":"11:13(20)"}},
	  {"stop":"124", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:17(15)", "s121":"11:18(45)", "s125":"11:13(45)"}, "depart":{"default":"11:17(50)", "s121":"11:20(20)", "s125":"11:15(20)"}},
	  {"stop":"123", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:19(10)", "s121":"11:21(40)", "s125":"11:16(40)"}, "depart":{"default":"11:19(45)", "s121":"11:22(15)", "s125":"11:17(15)"}},
	  {"stop":"122", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:21(05)", "s121":"11:23(35)", "s125":"11:18(35)"}, "depart":{"default":"11:21(40)", "s121":"11:24(10)", "s125":"11:19(10)"}},
	  {"stop":"121", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"11:23(20)", "s121":"11:25(50)", "s125":"11:20(50)"}, "depart":{"default":"11:24(20)", "s117":"11:31(50)"}},
	  {"stop":"120", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:25(55)", "s117":"11:33(25)"}, "depart":{"default":"11:26(30)", "s117":"11:34(00)"}},
	  {"stop":"119", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:28(05)", "s117":"11:35(35)"}, "depart":{"default":"11:28(40)", "s117":"11:36(10)"}},
	  {"stop":"118", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:30(10)", "s117":"11:37(40)"}, "depart":{"default":"11:30(45)", "s117":"11:38(15)"}},
	  {"stop":"117", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:32(15)", "s117":"11:39(45)"}, "depart":"11:32(50)"},
	  {"stop":"116", "track":"2", "line":"MK", "upbound":false, "arrive":"11:34(15)", "depart":"11:34(50)"},
	  {"stop":"115", "track":"3", "line":"MK", "upbound":false, "arrive":"11:36(30)", "depart":"11:37(30)"},
	  {"stop":"114", "track":"2", "line":"MK", "upbound":false, "arrive":"11:39(00)", "depart":"11:39(35)"},
	  {"stop":"113", "track":{"default": "15", "alt113": "16"}, "line":"MK", "upbound":false, "arrive":"11:41(20)", "depart":"11:42(20)"},
	  {"stop":"112", "track":"4", "line":"MK", "upbound":false, "arrive":"11:44(05)", "depart":"11:44(45)"},
	  {"stop":"111", "track":"2", "line":"MK", "upbound":false, "arrive":"11:46(00)", "depart":"11:46(40)"},
	  {"stop":"110", "track":"2", "line":"MK", "upbound":false, "arrive":"11:48(00)", "depart":"11:48(40)"},
	  {"stop":"109", "track":"2", "line":"MK", "upbound":false, "arrive":"11:50(00)", "depart":"11:50(40)"},
	  {"stop":"108", "track":"2", "line":"MK", "upbound":false, "arrive":"11:52(05)", "depart":"11:52(45)"},
	  {"stop":"107", "track":"2", "line":"MK", "upbound":false, "arrive":"11:54(20)", "depart":"11:55(00)"},
	  {"stop":"106", "track":"2", "line":"MK", "upbound":false, "arrive":"11:56(35)", "depart":"11:57(15)"},
	  {"stop":"105", "track":"2", "line":"MK", "upbound":false, "arrive":"11:58(30)", "depart":"11:59(15)"},
	  {"stop":"104", "track":"6", "line":"MK", "upbound":false, "arrive":"12:00(30)", "depart":"12:01(30)"},
	  {"stop":"103", "track":"2", "line":"MK", "upbound":false, "arrive":"12:02(45)", "depart":"12:03(35)"},
	  {"stop":"102", "track":"2", "line":"MK", "upbound":false, "arrive":"12:05(10)", "depart":"12:06(10)"},
	  {"stop":"101", "track":{"default": "9", "alt101": "10"}, "arrive":"12:08(00)"},
	],
  };

  global.train_patterns["OL03"] = {
	"trainType": "LOC",
	"pivot": "11:50", "consist": "N08",
	"label": "各駅停車 A(II)（上リ：麥急河田 ➜ 麥急砂田）",
	"refTime": {"MK": "11:50(30)"},
	"remarks": "最高速度100km/h、8両編成。",
	"upbound": true, "template": [
	  {"stop":"101", "track":{"default": "9", "alt101": "10"}, "line":"MK", "upbound":true, "depart":"11:50(30)"},
	  {"stop":"102", "track":"1", "line":"MK", "upbound":true, "arrive":"11:51(50)", "depart":"11:52(30)"},
	  {"stop":"103", "track":"1", "line":"MK", "upbound":true, "arrive":"11:53(50)", "depart":"11:54(30)"},
	  {"stop":"104", "track":"5", "line":"MK", "upbound":true, "arrive":"11:55(45)", "depart":"11:56(45)"},
	  {"stop":"105", "track":"1", "line":"MK", "upbound":true, "arrive":"11:58(00)", "depart":"11:58(45)"},
	  {"stop":"106", "track":"1", "line":"MK", "upbound":true, "arrive":"12:00(00)", "depart":"12:00(40)"},
	  {"stop":"107", "track":"1", "line":"MK", "upbound":true, "arrive":"12:02(15)", "depart":"12:02(55)"},
	  {"stop":"108", "track":"1", "line":"MK", "upbound":true, "arrive":"12:04(30)", "depart":"12:05(10)"},
	  {"stop":"109", "track":"1", "line":"MK", "upbound":true, "arrive":"12:06(35)", "depart":"12:07(15)"},
	  {"stop":"110", "track":"1", "line":"MK", "upbound":true, "arrive":"12:08(35)", "depart":"12:09(15)"},
	  {"stop":"111", "track":"1", "line":"MK", "upbound":true, "arrive":"12:10(35)", "depart":"12:11(15)"},
	  {"stop":"112", "track":"1", "line":"MK", "upbound":true, "arrive":"12:12(45)", "depart":"12:13(25)"},
	  {"stop":"113", "track":{"default": "12", "alt113": "11"}, "line":"MK", "upbound":true, "arrive":"12:15(10)", "depart":"12:16(10)"},
	  {"stop":"114", "track":"1", "line":"MK", "upbound":true, "arrive":"12:17(55)", "depart":"12:18(30)"},
	  {"stop":"115", "track":"2", "line":"MK", "upbound":true, "arrive":"12:20(00)", "depart":"12:21(00)"},
	  {"stop":"116", "track":"1", "line":"MK", "upbound":true, "arrive":"12:22(25)", "depart":"12:23(00)"},
	  {"stop":"117", "track":"1", "line":"MK", "upbound":true, "arrive":"12:24(25)", "depart":"12:25(00)"},
	  {"stop":"118", "track":"1", "line":"MK", "upbound":true, "arrive":"12:26(30)", "depart":"12:27(05)"},
	  {"stop":"119", "track":"1", "line":"MK", "upbound":true, "arrive":"12:28(35)", "depart":"12:29(10)"},
	  {"stop":"120", "track":"1", "line":"MK", "upbound":true, "arrive":"12:30(45)", "depart":"12:31(20)"},
	  {"stop":"121", "track":"2", "arrive":"12:33(10)"},
	],
  };
  global.train_patterns["OL04"] = {
	"trainType": "LOC",
	"pivot": "12:10", "consist": "N08",
	"label": "各駅停車 A(II)（下リ：麥急砂田 ➜ 麥急河田）",
	"refTime": {"MK": "12:03(00)"},
	"remarks": "最高速度100km/h、8両編成。",
	"upbound": false, "template": [
	  {"stop":"121", "track":"3", "line":"MK", "upbound":false, "depart":"11:19(20)"},
	  {"stop":"120", "track":"2", "line":"MK", "upbound":false, "arrive":"11:20(55)", "depart":"11:21(30)"},
	  {"stop":"119", "track":"2", "line":"MK", "upbound":false, "arrive":"11:23(05)", "depart":"11:23(40)"},
	  {"stop":"118", "track":"2", "line":"MK", "upbound":false, "arrive":"11:25(10)", "depart":"11:25(45)"},
	  {"stop":"117", "track":"2", "line":"MK", "upbound":false, "arrive":"11:27(15)", "depart":"11:27(50)"},
	  {"stop":"116", "track":"2", "line":"MK", "upbound":false, "arrive":"11:29(15)", "depart":"11:29(50)"},
	  {"stop":"115", "track":"3", "line":"MK", "upbound":false, "arrive":"11:31(30)", "depart":"11:32(30)"},
	  {"stop":"114", "track":"2", "line":"MK", "upbound":false, "arrive":"11:34(00)", "depart":"11:34(35)"},
	  {"stop":"113", "track":{"default": "15", "alt113": "16"}, "line":"MK", "upbound":false, "arrive":"11:36(20)", "depart":"11:37(20)"},
	  {"stop":"112", "track":"4", "line":"MK", "upbound":false, "arrive":"11:39(05)", "depart":"11:39(45)"},
	  {"stop":"111", "track":"2", "line":"MK", "upbound":false, "arrive":"11:41(00)", "depart":"11:41(40)"},
	  {"stop":"110", "track":"2", "line":"MK", "upbound":false, "arrive":"11:43(00)", "depart":"11:43(40)"},
	  {"stop":"109", "track":"2", "line":"MK", "upbound":false, "arrive":"11:45(00)", "depart":"11:45(40)"},
	  {"stop":"108", "track":"2", "line":"MK", "upbound":false, "arrive":"11:47(05)", "depart":"11:47(45)"},
	  {"stop":"107", "track":"2", "line":"MK", "upbound":false, "arrive":"11:49(20)", "depart":"11:50(00)"},
	  {"stop":"106", "track":"2", "line":"MK", "upbound":false, "arrive":"11:51(35)", "depart":"11:52(15)"},
	  {"stop":"105", "track":"2", "line":"MK", "upbound":false, "arrive":"11:53(30)", "depart":"11:54(15)11:56(30)"},
	  {"stop":"104", "track":"6", "line":"MK", "upbound":false, "arrive":"11:55(30)", "depart":"11:56(30)11:58(35)"},
	  {"stop":"103", "track":"2", "line":"MK", "upbound":false, "arrive":"11:57(45)", "depart":"11:58(35)12:01(10)"},
	  {"stop":"102", "track":"2", "line":"MK", "upbound":false, "arrive":"12:00(10)", "depart":"12:01(10)"},
	  {"stop":"101", "track":{"default": "9", "alt101": "10"}, "arrive":"12:03(00)"},
	],
  };

//Non-revenue

global.train_patterns["OL51"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "各停A 回送列車（上リ：麥急赤田 ➜ 赤田車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"158", "track":"8", "depart":"14:02(30)"},
	  {"stop":"AKD", "track":"0", "arrive":"14:04(00)"},
	],
  };
  global.train_patterns["OL52"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "各停A 回送列車（下リ：赤田車両基地 ➜ 麥急赤田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AKD", "track":"0", "depart":"9:48(00)"},
	  {"stop":"158", "track":"9", "arrive":"9:49(30)"},
	],
  };
  global.train_patterns["OL53"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "各停A 回送列車（上リ：麥急砂田 ➜ 砂田東車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"121", "track":"2", "depart":"12:34(10)"},
	  {"stop":"SND", "track":"0", "arrive":"11:36(00)"},
	],
  };
  global.train_patterns["OL54"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "各停A 回送列車（下リ：砂田東車両基地 ➜ 麥急砂田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"SND", "track":"0", "depart":"11:16(30)"},
	  {"stop":"121", "track":"3", "arrive":"11:18(20)"},
	],
  };
  global.train_patterns["OL55"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "各停A 回送列車（上リ：麥急青山 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"113", "track":"11", "depart":"12:16(10)"},
	  {"stop":"SND", "track":"0", "arrive":"12:17(30)"},
	],
  };
  global.train_patterns["OL56"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "各停A 回送列車（下リ：青山車両基地 ➜ 麥急青山）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"SND", "track":"0", "depart":"11:35(00)"},
	  {"stop":"113", "track":"16", "arrive":"11:36(20)"},
	],
  };
  global.train_patterns["OL57"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "各停A 回送列車（上リ：青山車両基地 ➜ 東青山）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"SND", "track":"0", "depart":"12:18(00)"},
	  {"stop":"115", "track":"2", "arrive":"12:20(00)"},
	],
  };
  global.train_patterns["OL58"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "各停A 回送列車（下リ：東青山 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"115", "track":"3", "depart":"11:32(30)"},
	  {"stop":"SND", "track":"0", "arrive":"11:34(30)"},
	],
  };

/**
 * Local - Main Line (rush hour service)
*/

global.train_patterns["OT01"] = {
	"trainType": "LOC",
	"pivot": "11:50", "consist": "N08",
	"label": "各駅停車 B（上リ：麥急河田 ➜ 光祐寺 / 麥急青山）",
	"refTime": {"MK": "11:48(00)"},
	"remarks": "最高速度100km/h、8両編成。[aoy] 麥急青山行",
	"upbound": true, "template": [
	  {"stop":"101", "track":"10", "line":"MK", "upbound":true, "depart":"11:48(00)"},
	  {"stop":"102", "track":"1", "line":"MK", "upbound":true, "arrive":"11:49(20)", "depart":"11:50(00)"},
	  {"stop":"103", "track":"1", "line":"MK", "upbound":true, "arrive":"11:51(20)", "depart":"11:52(00)"},
	  {"stop":"104", "track":"5", "line":"MK", "upbound":true, "arrive":"11:53(15)", "depart":"11:54(15)"},
	  {"stop":"105", "track":"1", "line":"MK", "upbound":true, "arrive":"11:55(30)", "depart":"11:56(15)"},
	  {"stop":"106", "track":"1", "line":"MK", "upbound":true, "arrive":"11:57(30)", "depart":"11:58(10)"},
	  {"stop":"107", "track":"1", "line":"MK", "upbound":true, "arrive":"11:59(45)", "depart":"12:00(25)"},
	  {"stop":"108", "track":"1", "line":"MK", "upbound":true, "arrive":"12:02(00)", "depart":"12:02(40)"},
	  {"stop":"109", "track":"1", "line":"MK", "upbound":true, "arrive":"12:04(05)", "depart":"12:04(45)"},
	  {"stop":"110", "track":"1", "line":"MK", "upbound":true, "arrive":"12:06(05)", "depart":"12:06(45)"},
	  {"stop":"111", "track":"1", "line":"MK", "upbound":true, "arrive":"12:08(05)", "depart":"12:08(45)"},
	  {"stop":"112", "track":"1", "line":"MK", "upbound":true, "arrive":"12:10(15)", "depart":"12:10(55)"},
	  {"stop":"113", "track":{"default": "12", "alt113": "11"}, "line":"MK", "upbound":true, "arrive":"12:12(40)", "depart":{"default":"12:13(40)", "aoy":""}},
	  {"stop":"114", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:15(25)", "aoy":""}, "depart":{"default":"12:16(00)", "aoy":""}},
	  {"stop":"115", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"12:17(30)", "aoy":""}, "depart":{"default":"12:18(30)", "aoy":""}},
	  {"stop":"116", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:19(55)", "aoy":""}, "depart":{"default":"12:20(30)", "aoy":""}},
	  {"stop":"117", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:21(55)", "aoy":""}, "depart":{"default":"12:22(30)", "aoy":""}},
	  {"stop":"118", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:24(00)", "aoy":""}, "depart":{"default":"12:24(35)", "aoy":""}},
	  {"stop":"119", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:26(05)", "aoy":""}, "depart":{"default":"12:26(40)", "aoy":""}},
	  {"stop":"120", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:28(15)", "aoy":""}, "depart":{"default":"12:28(50)", "aoy":""}},
	  {"stop":"121", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"12:30(40)", "aoy":""}, "depart":{"default":"12:31(40)", "aoy":""}},
	  {"stop":"122", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:33(05)", "aoy":""}, "depart":{"default":"12:33(40)", "aoy":""}},
	  {"stop":"123", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:35(00)", "aoy":""}, "depart":{"default":"12:35(35)", "aoy":""}},
	  {"stop":"124", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:36(55)", "aoy":""}, "depart":{"default":"12:37(30)", "aoy":""}},
	  {"stop":"125", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"12:38(55)", "aoy":""}, "depart":{"default":"12:39(35)", "aoy":""}},
	  {"stop":"126", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:40(55)", "aoy":""}, "depart":{"default":"12:41(30)", "aoy":""}},
	  {"stop":"127", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"12:43(20)", "aoy":""}, "depart":{"default":"12:44(15)", "aoy":""}},
	  {"stop":"128", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:45(50)", "aoy":""}, "depart":{"default":"12:46(25)", "aoy":""}},
	  {"stop":"129", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:47(50)", "aoy":""}, "depart":{"default":"12:48(25)", "aoy":""}},
	  {"stop":"130", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:49(50)", "aoy":""}, "depart":{"default":"12:50(25)", "aoy":""}},
	  {"stop":"131", "track":{"default": "2", "alt131": "3"}, "line":"MK", "upbound":true, "arrive":{"default":"12:52(10)", "aoy":""}, "depart":{"default":"12:53(10)", "aoy":""}},
	  {"stop":"132", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:54(35)", "aoy":""}, "depart":{"default":"12:55(10)", "aoy":""}},
	  {"stop":"133", "track":"1", "arrive":{"default":"12:56(35)", "aoy":""}},
	],
  };
  global.train_patterns["OT02"] = {
	"trainType": "LOC",
	"pivot": "12:10", "consist": "N08",
	"label": "各駅停車 B（下リ：光祐寺 / 麥急青山 ➜ 麥急河田）",
	"refTime": {"MK": "12:05(30)"},
	"remarks": "最高速度100km/h、8両編成。",
	"upbound": false, "template": [
	  {"stop":"133", "track":"3", "line":"MK", "upbound":false, "depart":{"default":"10:55(40)", "aoy":""}},
	  {"stop":"132", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:57(05)", "aoy":""}, "depart":{"default":"10:57(40)", "aoy":""}},
	  {"stop":"131", "track":{"default": "5", "alt131": "4"}, "line":"MK", "upbound":false, "arrive":{"default":"10:59(20)", "aoy":""}, "depart":{"default":"11:00(20)", "aoy":""}},
	  {"stop":"130", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:01(50)", "aoy":""}, "depart":{"default":"11:02(25)", "aoy":""}},
	  {"stop":"129", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:03(50)", "aoy":""}, "depart":{"default":"11:04(25)", "aoy":""}},
	  {"stop":"128", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:05(50)", "aoy":""}, "depart":{"default":"11:06(25)", "aoy":""}},
	  {"stop":"127", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"11:08(15)", "aoy":""}, "depart":{"default":"11:09(10)", "aoy":""}},
	  {"stop":"126", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:10(45)", "aoy":""}, "depart":{"default":"11:11(20)", "aoy":""}},
	  {"stop":"125", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"11:12(40)", "aoy":""}, "depart":{"default":"11:13(20)", "aoy":""}},
	  {"stop":"124", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:14(45)", "aoy":""}, "depart":{"default":"11:15(20)", "aoy":""}},
	  {"stop":"123", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:16(40)", "aoy":""}, "depart":{"default":"11:17(15)", "aoy":""}},
	  {"stop":"122", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:18(35)", "aoy":""}, "depart":{"default":"11:19(10)", "aoy":""}},
	  {"stop":"121", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"11:20(50)", "aoy":""}, "depart":{"default":"11:21(50)", "aoy":""}},
	  {"stop":"120", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:23(25)", "aoy":""}, "depart":{"default":"11:24(00)", "aoy":""}},
	  {"stop":"119", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:25(35)", "aoy":""}, "depart":{"default":"11:26(10)", "aoy":""}},
	  {"stop":"118", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:27(40)", "aoy":""}, "depart":{"default":"11:28(15)", "aoy":""}},
	  {"stop":"117", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:29(45)", "aoy":""}, "depart":{"default":"11:30(20)", "aoy":""}},
	  {"stop":"116", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:31(45)", "aoy":""}, "depart":{"default":"11:32(20)", "aoy":""}},
	  {"stop":"115", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"11:34(00)", "aoy":""}, "depart":{"default":"11:35(00)", "aoy":""}},
	  {"stop":"114", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:36(30)", "aoy":""}, "depart":{"default":"11:37(05)", "aoy":""}},
	  {"stop":"113", "track":{"default": "15", "alt113": "16"}, "line":"MK", "upbound":false, "arrive":{"default":"11:38(50)", "aoy":""}, "depart":"11:39(50)"},
	  {"stop":"112", "track":"4", "line":"MK", "upbound":false, "arrive":"11:41(35)", "depart":"11:42(15)"},
	  {"stop":"111", "track":"2", "line":"MK", "upbound":false, "arrive":"11:43(30)", "depart":"11:44(10)"},
	  {"stop":"110", "track":"2", "line":"MK", "upbound":false, "arrive":"11:45(30)", "depart":"11:46(10)"},
	  {"stop":"109", "track":"2", "line":"MK", "upbound":false, "arrive":"11:47(30)", "depart":"11:48(10)"},
	  {"stop":"108", "track":"2", "line":"MK", "upbound":false, "arrive":"11:49(35)", "depart":"11:50(15)"},
	  {"stop":"107", "track":"2", "line":"MK", "upbound":false, "arrive":"11:51(50)", "depart":"11:52(30)"},
	  {"stop":"106", "track":"2", "line":"MK", "upbound":false, "arrive":"11:54(05)", "depart":"11:54(45)"},
	  {"stop":"105", "track":"2", "line":"MK", "upbound":false, "arrive":"11:56(00)", "depart":"11:56(45)11:59(00)"},
	  {"stop":"104", "track":"6", "line":"MK", "upbound":false, "arrive":"11:58(00)", "depart":"11:59(00)12:01(05)"},
	  {"stop":"103", "track":"2", "line":"MK", "upbound":false, "arrive":"12:00(15)", "depart":"12:01(05)12:03(40)"},
	  {"stop":"102", "track":"2", "line":"MK", "upbound":false, "arrive":"12:02(40)", "depart":"12:03(40)"},
	  {"stop":"101", "track":"10", "arrive":"12:05(30)"},
	],
  };

  global.train_patterns["OT03"] = global.train_patterns["OT01"];
  global.train_patterns["OT04"] = global.train_patterns["OT02"];

  global.train_patterns["OT51"] = {
	"trainType": "#",
	"pivot": "12:56",
	"label": "各停B 回送列車（上リ：光祐寺 ➜ 光祐寺車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"133", "track":"1", "depart":"12:57(40)"},
	  {"stop":"KYJ", "track":"0", "arrive":"12:59(10)"},
	],
  };
  global.train_patterns["OT52"] = {
	"trainType": "#",
	"pivot": "10:55",
	"label": "各停B 回送列車（下リ：光祐寺車両基地 ➜ 光祐寺）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KYJ", "track":"0", "depart":"10:53(10)"},
	  {"stop":"133", "track":"2", "arrive":"10:54(40)"},
	],
  };
  global.train_patterns["OT53"] = {
	"trainType": "#",
	"pivot": "12:30",
	"label": "各停B 回送列車（上リ：麥急砂田 ➜ 砂田東車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"121", "track":"2", "depart":"12:31(40)"},
	  {"stop":"SND", "track":"0", "arrive":"12:33(30)"},
	],
  };
  global.train_patterns["OT54"] = {
	"trainType": "#",
	"pivot": "11:21",
	"label": "各停B 回送列車（下リ：砂田東車両基地 ➜ 麥急砂田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"SND", "track":"0", "depart":"11:19(00)"},
	  {"stop":"121", "track":"3", "arrive":"11:20(50)"},
	],
  };
  global.train_patterns["OT55"] = {
	"trainType": "#",
	"pivot": "12:12",
	"label": "各停B 回送列車（上リ：麥急青山 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"113", "track":"11", "depart":"12:14(55)"},
	  {"stop":"AOY", "track":"0", "arrive":"12:16(15)"},
	],
  };
  global.train_patterns["OT56"] = {
	"trainType": "#",
	"pivot": "11:39",
	"label": "各停B 回送列車（下リ：青山車両基地 ➜ 麥急青山）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AOY", "track":"0", "depart":"11:36(15)"},
	  {"stop":"113", "track":"16", "arrive":"11:37(35)"},
	],
  };

/**
 * Local - Josui Line North (rush hour service)
*/

global.train_patterns["JN01"] = {
	"trainType": "LOC",
	"pivot": "13:20", "consist": "N08",
	"label": "上水北線 区間運転（上リ：麥急上水 / 光祐寺# ➜ 文錦地）",
	"refTime": {"MK": "11:58(00)", "JN": "13:21(00)"},
	"remarks": "最高速度100km/h、8両編成。[l] 和興山延長運転",
	"upbound": true, "template": [
	  {"stop":"139", "track":"3", "line":"JN", "upbound":true, "depart":"13:21(10)"},
	  {"stop":"351", "track":"1", "line":"JN", "upbound":true, "arrive":"13:23(25)", "depart":"13:24(00)"},
	  {"stop":"352", "track":"1", "line":"JN", "upbound":true, "arrive":"13:25(25)", "depart":"13:26(00)"},
	  {"stop":"353", "track":"1", "line":"JN", "upbound":true, "arrive":"13:27(20)", "depart":"13:27(55)"},
	  {"stop":"354", "track":"2", "arrive":"13:30(10)"},
	],
  };
  global.train_patterns["JN02"] = {
	"trainType": "LOC",
	"pivot": "10:40", "consist": "N08",
	"label": "上水北線 区間運転（下リ：文錦地 ➜ 麥急上水 / 光祐寺#）",
	"refTime": {"MK": "11:55(30)", "JN": "10:31(20)"},
	"remarks": "最高速度100km/h、8両編成。",
	"upbound": false, "template": [
	  {"stop":"354", "track":"2", "line":"JN", "upbound":false, "depart":"10:22(50)"},
	  {"stop":"353", "track":"2", "line":"JN", "upbound":false, "arrive":"10:24(35)", "depart":"10:25(10)"},
	  {"stop":"352", "track":"2", "line":"JN", "upbound":false, "arrive":"10:26(30)", "depart":"10:27(05)"},
	  {"stop":"351", "track":"2", "line":"JN", "upbound":false, "arrive":"10:28(30)", "depart":"10:29(05)"},
	  {"stop":"139", "track":"4", "line":"MK", "upbound":false, "arrive":"10:31(20)"},
	],
  };
  global.train_patterns["JN51"] = {
	"trainType": "#",
	"pivot": "13:20",
	"label": "各停B 回送列車（上リ：光祐寺車両基地 ➜ 光祐寺）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"KYJ", "track":"0", "depart":"13:07(30)"},
	  {"stop":"133", "track":"2", "arrive":"13:09(00)", "depart":"13:14(00)"},
	  {"stop":"135", "track":"1", "pass":"13:16(50)"},
	  {"stop":"139", "track":"3", "arrive":"13:20(10)"},
	],
  };
  global.train_patterns["JN52"] = {
	"trainType": "#",
	"pivot": "10:40",
	"label": "各停B 回送列車（下リ：光祐寺 ➜ 光祐寺車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":"4", "depart":"10:32(20)"},
	  {"stop":"135", "track":"4", "pass":"10:34(40)"},
	  {"stop":"133", "track":"2", "arrive":"10:37(30)", "depart":"10:42(30)"},
	  {"stop":"KYJ", "track":"0", "arrive":"10:44(00)"},
	],
  };
  global.train_patterns["JN81"] = {
	"trainType": "#",
	"pivot": "13:20",
	"label": "各停B 回送列車（上リ：折り返線B ➜ 麥急上水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"139", "track":"B", "depart":"13:16(15)"},
	  {"stop":"139", "track":"3", "arrive":"13:20(10)"},
	],
  };
  global.train_patterns["JN82"] = {
	"trainType": "#",
	"pivot": "10:40",
	"label": "各停B 回送列車（下リ：麥急上水 ➜ 折り返線B）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":"4", "depart":"10:32(20)"},
	  {"stop":"139", "track":"B", "arrive":"10:36(15)"},
	],
  };