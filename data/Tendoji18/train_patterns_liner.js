/**
 * Main Line System : Liner Trains [AE][AA][AB][AC]
 */

global.train_patterns["AE01"] = {
	"trainType": {"default": "AEL", "a": "ALR"},
	"pivot": "12:00", "consist": "A12",
	"label": "AE/Aライナー（上リ：麥急河田 ➜ 香田空港）",
	"refTime": {"MK": "12:00(00)"},
	"remarks": "最高速度160km/h、50000系12両編成のみ運用。[a]: 麥急藍田、藍田武、麥急赤田停車",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "line":"MK", "upbound":true, "depart":{"default":"12:00(00)", "a":"12:00(00)"}},
	  {"stop":"104", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:02(50)", "a":"12:02(50)"}, "depart":{"default":"12:04(10)", "a":"12:04(10)"}},
	  {"stop":"113", "track":"3", "pass":{"default":"12:09(20)", "a":"12:09(20)"}},
	  {"stop":"139", "track":"1", "pass":{"default":"12:22(20)", "a":"12:22(05)"}},
	  {"stop":"145", "track":"1", "pass":{"default":"12:29(40)", "a":"12:29(20)"}},
	  {"stop":"150", "track":"1", "line":"MK", "upbound":true, "arrive":{"a":"12:32(25)"}, "depart":{"a":"12:33(25)"}, "pass":{"default":"12:32(10)", "a":""}},
	  {"stop":"154", "track":"1", "line":"MK", "upbound":true, "arrive":{"a":"12:36(10)"}, "depart":{"a":"12:37(10)"}, "pass":{"default":"12:33(50)", "a":""}},
	  {"stop":"158", "track":"4", "line":"MK", "upbound":true, "arrive":{"a":"12:40(30)"}, "depart":{"a":"12:42(00)"}, "pass":{"default":"12:36(00)", "a":""}},
	  {"stop":"159", "track":"1", "pass":{"default":"12:37(20)", "a":"12:43(50)"}},
	  {"stop":"160", "track":"1", "pass":{"default":"12:37(50)", "a":"12:44(20)"}},
	  {"stop":"161", "track":"1", "line":"MK", "upbound":true, "arrive":{"default":"12:39(10)", "a":"12:45(40)"}, "depart":{"default":"12:40(40)", "a":"12:47(10)"}},
	  {"stop":"162", "track":{"default": "1", "alt162": "2"}, "arrive":{"default":"12:43(00)", "a":"12:49(30)"}},
	],
  };
  global.train_patterns["AE02"] = {
	"trainType": {"default": "AEL", "a": "ALR"},
	"pivot": "12:00", "consist": "A12",
	"label": "AE/Aライナー（下リ：香田空港 ➜ 麥急河田）",
	"refTime": {"MK": "11:53(00)"},
	"remarks": "最高速度160km/h、50000系12両編成のみ運用。[a]: 麥急藍田、藍田武、麥急赤田停車",
	"upbound": false, "template": [
	  {"stop":"162", "track":{"default": "1", "alt162": "2"}, "line":"MK", "upbound":false, "depart":{"default":"11:10(00)", "a":"11:03(30)"}},
	  {"cross":"162_c", "start":{"default":"11:10(00)", "a":"11:03(30)"}, "end":{"default":"11:11(15)", "a":"11:04(45)"}},
	  {"stop":"161", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:11(50)", "a":"11:05(20)"}, "depart":{"default":"11:13(20)", "a":"11:06(50)"}},
	  {"stop":"160", "track":"2", "pass":{"default":"11:14(40)", "a":"11:08(10)"}},
	  {"stop":"159", "track":"2", "pass":{"default":"11:15(10)", "a":"11:08(40)"}},
	  {"stop":"158", "track":"5", "line":"MK", "upbound":false, "arrive":{"a":"11:10(30)"}, "depart":{"a":"11:12(00)"}, "pass":{"default":"11:16(30)", "a":""}},
	  {"stop":"154", "track":"2", "line":"MK", "upbound":false, "arrive":{"a":"11:15(20)"}, "depart":{"a":"11:16(20)"}, "pass":{"default":"11:18(40)", "a":""}},
	  {"stop":"150", "track":"2", "line":"MK", "upbound":false, "arrive":{"a":"11:19(05)"}, "depart":{"a":"11:20(05)"}, "pass":{"default":"11:20(20)", "a":""}},
	  {"stop":"145", "track":"2", "pass":{"default":"11:22(50)", "a":"11:23(10)"}},
	  {"stop":"139", "track":"2", "pass":{"default":"11:30(10)", "a":"11:30(25)"}},
	  {"stop":"113", "track":"4", "pass":{"default":"11:43(10)", "a":"11:43(10)"}},
	  {"stop":"104", "track":"3", "line":"MK", "upbound":false, "arrive":{"default":"11:48(20)", "a":"11:48(20)"}, "depart":{"default":"11:49(40)", "a":"11:49(40)"}},
	  {"stop":"101", "track":"1", "arrive":{"default":"11:53(00)", "a":"11:53(00)"}},
	],
  };
  global.train_patterns["AE51"] = {
	"trainType": {"default": "#"},
	"pivot": "12:00",
	"label": "AE/Aライナー 回送列車（上リ：麥急河田 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "depart":"12:00(00)"},
	  {"stop":"104", "track":"1", "arrive":"12:02(50)", "depart":"12:04(10)"},
	  {"stop":"AOY", "track":"0", "arrive":"12:10(00)"},
	],
  };
  global.train_patterns["AE52"] = {
	"trainType": {"default": "#"},
	"pivot": "12:00",
	"label": "AE/Aライナー 回送列車（下リ：青山車両基地 ➜ 麥急河田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AOY", "track":"0", "depart":"11:42(30)"},
	  {"stop":"104", "track":"3", "arrive":"11:48(20)", "depart":"11:49(40)"},
	  {"stop":"101", "track":"1", "arrive":"11:53(00)"},
	],
  };

  global.train_patterns["AA01"] = {
	"trainType": {"default": "RLE", "nis": "#"},
	"pivot": "12:10", "consist": "L16",
	"label": "快速特急（上リ：麥急河田 ➜ 麥急赤田）",
	"refTime": {"MK": "12:10(00)"},
	"remarks": "土休日のみ運転、最高速度160km/h、16両編成。",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "line":"MK", "upbound":true, "depart":"12:10(00)"},
	  {"stop":"104", "track":{"default": "1", "alt104": "2"}, "line":"MK", "upbound":true, "arrive":"12:12(50)", "depart":"12:14(00)"},
	  {"stop":"113", "track":"3", "pass":"12:19(10)"},
	  {"stop":"139", "track":"1", "pass":"12:31(55)"},
	  {"stop":"145", "track":"1", "pass":"12:39(10)"},
	  {"stop":"150", "track":"1", "line":"MK", "upbound":true, "arrive":"12:42(15)", "depart":"12:43(15)"},
	  {"stop":"154", "track":"1", "line":"MK", "upbound":true, "arrive":"12:46(00)", "depart":"12:47(00)"},
	  {"stop":"158", "track":"3", "arrive":"12:50(15)"},
	],
  };
  global.train_patterns["AA02"] = {
	"trainType": {"default": "RLE", "nis": "#"},
	"pivot": "11:50", "consist": "L16",
	"label": "快速特急（下リ：麥急赤田 ➜ 麥急河田）",
	"refTime": {"MK": "11:43(00)"},
	"remarks": "土休日のみ運転、最高速度160km/h、16両編成。",
	"upbound": false, "template": [
	  {"stop":"158", "track":"6", "line":"MK", "upbound":false, "depart":"11:02(15)"},
	  {"stop":"154", "track":"2", "line":"MK", "upbound":false, "arrive":"11:05(30)", "depart":"11:06(30)"},
	  {"stop":"150", "track":"2", "line":"MK", "upbound":false, "arrive":"11:09(15)", "depart":"11:10(15)"},
	  {"stop":"145", "track":"2", "pass":"11:13(20)"},
	  {"stop":"139", "track":"2", "pass":"11:20(35)"},
	  {"stop":"113", "track":"4", "pass":"11:33(20)"},
	  {"stop":"104", "track":{"default": "3", "alt104": "4"}, "line":"MK", "upbound":false, "arrive":"11:38(30)", "depart":"11:39(40)"},
	  {"stop":"101", "track":"1", "arrive":"11:43(00)"},
	],
  };
  global.train_patterns["AA51"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:10",
	"label": "快速特急 回送列車（上リ：麥急赤田 ➜ 小西車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"158", "track":"3", "depart":"12:53(10)"},
	  {"stop":"201", "track":"1", "pass":"12:55(45)"},
	  {"stop":"202", "track":"1", "pass":"12:56(45)"},
	  {"stop":"203", "track":"1", "pass":"12:57(55)"},
	  {"stop":"204", "track":"1", "pass":"12:59(15)"},
	  {"stop":"205", "track":"1", "pass":"13:00(55)"},
	  {"stop":"206", "track":"3", "arrive":"13:02(40)", "depart":"13:07(50)"},
	  {"stop":"KNS", "track":"0", "arrive":"13:09(00)"},
	],
  };
  global.train_patterns["AA52"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "快速特急 回送列車（下リ：小西車両基地 ➜ 麥急赤田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KNS", "track":"0", "depart":"10:42(00)"},
	  {"stop":"206", "track":"6", "arrive":"10:43(10)", "depart":"10:49(50)"},
	  {"stop":"205", "track":"2", "pass":"10:51(35)"},
	  {"stop":"204", "track":"2", "pass":"10:53(15)"},
	  {"stop":"203", "track":"2", "pass":"10:54(35)"},
	  {"stop":"202", "track":"2", "pass":"10:55(45)"},
	  {"stop":"201", "track":"2", "pass":"10:56(45)"},
	  {"stop":"158", "track":"6", "arrive":"10:59(20)"},
	],
  };

  global.train_patterns["AB01"] = {
	"trainType": {"default": "CLE", "nis": "#"},
	"pivot": "12:10", "consist": "L08A",
	"label": "通勤特急 麥田原（上リ：麥急河田 ➜ 麥田原）",
	"refTime": {"MK": "12:10(00)", "MT": "12:48(05)"},
	"remarks": "平日のみ運転、最高速度160km/h、8両編成。",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "line":"MK", "upbound":true, "depart":"12:10(00)"},
	  {"stop":"104", "track":{"default": "1", "alt104": "2"}, "line":"MK", "upbound":true, "arrive":"12:12(50)", "depart":"12:14(00)"},
	  {"stop":"113", "track":"3", "pass":"12:19(10)"},
	  {"stop":"139", "track":"1", "pass":"12:32(10)"},
	  {"stop":"145", "track":"1", "pass":"12:39(30)"},
	  {"stop":"150", "track":"1", "line":"MK", "upbound":true, "pass":"12:42(00)"},
	  {"stop":"154", "track":"1", "line":"MK", "upbound":true, "arrive":"12:44(15)", "depart":"12:45(15)"},
	  {"stop":"158", "track":"3", "line":"MT", "upbound":true, "pass":"12:48(05)"},
	  {"stop":"201", "track":"1", "pass":"12:49(15)"},
	  {"stop":"202", "track":"1", "pass":"12:50(15)"},
	  {"stop":"203", "track":"1", "pass":"12:51(25)"},
	  {"stop":"204", "track":"1", "pass":"12:52(45)"},
	  {"stop":"205", "track":"1", "pass":"12:54(25)"},
	  {"stop":"206", "track":"3", "line":"MT", "upbound":true, "arrive":"12:56(10)", "depart":"12:57(10)"},
	  {"cross":"206_c", "start":"12:57(10)", "end":"12:58(20)"},
	  {"stop":"207", "track":"1", "pass":"12:59(00)"},
	  {"stop":"208", "track":"1", "pass":"13:00(15)"},
	  {"stop":"209", "track":"1", "pass":"13:01(30)"},
	  {"stop":"210", "track":"1", "pass":"13:03(05)"},
	  {"stop":"211", "track":"2", "line":"MT", "upbound":true, "arrive":"13:05(45)", "depart":"13:06(30)"},
	  {"stop":"212", "track":"1", "line":"MT", "upbound":true, "arrive":"13:09(15)", "depart":"13:09(55)"},
	  {"stop":"213", "track":"2", "line":"MT", "upbound":true, "arrive":"13:13(00)", "depart":"13:13(45)"},
	  {"stop":"214", "track":"1", "pass":"13:15(35)"},
	  {"stop":"215", "track":"1", "line":"MT", "upbound":true, "arrive":"13:19(35)", "depart":"13:20(15)"},
	  {"stop":"216", "track":"1", "line":"MT", "upbound":true, "arrive":"13:22(00)", "depart":"13:22(40)"},
	  {"stop":"217", "track":"1", "line":"MT", "upbound":true, "arrive":"13:24(25)", "depart":"13:25(05)"},
	  {"stop":"218", "track":"1", "line":"MT", "upbound":true, "arrive":"13:26(45)", "depart":"13:27(25)"},
	  {"stop":"219", "track":"1", "line":"MT", "upbound":true, "arrive":"13:29(00)", "depart":"13:29(40)"},
	  {"stop":"220", "track":"1", "arrive":"13:32(00)"},
	],
  };
  global.train_patterns["AB02"] = {
	"trainType": {"default": "CLE", "S": "RLE", "nis": "#"},
	"pivot": "11:50", "consist": {"default": "L08A", "S": "L16"},
	"label": "通勤特急 麥田原 / 快速特急（下リ：麥田原 / 麥急赤田 ➜ 麥急河田）",
	"refTime": {"MK": "11:43(00)", "MT": "11:04(25)"},
	"remarks": "平日のみ運転、最高速度160km/h、8両編成。[S] 快速特急",
	"upbound": false, "template": [
	  {"stop":"220", "track":"1", "line":"MT", "upbound":false, "depart":{"default":"10:20(00)","S":""}},
	  {"cross":"220_c", "start":{"default":"10:20(00)","S":""}, "end":{"default":"10:21(15)","S":""}},
	  {"stop":"219", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:21(50)","S":""}, "depart":{"default":"10:22(30)","S":""}},
	  {"stop":"218", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:24(05)","S":""}, "depart":{"default":"10:24(45)","S":""}},
	  {"stop":"217", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:26(25)","S":""}, "depart":{"default":"10:27(05)","S":""}},
	  {"stop":"216", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:28(50)","S":""}, "depart":{"default":"10:29(30)","S":""}},
	  {"stop":"215", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:31(15)","S":""}, "depart":{"default":"10:31(55)","S":""}},
	  {"stop":"214", "track":"2", "pass":{"default":"10:35(55)","S":""}},
	  {"stop":"213", "track":"3", "line":"MT", "upbound":false, "arrive":{"default":"10:37(45)","S":""}, "depart":{"default":"10:38(30)","S":""}},
	  {"stop":"212", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:41(35)","S":""}, "depart":{"default":"10:42(15)","S":""}},
	  {"stop":"211", "track":"3", "line":"MT", "upbound":false, "arrive":{"default":"10:45(00)","S":""}, "depart":{"default":"10:45(45)","S":""}},
	  {"stop":"210", "track":"2", "pass":{"default":"10:48(25)","S":""}},
	  {"stop":"209", "track":"2", "pass":{"default":"10:50(00)","S":""}},
	  {"stop":"208", "track":"2", "pass":{"default":"10:51(15)","S":""}},
	  {"stop":"207", "track":"2", "pass":{"default":"10:52(30)","S":""}},
	  {"stop":"206", "track":"6", "line":"MT", "upbound":false, "arrive":{"default":"10:55(20)","S":""}, "depart":{"default":"10:56(20)","S":""}},
	  {"stop":"205", "track":"2", "pass":{"default":"10:58(05)","S":""}},
	  {"stop":"204", "track":"2", "pass":{"default":"10:59(45)","S":""}},
	  {"stop":"203", "track":"2", "pass":{"default":"11:01(05)","S":""}},
	  {"stop":"202", "track":"2", "pass":{"default":"11:02(15)","S":""}},
	  {"stop":"201", "track":"2", "pass":{"default":"11:03(15)","S":""}},
	  {"stop":"158", "track":"6", "line":"MK", "upbound":false, "depart":{"default":"","S":"11:02(15)"}, "pass":{"default":"11:04(25)","S":""}},
	  {"stop":"154", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:07(05)","S":"11:05(30)"}, "depart":{"default":"11:08(05)","S":"11:06(30)"}},
	  {"stop":"150", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"","S":"11:09(15)"}, "depart":{"default":"","S":"11:10(15)"}, "pass":{"default":"11:10(30)","S":""}},
	  {"stop":"145", "track":"2", "pass":{"default":"11:13(00)","S":"11:13(20)"}},
	  {"stop":"139", "track":"2", "pass":{"default":"11:20(20)","S":"11:20(35)"}},
	  {"stop":"113", "track":"4", "pass":{"default":"11:33(20)","S":"11:33(20)"}},
	  {"stop":"104", "track":{"default": "3", "alt104": "4"}, "line":"MK", "upbound":false, "arrive":{"default":"11:38(30)","S":"11:38(30)"}, "depart":{"default":"11:39(40)","S":"11:39(40)"}},
	  {"stop":"101", "track":"1", "arrive":{"default":"11:43(00)","S":"11:43(00)"}},
	],
  };
  global.train_patterns["AB51"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:10",
	"label": "通勤特急 回送列車（上リ：麥急河田 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "depart":"12:10(00)"},
	  {"stop":"104", "track":{"default": "1", "alt104": "2"}, "arrive":"12:12(50)", "depart":"12:14(00)"},
	  {"stop":"AOY", "track":"0", "arrive":"12:20(00)"},
	],
  };
  global.train_patterns["AB52"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "通勤特急 回送列車（下リ：青山車両基地 ➜ 麥急河田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AOY", "track":"0", "depart":"11:32(30)"},
	  {"stop":"104", "track":{"default": "3", "alt104": "4"}, "arrive":"11:38(30)", "depart":"11:39(40)"},
	  {"stop":"101", "track":"1", "arrive":"11:43(00)"},
	],
  };
  global.train_patterns["AB53"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:10",
	"label": "通勤特急 回送列車（上リ：小西車両基地 ➜ 麥田原）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"KNS", "track":"0", "depart":"13:03(30)"},
	  {"stop":"207", "track":"1", "pass":"13:05(20)"},
	  {"stop":"208", "track":"1", "pass":"13:07(35)"},
	  {"stop":"209", "track":"1", "pass":"13:07(50)"},
	  {"stop":"210", "track":"1", "pass":"13:09(25)"},
	  {"stop":"211", "track":"2", "pass":"13:11(45)"},
	  {"stop":"212", "track":"1", "pass":"13:14(55)"},
	  {"stop":"213", "track":"2", "pass":"13:17(35)"},
	  {"stop":"214", "track":"1", "pass":"13:20(15)"},
	  {"stop":"215", "track":"1", "pass":"13:23(55)"},
	  {"stop":"216", "track":"1", "pass":"13:24(50)"},
	  {"stop":"217", "track":"1", "pass":"13:25(55)"},
	  {"stop":"218", "track":"1", "pass":"13:28(00)"},
	  {"stop":"219", "track":"1", "pass":"13:28(35)"},
	  {"stop":"220", "track":"1", "arrive":"13:30(45)"},
	],
  };
  global.train_patterns["AB54"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "通勤特急 回送列車（下リ：麥田原 ➜ 小西車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"220", "track":"1", "depart":"10:21(15)"},
	  {"cross":"220_c", "start":"10:21(15)", "end":"10:22(30)"},
	  {"stop":"219", "track":"2", "pass":"10:22(40)"},
	  {"stop":"218", "track":"2", "pass":"10:23(30)"},
	  {"stop":"217", "track":"2", "pass":"10:25(35)"},
	  {"stop":"216", "track":"2", "pass":"10:26(40)"},
	  {"stop":"215", "track":"2", "pass":"10:27(35)"},
	  {"stop":"214", "track":"2", "pass":"10:31(15)"},
	  {"stop":"213", "track":"3", "pass":"10:33(55)"},
	  {"stop":"212", "track":"2", "pass":"10:36(35)"},
	  {"stop":"211", "track":"3", "pass":"10:39(45)"},
	  {"stop":"210", "track":"2", "pass":"10:42(05)"},
	  {"stop":"209", "track":"2", "pass":"10:43(40)"},
	  {"stop":"208", "track":"2", "pass":"10:44(55)"},
	  {"stop":"207", "track":"2", "pass":"10:46(10)"},
	  {"stop":"KNS", "track":"0", "arrive":"10:48(00)"},
	],
  };
  global.train_patterns["AB56"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "通勤特急 回送列車（下リ：麥田原 ➜ 麥急赤田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"220", "track":"1", "depart":"10:21(15)"},
	  {"cross":"220_c", "start":"10:21(15)", "end":"10:22(30)"},
	  {"stop":"219", "track":"2", "pass":"10:22(25)"},
	  {"stop":"218", "track":"2", "pass":"10:23(15)"},
	  {"stop":"217", "track":"2", "pass":"10:25(40)"},
	  {"stop":"216", "track":"2", "pass":"10:26(25)"},
	  {"stop":"215", "track":"2", "pass":"10:27(40)"},
	  {"stop":"214", "track":"2", "pass":"10:31(00)"},
	  {"stop":"213", "track":"3", "pass":"10:34(00)"},
	  {"stop":"212", "track":"2", "pass":"10:36(20)"},
	  {"stop":"211", "track":"3", "pass":"10:39(50)"},
	  {"stop":"210", "track":"2", "pass":"10:41(40)"},
	  {"stop":"209", "track":"2", "pass":"10:43(15)"},
	  {"stop":"208", "track":"2", "pass":"10:44(30)"},
	  {"stop":"207", "track":"2", "pass":"10:45(45)"},
	  {"stop":"206", "track":"6", "arrive":"10:47(35)", "depart":"10:49(35)"},
	  {"stop":"205", "track":"2", "pass":"10:51(20)"},
	  {"stop":"204", "track":"2", "pass":"10:53(00)"},
	  {"stop":"203", "track":"2", "pass":"10:54(20)"},
	  {"stop":"202", "track":"2", "pass":"10:55(30)"},
	  {"stop":"201", "track":"2", "pass":"10:56(30)"},
	  {"stop":"158", "track":"6", "arrive":"11:00(15)"},
	],
  };
  global.train_patterns["AB63"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:10",
	"label": "Mライナー 回送列車（上リ：麥田川車両基地 ➜ 麥田原）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"MGT", "track":"0", "depart":"13:21(15)"},
	  {"stop":"216", "track":"1", "pass":"13:23(05)"},
	  {"stop":"217", "track":"1", "pass":"13:25(05)"},
	  {"stop":"218", "track":"1", "pass":"13:27(15)"},
	  {"stop":"219", "track":"1", "pass":"13:28(35)"},
	  {"stop":"220", "track":"1", "arrive":"13:30(45)"},
	],
  };
  global.train_patterns["AB64"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "Mライナー 回送列車（下リ：麥田原 ➜ 麥田川車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"220", "track":"1", "depart":"10:21(15)"},
	  {"cross":"220_c", "start":"10:21(15)", "end":"10:22(30)"},
	  {"stop":"219", "track":"2", "pass":"10:22(40)"},
	  {"stop":"218", "track":"2", "pass":"10:24(15)"},
	  {"stop":"217", "track":"2", "pass":"10:26(25)"},
	  {"stop":"216", "track":"2", "pass":"10:28(25)"},
	  {"stop":"MGT", "track":"0", "arrive":"10:30(15)"},
	],
  };

  global.train_patterns["AC01"] = {
	"trainType": {"default": "CLE", "nis": "#"},
	"pivot": "12:10", "consist": {"default": "L08B", "S": ""},
	"label": "通勤特急 麥田原 / 快速特急*（上リ：麥急河田 ➜ 浅水）",
	"refTime": {"MK": "12:10(00)", "MT": "12:48(05)", "MA": "12:59(40)"},
	"remarks": "平日のみ運転、最高速度160km/h、8両編成。[S] 快速特急",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "line":"MK", "upbound":true, "depart":"12:10(00)"},
	  {"stop":"104", "track":{"default": "1", "alt104": "2"}, "line":"MK", "upbound":true, "arrive":"12:12(50)", "depart":"12:14(00)"},
	  {"stop":"113", "track":"3", "pass":"12:19(10)"},
	  {"stop":"139", "track":"1", "pass":"12:32(10)"},
	  {"stop":"145", "track":"1", "pass":"12:39(30)"},
	  {"stop":"150", "track":"1", "line":"MK", "upbound":true, "pass":"12:42(00)"},
	  {"stop":"154", "track":"1", "line":"MK", "upbound":true, "arrive":"12:44(15)", "depart":"12:45(15)"},
	  {"stop":"158", "track":"3", "line":"MT", "upbound":true, "pass":"12:48(05)"},
	  {"stop":"201", "track":"1", "pass":"12:49(15)"},
	  {"stop":"202", "track":"1", "pass":"12:50(15)"},
	  {"stop":"203", "track":"1", "pass":"12:51(25)"},
	  {"stop":"204", "track":"1", "pass":"12:52(45)"},
	  {"stop":"205", "track":"1", "pass":"12:54(25)"},
	  {"stop":"206", "track":"3", "line":"MA", "upbound":true, "arrive":"12:56(10)", "depart":"12:59(40)"},
	  {"cross":"206_2", "start":"12:59(40)", "end":"13:00(50)"},
	  {"cross":"206_1", "start":"12:59(40)", "end":"13:00(50)"},
	  {"stop":"231", "track":"1", "line":"MA", "upbound":true, "arrive":"13:02(45)", "depart":"13:03(25)"},
	  {"stop":"232", "track":"1", "line":"MA", "upbound":true, "arrive":"13:05(35)", "depart":"13:06(15)"},
	  {"stop":"233", "track":"1", "line":"MA", "upbound":true, "arrive":"13:08(40)", "depart":"13:09(25)"},
	  {"stop":"234", "track":"1", "line":"MA", "upbound":true, "arrive":"13:12(00)", "depart":"13:12(40)"},
	  {"stop":"235", "track":"1", "line":"MA", "upbound":true, "arrive":"13:14(45)", "depart":"13:15(25)"},
	  {"stop":"236", "track":"1", "line":"MA", "upbound":true, "arrive":"13:18(10)", "depart":"13:18(55)"},
	  {"stop":"237", "track":"1", "line":"MA", "upbound":true, "arrive":"13:24(55)", "depart":"13:25(40)"},
	  {"stop":"238", "track":"1", "pass":"13:27(20)"},
	  {"cross":"239_c", "start":"13:28(15)", "end":"13:29(30)"},
	  {"stop":"239", "track":"4", "line":"MA", "upbound":true, "arrive":"13:29(30)"},
	],
  };
  global.train_patterns["AC02"] = {
	"trainType": {"default": "CLE", "S": "#", "nis": "#"},
	"pivot": "11:50", "consist": {"default": "L08B", "S": ""},
	"label": "通勤特急 麥田原 / 快速特急*（下リ：浅水 / 麥急赤田 ➜ 麥急河田）",
	"refTime": {"MK": "11:43(00)", "MT": "11:04(25)", "MA": "10:51(50)"},
	"remarks": "平日のみ運転、最高速度160km/h、8両編成。[S] 快速特急",
	"upbound": false, "template": [
	  {"stop":"239", "track":"4", "line":"MA", "upbound":false, "depart":{"default":"10:22(30)","S":""}},
	  {"stop":"238", "track":"2", "pass":{"default":"10:24(10)","S":""}},
	  {"stop":"237", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:25(50)","S":""}, "depart":{"default":"10:26(35)","S":""}},
	  {"stop":"236", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:32(35)","S":""}, "depart":{"default":"10:33(20)","S":""}},
	  {"stop":"235", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:36(05)","S":""}, "depart":{"default":"10:36(45)","S":""}},
	  {"stop":"234", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:38(50)","S":""}, "depart":{"default":"10:39(30)","S":""}},
	  {"stop":"233", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:42(05)","S":""}, "depart":{"default":"10:42(50)","S":""}},
	  {"stop":"232", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:45(15)","S":""}, "depart":{"default":"10:45(55)","S":""}},
	  {"stop":"231", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"10:48(05)","S":""}, "depart":{"default":"10:48(45)","S":""}},
	  {"cross":"206_d", "start":{"default":"10:50(40)","S":""}, "end":{"default":"10:51(50)","S":""}},
	  {"cross":"206_c", "start":{"default":"10:50(40)","S":""}, "end":{"default":"10:51(50)","S":""}},
	  {"cross":"206_4", "start":{"default":"10:50(40)","S":""}, "end":{"default":"10:51(50)","S":""}},
	  {"cross":"206_5", "start":{"default":"10:50(40)","S":""}, "end":{"default":"10:51(50)","S":""}},
	  {"stop":"206", "track":"6", "line":"MT", "upbound":false, "arrive":{"default":"10:51(50)","S":""}, "depart":{"default":"10:56(20)","S":""}},
	  {"stop":"205", "track":"2", "pass":{"default":"10:58(05)","S":""}},
	  {"stop":"204", "track":"2", "pass":{"default":"10:59(45)","S":""}},
	  {"stop":"203", "track":"2", "pass":{"default":"11:01(05)","S":""}},
	  {"stop":"202", "track":"2", "pass":{"default":"11:02(15)","S":""}},
	  {"stop":"201", "track":"2", "pass":{"default":"11:03(15)","S":""}},
	  {"stop":"158", "track":"6", "line":"MK", "upbound":false, "depart":{"default":"","S":"11:02(15)"}, "pass":{"default":"11:04(25)","S":""}},
	  {"stop":"154", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"11:07(05)","S":"11:05(30)"}, "depart":{"default":"11:08(05)","S":"11:06(30)"}},
	  {"stop":"150", "track":"2", "line":"MK", "upbound":false, "arrive":{"default":"","S":"11:09(15)"}, "depart":{"default":"","S":"11:10(15)"}, "pass":{"default":"11:10(30)","S":""}},
	  {"stop":"145", "track":"2", "pass":{"default":"11:13(00)","S":"11:13(20)"}},
	  {"stop":"139", "track":"2", "pass":{"default":"11:20(20)","S":"11:20(35)"}},
	  {"stop":"113", "track":"4", "pass":{"default":"11:33(20)","S":"11:33(20)"}},
	  {"stop":"104", "track":{"default": "3", "alt104": "4"}, "line":"MK", "upbound":false, "arrive":{"default":"11:38(30)","S":"11:38(30)"}, "depart":{"default":"11:39(40)","S":"11:39(40)"}},
	  {"stop":"101", "track":"1", "arrive":{"default":"11:43(00)","S":"11:43(00)"}},
	],
  };
  global.train_patterns["AC51"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:10",
	"label": "通勤特急 回送列車（上リ：麥急河田 ➜ 青山車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"101", "track":"1", "depart":"12:10(00)"},
	  {"stop":"AOY", "track":"0", "arrive":"12:20(00)"},
	],
  };
  global.train_patterns["AC52"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "通勤特急 回送列車（下リ：青山車両基地 ➜ 麥急河田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AOY", "track":"0", "depart":"11:32(30)"},
	  {"stop":"101", "track":"1", "arrive":"11:43(00)"},
	],
  };
  global.train_patterns["AC53"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "12:10",
	"label": "通勤特急 回送列車（上リ：小西車両基地 ➜ 浅水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"KNS", "track":"0", "depart":"13:04(00)"},
	  {"stop":"231", "track":"1", "pass":"13:06(55)"},
	  {"stop":"232", "track":"1", "pass":"13:08(25)"},
	  {"stop":"233", "track":"1", "pass":"13:10(50)"},
	  {"stop":"234", "track":"1", "pass":"13:13(30)"},
	  {"stop":"235", "track":"1", "pass":"13:14(50)"},
	  {"stop":"236", "track":"1", "pass":"13:17(35)"},
	  {"stop":"237", "track":"1", "pass":"13:24(20)"},
	  {"stop":"238", "track":"1", "pass":"13:26(50)"},
	  {"cross":"239_c", "start":"13:28(15)", "end":"13:29(30)"},
	  {"stop":"239", "track":"4", "arrive":"13:29(30)"},
	],
  };
  global.train_patterns["AC54"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "通勤特急 回送列車（下リ：浅水 ➜ 小西車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"239", "track":"4", "depart":"10:22(30)"},
	  {"stop":"238", "track":"2", "pass":"10:24(40)"},
	  {"stop":"237", "track":"2", "pass":"10:27(10)"},
	  {"stop":"236", "track":"2", "pass":"13:33(55)"},
	  {"stop":"235", "track":"2", "pass":"10:36(40)"},
	  {"stop":"234", "track":"2", "pass":"10:38(00)"},
	  {"stop":"233", "track":"2", "pass":"13:40(40)"},
	  {"stop":"232", "track":"2", "pass":"10:43(05)"},
	  {"stop":"231", "track":"2", "pass":"10:44(35)"},
	  {"stop":"KNS", "track":"0", "arrive":"10:47(30)"},
	],
  };
  global.train_patterns["AC56"] = {
	"trainType": {"default": "#", "nis": "#"},
	"pivot": "11:50",
	"label": "通勤特急 回送列車（下リ：浅水 ➜ 麥急赤田）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"239", "track":"4", "depart":"10:18(30)"},
	  {"stop":"238", "track":"2", "pass":"10:20(25)"},
	  {"stop":"237", "track":"2", "pass":"10:22(50)"},
	  {"stop":"236", "track":"2", "pass":"10:29(30)"},
	  {"stop":"235", "track":"2", "pass":"10:32(55)"},
	  {"stop":"234", "track":"2", "pass":"10:34(15)"},
	  {"stop":"233", "track":"2", "pass":"10:36(15)"},
	  {"stop":"232", "track":"2", "pass":"10:39(20)"},
	  {"stop":"231", "track":"2", "pass":"10:40(50)"},
	  {"cross":"206_d", "start":"10:42(25)", "end":"10:43(35)"},
	  {"cross":"206_c", "start":"10:42(25)", "end":"10:43(35)"},
	  {"cross":"206_4", "start":"10:42(25)", "end":"10:43(35)"},
	  {"cross":"206_5", "start":"10:42(25)", "end":"10:43(35)"},
	  {"stop":"206", "track":"6", "arrive":"10:43(35)", "depart":"10:49(35)"},
	  {"stop":"158", "track":"6", "arrive":"11:00(15)"},
	],
  };

//Coupling between AB and AC
global.train_patterns["AB01"].otherInfo = {isFront: true};
global.train_patterns["AC01"].otherInfo = {isFront: false};
global.train_patterns["AC02"].otherInfo = {isFront: true};
global.train_patterns["AB02"].otherInfo = {isFront: false};