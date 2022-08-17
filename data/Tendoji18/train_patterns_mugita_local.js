/**
 * Main Line System : Mugita Area Local Trains [MB][MC][MT]
 */

global.train_patterns["MB01"] = {
	"trainType": "LCL",
	"pivot": "13:00", "consist": {"default": "U04", "long": "U06", "short": "U02"},
	"label": "麥田原線 普通列車 I（上リ：麥急赤田 ➜ 麥田原）",
	"refTime": {"MT": {"default":"12:56(50)", "p":"12:58(00)", "n":"12:56(50)", "m":"13:00(50)"}},
	"remarks": "最高速度130km/h、20000 / 21000系高加速電車4~6両編成。[p]: Mライナー運転時 [m/n]: 早朝運転",
	"upbound": true, "template": [
	  {"stop":"158", "track":"1", "line":"MT", "upbound":true, "depart":{"default":"12:56(50)", "p":"12:58(00)", "n":"12:56(50)", "m":"13:00(50)"}},
	  {"stop":"201", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"12:58(45)", "p":"12:59(55)", "n":"12:58(45)", "m":"13:02(45)"}, "depart":{"default":"12:59(15)", "p":"13:00(25)", "n":"12:59(15)", "m":"13:03(15)"}},
	  {"stop":"202", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:00(55)", "p":"13:02(05)", "n":"13:00(55)", "m":"13:04(55)"}, "depart":{"default":"13:01(25)", "p":"13:02(35)", "n":"13:01(25)", "m":"13:05(25)"}},
	  {"stop":"203", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:03(15)", "p":"13:04(25)", "n":"13:03(15)", "m":"13:07(15)"}, "depart":{"default":"13:03(45)", "p":"13:04(55)", "n":"13:03(45)", "m":"13:07(45)"}},
	  {"stop":"204", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:05(45)", "p":"13:06(55)", "n":"13:05(45)", "m":"13:09(45)"}, "depart":{"default":"13:06(15)", "p":"13:07(25)", "n":"13:06(15)", "m":"13:10(15)"}},
	  {"stop":"205", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:08(35)", "p":"13:09(45)", "n":"13:08(35)", "m":"13:12(35)"}, "depart":{"default":"13:09(05)", "p":"13:10(15)", "n":"13:09(05)", "m":"13:13(05)"}},
	  {"stop":"206", "track":"2", "line":"MT", "upbound":true, "arrive":{"default":"13:11(00)", "p":"13:12(10)", "n":"13:11(00)", "m":"13:15(00)"}, "depart":{"default":"13:16(20)", "p":"13:18(20)", "n":"13:16(20)", "m":"13:16(20)"}},
	  {"cross":"206_2", "start":{"default":"13:16(20)", "p":"13:18(20)", "n":"13:16(20)", "m":"13:16(20)"}, "end":{"default":"13:17(30)", "p":"13:19(30)", "n":"13:17(30)", "m":"13:17(30)"}},
	  {"cross":"206_c", "start":{"default":"13:16(20)", "p":"13:18(20)", "n":"13:16(20)", "m":"13:16(20)"}, "end":{"default":"13:17(30)", "p":"13:19(30)", "n":"13:17(30)", "m":"13:17(30)"}},
	  {"stop":"207", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:18(35)", "p":"13:20(35)", "n":"13:18(35)", "m":"13:18(35)"}, "depart":{"default":"13:19(05)", "p":"13:21(05)", "n":"13:19(05)", "m":"13:19(05)"}},
	  {"stop":"208", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:21(00)", "p":"13:23(00)", "n":"13:21(00)", "m":"13:21(00)"}, "depart":{"default":"13:21(30)", "p":"13:23(30)", "n":"13:21(30)", "m":"13:21(30)"}},
	  {"stop":"209", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:23(30)", "p":"13:25(30)", "n":"13:23(30)", "m":"13:23(30)"}, "depart":{"default":"13:24(00)", "p":"13:26(00)", "n":"13:24(00)", "m":"13:24(00)"}},
	  {"stop":"210", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:26(15)", "p":"13:28(15)", "n":"13:26(15)", "m":"13:26(15)"}, "depart":{"default":"13:26(45)", "p":"13:28(45)", "n":"13:26(45)", "m":"13:26(45)"}},
	  {"stop":"211", "track":"2", "line":"MT", "upbound":true, "arrive":{"default":"13:29(00)", "p":"13:31(00)", "n":"13:29(00)", "m":"13:29(00)"}, "depart":{"default":"13:29(40)", "p":"13:31(40)", "n":"13:29(40)", "m":"13:29(40)"}},
	  {"stop":"212", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:32(00)", "p":"13:34(00)", "n":"13:32(00)", "m":"13:32(00)"}, "depart":{"default":"13:32(30)", "p":"13:34(30)", "n":"13:32(30)", "m":"13:32(30)"}},
	  {"stop":"213", "track":{"default":"1","m":"2","n":"2","t213a":"1","t213b":"2"}, "line":"MT", "upbound":true, "arrive":{"default":"13:35(40)", "p":"13:37(40)", "n":"13:35(40)", "m":"13:35(40)"}, "depart":{"default":"13:41(05)", "p":"13:42(05)", "n":"13:37(05)", "m":"13:37(05)"}},
	  {"stop":"214", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:43(15)", "p":"13:44(15)", "n":"13:39(15)", "m":"13:39(15)"}, "depart":{"default":"13:43(45)", "p":"13:44(45)", "n":"13:39(45)", "m":"13:39(45)"}},
	  {"stop":"215", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:48(00)", "p":"13:49(00)", "n":"13:44(00)", "m":"13:44(00)"}, "depart":{"default":"13:48(30)", "p":"13:49(30)", "n":"13:44(30)", "m":"13:44(30)"}},
	  {"stop":"216", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:50(00)", "p":"13:51(00)", "n":"13:46(00)", "m":"13:46(00)"}, "depart":{"default":"13:50(30)", "p":"13:51(30)", "n":"13:46(30)", "m":"13:46(30)"}},
	  {"stop":"217", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:52(00)", "p":"13:53(00)", "n":"13:48(00)", "m":"13:48(00)"}, "depart":{"default":"13:52(35)", "p":"13:53(35)", "n":"13:48(35)", "m":"13:48(35)"}},
	  {"stop":"218", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:54(00)", "p":"13:55(00)", "n":"13:50(00)", "m":"13:50(00)"}, "depart":{"default":"13:54(30)", "p":"13:55(30)", "n":"13:50(30)", "m":"13:50(30)"}},
	  {"stop":"219", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:55(55)", "p":"13:56(55)", "n":"13:51(55)", "m":"13:51(55)"}, "depart":{"default":"13:56(25)", "p":"13:57(25)", "n":"13:52(25)", "m":"13:52(25)"}},
	  {"cross":"220_c", "start":{"default":"13:57(30)", "p":"13:58(30)", "n":"13:53(30)", "m":"13:53(30)"}, "end":{"default":"13:58(30)", "p":"13:59(30)", "n":"13:54(30)", "m":"13:54(30)"}},
	  {"stop":"220", "track":{"default":"4","alt220":"3"}, "arrive":{"default":"13:58(30)", "p":"13:59(30)", "n":"13:54(30)", "m":"13:54(30)"}},
	],
  };
  global.train_patterns["MB02"] = {
	"trainType": "LCL",
	"pivot": "11:00", "consist": {"default": "U04", "long": "U06", "short": "U02"},
	"label": "麥田原線 普通列車 I（下リ：麥田原 ➜ 麥急赤田）",
	"refTime": {"MT": {"default":"10:55(10)", "p":"10:53(55)", "n":"10:55(10)", "m":"10:50(10)"}},
	"remarks": "最高速度130km/h、20000 / 21000系高加速電車4~6両編成。[p]: Mライナー運転時 [m/n]: 早朝運転",
	"upbound": false, "template": [
	  {"stop":"220", "track":{"default":"4","alt220":"3"}, "line":"MT", "upbound":false, "depart":{"default":"9:52(30)", "p":"9:51(30)", "n":"9:56(30)", "m":"9:56(30)"}},
	  {"stop":"219", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"9:54(05)", "p":"9:53(05)", "n":"9:58(05)", "m":"9:58(05)"}, "depart":{"default":"9:54(40)", "p":"9:53(40)", "n":"9:58(40)", "m":"9:58(40)"}},
	  {"stop":"218", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"9:56(05)", "p":"9:55(05)", "n":"10:00(05)", "m":"10:00(05)"}, "depart":{"default":"9:56(40)", "p":"9:55(40)", "n":"10:00(40)", "m":"10:00(40)"}},
	  {"stop":"217", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"9:58(05)", "p":"9:57(05)", "n":"10:02(05)", "m":"10:02(05)"}, "depart":{"default":"9:58(50)", "p":"9:57(50)", "n":"10:02(50)", "m":"10:02(50)"}},
	  {"stop":"216", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:00(20)", "p":"9:59(20)", "n":"10:04(20)", "m":"10:04(20)"}, "depart":{"default":"10:00(55)", "p":"9:59(55)", "n":"10:04(55)", "m":"10:04(55)"}},
	  {"stop":"215", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:02(25)", "p":"10:01(25)", "n":"10:06(25)", "m":"10:06(25)"}, "depart":{"default":"10:03(00)", "p":"10:02(00)", "n":"10:07(00)", "m":"10:07(00)"}},
	  {"stop":"214", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:07(15)", "p":"10:06(15)", "n":"10:11(15)", "m":"10:11(15)"}, "depart":{"default":"10:07(45)", "p":"10:06(45)", "n":"10:11(45)", "m":"10:11(45)"}},
	  {"stop":"213", "track":{"default":"4","m":"3","n":"3","t213a":"1","t213b":"2"}, "line":"MT", "upbound":false, "arrive":{"default":"10:09(55)", "p":"10:08(55)", "n":"10:13(55)", "m":"10:13(55)"}, "depart":{"default":"10:15(20)", "p":"10:13(50)", "n":"10:15(20)", "m":"10:15(20)"}},
	  {"stop":"212", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:18(30)", "p":"10:17(00)", "n":"10:18(30)", "m":"10:18(30)"}, "depart":{"default":"10:19(00)", "p":"10:17(30)", "n":"10:19(00)", "m":"10:19(00)"}},
	  {"stop":"211", "track":{"default":"3","t211":"2"}, "line":"MT", "upbound":false, "arrive":{"default":"10:21(20)", "p":"10:19(50)", "n":"10:21(20)", "m":"10:21(20)"}, "depart":{"default":"10:22(00)", "p":"10:20(30)", "n":"10:22(00)", "m":"10:22(00)"}},
	  {"stop":"210", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:24(15)", "p":"10:22(45)", "n":"10:24(15)", "m":"10:24(15)"}, "depart":{"default":"10:24(45)", "p":"10:23(15)", "n":"10:24(45)", "m":"10:24(45)"}},
	  {"stop":"209", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:27(00)", "p":"10:25(30)", "n":"10:27(00)", "m":"10:27(00)"}, "depart":{"default":"10:27(30)", "p":"10:26(00)", "n":"10:27(30)", "m":"10:27(30)"}},
	  {"stop":"208", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:29(30)", "p":"10:28(00)", "n":"10:29(30)", "m":"10:29(30)"}, "depart":{"default":"10:30(00)", "p":"10:28(30)", "n":"10:30(00)", "m":"10:30(00)"}},
	  {"stop":"207", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:31(55)", "p":"10:30(25)", "n":"10:31(55)", "m":"10:31(55)"}, "depart":{"default":"10:32(25)", "p":"10:30(55)", "n":"10:32(25)", "m":"10:32(25)"}},
	  {"cross":"206_5", "start":{"default":"10:33(30)", "p":"10:32(00)", "n":"10:33(30)", "m":"10:33(30)"}, "end":{"default":"10:34(40)", "p":"10:33(10)", "n":"10:34(40)", "m":"10:34(40)"}},
	  {"stop":"206", "track":"5", "line":"MT", "upbound":false, "arrive":{"default":"10:34(40)", "p":"10:33(10)", "n":"10:34(40)", "m":"10:34(40)"}, "depart":{"default":"10:40(40)", "p":"10:39(45)", "n":"10:40(40)", "m":"10:36(00)"}},
	  {"stop":"205", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:42(55)", "p":"10:41(40)", "n":"10:42(55)", "m":"10:37(55)"}, "depart":{"default":"10:43(25)", "p":"10:42(10)", "n":"10:43(25)", "m":"10:38(25)"}},
	  {"stop":"204", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:45(45)", "p":"10:44(30)", "n":"10:45(45)", "m":"10:40(45)"}, "depart":{"default":"10:46(15)", "p":"10:45(00)", "n":"10:46(15)", "m":"10:41(15)"}},
	  {"stop":"203", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:48(15)", "p":"10:47(00)", "n":"10:48(15)", "m":"10:43(15)"}, "depart":{"default":"10:48(45)", "p":"10:47(30)", "n":"10:48(45)", "m":"10:43(45)"}},
	  {"stop":"202", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:50(35)", "p":"10:49(20)", "n":"10:50(35)", "m":"10:45(35)"}, "depart":{"default":"10:51(05)", "p":"10:49(50)", "n":"10:51(05)", "m":"10:46(05)"}},
	  {"stop":"201", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:52(45)", "p":"10:51(30)", "n":"10:52(45)", "m":"10:47(45)"}, "depart":{"default":"10:53(15)", "p":"10:52(00)", "n":"10:53(15)", "m":"10:48(15)"}},
	  {"stop":"158", "track":"2", "arrive":{"default":"10:55(10)", "p":"10:53(55)", "n":"10:55(10)", "m":"10:50(10)"}},
	],
  };
  global.train_patterns["MB03"] = {
	"trainType": "LCL",
	"pivot": "12:50", "consist": {"default": "U04", "long": "U06", "short": "U02"},
	"label": "麥田原線 普通列車 II（上リ：麥急赤田 ➜ 田心市 / 森島市）",
	"refTime": {"MT": {"default":"12:46(50)", "p":"12:49(20)", "n":"12:50(50)"}},
	"remarks": "最高速度130km/h、20000 / 21000系高加速電車4~6両編成。[p]: Mライナー運転時 [n]: 早朝運転 [l]: 森島延長運転",
  
	"upbound": true, "template": [
	  {"stop":"158", "track":"1", "line":"MT", "upbound":true, "depart":{"default":"12:46(50)", "p":"12:49(20)", "n":"12:50(50)"}},
	  {"stop":"201", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"12:48(45)", "p":"12:51(15)", "n":"12:52(45)"}, "depart":{"default":"12:49(15)", "p":"12:51(45)", "n":"12:53(15)"}},
	  {"stop":"202", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"12:50(55)", "p":"12:53(25)", "n":"12:54(55)"}, "depart":{"default":"12:51(25)", "p":"12:53(55)", "n":"12:55(25)"}},
	  {"stop":"203", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"12:53(15)", "p":"12:55(45)", "n":"12:57(15)"}, "depart":{"default":"12:53(45)", "p":"12:56(15)", "n":"12:57(45)"}},
	  {"stop":"204", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"12:55(45)", "p":"12:58(15)", "n":"12:59(45)"}, "depart":{"default":"12:56(15)", "p":"12:58(45)", "n":"13:00(15)"}},
	  {"stop":"205", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"12:58(35)", "p":"13:01(05)", "n":"13:02(35)"}, "depart":{"default":"12:59(05)", "p":"13:01(35)", "n":"13:03(05)"}},
	  {"stop":"206", "track":"2", "line":"MT", "upbound":true, "arrive":{"default":"13:01(00)", "p":"13:03(30)", "n":"13:05(00)"}, "depart":{"default":"13:06(20)", "p":"13:07(20)", "n":"13:06(20)"}},
	  {"cross":"206_2", "start":{"default":"13:06(20)", "p":"13:08(20)", "n":"13:06(20)"}, "end":{"default":"13:07(30)", "p":"13:09(30)", "n":"13:07(30)"}},
	  {"cross":"206_c", "start":{"default":"13:06(20)", "p":"13:08(20)", "n":"13:06(20)"}, "end":{"default":"13:07(30)", "p":"13:09(30)", "n":"13:07(30)"}},
	  {"stop":"207", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:08(35)", "p":"13:09(35)", "n":"13:08(35)"}, "depart":{"default":"13:09(05)", "p":"13:10(05)", "n":"13:09(05)"}},
	  {"stop":"208", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:11(00)", "p":"13:12(00)", "n":"13:11(00)"}, "depart":{"default":"13:11(30)", "p":"13:12(30)", "n":"13:11(30)"}},
	  {"stop":"209", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:13(30)", "p":"13:14(30)", "n":"13:13(30)"}, "depart":{"default":"13:14(00)", "p":"13:15(00)", "n":"13:14(00)"}},
	  {"stop":"210", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"13:16(15)", "p":"13:17(15)", "n":"13:16(15)"}, "depart":{"default":"13:16(45)", "p":"13:17(45)", "n":"13:16(45)"}},
	  {"stop":"211", "track":"2", "line":"MT", "upbound":true, "arrive":{"default":"13:19(00)", "p":"13:20(00)", "n":"13:19(00)"}, "depart":{"default":"", "l":"13:19(40)"}},
	  {"stop":"212", "track":"1", "line":"MT", "upbound":true, "arrive":{"default":"", "l":"13:22(00)"}, "depart":{"default":"", "l":"13:22(30)"}},
	  {"stop":"213", "track":"2", "arrive":{"default":"", "l":"13:25(40)"}},
	],
  };
  global.train_patterns["MB04"] = {
	"trainType": "LCL",
	"pivot": "11:10", "consist": {"default": "U04", "long": "U06", "short": "U02"},
	"label": "麥田原線 普通列車 II（下リ：田心市 / 森島市 ➜ 麥急赤田）",
	"refTime": {"MT": {"default":"11:05(10)", "p":"11:02(40)", "n":"11:00(10)"}},
	"remarks": "最高速度130km/h、20000 / 21000系高加速電車4~6両編成。[p]: Mライナー運転時 [n]: 早朝運転 [l]: 森島延長運転",
  
	"upbound": false, "template": [
	  {"stop":"213", "track":"3", "line":"MT", "upbound":false, "depart":{"default":"", "l":"10:25(20)"}},
	  {"stop":"212", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"", "l":"10:28(30)"}, "depart":{"default":"", "l":"10:29(00)"}},
	  {"stop":"211", "track":{"default":"3","t211":"2"}, "line":"MT", "upbound":false, "arrive":{"default":"", "l":"10:31(20)"}, "depart":{"default":"10:32(00)", "p":"10:31(00)", "n":"10:32(00)"}},
	  {"stop":"210", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:34(15)", "p":"10:33(15)", "n":"10:34(15)"}, "depart":{"default":"10:34(45)", "p":"10:33(45)", "n":"10:34(45)"}},
	  {"stop":"209", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:37(00)", "p":"10:36(00)", "n":"10:37(00)"}, "depart":{"default":"10:37(30)", "p":"10:36(30)", "n":"10:37(30)"}},
	  {"stop":"208", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:39(30)", "p":"10:38(30)", "n":"10:39(30)"}, "depart":{"default":"10:40(00)", "p":"10:39(00)", "n":"10:40(00)"}},
	  {"stop":"207", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:41(55)", "p":"10:40(55)", "n":"10:41(55)"}, "depart":{"default":"10:42(25)", "p":"10:41(25)", "n":"10:42(25)"}},
	  {"cross":"206_5", "start":{"default":"10:43(30)", "p":"10:42(00)", "n":"10:43(30)"}, "end":{"default":"10:44(40)", "p":"10:43(40)", "n":"10:44(40)"}},
	  {"stop":"206", "track":"5", "line":"MT", "upbound":false, "arrive":{"default":"10:44(40)", "p":"10:43(40)", "n":"10:44(40)"}, "depart":{"default":"10:50(40)", "p":"10:48(30)", "n":"10:46(00)"}},
	  {"stop":"205", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:52(55)", "p":"10:50(25)", "n":"10:47(55)"}, "depart":{"default":"10:53(25)", "p":"10:50(55)", "n":"10:48(25)"}},
	  {"stop":"204", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:55(45)", "p":"10:53(15)", "n":"10:50(45)"}, "depart":{"default":"10:56(15)", "p":"10:53(45)", "n":"10:51(15)"}},
	  {"stop":"203", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"10:58(15)", "p":"10:55(45)", "n":"10:53(15)"}, "depart":{"default":"10:58(45)", "p":"10:56(15)", "n":"10:53(45)"}},
	  {"stop":"202", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"11:00(35)", "p":"10:58(05)", "n":"10:55(35)"}, "depart":{"default":"11:01(05)", "p":"10:58(35)", "n":"10:56(05)"}},
	  {"stop":"201", "track":"2", "line":"MT", "upbound":false, "arrive":{"default":"11:02(45)", "p":"11:00(15)", "n":"10:57(45)"}, "depart":{"default":"11:03(15)", "p":"11:00(45)", "n":"10:58(15)"}},
	  {"stop":"158", "track":"2", "arrive":{"default":"11:05(10)", "p":"11:02(40)", "n":"11:00(10)"}},
	],
  };
global.train_patterns["MB51"] = {
	"trainType": "#",
	"pivot": "13:00",
	"label": "普通 回送列車（上リ：小西市 ➜ 小西車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"206", "track":"2", "depart":"13:12(00)"},
	  {"cross":"206_1", "start":"13:12(00)", "end":"13:13(15)"},
	  {"cross":"206_d", "start":"13:12(00)", "end":"13:13(15)"},
	  {"stop":"KNS", "track":"0", "arrive":"13:14(00)"},
	],
};
global.train_patterns["MB52"] = {
	"trainType": "#",
	"pivot": "11:00",
	"label": "普通 回送列車（下リ：小西車両基地 ➜ 小西市）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KNS", "track":"0", "depart":"10:37(30)"},
	  {"cross":"206_c", "start":"10:38(15)", "end":"10:39(30)"},
	  {"cross":"206_4", "start":"10:38(15)", "end":"10:39(30)"},
	  {"stop":"206", "track":"5", "arrive":"10:39(30)"},
	],
};
global.train_patterns["MB53"] = {
	"trainType": "#",
	"pivot": "13:00",
	"label": "普通 回送列車（上リ：麥田川車両基地 ➜ 麥田泉源）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"MGT", "track":"0", "depart":"13:43(30)"},
	  {"stop":"216", "track":"1", "arrive":"13:45(30)"},
	],
};
  global.train_patterns["MB54"] = {
	"trainType": "#",
	"pivot": "11:00",
	"label": "普通 回送列車（下リ：麥田泉源 ➜ 麥田川車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"216", "track":"2", "depart":"10:05(30)"},
	  {"stop":"MGT", "track":"0", "arrive":"10:07(30)"},
	],
};
global.train_patterns["MB55"] = {
	"trainType": "#",
	"pivot": "12:50",
	"label": "普通 回送列車（上リ：森島市 ➜ 麥田川車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"213", "track":"2", "depart":"13:27(40)"},
	  {"stop":"214", "track":"1", "pass":"13:29(30)"},
	  {"stop":"215", "track":"1", "pass":"13:33(30)"},
	  {"stop":"MGT", "track":"0", "arrive":"13:35(00)"},
	],
};
global.train_patterns["MB56"] = {
	"trainType": "#",
	"pivot": "11:10",
	"label": "普通 回送列車（下リ：麥田川車両基地 ➜ 森島市）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"MGT", "track":"0", "depart":"10:16(00)"},
	  {"stop":"215", "track":"2", "pass":"10:17(30)"},
	  {"stop":"214", "track":"2", "pass":"10:21(30)"},
	  {"stop":"213", "track":"3", "arrive":"10:23(20)"},
	],
};

global.train_patterns["MC01"] = {
	"trainType": "LCL",
	"pivot": "13:20", "consist": {"default": "U04", "long": "U06", "short": "U02"},
	"label": "浅水線 普通列車（上リ：小西市 ➜ 浅水）",
	"refTime": {"MA": "13:08(50)"},
	"remarks": "最高速度110km/h、20000系高加速電車2~4両編成。 [l]: 浅水延長運転",
	"upbound": true, "template": [
	  {"stop":"206", "track":"2", "line":"MA", "upbound":true, "depart":"13:08(50)"},
	  {"cross":"206_1", "start":"13:08(50)", "end":"13:10(00)"},
	  {"stop":"231", "track":"1", "line":"MA", "upbound":true, "arrive":"13:11(45)", "depart":"13:12(15)"},
	  {"stop":"232", "track":"1", "line":"MA", "upbound":true, "arrive":"13:14(15)", "depart":"13:14(45)"},
	  {"stop":"233", "track":"1", "line":"MA", "upbound":true, "arrive":"13:17(00)", "depart":"13:17(50)"},
	  {"stop":"234", "track":"1", "line":"MA", "upbound":true, "arrive":"13:20(10)", "depart":"13:20(40)"},
	  {"stop":"235", "track":"1", "line":"MA", "upbound":true, "arrive":"13:22(30)", "depart":"13:23(00)"},
	  {"stop":"236", "track":"1", "line":"MA", "upbound":true, "arrive":"13:25(30)", "depart":{"default":"", "l":"13:26(20)"}},
	  {"stop":"237", "track":"1", "line":"MA", "upbound":true, "arrive":{"default":"", "l":"13:32(10)"}, "depart":{"default":"", "l":"13:32(40)"}},
	  {"stop":"238", "track":"1", "line":"MA", "upbound":true, "arrive":{"default":"", "l":"13:34(15)"}, "depart":{"default":"", "l":"13:34(45)"}},
	  {"cross":"239_c", "start":{"default":"", "l":"13:36(00)"}, "end":{"default":"", "l":"13:37(00)"}},
	  {"stop":"239", "track":"3", "arrive":{"default":"", "l":"13:37(00)"}},
	],
  };
  global.train_patterns["MC02"] = {
	"trainType": "LCL",
	"pivot": "10:40", "consist": {"default": "U04", "long": "U06", "short": "U02"},
	"label": "浅水線 普通列車（下リ：浅水 ➜ 小西市）",
	"refTime": {"MA": "10:42(10)"},
	"remarks": "最高速度110km/h、20000系高加速電車2~4両編成。 [l]: 浅水延長運転",
	"upbound": false, "template": [
	  {"stop":"239", "track":"3", "line":"MA", "upbound":false, "depart":{"default":"", "l":"10:14(30)"}},
	  {"cross":"239_c", "start":{"default":"", "l":"10:14(30)"}, "end":{"default":"", "l":"10:15(30)"}},
	  {"stop":"238", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"", "l":"10:16(15)"}, "depart":{"default":"", "l":"10:16(45)"}},
	  {"stop":"237", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"", "l":"10:18(20)"}, "depart":{"default":"", "l":"10:18(50)"}},
	  {"stop":"236", "track":"2", "line":"MA", "upbound":false, "arrive":{"default":"", "l":"10:24(40)"}, "depart":"10:25(30)"},
	  {"stop":"235", "track":"2", "line":"MA", "upbound":false, "arrive":"10:28(00)", "depart":"10:28(30)"},
	  {"stop":"234", "track":"2", "line":"MA", "upbound":false, "arrive":"10:30(20)", "depart":"10:30(50)"},
	  {"stop":"233", "track":"2", "line":"MA", "upbound":false, "arrive":"10:33(10)", "depart":"10:34(00)"},
	  {"stop":"232", "track":"2", "line":"MA", "upbound":false, "arrive":"10:36(15)", "depart":"10:36(45)"},
	  {"stop":"231", "track":"2", "line":"MA", "upbound":false, "arrive":"10:38(45)", "depart":"10:39(15)"},
	  {"cross":"206_d", "start":"10:41(00)", "end":"10:42(10)"},
	  {"cross":"206_c", "start":"10:41(00)", "end":"10:42(10)"},
	  {"cross":"206_4", "start":"10:41(00)", "end":"10:42(10)"},
	  {"stop":"206", "track":"5", "arrive":"10:42(10)"},
	],
  };
  global.train_patterns["MC51"] = {
	"trainType": "#",
	"pivot": "13:20",
	"label": "普通 回送列車（上リ：麥急赤柱 ➜ 赤柱留置線）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"236", "track":"1", "depart":"13:26(20)"},
	  {"stop":"AKH", "track":"0", "arrive":"13:28(00)"},
	],
  };
  global.train_patterns["MC52"] = {
	"trainType": "#",
	"pivot": "10:40",
	"label": "普通 回送列車（下リ：赤柱留置線 ➜ 麥急赤柱）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"AKH", "track":"0", "depart":"10:23(00)"},
	  {"stop":"236", "track":"2", "arrive":"10:24(40)"},
	],
  };
global.train_patterns["MC53"] = {
	"trainType": "#",
	"pivot": "13:20",
	"label": "普通 回送列車（上リ：小西市 ➜ 小西車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"206", "track":"2", "depart":"13:08(50)"},
	  {"cross":"206_1", "start":"13:08(50)", "end":"13:10(00)"},
	  {"cross":"206_d", "start":"13:08(50)", "end":"13:10(00)"},
	  {"stop":"KNS", "track":"0", "arrive":"13:10(30)"},
	],
};
global.train_patterns["MC54"] = {
	"trainType": "#",
	"pivot": "10:40",
	"label": "普通 回送列車（下リ：小西車両基地 ➜ 小西市）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KNS", "track":"0", "depart":"10:40(30)"},
	  {"cross":"206_c", "start":"10:41(00)", "end":"10:42(10)"},
	  {"cross":"206_4", "start":"10:41(00)", "end":"10:42(10)"},
	  {"stop":"206", "track":"5", "arrive":"10:42(10)"},
	],
};

global.train_patterns["MT01"] = {
	"trainType": "LCL",
	"pivot": "13:00", "consist": {"default": "U02", "long": "U04"},
	"label": "田心線 普通列車（上リ：田心市 ➜ 沼津原）",
	"refTime": {"MS": "13:08(00)"},
	"remarks": "最高速度90km/h、20000系高加速電車2~4両編成。",
	"upbound": true, "template": [
	  {"stop":"211", "track":"1", "line":"MS", "upbound":true, "depart":"13:08(00)"},
	  {"stop":"251", "track":"1", "line":"MS", "upbound":true, "arrive":"13:10(35)", "depart":"13:11(05)"},
	  {"stop":"252", "track":"1", "line":"MS", "upbound":true, "arrive":"13:13(30)", "depart":"13:14(15)"},
	  {"stop":"253", "track":"1", "line":"MS", "upbound":true, "arrive":"13:16(00)", "depart":"13:16(30)"},
	  {"stop":"254", "track":"1", "line":"MS", "upbound":true, "arrive":"13:18(30)", "depart":"13:19(00)"},
	  {"stop":"255", "track":"1", "line":"MS", "upbound":true, "arrive":"13:21(20)", "depart":"13:21(50)"},
	  {"stop":"256", "track":"1", "line":"MS", "upbound":true, "arrive":"13:24(05)", "depart":"13:24(50)"},
	  {"stop":"257", "track":"1", "arrive":"13:28(20)"},
	],
};
global.train_patterns["MT02"] = {
	"trainType": "LCL",
	"pivot": "13:00", "consist": {"default": "U02", "long": "U04"},
	"label": "田心線 普通列車（下リ：浅水 ➜ 小西市）",
	"refTime": {"MS": "13:00(20)"},
	"remarks": "最高速度90km/h、20000系高加速電車2~4両編成。",
	"upbound": false, "template": [
	  {"stop":"257", "track":"1", "line":"MS", "upbound":false, "depart":"12:40(00)"},
	  {"stop":"256", "track":"2", "line":"MS", "upbound":false, "arrive":"12:43(30)", "depart":"12:44(15)"},
	  {"stop":"255", "track":"1", "line":"MS", "upbound":false, "arrive":"12:46(30)", "depart":"12:47(00)"},
	  {"stop":"254", "track":"1", "line":"MS", "upbound":false, "arrive":"12:49(20)", "depart":"12:49(50)"},
	  {"stop":"253", "track":"1", "line":"MS", "upbound":false, "arrive":"12:51(50)", "depart":"12:52(20)"},
	  {"stop":"252", "track":"2", "line":"MS", "upbound":false, "arrive":"12:54(05)", "depart":"12:54(50)"},
	  {"stop":"251", "track":"1", "line":"MS", "upbound":false, "arrive":"12:57(15)", "depart":"12:57(45)"},
	  {"stop":"211", "track":"1", "arrive":"13:00(20)"},
	],
};