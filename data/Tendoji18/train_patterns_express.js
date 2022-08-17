/**
 * Main Line System : Express Trains (130kph) [EE]
 */

/**
 * Rapid Express / Express - Main Line & Josui Line South
*/

global.train_patterns["EE05"] = {
	"trainType": {"default": "REX", "ssr": "EXP$", "exp_type": "EXP"},
	"pivot": "11:50", "consist": {"default": "N12", "short": "N08"},
	"label": "快速急行 / 急行 上水南線（上リ：麥急河田 ➜ 清河南）",
	"refTime": {"MK": {"default": "11:59(30)", "y": "11:58(30)", "exp1": "11:56(45)", "exp2": "11:56(45)"}, "JS": "12:34(50)"},
	"remarks": "最高速度130km/h、12両編成。  [y]: AEライナー (AE01) 運転時; [exp,exp1,exp2]: 急行;  [ssr]: 区間特快運転",
	"upbound": true, "template": [
	  {"stop":"101", "track":{"default": "4", "exp1": "6", "exp2": "7"}, "line":"MK", "upbound":true, "depart":{"default": "11:59(30)", "y": "11:58(30)", "exp1": "11:56(45)", "exp2": "11:56(45)"}},
	  {"stop":"104", "track":{"default": "2", "exp1": "1", "exp2": "1"}, "line":"MK", "upbound":true, "arrive":{"default": "12:02(20)", "y": "12:01(20)", "exp1": "11:59(50)", "exp2": "11:59(50)"}, "depart":{"default": "12:03(30)", "y": "12:02(30)", "exp1": "12:01(00)", "exp2": "12:01(00)"}},
	  {"stop":"113", "track":{"default": "1", "exp1": "2", "exp2": "2"}, "line":"MK", "upbound":true, "arrive":{"default": "12:09(10)", "y": "12:08(10)", "exp1": "12:06(40)", "exp2": "12:06(40)"}, "depart":{"default": "12:10(20)", "y": "12:10(20)", "exp1": "12:07(50)", "exp2": "12:07(50)"}},
	  {"stop":"115", "track":"1", "line":"MK", "upbound":true, "arrive":{"default": "12:12(40)", "exp1": "12:10(10)", "exp2": "12:10(10)"}, "depart":{"default": "12:13(25)", "exp1": "12:10(55)", "exp2": "12:10(55)"}},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "arrive":{"default": "12:18(10)", "exp1": "12:15(40)", "exp2": "12:15(40)", "ssr": ""}, "depart":{"default": "12:19(00)", "exp1": "12:16(30)", "exp2": "12:16(30)", "ssr": ""}, "pass":{"ssr": "12:16(50)"}},
	  {"stop":"125", "track":"1", "pass":{"default": "12:21(40)", "exp1": "12:19(10)", "exp2": "12:19(10)"}},
	  {"stop":"127", "track":"1", "line":"MK", "upbound":true, "arrive":{"exp1": "12:20(50)", "exp2": "12:20(50)"}, "depart":{"exp1": "12:21(30)", "exp2": "12:21(30)"}, "pass":{"default": "12:23(00)", "exp1": "", "exp2": ""}},
	  {"stop":"131", "track":{"default": "1", "alt131": "2"}, "line":"MK", "upbound":true, "arrive":{"default": "12:25(55)", "exp1": "12:24(40)", "exp2": "12:24(40)"}, "depart":{"default": "12:26(45)", "exp1": "12:25(30)", "exp2": "12:25(30)"}},
	  {"stop":"135", "track":"1", "line":"MK", "upbound":true, "arrive":{"exp1": "12:29(00)", "exp2": "12:29(00)"}, "depart":{"exp1": "12:29(40)", "exp2": "12:29(40)"}, "pass":{"default": "12:29(55)", "exp1": "", "exp2": ""}},
	  {"stop":"139", "track":"3", "line":"JS", "upbound":true, "arrive":"12:32(50)", "depart":"12:34(50)"},
	  {"stop":"361", "track":"1", "pass":"12:36(30)"},
	  {"stop":"362", "track":"1", "line":"JS", "upbound":true, "arrive":"12:37(40)", "depart":"12:38(20)"},
	  {"stop":"363", "track":"1", "pass":"12:39(20)"},
	  {"stop":"365", "track":"1", "pass":"12:40(40)"},
	  {"stop":"366", "track":"1", "pass":"12:41(15)"},
	  {"stop":"367", "track":"1", "line":"JS", "upbound":true, "arrive":"12:42(15)", "depart":"12:42(55)"},
	  {"stop":"368", "track":"1", "pass":"12:43(55)"},
	  {"stop":"369", "track":"1", "pass":"12:44(40)"},
	  {"stop":"370", "track":"1", "pass":"12:45(20)"},
	  {"stop":"371", "track":"1", "line":"JS", "upbound":true, "arrive":"12:46(20)", "depart":"12:47(10)"},
	  {"stop":"372", "track":"1", "pass":"12:48(10)"},
	  {"stop":"373", "track":"1", "pass":"12:48(45)"},
	  {"stop":"374", "track":"1", "line":"JS", "upbound":true, "arrive":{"alt374": "12:49(50)", "default": ""}, "pass":{"default": "12:49(25)", "alt374": ""}},
	  {"stop":"375", "track":"1", "pass":"12:50(50)"},
	  {"stop":"376", "track":"1", "line":"JS", "upbound":true, "arrive":"12:52(05)", "depart":"12:52(45)"},
	  {"stop":"377", "track":"1", "arrive":"12:55(00)"},
	],
  };
  global.train_patterns["EE06"] = {
	"trainType": {"default": "REX", "ssr": "EXP$", "exp_type": "EXP"},
	"pivot": "12:10", "consist": {"default": "N12", "short": "N08"},
	"label": "快速急行 / 急行 上水南線（下リ：清河南 ➜ 麥急河田）",
	"refTime": {"MK": {"default": "11:53(30)", "y": "11:54(30)", "exp1": "11:56(15)", "exp2": "11:56(15)"}, "JS": "11:17(40)"},
	"remarks": "最高速度130km/h、12両編成。  [y]: AEライナー (AE01) 運転時; [exp,exp1,exp2]: 急行;  [ssr]: 区間特快運転",
	"upbound": false, "template": [
	  {"stop":"377", "track":"1", "line":"JS", "upbound":false, "depart":"10:58(00)"},
	  {"cross":"377_c", "start":"10:58(45)", "end":"11:00(00)"},
	  {"stop":"376", "track":"2", "line":"JS", "upbound":false, "arrive":"10:59(45)", "depart":"11:00(25)"},
	  {"stop":"375", "track":"2", "pass":"11:01(40)"},
	  {"stop":"374", "track":{"default": "2", "alt374": "1"}, "line":"JS", "upbound":false, "depart":{"alt374": "11:02(30)", "default": ""}, "pass":{"default": "11:03(05)", "alt374": ""}},
	  {"stop":"373", "track":"2", "pass":"11:03(45)"},
	  {"stop":"372", "track":{"default": "2", "alt372": "1"}, "pass":"11:04(20)"},
	  {"stop":"371", "track":"4", "line":"JS", "upbound":false, "arrive":"11:05(20)", "depart":"11:06(10)"},
	  {"stop":"370", "track":"2", "pass":"11:07(10)"},
	  {"stop":"369", "track":"2", "pass":"11:07(50)"},
	  {"stop":"368", "track":"2", "pass":"11:08(35)"},
	  {"stop":"367", "track":"4", "line":"JS", "upbound":false, "arrive":"11:09(35)", "depart":"11:10(15)"},
	  {"stop":"366", "track":"2", "pass":"11:11(15)"},
	  {"stop":"365", "track":"2", "pass":"11:11(50)"},
	  {"stop":"363", "track":"2", "pass":"11:13(10)"},
	  {"stop":"362", "track":"2", "line":"JS", "upbound":false, "arrive":"11:14(10)", "depart":"11:14(50)"},
	  {"stop":"361", "track":"2", "pass":"11:16(00)"},
	  {"stop":"139", "track":"4", "line":"MK", "upbound":false, "arrive":"11:17(40)", "depart":"11:19(40)"},
	  {"stop":"135", "track":"4", "line":"MK", "upbound":false, "arrive":{"exp1": "11:22(50)", "exp2": "11:22(50)"}, "depart":{"exp1": "11:23(30)", "exp2": "11:23(30)"}, "pass":{"default": "11:22(35)", "exp1": "", "exp2": ""}},
	  {"stop":"131", "track":{"default": "6", "alt131": "5"}, "line":"MK", "upbound":false, "arrive":{"default": "11:25(45)", "exp1": "11:27(00)", "exp2": "11:27(00)"}, "depart":{"default": "11:26(35)", "exp1": "11:27(50)", "exp2": "11:27(50)"}},
	  {"stop":"127", "track":"4", "line":"MK", "upbound":false, "arrive":{"exp1": "11:31(00)", "exp2": "11:31(00)"}, "depart":{"exp1": "11:31(40)", "exp2": "11:31(40)"}, "pass":{"default": "11:29(30)", "exp1": "", "exp2": ""}},
	  {"stop":"125", "track":"4", "pass":{"default": "11:30(50)", "exp1": "11:33(20)", "exp2": "11:33(20)"}},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "arrive":{"default": "11:33(30)", "exp1": "11:36(00)", "exp2": "11:36(00)", "ssr": ""}, "depart":{"default": "11:34(20)", "exp1": "11:36(50)", "exp2": "11:36(50)", "ssr": ""}, "pass":{"ssr": "11:35(40)"}},
	  {"stop":"115", "track":"4", "line":"MK", "upbound":false, "arrive":{"default": "11:39(05)", "exp1": "11:41(35)", "exp2": "11:41(35)"}, "depart":{"default": "11:39(50)", "exp1": "11:42(20)", "exp2": "11:42(20)"}},
	  {"stop":"113", "track":{"default": "6", "exp1": "5", "exp2": "5"}, "line":"MK", "upbound":false, "arrive":{"default": "11:42(10)", "y": "11:42(10)", "exp1": "11:44(40)", "exp2": "11:44(40)"}, "depart":{"default": "11:43(20)", "y": "11:44(20)", "exp1": "11:45(50)", "exp2": "11:45(50)"}},
	  {"stop":"104", "track":{"default": "4", "exp1": "3", "exp2": "3"}, "line":"MK", "upbound":false, "arrive":{"default": "11:49(00)", "y": "11:50(00)", "exp1": "11:51(30)", "exp2": "11:51(30)"}, "depart":{"default": "11:50(10)", "y": "11:51(10)", "exp1": "11:52(40)", "exp2": "11:52(40)"}},
	  {"stop":"101", "track":{"default": "4", "exp1": "6", "exp2": "7"}, "arrive":{"default": "11:53(30)", "y": "11:54(30)", "exp1": "11:56(15)", "exp2": "11:56(15)"}},
	],
  };

/**
 * Semi Express - Main Line & Josui Line North
*/

global.train_patterns["EE03"] = {
	"trainType": {"default": "SEX", "ssr": "SEX$", "local": "LOC"},
	"pivot": "12:00", "consist": {"default": "N12", "short": "N08"},
	"label": "準急（上リ：麥急河田 ➜ 文錦地）",
	"refTime": {"MK": "12:06(45)", "JN": "12:56(10)"},
	"remarks": "最高速度130km/h、12両編成。 [ssr]: 区間特快運転",
	"upbound": true, "template": [
	  {"stop":"101", "track":{"default": "6", "alt101": "7"}, "line":"MK", "upbound":true, "depart":"12:06(45)"},
	  {"stop":"104", "track":{"default": "1", "alt104": "2"}, "line":"MK", "upbound":true, "arrive":"12:09(50)", "depart":"12:11(00)"},
	  {"stop":"113", "track":"2", "line":"MK", "upbound":true, "arrive":"12:16(40)", "depart":"12:17(50)"},
	  {"stop":"115", "track":"1", "line":"MK", "upbound":true, "arrive":"12:20(10)", "depart":"12:20(55)"},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "arrive":{"default": "12:25(40)", "ssr": ""}, "depart":{"default": "12:26(30)", "ssr": ""}, "pass":{"ssr": "12:26(50)"}},
	  {"stop":"125", "track":"1", "pass":"12:29(10)"},
	  {"stop":"127", "track":"1", "line":"MK", "upbound":true, "arrive":"12:30(50)", "depart":"12:31(30)"},
	  {"stop":"131", "track":"2", "line":"MK", "upbound":true, "arrive":"12:34(50)", "depart":"12:35(40)"},
	  {"stop":"132", "track":"1", "line":"MK", "upbound":true, "arrive":"12:37(05)", "depart":"12:37(40)"},
	  {"stop":"133", "track":"1", "line":"MK", "upbound":true, "arrive":"12:39(05)", "depart":"12:39(45)"},
	  {"stop":"134", "track":"1", "line":"MK", "upbound":true, "arrive":"12:41(25)", "depart":"12:42(00)"},
	  {"stop":"135", "track":"2", "line":"MK", "upbound":true, "arrive":"12:43(55)", "depart":"12:44(50)"},
	  {"stop":"136", "track":"1", "line":"MK", "upbound":true, "arrive":"12:46(15)", "depart":"12:46(50)"},
	  {"stop":"137", "track":"1", "line":"MK", "upbound":true, "arrive":"12:48(15)", "depart":"12:48(50)"},
	  {"stop":"138", "track":"1", "line":"MK", "upbound":true, "arrive":"12:50(20)", "depart":"12:50(55)"},
	  {"stop":"139", "track":"5", "line":"JN", "upbound":true, "arrive":"12:52(50)", "depart":"12:56(10)"},
	  {"stop":"351", "track":"1", "line":"JN", "upbound":true, "arrive":"12:58(25)", "depart":"12:59(00)"},
	  {"stop":"352", "track":"1", "line":"JN", "upbound":true, "arrive":"13:00(25)", "depart":"13:01(00)"},
	  {"stop":"353", "track":"1", "line":"JN", "upbound":true, "arrive":"13:02(20)", "depart":"13:02(55)"},
	  {"stop":"354", "track":{"default": "1", "alt354": "2"}, "arrive":"13:05(10)"},
	],
  };
  global.train_patterns["EE04"] = {
	"trainType": {"default": "SEX", "ssr": "SEX$", "local": "LOC"},
	"pivot": "12:00", "consist": {"default": "N12", "short": "N08"},
	"label": "準急（下リ：文錦地 ➜ 麥急河田）",
	"refTime": {"MK": "11:46(15)", "JN": "10:56(20)"},
	"remarks": "最高速度130km/h、12両編成。 [ssr]: 区間特快運転",
	"upbound": false, "template": [
	  {"stop":"354", "track":{"default": "1", "alt354": "2"}, "line":"JN", "upbound":false, "depart":"10:47(50)"},
	  {"stop":"353", "track":"2", "line":"JN", "upbound":false, "arrive":"10:49(35)", "depart":"10:50(10)"},
	  {"stop":"352", "track":"2", "line":"JN", "upbound":false, "arrive":"10:51(30)", "depart":"10:52(05)"},
	  {"stop":"351", "track":"2", "line":"JN", "upbound":false, "arrive":"10:53(30)", "depart":"10:54(05)"},
	  {"stop":"139", "track":"6", "line":"MK", "upbound":false, "arrive":"10:56(20)", "depart":"10:59(40)"},
	  {"stop":"138", "track":"2", "line":"MK", "upbound":false, "arrive":"11:01(20)", "depart":"11:01(55)"},
	  {"stop":"137", "track":"2", "line":"MK", "upbound":false, "arrive":"11:03(25)", "depart":"11:04(00)"},
	  {"stop":"136", "track":"2", "line":"MK", "upbound":false, "arrive":"11:05(25)", "depart":"11:06(00)"},
	  {"stop":"135", "track":"3", "line":"MK", "upbound":false, "arrive":"11:07(40)", "depart":"11:08(35)"},
	  {"stop":"134", "track":"2", "line":"MK", "upbound":false, "arrive":"11:10(15)", "depart":"11:10(50)"},
	  {"stop":"133", "track":"3", "line":"MK", "upbound":false, "arrive":"11:12(30)", "depart":"11:13(10)"},
	  {"stop":"132", "track":"2", "line":"MK", "upbound":false, "arrive":"11:14(35)", "depart":"11:15(10)"},
	  {"stop":"131", "track":"5", "line":"MK", "upbound":false, "arrive":"11:16(50)", "depart":"11:17(40)"},
	  {"stop":"127", "track":"4", "line":"MK", "upbound":false, "arrive":"11:21(00)", "depart":"11:21(40)"},
	  {"stop":"125", "track":"4", "pass":"11:23(20)"},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "arrive":{"default": "11:26(00)", "ssr": ""}, "depart":{"default": "11:26(50)", "ssr": ""}, "pass":{"ssr": "11:25(40)"}},
	  {"stop":"115", "track":"4", "line":"MK", "upbound":false, "arrive":"11:31(35)", "depart":"11:32(20)"},
	  {"stop":"113", "track":"5", "line":"MK", "upbound":false, "arrive":"11:34(40)", "depart":"11:35(50)"},
	  {"stop":"104", "track":{"default": "3", "alt104": "4"}, "line":"MK", "upbound":false, "arrive":"11:41(30)", "depart":"11:42(40)"},
	  {"stop":"101", "track":{"default": "6", "alt101": "7"}, "arrive":"11:46(15)"},
	],
  };

/**
 * Sectional Semi Express - Main Line & Josui Line North
*/

global.train_patterns["EE01"] = {
	"trainType": {"default": "SSE", "ssr": "SSE$", "local": "LOC"},
	"pivot": "12:10", "consist": {"default": "N12", "short": "N08"},
	"label": "区間準急（上リ：麥急河田 ➜ 文錦地 / 大浦）",
	"refTime": {"MK": "12:13(45)", "JN": "13:16(10)"},
	"remarks": "最高速度130km/h、12両編成。 [l]: 文錦地延長運転 [ssr]: 区間特快運転",
	"upbound": true, "template": [
	  {"stop":"101", "track":{"default": "7", "alt101": "6"}, "line":"MK", "upbound":true, "depart":"12:13(45)"},
	  {"stop":"104", "track":{"default": "1", "alt104": "2"}, "line":"MK", "upbound":true, "arrive":"12:16(50)", "depart":"12:18(00)"},
	  {"stop":"113", "track":"1", "line":"MK", "upbound":true, "arrive":"12:23(40)", "depart":"12:25(20)"},
	  {"stop":"115", "track":"1", "line":"MK", "upbound":true, "arrive":{"default": "12:27(40)", "ssr": ""}, "depart":{"default": "12:28(25)", "ssr": ""}, "pass":{"ssr": "12:27(20)"}},
	  {"stop":"121", "track":"1", "line":"MK", "upbound":true, "arrive":"12:33(10)", "depart":"12:34(05)"},
	  {"stop":"122", "track":"1", "line":"MK", "upbound":true, "arrive":"12:35(35)", "depart":"12:36(10)"},
	  {"stop":"123", "track":"1", "line":"MK", "upbound":true, "arrive":"12:37(30)", "depart":"12:38(05)"},
	  {"stop":"124", "track":"1", "line":"MK", "upbound":true, "arrive":"12:39(25)", "depart":"12:40(00)"},
	  {"stop":"125", "track":"2", "line":"MK", "upbound":true, "arrive":"12:41(25)", "depart":"12:42(05)"},
	  {"stop":"126", "track":"1", "line":"MK", "upbound":true, "arrive":"12:43(25)", "depart":"12:44(00)"},
	  {"stop":"127", "track":"2", "line":"MK", "upbound":true, "arrive":"12:45(50)", "depart":"12:46(45)"},
	  {"stop":"128", "track":"1", "line":"MK", "upbound":true, "arrive":"12:48(20)", "depart":"12:48(55)"},
	  {"stop":"129", "track":"1", "line":"MK", "upbound":true, "arrive":"12:50(20)", "depart":"12:50(55)"},
	  {"stop":"130", "track":"1", "line":"MK", "upbound":true, "arrive":"12:52(20)", "depart":"12:52(55)"},
	  {"stop":"131", "track":{"default": "3", "l": "2"}, "line":"MK", "upbound":true, "arrive":"12:54(40)", "depart":{"l":"12:55(40)"}},
	  {"stop":"132", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"12:57(05)"}, "depart":{"default":"", "l":"12:57(40)"}},
	  {"stop":"133", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"12:59(05)"}, "depart":{"default":"", "l":"12:59(45)"}},
	  {"stop":"134", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"13:01(25)"}, "depart":{"default":"", "l":"13:02(00)"}},
	  {"stop":"135", "track":"2", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"13:03(55)"}, "depart":{"default":"", "l":"13:04(50)"}},
	  {"stop":"136", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"13:06(15)"}, "depart":{"default":"", "l":"13:06(50)"}},
	  {"stop":"137", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"13:08(15)"}, "depart":{"default":"", "l":"13:08(50)"}},
	  {"stop":"138", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"", "l":"13:10(20)"}, "depart":{"default":"", "l":"13:10(55)"}},
	  {"stop":"139", "track":"5", "line":"JN", "upbound":true, "arrive":{"default":"", "l":"13:12(50)"}, "depart":{"default":"", "l":"13:16(10)"}},
	  {"stop":"351", "track":"1", "line":"JN", "upbound":true, "arrive":{"default":"", "l":"13:18(25)"}, "depart":{"default":"", "l":"13:19(00)"}},
	  {"stop":"352", "track":"1", "line":"JN", "upbound":true, "arrive":{"default":"", "l":"13:20(25)"}, "depart":{"default":"", "l":"13:21(00)"}},
	  {"stop":"353", "track":"1", "line":"JN", "upbound":true, "arrive":{"default":"", "l":"13:22(20)"}, "depart":{"default":"", "l":"13:22(55)"}},
	  {"stop":"354", "track":{"default": "1", "alt354": "2"}, "arrive":{"default":"", "l":"13:25(10)"}},
	],
  };
  global.train_patterns["EE02"] = {
	"trainType": {"default": "SSE", "ssr": "SSE$", "local": "LOC"},
	"pivot": "11:50", "consist": {"default": "N12", "short": "N08"},
	"label": "区間準急（下リ：文錦地 ➜ 麥急河田 / 大浦）",
	"refTime": {"MK": "11:39(15)", "JN": "10:36(20)"},
	"remarks": "最高速度130km/h、12両編成。 [l]: 文錦地延長運転 [ssr]: 区間特快運転",
	"upbound": false, "template": [
	  {"stop":"354", "track":{"default": "1", "alt354": "2"}, "line":"JN", "upbound":false, "depart":{"default":"", "l":"10:27(50)"}},
	  {"stop":"353", "track":"2", "line":"JN", "upbound":false, "arrive":{"default":"", "l":"10:29(35)"}, "depart":{"default":"", "l":"10:30(10)"}},
	  {"stop":"352", "track":"2", "line":"JN", "upbound":false, "arrive":{"default":"", "l":"10:31(30)"}, "depart":{"default":"", "l":"10:32(05)"}},
	  {"stop":"351", "track":"2", "line":"JN", "upbound":false, "arrive":{"default":"", "l":"10:33(30)"}, "depart":{"default":"", "l":"10:34(05)"}},
	  {"stop":"139", "track":"6", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:36(20)"}, "depart":{"default":"", "l":"10:39(40)"}},
	  {"stop":"138", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:41(20)"}, "depart":{"default":"", "l":"10:41(55)"}},
	  {"stop":"137", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:43(25)"}, "depart":{"default":"", "l":"10:44(00)"}},
	  {"stop":"136", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:45(25)"}, "depart":{"default":"", "l":"10:46(00)"}},
	  {"stop":"135", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:47(40)"}, "depart":{"default":"", "l":"10:48(35)"}},
	  {"stop":"134", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:50(15)"}, "depart":{"default":"", "l":"10:50(50)"}},
	  {"stop":"133", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:52(30)"}, "depart":{"default":"", "l":"10:53(10)"}},
	  {"stop":"132", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:54(35)"}, "depart":{"default":"", "l":"10:55(10)"}},
	  {"stop":"131", "track":{"default": "4", "l": "5"}, "line":"MK", "upbound":false, "arrive":{"default":"", "l":"10:56(50)"}, "depart":"10:57(50)"},
	  {"stop":"130", "track":"2", "line":"MK", "upbound":false, "arrive":"10:59(20)", "depart":"10:59(55)"},
	  {"stop":"129", "track":"2", "line":"MK", "upbound":false, "arrive":"11:01(20)", "depart":"11:01(55)"},
	  {"stop":"128", "track":"2", "line":"MK", "upbound":false, "arrive":"11:03(20)", "depart":"11:03(55)"},
	  {"stop":"127", "track":"3", "line":"MK", "upbound":false, "arrive":"11:05(45)", "depart":"11:06(40)"},
	  {"stop":"126", "track":"2", "line":"MK", "upbound":false, "arrive":"11:08(15)", "depart":"11:08(50)"},
	  {"stop":"125", "track":"3", "line":"MK", "upbound":false, "arrive":"11:10(10)", "depart":"11:10(50)"},
	  {"stop":"124", "track":"2", "line":"MK", "upbound":false, "arrive":"11:12(15)", "depart":"11:12(50)"},
	  {"stop":"123", "track":"2", "line":"MK", "upbound":false, "arrive":"11:14(10)", "depart":"11:14(45)"},
	  {"stop":"122", "track":"2", "line":"MK", "upbound":false, "arrive":"11:16(05)", "depart":"11:16(40)"},
	  {"stop":"121", "track":"4", "line":"MK", "upbound":false, "arrive":"11:18(20)", "depart":"11:19(20)"},
	  {"stop":"115", "track":"4", "line":"MK", "upbound":false, "arrive":{"default": "11:24(05)", "ssr": ""}, "depart":{"default": "11:24(50)", "ssr": ""}, "pass":{"ssr": "11:25(10)"}},
	  {"stop":"113", "track":"6", "line":"MK", "upbound":false, "arrive":"11:27(10)", "depart":"11:28(50)"},
	  {"stop":"104", "track":{"default": "3", "alt104": "4"}, "line":"MK", "upbound":false, "arrive":"11:34(30)", "depart":"11:35(40)"},
	  {"stop":"101", "track":{"default": "7", "alt101": "6"}, "arrive":"11:39(15)"},
	],
  };

/**
 * Non-Revenue Trains
*/

  global.train_patterns["EE51"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "回送列車（上リ：大浦 ➜ 光祐寺車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"131", "track":"3", "depart":"12:58(10)"},
	  {"stop":"132", "track":"1", "pass":"12:59(50)"},
	  {"stop":"133", "track":"1", "pass":"12:01(55)"},
	  {"stop":"KYJ", "track":"0", "arrive":"13:02(55)"},
	],
  };
  global.train_patterns["EE52"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "回送列車（下リ：光祐寺車両基地 ➜ 大浦）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KYJ", "track":"0", "depart":"10:49(00)"},
	  {"stop":"133", "track":"3", "pass":"10:50(00)"},
	  {"stop":"132", "track":"2", "pass":"10:52(25)"},
	  {"stop":"131", "track":"4", "arrive":"10:54(20)"},
	],
  };
  global.train_patterns["EE53"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "回送列車（上リ：光祐寺車両基地 ➜ 光祐寺 (逆方向)）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"KYJ", "track":"0", "depart":"12:56(05)"},
	  {"stop":"133", "track":"1", "arrive":"12:57(05)"},
	],
  };
  global.train_patterns["EE54"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "回送列車（下リ：光祐寺 (逆方向) ➜ 光祐寺車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"133", "track":"3", "depart":"10:55(10)"},
	  {"stop":"KYJ", "track":"0", "arrive":"10:56(10)"},
	],
  };
  global.train_patterns["EE55"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "回送列車（上リ：光祐寺 (順方向) ➜ 光祐寺車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"133", "track":"1", "depart":"13:00(05)"},
	  {"stop":"KYJ", "track":"0", "arrive":"13:01(05)"},
	],
  };
  global.train_patterns["EE56"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "回送列車（下リ：光祐寺車両基地 ➜ 光祐寺 (順方向)）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KYJ", "track":"0", "depart":"10:51(10)"},
	  {"stop":"133", "track":"3", "arrive":"10:52(10)"},
	],
  };
  global.train_patterns["EE61"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "回送列車（上リ：加福町 ➜ 加福町車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"371", "track":"1", "depart":"12:47(20)"},
	  {"stop":"KFK", "track":"0", "arrive":"12:48(20)"},
	],
  };
  global.train_patterns["EE62"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "回送列車（下リ：加福町車両基地 ➜ 加福町）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KFK", "track":"0", "depart":"11:04(10)"},
	  {"stop":"371", "track":"4", "arrive":"11:05(10)"},
	],
  };
  global.train_patterns["EE63"] = {
	"trainType": "#",
	"pivot": "11:50",
	"label": "回送列車（上リ：加福町車両基地 ➜ 清河南）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"KFK", "track":"0", "depart":"12:47(30)"},
	  {"stop":"373", "track":"1", "pass":"12:48(45)"},
	  {"stop":"374", "track":"1", "pass":"12:49(25)"},
	  {"stop":"375", "track":"1", "pass":"12:50(50)"},
	  {"stop":"376", "track":"1", "pass":"12:52(25)"},
	  {"stop":"377", "track":"1", "arrive":"12:55(00)"},
	],
  };
  global.train_patterns["EE64"] = {
	"trainType": "#",
	"pivot": "12:10",
	"label": "回送列車（下リ：清河南 ➜ 加福町車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"377", "track":"1", "depart":"10:58(00)"},
	  {"cross":"377_c", "start":"10:58(45)", "end":"11:00(00)"},
	  {"stop":"376", "track":"2", "pass":"11:00(05)"},
	  {"stop":"375", "track":"2", "pass":"11:01(40)"},
	  {"stop":"374", "track":"2", "pass":"11:03(05)"},
	  {"stop":"373", "track":"2", "pass":"11:03(45)"},
	  {"stop":"KFK", "track":"0", "arrive":"11:05(00)"},
	],
  };