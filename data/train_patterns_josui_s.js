/**
 * Main Line System : Josui Line South [JS]
 */

global.train_patterns["JS01"] = {
	"trainType": {"default": "SEE", "local": "LOC", "s": "#"},
	"pivot": "12:50", "consist": "N08",
	"label": "区間急行 上水南線（上リ：麥急上水 ➜ 清河南）",
	"refTime": {"JS": "12:45(00)"},
	"remarks": "最高速度120km/h、8両編成。[s] 加福町行",
	"upbound": true, "template": [
	  {"stop":"139", "track":"7", "line":"JS", "upbound":true, "depart":"12:45(00)"},
	  {"stop":"361", "track":"1", "pass":"12:46(30)"},
	  {"stop":"362", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:47(40)", "s":""}, "depart":{"default":"12:48(20)", "s":""}, "pass":{"default":"", "s":"12:48(00)"}},
	  {"stop":"363", "track":"1", "pass":"12:49(20)"},
	  //
	  {"stop":"365", "track":"1", "pass":"12:50(40)"},
	  {"stop":"366", "track":"1", "pass":"12:51(15)"},
	  {"stop":"367", "track":"1", "line":"JS", "upbound":true, "pass":{"default":"12:51(55)", "s":"12:52(35)"}},
	  {"stop":"368", "track":"1", "line":"JS", "upbound":true, "pass":{"default":"12:52(35)", "s":"12:54(40)"}},
	  {"stop":"369", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:53(35)", "s":""}, "depart":{"default":"12:54(15)", "s":""}, "pass":{"default":"", "s":"12:56(40)"}},
	  {"stop":"370", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:55(40)", "s":""}, "depart":{"default":"12:56(20)", "s":""}, "pass":{"default":"", "s":"12:58(40)"}},
	  {"stop":"371", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:57(45)", "s":"13:00(30)"}, "depart":{"default":"12:58(25)", "s":""}},
	  {"stop":"372", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:59(50)", "s":""}, "depart":{"default":"13:00(30)", "s":""}},
	  {"stop":"373", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:01(55)", "s":""}, "depart":{"default":"13:02(35)", "s":""}},
	  {"stop":"374", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:04(00)", "s":""}, "depart":{"default":"13:04(40)", "s":""}},
	  {"stop":"375", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:06(50)", "s":""}, "depart":{"default":"13:07(25)", "s":""}},
	  {"stop":"376", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:09(05)", "s":""}, "depart":{"default":"13:10(15)", "s":""}},
	  {"cross":"377_c", "start":{"default":"13:11(45)", "s":""}, "end":{"default":"13:13(00)", "s":""}},
	  {"stop":"377", "track":"3", "arrive":{"default":"13:13(00)", "s":""}},
	],
  };
  global.train_patterns["JS02"] = {
	"trainType": {"default": "SEE", "local": "LOC", "s": "#"},
	"pivot": "11:10", "consist": "N08",
	"label": "区間急行 上水南線（下リ：清河南 ➜ 麥急上水）",
	"refTime": {"JS": "11:07(30)"},
	"remarks": "最高速度120km/h、8両編成。[s] 加福町行",
	"upbound": false, "template": [
	  {"stop":"377", "track":"3", "line":"JS", "upbound":false, "depart":{"default":"10:40(30)", "s":""}},
	  {"stop":"376", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:42(15)", "s":""}, "depart":{"default":"10:43(25)", "s":""}},
	  {"stop":"375", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:45(05)", "s":""}, "depart":{"default":"10:45(40)", "s":""}},
	  {"stop":"374", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:47(50)", "s":""}, "depart":{"default":"10:48(30)", "s":""}},
	  {"stop":"373", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:49(55)", "s":""}, "depart":{"default":"10:50(35)", "s":""}},
	  {"stop":"372", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:52(00)", "s":""}, "depart":{"default":"10:52(40)", "s":""}},
	  {"stop":"371", "track":"4", "line":"JS", "upbound":false, "arrive":{"default":"10:54(05)", "s":""}, "depart":{"default":"10:54(45)", "s":"10:51(30)"}},
	  {"stop":"370", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:56(10)", "s":""}, "depart":{"default":"10:56(50)", "s":""}, "pass":{"default":"", "s":"10:53(15)"}},
	  {"stop":"369", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:58(15)", "s":""}, "depart":{"default":"10:58(55)", "s":""}, "pass":{"default":"", "s":"10:55(15)"}},
	  {"stop":"368", "track":"2", "line":"JS", "upbound":false, "pass":{"default":"10:59(55)", "s":"10:57(15)"}},
	  {"stop":"367", "track":"4", "line":"JS", "upbound":false, "pass":{"default":"11:00(35)", "s":"10:59(20)"}},
	  {"stop":"366", "track":"2", "pass":"11:01(15)"},
	  {"stop":"365", "track":"2", "pass":"11:01(50)"},
	  //
	  {"stop":"363", "track":"2", "pass":"11:03(10)"},
	  {"stop":"362", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:04(10)", "s":""}, "depart":{"default":"11:04(50)", "s":""}, "pass":{"default":"", "s":"11:04(30)"}},
	  {"stop":"361", "track":"2", "pass":"11:06(00)"},
	  {"stop":"139", "track":"8", "arrive":"11:07(30)"},
	],
  };
  global.train_patterns["JS81"] = {
	"trainType": "#",
	"pivot": "12:50",
	"label": "区間急行 回送列車（上リ：折り返線A ➜ 麥急上水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"139", "track":"A", "depart":"12:41(15)"},
	  {"stop":"139", "track":"7", "arrive":"12:44(00)"},
	],
  };
  global.train_patterns["JS82"] = {
	"trainType": "#",
	"pivot": "11:10",
	"label": "区間急行 回送列車（下リ：麥急上水 ➜ 折り返線A）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":"8", "depart":"11:08(30)"},
	  {"stop":"139", "track":"A", "arrive":"11:11(15)"},
	],
  };

global.train_patterns["JS07"] = {
	"trainType": "LOC",
	"pivot": "12:40", "consist": "N08",
	"label": "各駅停車 上水南線（上リ：麥急上水 ➜ 花都）",
	"refTime": {"JS": "12:36(10)"},
	"remarks": "最高速度100km/h、8両編成。",
	"upbound": true, "template": [
	  {"stop":"139", "track":"7", "line":"JS", "upbound":true, "depart":"12:36(10)"},
	  {"stop":"361", "track":"1", "line":"JS", "upbound":true, "arrive":"12:38(20)", "depart":"12:38(55)"},
	  {"stop":"362", "track":"1", "line":"JS", "upbound":true, "arrive":"12:40(20)", "depart":"12:41(00)"},
	  {"stop":"363", "track":"1", "line":"JS", "upbound":true, "arrive":"12:42(25)", "depart":"12:43(00)"},
	  {"stop":"364", "track":"1", "line":"JS", "upbound":true, "arrive":"12:44(35)", "depart":"12:45(15)"},
	  {"stop":"365", "track":"1", "line":"JS", "upbound":true, "arrive":"12:46(45)", "depart":"12:47(20)"},
	  {"stop":"366", "track":"1", "line":"JS", "upbound":true, "arrive":"12:48(40)", "depart":"12:49(15)"},
	  {"stop":"367", "track":"2", "arrive":"12:50(40)"},
	],
  };
  global.train_patterns["JS08"] = {
	"trainType": "LOC",
	"pivot": "11:20", "consist": "N08",
	"label": "各駅停車 上水南線（下リ：花都 ➜ 麥急上水）",
	"remarks": "最高速度100km/h、8両編成。",
	"refTime": {"JS": "11:16(20)"},
	"upbound": false, "template": [
	  {"stop":"367", "track":"3", "line":"JS", "upbound":false, "depart":"11:01(35)"},
	  {"stop":"366", "track":"2", "line":"JS", "upbound":false, "arrive":"11:03(00)", "depart":"11:03(35)"},
	  {"stop":"365", "track":"2", "line":"JS", "upbound":false, "arrive":"11:04(55)", "depart":"11:05(30)"},
	  {"stop":"364", "track":"2", "line":"JS", "upbound":false, "arrive":"11:07(00)", "depart":"11:07(40)"},
	  {"stop":"363", "track":"2", "line":"JS", "upbound":false, "arrive":"11:09(15)", "depart":"11:09(50)"},
	  {"stop":"362", "track":"2", "line":"JS", "upbound":false, "arrive":"11:11(15)", "depart":"11:11(55)"},
	  {"stop":"361", "track":"2", "line":"JS", "upbound":false, "arrive":"11:13(20)", "depart":"11:13(55)"},
	  {"stop":"139", "track":"8", "arrive":"11:16(20)"},
	],
  };
  global.train_patterns["JS87"] = {
	"trainType": "#",
	"pivot": "12:40",
	"label": "区間急行 回送列車（上リ：折り返線A ➜ 麥急上水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"139", "track":"A", "depart":"12:31(15)"},
	  {"stop":"139", "track":"7", "arrive":"12:35(10)"},
	],
  };
  global.train_patterns["JS88"] = {
	"trainType": "#",
	"pivot": "11:20",
	"label": "区間急行 回送列車（下リ：麥急上水 ➜ 折り返線A）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":"8", "depart":"11:17(20)"},
	  {"stop":"139", "track":"A", "arrive":"11:21(15)"},
	],
};

global.train_patterns["JS09"] = {
	"trainType": "LOC",
	"pivot": "12:40", "consist": "N08",
	"label": "各駅停車 上水南線（上リ：麥急上水 ➜ 清河南）",
	"refTime": {"JS": {"default":"12:40(00)", "a":"12:40(00)", "b":"12:45(00)"}},
	"remarks": "最高速度120km/h、8両編成。[a] 区間急行 (JS01) 運転ない時 [b] 快速急行 (EE05) 運転ない時",
	"upbound": true, "template": [
	  {"stop":"139", "track":"7", "line":"JS", "upbound":true, "depart":{"default":"12:40(00)", "a":"12:40(00)", "b":"12:45(00)"}},
	  {"stop":"361", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:42(10)", "a":"12:42(10)", "b":"12:47(10)"}, "depart":{"default":"12:42(45)", "a":"12:42(45)", "b":"12:47(45)"}},
	  {"stop":"362", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:44(10)", "a":"12:44(10)", "b":"12:49(10)"}, "depart":{"default":"12:44(50)", "a":"12:44(50)", "b":"12:49(50)"}},
	  {"stop":"363", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:46(15)", "a":"12:46(15)", "b":"12:51(15)"}, "depart":{"default":"12:46(50)", "a":"12:46(50)", "b":"12:51(50)"}},
	  {"stop":"364", "track":{"default": "1", "alt364": "2"}, "line":"JS", "upbound":true, "arrive":{"default":"12:48(25)", "a":"12:48(25)", "b":"12:53(25)"}, "depart":{"default":"12:50(55)", "a":"12:49(05)", "b":"12:54(05)"}},
	  {"stop":"365", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:52(25)", "a":"12:50(35)", "b":"12:55(35)"}, "depart":{"default":"12:53(00)", "a":"12:51(10)", "b":"12:56(10)"}},
	  {"stop":"366", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:54(20)", "a":"12:52(30)", "b":"12:57(30)"}, "depart":{"default":"12:54(55)", "a":"12:53(05)", "b":"12:58(05)"}},
	  {"stop":"367", "track":{"default": "1", "alt367": "2"}, "line":"JS", "upbound":true, "arrive":{"default":"12:56(20)", "a":"12:54(30)", "b":"12:59(30)"}, "depart":{"default":"12:57(00)", "a":"12:55(10)", "b":"13:00(10)"}},
	  {"stop":"368", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:58(25)", "a":"12:56(35)", "b":"13:01(35)"}, "depart":{"default":"12:59(00)", "a":"12:57(10)", "b":"13:02(10)"}},
	  {"stop":"369", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:00(25)", "a":"12:58(35)", "b":"13:03(35)"}, "depart":{"default":"13:01(00)", "a":"12:59(10)", "b":"13:04(10)"}},
	  {"stop":"370", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:02(25)", "a":"13:00(35)", "b":"13:05(35)"}, "depart":{"default":"13:03(00)", "a":"13:01(10)", "b":"13:06(10)"}},
	  {"stop":"371", "track":{"default": "2", "b": "1"}, "line":"JS", "upbound":true, "arrive":{"default":"13:04(35)", "a":"13:02(45)", "b":"13:07(45)"}, "depart":{"default":"13:08(20)", "a":"13:08(20)", "b":"13:08(20)"}},
	  {"stop":"372", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:09(55)", "a":"13:09(55)", "b":"13:09(55)"}, "depart":{"default":"13:10(35)", "a":"13:10(35)", "b":"13:10(35)"}},
	  {"stop":"373", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:12(00)", "a":"13:12(00)", "b":"13:12(00)"}, "depart":{"default":"13:12(35)", "a":"13:12(35)", "b":"13:12(35)"}},
	  {"stop":"374", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:14(00)", "a":"13:14(00)", "b":"13:14(00)"}, "depart":{"default":"13:14(40)", "a":"13:14(40)", "b":"13:14(40)"}},
	  {"stop":"375", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:16(50)", "a":"13:16(50)", "b":"13:16(50)"}, "depart":{"default":"13:17(25)", "a":"13:17(25)", "b":"13:17(25)"}},
	  {"stop":"376", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:19(05)", "a":"13:19(05)", "b":"13:19(05)"}, "depart":{"default":"13:19(45)", "a":"13:19(45)", "b":"13:19(45)"}},
	  {"cross":"377_c", "start":{"default":"13:21(45)", "x":"13:20(45)"}, "end":{"default":"13:23(00)", "x":"13:22(00)"}},
	  {"stop":"377", "track":"3", "arrive":{"default":"13:23(00)", "x":"13:22(00)"}},
	],
  };
  global.train_patterns["JS10"] = {
	"trainType": "LOC",
	"pivot": "11:20", "consist": "N08",
	"label": "各駅停車 上水南線（下リ：清河南 ➜ 麥急上水）",
	"refTime": {"JS": {"default":"11:12(30)", "a":"11:12(30)", "b":"11:07(30)"}},
	"remarks": "最高速度120km/h、8両編成。[a] 区間急行 (JS02) 運転ない時 [b] 快速急行 (EE06) 運転ない時",
	"upbound": false, "template": [
	  {"stop":"377", "track":"3", "line":"JS", "upbound":false, "depart":{"default":"10:30(30)", "a":"10:30(30)", "b":"10:30(30)"}},
	  {"stop":"376", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:32(15)", "a":"10:32(15)", "b":"10:32(15)"}, "depart":{"default":"10:32(55)", "a":"10:32(55)", "b":"10:32(55)"}},
	  {"stop":"375", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:34(35)", "a":"10:34(35)", "b":"10:34(35)"}, "depart":{"default":"10:35(10)", "a":"10:35(10)", "b":"10:35(10)"}},
	  {"stop":"374", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:37(20)", "a":"10:37(20)", "b":"10:37(20)"}, "depart":{"default":"10:38(00)", "a":"10:38(00)", "b":"10:38(00)"}},
	  {"stop":"373", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:39(25)", "a":"10:39(25)", "b":"10:39(25)"}, "depart":{"default":"10:40(00)", "a":"10:40(00)", "b":"10:40(00)"}},
	  {"stop":"372", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:41(25)", "a":"10:41(25)", "b":"10:41(25)"}, "depart":{"default":"10:42(05)", "a":"10:42(05)", "b":"10:42(05)"}},
	  {"stop":"371", "track":{"default": "3", "b": "4"}, "line":"JS", "upbound":false, "arrive":{"default":"10:43(40)", "a":"10:43(40)", "b":"10:43(40)"}, "depart":{"default":"10:47(25)", "a":"10:49(15)", "b":"10:44(15)"}},
	  {"stop":"370", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:49(00)", "a":"10:50(50)", "b":"10:45(50)"}, "depart":{"default":"10:49(35)", "a":"10:51(25)", "b":"10:46(25)"}},
	  {"stop":"369", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:51(00)", "a":"10:52(50)", "b":"10:47(50)"}, "depart":{"default":"10:51(35)", "a":"10:53(25)", "b":"10:48(25)"}},
	  {"stop":"368", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:53(00)", "a":"10:54(50)", "b":"10:49(50)"}, "depart":{"default":"10:53(35)", "a":"10:55(25)", "b":"10:50(25)"}},
	  {"stop":"367", "track":{"default": "4", "alt367": "3"}, "line":"JS", "upbound":false, "arrive":{"default":"10:55(00)", "a":"10:56(50)", "b":"10:51(50)"}, "depart":{"default":"10:55(40)", "a":"10:57(30)", "b":"10:52(30)"}},
	  {"stop":"366", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:57(05)", "a":"10:58(55)", "b":"10:53(55)"}, "depart":{"default":"10:57(40)", "a":"10:59(30)", "b":"10:54(30)"}},
	  {"stop":"365", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:59(00)", "a":"11:00(50)", "b":"10:55(50)"}, "depart":{"default":"10:59(35)", "a":"11:01(25)", "b":"10:56(25)"}},
	  {"stop":"364", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:01(05)", "a":"11:02(55)", "b":"10:57(55)"}, "depart":{"default":"11:03(35)", "a":"11:03(35)", "b":"10:58(35)"}},
	  {"stop":"363", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:05(10)", "a":"11:05(10)", "b":"11:00(10)"}, "depart":{"default":"11:05(45)", "a":"11:05(45)", "b":"11:00(45)"}},
	  {"stop":"362", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:07(10)", "a":"11:07(10)", "b":"11:02(10)"}, "depart":{"default":"11:07(50)", "a":"11:07(50)", "b":"11:02(50)"}},
	  {"stop":"361", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:09(15)", "a":"11:09(15)", "b":"11:04(15)"}, "depart":{"default":"11:09(50)", "a":"11:09(50)", "b":"11:04(50)"}},
	  {"stop":"139", "track":"8", "arrive":{"default":"11:12(30)", "a":"11:12(30)", "b":"11:07(30)"}},
	],
  };
  global.train_patterns["JS89"] = {
	"trainType": "#",
	"pivot": "12:40",
	"label": "各駅停車 上水南線（上リ：折り返線C ➜ 麥急上水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"139", "track":"C", "depart":"12:36(15)"},
	  {"stop":"139", "track":"7", "arrive":"12:39(00)"},
	],
  };
  global.train_patterns["JS90"] = {
	"trainType": "#",
	"pivot": "11:20",
	"label": "各駅停車 上水南線（下リ：麥急上水 ➜ 折り返線C）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":"8", "depart":"11:13(30)"},
	  {"stop":"139", "track":"C", "arrive":"11:16(15)"},
	],
  };

global.train_patterns["JS03"] = {
	"trainType": "LOC",
	"pivot": "12:50", "consist": "N08",
	"label": "各駅停車 上水南線（上リ：麥急上水 ➜ 加福町）",
	"refTime": {"JS": {"default":"12:46(00)", "a":"12:45(00)"}},
	"remarks": "最高速度100km/h、8両編成。[a] 区間急行 (JS01) 運転ない時",
	"upbound": true, "template": [
	  {"stop":"139", "track":{"default": "3", "a": "7"}, "line":"JS", "upbound":true, "depart":{"default":"12:46(00)", "a":"12:45(00)"}},
	  {"stop":"361", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:48(20)", "a":"12:47(10)"}, "depart":{"default":"12:48(55)", "a":"12:47(45)"}},
	  {"stop":"362", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:50(20)", "a":"12:49(10)"}, "depart":{"default":"12:51(00)", "a":"12:49(50)"}},
	  {"stop":"363", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:52(25)", "a":"12:51(15)"}, "depart":{"default":"12:53(00)", "a":"12:51(50)"}},
	  {"stop":"364", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:54(35)", "a":"12:53(25)"}, "depart":{"default":"12:55(15)", "a":"12:54(05)"}},
	  {"stop":"365", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:56(45)", "a":"12:55(35)"}, "depart":{"default":"12:57(20)", "a":"12:56(10)"}},
	  {"stop":"366", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:58(40)", "a":"12:57(30)"}, "depart":{"default":"12:59(15)", "a":"12:58(05)"}},
	  {"stop":"367", "track":"2", "line":"JS", "upbound":true, "arrive":{"default":"13:00(50)", "a":"12:59(40)"}, "depart":{"default":"13:04(05)", "a":"13:04(05)"}},
	  {"stop":"368", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:05(40)", "a":"13:05(40)"}, "depart":{"default":"13:06(15)", "a":"13:06(15)"}},
	  {"stop":"369", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:07(40)", "a":"13:07(40)"}, "depart":{"default":"13:08(15)", "a":"13:08(15)"}},
	  {"stop":"370", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:09(40)", "a":"13:09(40)"}, "depart":{"default":"13:10(15)", "a":"13:10(15)"}},
	  {"stop":"371", "track":"2", "arrive":{"default":"13:11(50)", "a":"13:11(50)"}},
	],
  };
  global.train_patterns["JS04"] = {
	"trainType": "LOC",
	"pivot": "11:10", "consist": "N08",
	"label": "各駅停車 上水南線（下リ：加福町 ➜ 麥急上水）",
	"refTime": {"JS": {"default":"11:06(30)", "a":"11:07(30)"}},
	"remarks": "最高速度100km/h、8両編成。[a] 区間急行 (JS02) 運転ない時",
	"upbound": false, "template": [
	  {"stop":"371", "track":"3", "line":"JS", "upbound":false, "depart":{"default":"10:40(10)", "a":"10:40(10)"}},
	  {"stop":"370", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:41(45)", "a":"10:41(45)"}, "depart":{"default":"10:42(20)", "a":"10:42(20)"}},
	  {"stop":"369", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:43(45)", "a":"10:43(45)"}, "depart":{"default":"10:44(20)", "a":"10:44(20)"}},
	  {"stop":"368", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:45(45)", "a":"10:45(45)"}, "depart":{"default":"10:46(20)", "a":"10:46(20)"}},
	  {"stop":"367", "track":"3", "line":"JS", "upbound":false, "arrive":{"default":"10:47(55)", "a":"10:47(55)"}, "depart":{"default":"10:51(35)", "a":"10:52(35)"}},
	  {"stop":"366", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:53(10)", "a":"10:54(10)"}, "depart":{"default":"10:53(45)", "a":"10:54(45)"}},
	  {"stop":"365", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:55(05)", "a":"10:56(05)"}, "depart":{"default":"10:55(40)", "a":"10:56(40)"}},
	  {"stop":"364", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:57(10)", "a":"10:58(10)"}, "depart":{"default":"10:57(50)", "a":"10:58(50)"}},
	  {"stop":"363", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:59(25)", "a":"11:00(25)"}, "depart":{"default":"11:00(00)", "a":"11:01(00)"}},
	  {"stop":"362", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:01(25)", "a":"11:02(25)"}, "depart":{"default":"11:02(05)", "a":"11:03(05)"}},
	  {"stop":"361", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"11:03(30)", "a":"11:04(30)"}, "depart":{"default":"11:04(05)", "a":"11:05(05)"}},
	  {"stop":"139", "track":{"default": "4", "a": "8"}, "arrive":{"default":"11:06(30)", "a":"11:07(30)"}},
	],
  };
  global.train_patterns["JS83"] = {
	"trainType": "#",
	"pivot": "12:50",
	"label": "各駅停車 回送列車（上リ：折り返線B/A ➜ 麥急上水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"139", "track":{"default": "B", "a": "A"}, "depart":"12:41(15)"},
	  {"stop":"139", "track":{"default": "3", "a": "7"}, "arrive":{"default":"12:45(00)", "a":"12:44(00)"}},
	],
  };
  global.train_patterns["JS84"] = {
	"trainType": "#",
	"pivot": "11:10",
	"label": "各駅停車 回送列車（下リ：麥急上水 ➜ 折り返線B/A）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":{"default": "4", "a": "8"}, "depart":{"default":"11:07(30)", "a":"11:08(30)"}},
	  {"stop":"139", "track":{"default": "B", "a": "A"}, "arrive":"11:11(15)"},
	],
};

global.train_patterns["JS05"] = {
	"trainType": "LOC",
	"pivot": "12:50", "consist": "N08",
	"label": "各駅停車 上水南線（上リ：麥急上水 ➜ 清河南）",
	"refTime": {"JS": {"default":"12:50(00)", "a":"12:50(00)", "b":"12:55(00)"}},
	"remarks": "最高速度120km/h、8両編成。[a] 区間急行 (JS01) 運転ない時 [b] 快速急行 (EE05) 運転ない時",
	"upbound": true, "template": [
	  {"stop":"139", "track":"7", "line":"JS", "upbound":true, "depart":{"default":"12:50(00)", "a":"12:50(00)", "b":"12:55(00)"}},
	  {"stop":"361", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:52(10)", "a":"12:52(10)", "b":"12:57(10)"}, "depart":{"default":"12:52(45)", "a":"12:52(45)", "b":"12:57(45)"}},
	  {"stop":"362", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:54(10)", "a":"12:54(10)", "b":"12:59(10)"}, "depart":{"default":"12:54(50)", "a":"12:54(50)", "b":"12:59(50)"}},
	  {"stop":"363", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:56(15)", "a":"12:56(15)", "b":"13:01(15)"}, "depart":{"default":"12:56(50)", "a":"12:56(50)", "b":"13:01(50)"}},
	  {"stop":"364", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"12:58(25)", "a":"12:58(25)", "b":"13:03(25)"}, "depart":{"default":"13:00(55)", "a":"13:00(55)", "b":"13:04(05)"}},
	  {"stop":"365", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:02(25)", "a":"13:02(25)", "b":"13:05(35)"}, "depart":{"default":"13:03(00)", "a":"13:03(00)", "b":"13:06(10)"}},
	  {"stop":"366", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:04(20)", "a":"13:04(20)", "b":"13:07(30)"}, "depart":{"default":"13:04(55)", "a":"13:04(55)", "b":"13:08(05)"}},
	  {"stop":"367", "track":{"default": "1", "alt367": "2"}, "line":"JS", "upbound":true, "arrive":{"default":"13:06(20)", "a":"13:06(20)", "b":"13:09(30)"}, "depart":{"default":"13:07(00)", "a":"13:10(30)", "b":"13:10(10)"}},
	  {"stop":"368", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:08(25)", "a":"13:11(55)", "b":"13:11(35)"}, "depart":{"default":"13:09(00)", "a":"13:12(30)", "b":"13:12(10)"}},
	  {"stop":"369", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:10(25)", "a":"13:13(55)", "b":"13:13(35)"}, "depart":{"default":"13:11(00)", "a":"13:14(30)", "b":"13:14(10)"}},
	  {"stop":"370", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:12(25)", "a":"13:15(55)", "b":"13:15(35)"}, "depart":{"default":"13:13(00)", "a":"13:16(30)", "b":"13:16(10)"}},
	  {"stop":"371", "track":{"default": "1", "alt371": "2"}, "line":"JS", "upbound":true, "arrive":{"default":"13:14(25)", "a":"13:17(55)", "b":"13:17(45)"}, "depart":{"default":"13:15(05)", "a":"13:18(35)", "b":"13:18(20)"}},
	  {"stop":"372", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:16(30)", "a":"13:20(00)", "b":"13:19(55)"}, "depart":{"default":"13:17(05)", "a":"13:20(35)", "b":"13:20(35)"}},
	  {"stop":"373", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:18(30)", "a":"13:22(00)", "b":"13:22(00)"}, "depart":{"default":"13:19(05)", "a":"13:22(35)", "b":"13:22(35)"}},
	  {"stop":"374", "track":{"default": "1", "alt374": "1"}, "line":"JS", "upbound":true, "arrive":{"default":"13:20(30)", "a":"13:24(00)", "b":"13:24(00)"}, "depart":{"default":"13:21(10)", "a":"13:24(40)", "b":"13:24(40)"}},
	  {"stop":"375", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:23(20)", "a":"13:26(50)", "b":"13:26(50)"}, "depart":{"default":"13:23(55)", "a":"13:27(25)", "b":"13:27(25)"}},
	  {"stop":"376", "track":"1", "line":"JS", "upbound":true, "arrive":{"default":"13:25(35)", "a":"13:29(05)", "b":"13:29(05)"}, "depart":{"default":"13:26(15)", "a":"13:29(45)", "b":"13:29(45)"}},
	  {"cross":"377_c", "start":{"default":"13:27(15)", "a":"13:30(45)", "b":"13:30(45)"}, "end":{"default":"13:28(30)", "a":"13:32(00)", "b":"13:32(00)"}},
	  {"stop":"377", "track":"2", "arrive":{"default":"13:28(30)", "a":"13:32(00)", "b":"13:32(00)"}},
	],
  };
  global.train_patterns["JS06"] = {
	"trainType": "LOC",
	"pivot": "11:10", "consist": "N08",
	"label": "各駅停車 上水南線（下リ：清河南 ➜ 麥急上水）",
	"refTime": {"JS": {"default":"11:02(30)", "a":"11:02(30)", "b":"10:57(30)"}},
	"remarks": "最高速度120km/h、8両編成。[a] 区間急行 (JS02) 運転ない時 [b] 快速急行 (EE06) 運転ない時",
	"upbound": false, "template": [
	  {"stop":"377", "track":"2", "line":"JS", "upbound":false, "depart":{"default":"10:24(00)", "a":"10:20(30)", "b":"10:20(30)"}},
	  {"cross":"377_c", "start":{"default":"10:24(00)", "a":"10:20(30)", "b":"10:20(30)"}, "end":{"default":"10:25(15)", "a":"10:21(45)", "b":"10:21(45)"}},
	  {"stop":"376", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:25(45)", "a":"10:22(15)", "b":"10:22(15)"}, "depart":{"default":"10:26(25)", "a":"10:22(55)", "b":"10:22(55)"}},
	  {"stop":"375", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:28(05)", "a":"10:24(35)", "b":"10:24(35)"}, "depart":{"default":"10:28(40)", "a":"10:25(10)", "b":"10:25(10)"}},
	  {"stop":"374", "track":{"default": "2", "alt374": "1"}, "line":"JS", "upbound":false, "arrive":{"default":"10:30(50)", "a":"10:27(20)", "b":"10:27(20)"}, "depart":{"default":"10:31(30)", "a":"10:28(00)", "b":"10:28(00)"}},
	  {"stop":"373", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:32(55)", "a":"10:29(25)", "b":"10:29(25)"}, "depart":{"default":"10:33(30)", "a":"10:30(00)", "b":"10:30(00)"}},
	  {"stop":"372", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:34(55)", "a":"10:31(25)", "b":"10:31(25)"}, "depart":{"default":"10:35(30)", "a":"10:32(00)", "b":"10:32(05)"}},
	  {"stop":"371", "track":{"default": "4", "alt371": "3"}, "line":"JS", "upbound":false, "arrive":{"default":"10:36(55)", "a":"10:33(25)", "b":"10:33(40)"}, "depart":{"default":"10:37(35)", "a":"10:34(05)", "b":"10:34(15)"}},
	  {"stop":"370", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:39(00)", "a":"10:35(30)", "b":"10:35(50)"}, "depart":{"default":"10:39(35)", "a":"10:36(05)", "b":"10:36(25)"}},
	  {"stop":"369", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:41(00)", "a":"10:37(30)", "b":"10:37(50)"}, "depart":{"default":"10:41(35)", "a":"10:38(05)", "b":"10:38(25)"}},
	  {"stop":"368", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:43(00)", "a":"10:39(30)", "b":"10:39(50)"}, "depart":{"default":"10:43(35)", "a":"10:40(05)", "b":"10:40(25)"}},
	  {"stop":"367", "track":{"default": "4", "alt367": "3"}, "line":"JS", "upbound":false, "arrive":{"default":"10:45(00)", "a":"10:41(30)", "b":"10:41(50)"}, "depart":{"default":"10:45(40)", "a":"10:45(40)", "b":"10:42(30)"}},
	  {"stop":"366", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:47(05)", "a":"10:47(05)", "b":"10:43(55)"}, "depart":{"default":"10:47(40)", "a":"10:47(40)", "b":"10:44(30)"}},
	  {"stop":"365", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:49(00)", "a":"10:49(00)", "b":"10:45(50)"}, "depart":{"default":"10:49(35)", "a":"10:49(35)", "b":"10:46(25)"}},
	  {"stop":"364", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:51(05)", "a":"10:51(05)", "b":"10:47(55)"}, "depart":{"default":"10:53(35)", "a":"10:53(35)", "b":"10:48(35)"}},
	  {"stop":"363", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:55(10)", "a":"10:55(10)", "b":"10:50(10)"}, "depart":{"default":"10:55(45)", "a":"10:55(45)", "b":"10:50(45)"}},
	  {"stop":"362", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:57(10)", "a":"10:57(10)", "b":"10:52(10)"}, "depart":{"default":"10:57(50)", "a":"10:57(50)", "b":"10:52(50)"}},
	  {"stop":"361", "track":"2", "line":"JS", "upbound":false, "arrive":{"default":"10:59(15)", "a":"10:59(15)", "b":"10:54(15)"}, "depart":{"default":"10:59(50)", "a":"10:59(50)", "b":"10:54(50)"}},
	  {"stop":"139", "track":"8", "arrive":{"default":"11:02(30)", "a":"11:02(30)", "b":"10:57(30)"}},
	],
  };
  global.train_patterns["JS85"] = {
	"trainType": "#",
	"pivot": "12:50",
	"label": "各駅停車 上水南線（上リ：折り返線C ➜ 麥急上水）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"139", "track":"C", "depart":"12:46(15)"},
	  {"stop":"139", "track":"7", "arrive":"12:49(00)"},
	],
  };
  global.train_patterns["JS86"] = {
	"trainType": "#",
	"pivot": "11:10",
	"label": "各駅停車 上水南線（下リ：麥急上水 ➜ 折り返線C）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"139", "track":"8", "depart":"11:03(30)"},
	  {"stop":"139", "track":"C", "arrive":"11:06(15)"},
	],
  };

//Non-Revenue

global.train_patterns["JS51"] = {
	"trainType": "#",
	"pivot": "12:50",
	"label": "回送列車 上水南線（上リ：花都 ➜ 加福町車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"367", "track":"2", "depart":"12:52(40)"},
	  {"stop":"368", "track":"1", "pass":"12:54(40)"},
	  {"stop":"369", "track":"1", "pass":"12:56(40)"},
	  {"stop":"370", "track":"1", "pass":"12:58(40)"},
	  {"stop":"371", "track":"2", "pass":"13:00(40)"},
	  {"stop":"KFK", "track":"0", "arrive":"13:02(00)"},
	],
  };
  global.train_patterns["JS52"] = {
	"trainType": "#",
	"pivot": "11:01",
	"label": "回送列車 上水南線（下リ：加福町車両基地 ➜ 花都）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KFK", "track":"0", "depart":"10:50(00)"},
	  {"stop":"371", "track":"3", "pass":"10:51(30)"},
	  {"stop":"370", "track":"2", "pass":"10:53(30)"},
	  {"stop":"369", "track":"2", "pass":"10:55(30)"},
	  {"stop":"368", "track":"2", "pass":"10:57(30)"},
	  {"stop":"367", "track":"3", "arrive":"10:59(30)"},
	],
  };
  global.train_patterns["JS53"] = {
	"trainType": "#",
	"pivot": "13:12",
	"label": "回送列車 上水南線（上リ：加福町 ➜ 加福町車両基地）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"371", "track":"2", "depart":"13:13(00)"},
	  {"stop":"KFK", "track":"0", "arrive":"13:14(00)"},
	],
  };
  global.train_patterns["JS54"] = {
	"trainType": "#",
	"pivot": "10:40",
	"label": "回送列車 上水南線（下リ：加福町車両基地 ➜ 加福町）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"KFK", "track":"0", "depart":"10:38(00)"},
	  {"stop":"371", "track":"3", "arrive":"10:39(00)"},
	],
  };
  global.train_patterns["JS55"] = {
	"trainType": "#",
	"pivot": "13:10",
	"label": "回送列車 上水南線（上リ：加福町車両基地 ➜ 馬色町）",
	"remarks": "",
	"upbound": true, "template": [
	  {"stop":"KFK", "track":"0", "depart":"13:10(00)"},
	  {"stop":"373", "track":"1", "arrive":"13:11(30)"},
	],
  };
  global.train_patterns["JS56"] = {
	"trainType": "#",
	"pivot": "10:41",
	"label": "回送列車 上水南線（下リ：馬色町 ➜ 加福町車両基地）",
	"remarks": "",
	"upbound": false, "template": [
	  {"stop":"373", "track":"2", "depart":"10:40(30)"},
	  {"stop":"KFK", "track":"0", "arrive":"10:42(00)"},
	],
  };