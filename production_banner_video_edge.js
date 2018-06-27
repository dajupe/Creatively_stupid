/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://www.youtube.com/iframe_api"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '277px', '1200px', '683px', 'auto', 'auto'],
                            fill: ["rgba(220,223,228,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'juju_reinz_productions_purple_logo',
                            type: 'image',
                            rect: ['0px', '0px', '1200px', '277px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"juju_reinz_productions_purple_logo.jpg",'0px','0px']
                        },
                        {
                            id: 'flaunt',
                            symbolName: 'flaunt',
                            type: 'rect',
                            rect: ['68px', '315px', '1064', '598', 'auto', 'auto']
                        },
                        {
                            id: 'flaunt_watch_symbol',
                            symbolName: 'flaunt_watch_symbol',
                            display: 'block',
                            type: 'rect',
                            rect: ['82', '428', '388', '28', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'swing',
                            symbolName: 'swing',
                            type: 'rect',
                            rect: ['68px', '960px', '1064px', '598px', 'auto', 'auto']
                        },
                        {
                            id: 'swing_play',
                            symbolName: 'swing_play',
                            type: 'rect',
                            rect: ['82', '581', '234', '28', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'gypsys',
                            symbolName: 'gypsys',
                            type: 'rect',
                            rect: ['68px', '960px', '1064', '598', 'auto', 'auto']
                        },
                        {
                            id: 'foal',
                            symbolName: 'foal',
                            type: 'rect',
                            rect: ['68px', '960px', '1064', '598', 'auto', 'auto']
                        },
                        {
                            id: 'bottom_mak',
                            type: 'rect',
                            rect: ['0px', '931px', '1200px', '37px', 'auto', 'auto'],
                            fill: ["rgba(220,223,228,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '960px', 'auto', 'auto'],
                            sizeRange: ['','1200px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "flaunt_play": 1000
                    },
                    data: [
                        [
                            "eid16",
                            "top",
                            1000,
                            1500,
                            "easeInOutQuad",
                            "${swing}",
                            '468px',
                            '960px'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${flaunt_watch_symbol}",
                            'block',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${flaunt_watch_symbol}",
                            'block',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${flaunt_watch_symbol}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${foal}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid19",
                            "top",
                            1000,
                            1500,
                            "easeInOutQuad",
                            "${gypsys}",
                            '615px',
                            '960px'
                        ],
                        [
                            "eid12",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${swing}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid17",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${gypsys}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid10",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${flaunt}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid15",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${swing}",
                            '598px',
                            '598px'
                        ],
                        [
                            "eid22",
                            "top",
                            1000,
                            1500,
                            "easeInOutQuad",
                            "${foal}",
                            '766px',
                            '960px'
                        ],
                        [
                            "eid14",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${swing}",
                            '1064px',
                            '1064px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            1000,
                            1500,
                            "linear",
                            "${flaunt_watch_symbol}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${flaunt}",
                            '315px',
                            '315px'
                        ]
                    ]
                }
            },
            "flaunt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1064px', '598px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "swing": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1064px', '598px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "gypsys": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1064px', '598px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "foal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1064px', '598px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "flaunt_watch_symbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'flaunt_click_to_watch',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">​Flaunt Design-Please Click to watch</span></p>',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '388px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "swing_play": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">​Shoot,Edit and Grade</span></p>',
                            type: 'text',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '234px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("production_banner_video_edgeActions.js");
})("EDGE-15353185");
