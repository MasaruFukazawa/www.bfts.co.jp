let createjs, canvas, stage, anim_container, dom_overlay_container, AdobeAn;
export default class Loading {
    constructor(opts = {}) {
        this.initialize(opts);
    }
    initialize(opts) {
        canvas = document.getElementById('canvas');
        anim_container = document.getElementById('loading-container');
        dom_overlay_container = document.getElementById('dom_overlay_container');
        stage = new window.createjs.Stage(this.canvas);
        AdobeAn = {};
        createjs = window.createjs;

        createjs.Ticker.on('tick', tick);
        function tick(event) {
            stage.update(event);
        }
        this.elm = canvas;
        this.animate(createjs);
    }

    init() {
        let comp = AdobeAn.getComposition('C00732BD7D5F864CA8A29C187EBDC497');
        let lib = comp.getLibrary();
        let loader = new createjs.LoadQueue(false);
        loader.addEventListener('fileload', (evt) => {
            this.handleFileLoad(evt, comp);
        });
        loader.addEventListener('complete', (evt) => {
            this.handleComplete(evt, comp);
        });
        lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
    }
    handleFileLoad(evt, comp) {
        let images = comp.getImages();
        if (evt && evt.item.type == 'image') {
            images[evt.item.id] = evt.result;
        }
    }
    handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        let lib = comp.getLibrary();
        let ss = comp.getSpriteSheet();
        let queue = evt.target;
        let ssMetadata = lib.ssMetadata;
        for (let i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                images: [queue.getResult(ssMetadata[i].name)],
                frames: ssMetadata[i].frames,
            });
        }
        this.exportRoot = new lib.bft_op_190628_pc();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        this.fnStartAnimation = function () {
            stage.addChild(this.exportRoot);
            createjs.Ticker.framerate = lib.properties.fps;
            createjs.Ticker.addEventListener('tick', stage);
        };
        //Code to support hidpi screens and responsive scaling.
        AdobeAn.makeResponsive(true, 'both', true, 2, [
            canvas,
            anim_container,
            dom_overlay_container,
        ]);
        AdobeAn.compositionLoaded(lib.properties.id);
        this.fnStartAnimation();
    }

    animate(cjs) {
        let p; // shortcut to reference prototypes
        let lib = {};
        let ss = {};
        let img = {};
        lib.ssMetadata = [
            { name: 'bft_op_pc_atlas_', frames: [[0, 0, 1600, 1600]] },
            { name: 'bft_op_pc_atlas_2', frames: [[0, 0, 1596, 1600]] },
            { name: 'bft_op_pc_atlas_3', frames: [[0, 0, 1594, 1594]] },
            { name: 'bft_op_pc_atlas_4', frames: [[0, 0, 1583, 1600]] },
            { name: 'bft_op_pc_atlas_5', frames: [[0, 0, 1561, 1600]] },
            { name: 'bft_op_pc_atlas_6', frames: [[0, 0, 1572, 1572]] },
            { name: 'bft_op_pc_atlas_7', frames: [[0, 0, 1528, 1600]] },
            { name: 'bft_op_pc_atlas_8', frames: [[0, 0, 1485, 1600]] },
            { name: 'bft_op_pc_atlas_9', frames: [[0, 0, 1530, 1530]] },
            { name: 'bft_op_pc_atlas_10', frames: [[0, 0, 1429, 1600]] },
            { name: 'bft_op_pc_atlas_11', frames: [[0, 0, 1361, 1600]] },
            { name: 'bft_op_pc_atlas_12', frames: [[0, 0, 1458, 1458]] },
            { name: 'bft_op_pc_atlas_13', frames: [[0, 0, 1277, 1600]] },
            { name: 'bft_op_pc_atlas_14', frames: [[0, 0, 1178, 1600]] },
            { name: 'bft_op_pc_atlas_15', frames: [[0, 0, 1340, 1340]] },
            {
                name: 'bft_op_pc_atlas_16',
                frames: [
                    [1061, 0, 919, 1600],
                    [0, 0, 1059, 1600],
                ],
            },
            {
                name: 'bft_op_pc_atlas_17',
                frames: [
                    [1144, 0, 753, 1600],
                    [0, 0, 1142, 1142],
                ],
            },
            {
                name: 'bft_op_pc_atlas_18',
                frames: [
                    [0, 1602, 402, 402],
                    [1103, 829, 202, 402],
                    [404, 1805, 402, 202],
                    [985, 1376, 202, 202],
                    [1792, 0, 2, 1600],
                    [1385, 0, 311, 1600],
                    [0, 0, 554, 1600],
                    [556, 0, 827, 827],
                    [556, 829, 545, 545],
                    [556, 1376, 427, 427],
                    [985, 1602, 400, 400],
                    [1189, 1384, 153, 144],
                    [1524, 1866, 107, 133],
                    [1387, 1602, 136, 135],
                    [1521, 1739, 135, 125],
                    [1387, 1879, 135, 133],
                    [404, 1602, 143, 133],
                    [1387, 1739, 132, 138],
                    [1652, 1602, 138, 108],
                    [1633, 1866, 91, 144],
                    [1525, 1602, 125, 132],
                    [1189, 1233, 152, 149],
                    [808, 1805, 154, 149],
                ],
            },
        ];

        // symbols:

        (lib.CachedTexturedBitmap_1110 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1113 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(1);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1114 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(2);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1115 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(3);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1128 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(4);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1129 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(5);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1130 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(6);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1131 = function () {
            this.initialize(ss['bft_op_pc_atlas_17']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1132 = function () {
            this.initialize(ss['bft_op_pc_atlas_16']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1133 = function () {
            this.initialize(ss['bft_op_pc_atlas_16']);
            this.gotoAndStop(1);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1134 = function () {
            this.initialize(ss['bft_op_pc_atlas_14']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1135 = function () {
            this.initialize(ss['bft_op_pc_atlas_13']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1136 = function () {
            this.initialize(ss['bft_op_pc_atlas_11']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1137 = function () {
            this.initialize(ss['bft_op_pc_atlas_10']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1138 = function () {
            this.initialize(ss['bft_op_pc_atlas_8']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1139 = function () {
            this.initialize(ss['bft_op_pc_atlas_7']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1140 = function () {
            this.initialize(ss['bft_op_pc_atlas_5']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1141 = function () {
            this.initialize(ss['bft_op_pc_atlas_4']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1142 = function () {
            this.initialize(ss['bft_op_pc_atlas_2']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1144 = function () {
            this.initialize(ss['bft_op_pc_atlas_']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1145 = function () {
            this.initialize(ss['bft_op_pc_atlas_3']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1146 = function () {
            this.initialize(ss['bft_op_pc_atlas_6']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1147 = function () {
            this.initialize(ss['bft_op_pc_atlas_9']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1148 = function () {
            this.initialize(ss['bft_op_pc_atlas_12']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1149 = function () {
            this.initialize(ss['bft_op_pc_atlas_15']);
            this.gotoAndStop(0);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1150 = function () {
            this.initialize(ss['bft_op_pc_atlas_17']);
            this.gotoAndStop(1);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1151 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(7);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1152 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(8);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1153 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(9);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1155 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(10);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1156 = function () {
            this.initialize(img.CachedTexturedBitmap_1156);
        }).prototype = p = new cjs.Bitmap();
        p.nominalBounds = new cjs.Rectangle(0, 0, 4235, 4235);

        (lib.CachedTexturedBitmap_1169 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(11);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1170 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(12);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1171 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(13);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1172 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(14);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1173 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(15);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1174 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(16);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1175 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(17);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1176 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(18);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1177 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(19);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1178 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(20);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1179 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(21);
        }).prototype = p = new cjs.Sprite();

        (lib.CachedTexturedBitmap_1180 = function () {
            this.initialize(ss['bft_op_pc_atlas_18']);
            this.gotoAndStop(22);
        }).prototype = p = new cjs.Sprite();

        (lib.to2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // レイヤー_1
            this.instance = new lib.CachedTexturedBitmap_1180();
            this.instance.parent = this;
            this.instance.setTransform(171.25, 26.8, 0.5, 0.5);

            this.instance_1 = new lib.CachedTexturedBitmap_1179();
            this.instance_1.parent = this;
            this.instance_1.setTransform(88.2, 26.8, 0.5, 0.5);

            this.instance_2 = new lib.CachedTexturedBitmap_1178();
            this.instance_2.parent = this;
            this.instance_2.setTransform(9.35, 32.55, 0.5, 0.5);

            this.instance_3 = new lib.CachedTexturedBitmap_1177();
            this.instance_3.parent = this;
            this.instance_3.setTransform(-67.5, 28.8, 0.5, 0.5);

            this.instance_4 = new lib.CachedTexturedBitmap_1176();
            this.instance_4.parent = this;
            this.instance_4.setTransform(-161.3, 40.7, 0.5, 0.5);

            this.instance_5 = new lib.CachedTexturedBitmap_1175();
            this.instance_5.parent = this;
            this.instance_5.setTransform(-244, 29.65, 0.5, 0.5);

            this.instance_6 = new lib.CachedTexturedBitmap_1174();
            this.instance_6.parent = this;
            this.instance_6.setTransform(174.95, -98.4, 0.5, 0.5);

            this.instance_7 = new lib.CachedTexturedBitmap_1173();
            this.instance_7.parent = this;
            this.instance_7.setTransform(92.8, -96.9, 0.5, 0.5);

            this.instance_8 = new lib.CachedTexturedBitmap_1172();
            this.instance_8.parent = this;
            this.instance_8.setTransform(8.05, -94.65, 0.5, 0.5);

            this.instance_9 = new lib.CachedTexturedBitmap_1171();
            this.instance_9.parent = this;
            this.instance_9.setTransform(-75.45, -98.9, 0.5, 0.5);

            this.instance_10 = new lib.CachedTexturedBitmap_1170();
            this.instance_10.parent = this;
            this.instance_10.setTransform(-153.05, -99.05, 0.5, 0.5);

            this.instance_11 = new lib.CachedTexturedBitmap_1169();
            this.instance_11.parent = this;
            this.instance_11.setTransform(-248, -101.45, 0.5, 0.5);

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({
                        state: [
                            { t: this.instance_11 },
                            { t: this.instance_10 },
                            { t: this.instance_9 },
                            { t: this.instance_8 },
                            { t: this.instance_7 },
                            { t: this.instance_6 },
                            { t: this.instance_5 },
                            { t: this.instance_4 },
                            { t: this.instance_3 },
                            { t: this.instance_2 },
                            { t: this.instance_1 },
                            { t: this.instance },
                        ],
                    })
                    .wait(1)
            );
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-248, -101.4, 496.3, 202.7);

        (lib.copy2 = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});

            // レイヤー_1
            this.instance = new lib.CachedTexturedBitmap_1180();
            this.instance.parent = this;
            this.instance.setTransform(171.25, 26.8, 0.5, 0.5);

            this.instance_1 = new lib.CachedTexturedBitmap_1179();
            this.instance_1.parent = this;
            this.instance_1.setTransform(88.2, 26.8, 0.5, 0.5);

            this.instance_2 = new lib.CachedTexturedBitmap_1178();
            this.instance_2.parent = this;
            this.instance_2.setTransform(9.35, 32.55, 0.5, 0.5);

            this.instance_3 = new lib.CachedTexturedBitmap_1177();
            this.instance_3.parent = this;
            this.instance_3.setTransform(-67.5, 28.8, 0.5, 0.5);

            this.instance_4 = new lib.CachedTexturedBitmap_1176();
            this.instance_4.parent = this;
            this.instance_4.setTransform(-161.3, 40.7, 0.5, 0.5);

            this.instance_5 = new lib.CachedTexturedBitmap_1175();
            this.instance_5.parent = this;
            this.instance_5.setTransform(-244, 29.65, 0.5, 0.5);

            this.instance_6 = new lib.CachedTexturedBitmap_1174();
            this.instance_6.parent = this;
            this.instance_6.setTransform(174.95, -98.4, 0.5, 0.5);

            this.instance_7 = new lib.CachedTexturedBitmap_1173();
            this.instance_7.parent = this;
            this.instance_7.setTransform(92.8, -96.9, 0.5, 0.5);

            this.instance_8 = new lib.CachedTexturedBitmap_1172();
            this.instance_8.parent = this;
            this.instance_8.setTransform(8.05, -94.65, 0.5, 0.5);

            this.instance_9 = new lib.CachedTexturedBitmap_1171();
            this.instance_9.parent = this;
            this.instance_9.setTransform(-75.45, -98.9, 0.5, 0.5);

            this.instance_10 = new lib.CachedTexturedBitmap_1170();
            this.instance_10.parent = this;
            this.instance_10.setTransform(-153.05, -99.05, 0.5, 0.5);

            this.instance_11 = new lib.CachedTexturedBitmap_1169();
            this.instance_11.parent = this;
            this.instance_11.setTransform(-248, -101.45, 0.5, 0.5);

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({
                        state: [
                            { t: this.instance_11 },
                            { t: this.instance_10 },
                            { t: this.instance_9 },
                            { t: this.instance_8 },
                            { t: this.instance_7 },
                            { t: this.instance_6 },
                            { t: this.instance_5 },
                            { t: this.instance_4 },
                            { t: this.instance_3 },
                            { t: this.instance_2 },
                            { t: this.instance_1 },
                            { t: this.instance },
                        ],
                    })
                    .wait(1)
            );
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-248, -101.4, 496.3, 202.7);

        let _this = this;

        // stage content:
        (lib.bft_op_190628_pc = function (mode, startPosition, loop) {
            if (loop == null) {
                loop = false;
            }
            this.initialize(mode, startPosition, loop, {});

            // timeline functions:
            this.frame_99 = function () {
				// アニメーション終了時にイベント発火
				if(document.documentMode) {
					var event = document.createEvent("Event");
					event.initEvent("end-anim", true, false);
					_this.elm.dispatchEvent(event);
				} else {
					_this.elm.dispatchEvent(new Event('end-anim'));
				}
                // window.onCompleteIntroAnimation();
                // stop();
            };

            // actions tween:
            this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

            // レイヤー_2_コピー_コピー
            this.instance = new lib.CachedTexturedBitmap_1110();
            this.instance.parent = this;
            this.instance.setTransform(699.5, 899.5, 0.5, 0.5);

            this.instance_1 = new lib.CachedTexturedBitmap_1110();
            this.instance_1.parent = this;
            this.instance_1.setTransform(899.5, 899.5, 0.5, 0.5);

            this.instance_2 = new lib.CachedTexturedBitmap_1110();
            this.instance_2.parent = this;
            this.instance_2.setTransform(899.5, 699.5, 0.5, 0.5);

            this.instance_3 = new lib.CachedTexturedBitmap_1110();
            this.instance_3.parent = this;
            this.instance_3.setTransform(699.5, 899.5, 0.5, 0.5);

            this.instance_4 = new lib.CachedTexturedBitmap_1110();
            this.instance_4.parent = this;
            this.instance_4.setTransform(499.5, 899.5, 0.5, 0.5);

            this.instance_5 = new lib.CachedTexturedBitmap_1110();
            this.instance_5.parent = this;
            this.instance_5.setTransform(899.5, 899.5, 0.5, 0.5);

            this.instance_6 = new lib.CachedTexturedBitmap_1155();
            this.instance_6.parent = this;
            this.instance_6.setTransform(1300, 1300, 0.5, 0.5);

            this.instance_7 = new lib.CachedTexturedBitmap_1155();
            this.instance_7.parent = this;
            this.instance_7.setTransform(700, 1100, 0.5, 0.5);

            this.instance_8 = new lib.CachedTexturedBitmap_1155();
            this.instance_8.parent = this;
            this.instance_8.setTransform(900, 1100, 0.5, 0.5);

            this.instance_9 = new lib.CachedTexturedBitmap_1155();
            this.instance_9.parent = this;
            this.instance_9.setTransform(1300, 1100, 0.5, 0.5);

            this.instance_10 = new lib.CachedTexturedBitmap_1155();
            this.instance_10.parent = this;
            this.instance_10.setTransform(1100, 1100, 0.5, 0.5);

            this.instance_11 = new lib.CachedTexturedBitmap_1155();
            this.instance_11.parent = this;
            this.instance_11.setTransform(700, 500, 0.5, 0.5);

            this.instance_12 = new lib.CachedTexturedBitmap_1155();
            this.instance_12.parent = this;
            this.instance_12.setTransform(500, 500, 0.5, 0.5);

            this.instance_13 = new lib.CachedTexturedBitmap_1155();
            this.instance_13.parent = this;
            this.instance_13.setTransform(700, 700, 0.5, 0.5);

            this.instance_14 = new lib.CachedTexturedBitmap_1155();
            this.instance_14.parent = this;
            this.instance_14.setTransform(500, 700, 0.5, 0.5);

            this.instance_15 = new lib.CachedTexturedBitmap_1155();
            this.instance_15.parent = this;
            this.instance_15.setTransform(300, 700, 0.5, 0.5);

            this.instance_16 = new lib.CachedTexturedBitmap_1155();
            this.instance_16.parent = this;
            this.instance_16.setTransform(900, 700, 0.5, 0.5);

            this.instance_17 = new lib.CachedTexturedBitmap_1155();
            this.instance_17.parent = this;
            this.instance_17.setTransform(700, 900, 0.5, 0.5);

            this.instance_18 = new lib.CachedTexturedBitmap_1155();
            this.instance_18.parent = this;
            this.instance_18.setTransform(500, 900, 0.5, 0.5);

            this.instance_19 = new lib.CachedTexturedBitmap_1155();
            this.instance_19.parent = this;
            this.instance_19.setTransform(300, 900, 0.5, 0.5);

            this.instance_20 = new lib.CachedTexturedBitmap_1155();
            this.instance_20.parent = this;
            this.instance_20.setTransform(1100, 900, 0.5, 0.5);

            this.instance_21 = new lib.CachedTexturedBitmap_1155();
            this.instance_21.parent = this;
            this.instance_21.setTransform(900, 900, 0.5, 0.5);

            this.instance_22 = new lib.CachedTexturedBitmap_1110();
            this.instance_22.parent = this;
            this.instance_22.setTransform(1099.5, 1099.5, 0.5, 0.5);

            this.instance_23 = new lib.CachedTexturedBitmap_1110();
            this.instance_23.parent = this;
            this.instance_23.setTransform(899.5, 1099.5, 0.5, 0.5);

            this.instance_24 = new lib.CachedTexturedBitmap_1110();
            this.instance_24.parent = this;
            this.instance_24.setTransform(699.5, 1299.5, 0.5, 0.5);

            this.instance_25 = new lib.CachedTexturedBitmap_1110();
            this.instance_25.parent = this;
            this.instance_25.setTransform(499.5, 1299.5, 0.5, 0.5);

            this.instance_26 = new lib.CachedTexturedBitmap_1110();
            this.instance_26.parent = this;
            this.instance_26.setTransform(1499.5, 1299.5, 0.5, 0.5);

            this.instance_27 = new lib.CachedTexturedBitmap_1110();
            this.instance_27.parent = this;
            this.instance_27.setTransform(1299.5, 1299.5, 0.5, 0.5);

            this.instance_28 = new lib.CachedTexturedBitmap_1110();
            this.instance_28.parent = this;
            this.instance_28.setTransform(1099.5, 1299.5, 0.5, 0.5);

            this.instance_29 = new lib.CachedTexturedBitmap_1110();
            this.instance_29.parent = this;
            this.instance_29.setTransform(1299.5, 1499.5, 0.5, 0.5);

            this.instance_30 = new lib.CachedTexturedBitmap_1110();
            this.instance_30.parent = this;
            this.instance_30.setTransform(699.5, 299.5, 0.5, 0.5);

            this.instance_31 = new lib.CachedTexturedBitmap_1110();
            this.instance_31.parent = this;
            this.instance_31.setTransform(499.5, 299.5, 0.5, 0.5);

            this.instance_32 = new lib.CachedTexturedBitmap_1110();
            this.instance_32.parent = this;
            this.instance_32.setTransform(699.5, 499.5, 0.5, 0.5);

            this.instance_33 = new lib.CachedTexturedBitmap_1110();
            this.instance_33.parent = this;
            this.instance_33.setTransform(499.5, 499.5, 0.5, 0.5);

            this.instance_34 = new lib.CachedTexturedBitmap_1110();
            this.instance_34.parent = this;
            this.instance_34.setTransform(299.5, 499.5, 0.5, 0.5);

            this.instance_35 = new lib.CachedTexturedBitmap_1110();
            this.instance_35.parent = this;
            this.instance_35.setTransform(899.5, 499.5, 0.5, 0.5);

            this.instance_36 = new lib.CachedTexturedBitmap_1110();
            this.instance_36.parent = this;
            this.instance_36.setTransform(699.5, 699.5, 0.5, 0.5);

            this.instance_37 = new lib.CachedTexturedBitmap_1110();
            this.instance_37.parent = this;
            this.instance_37.setTransform(499.5, 699.5, 0.5, 0.5);

            this.instance_38 = new lib.CachedTexturedBitmap_1110();
            this.instance_38.parent = this;
            this.instance_38.setTransform(299.5, 699.5, 0.5, 0.5);

            this.instance_39 = new lib.CachedTexturedBitmap_1110();
            this.instance_39.parent = this;
            this.instance_39.setTransform(99.5, 699.5, 0.5, 0.5);

            this.instance_40 = new lib.CachedTexturedBitmap_1110();
            this.instance_40.parent = this;
            this.instance_40.setTransform(1099.5, 699.5, 0.5, 0.5);

            this.instance_41 = new lib.CachedTexturedBitmap_1110();
            this.instance_41.parent = this;
            this.instance_41.setTransform(899.5, 699.5, 0.5, 0.5);

            this.instance_42 = new lib.CachedTexturedBitmap_1110();
            this.instance_42.parent = this;
            this.instance_42.setTransform(699.5, 899.5, 0.5, 0.5);

            this.instance_43 = new lib.CachedTexturedBitmap_1110();
            this.instance_43.parent = this;
            this.instance_43.setTransform(499.5, 899.5, 0.5, 0.5);

            this.instance_44 = new lib.CachedTexturedBitmap_1110();
            this.instance_44.parent = this;
            this.instance_44.setTransform(299.5, 899.5, 0.5, 0.5);

            this.instance_45 = new lib.CachedTexturedBitmap_1110();
            this.instance_45.parent = this;
            this.instance_45.setTransform(99.5, 899.5, 0.5, 0.5);

            this.instance_46 = new lib.CachedTexturedBitmap_1110();
            this.instance_46.parent = this;
            this.instance_46.setTransform(1299.5, 899.5, 0.5, 0.5);

            this.instance_47 = new lib.CachedTexturedBitmap_1110();
            this.instance_47.parent = this;
            this.instance_47.setTransform(1099.5, 899.5, 0.5, 0.5);

            this.instance_48 = new lib.CachedTexturedBitmap_1110();
            this.instance_48.parent = this;
            this.instance_48.setTransform(899.5, 899.5, 0.5, 0.5);

            this.instance_49 = new lib.CachedTexturedBitmap_1113();
            this.instance_49.parent = this;
            this.instance_49.setTransform(-0.5, 1099.5, 0.5, 0.5);

            this.instance_50 = new lib.CachedTexturedBitmap_1113();
            this.instance_50.parent = this;
            this.instance_50.setTransform(-0.5, 1299.5, 0.5, 0.5);

            this.instance_51 = new lib.CachedTexturedBitmap_1110();
            this.instance_51.parent = this;
            this.instance_51.setTransform(499.5, 499.5, 0.5, 0.5);

            this.instance_52 = new lib.CachedTexturedBitmap_1110();
            this.instance_52.parent = this;
            this.instance_52.setTransform(299.5, 499.5, 0.5, 0.5);

            this.instance_53 = new lib.CachedTexturedBitmap_1110();
            this.instance_53.parent = this;
            this.instance_53.setTransform(99.5, 499.5, 0.5, 0.5);

            this.instance_54 = new lib.CachedTexturedBitmap_1113();
            this.instance_54.parent = this;
            this.instance_54.setTransform(-0.5, 499.5, 0.5, 0.5);

            this.instance_55 = new lib.CachedTexturedBitmap_1110();
            this.instance_55.parent = this;
            this.instance_55.setTransform(1099.5, 499.5, 0.5, 0.5);

            this.instance_56 = new lib.CachedTexturedBitmap_1110();
            this.instance_56.parent = this;
            this.instance_56.setTransform(899.5, 499.5, 0.5, 0.5);

            this.instance_57 = new lib.CachedTexturedBitmap_1110();
            this.instance_57.parent = this;
            this.instance_57.setTransform(699.5, 699.5, 0.5, 0.5);

            this.instance_58 = new lib.CachedTexturedBitmap_1110();
            this.instance_58.parent = this;
            this.instance_58.setTransform(499.5, 699.5, 0.5, 0.5);

            this.instance_59 = new lib.CachedTexturedBitmap_1110();
            this.instance_59.parent = this;
            this.instance_59.setTransform(299.5, 699.5, 0.5, 0.5);

            this.instance_60 = new lib.CachedTexturedBitmap_1110();
            this.instance_60.parent = this;
            this.instance_60.setTransform(99.5, 699.5, 0.5, 0.5);

            this.instance_61 = new lib.CachedTexturedBitmap_1113();
            this.instance_61.parent = this;
            this.instance_61.setTransform(-0.5, 699.5, 0.5, 0.5);

            this.instance_62 = new lib.CachedTexturedBitmap_1110();
            this.instance_62.parent = this;
            this.instance_62.setTransform(1699.5, 899.5, 0.5, 0.5);

            this.instance_63 = new lib.CachedTexturedBitmap_1110();
            this.instance_63.parent = this;
            this.instance_63.setTransform(1299.5, 699.5, 0.5, 0.5);

            this.instance_64 = new lib.CachedTexturedBitmap_1110();
            this.instance_64.parent = this;
            this.instance_64.setTransform(1099.5, 699.5, 0.5, 0.5);

            this.instance_65 = new lib.CachedTexturedBitmap_1110();
            this.instance_65.parent = this;
            this.instance_65.setTransform(899.5, 699.5, 0.5, 0.5);

            this.instance_66 = new lib.CachedTexturedBitmap_1110();
            this.instance_66.parent = this;
            this.instance_66.setTransform(699.5, 899.5, 0.5, 0.5);

            this.instance_67 = new lib.CachedTexturedBitmap_1110();
            this.instance_67.parent = this;
            this.instance_67.setTransform(499.5, 899.5, 0.5, 0.5);

            this.instance_68 = new lib.CachedTexturedBitmap_1110();
            this.instance_68.parent = this;
            this.instance_68.setTransform(299.5, 899.5, 0.5, 0.5);

            this.instance_69 = new lib.CachedTexturedBitmap_1110();
            this.instance_69.parent = this;
            this.instance_69.setTransform(99.5, 899.5, 0.5, 0.5);

            this.instance_70 = new lib.CachedTexturedBitmap_1113();
            this.instance_70.parent = this;
            this.instance_70.setTransform(-0.5, 899.5, 0.5, 0.5);

            this.instance_71 = new lib.CachedTexturedBitmap_1110();
            this.instance_71.parent = this;
            this.instance_71.setTransform(1499.5, 899.5, 0.5, 0.5);

            this.instance_72 = new lib.CachedTexturedBitmap_1110();
            this.instance_72.parent = this;
            this.instance_72.setTransform(1299.5, 899.5, 0.5, 0.5);

            this.instance_73 = new lib.CachedTexturedBitmap_1110();
            this.instance_73.parent = this;
            this.instance_73.setTransform(1099.5, 899.5, 0.5, 0.5);

            this.instance_74 = new lib.CachedTexturedBitmap_1110();
            this.instance_74.parent = this;
            this.instance_74.setTransform(899.5, 899.5, 0.5, 0.5);

            this.instance_75 = new lib.CachedTexturedBitmap_1114();
            this.instance_75.parent = this;
            this.instance_75.setTransform(1499.5, 1899.5, 0.5, 0.5);

            this.instance_76 = new lib.CachedTexturedBitmap_1114();
            this.instance_76.parent = this;
            this.instance_76.setTransform(699.5, -0.5, 0.5, 0.5);

            this.instance_77 = new lib.CachedTexturedBitmap_1114();
            this.instance_77.parent = this;
            this.instance_77.setTransform(499.5, -0.5, 0.5, 0.5);

            this.instance_78 = new lib.CachedTexturedBitmap_1114();
            this.instance_78.parent = this;
            this.instance_78.setTransform(299.5, -0.5, 0.5, 0.5);

            this.instance_79 = new lib.CachedTexturedBitmap_1113();
            this.instance_79.parent = this;
            this.instance_79.setTransform(1899.5, 1499.5, 0.5, 0.5);

            this.instance_80 = new lib.CachedTexturedBitmap_1114();
            this.instance_80.parent = this;
            this.instance_80.setTransform(1699.5, 1899.5, 0.5, 0.5);

            this.instance_81 = new lib.CachedTexturedBitmap_1113();
            this.instance_81.parent = this;
            this.instance_81.setTransform(-0.5, 299.5, 0.5, 0.5);

            this.instance_82 = new lib.CachedTexturedBitmap_1113();
            this.instance_82.parent = this;
            this.instance_82.setTransform(-0.5, 499.5, 0.5, 0.5);

            this.instance_83 = new lib.CachedTexturedBitmap_1110();
            this.instance_83.parent = this;
            this.instance_83.setTransform(1099.5, 499.5, 0.5, 0.5);

            this.instance_84 = new lib.CachedTexturedBitmap_1110();
            this.instance_84.parent = this;
            this.instance_84.setTransform(899.5, 499.5, 0.5, 0.5);

            this.instance_85 = new lib.CachedTexturedBitmap_1110();
            this.instance_85.parent = this;
            this.instance_85.setTransform(699.5, 699.5, 0.5, 0.5);

            this.instance_86 = new lib.CachedTexturedBitmap_1110();
            this.instance_86.parent = this;
            this.instance_86.setTransform(499.5, 699.5, 0.5, 0.5);

            this.instance_87 = new lib.CachedTexturedBitmap_1110();
            this.instance_87.parent = this;
            this.instance_87.setTransform(299.5, 699.5, 0.5, 0.5);

            this.instance_88 = new lib.CachedTexturedBitmap_1110();
            this.instance_88.parent = this;
            this.instance_88.setTransform(99.5, 699.5, 0.5, 0.5);

            this.instance_89 = new lib.CachedTexturedBitmap_1113();
            this.instance_89.parent = this;
            this.instance_89.setTransform(-0.5, 699.5, 0.5, 0.5);

            this.instance_90 = new lib.CachedTexturedBitmap_1113();
            this.instance_90.parent = this;
            this.instance_90.setTransform(1899.5, 699.5, 0.5, 0.5);

            this.instance_91 = new lib.CachedTexturedBitmap_1110();
            this.instance_91.parent = this;
            this.instance_91.setTransform(1699.5, 699.5, 0.5, 0.5);

            this.instance_92 = new lib.CachedTexturedBitmap_1110();
            this.instance_92.parent = this;
            this.instance_92.setTransform(1499.5, 699.5, 0.5, 0.5);

            this.instance_93 = new lib.CachedTexturedBitmap_1110();
            this.instance_93.parent = this;
            this.instance_93.setTransform(1299.5, 699.5, 0.5, 0.5);

            this.instance_94 = new lib.CachedTexturedBitmap_1110();
            this.instance_94.parent = this;
            this.instance_94.setTransform(1099.5, 699.5, 0.5, 0.5);

            this.instance_95 = new lib.CachedTexturedBitmap_1110();
            this.instance_95.parent = this;
            this.instance_95.setTransform(899.5, 699.5, 0.5, 0.5);

            this.instance_96 = new lib.CachedTexturedBitmap_1110();
            this.instance_96.parent = this;
            this.instance_96.setTransform(699.5, 899.5, 0.5, 0.5);

            this.instance_97 = new lib.CachedTexturedBitmap_1110();
            this.instance_97.parent = this;
            this.instance_97.setTransform(499.5, 899.5, 0.5, 0.5);

            this.instance_98 = new lib.CachedTexturedBitmap_1110();
            this.instance_98.parent = this;
            this.instance_98.setTransform(299.5, 899.5, 0.5, 0.5);

            this.instance_99 = new lib.CachedTexturedBitmap_1110();
            this.instance_99.parent = this;
            this.instance_99.setTransform(99.5, 899.5, 0.5, 0.5);

            this.instance_100 = new lib.CachedTexturedBitmap_1113();
            this.instance_100.parent = this;
            this.instance_100.setTransform(-0.5, 899.5, 0.5, 0.5);

            this.instance_101 = new lib.CachedTexturedBitmap_1113();
            this.instance_101.parent = this;
            this.instance_101.setTransform(1899.5, 899.5, 0.5, 0.5);

            this.instance_102 = new lib.CachedTexturedBitmap_1110();
            this.instance_102.parent = this;
            this.instance_102.setTransform(1699.5, 899.5, 0.5, 0.5);

            this.instance_103 = new lib.CachedTexturedBitmap_1110();
            this.instance_103.parent = this;
            this.instance_103.setTransform(1499.5, 899.5, 0.5, 0.5);

            this.instance_104 = new lib.CachedTexturedBitmap_1110();
            this.instance_104.parent = this;
            this.instance_104.setTransform(1299.5, 899.5, 0.5, 0.5);

            this.instance_105 = new lib.CachedTexturedBitmap_1110();
            this.instance_105.parent = this;
            this.instance_105.setTransform(1099.5, 899.5, 0.5, 0.5);

            this.instance_106 = new lib.CachedTexturedBitmap_1110();
            this.instance_106.parent = this;
            this.instance_106.setTransform(899.5, 899.5, 0.5, 0.5);

            this.instance_107 = new lib.CachedTexturedBitmap_1115();
            this.instance_107.parent = this;
            this.instance_107.setTransform(-0.5, -0.5, 0.5, 0.5);

            this.instance_108 = new lib.CachedTexturedBitmap_1114();
            this.instance_108.parent = this;
            this.instance_108.setTransform(1099.5, -0.5, 0.5, 0.5);

            this.instance_109 = new lib.CachedTexturedBitmap_1114();
            this.instance_109.parent = this;
            this.instance_109.setTransform(899.5, -0.5, 0.5, 0.5);

            this.instance_110 = new lib.CachedTexturedBitmap_1114();
            this.instance_110.parent = this;
            this.instance_110.setTransform(699.5, 1899.5, 0.5, 0.5);

            this.instance_111 = new lib.CachedTexturedBitmap_1114();
            this.instance_111.parent = this;
            this.instance_111.setTransform(499.5, 1899.5, 0.5, 0.5);

            this.instance_112 = new lib.CachedTexturedBitmap_1114();
            this.instance_112.parent = this;
            this.instance_112.setTransform(299.5, 1899.5, 0.5, 0.5);

            this.instance_113 = new lib.CachedTexturedBitmap_1114();
            this.instance_113.parent = this;
            this.instance_113.setTransform(99.5, 1899.5, 0.5, 0.5);

            this.instance_114 = new lib.CachedTexturedBitmap_1115();
            this.instance_114.parent = this;
            this.instance_114.setTransform(-0.5, 1899.5, 0.5, 0.5);

            this.instance_115 = new lib.CachedTexturedBitmap_1115();
            this.instance_115.parent = this;
            this.instance_115.setTransform(1899.5, 1899.5, 0.5, 0.5);

            this.instance_116 = new lib.CachedTexturedBitmap_1114();
            this.instance_116.parent = this;
            this.instance_116.setTransform(1699.5, 1899.5, 0.5, 0.5);

            this.instance_117 = new lib.CachedTexturedBitmap_1114();
            this.instance_117.parent = this;
            this.instance_117.setTransform(1499.5, 1899.5, 0.5, 0.5);

            this.instance_118 = new lib.CachedTexturedBitmap_1114();
            this.instance_118.parent = this;
            this.instance_118.setTransform(1299.5, 1899.5, 0.5, 0.5);

            this.instance_119 = new lib.CachedTexturedBitmap_1114();
            this.instance_119.parent = this;
            this.instance_119.setTransform(1099.5, 1899.5, 0.5, 0.5);

            this.instance_120 = new lib.CachedTexturedBitmap_1113();
            this.instance_120.parent = this;
            this.instance_120.setTransform(-0.5, 699.5, 0.5, 0.5);

            this.instance_121 = new lib.CachedTexturedBitmap_1113();
            this.instance_121.parent = this;
            this.instance_121.setTransform(1899.5, 699.5, 0.5, 0.5);

            this.instance_122 = new lib.CachedTexturedBitmap_1110();
            this.instance_122.parent = this;
            this.instance_122.setTransform(99.5, 899.5, 0.5, 0.5);

            this.instance_123 = new lib.CachedTexturedBitmap_1113();
            this.instance_123.parent = this;
            this.instance_123.setTransform(-0.5, 899.5, 0.5, 0.5);

            this.instance_124 = new lib.CachedTexturedBitmap_1113();
            this.instance_124.parent = this;
            this.instance_124.setTransform(1899.5, 899.5, 0.5, 0.5);

            this.instance_125 = new lib.CachedTexturedBitmap_1110();
            this.instance_125.parent = this;
            this.instance_125.setTransform(1699.5, 899.5, 0.5, 0.5);

            this.instance_126 = new lib.CachedTexturedBitmap_1110();
            this.instance_126.parent = this;
            this.instance_126.setTransform(1499.5, 899.5, 0.5, 0.5);

            this.instance_127 = new lib.CachedTexturedBitmap_1110();
            this.instance_127.parent = this;
            this.instance_127.setTransform(1299.5, 899.5, 0.5, 0.5);

            this.instance_128 = new lib.CachedTexturedBitmap_1110();
            this.instance_128.parent = this;
            this.instance_128.setTransform(1099.5, 899.5, 0.5, 0.5);

            this.instance_129 = new lib.CachedTexturedBitmap_1110();
            this.instance_129.parent = this;
            this.instance_129.setTransform(899.5, 899.5, 0.5, 0.5);

            this.instance_130 = new lib.CachedTexturedBitmap_1115();
            this.instance_130.parent = this;
            this.instance_130.setTransform(1899.5, 1899.5, 0.5, 0.5);

            this.instance_131 = new lib.CachedTexturedBitmap_1114();
            this.instance_131.parent = this;
            this.instance_131.setTransform(1299.5, 1899.5, 0.5, 0.5);

            this.instance_132 = new lib.CachedTexturedBitmap_1114();
            this.instance_132.parent = this;
            this.instance_132.setTransform(1099.5, 1899.5, 0.5, 0.5);

            this.instance_133 = new lib.CachedTexturedBitmap_1114();
            this.instance_133.parent = this;
            this.instance_133.setTransform(899.5, 1899.5, 0.5, 0.5);

            this.instance_134 = new lib.CachedTexturedBitmap_1113();
            this.instance_134.parent = this;
            this.instance_134.setTransform(-0.5, 899.5, 0.5, 0.5);

            this.instance_135 = new lib.CachedTexturedBitmap_1113();
            this.instance_135.parent = this;
            this.instance_135.setTransform(1899.5, 899.5, 0.5, 0.5);

            this.instance_136 = new lib.CachedTexturedBitmap_1110();
            this.instance_136.parent = this;
            this.instance_136.setTransform(899.5, 899.5, 0.5, 0.5);

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({ state: [] })
                    .to(
                        {
                            state: [
                                { t: this.instance_1, p: { x: 899.5, y: 899.5 } },
                                { t: this.instance, p: { x: 699.5, y: 899.5 } },
                            ],
                        },
                        58
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_5, p: { x: 899.5, y: 899.5 } },
                                { t: this.instance_4, p: { x: 499.5, y: 899.5 } },
                                { t: this.instance_3, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_2, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_1, p: { x: 699.5, y: 699.5 } },
                                { t: this.instance, p: { x: 1099.5, y: 1099.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_21 },
                                { t: this.instance_20 },
                                { t: this.instance_19 },
                                { t: this.instance_18 },
                                { t: this.instance_17 },
                                { t: this.instance_16 },
                                { t: this.instance_15 },
                                { t: this.instance_14 },
                                { t: this.instance_13 },
                                { t: this.instance_12 },
                                { t: this.instance_11 },
                                { t: this.instance_10 },
                                { t: this.instance_9 },
                                { t: this.instance_8 },
                                { t: this.instance_7 },
                                { t: this.instance_6 },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_48, p: { x: 899.5, y: 899.5 } },
                                { t: this.instance_47, p: { x: 1099.5, y: 899.5 } },
                                { t: this.instance_46, p: { x: 1299.5, y: 899.5 } },
                                { t: this.instance_45, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_44, p: { x: 299.5, y: 899.5 } },
                                { t: this.instance_43, p: { x: 499.5, y: 899.5 } },
                                { t: this.instance_42, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_41, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_40, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_39, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_38, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_37, p: { x: 499.5, y: 699.5 } },
                                { t: this.instance_36, p: { x: 699.5, y: 699.5 } },
                                { t: this.instance_35, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_34, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_33, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_32, p: { x: 699.5, y: 499.5 } },
                                { t: this.instance_31, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_30, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_29, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_28, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_23, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1299.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_74, p: { x: 899.5, y: 899.5 } },
                                { t: this.instance_73, p: { x: 1099.5, y: 899.5 } },
                                { t: this.instance_72, p: { x: 1299.5, y: 899.5 } },
                                { t: this.instance_71, p: { x: 1499.5, y: 899.5 } },
                                { t: this.instance_70, p: { y: 899.5, x: -0.5 } },
                                { t: this.instance_69, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_68, p: { x: 299.5, y: 899.5 } },
                                { t: this.instance_67, p: { x: 499.5, y: 899.5 } },
                                { t: this.instance_66, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_65, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_64, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_63, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_62, p: { x: 1699.5, y: 899.5 } },
                                { t: this.instance_61, p: { x: -0.5, y: 699.5 } },
                                { t: this.instance_60, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_59, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_58, p: { x: 499.5, y: 699.5 } },
                                { t: this.instance_57, p: { x: 699.5, y: 699.5 } },
                                { t: this.instance_56, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_55, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_54, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_53, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_52, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_51, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_48, p: { x: 699.5, y: 499.5 } },
                                { t: this.instance_47, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_46, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_45, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_44, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_43, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_42, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_41, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_40, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_39, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_37, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_36, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_34, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_32, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_31, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_30, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_50, p: { x: -0.5, y: 1299.5 } },
                                { t: this.instance_28, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_23, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1299.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_106, p: { x: 899.5 } },
                                { t: this.instance_105, p: { x: 1099.5 } },
                                { t: this.instance_104, p: { x: 1299.5, y: 899.5 } },
                                { t: this.instance_103, p: { x: 1499.5, y: 899.5 } },
                                { t: this.instance_102, p: { x: 1699.5, y: 899.5 } },
                                { t: this.instance_101, p: { y: 899.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 899.5, x: -0.5 } },
                                { t: this.instance_99, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_98, p: { x: 299.5, y: 899.5 } },
                                { t: this.instance_97, p: { x: 499.5, y: 899.5 } },
                                { t: this.instance_96, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_95, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_94, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_93, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_92, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_91, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 699.5 } },
                                { t: this.instance_89, p: { y: 699.5, x: -0.5 } },
                                { t: this.instance_88, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_87, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_86, p: { x: 499.5, y: 699.5 } },
                                { t: this.instance_85, p: { x: 699.5, y: 699.5 } },
                                { t: this.instance_84, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_83, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_74, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_73, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_82, p: { x: -0.5, y: 499.5 } },
                                { t: this.instance_72, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_71, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_69, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_68, p: { x: 699.5, y: 499.5 } },
                                { t: this.instance_67, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_66, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_65, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_81, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_64, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_63, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_62, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_60, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_59, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_58, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_57, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_56, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_55, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_53, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: 1899.5 } },
                                { t: this.instance_52, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_51, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_48, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_47, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_46, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_45, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_44, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_43, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_42, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_41, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_40, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_39, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_37, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_36, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_34, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_32, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_31, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_30, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_28, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_23, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1299.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                                { t: this.instance_78, p: { x: 299.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 499.5 } },
                                { t: this.instance_76, p: { x: 699.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 1499.5, y: 1899.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_129, p: { x: 899.5 } },
                                { t: this.instance_128, p: { x: 1099.5 } },
                                { t: this.instance_127, p: { x: 1299.5 } },
                                { t: this.instance_126, p: { x: 1499.5 } },
                                { t: this.instance_125, p: { x: 1699.5 } },
                                { t: this.instance_124, p: { y: 899.5 } },
                                { t: this.instance_123, p: { y: 899.5 } },
                                { t: this.instance_122, p: { x: 99.5 } },
                                { t: this.instance_106, p: { x: 299.5 } },
                                { t: this.instance_105, p: { x: 499.5 } },
                                { t: this.instance_104, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_103, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_102, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_99, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_98, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_97, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_121, p: { y: 699.5 } },
                                { t: this.instance_120, p: { y: 699.5, x: -0.5 } },
                                { t: this.instance_96, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_95, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_94, p: { x: 499.5, y: 699.5 } },
                                { t: this.instance_93, p: { x: 699.5, y: 699.5 } },
                                { t: this.instance_92, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_91, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_88, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_87, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_86, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_101, p: { y: 499.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_85, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_84, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_83, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_74, p: { x: 699.5, y: 499.5 } },
                                { t: this.instance_73, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_72, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_71, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_69, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_68, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_90, p: { x: -0.5, y: 299.5 } },
                                { t: this.instance_67, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_66, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_65, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_64, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_63, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_62, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_60, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_59, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_58, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_57, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_56, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_55, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_119, p: { x: 1099.5 } },
                                { t: this.instance_118, p: { x: 1299.5 } },
                                { t: this.instance_117, p: { x: 1499.5 } },
                                { t: this.instance_116, p: { x: 1699.5 } },
                                { t: this.instance_115, p: { x: 1899.5 } },
                                { t: this.instance_114, p: { x: -0.5, y: 1899.5 } },
                                { t: this.instance_113, p: { x: 99.5 } },
                                { t: this.instance_112, p: { x: 299.5 } },
                                { t: this.instance_111, p: { x: 499.5, y: 1899.5 } },
                                { t: this.instance_110, p: { x: 699.5, y: 1899.5 } },
                                { t: this.instance_53, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_52, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_51, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_48, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_47, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_46, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_45, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_44, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_43, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_42, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_41, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_40, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_39, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_37, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_36, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_34, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_32, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_31, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_30, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_28, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_23, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1299.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                                { t: this.instance_109, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_136 },
                                { t: this.instance_129, p: { x: 1099.5 } },
                                { t: this.instance_128, p: { x: 1299.5 } },
                                { t: this.instance_127, p: { x: 1499.5 } },
                                { t: this.instance_126, p: { x: 1699.5 } },
                                { t: this.instance_135 },
                                { t: this.instance_134 },
                                { t: this.instance_125, p: { x: 99.5 } },
                                { t: this.instance_122, p: { x: 299.5 } },
                                { t: this.instance_106, p: { x: 499.5 } },
                                { t: this.instance_105, p: { x: 699.5 } },
                                { t: this.instance_104, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_103, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_102, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_99, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_98, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_124, p: { y: 699.5 } },
                                { t: this.instance_123, p: { y: 699.5 } },
                                { t: this.instance_97, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_96, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_95, p: { x: 499.5, y: 699.5 } },
                                { t: this.instance_94, p: { x: 699.5, y: 699.5 } },
                                { t: this.instance_93, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_92, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_91, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_88, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_87, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_121, p: { y: 499.5 } },
                                { t: this.instance_120, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_86, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_85, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_84, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_83, p: { x: 699.5, y: 499.5 } },
                                { t: this.instance_74, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_73, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_72, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_71, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_69, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_101, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_68, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_67, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_66, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_65, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_64, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_63, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_62, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_60, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_59, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_58, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_57, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_56, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_55, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_133 },
                                { t: this.instance_132 },
                                { t: this.instance_131, p: { x: 1299.5 } },
                                { t: this.instance_119, p: { x: 1499.5 } },
                                { t: this.instance_118, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_117, p: { x: 99.5 } },
                                { t: this.instance_116, p: { x: 299.5 } },
                                { t: this.instance_113, p: { x: 499.5 } },
                                { t: this.instance_112, p: { x: 699.5 } },
                                { t: this.instance_53, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_52, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_51, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_48, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_47, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_46, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_45, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_44, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_43, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_42, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_41, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_40, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_39, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_37, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_36, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_34, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_32, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_31, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_30, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_28, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_23, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1299.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_110, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_129, p: { x: 899.5 } },
                                { t: this.instance_128, p: { x: 1099.5 } },
                                { t: this.instance_127, p: { x: 1299.5 } },
                                { t: this.instance_126, p: { x: 1499.5 } },
                                { t: this.instance_125, p: { x: 1699.5 } },
                                { t: this.instance_135 },
                                { t: this.instance_134 },
                                { t: this.instance_122, p: { x: 99.5 } },
                                { t: this.instance_106, p: { x: 299.5 } },
                                { t: this.instance_105, p: { x: 499.5 } },
                                { t: this.instance_104, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_103, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_102, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_99, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_98, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_97, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_124, p: { y: 699.5 } },
                                { t: this.instance_123, p: { y: 699.5 } },
                                { t: this.instance_96, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_95, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_94, p: { x: 499.5, y: 699.5 } },
                                { t: this.instance_93, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_92, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_91, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_88, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_87, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_121, p: { y: 499.5 } },
                                { t: this.instance_120, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_86, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_85, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_84, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_83, p: { x: 699.5, y: 499.5 } },
                                { t: this.instance_74, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_73, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_72, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_71, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_69, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_101, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_68, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_67, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_66, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_65, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_64, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_63, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_62, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_60, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_59, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_58, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_57, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_56, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_55, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_133 },
                                { t: this.instance_132 },
                                { t: this.instance_131, p: { x: 1299.5 } },
                                { t: this.instance_119, p: { x: 1499.5 } },
                                { t: this.instance_118, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_117, p: { x: 99.5 } },
                                { t: this.instance_116, p: { x: 299.5 } },
                                { t: this.instance_113, p: { x: 499.5 } },
                                { t: this.instance_112, p: { x: 699.5 } },
                                { t: this.instance_53, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_52, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_51, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_48, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_47, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_46, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_45, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_44, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_43, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_42, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_41, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_40, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_39, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_37, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_36, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_34, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_32, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_31, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_30, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_28, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_23, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1299.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_110, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        6
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_126, p: { x: 899.5 } },
                                { t: this.instance_125, p: { x: 1099.5 } },
                                { t: this.instance_122, p: { x: 1299.5 } },
                                { t: this.instance_106, p: { x: 1499.5 } },
                                { t: this.instance_105, p: { x: 1699.5 } },
                                { t: this.instance_135 },
                                { t: this.instance_134 },
                                { t: this.instance_104, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_103, p: { x: 299.5, y: 899.5 } },
                                { t: this.instance_102, p: { x: 499.5, y: 899.5 } },
                                { t: this.instance_99, p: { x: 699.5, y: 899.5 } },
                                { t: this.instance_98, p: { x: 899.5, y: 699.5 } },
                                { t: this.instance_97, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_96, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_95, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_94, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_124, p: { y: 699.5 } },
                                { t: this.instance_123, p: { y: 699.5 } },
                                { t: this.instance_93, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_92, p: { x: 299.5, y: 699.5 } },
                                { t: this.instance_91, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_88, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_87, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_86, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_85, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_121, p: { y: 499.5 } },
                                { t: this.instance_120, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_84, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_83, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_74, p: { x: 499.5, y: 499.5 } },
                                { t: this.instance_73, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_72, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_71, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_69, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_68, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_101, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_67, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_66, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_65, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_64, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_63, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_62, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_60, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_59, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_58, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_57, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_56, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_55, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_53, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_133 },
                                { t: this.instance_132 },
                                { t: this.instance_131, p: { x: 1299.5 } },
                                { t: this.instance_119, p: { x: 1499.5 } },
                                { t: this.instance_118, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_117, p: { x: 99.5 } },
                                { t: this.instance_116, p: { x: 299.5 } },
                                { t: this.instance_113, p: { x: 499.5 } },
                                { t: this.instance_112, p: { x: 699.5 } },
                                { t: this.instance_52, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_51, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_48, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_47, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_46, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_45, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_44, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_43, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_42, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_41, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_40, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_39, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_37, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_36, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_34, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_32, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_31, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_30, p: { x: 1299.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_28, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_27, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_26, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_23, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_22, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_110, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_103, p: { x: 899.5, y: 899.5 } },
                                { t: this.instance_102, p: { x: 1099.5, y: 899.5 } },
                                { t: this.instance_99, p: { x: 1299.5, y: 899.5 } },
                                { t: this.instance_98, p: { x: 1499.5, y: 899.5 } },
                                { t: this.instance_97, p: { x: 1699.5, y: 899.5 } },
                                { t: this.instance_135 },
                                { t: this.instance_134 },
                                { t: this.instance_96, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_95, p: { x: 299.5, y: 899.5 } },
                                { t: this.instance_94, p: { x: 499.5, y: 899.5 } },
                                { t: this.instance_93, p: { x: 1099.5, y: 699.5 } },
                                { t: this.instance_92, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_91, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_88, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_124, p: { y: 699.5 } },
                                { t: this.instance_123, p: { y: 699.5 } },
                                { t: this.instance_87, p: { x: 99.5, y: 699.5 } },
                                { t: this.instance_86, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_85, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_84, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_83, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_74, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_121, p: { y: 499.5 } },
                                { t: this.instance_120, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_73, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_72, p: { x: 299.5, y: 499.5 } },
                                { t: this.instance_71, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_69, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_68, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_67, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_66, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_101, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_65, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_64, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_63, p: { x: 499.5, y: 299.5 } },
                                { t: this.instance_62, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_60, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_59, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_58, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_57, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_56, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_55, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_53, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_52, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_51, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_133 },
                                { t: this.instance_132 },
                                { t: this.instance_131, p: { x: 1299.5 } },
                                { t: this.instance_119, p: { x: 1499.5 } },
                                { t: this.instance_118, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_117, p: { x: 99.5 } },
                                { t: this.instance_116, p: { x: 299.5 } },
                                { t: this.instance_113, p: { x: 499.5 } },
                                { t: this.instance_112, p: { x: 699.5 } },
                                { t: this.instance_48, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_47, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_46, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_45, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_44, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_43, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_42, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_41, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_40, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_39, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_38, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_37, p: { x: 1299.5, y: 1499.5 } },
                                { t: this.instance_36, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_35, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_34, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_33, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_32, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_31, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_30, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_29, p: { x: 1099.5, y: 1299.5 } },
                                { t: this.instance_28, p: { x: 1499.5, y: 1299.5 } },
                                { t: this.instance_27, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_26, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_25, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_23, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_22, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_5, p: { x: 1099.5, y: 1099.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 699.5, y: 1099.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_110, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_86, p: { x: 1099.5, y: 899.5 } },
                                { t: this.instance_85, p: { x: 1499.5, y: 899.5 } },
                                { t: this.instance_84, p: { x: 1699.5, y: 899.5 } },
                                { t: this.instance_135 },
                                { t: this.instance_134 },
                                { t: this.instance_83, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_74, p: { x: 299.5, y: 899.5 } },
                                { t: this.instance_73, p: { x: 1299.5, y: 699.5 } },
                                { t: this.instance_72, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_71, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_124, p: { y: 699.5 } },
                                { t: this.instance_123, p: { y: 699.5 } },
                                { t: this.instance_69, p: { x: 899.5, y: 499.5 } },
                                { t: this.instance_68, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_67, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_66, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_65, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_121, p: { y: 499.5 } },
                                { t: this.instance_120, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_64, p: { x: 99.5, y: 499.5 } },
                                { t: this.instance_63, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_62, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_60, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_59, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_58, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_101, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_100, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_57, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_56, p: { x: 299.5, y: 299.5 } },
                                { t: this.instance_55, p: { x: 699.5, y: 299.5 } },
                                { t: this.instance_53, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_52, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_51, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_48, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_47, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_46, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_45, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_44, p: { x: 499.5, y: 99.5 } },
                                { t: this.instance_43, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_133 },
                                { t: this.instance_132 },
                                { t: this.instance_131, p: { x: 1299.5 } },
                                { t: this.instance_119, p: { x: 1499.5 } },
                                { t: this.instance_118, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_117, p: { x: 99.5 } },
                                { t: this.instance_116, p: { x: 299.5 } },
                                { t: this.instance_113, p: { x: 499.5 } },
                                { t: this.instance_112, p: { x: 699.5 } },
                                { t: this.instance_42, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_41, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_40, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_39, p: { x: 1499.5, y: 1699.5 } },
                                { t: this.instance_38, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_37, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_36, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_35, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_34, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_33, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_32, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_31, p: { x: 1499.5, y: 1499.5 } },
                                { t: this.instance_30, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_29, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_28, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_27, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_26, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_25, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_24, p: { x: 1699.5, y: 1299.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: -0.5 } },
                                { t: this.instance_23, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_22, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_5, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_4, p: { x: 699.5, y: 1299.5 } },
                                { t: this.instance_3, p: { x: 899.5, y: 1099.5 } },
                                { t: this.instance_50, p: { x: 1899.5, y: 1099.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_2, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_1, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 499.5, y: 1099.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_110, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_62, p: { x: 1699.5, y: 899.5 } },
                                { t: this.instance_124, p: { y: 899.5 } },
                                { t: this.instance_123, p: { y: 899.5 } },
                                { t: this.instance_60, p: { x: 99.5, y: 899.5 } },
                                { t: this.instance_59, p: { x: 1499.5, y: 699.5 } },
                                { t: this.instance_58, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_121, p: { y: 699.5 } },
                                { t: this.instance_57, p: { x: 1099.5, y: 499.5 } },
                                { t: this.instance_56, p: { x: 1299.5, y: 499.5 } },
                                { t: this.instance_55, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_53, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_120, p: { y: 499.5, x: 1899.5 } },
                                { t: this.instance_101, p: { y: 499.5, x: -0.5 } },
                                { t: this.instance_52, p: { x: 899.5, y: 299.5 } },
                                { t: this.instance_51, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_48, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_47, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_46, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_100, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_90, p: { x: -0.5, y: 299.5 } },
                                { t: this.instance_45, p: { x: 99.5, y: 299.5 } },
                                { t: this.instance_44, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_43, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_42, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_41, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_40, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_89, p: { y: 99.5, x: 1899.5 } },
                                { t: this.instance_82, p: { x: -0.5, y: 99.5 } },
                                { t: this.instance_39, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_38, p: { x: 299.5, y: 99.5 } },
                                { t: this.instance_37, p: { x: 699.5, y: 99.5 } },
                                { t: this.instance_133 },
                                { t: this.instance_132 },
                                { t: this.instance_131, p: { x: 1299.5 } },
                                { t: this.instance_119, p: { x: 1499.5 } },
                                { t: this.instance_118, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_117, p: { x: 99.5 } },
                                { t: this.instance_116, p: { x: 299.5 } },
                                { t: this.instance_113, p: { x: 499.5 } },
                                { t: this.instance_112, p: { x: 699.5 } },
                                { t: this.instance_36, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_35, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_34, p: { x: 1299.5, y: 1699.5 } },
                                { t: this.instance_33, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_81, p: { y: 1699.5, x: 1899.5 } },
                                { t: this.instance_79, p: { x: -0.5, y: 1699.5 } },
                                { t: this.instance_32, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_31, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_30, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_29, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_28, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_27, p: { x: 1099.5, y: 1499.5 } },
                                { t: this.instance_26, p: { x: 1699.5, y: 1499.5 } },
                                { t: this.instance_70, p: { y: 1499.5, x: 1899.5 } },
                                { t: this.instance_61, p: { x: -0.5, y: 1499.5 } },
                                { t: this.instance_25, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_24, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_23, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_22, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_5, p: { x: 899.5, y: 1299.5 } },
                                { t: this.instance_54, p: { y: 1299.5, x: 1899.5 } },
                                { t: this.instance_50, p: { x: -0.5, y: 1299.5 } },
                                { t: this.instance_4, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_3, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_2, p: { x: 499.5, y: 1299.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_1, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance, p: { x: 299.5, y: 1099.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_110, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_78, p: { x: 99.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 299.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_121, p: { y: 899.5 } },
                                { t: this.instance_120, p: { y: 899.5, x: -0.5 } },
                                { t: this.instance_43, p: { x: 1699.5, y: 699.5 } },
                                { t: this.instance_101, p: { y: 699.5, x: 1899.5 } },
                                { t: this.instance_42, p: { x: 1499.5, y: 499.5 } },
                                { t: this.instance_41, p: { x: 1699.5, y: 499.5 } },
                                { t: this.instance_100, p: { y: 499.5, x: 1899.5 } },
                                { t: this.instance_40, p: { x: 1099.5, y: 299.5 } },
                                { t: this.instance_39, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_38, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_37, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_90, p: { x: 1899.5, y: 299.5 } },
                                { t: this.instance_89, p: { y: 299.5, x: -0.5 } },
                                { t: this.instance_36, p: { x: 899.5, y: 99.5 } },
                                { t: this.instance_35, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_34, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_33, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_32, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_81, p: { y: 99.5, x: -0.5 } },
                                { t: this.instance_31, p: { x: 99.5, y: 99.5 } },
                                { t: this.instance_131, p: { x: 899.5 } },
                                { t: this.instance_119, p: { x: 1099.5 } },
                                { t: this.instance_118, p: { x: 1299.5 } },
                                { t: this.instance_117, p: { x: 1699.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_116, p: { x: 99.5 } },
                                { t: this.instance_113, p: { x: 299.5 } },
                                { t: this.instance_112, p: { x: 499.5 } },
                                { t: this.instance_111, p: { x: 699.5, y: 1899.5 } },
                                { t: this.instance_30, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_29, p: { x: 1099.5, y: 1699.5 } },
                                { t: this.instance_28, p: { x: 1699.5, y: 1699.5 } },
                                { t: this.instance_79, p: { x: 1899.5, y: 1699.5 } },
                                { t: this.instance_70, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_27, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_26, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_25, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_24, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_23, p: { x: 899.5, y: 1499.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 1499.5 } },
                                { t: this.instance_54, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_22, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_5, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_4, p: { x: 499.5, y: 1499.5 } },
                                { t: this.instance_3, p: { x: 699.5, y: 1499.5 } },
                                { t: this.instance_50, p: { x: -0.5, y: 1299.5 } },
                                { t: this.instance_2, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_1, p: { x: 299.5, y: 1299.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance, p: { x: 99.5, y: 1099.5 } },
                                { t: this.instance_110, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_109, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_108, p: { x: 1299.5, y: -0.5 } },
                                { t: this.instance_80, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_78, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                                { t: this.instance_77, p: { x: 99.5 } },
                                { t: this.instance_76, p: { x: 499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 699.5, y: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_90, p: { x: 1899.5, y: 699.5 } },
                                { t: this.instance_89, p: { y: 499.5, x: 1899.5 } },
                                { t: this.instance_30, p: { x: 1299.5, y: 299.5 } },
                                { t: this.instance_29, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_28, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_82, p: { x: 1899.5, y: 299.5 } },
                                { t: this.instance_27, p: { x: 1099.5, y: 99.5 } },
                                { t: this.instance_26, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_25, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_24, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_81, p: { y: 99.5, x: 1899.5 } },
                                { t: this.instance_79, p: { x: -0.5, y: 99.5 } },
                                { t: this.instance_113, p: { x: 899.5 } },
                                { t: this.instance_112, p: { x: 1099.5 } },
                                { t: this.instance_130 },
                                { t: this.instance_115, p: { x: -0.5 } },
                                { t: this.instance_111, p: { x: 99.5, y: 1899.5 } },
                                { t: this.instance_110, p: { x: 299.5, y: 1899.5 } },
                                { t: this.instance_109, p: { x: 499.5, y: 1899.5 } },
                                { t: this.instance_108, p: { x: 699.5, y: 1899.5 } },
                                { t: this.instance_23, p: { x: 899.5, y: 1699.5 } },
                                { t: this.instance_70, p: { y: 1699.5, x: 1899.5 } },
                                { t: this.instance_61, p: { x: -0.5, y: 1699.5 } },
                                { t: this.instance_22, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_5, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_4, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_3, p: { x: 699.5, y: 1699.5 } },
                                { t: this.instance_54, p: { y: 1499.5, x: -0.5 } },
                                { t: this.instance_2, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_1, p: { x: 299.5, y: 1499.5 } },
                                { t: this.instance_50, p: { x: -0.5, y: 1299.5 } },
                                { t: this.instance, p: { x: 99.5, y: 1299.5 } },
                                { t: this.instance_49, p: { y: 1099.5 } },
                                { t: this.instance_80, p: { x: 899.5, y: -0.5 } },
                                { t: this.instance_78, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 1299.5 } },
                                { t: this.instance_76, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_114, p: { x: 1899.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: -0.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_24, p: { x: 1499.5, y: 299.5 } },
                                { t: this.instance_23, p: { x: 1699.5, y: 299.5 } },
                                { t: this.instance_70, p: { y: 299.5, x: 1899.5 } },
                                { t: this.instance_22, p: { x: 1299.5, y: 99.5 } },
                                { t: this.instance_5, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_4, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_61, p: { x: 1899.5, y: 99.5 } },
                                { t: this.instance_111, p: { x: 899.5, y: 1899.5 } },
                                { t: this.instance_114, p: { x: -0.5, y: 1899.5 } },
                                { t: this.instance_110, p: { x: 99.5, y: 1899.5 } },
                                { t: this.instance_109, p: { x: 299.5, y: 1899.5 } },
                                { t: this.instance_108, p: { x: 499.5, y: 1899.5 } },
                                { t: this.instance_80, p: { x: 699.5, y: 1899.5 } },
                                { t: this.instance_54, p: { y: 1699.5, x: -0.5 } },
                                { t: this.instance_3, p: { x: 99.5, y: 1699.5 } },
                                { t: this.instance_2, p: { x: 299.5, y: 1699.5 } },
                                { t: this.instance_1, p: { x: 499.5, y: 1699.5 } },
                                { t: this.instance_50, p: { x: -0.5, y: 1499.5 } },
                                { t: this.instance, p: { x: 99.5, y: 1499.5 } },
                                { t: this.instance_49, p: { y: 1299.5 } },
                                { t: this.instance_78, p: { x: 1099.5, y: -0.5 } },
                                { t: this.instance_77, p: { x: 1299.5 } },
                                { t: this.instance_76, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: 1899.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_2, p: { x: 1499.5, y: 99.5 } },
                                { t: this.instance_1, p: { x: 1699.5, y: 99.5 } },
                                { t: this.instance_54, p: { y: 99.5, x: 1899.5 } },
                                { t: this.instance_114, p: { x: -0.5, y: 1899.5 } },
                                { t: this.instance_108, p: { x: 99.5, y: 1899.5 } },
                                { t: this.instance_80, p: { x: 299.5, y: 1899.5 } },
                                { t: this.instance_78, p: { x: 499.5, y: 1899.5 } },
                                { t: this.instance_50, p: { x: -0.5, y: 1699.5 } },
                                { t: this.instance_49, p: { y: 1499.5 } },
                                { t: this.instance_77, p: { x: 1299.5 } },
                                { t: this.instance_76, p: { x: 1499.5, y: -0.5 } },
                                { t: this.instance_75, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: 1899.5 } },
                                { t: this.instance, p: { x: 99.5, y: 1699.5 } },
                            ],
                        },
                        2
                    )
                    .to(
                        {
                            state: [
                                { t: this.instance_114, p: { x: -0.5, y: 1899.5 } },
                                { t: this.instance_76, p: { x: 99.5, y: 1899.5 } },
                                { t: this.instance_49, p: { y: 1699.5 } },
                                { t: this.instance_75, p: { x: 1699.5, y: -0.5 } },
                                { t: this.instance_107, p: { x: 1899.5 } },
                            ],
                        },
                        2
                    )
                    .to({ state: [] }, 2)
                    .to({ state: [] }, 1)
                    .wait(1)
            );

            // レイヤー_3
            this.instance_137 = new lib.CachedTexturedBitmap_1180();
            this.instance_137.parent = this;
            this.instance_137.setTransform(1171.25, 1026.8, 0.5, 0.5);

            this.instance_138 = new lib.CachedTexturedBitmap_1179();
            this.instance_138.parent = this;
            this.instance_138.setTransform(1088.2, 1026.8, 0.5, 0.5);

            this.instance_139 = new lib.CachedTexturedBitmap_1178();
            this.instance_139.parent = this;
            this.instance_139.setTransform(1009.35, 1032.55, 0.5, 0.5);

            this.instance_140 = new lib.CachedTexturedBitmap_1177();
            this.instance_140.parent = this;
            this.instance_140.setTransform(932.5, 1028.8, 0.5, 0.5);

            this.instance_141 = new lib.CachedTexturedBitmap_1176();
            this.instance_141.parent = this;
            this.instance_141.setTransform(838.7, 1040.7, 0.5, 0.5);

            this.instance_142 = new lib.CachedTexturedBitmap_1175();
            this.instance_142.parent = this;
            this.instance_142.setTransform(756, 1029.65, 0.5, 0.5);

            this.instance_143 = new lib.CachedTexturedBitmap_1174();
            this.instance_143.parent = this;
            this.instance_143.setTransform(1174.95, 901.6, 0.5, 0.5);

            this.instance_144 = new lib.CachedTexturedBitmap_1173();
            this.instance_144.parent = this;
            this.instance_144.setTransform(1092.8, 903.1, 0.5, 0.5);

            this.instance_145 = new lib.CachedTexturedBitmap_1172();
            this.instance_145.parent = this;
            this.instance_145.setTransform(1008.05, 905.35, 0.5, 0.5);

            this.instance_146 = new lib.CachedTexturedBitmap_1171();
            this.instance_146.parent = this;
            this.instance_146.setTransform(924.55, 901.1, 0.5, 0.5);

            this.instance_147 = new lib.CachedTexturedBitmap_1170();
            this.instance_147.parent = this;
            this.instance_147.setTransform(846.95, 900.95, 0.5, 0.5);

            this.instance_148 = new lib.CachedTexturedBitmap_1169();
            this.instance_148.parent = this;
            this.instance_148.setTransform(752, 898.55, 0.5, 0.5);

            this.instance_149 = new lib.copy2('synched', 0);
            this.instance_149.parent = this;
            this.instance_149.setTransform(1000, 1000);
            this.instance_149._off = true;

            this.instance_150 = new lib.to2('synched', 0);
            this.instance_150.parent = this;
            this.instance_150.setTransform(1000, 1000);
            this.instance_150.alpha = 0;

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({ state: [] })
                    .to(
                        {
                            state: [
                                { t: this.instance_148 },
                                { t: this.instance_147 },
                                { t: this.instance_146 },
                                { t: this.instance_145 },
                                { t: this.instance_144 },
                                { t: this.instance_143 },
                                { t: this.instance_142 },
                                { t: this.instance_141 },
                                { t: this.instance_140 },
                                { t: this.instance_139 },
                                { t: this.instance_138 },
                                { t: this.instance_137 },
                            ],
                        },
                        4
                    )
                    .to({ state: [{ t: this.instance_149 }] }, 31)
                    .to({ state: [{ t: this.instance_150 }] }, 4)
                    .to({ state: [] }, 3)
                    .wait(58)
            );
            this.timeline.addTween(
                cjs.Tween.get(this.instance_149)
                    .wait(35)
                    .to({ _off: false }, 0)
                    .to({ _off: true, alpha: 0 }, 4)
                    .wait(61)
            );

            // レイヤー_1
            this.instance_151 = new lib.CachedTexturedBitmap_1128();
            this.instance_151.parent = this;
            this.instance_151.setTransform(600.05, 600, 0.5, 0.5);

            this.instance_152 = new lib.CachedTexturedBitmap_1129();
            this.instance_152.parent = this;
            this.instance_152.setTransform(600.05, 600, 0.5, 0.5);

            this.instance_153 = new lib.CachedTexturedBitmap_1130();
            this.instance_153.parent = this;
            this.instance_153.setTransform(600.05, 600, 0.5, 0.5);

            this.instance_154 = new lib.CachedTexturedBitmap_1131();
            this.instance_154.parent = this;
            this.instance_154.setTransform(600.05, 600, 0.5, 0.5);

            this.instance_155 = new lib.CachedTexturedBitmap_1132();
            this.instance_155.parent = this;
            this.instance_155.setTransform(600, 600, 0.5, 0.5);

            this.instance_156 = new lib.CachedTexturedBitmap_1133();
            this.instance_156.parent = this;
            this.instance_156.setTransform(600, 600, 0.5, 0.5);

            this.instance_157 = new lib.CachedTexturedBitmap_1134();
            this.instance_157.parent = this;
            this.instance_157.setTransform(600, 600, 0.5, 0.5);

            this.instance_158 = new lib.CachedTexturedBitmap_1135();
            this.instance_158.parent = this;
            this.instance_158.setTransform(600, 600, 0.5, 0.5);

            this.instance_159 = new lib.CachedTexturedBitmap_1136();
            this.instance_159.parent = this;
            this.instance_159.setTransform(600, 600, 0.5, 0.5);

            this.instance_160 = new lib.CachedTexturedBitmap_1137();
            this.instance_160.parent = this;
            this.instance_160.setTransform(600, 600, 0.5, 0.5);

            this.instance_161 = new lib.CachedTexturedBitmap_1138();
            this.instance_161.parent = this;
            this.instance_161.setTransform(600, 600, 0.5, 0.5);

            this.instance_162 = new lib.CachedTexturedBitmap_1139();
            this.instance_162.parent = this;
            this.instance_162.setTransform(600, 600, 0.5, 0.5);

            this.instance_163 = new lib.CachedTexturedBitmap_1140();
            this.instance_163.parent = this;
            this.instance_163.setTransform(600, 600, 0.5, 0.5);

            this.instance_164 = new lib.CachedTexturedBitmap_1141();
            this.instance_164.parent = this;
            this.instance_164.setTransform(600, 600, 0.5, 0.5);

            this.instance_165 = new lib.CachedTexturedBitmap_1142();
            this.instance_165.parent = this;
            this.instance_165.setTransform(600, 600, 0.5, 0.5);

            this.instance_166 = new lib.CachedTexturedBitmap_1144();
            this.instance_166.parent = this;
            this.instance_166.setTransform(600, 600, 0.5, 0.5);

            this.instance_167 = new lib.CachedTexturedBitmap_1145();
            this.instance_167.parent = this;
            this.instance_167.setTransform(601.6, 601.6, 0.5, 0.5);

            this.instance_168 = new lib.CachedTexturedBitmap_1146();
            this.instance_168.parent = this;
            this.instance_168.setTransform(607, 607, 0.5, 0.5);

            this.instance_169 = new lib.CachedTexturedBitmap_1147();
            this.instance_169.parent = this;
            this.instance_169.setTransform(617.6, 617.6, 0.5, 0.5);

            this.instance_170 = new lib.CachedTexturedBitmap_1148();
            this.instance_170.parent = this;
            this.instance_170.setTransform(635.55, 635.55, 0.5, 0.5);

            this.instance_171 = new lib.CachedTexturedBitmap_1149();
            this.instance_171.parent = this;
            this.instance_171.setTransform(665.1, 665.1, 0.5, 0.5);

            this.instance_172 = new lib.CachedTexturedBitmap_1150();
            this.instance_172.parent = this;
            this.instance_172.setTransform(714.45, 714.45, 0.5, 0.5);

            this.instance_173 = new lib.CachedTexturedBitmap_1151();
            this.instance_173.parent = this;
            this.instance_173.setTransform(793.3, 793.3, 0.5, 0.5);

            this.instance_174 = new lib.CachedTexturedBitmap_1152();
            this.instance_174.parent = this;
            this.instance_174.setTransform(863.7, 863.7, 0.5, 0.5);

            this.instance_175 = new lib.CachedTexturedBitmap_1153();
            this.instance_175.parent = this;
            this.instance_175.setTransform(893.15, 893.15, 0.5, 0.5);

            this.instance_176 = new lib.CachedTexturedBitmap_1155();
            this.instance_176.parent = this;
            this.instance_176.setTransform(900, 900, 0.5, 0.5);

            this.timeline.addTween(
                cjs.Tween.get({})
                    .to({ state: [] })
                    .to({ state: [{ t: this.instance_151 }] }, 4)
                    .to({ state: [{ t: this.instance_152 }] }, 1)
                    .to({ state: [{ t: this.instance_153 }] }, 1)
                    .to({ state: [{ t: this.instance_154 }] }, 1)
                    .to({ state: [{ t: this.instance_155 }] }, 1)
                    .to({ state: [{ t: this.instance_156 }] }, 1)
                    .to({ state: [{ t: this.instance_157 }] }, 1)
                    .to({ state: [{ t: this.instance_158 }] }, 1)
                    .to({ state: [{ t: this.instance_159 }] }, 1)
                    .to({ state: [{ t: this.instance_160 }] }, 1)
                    .to({ state: [{ t: this.instance_161 }] }, 1)
                    .to({ state: [{ t: this.instance_162 }] }, 1)
                    .to({ state: [{ t: this.instance_163 }] }, 1)
                    .to({ state: [{ t: this.instance_164 }] }, 1)
                    .to({ state: [{ t: this.instance_165 }] }, 1)
                    .to({ state: [{ t: this.instance_166 }] }, 1)
                    .to({ state: [{ t: this.instance_166 }] }, 16)
                    .to({ state: [{ t: this.instance_167 }] }, 1)
                    .to({ state: [{ t: this.instance_168 }] }, 1)
                    .to({ state: [{ t: this.instance_169 }] }, 1)
                    .to({ state: [{ t: this.instance_170 }] }, 1)
                    .to({ state: [{ t: this.instance_171 }] }, 1)
                    .to({ state: [{ t: this.instance_172 }] }, 1)
                    .to({ state: [{ t: this.instance_173 }] }, 1)
                    .to({ state: [{ t: this.instance_174 }] }, 1)
                    .to({ state: [{ t: this.instance_175 }] }, 1)
                    .to({ state: [{ t: this.instance_176 }] }, 1)
                    .to({ state: [{ t: this.instance_176 }] }, 10)
                    .to({ state: [] }, 8)
                    .wait(37)
            );

            // レイヤー_6
            this.instance_177 = new lib.CachedTexturedBitmap_1156();
            this.instance_177.parent = this;
            this.instance_177.setTransform(-48.45, -52.45, 0.5, 0.5);

            this.timeline.addTween(
                cjs.Tween.get(this.instance_177).to({ _off: true }, 71).wait(29)
            );
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0, 0, 2069.1, 2065.1);
        // library properties:
        lib.properties = {
            id: 'C00732BD7D5F864CA8A29C187EBDC497',
            width: 2000,
            height: 2000,
            fps: 20,
            color: '#FFFFFF',
            opacity: 1.0,
            manifest: [
                {
                    src: '/img/loading/CachedTexturedBitmap_1156.png',
                    id: 'CachedTexturedBitmap_1156',
                },
                { src: '/img/loading/bft_op_pc_atlas_.png', id: 'bft_op_pc_atlas_' },
                { src: '/img/loading/bft_op_pc_atlas_2.png', id: 'bft_op_pc_atlas_2' },
                { src: '/img/loading/bft_op_pc_atlas_3.png', id: 'bft_op_pc_atlas_3' },
                { src: '/img/loading/bft_op_pc_atlas_4.png', id: 'bft_op_pc_atlas_4' },
                { src: '/img/loading/bft_op_pc_atlas_5.png', id: 'bft_op_pc_atlas_5' },
                { src: '/img/loading/bft_op_pc_atlas_6.png', id: 'bft_op_pc_atlas_6' },
                { src: '/img/loading/bft_op_pc_atlas_7.png', id: 'bft_op_pc_atlas_7' },
                { src: '/img/loading/bft_op_pc_atlas_8.png', id: 'bft_op_pc_atlas_8' },
                { src: '/img/loading/bft_op_pc_atlas_9.png', id: 'bft_op_pc_atlas_9' },
                { src: '/img/loading/bft_op_pc_atlas_10.png', id: 'bft_op_pc_atlas_10' },
                { src: '/img/loading/bft_op_pc_atlas_11.png', id: 'bft_op_pc_atlas_11' },
                { src: '/img/loading/bft_op_pc_atlas_12.png', id: 'bft_op_pc_atlas_12' },
                { src: '/img/loading/bft_op_pc_atlas_13.png', id: 'bft_op_pc_atlas_13' },
                { src: '/img/loading/bft_op_pc_atlas_14.png', id: 'bft_op_pc_atlas_14' },
                { src: '/img/loading/bft_op_pc_atlas_15.png', id: 'bft_op_pc_atlas_15' },
                { src: '/img/loading/bft_op_pc_atlas_16.png', id: 'bft_op_pc_atlas_16' },
                { src: '/img/loading/bft_op_pc_atlas_17.png', id: 'bft_op_pc_atlas_17' },
                { src: '/img/loading/bft_op_pc_atlas_18.png', id: 'bft_op_pc_atlas_18' },
            ],
            preloads: [],
        };

        // bootstrap callback support:

        (lib.Stage = function (canvas) {
            createjs.Stage.call(this, canvas);
        }).prototype = p = new createjs.Stage();

        p.setAutoPlay = function (autoPlay) {
            this.tickEnabled = autoPlay;
        };
        p.play = function () {
            this.tickEnabled = true;
            this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
        };
        p.stop = function (ms) {
            if (ms) this.seek(ms);
            this.tickEnabled = false;
        };
        p.seek = function (ms) {
            this.tickEnabled = true;
            this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
        };
        p.getDuration = function () {
            return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
        };

        p.getTimelinePosition = function () {
            return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
        };

        AdobeAn.bootcompsLoaded = AdobeAn.bootcompsLoaded || [];
        if (!AdobeAn.bootstrapListeners) {
            AdobeAn.bootstrapListeners = [];
        }

        AdobeAn.bootstrapCallback = function (fnCallback) {
            AdobeAn.bootstrapListeners.push(fnCallback);
            if (AdobeAn.bootcompsLoaded.length > 0) {
                for (let i = 0; i < AdobeAn.bootcompsLoaded.length; ++i) {
                    fnCallback(AdobeAn.bootcompsLoaded[i]);
                }
            }
        };

        AdobeAn.compositions = AdobeAn.compositions || {};
        AdobeAn.compositions['C00732BD7D5F864CA8A29C187EBDC497'] = {
            getStage: function () {
                return this.exportRoot.getStage();
            },
            getLibrary: function () {
                return lib;
            },
            getSpriteSheet: function () {
                return ss;
            },
            getImages: function () {
                return img;
            },
        };

        AdobeAn.compositionLoaded = function (id) {
            AdobeAn.bootcompsLoaded.push(id);
            for (let j = 0; j < AdobeAn.bootstrapListeners.length; j++) {
                AdobeAn.bootstrapListeners[j](id);
            }
        };

        AdobeAn.getComposition = function (id) {
            return this.compositions[id];
        };

        AdobeAn.makeResponsive = (isResp, respDim, isScale, scaleType, domContainers) => {
            let lastW,
                lastH,
                lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            let resizeCanvas = () => {
                let w = lib.properties.width,
                    h = lib.properties.height;
                let iw = window.innerWidth,
                    ih = window.innerHeight;
                let pRatio = window.devicePixelRatio || 1,
                    xRatio = iw / w,
                    yRatio = ih / h,
                    sRatio = 1;
                if (isResp) {
                    if (
                        (respDim == 'width' && lastW == iw) ||
                        (respDim == 'height' && lastH == ih)
                    ) {
                        sRatio = lastS;
                    } else if (!isScale) {
                        if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                    } else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    } else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                domContainers[0].width = w * pRatio * sRatio;
                domContainers[0].height = h * pRatio * sRatio;
                domContainers.forEach(function (container) {
                    container.style.width = w * sRatio + 'px';
                    container.style.height = h * sRatio + 'px';
                });
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw;
                lastH = ih;
                lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            };
            resizeCanvas();
        };
    }
}
