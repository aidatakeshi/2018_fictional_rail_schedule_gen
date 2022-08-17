/**
 * Main Line System : Rapid Trains (130kph) [TR][TS]
 */

/**
 * Rapid, Commuter Rapid & Special Rapid - Main Line & Tendoji Line
*/

global.train_patterns["TR01"] = {
	"trainType": {"default": "RAP", "local": "LOC"},
	"pivot": "12:00", "consist": "N12",
	"label": "快速 / 通勤快速 天堂寺線（上リ：南新空港 ➜ 香田空港）",
	"refTime": {"MK": "12:02(00)", "TE": "11:56(30)", "TS": "11:55(30)"},
	"remarks": "本線最高速度130km/h、天堂寺線最高速度110km/h、12両固定編成。[a] 香田空港ダイヤ調整",
	"upbound": true, "template": [
	  {"stop":"916", "track":"1", "line":"TS", "upbound":true, "depart":"11:32(50)"},
	  {"stop":"915", "track":"1", "line":"TS", "upbound":true, "arrive":"11:35(20)", "depart":"11:36(05)"},
	  {"stop":"914", "track":"1", "line":"TS", "upbound":true, "pass":"11:37(40)"},
	  // N/A
	  {"stop":"912", "track":"1", "line":"TS", "upbound":true, "pass":"11:40(20)"},
	  {"stop":"911", "track":{"default": "5", "ssr": "6"}, "line":"TS", "upbound":true, "arrive":"11:41(45)", "depart":"11:42(45)"},
	  {"stop":"910", "track":"1", "line":"TS", "upbound":true, "pass":"11:43(35)"},
	  // N/A
	  {"stop":"908", "track":"1", "line":"TS", "upbound":true, "pass":"11:45(30)"},
	  {"stop":"907", "track":"5", "line":"TS", "upbound":true, "arrive":"11:46(40)", "depart":"11:47(40)"},
	  {"stop":"906", "track":"1", "line":"TS", "upbound":true, "pass":"11:48(55)"},
	  // N/A
	  {"stop":"904", "track":"1", "line":"TS", "upbound":true, "pass":"11:50(55)"},
	  {"stop":"903", "track":{"default": "1", "ssr": "2"}, "line":"TS", "upbound":true, "arrive":"11:52(05)", "depart":"11:53(05)"},
	  {"stop":"902", "track":"1", "line":"TS", "upbound":true, "pass":"11:54(20)"},
	  {"stop":"501", "track":"4", "line":"TE", "upbound":true, "arrive":"11:55(30)", "depart":"11:56(30)"},
	  {"stop":"502", "track":"1", "line":"TE", "upbound":true, "pass":"11:57(25)"},
	  {"stop":"503", "track":{"default": "1", "ssr": "2"}, "line":"TE", "upbound":true, "arrive":"11:58(35)", "depart":"11:59(35)"},
	  {"stop":"504", "track":"1", "line":"TE", "upbound":true, "pass":"12:01(10)"},
	  // N/A
	  {"stop":"506", "track":"1", "line":"TE", "upbound":true, "pass":"12:02(55)"},
	  {"stop":"507", "track":"1", "line":"TE", "upbound":true, "arrive":"12:03(50)", "depart":"12:04(50)"},
	  {"stop":"508", "track":"1", "line":"TE", "upbound":true, "pass":"12:05(45)"},
	  // N/A
	  {"stop":"510", "track":"1", "line":"TE", "upbound":true, "pass":"12:08(25)"},
	  {"stop":"112", "track":"2", "line":"TE", "upbound":true, "pass":"12:10(10)"},
	  {"stop":"113", "track":"2", "line":"MK", "upbound":true, "arrive":"12:11(20)", "depart":"12:12(50)"},
	  {"stop":"115", "track":{"default": "1", "alt115": "2"}, "line":"MK", "upbound":{"default": true, "alt114": false}, "arrive":"12:15(10)", "depart":{"default":"12:15(55)", "alt114":"12:17(10)"}},
	  {"stop":"114", "track":"1", "line":"MK", "upbound":{"default": true, "alt114": false}, "arrive":{"default":"", "alt114":"12:20(00)"}},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "arrive":"12:20(40)", "depart":"12:21(30)"},
	  {"stop":"125", "track":"1", "line":"MK", "upbound":true, "arrive":"12:24(35)", "depart":"12:25(15)"},
	  {"stop":"127", "track":"1", "line":"MK", "upbound":true, "pass":"12:26(50)"},
	  {"stop":"131", "track":"1", "line":"MK", "upbound":true, "arrive":"12:29(40)", "depart":"12:30(30)"},
	  {"stop":"135", "track":"1", "line":"MK", "upbound":true, "arrive":"12:34(00)", "depart":"12:34(40)"},
	  {"stop":"139", "track":"3", "line":"MK", "upbound":true, "arrive":"12:37(50)", "depart":"12:38(40)"},
	  {"stop":"140", "track":"1", "line":"MK", "upbound":true, "pass":"12:41(50)"},
	  {"stop":"141", "track":"1", "line":"MK", "upbound":true, "pass":"12:43(05)"},
	  {"stop":"142", "track":{"default": "2", "alt142": "1"}, "line":"MK", "upbound":true, "arrive":"12:44(25)", "depart":"12:45(05)"},
	  {"stop":"143", "track":"1", "line":"MK", "upbound":true, "pass":"12:46(20)"},
	  {"stop":"144", "track":"1", "line":"MK", "upbound":true, "pass":"12:48(50)"},
	  {"stop":"145", "track":"3", "line":"MK", "upbound":true, "arrive":"12:50(05)", "depart":"12:51(05)"},
	  {"stop":"146", "track":"1", "line":"MK", "upbound":true, "pass":"12:52(15)"},
	  // N/A
	  // N/A
	  {"stop":"149", "track":"1", "line":"MK", "upbound":true, "pass":"12:54(55)"},
	  {"stop":"150", "track":{"default": "3", "alt150": "5"}, "line":"MK", "upbound":true, "arrive":"12:55(55)", "depart":"12:56(55)"},
	  {"stop":"151", "track":"1", "line":"MK", "upbound":true, "pass":"12:57(45)"},
	  // N/A
	  {"stop":"153", "track":"1", "line":"MK", "upbound":true, "pass":"12:59(15)"},
	  {"stop":"154", "track":"3", "line":"MK", "upbound":true, "arrive":"13:00(15)", "depart":"13:01(05)"},
	  {"stop":"155", "track":"1", "line":"MK", "upbound":true, "pass":"13:02(00)"},
	  // N/A
	  {"stop":"157", "track":"1", "line":"MK", "upbound":true, "pass":"13:03(25)"},
	  {"stop":"158", "track":"7", "line":"MK", "upbound":true, "arrive":"13:04(30)", "depart":{"default":"13:07(10)", "a":"13:06(10)"}},
	  {"stop":"159", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:09(50)", "a":"13:08(50)"}, "depart":{"default":"13:10(30)", "a":"13:09(30)"}},
	  {"stop":"160", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:11(55)", "a":"13:10(55)"}, "depart":{"default":"13:12(35)", "a":"13:11(35)"}},
	  {"stop":"161", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:14(20)", "a":"13:13(20)"}, "depart":{"default":"13:15(50)", "a":"13:14(20)"}},
	  {"cross":"162_c", "start":{"default":"13:16(45)", "a":"13:15(15)"}, "end":{"default":"13:18(00)", "a":"13:16(30)"}},
	  {"stop":"162", "track":{"default": "3", "alt162": "4"}, "arrive":{"default":"13:18(00)", "a":"13:16(30)"}},
	],
  };
  global.train_patterns["TR02"] = {
	"trainType": {"default": "RAP", "com": "COR", "local": "LOC"},
	"pivot": "12:00", "consist": "N12",
	"label": "快速 / 通勤快速 天堂寺線（下リ：香田空港 ➜ 南新空港）",
	"refTime": {"MK": "11:51(00)", "TE": "11:56(00)", "TS": "11:57(00)"},
	"remarks": "本線最高速度130km/h、天堂寺線最高速度110km/h、12両固定編成。[a,c] 香田空港ダイヤ調整 [com] 通勤快速",
	"upbound": false, "template": [
	  {"stop":"162", "track":{"default": "3", "alt162": "4"}, "line":"MK", "upbound":false, "depart":{"default":"10:35(00)", "a":"10:36(30)", "b":"10:25(00)", "c":"10:26(30)"}},
	  {"stop":"161", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:36(40)", "a":"10:38(10)", "b":"10:26(40)", "c":"10:28(10)"}, "depart":{"default":"10:38(10)", "a":"10:39(10)", "b":"10:28(10)", "c":"10:29(10)"}},
	  {"stop":"160", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:39(55)", "a":"10:40(55)", "b":"10:29(55)", "c":"10:30(55)"}, "depart":{"default":"10:40(35)", "a":"10:41(35)", "b":"10:30(35)", "c":"10:31(35)"}},
	  {"stop":"159", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:42(00)", "a":"10:43(00)", "b":"10:32(00)", "c":"10:33(00)"}, "depart":{"default":"10:42(40)", "a":"10:43(40)", "b":"10:32(40)", "c":"10:33(40)"}},
	  {"stop":"158", "track":"10", "line":"MK", "upbound":false, "arrive":{"default":"10:45(20)", "a":"10:46(20)", "b":"10:35(20)", "c":"10:36(20)"}, "depart":{"default":"10:48(00)", "com":"10:38(00)"}},
	  {"stop":"157", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:49(05)", "com":"10:40(40)"}, "depart":{"default":"", "com":"10:41(15)"}, "pass":{"default":"10:49(05)", "com":""}},
	  {"stop":"156", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "com":"10:43(00)"}, "depart":{"default":"", "com":"10:43(35)"}},
	  {"stop":"155", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "com":"10:45(00)"}, "depart":{"default":"", "com":"10:45(40)"}, "pass":{"default":"10:50(30)", "com":""}},
	  {"stop":"154", "track":"4", "line":"MK", "upbound":false, "arrive":{"default":"10:51(25)", "com":"10:47(00)"}, "depart":{"default":"10:52(15)", "com":"10:47(50)"}},
	  {"stop":"153", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "com":"10:49(10)"}, "depart":{"default":"", "com":"10:49(50)"}, "pass":{"default":"10:53(15)", "com":""}},
	  {"stop":"152", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "com":"10:51(10)"}, "depart":{"default":"", "com":"10:51(50)"}},
	  {"stop":"151", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "com":"10:53(10)"}, "depart":{"default":"", "com":"10:53(50)"}, "pass":{"default":"10:54(45)", "com":""}},
	  {"stop":"150", "track":{"default": "4", "alt150": "6"}, "line":"MK", "upbound":false, "arrive":"10:55(35)", "depart":"10:56(35)"},
	  {"stop":"149", "track":"2", "line":"MK", "upbound":false, "pass":"10:57(35)"},
	  // N/A
	  // N/A
	  {"stop":"146", "track":"2", "line":"MK", "upbound":false, "pass":"11:00(15)"},
	  {"stop":"145", "track":"4", "line":"MK", "upbound":false, "arrive":"11:01(25)", "depart":"11:02(25)"},
	  {"stop":"144", "track":"2", "line":"MK", "upbound":false, "pass":"11:03(40)"},
	  {"stop":"143", "track":"2", "line":"MK", "upbound":false, "pass":"11:06(10)"},
	  {"stop":"142", "track":{"default": "3", "alt142": "4"}, "line":"MK", "upbound":false, "arrive":"11:07(25)", "depart":"11:08(05)"},
	  {"stop":"141", "track":"2", "line":"MK", "upbound":false, "pass":"11:09(25)"},
	  {"stop":"140", "track":"2", "line":"MK", "upbound":false, "pass":"11:10(40)"},
	  {"stop":"139", "track":"4", "line":"MK", "upbound":false, "arrive":"11:13(50)", "depart":"11:14(40)"},
	  {"stop":"135", "track":"4", "line":"MK", "upbound":false, "arrive":"11:17(50)", "depart":"11:18(30)"},
	  {"stop":"131", "track":"6", "line":"MK", "upbound":false, "arrive":"11:22(00)", "depart":"11:22(50)"},
	  {"stop":"127", "track":"4", "line":"MK", "upbound":false, "pass":"11:25(40)"},
	  {"stop":"125", "track":"4", "line":"MK", "upbound":false, "arrive":"11:27(15)", "depart":"11:27(55)"},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "arrive":"11:31(00)", "depart":"11:31(50)"},
	  {"stop":"114", "track":"2", "line":"MK", "upbound":{"default": false, "alt114": true}, "depart":{"default":"", "alt114":"11:32(30)"}},
	  {"stop":"115", "track":{"default": "4", "alt115": "3"}, "line":"MK", "upbound":false, "arrive":{"default":"11:36(35)", "alt114":"11:35(20)"}, "depart":"11:37(20)"},
	  {"stop":"113", "track":"5", "line":"TE", "upbound":false, "arrive":"11:39(40)", "depart":"11:41(10)"},
	  {"stop":"112", "track":"3", "line":"TE", "upbound":false, "pass":"11:42(20)"},
	  {"stop":"510", "track":"2", "line":"TE", "upbound":false, "pass":"11:44(05)"},
	  // N/A
	  {"stop":"508", "track":"2", "line":"TE", "upbound":false, "pass":"11:46(45)"},
	  {"stop":"507", "track":"3", "line":"TE", "upbound":false, "arrive":"11:47(40)", "depart":"11:48(40)"},
	  {"stop":"506", "track":"2", "line":"TE", "upbound":false, "pass":"11:49(35)"},
	  // N/A
	  {"stop":"504", "track":"2", "line":"TE", "upbound":false, "pass":"11:51(20)"},
	  {"stop":"503", "track":{"default": "3", "ssr": "2"}, "line":"TE", "upbound":false, "arrive":"11:52(55)", "depart":"11:53(55)"},
	  {"stop":"502", "track":"2", "line":"TE", "upbound":false, "pass":"11:55(05)"},
	  {"stop":"501", "track":"5", "line":"TS", "upbound":false, "arrive":"11:56(00)", "depart":"11:57(00)"},
	  {"stop":"902", "track":"2", "line":"TS", "upbound":false, "pass":"11:58(10)"},
	  {"stop":"903", "track":{"default": "3", "ssr": "2"}, "line":"TS", "upbound":false, "arrive":"11:59(25)", "depart":"12:00(25)"},
	  {"stop":"904", "track":"2", "line":"TS", "upbound":false, "pass":"12:01(35)"},
	  // N/A
	  {"stop":"906", "track":"2", "line":"TS", "upbound":false, "pass":"12:03(35)"},
	  {"stop":"907", "track":"6", "line":"TS", "upbound":false, "arrive":"12:04(50)", "depart":"12:05(50)"},
	  {"stop":"908", "track":"2", "line":"TS", "upbound":false, "pass":"12:07(00)"},
	  // N/A
	  {"stop":"910", "track":"2", "line":"TS", "upbound":false, "pass":"12:08(55)"},
	  {"stop":"911", "track":{"default": "7", "ssr": "6"}, "line":"TS", "upbound":false, "arrive":"12:09(45)", "depart":"12:10(45)"},
	  {"stop":"912", "track":"2", "line":"TS", "upbound":false, "pass":"12:12(10)"},
	  // N/A
	  {"stop":"914", "track":"2", "line":"TS", "upbound":false, "pass":"12:14(50)"},
	  {"stop":"915", "track":"3", "line":"TS", "upbound":false, "arrive":"12:16(25)", "depart":"12:17(10)"},
	  {"stop":"916", "track":"1", "arrive":"12:20(10)"},
	],
  };

  global.train_patterns["TR03"] = {
	"trainType": "RAP",
	"pivot": "12:00", "consist": "N12",
	"label": "快速 河田行（上リ：麥急河田 ➜ 香田空港）",
	"refTime": {"MK": "12:02(00)"},
	"remarks": "最高速度130km/h、12両固定編成。[a] 香田空港ダイヤ調整",
	"upbound": true, "template": [
	  {"stop":"101", "track":{"default": "7", "alt101": "6"}, "line":"MK", "upbound":true, "depart":"12:02(00)"},
	  {"stop":"104", "track":"2", "line":"MK", "upbound":true, "arrive":"12:04(50)", "depart":"12:06(00)"},
	  {"stop":"113", "track":"2", "line":"MK", "upbound":true, "arrive":"12:11(30)", "depart":"12:12(50)"},
	  {"stop":"115", "track":{"default": "1", "alt115": "2"}, "line":"MK", "upbound":true, "arrive":"12:15(10)", "depart":{"default":"12:15(55)", "alt114":"12:17(10)"}},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "arrive":"12:20(40)", "depart":"12:21(30)"},
	  {"stop":"125", "track":"1", "line":"MK", "upbound":true, "arrive":"12:24(35)", "depart":"12:25(15)"},
	  {"stop":"127", "track":"1", "line":"MK", "upbound":true, "pass":"12:26(50)"},
	  {"stop":"131", "track":"1", "line":"MK", "upbound":true, "arrive":"12:29(40)", "depart":"12:30(30)"},
	  {"stop":"135", "track":"1", "line":"MK", "upbound":true, "arrive":"12:34(00)", "depart":"12:34(40)"},
	  {"stop":"139", "track":"3", "line":"MK", "upbound":true, "arrive":"12:37(50)", "depart":"12:38(40)"},
	  {"stop":"140", "track":"1", "line":"MK", "upbound":true, "pass":"12:41(50)"},
	  {"stop":"141", "track":"1", "line":"MK", "upbound":true, "pass":"12:43(05)"},
	  {"stop":"142", "track":{"default": "2", "alt142": "1"}, "line":"MK", "upbound":true, "arrive":"12:44(25)", "depart":"12:45(05)"},
	  {"stop":"143", "track":"1", "line":"MK", "upbound":true, "pass":"12:46(20)"},
	  {"stop":"144", "track":"1", "line":"MK", "upbound":true, "pass":"12:48(50)"},
	  {"stop":"145", "track":"3", "line":"MK", "upbound":true, "arrive":"12:50(05)", "depart":"12:51(05)"},
	  {"stop":"146", "track":"1", "line":"MK", "upbound":true, "pass":"12:52(15)"},
	  // N/A
	  // N/A
	  {"stop":"149", "track":"1", "line":"MK", "upbound":true, "pass":"12:54(55)"},
	  {"stop":"150", "track":{"default": "3", "alt150": "5"}, "line":"MK", "upbound":true, "arrive":"12:55(55)", "depart":"12:56(55)"},
	  {"stop":"151", "track":"1", "line":"MK", "upbound":true, "pass":"12:57(45)"},
	  // N/A
	  {"stop":"153", "track":"1", "line":"MK", "upbound":true, "pass":"12:59(15)"},
	  {"stop":"154", "track":"3", "line":"MK", "upbound":true, "arrive":"13:00(15)", "depart":"13:01(05)"},
	  {"stop":"155", "track":"1", "line":"MK", "upbound":true, "pass":"13:02(00)"},
	  // N/A
	  {"stop":"157", "track":"1", "line":"MK", "upbound":true, "pass":"13:03(25)"},
	  {"stop":"158", "track":"7", "line":"MK", "upbound":true, "arrive":"13:04(30)", "depart":{"default":"13:07(10)", "a":"13:06(10)"}},
	  {"stop":"159", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:09(50)", "a":"13:08(50)"}, "depart":{"default":"13:10(30)", "a":"13:09(30)"}},
	  {"stop":"160", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:11(55)", "a":"13:10(55)"}, "depart":{"default":"13:12(35)", "a":"13:11(35)"}},
	  {"stop":"161", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"13:14(20)", "a":"13:13(20)"}, "depart":{"default":"13:15(50)", "a":"13:14(20)"}},
	  {"cross":"162_c", "start":{"default":"13:16(45)", "a":"13:15(15)"}, "end":{"default":"13:18(00)", "a":"13:16(30)"}},
	  {"stop":"162", "track":{"default": "3", "alt162": "4"}, "arrive":{"default":"13:18(00)", "a":"13:16(30)"}},
	],
  };
  global.train_patterns["TR04"] = {
	"trainType": "RAP",
	"pivot": "12:00", "consist": "N12",
	"label": "快速 河田行（下リ：香田空港 ➜ 麥急河田）",
	"refTime": {"MK": "11:51(00)"},
	"remarks": "最高速度130km/h、12両固定編成。[a] 香田空港ダイヤ調整",
	"upbound": false, "template": [
	  {"stop":"162", "track":{"default": "3", "alt162": "4"}, "line":"MK", "upbound":false, "depart":{"default":"10:35(00)", "a":"10:36(30)", "b":"10:25(00)", "c":"10:26(30)"}},
	  {"stop":"161", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:36(40)", "a":"10:38(10)", "b":"10:26(40)", "c":"10:28(10)"}, "depart":{"default":"10:38(10)", "a":"10:39(10)", "b":"10:28(10)", "c":"10:29(10)"}},
	  {"stop":"160", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:39(55)", "a":"10:40(55)", "b":"10:29(55)", "c":"10:30(55)"}, "depart":{"default":"10:40(35)", "a":"10:41(35)", "b":"10:30(35)", "c":"10:31(35)"}},
	  {"stop":"159", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"10:42(00)", "a":"10:43(00)", "b":"10:32(00)", "c":"10:33(00)"}, "depart":{"default":"10:42(40)", "a":"10:43(40)", "b":"10:32(40)", "c":"10:33(40)"}},
	  {"stop":"158", "track":"10", "line":"MK", "upbound":false, "arrive":{"default":"10:45(20)", "a":"10:46(20)", "b":"10:35(20)", "c":"10:36(20)"}, "depart":{"default":"10:48(00)", "com":"10:38(00)"}},
	  {"stop":"157", "track":"2", "line":"MK", "upbound":false, "pass":{"default":"10:49(05)", "com":""}},
	  // N/A
	  {"stop":"155", "track":"2", "line":"MK", "upbound":false, "pass":{"default":"10:50(30)", "com":""}},
	  {"stop":"154", "track":"4", "line":"MK", "upbound":false, "arrive":{"default":"10:51(25)", "com":"10:47(00)"}, "depart":{"default":"10:52(15)", "com":"10:47(50)"}},
	  {"stop":"153", "track":"2", "line":"MK", "upbound":false, "pass":{"default":"10:53(15)", "com":""}},
	  // N/A
	  {"stop":"151", "track":"2", "line":"MK", "upbound":false, "pass":{"default":"10:54(45)", "com":""}},
	  {"stop":"150", "track":{"default": "4", "alt150": "6"}, "line":"MK", "upbound":false, "arrive":"10:55(35)", "depart":"10:56(35)"},
	  {"stop":"149", "track":"2", "line":"MK", "upbound":false, "pass":"10:57(35)"},
	  // N/A
	  // N/A
	  {"stop":"146", "track":"2", "line":"MK", "upbound":false, "pass":"11:00(15)"},
	  {"stop":"145", "track":"4", "line":"MK", "upbound":false, "arrive":"11:01(25)", "depart":"11:02(25)"},
	  {"stop":"144", "track":"2", "line":"MK", "upbound":false, "pass":"11:03(40)"},
	  {"stop":"143", "track":"2", "line":"MK", "upbound":false, "pass":"11:06(10)"},
	  {"stop":"142", "track":{"default": "3", "alt142": "4"}, "line":"MK", "upbound":false, "arrive":"11:07(25)", "depart":"11:08(05)"},
	  {"stop":"141", "track":"2", "line":"MK", "upbound":false, "pass":"11:09(25)"},
	  {"stop":"140", "track":"2", "line":"MK", "upbound":false, "pass":"11:10(40)"},
	  {"stop":"139", "track":"4", "line":"MK", "upbound":false, "arrive":"11:13(50)", "depart":"11:14(40)"},
	  {"stop":"135", "track":"4", "line":"MK", "upbound":false, "arrive":"11:17(50)", "depart":"11:18(30)"},
	  {"stop":"131", "track":"6", "line":"MK", "upbound":false, "arrive":"11:22(00)", "depart":"11:22(50)"},
	  {"stop":"127", "track":"4", "line":"MK", "upbound":false, "pass":"11:25(40)"},
	  {"stop":"125", "track":"4", "line":"MK", "upbound":false, "arrive":"11:27(15)", "depart":"11:27(55)"},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "arrive":"11:31(00)", "depart":"11:31(50)"},
	  {"stop":"115", "track":{"default": "4", "alt115": "3"}, "line":"MK", "upbound":false, "arrive":{"default":"11:36(35)", "alt114":"11:35(20)"}, "depart":"11:37(20)"},
	  {"stop":"113", "track":"5", "line":"MK", "upbound":false, "arrive":"11:39(40)", "depart":"11:41(00)"},
	  {"stop":"104", "track":"4", "line":"MK", "upbound":false, "arrive":"11:46(30)", "depart":"11:47(40)"},
	  {"stop":"101", "track":{"default": "6", "alt101": "7"}, "arrive":"11:51(00)"},
	],
  };
  global.train_patterns["TR05"] = {
	"trainType": "SPR",
	"pivot": "12:00", "consist": "N12",
	"label": "特別快速（上リ：東青山 ➜ 香田空港）",
	"refTime": {"MK": "12:02(00)"},
	"remarks": "最高速度130km/h、12両固定編成。",
	"upbound": true, "template": [
	  {"stop":"114", "track":"1", "line":"MK", "upbound":true, "depart":"12:12(00)"},
	  {"stop":"115", "track":"2", "line":"MK", "upbound":true, "arrive":"12:13(30)", "depart":"12:14(05)"},
	  {"stop":"116", "track":"1", "line":"MK", "upbound":true, "arrive":"12:15(30)", "depart":"12:16(05)"},
	  {"stop":"117", "track":"1", "line":"MK", "upbound":true, "pass":"12:17(20)"},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "arrive":"12:21(00)", "depart":"12:21(40)"},
	  {"stop":"125", "track":"1", "line":"MK", "upbound":true, "arrive":"12:24(45)", "depart":"12:25(25)"},
	  {"stop":"127", "track":"1", "line":"MK", "upbound":true, "pass":"12:27(-0)"},
	  {"stop":"131", "track":"1", "line":"MK", "upbound":true, "arrive":"12:29(50)", "depart":"12:30(30)"},
	  {"stop":"135", "track":"1", "line":"MK", "upbound":true, "arrive":"12:34(00)", "depart":"12:34(40)"},
	  {"stop":"139", "track":"3", "line":"MK", "upbound":true, "arrive":"12:37(50)", "depart":"12:38(40)"},
	  {"stop":"145", "track":"1", "line":"MK", "upbound":true, "pass":"12:48(35)"},
	  {"stop":"150", "track":"1", "line":"MK", "upbound":true, "arrive":"12:52(00)", "depart":"12:53(10)"},
	  {"stop":"154", "track":"1", "line":"MK", "upbound":true, "pass":"12:55(20)"},
	  {"stop":"158", "track":"4", "line":"MK", "upbound":true, "pass":"12:57(55)"},
	  {"stop":"159", "track":"1", "line":"MK", "upbound":true, "arrive":"12:59(50)", "depart":"13:00(30)"},
	  {"stop":"160", "track":"1", "line":"MK", "upbound":true, "arrive":"13:01(55)", "depart":"13:02(35)"},
	  {"stop":"161", "track":"1", "line":"MK", "upbound":true, "arrive":"13:04(20)", "depart":"13:05(50)"},
	  {"cross":"162_c", "start":"13:06(45)", "end":"13:08(00)"},
	  {"stop":"162", "track":{"default": "3", "alt162": "4"}, "line":"MK", "upbound":true, "arrive":"13:08(00)"},
	],
  };
  global.train_patterns["TR06"] = {
	"trainType": "SPR",
	"pivot": "12:00", "consist": "N12",
	"label": "特別快速（下リ：香田空港 ➜ 東青山）",
	"refTime": {"MK": "11:51(00)"},
	"remarks": "最高速度130km/h、12両固定編成。",
	"upbound": false, "template": [
	  {"stop":"162", "track":{"default": "3", "alt162": "4"}, "line":"MK", "upbound":false, "depart":"10:45(00)"},
	  {"stop":"161", "track":"2", "line":"MK", "upbound":false, "arrive":"10:46(40)", "depart":"10:48(10)"},
	  {"stop":"160", "track":"2", "line":"MK", "upbound":false, "arrive":"10:49(55)", "depart":"10:50(35)"},
	  {"stop":"159", "track":"2", "line":"MK", "upbound":false, "arrive":"10:52(00)", "depart":"10:52(40)"},
	  {"stop":"158", "track":"5", "line":"MK", "upbound":false, "pass":"10:54(35)"},
	  {"stop":"154", "track":"2", "line":"MK", "upbound":false, "pass":"10:57(10)"},
	  {"stop":"150", "track":"2", "line":"MK", "upbound":false, "arrive":"10:59(20)", "depart":"11:00(30)"},
	  {"stop":"145", "track":"2", "line":"MK", "upbound":false, "pass":"11:03(55)"},
	  {"stop":"139", "track":"4", "line":"MK", "upbound":false, "arrive":"11:13(50)", "depart":"11:14(40)"},
	  {"stop":"135", "track":"4", "line":"MK", "upbound":false, "arrive":"11:17(50)", "depart":"11:18(30)"},
	  {"stop":"131", "track":"6", "line":"MK", "upbound":false, "arrive":"11:22(00)", "depart":"11:22(40)"},
	  {"stop":"127", "track":"4", "line":"MK", "upbound":false, "pass":"11:25(30)"},
	  {"stop":"125", "track":"4", "line":"MK", "upbound":false, "arrive":"11:27(05)", "depart":"11:27(45)"},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "arrive":"11:30(50)", "depart":"11:31(30)"},
	  {"stop":"117", "track":"2", "line":"MK", "upbound":false, "pass":"11:35(10)"},
	  {"stop":"116", "track":"2", "line":"MK", "upbound":false, "arrive":"11:36(25)", "depart":"11:37(00)"},
	  {"stop":"115", "track":"3", "line":"MK", "upbound":false, "arrive":"11:38(25)", "depart":"11:39(00)"},
	  {"stop":"114", "track":"2", "line":"MK", "upbound":false, "arrive":"11:40(30)"},
	],
  };

  global.train_patterns["TR51"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "快速 回送列車（上リ：麥急赤田 ➜ 赤田車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"158", "track":"7", "depart":"13:07(10)"},
	  {"stop":"AKD", "track":"0", "arrive":"13:08(30)"},
	],
  };
  global.train_patterns["TR52"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "快速 回送列車（下リ：赤田車両基地 ➜ 麥急赤田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AKD", "track":"0", "depart":"10:44(00)"},
	  {"stop":"158", "track":"10", "arrive":"10:45(20)"},
	],
  };
  global.train_patterns["TR53"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "快速 回送列車（上リ：南向島車両基地 ➜ 麥急青山）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"MMJ", "track":"0", "depart":"12:06(30)"},
	  {"stop":"510", "track":"1", "pass":"12:08(25)"},
	  {"stop":"112", "track":"3", "pass":"12:10(10)"},
	  {"stop":"113", "track":"2", "arrive":"12:11(20)"},
	],
  };
  global.train_patterns["TR54"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "快速 回送列車（下リ：麥急青山 ➜ 南向島車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"113", "track":"5", "depart":"11:41(10)"},
	  {"stop":"112", "track":"4", "pass":"11:42(20)"},
	  {"stop":"510", "track":"2", "pass":"11:44(05)"},
	  {"stop":"MMJ", "track":"0", "arrive":"11:46(00)"},
	],
  };
  global.train_patterns["TR55"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "快速 回送列車（上リ：新羽崎車両基地 ➜ 新羽崎）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"SHZ", "track":"0", "depart":"11:34(00)"},
	  {"stop":"915", "track":"1", "arrive":"11:35(20)"},
	],
  };
  global.train_patterns["TR56"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "快速 回送列車（下リ：新羽崎 ➜ 新羽崎車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"915", "track":"3", "depart":"12:17(10)"},
	  {"stop":"SHZ", "track":"0", "arrive":"12:18(30)"},
	],
  };
  global.train_patterns["TR62"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "通勤快速 回送列車（下リ：赤田車両基地 ➜ 藍田武）",
	"remarks": "平日のみ",
	"upbound": false, "template": [
	  {"stop":"AKD", "track":"0", "depart":"10:39(00)"},
	  {"stop":"158", "track":"10", "pass":"10:40(15)"},
	  {"stop":"157", "track":"2", "pass":"10:41(30)"},
	  // N/A
	  {"stop":"155", "track":"2", "pass":"10:45(00)"},
	  {"stop":"154", "track":"4", "arrive":"10:47(00)"},
	],
  };
  global.train_patterns["TR64"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "通勤快速 回送列車（下リ：麥急赤田 ➜ 赤田車両基地）",
	"remarks": "平日のみ",
	"upbound": false, "template": [
	  {"stop":"158", "track":"10", "depart":"10:40(00)"},
	  {"stop":"AKD", "track":"0", "arrive":"10:42(00)"},
	],
  };

/**
 * Sectional Rapid & Holiday Rapid - Main Line & Tendoji Line
*/

global.train_patterns["TS01"] = {
	"trainType": {"default": "SER", "local": "LOC", "snd": "#"},
	"pivot": "12:00", "consist": "N12",
	"label": "区間快速 天堂寺線（上リ：新羽崎 ➜ 水馬山）",
	"refTime": {"MK": "12:07(00)", "TE": "12:01(30)", "TS": "12:00(30)"},
	"remarks": "最高速度110km/h、12両固定編成。",
	"upbound": true, "template": [
	  {"stop":"915", "track":"2", "line":"TS", "upbound":true, "depart":"11:37(15)"},
	  {"stop":"914", "track":"1", "line":"TS", "upbound":true, "arrive":"11:39(15)", "depart":"11:39(55)"},
	  {"stop":"913", "track":"1", "line":"TS", "upbound":true, "arrive":"11:41(50)", "depart":"11:42(30)"},
	  {"stop":"912", "track":"1", "line":"TS", "upbound":true, "arrive":"11:44(25)", "depart":"11:45(05)"},
	  {"stop":"911", "track":"5", "line":"TS", "upbound":true, "arrive":"11:46(45)", "depart":"11:47(45)"},
	  {"stop":"910", "track":"1", "line":"TS", "upbound":true, "pass":"11:48(35)"},
	  // N/A
	  {"stop":"908", "track":"1", "line":"TS", "upbound":true, "pass":"11:50(30)"},
	  {"stop":"907", "track":"5", "line":"TS", "upbound":true, "arrive":"11:51(40)", "depart":"11:52(40)"},
	  {"stop":"906", "track":"1", "line":"TS", "upbound":true, "pass":"11:53(55)"},
	  // N/A
	  {"stop":"904", "track":"1", "line":"TS", "upbound":true, "pass":"11:55(55)"},
	  {"stop":"903", "track":{"default": "1", "ssr": "2"}, "line":"TS", "upbound":true, "arrive":"11:57(05)", "depart":"11:58(05)"},
	  {"stop":"902", "track":"1", "line":"TS", "upbound":true, "pass":"11:59(20)"},
	  {"stop":"501", "track":"4", "line":"TE", "upbound":true, "arrive":"12:00(30)", "depart":"12:01(30)"},
	  {"stop":"502", "track":"1", "line":"TE", "upbound":true, "pass":"12:02(25)"},
	  {"stop":"503", "track":{"default": "1", "ssr": "2"}, "line":"TE", "upbound":true, "arrive":"12:03(35)", "depart":"12:04(35)"},
	  {"stop":"504", "track":"1", "line":"TE", "upbound":true, "pass":"12:06(10)"},
	  // N/A
	  {"stop":"506", "track":"1", "line":"TE", "upbound":true, "pass":"12:07(55)"},
	  {"stop":"507", "track":"1", "line":"TE", "upbound":true, "arrive":"12:08(50)", "depart":"12:09(50)"},
	  {"stop":"508", "track":"1", "line":"TE", "upbound":true, "pass":"12:10(45)"},
	  // N/A
	  {"stop":"510", "track":"1", "line":"TE", "upbound":true, "pass":"12:13(25)"},
	  {"stop":"112", "track":"2", "line":"TE", "upbound":true, "arrive":"12:15(25)", "depart":"12:16(05)"},
	  {"stop":"113", "track":"12", "line":"MK", "upbound":true, "arrive":"12:17(40)", "depart":"12:18(40)"},
	  {"stop":"114", "track":"1", "line":"MK", "upbound":true, "arrive":"12:20(25)", "depart":"12:21(00)"},
	  {"stop":"115", "track":"2", "line":"MK", "upbound":true, "arrive":"12:22(30)", "depart":"12:23(30)"},
	  {"stop":"116", "track":"1", "line":"MK", "upbound":true, "arrive":"12:24(55)", "depart":"12:25(30)"},
	  {"stop":"117", "track":"1", "line":"MK", "upbound":true, "arrive":"12:26(55)", "depart":"12:27(30)"},
	  {"stop":"118", "track":"1", "line":"MK", "upbound":true, "arrive":"12:29(00)", "depart":"12:29(35)"},
	  {"stop":"119", "track":"1", "line":"MK", "upbound":true, "arrive":"12:31(05)", "depart":"12:31(40)"},
	  {"stop":"120", "track":"1", "line":"MK", "upbound":true, "arrive":"12:33(15)", "depart":"12:33(50)"},
	  {"stop":"121", "track":"2", "line":"MK", "upbound":true, "arrive":"12:35(40)", "depart":"12:36(40)"},
	  {"stop":"122", "track":"1", "line":"MK", "upbound":true, "arrive":"12:38(05)", "depart":"12:38(40)"},
      {"stop":"SND", "track":"0", "depart":{"snd": "12:35(00)"}},
	  {"stop":"123", "track":"1", "line":"MK", "upbound":true, "arrive":"12:40(00)", "depart":"12:40(35)"},
	  {"stop":"124", "track":"1", "line":"MK", "upbound":true, "arrive":"12:41(55)", "depart":"12:42(30)"},
	  {"stop":"125", "track":"2", "line":"MK", "upbound":true, "arrive":"12:43(55)", "depart":"12:44(35)"},
	  {"stop":"126", "track":"1", "line":"MK", "upbound":true, "arrive":"12:45(55)", "depart":"12:46(30)"},
	  {"stop":"127", "track":"2", "line":"MK", "upbound":true, "arrive":"12:48(20)"},
	],
  };
  global.train_patterns["TS02"] = {
	"trainType": {"default": "SER", "local": "LOC", "snd": "#"},
	"pivot": "12:00", "consist": "N12",
	"label": "区間快速 天堂寺線（下リ：水馬山 ➜ 新羽崎）",
	"refTime": {"MK": "11:46(00)", "TE": "11:51(00)", "TS": "11:52(00)"},
	"remarks": "最高速度110km/h、12両固定編成。",
	"upbound": false, "template": [
	  {"stop":"127", "track":"3", "line":"MK", "upbound":false, "depart":"11:04(10)"},
	  {"stop":"126", "track":"2", "line":"MK", "upbound":false, "arrive":"11:05(45)", "depart":"11:06(20)"},
	  {"stop":"125", "track":"3", "line":"MK", "upbound":false, "arrive":"11:07(40)", "depart":"11:08(20)"},
	  {"stop":"124", "track":"2", "line":"MK", "upbound":false, "arrive":"11:09(45)", "depart":"11:10(20)"},
	  {"stop":"123", "track":"2", "line":"MK", "upbound":false, "arrive":"11:11(40)", "depart":"11:12(15)"},
	  {"stop":"122", "track":"2", "line":"MK", "upbound":false, "arrive":"11:13(35)", "depart":"11:14(10)"},
      {"stop":"SND", "track":"0", "arrive":{"snd": "11:17(15)"}},
	  {"stop":"121", "track":"3", "line":"MK", "upbound":false, "arrive":"11:15(50)", "depart":"11:16(50)"},
	  {"stop":"120", "track":"2", "line":"MK", "upbound":false, "arrive":"11:18(25)", "depart":"11:19(00)"},
	  {"stop":"119", "track":"2", "line":"MK", "upbound":false, "arrive":"11:20(35)", "depart":"11:21(10)"},
	  {"stop":"118", "track":"2", "line":"MK", "upbound":false, "arrive":"11:22(40)", "depart":"11:23(15)"},
	  {"stop":"117", "track":"2", "line":"MK", "upbound":false, "arrive":"11:24(45)", "depart":"11:25(20)"},
	  {"stop":"116", "track":"2", "line":"MK", "upbound":false, "arrive":"11:26(45)", "depart":"11:27(20)"},
	  {"stop":"115", "track":"3", "line":"MK", "upbound":false, "arrive":"11:29(00)", "depart":"11:30(00)"},
	  {"stop":"114", "track":"2", "line":"MK", "upbound":false, "arrive":"11:31(30)", "depart":"11:32(05)"},
	  {"stop":"113", "track":"15", "line":"TE", "upbound":false, "arrive":"11:33(50)", "depart":"11:34(50)"},
	  {"stop":"112", "track":"3", "line":"TE", "upbound":false, "arrive":"11:36(25)", "depart":"11:37(05)"},
	  {"stop":"510", "track":"2", "line":"TE", "upbound":false, "pass":"11:39(05)"},
	  // N/A
	  {"stop":"508", "track":"2", "line":"TE", "upbound":false, "pass":"11:41(45)"},
	  {"stop":"507", "track":"3", "line":"TE", "upbound":false, "arrive":"11:42(40)", "depart":"11:43(40)"},
	  {"stop":"506", "track":"2", "line":"TE", "upbound":false, "pass":"11:44(35)"},
	  // N/A
	  {"stop":"504", "track":"2", "line":"TE", "upbound":false, "pass":"11:46(20)"},
	  {"stop":"503", "track":{"default": "3", "ssr": "2"}, "line":"TE", "upbound":false, "arrive":"11:47(55)", "depart":"11:48(55)"},
	  {"stop":"502", "track":"2", "line":"TE", "upbound":false, "pass":"11:50(05)"},
	  {"stop":"501", "track":"5", "line":"TS", "upbound":false, "arrive":"11:51(00)", "depart":"11:52(00)"},
	  {"stop":"902", "track":"2", "line":"TS", "upbound":false, "pass":"11:53(10)"},
	  {"stop":"903", "track":{"default": "3", "ssr": "2"}, "line":"TS", "upbound":false, "arrive":"11:54(25)", "depart":"11:55(25)"},
	  {"stop":"904", "track":"2", "line":"TS", "upbound":false, "pass":"11:56(35)"},
	  // N/A
	  {"stop":"906", "track":"2", "line":"TS", "upbound":false, "pass":"11:58(35)"},
	  {"stop":"907", "track":"6", "line":"TS", "upbound":false, "arrive":"11:59(50)", "depart":"12:00(50)"},
	  {"stop":"908", "track":"2", "line":"TS", "upbound":false, "pass":"12:02(00)"},
	  // N/A
	  {"stop":"910", "track":"2", "line":"TS", "upbound":false, "pass":"12:03(55)"},
	  {"stop":"911", "track":"7", "line":"TS", "upbound":false, "arrive":"12:04(45)", "depart":"12:05(45)"},
	  {"stop":"912", "track":"2", "line":"TS", "upbound":false, "arrive":"12:07(25)", "depart":"12:08(05)"},
	  {"stop":"913", "track":"2", "line":"TS", "upbound":false, "arrive":"12:10(00)", "depart":"12:10(40)"},
	  {"stop":"914", "track":"2", "line":"TS", "upbound":false, "arrive":"12:12(35)", "depart":"12:13(15)"},
	  {"stop":"915", "track":"2", "line":"TS", "upbound":false, "arrive":"12:15(15)"},
	],
  };

  global.train_patterns["TS05"] = {
	"trainType": "HOR",
	"pivot": "12:00", "consist": "N12",
	"label": "休日快速 天堂寺線（上リ：新羽崎 ➜ 麥急青山）",
	"refTime": {"TE": "12:01(30)", "TS": "12:00(30)"},
	"remarks": "最高速度110km/h、12両固定編成。",
	"upbound": true, "template": [
	  {"stop":"915", "track":"2", "line":"TS", "upbound":true, "depart":"11:37(15)"},
	  {"stop":"914", "track":"1", "line":"TS", "upbound":true, "arrive":"11:39(15)", "depart":"11:39(55)"},
	  {"stop":"913", "track":"1", "line":"TS", "upbound":true, "arrive":"11:41(50)", "depart":"11:42(30)"},
	  {"stop":"912", "track":"1", "line":"TS", "upbound":true, "arrive":"11:44(25)", "depart":"11:45(05)"},
	  {"stop":"911", "track":{"default": "5", "alt_911": "6"}, "line":"TS", "upbound":true, "arrive":"11:46(45)", "depart":"11:47(45)"},
	  {"stop":"910", "track":"1", "line":"TS", "upbound":true, "pass":"11:48(35)"},
	  // N/A
	  {"stop":"908", "track":"1", "line":"TS", "upbound":true, "pass":"11:50(30)"},
	  {"stop":"907", "track":"5", "line":"TS", "upbound":true, "arrive":"11:51(40)", "depart":"11:52(40)"},
	  {"stop":"906", "track":"1", "line":"TS", "upbound":true, "pass":"11:53(55)"},
	  // N/A
	  {"stop":"904", "track":"1", "line":"TS", "upbound":true, "pass":"11:55(55)"},
	  {"stop":"903", "track":"1", "line":"TS", "upbound":true, "arrive":"11:57(05)", "depart":"11:58(05)"},
	  {"stop":"902", "track":"1", "line":"TS", "upbound":true, "pass":"11:59(20)"},
	  {"stop":"501", "track":"4", "line":"TE", "upbound":true, "arrive":"12:00(30)", "depart":"12:01(30)"},
	  {"stop":"502", "track":"1", "line":"TE", "upbound":true, "pass":"12:02(25)"},
	  {"stop":"503", "track":"1", "line":"TE", "upbound":true, "arrive":"12:03(35)", "depart":"12:04(35)"},
	  {"stop":"504", "track":"1", "line":"TE", "upbound":true, "arrive":"12:06(25)", "depart":"12:07(05)"},
	  {"stop":"505", "track":"1", "line":"TE", "upbound":true, "arrive":"12:08(30)", "depart":"12:09(10)"},
	  {"stop":"506", "track":"1", "line":"TE", "upbound":true, "arrive":"12:10(35)", "depart":"12:11(15)"},
	  {"stop":"507", "track":"1", "line":"TE", "upbound":true, "pass":"12:12(25)"},
	  {"stop":"508", "track":"1", "line":"TE", "upbound":true, "arrive":"12:13(35)", "depart":"12:14(15)"},
	  // N/A
	  {"stop":"510", "track":"1", "line":"TE", "upbound":true, "pass":"12:17(25)"},
	  {"stop":"112", "track":"2", "line":"TE", "upbound":true, "pass":"12:19(05)"},
	  {"stop":"113", "track":"12", "line":"TE", "upbound":true, "arrive":"12:20(10)"},
	],
  };
  global.train_patterns["TS06"] = {
	"trainType": "HOR",
	"pivot": "12:00", "consist": "N12",
	"label": "休日快速 天堂寺線（下リ：麥急青山 ➜ 新羽崎）",
	"refTime": {"TE": "11:51(00)", "TS": "11:52(00)"},
	"remarks": "最高速度110km/h、12両固定編成。",
	"upbound": false, "template": [
	  {"stop":"113", "track":"15", "line":"TE", "upbound":false, "depart":"11:32(20)"},
	  {"stop":"112", "track":"3", "line":"TE", "upbound":false, "pass":"11:33(25)"},
	  {"stop":"510", "track":"2", "line":"TE", "upbound":false, "pass":"11:35(05)"},
	  // N/A
	  {"stop":"508", "track":"2", "line":"TE", "upbound":false, "arrive":"11:38(15)", "depart":"11:38(55)"},
	  {"stop":"507", "track":"3", "line":"TE", "upbound":false, "pass":"11:40(05)"},
	  {"stop":"506", "track":"2", "line":"TE", "upbound":false, "arrive":"11:41(15)", "depart":"11:41(55)"},
	  {"stop":"505", "track":"2", "line":"TE", "upbound":false, "arrive":"11:43(20)", "depart":"11:44(00)"},
	  {"stop":"504", "track":"2", "line":"TE", "upbound":false, "arrive":"11:45(25)", "depart":"11:46(05)"},
	  {"stop":"503", "track":"3", "line":"TE", "upbound":false, "arrive":"11:47(55)", "depart":"11:48(55)"},
	  {"stop":"502", "track":"2", "line":"TE", "upbound":false, "pass":"11:50(05)"},
	  {"stop":"501", "track":"5", "line":"TS", "upbound":false, "arrive":"11:51(00)", "depart":"11:52(00)"},
	  {"stop":"902", "track":"2", "line":"TS", "upbound":false, "pass":"11:53(10)"},
	  {"stop":"903", "track":"3", "line":"TS", "upbound":false, "arrive":"11:54(25)", "depart":"11:55(25)"},
	  {"stop":"904", "track":"2", "line":"TS", "upbound":false, "pass":"11:56(35)"},
	  // N/A
	  {"stop":"906", "track":"2", "line":"TS", "upbound":false, "pass":"11:58(35)"},
	  {"stop":"907", "track":"6", "line":"TS", "upbound":false, "arrive":"11:59(50)", "depart":"12:00(50)"},
	  {"stop":"908", "track":"2", "line":"TS", "upbound":false, "pass":"12:02(00)"},
	  // N/A
	  {"stop":"910", "track":"2", "line":"TS", "upbound":false, "pass":"12:03(55)"},
	  {"stop":"911", "track":{"default": "7", "alt_911": "6"}, "line":"TS", "upbound":false, "arrive":"12:04(45)", "depart":"12:05(45)"},
	  {"stop":"912", "track":"2", "line":"TS", "upbound":false, "arrive":"12:07(25)", "depart":"12:08(05)"},
	  {"stop":"913", "track":"2", "line":"TS", "upbound":false, "arrive":"12:10(00)", "depart":"12:10(40)"},
	  {"stop":"914", "track":"2", "line":"TS", "upbound":false, "arrive":"12:12(35)", "depart":"12:13(15)"},
	  {"stop":"915", "track":"2", "line":"TS", "upbound":false, "arrive":"12:15(15)"},
	],
  };
  global.train_patterns["TS51"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間快速 回送列車（上リ：麥急砂田 ➜ 砂田東車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"121", "track":"2", "depart":"12:36(40)"},
	  {"stop":"SND", "track":"0", "arrive":"12:38(40)"},
	],
  };
  global.train_patterns["TS52"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間快速 回送列車（下リ：砂田東車両基地 ➜ 麥急砂田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"SND", "track":"0", "depart":"11:13(50)"},
	  {"stop":"121", "track":"3", "arrive":"11:15(50)"},
	],
  };
  global.train_patterns["TS55"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間快速 回送列車（上リ：麥急青山 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"113", "track":"12", "depart":"12:18(40)"},
	  {"stop":"AOY", "track":"0", "arrive":"12:20(00)"},
	],
  };
  global.train_patterns["TS56"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間快速 回送列車（下リ：青山車両基地 ➜ 麥急青山）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AOY", "track":"0", "depart":"11:32(30)"},
	  {"stop":"113", "track":"15", "arrive":"11:33(50)"},
	],
  };
  global.train_patterns["TS57"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間快速 回送列車（上リ：青山車両基地 ➜ 東青山）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"AOY", "track":"0", "depart":"12:20(30)"},
	  {"stop":"115", "track":"2", "arrive":"12:22(30)"},
	],
  };
  global.train_patterns["TS58"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間快速 回送列車（下リ：東青山 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"115", "track":"3", "depart":"11:30(00)"},
	  {"stop":"AOY", "track":"0", "arrive":"11:32(00)"},
	],
  };
  global.train_patterns["TS61"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間/休日快速 回送列車（上リ：新羽崎車両基地 ➜ 新羽崎）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"SHZ", "track":"0", "depart":"11:34(30)"},
	  {"stop":"915", "track":"2", "arrive":"11:36(15)"},
	],
  };
  global.train_patterns["TS62"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間/休日快速 回送列車（下リ：新羽崎 ➜ 新羽崎車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"915", "track":"2", "depart":"12:16(15)"},
	  {"stop":"SHZ", "track":"0", "arrive":"12:18(00)"},
	],
  };
  global.train_patterns["TS65"] = {
	"trainType": "#",
	"pivot": "12:00", "consist": "N12",
	"label": "休日快速 回送列車（上リ：麥急青山 ➜ 青山車両基地）",
	"remarks": "最高速度110km/h、12両固定編成。",
	"upbound": true, "template": [
	  {"stop":"113", "track":"12", "depart":"12:21(10)"},
	  {"stop":"AOY", "track":"0", "arrive":"12:22(30)"},
	],
  };
  global.train_patterns["TS66"] = {
	"trainType": "#",
	"pivot": "12:00", "consist": "N12",
	"label": "休日快速 回送列車（下リ：青山車両基地 ➜ 麥急青山）",
	"remarks": "最高速度110km/h、12両固定編成。",
	"upbound": false, "template": [
	  {"stop":"AOY", "track":"0", "depart":"11:30(00)"},
	  {"stop":"113", "track":"15", "arrive":"11:31(20)"},
	],
  };

/**
 * Sectional Special Rapid - Main Line & Tendoji Line
*/

global.train_patterns["TU01"] = {
	"trainType": {"default": "SSR", "local": "LOC", "kyj": "#"},
	"pivot": "12:00", "consist": "N12",
	"label": "区間特快 天堂寺線（上リ：新羽崎 ➜ 新太平）",
	"refTime": {"MK": "12:06(00)", "TE": "11:59(00)", "TS": "11:58(00)"},
	"remarks": "最高速度130km/h、12両固定編成。",
	"upbound": true, "template": [
	  {"stop":"915", "track":"2", "line":"TS", "upbound":true, "depart":"11:32(15)"},
	  {"stop":"914", "track":"1", "line":"TS", "upbound":true, "arrive":"11:34(15)", "depart":"11:34(55)"},
	  // N/A
	  {"stop":"912", "track":"1", "line":"TS", "upbound":true, "arrive":"11:38(10)", "depart":"11:38(50)"},
	  {"stop":"911", "track":"5", "line":"TS", "upbound":true, "arrive":"11:40(30)", "depart":"11:41(30)"},
	  {"stop":"910", "track":"1", "line":"TS", "upbound":true, "pass":"11:42(20)"},
	  // N/A
	  {"stop":"908", "track":"1", "line":"TS", "upbound":true, "pass":"11:44(15)"},
	  {"stop":"907", "track":"7", "line":"TS", "upbound":true, "arrive":"11:45(55)", "depart":"11:48(25)"},
	  {"stop":"906", "track":"1", "line":"TS", "upbound":true, "pass":"11:50(10)"},
	  // N/A
	  {"stop":"904", "track":"1", "line":"TS", "upbound":true, "pass":"11:52(10)"},
	  {"stop":"903", "track":"1", "line":"TS", "upbound":true, "arrive":"11:53(20)", "depart":"11:54(20)"},
	  {"stop":"902", "track":"1", "line":"TS", "upbound":true, "arrive":"11:55(55)", "depart":"11:56(35)"},
	  {"stop":"501", "track":"4", "line":"TE", "upbound":true, "arrive":"11:58(00)", "depart":"11:59(00)"},
	  {"stop":"502", "track":"1", "line":"TE", "upbound":true, "arrive":"12:00(15)", "depart":"12:00(55)"},
	  {"stop":"503", "track":"1", "line":"TE", "upbound":true, "arrive":"12:02(20)", "depart":"12:03(20)"},
	  {"stop":"504", "track":"1", "line":"TE", "upbound":true, "pass":"12:04(55)"},
	  // N/A
	  {"stop":"506", "track":"1", "line":"TE", "upbound":true, "pass":"12:06(40)"},
	  {"stop":"507", "track":"2", "line":"TE", "upbound":true, "arrive":"12:07(35)", "depart":"12:08(35)"},
	  {"stop":"508", "track":"1", "line":"TE", "upbound":true, "pass":"12:09(30)"},
	  // N/A
	  {"stop":"510", "track":"1", "line":"TE", "upbound":true, "pass":"12:12(10)"},
	  {"stop":"112", "track":"2", "line":"TE", "upbound":true, "pass":"12:13(50)"},
	  {"stop":"113", "track":"1", "line":"MK", "upbound":true, "pass":"12:16(35)"},
	  {"stop":"115", "track":"1", "line":"MK", "upbound":true, "pass":"12:18(35)"},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "pass":"12:25(35)"},
	  {"stop":"125", "track":"1", "line":"MK", "upbound":true, "pass":"12:27(55)"},
	  {"stop":"127", "track":"1", "line":"MK", "upbound":true, "pass":"12:29(15)"},
	  {"stop":"128", "track":"1", "line":"MK", "upbound":true, "arrive":"12:30(50)", "depart":"12:31(25)"},
	  {"stop":"129", "track":"1", "line":"MK", "upbound":true, "arrive":"12:32(50)", "depart":"12:33(25)"},
	  {"stop":"130", "track":"1", "line":"MK", "upbound":true, "arrive":"12:34(50)", "depart":"12:35(25)"},
	  {"stop":"131", "track":"2", "line":"MK", "upbound":true, "arrive":"12:37(10)", "depart":"12:38(10)"},
	  {"stop":"132", "track":"1", "line":"MK", "upbound":true, "arrive":"12:39(35)", "depart":"12:40(10)"},
	  {"stop":"KYJ", "track":"0", "depart":{"kyj": "12:38(15)"}},
	  {"stop":"133", "track":{"default": "1", "kyj": "2"}, "line":"MK", "upbound":true, "arrive":"12:41(35)", "depart":"12:42(15)"},
	  {"stop":"134", "track":"1", "line":"MK", "upbound":true, "arrive":"12:43(55)", "depart":"12:44(30)"},
	  {"stop":"135", "track":"2", "line":"MK", "upbound":true, "arrive":"12:46(25)", "depart":"12:47(20)"},
	  {"stop":"136", "track":"1", "line":"MK", "upbound":true, "arrive":"12:48(45)", "depart":"12:49(20)"},
	  {"stop":"137", "track":"1", "line":"MK", "upbound":true, "arrive":"12:50(45)", "depart":"12:51(20)"},
	  {"stop":"138", "track":"1", "arrive":"12:52(50)"},
	],
  };
  global.train_patterns["TU02"] = {
	"trainType": {"default": "SSR", "local": "LOC", "kyj": "#"},
	"pivot": "12:00", "consist": "N12",
	"label": "区間特快 天堂寺線（下リ：新羽崎 ➜ 新太平）",
	"refTime": {"MK": "11:47(00)", "TE": "11:53(30)", "TS": "11:54(30)"},
	"remarks": "最高速度130km/h、12両固定編成。",
	"upbound": false, "template": [
	  {"stop":"138", "track":"2", "line":"MK", "upbound":false, "depart":"10:59(25)"},
	  {"stop":"137", "track":"2", "line":"MK", "upbound":false, "arrive":"11:00(55)", "depart":"11:01(30)"},
	  {"stop":"136", "track":"2", "line":"MK", "upbound":false, "arrive":"11:02(55)", "depart":"11:03(30)"},
	  {"stop":"135", "track":"3", "line":"MK", "upbound":false, "arrive":"11:05(10)", "depart":"11:06(05)"},
	  {"stop":"134", "track":"2", "line":"MK", "upbound":false, "arrive":"11:07(45)", "depart":"11:08(20)"},
	  {"stop":"133", "track":{"default": "3", "kyj": "2"}, "line":"MK", "upbound":false, "arrive":"11:10(00)", "depart":"11:10(40)"},
	  {"stop":"KYJ", "track":"0", "arrive":{"kyj": "11:14(00)"}},
	  {"stop":"132", "track":"2", "line":"MK", "upbound":false, "arrive":"11:12(05)", "depart":"11:12(40)"},
	  {"stop":"131", "track":"5", "line":"MK", "upbound":false, "arrive":"11:14(20)", "depart":"11:15(20)"},
	  {"stop":"130", "track":"2", "line":"MK", "upbound":false, "arrive":"11:16(50)", "depart":"11:17(25)"},
	  {"stop":"129", "track":"2", "line":"MK", "upbound":false, "arrive":"11:18(50)", "depart":"11:19(25)"},
	  {"stop":"128", "track":"2", "line":"MK", "upbound":false, "arrive":"11:20(50)", "depart":"11:21(25)"},
	  {"stop":"127", "track":"4", "line":"MK", "upbound":false, "pass":"11:23(15)"},
	  {"stop":"125", "track":"4", "line":"MK", "upbound":false, "pass":"11:24(35)"},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "pass":"11:26(55)"},
	  {"stop":"115", "track":"4", "line":"MK", "upbound":false, "pass":"11:33(55)"},
	  {"stop":"113", "track":"6", "line":"TE", "upbound":false, "pass":"11:35(55)"},
	  {"stop":"112", "track":"3", "line":"TE", "upbound":false, "pass":"11:38(40)"},
	  {"stop":"510", "track":"2", "line":"TE", "upbound":false, "pass":"11:40(20)"},
	  // N/A
	  {"stop":"508", "track":"2", "line":"TE", "upbound":false, "pass":"11:43(00)"},
	  {"stop":"507", "track":"2", "line":"TE", "upbound":false, "arrive":"11:43(55)", "depart":"11:44(55)"},
	  {"stop":"506", "track":"2", "line":"TE", "upbound":false, "pass":"11:45(50)"},
	  // N/A
	  {"stop":"504", "track":"2", "line":"TE", "upbound":false, "pass":"11:47(35)"},
	  {"stop":"503", "track":"3", "line":"TE", "upbound":false, "arrive":"11:49(10)", "depart":"11:50(10)"},
	  {"stop":"502", "track":"2", "line":"TE", "upbound":false, "arrive":"11:51(35)", "depart":"11:52(15)"},
	  {"stop":"501", "track":"5", "line":"TS", "upbound":false, "arrive":"11:53(30)", "depart":"11:54(30)"},
	  {"stop":"902", "track":"2", "line":"TS", "upbound":false, "arrive":"11:55(55)", "depart":"11:56(35)"},
	  {"stop":"903", "track":"3", "line":"TS", "upbound":false, "arrive":"11:58(10)", "depart":"11:59(10)"},
	  {"stop":"904", "track":"2", "line":"TS", "upbound":false, "pass":"12:00(20)"},
	  // N/A
	  {"stop":"906", "track":"2", "line":"TS", "upbound":false, "pass":"12:02(20)"},
	  {"stop":"907", "track":"7", "line":"TS", "upbound":false, "arrive":"12:03(45)", "depart":"12:06(55)"},
	  {"stop":"908", "track":"2", "line":"TS", "upbound":false, "pass":"12:08(15)"},
	  // N/A
	  {"stop":"910", "track":"2", "line":"TS", "upbound":false, "pass":"12:10(10)"},
	  {"stop":"911", "track":"7", "line":"TS", "upbound":false, "arrive":"12:11(00)", "depart":"12:12(00)"},
	  {"stop":"912", "track":"2", "line":"TS", "upbound":false, "arrive":"12:13(40)", "depart":"12:14(20)"},
	  {"stop":"913", "track":"2", "line":"TS", "upbound":false, "pass":"12:16(00)"},
	  {"stop":"914", "track":"2", "line":"TS", "upbound":false, "arrive":"12:17(35)", "depart":"12:18(15)"},
	  {"stop":"915", "track":"2", "line":"TS", "upbound":false, "arrive":"12:20(15)"},
	],
  };

  global.train_patterns["TU51"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間特快 回送列車（上リ：光祐寺 ➜ 光祐寺車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"133", "track":"1", "depart":"12:42(15)"},
	  {"stop":"KYJ", "track":"0", "arrive":"12:44(15)"},
	],
  };
  global.train_patterns["TU52"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間特快 回送列車（下リ：光祐寺車両基地 ➜ 光祐寺）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KYJ", "track":"0", "depart":"11:08(00)"},
	  {"stop":"133", "track":"3", "arrive":"11:10(00)"},
	],
  };
  global.train_patterns["TS61"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間特快 回送列車（上リ：新羽崎車両基地 ➜ 新羽崎）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"SHZ", "track":"0", "depart":"11:29(30)"},
	  {"stop":"915", "track":"2", "arrive":"11:31(15)"},
	],
  };
  global.train_patterns["TS62"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:00",
	"label": "区間特快 回送列車（下リ：新羽崎 ➜ 新羽崎車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"915", "track":"2", "depart":"12:21(15)"},
	  {"stop":"SHZ", "track":"0", "arrive":"12:23(00)"},
	],
  };

/**
 * Duplicate
 */

global.train_patterns["TS03"] = global.train_patterns["TS01"];
global.train_patterns["TS04"] = global.train_patterns["TS02"];
global.train_patterns["TU03"] = global.train_patterns["TU01"];
global.train_patterns["TU04"] = global.train_patterns["TU02"];