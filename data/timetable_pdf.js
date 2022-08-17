global.timetable_pdf = {
    sch_updated: {j: "2019年8月ダイヤ変更", e: "Schedule since August 2019", c: "2019年8月改点", k: "2019년8월 시간표 변경"},
    train_types_overwrite: {
        "LOC": {color: {bg: "#333", text: "white"}},
        "LCL": {color: {bg: "#333", text: "white"}},
        "HOR": {color: {bg: "#FF00AA"}},
        "SEE": {color: {bg: "#FF00AA"}},
        "COR": {color: {bg: "#D38D00", text: "#009", isSpecialColor: true}},
        "SPR": {color: {bg: "#D38D00", text: "#900", isSpecialColor: true}},
        "RAP": {color: {bg: "#D38D00"}},
        "REX": {color: {bg: "#933B00"}},
        "LEX": {color: {bg: "#AF003F"}},
        "AEL": {color: {text: "#FFF", isSpecialColor: true}, name: "AEライナー（直行）", name_eng: "AE Liner (direct)"},
        "ALR": {color: {text: "#FC6", isSpecialColor: true}, name: "AEライナー（藍田停車）", name_eng: "AE Liner (stops in Aida)"},
        "ADL": {color: {bg: "#000"}, name: "普通（各駅停車）", name_eng: "Local (all stops)"},
        "ADO": {color: {bg: "#C60051"}, name: "普通（一部通過）", name_eng: "Local (with skip-stop)"},
        "ADE": {color: {bg: "#0E8C00"}},
        "AOR": {color: {bg: "#008228"}},
        "AOS": {color: {bg: "#6CAA00"}},
        "AOE": {color: {bg: "#D80000"}},
        "AOC": {color: {bg: "#5F1DFF"}},
        "KKW": {color: {bg: "#000"}, name: "普通", name_eng: "Local"},
        "KKS": {color: {bg: "#c00"}, name: "赤田シャトル", name_eng: "Akada Shuttle"},
        "KKE": {color: {bg: "#000"}, name: "普通", name_eng: "Local"},
    },
    line_color_overwrite: {
        "MT": "#A05F00",
        "MA": "#A05F00",
        "MS": "#A05F00",
        "SU": "#7800C6",
        "OU": "#7800C6",
        "JS": "#7800C6",
        "JN": "#7800C6",
        "TE": "#BC0000",
        "TS": "#754C38",
        "AY": "#008700",
        "AD": "#008E87",
        "AM": "#008E87",
        "AT": "#008E87",
        "AA": "#008E87",
        "KW": "#01B22F",
        "KE": "#00CC99",
    },
    layouts: {
        //Default layout: 2 pages - suitable for 15(wk) 12(ph) ~ 36 trains per hour
        "default": {
            pages: [
                //Page 1
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "WK", category: 0, showCategory: false,
                }],
                //Page 2
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "PH", category: 0, showCategory: false,
                }],
            ],

        },
        //Default 2: 1 page - suitable for max 12 trains per hour
        "default2": {
            pages: [
                //Page 1
                [
                    {
                        outer_left: 0, outer_width: 590, inner_left: 60, inner_width: 530,
                        dayType: "WK", category: 0, showCategory: false,
                    },
                    {
                        outer_left: 590, outer_width: 600, inner_left: 650, inner_width: 530,
                        dayType: "PH", category: 0, showCategory: false,
                    }
                ],
            ],
        },
        //Categorized layout: 4 pages - suitable for max 36 trains per hour per category
        "categorized": {
            pages: [
                //Page 1
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "WK", category: 0, showCategory: true,
                }],
                //Page 2
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "WK", category: 1, showCategory: true,
                }],
                //Page 3
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "PH", category: 0, showCategory: true,
                }],
                //Page 4
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "PH", category: 1, showCategory: true,
                }],
            ],
        },
        //Kawada layout: 4 pages - for use in Kawada and Shin-Kawahashi Station
        "kawada": {
            pages: [
                //Page 1
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "WK", category: 0, showCategory: true,
                }],
                //Page 2
                [
                    {
                        outer_left: 0, outer_width: 900, inner_left: 60, inner_width: 840,
                        dayType: "WK", category: 1, showCategory: true,
                    },
                    {
                        outer_left: 900, outer_width: 290, inner_left: 960, inner_width: 220,
                        dayType: "WK", category: 2, showCategory: true, omitDayType: true,
                    },
                ],
                //Page 3
                [{
                    outer_left: 0, outer_width: 1190, inner_left: 60, inner_width: 1120,
                    dayType: "PH", category: 0, showCategory: true,
                }],
                //Page 4
                [
                    {
                        outer_left: 0, outer_width: 900, inner_left: 60, inner_width: 840,
                        dayType: "PH", category: 1, showCategory: true,
                    },
                    {
                        outer_left: 900, outer_width: 290, inner_left: 960, inner_width: 220,
                        dayType: "PH", category: 2, showCategory: true, omitDayType: true,
                    },
                ],
            ],
        },
        //Compact layout - with wider space for weekdays
        "compact-18-12": {
            pages: [
                //Page 1
                [
                    {
                        outer_left: 0, outer_width: 695, inner_left: 60, inner_width: 635,
                        dayType: "WK", category: 0, showCategory: false,
                    },
                    {
                        outer_left: 695, outer_width: 495, inner_left: 755, inner_width: 425,
                        dayType: "PH", category: 0, showCategory: false,
                    }
                ],
            ],
        },
        "compact-15-12": {
            pages: [
                //Page 1
                [
                    {
                        outer_left: 0, outer_width: 650, inner_left: 60, inner_width: 590,
                        dayType: "WK", category: 0, showCategory: false,
                    },
                    {
                        outer_left: 650, outer_width: 540, inner_left: 710, inner_width: 470,
                        dayType: "PH", category: 0, showCategory: false,
                    }
                ],
            ],
        },
        "compact-12-9": {
            pages: [
                //Page 1
                [
                    {
                        outer_left: 0, outer_width: 665, inner_left: 60, inner_width: 605,
                        dayType: "WK", category: 0, showCategory: false,
                    },
                    {
                        outer_left: 665, outer_width: 525, inner_left: 725, inner_width: 455,
                        dayType: "PH", category: 0, showCategory: false,
                    }
                ],
            ],
        },
        "compact-12-6": {
            pages: [
                //Page 1
                [
                    {
                        outer_left: 0, outer_width: 720, inner_left: 60, inner_width: 660,
                        dayType: "WK", category: 0, showCategory: false,
                    },
                    {
                        outer_left: 720, outer_width: 470, inner_left: 780, inner_width: 400,
                       dayType: "PH", category: 0, showCategory: false,
                    }
                ],
            ],
        },
    },
    categories: {
        "101-MK-UP": [
            {name: "速達列車", name_eng: "Non-local", types_except: ["AOC", "AOE", "LOC"]},
            {name: "各駅停車", name_eng: "Local", types: ["LOC"]},
            {name: "青山線直通", name_eng: "Aoyama Line Thru Service", types: ["AOC", "AOE"]},
        ],
        "104-MK-DN": [
            {name: "速達列車", name_eng: "Non-local", types_except: ["AOC", "AOE", "LOC"]},
            {name: "各駅停車", name_eng: "Local", types: ["LOC"]},
            {name: "青山線直通", name_eng: "Aoyama Line Thru Service", types: ["AOC", "AOE"]},
        ],
        "104-MK-UP": [
            {name: "速達列車", name_eng: "Non-local", types_except: ["AOC", "AOE", "LOC"]},
            {name: "各駅停車", name_eng: "Local", types: ["LOC"]},
            {name: "青山線直通", name_eng: "Aoyama Line Thru Service", types: ["AOC", "AOE"]},
        ],
        "113-MK-DN": [
            {name: "快速・急行線", name_eng: "Rapid & Express Track", types_except: ["LOC"]},
            {name: "緩行線", name_eng: "Local Track", types: ["LOC"]},
        ],
        "113-MK-UP": [
            {name: "快速線・急行線", name_eng: "Rapid / Express Tracks", types_except: ["SER", "LOC"]},
            {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
        ],
        "115-MK-DN": [
            {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC"]},
            {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
        ],
        "115-MK-UP": [
            {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC"]},
            {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
        ],
        "121-MK-DN": [
            {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC"]},
            {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
        ],
        "121-MK-UP": [
            {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC", "SSE"]},
            {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC", "SSE"]},
        ],
        "131-MK-DN": [
            {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC", "SSE"]},
            {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC", "SSE"]},
        ],
    },
    layout_usage: {
        //Kawada
        "101-MK-UP": {
            layout: "kawada",
            categories: [
                {name: "速達列車", name_eng: "Non-local", types_except: ["AOC", "AOE", "LOC"]},
                {name: "各駅停車", name_eng: "Local", types: ["LOC"]},
                {name: "青山線直通", name_eng: "Aoyama Line Thru Service", types: ["AOC", "AOE"]},
            ],
        },
        "104-MK-DN": {
            layout: "kawada",
            categories: [
                {name: "速達列車", name_eng: "Non-local", types_except: ["AOC", "AOE", "LOC"]},
                {name: "各駅停車", name_eng: "Local", types: ["LOC"]},
                {name: "青山線直通", name_eng: "Aoyama Line Thru Service", types: ["AOC", "AOE"]},
            ],
        },
        "104-MK-UP": {
            layout: "kawada",
            categories: [
                {name: "速達列車", name_eng: "Non-local", types_except: ["AOC", "AOE", "LOC"]},
                {name: "各駅停車", name_eng: "Local", types: ["LOC"]},
                {name: "青山線直通", name_eng: "Aoyama Line Thru Service", types: ["AOC", "AOE"]},
            ],
        },
        //Categorized
        "113-MK-DN": {
            layout: "categorized",
            categories: [
                {name: "快速・急行線", name_eng: "Rapid & Express Track", types_except: ["LOC"]},
                {name: "緩行線", name_eng: "Local Track", types: ["LOC"]},
            ],
        },
        "113-MK-UP": {
            layout: "categorized",
            categories: [
                {name: "快速線・急行線", name_eng: "Rapid / Express Tracks", types_except: ["SER", "LOC"]},
                {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
            ],
        },
        "115-MK-DN": {
            layout: "categorized",
            categories: [
                {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC"]},
                {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
            ],
        },
        "115-MK-UP": {
            layout: "categorized",
            categories: [
                {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC"]},
                {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
            ],
        },
        "121-MK-DN": {
            layout: "categorized",
            categories: [
                {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC"]},
                {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC"]},
            ],
        },
        "121-MK-UP": {
            layout: "categorized",
            categories: [
                {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC", "SSE"]},
                {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC", "SSE"]},
            ],
        },
        "131-MK-DN": {
            layout: "categorized",
            categories: [
                {name: "快速線", name_eng: "Rapid Track", types_except: ["SER", "LOC", "SSE"]},
                {name: "緩行線", name_eng: "Local Track", types: ["SER", "LOC", "SSE"]},
            ],
        },
        //Compact-MK
        "132-MK-DN": {layout: "compact-18-12"},
        "132-MK-UP": {layout: "compact-18-12"},
        "133-MK-DN": {layout: "compact-18-12"},
        "151-MK-DN": {layout: "compact-18-12"},
        "152-MK-DN": {layout: "compact-18-12"},
        "153-MK-DN": {layout: "compact-18-12"},
        "155-MK-DN": {layout: "compact-18-12"},
        "156-MK-DN": {layout: "compact-18-12"},
        "157-MK-DN": {layout: "compact-18-12"},
        //Compact-MT
        "158-MT-UP": {layout: "compact-15-12"},
        "206-MT-DN": {layout: "compact-15-12"},
        "206-MT-UP": {layout: "compact-15-12"},
        "211-MT-DN": {layout: "compact-15-12"},
        "213-MT-DN": {layout: "compact-12-9"},
        "213-MT-UP": {layout: "compact-12-9"},
        "217-MT-DN": {layout: "compact-12-9"},
        "217-MT-UP": {layout: "compact-12-9"},
        "220-MT-DN": {layout: "compact-12-9"},
        //Compact-MA
        "206-MA-UP": {layout: "compact-12-9"},
        "233-MA-DN": {layout: "compact-12-9"},
        "233-MA-UP": {layout: "compact-12-9"},
        "236-MA-DN": {layout: "compact-12-9"},
        //Compact-JS
        "369-JS-DN": {layout: "compact-12-9"},
        "369-JS-UP": {layout: "compact-12-9"},
        "370-JS-DN": {layout: "compact-12-9"},
        "370-JS-UP": {layout: "compact-12-9"},
        "371-JS-DN": {layout: "compact-15-12"},
        "371-JS-UP": {layout: "compact-12-9"},
        "376-JS-DN": {layout: "compact-12-9"},
        "376-JS-UP": {layout: "compact-12-9"},
        "377-JS-DN": {layout: "compact-12-9"},
        //Compact-JN
        "139-JN-UP": {layout: "compact-12-6"},
        "351-JN-DN": {layout: "compact-12-6"},
        "351-JN-UP": {layout: "compact-12-6"},
        "352-JN-DN": {layout: "compact-12-6"},
        "352-JN-UP": {layout: "compact-12-6"},
        "353-JN-DN": {layout: "compact-12-6"},
        "353-JN-UP": {layout: "compact-12-6"},
        "354-JN-DN": {layout: "compact-12-6"},
        //Compact-AY
        "414-AY-DN": {layout: "compact-15-12"},
        "414-AY-UP": {layout: "compact-15-12"},
        "415-AY-DN": {layout: "compact-15-12"},
        "415-AY-UP": {layout: "compact-15-12"},
        "416-AY-DN": {layout: "compact-15-12"},
        "416-AY-UP": {layout: "compact-15-12"},
        "417-AY-DN": {layout: "compact-15-12"},
        "417-AY-UP": {layout: "compact-15-12"},
        "418-AY-DN": {layout: "compact-15-12"},
        "418-AY-UP": {layout: "compact-15-12"},
        "419-AY-DN": {layout: "compact-15-12"},
        "419-AY-UP": {layout: "compact-15-12"},
        "420-AY-DN": {layout: "compact-15-12"},
        "420-AY-UP": {layout: "compact-15-12"},
        "421-AY-UP": {layout: "compact-15-12"},
        "422-AY-DN": {layout: "compact-12-9"},
        "422-AY-UP": {layout: "compact-12-9"},
        "423-AY-DN": {layout: "compact-12-9"},
        "423-AY-UP": {layout: "compact-12-9"},
        "424-AY-DN": {layout: "compact-15-12"},
        "424-AY-UP": {layout: "compact-15-12"},
        "425-AY-DN": {layout: "compact-12-9"},
        "425-AY-UP": {layout: "compact-12-9"},
        "426-AY-DN": {layout: "compact-15-12"},
        "426-AY-UP": {layout: "compact-12-9"},
        "431-AY-DN": {layout: "compact-12-9"},
        "431-AY-UP": {layout: "compact-12-9"},
        "432-AY-DN": {layout: "compact-12-9"},
        //Compact-AD
        "718-AD-UP": {layout: "compact-18-12"},
        "719-AD-DN": {layout: "compact-18-12"},
        "719-AD-UP": {layout: "compact-18-12"},
        "720-AD-DN": {layout: "compact-18-12"},
        "720-AD-UP": {layout: "compact-18-12"},
        "721-AD-DN": {layout: "compact-18-12"},
        //Compact-AT
        "752-AD-DN": {layout: "compact-12-6"},
        "752-AD-UP": {layout: "compact-12-6"},
        "753-AD-DN": {layout: "compact-12-6"},
        "753-AD-UP": {layout: "compact-12-6"},
        "754-AD-DN": {layout: "compact-12-6"},
        "754-AD-UP": {layout: "compact-12-6"},
        "755-AD-DN": {layout: "compact-12-6"},
        "755-AD-UP": {layout: "compact-12-6"},
        //Compact-AA
        "716-AA-UP": {layout: "compact-18-12"},
        "731-AA-DN": {layout: "compact-18-12"},
        "731-AA-UP": {layout: "compact-18-12"},
        "732-AA-DN": {layout: "compact-18-12"},
        "732-AA-UP": {layout: "compact-18-12"},
        "733-AA-DN": {layout: "compact-18-12"},
        "733-AA-UP": {layout: "compact-18-12"},
        "734-AA-DN": {layout: "compact-18-12"},
        "734-AA-UP": {layout: "compact-18-12"},
        "735-AA-DN": {layout: "compact-18-12"},
        //Compact-KW
        "158-KW-UP": {layout: "compact-12-6"},
        "802-KW-DN": {layout: "compact-12-6"},
    },
};