/**
 * [B] Tairi Line System (via Tairi Station)
 */

global.train_patterns["B11"] = {
	"trainType": "ADL",
	"pivot": "12:00", "consist": "a05",
	"label": "大理線運用列車（上リ：大理 ➜ 広田）",
	"refTime": {AT: "12:03(59)", AD: "12:03(59)"},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "depart":{"default":"11:41(00)", "a": "11:42(00)"}},
	  {"stop":"752", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"11:42(55)", "a": "11:43(55)"}, "depart":{"default":"11:43(25)", "a": "11:44(25)"}},
	  {"stop":"753", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"11:45(30)", "a": "11:46(30)"}, "depart":{"default":"11:46(00)", "a": "11:47(00)"}},
	  {"stop":"754", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"11:50(00)", "a": "11:51(00)"}, "depart":{"default":"11:51(20)", "a": "11:51(25)"}},
	  {"stop":"755", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"11:54(05)", "a": "11:54(10)"}, "depart":{"default":"11:54(35)", "a": "11:54(35)"}},
	  {"stop":"756", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"11:57(20)", "a": "11:57(20)"}, "depart":{"default":"11:57(50)", "a": "11:57(50)"}},
	  {"stop":"757", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"11:59(20)", "a": "11:59(20)"}, "depart":{"default":"11:59(50)", "a": "11:59(50)"}},
	  {"stop":"758", "track":"1", "line":"AT", "upbound":true, "arrive":"12:02(30)", "depart":"12:03(00)"},
	  {"stop":"716", "track":"1", "line":"AD", "upbound":true, "arrive":"12:04(00)", "depart":"12:05(30)"},
	  {"stop":"717", "track":"1", "line":"AD", "upbound":true, "arrive":"12:07(25)", "depart":"12:08(00)"},
	  {"stop":"718", "track":"1", "line":"AD", "upbound":true, "arrive":"12:09(35)"},
	],
  };
  global.train_patterns["B12"] = {
	"trainType": "ADL",
	"pivot": "12:00", "consist": "a05",
	"label": "大理線運用列車（下リ：広田 ➜ 大理）",
	"refTime": {AT: "11:57(01)", AD: "11:57(01)"},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"718", "track":"2", "line":"AD", "upbound":false, "depart":"11:51(05)"},
	  {"stop":"717", "track":"2", "line":"AD", "upbound":false, "arrive":"11:52(40)", "depart":"11:53(15)"},
	  {"stop":"716", "track":"3", "line":"AT", "upbound":false, "arrive":"11:55(30)", "depart":"11:57(00)"},
	  {"stop":"758", "track":"3", "line":"AT", "upbound":false, "arrive":"11:58(00)", "depart":"11:58(30)"},
	  {"stop":"757", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"12:00(50)", "a": "12:00(50)"}, "depart":{"default":"12:01(20)", "a": "12:01(20)"}},
	  {"stop":"756", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"12:02(50)", "a": "12:02(50)"}, "depart":{"default":"12:03(20)", "a": "12:03(20)"}},
	  {"stop":"755", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"12:06(30)", "a": "12:06(30)"}, "depart":{"default":"12:07(00)", "a": "12:06(55)"}},
	  {"stop":"754", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"12:10(10)", "a": "12:10(05)"}, "depart":{"default":"12:11(30)", "a": "12:10(30)"}},
	  {"stop":"753", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"12:16(05)", "a": "12:15(05)"}, "depart":{"default":"12:16(35)", "a": "12:15(35)"}},
	  {"stop":"752", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"12:19(05)", "a": "12:18(05)"}, "depart":{"default":"12:19(35)", "a": "12:18(35)"}},
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "arrive":{"default":"12:21(30)", "a": "12:20(30)"}},
	],
  };
  global.train_patterns["B51"] = {
	"trainType": "#",
	"pivot": "12:00", "consist": "",
	"label": "大理線運用列車（上リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"B", "line":"AT", "upbound":true, "depart":"11:38(45)"},
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "arrive":"11:40(00)"},
	],
  };
  global.train_patterns["B52"] = {
	"trainType": "#",
	"pivot": "12:00", "consist": "",
	"label": "大理線運用列車（下リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "depart":"12:22(30)"},
	  {"stop":"145", "track":"B", "line":"AT", "upbound":false, "arrive":"12:23(45)"},
	],
  };

  global.train_patterns["B13"] = {
	"trainType": {"default": "ADR", "p": "ADC", "n": "ADL", "local": "ADL"},
	"pivot": "12:00", "consist": "a05",
	"label": "大理線運用列車（上リ：大理 ➜ 安達）",
	"refTime": {AT: {"default":"12:06(30)", "p": "12:04(00)"}},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "depart":{"default":"11:49(00)", "n": "11:45(30)"}},
	  {"stop":"752", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"", "n": "11:47(25)"}, "depart":{"default":"", "n": "11:47(55)"}, "pass":{"default":"115040通", "n": ""}},
	  {"stop":"753", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"", "n": "11:50(00)"}, "depart":{"default":"", "n": "11:50(30)"}, "pass":{"default":"115215通", "n": ""}},
	  {"stop":"755", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"", "n": "11:57(40)"}, "depart":{"default":"", "n": "11:58(05)"}, "pass":{"default":"115750通", "n": ""}},
	  {"stop":"756", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"12:00(20)", "n": "12:00(50)"}, "depart":{"default":"12:00(50)", "n": "12:01(20)"}, "pass":{"default":"", "p": "120005通"}},
	  {"stop":"757", "track":"1", "line":"AT", "upbound":true, "arrive":{"default":"12:02(20)", "n": "12:02(50)"}, "depart":{"default":"12:02(50)", "n": "12:03(20)"}, "pass":{"default":"", "p": "120105通"}},
	  {"stop":"716", "track":"2", "line":"AA", "upbound":true, "arrive":{"default":"12:06(30)", "p": "12:04(00)"}, "depart":{"default":"12:08(00)", "p": "12:05(30)"}},
	  {"stop":"731", "track":"1", "line":"AA", "upbound":true, "arrive":{"default":"12:09(50)", "p": "12:07(20)"}, "depart":{"default":"12:10(25)", "p": "12:07(55)"}},
	  {"stop":"732", "track":"1", "line":"AA", "upbound":true, "arrive":{"default":"12:11(55)", "p": "12:09(25)"}, "depart":{"default":"12:12(30)", "p": "12:10(00)"}},
	  {"stop":"733", "track":"1", "line":"AA", "upbound":true, "arrive":{"default":"12:14(00)", "p": "12:11(30)"}, "depart":{"default":"12:14(35)", "p": "12:12(05)"}},
	  {"stop":"734", "track":"1", "line":"AA", "upbound":true, "arrive":{"default":"12:16(55)", "p": "12:14(25)"}, "depart":{"default":"12:17(30)", "p": "12:15(00)"}},
	  {"stop":"735", "track":"2", "line":"AA", "upbound":true, "arrive":{"default":"12:19(00)", "p": "12:16(30)"}},
	],
  };
  global.train_patterns["B14"] = {
	"trainType": {"default": "ADR", "p": "ADC", "n": "ADL", "local": "ADL"},
	"pivot": "12:00", "consist": "a05",
	"label": "大理線運用列車（下リ：安達 ➜ 大理）",
	"refTime": {AT: {"default":"11:54(30)", "p": "11:57(00)"}},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"735", "track":"2", "line":"AA", "upbound":false, "depart":{"default":"11:42(00)", "p": "11:44(30)"}},
	  {"stop":"734", "track":"2", "line":"AA", "upbound":false, "arrive":{"default":"11:43(15)", "p": "11:45(45)"}, "depart":{"default":"11:43(50)", "p": "11:46(20)"}},
	  {"stop":"733", "track":"2", "line":"AA", "upbound":false, "arrive":{"default":"11:46(10)", "p": "11:48(40)"}, "depart":{"default":"11:46(45)", "p": "11:49(15)"}},
	  {"stop":"732", "track":"2", "line":"AA", "upbound":false, "arrive":{"default":"11:48(15)", "p": "11:50(45)"}, "depart":{"default":"11:48(50)", "p": "11:51(20)"}},
	  {"stop":"731", "track":"2", "line":"AA", "upbound":false, "arrive":{"default":"11:50(20)", "p": "11:52(50)"}, "depart":{"default":"11:50(55)", "p": "11:53(25)"}},
	  {"stop":"716", "track":"4", "line":"AT", "upbound":false, "arrive":{"default":"11:53(00)", "p": "11:55(30)"}, "depart":{"default":"11:54(30)", "p": "11:57(00)"}},
	  {"stop":"757", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"11:57(50)", "n": "11:57(20)"}, "depart":{"default":"11:58(20)", "n": "11:57(50)"}, "pass":{"default":"", "p": "115935通"}},
	  {"stop":"756", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"11:59(50)", "n": "11:59(20)"}, "depart":{"default":"12:00(20)", "n": "11:59(50)"}, "pass":{"default":"", "p": "120035通"}},
	  {"stop":"755", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"", "n": "12:03(00)"}, "depart":{"default":"", "n": "12:03(25)"}, "pass":{"default":"120315通", "n": ""}},
	  {"stop":"753", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"", "n": "12:11(35)"}, "depart":{"default":"", "n": "12:12(05)"}, "pass":{"default":"120950通", "n": ""}},
	  {"stop":"752", "track":"2", "line":"AT", "upbound":false, "arrive":{"default":"", "n": "12:14(35)"}, "depart":{"default":"", "n": "12:15(05)"}, "pass":{"default":"121150通", "n": ""}},
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "arrive":{"default":"12:13(30)", "n": "12:17(00)"}},
	],
  };
  global.train_patterns["B53"] = {
	"trainType": "#",
	"pivot": "12:00", "consist": "",
	"label": "大理線運用列車（上リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":{"default": "A", "n": "B"}, "line":"AT", "upbound":true, "depart":{"default":"11:46(15)", "n": "11:41(15)"}},
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "arrive":{"default":"11:47(30)", "n": "11:42(30)"}},
	],
  };
  global.train_patterns["B54"] = {
	"trainType": "#",
	"pivot": "12:00", "consist": "",
	"label": "大理線運用列車（下リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "depart":{"default":"12:15(00)", "n": "12:20(00)"}},
	  {"stop":"145", "track":{"default": "A", "n": "B"}, "line":"AT", "upbound":false, "arrive":{"default":"12:16(15)", "n": "12:21(15)"}},
	],
  };

  global.train_patterns["B15"] = {
	"trainType": "ADL",
	"pivot": "12:10", "consist": "a05",
	"label": "大理線運用列車（上リ：大理 ➜ 藍北中央）",
	"refTime": {AT: "12:08(59)"},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "depart":"11:46(00)"},
	  {"stop":"752", "track":"1", "line":"AT", "upbound":true, "arrive":"11:47(55)", "depart":"11:48(25)"},
	  {"stop":"753", "track":"1", "line":"AT", "upbound":true, "arrive":"11:50(30)", "depart":"11:51(00)"},
	  {"stop":"754", "track":"1", "line":"AT", "upbound":true, "arrive":"11:55(00)", "depart":"11:56(20)"},
	  {"stop":"755", "track":"1", "line":"AT", "upbound":true, "arrive":"11:59(05)", "depart":"11:59(35)"},
	  {"stop":"756", "track":"1", "line":"AT", "upbound":true, "arrive":"12:02(20)", "depart":"12:02(50)"},
	  {"stop":"757", "track":"1", "line":"AT", "upbound":true, "arrive":"12:04(20)", "depart":"12:04(50)"},
	  {"stop":"758", "track":{"default": "2", "alt716": "1"}, "line":"AT", "upbound":true, "arrive":"12:07(30)", "depart":"12:08(00)"},
	  {"stop":"716", "track":{"default": "2", "alt716": "1"}, "line":"AT", "upbound":true, "arrive":"12:09(00)"},
	],
  };
  global.train_patterns["B16"] = {
	"trainType": "ADL",
	"pivot": "11:50", "consist": "a05",
	"label": "大理線運用列車（下リ：藍北中央 ➜ 大理）",
	"refTime": {AT: "11:52(01)"},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"716", "track":{"default": "4", "alt716": "3"}, "line":"AT", "upbound":false, "depart":"11:52(00)"},
	  {"stop":"758", "track":{"default": "4", "alt716": "3"}, "line":"AT", "upbound":false, "arrive":"11:53(00)", "depart":"11:53(30)"},
	  {"stop":"757", "track":"2", "line":"AT", "upbound":false, "arrive":"11:55(50)", "depart":"11:56(20)11:58(20)"},
	  {"stop":"756", "track":"2", "line":"AT", "upbound":false, "arrive":"11:57(50)", "depart":"11:58(20)12:02(00)"},
	  {"stop":"755", "track":"2", "line":"AT", "upbound":false, "arrive":"12:01(30)", "depart":"12:02(00)12:06(30)"},
	  {"stop":"754", "track":"2", "line":"AT", "upbound":false, "arrive":"12:05(10)", "depart":"12:06(30)12:11(35)"},
	  {"stop":"753", "track":"2", "line":"AT", "upbound":false, "arrive":"12:11(05)", "depart":"12:11(35)"},
	  {"stop":"752", "track":"2", "line":"AT", "upbound":false, "arrive":"12:14(05)", "depart":"12:14(35)"},
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "arrive":"12:16(30)"},
	],
  };
  global.train_patterns["B55"] = {
	"trainType": "#",
	"pivot": "12:10", "consist": "",
	"label": "大理線運用列車（上リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"B", "line":"AT", "upbound":true, "depart":"11:43(45)"},
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "arrive":"11:45(00)"},
	],
  };
  global.train_patterns["B56"] = {
	"trainType": "#",
	"pivot": "11:50", "consist": "",
	"label": "大理線運用列車（下リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "depart":"12:17(30)"},
	  {"stop":"145", "track":"B", "line":"AT", "upbound":false, "arrive":"12:18(45)"},
	],
  };

  global.train_patterns["B17"] = {
	"trainType": {"default": "ADC", "local": "ADL"},
	"pivot": "12:10", "consist": "a05",
	"label": "大理線運用列車（上リ：大理 ➜ 康雅）",
	"refTime": {AT: "12:09(00)"},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "depart":"11:54(00)"},
	  {"stop":"752", "track":"1", "line":"AT", "upbound":true, "pass":"115540通"},
	  {"stop":"753", "track":"1", "line":"AT", "upbound":true, "pass":"115715通"},
	  {"stop":"755", "track":"1", "line":"AT", "upbound":true, "pass":"120250通"},
	  {"stop":"756", "track":"1", "line":"AT", "upbound":true, "pass":"120505通"},
	  {"stop":"757", "track":"1", "line":"AT", "upbound":true, "pass":"120605通"},
	  {"stop":"716", "track":"1", "line":"AD", "upbound":true, "arrive":"12:09(00)", "depart":"12:10(30)"},
	  {"stop":"717", "track":"1", "line":"AD", "upbound":true, "arrive":"12:12(25)", "depart":"12:13(00)"},
	  {"stop":"718", "track":"1", "line":"AD", "upbound":true, "arrive":"12:14(35)", "depart":"12:15(10)"},
	  {"stop":"719", "track":"1", "line":"AD", "upbound":true, "arrive":"12:16(45)", "depart":"12:17(20)"},
	  {"stop":"720", "track":"1", "line":"AD", "upbound":true, "arrive":"12:19(15)", "depart":"12:20(20)"},
	  {"stop":"721", "track":"1", "line":"AD", "upbound":true, "arrive":"12:22(00)"},
	],
  };
  global.train_patterns["B18"] = {
	"trainType": {"default": "ADC", "local": "ADL"},
	"pivot": "11:50", "consist": "a05",
	"label": "大理線運用列車（下リ：康雅 ➜ 大理）",
	"refTime": {AT: "11:52(00)"},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"721", "track":"1", "line":"AD", "upbound":false, "depart":"11:38(40)"},
	  {"stop":"720", "track":"2", "line":"AD", "upbound":false, "arrive":"11:40(20)", "depart":"11:41(25)"},
	  {"stop":"719", "track":"2", "line":"AD", "upbound":false, "arrive":"11:43(20)", "depart":"11:43(55)"},
	  {"stop":"718", "track":"2", "line":"AD", "upbound":false, "arrive":"11:45(30)", "depart":"11:46(05)"},
	  {"stop":"717", "track":"2", "line":"AD", "upbound":false, "arrive":"11:47(40)", "depart":"11:48(15)"},
	  {"stop":"716", "track":"3", "line":"AT", "upbound":false, "arrive":"11:50(30)", "depart":"11:52(00)"},
	  {"stop":"757", "track":"2", "line":"AT", "upbound":false, "pass":"115435通"},
	  {"stop":"756", "track":"2", "line":"AT", "upbound":false, "pass":"115535通"},
	  {"stop":"755", "track":"2", "line":"AT", "upbound":false, "pass":"115815通"},
	  {"stop":"753", "track":"2", "line":"AT", "upbound":false, "pass":"120450通"},
	  {"stop":"752", "track":"2", "line":"AT", "upbound":false, "pass":"120650通"},
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "arrive":"12:08(30)"},
	],
  };
  global.train_patterns["B57"] = {
	"trainType": "#",
	"pivot": "12:10", "consist": "",
	"label": "大理線運用列車（上リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": true, "template": [
	  {"stop":"145", "track":"A", "line":"AT", "upbound":true, "depart":"11:51(15)"},
	  {"stop":"145", "track":"7", "line":"AT", "upbound":true, "arrive":"11:52(30)"},
	],
  };
  global.train_patterns["B58"] = {
	"trainType": "#",
	"pivot": "11:50", "consist": "",
	"label": "大理線運用列車（下リ：回送）",
	"refTime": {},  "remarks": "",
	"upbound": false, "template": [
	  {"stop":"145", "track":"8", "line":"AT", "upbound":false, "depart":"12:10(00)"},
	  {"stop":"145", "track":"A", "line":"AT", "upbound":false, "arrive":"12:11(15)"},
	],
  };