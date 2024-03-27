(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Wheel_Right_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aj2GUIibibIAAqMIKJAAICaCbIAAKMg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wheel_Right_Button, new cjs.Rectangle(-40.2,-40.4,80.5,80.8), null);


(lib.Wheel_Left_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AirFIIibibIAAn0IHyAAICbCaIAAH1g");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wheel_Left_Button, new cjs.Rectangle(-32.7,-32.8,65.4,65.6), null);


(lib.Tooth_Right_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjtlGIDuAAIDtH1InbCYg");
	this.shape.setTransform(-7.725,-7.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak7AAIHciYICbCZIncCYg");
	this.shape_1.setTransform(0.025,25.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C400").s().p("AApCuIjsn1ICbCaIDsH2g");
	this.shape_2.setTransform(12,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ak7D6IAAqNIDwAAICaCaIDtH2IncCXg");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tooth_Right_In, new cjs.Rectangle(-31.5,-40.4,63.1,80.9), null);


(lib.Tooth_Right_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ak7D6IAAqNIDwAAICaCaIDtH2IncCXg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tooth_Right_Button, new cjs.Rectangle(-31.5,-40.4,63.1,80.9), null);


(lib.Tooth_Right_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ak7D6IAAqNIDwAAICaCaIDtH2IncCXg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tooth_Right_Buttoff, new cjs.Rectangle(-31.5,-40.4,63.1,80.9), null);


(lib.Tooth_Left_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Aj5CoIDrnuIEIAAIAAKNg");
	this.shape.setTransform(-7.775,-7.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AirgBIibibIHyCeICbCbg");
	this.shape_1.setTransform(-0.025,24.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C400").s().p("AhND6IAAqNICaCbIAAKMg");
	this.shape_2.setTransform(24.95,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AirD2IibibIDrnuIEHAAICbCbIAAKMg");
	this.shape_3.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tooth_Left_In, new cjs.Rectangle(-32.7,-40.4,65.4,80.9), null);


(lib.Tooth_Left_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AirD2IibibIDrnuIEHAAICbCbIAAKMg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tooth_Left_Button, new cjs.Rectangle(-32.7,-40.4,65.4,80.9), null);


(lib.Tooth_Left_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AirD2IibibIDrnuIEHAAICbCbIAAKMg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tooth_Left_Buttoff, new cjs.Rectangle(-32.7,-40.4,65.4,80.9), null);


(lib.Tear_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3FFB3").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape.setTransform(12.925,27.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_1.setTransform(12.825,-13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00D800").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_2.setTransform(-7.725,-7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006B6B").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_3.setTransform(12.825,-13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009999").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_4.setTransform(-7.725,-7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCCC").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_5.setTransform(12.925,27.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003FA3").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_6.setTransform(12.825,-13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005EF4").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_7.setTransform(-7.725,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5A99FF").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_8.setTransform(12.925,27.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#280066").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_9.setTransform(12.825,-13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A00BF").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_10.setTransform(-7.725,-7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8131FF").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_11.setTransform(12.925,27.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660066").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_12.setTransform(12.825,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A000A0").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_13.setTransform(-7.725,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA00EA").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_14.setTransform(12.925,27.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_15.setTransform(12.825,-13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_16.setTransform(-7.725,-7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9999").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_17.setTransform(12.925,27.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C17200").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_18.setTransform(12.825,-13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_19.setTransform(-7.725,-7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFEBCC").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_20.setTransform(12.925,27.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C4C400").s().p("AA1DIIkEopICbCaIEEIpg");
	this.shape_21.setTransform(12.825,-13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjOA1IECkDICbCaIkCEEg");
	this.shape_22.setTransform(12.925,27.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AkCCTIEBopIEEIpIkDEEg");
	this.shape_23.setTransform(-7.725,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	// Layer_2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00D800").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_24.setTransform(0,0.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009999").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_25.setTransform(0,0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#005EF4").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_26.setTransform(0,0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A00BF").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_27.setTransform(0,0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A000A0").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_28.setTransform(0,0.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_29.setTransform(0,0.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_30.setTransform(0,0.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape_31.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-48.4,67.2,96.9);


(lib.Tear_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tear_Button, new cjs.Rectangle(-33.6,-48.4,67.2,96.9), null);


(lib.Tear_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlPBGIEBoqICaCbIEEIpIkDEFg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tear_Buttoff, new cjs.Rectangle(-33.6,-48.4,67.2,96.9), null);


(lib.Star_Top_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA00EA").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape.setTransform(9.3,-9.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8DFF").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_1.setTransform(9.3,-9.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD7DFD").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_2.setTransform(9.3,-9.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FA6EFA").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_3.setTransform(9.3,-9.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F85EF8").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_4.setTransform(9.3,-9.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F64EF6").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_5.setTransform(9.3,-9.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F33FF3").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_6.setTransform(9.3,-9.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F12FF1").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_7.setTransform(9.3,-9.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EF1FEF").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_8.setTransform(9.3,-9.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC10EC").s().p("AiPCRIo4iRII3iRICQo6ICRI6II3CRIo3CRIiQI7g");
	this.shape_9.setTransform(9.3,-9.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8DFF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_10.setTransform(0.025,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE1FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_11.setTransform(0.025,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD8FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_12.setTransform(0.025,6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCEFF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_13.setTransform(0.025,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC5FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_14.setTransform(0.025,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBCFF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_15.setTransform(0.025,6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB2FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_16.setTransform(0.025,6.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFA9FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_17.setTransform(0.025,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFA0FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_18.setTransform(0.025,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF96FF").s().p("ACdivIKIAVIi5C5Io4CRgAskAfIC5i5IGOgVICqCmIi5C5g");
	this.shape_19.setTransform(0.025,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A000A0").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_20.setTransform(-4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA00EA").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_21.setTransform(-4,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E200E2").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_22.setTransform(-4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DA00DA").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_23.setTransform(-4,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D100D1").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_24.setTransform(-4,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C900C9").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_25.setTransform(-4,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C100C1").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_26.setTransform(-4,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B900B9").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_27.setTransform(-4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B000B0").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_28.setTransform(-4,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A800A8").s().p("AjEDuIgBkiICQo7IC5i5IBCK3IhALhIi5C5g");
	this.shape_29.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-80.9,161.1,161.8);


(lib.Star_Top_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjsDuIo4iRIC5i5IGjhsIBrmnIC5i5ICRI6II4CSIi5C5ImjBrIhrGoIi5C5g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star_Top_Button, new cjs.Rectangle(-80.5,-80.9,161.1,161.8), null);


(lib.Star_Top_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjsDuIo4iRIC5i5IGjhsIBrmnIC5i5ICRI6II4CSIi5C5ImjBrIhrGoIi5C5g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star_Top_Buttoff, new cjs.Rectangle(-80.5,-80.9,161.1,161.8), null);


(lib.Star_Bottom_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0CC00").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape.setTransform(-6.15,6.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8FF00").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_1.setTransform(-6.15,6.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4F900").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_2.setTransform(-6.15,6.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFF400").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_3.setTransform(-6.15,6.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBEE00").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_4.setTransform(-6.15,6.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6E800").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_5.setTransform(-6.15,6.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2E300").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_6.setTransform(-6.15,6.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADDD00").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_7.setTransform(-6.15,6.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9D700").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_8.setTransform(-6.15,6.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A4D200").s().p("AhgBhIl6hhIF6hgIBgl9IBgF9IF7BgIl6BhIhhF9g");
	this.shape_9.setTransform(-6.15,6.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8FF00").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_10.setTransform(0.025,-3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_11.setTransform(0.025,-3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9FFE3").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_12.setTransform(0.025,-3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3FFC6").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_13.setTransform(0.025,-3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDFFAA").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_14.setTransform(0.025,-3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7FF8E").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_15.setTransform(0.025,-3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0FF71").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_16.setTransform(0.025,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DAFF55").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_17.setTransform(0.025,-3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4FF39").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_18.setTransform(0.025,-3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CEFF1C").s().p("AoYBdIB8h6IF6hhIhmD9gAAigCIB8h8IF7BhIh8B6IkLAZg");
	this.shape_19.setTransform(0.025,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#729100").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_20.setTransform(4.825,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A0CC00").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_21.setTransform(4.825,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9BC500").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_22.setTransform(4.825,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#96BF00").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_23.setTransform(4.825,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#91B800").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_24.setTransform(4.825,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8CB200").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_25.setTransform(4.825,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#86AB00").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_26.setTransform(4.825,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#81A500").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_27.setTransform(4.825,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7C9E00").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_28.setTransform(4.825,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#779800").s().p("AhumfIB7h7IBhF8IABDBIhgF9Ih7B7g");
	this.shape_29.setTransform(4.825,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-53.9,107.30000000000001,107.9);


(lib.Star_Bottom_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AidCeIl7hhIB8h6IEXhHIBHkbIB7h7IBhF8IF7BhIh8B6IkXBIIhHEbIh7B7g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star_Bottom_Button, new cjs.Rectangle(-53.6,-53.9,107.30000000000001,107.9), null);


(lib.Shoe_Right_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ADQQKIlzlzIh2jNIACJAIsEAAIl0lzICut/IDdAAIB3poIJyAAIhRi5ICXAAIFyFzIBYFvIMmD0IF1FyIAALLg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shoe_Right_Button, new cjs.Rectangle(-142.3,-103.4,284.70000000000005,206.9), null);


(lib.Shoe_Left_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AEnNqIlBlBIABFBIpIAAIlzlzICDqEIDfAAIByowIFWAAIAZisIFlFmIA2DMIFYBuIFzFyIAALBg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shoe_Left_Button, new cjs.Rectangle(-98.1,-87.4,196.2,174.9), null);


(lib.Rabbit_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyBbbInPnPIAAssII/jyIB/rFIgPhQIArhLIDKxoIM2AAIHQHPIDvUgIE4B4IHQHRIAAR9g");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rabbit_Button, new cjs.Rectangle(-161.7,-175.5,323.4,351.1), null);


(lib.Pupil_Rabbit_Right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlEAAIFElEIFFFEIlFFFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlDAAIFDlEIFFFEIlFFFg");
	this.shape_1.setTransform(-0.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlEAAIFElEIFEFEIlEFFg");
	this.shape_2.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-32.4,65.9,64.9);


(lib.Pupil_Rabbit_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AihAAIChihICiChIiiCig");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-0.525},0).wait(1).to({x:-0.025},0).wait(1).to({x:0.475},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-16.2,33.4,32.4);


(lib.Pupil_Man_Top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkuiOIHfiRIB+DrIl3FUg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkviOIHhiRIB+DrIl4FUg");
	this.shape_1.setTransform(0.05,-0.125);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkviOIHgiRIB+DrIl3FUg");
	this.shape_2.setTransform(2.45,-5.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkuiOIHgiRIB9DrIl3FUg");
	this.shape_3.setTransform(14.2,-32.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2,p:{x:2.45,y:-5.675}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2,p:{x:15.95,y:-36.875}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},13).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:15.95,y:-36.875}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2,p:{x:2.45,y:-5.675}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:true},1).wait(3).to({_off:false,x:0.7,y:-1.625},0).wait(1).to({x:1.35,y:-3.175},0).to({_off:true},1).wait(1).to({_off:false,x:4.15,y:-9.575},0).wait(1).to({x:6.65,y:-15.425},0).wait(1).to({x:10,y:-23.075},0).wait(1).to({x:12.5,y:-28.925},0).to({_off:true},1).wait(1).to({_off:false,x:15.3,y:-35.325},0).to({_off:true},1).wait(4).to({_off:false,x:16.65,y:-38.475},0).wait(19).to({_off:true},1).wait(4).to({_off:false,x:15.3,y:-35.325},0).to({_off:true},1).wait(1).to({_off:false,x:12.5,y:-28.925},0).wait(1).to({x:10,y:-23.075},0).wait(1).to({x:6.65,y:-15.425},0).wait(1).to({x:4.15,y:-9.575},0).to({_off:true},1).wait(1).to({_off:false,x:1.35,y:-3.175},0).wait(1).to({x:0.7,y:-1.625},0).to({_off:true},1).wait(3).to({_off:false,x:0,y:-0.025},0).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(16).to({_off:false},0).wait(1).to({x:0.15,y:-0.325},0).wait(1).to({x:0.3,y:-0.775},0).to({_off:true},1).wait(10).to({_off:false,x:16.35,y:-37.725},0).wait(1).to({x:16.5,y:-38.175},0).wait(1).to({x:16.6,y:-38.375},0).to({_off:true},1).wait(20).to({_off:false},0).wait(1).to({x:16.5,y:-38.175},0).wait(1).to({x:16.35,y:-37.725},0).to({_off:true},1).wait(10).to({_off:false,x:0.3,y:-0.775},0).wait(1).to({x:0.15,y:-0.325},0).wait(1).to({x:0.05,y:-0.125},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-67.3,77.3,96.1);


(lib.Pupil_Man_Bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkGg/IE4ipIDVDYInND5g");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkGg/IE3ipIDWDYInND5g");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkFg/IE2ipIDVDYInLD5g");
	this.shape_2.setTransform(-0.075,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkEg/IE0ipIDVDYInJD5g");
	this.shape_3.setTransform(-0.225,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkChBIExilIDUDYInFD1g");
	this.shape_4.setTransform(-0.55,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Aj/hCIEqijIDWDYInADzg");
	this.shape_5.setTransform(-1.1,-2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj7hFIEiidIDVDYIm3Dtg");
	this.shape_6.setTransform(-2.025,-3.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjzhJIESiVIDVDYImnDlg");
	this.shape_7.setTransform(-3.425,-6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjohPID8iJIDVDYImRDZg");
	this.shape_8.setTransform(-5.525,-10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjZhXIDeh5IDVDXIlzDKg");
	this.shape_9.setTransform(-8.275,-15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjOhdIDJhtIDUDXIldC+g");
	this.shape_10.setTransform(-10.375,-19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjGhhIC5hlIDUDXIlNC2g");
	this.shape_11.setTransform(-11.775,-21.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjBhkICvhfIDVDXIlECwg");
	this.shape_12.setTransform(-12.7,-23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai/hlICrhcIDUDXIk/Ctg");
	this.shape_13.setTransform(-13.25,-24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ai9hnICnhaIDUDXIk7Crg");
	this.shape_14.setTransform(-13.575,-25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ai8hnIClhZIDUDXIk5Cqg");
	this.shape_15.setTransform(-13.725,-25.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ai8hnICkhZIDUDXIk4Cqg");
	this.shape_16.setTransform(-13.8,-25.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai7hnICjhZIDUDXIk3Cqg");
	this.shape_17.setTransform(-13.825,-25.675);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},13).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:true},1).wait(52).to({_off:false},0).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(32).to({_off:false},0).wait(19).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-44.9,58.900000000000006,68.2);


(lib.Outworld_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgZNgIkKznIDtnYIBtAAIDtIaIjtSlg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Outworld_Button, new cjs.Rectangle(-29.2,-86.4,58.4,172.8), null);


(lib.Outworld_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgZNgIkKznIDtnYIBtAAIDtIaIjtSlg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Outworld_Buttoff, new cjs.Rectangle(-29.2,-86.4,58.4,172.8), null);


(lib.Nose_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("An6kWINbAAICaCaInKGTg");
	this.shape.setTransform(-12.775,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nose_Button, new cjs.Rectangle(-63.5,-27.9,101.5,55.9), null);


(lib.Nose_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("An6kWINbAAICaCaInKGTg");
	this.shape.setTransform(-12.775,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nose_Buttoff, new cjs.Rectangle(-63.5,-27.9,101.5,55.9), null);


(lib.Nail_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AFhj7IBdCuIzmJBgAE0mJICnhqIFOJSIinBqg");
	this.shape.setTransform(3.875,11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C2929").s().p("AFhj7IBdCuIzmJBgAE0mJICnhqIFOJSIinBqg");
	this.shape_1.setTransform(3.875,11.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#851F1F").s().p("AFhj7IBdCuIzmJBgAE0mJICnhqIFOJSIinBqg");
	this.shape_2.setTransform(3.875,11.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD1414").s().p("AFhj7IBdCuIzmJBgAE0mJICnhqIFOJSIinBqg");
	this.shape_3.setTransform(3.875,11.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D60A0A").s().p("AFhj7IBdCuIzmJBgAE0mJICnhqIFOJSIinBqg");
	this.shape_4.setTransform(3.875,11.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AFhj7IBdCuIzmJBgAE0mJICnhqIFOJSIinBqg");
	this.shape_5.setTransform(3.875,11.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AqnIaISIrvIBNBNIAUCcIycJUgAEZn9ICnhqIDoDoIgwBeIh3AMg");
	this.shape_6.setTransform(-16.675,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#857070").s().p("AqnIaISIrvIBNBNIAUCcIycJUgAEZn9ICnhqIDoDoIgwBeIh3AMg");
	this.shape_7.setTransform(-16.675,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A37A7A").s().p("AqnIaISIrvIBNBNIAUCcIycJUgAEZn9ICnhqIDoDoIgwBeIh3AMg");
	this.shape_8.setTransform(-16.675,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C28585").s().p("AqnIaISIrvIBNBNIAUCcIycJUgAEZn9ICnhqIDoDoIgwBeIh3AMg");
	this.shape_9.setTransform(-16.675,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E08F8F").s().p("AqnIaISIrvIBNBNIAUCcIycJUgAEZn9ICnhqIDoDoIgwBeIh3AMg");
	this.shape_10.setTransform(-16.675,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AqnIaISIrvIBNBNIAUCcIycJUgAEZn9ICnhqIDoDoIgwBeIh3AMg");
	this.shape_11.setTransform(-16.675,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAzC2IlNpSIHVFLIBgHvg");
	this.shape_12.setTransform(39.725,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#240000").s().p("AAzC2IlNpSIHVFLIBgHvg");
	this.shape_13.setTransform(39.725,-9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#470000").s().p("AAzC2IlNpSIHVFLIBgHvg");
	this.shape_14.setTransform(39.725,-9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B0000").s().p("AAzC2IlNpSIHVFLIBgHvg");
	this.shape_15.setTransform(39.725,-9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E0000").s().p("AAzC2IlNpSIHVFLIBgHvg");
	this.shape_16.setTransform(39.725,-9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AAzC2IlNpSIHVFLIBgHvg");
	this.shape_17.setTransform(39.725,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-61.5,169.5,123.1);


(lib.Nail_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtOIaIRvrfIivk4ICnhqIDoDoIFOJSIinBqIjojoIgNgYIy0Irg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nail_Button, new cjs.Rectangle(-84.7,-61.5,169.5,123.1), null);


(lib.Nail_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtOIaIRvrfIivk4ICnhqIDoDoIFOJSIinBqIjojoIgNgYIy0Irg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nail_Buttoff, new cjs.Rectangle(-84.7,-61.5,169.5,123.1), null);


(lib.Mouth_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AibCNICgkZICXEZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth_Button, new cjs.Rectangle(-15.6,-14.1,31.2,28.2), null);


(lib.Moon_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C400").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape.setTransform(-11.625,-11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0D000").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_1.setTransform(-11.625,-11.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCDC00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_2.setTransform(-11.625,-11.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E700").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_3.setTransform(-11.625,-11.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F300").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_4.setTransform(-11.625,-11.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_5.setTransform(-11.625,-11.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFD00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_6.setTransform(-11.625,-11.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBFB00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_7.setTransform(-11.625,-11.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9F900").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_8.setTransform(-11.625,-11.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7F700").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_9.setTransform(-11.625,-11.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F500").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_10.setTransform(-11.625,-11.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F100").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_11.setTransform(-11.625,-11.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFEF00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_12.setTransform(-11.625,-11.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDED00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_13.setTransform(-11.625,-11.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBEB00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_14.setTransform(-11.625,-11.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E9E900").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_15.setTransform(-11.625,-11.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5E500").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_16.setTransform(-11.625,-11.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3E300").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_17.setTransform(-11.625,-11.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0E000").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_18.setTransform(-11.625,-11.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DEDE00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_19.setTransform(-11.625,-11.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DADA00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_20.setTransform(-11.625,-11.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8D800").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_21.setTransform(-11.625,-11.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D6D600").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_22.setTransform(-11.625,-11.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4D400").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_23.setTransform(-11.625,-11.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D2D200").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_24.setTransform(-11.625,-11.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CECE00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_25.setTransform(-11.625,-11.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCC00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_26.setTransform(-11.625,-11.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CACA00").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_27.setTransform(-11.625,-11.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C8C800").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_28.setTransform(-11.625,-11.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C6C600").s().p("AsJCkINTCrIFBntInXq8INWG5IAANlItgGXg");
	this.shape_29.setTransform(-11.625,-11.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_30.setTransform(34.55,65.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF33").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_31.setTransform(34.55,65.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF66").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_32.setTransform(34.55,65.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF99").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_33.setTransform(34.55,65.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFCC").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_34.setTransform(34.55,65.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_35.setTransform(34.55,65.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFF6").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_36.setTransform(34.55,65.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFED").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_37.setTransform(34.55,65.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFE5").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_38.setTransform(34.55,65.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFDC").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_39.setTransform(34.55,65.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFD3").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_40.setTransform(34.55,65.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFCA").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_41.setTransform(34.55,65.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFC1").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_42.setTransform(34.55,65.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFB9").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_43.setTransform(34.55,65.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFB0").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_44.setTransform(34.55,65.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFA7").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_45.setTransform(34.55,65.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF9E").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_46.setTransform(34.55,65.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF95").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_47.setTransform(34.55,65.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF8D").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_48.setTransform(34.55,65.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF84").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_49.setTransform(34.55,65.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF7B").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_50.setTransform(34.55,65.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF72").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_51.setTransform(34.55,65.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF6A").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_52.setTransform(34.55,65.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF61").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_53.setTransform(34.55,65.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF58").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_54.setTransform(34.55,65.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF4F").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_55.setTransform(34.55,65.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF46").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_56.setTransform(34.55,65.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF3E").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_57.setTransform(34.55,65.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF35").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_58.setTransform(34.55,65.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF2C").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_59.setTransform(34.55,65.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF23").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_60.setTransform(34.55,65.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF1A").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_61.setTransform(34.55,65.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF12").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_62.setTransform(34.55,65.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF09").s().p("AokBYIENmPIJTgIIDoDoItfGWg");
	this.shape_63.setTransform(34.55,65.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// Layer_3
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8E8E00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_64.setTransform(53.7,1.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999900").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_65.setTransform(53.7,1.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A4A400").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_66.setTransform(53.7,1.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#AEAE00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_67.setTransform(53.7,1.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B9B900").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_68.setTransform(53.7,1.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C4C400").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_69.setTransform(53.7,1.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C2C200").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_70.setTransform(53.7,1.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C0C000").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_71.setTransform(53.7,1.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BEBE00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_72.setTransform(53.7,1.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BDBD00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_73.setTransform(53.7,1.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BBBB00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_74.setTransform(53.7,1.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B7B700").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_75.setTransform(53.7,1.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B5B500").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_76.setTransform(53.7,1.725);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B3B300").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_77.setTransform(53.7,1.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B1B100").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_78.setTransform(53.7,1.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B0B000").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_79.setTransform(53.7,1.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#ACAC00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_80.setTransform(53.7,1.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AAAA00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_81.setTransform(53.7,1.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A8A800").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_82.setTransform(53.7,1.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A6A600").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_83.setTransform(53.7,1.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A2A200").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_84.setTransform(53.7,1.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A1A100").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_85.setTransform(53.7,1.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9F9F00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_86.setTransform(53.7,1.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9D9D00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_87.setTransform(53.7,1.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9B9B00").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_88.setTransform(53.7,1.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#979700").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_89.setTransform(53.7,1.725);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#959500").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_90.setTransform(53.7,1.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#949400").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_91.setTransform(53.7,1.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#929200").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_92.setTransform(53.7,1.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#909000").s().p("AlkGwIHhvWIDoDoIAANlg");
	this.shape_93.setTransform(53.7,1.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64}]}).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_64}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-97.5,178.8,195);


(lib.Moon_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("At9AwINUCsIE/nuInWq8INWG5IDoDoIAANlItgGXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Moon_Button, new cjs.Rectangle(-89.4,-97.5,178.8,195), null);


(lib.Moon_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("At9AwINUCsIE/nuInWq8INWG5IDoDoIAANlItgGXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Moon_Buttoff, new cjs.Rectangle(-89.4,-97.5,178.8,195), null);


(lib.Lip_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA00EA").s().p("AtpB0IAAjnIbTAAIAADng");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("AtpB0IAAjnIbTAAIAADng");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AtpB0IAAjnIbTAAIAADng");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-11.6,174.9,23.2);


(lib.Legs_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgQzAhwIpPAAIj3j4MAXkhAHIGTAAID3D3MAUrAvrIBJBLIAHBvIEKJoIvyAAIhuAhIhwghIijAAIj4j4MgFDgmFMgFAAibIAVBjIguBKIhRIwIl2AAIhpAgg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Legs_Button, new cjs.Rectangle(-191.4,-219.2,382.9,438.5), null);


(lib.Heart_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah8JBIp1ukIFlnUID4D3IBRCVIDZmMID4D3IFkHUIp3Ojg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heart_Button, new cjs.Rectangle(-75.4,-82.3,150.9,164.7), null);


(lib.Heart_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah8JBIp1ukIFlnUID4D3IBRCVIDZmMID4D3IFkHUIp3Ojg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heart_Buttoff, new cjs.Rectangle(-75.4,-82.3,150.9,164.7), null);


(lib.Hat_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ADWR4MgYKgtIIJ2lGIOhOfIDhJ9IFqhSIE2E1IDRGGInyHRIHvV2Ii8Bhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hat_Button, new cjs.Rectangle(-133.3,-207.1,266.6,414.2), null);


(lib.Hammer_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A58202").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape.setTransform(-19.875,74.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C35701").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_1.setTransform(-19.875,74.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E12B01").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_2.setTransform(-19.875,74.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_3.setTransform(-19.875,74.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F21300").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_4.setTransform(-19.875,74.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52501").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_5.setTransform(-19.875,74.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D83801").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_6.setTransform(-19.875,74.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC4A01").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_7.setTransform(-19.875,74.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF5D01").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_8.setTransform(-19.875,74.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B26F02").s().p("A4yFzMAwEgWNIBhC1Mgr4AeAg");
	this.shape_9.setTransform(-19.875,74.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0B103").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_10.setTransform(-30.925,33.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAA935").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_11.setTransform(-30.925,33.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5A167").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_12.setTransform(-30.925,33.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9999").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_13.setTransform(-30.925,33.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FB9C84").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_14.setTransform(-30.925,33.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6A06E").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_15.setTransform(-30.925,33.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2A359").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_16.setTransform(-30.925,33.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDA743").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_17.setTransform(-30.925,33.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E9AA2E").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_18.setTransform(-30.925,33.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E4AE18").s().p("A4/KKMAwEgWOIB7B8I0EPUI7/G5g");
	this.shape_19.setTransform(-30.925,33.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#755C00").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_20.setTransform(-139.925,134.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#893D00").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_21.setTransform(-139.925,134.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9E1F00").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_22.setTransform(-139.925,134.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_23.setTransform(-139.925,134.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A90D00").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_24.setTransform(-139.925,134.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A11A00").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_25.setTransform(-139.925,134.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#982700").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_26.setTransform(-139.925,134.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8F3500").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_27.setTransform(-139.925,134.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#864200").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_28.setTransform(-139.925,134.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7E4F00").s().p("AigEpIldqJIP7hiIoTOFg");
	this.shape_29.setTransform(-139.925,134.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("ADtF5Ikzo/IjuCBIlFpgIKblqIFFJgIizBhIHGHMIn3OSg");
	this.shape_30.setTransform(127.525,-38.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#772222").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_31.setTransform(127.525,-38.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BB1111").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_32.setTransform(127.525,-38.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("ADtF5Ikzo/IjuCBIlFpgIKblqIFFJgIizBhIHGHMIn3OSg");
	this.shape_33.setTransform(127.525,-38.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E20707").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_34.setTransform(127.525,-38.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C50F0F").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_35.setTransform(127.525,-38.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A81616").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_36.setTransform(127.525,-38.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8A1D1D").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_37.setTransform(127.525,-38.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D2424").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_38.setTransform(127.525,-38.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#502C2C").s().p("ADtF5Ikzo+IjuCAIlFpgIKblqIFFJgIizBiIHGHLIn3OSg");
	this.shape_39.setTransform(127.525,-38.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// Layer_2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_40.setTransform(78.925,-142.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#997777").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_41.setTransform(78.925,-142.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC8888").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_42.setTransform(78.925,-142.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9999").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_43.setTransform(78.925,-142.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E99292").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_44.setTransform(78.925,-142.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D38A8A").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_45.setTransform(78.925,-142.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BD8383").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_46.setTransform(78.925,-142.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A87C7C").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_47.setTransform(78.925,-142.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#927575").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_48.setTransform(78.925,-142.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C6D6D").s().p("AoHgDIKblqIF0FxIj+EtImdA9g");
	this.shape_49.setTransform(78.925,-142.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_40}]},1).wait(1));

	// Layer_3
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AFYHRIjxnCIg4D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_50.setTransform(91.975,-71.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3B0000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_51.setTransform(91.975,-71.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#770000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_52.setTransform(91.975,-71.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B20000").s().p("AFYHRIjxnCIg4D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_53.setTransform(91.975,-71.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_54.setTransform(91.975,-71.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7F0000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_55.setTransform(91.975,-71.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#660000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_56.setTransform(91.975,-71.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4C0000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_57.setTransform(91.975,-71.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#330000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_58.setTransform(91.975,-71.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#190000").s().p("AFYHRIjwnCIg5D7IlzlyIlFpfINmDQIhfGkIIMGrIg6Fxg");
	this.shape_59.setTransform(91.975,-71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_50}]},1).wait(1));

	// Layer_4
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_60.setTransform(148.175,20.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#997777").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_61.setTransform(148.175,20.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC8888").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_62.setTransform(148.175,20.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF9999").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_63.setTransform(148.175,20.275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E99292").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_64.setTransform(148.175,20.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D38A8A").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_65.setTransform(148.175,20.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BD8383").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_66.setTransform(148.175,20.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A87C7C").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_67.setTransform(148.175,20.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#927575").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_68.setTransform(148.175,20.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7C6D6D").s().p("AlCDQIBpqWIIcAYImNN1g");
	this.shape_69.setTransform(148.175,20.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60}]}).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_60}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.9,-179.3,381.9,358.6);


(lib.Hammer_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4XZoIleqLMAwEgWOIg1hiIiTBQIl0lzIlGpfIKdlrIFzFyIFFJgIizBiIHHHMIn3OSIj5j3IBFmtMgpXAcTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hammer_Button, new cjs.Rectangle(-190.9,-179.3,381.9,358.6), null);


(lib.Hammer_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4XZoIleqLMAwEgWOIg1hiIiTBQIl0lzIlGpfIKdlrIFzFyIFFJgIizBiIHHHMIn3OSIj5j3IBFmtMgpXAcTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hammer_Buttoff, new cjs.Rectangle(-190.9,-179.3,381.9,358.6), null);


(lib.Flash_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C75CFF").s().p("EgEFAllMA5kgckIAAE1Mg5kAckgEgjvARzMA3zgJuIknFoMgzMAI7gEg1eglkIAAk1MA7EAnDIkHCHgAR2vgIneuDIAAk1IKsUFg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9600E5").s().p("EgEFAllITi34MgzMAI7IAAk1MAlOgTCMg29gkVIAAk1MBHUAa5IneuDIAAk1MArCAZNIAFXBMg5kAckg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Flash_In, new cjs.Rectangle(-342.3,-271.4,684.6,542.9), null);


(lib.Flash_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgEFAllITi34MgzMAI7IAAk1MAlOgTCMg29gkVIAAk1MBHUAa5IneuDIAAk1MArCAZNIAESMIABAAIAAE1Mg5kAckg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Flash_Button, new cjs.Rectangle(-342.3,-271.4,684.6,542.9), null);


(lib.Flash_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgEFAllITi34MgzMAI7IAAk1MAlOgTCMg29gkVIAAk1MBHUAa5IneuDIAAk1MArCAZNIAESMIABAAIAAE1Mg5kAckg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Flash_Buttoff, new cjs.Rectangle(-342.3,-271.4,684.6,542.9), null);


(lib.Fire_Right_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuRa0IAAnPINbvKIlOmHIAAnPINux4IAAHPIjHJSIJvGdIAAepg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fire_Right_Button, new cjs.Rectangle(-91.3,-171.6,182.7,343.29999999999995), null);


(lib.Fire_Right_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuRa0IAAnPINbvKIlOmHIAAnPINux4IAAHPIjHJSIJvGdIAAepg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fire_Right_Buttoff, new cjs.Rectangle(-91.3,-171.6,182.7,343.29999999999995), null);


(lib.Fire_Left_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgRHAiiMAAAgj4IQrs8Il6tAIAAnPIUuUtIAAHQIsYQJIPIRuIAAHPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fire_Left_Button, new cjs.Rectangle(-109.6,-221,219.2,442), null);


(lib.Fire_Left_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgRHAiiMAAAgj4IQrs8Il6tAIAAnPIUuUtIAAHQIsYQJIPIRuIAAHPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fire_Left_Buttoff, new cjs.Rectangle(-109.6,-221,219.2,442), null);


(lib.Fire_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgD3An+IAAnQIDOjoI4CAAMAAAgj4IQss7Il6tAIAAnQIUtUuIAAHPIsXQJINPPhIB3iGIlOmIIAAnPINvx3IAAHQIjHJRIJuGcIAAerg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fire_Button, new cjs.Rectangle(-157.9,-255.7,315.9,511.5), null);


(lib.Fang_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmqiuINVBiIAACZItVBig");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fang_Button, new cjs.Rectangle(-42.6,-17.4,85.30000000000001,34.9), null);


(lib.Face_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnwINIjFlwIE9jvIgxi0IH9mCID3D4IFrKjIoWC7IgaAbIgqgDInQCjg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Face_Button, new cjs.Rectangle(-69.3,-64.8,138.7,129.7), null);


(lib.Eye_Rabbit_Right_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiiKtIibibIocAAIiaiaIAAwkIayKGIE1E0IAAGfg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye_Rabbit_Right_Button, new cjs.Rectangle(-101.2,-68.4,202.4,136.9), null);


(lib.Eye_Rabbit_Left_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmYIUIk1k2IAAkuIUAnDICbCbIAALxIm0AAIgcCbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye_Rabbit_Left_Button, new cjs.Rectangle(-71.8,-53.1,143.7,106.30000000000001), null);


(lib.Eye_Man_Top_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah5HhIh4jiIhehdIkHnrIMhjzIC5C5IDTGIIpzI4g");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye_Man_Top_Button, new cjs.Rectangle(-59.8,-57.3,119.69999999999999,114.6), null);


(lib.Eye_Man_Bottom_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkrDKIgvjaIBDgYIg3kCICjhZIIGIMInMD7g");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eye_Man_Bottom_Button, new cjs.Rectangle(-34.7,-38.8,69.5,77.6), null);


(lib.Ears_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AY/aEMgU3gnJIlqOjIiIiGIAtC3Iknh0IgkjAIkBofMgRAAkvIuypMIjojoMAjJgmFIDoDpIDaN5IDQ1+MAuEAoZIDoDoIy9PUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ears_Button, new cjs.Rectangle(-304.4,-189.9,608.8,379.8), null);


(lib.Coffin_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EAkDAOXIkD0UIEDoZIHJAAIEDIZIkDUUgEgrLAOXIkD0UIEDoZIJMAAIEDIZIkDUUgEgqIgF9IDjRyIDjxyIjTm5IggAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Coffin_Button, new cjs.Rectangle(-302.3,-91.8,604.7,183.7), null);


(lib.Cloud_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003FA3").s().p("AvmKPIAAnUIH/i9IDBqMIKCAAICfH1IHtCnIAAKBg");
	this.shape.setTransform(16.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00317F").s().p("AvmKPIAAnUIH/i9IDBqMIKCAAICfH1IHtCnIAAKBg");
	this.shape_1.setTransform(16.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00235B").s().p("AvmKPIAAnUIH/i9IDBqMIKCAAICfH1IHtCnIAAKBg");
	this.shape_2.setTransform(16.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005EF4").s().p("AhcApIlFAAIH+i9IFGAAIhrEpg");
	this.shape_3.setTransform(-74.35,14.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004FCC").s().p("AhcApIlFAAIH+i9IFGAAIhrEpg");
	this.shape_4.setTransform(-74.35,14.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003FA3").s().p("AhcApIlFAAIH+i9IFGAAIhrEpg");
	this.shape_5.setTransform(-74.35,14.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00235B").s().p("AoOKPIAAnUIIKh9IjEJRgAgPgCIDBqMIFFAAIAYREg");
	this.shape_6.setTransform(-63.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00122E").s().p("AoOKPIAAnUIIKh9IjEJRgAgPgCIDBqMIFFAAIAYREg");
	this.shape_7.setTransform(-63.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AoOKPIAAnUIIKh9IjEJRgAgPgCIDBqMIFFAAIAYREg");
	this.shape_8.setTransform(-63.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,-65.5,232.5,131.1);


(lib.Cloud_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyJKPIAAnUIH/i9IDBqMIPIAAICfH1IHsCnIAAKBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud_Button, new cjs.Rectangle(-116.2,-65.5,232.5,131.1), null);


(lib.Cloud_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyJKPIAAnUIH/i9IDBqMIPIAAICfH1IHsCnIAAKBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud_Buttoff, new cjs.Rectangle(-116.2,-65.5,232.5,131.1), null);


(lib.Car_In_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvkOjImDmDIAApXIHeiJIESriIZcAAIGDGDIAAXCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Car_In_Button, new cjs.Rectangle(-138.4,-93,276.9,186.1), null);


(lib.Car_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AI/Q2IibibIAAiMInzAAIAAEnInzAAIibibIAAiMIkHAAImDmDIAApWIHeiJIESriIZcAAIGDGDIAAXBIifAAIAAEng");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Car_Button, new cjs.Rectangle(-138.4,-107.7,276.9,215.5), null);


(lib.Bone_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("A60GZIAAjCIHVizInVi5IAAkQIKPjDIEJIVIcHAAIDUmjIH2CZIAAMcInXB4Ijzl4I8HAAIkbGqg");
	this.shape.setTransform(-7.775,7.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A8CG8ICbibIHBizIAPGxgAtpCQICaiZIcIAAIg/ELI8TAZgARxkRICbibIH3CZIibCbIluBlgA8CjAICbibIKPjDIiaCaIlXD6g");
	this.shape_1.setTransform(-0.025,-15.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("A4SIJIGvmQImMrYIEnhXIEJIWIAAESIkbGqIibCbgAMZg0IL6l2IAAMbIibCcg");
	this.shape_2.setTransform(23.975,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bone_In, new cjs.Rectangle(-179.5,-69.4,359,138.9), null);


(lib.Bone_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8CHmIAAjBICaibIC8hLIlWiHIAAkQICaiaIKQjEIEJIWIa6AAICGkJICbiaIH3CZIAAMbIibCcInYB3Ijzl4I7TAAIi0EQIibCbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bone_Button, new cjs.Rectangle(-179.5,-69.4,359,138.9), null);


(lib.Bone_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8CHmIAAjBICaibIC8hLIlWiHIAAkQICaiaIKQjEIEJIWIa6AAICGkJICbiaIH3CZIAAMbIibCcInYB3Ijzl4I7TAAIi0EQIibCbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bone_Buttoff, new cjs.Rectangle(-179.5,-69.4,359,138.9), null);


(lib.Body_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ADVOYIgohIIn8AAIj3j3IihksIGtkEImorpIA2hdIM/lxIC2KbIAvBPIADBlIEhQeIAgAzIACBJIAqCaIi+BoIgfAuIg+AEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Body_Button, new cjs.Rectangle(-74.4,-116.7,148.8,233.4), null);


(lib.Background_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background_Button, new cjs.Rectangle(-540,-540,1080,1080), null);


(lib.Arrow_3_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AALHIIE7k/IlPkqIrAK6Ig2g3IN70OIFOMwIE2k3IAARgg");
	this.shape.setTransform(-7.7,7.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626280").s().p("AALHIIE7k/IlPkqIrAK6Ig2g3IN70OIFOMwIE2k3IAARgg");
	this.shape_1.setTransform(-7.7,7.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C400").s().p("AALHIIE7k/IlPkqIrAK6Ig2g3IN70OIFOMwIE2k3IAARgg");
	this.shape_2.setTransform(-7.7,7.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C5CFF").s().p("AkviyIBqlnICbibIFNMwIANI5g");
	this.shape_3.setTransform(24.5,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEAE80").s().p("AkviyIBqlnICbibIFNMwIANI5g");
	this.shape_4.setTransform(24.5,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AkviyIBqlnICbibIFNMwIANI5g");
	this.shape_5.setTransform(24.5,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000080").s().p("AjZCGIEZpoICaibIAARgIiaCbg");
	this.shape_6.setTransform(62.75,25.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474740").s().p("AjZCGIEZpoICaibIAARgIiaCbg");
	this.shape_7.setTransform(62.75,25.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E00").s().p("AjZCGIEZpoICaibIAARgIiaCbg");
	this.shape_8.setTransform(62.75,25.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-89,169.1,178);


(lib.Arrow_3_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhBIVIE6k/IlPkqIrAK6Ig2g3IN70NICaibIFOMwIE2k3IAARfIiaCbg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_3_Button, new cjs.Rectangle(-84.5,-89,169.1,178), null);


(lib.Arrow_3_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhBIVIE6k/IlPkqIrAK6Ig2g3IN70NICaibIFOMwIE2k3IAARfIiaCbg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_3_Buttoff, new cjs.Rectangle(-84.5,-89,169.1,178), null);


(lib.Arrow_2_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AnKFcIB5ouICPDuIJjl3IArA3IoeH5IBRCHg");
	this.shape.setTransform(-5.65,7.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626280").s().p("AnKFcIB5ouICPDuIJjl3IArA3IoeH5IBRCHg");
	this.shape_1.setTransform(-5.65,7.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C400").s().p("AnKFcIB5ouICPDuIJjl3IArA3IoeH5IBRCHg");
	this.shape_2.setTransform(-5.65,7.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C5CFF").s().p("AjkBvIJjl3IoJILIj1AGg");
	this.shape_3.setTransform(13.25,-15.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEAE80").s().p("AjkBvIJjl3IoJILIj1AGg");
	this.shape_4.setTransform(13.25,-15.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AjkBvIJjl3IoJILIj1AGg");
	this.shape_5.setTransform(13.25,-15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000080").s().p("AjID5IgsnCICbiaIFOItIibCbg");
	this.shape_6.setTransform(-14.9,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474740").s().p("AjID5IgsnCICbiaIFOItIibCbg");
	this.shape_7.setTransform(-14.9,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E00").s().p("AjID5IgsnCICbiaIFOItIibCbg");
	this.shape_8.setTransform(-14.9,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-42.5,103.2,85.1);


(lib.Arrow_2_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoDGpIB6otICbibICPDvIJjl4IibCaIAqA3ImAFlIBNCBIiaCag");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_2_Button, new cjs.Rectangle(-51.6,-42.5,103.2,85.1), null);


(lib.Arrow_2_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoDGpIB6otICbibICPDvIJjl4IibCaIAqA3ImAFlIBNCBIiaCag");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_2_Buttoff, new cjs.Rectangle(-51.6,-42.5,103.2,85.1), null);


(lib.Arrow_1_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AglDSIuAF3IhbiYIK4rMIjVltIYeAAIsmURg");
	this.shape.setTransform(-7.7,7.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626280").s().p("AglDSIuAF3IhbiYIK4rMIjVltIYeAAIsmURg");
	this.shape_1.setTransform(-7.7,7.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C400").s().p("AglDSIuAF3IhbiYIK4rMIjVltIYeAAIsmURg");
	this.shape_2.setTransform(-7.7,7.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C5CFF").s().p("AtchMICaiaIYfAAIibCaIsnEzg");
	this.shape_3.setTransform(24.15,-49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEAE80").s().p("AtchMICaiaIYfAAIibCaIsnEzg");
	this.shape_4.setTransform(24.15,-49.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AtchMICaiaIYfAAIibCaIsnEzg");
	this.shape_5.setTransform(24.15,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000080").s().p("AnhlrIPDlqIslUQIibCbg");
	this.shape_6.setTransform(62.075,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474740").s().p("AnhlrIPDlqIslUQIibCbg");
	this.shape_7.setTransform(62.075,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E00").s().p("AnhlrIPDlqIslUQIibCbg");
	this.shape_8.setTransform(62.075,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-72.6,220.5,145.2);


(lib.Arrow_1_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhyEfIuAF3IhbiYIK4rMIjWltICbiaIYeAAIslUQIibCbg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_1_Button, new cjs.Rectangle(-110.2,-72.6,220.5,145.2), null);


(lib.Arrow_1_Buttoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhyEfIuAF3IhbiYIK4rMIjWltICbiaIYeAAIslUQIibCbg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_1_Buttoff, new cjs.Rectangle(-110.2,-72.6,220.5,145.2), null);


(lib.Arrow_0_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("EAl2BimMgZggysIL8uOMguehN6IMWwdMgy7gl6MAjSAAAMAXMAoCIykOVMA4FBMmI0mPsMAuKAyig");
	this.shape.setTransform(-7.725,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626280").s().p("EAl2BimMgZggysIL8uOMguehN6IMWwdMgy7gl6MAjSAAAMAXMAoCIykOVMA4FBMmI0mPsMAuKAyig");
	this.shape_1.setTransform(-7.725,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C400").s().p("EAl2BimMgZggysIL8uOMguehN6IMWwdMgy7gl6MAjSAAAMAXMAoCIykOVMA4FBMmI0mPsMAuKAyig");
	this.shape_2.setTransform(-7.725,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000080").s().p("EAmeBfwMgfHgvXIDriwMAuJAyiIibCbgEgb2gsNIDZibMA4FBMmIibCaIoMBTgEg5LhilIdfAAMAVzAlnIibCbg");
	this.shape_3.setTransform(30.8,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474740").s().p("EAmeBfwMgfHgvXIDriwMAuJAyiIibCbgEgb2gsNIDZibMA4FBMmIibCaIoMBTgEg5LhilIdfAAMAVzAlnIibCbg");
	this.shape_4.setTransform(30.8,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E8E00").s().p("EAmeBfwMgfHgvXIDriwMAuJAyiIibCbgEgb2gsNIDZibMA4FBMmIibCaIoMBTgEg5LhilIdfAAMAVzAlnIibCbg");
	this.shape_5.setTransform(30.8,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.7,-630.9,793.5,1261.9);


(lib.Arrow_0_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EAkpBimMgZggysIL8uOMgufhN6IMWwdMgy6gl6MAnFAAAMAVzAlnIiaCbIv5MRMA30BMQIiaCaIx4NnMAt2AyMIibCbg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_0_Button, new cjs.Rectangle(-396.7,-630.9,793.5,1261.9), null);


(lib.Arm_Top_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ay3HrIk1k1IIUqyIE2E1IHwH8IwQzEIMRnyIE2E0IDCGjIiEoIIKlhxIE2E1IABQ+IBggcIE2E2IC4F5IzXKfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arm_Top_Button, new cjs.Rectangle(-151.7,-141,303.5,282.1), null);


(lib.Arm_Bottom_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjyM8IgNg4ImEAAIi6i6IAAtpIBegyIAAixICThRIgih8IIcklIC5C5IC2EDIjSDiII4FhIC7C5Im1G7Iizi0IDOFNIndDdg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arm_Bottom_Button, new cjs.Rectangle(-82.9,-101.3,165.9,202.7), null);


(lib.Wheel_Right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AlEFHIAAqNIKJAAIAAKNg");
	this.shape.setTransform(65.475,7.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AlEFHIAAqNIKJAAIAAKNg");
	this.shape_1.setTransform(65.475,7.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Aj2gIIibibIKJAAICaCbIkQCrg");
	this.shape_2.setTransform(57.75,-24.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Aj2gIIibibIKJAAICaCbIkQCrg");
	this.shape_3.setTransform(57.75,-24.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlBD5IAAqMIKDC3InoJwg");
	this.shape_4.setTransform(49.725,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlBD5IAAqMIKDC3InoJwg");
	this.shape_5.setTransform(49.725,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	// Button
	this.Button = new lib.Wheel_Right_Button();
	this.Button.name = "Button";
	this.Button.setTransform(57.7,0);

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.5,-40.4,80.5,80.8);


(lib.Wheel_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Aj4D7IAAn1IHxAAIAAH1g");
	this.shape.setTransform(-57.475,15.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Aj4D7IAAn1IHxAAIAAH1g");
	this.shape_1.setTransform(-57.475,15.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AirACIibiZIHyAAICbCZIjVCWg");
	this.shape_2.setTransform(-65.225,-9.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AirACIibiZIHyAAICbCZIjVCWg");
	this.shape_3.setTransform(-65.225,-9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkOCtIAAn0IIcC1ImBHag");
	this.shape_4.setTransform(-70.85,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkOCtIAAn0IIcC1ImBHag");
	this.shape_5.setTransform(-70.85,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	// Button
	this.Button = new lib.Wheel_Left_Button();
	this.Button.name = "Button";
	this.Button.setTransform(-65.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Tooth_Right_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Layer_1
	this.Tooth_Right_In = new lib.Tooth_Right_In();
	this.Tooth_Right_In.name = "Tooth_Right_In";

	this.timeline.addTween(cjs.Tween.get(this.Tooth_Right_In).to({alpha:0},5).wait(1).to({alpha:1},5).wait(1));

	// Button
	this.Button = new lib.Tooth_Right_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5));

	// Buttoff
	this.Buttoff = new lib.Tooth_Right_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-40.4,63.1,80.9);


(lib.Tooth_Left_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Layer_1
	this.Tooth_Left_In = new lib.Tooth_Left_In();
	this.Tooth_Left_In.name = "Tooth_Left_In";

	this.timeline.addTween(cjs.Tween.get(this.Tooth_Left_In).to({alpha:0},5).wait(1).to({alpha:1},5).wait(1));

	// Button
	this.Button = new lib.Tooth_Left_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5));

	// Buttoff
	this.Buttoff = new lib.Tooth_Left_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-40.4,65.4,80.9);


(lib.Tear_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// Layer_1
	this.Tear_In = new lib.Tear_In();
	this.Tear_In.name = "Tear_In";

	this.timeline.addTween(cjs.Tween.get(this.Tear_In).to({y:591},17,cjs.Ease.get(-1)).wait(37).to({scaleX:0.1,scaleY:0.1,y:0,alpha:0},0).to({scaleX:1,scaleY:1,alpha:1},17,cjs.Ease.get(1)).wait(1));

	// Button
	this.Button = new lib.Tear_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(71));

	// Buttoff
	this.Buttoff = new lib.Tear_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({y:591},17,cjs.Ease.get(-1)).wait(37).to({scaleX:0.1,scaleY:0.1,y:0,alpha:0},0).to({scaleX:1,scaleY:1,alpha:1},17,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-48.4,67.2,687.9);


(lib.Star_Top_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12));

	// Star_Top_In
	this.Star_Top_In = new lib.Star_Top_In();
	this.Star_Top_In.name = "Star_Top_In";

	this.timeline.addTween(cjs.Tween.get(this.Star_Top_In).to({scaleX:1.15,scaleY:1.15},11,cjs.Ease.backInOut).wait(1).to({scaleX:1,scaleY:1},11,cjs.Ease.backInOut).wait(1));

	// Button
	this.Button_Out = new lib.Star_Top_Button();
	this.Button_Out.name = "Button_Out";

	this.Button_In = new lib.Star_Top_Button();
	this.Button_In.name = "Button_In";
	this.Button_In.setTransform(0,0,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Button_Out}]}).to({state:[]},1).to({state:[{t:this.Button_In}]},11).to({state:[]},1).wait(11));

	// Buttoff
	this.Buttoff = new lib.Star_Top_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).to({_off:true},11).wait(1).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.7,-94.2,187.5,188.4);


(lib.Star_Bottom_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12));

	// Star_Bottom_In
	this.Star_Bottom_In = new lib.Star_Bottom_In();
	this.Star_Bottom_In.name = "Star_Bottom_In";

	this.timeline.addTween(cjs.Tween.get(this.Star_Bottom_In).to({scaleX:0.8,scaleY:0.8},11,cjs.Ease.backInOut).wait(1).to({scaleX:1,scaleY:1},11,cjs.Ease.backInOut).wait(1));

	// Button
	this.Button_In = new lib.Star_Bottom_Button();
	this.Button_In.name = "Button_In";

	this.Button_Out = new lib.Star_Bottom_Button();
	this.Button_Out.name = "Button_Out";
	this.Button_Out.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Button_In}]}).to({state:[]},1).to({state:[{t:this.Button_Out}]},11).to({state:[]},1).wait(11));

	// Buttoff
	this.Buttoff = new lib.Star_Bottom_Button();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).to({_off:true},11).wait(1).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-54.9,109.30000000000001,109.9);


(lib.Shoe_Right_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20000").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape.setTransform(18.575,18.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_1.setTransform(18.575,18.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_2.setTransform(18.575,18.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00D800").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_3.setTransform(18.575,18.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009999").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_4.setTransform(18.575,18.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005EF4").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_5.setTransform(18.575,18.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A00BF").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_6.setTransform(18.575,18.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A000A0").s().p("AAWNRInptWIACNWIsEAAIFI6hINxAAICZKHIRZFOIAALMg");
	this.shape_7.setTransform(18.575,18.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_8.setTransform(25.7,-16.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEBCC").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_9.setTransform(25.7,-16.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_10.setTransform(25.7,-16.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3FFB3").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_11.setTransform(25.7,-16.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCCC").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_12.setTransform(25.7,-16.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5A99FF").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_13.setTransform(25.7,-16.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8131FF").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_14.setTransform(25.7,-16.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA00EA").s().p("Ak9jdIRXFOIF1FzIy2GAgAvUnxIi6i5IJyAAIhRi6ICXAAIFzFzIlDDJg");
	this.shape_15.setTransform(25.7,-16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#720000").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_16.setTransform(-37.175,9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C17200").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_17.setTransform(-37.175,9.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4C400").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_18.setTransform(-37.175,9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_19.setTransform(-37.175,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006B6B").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_20.setTransform(-37.175,9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003FA3").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_21.setTransform(-37.175,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#280066").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_22.setTransform(-37.175,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("ADQI6ImtrrICUPEIpeCaIl0lzICut+IDdAAIB3ppIJCB8IjsJAITfKRInZINg");
	this.shape_23.setTransform(-37.175,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Shoe_Right_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-103.4,284.70000000000005,206.9);


(lib.Shoe_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape.setTransform(18.55,17.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC9B65").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_1.setTransform(18.55,17.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFECA9").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_2.setTransform(18.55,17.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0CC00").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_3.setTransform(18.55,17.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00996D").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_4.setTransform(18.55,17.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E99").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_5.setTransform(18.55,17.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_6.setTransform(18.55,17.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9600E5").s().p("ABtK3IlBpzIABJzIpIAAIEb1tIIbAAIB/HgIKBDNIAALAg");
	this.shape_7.setTransform(18.55,17.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF92D3").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_8.setTransform(23.4,-11.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE7D9").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_9.setTransform(23.4,-11.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_10.setTransform(23.4,-11.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8FF00").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_11.setTransform(23.4,-11.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00D397").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_12.setTransform(23.4,-11.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009BD8").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_13.setTransform(23.4,-11.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5C5CFF").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_14.setTransform(23.4,-11.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C75CFF").s().p("AkKknIKBDNIF0FyIooHjgAoxmUIi5i5IFVAAIAZitIFnFmIj0BJg");
	this.shape_15.setTransform(23.4,-11.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA0065").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_16.setTransform(-34.35,8.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E25100").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_17.setTransform(-34.35,8.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0B103").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_18.setTransform(-34.35,8.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#729100").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_19.setTransform(-34.35,8.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006D4E").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_20.setTransform(-34.35,8.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004966").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_21.setTransform(-34.35,8.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000080").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_22.setTransform(-34.35,8.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5F0091").s().p("AEKGhIhMD1InIB+IlzlzICDqEIDfAAIByowIIuC6ID5Vtg");
	this.shape_23.setTransform(-34.35,8.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Shoe_Left_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-87.4,196.2,174.9);


(lib.Rabbit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Pink_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA00EA").s().p("A1oX0IAAstIJAjxIB/rFIgQhQIArhLIDKxpIM2AAIEmZRILREXIAAR/gApUSsIZlAAIl5sfItxAAg");
	this.shape.setTransform(-36,47.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("A1oX0IAAstIJAjxIB/rFIgQhQIArhLIDKxpIM2AAIEmZRILREXIAAR/gApUSsIZlAAIl5sfItxAAg");
	this.shape_1.setTransform(-36,47.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("A1oX0IAAstIJAjxIB/rFIgQhQIArhLIDKxpIM2AAIEmZRILREXIAAR/gApUSsIZlAAIl5sfItxAAg");
	this.shape_2.setTransform(-36,47.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Pink_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8DFF").s().p("AyBGRInPnOICmlTMAorAFTIHQHOg");
	this.shape_3.setTransform(-12.775,205.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF92D3").s().p("AyBGRInPnOICmlTMAorAFTIHQHOg");
	this.shape_4.setTransform(-12.775,205.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9999").s().p("AyBGRInPnOICmlTMAorAFTIHQHOg");
	this.shape_5.setTransform(-12.775,205.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Pink_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A000A0").s().p("AEWY8IGf2vIHQHRIAAR9gAyEliIND14IHPHPIEnZRg");
	this.shape_6.setTransform(33.225,70.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA0065").s().p("AEWY8IGf2vIHQHRIAAR9gAyEliIND14IHPHPIEnZRg");
	this.shape_7.setTransform(33.225,70.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AEWY8IGf2vIHQHRIAAR9gAyEliIND14IHPHPIEnZRg");
	this.shape_8.setTransform(33.225,70.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Tooth_Left
	this.Tooth_Left_Out = new lib.Tooth_Left_Out();
	this.Tooth_Left_Out.name = "Tooth_Left_Out";
	this.Tooth_Left_Out.setTransform(-30.8,135);

	this.timeline.addTween(cjs.Tween.get(this.Tooth_Left_Out).wait(4));

	// Tooth_Right
	this.Tooth_Right_Out = new lib.Tooth_Right_Out();
	this.Tooth_Right_Out.name = "Tooth_Right_Out";
	this.Tooth_Right_Out.setTransform(33.45,135);

	this.timeline.addTween(cjs.Tween.get(this.Tooth_Right_Out).wait(4));

	// Mouth_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AoGF7IMlt+IDoDpIl7Meg");
	this.shape_9.setTransform(-86.475,138.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AA0065").s().p("AoGF7IMlt+IDoDpIl7Meg");
	this.shape_10.setTransform(-86.475,138.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A000A0").s().p("AoGF7IMlt+IDoDpIl7Meg");
	this.shape_11.setTransform(-86.475,138.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Mouth_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F0000").s().p("AmoCeIiEjnIONhUIDME7g");
	this.shape_12.setTransform(-2.075,94.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D0024").s().p("AmoCeIiEjnIONhUIDME7g");
	this.shape_13.setTransform(-2.075,94.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#380038").s().p("AmoCeIiEjnIONhUIDME7g");
	this.shape_14.setTransform(-2.075,94.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Mouth_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("At8GsIAAtXIb4AAIAANXg");
	this.shape_15.setTransform(-1.55,140.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(4));

	// Rabbit_Button
	this.Rabbit_Button = new lib.Rabbit_Button();
	this.Rabbit_Button.name = "Rabbit_Button";
	this.Rabbit_Button.setTransform(-12.75,70.3);

	this.timeline.addTween(cjs.Tween.get(this.Rabbit_Button).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-105.2,323.5,351.1);


(lib.Outworld = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZNgIkKznIDtnYIBtAAIDtIaIjtSlg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72));

	// Button
	this.Button = new lib.Outworld_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(71));

	// Buttoff
	this.Buttoff = new lib.Outworld_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-86.4,58.4,172.8);


(lib.Nose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmtjJINbAAInKGTg");
	this.shape.setTransform(-7.75,-7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmtjJINbAAInKGTg");
	this.shape_1.setTransform(-7.75,-7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmtjJINbAAInKGTg");
	this.shape_2.setTransform(-7.75,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkXB9Ig1kfIH/h0ICaCaInJGTg");
	this.shape_3.setTransform(17.375,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AkXB9Ig1kfIH/h0ICaCaInJGTg");
	this.shape_4.setTransform(17.375,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AkXB9Ig1kfIH/h0ICaCaInJGTg");
	this.shape_5.setTransform(17.375,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Button
	this.Button = new lib.Nose_Button();
	this.Button.name = "Button";
	this.Button.setTransform(12.75,0);

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(3));

	// Buttoff
	this.Buttoff = new lib.Nose_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff.setTransform(12.75,0);
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-27.9,101.4,55.9);


(lib.Nail_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Nail_In
	this.Nail_In = new lib.Nail_In();
	this.Nail_In.name = "Nail_In";

	this.timeline.addTween(cjs.Tween.get(this.Nail_In).to({x:8.35,y:-5.25},5,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},5,cjs.Ease.sineInOut).wait(1));

	// Button
	this.Button = new lib.Nail_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(11));

	// Buttof
	this.Buttoff = new lib.Nail_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({x:8.35,y:-5.25},5,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},5,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-66.8,177.8,128.4);


(lib.Mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape.setTransform(6.55,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_1.setTransform(6.55,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C17200").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_2.setTransform(6.55,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C400").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_3.setTransform(6.55,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_4.setTransform(6.55,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006B6B").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_5.setTransform(6.55,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003FA3").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_6.setTransform(6.55,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#280066").s().p("AggARIg6hpIAfg0ICVEZg");
	this.shape_7.setTransform(6.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA00EA").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_8.setTransform(0,7.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_9.setTransform(0,7.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFEBCC").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_10.setTransform(0,7.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_11.setTransform(0,7.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3FFB3").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_12.setTransform(0,7.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCCC").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_13.setTransform(0,7.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5A99FF").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_14.setTransform(0,7.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8131FF").s().p("AibA+IBGh7ICkAAIBNB7g");
	this.shape_15.setTransform(0,7.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhVAfIA8hqIAvAJIBACDIiNALg");
	this.shape_16.setTransform(0.05,-1.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(8));

	// Button
	this.Button = new lib.Mouth_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-14.1,31.2,28.2);


(lib.Moon_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(36));

	// Moon_In
	this.Moon_In = new lib.Moon_In();
	this.Moon_In.name = "Moon_In";

	this.timeline.addTween(cjs.Tween.get(this.Moon_In).to({x:23.2,y:23.15},35,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},35,cjs.Ease.sineInOut).wait(1));

	// Button
	this.Button = new lib.Moon_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(35).to({_off:false,x:23.2,y:23.15},0).to({_off:true},1).wait(35));

	// Buttof
	this.Buttoff = new lib.Moon_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({x:23.2,y:23.15},35,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},35,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-97.5,202,218.2);


(lib.Lip_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lip_In
	this.Lip_In = new lib.Lip_In();
	this.Lip_In.name = "Lip_In";

	this.timeline.addTween(cjs.Tween.get(this.Lip_In).wait(1).to({y:-1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-12.6,174.9,24.2);


(lib.Legs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009BD8").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape.setTransform(12.375,12.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C5CFF").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_1.setTransform(12.375,12.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F0091").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_2.setTransform(12.375,12.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA0065").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_3.setTransform(12.375,12.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E25100").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_4.setTransform(12.375,12.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0B103").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_5.setTransform(12.375,12.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C8FF00").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_6.setTransform(12.375,12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00D397").s().p("Ayvf0IpPAAMAXlhAIIGSAAMAUrAvsIBJBLIAHBuIELJoIvzAAIhuAiIhwgiIijAAMgHMg2AMgGuAufIAVBiIguBKIhRIwIl3AAIhpAhg");
	this.shape_7.setTransform(12.375,12.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4DCDFF").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_8.setTransform(-8.075,-200.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9494FF").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_9.setTransform(-8.075,-200.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9600E5").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_10.setTransform(-8.075,-200.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0099").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_11.setTransform(-8.075,-200.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FC9B65").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_12.setTransform(-8.075,-200.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFECA9").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_13.setTransform(-8.075,-200.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_14.setTransform(-8.075,-200.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A6FFE6").s().p("AhNA+Ij3j2IGSAAID3D2Ih/B7g");
	this.shape_15.setTransform(-8.075,-200.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E99").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_16.setTransform(-66.025,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_17.setTransform(-66.025,-1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#32004C").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_18.setTransform(-66.025,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B0040").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_19.setTransform(-66.025,-1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A53B00").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_20.setTransform(-66.025,-1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A58202").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_21.setTransform(-66.025,-1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A0CC00").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_22.setTransform(-66.025,-1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00996D").s().p("AzleJMAXjhAIIGRCXIJXR+MgBLArvIj4j4MgFfgpNMgJiAsiIvQEeg");
	this.shape_23.setTransform(-66.025,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Legs_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.4,-219.2,382.9,438.5);


(lib.Heart_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20000").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape.setTransform(12.4,12.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5004E").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_1.setTransform(12.4,12.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7009C").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_2.setTransform(12.4,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA00EA").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_3.setTransform(12.4,12.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E200C9").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_4.setTransform(12.4,12.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA00A7").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_5.setTransform(12.4,12.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D20086").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_6.setTransform(12.4,12.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA0064").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_7.setTransform(12.4,12.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C20043").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_8.setTransform(12.4,12.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BA0021").s().p("Ap2jnIFmnUIEQHwIETnwIFjHUIp2Ojg");
	this.shape_9.setTransform(12.4,12.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_10.setTransform(-17.775,-30.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF2F55").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_11.setTransform(-17.775,-30.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF5EAA").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_12.setTransform(-17.775,-30.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF8DFF").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_13.setTransform(-17.775,-30.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF79DB").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_14.setTransform(-17.775,-30.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF65B6").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_15.setTransform(-17.775,-30.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF5192").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_16.setTransform(-17.775,-30.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF3C6D").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_17.setTransform(-17.775,-30.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF2849").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_18.setTransform(-17.775,-30.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF1424").s().p("AA2gUIESnxID4D3Ih/MUgAo/gxIFlnUID3D3IgdF6IlIBZg");
	this.shape_19.setTransform(-17.775,-30.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#720000").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_20.setTransform(-31.55,23.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#810035").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_21.setTransform(-31.55,23.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#91006B").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_22.setTransform(-31.55,23.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A000A0").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_23.setTransform(-31.55,23.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990089").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_24.setTransform(-31.55,23.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#930072").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_25.setTransform(-31.55,23.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8C005B").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_26.setTransform(-31.55,23.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#860045").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_27.setTransform(-31.55,23.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7F002E").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_28.setTransform(-31.55,23.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#790017").s().p("AC+FXIp0ukINqFqIADMxg");
	this.shape_29.setTransform(-31.55,23.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Button
	this.Button = new lib.Heart_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(11));

	// Buttoff
	this.Buttoff = new lib.Heart_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-82.3,150.9,164.7);


(lib.Hat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape.setTransform(46.3,46.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC9B65").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_1.setTransform(46.3,46.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFECA9").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_2.setTransform(46.3,46.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0CC00").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_3.setTransform(46.3,46.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00996D").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_4.setTransform(46.3,46.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E99").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_5.setTransform(46.3,46.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_6.setTransform(46.3,46.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9600E5").s().p("Ati0BIJ3lFMAROAwsIi8Bhg");
	this.shape_7.setTransform(46.3,46.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF92D3").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_8.setTransform(-55.325,-142.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE7D9").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_9.setTransform(-55.325,-142.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_10.setTransform(-55.325,-142.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8FF00").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_11.setTransform(-55.325,-142.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00D397").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_12.setTransform(-55.325,-142.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009BD8").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_13.setTransform(-55.325,-142.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5C5CFF").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_14.setTransform(-55.325,-142.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C75CFF").s().p("ACVJjIugueIJ3lFIOgOeIh8Fjg");
	this.shape_15.setTransform(-55.325,-142.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA0065").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_16.setTransform(-4.95,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E25100").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_17.setTransform(-4.95,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0B103").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_18.setTransform(-4.95,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#729100").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_19.setTransform(-4.95,11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006D4E").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_20.setTransform(-4.95,11);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004966").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_21.setTransform(-4.95,11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000080").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_22.setTransform(-4.95,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5F0091").s().p("AEIQKMgYKgtIIJlhqMAegA6jIhbCug");
	this.shape_23.setTransform(-4.95,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Layer_4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA00EA").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_24.setTransform(88.025,17.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9999").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_25.setTransform(88.025,17.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFEBCC").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_26.setTransform(88.025,17.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4C400").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_27.setTransform(88.025,17.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_28.setTransform(88.025,17.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006B6B").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_29.setTransform(88.025,17.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003FA3").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_30.setTransform(88.025,17.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8131FF").s().p("AnEklIK4idIDRGGIoiH/g");
	this.shape_31.setTransform(88.025,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	// Layer_5
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF8DFF").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_32.setTransform(62.1,-5.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE3E3").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_33.setTransform(62.1,-5.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_34.setTransform(62.1,-5.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_35.setTransform(62.1,-5.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00D800").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_36.setTransform(62.1,-5.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009999").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_37.setTransform(62.1,-5.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#005EF4").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_38.setTransform(62.1,-5.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AF7DFF").s().p("An2l1IK3idIE2E1ImZLwg");
	this.shape_39.setTransform(62.1,-5.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

	// Button
	this.Button = new lib.Hat_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.3,-207.1,266.6,414.2);


(lib.Hammer_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Hammer_In
	this.Hammer_In = new lib.Hammer_In();
	this.Hammer_In.name = "Hammer_In";

	this.timeline.addTween(cjs.Tween.get(this.Hammer_In).to({y:-10},5,cjs.Ease.sineInOut).wait(1).to({y:0},5,cjs.Ease.sineInOut).wait(1));

	// Button
	this.Button = new lib.Hammer_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(11));

	// Buttof
	this.Buttoff = new lib.Hammer_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({y:-10},5,cjs.Ease.sineInOut).wait(1).to({y:0},5,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.9,-189.3,381.9,368.6);


(lib.Flash_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(48));

	// Flash_In
	this.Flash_In = new lib.Flash_In();
	this.Flash_In.name = "Flash_In";

	this.timeline.addTween(cjs.Tween.get(this.Flash_In).to({alpha:0},47).wait(1).to({alpha:1},47).wait(1));

	// Button
	this.Button_In = new lib.Flash_Button();
	this.Button_In.name = "Button_In";

	this.Button_Out = new lib.Flash_Button();
	this.Button_Out.name = "Button_Out";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Button_In}]}).to({state:[]},1).to({state:[{t:this.Button_Out}]},47).to({state:[]},1).wait(47));

	// Buttof
	this.Buttoff = new lib.Flash_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).to({_off:true},47).wait(1).to({_off:false},0).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.3,-271.4,684.6,542.9);


(lib.Fire_Right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E25100").s().p("AuRXMIQkytIoXpzINux4IlHPNILvHyIAAXZg");
	this.shape.setTransform(0.025,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8538").s().p("AuRXMIQkytIoXpzINux4IlHPNILvHyIAAXZg");
	this.shape_1.setTransform(0.025,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B871").s().p("AuRXMIQkytIoXpzINux4IlHPNILvHyIAAXZg");
	this.shape_2.setTransform(0.025,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFECA9").s().p("AuRXMIQkytIoXpzINux4IlHPNILvHyIAAXZg");
	this.shape_3.setTransform(0.025,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F19F55").s().p("AuRXMIQkytIoXpzINux4IlHPNILvHyIAAXZg");
	this.shape_4.setTransform(0.025,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC9B65").s().p("AtETlIQkytIJlUGI6JF2gAk3o7INux4IAAHPInqRuImEAKg");
	this.shape_5.setTransform(-7.65,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDBC98").s().p("AtETlIQkytIJlUGI6JF2gAk3o7INux4IAAHPInqRuImEAKg");
	this.shape_6.setTransform(-7.65,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEDECC").s().p("AtETlIQkytIJlUGI6JF2gAk3o7INux4IAAHPInqRuImEAKg");
	this.shape_7.setTransform(-7.65,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AtETlIQkytIJlUGI6JF2gAk3o7INux4IAAHPInqRuImEAKg");
	this.shape_8.setTransform(-7.65,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FECDB2").s().p("AtETlIQkytIJlUGI6JF2gAk3o7INux4IAAHPInqRuImEAKg");
	this.shape_9.setTransform(-7.65,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A53B00").s().p("Am/HRICSuwILtHwIAAHPg");
	this.shape_10.setTransform(46.575,-26.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B96201").s().p("Am/HRICSuwILtHwIAAHPg");
	this.shape_11.setTransform(46.575,-26.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC8A02").s().p("Am/HRICSuwILtHwIAAHPg");
	this.shape_12.setTransform(46.575,-26.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0B103").s().p("Am/HRICSuwILtHwIAAHPg");
	this.shape_13.setTransform(46.575,-26.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C37602").s().p("Am/HRICSuwILtHwIAAHPg");
	this.shape_14.setTransform(46.575,-26.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Button
	this.Button = new lib.Fire_Right_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(4));

	// Buttoff
	this.Buttoff = new lib.Fire_Right_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,-171.6,182.7,343.29999999999995);


(lib.Fire_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E25100").s().p("AxHe6IAA8pITGu0IoVyWIUuUtIvST9ISCVJg");
	this.shape.setTransform(0,23.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8538").s().p("AxHe6IAA8pITGu0IoVyWIUuUtIvST9ISCVJg");
	this.shape_1.setTransform(0,23.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B871").s().p("AxHe6IAA8pITGu0IoVyWIUuUtIvST9ISCVJg");
	this.shape_2.setTransform(0,23.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFECA9").s().p("AxHe6IAA8pITGu0IoVyWIUuUtIvST9ISCVJg");
	this.shape_3.setTransform(0,23.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F19F55").s().p("AxHe6IAA8pITGu0IoVyWIUuUtIvST9ISCVJg");
	this.shape_4.setTransform(0,23.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC9B65").s().p("AsRDyITGuzIFdQsI4jFXg");
	this.shape_5.setTransform(-30.975,-32.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDBC98").s().p("AsRDyITGuzIFdQsI4jFXg");
	this.shape_6.setTransform(-30.975,-32.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEDECC").s().p("AsRDyITGuzIFdQsI4jFXg");
	this.shape_7.setTransform(-30.975,-32.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AsRDyITGuzIFdQsI4jFXg");
	this.shape_8.setTransform(-30.975,-32.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FECDB2").s().p("AsRDyITGuzIFdQsI4jFXg");
	this.shape_9.setTransform(-30.975,-32.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A53B00").s().p("AsydcIHj3TISCVKIAAHPgAqr7SIAAnPIUuUtIAAHQIomCAg");
	this.shape_10.setTransform(27.7,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B96201").s().p("AsydcIHj3TISCVKIAAHPgAqr7SIAAnPIUuUtIAAHQIomCAg");
	this.shape_11.setTransform(27.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC8A02").s().p("AsydcIHj3TISCVKIAAHPgAqr7SIAAnPIUuUtIAAHQIomCAg");
	this.shape_12.setTransform(27.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0B103").s().p("AsydcIHj3TISCVKIAAHPgAqr7SIAAnPIUuUtIAAHQIomCAg");
	this.shape_13.setTransform(27.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C37602").s().p("AsydcIHj3TISCVKIAAHPgAqr7SIAAnPIUuUtIAAHQIomCAg");
	this.shape_14.setTransform(27.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Button
	this.Button = new lib.Fire_Left_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(4));

	// Buttoff
	this.Buttoff = new lib.Fire_Left_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-221,219.2,442);


(lib.Fire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fire_1
	this.Fire_Right = new lib.Fire_Right();
	this.Fire_Right.name = "Fire_Right";
	this.Fire_Right.setTransform(66.55,84.15);

	this.timeline.addTween(cjs.Tween.get(this.Fire_Right).to({x:66.6,y:60.95},47,cjs.Ease.sineInOut).wait(1).to({x:66.55,y:84.15},47,cjs.Ease.sineInOut).wait(1));

	// Fire_2
	this.Fire_Left = new lib.Fire_Left();
	this.Fire_Left.name = "Fire_Left";
	this.Fire_Left.setTransform(-48.35,-34.75);

	this.timeline.addTween(cjs.Tween.get(this.Fire_Left).to({y:-11.6},47,cjs.Ease.sineInOut).wait(1).to({y:-34.75},47,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.9,-255.7,315.9,511.5);


(lib.Fang_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmqhhINVBhItVBig");
	this.shape.setTransform(0,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmqgbIEehiII3AAIAACZItVBig");
	this.shape_1.setTransform(0,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Button
	this.Button = new lib.Fang_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fang_In, new cjs.Rectangle(-42.6,-17.4,85.30000000000001,34.9), null);


(lib.Face = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D397").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape.setTransform(6.225,12.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009BD8").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_1.setTransform(6.225,12.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C5CFF").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_2.setTransform(6.225,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F0091").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_3.setTransform(6.225,12.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA0065").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_4.setTransform(6.225,12.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E25100").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_5.setTransform(6.225,12.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0B103").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_6.setTransform(6.225,12.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8FF00").s().p("Ap3CdIOEqpIFrKkIoWC6IgaAbIgqgDInQCjg");
	this.shape_7.setTransform(6.225,12.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A6FFE6").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_8.setTransform(-18.1,-18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4DCDFF").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_9.setTransform(-18.1,-18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9494FF").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_10.setTransform(-18.1,-18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9600E5").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_11.setTransform(-18.1,-18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0099").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_12.setTransform(-18.1,-18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC9B65").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_13.setTransform(-18.1,-18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFECA9").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_14.setTransform(-18.1,-18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AoAFVIE9jwIgxizIH9mCID3D4Ik/FrIpFE+g");
	this.shape_15.setTransform(-18.1,-18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00996D").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_16.setTransform(-53.3,40.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E99").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_17.setTransform(-53.3,40.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_18.setTransform(-53.3,40.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#32004C").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_19.setTransform(-53.3,40.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B0040").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_20.setTransform(-53.3,40.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A53B00").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_21.setTransform(-53.3,40.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A58202").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_22.setTransform(-53.3,40.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A0CC00").s().p("AAkB6IjElvICRAvICvG8g");
	this.shape_23.setTransform(-53.3,40.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Face_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-64.8,138.7,129.7);


(lib.Eye_Rabbit_Right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape.setTransform(-15.475,-15.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558888").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_1.setTransform(-15.475,-15.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA4444").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_2.setTransform(-15.475,-15.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_3.setTransform(-15.475,-15.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB1D1D").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_4.setTransform(-15.475,-15.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B63A3A").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_5.setTransform(-15.475,-15.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#925757").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_6.setTransform(-15.475,-15.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D7575").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_7.setTransform(-15.475,-15.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#499292").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_8.setTransform(-15.475,-15.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24AFAF").s().p("AtYISIAAwjIaxKEIAAGfg");
	this.shape_9.setTransform(-15.475,-15.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#99FFFF").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_10.setTransform(0,21.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBDDDD").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_11.setTransform(0,21.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDBBBB").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_12.setTransform(0,21.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9999").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_13.setTransform(0,21.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0A8A8").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_14.setTransform(0,21.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2B6B6").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_15.setTransform(0,21.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3C5C5").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_16.setTransform(0,21.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5D3D3").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_17.setTransform(0,21.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6E2E2").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_18.setTransform(0,21.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A8F0F0").s().p("AiiHWIibiaIocAAIiaiaINBp3INxJ3IE1E0g");
	this.shape_19.setTransform(0,21.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009999").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_20.setTransform(44.7,32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3B6666").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_21.setTransform(44.7,32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#773333").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_22.setTransform(44.7,32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_23.setTransform(44.7,32.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#991616").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_24.setTransform(44.7,32.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7F2C2C").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_25.setTransform(44.7,32.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#664242").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_26.setTransform(44.7,32.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C5757").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_27.setTransform(44.7,32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#336D6D").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_28.setTransform(44.7,32.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#198383").s().p("Ao0DNIM0o2IE1E2IAAGdg");
	this.shape_29.setTransform(44.7,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Button
	this.Button = new lib.Eye_Rabbit_Right_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.2,-68.4,202.4,136.9);


(lib.Eye_Rabbit_Left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape.setTransform(-7.75,-15.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558888").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_1.setTransform(-7.75,-15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA4444").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_2.setTransform(-7.75,-15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_3.setTransform(-7.75,-15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB1D1D").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_4.setTransform(-7.75,-15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B63A3A").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_5.setTransform(-7.75,-15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#925757").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_6.setTransform(-7.75,-15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D7575").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_7.setTransform(-7.75,-15.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#499292").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_8.setTransform(-7.75,-15.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24AFAF").s().p("AqAF5IAAkwIUBnBIAALxg");
	this.shape_9.setTransform(-7.75,-15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#99FFFF").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_10.setTransform(0,16.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBDDDD").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_11.setTransform(0,16.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDBBBB").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_12.setTransform(0,16.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9999").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_13.setTransform(0,16.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0A8A8").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_14.setTransform(0,16.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2B6B6").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_15.setTransform(0,16.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3C5C5").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_16.setTransform(0,16.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5D3D3").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_17.setTransform(0,16.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6E2E2").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_18.setTransform(0,16.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A8F0F0").s().p("AmYFuIk1k1IJOmmIKyGmICbCaIm0AAIgcCbg");
	this.shape_19.setTransform(0,16.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009999").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_20.setTransform(6.2,-7.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3B6666").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_21.setTransform(6.2,-7.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#773333").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_22.setTransform(6.2,-7.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_23.setTransform(6.2,-7.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#991616").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_24.setTransform(6.2,-7.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7F2C2C").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_25.setTransform(6.2,-7.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#664242").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_26.setTransform(6.2,-7.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C5757").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_27.setTransform(6.2,-7.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#336D6D").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_28.setTransform(6.2,-7.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#198383").s().p("AqQEsISFrxICbCaIAALxg");
	this.shape_29.setTransform(6.2,-7.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Button
	this.Button = new lib.Eye_Rabbit_Left_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,-53.1,143.7,106.30000000000001);


(lib.Eye_Man_Top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9B65").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape.setTransform(9.3,9.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFECA9").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_1.setTransform(9.3,9.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0CC00").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_2.setTransform(9.3,9.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00996D").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_3.setTransform(9.3,9.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E99").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_4.setTransform(9.3,9.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_5.setTransform(9.3,9.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9600E5").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_6.setTransform(9.3,9.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0099").s().p("An5jsIMhjzIDSGJIpzI3g");
	this.shape_7.setTransform(9.3,9.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE7D9").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_8.setTransform(-10.5,-30.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_9.setTransform(-10.5,-30.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8FF00").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_10.setTransform(-10.5,-30.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00D397").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_11.setTransform(-10.5,-30.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009BD8").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_12.setTransform(-10.5,-30.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C5CFF").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_13.setTransform(-10.5,-30.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C75CFF").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_14.setTransform(-10.5,-30.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF92D3").s().p("AkzCkIi6i5IMhjzIC6C6IjbFXg");
	this.shape_15.setTransform(-10.5,-30.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E25100").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_16.setTransform(-10.35,12.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0B103").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_17.setTransform(-10.35,12.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#729100").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_18.setTransform(-10.35,12.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006D4E").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_19.setTransform(-10.35,12.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004966").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_20.setTransform(-10.35,12.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000080").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_21.setTransform(-10.35,12.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5F0091").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_22.setTransform(-10.35,12.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AA0065").s().p("AgRFnIh5jhIhdheIkHnrIPdEGImkKBg");
	this.shape_23.setTransform(-10.35,12.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Eye_Man_Top_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-57.3,119.69999999999999,114.6);


(lib.Eye_Man_Bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9B65").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape.setTransform(5.275,4.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFECA9").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_1.setTransform(5.275,4.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0CC00").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_2.setTransform(5.275,4.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00996D").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_3.setTransform(5.275,4.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E99").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_4.setTransform(5.275,4.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_5.setTransform(5.275,4.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9600E5").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_6.setTransform(5.275,4.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0099").s().p("Akmj8ICkhYIGpGvInND6g");
	this.shape_7.setTransform(5.275,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE7D9").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_8.setTransform(-20.65,-28.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_9.setTransform(-20.65,-28.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8FF00").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_10.setTransform(-20.65,-28.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00D397").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_11.setTransform(-20.65,-28.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009BD8").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_12.setTransform(-20.65,-28.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C5CFF").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_13.setTransform(-20.65,-28.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C75CFF").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_14.setTransform(-20.65,-28.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF92D3").s().p("AgjBLIhchcICihYIBdBdIgVB2g");
	this.shape_15.setTransform(-20.65,-28.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E25100").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_16.setTransform(-13.85,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0B103").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_17.setTransform(-13.85,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#729100").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_18.setTransform(-13.85,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006D4E").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_19.setTransform(-13.85,4.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004966").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_20.setTransform(-13.85,4.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000080").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_21.setTransform(-13.85,4.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5F0091").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_22.setTransform(-13.85,4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AA0065").s().p("AigCeIgwjaIBEgYIg3kDIGUDXIi5HYg");
	this.shape_23.setTransform(-13.85,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Eye_Man_Bottom_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-38.8,69.5,77.6);


(lib.Ears_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA00EA").s().p("ADBwvImXQbIhDAAIEF7iMAuEAoZIy9PUgEgtvAOrMAjJgmFIF1X1Ig/AAInQvWMgR9Amyg");
	this.shape.setTransform(-11.6,-11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("ADBwvImXQbIhDAAIEF7iMAuEAoZIy9PUgEgtvAOrMAjJgmFIF1X1Ig/AAInQvWMgR9Amyg");
	this.shape_1.setTransform(-11.6,-11.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ADBwvImXQbIhDAAIEF7iMAuEAoZIy9PUgEgtvAOrMAjJgmFIF1X1Ig/AAInQvWMgR9Amyg");
	this.shape_2.setTransform(-11.6,-11.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8DFF").s().p("AyqQRIjojoILHiSIDrLeIDoDogARsANIhHl4IlvvQICAkhIDoDpIF1X0g");
	this.shape_3.setTransform(-161.7,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF92D3").s().p("AyqQRIjojoILHiSIDrLeIDoDogARsANIhHl4IlvvQICAkhIDoDpIF1X0g");
	this.shape_4.setTransform(-161.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9999").s().p("AyqQRIjojoILHiSIDrLeIDoDogARsANIhHl4IlvvQICAkhIDoDpIF1X0g");
	this.shape_5.setTransform(-161.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A000A0").s().p("AX+XrICkvGIQZgPIDoDoIy9PUgEguiAMDMAgogk2IBtJTMgR9AmygAmLkgID02xIGLJ+ImXQag");
	this.shape_6.setTransform(6.525,15.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AA0065").s().p("AX+XrICkvGIQZgPIDoDoIy9PUgEguiAMDMAgogk2IBtJTMgR9AmygAmLkgID02xIGLJ+ImXQag");
	this.shape_7.setTransform(6.525,15.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AX+XrICkvGIQZgPIDoDoIy9PUgEguiAMDMAgogk2IBtJTMgR9AmygAmLkgID02xIGLJ+ImXQag");
	this.shape_8.setTransform(6.525,15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Button
	this.Button = new lib.Ears_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.4,-189.9,608.8,379.8);


(lib.Coffin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C17200").s().p("EAjzAOXIkE0UIEEoZIFnAAIEDIZIkDUUgEgpZAOXIkD0UIEDoZIFoAAIEDIZIkDUUgEgr6gF9IDwS0IDKAAIDxy0IjVm5IkDAAg");
	this.shape.setTransform(11.4,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#875000").s().p("EAjzAOXIkE0UIEEoZIFnAAIEDIZIkDUUgEgpZAOXIkD0UIEDoZIFoAAIEDIZIkDUUgEgr6gF9IDwS0IDKAAIDxy0IjVm5IkDAAg");
	this.shape_1.setTransform(11.4,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("EgntAEHIjkAAIEEoYIDjAAIArAxIjsHxgEAj9AEHIEDoYIBiAAIBwFDIl0DVg");
	this.shape_2.setTransform(-25.325,-64.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C17200").s().p("EgntAEHIjkAAIEEoYIDjAAIArAxIjsHxgEAj9AEHIEDoYIBiAAIBwFDIl0DVg");
	this.shape_3.setTransform(-25.325,-64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#875000").s().p("EAmmANZIkD0UIKJmdIkkaxgEgonANZIkE0UID+iyIEhVZIDuynIDkAAIA0A5IjuS+IlQAdg");
	this.shape_4.setTransform(-16.35,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#563300").s().p("EAmmANZIkD0UIKJmdIkkaxgEgonANZIkE0UID+iyIEhVZIDuynIDkAAIA0A5IjuS+IlQAdg");
	this.shape_5.setTransform(-16.35,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#563300").s().p("AgiDYIjTm4ID7gvIDwIfg");
	this.shape_6.setTransform(-220.8,-59.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#331F00").s().p("AgiDYIjTm4ID7gvIDwIfg");
	this.shape_7.setTransform(-220.8,-59.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).wait(1));

	// Button
	this.Button = new lib.Coffin_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(2));

	// Outworld
	this.Outworld = new lib.Outworld();
	this.Outworld.name = "Outworld";
	this.Outworld.setTransform(-245.7,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.Outworld).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.3,-91.8,604.7,183.7);


(lib.Cloud_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Cloud_In
	this.Cloud_In = new lib.Cloud_In();
	this.Cloud_In.name = "Cloud_In";

	this.timeline.addTween(cjs.Tween.get(this.Cloud_In).wait(1).to({x:4},0).to({x:-3},3,cjs.Ease.sineInOut).to({x:2},4,cjs.Ease.sineInOut).to({x:0},5,cjs.Ease.get(1)).wait(1));

	// Button
	this.Button = new lib.Cloud_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(13));

	// Buttof
	this.Buttoff = new lib.Cloud_Buttoff();
	this.Buttoff.name = "Buttoff";
	this.Buttoff.setTransform(4,0);
	this.Buttoff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).wait(1).to({_off:false},0).to({x:-3},3,cjs.Ease.sineInOut).to({x:2},4,cjs.Ease.sineInOut).to({x:0},5,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.2,-65.5,239.5,131.1);


(lib.Car_In = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AymLhIAApYIHeiJIETrgIZcAAIAAXBgABFhsIiNl/IizAAIiOF/IHOAAg");
	this.shape.setTransform(19.35,19.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF66FF").s().p("AymLhIAApYIHeiJIETrgIZcAAIAAXBgABFhsIiNl/IizAAIiOF/IHOAAg");
	this.shape_1.setTransform(19.35,19.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00D800").s().p("AvkJiImDmCIHeiJIGDGDIiHCxgAj0kHImDmDIZcAAIGDGDIrmDxg");
	this.shape_2.setTransform(0,-28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF27FF").s().p("AvkJiImDmCIHeiJIGDGDIiHCxgAj0kHImDmDIZcAAIGDGDIrmDxg");
	this.shape_3.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007200").s().p("AqpIgIAApXIFbBKICDjTIERriIJkCrIlEThIqMG5g");
	this.shape_4.setTransform(-70.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8DFF").s().p("AqpIgIAApXIFbBKICDjTIERriIJkCrIlEThIqMG5g");
	this.shape_5.setTransform(-70.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8131FF").s().p("AmokEII0AAIEdGCIoQCHg");
	this.shape_6.setTransform(-16.25,-4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7ECE00").s().p("AmokEII0AAIEdGCIoQCHg");
	this.shape_7.setTransform(-16.25,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#280066").s().p("Ah6gBIiNl/IHlFIIAqG5g");
	this.shape_8.setTransform(-0.175,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7FF99").s().p("Ah6gBIiNl/IHlFIIAqG5g");
	this.shape_9.setTransform(-0.175,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// Button
	this.Button = new lib.Car_In_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-93,276.9,186.1);


(lib.Bone_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(48));

	// Bone_In
	this.Bone_In = new lib.Bone_In();
	this.Bone_In.name = "Bone_In";

	this.timeline.addTween(cjs.Tween.get(this.Bone_In).to({x:-256.8},47,cjs.Ease.sineInOut).wait(1).to({x:0},47,cjs.Ease.sineInOut).wait(1));

	// Button
	this.Button = new lib.Bone_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(47).to({_off:false,x:-256.8},0).to({_off:true},1).wait(47));

	// Button_Move
	this.Buttoff = new lib.Bone_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({x:-256.8},47,cjs.Ease.sineInOut).wait(1).to({x:0},47,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436.3,-69.4,615.8,138.9);


(lib.Body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20000").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape.setTransform(2.95,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_1.setTransform(2.95,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_2.setTransform(2.95,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00D800").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_3.setTransform(2.95,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009999").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_4.setTransform(2.95,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005EF4").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_5.setTransform(2.95,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A00BF").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_6.setTransform(2.95,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A000A0").s().p("AD6NQIpmAAIihksIGukEIpqw9IM+lxIC3KbIAvBPIACBlIEhQeIAhAzIABBJIArCaIi+BoIggAuIg+AEg");
	this.shape_7.setTransform(2.95,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_8.setTransform(-40.55,30.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEBCC").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_9.setTransform(-40.55,30.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_10.setTransform(-40.55,30.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3FFB3").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_11.setTransform(-40.55,30.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCCC").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_12.setTransform(-40.55,30.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5A99FF").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_13.setTransform(-40.55,30.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8131FF").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_14.setTransform(-40.55,30.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA00EA").s().p("AhaD1Ij4j3IGskDID5D2IhYEWg");
	this.shape_15.setTransform(-40.55,30.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#720000").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_16.setTransform(-5.775,18.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C17200").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_17.setTransform(-5.775,18.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4C400").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_18.setTransform(-5.775,18.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_19.setTransform(-5.775,18.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006B6B").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_20.setTransform(-5.775,18.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003FA3").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_21.setTransform(-5.775,18.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#280066").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_22.setTransform(-5.775,18.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("AEPLfIizk8IJSEmIinEOgAoNGhIigktIJhBRIjJHSgAkAiOImorqIA2heIMHAKIhaTvg");
	this.shape_23.setTransform(-5.775,18.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Body_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.4,-116.7,148.8,233.4);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F0091").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#62008F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66008D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#69008B").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C0089").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F0087").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#730086").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#760084").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#790082").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C0080").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#80007E").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83007C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#86007A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#890078").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8D0076").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#900074").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#930072").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#960070").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9A006F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D006D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A0006B").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A30069").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A70067").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AA0065").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AC0361").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AF075D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B10A58").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B30E54").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B61150").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8144C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BA1848").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BD1B43").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BF1E3F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C1223B").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C42537").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C62933").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C82C2E").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CB2F2A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CD3326").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CF3622").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D2391D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D43D19").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D64015").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D94311").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DB470D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DD4A08").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E04E04").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E25100").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E25500").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E25900").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E25D00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E26101").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E26501").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E26901").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E16D01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E17101").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E17501").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E17901").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E17D01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E18102").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E18502").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E18902").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E18D02").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E19102").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E19502").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E19902").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E09D02").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E0A102").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E0A503").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E0A903").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0AD03").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0B103").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DFB403").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DEB703").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DDBB03").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DCBE02").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DBC102").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DAC502").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D9C802").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D8CB02").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D7CE02").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D6D202").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D5D502").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D4D802").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D3DB01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D2DE01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D1E201").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D0E501").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CFE801").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CEEC01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CDEF01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCF201").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CBF500").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CAF900").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C9FC00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C8FF00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C0FD06").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B7FB0D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AFFA13").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A7F819").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9EF61F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#96F426").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#8EF22C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#85F032").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7DEF39").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#75ED3F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6CEB45").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#64E94C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5CE752").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#53E558").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4BE45E").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#43E265").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3AE06B").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#32DE71").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2ADC78").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#21DA7E").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#19D984").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#11D78A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#08D591").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00D397").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00D19A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00CE9C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00CC9F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00CAA2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00C7A5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00C5A7").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00C3AA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00C0AD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00BEAF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00BCB2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00B9B5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00B7B8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00B5BA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00B2BD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00B0C0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00AEC2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00ABC5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00A9C8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00A7CA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00A4CD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00A2D0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00A0D3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#009DD5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009BD8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0498DA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0896DB").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0C93DD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0F90DF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#138EE0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#178BE2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#1B89E3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#1F86E5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2383E7").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2681E8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2A7EEA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2E7CEC").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3279ED").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3676EF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3A74F0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3D71F2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#416EF4").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#456CF5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4969F7").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4D67F8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#5164FA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#5461FC").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#585FFD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#5C5CFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#5C5AFD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#5C58FA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#5C56F8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#5C54F6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#5C52F4").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#5C51F1").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#5C4FEF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#5D4DED").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#5D4BEA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#5D49E8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5D47E6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#5D45E4").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#5D43E1").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#5D41DF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5D3FDD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#5D3DDA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#5D3BD8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#5D3AD6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5D38D3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#5D36D1").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#5D34CF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#5D32CD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5D30CA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#5E2EC8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#5E2CC6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#5E2AC3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5E28C1").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#5E26BF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#5E24BD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5E23BA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#5E21B8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#5E1FB6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#5E1DB3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#5E1BB1").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#5E19AF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#5E17AD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#5E15AA").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#5E13A8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#5E11A6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#5E0FA3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#5F0DA1").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#5F0C9F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#5F0A9C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5F089A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#5F0698").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#5F0496").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#5F0293").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Button
	this.Button = new lib.Background_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(216));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-540,1080,1080);


(lib.Arrow_3_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12));

	// Button
	this.Button = new lib.Arrow_3_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(11).to({_off:false,x:-9.95,y:-5},0).to({_off:true},1).wait(11));

	// Arrow_3
	this.Arrow_3_In = new lib.Arrow_3_In();
	this.Arrow_3_In.name = "Arrow_3_In";

	this.timeline.addTween(cjs.Tween.get(this.Arrow_3_In).to({x:-9.95,y:-5},11,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},11,cjs.Ease.sineInOut).wait(1));

	// Buttoff
	this.Buttoff = new lib.Arrow_3_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({x:-9.95,y:-5},11,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},11,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-94,179,183);


(lib.Arrow_2_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12));

	// Button
	this.Button = new lib.Arrow_2_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(11).to({_off:false,x:18.15,y:-11.15},0).to({_off:true},1).wait(11));

	// Arrow_2
	this.Arrow_2_In = new lib.Arrow_2_In();
	this.Arrow_2_In.name = "Arrow_2_In";

	this.timeline.addTween(cjs.Tween.get(this.Arrow_2_In).to({x:18.15,y:-11.15},11,cjs.Ease.cubicInOut).wait(1).to({x:0,y:0},11,cjs.Ease.cubicInOut).wait(1));

	// Buttoff
	this.Buttoff = new lib.Arrow_2_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({x:18.15,y:-11.15},11,cjs.Ease.cubicInOut).wait(1).to({x:0,y:0},11,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-53.6,121.4,96.2);


(lib.Arrow_1_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12));

	// Button
	this.Button = new lib.Arrow_1_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).to({_off:true},1).wait(11).to({_off:false,x:-15.2,y:8.8},0).to({_off:true},1).wait(11));

	// Arrow_1
	this.Arrow_1_In = new lib.Arrow_1_In();
	this.Arrow_1_In.name = "Arrow_1_In";

	this.timeline.addTween(cjs.Tween.get(this.Arrow_1_In).to({x:-15.2,y:8.8},11,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},11,cjs.Ease.sineInOut).wait(1));

	// Buttoff
	this.Buttoff = new lib.Arrow_1_Buttoff();
	this.Buttoff.name = "Buttoff";

	this.timeline.addTween(cjs.Tween.get(this.Buttoff).to({x:-15.2,y:8.8},11,cjs.Ease.sineInOut).wait(1).to({x:0,y:0},11,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-72.6,235.7,154);


(lib.Arrow_0_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.Arrow_0_In = new lib.Arrow_0_In();
	this.Arrow_0_In.name = "Arrow_0_In";

	this.timeline.addTween(cjs.Tween.get(this.Arrow_0_In).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow_0_Out, new cjs.Rectangle(-396.7,-630.9,793.5,1261.9), null);


(lib.Arm_Top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D397").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape.setTransform(15.475,15.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009BD8").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_1.setTransform(15.475,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C5CFF").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_2.setTransform(15.475,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F0091").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_3.setTransform(15.475,15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA0065").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_4.setTransform(15.475,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E25100").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_5.setTransform(15.475,15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0B103").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_6.setTransform(15.475,15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8FF00").s().p("A1SFRIIVqyINbNwIxF0EIMRnyILBXlIlP0WIKohxIAAXMIGWh0IC5F5IzXKgg");
	this.shape_7.setTransform(15.475,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A6FFE6").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_8.setTransform(-9.225,-36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4DCDFF").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_9.setTransform(-9.225,-36.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9494FF").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_10.setTransform(-9.225,-36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9600E5").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_11.setTransform(-9.225,-36.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0099").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_12.setTransform(-9.225,-36.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC9B65").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_13.setTransform(-9.225,-36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFECA9").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_14.setTransform(-9.225,-36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AKqIgIGyh8IE1E2InsE4gA2QImIIUqyIE2E0Ih/HGImWDtgAxmofIMRnyIE2E0IkjF4InuB7gAFToOIk1k0IKnhxIE2E1IkNCgg");
	this.shape_15.setTransform(-9.225,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00996D").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_16.setTransform(-31.875,-26.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E99").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_17.setTransform(-31.875,-26.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_18.setTransform(-31.875,-26.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#32004C").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_19.setTransform(-31.875,-26.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B0040").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_20.setTransform(-31.875,-26.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A53B00").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_21.setTransform(-31.875,-26.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A58202").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_22.setTransform(-31.875,-26.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A0CC00").s().p("ADCJ5IxF0DIGGCiIP1WWgAJPFpIlP0WIGbDFIDpWGg");
	this.shape_23.setTransform(-31.875,-26.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Arm_Top_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.7,-141,303.5,282.1);


(lib.Arm_Bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D397").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape.setTransform(9.3,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009BD8").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_1.setTransform(9.3,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C5CFF").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_2.setTransform(9.3,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F0091").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_3.setTransform(9.3,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA0065").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_4.setTransform(9.3,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E25100").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_5.setTransform(9.3,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0B103").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_6.setTransform(9.3,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8FF00").s().p("Al3g0IBnLbInQAAIAAypILqmVIC2ECIj6EOIMbHuIm1G7Inzq5IIONSIndDdg");
	this.shape_7.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A6FFE6").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_8.setTransform(4.65,-40.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4DCDFF").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_9.setTransform(4.65,-40.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9494FF").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_10.setTransform(4.65,-40.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9600E5").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_11.setTransform(4.65,-40.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0099").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_12.setTransform(4.65,-40.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC9B65").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_13.setTransform(4.65,-40.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFECA9").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_14.setTransform(4.65,-40.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah1CNIhRjYIMbHvIC6C5gAsOhqICUhQIgih9IIcklIC5C6IlTERImXCEg");
	this.shape_15.setTransform(4.65,-40.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00996D").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_16.setTransform(-21.8,24.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E99").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_17.setTransform(-21.8,24.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_18.setTransform(-21.8,24.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#32004C").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_19.setTransform(-21.8,24.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B0040").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_20.setTransform(-21.8,24.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A53B00").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_21.setTransform(-21.8,24.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A58202").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_22.setTransform(-21.8,24.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A0CC00").s().p("AgYJDIjivNIDuBRICsQ1gApjFRIAAtpIBegyIAAixIDTBkIh3SigAGqDMIncqvIDiBbIGzMOg");
	this.shape_23.setTransform(-21.8,24.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Button
	this.Button = new lib.Arm_Bottom_Button();
	this.Button.name = "Button";

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-101.3,165.9,202.7);


(lib.Shoe_Right_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_1 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_2 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_3 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_4 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_5 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_6 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_7 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_8 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_9 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_10 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_11 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_12 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_13 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_14 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_15 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_16 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_17 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_18 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_19 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_20 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_21 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_22 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_23 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_24 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_25 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_26 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_27 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_28 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_29 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_30 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_31 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_32 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_33 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_34 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_35 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_36 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_37 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_38 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_39 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_40 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_41 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_42 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_43 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_44 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_45 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_46 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_47 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_48 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_49 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_50 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_51 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_52 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_53 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_54 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_55 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_56 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_57 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_58 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_59 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_60 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_62 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_63 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_64 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_65 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_66 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_67 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_68 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_69 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_70 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_71 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_72 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_73 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_74 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_75 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_76 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_77 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_78 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_79 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_80 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_81 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_82 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_83 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_84 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FxIAAQ6g");
	var mask_graphics_85 = new cjs.Graphics().p("A10TRMAAAgmhMAl1AAAIAAP2IF0FyIAAQ5g");
	var mask_graphics_86 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_87 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_88 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_89 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_90 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP2IF0FyIAAQ6g");
	var mask_graphics_91 = new cjs.Graphics().p("A10TSMAAAgmjMAl1AAAIAAP2IF0FyIAAQ7g");
	var mask_graphics_92 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FzIAAQ6g");
	var mask_graphics_93 = new cjs.Graphics().p("A10TRMAAAgmiMAl1AAAIAAP3IF0FyIAAQ5g");
	var mask_graphics_94 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");
	var mask_graphics_95 = new cjs.Graphics().p("A10TSMAAAgmiMAl1AAAIAAP1IF0FyIAAQ7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.625,y:16.75}).wait(1).to({graphics:mask_graphics_1,x:2.5356,y:16.723}).wait(1).to({graphics:mask_graphics_2,x:2.269,y:16.6425}).wait(1).to({graphics:mask_graphics_3,x:1.8302,y:16.5099}).wait(1).to({graphics:mask_graphics_4,x:1.2274,y:16.3278}).wait(1).to({graphics:mask_graphics_5,x:0.4718,y:16.0996}).wait(1).to({graphics:mask_graphics_6,x:-0.4225,y:15.8294}).wait(1).to({graphics:mask_graphics_7,x:-1.4389,y:15.5224}).wait(1).to({graphics:mask_graphics_8,x:-2.5584,y:15.1842}).wait(1).to({graphics:mask_graphics_9,x:-3.7602,y:14.8212}).wait(1).to({graphics:mask_graphics_10,x:-5.0218,y:14.44}).wait(1).to({graphics:mask_graphics_11,x:-6.3199,y:14.0479}).wait(1).to({graphics:mask_graphics_12,x:-7.6301,y:13.6521}).wait(1).to({graphics:mask_graphics_13,x:-8.9282,y:13.26}).wait(1).to({graphics:mask_graphics_14,x:-10.1898,y:12.8788}).wait(1).to({graphics:mask_graphics_15,x:-11.3916,y:12.5158}).wait(1).to({graphics:mask_graphics_16,x:-12.5111,y:12.1776}).wait(1).to({graphics:mask_graphics_17,x:-13.5275,y:11.8706}).wait(1).to({graphics:mask_graphics_18,x:-14.4218,y:11.6004}).wait(1).to({graphics:mask_graphics_19,x:-15.1774,y:11.3722}).wait(1).to({graphics:mask_graphics_20,x:-15.7802,y:11.1901}).wait(1).to({graphics:mask_graphics_21,x:-16.219,y:11.0575}).wait(1).to({graphics:mask_graphics_22,x:-16.4856,y:10.977}).wait(1).to({graphics:mask_graphics_23,x:-16.575,y:10.95}).wait(1).to({graphics:mask_graphics_24,x:-16.575,y:10.95}).wait(1).to({graphics:mask_graphics_25,x:-16.4856,y:10.977}).wait(1).to({graphics:mask_graphics_26,x:-16.219,y:11.0575}).wait(1).to({graphics:mask_graphics_27,x:-15.7802,y:11.1901}).wait(1).to({graphics:mask_graphics_28,x:-15.1774,y:11.3722}).wait(1).to({graphics:mask_graphics_29,x:-14.4218,y:11.6004}).wait(1).to({graphics:mask_graphics_30,x:-13.5275,y:11.8706}).wait(1).to({graphics:mask_graphics_31,x:-12.5111,y:12.1776}).wait(1).to({graphics:mask_graphics_32,x:-11.3916,y:12.5158}).wait(1).to({graphics:mask_graphics_33,x:-10.1898,y:12.8788}).wait(1).to({graphics:mask_graphics_34,x:-8.9282,y:13.26}).wait(1).to({graphics:mask_graphics_35,x:-7.6301,y:13.6521}).wait(1).to({graphics:mask_graphics_36,x:-6.3199,y:14.0479}).wait(1).to({graphics:mask_graphics_37,x:-5.0218,y:14.44}).wait(1).to({graphics:mask_graphics_38,x:-3.7602,y:14.8212}).wait(1).to({graphics:mask_graphics_39,x:-2.5584,y:15.1842}).wait(1).to({graphics:mask_graphics_40,x:-1.4389,y:15.5224}).wait(1).to({graphics:mask_graphics_41,x:-0.4225,y:15.8294}).wait(1).to({graphics:mask_graphics_42,x:0.4718,y:16.0996}).wait(1).to({graphics:mask_graphics_43,x:1.2274,y:16.3278}).wait(1).to({graphics:mask_graphics_44,x:1.8302,y:16.5099}).wait(1).to({graphics:mask_graphics_45,x:2.269,y:16.6425}).wait(1).to({graphics:mask_graphics_46,x:2.5356,y:16.723}).wait(1).to({graphics:mask_graphics_47,x:2.625,y:16.75}).wait(1).to({graphics:mask_graphics_48,x:2.625,y:16.75}).wait(1).to({graphics:mask_graphics_49,x:2.5356,y:16.723}).wait(1).to({graphics:mask_graphics_50,x:2.269,y:16.6425}).wait(1).to({graphics:mask_graphics_51,x:1.8302,y:16.5099}).wait(1).to({graphics:mask_graphics_52,x:1.2274,y:16.3278}).wait(1).to({graphics:mask_graphics_53,x:0.4718,y:16.0996}).wait(1).to({graphics:mask_graphics_54,x:-0.4225,y:15.8294}).wait(1).to({graphics:mask_graphics_55,x:-1.4389,y:15.5224}).wait(1).to({graphics:mask_graphics_56,x:-2.5584,y:15.1842}).wait(1).to({graphics:mask_graphics_57,x:-3.7602,y:14.8212}).wait(1).to({graphics:mask_graphics_58,x:-5.0218,y:14.44}).wait(1).to({graphics:mask_graphics_59,x:-6.3199,y:14.0479}).wait(1).to({graphics:mask_graphics_60,x:-7.6301,y:13.6521}).wait(1).to({graphics:mask_graphics_61,x:-8.9282,y:13.26}).wait(1).to({graphics:mask_graphics_62,x:-10.1898,y:12.8788}).wait(1).to({graphics:mask_graphics_63,x:-11.3916,y:12.5158}).wait(1).to({graphics:mask_graphics_64,x:-12.5111,y:12.1776}).wait(1).to({graphics:mask_graphics_65,x:-13.5275,y:11.8706}).wait(1).to({graphics:mask_graphics_66,x:-14.4218,y:11.6004}).wait(1).to({graphics:mask_graphics_67,x:-15.1774,y:11.3722}).wait(1).to({graphics:mask_graphics_68,x:-15.7802,y:11.1901}).wait(1).to({graphics:mask_graphics_69,x:-16.219,y:11.0575}).wait(1).to({graphics:mask_graphics_70,x:-16.4856,y:10.977}).wait(1).to({graphics:mask_graphics_71,x:-16.575,y:10.95}).wait(1).to({graphics:mask_graphics_72,x:-16.575,y:10.95}).wait(1).to({graphics:mask_graphics_73,x:-16.4856,y:10.977}).wait(1).to({graphics:mask_graphics_74,x:-16.219,y:11.0575}).wait(1).to({graphics:mask_graphics_75,x:-15.7802,y:11.1901}).wait(1).to({graphics:mask_graphics_76,x:-15.1774,y:11.3722}).wait(1).to({graphics:mask_graphics_77,x:-14.4218,y:11.6004}).wait(1).to({graphics:mask_graphics_78,x:-13.5275,y:11.8706}).wait(1).to({graphics:mask_graphics_79,x:-12.5111,y:12.1776}).wait(1).to({graphics:mask_graphics_80,x:-11.3916,y:12.5158}).wait(1).to({graphics:mask_graphics_81,x:-10.1898,y:12.8788}).wait(1).to({graphics:mask_graphics_82,x:-8.9282,y:13.26}).wait(1).to({graphics:mask_graphics_83,x:-7.6301,y:13.6521}).wait(1).to({graphics:mask_graphics_84,x:-6.3199,y:14.0479}).wait(1).to({graphics:mask_graphics_85,x:-5.0218,y:14.44}).wait(1).to({graphics:mask_graphics_86,x:-3.7602,y:14.8212}).wait(1).to({graphics:mask_graphics_87,x:-2.5584,y:15.1842}).wait(1).to({graphics:mask_graphics_88,x:-1.4389,y:15.5224}).wait(1).to({graphics:mask_graphics_89,x:-0.4225,y:15.8294}).wait(1).to({graphics:mask_graphics_90,x:0.4718,y:16.0996}).wait(1).to({graphics:mask_graphics_91,x:1.2274,y:16.3278}).wait(1).to({graphics:mask_graphics_92,x:1.8302,y:16.5099}).wait(1).to({graphics:mask_graphics_93,x:2.269,y:16.6425}).wait(1).to({graphics:mask_graphics_94,x:2.5356,y:16.723}).wait(1).to({graphics:mask_graphics_95,x:2.625,y:16.75}).wait(1));

	// Shoe_Right_In
	this.Shoe_Right_In = new lib.Shoe_Right_In();
	this.Shoe_Right_In.name = "Shoe_Right_In";

	var maskedShapeInstanceList = [this.Shoe_Right_In];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Shoe_Right_In).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-103.4,284.70000000000005,206.9);


(lib.Heart_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Heart_In
	this.Heart_In = new lib.Heart_In();
	this.Heart_In.name = "Heart_In";

	this.timeline.addTween(cjs.Tween.get(this.Heart_In).to({scaleX:0.9,scaleY:0.9,x:-0.05},11,cjs.Ease.quadIn).wait(1).to({scaleX:1,scaleY:1,x:0},11,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-82.3,150.9,164.7);


(lib.Fang_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Fang_In
	this.Fang_In = new lib.Fang_In();
	this.Fang_In.name = "Fang_In";

	this.timeline.addTween(cjs.Tween.get(this.Fang_In).wait(1).to({x:2},0).wait(1).to({x:4},0).wait(1).to({x:2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-17.4,89.30000000000001,34.9);


(lib.Ears_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.Ears_In = new lib.Ears_In();
	this.Ears_In.name = "Ears_In";

	this.timeline.addTween(cjs.Tween.get(this.Ears_In).wait(1).to({y:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.4,-189.9,608.8,380.8);


(lib.Car_Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel_Left
	this.Wheel_Left = new lib.Wheel_Left();
	this.Wheel_Left.name = "Wheel_Left";
	this.Wheel_Left.setTransform(-40.7,75,1,1,0,0,0,-65.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.Wheel_Left).wait(12));

	// Wheel_Right
	this.Wheel_Right = new lib.Wheel_Right();
	this.Wheel_Right.name = "Wheel_Right";
	this.Wheel_Right.setTransform(82.25,67.4,1,1,0,0,0,57.7,0);

	this.timeline.addTween(cjs.Tween.get(this.Wheel_Right).wait(12));

	// Car_In
	this.Car_In = new lib.Car_In();
	this.Car_In.name = "Car_In";
	this.Car_In.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.Car_In).to({y:-11.2},5,cjs.Ease.sineInOut).wait(1).to({y:-14.7},5,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-107.7,276.9,215.5);


(lib.Arrows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Arrow_1
	this.Arrow_1_Out = new lib.Arrow_1_Out();
	this.Arrow_1_Out.name = "Arrow_1_Out";
	this.Arrow_1_Out.setTransform(16,-497.1);

	this.timeline.addTween(cjs.Tween.get(this.Arrow_1_Out).wait(3));

	// Arrow_3
	this.Arrow_3_Out = new lib.Arrow_3_Out();
	this.Arrow_3_Out.name = "Arrow_3_Out";
	this.Arrow_3_Out.setTransform(214.4,333.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000080").s().p("AgHAIIAPgPIgPAPg");
	this.shape.setTransform(284.3125,309.6375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AAIgIIAAABIgPAQg");
	this.shape_1.setTransform(282.675,311.2625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.Arrow_3_Out}]}).wait(3));

	// Arrow_0
	this.Arrow_0_Out = new lib.Arrow_0_Out();
	this.Arrow_0_Out.name = "Arrow_0_Out";

	this.timeline.addTween(cjs.Tween.get(this.Arrow_0_Out).wait(3));

	// Arrow_2
	this.Arrow_2_Out = new lib.Arrow_2_Out();
	this.Arrow_2_Out.name = "Arrow_2_Out";
	this.Arrow_2_Out.setTransform(100.5,198.1);

	this.timeline.addTween(cjs.Tween.get(this.Arrow_2_Out).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.7,-630.9,793.5,1261.9);


// stage content:
(lib.RabbitHole = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//Rabbit


		this.Eye_Rabbit_Left.Button.addEventListener("click", Eye_Rabbit_Left.bind(this));

		function Eye_Rabbit_Left()
		{
			createjs.Sound.play("metal_scratch");
			this.Eye_Rabbit_Left.play();
		}


		this.Eye_Rabbit_Right.stop();


		this.Eye_Rabbit_Right.Button.addEventListener("click", Eye_Rabbit_Right.bind(this));

		function Eye_Rabbit_Right()
		{
			createjs.Sound.play("metal_scratch");
			this.Eye_Rabbit_Right.play();
		}


		this.Nose.Button.addEventListener("click", Nose.bind(this));

		function Nose()
		{
			createjs.Sound.play("squeak");
			this.Nose.play();
		}


		this.Nose.Buttoff.addEventListener("click", Nose_Buttoff.bind(this));

		function Nose_Buttoff()
		{
		}


		this.Lip_Out.Lip_In.stop();
		this.Rabbit.stop();
		this.Ears_Out.Ears_In.stop();


		this.Rabbit.Rabbit_Button.addEventListener("click", Rabbit.bind(this));
		this.Ears_Out.Ears_In.Button.addEventListener("click", Rabbit.bind(this));

		function Rabbit()
		{
			createjs.Sound.play("alarm");
			var clip = this.Lip_Out.Lip_In; if (clip.paused) {clip.play();} else {clip.gotoAndStop(0);}
			var clip = this.Rabbit; if (clip.paused) {clip.play();} else {clip.gotoAndStop(0);}
			var clip = this.Ears_Out.Ears_In; if (clip.paused) {clip.play();} else {clip.gotoAndStop(0);}
		}


		this.Rabbit.Tooth_Left_Out.Button.addEventListener("click", Tooth_Left.bind(this));

		function Tooth_Left()
		{
			createjs.Sound.play("pop");
			this.Rabbit.Tooth_Left_Out.play();
		}


		this.Rabbit.Tooth_Left_Out.Buttoff.addEventListener("click", Tooth_Left_Buttoff.bind(this));

		function Tooth_Left_Buttoff()
		{
		}


		this.Rabbit.Tooth_Right_Out.Button.addEventListener("click", Tooth_Right.bind(this));

		function Tooth_Right()
		{
			createjs.Sound.play("pop");
			this.Rabbit.Tooth_Right_Out.play();
		}


		this.Rabbit.Tooth_Right_Out.Buttoff.addEventListener("click", Tooth_Right_Buttoff.bind(this));

		function Tooth_Right_Buttoff()
		{
		}


		//Tear


		this.Tear_Out.Button.addEventListener("click", Tear.bind(this));

		function Tear()
		{
			createjs.Sound.play("tear");
			this.Tear_Out.play();
		}


		this.Tear_Out.Buttoff.addEventListener("click", Tear_Buttoff.bind(this));

		function Tear_Buttoff()
		{
		}


		//Heart


		this.Heart_Out.stop();


		this.Heart_Button.addEventListener("click", Heart_Start.bind(this));

		function Heart_Start()
		{
			createjs.Sound.play("heartbeat");
			this.Heart_Out.play();
			this.Heart_Button.visible = false;
		}


		this.Heart_Out.Heart_In.Button.addEventListener("click", Heart_Color.bind(this));

		function Heart_Color()
		{
			createjs.Sound.play("heartbeat");
			this.Heart_Out.Heart_In.play();
		}


		this.Heart_Out.Heart_In.Buttoff.addEventListener("click", Heart_Buttoff.bind(this));

		function Heart_Buttoff()
		{
		}


		//Arrows


		this.Arrows.Arrow_0_Out.Arrow_0_In.stop();
		this.Arrows.Arrow_1_Out.Arrow_1_In.stop();
		this.Arrows.Arrow_2_Out.Arrow_2_In.stop();
		this.Arrows.Arrow_3_Out.Arrow_3_In.stop();


		this.Arrows.Arrow_1_Out.Button.addEventListener("click", Arrow_1_Move.bind(this));

		function Arrow_1_Move()
		{
			createjs.Sound.play("electric_motion_2");
			this.Arrows.Arrow_1_Out.play();
		}


		this.Arrows.Arrow_1_Out.Buttoff.addEventListener("click", Arrow_1_Buttoff.bind(this));

		function Arrow_1_Buttoff()
		{
		}


		this.Arrows.Arrow_2_Out.Button.addEventListener("click", Arrow_2_Move.bind(this));

		function Arrow_2_Move()
		{
			createjs.Sound.play("electric_motion_1");
			this.Arrows.Arrow_2_Out.play();
		}


		this.Arrows.Arrow_2_Out.Buttoff.addEventListener("click", Arrow_2_Buttoff.bind(this));

		function Arrow_2_Buttoff()
		{
		}


		this.Arrows.Arrow_3_Out.Button.addEventListener("click", Arrow_3_Move.bind(this));

		function Arrow_3_Move()
		{
			createjs.Sound.play("electric_motion_2");
			this.Arrows.Arrow_3_Out.play();
		}


		this.Arrows.Arrow_3_Out.Buttoff.addEventListener("click", Arrow_3_Buttoff.bind(this));

		function Arrow_3_Buttoff()
		{
		}


		this.Arrows_Button.addEventListener("click", Arrows_Color.bind(this));

		function Arrows_Color()
		{
			createjs.Sound.play("electric_zap");
			this.Arrows.Arrow_0_Out.Arrow_0_In.play();
			this.Arrows.Arrow_1_Out.Arrow_1_In.play();
			this.Arrows.Arrow_2_Out.Arrow_2_In.play();
			this.Arrows.Arrow_3_Out.Arrow_3_In.play();
		}


		//Fire


		this.Fire.stop();


		this.Fire_Button.addEventListener("click", Fire_Start.bind(this));

		function Fire_Start()
		{
			createjs.Sound.play("lighter");
			this.Fire.play();
			this.Fire.Fire_Left.play();
			this.Fire.Fire_Right.play();
			this.Fire_Button.visible = false;
		}


		this.Fire.Fire_Left.Button.addEventListener("click", Fire_Left_Button.bind(this));

		function Fire_Left_Button()
		{
			createjs.Sound.play("lighter");
			this.Fire.Fire_Left.play();
		}


		this.Fire.Fire_Left.Buttoff.addEventListener("click", Fire_Left_Buttoff.bind(this));

		function Fire_Left_Buttoff()
		{
		}


		this.Fire.Fire_Right.Button.addEventListener("click", Fire_Right.bind(this));

		function Fire_Right()
		{
			createjs.Sound.play("lighter");
			this.Fire.Fire_Right.play();
		}


		this.Fire.Fire_Right.Buttoff.addEventListener("click", Fire_Right_Buttoff.bind(this));

		function Fire_Right_Buttoff()
		{
		}


		//Car


		this.Car_Out.stop();


		this.Car_Button.addEventListener("click", Car_Start.bind(this));

		function Car_Start()
		{
			createjs.Sound.play("lever_1");
			this.Car_Out.play();
			this.Car_Button.visible = false;
		}


		this.Car_Out.Car_In.Button.addEventListener("click", Car_Color.bind(this));
		this.Car_Out.Wheel_Left.Button.addEventListener("click", Car_Color.bind(this));
		this.Car_Out.Wheel_Right.Button.addEventListener("click", Car_Color.bind(this));

		function Car_Color()
		{
			createjs.Sound.play("camera_click");
			this.Car_Out.Car_In.play();
			this.Car_Out.Wheel_Left.play();
			this.Car_Out.Wheel_Right.play();
		}


		//Fang


		this.Fang_Out.Fang_In.Button.addEventListener("click", Fang.bind(this));

		function Fang()
		{
			createjs.Sound.play("fang");
			this.Fang_Out.play();
		}


		//Cloud


		this.Cloud_Out.Button.addEventListener("click", Cloud_Move.bind(this));

		function Cloud_Move()
		{
			createjs.Sound.play("cloud");
			this.Cloud_Out.play();
			this.Cloud_Out.Cloud_In.play();
		}


		this.Cloud_Out.Buttoff.addEventListener("click", Cloud_Buttoff.bind(this));

		function Cloud_Buttoff()
		{
		}


		//Moon


		this.Moon_Out.Button.addEventListener("click", Moon_Move.bind(this));

		function Moon_Move()
		{
			createjs.Sound.play("moon");
			this.Moon_Out.play();
			this.Moon_Out.Moon_In.play();
		}


		this.Moon_Out.Buttoff.addEventListener("click", Moon_Buttoff.bind(this));

		function Moon_Buttoff()
		{
		}


		//Stars


		this.Star_Top_Out.Button_Out.addEventListener("click", Star_Top_Out.bind(this));

		function Star_Top_Out()
		{
			createjs.Sound.play("sparkle_1");
			this.Star_Top_Out.play();
			this.Star_Top_Out.Star_Top_In.play();
		}


		this.Star_Top_Out.Button_In.addEventListener("click", Star_Top_In.bind(this));

		function Star_Top_In()
		{
			createjs.Sound.play("sparkle_2");
			this.Star_Top_Out.play();
			this.Star_Top_Out.Star_Top_In.play();
		}


		this.Star_Top_Out.Buttoff.addEventListener("click", Star_Top_Buttoff.bind(this));

		function Star_Top_Buttoff()
		{
		}


		this.Star_Bottom_Out.Button_In.addEventListener("click", Star_Bottom_In.bind(this));

		function Star_Bottom_In()
		{
			createjs.Sound.play("sparkle_1");
			this.Star_Bottom_Out.play();
			this.Star_Bottom_Out.Star_Bottom_In.play();
		}


		this.Star_Bottom_Out.Button_Out.addEventListener("click", Star_Bottom_Out.bind(this));

		function Star_Bottom_Out()
		{
			createjs.Sound.play("sparkle_2");
			this.Star_Bottom_Out.play();
			this.Star_Bottom_Out.Star_Bottom_In.play();
		}


		this.Star_Bottom_Out.Buttoff.addEventListener("click", Star_Bottom_Buttoff.bind(this));

		function Star_Bottom_Buttoff()
		{
		}


		//Hammer


		this.Hammer_Out.Button.addEventListener("click", Hammer.bind(this));

		function Hammer()
		{
			createjs.Sound.play("hammer");
			this.Hammer_Out.play();
			this.Hammer_Out.Hammer_In.play();
		}


		this.Hammer_Out.Buttoff.addEventListener("click", Hammer_Buttoff.bind(this));

		function Hammer_Buttoff()
		{
		}


		//Nail


		this.Nail_Out.Button.addEventListener("click", Nail.bind(this));

		function Nail()
		{
			createjs.Sound.play("nail");
			this.Nail_Out.play();
			this.Nail_Out.Nail_In.play();
		}


		this.Nail_Out.Buttoff.addEventListener("click", Nail_Buttoff.bind(this));

		function Nail_Buttoff()
		{
		}


		//Bone


		this.Bone_Out.Button.addEventListener("click", Bone.bind(this));

		function Bone()
		{
			createjs.Sound.play("bone");
			this.Bone_Out.play();
		}


		this.Bone_Out.Buttoff.addEventListener("click", Bone_Buttoff.bind(this));

		function Bone_Buttoff()
		{
		}


		//Flash


		this.Flash_Out.Button_In.addEventListener("click", Flash_In.bind(this));

		function Flash_In()
		{
			createjs.Sound.play("vibraphone_in");
			this.Flash_Out.play();
		}


		this.Flash_Out.Button_Out.addEventListener("click", Flash_Out.bind(this));

		function Flash_Out()
		{
			createjs.Sound.play("vibraphone_out");
			this.Flash_Out.play();
		}


		this.Flash_Out.Buttoff.addEventListener("click", Flash_Buttoff.bind(this));

		function Flash_Buttoff()
		{
		}


		//Coffin


		this.Coffin.Button.addEventListener("click", Coffin.bind(this));

		function Coffin()
		{
			createjs.Sound.play("knock");
			this.Coffin.play();
		}


		this.Coffin.Outworld.Button.addEventListener("click", Outworld.bind(this));

		function Outworld()
		{
			createjs.Sound.play("outworld");
			this.Coffin.Outworld.play();
		}


		this.Coffin.Outworld.Buttoff.addEventListener("click", Outworld_Buttoff.bind(this));

		function Outworld_Buttoff()
		{
		}


		//Man


		this.Hat.Button.addEventListener("click", Hat.bind(this));

		function Hat()
		{
			createjs.Sound.play("hat");
			this.Hat.play();
		}


		this.Eye_Man_Top.Button.addEventListener("click", Eye_Man_Top.bind(this));

		function Eye_Man_Top()
		{
			createjs.Sound.play("eye_man_top");
			this.Eye_Man_Top.play();
		}


		this.Eye_Man_Bottom.Button.addEventListener("click", Eye_Man_Bottom.bind(this));

		function Eye_Man_Bottom()
		{
			createjs.Sound.play("eye_man_bottom");
			this.Eye_Man_Bottom.play();
		}


		this.Arm_Top.Button.addEventListener("click", Arm_Top.bind(this));

		function Arm_Top()
		{
			createjs.Sound.play("arm_top");
			this.Arm_Top.play();
		}


		this.Mouth.Button.addEventListener("click", Mouth.bind(this));

		function Mouth()
		{
			createjs.Sound.play("mouth");
			this.Mouth.play();
		}


		this.Face.Button.addEventListener("click", Face.bind(this));

		function Face()
		{
			createjs.Sound.play("face");
			this.Face.play();
		}


		this.Arm_Bottom.Button.addEventListener("click", Arm_Bottom.bind(this));

		function Arm_Bottom()
		{
			createjs.Sound.play("arm_bottom");
			this.Arm_Bottom.play();
		}


		this.Body.Button.addEventListener("click", Body.bind(this));

		function Body()
		{
			createjs.Sound.play("body");
			this.Body.play();
		}


		this.Legs.Button.addEventListener("click", Legs.bind(this));

		function Legs()
		{
			createjs.Sound.play("legs");
			this.Legs.play();
		}


		this.Shoe_Left.Button.addEventListener("click", Shoe_Left.bind(this));

		function Shoe_Left()
		{
			createjs.Sound.play("shoe_left");
			this.Shoe_Left.play();
		}


		this.Shoe_Right_Out.Shoe_Right_In.Button.addEventListener("click", Shoe_Right.bind(this));

		function Shoe_Right()
		{
			createjs.Sound.play("shoe_right");
			this.Shoe_Right_Out.Shoe_Right_In.play();
		}


		//Background


		this.Background.stop();

		this.Background.Button.addEventListener("click", Background.bind(this));

		function Background()
		{
			var clip = this.Background; if (clip.paused) {createjs.Sound.play("background_1"); clip.play();} else {createjs.Sound.play("background_2"); clip.stop();}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Pupil_Rabbit_Left
	this.instance = new lib.Pupil_Rabbit_Left();
	this.instance.setTransform(175.05,448.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Pupil_Rabbit_Right
	this.instance_1 = new lib.Pupil_Rabbit_Right();
	this.instance_1.setTransform(282.65,466.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Tear
	this.Tear_Out = new lib.Tear_Out();
	this.Tear_Out.name = "Tear_Out";
	this.Tear_Out.setTransform(113.55,537.45);

	this.timeline.addTween(cjs.Tween.get(this.Tear_Out).wait(1));

	// Eye_Rabbit_Left
	this.Eye_Rabbit_Left = new lib.Eye_Rabbit_Left();
	this.Eye_Rabbit_Left.name = "Eye_Rabbit_Left";
	this.Eye_Rabbit_Left.setTransform(150.65,458.05);

	this.timeline.addTween(cjs.Tween.get(this.Eye_Rabbit_Left).wait(1));

	// Eye_Rabbit_Right
	this.Eye_Rabbit_Right = new lib.Eye_Rabbit_Right();
	this.Eye_Rabbit_Right.name = "Eye_Rabbit_Right";
	this.Eye_Rabbit_Right.setTransform(339.15,473.35);

	this.timeline.addTween(cjs.Tween.get(this.Eye_Rabbit_Right).wait(1));

	// Nose
	this.Nose = new lib.Nose();
	this.Nose.name = "Nose";
	this.Nose.setTransform(187.25,554.05);

	this.timeline.addTween(cjs.Tween.get(this.Nose).wait(1));

	// Lip
	this.Lip_Out = new lib.Lip_Out();
	this.Lip_Out.name = "Lip_Out";
	this.Lip_Out.setTransform(272.05,666.45);

	this.timeline.addTween(cjs.Tween.get(this.Lip_Out).wait(1));

	// Rabbit
	this.Rabbit = new lib.Rabbit();
	this.Rabbit.name = "Rabbit";
	this.Rabbit.setTransform(280.3,488.1);

	this.timeline.addTween(cjs.Tween.get(this.Rabbit).wait(1));

	// Ears
	this.Ears_Out = new lib.Ears_Out();
	this.Ears_Out.name = "Ears_Out";
	this.Ears_Out.setTransform(280.3,432.2);

	this.timeline.addTween(cjs.Tween.get(this.Ears_Out).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egg9AM3Ijwy0IDTm5MBGIAAAIAAZtg");
	mask.setTransform(723.475,750.975);

	// Bone
	this.Bone_Out = new lib.Bone_Out();
	this.Bone_Out.name = "Bone_Out";
	this.Bone_Out.setTransform(764.05,757.25);

	var maskedShapeInstanceList = [this.Bone_Out];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Bone_Out).wait(1));

	// Coffin
	this.Coffin = new lib.Coffin();
	this.Coffin.name = "Coffin";
	this.Coffin.setTransform(758.2,750.95);

	this.timeline.addTween(cjs.Tween.get(this.Coffin).wait(1));

	// Hammer
	this.Hammer_Out = new lib.Hammer_Out();
	this.Hammer_Out.name = "Hammer_Out";
	this.Hammer_Out.setTransform(700.25,250.4);

	this.timeline.addTween(cjs.Tween.get(this.Hammer_Out).wait(1));

	// Nail
	this.Nail_Out = new lib.Nail_Out();
	this.Nail_Out.name = "Nail_Out";
	this.Nail_Out.setTransform(916.45,557.95);

	this.timeline.addTween(cjs.Tween.get(this.Nail_Out).wait(1));

	// Pupil_Man_Top
	this.instance_2 = new lib.Pupil_Man_Top();
	this.instance_2.setTransform(872.55,398.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Pupil_Man_Bottom
	this.instance_3 = new lib.Pupil_Man_Bottom();
	this.instance_3.setTransform(881.05,487.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Eye_Man_Top
	this.Eye_Man_Top = new lib.Eye_Man_Top();
	this.Eye_Man_Top.name = "Eye_Man_Top";
	this.Eye_Man_Top.setTransform(868.1,369.95);

	this.timeline.addTween(cjs.Tween.get(this.Eye_Man_Top).wait(1));

	// Eye_Man_Bottom
	this.Eye_Man_Bottom = new lib.Eye_Man_Bottom();
	this.Eye_Man_Bottom.name = "Eye_Man_Bottom";
	this.Eye_Man_Bottom.setTransform(872.6,472.4);

	this.timeline.addTween(cjs.Tween.get(this.Eye_Man_Bottom).wait(1));

	// Arm_Top
	this.Arm_Top = new lib.Arm_Top();
	this.Arm_Top.name = "Arm_Top";
	this.Arm_Top.setTransform(649.2,275.3);

	this.timeline.addTween(cjs.Tween.get(this.Arm_Top).wait(1));

	// Mouth
	this.Mouth = new lib.Mouth();
	this.Mouth.name = "Mouth";
	this.Mouth.setTransform(806.7,451.2);

	this.timeline.addTween(cjs.Tween.get(this.Mouth).wait(1));

	// Face
	this.Face = new lib.Face();
	this.Face.name = "Face";
	this.Face.setTransform(828.65,422.05);

	this.timeline.addTween(cjs.Tween.get(this.Face).wait(1));

	// Arm_Bottom
	this.Arm_Bottom = new lib.Arm_Bottom();
	this.Arm_Bottom.name = "Arm_Bottom";
	this.Arm_Bottom.setTransform(882.15,591.25);

	this.timeline.addTween(cjs.Tween.get(this.Arm_Bottom).wait(1));

	// Hat
	this.Hat = new lib.Hat();
	this.Hat.name = "Hat";
	this.Hat.setTransform(926.2,336.6);

	this.timeline.addTween(cjs.Tween.get(this.Hat).wait(1));

	// Body
	this.Body = new lib.Body();
	this.Body.name = "Body";
	this.Body.setTransform(753.1,445.75);

	this.timeline.addTween(cjs.Tween.get(this.Body).wait(1));

	// Shoe_Left
	this.Shoe_Left = new lib.Shoe_Left();
	this.Shoe_Left.name = "Shoe_Left";
	this.Shoe_Left.setTransform(696.85,967.55);

	this.timeline.addTween(cjs.Tween.get(this.Shoe_Left).wait(1));

	// Shoe_Right
	this.Shoe_Right_Out = new lib.Shoe_Right_Out();
	this.Shoe_Right_Out.name = "Shoe_Right_Out";
	this.Shoe_Right_Out.setTransform(912.65,951.55);

	this.timeline.addTween(cjs.Tween.get(this.Shoe_Right_Out).wait(1));

	// Legs
	this.Legs = new lib.Legs();
	this.Legs.name = "Legs";
	this.Legs.setTransform(719.45,737.4);

	this.timeline.addTween(cjs.Tween.get(this.Legs).wait(1));

	// Heart_Button
	this.Heart_Button = new lib.Heart_Button();
	this.Heart_Button.name = "Heart_Button";
	this.Heart_Button.setTransform(61.1,288.4);

	this.timeline.addTween(cjs.Tween.get(this.Heart_Button).wait(1));

	// Heart
	this.Heart_Out = new lib.Heart_Out();
	this.Heart_Out.name = "Heart_Out";
	this.Heart_Out.setTransform(61.1,288.4);

	this.timeline.addTween(cjs.Tween.get(this.Heart_Out).wait(1));

	// Fire_Button
	this.Fire_Button = new lib.Fire_Button();
	this.Fire_Button.name = "Fire_Button";
	this.Fire_Button.setTransform(121.15,906.7);

	this.timeline.addTween(cjs.Tween.get(this.Fire_Button).wait(1));

	// Fire
	this.Fire = new lib.Fire();
	this.Fire.name = "Fire";
	this.Fire.setTransform(121.15,906.7);

	this.timeline.addTween(cjs.Tween.get(this.Fire).wait(1));

	// Arrows_Button
	this.Arrows_Button = new lib.Arrow_0_Button();
	this.Arrows_Button.name = "Arrows_Button";
	this.Arrows_Button.setTransform(207.8,594.8);

	this.timeline.addTween(cjs.Tween.get(this.Arrows_Button).wait(1));

	// Arrows
	this.Arrows = new lib.Arrows();
	this.Arrows.name = "Arrows";
	this.Arrows.setTransform(207.8,594.8);

	this.timeline.addTween(cjs.Tween.get(this.Arrows).wait(1));

	// Car_Button
	this.Car_Button = new lib.Car_Button();
	this.Car_Button.name = "Car_Button";
	this.Car_Button.setTransform(428.25,165.05);

	this.timeline.addTween(cjs.Tween.get(this.Car_Button).wait(1));

	// Car
	this.Car_Out = new lib.Car_Out();
	this.Car_Out.name = "Car_Out";
	this.Car_Out.setTransform(428.25,165.05);

	this.timeline.addTween(cjs.Tween.get(this.Car_Out).wait(1));

	// Fang
	this.Fang_Out = new lib.Fang_Out();
	this.Fang_Out.name = "Fang_Out";
	this.Fang_Out.setTransform(442.5,319.2);

	this.timeline.addTween(cjs.Tween.get(this.Fang_Out).wait(1));

	// Star_Bottom
	this.Star_Bottom_Out = new lib.Star_Bottom_Out();
	this.Star_Bottom_Out.name = "Star_Bottom_Out";
	this.Star_Bottom_Out.setTransform(616.2,469.7);

	this.timeline.addTween(cjs.Tween.get(this.Star_Bottom_Out).wait(1));

	// Star_Top
	this.Star_Top_Out = new lib.Star_Top_Out();
	this.Star_Top_Out.name = "Star_Top_Out";
	this.Star_Top_Out.setTransform(663.8,41);

	this.timeline.addTween(cjs.Tween.get(this.Star_Top_Out).wait(1));

	// Moon
	this.Moon_Out = new lib.Moon_Out();
	this.Moon_Out.name = "Moon_Out";
	this.Moon_Out.setTransform(990.6,124.7);

	this.timeline.addTween(cjs.Tween.get(this.Moon_Out).wait(1));

	// Cloud
	this.Cloud_Out = new lib.Cloud_Out();
	this.Cloud_Out.name = "Cloud_Out";
	this.Cloud_Out.setTransform(989.15,42.6);

	this.timeline.addTween(cjs.Tween.get(this.Cloud_Out).wait(1));

	// Flash
	this.Flash_Out = new lib.Flash_Out();
	this.Flash_Out.name = "Flash_Out";
	this.Flash_Out.setTransform(903.25,857.15);

	this.timeline.addTween(cjs.Tween.get(this.Flash_Out).wait(1));

	// Background
	this.Background = new lib.Background();
	this.Background.name = "Background";
	this.Background.setTransform(540,540);

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(351.1,500.1,894.4999999999999,725.6999999999999);
// library properties:
lib.properties = {
	id: 'F4FE7D86D5AE4550A5FA8BF07280B4FF',
	width: 1080,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/alarm.mp3?1633333163406", id:"alarm"},
		{src:"sounds/cloud.mp3?1633333163406", id:"cloud"},
		{src:"sounds/arm_bottom.mp3?1633333163406", id:"arm_bottom"},
		{src:"sounds/face.mp3?1633333163406", id:"face"},
		{src:"sounds/eye_man_top.mp3?1633333163406", id:"eye_man_top"},
		{src:"sounds/eye_man_bottom.mp3?1633333163406", id:"eye_man_bottom"},
		{src:"sounds/mouth.mp3?1633333163406", id:"mouth"},
		{src:"sounds/body.mp3?1633333163406", id:"body"},
		{src:"sounds/shoe_left.mp3?1633333163406", id:"shoe_left"},
		{src:"sounds/hat.mp3?1633333163406", id:"hat"},
		{src:"sounds/legs.mp3?1633333163406", id:"legs"},
		{src:"sounds/arm_top.mp3?1633333163406", id:"arm_top"},
		{src:"sounds/shoe_right.mp3?1633333163406", id:"shoe_right"},
		{src:"sounds/camera_click.mp3?1633333163406", id:"camera_click"},
		{src:"sounds/electric_motion_1.mp3?1633333163406", id:"electric_motion_1"},
		{src:"sounds/electric_motion_2.mp3?1633333163406", id:"electric_motion_2"},
		{src:"sounds/electric_zap.mp3?1633333163406", id:"electric_zap"},
		{src:"sounds/bone.mp3?1633333163406", id:"bone"},
		{src:"sounds/heartbeat.mp3?1633333163406", id:"heartbeat"},
		{src:"sounds/knock.mp3?1633333163406", id:"knock"},
		{src:"sounds/lever_1.mp3?1633333163406", id:"lever_1"},
		{src:"sounds/lighter.mp3?1633333163406", id:"lighter"},
		{src:"sounds/tear.mp3?1633333163406", id:"tear"},
		{src:"sounds/metal_scratch.mp3?1633333163406", id:"metal_scratch"},
		{src:"sounds/fang.mp3?1633333163406", id:"fang"},
		{src:"sounds/moon.mp3?1633333163406", id:"moon"},
		{src:"sounds/outworld.mp3?1633333163406", id:"outworld"},
		{src:"sounds/pop.mp3?1633333163406", id:"pop"},
		{src:"sounds/background_2.mp3?1633333163406", id:"background_2"},
		{src:"sounds/background_1.mp3?1633333163406", id:"background_1"},
		{src:"sounds/sparkle_1.mp3?1633333163406", id:"sparkle_1"},
		{src:"sounds/sparkle_2.mp3?1633333163406", id:"sparkle_2"},
		{src:"sounds/squeak.mp3?1633333163406", id:"squeak"},
		{src:"sounds/hammer.mp3?1633333163406", id:"hammer"},
		{src:"sounds/nail.mp3?1633333163406", id:"nail"},
		{src:"sounds/vibraphone_in.mp3?1633333163406", id:"vibraphone_in"},
		{src:"sounds/vibraphone_out.mp3?1633333163406", id:"vibraphone_out"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F4FE7D86D5AE4550A5FA8BF07280B4FF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
	var lastW, lastH, lastS=1;
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
	function resizeCanvas() {
		var w = lib.properties.width, h = lib.properties.height;
		var iw = window.innerWidth, ih=window.innerHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}
		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {
			container.style.width = w * sRatio + 'px';
			container.style.height = h * sRatio + 'px';
		});
		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;
		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
