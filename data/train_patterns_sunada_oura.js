/**
 * Sunada Line & Oura Line
 */

global.train_patterns["SU01"] = {
	"trainType": "LOC",
	"pivot": "12:00", "consist": "S06",
	"label": "麥急砂田線 I（上リ：麥急青山 ➜ 百石）",
	"refTime": {"SU": "11:57(45)"},
	"remarks": "最高速度90km/h、6両編成。",
	"upbound": true, "template": [
	  {"stop":"113", "track":"17", "line":"SU", "upbound":true, "depart":"11:57(45)"},
	  {"stop":"301", "track":"1", "line":"SU", "upbound":true, "arrive":"11:59(50)", "depart":"12:00(25)"},
	  {"stop":"302", "track":"1", "line":"SU", "upbound":true, "arrive":"12:02(10)", "depart":"12:02(50)"},
	  {"stop":"303", "track":"1", "line":"SU", "upbound":true, "arrive":"12:04(20)", "depart":"12:04(55)"},
	  {"stop":"304", "track":"1", "line":"SU", "upbound":true, "arrive":"12:06(25)", "depart":"12:07(05)"},
	  {"stop":"305", "track":"1", "line":"SU", "upbound":true, "arrive":"12:08(50)", "depart":"12:09(25)"},
	  {"stop":"306", "track":"1", "line":"SU", "upbound":true, "arrive":"12:11(00)", "depart":"12:11(35)"},
	  {"stop":"307", "track":"1", "line":"SU", "upbound":true, "arrive":"12:13(05)", "depart":"12:13(40)"},
	  {"stop":"308", "track":"1", "line":"SU", "upbound":true, "arrive":"12:15(40)", "depart":"12:16(20)"},
	  {"stop":"309", "track":"1", "line":"SU", "upbound":true, "arrive":"12:17(55)", "depart":"12:18(30)"},
	  {"stop":"121", "track":"5", "line":"SU", "upbound":true, "arrive":"12:20(40)", "depart":"12:21(40)"},
	  {"stop":"322", "track":"1", "line":"SU", "upbound":true, "arrive":"12:23(25)", "depart":"12:24(05)"},
	  {"stop":"323", "track":"1", "line":"SU", "upbound":true, "arrive":"12:25(30)", "depart":"12:26(10)"},
	  {"stop":"324", "track":"1", "line":"SU", "upbound":true, "arrive":"12:27(35)", "depart":"12:28(15)"},
	  {"stop":"325", "track":"1", "line":"SU", "upbound":true, "arrive":"12:29(45)", "depart":"12:30(25)"},
	  {"stop":"326", "track":"1", "line":"SU", "upbound":true, "arrive":"12:32(00)", "depart":"12:32(35)"},
	  {"stop":"327", "track":"1", "line":"SU", "upbound":true, "arrive":"12:34(10)", "depart":"12:34(45)"},
	  {"stop":"328", "track":"1", "line":"SU", "upbound":true, "arrive":"12:36(25)", "depart":"12:37(00)"},
	  {"stop":"329", "track":"1", "arrive":"12:39(00)"},
	],
  };
  global.train_patterns["SU02"] = {
	"trainType": "LOC",
	"pivot": "11:50", "consist": "S06",
	"label": "麥急砂田線 I（下リ：百石 ➜ 麥急青山）",
	"refTime": {"SU": "11:55(00)"},
	"remarks": "最高速度90km/h、6両編成。",
	"upbound": false, "template": [
	  {"stop":"329", "track":"2", "line":"SU", "upbound":false, "depart":"11:13(30)"},
	  {"stop":"328", "track":"2", "line":"SU", "upbound":false, "arrive":"11:15(30)", "depart":"11:16(05)"},
	  {"stop":"327", "track":"2", "line":"SU", "upbound":false, "arrive":"11:17(45)", "depart":"11:18(20)"},
	  {"stop":"326", "track":"2", "line":"SU", "upbound":false, "arrive":"11:19(55)", "depart":"11:20(30)"},
	  {"stop":"325", "track":"2", "line":"SU", "upbound":false, "arrive":"11:22(05)", "depart":"11:22(45)"},
	  {"stop":"324", "track":"2", "line":"SU", "upbound":false, "arrive":"11:24(15)", "depart":"11:24(55)"},
	  {"stop":"323", "track":"2", "line":"SU", "upbound":false, "arrive":"11:26(20)", "depart":"11:27(00)"},
	  {"stop":"322", "track":"2", "line":"SU", "upbound":false, "arrive":"11:28(25)", "depart":"11:29(05)"},
	  {"stop":"121", "track":"6", "line":"SU", "upbound":false, "arrive":"11:30(50)", "depart":"11:31(50)"},
	  {"stop":"309", "track":"2", "line":"SU", "upbound":false, "arrive":"11:34(00)", "depart":"11:34(35)"},
	  {"stop":"308", "track":"2", "line":"SU", "upbound":false, "arrive":"11:36(10)", "depart":"11:36(50)"},
	  {"stop":"307", "track":"2", "line":"SU", "upbound":false, "arrive":"11:38(50)", "depart":"11:39(25)"},
	  {"stop":"306", "track":"2", "line":"SU", "upbound":false, "arrive":"11:40(55)", "depart":"11:41(30)"},
	  {"stop":"305", "track":"2", "line":"SU", "upbound":false, "arrive":"11:43(05)", "depart":"11:43(40)"},
	  {"stop":"304", "track":"2", "line":"SU", "upbound":false, "arrive":"11:45(25)", "depart":"11:46(05)"},
	  {"stop":"303", "track":"2", "line":"SU", "upbound":false, "arrive":"11:47(35)", "depart":"11:48(10)"},
	  {"stop":"302", "track":"2", "line":"SU", "upbound":false, "arrive":"11:49(40)", "depart":"11:50(20)"},
	  {"stop":"301", "track":"2", "line":"SU", "upbound":false, "arrive":"11:52(05)", "depart":"11:52(40)"},
	  {"stop":"113", "track":"17", "arrive":"11:55(00)"},
	],
  };
  global.train_patterns["SU03"] = {
	"trainType": "LOC",
	"pivot": "12:00", "consist": "S06",
	"label": "麥急砂田線 II（上リ：麥急青山 ➜ 百石）",
	"refTime": {"SU": "12:00(15)"},
	"remarks": "最高速度90km/h、6両編成。",
	"upbound": true, "template": [
	  {"stop":"113", "track":"18", "line":"SU", "upbound":true, "depart":"12:00(15)"},
	  {"stop":"301", "track":"1", "line":"SU", "upbound":true, "arrive":"12:02(20)", "depart":"12:02(55)"},
	  {"stop":"302", "track":"1", "line":"SU", "upbound":true, "arrive":"12:04(40)", "depart":"12:05(20)"},
	  {"stop":"303", "track":"1", "line":"SU", "upbound":true, "arrive":"12:06(50)", "depart":"12:07(25)"},
	  {"stop":"304", "track":"1", "line":"SU", "upbound":true, "arrive":"12:08(55)", "depart":"12:09(35)"},
	  {"stop":"305", "track":"1", "line":"SU", "upbound":true, "arrive":"12:11(20)", "depart":"12:11(55)"},
	  {"stop":"306", "track":"1", "line":"SU", "upbound":true, "arrive":"12:13(30)", "depart":"12:14(05)"},
	  {"stop":"307", "track":"1", "line":"SU", "upbound":true, "arrive":"12:15(35)", "depart":"12:16(10)"},
	  {"stop":"308", "track":"1", "line":"SU", "upbound":true, "arrive":"12:18(10)", "depart":"12:18(50)"},
	  {"stop":"309", "track":"1", "line":"SU", "upbound":true, "arrive":"12:20(25)", "depart":"12:21(00)"},
	  {"stop":"121", "track":"5", "line":"SU", "upbound":true, "arrive":"12:23(10)", "depart":"12:24(10)"},
	  {"stop":"322", "track":"1", "line":"SU", "upbound":true, "arrive":"12:25(55)", "depart":"12:26(35)"},
	  {"stop":"323", "track":"1", "line":"SU", "upbound":true, "arrive":"12:28(00)", "depart":"12:28(40)"},
	  {"stop":"324", "track":"1", "line":"SU", "upbound":true, "arrive":"12:30(05)", "depart":"12:30(45)"},
	  {"stop":"325", "track":"1", "line":"SU", "upbound":true, "arrive":"12:32(15)", "depart":"12:32(55)"},
	  {"stop":"326", "track":"1", "line":"SU", "upbound":true, "arrive":"12:34(30)", "depart":"12:35(05)"},
	  {"stop":"327", "track":"1", "line":"SU", "upbound":true, "arrive":"12:36(40)", "depart":"12:37(15)"},
	  {"stop":"328", "track":"1", "line":"SU", "upbound":true, "arrive":"12:38(55)", "depart":"12:39(30)"},
	  {"stop":"329", "track":"1", "arrive":"12:41(30)"},
	],
  };
  global.train_patterns["SU04"] = {
	"trainType": "LOC",
	"pivot": "11:50", "consist": "S06",
	"label": "麥急砂田線 II（下リ：百石 ➜ 麥急青山）",
	"refTime": {"SU": "11:52(30)"},
	"remarks": "最高速度90km/h、6両編成。",
	"upbound": false, "template": [
	  {"stop":"329", "track":"2", "line":"SU", "upbound":false, "depart":"11:11(00)"},
	  {"stop":"328", "track":"2", "line":"SU", "upbound":false, "arrive":"11:13(00)", "depart":"11:13(35)"},
	  {"stop":"327", "track":"2", "line":"SU", "upbound":false, "arrive":"11:15(15)", "depart":"11:15(50)"},
	  {"stop":"326", "track":"2", "line":"SU", "upbound":false, "arrive":"11:17(25)", "depart":"11:18(00)"},
	  {"stop":"325", "track":"2", "line":"SU", "upbound":false, "arrive":"11:19(35)", "depart":"11:20(15)"},
	  {"stop":"324", "track":"2", "line":"SU", "upbound":false, "arrive":"11:21(45)", "depart":"11:22(25)"},
	  {"stop":"323", "track":"2", "line":"SU", "upbound":false, "arrive":"11:23(50)", "depart":"11:24(30)"},
	  {"stop":"322", "track":"2", "line":"SU", "upbound":false, "arrive":"11:25(55)", "depart":"11:26(35)"},
	  {"stop":"121", "track":"6", "line":"SU", "upbound":false, "arrive":"11:28(20)", "depart":"11:29(20)"},
	  {"stop":"309", "track":"2", "line":"SU", "upbound":false, "arrive":"11:31(30)", "depart":"11:32(05)"},
	  {"stop":"308", "track":"2", "line":"SU", "upbound":false, "arrive":"11:33(40)", "depart":"11:34(20)"},
	  {"stop":"307", "track":"2", "line":"SU", "upbound":false, "arrive":"11:36(20)", "depart":"11:36(55)"},
	  {"stop":"306", "track":"2", "line":"SU", "upbound":false, "arrive":"11:38(25)", "depart":"11:39(00)"},
	  {"stop":"305", "track":"2", "line":"SU", "upbound":false, "arrive":"11:40(35)", "depart":"11:41(10)"},
	  {"stop":"304", "track":"2", "line":"SU", "upbound":false, "arrive":"11:42(55)", "depart":"11:43(35)"},
	  {"stop":"303", "track":"2", "line":"SU", "upbound":false, "arrive":"11:45(05)", "depart":"11:45(40)"},
	  {"stop":"302", "track":"2", "line":"SU", "upbound":false, "arrive":"11:47(10)", "depart":"11:47(50)"},
	  {"stop":"301", "track":"2", "line":"SU", "upbound":false, "arrive":"11:49(35)", "depart":"11:50(10)"},
	  {"stop":"113", "track":"18", "arrive":"11:52(30)"},
	],
  };
  global.train_patterns["SU51"] = {
	"trainType": "#",
	"pivot": "12:29", "consist": "",
	"label": "麥急砂田線 回送列車（上リ：小栃原 ➜ 小栃原車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"325", "track":"1", "depart":{"default": "12:30(25)", "a": "12:32(55)"}},
	  {"stop":"KTR", "track":"0", "arrive":{"default": "12:31(30)", "a": "12:34(00)"}},
	],
  };
  global.train_patterns["SU52"] = {
	"trainType": "#",
	"pivot": "11:22", "consist": "",
	"label": "麥急砂田線 回送列車（下リ：小栃原車両基地 ➜ 小栃原）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KTR", "track":"0", "depart":{"default": "11:21(00)", "a": "11:18(30)"}},
	  {"stop":"325", "track":"2", "arrive":{"default": "11:22(05)", "a": "11:19(35)"}},
	],
  };
  global.train_patterns["SU53"] = {
	"trainType": "#",
	"pivot": "12:39", "consist": "",
	"label": "麥急砂田線 回送列車（上リ：百石 ➜ 百石留置線）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"329", "track":"1", "depart":"12:39(00)"},
	  {"stop":"MMI", "track":"0", "arrive":"12:40(30)"},
	],
  };
  global.train_patterns["SU54"] = {
	"trainType": "#",
	"pivot": "11:13", "consist": "",
	"label": "麥急砂田線 回送列車（下リ：百石留置線 ➜ 百石）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"MMI", "track":"0", "depart":"11:11(00)"},
	  {"stop":"329", "track":"2", "arrive":"11:12(30)"},
	],
  };
  global.train_patterns["SU55"] = {
	"trainType": "#",
	"pivot": "12:13", "consist": "",
	"label": "麥急砂田線 回送列車（上リ：大為 ➜ 砂田南留置線）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"307", "track":"1", "depart":{"default": "12:13(40)", "a": "12:16(10)"}},
	  {"stop":"SNS", "track":"0", "arrive":{"default": "12:15(40)", "a": "12:18(10)"}},
	],
  };
  global.train_patterns["SU56"] = {
	"trainType": "#",
	"pivot": "11:39", "consist": "",
	"label": "麥急砂田線 回送列車（下リ：砂田南留置線 ➜ 大為）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"SNS", "track":"0", "depart":{"default": "11:36(50)", "a": "11:34(20)"}},
	  {"stop":"307", "track":"2", "arrive":{"default": "11:38(50)", "a": "11:36(20)"}},
	],
  };
  global.train_patterns["SU57"] = {
	"trainType": "#",
	"pivot": "12:16", "consist": "",
	"label": "麥急砂田線 回送列車（上リ：砂田南留置線 ➜ 砂田南新町）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"SNS", "track":"0", "depart":{"default": "12:13(40)", "a": "12:16(10)"}},
	  {"stop":"308", "track":"1", "arrive":{"default": "12:15(40)", "a": "12:18(10)"}},
	],
  };
  global.train_patterns["SU58"] = {
	"trainType": "#",
	"pivot": "11:36", "consist": "",
	"label": "麥急砂田線 回送列車（下リ：砂田南新町 ➜ 砂田南留置線）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"308", "track":"2", "depart":{"default": "11:36(50)", "a": "11:34(20)"}},
	  {"stop":"SNS", "track":"0", "arrive":{"default": "11:38(50)", "a": "11:36(20)"}},
	],
  };

  global.train_patterns["OU01"] = {
	"trainType": "LOC",
	"pivot": "12:30", "consist": "S06",
	"label": "麥急大浦線 I（上リ：大浦 ➜ 大尾）",
	"refTime": {"OU": "12:32(15)"},
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": true, "template": [
	  {"stop":"131", "track":"7", "line":"OU", "upbound":true, "depart":"12:32(15)"},
	  {"stop":"332", "track":"1", "line":"OU", "upbound":true, "arrive":"12:34(20)", "depart":"12:35(00)"},
	  {"stop":"333", "track":"1", "line":"OU", "upbound":true, "arrive":"12:36(15)", "depart":"12:36(55)"},
	  {"stop":"334", "track":"1", "line":"OU", "upbound":true, "arrive":"12:38(20)", "depart":"12:39(00)"},
	  {"stop":"335", "track":"1", "line":"OU", "upbound":true, "arrive":"12:40(25)", "depart":"12:41(00)"},
	  {"stop":"336", "track":"1", "line":"OU", "upbound":true, "arrive":"12:42(25)", "depart":"12:43(05)"},
	  {"stop":"337", "track":"1", "line":"OU", "upbound":true, "arrive":"12:44(35)", "depart":"12:45(15)"},
	  {"stop":"338", "track":"1", "line":"OU", "upbound":true, "arrive":"12:47(20)", "depart":"12:47(55)"},
	  {"stop":"339", "track":"1", "line":"OU", "upbound":true, "arrive":"12:49(50)", "depart":"12:50(25)"},
	  {"stop":"340", "track":"1", "line":"OU", "upbound":true, "arrive":"12:52(15)", "depart":"12:52(50)"},
	  {"stop":"341", "track":{"default": "1", "alt341": "2"}, "arrive":"12:55(00)"},
	],
  };
  global.train_patterns["OU02"] = {
	"trainType": "LOC",
	"pivot": "11:20", "consist": "S06",
	"label": "麥急大浦線 I（下リ：大尾 ➜ 大浦）",
	"refTime": {"OU": "11:20(15)"},
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": false, "template": [
	  {"stop":"341", "track":{"default": "1", "alt341": "2"}, "line":"OU", "upbound":false, "depart":"10:57(45)"},
	  {"stop":"340", "track":"2", "line":"OU", "upbound":false, "arrive":"10:59(40)", "depart":"11:00(15)"},
	  {"stop":"339", "track":"2", "line":"OU", "upbound":false, "arrive":"11:02(05)", "depart":"11:02(40)"},
	  {"stop":"338", "track":"2", "line":"OU", "upbound":false, "arrive":"11:04(35)", "depart":"11:05(10)"},
	  {"stop":"337", "track":{"default": "2", "alt337": "1"}, "line":"OU", "upbound":false, "arrive":"11:07(15)", "depart":"11:07(55)"},
	  {"stop":"336", "track":"2", "line":"OU", "upbound":false, "arrive":"11:09(25)", "depart":"11:10(05)"},
	  {"stop":"335", "track":"2", "line":"OU", "upbound":false, "arrive":"11:11(30)", "depart":"11:12(05)"},
	  {"stop":"334", "track":"2", "line":"OU", "upbound":false, "arrive":"11:13(30)", "depart":"11:14(10)"},
	  {"stop":"333", "track":"2", "line":"OU", "upbound":false, "arrive":"11:15(35)", "depart":"11:16(15)"},
	  {"stop":"332", "track":"2", "line":"OU", "upbound":false, "arrive":"11:17(30)", "depart":"11:18(10)"},
	  {"stop":"131", "track":"8", "arrive":"11:20(15)"},
	],
  };
  global.train_patterns["OU03"] = {
	"trainType": "LOC",
	"pivot": "12:30", "consist": "S06",
	"label": "麥急大浦線 II（上リ：大浦 ➜ 大尾）",
	"refTime": {"OU": "12:34(45)"},
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": true, "template": [
	  {"stop":"131", "track":"7", "line":"OU", "upbound":true, "depart":"12:34(45)"},
	  {"stop":"332", "track":"1", "line":"OU", "upbound":true, "arrive":"12:36(50)", "depart":"12:37(30)"},
	  {"stop":"333", "track":"1", "line":"OU", "upbound":true, "arrive":"12:38(45)", "depart":"12:39(25)"},
	  {"stop":"334", "track":"1", "line":"OU", "upbound":true, "arrive":"12:40(50)", "depart":"12:41(30)"},
	  {"stop":"335", "track":"1", "line":"OU", "upbound":true, "arrive":"12:42(55)", "depart":"12:43(30)"},
	  {"stop":"336", "track":"1", "line":"OU", "upbound":true, "arrive":"12:44(55)", "depart":"12:45(35)"},
	  {"stop":"337", "track":"1", "line":"OU", "upbound":true, "arrive":"12:47(05)", "depart":"12:47(45)"},
	  {"stop":"338", "track":"1", "line":"OU", "upbound":true, "arrive":"12:49(50)", "depart":"12:50(25)"},
	  {"stop":"339", "track":"1", "line":"OU", "upbound":true, "arrive":"12:52(20)", "depart":"12:52(55)"},
	  {"stop":"340", "track":"1", "line":"OU", "upbound":true, "arrive":"12:54(45)", "depart":"12:55(20)"},
	  {"stop":"341", "track":"2", "arrive":"12:57(30)"},
	],
  };
  global.train_patterns["OU04"] = {
	"trainType": "LOC",
	"pivot": "11:20", "consist": "S06",
	"label": "麥急大浦線 II（下リ：大尾 ➜ 大浦）",
	"refTime": {"OU": "11:17(45)"},
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": false, "template": [
	  {"stop":"341", "track":"2", "line":"OU", "upbound":false, "depart":"10:55(15)"},
	  {"stop":"340", "track":"2", "line":"OU", "upbound":false, "arrive":"10:57(10)", "depart":"10:57(45)"},
	  {"stop":"339", "track":"2", "line":"OU", "upbound":false, "arrive":"10:59(35)", "depart":"11:00(10)"},
	  {"stop":"338", "track":"2", "line":"OU", "upbound":false, "arrive":"11:02(05)", "depart":"11:02(40)"},
	  {"stop":"337", "track":{"default": "2", "alt337": "1"}, "line":"OU", "upbound":false, "arrive":"11:04(45)", "depart":"11:05(25)"},
	  {"stop":"336", "track":"2", "line":"OU", "upbound":false, "arrive":"11:06(55)", "depart":"11:07(35)"},
	  {"stop":"335", "track":"2", "line":"OU", "upbound":false, "arrive":"11:09(00)", "depart":"11:09(35)"},
	  {"stop":"334", "track":"2", "line":"OU", "upbound":false, "arrive":"11:11(00)", "depart":"11:11(40)"},
	  {"stop":"333", "track":"2", "line":"OU", "upbound":false, "arrive":"11:13(05)", "depart":"11:13(45)"},
	  {"stop":"332", "track":"2", "line":"OU", "upbound":false, "arrive":"11:15(00)", "depart":"11:15(40)"},
	  {"stop":"131", "track":"8", "arrive":"11:17(45)"},
	],
  };

  global.train_patterns["OU51"] = {
	"trainType": "#",
	"pivot": "12:44", "consist": "",
	"label": "麥急大浦線 回送列車（上リ：大元 ➜ 大元車両基地 (順)）",
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": true, "template": [
	  {"stop":"337", "track":"1", "depart":{"default": "12:45(15)", "a": "12:47(45)"}},
	  {"stop":"OMT", "track":"0", "arrive":{"default": "12:46(30)", "a": "12:49(00)"}},
	],
  };
  global.train_patterns["OU52"] = {
	"trainType": "#",
	"pivot": "11:07", "consist": "",
	"label": "麥急大浦線 回送列車（下リ：大元車両基地 ➜ 大元 (順)）",
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": false, "template": [
	  {"stop":"OMT", "track":"0", "depart":{"default": "11:06(00)", "a": "11:03(30)"}},
	  {"stop":"337", "track":"2", "arrive":{"default": "11:07(15)", "a": "11:04(45)"}},
	],
  };
  global.train_patterns["OU53"] = {
	"trainType": "#",
	"pivot": "11:07", "consist": "",
	"label": "麥急大浦線 回送列車（上リ：大元 ➜ 大元車両基地 (逆)）",
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": true, "template": [
	  {"stop":"337", "track":"2", "depart":"11:09(15)"},
	  {"stop":"OMT", "track":"0", "arrive":"11:10(30)"},
	],
  };
  global.train_patterns["OU54"] = {
	"trainType": "#",
	"pivot": "12:45", "consist": "",
	"label": "麥急大浦線 回送列車（下リ：大元車両基地 ➜ 大元 (逆)）",
	"remarks": "最高速度100km/h、6両編成。",
	"upbound": false, "template": [
	  {"stop":"OMT", "track":"0", "depart":"12:42(00)"},
	  {"stop":"337", "track":"1", "arrive":"12:43(15)"},
	],
  };