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


(lib.Car_3_Color = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(35).call(this.frame_105).wait(35).call(this.frame_140).wait(35).call(this.frame_175).wait(36));

	// Color_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008D00").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAg");
	this.shape.setTransform(-23.225,23.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008E05").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_1.setTransform(-23.225,23.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008F0A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_2.setTransform(-23.225,23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00900F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_3.setTransform(-23.225,23.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009114").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_4.setTransform(-23.225,23.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009219").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_5.setTransform(-23.225,23.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00931E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_6.setTransform(-23.225,23.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009423").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_7.setTransform(-23.225,23.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009528").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_8.setTransform(-23.225,23.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00962E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_9.setTransform(-23.225,23.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009733").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_10.setTransform(-23.225,23.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009838").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_11.setTransform(-23.225,23.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00993D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_12.setTransform(-23.225,23.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009A42").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_13.setTransform(-23.225,23.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009B47").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_14.setTransform(-23.225,23.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009C4C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_15.setTransform(-23.225,23.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009D51").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_16.setTransform(-23.225,23.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009E56").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_17.setTransform(-23.225,23.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A05B").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_18.setTransform(-23.225,23.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A160").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_19.setTransform(-23.225,23.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A265").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_20.setTransform(-23.225,23.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A36A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_21.setTransform(-23.225,23.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A46F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_22.setTransform(-23.225,23.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A574").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_23.setTransform(-23.225,23.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A679").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_24.setTransform(-23.225,23.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A77E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_25.setTransform(-23.225,23.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A883").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_26.setTransform(-23.225,23.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A989").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_27.setTransform(-23.225,23.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AA8E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_28.setTransform(-23.225,23.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AB93").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_29.setTransform(-23.225,23.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AC98").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_30.setTransform(-23.225,23.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00AD9D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_31.setTransform(-23.225,23.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00AEA2").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_32.setTransform(-23.225,23.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AFA7").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_33.setTransform(-23.225,23.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00B0AC").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_34.setTransform(-23.225,23.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00B1B1").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAg");
	this.shape_35.setTransform(-23.225,23.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00ACB3").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_36.setTransform(-23.225,23.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A7B5").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_37.setTransform(-23.225,23.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A2B8").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_38.setTransform(-23.225,23.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009DBA").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_39.setTransform(-23.225,23.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0098BC").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_40.setTransform(-23.225,23.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0093BE").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_41.setTransform(-23.225,23.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#008EC1").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_42.setTransform(-23.225,23.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0089C3").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_43.setTransform(-23.225,23.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0083C5").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_44.setTransform(-23.225,23.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#007EC7").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_45.setTransform(-23.225,23.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0079CA").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_46.setTransform(-23.225,23.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0074CC").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_47.setTransform(-23.225,23.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#006FCE").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_48.setTransform(-23.225,23.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006AD0").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_49.setTransform(-23.225,23.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0065D2").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_50.setTransform(-23.225,23.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0060D5").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_51.setTransform(-23.225,23.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#005BD7").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_52.setTransform(-23.225,23.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0056D9").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_53.setTransform(-23.225,23.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0051DB").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_54.setTransform(-23.225,23.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#004CDE").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_55.setTransform(-23.225,23.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0047E0").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_56.setTransform(-23.225,23.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0042E2").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_57.setTransform(-23.225,23.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#003DE4").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_58.setTransform(-23.225,23.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0038E6").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_59.setTransform(-23.225,23.25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0033E9").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_60.setTransform(-23.225,23.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#002EEB").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_61.setTransform(-23.225,23.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0028ED").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_62.setTransform(-23.225,23.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0023EF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_63.setTransform(-23.225,23.25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#001EF2").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_64.setTransform(-23.225,23.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0019F4").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_65.setTransform(-23.225,23.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0014F6").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_66.setTransform(-23.225,23.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000FF8").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_67.setTransform(-23.225,23.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000AFB").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_68.setTransform(-23.225,23.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0005FD").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_69.setTransform(-23.225,23.25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0000FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAg");
	this.shape_70.setTransform(-23.225,23.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0700FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_71.setTransform(-23.225,23.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0F00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_72.setTransform(-23.225,23.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1600FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_73.setTransform(-23.225,23.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1D00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_74.setTransform(-23.225,23.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2400FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_75.setTransform(-23.225,23.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2C00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_76.setTransform(-23.225,23.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3300FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_77.setTransform(-23.225,23.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3A00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_78.setTransform(-23.225,23.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4200FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_79.setTransform(-23.225,23.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4900FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_80.setTransform(-23.225,23.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5000FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_81.setTransform(-23.225,23.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5700FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_82.setTransform(-23.225,23.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5F00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_83.setTransform(-23.225,23.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6600FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_84.setTransform(-23.225,23.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6D00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_85.setTransform(-23.225,23.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7500FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_86.setTransform(-23.225,23.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7C00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_87.setTransform(-23.225,23.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8300FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_88.setTransform(-23.225,23.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8A00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_89.setTransform(-23.225,23.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9200FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_90.setTransform(-23.225,23.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9900FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_91.setTransform(-23.225,23.25);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#A000FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_92.setTransform(-23.225,23.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A800FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_93.setTransform(-23.225,23.25);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AF00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_94.setTransform(-23.225,23.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B600FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_95.setTransform(-23.225,23.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BD00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_96.setTransform(-23.225,23.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C500FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_97.setTransform(-23.225,23.25);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CC00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_98.setTransform(-23.225,23.25);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D300FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_99.setTransform(-23.225,23.25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#DB00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_100.setTransform(-23.225,23.25);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E200FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_101.setTransform(-23.225,23.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E900FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_102.setTransform(-23.225,23.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F000FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_103.setTransform(-23.225,23.25);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F800FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_104.setTransform(-23.225,23.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF00FF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAg");
	this.shape_105.setTransform(-23.225,23.25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FD00F8").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_106.setTransform(-23.225,23.25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FB00F0").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_107.setTransform(-23.225,23.25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F900E9").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_108.setTransform(-23.225,23.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F700E2").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_109.setTransform(-23.225,23.25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F600DB").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_110.setTransform(-23.225,23.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F400D3").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_111.setTransform(-23.225,23.25);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F200CC").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_112.setTransform(-23.225,23.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F000C5").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_113.setTransform(-23.225,23.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EE00BD").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_114.setTransform(-23.225,23.25);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EC00B6").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_115.setTransform(-23.225,23.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EA00AF").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_116.setTransform(-23.225,23.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E800A8").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_117.setTransform(-23.225,23.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E600A0").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_118.setTransform(-23.225,23.25);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E50099").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_119.setTransform(-23.225,23.25);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E30092").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_120.setTransform(-23.225,23.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E1008A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_121.setTransform(-23.225,23.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DF0083").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_122.setTransform(-23.225,23.25);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#DD007C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_123.setTransform(-23.225,23.25);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#DB0075").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_124.setTransform(-23.225,23.25);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9006D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_125.setTransform(-23.225,23.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D70066").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_126.setTransform(-23.225,23.25);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D6005F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_127.setTransform(-23.225,23.25);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D40057").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_128.setTransform(-23.225,23.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D20050").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_129.setTransform(-23.225,23.25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D00049").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_130.setTransform(-23.225,23.25);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CE0042").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_131.setTransform(-23.225,23.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CC003A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_132.setTransform(-23.225,23.25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CA0033").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_133.setTransform(-23.225,23.25);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C8002C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_134.setTransform(-23.225,23.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C60024").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_135.setTransform(-23.225,23.25);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C5001D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_136.setTransform(-23.225,23.25);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C30016").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_137.setTransform(-23.225,23.25);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C1000F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_138.setTransform(-23.225,23.25);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BF0007").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_139.setTransform(-23.225,23.25);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BD0000").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAg");
	this.shape_140.setTransform(-23.225,23.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BF0502").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_141.setTransform(-23.225,23.25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C10B04").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_142.setTransform(-23.225,23.25);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C31006").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_143.setTransform(-23.225,23.25);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C51608").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_144.setTransform(-23.225,23.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C61B09").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_145.setTransform(-23.225,23.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C8210B").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_146.setTransform(-23.225,23.25);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CA260D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_147.setTransform(-23.225,23.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CC2C0F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_148.setTransform(-23.225,23.25);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CE3111").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_149.setTransform(-23.225,23.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D03713").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_150.setTransform(-23.225,23.25);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D23C15").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_151.setTransform(-23.225,23.25);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D44217").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_152.setTransform(-23.225,23.25);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D64719").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_153.setTransform(-23.225,23.25);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D74D1A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_154.setTransform(-23.225,23.25);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D9521C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_155.setTransform(-23.225,23.25);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DB581E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_156.setTransform(-23.225,23.25);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DD5D20").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_157.setTransform(-23.225,23.25);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DF6322").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_158.setTransform(-23.225,23.25);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E16824").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_159.setTransform(-23.225,23.25);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E36E26").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_160.setTransform(-23.225,23.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E57328").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_161.setTransform(-23.225,23.25);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E67929").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_162.setTransform(-23.225,23.25);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E87E2B").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_163.setTransform(-23.225,23.25);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EA842D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_164.setTransform(-23.225,23.25);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EC892F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_165.setTransform(-23.225,23.25);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EE8F31").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_166.setTransform(-23.225,23.25);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F09433").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_167.setTransform(-23.225,23.25);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F29A35").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_168.setTransform(-23.225,23.25);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F49F37").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_169.setTransform(-23.225,23.25);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F6A539").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_170.setTransform(-23.225,23.25);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F7AA3A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_171.setTransform(-23.225,23.25);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F9B03C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_172.setTransform(-23.225,23.25);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FBB53E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_173.setTransform(-23.225,23.25);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FDBB40").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_174.setTransform(-23.225,23.25);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFC042").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAg");
	this.shape_175.setTransform(-23.225,23.25);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F8BF40").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_176.setTransform(-23.225,23.25);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F0BD3E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_177.setTransform(-23.225,23.25);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E9BC3C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_178.setTransform(-23.225,23.25);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E2BA3A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_179.setTransform(-23.225,23.25);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#DBB939").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_180.setTransform(-23.225,23.25);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D3B737").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_181.setTransform(-23.225,23.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CCB635").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_182.setTransform(-23.225,23.25);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C5B433").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_183.setTransform(-23.225,23.25);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#BDB331").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_184.setTransform(-23.225,23.25);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B6B12F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_185.setTransform(-23.225,23.25);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#AFB02D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_186.setTransform(-23.225,23.25);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A8AF2B").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_187.setTransform(-23.225,23.25);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A0AD29").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_188.setTransform(-23.225,23.25);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#99AC28").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_189.setTransform(-23.225,23.25);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#92AA26").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_190.setTransform(-23.225,23.25);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#8AA924").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_191.setTransform(-23.225,23.25);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#83A722").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_192.setTransform(-23.225,23.25);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#7CA620").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_193.setTransform(-23.225,23.25);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#75A41E").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_194.setTransform(-23.225,23.25);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6DA31C").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_195.setTransform(-23.225,23.25);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#66A11A").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_196.setTransform(-23.225,23.25);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5FA019").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_197.setTransform(-23.225,23.25);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#579E17").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_198.setTransform(-23.225,23.25);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#509D15").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_199.setTransform(-23.225,23.25);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#499C13").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_200.setTransform(-23.225,23.25);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#429A11").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_201.setTransform(-23.225,23.25);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#3A990F").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_202.setTransform(-23.225,23.25);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#33970D").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_203.setTransform(-23.225,23.25);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#2C960B").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_204.setTransform(-23.225,23.25);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#249409").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_205.setTransform(-23.225,23.25);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#1D9308").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_206.setTransform(-23.225,23.25);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#169106").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_207.setTransform(-23.225,23.25);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0F9004").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_208.setTransform(-23.225,23.25);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#078E02").s().p("A7XOeIMd87IWbAAIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAg");
	this.shape_209.setTransform(-23.225,23.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Color_2
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_210.setTransform(39.85,-37.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00FF07").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_211.setTransform(39.85,-37.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00FF0F").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_212.setTransform(39.85,-37.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00FF16").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_213.setTransform(39.85,-37.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00FF1D").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_214.setTransform(39.85,-37.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00FF24").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_215.setTransform(39.85,-37.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00FF2C").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_216.setTransform(39.85,-37.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00FF33").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_217.setTransform(39.85,-37.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00FF3A").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_218.setTransform(39.85,-37.75);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00FF42").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_219.setTransform(39.85,-37.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00FF49").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_220.setTransform(39.85,-37.75);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00FF50").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_221.setTransform(39.85,-37.75);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00FF57").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_222.setTransform(39.85,-37.75);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00FF5F").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_223.setTransform(39.85,-37.75);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00FF66").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_224.setTransform(39.85,-37.75);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00FF6D").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_225.setTransform(39.85,-37.75);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00FF75").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_226.setTransform(39.85,-37.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00FF7C").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_227.setTransform(39.85,-37.75);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00FF83").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_228.setTransform(39.85,-37.75);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00FF8A").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_229.setTransform(39.85,-37.75);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00FF92").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_230.setTransform(39.85,-37.75);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00FF99").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_231.setTransform(39.85,-37.75);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00FFA0").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_232.setTransform(39.85,-37.75);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00FFA8").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_233.setTransform(39.85,-37.75);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00FFAF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_234.setTransform(39.85,-37.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00FFB6").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_235.setTransform(39.85,-37.75);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00FFBD").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_236.setTransform(39.85,-37.75);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00FFC5").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_237.setTransform(39.85,-37.75);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00FFCC").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_238.setTransform(39.85,-37.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00FFD3").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_239.setTransform(39.85,-37.75);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00FFDB").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_240.setTransform(39.85,-37.75);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00FFE2").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_241.setTransform(39.85,-37.75);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00FFE9").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_242.setTransform(39.85,-37.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00FFF0").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_243.setTransform(39.85,-37.75);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00FFF8").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_244.setTransform(39.85,-37.75);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00FFFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_245.setTransform(39.85,-37.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00FCFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_246.setTransform(39.85,-37.75);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00F9FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_247.setTransform(39.85,-37.75);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00F6FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_248.setTransform(39.85,-37.75);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00F3FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_249.setTransform(39.85,-37.75);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00F0FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_250.setTransform(39.85,-37.75);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00EEFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_251.setTransform(39.85,-37.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00EBFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_252.setTransform(39.85,-37.75);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00E8FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_253.setTransform(39.85,-37.75);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00E5FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_254.setTransform(39.85,-37.75);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00E2FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_255.setTransform(39.85,-37.75);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00DFFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_256.setTransform(39.85,-37.75);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00DCFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_257.setTransform(39.85,-37.75);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00D9FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_258.setTransform(39.85,-37.75);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00D6FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_259.setTransform(39.85,-37.75);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00D3FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_260.setTransform(39.85,-37.75);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00D0FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_261.setTransform(39.85,-37.75);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00CDFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_262.setTransform(39.85,-37.75);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00CBFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_263.setTransform(39.85,-37.75);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00C8FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_264.setTransform(39.85,-37.75);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00C5FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_265.setTransform(39.85,-37.75);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00C2FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_266.setTransform(39.85,-37.75);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00BFFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_267.setTransform(39.85,-37.75);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00BCFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_268.setTransform(39.85,-37.75);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00B9FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_269.setTransform(39.85,-37.75);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00B6FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_270.setTransform(39.85,-37.75);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00B3FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_271.setTransform(39.85,-37.75);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00B0FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_272.setTransform(39.85,-37.75);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00ADFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_273.setTransform(39.85,-37.75);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00AAFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_274.setTransform(39.85,-37.75);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00A8FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_275.setTransform(39.85,-37.75);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00A5FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_276.setTransform(39.85,-37.75);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00A2FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_277.setTransform(39.85,-37.75);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#009FFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_278.setTransform(39.85,-37.75);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#009CFF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_279.setTransform(39.85,-37.75);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#0099FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_280.setTransform(39.85,-37.75);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#0799FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_281.setTransform(39.85,-37.75);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#0F99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_282.setTransform(39.85,-37.75);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#1699FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_283.setTransform(39.85,-37.75);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#1D99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_284.setTransform(39.85,-37.75);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#2499FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_285.setTransform(39.85,-37.75);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#2C99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_286.setTransform(39.85,-37.75);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3399FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_287.setTransform(39.85,-37.75);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#3A99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_288.setTransform(39.85,-37.75);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4299FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_289.setTransform(39.85,-37.75);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4999FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_290.setTransform(39.85,-37.75);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#5099FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_291.setTransform(39.85,-37.75);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#5799FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_292.setTransform(39.85,-37.75);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#5F99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_293.setTransform(39.85,-37.75);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6699FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_294.setTransform(39.85,-37.75);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#6D99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_295.setTransform(39.85,-37.75);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#7599FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_296.setTransform(39.85,-37.75);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#7C99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_297.setTransform(39.85,-37.75);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#8399FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_298.setTransform(39.85,-37.75);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#8A99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_299.setTransform(39.85,-37.75);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#9299FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_300.setTransform(39.85,-37.75);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#9999FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_301.setTransform(39.85,-37.75);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#A099FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_302.setTransform(39.85,-37.75);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#A899FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_303.setTransform(39.85,-37.75);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#AF99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_304.setTransform(39.85,-37.75);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#B699FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_305.setTransform(39.85,-37.75);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#BD99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_306.setTransform(39.85,-37.75);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C599FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_307.setTransform(39.85,-37.75);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CC99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_308.setTransform(39.85,-37.75);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#D399FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_309.setTransform(39.85,-37.75);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#DB99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_310.setTransform(39.85,-37.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#E299FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_311.setTransform(39.85,-37.75);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#E999FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_312.setTransform(39.85,-37.75);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F099FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_313.setTransform(39.85,-37.75);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#F899FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_314.setTransform(39.85,-37.75);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FF99FF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_315.setTransform(39.85,-37.75);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FF95F8").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_316.setTransform(39.85,-37.75);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF90F0").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_317.setTransform(39.85,-37.75);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FF8CE9").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_318.setTransform(39.85,-37.75);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FF88E2").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_319.setTransform(39.85,-37.75);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF83DB").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_320.setTransform(39.85,-37.75);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FF7FD3").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_321.setTransform(39.85,-37.75);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FF7ACC").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_322.setTransform(39.85,-37.75);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FF76C5").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_323.setTransform(39.85,-37.75);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FF72BD").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_324.setTransform(39.85,-37.75);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FF6DB6").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_325.setTransform(39.85,-37.75);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FF69AF").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_326.setTransform(39.85,-37.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FF65A8").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_327.setTransform(39.85,-37.75);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FF60A0").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_328.setTransform(39.85,-37.75);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FF5C99").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_329.setTransform(39.85,-37.75);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FF5792").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_330.setTransform(39.85,-37.75);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FF538A").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_331.setTransform(39.85,-37.75);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FF4F83").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_332.setTransform(39.85,-37.75);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF4A7C").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_333.setTransform(39.85,-37.75);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF4675").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_334.setTransform(39.85,-37.75);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FF426D").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_335.setTransform(39.85,-37.75);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FF3D66").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_336.setTransform(39.85,-37.75);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FF395F").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_337.setTransform(39.85,-37.75);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FF3457").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_338.setTransform(39.85,-37.75);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF3050").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_339.setTransform(39.85,-37.75);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FF2C49").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_340.setTransform(39.85,-37.75);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FF2742").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_341.setTransform(39.85,-37.75);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FF233A").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_342.setTransform(39.85,-37.75);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF1F33").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_343.setTransform(39.85,-37.75);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF1A2C").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_344.setTransform(39.85,-37.75);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FF1624").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_345.setTransform(39.85,-37.75);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FF111D").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_346.setTransform(39.85,-37.75);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FF0D16").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_347.setTransform(39.85,-37.75);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FF090F").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_348.setTransform(39.85,-37.75);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FF0407").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_349.setTransform(39.85,-37.75);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FF0000").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_350.setTransform(39.85,-37.75);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FF0700").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_351.setTransform(39.85,-37.75);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FF0F00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_352.setTransform(39.85,-37.75);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FF1600").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_353.setTransform(39.85,-37.75);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF1D00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_354.setTransform(39.85,-37.75);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF2400").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_355.setTransform(39.85,-37.75);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF2C00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_356.setTransform(39.85,-37.75);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF3300").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_357.setTransform(39.85,-37.75);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF3A00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_358.setTransform(39.85,-37.75);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF4200").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_359.setTransform(39.85,-37.75);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF4900").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_360.setTransform(39.85,-37.75);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF5000").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_361.setTransform(39.85,-37.75);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF5700").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_362.setTransform(39.85,-37.75);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF5F00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_363.setTransform(39.85,-37.75);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF6600").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_364.setTransform(39.85,-37.75);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF6D00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_365.setTransform(39.85,-37.75);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF7500").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_366.setTransform(39.85,-37.75);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF7C00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_367.setTransform(39.85,-37.75);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF8300").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_368.setTransform(39.85,-37.75);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF8A00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_369.setTransform(39.85,-37.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF9200").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_370.setTransform(39.85,-37.75);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF9900").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_371.setTransform(39.85,-37.75);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFA000").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_372.setTransform(39.85,-37.75);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFA800").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_373.setTransform(39.85,-37.75);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFAF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_374.setTransform(39.85,-37.75);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFB600").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_375.setTransform(39.85,-37.75);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFBD00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_376.setTransform(39.85,-37.75);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFC500").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_377.setTransform(39.85,-37.75);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFCC00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_378.setTransform(39.85,-37.75);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFD300").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_379.setTransform(39.85,-37.75);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFDB00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_380.setTransform(39.85,-37.75);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFE200").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_381.setTransform(39.85,-37.75);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFE900").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_382.setTransform(39.85,-37.75);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFF000").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_383.setTransform(39.85,-37.75);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFF800").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_384.setTransform(39.85,-37.75);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_385.setTransform(39.85,-37.75);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#F8FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_386.setTransform(39.85,-37.75);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#F0FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_387.setTransform(39.85,-37.75);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E9FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_388.setTransform(39.85,-37.75);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#E2FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_389.setTransform(39.85,-37.75);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#DBFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_390.setTransform(39.85,-37.75);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#D3FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_391.setTransform(39.85,-37.75);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#CCFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_392.setTransform(39.85,-37.75);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#C5FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_393.setTransform(39.85,-37.75);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#BDFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_394.setTransform(39.85,-37.75);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#B6FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_395.setTransform(39.85,-37.75);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#AFFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_396.setTransform(39.85,-37.75);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#A8FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_397.setTransform(39.85,-37.75);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#A0FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_398.setTransform(39.85,-37.75);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#99FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_399.setTransform(39.85,-37.75);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#92FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_400.setTransform(39.85,-37.75);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#8AFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_401.setTransform(39.85,-37.75);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#83FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_402.setTransform(39.85,-37.75);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#7CFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_403.setTransform(39.85,-37.75);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#75FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_404.setTransform(39.85,-37.75);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#6DFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_405.setTransform(39.85,-37.75);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#66FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_406.setTransform(39.85,-37.75);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#5FFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_407.setTransform(39.85,-37.75);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#57FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_408.setTransform(39.85,-37.75);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#50FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_409.setTransform(39.85,-37.75);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#49FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_410.setTransform(39.85,-37.75);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#42FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_411.setTransform(39.85,-37.75);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#3AFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_412.setTransform(39.85,-37.75);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#33FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_413.setTransform(39.85,-37.75);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#2CFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_414.setTransform(39.85,-37.75);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#24FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_415.setTransform(39.85,-37.75);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#1DFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_416.setTransform(39.85,-37.75);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#16FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_417.setTransform(39.85,-37.75);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#0FFF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_418.setTransform(39.85,-37.75);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#07FF00").s().p("AJNLSImJjqIHRnQIOcEjInQHSgAwwHoIHRnQIE3g7IC9KFgA4xk7IHRnRIWaAAInPHRIoWBYg");
	this.shape_419.setTransform(39.85,-37.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210}]}).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_210}]},1).wait(1));

	// Color_3
	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#005700").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_420.setTransform(65.5,0);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#005803").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_421.setTransform(65.5,0);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#005806").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_422.setTransform(65.5,0);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#005909").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_423.setTransform(65.5,0);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#005A0C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_424.setTransform(65.5,0);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#005A10").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_425.setTransform(65.5,0);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#005B13").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_426.setTransform(65.5,0);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#005B16").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_427.setTransform(65.5,0);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#005C19").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_428.setTransform(65.5,0);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#005D1C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_429.setTransform(65.5,0);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#005D1F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_430.setTransform(65.5,0);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#005E22").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_431.setTransform(65.5,0);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#005F25").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_432.setTransform(65.5,0);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#005F28").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_433.setTransform(65.5,0);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#00602C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_434.setTransform(65.5,0);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#00602F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_435.setTransform(65.5,0);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#006132").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_436.setTransform(65.5,0);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#006235").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_437.setTransform(65.5,0);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#006238").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_438.setTransform(65.5,0);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#00633B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_439.setTransform(65.5,0);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#00643E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_440.setTransform(65.5,0);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#006441").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_441.setTransform(65.5,0);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#006545").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_442.setTransform(65.5,0);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#006548").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_443.setTransform(65.5,0);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#00664B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_444.setTransform(65.5,0);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#00674E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_445.setTransform(65.5,0);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#006751").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_446.setTransform(65.5,0);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#006854").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_447.setTransform(65.5,0);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#006957").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_448.setTransform(65.5,0);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#00695A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_449.setTransform(65.5,0);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#006A5D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_450.setTransform(65.5,0);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#006A61").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_451.setTransform(65.5,0);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#006B64").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_452.setTransform(65.5,0);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#006C67").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_453.setTransform(65.5,0);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#006C6A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_454.setTransform(65.5,0);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#006D6D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_455.setTransform(65.5,0);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#006A6E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_456.setTransform(65.5,0);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#00676F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_457.setTransform(65.5,0);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#006470").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_458.setTransform(65.5,0);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#006171").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_459.setTransform(65.5,0);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#005D72").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_460.setTransform(65.5,0);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#005A72").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_461.setTransform(65.5,0);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#005773").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_462.setTransform(65.5,0);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#005474").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_463.setTransform(65.5,0);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#005175").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_464.setTransform(65.5,0);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#004E76").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_465.setTransform(65.5,0);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#004B77").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_466.setTransform(65.5,0);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#004878").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_467.setTransform(65.5,0);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#004579").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_468.setTransform(65.5,0);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#00417A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_469.setTransform(65.5,0);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#003E7B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_470.setTransform(65.5,0);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#003B7C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_471.setTransform(65.5,0);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#00387D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_472.setTransform(65.5,0);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#00357D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_473.setTransform(65.5,0);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#00327E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_474.setTransform(65.5,0);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#002F7F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_475.setTransform(65.5,0);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#002C80").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_476.setTransform(65.5,0);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#002881").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_477.setTransform(65.5,0);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#002582").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_478.setTransform(65.5,0);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#002283").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_479.setTransform(65.5,0);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#001F84").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_480.setTransform(65.5,0);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#001C85").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_481.setTransform(65.5,0);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#001986").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_482.setTransform(65.5,0);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#001687").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_483.setTransform(65.5,0);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#001388").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_484.setTransform(65.5,0);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#001088").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_485.setTransform(65.5,0);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000C89").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_486.setTransform(65.5,0);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#00098A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_487.setTransform(65.5,0);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#00068B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_488.setTransform(65.5,0);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#00038C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_489.setTransform(65.5,0);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#00008D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_490.setTransform(65.5,0);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#05008E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_491.setTransform(65.5,0);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#09008E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_492.setTransform(65.5,0);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#0E008F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_493.setTransform(65.5,0);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#130090").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_494.setTransform(65.5,0);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#180090").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_495.setTransform(65.5,0);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#1C0091").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_496.setTransform(65.5,0);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#210092").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_497.setTransform(65.5,0);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#260092").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_498.setTransform(65.5,0);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#2A0093").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_499.setTransform(65.5,0);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#2F0094").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_500.setTransform(65.5,0);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#340095").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_501.setTransform(65.5,0);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#390095").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_502.setTransform(65.5,0);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#3D0096").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_503.setTransform(65.5,0);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#420097").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_504.setTransform(65.5,0);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#470097").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_505.setTransform(65.5,0);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#4B0098").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_506.setTransform(65.5,0);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#500099").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_507.setTransform(65.5,0);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#550099").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_508.setTransform(65.5,0);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#5A009A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_509.setTransform(65.5,0);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#5E009B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_510.setTransform(65.5,0);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#63009B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_511.setTransform(65.5,0);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#68009C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_512.setTransform(65.5,0);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#6C009D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_513.setTransform(65.5,0);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#71009D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_514.setTransform(65.5,0);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#76009E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_515.setTransform(65.5,0);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#7B009F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_516.setTransform(65.5,0);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#7F00A0").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_517.setTransform(65.5,0);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#8400A0").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_518.setTransform(65.5,0);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#8900A1").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_519.setTransform(65.5,0);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#8D00A2").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_520.setTransform(65.5,0);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#9200A2").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_521.setTransform(65.5,0);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#9700A3").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_522.setTransform(65.5,0);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#9C00A4").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_523.setTransform(65.5,0);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#A000A4").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_524.setTransform(65.5,0);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#A500A5").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_525.setTransform(65.5,0);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#A400A0").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_526.setTransform(65.5,0);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#A3009C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_527.setTransform(65.5,0);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#A20097").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_528.setTransform(65.5,0);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#A10092").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_529.setTransform(65.5,0);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#A0008D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_530.setTransform(65.5,0);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#9F0089").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_531.setTransform(65.5,0);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#9E0084").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_532.setTransform(65.5,0);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#9D007F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_533.setTransform(65.5,0);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#9C007B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_534.setTransform(65.5,0);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#9B0076").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_535.setTransform(65.5,0);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#9A0071").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_536.setTransform(65.5,0);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#99006C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_537.setTransform(65.5,0);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#980068").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_538.setTransform(65.5,0);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#970063").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_539.setTransform(65.5,0);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#96005E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_540.setTransform(65.5,0);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#95005A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_541.setTransform(65.5,0);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#940055").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_542.setTransform(65.5,0);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#920050").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_543.setTransform(65.5,0);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#91004B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_544.setTransform(65.5,0);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#900047").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_545.setTransform(65.5,0);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#8F0042").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_546.setTransform(65.5,0);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#8E003D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_547.setTransform(65.5,0);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#8D0039").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_548.setTransform(65.5,0);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#8C0034").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_549.setTransform(65.5,0);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#8B002F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_550.setTransform(65.5,0);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#8A002A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_551.setTransform(65.5,0);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#890026").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_552.setTransform(65.5,0);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#880021").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_553.setTransform(65.5,0);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#87001C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_554.setTransform(65.5,0);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#860018").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_555.setTransform(65.5,0);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#850013").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_556.setTransform(65.5,0);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#84000E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_557.setTransform(65.5,0);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#830009").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_558.setTransform(65.5,0);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#820005").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_559.setTransform(65.5,0);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#810000").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_560.setTransform(65.5,0);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#830401").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_561.setTransform(65.5,0);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#840802").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_562.setTransform(65.5,0);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#860B04").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_563.setTransform(65.5,0);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#870F05").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_564.setTransform(65.5,0);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#891306").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_565.setTransform(65.5,0);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#8A1707").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_566.setTransform(65.5,0);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#8C1A09").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_567.setTransform(65.5,0);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#8D1E0A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_568.setTransform(65.5,0);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#8F220B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_569.setTransform(65.5,0);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#90260C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_570.setTransform(65.5,0);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#92290E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_571.setTransform(65.5,0);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#942D0F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_572.setTransform(65.5,0);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#953110").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_573.setTransform(65.5,0);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#973511").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_574.setTransform(65.5,0);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#983912").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_575.setTransform(65.5,0);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#9A3C14").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_576.setTransform(65.5,0);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#9B4015").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_577.setTransform(65.5,0);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#9D4416").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_578.setTransform(65.5,0);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#9E4817").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_579.setTransform(65.5,0);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#A04B19").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_580.setTransform(65.5,0);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#A14F1A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_581.setTransform(65.5,0);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#A3531B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_582.setTransform(65.5,0);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#A4571C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_583.setTransform(65.5,0);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#A65B1D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_584.setTransform(65.5,0);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#A85E1F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_585.setTransform(65.5,0);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#A96220").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_586.setTransform(65.5,0);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#AB6621").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_587.setTransform(65.5,0);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#AC6A22").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_588.setTransform(65.5,0);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#AE6D24").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_589.setTransform(65.5,0);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#AF7125").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_590.setTransform(65.5,0);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#B17526").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_591.setTransform(65.5,0);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#B27927").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_592.setTransform(65.5,0);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#B47C29").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_593.setTransform(65.5,0);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#B5802A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_594.setTransform(65.5,0);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#B7842B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_595.setTransform(65.5,0);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#B2832A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_596.setTransform(65.5,0);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#AD8129").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_597.setTransform(65.5,0);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#A78027").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_598.setTransform(65.5,0);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#A27F26").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_599.setTransform(65.5,0);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#9D7E25").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_600.setTransform(65.5,0);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#987C24").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_601.setTransform(65.5,0);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#927B22").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_602.setTransform(65.5,0);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#8D7A21").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_603.setTransform(65.5,0);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#887820").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_604.setTransform(65.5,0);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#83771F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_605.setTransform(65.5,0);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#7D761D").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_606.setTransform(65.5,0);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#78751C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_607.setTransform(65.5,0);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#73731B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_608.setTransform(65.5,0);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#6E721A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_609.setTransform(65.5,0);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#697119").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_610.setTransform(65.5,0);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#636F17").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_611.setTransform(65.5,0);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#5E6E16").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_612.setTransform(65.5,0);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#596D15").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_613.setTransform(65.5,0);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#546C14").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_614.setTransform(65.5,0);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#4E6A12").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_615.setTransform(65.5,0);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#496911").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_616.setTransform(65.5,0);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#446810").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_617.setTransform(65.5,0);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#3F660F").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_618.setTransform(65.5,0);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#3A650E").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_619.setTransform(65.5,0);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#34640C").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_620.setTransform(65.5,0);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#2F630B").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_621.setTransform(65.5,0);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#2A610A").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_622.setTransform(65.5,0);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#256009").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_623.setTransform(65.5,0);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#1F5F07").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_624.setTransform(65.5,0);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#1A5D06").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_625.setTransform(65.5,0);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#155C05").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_626.setTransform(65.5,0);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#105B04").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_627.setTransform(65.5,0);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#0A5A02").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_628.setTransform(65.5,0);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#055801").s().p("AKhEBIKQk+IAALzInRHQgApNsaIKHlrIFaMkInzKHgAykm8IIDAAIqPIrg");
	this.shape_629.setTransform(65.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_420}]}).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_420}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-115.8,396.8,231.6);


(lib.Car_2_Color = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(35).call(this.frame_105).wait(35).call(this.frame_140).wait(35).call(this.frame_175).wait(36));

	// Color_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC042").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAG6h5IjInRInjAAIjIHRINzAAg");
	this.shape.setTransform(-23.225,23.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8BF40").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_1.setTransform(-23.225,23.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0BD3E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_2.setTransform(-23.225,23.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9BC3C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_3.setTransform(-23.225,23.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2BA3A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_4.setTransform(-23.225,23.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBB939").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_5.setTransform(-23.225,23.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3B737").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_6.setTransform(-23.225,23.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCB635").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_7.setTransform(-23.225,23.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5B433").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_8.setTransform(-23.225,23.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BDB331").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_9.setTransform(-23.225,23.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B6B12F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_10.setTransform(-23.225,23.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AFB02D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_11.setTransform(-23.225,23.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A8AF2B").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_12.setTransform(-23.225,23.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A0AD29").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_13.setTransform(-23.225,23.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#99AC28").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_14.setTransform(-23.225,23.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#92AA26").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_15.setTransform(-23.225,23.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8AA924").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_16.setTransform(-23.225,23.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#83A722").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_17.setTransform(-23.225,23.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7CA620").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_18.setTransform(-23.225,23.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#75A41E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_19.setTransform(-23.225,23.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6DA31C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_20.setTransform(-23.225,23.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66A11A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_21.setTransform(-23.225,23.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5FA019").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_22.setTransform(-23.225,23.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#579E17").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_23.setTransform(-23.225,23.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#509D15").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_24.setTransform(-23.225,23.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#499C13").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_25.setTransform(-23.225,23.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#429A11").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_26.setTransform(-23.225,23.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A990F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_27.setTransform(-23.225,23.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33970D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_28.setTransform(-23.225,23.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C960B").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_29.setTransform(-23.225,23.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#249409").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_30.setTransform(-23.225,23.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D9308").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_31.setTransform(-23.225,23.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#169106").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_32.setTransform(-23.225,23.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0F9004").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_33.setTransform(-23.225,23.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#078E02").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_34.setTransform(-23.225,23.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#008D00").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_35.setTransform(-23.225,23.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#008E05").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_36.setTransform(-23.225,23.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#008F0A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_37.setTransform(-23.225,23.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00900F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_38.setTransform(-23.225,23.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009114").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_39.setTransform(-23.225,23.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009219").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_40.setTransform(-23.225,23.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00931E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_41.setTransform(-23.225,23.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009423").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_42.setTransform(-23.225,23.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009528").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_43.setTransform(-23.225,23.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00962E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_44.setTransform(-23.225,23.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009733").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_45.setTransform(-23.225,23.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009838").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_46.setTransform(-23.225,23.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00993D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_47.setTransform(-23.225,23.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009A42").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_48.setTransform(-23.225,23.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009B47").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_49.setTransform(-23.225,23.275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009C4C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_50.setTransform(-23.225,23.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009D51").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_51.setTransform(-23.225,23.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009E56").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_52.setTransform(-23.225,23.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A05B").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_53.setTransform(-23.225,23.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A160").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_54.setTransform(-23.225,23.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A265").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_55.setTransform(-23.225,23.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A36A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_56.setTransform(-23.225,23.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A46F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_57.setTransform(-23.225,23.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A574").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_58.setTransform(-23.225,23.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A679").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_59.setTransform(-23.225,23.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A77E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_60.setTransform(-23.225,23.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A883").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_61.setTransform(-23.225,23.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A989").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_62.setTransform(-23.225,23.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00AA8E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_63.setTransform(-23.225,23.275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00AB93").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_64.setTransform(-23.225,23.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00AC98").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_65.setTransform(-23.225,23.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00AD9D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_66.setTransform(-23.225,23.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00AEA2").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_67.setTransform(-23.225,23.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00AFA7").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_68.setTransform(-23.225,23.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00B0AC").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_69.setTransform(-23.225,23.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00B1B1").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAG6h5IjInRInjAAIjIHRINzAAg");
	this.shape_70.setTransform(-23.225,23.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00ACB3").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_71.setTransform(-23.225,23.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A7B5").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_72.setTransform(-23.225,23.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A2B8").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_73.setTransform(-23.225,23.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#009DBA").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_74.setTransform(-23.225,23.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0098BC").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_75.setTransform(-23.225,23.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0093BE").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_76.setTransform(-23.225,23.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#008EC1").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_77.setTransform(-23.225,23.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0089C3").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_78.setTransform(-23.225,23.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0083C5").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_79.setTransform(-23.225,23.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#007EC7").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_80.setTransform(-23.225,23.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0079CA").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_81.setTransform(-23.225,23.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0074CC").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_82.setTransform(-23.225,23.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#006FCE").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_83.setTransform(-23.225,23.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#006AD0").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_84.setTransform(-23.225,23.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0065D2").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_85.setTransform(-23.225,23.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0060D5").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_86.setTransform(-23.225,23.275);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#005BD7").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_87.setTransform(-23.225,23.275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0056D9").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_88.setTransform(-23.225,23.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0051DB").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_89.setTransform(-23.225,23.275);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#004CDE").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_90.setTransform(-23.225,23.275);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0047E0").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_91.setTransform(-23.225,23.275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0042E2").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_92.setTransform(-23.225,23.275);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#003DE4").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_93.setTransform(-23.225,23.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0038E6").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_94.setTransform(-23.225,23.275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0033E9").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_95.setTransform(-23.225,23.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#002EEB").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_96.setTransform(-23.225,23.275);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0028ED").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_97.setTransform(-23.225,23.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0023EF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_98.setTransform(-23.225,23.275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#001EF2").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_99.setTransform(-23.225,23.275);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0019F4").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_100.setTransform(-23.225,23.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0014F6").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_101.setTransform(-23.225,23.275);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000FF8").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_102.setTransform(-23.225,23.275);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000AFB").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_103.setTransform(-23.225,23.275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0005FD").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_104.setTransform(-23.225,23.275);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0000FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAG6h5IjInRInjAAIjIHRINzAAg");
	this.shape_105.setTransform(-23.225,23.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0700FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_106.setTransform(-23.225,23.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0F00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_107.setTransform(-23.225,23.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1600FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_108.setTransform(-23.225,23.275);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1D00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_109.setTransform(-23.225,23.275);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2400FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_110.setTransform(-23.225,23.275);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2C00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_111.setTransform(-23.225,23.275);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3300FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_112.setTransform(-23.225,23.275);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3A00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_113.setTransform(-23.225,23.275);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4200FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_114.setTransform(-23.225,23.275);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4900FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_115.setTransform(-23.225,23.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5000FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_116.setTransform(-23.225,23.275);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5700FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_117.setTransform(-23.225,23.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5F00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_118.setTransform(-23.225,23.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6600FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_119.setTransform(-23.225,23.275);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6D00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_120.setTransform(-23.225,23.275);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7500FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_121.setTransform(-23.225,23.275);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7C00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_122.setTransform(-23.225,23.275);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8300FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_123.setTransform(-23.225,23.275);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8A00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_124.setTransform(-23.225,23.275);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9200FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_125.setTransform(-23.225,23.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9900FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_126.setTransform(-23.225,23.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A000FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_127.setTransform(-23.225,23.275);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A800FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_128.setTransform(-23.225,23.275);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#AF00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_129.setTransform(-23.225,23.275);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B600FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_130.setTransform(-23.225,23.275);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BD00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_131.setTransform(-23.225,23.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C500FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_132.setTransform(-23.225,23.275);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CC00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_133.setTransform(-23.225,23.275);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D300FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_134.setTransform(-23.225,23.275);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#DB00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_135.setTransform(-23.225,23.275);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E200FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_136.setTransform(-23.225,23.275);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E900FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_137.setTransform(-23.225,23.275);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F000FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_138.setTransform(-23.225,23.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F800FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_139.setTransform(-23.225,23.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF00FF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAG6h5IjInRInjAAIjIHRINzAAg");
	this.shape_140.setTransform(-23.225,23.275);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FD00F8").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_141.setTransform(-23.225,23.275);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FB00F0").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_142.setTransform(-23.225,23.275);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F900E9").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_143.setTransform(-23.225,23.275);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F700E2").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_144.setTransform(-23.225,23.275);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F600DB").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_145.setTransform(-23.225,23.275);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F400D3").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_146.setTransform(-23.225,23.275);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F200CC").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_147.setTransform(-23.225,23.275);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F000C5").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_148.setTransform(-23.225,23.275);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE00BD").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_149.setTransform(-23.225,23.275);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EC00B6").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_150.setTransform(-23.225,23.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EA00AF").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_151.setTransform(-23.225,23.275);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E800A8").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_152.setTransform(-23.225,23.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E600A0").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_153.setTransform(-23.225,23.275);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E50099").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_154.setTransform(-23.225,23.275);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E30092").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_155.setTransform(-23.225,23.275);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E1008A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_156.setTransform(-23.225,23.275);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DF0083").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_157.setTransform(-23.225,23.275);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DD007C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_158.setTransform(-23.225,23.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#DB0075").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_159.setTransform(-23.225,23.275);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D9006D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_160.setTransform(-23.225,23.275);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D70066").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_161.setTransform(-23.225,23.275);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D6005F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_162.setTransform(-23.225,23.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D40057").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_163.setTransform(-23.225,23.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D20050").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_164.setTransform(-23.225,23.275);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D00049").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_165.setTransform(-23.225,23.275);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CE0042").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_166.setTransform(-23.225,23.275);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CC003A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_167.setTransform(-23.225,23.275);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CA0033").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_168.setTransform(-23.225,23.275);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C8002C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_169.setTransform(-23.225,23.275);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C60024").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_170.setTransform(-23.225,23.275);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C5001D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_171.setTransform(-23.225,23.275);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C30016").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_172.setTransform(-23.225,23.275);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C1000F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_173.setTransform(-23.225,23.275);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#BF0007").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_174.setTransform(-23.225,23.275);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BD0000").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_175.setTransform(-23.225,23.275);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BF0502").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_176.setTransform(-23.225,23.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C10B04").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_177.setTransform(-23.225,23.275);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C31006").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_178.setTransform(-23.225,23.275);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C51608").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_179.setTransform(-23.225,23.275);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C61B09").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_180.setTransform(-23.225,23.275);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C8210B").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_181.setTransform(-23.225,23.275);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CA260D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_182.setTransform(-23.225,23.275);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CC2C0F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_183.setTransform(-23.225,23.275);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CE3111").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_184.setTransform(-23.225,23.275);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D03713").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_185.setTransform(-23.225,23.275);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D23C15").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_186.setTransform(-23.225,23.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D44217").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_187.setTransform(-23.225,23.275);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D64719").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_188.setTransform(-23.225,23.275);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D74D1A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_189.setTransform(-23.225,23.275);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D9521C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_190.setTransform(-23.225,23.275);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#DB581E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_191.setTransform(-23.225,23.275);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#DD5D20").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_192.setTransform(-23.225,23.275);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DF6322").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_193.setTransform(-23.225,23.275);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E16824").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_194.setTransform(-23.225,23.275);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E36E26").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_195.setTransform(-23.225,23.275);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E57328").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_196.setTransform(-23.225,23.275);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E67929").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_197.setTransform(-23.225,23.275);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E87E2B").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_198.setTransform(-23.225,23.275);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EA842D").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_199.setTransform(-23.225,23.275);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EC892F").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_200.setTransform(-23.225,23.275);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EE8F31").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_201.setTransform(-23.225,23.275);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F09433").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_202.setTransform(-23.225,23.275);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F29A35").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_203.setTransform(-23.225,23.275);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F49F37").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_204.setTransform(-23.225,23.275);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F6A539").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_205.setTransform(-23.225,23.275);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F7AA3A").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_206.setTransform(-23.225,23.275);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F9B03C").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_207.setTransform(-23.225,23.275);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FBB53E").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_208.setTransform(-23.225,23.275);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FDBB40").s().p("A7XOeIAArzIOdkkIFaskIPBAAIFaMkIOdEkIAALzgAm5h5INzAAIjInRInjAAg");
	this.shape_209.setTransform(-23.225,23.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Color_2
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_210.setTransform(0,-37.725);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F8FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_211.setTransform(0,-37.725);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F0FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_212.setTransform(0,-37.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E9FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_213.setTransform(0,-37.725);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E2FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_214.setTransform(0,-37.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#DBFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_215.setTransform(0,-37.725);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D3FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_216.setTransform(0,-37.725);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CCFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_217.setTransform(0,-37.725);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#C5FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_218.setTransform(0,-37.725);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#BDFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_219.setTransform(0,-37.725);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#B6FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_220.setTransform(0,-37.725);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#AFFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_221.setTransform(0,-37.725);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A8FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_222.setTransform(0,-37.725);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A0FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_223.setTransform(0,-37.725);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#99FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_224.setTransform(0,-37.725);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#92FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_225.setTransform(0,-37.725);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#8AFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_226.setTransform(0,-37.725);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#83FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_227.setTransform(0,-37.725);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7CFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_228.setTransform(0,-37.725);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#75FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_229.setTransform(0,-37.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6DFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_230.setTransform(0,-37.725);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#66FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_231.setTransform(0,-37.725);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#5FFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_232.setTransform(0,-37.725);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#57FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_233.setTransform(0,-37.725);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#50FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_234.setTransform(0,-37.725);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#49FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_235.setTransform(0,-37.725);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#42FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_236.setTransform(0,-37.725);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#3AFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_237.setTransform(0,-37.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#33FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_238.setTransform(0,-37.725);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#2CFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_239.setTransform(0,-37.725);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#24FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_240.setTransform(0,-37.725);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#1DFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_241.setTransform(0,-37.725);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#16FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_242.setTransform(0,-37.725);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0FFF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_243.setTransform(0,-37.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#07FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_244.setTransform(0,-37.725);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00FF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_245.setTransform(0,-37.725);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00FF07").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_246.setTransform(0,-37.725);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00FF0F").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_247.setTransform(0,-37.725);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00FF16").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_248.setTransform(0,-37.725);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00FF1D").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_249.setTransform(0,-37.725);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00FF24").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_250.setTransform(0,-37.725);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00FF2C").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_251.setTransform(0,-37.725);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00FF33").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_252.setTransform(0,-37.725);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00FF3A").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_253.setTransform(0,-37.725);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00FF42").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_254.setTransform(0,-37.725);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00FF49").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_255.setTransform(0,-37.725);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00FF50").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_256.setTransform(0,-37.725);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00FF57").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_257.setTransform(0,-37.725);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00FF5F").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_258.setTransform(0,-37.725);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00FF66").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_259.setTransform(0,-37.725);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00FF6D").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_260.setTransform(0,-37.725);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00FF75").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_261.setTransform(0,-37.725);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00FF7C").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_262.setTransform(0,-37.725);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00FF83").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_263.setTransform(0,-37.725);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00FF8A").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_264.setTransform(0,-37.725);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00FF92").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_265.setTransform(0,-37.725);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00FF99").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_266.setTransform(0,-37.725);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00FFA0").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_267.setTransform(0,-37.725);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00FFA8").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_268.setTransform(0,-37.725);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00FFAF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_269.setTransform(0,-37.725);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00FFB6").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_270.setTransform(0,-37.725);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00FFBD").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_271.setTransform(0,-37.725);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00FFC5").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_272.setTransform(0,-37.725);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00FFCC").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_273.setTransform(0,-37.725);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00FFD3").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_274.setTransform(0,-37.725);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00FFDB").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_275.setTransform(0,-37.725);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00FFE2").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_276.setTransform(0,-37.725);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00FFE9").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_277.setTransform(0,-37.725);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00FFF0").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_278.setTransform(0,-37.725);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00FFF8").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_279.setTransform(0,-37.725);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00FFFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_280.setTransform(0,-37.725);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00FCFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_281.setTransform(0,-37.725);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00F9FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_282.setTransform(0,-37.725);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00F6FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_283.setTransform(0,-37.725);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00F3FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_284.setTransform(0,-37.725);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00F0FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_285.setTransform(0,-37.725);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00EEFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_286.setTransform(0,-37.725);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00EBFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_287.setTransform(0,-37.725);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00E8FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_288.setTransform(0,-37.725);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00E5FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_289.setTransform(0,-37.725);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00E2FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_290.setTransform(0,-37.725);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00DFFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_291.setTransform(0,-37.725);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00DCFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_292.setTransform(0,-37.725);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00D9FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_293.setTransform(0,-37.725);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00D6FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_294.setTransform(0,-37.725);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00D3FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_295.setTransform(0,-37.725);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00D0FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_296.setTransform(0,-37.725);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00CDFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_297.setTransform(0,-37.725);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00CBFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_298.setTransform(0,-37.725);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00C8FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_299.setTransform(0,-37.725);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00C5FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_300.setTransform(0,-37.725);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00C2FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_301.setTransform(0,-37.725);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00BFFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_302.setTransform(0,-37.725);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00BCFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_303.setTransform(0,-37.725);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00B9FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_304.setTransform(0,-37.725);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00B6FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_305.setTransform(0,-37.725);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00B3FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_306.setTransform(0,-37.725);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00B0FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_307.setTransform(0,-37.725);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00ADFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_308.setTransform(0,-37.725);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00AAFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_309.setTransform(0,-37.725);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00A8FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_310.setTransform(0,-37.725);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00A5FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_311.setTransform(0,-37.725);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00A2FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_312.setTransform(0,-37.725);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#009FFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_313.setTransform(0,-37.725);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#009CFF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_314.setTransform(0,-37.725);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#0099FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_315.setTransform(0,-37.725);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#0799FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_316.setTransform(0,-37.725);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#0F99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_317.setTransform(0,-37.725);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#1699FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_318.setTransform(0,-37.725);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#1D99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_319.setTransform(0,-37.725);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#2499FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_320.setTransform(0,-37.725);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#2C99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_321.setTransform(0,-37.725);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#3399FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_322.setTransform(0,-37.725);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#3A99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_323.setTransform(0,-37.725);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#4299FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_324.setTransform(0,-37.725);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4999FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_325.setTransform(0,-37.725);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#5099FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_326.setTransform(0,-37.725);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#5799FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_327.setTransform(0,-37.725);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#5F99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_328.setTransform(0,-37.725);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#6699FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_329.setTransform(0,-37.725);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#6D99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_330.setTransform(0,-37.725);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#7599FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_331.setTransform(0,-37.725);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#7C99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_332.setTransform(0,-37.725);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#8399FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_333.setTransform(0,-37.725);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#8A99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_334.setTransform(0,-37.725);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#9299FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_335.setTransform(0,-37.725);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#9999FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_336.setTransform(0,-37.725);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#A099FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_337.setTransform(0,-37.725);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#A899FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_338.setTransform(0,-37.725);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#AF99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_339.setTransform(0,-37.725);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#B699FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_340.setTransform(0,-37.725);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#BD99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_341.setTransform(0,-37.725);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#C599FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_342.setTransform(0,-37.725);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#CC99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_343.setTransform(0,-37.725);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#D399FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_344.setTransform(0,-37.725);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#DB99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_345.setTransform(0,-37.725);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E299FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_346.setTransform(0,-37.725);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E999FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_347.setTransform(0,-37.725);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F099FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_348.setTransform(0,-37.725);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#F899FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_349.setTransform(0,-37.725);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FF99FF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_350.setTransform(0,-37.725);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FF95F8").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_351.setTransform(0,-37.725);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FF90F0").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_352.setTransform(0,-37.725);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FF8CE9").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_353.setTransform(0,-37.725);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF88E2").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_354.setTransform(0,-37.725);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF83DB").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_355.setTransform(0,-37.725);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF7FD3").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_356.setTransform(0,-37.725);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF7ACC").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_357.setTransform(0,-37.725);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF76C5").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_358.setTransform(0,-37.725);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF72BD").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_359.setTransform(0,-37.725);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF6DB6").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_360.setTransform(0,-37.725);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF69AF").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_361.setTransform(0,-37.725);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF65A8").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_362.setTransform(0,-37.725);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF60A0").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_363.setTransform(0,-37.725);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF5C99").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_364.setTransform(0,-37.725);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF5792").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_365.setTransform(0,-37.725);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF538A").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_366.setTransform(0,-37.725);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF4F83").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_367.setTransform(0,-37.725);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF4A7C").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_368.setTransform(0,-37.725);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF4675").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_369.setTransform(0,-37.725);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF426D").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_370.setTransform(0,-37.725);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF3D66").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_371.setTransform(0,-37.725);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FF395F").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_372.setTransform(0,-37.725);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FF3457").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_373.setTransform(0,-37.725);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF3050").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_374.setTransform(0,-37.725);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FF2C49").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_375.setTransform(0,-37.725);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FF2742").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_376.setTransform(0,-37.725);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FF233A").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_377.setTransform(0,-37.725);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF1F33").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_378.setTransform(0,-37.725);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FF1A2C").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_379.setTransform(0,-37.725);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FF1624").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_380.setTransform(0,-37.725);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FF111D").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_381.setTransform(0,-37.725);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FF0D16").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_382.setTransform(0,-37.725);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FF090F").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_383.setTransform(0,-37.725);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FF0407").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_384.setTransform(0,-37.725);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FF0000").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_385.setTransform(0,-37.725);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF0700").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_386.setTransform(0,-37.725);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FF0F00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_387.setTransform(0,-37.725);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF1600").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_388.setTransform(0,-37.725);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF1D00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_389.setTransform(0,-37.725);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF2400").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_390.setTransform(0,-37.725);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF2C00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_391.setTransform(0,-37.725);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF3300").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_392.setTransform(0,-37.725);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FF3A00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_393.setTransform(0,-37.725);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF4200").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_394.setTransform(0,-37.725);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FF4900").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_395.setTransform(0,-37.725);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF5000").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_396.setTransform(0,-37.725);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FF5700").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_397.setTransform(0,-37.725);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF5F00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_398.setTransform(0,-37.725);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FF6600").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_399.setTransform(0,-37.725);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF6D00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_400.setTransform(0,-37.725);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FF7500").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_401.setTransform(0,-37.725);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF7C00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_402.setTransform(0,-37.725);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF8300").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_403.setTransform(0,-37.725);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF8A00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_404.setTransform(0,-37.725);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FF9200").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_405.setTransform(0,-37.725);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF9900").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_406.setTransform(0,-37.725);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFA000").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_407.setTransform(0,-37.725);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFA800").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_408.setTransform(0,-37.725);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFAF00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_409.setTransform(0,-37.725);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFB600").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_410.setTransform(0,-37.725);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFBD00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_411.setTransform(0,-37.725);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFC500").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_412.setTransform(0,-37.725);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFCC00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_413.setTransform(0,-37.725);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFD300").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_414.setTransform(0,-37.725);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFDB00").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_415.setTransform(0,-37.725);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFE200").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_416.setTransform(0,-37.725);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFE900").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_417.setTransform(0,-37.725);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFF000").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_418.setTransform(0,-37.725);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFF800").s().p("APbLSImIjqIHQnRIOdElInRHRgA3uE8IOcklIl1JLIv4CrgAqhHoIHQnRIE3g6IC9KFgArIk7IHRnRIPAAAInRHRIoUBYg");
	this.shape_419.setTransform(0,-37.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210}]}).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_210}]},1).wait(1));

	// Color_3
	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#B7842B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_420.setTransform(65.5,0.025);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#B2832A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_421.setTransform(65.5,0.025);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#AD8129").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_422.setTransform(65.5,0.025);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#A78027").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_423.setTransform(65.5,0.025);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#A27F26").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_424.setTransform(65.5,0.025);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#9D7E25").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_425.setTransform(65.5,0.025);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#987C24").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_426.setTransform(65.5,0.025);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#927B22").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_427.setTransform(65.5,0.025);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#8D7A21").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_428.setTransform(65.5,0.025);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#887820").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_429.setTransform(65.5,0.025);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#83771F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_430.setTransform(65.5,0.025);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#7D761D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_431.setTransform(65.5,0.025);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#78751C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_432.setTransform(65.5,0.025);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#73731B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_433.setTransform(65.5,0.025);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#6E721A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_434.setTransform(65.5,0.025);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#697119").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_435.setTransform(65.5,0.025);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#636F17").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_436.setTransform(65.5,0.025);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#5E6E16").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_437.setTransform(65.5,0.025);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#596D15").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_438.setTransform(65.5,0.025);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#546C14").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_439.setTransform(65.5,0.025);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#4E6A12").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_440.setTransform(65.5,0.025);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#496911").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_441.setTransform(65.5,0.025);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#446810").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_442.setTransform(65.5,0.025);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#3F660F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_443.setTransform(65.5,0.025);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#3A650E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_444.setTransform(65.5,0.025);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#34640C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_445.setTransform(65.5,0.025);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#2F630B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_446.setTransform(65.5,0.025);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#2A610A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_447.setTransform(65.5,0.025);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#256009").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_448.setTransform(65.5,0.025);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1F5F07").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_449.setTransform(65.5,0.025);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#1A5D06").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_450.setTransform(65.5,0.025);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#155C05").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_451.setTransform(65.5,0.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#105B04").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_452.setTransform(65.5,0.025);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#0A5A02").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_453.setTransform(65.5,0.025);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#055801").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_454.setTransform(65.5,0.025);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#005700").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_455.setTransform(65.5,0.025);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#005803").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_456.setTransform(65.5,0.025);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#005806").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_457.setTransform(65.5,0.025);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#005909").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_458.setTransform(65.5,0.025);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#005A0C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_459.setTransform(65.5,0.025);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#005A10").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_460.setTransform(65.5,0.025);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#005B13").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_461.setTransform(65.5,0.025);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#005B16").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_462.setTransform(65.5,0.025);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#005C19").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_463.setTransform(65.5,0.025);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#005D1C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_464.setTransform(65.5,0.025);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#005D1F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_465.setTransform(65.5,0.025);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#005E22").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_466.setTransform(65.5,0.025);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#005F25").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_467.setTransform(65.5,0.025);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#005F28").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_468.setTransform(65.5,0.025);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#00602C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_469.setTransform(65.5,0.025);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#00602F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_470.setTransform(65.5,0.025);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#006132").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_471.setTransform(65.5,0.025);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#006235").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_472.setTransform(65.5,0.025);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#006238").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_473.setTransform(65.5,0.025);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#00633B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_474.setTransform(65.5,0.025);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#00643E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_475.setTransform(65.5,0.025);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#006441").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_476.setTransform(65.5,0.025);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#006545").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_477.setTransform(65.5,0.025);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#006548").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_478.setTransform(65.5,0.025);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#00664B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_479.setTransform(65.5,0.025);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#00674E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_480.setTransform(65.5,0.025);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#006751").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_481.setTransform(65.5,0.025);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#006854").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_482.setTransform(65.5,0.025);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#006957").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_483.setTransform(65.5,0.025);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#00695A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_484.setTransform(65.5,0.025);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#006A5D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_485.setTransform(65.5,0.025);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#006A61").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_486.setTransform(65.5,0.025);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#006B64").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_487.setTransform(65.5,0.025);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#006C67").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_488.setTransform(65.5,0.025);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#006C6A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_489.setTransform(65.5,0.025);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#006D6D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_490.setTransform(65.5,0.025);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#006A6E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_491.setTransform(65.5,0.025);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#00676F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_492.setTransform(65.5,0.025);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#006470").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_493.setTransform(65.5,0.025);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#006171").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_494.setTransform(65.5,0.025);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#005D72").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_495.setTransform(65.5,0.025);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#005A72").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_496.setTransform(65.5,0.025);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#005773").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_497.setTransform(65.5,0.025);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#005474").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_498.setTransform(65.5,0.025);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#005175").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_499.setTransform(65.5,0.025);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#004E76").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_500.setTransform(65.5,0.025);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#004B77").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_501.setTransform(65.5,0.025);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#004878").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_502.setTransform(65.5,0.025);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#004579").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_503.setTransform(65.5,0.025);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#00417A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_504.setTransform(65.5,0.025);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#003E7B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_505.setTransform(65.5,0.025);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#003B7C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_506.setTransform(65.5,0.025);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#00387D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_507.setTransform(65.5,0.025);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#00357D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_508.setTransform(65.5,0.025);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#00327E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_509.setTransform(65.5,0.025);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#002F7F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_510.setTransform(65.5,0.025);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#002C80").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_511.setTransform(65.5,0.025);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#002881").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_512.setTransform(65.5,0.025);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#002582").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_513.setTransform(65.5,0.025);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#002283").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_514.setTransform(65.5,0.025);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#001F84").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_515.setTransform(65.5,0.025);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#001C85").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_516.setTransform(65.5,0.025);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#001986").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_517.setTransform(65.5,0.025);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#001687").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_518.setTransform(65.5,0.025);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#001388").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_519.setTransform(65.5,0.025);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#001088").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_520.setTransform(65.5,0.025);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000C89").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_521.setTransform(65.5,0.025);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#00098A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_522.setTransform(65.5,0.025);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#00068B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_523.setTransform(65.5,0.025);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#00038C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_524.setTransform(65.5,0.025);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#00008D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_525.setTransform(65.5,0.025);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#05008E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_526.setTransform(65.5,0.025);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#09008E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_527.setTransform(65.5,0.025);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#0E008F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_528.setTransform(65.5,0.025);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#130090").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_529.setTransform(65.5,0.025);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#180090").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_530.setTransform(65.5,0.025);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#1C0091").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_531.setTransform(65.5,0.025);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#210092").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_532.setTransform(65.5,0.025);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#260092").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_533.setTransform(65.5,0.025);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#2A0093").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_534.setTransform(65.5,0.025);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#2F0094").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_535.setTransform(65.5,0.025);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#340095").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_536.setTransform(65.5,0.025);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#390095").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_537.setTransform(65.5,0.025);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#3D0096").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_538.setTransform(65.5,0.025);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#420097").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_539.setTransform(65.5,0.025);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#470097").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_540.setTransform(65.5,0.025);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#4B0098").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_541.setTransform(65.5,0.025);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#500099").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_542.setTransform(65.5,0.025);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#550099").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_543.setTransform(65.5,0.025);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#5A009A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_544.setTransform(65.5,0.025);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#5E009B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_545.setTransform(65.5,0.025);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#63009B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_546.setTransform(65.5,0.025);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#68009C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_547.setTransform(65.5,0.025);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#6C009D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_548.setTransform(65.5,0.025);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#71009D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_549.setTransform(65.5,0.025);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#76009E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_550.setTransform(65.5,0.025);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#7B009F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_551.setTransform(65.5,0.025);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#7F00A0").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_552.setTransform(65.5,0.025);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#8400A0").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_553.setTransform(65.5,0.025);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#8900A1").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_554.setTransform(65.5,0.025);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#8D00A2").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_555.setTransform(65.5,0.025);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#9200A2").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_556.setTransform(65.5,0.025);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#9700A3").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_557.setTransform(65.5,0.025);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#9C00A4").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_558.setTransform(65.5,0.025);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#A000A4").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_559.setTransform(65.5,0.025);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#A500A5").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_560.setTransform(65.5,0.025);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#A400A0").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_561.setTransform(65.5,0.025);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#A3009C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_562.setTransform(65.5,0.025);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#A20097").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_563.setTransform(65.5,0.025);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#A10092").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_564.setTransform(65.5,0.025);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#A0008D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_565.setTransform(65.5,0.025);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#9F0089").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_566.setTransform(65.5,0.025);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#9E0084").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_567.setTransform(65.5,0.025);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#9D007F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_568.setTransform(65.5,0.025);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#9C007B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_569.setTransform(65.5,0.025);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#9B0076").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_570.setTransform(65.5,0.025);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#9A0071").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_571.setTransform(65.5,0.025);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#99006C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_572.setTransform(65.5,0.025);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#980068").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_573.setTransform(65.5,0.025);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#970063").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_574.setTransform(65.5,0.025);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#96005E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_575.setTransform(65.5,0.025);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#95005A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_576.setTransform(65.5,0.025);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#940055").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_577.setTransform(65.5,0.025);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#920050").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_578.setTransform(65.5,0.025);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#91004B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_579.setTransform(65.5,0.025);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#900047").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_580.setTransform(65.5,0.025);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#8F0042").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_581.setTransform(65.5,0.025);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#8E003D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_582.setTransform(65.5,0.025);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#8D0039").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_583.setTransform(65.5,0.025);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#8C0034").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_584.setTransform(65.5,0.025);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#8B002F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_585.setTransform(65.5,0.025);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#8A002A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_586.setTransform(65.5,0.025);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#890026").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_587.setTransform(65.5,0.025);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#880021").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_588.setTransform(65.5,0.025);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#87001C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_589.setTransform(65.5,0.025);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#860018").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_590.setTransform(65.5,0.025);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#850013").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_591.setTransform(65.5,0.025);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#84000E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_592.setTransform(65.5,0.025);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#830009").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_593.setTransform(65.5,0.025);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#820005").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_594.setTransform(65.5,0.025);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#810000").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_595.setTransform(65.5,0.025);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#830401").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_596.setTransform(65.5,0.025);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#840802").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_597.setTransform(65.5,0.025);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#860B04").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_598.setTransform(65.5,0.025);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#870F05").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_599.setTransform(65.5,0.025);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#891306").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_600.setTransform(65.5,0.025);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#8A1707").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_601.setTransform(65.5,0.025);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#8C1A09").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_602.setTransform(65.5,0.025);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#8D1E0A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_603.setTransform(65.5,0.025);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#8F220B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_604.setTransform(65.5,0.025);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#90260C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_605.setTransform(65.5,0.025);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#92290E").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_606.setTransform(65.5,0.025);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#942D0F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_607.setTransform(65.5,0.025);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#953110").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_608.setTransform(65.5,0.025);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#973511").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_609.setTransform(65.5,0.025);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#983912").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_610.setTransform(65.5,0.025);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#9A3C14").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_611.setTransform(65.5,0.025);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#9B4015").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_612.setTransform(65.5,0.025);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#9D4416").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_613.setTransform(65.5,0.025);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#9E4817").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_614.setTransform(65.5,0.025);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#A04B19").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_615.setTransform(65.5,0.025);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#A14F1A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_616.setTransform(65.5,0.025);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#A3531B").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_617.setTransform(65.5,0.025);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#A4571C").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_618.setTransform(65.5,0.025);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#A65B1D").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_619.setTransform(65.5,0.025);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#A85E1F").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_620.setTransform(65.5,0.025);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#A96220").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_621.setTransform(65.5,0.025);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#AB6621").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_622.setTransform(65.5,0.025);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#AC6A22").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_623.setTransform(65.5,0.025);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#AE6D24").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_624.setTransform(65.5,0.025);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#AF7125").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_625.setTransform(65.5,0.025);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#B17526").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_626.setTransform(65.5,0.025);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#B27927").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_627.setTransform(65.5,0.025);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#B47C29").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_628.setTransform(65.5,0.025);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#B5802A").s().p("AKhEBIKQk+IAALyInRHRgApNsaIKHlrIFaMkInzKHgAykm7IIDAAIqPIqg");
	this.shape_629.setTransform(65.5,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_420}]}).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_420}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-115.8,396.8,231.7);


(lib.Car_1_Color = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(35).call(this.frame_105).wait(35).call(this.frame_140).wait(35).call(this.frame_175).wait(36));

	// Color_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD0000").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape.setTransform(-23.225,23.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF0502").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_1.setTransform(-23.225,23.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C10B04").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_2.setTransform(-23.225,23.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C31006").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_3.setTransform(-23.225,23.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C51608").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_4.setTransform(-23.225,23.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61B09").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_5.setTransform(-23.225,23.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C8210B").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_6.setTransform(-23.225,23.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA260D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_7.setTransform(-23.225,23.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC2C0F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_8.setTransform(-23.225,23.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE3111").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_9.setTransform(-23.225,23.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D03713").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_10.setTransform(-23.225,23.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D23C15").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_11.setTransform(-23.225,23.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D44217").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_12.setTransform(-23.225,23.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D64719").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_13.setTransform(-23.225,23.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D74D1A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_14.setTransform(-23.225,23.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9521C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_15.setTransform(-23.225,23.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DB581E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_16.setTransform(-23.225,23.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DD5D20").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_17.setTransform(-23.225,23.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DF6322").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_18.setTransform(-23.225,23.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E16824").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_19.setTransform(-23.225,23.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E36E26").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_20.setTransform(-23.225,23.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E57328").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_21.setTransform(-23.225,23.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E67929").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_22.setTransform(-23.225,23.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E87E2B").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_23.setTransform(-23.225,23.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA842D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_24.setTransform(-23.225,23.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC892F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_25.setTransform(-23.225,23.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EE8F31").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_26.setTransform(-23.225,23.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F09433").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_27.setTransform(-23.225,23.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F29A35").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_28.setTransform(-23.225,23.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49F37").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_29.setTransform(-23.225,23.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6A539").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_30.setTransform(-23.225,23.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7AA3A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_31.setTransform(-23.225,23.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F9B03C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_32.setTransform(-23.225,23.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FBB53E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_33.setTransform(-23.225,23.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDBB40").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_34.setTransform(-23.225,23.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFC042").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_35.setTransform(-23.225,23.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8BF40").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_36.setTransform(-23.225,23.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0BD3E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_37.setTransform(-23.225,23.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E9BC3C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_38.setTransform(-23.225,23.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E2BA3A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_39.setTransform(-23.225,23.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DBB939").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_40.setTransform(-23.225,23.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D3B737").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_41.setTransform(-23.225,23.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCB635").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_42.setTransform(-23.225,23.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C5B433").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_43.setTransform(-23.225,23.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BDB331").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_44.setTransform(-23.225,23.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B6B12F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_45.setTransform(-23.225,23.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AFB02D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_46.setTransform(-23.225,23.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A8AF2B").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_47.setTransform(-23.225,23.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A0AD29").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_48.setTransform(-23.225,23.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#99AC28").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_49.setTransform(-23.225,23.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#92AA26").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_50.setTransform(-23.225,23.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8AA924").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_51.setTransform(-23.225,23.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#83A722").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_52.setTransform(-23.225,23.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7CA620").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_53.setTransform(-23.225,23.225);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#75A41E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_54.setTransform(-23.225,23.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6DA31C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_55.setTransform(-23.225,23.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#66A11A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_56.setTransform(-23.225,23.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5FA019").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_57.setTransform(-23.225,23.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#579E17").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_58.setTransform(-23.225,23.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#509D15").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_59.setTransform(-23.225,23.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#499C13").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_60.setTransform(-23.225,23.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#429A11").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_61.setTransform(-23.225,23.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3A990F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_62.setTransform(-23.225,23.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#33970D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_63.setTransform(-23.225,23.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2C960B").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_64.setTransform(-23.225,23.225);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#249409").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_65.setTransform(-23.225,23.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D9308").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_66.setTransform(-23.225,23.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#169106").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_67.setTransform(-23.225,23.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0F9004").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_68.setTransform(-23.225,23.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#078E02").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_69.setTransform(-23.225,23.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#008D00").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_70.setTransform(-23.225,23.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#008E05").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_71.setTransform(-23.225,23.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#008F0A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_72.setTransform(-23.225,23.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00900F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_73.setTransform(-23.225,23.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#009114").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_74.setTransform(-23.225,23.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#009219").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_75.setTransform(-23.225,23.225);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00931E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_76.setTransform(-23.225,23.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#009423").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_77.setTransform(-23.225,23.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#009528").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_78.setTransform(-23.225,23.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00962E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_79.setTransform(-23.225,23.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#009733").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_80.setTransform(-23.225,23.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#009838").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_81.setTransform(-23.225,23.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00993D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_82.setTransform(-23.225,23.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009A42").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_83.setTransform(-23.225,23.225);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#009B47").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_84.setTransform(-23.225,23.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#009C4C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_85.setTransform(-23.225,23.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#009D51").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_86.setTransform(-23.225,23.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#009E56").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_87.setTransform(-23.225,23.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00A05B").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_88.setTransform(-23.225,23.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00A160").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_89.setTransform(-23.225,23.225);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00A265").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_90.setTransform(-23.225,23.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00A36A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_91.setTransform(-23.225,23.225);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A46F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_92.setTransform(-23.225,23.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00A574").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_93.setTransform(-23.225,23.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00A679").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_94.setTransform(-23.225,23.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A77E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_95.setTransform(-23.225,23.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00A883").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_96.setTransform(-23.225,23.225);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00A989").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_97.setTransform(-23.225,23.225);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00AA8E").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_98.setTransform(-23.225,23.225);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00AB93").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_99.setTransform(-23.225,23.225);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00AC98").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_100.setTransform(-23.225,23.225);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00AD9D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_101.setTransform(-23.225,23.225);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00AEA2").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_102.setTransform(-23.225,23.225);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00AFA7").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_103.setTransform(-23.225,23.225);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00B0AC").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_104.setTransform(-23.225,23.225);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00B1B1").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_105.setTransform(-23.225,23.225);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00ACB3").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_106.setTransform(-23.225,23.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00A7B5").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_107.setTransform(-23.225,23.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00A2B8").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_108.setTransform(-23.225,23.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#009DBA").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_109.setTransform(-23.225,23.225);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0098BC").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_110.setTransform(-23.225,23.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0093BE").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_111.setTransform(-23.225,23.225);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#008EC1").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_112.setTransform(-23.225,23.225);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0089C3").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_113.setTransform(-23.225,23.225);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0083C5").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_114.setTransform(-23.225,23.225);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#007EC7").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_115.setTransform(-23.225,23.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0079CA").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_116.setTransform(-23.225,23.225);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0074CC").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_117.setTransform(-23.225,23.225);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#006FCE").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_118.setTransform(-23.225,23.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#006AD0").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_119.setTransform(-23.225,23.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0065D2").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_120.setTransform(-23.225,23.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0060D5").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_121.setTransform(-23.225,23.225);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#005BD7").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_122.setTransform(-23.225,23.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0056D9").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_123.setTransform(-23.225,23.225);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0051DB").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_124.setTransform(-23.225,23.225);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#004CDE").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_125.setTransform(-23.225,23.225);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0047E0").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_126.setTransform(-23.225,23.225);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0042E2").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_127.setTransform(-23.225,23.225);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#003DE4").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_128.setTransform(-23.225,23.225);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0038E6").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_129.setTransform(-23.225,23.225);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0033E9").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_130.setTransform(-23.225,23.225);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#002EEB").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_131.setTransform(-23.225,23.225);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0028ED").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_132.setTransform(-23.225,23.225);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0023EF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_133.setTransform(-23.225,23.225);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#001EF2").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_134.setTransform(-23.225,23.225);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0019F4").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_135.setTransform(-23.225,23.225);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0014F6").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_136.setTransform(-23.225,23.225);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000FF8").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_137.setTransform(-23.225,23.225);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000AFB").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_138.setTransform(-23.225,23.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0005FD").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_139.setTransform(-23.225,23.225);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0000FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_140.setTransform(-23.225,23.225);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0700FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_141.setTransform(-23.225,23.225);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0F00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_142.setTransform(-23.225,23.225);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#1600FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_143.setTransform(-23.225,23.225);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1D00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_144.setTransform(-23.225,23.225);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2400FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_145.setTransform(-23.225,23.225);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2C00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_146.setTransform(-23.225,23.225);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3300FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_147.setTransform(-23.225,23.225);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3A00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_148.setTransform(-23.225,23.225);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4200FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_149.setTransform(-23.225,23.225);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4900FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_150.setTransform(-23.225,23.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#5000FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_151.setTransform(-23.225,23.225);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5700FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_152.setTransform(-23.225,23.225);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#5F00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_153.setTransform(-23.225,23.225);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6600FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_154.setTransform(-23.225,23.225);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6D00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_155.setTransform(-23.225,23.225);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7500FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_156.setTransform(-23.225,23.225);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7C00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_157.setTransform(-23.225,23.225);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8300FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_158.setTransform(-23.225,23.225);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#8A00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_159.setTransform(-23.225,23.225);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9200FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_160.setTransform(-23.225,23.225);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#9900FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_161.setTransform(-23.225,23.225);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A000FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_162.setTransform(-23.225,23.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#A800FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_163.setTransform(-23.225,23.225);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#AF00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_164.setTransform(-23.225,23.225);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B600FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_165.setTransform(-23.225,23.225);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BD00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_166.setTransform(-23.225,23.225);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#C500FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_167.setTransform(-23.225,23.225);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CC00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_168.setTransform(-23.225,23.225);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D300FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_169.setTransform(-23.225,23.225);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#DB00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_170.setTransform(-23.225,23.225);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E200FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_171.setTransform(-23.225,23.225);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E900FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_172.setTransform(-23.225,23.225);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F000FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_173.setTransform(-23.225,23.225);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F800FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_174.setTransform(-23.225,23.225);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF00FF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAG6h5IjInQInjAAIjIHQINzAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_175.setTransform(-23.225,23.225);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FD00F8").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_176.setTransform(-23.225,23.225);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FB00F0").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_177.setTransform(-23.225,23.225);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F900E9").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_178.setTransform(-23.225,23.225);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F700E2").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_179.setTransform(-23.225,23.225);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F600DB").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_180.setTransform(-23.225,23.225);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F400D3").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_181.setTransform(-23.225,23.225);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F200CC").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_182.setTransform(-23.225,23.225);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F000C5").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_183.setTransform(-23.225,23.225);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EE00BD").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_184.setTransform(-23.225,23.225);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EC00B6").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_185.setTransform(-23.225,23.225);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EA00AF").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_186.setTransform(-23.225,23.225);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E800A8").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_187.setTransform(-23.225,23.225);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E600A0").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_188.setTransform(-23.225,23.225);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E50099").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_189.setTransform(-23.225,23.225);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E30092").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_190.setTransform(-23.225,23.225);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E1008A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_191.setTransform(-23.225,23.225);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#DF0083").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_192.setTransform(-23.225,23.225);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DD007C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_193.setTransform(-23.225,23.225);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DB0075").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_194.setTransform(-23.225,23.225);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D9006D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_195.setTransform(-23.225,23.225);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D70066").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_196.setTransform(-23.225,23.225);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D6005F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_197.setTransform(-23.225,23.225);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D40057").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_198.setTransform(-23.225,23.225);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D20050").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_199.setTransform(-23.225,23.225);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D00049").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_200.setTransform(-23.225,23.225);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CE0042").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_201.setTransform(-23.225,23.225);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CC003A").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_202.setTransform(-23.225,23.225);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CA0033").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_203.setTransform(-23.225,23.225);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#C8002C").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_204.setTransform(-23.225,23.225);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C60024").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_205.setTransform(-23.225,23.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C5001D").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_206.setTransform(-23.225,23.225);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C30016").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_207.setTransform(-23.225,23.225);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C1000F").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_208.setTransform(-23.225,23.225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#BF0007").s().p("A7XOeIAA86MAi4gABIFaMkIOdEkIAALzgAm5h5INzAAIjInQInjAAgA1Wh5IHbAAIDInQIqjAAg");
	this.shape_209.setTransform(-23.225,23.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Color_2
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_210.setTransform(0,-37.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0700").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_211.setTransform(0,-37.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0F00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_212.setTransform(0,-37.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF1600").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_213.setTransform(0,-37.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF1D00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_214.setTransform(0,-37.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF2400").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_215.setTransform(0,-37.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF2C00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_216.setTransform(0,-37.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF3300").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_217.setTransform(0,-37.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF3A00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_218.setTransform(0,-37.75);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF4200").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_219.setTransform(0,-37.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF4900").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_220.setTransform(0,-37.75);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF5000").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_221.setTransform(0,-37.75);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF5700").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_222.setTransform(0,-37.75);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF5F00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_223.setTransform(0,-37.75);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF6600").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_224.setTransform(0,-37.75);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF6D00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_225.setTransform(0,-37.75);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF7500").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_226.setTransform(0,-37.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF7C00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_227.setTransform(0,-37.75);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF8300").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_228.setTransform(0,-37.75);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF8A00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_229.setTransform(0,-37.75);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF9200").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_230.setTransform(0,-37.75);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF9900").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_231.setTransform(0,-37.75);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFA000").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_232.setTransform(0,-37.75);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFA800").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_233.setTransform(0,-37.75);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFAF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_234.setTransform(0,-37.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFB600").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_235.setTransform(0,-37.75);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFBD00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_236.setTransform(0,-37.75);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFC500").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_237.setTransform(0,-37.75);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFCC00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_238.setTransform(0,-37.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFD300").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_239.setTransform(0,-37.75);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFDB00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_240.setTransform(0,-37.75);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFE200").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_241.setTransform(0,-37.75);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFE900").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_242.setTransform(0,-37.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFF000").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_243.setTransform(0,-37.75);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFF800").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_244.setTransform(0,-37.75);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_245.setTransform(0,-37.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F8FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_246.setTransform(0,-37.75);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F0FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_247.setTransform(0,-37.75);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E9FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_248.setTransform(0,-37.75);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E2FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_249.setTransform(0,-37.75);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#DBFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_250.setTransform(0,-37.75);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D3FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_251.setTransform(0,-37.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#CCFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_252.setTransform(0,-37.75);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C5FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_253.setTransform(0,-37.75);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#BDFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_254.setTransform(0,-37.75);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B6FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_255.setTransform(0,-37.75);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#AFFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_256.setTransform(0,-37.75);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#A8FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_257.setTransform(0,-37.75);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#A0FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_258.setTransform(0,-37.75);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#99FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_259.setTransform(0,-37.75);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#92FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_260.setTransform(0,-37.75);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#8AFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_261.setTransform(0,-37.75);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#83FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_262.setTransform(0,-37.75);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#7CFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_263.setTransform(0,-37.75);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#75FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_264.setTransform(0,-37.75);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#6DFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_265.setTransform(0,-37.75);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#66FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_266.setTransform(0,-37.75);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#5FFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_267.setTransform(0,-37.75);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#57FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_268.setTransform(0,-37.75);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#50FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_269.setTransform(0,-37.75);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#49FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_270.setTransform(0,-37.75);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#42FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_271.setTransform(0,-37.75);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#3AFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_272.setTransform(0,-37.75);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#33FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_273.setTransform(0,-37.75);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#2CFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_274.setTransform(0,-37.75);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#24FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_275.setTransform(0,-37.75);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#1DFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_276.setTransform(0,-37.75);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#16FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_277.setTransform(0,-37.75);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0FFF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_278.setTransform(0,-37.75);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#07FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_279.setTransform(0,-37.75);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00FF00").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_280.setTransform(0,-37.75);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00FF07").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_281.setTransform(0,-37.75);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00FF0F").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_282.setTransform(0,-37.75);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00FF16").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_283.setTransform(0,-37.75);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00FF1D").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_284.setTransform(0,-37.75);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00FF24").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_285.setTransform(0,-37.75);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00FF2C").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_286.setTransform(0,-37.75);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00FF33").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_287.setTransform(0,-37.75);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00FF3A").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_288.setTransform(0,-37.75);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00FF42").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_289.setTransform(0,-37.75);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00FF49").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_290.setTransform(0,-37.75);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00FF50").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_291.setTransform(0,-37.75);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00FF57").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_292.setTransform(0,-37.75);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00FF5F").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_293.setTransform(0,-37.75);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00FF66").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_294.setTransform(0,-37.75);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00FF6D").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_295.setTransform(0,-37.75);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00FF75").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_296.setTransform(0,-37.75);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00FF7C").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_297.setTransform(0,-37.75);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00FF83").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_298.setTransform(0,-37.75);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00FF8A").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_299.setTransform(0,-37.75);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00FF92").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_300.setTransform(0,-37.75);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00FF99").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_301.setTransform(0,-37.75);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00FFA0").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_302.setTransform(0,-37.75);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00FFA8").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_303.setTransform(0,-37.75);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00FFAF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_304.setTransform(0,-37.75);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00FFB6").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_305.setTransform(0,-37.75);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00FFBD").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_306.setTransform(0,-37.75);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00FFC5").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_307.setTransform(0,-37.75);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00FFCC").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_308.setTransform(0,-37.75);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00FFD3").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_309.setTransform(0,-37.75);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00FFDB").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_310.setTransform(0,-37.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00FFE2").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_311.setTransform(0,-37.75);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00FFE9").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_312.setTransform(0,-37.75);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00FFF0").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_313.setTransform(0,-37.75);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00FFF8").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_314.setTransform(0,-37.75);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00FFFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_315.setTransform(0,-37.75);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00FCFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_316.setTransform(0,-37.75);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00F9FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_317.setTransform(0,-37.75);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00F6FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_318.setTransform(0,-37.75);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00F3FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_319.setTransform(0,-37.75);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00F0FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_320.setTransform(0,-37.75);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00EEFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_321.setTransform(0,-37.75);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00EBFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_322.setTransform(0,-37.75);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00E8FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_323.setTransform(0,-37.75);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00E5FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_324.setTransform(0,-37.75);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00E2FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_325.setTransform(0,-37.75);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00DFFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_326.setTransform(0,-37.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00DCFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_327.setTransform(0,-37.75);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00D9FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_328.setTransform(0,-37.75);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00D6FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_329.setTransform(0,-37.75);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00D3FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_330.setTransform(0,-37.75);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00D0FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_331.setTransform(0,-37.75);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00CDFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_332.setTransform(0,-37.75);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00CBFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_333.setTransform(0,-37.75);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00C8FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_334.setTransform(0,-37.75);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00C5FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_335.setTransform(0,-37.75);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00C2FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_336.setTransform(0,-37.75);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00BFFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_337.setTransform(0,-37.75);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00BCFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_338.setTransform(0,-37.75);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00B9FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_339.setTransform(0,-37.75);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00B6FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_340.setTransform(0,-37.75);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00B3FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_341.setTransform(0,-37.75);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00B0FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_342.setTransform(0,-37.75);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00ADFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_343.setTransform(0,-37.75);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00AAFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_344.setTransform(0,-37.75);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00A8FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_345.setTransform(0,-37.75);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00A5FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_346.setTransform(0,-37.75);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00A2FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_347.setTransform(0,-37.75);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#009FFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_348.setTransform(0,-37.75);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#009CFF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_349.setTransform(0,-37.75);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#0099FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_350.setTransform(0,-37.75);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0799FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_351.setTransform(0,-37.75);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#0F99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_352.setTransform(0,-37.75);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#1699FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_353.setTransform(0,-37.75);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#1D99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_354.setTransform(0,-37.75);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#2499FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_355.setTransform(0,-37.75);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#2C99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_356.setTransform(0,-37.75);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3399FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_357.setTransform(0,-37.75);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#3A99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_358.setTransform(0,-37.75);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4299FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_359.setTransform(0,-37.75);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#4999FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_360.setTransform(0,-37.75);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#5099FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_361.setTransform(0,-37.75);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#5799FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_362.setTransform(0,-37.75);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#5F99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_363.setTransform(0,-37.75);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#6699FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_364.setTransform(0,-37.75);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#6D99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_365.setTransform(0,-37.75);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#7599FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_366.setTransform(0,-37.75);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#7C99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_367.setTransform(0,-37.75);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#8399FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_368.setTransform(0,-37.75);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#8A99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_369.setTransform(0,-37.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#9299FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_370.setTransform(0,-37.75);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#9999FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_371.setTransform(0,-37.75);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#A099FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_372.setTransform(0,-37.75);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#A899FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_373.setTransform(0,-37.75);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#AF99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_374.setTransform(0,-37.75);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#B699FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_375.setTransform(0,-37.75);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#BD99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_376.setTransform(0,-37.75);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#C599FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_377.setTransform(0,-37.75);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#CC99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_378.setTransform(0,-37.75);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#D399FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_379.setTransform(0,-37.75);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#DB99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_380.setTransform(0,-37.75);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E299FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_381.setTransform(0,-37.75);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#E999FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_382.setTransform(0,-37.75);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#F099FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_383.setTransform(0,-37.75);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#F899FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_384.setTransform(0,-37.75);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FF99FF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_385.setTransform(0,-37.75);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF95F8").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_386.setTransform(0,-37.75);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FF90F0").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_387.setTransform(0,-37.75);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF8CE9").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_388.setTransform(0,-37.75);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF88E2").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_389.setTransform(0,-37.75);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF83DB").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_390.setTransform(0,-37.75);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF7FD3").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_391.setTransform(0,-37.75);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF7ACC").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_392.setTransform(0,-37.75);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FF76C5").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_393.setTransform(0,-37.75);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF72BD").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_394.setTransform(0,-37.75);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FF6DB6").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_395.setTransform(0,-37.75);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF69AF").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_396.setTransform(0,-37.75);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FF65A8").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_397.setTransform(0,-37.75);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF60A0").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_398.setTransform(0,-37.75);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FF5C99").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_399.setTransform(0,-37.75);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF5792").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_400.setTransform(0,-37.75);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FF538A").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_401.setTransform(0,-37.75);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF4F83").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_402.setTransform(0,-37.75);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF4A7C").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_403.setTransform(0,-37.75);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF4675").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_404.setTransform(0,-37.75);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FF426D").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_405.setTransform(0,-37.75);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF3D66").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_406.setTransform(0,-37.75);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FF395F").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_407.setTransform(0,-37.75);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FF3457").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_408.setTransform(0,-37.75);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FF3050").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_409.setTransform(0,-37.75);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FF2C49").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_410.setTransform(0,-37.75);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FF2742").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_411.setTransform(0,-37.75);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FF233A").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_412.setTransform(0,-37.75);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FF1F33").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_413.setTransform(0,-37.75);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FF1A2C").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_414.setTransform(0,-37.75);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FF1624").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_415.setTransform(0,-37.75);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FF111D").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_416.setTransform(0,-37.75);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FF0D16").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_417.setTransform(0,-37.75);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FF090F").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_418.setTransform(0,-37.75);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FF0407").s().p("APbLSImIjqIHQnQIOdEjInRHSgA4+HoIHQnQIE4g7IigKdgAqhHoIHQnQIE3g7IC9KFgA+/k7IHRnRMAi3AAAInRHRIoUBYg");
	this.shape_419.setTransform(0,-37.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210}]}).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_210}]},1).wait(1));

	// Color_3
	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#810000").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_420.setTransform(10.4,0);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#830401").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_421.setTransform(10.4,0);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#840802").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_422.setTransform(10.4,0);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#860B04").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_423.setTransform(10.4,0);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#870F05").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_424.setTransform(10.4,0);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#891306").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_425.setTransform(10.4,0);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#8A1707").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_426.setTransform(10.4,0);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#8C1A09").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_427.setTransform(10.4,0);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#8D1E0A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_428.setTransform(10.4,0);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#8F220B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_429.setTransform(10.4,0);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#90260C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_430.setTransform(10.4,0);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#92290E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_431.setTransform(10.4,0);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#942D0F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_432.setTransform(10.4,0);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#953110").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_433.setTransform(10.4,0);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#973511").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_434.setTransform(10.4,0);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#983912").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_435.setTransform(10.4,0);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#9A3C14").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_436.setTransform(10.4,0);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#9B4015").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_437.setTransform(10.4,0);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#9D4416").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_438.setTransform(10.4,0);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#9E4817").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_439.setTransform(10.4,0);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#A04B19").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_440.setTransform(10.4,0);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A14F1A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_441.setTransform(10.4,0);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#A3531B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_442.setTransform(10.4,0);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#A4571C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_443.setTransform(10.4,0);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#A65B1D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_444.setTransform(10.4,0);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#A85E1F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_445.setTransform(10.4,0);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#A96220").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_446.setTransform(10.4,0);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#AB6621").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_447.setTransform(10.4,0);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#AC6A22").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_448.setTransform(10.4,0);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#AE6D24").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_449.setTransform(10.4,0);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#AF7125").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_450.setTransform(10.4,0);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#B17526").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_451.setTransform(10.4,0);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#B27927").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_452.setTransform(10.4,0);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#B47C29").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_453.setTransform(10.4,0);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#B5802A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_454.setTransform(10.4,0);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#B7842B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_455.setTransform(10.4,0);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#B2832A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_456.setTransform(10.4,0);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#AD8129").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_457.setTransform(10.4,0);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#A78027").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_458.setTransform(10.4,0);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#A27F26").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_459.setTransform(10.4,0);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#9D7E25").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_460.setTransform(10.4,0);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#987C24").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_461.setTransform(10.4,0);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#927B22").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_462.setTransform(10.4,0);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#8D7A21").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_463.setTransform(10.4,0);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#887820").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_464.setTransform(10.4,0);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#83771F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_465.setTransform(10.4,0);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#7D761D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_466.setTransform(10.4,0);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#78751C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_467.setTransform(10.4,0);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#73731B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_468.setTransform(10.4,0);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#6E721A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_469.setTransform(10.4,0);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#697119").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_470.setTransform(10.4,0);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#636F17").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_471.setTransform(10.4,0);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#5E6E16").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_472.setTransform(10.4,0);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#596D15").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_473.setTransform(10.4,0);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#546C14").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_474.setTransform(10.4,0);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#4E6A12").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_475.setTransform(10.4,0);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#496911").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_476.setTransform(10.4,0);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#446810").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_477.setTransform(10.4,0);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#3F660F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_478.setTransform(10.4,0);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#3A650E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_479.setTransform(10.4,0);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#34640C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_480.setTransform(10.4,0);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#2F630B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_481.setTransform(10.4,0);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#2A610A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_482.setTransform(10.4,0);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#256009").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_483.setTransform(10.4,0);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#1F5F07").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_484.setTransform(10.4,0);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#1A5D06").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_485.setTransform(10.4,0);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#155C05").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_486.setTransform(10.4,0);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#105B04").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_487.setTransform(10.4,0);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#0A5A02").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_488.setTransform(10.4,0);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#055801").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_489.setTransform(10.4,0);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#005700").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_490.setTransform(10.4,0);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#005803").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_491.setTransform(10.4,0);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#005806").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_492.setTransform(10.4,0);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#005909").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_493.setTransform(10.4,0);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#005A0C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_494.setTransform(10.4,0);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#005A10").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_495.setTransform(10.4,0);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#005B13").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_496.setTransform(10.4,0);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#005B16").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_497.setTransform(10.4,0);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#005C19").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_498.setTransform(10.4,0);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#005D1C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_499.setTransform(10.4,0);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#005D1F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_500.setTransform(10.4,0);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#005E22").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_501.setTransform(10.4,0);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#005F25").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_502.setTransform(10.4,0);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#005F28").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_503.setTransform(10.4,0);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#00602C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_504.setTransform(10.4,0);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#00602F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_505.setTransform(10.4,0);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#006132").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_506.setTransform(10.4,0);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#006235").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_507.setTransform(10.4,0);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#006238").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_508.setTransform(10.4,0);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#00633B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_509.setTransform(10.4,0);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#00643E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_510.setTransform(10.4,0);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#006441").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_511.setTransform(10.4,0);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#006545").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_512.setTransform(10.4,0);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#006548").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_513.setTransform(10.4,0);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#00664B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_514.setTransform(10.4,0);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#00674E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_515.setTransform(10.4,0);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#006751").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_516.setTransform(10.4,0);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#006854").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_517.setTransform(10.4,0);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#006957").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_518.setTransform(10.4,0);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#00695A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_519.setTransform(10.4,0);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#006A5D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_520.setTransform(10.4,0);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#006A61").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_521.setTransform(10.4,0);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#006B64").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_522.setTransform(10.4,0);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#006C67").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_523.setTransform(10.4,0);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#006C6A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_524.setTransform(10.4,0);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#006D6D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_525.setTransform(10.4,0);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#006A6E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_526.setTransform(10.4,0);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#00676F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_527.setTransform(10.4,0);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#006470").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_528.setTransform(10.4,0);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#006171").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_529.setTransform(10.4,0);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#005D72").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_530.setTransform(10.4,0);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#005A72").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_531.setTransform(10.4,0);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#005773").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_532.setTransform(10.4,0);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#005474").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_533.setTransform(10.4,0);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#005175").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_534.setTransform(10.4,0);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#004E76").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_535.setTransform(10.4,0);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#004B77").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_536.setTransform(10.4,0);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#004878").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_537.setTransform(10.4,0);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#004579").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_538.setTransform(10.4,0);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#00417A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_539.setTransform(10.4,0);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#003E7B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_540.setTransform(10.4,0);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#003B7C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_541.setTransform(10.4,0);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#00387D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_542.setTransform(10.4,0);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#00357D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_543.setTransform(10.4,0);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#00327E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_544.setTransform(10.4,0);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#002F7F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_545.setTransform(10.4,0);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#002C80").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_546.setTransform(10.4,0);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#002881").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_547.setTransform(10.4,0);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#002582").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_548.setTransform(10.4,0);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#002283").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_549.setTransform(10.4,0);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#001F84").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_550.setTransform(10.4,0);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#001C85").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_551.setTransform(10.4,0);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#001986").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_552.setTransform(10.4,0);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#001687").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_553.setTransform(10.4,0);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#001388").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_554.setTransform(10.4,0);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#001088").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_555.setTransform(10.4,0);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000C89").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_556.setTransform(10.4,0);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#00098A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_557.setTransform(10.4,0);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#00068B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_558.setTransform(10.4,0);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#00038C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_559.setTransform(10.4,0);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#00008D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_560.setTransform(10.4,0);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#05008E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_561.setTransform(10.4,0);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#09008E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_562.setTransform(10.4,0);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#0E008F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_563.setTransform(10.4,0);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#130090").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_564.setTransform(10.4,0);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#180090").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_565.setTransform(10.4,0);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#1C0091").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_566.setTransform(10.4,0);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#210092").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_567.setTransform(10.4,0);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#260092").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_568.setTransform(10.4,0);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#2A0093").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_569.setTransform(10.4,0);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#2F0094").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_570.setTransform(10.4,0);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#340095").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_571.setTransform(10.4,0);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#390095").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_572.setTransform(10.4,0);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#3D0096").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_573.setTransform(10.4,0);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#420097").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_574.setTransform(10.4,0);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#470097").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_575.setTransform(10.4,0);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#4B0098").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_576.setTransform(10.4,0);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#500099").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_577.setTransform(10.4,0);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#550099").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_578.setTransform(10.4,0);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#5A009A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_579.setTransform(10.4,0);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#5E009B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_580.setTransform(10.4,0);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#63009B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_581.setTransform(10.4,0);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#68009C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_582.setTransform(10.4,0);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#6C009D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_583.setTransform(10.4,0);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#71009D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_584.setTransform(10.4,0);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#76009E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_585.setTransform(10.4,0);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#7B009F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_586.setTransform(10.4,0);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#7F00A0").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_587.setTransform(10.4,0);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#8400A0").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_588.setTransform(10.4,0);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#8900A1").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_589.setTransform(10.4,0);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#8D00A2").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_590.setTransform(10.4,0);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#9200A2").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_591.setTransform(10.4,0);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#9700A3").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_592.setTransform(10.4,0);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#9C00A4").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_593.setTransform(10.4,0);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#A000A4").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_594.setTransform(10.4,0);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#A500A5").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_595.setTransform(10.4,0);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#A400A0").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_596.setTransform(10.4,0);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#A3009C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_597.setTransform(10.4,0);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#A20097").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_598.setTransform(10.4,0);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#A10092").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_599.setTransform(10.4,0);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#A0008D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_600.setTransform(10.4,0);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#9F0089").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_601.setTransform(10.4,0);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#9E0084").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_602.setTransform(10.4,0);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#9D007F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_603.setTransform(10.4,0);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#9C007B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_604.setTransform(10.4,0);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#9B0076").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_605.setTransform(10.4,0);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#9A0071").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_606.setTransform(10.4,0);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#99006C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_607.setTransform(10.4,0);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#980068").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_608.setTransform(10.4,0);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#970063").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_609.setTransform(10.4,0);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#96005E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_610.setTransform(10.4,0);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#95005A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_611.setTransform(10.4,0);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#940055").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_612.setTransform(10.4,0);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#920050").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_613.setTransform(10.4,0);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#91004B").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_614.setTransform(10.4,0);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#900047").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_615.setTransform(10.4,0);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#8F0042").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_616.setTransform(10.4,0);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#8E003D").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_617.setTransform(10.4,0);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#8D0039").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_618.setTransform(10.4,0);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#8C0034").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_619.setTransform(10.4,0);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#8B002F").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_620.setTransform(10.4,0);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#8A002A").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_621.setTransform(10.4,0);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#890026").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_622.setTransform(10.4,0);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#880021").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_623.setTransform(10.4,0);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#87001C").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_624.setTransform(10.4,0);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#860018").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_625.setTransform(10.4,0);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#850013").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_626.setTransform(10.4,0);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#84000E").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_627.setTransform(10.4,0);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#830009").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_628.setTransform(10.4,0);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#820005").s().p("ATIEBIKQk+IAALzInRHQgAgmsaIKHlrIFaMkIn0KGgAp9m8IIDAAIqPIrgA9Xn6INBA+IqQIrg");
	this.shape_629.setTransform(10.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_420}]}).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_420}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-115.8,396.8,231.6);


(lib.Background_Color = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background_Color, new cjs.Rectangle(-540,-540,1080,1080), null);


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

	// Color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0704FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E09FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#160DFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D11FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2416FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B1AFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#321FFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3923FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4127FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#482CFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F30FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5634FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D39FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#643DFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C42FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7346FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7A4AFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#814FFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8853FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8F57FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#975CFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9E60FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A565FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AC69FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B36DFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA72FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C276FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C97AFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D07FFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D783FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DE88FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E58CFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ED90FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F495FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FB99FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FB95F8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FB91F0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FB8DE9").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FB89E2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FB86DB").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FB82D3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FB7ECC").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FB7AC5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FB76BD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FB72B6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FB6EAF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FB6AA8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FB66A0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FB6399").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FB5F92").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FB5B8A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FB5783").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FA537C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FA4F75").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FA4B6D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FA4766").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FA445F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FA4057").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FA3C50").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FA3849").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FA3442").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FA303A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FA2C33").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FA282C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FA2424").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FA211D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FA1D16").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FA190F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FA1507").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FA1100").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FA1800").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FA1F00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FA2500").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FB2C00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FB3300").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FB3A00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FB4100").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FB4700").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FB4E00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FB5500").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FC5C00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FC6300").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FC6900").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FC7000").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FC7700").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FC7E00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FC8500").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FD8B01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FD9201").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FD9901").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FDA001").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FDA701").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FDAD01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FDB401").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FEBB01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FEC201").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEC901").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FECF01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FED601").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEDD01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FEE401").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFEB01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFF101").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFF801").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFF01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F9FC01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F2F801").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#ECF501").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E5F201").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DFEF01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D8EB01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D2E801").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CCE501").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C5E201").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BFDE01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B8DB01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B2D801").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#ABD501").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A5D101").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9FCE01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#98CB01").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#92C801").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8BC400").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#85C100").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7EBE00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#78BB00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#72B700").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6BB400").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#65B100").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5EAE00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#58AA00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#51A700").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4BA400").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#45A100").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3E9D00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#389A00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#319700").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#2B9400").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#249000").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1E8D00").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1F9007").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#20930F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#219716").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#229A1D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#239D24").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#23A02C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#24A433").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#25A73A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#26AA42").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#27AD49").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#28B150").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#29B457").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2AB75F").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2BBA66").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2CBD6D").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2DC175").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2EC47C").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#2EC783").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2FCA8A").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#30CE92").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#31D199").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#32D4A0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#33D7A8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#34DAAF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#35DEB6").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#36E1BD").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#37E4C5").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#38E7CC").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#39EBD3").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#39EEDB").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3AF1E2").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3BF4E9").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3CF8F0").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3DFBF8").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3EFEFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3CF7FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3AEFFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#39E8FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#37E1FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#35DAFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#33D2FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#32CBFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#30C4FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#2EBDFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#2CB5FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#2BAEFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#29A7FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#27A0FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#2598FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#2391FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#228AFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#2083FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#1E7BFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#1C74FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#1B6DFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#1966FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#175EFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#1557FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#1350FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#1249FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#1041FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#0E3AFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0C33FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0B2CFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0924FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#071DFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0516FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#040FFF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0207FF").s().p("EhUXBUYMAAAiovMCovAAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-540,1080,1080);


(lib.Car_3 = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(35).call(this.frame_105).wait(35).call(this.frame_140).wait(35).call(this.frame_175).wait(36));

	// Wheel_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADgg");
	this.shape.setTransform(-342.725,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFVAAIAAh1IAAjgIjhAAIh0AAg");
	this.shape_1.setTransform(-348.525,85.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDgAAIAAB0gAoei2IDojoINVAAIjoDog");
	this.shape_2.setTransform(-336.9,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC3k2IDojoIAANUIjoDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_3.setTransform(-324.1,74);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyBwIACjiIDjADIgDDig");
	this.shape_4.setTransform(-341.675,79.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AmvGoIAKtaINUALIgJNagAisCpIFVAFIABh1IADjiIjigDIhzgBg");
	this.shape_5.setTransform(-347.5,85.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AklGgIB1h0IDiADIgCB1gAoei7IDpjoINUALIjoDng");
	this.shape_6.setTransform(-335.425,60.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AC6k5IDojnIgJNZIjoDogAmdg+IByABIgCDhIh0B0g");
	this.shape_7.setTransform(-322.975,74.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4BpIALjdIDmAMIgLDcg");
	this.shape_8.setTransform(-338.35,79.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Am+GXIAqtYINTArIgqNZgAiyCjIFVASIAFh6IALjcIjmgMIhugGg");
	this.shape_9.setTransform(-344.15,85.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("Ak7GeIB0h0IDmALIgGB6gAodjHIDojnINTArIjoDog");
	this.shape_10.setTransform(-330.425,60.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ADFk4IDojoIgqNZIjoDogAmchVIBvAGIgLDcIh0B0g");
	this.shape_11.setTransform(-319.125,75.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiCBdIAAAAIAYjUIDtAbIgYDUg");
	this.shape_12.setTransform(-332.775,79.5625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AnWF7IBetVINQBhIhgNUgAi8CYIFTAmIAOh/IAYjVIjtgbIhmgMg");
	this.shape_13.setTransform(-338.6,85.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B5B5B").s().p("AlgGaIB1h0IAAAAIDtAbIgOB/gAobjYIDojnINPBgIjoDog");
	this.shape_14.setTransform(-322.225,59.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADWk2IDojnIhfNUIjoDngAmYh6IBnAMIgYDVIh0B0g");
	this.shape_15.setTransform(-312.85,78.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiOBMIAAAAIAojJID1AyIgoDJg");
	this.shape_16.setTransform(-325.075,79.5625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("An2FPICptIINECqIipNJgAjJCGIFPBEIAbiGIAojJIj0gzIhagSg");
	this.shape_17.setTransform(-330.9,85.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#575757").s().p("AmRGSIB1h0IAAAAID1AyIgbCGgAoWjtIDpjoINDCrIjoDng");
	this.shape_18.setTransform(-310.85,58.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ADskwIDojoIipNJIjoDogAmQirIBaASIgpDJIh0B0g");
	this.shape_19.setTransform(-304.225,82.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AicA1IA8i7ID9BSIg8C7g");
	this.shape_20.setTransform(-315.325,79.5875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AoXEVIEEswIMsEHIkFMwgAjWBvIFFBpIAsiLIA8i7Ij9hSIhIgXg");
	this.shape_21.setTransform(-321.15,85.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#515151").s().p("AnMGFIB0h0ID+BSIgsCLgAoJkFIDojoIMrEHIjoDng");
	this.shape_22.setTransform(-296.525,57.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AEEkkIDojoIkEMxIjoDogAmDjnIBIAYIg7C7Ih1Bzg");
	this.shape_23.setTransform(-293.475,86.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AioAXIAAAAIBQipIECB8IhRCpg");
	this.shape_24.setTransform(-303.55,79.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ao4DLIFvsGIMBFxIltMGgAjjBRIE0CUIBCiMIBRipIkCh8IgygYg");
	this.shape_25.setTransform(-309.35,85.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#474747").s().p("AoBFwIB0h0IAAABIECB8IhCCMgAnokbIDojpIMCFyIjoDng");
	this.shape_26.setTransform(-280.675,56.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AEakPIDojnIluMGIjnDngAlvkpIAyAYIhQCqIh0Bzg");
	this.shape_27.setTransform(-280.675,92.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiygMIgBAAIBmiWIEBCvIhmCWg");
	this.shape_28.setTransform(-289.85,79.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjtAtIEaDCIBbiGIBmiVIkBiwIgZgSg");
	this.shape_29.setTransform(-295.65,85.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3A3A").s().p("AoSFTIB0h0IEBCxIhbCGgAmVktIDpjoIK/HlIjoDng");
	this.shape_30.setTransform(-266.275,55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AErjuIDojnInhLDIjnDogAlSlsIAaARIhmCWIAAAAIh0B0g");
	this.shape_31.setTransform(-266.275,98.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai3g3IB9h/IDxDuIh8B/g");
	this.shape_32.setTransform(-274.3,79.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("ApbAGIJWpkIJgJZInhHwIh0B0gAi3g3Ig6A5ID0DxIByh2IB8h+IjxjvIgCgCg");
	this.shape_33.setTransform(-280.1,85.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#292929").s().p("AoaEsIA6g6IA6g6IDzDwIhyB1gAkvk0IDpjoIJhJYIh0B1Ih1Bzg");
	this.shape_34.setTransform(-250.375,55.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AFPiBIB1hzInhHvIh1B0gAkOluIABACIh8B/Ig6A6g");
	this.shape_35.setTransform(-253.2625,97.7125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiihNICVhnICwECIiUBmIgBABg");
	this.shape_36.setTransform(-257.15,79.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("ApQhvIK+nlIHkLEIq/HlgAhoiHIiFBbIDCEbIEYjCIgQgZIixkCg");
	this.shape_37.setTransform(-262.95,85.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#454545").s().p("ADGGhICUhmIARAZIkaDBgAjrgvIK/nlIjoDnIq/Hkg");
	this.shape_38.setTransform(-275.5,55.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#181818").s().p("AoTD6ICFhbICxECIABAAIh1B0gAi3ktIDojnIHjLCIjoDog");
	this.shape_39.setTransform(-233.55,55.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiMhdICvhIIBqEDIivBIg");
	this.shape_40.setTransform(-238.425,79.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AosjqIMVlFIFEMaIsVFFgAhSiXIiMA6ICCE9IE7iCIgYg6IhqkDg");
	this.shape_41.setTransform(-244.2,85.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#545454").s().p("ABFGIICwhIIAYA6Ik7CCgAkWi2IMVlFIjoDoIsVFEg");
	this.shape_42.setTransform(-248.8,56.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#090909").s().p("AgxkZIDnjnIFEMaIjoDngAn5C4ICMg5IBqEDIh0B0g");
	this.shape_43.setTransform(-215.9,57.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ah6hpIDNghIAnD0IjMAhg");
	this.shape_44.setTransform(-218.275,79.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AnpljINKiIICJNOItKCJgAhAijIiDAVIA3FTIFQg2IgQhfIgnj0g");
	this.shape_45.setTransform(-224.075,85.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5D5D5D").s().p("AhHFYIDMghIAPBfIlPA2gAkwlDINKiIIjoDoItLCIg");
	this.shape_46.setTransform(-219.3,59);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#010101").s().p("ABakyIDojoICJNOIjpDogAnKAqICDgVIAoD0Ih0B0g");
	this.shape_47.setTransform(-197.75,66.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ah9BjIAAAAIASjZIDpATIgSDag");
	this.shape_48.setTransform(-196.925,79.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AnLGIIBFtWINSBGIhFNXgAi3CdIFTAcIAKh8IASjaIjpgTIhqgJg");
	this.shape_49.setTransform(-202.725,85.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5C5C5C").s().p("AlNGcIB0h0IAAAAIDpATIgKB9gAodjPIDpjoINSBGIjpDog");
	this.shape_50.setTransform(-187.675,59.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ADNk3IDpjoIhFNXIjoDogAmZhoIBqAJIgSDZIh0B0g");
	this.shape_51.setTransform(-177.3,77.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AieAwIAAAAIBAi4ID9BZIhAC4g");
	this.shape_52.setTransform(-174.475,79.5375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AoeEIIEYsqIMlEcIkYMpgAjYBqIFBBxIAwiMIBAi4Ij9hZIhEgYg");
	this.shape_53.setTransform(-180.275,85.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4F4F4F").s().p("AnYGBIB0h0ID+BaIgwCMgAoHkKIDpjoIMmEbIjpDng");
	this.shape_54.setTransform(-154.65,57.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AEIkgIDpjoIkZMpIjnDogAmAjzIBFAXIhBC5IABAAIh0Bzg");
	this.shape_55.setTransform(-152.35,87.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhmCWg");
	this.shape_56.setTransform(-151.225,79.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEZDCIBaiGIBmiVIj/iwIgagSg");
	this.shape_57.setTransform(-157.025,85.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A3A3A").s().p("AoSFUIB0h0IEACwIhaCFgAmVktIDojnILAHlIjoDmg");
	this.shape_58.setTransform(-127.625,55.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AErjtIDojoInhLDIjnDogAlSlsIAaARIhmCWIh0B0g");
	this.shape_59.setTransform(-127.625,98);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AithDICJh0IDSD7IiJB0g");
	this.shape_60.setTransform(-127.175,79.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("ApYgzIKLopIInKRIqMIogAhzh9Ih9BpIDcEGIEFjdIgJgLIjTj7g");
	this.shape_61.setTransform(-133,85.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#212121").s().p("AoYEVIB9hqIDTD8Ih0B0gAj0kzIDojoIIlKRIjoDog");
	this.shape_62.setTransform(-103.35,55.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D3D3D").s().p("AD+GnICJh0IAJALIkGDdgAjRANIKLooIjoDoIqLIog");
	this.shape_63.setTransform(-148.9,55.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgbCpIh0kEICrhNIB0EEIirBNg");
	this.shape_64.setTransform(-102.675,79.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AozjXIMJlgIFeMPIsJFfgAhViUIiMA/ICME4IE3iMIgYg1Ih0kEg");
	this.shape_65.setTransform(-108.475,85.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#525252").s().p("ABZGNIAAABICshOIAYA1Ik3CMgAkQigIMJlgIjoDnIsJFfg");
	this.shape_66.setTransform(-114.4,56.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0B0B0B").s().p("An+DIICMg/IB0EEIh0B0gAhGkZIDnjnIFeMPIjoDng");
	this.shape_67.setTransform(-79.975,56.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhWCIIgijxIDPgeIAiDxIjPAeg");
	this.shape_68.setTransform(-77.8875,79.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AnilrINMh6IB5NSItMB4gAg+ijIiDASIAxFUIFRgxIgOhhIgijyg");
	this.shape_69.setTransform(-83.7,85.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5D5D5D").s().p("AhTFUIDPgeIAOBhIlRAxgAkxlOINLh5IjoDoItMB5g");
	this.shape_70.setTransform(-78.15,59.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("ABlk1IDojnIB5NRIjoDogAnFAeICCgSIAiDzIABAAIh1B0g");
	this.shape_71.setTransform(-57.625,67.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AiGBYIAAAAIAdjRIDwAiIgdDRg");
	this.shape_72.setTransform(-53.05,79.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AnhFtIB3tSINMB5Ih3NRgAjACSIFSAwIASiCIAdjRIjwgiIhigOg");
	this.shape_73.setTransform(-58.85,85.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5A5A5A").s().p("AlvGYIB0h1IDwAjIgSCBgAoZjfIDojoINLB5IjnDng");
	this.shape_74.setTransform(-41.3,59.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ADek1IDnjnIh2NRIjpDogAmViKIBiAPIgdDQIAAAAIh0B1g");
	this.shape_75.setTransform(-32.8,79.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AinAcIBNisIECB1IhNCsg");
	this.shape_76.setTransform(-28.225,79.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AozDYIFdsPIMKFgIldMOgAjhBXIE3CMIA/iMIBNisIkCh0Ig2gZg");
	this.shape_77.setTransform(-34.025,85.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#494949").s().p("An+F1IB0h1IEDB1Ig/CMgAnzkZIDojnIMKFfIjoDng");
	this.shape_78.setTransform(-5.525,56.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AEXkTIDojoIldMPIjnDogAlzkeIA2AZIhNCtIh0Bzg");
	this.shape_79.setTransform(-5.525,91.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ai2gkIBziKID6DTIhzCKg");
	this.shape_80.setTransform(-3.725,79.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("ArMCoIIkqQIDnjoIKOIoIjoDnIojKSgAAKDoIBziJIj6jTIgLgJIjcEGIB0h0g");
	this.shape_81.setTransform(2.075,73.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AExjUIDojoIojKRIjoDogAk8mRIALAJIhzCKIh0B0g");
	this.shape_82.setTransform(20.1,101.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAOC1IiwkDICVhmICwECIiVBng");
	this.shape_83.setTransform(20.2125,79.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("ApQhvIK3nfIAIgGIHiLEIq/HlgAhoiHIiFBbIDCEbIEYjCIgQgYIixkDg");
	this.shape_84.setTransform(14.425,85.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#454545").s().p("ADFGiIABAAICUhnIARAZIkaDBgAjrgvIK/nlIjwDsIq3Hfg");
	this.shape_85.setTransform(1.9,55.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#181818").s().p("AoTD6ICGhcICwEEIh0BzgAi2ktIgIAFIDvjsIHiLDIjoDng");
	this.shape_86.setTransform(43.8,55.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AiHhgIC1hAIBaEBIi1BAg");
	this.shape_87.setTransform(43.5125,79.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AofkGIMlkcIEaMqIslEbgAhOiaIiLAxIByFEIFBhxIgYhDIhakBg");
	this.shape_88.setTransform(37.725,85.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#575757").s().p("AAlF/IC2hAIAYBCIlBBygAkdjXIMkkbIjoDoIslEag");
	this.shape_89.setTransform(35.2,57.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#070707").s().p("AgQkgIDnjoIEaMpIjoDogAnwCYICLgyIBaEDIh0B0g");
	this.shape_90.setTransform(65.65,59.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ah1htIDXgSIATDtIjWASg");
	this.shape_91.setTransform(65.975,79.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AnMmIINShGIBHNWItSBHgAg7inIh8AKIAcFWIFTgcIgJhpIgTjtg");
	this.shape_92.setTransform(60.2,85.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5E5E5E").s().p("Ah4FEIDXgSIAIBqIlSAcgAk1lxINThGIjpDoItRBGg");
	this.shape_93.setTransform(68.25,59.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("ACHk3IDpjoIBHNXIjoDogAm2gFIB9gLIAUDtIh0B0g");
	this.shape_94.setTransform(85.625,70.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AiIBVIAgjPIDxAmIggDPg");
	this.shape_95.setTransform(87.35,79.55);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AnoFjICGtOINLCIIiHNPgAjCCPIFPA2IAWiEIAgjPIjxgmIhegQg");
	this.shape_96.setTransform(81.55,85.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#595959").s().p("Al6GWIB0h0IDyAnIgVCDgAoZjjIDpjoINKCIIjoDog");
	this.shape_97.setTransform(99.875,59);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("ADikzIDojoIiHNOIjoDpgAmTiVIBfAQIghDPIh0B0g");
	this.shape_98.setTransform(107.825,80.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AijAkIAAAAIBIixID/BpIhICyg");
	this.shape_99.setTransform(107.5,79.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AorDrIFCsaIMVFFIlBMagAjdBeIE7CCIA4iMIBJixIkAhpIg8gZg");
	this.shape_100.setTransform(101.675,85.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4C4C4C").s().p("AnyF6IB0h0IEABqIg4CMgAn/kTIDojoIMWFFIjoDng");
	this.shape_101.setTransform(129.4,56.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AERkZIDojnIlCMaIjmDngAl4kOIA8AZIhICyIAAAAIh0Bzg");
	this.shape_102.setTransform(130,90);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AiygMIABgBIBliVID/CvIhmCWg");
	this.shape_103.setTransform(126.2,79.5375);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("ApQBwIHhrEILAHmInhLDgAjsAtIEYDCIBbiFIBmiWIj/iwIgagSg");
	this.shape_104.setTransform(120.4,85.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3A3A3A").s().p("AoSFUIB1h1IgBABIEACwIhbCFgAmVktIDojnILAHlIjoDmg");
	this.shape_105.setTransform(149.8,55.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AErjtIDojoIngLEIjoDngAlSlsIAaARIhlCWIh1B0g");
	this.shape_106.setTransform(149.8,98);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ai2g6IB/h+IDuD0IgPAPIgIAHIhoBng");
	this.shape_107.setTransform(143.35,79.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("ApagFIJ9owIgegpIJXJkIpgJZgAh8h0Ih0BzIDvD0IDMjMIAnglIgBgBIjvjzg");
	this.shape_108.setTransform(137.55,85.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#282828").s().p("AoZEoIB0hzIDvD0IBohnIgBACIgOANIjNDMgAkjk0IAOgPIDajZIJWJkIjoDog");
	this.shape_109.setTransform(167.25,55.55);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#363636").s().p("AGOE9IAJgJIAPgPIABAAIgnAmgADIlKIgOAPIAeApIp9Ivg");
	this.shape_110.setTransform(119.45,56.2375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AiihNICWhnICvECIiVBng");
	this.shape_111.setTransform(158.9,79.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("ApQhvIK/nlIHjLEIrAHlgAhoiGIiFBbIDCEaIEYjCIgQgZIiwkBg");
	this.shape_112.setTransform(153.1,85.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#181818").s().p("AoTD7ICFhcICxEDIh0BzgAi2ktIDnjnIHiLEIjnDng");
	this.shape_113.setTransform(182.5,55.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#454545").s().p("ADFGiICVhnIARAZIkaDBgAjrgwIK/nkIjoDnIq/Hkg");
	this.shape_114.setTransform(140.55,55.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AiRhZICnhRIB8EEIioBRg");
	this.shape_115.setTransform(172.625,79.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("Ao4jKIMAlyIFxMHIsBFxgAhXiTIiMBDICUE1IEziUIgXgxIh8kEg");
	this.shape_116.setTransform(166.8,85.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#515151").s().p("ABoGRICphSIAXAxIkzCVgAkMiSIMBlyIjpDoIsAFxg");
	this.shape_117.setTransform(160,56.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0D0D0D").s().p("AoCDOICMhCIB8EFIh0B0gAhVkcIDnjoIFxMHIjpDog");
	this.shape_118.setTransform(195.475,56.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgzCeIhSj/IC5g8IBSD/Ii5A8g");
	this.shape_119.setTransform(184.4,79.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AoYkVIMrkGIEGMxIsrEGgAhMibIiKAtIBpFGIFEhpIgXhHIhSj/g");
	this.shape_120.setTransform(178.625,85.35);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#585858").s().p("AAVF6IC6g8IAXBHIlEBpgAkhjmIMrkHIjoDoIsrEFg");
	this.shape_121.setTransform(177.1,57.55);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#050505").s().p("AgBkkIDnjoIEGMxIjoDogAnrCIICKgsIBTD/IAAAAIh0B0g");
	this.shape_122.setTransform(206.325,60.625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AhKCQIgzj2IDIgqIAzD4IjIAog");
	this.shape_123.setTransform(194.1625,79.55);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("An3lPINDiqICrNIItDCrgAhCihIiGAcIBEFPIFOhEIgShYIgzj4g");
	this.shape_124.setTransform(188.35,85.375);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5C5C5C").s().p("AguFiIDHgoIASBYIlOBEgAktkqINDirIjoDoItDCqg");
	this.shape_125.setTransform(191.425,58.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#020202").s().p("ABBkwIDpjoICrNJIjpDogAnUBDICGgbIAzD4IAAAAIh0B0g");
	this.shape_126.setTransform(215.075,65.225);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AhbCEIgcjvIDTgYIAcDvIjTAYg");
	this.shape_127.setTransform(201.875,79.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AnYl5INPhhIBhNUItOBhgAg9ilIh/APIAnFUIFTgnIgMhlIgbjvg");
	this.shape_128.setTransform(196.05,85.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#5E5E5E").s().p("AhkFNIDSgYIAMBkIlSAngAkzleINPhhIjoDoItPBgg");
	this.shape_129.setTransform(202.8,59.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AB1k1IDojoIBiNUIjpDngAm+AOIB/gOIAcDvIAAAAIh0Bzg");
	this.shape_130.setTransform(221.85,68.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhnB6IgMjoIDbgLIAMDoIjbALg");
	this.shape_131.setTransform(207.4125,79.575);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("Am/mWINTgrIAsNYItTAsgAg5ioIh5AHIARFWIFUgSIgFhuIgMjog");
	this.shape_132.setTransform(201.6,85.35);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5E5E5E").s().p("AiLE7IAAAAIDbgLIAFBuIlUARgAk1mDINTgrIjoDnItTAsg");
	this.shape_133.setTransform(211,60.275);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("ACak4IDojoIAsNZIjoDogAmtgYIB6gHIAMDoIh1B1g");
	this.shape_134.setTransform(226.65,71.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhuB0IgDjkIDfgDIAEDkIjfADg");
	this.shape_135.setTransform(210.7625,79.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AmvmnINTgLIANNaItVALgAg2iqIh3ABIAFFXIFWgFIgChyIgEjkg");
	this.shape_136.setTransform(204.95,85.375);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#5D5D5D").s().p("AihEwIDfgDIABBzIlVAEgAk2mYINVgLIjpDoItUAKg");
	this.shape_137.setTransform(215.975,60.725);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ACvk4IDojoIAMNaIjoDngAmigvIB2gCIADDkIAAAAIh0B0g");
	this.shape_138.setTransform(229.525,73.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDgAAIAADgg");
	this.shape_139.setTransform(211.95,79.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFUAAIAAh1IAAjgIjgAAIh0AAg");
	this.shape_140.setTransform(206.15,85.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Wheel_1_0
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjoDpg");
	this.shape_141.setTransform(-336.9,74);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AojIcIAKtaIDojoINUALIgJNaIjoDog");
	this.shape_142.setTransform(-335.9,73.775);
	this.shape_142._off = true;

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AoyILIAqtZIDojnINTArIgqNZIjoDng");
	this.shape_143.setTransform(-332.525,73.775);
	this.shape_143._off = true;

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("ApLHuIBftUIDpjoINPBhIhgNUIjoDog");
	this.shape_144.setTransform(-326.975,73.775);
	this.shape_144._off = true;

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("ApqHDICptIIDojoINECrIipNIIjoDog");
	this.shape_145.setTransform(-319.275,73.775);
	this.shape_145._off = true;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AqLGJIEEsxIDojnIMsEHIkEMwIjpDog");
	this.shape_146.setTransform(-309.55,73.8);
	this.shape_146._off = true;

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AqsE/IFusGIDpjoIMCFxIlvMGIjoDog");
	this.shape_147.setTransform(-297.725,73.775);
	this.shape_147._off = true;

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("ArEDkIHhrEIDojoILAHlInhLEIjnDog");
	this.shape_148.setTransform(-284.05,73.8);
	this.shape_148._off = true;

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("ArPB6IJVplIDojnIJiJZIpWJkIjnDog");
	this.shape_149.setTransform(-268.475,73.75);
	this.shape_149._off = true;

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("ArEAEIDojmIK/nlIHjLDIjoDnIq/Hlg");
	this.shape_150.setTransform(-251.35,73.75);
	this.shape_150._off = true;

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("Aqgh2IDojnIMVlFIFEMZIjoDoIsVFFg");
	this.shape_151.setTransform(-232.6,73.75);
	this.shape_151._off = true;

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("ApdjvIDojnINKiJICJNPIjpDnItJCJg");
	this.shape_152.setTransform(-212.45,73.75);
	this.shape_152._off = true;

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("Ao/H8IBFtWIDojoINSBGIhFNXIjoDog");
	this.shape_153.setTransform(-191.1,73.75);
	this.shape_153._off = true;

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AqTF7IEYspIDpjoIMmEcIkZMpIjoDog");
	this.shape_154.setTransform(-168.65,73.75);
	this.shape_154._off = true;

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLCIjnDog");
	this.shape_155.setTransform(-145.425,73.75);
	this.shape_155._off = true;

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("ArMBAIDojnIKLopIImKSIjnDnIqMIog");
	this.shape_156.setTransform(-121.4,73.725);
	this.shape_156._off = true;

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AqnhjIDojoIMJlfIFeMOIjoDoIsJFfg");
	this.shape_157.setTransform(-96.875,73.725);
	this.shape_157._off = true;

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("ApWj4IDpjoINLh4IB5NRIjoDoItMB4g");
	this.shape_158.setTransform(-72.1,73.725);
	this.shape_158._off = true;

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("ApVHhIB3tSIDojnINMB4Ih2NSIjpDng");
	this.shape_159.setTransform(-47.25,73.725);
	this.shape_159._off = true;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AqnFMIFdsPIDojnIMKFfIldMOIjoDog");
	this.shape_160.setTransform(-22.425,73.725);
	this.shape_160._off = true;

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("ArMCoIIkqQIDnjoIKOIoIokKRIjnDog");
	this.shape_161.setTransform(2.075,73.775);
	this.shape_161._off = true;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("ArEAEIDojmIK/nlIHiLEIjoDmIq/Hlg");
	this.shape_162.setTransform(26.025,73.75);
	this.shape_162._off = true;

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AqTiSIDojoIMlkcIEaMpIjoDoIslEcg");
	this.shape_163.setTransform(49.325,73.75);
	this.shape_163._off = true;

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("ApAkUIDojoINShGIBHNXIjoDnItSBHg");
	this.shape_164.setTransform(71.8,73.75);
	this.shape_164._off = true;

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("ApcHXICGtOIDpjoINKCJIiHNOIjoDog");
	this.shape_165.setTransform(93.15,73.75);
	this.shape_165._off = true;

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AqfFfIFBsaIDojnIMWFFIlCMZIjnDog");
	this.shape_166.setTransform(113.3,73.75);
	this.shape_166._off = true;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLDIjnDng");
	this.shape_167.setTransform(132.025,73.75);
	this.shape_167._off = true;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("ArOBuINHtAIJXJlItINAgABmCMIgBACIAJgJg");
	this.shape_168.setTransform(149.15,73.75);
	this.shape_168._off = true;

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("ArEAEIDojnIK/nkIHiLFIjnDmIrAHkg");
	this.shape_169.setTransform(164.7,73.75);
	this.shape_169._off = true;

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AqshWIDojoIMBlxIFwMGIjoDoIsBFxg");
	this.shape_170.setTransform(178.425,73.775);
	this.shape_170._off = true;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AqMihIDojnIMrkHIEGMxIjoDoIsrEGg");
	this.shape_171.setTransform(190.225,73.75);
	this.shape_171._off = true;

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AprjbIDojnINEirICrNIIjpDoItDCrg");
	this.shape_172.setTransform(199.975,73.775);
	this.shape_172._off = true;

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("ApMkFIDojoINPhhIBiNUIjpDoItOBhg");
	this.shape_173.setTransform(207.675,73.75);
	this.shape_173._off = true;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AozkiIDojoINTgrIAsNYIjoDoItTArg");
	this.shape_174.setTransform(213.225,73.775);
	this.shape_174._off = true;

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AokkzIDojoINVgLIAMNaIjpDoItUALg");
	this.shape_175.setTransform(216.575,73.775);
	this.shape_175._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_141).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_143).wait(2).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(3).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_145).wait(4).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_146).wait(5).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_147).wait(6).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(7).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(8).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_150).wait(9).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(11).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_153).wait(12).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_154).wait(13).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_155).wait(14).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_156).wait(15).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_157).wait(16).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_158).wait(17).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(18).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(19).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_161).wait(20).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(21).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_163).wait(22).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_164).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_165).wait(24).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_167).wait(26).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_168).wait(27).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_169).wait(28).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_170).wait(29).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_171).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_172).wait(31).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_173).wait(32).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_174).wait(33).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_175).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(34));

	// Wheel_2
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADgg");
	this.shape_176.setTransform(-185.075,79.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFVAAIAAh1IAAjgIjhAAIh0AAg");
	this.shape_177.setTransform(-190.875,85.625);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDhAAIAAB0gAoei2IDojoINVAAIjoDog");
	this.shape_178.setTransform(-179.275,61.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AC3k2IDojoIAANUIjoDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_179.setTransform(-166.475,74);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AhyBwIADjiIDiADIgDDig");
	this.shape_180.setTransform(-184.075,79.575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AmvGoIAKtaINUALIgJNagAisCpIFVAFIABh1IACjiIjhgDIhzgBg");
	this.shape_181.setTransform(-189.85,85.375);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5D5D5D").s().p("AklGgIB0h0IDiADIgBB1gAoei7IDpjoINUALIjoDng");
	this.shape_182.setTransform(-177.775,60.725);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AC6k5IDojnIgJNZIjpDogAmdg+IBzABIgDDhIh0B0g");
	this.shape_183.setTransform(-165.325,74.325);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("Ah4BpIALjdIDmAMIgLDcg");
	this.shape_184.setTransform(-180.7,79.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("Am+GXIAqtYINTArIgqNZgAiyCjIFUASIAGh6IALjcIjmgMIhugGg");
	this.shape_185.setTransform(-186.525,85.35);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5D5D5D").s().p("Ak7GeIB0h0IDmALIgGB6gAodjHIDojnINTArIjoDog");
	this.shape_186.setTransform(-172.825,60.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("ADFk4IDojoIgqNZIjoDogAmchVIBvAGIgLDcIh0B0g");
	this.shape_187.setTransform(-161.5,75.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AiCBdIAYjUIDtAbIgYDUg");
	this.shape_188.setTransform(-175.15,79.5625);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AnWF7IBetVINPBhIheNUgAi8CYIFTAmIAOh/IAYjVIjtgbIhmgMg");
	this.shape_189.setTransform(-180.95,85.35);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5B5B5B").s().p("AlgGaIB0h0IDuAbIgOB/gAobjYIDojnINPBgIjoDog");
	this.shape_190.setTransform(-164.6,59.525);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("ADWk2IDojnIhfNUIjoDngAmXh6IBlAMIgXDVIh0B0g");
	this.shape_191.setTransform(-155.225,78.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AiOBMIApjJID0AyIgoDJg");
	this.shape_192.setTransform(-167.475,79.5625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("An2FPICptIINECqIipNJgAjICGIFOBEIAbiGIAojJIj0gzIhagSg");
	this.shape_193.setTransform(-173.275,85.375);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#575757").s().p("AmRGSIB0h0ID2AyIgbCGgAoVjtIDojoINDCrIjoDng");
	this.shape_194.setTransform(-153.225,58.575);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("ADskwIDojoIioNJIjpDogAmQirIBaASIgpDKIh0Bzg");
	this.shape_195.setTransform(-146.6,82.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AibA1IgBAAIA8i7ID9BSIg8C7g");
	this.shape_196.setTransform(-157.725,79.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AoYEVIEEswIMsEHIkEMwgAjWBvIFEBpIAtiLIA8i7Ij9hSIhIgXg");
	this.shape_197.setTransform(-163.5,85.375);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#515151").s().p("AnMGFIB1h0ID9BSIgtCLgAoKkFIDpjoIMrEHIjoDng");
	this.shape_198.setTransform(-138.9,57.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AEEkkIDojoIkEMxIjoDogAmDjnIBIAYIg8C7IABAAIh1Bzg");
	this.shape_199.setTransform(-135.825,86.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AioAXIAAgBIBQioIEBB7IhQCqg");
	this.shape_200.setTransform(-145.9,79.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("Ao3DLIFtsGIMCFxIluMGgAjiBRIEzCUIBCiMIBQipIkBh8IgygYg");
	this.shape_201.setTransform(-151.7,85.375);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#474747").s().p("AoBFwIB0h0IAAABIEDB8IhDCMgAnokbIDpjpIMBFyIjoDng");
	this.shape_202.setTransform(-123.05,56.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AEakPIDojnIluMGIjnDngAlvkpIAyAYIhQCqIh0Bzg");
	this.shape_203.setTransform(-123.05,92.25);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhlCWg");
	this.shape_204.setTransform(-132.225,79.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEZDCIBaiGIBmiVIkAiwIgZgSg");
	this.shape_205.setTransform(-138,85.375);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#3A3A3A").s().p("AoSFTIB0h0IEBCxIhbCGgAmVktIDojoILAHlIjoDng");
	this.shape_206.setTransform(-108.625,55.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AErjuIDojnInhLDIjnDogAlSlsIAaARIhmCWIh0B0g");
	this.shape_207.setTransform(-108.625,98.025);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("Ai3g3IB9h/IDyDuIh9B/g");
	this.shape_208.setTransform(-116.65,79.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("ApaAGIJUpkIJhJZInhHwIhzB0gAi3g3Ig6A5IDzDxIBzh2IB9h+IjyjvIgCgCg");
	this.shape_209.setTransform(-122.45,85.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#292929").s().p("AoaEsIA6g6IA6g6IDzDvIhzB2gAkvk0IDojoIJiJYIh0B1Ih1Bzg");
	this.shape_210.setTransform(-92.75,55.525);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AFPiBIB1hzInhHvIh0B0gAkOluIABACIh8B/Ig6A6g");
	this.shape_211.setTransform(-95.6375,97.7125);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AiihNICVhnICvEDIiTBlIgBABg");
	this.shape_212.setTransform(-99.525,79.525);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("ApQhvIK/nlIHiLEIq+HlgAhoiHIiEBbIDBEbIEYjCIgRgYIiwkDg");
	this.shape_213.setTransform(-105.325,85.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#454545").s().p("ADGGhICUhmIAQAZIkZDBgAjrgvIK/nlIjoDnIq/Hkg");
	this.shape_214.setTransform(-117.85,55.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#181818").s().p("AoTD6ICFhbICxECIABAAIh1B0gAi2ktIDnjnIHiLCIjoDog");
	this.shape_215.setTransform(-75.9,55.85);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgiCmIhqkDICvhIIBqEDIivBIg");
	this.shape_216.setTransform(-80.775,79.55);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AosjqIMVlFIFEMaIsVFFgAhSiXIiMA6ICCE9IE7iCIgYg6IhqkDg");
	this.shape_217.setTransform(-86.575,85.325);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#545454").s().p("ABFGIIAAAAICwhJIAYA7Ik8CCgAkWi2IMVlFIjoDoIsVFEg");
	this.shape_218.setTransform(-91.15,56.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#090909").s().p("AgxkZIDnjnIFEMaIjoDngAn5C4ICMg5IBqEDIh1B0g");
	this.shape_219.setTransform(-58.25,57.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AhSCLIgnj0IDMghIAnD0IjMAhg");
	this.shape_220.setTransform(-60.625,79.55);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AnpljINKiIICJNOItKCJgAg/ijIiEAVIA3FTIFQg2IgQhfIgnj0g");
	this.shape_221.setTransform(-66.425,85.35);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5D5D5D").s().p("AhIFYIAAAAIDNghIAPBfIlQA2gAkwlDINJiIIjoDoItJCIg");
	this.shape_222.setTransform(-61.65,59);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#010101").s().p("ABakyIDojoICJNOIjpDogAnKAqICDgVIAoD0Ih1B0g");
	this.shape_223.setTransform(-40.1,66.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("Ah9BjIAAAAIASjZIDpATIgSDag");
	this.shape_224.setTransform(-39.275,79.55);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AnLGIIBFtWINSBGIhFNXgAi3CdIFUAcIAKh8IARjaIjpgTIhqgJg");
	this.shape_225.setTransform(-45.1,85.35);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#5C5C5C").s().p("AlOGcIB1h0IAAAAIDpATIgKB9gAodjPIDojoINTBGIjpDog");
	this.shape_226.setTransform(-30.025,59.875);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("ADOk3IDojoIhFNXIjoDogAmZhoIBqAJIgSDZIh0B0g");
	this.shape_227.setTransform(-19.675,77.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AieAwIA/i4ID+BZIhAC4g");
	this.shape_228.setTransform(-16.825,79.5375);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AofEIIEZsqIMlEcIkYMpgAjYBqIFBBxIAxiMIA/i4Ij9hZIhEgYg");
	this.shape_229.setTransform(-22.65,85.325);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4F4F4F").s().p("AnZGBIB1h0ID+BaIgwCMgAoGkKIDojoIMlEbIjoDng");
	this.shape_230.setTransform(2.975,57.375);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AEIkgIDojoIkXMpIjoDogAl/jzIBEAXIhAC5Ih0Bzg");
	this.shape_231.setTransform(5.25,87.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AiygMIAAgBIBmiVID/CvIhmCWg");
	this.shape_232.setTransform(6.425,79.525);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEYDCIBbiGIBniVIkAiwIgagSg");
	this.shape_233.setTransform(0.6,85.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#3A3A3A").s().p("AoSFUIB1h1IgBABIEACwIhbCFgAmVktIDojnILBHlIjpDmg");
	this.shape_234.setTransform(30,55.85);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AErjtIDpjoIniLDIjnDogAlSlsIAaARIhlCWIh1B0g");
	this.shape_235.setTransform(30,98);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AithEICJhzIDSD7IiIB0g");
	this.shape_236.setTransform(30.45,79.525);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("ApYgzIKLopIImKRIqLIogAhzh+Ih8BqIDbEGIEEjdIgIgLIjTj7g");
	this.shape_237.setTransform(24.65,85.325);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#212121").s().p("AoYEVIB9hqIDTD8Ih0B0gAj0kzIDojoIIlKRIjoDog");
	this.shape_238.setTransform(54.3,55.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3D3D3D").s().p("AD/GnICIhzIAIAKIkFDdgAjRANIKMooIjpDoIqLIog");
	this.shape_239.setTransform(8.75,55.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgbCpIh0kEICqhNIB1EEIiqBNg");
	this.shape_240.setTransform(54.95,79.525);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AozjXIMJlgIFeMPIsJFfgAhViUIiMA/ICME4IE3iMIgYg1Ih0kEg");
	this.shape_241.setTransform(49.125,85.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#525252").s().p("ABZGNIABABICrhOIAYA1Ik3CMgAkQigIMJlgIjoDnIsJFfg");
	this.shape_242.setTransform(43.225,56.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0B0B0B").s().p("An+DIICMg/IB0EEIh0B0gAhHkZIDojnIFeMPIjoDng");
	this.shape_243.setTransform(77.675,56.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("Ah5hpIDQgeIAiDxIjPAeg");
	this.shape_244.setTransform(79.75,79.525);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AnilrINLh6IB6NSItMB4gAg/ijIiBASIAwFUIFSgxIgPhhIgijyg");
	this.shape_245.setTransform(73.95,85.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#5D5D5D").s().p("AhUFUIDQgeIAOBhIlRAxgAkxlOINMh5IjpDoItMB5g");
	this.shape_246.setTransform(79.5,59.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("ABlk1IDojnIB5NRIjoDogAnFAeICCgSIAiDzIh0B0g");
	this.shape_247.setTransform(100.025,67.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AiGBYIAdjRIDwAiIgdDRg");
	this.shape_248.setTransform(104.6,79.525);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AnhFtIB3tSINMB5Ih3NRgAjACSIFRAwIATiCIAdjRIjwgiIhigOg");
	this.shape_249.setTransform(98.8,85.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5A5A5A").s().p("AlwGYIB0h1IDxAjIgSCBgAoajfIDojoINMB5IjoDng");
	this.shape_250.setTransform(116.35,59.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("ADdk1IDojnIh2NRIjpDogAmViKIBiAPIgeDQIh0B1g");
	this.shape_251.setTransform(124.85,79.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AimAcIBMisIECB1IhNCsg");
	this.shape_252.setTransform(129.4,79.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AozDYIFdsPIMKFgIlcMOgAjgBXIE3CMIA+iMIBNisIkCh1Ig1gYg");
	this.shape_253.setTransform(123.575,85.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#494949").s().p("An+F1IB0h1IECB1Ig+CMgAn0kZIDpjnIMKFfIjpDng");
	this.shape_254.setTransform(152.125,56.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AEWkTIDpjoIldMPIjnDogAlzkeIA2AZIhNCtIh0Bzg");
	this.shape_255.setTransform(152.125,91.275);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("Ai2gkIBziJID6DSIhzCJg");
	this.shape_256.setTransform(153.9,79.5625);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("ArNCoIIlqQIDojoIKOIoIjpDnIojKSgAAKDoIBziJIj6jSIgLgKIjcEGIB0h0g");
	this.shape_257.setTransform(159.7,73.775);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AEwjUIDpjoIokKRIjoDogAk9mRIALAKIhyCJIh0B0g");
	this.shape_258.setTransform(177.75,101.375);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAOC1IiwkCICVhnICwECIiVBng");
	this.shape_259.setTransform(177.85,79.55);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("ApRhvIK4nfIAHgGIHjLEIq+HlgAhoiHIiEBbIDBEbIEZjCIgRgYIixkDg");
	this.shape_260.setTransform(172.05,85.325);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#454545").s().p("ADFGiIAAAAICVhnIARAZIkaDBgAjrgvIK/nlIjwDsIq3Hfg");
	this.shape_261.setTransform(159.525,55.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#181818").s().p("AoSD6ICEhbICxEDIh0BzgAi3ktIgHAFIDvjsIHjLDIjpDng");
	this.shape_262.setTransform(201.45,55.85);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AiHhgIC2hAIBZEBIi1BAIgBAAg");
	this.shape_263.setTransform(201.15,79.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AofkGIMkkcIEbMqIslEbgAhNiZIiLAwIBwFEIFBhxIgXhDIhZkBg");
	this.shape_264.setTransform(195.35,85.325);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#575757").s().p("AAlF/IC2hAIAXBCIlBBygAkejXIMlkbIjpDoIskEag");
	this.shape_265.setTransform(192.85,57.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#070707").s().p("AgRkgIDnjoIEbMpIjpDogAnwCYICLgxIBaECIABgBIh1B1g");
	this.shape_266.setTransform(223.3,59.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("Ah0htIDWgSIAUDtIjXASg");
	this.shape_267.setTransform(223.625,79.55);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AnMmIINShGIBHNWItSBHgAg6inIh9AKIAcFWIFUgcIgJhpIgUjtg");
	this.shape_268.setTransform(217.8,85.35);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#5E5E5E").s().p("Ah3FEIDWgSIAJBqIlTAcgAk0lxINRhGIjoDoItRBGg");
	this.shape_269.setTransform(225.85,59.875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("ACHk3IDojoIBINXIjpDogAm2gFIB9gLIAUDtIh0B0g");
	this.shape_270.setTransform(243.275,70.225);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AiIBVIAAgBIAgjOIDxAmIghDPg");
	this.shape_271.setTransform(244.975,79.55);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AnoFjICHtOINKCIIiHNPgAjDCPIFQA2IAViEIAhjPIjxgmIhfgQg");
	this.shape_272.setTransform(239.175,85.35);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#595959").s().p("Al6GWIB0h0IAAAAIDyAnIgVCDgAoZjjIDojoINLCIIjpDog");
	this.shape_273.setTransform(257.525,59);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("ADikzIDpjoIiHNOIjpDpgAmTiVIBfAQIghDPIh1B0g");
	this.shape_274.setTransform(265.45,80.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AijAkIBIixID/BqIhICxg");
	this.shape_275.setTransform(265.125,79.5375);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AorDrIFBsaIMWFFIlCMagAjeBeIE8CCIA4iMIBIixIj/hpIg8gZg");
	this.shape_276.setTransform(259.325,85.325);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#4C4C4C").s().p("AnyF6IB0h0IEBBpIg5CNgAn+kTIDojoIMVFFIjoDng");
	this.shape_277.setTransform(287,56.975);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AERkZIDojnIlBMaIjnDngAl4kOIA8AZIhICyIh0Bzg");
	this.shape_278.setTransform(287.6,90);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhmCWg");
	this.shape_279.setTransform(283.825,79.5625);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("ApQBwIHhrEILAHmInhLDgAjsAtIEZDCIBaiFIBmiWIj/iwIgagSg");
	this.shape_280.setTransform(278.025,85.325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#3A3A3A").s().p("AoSFUIB0h0IEACxIhaCEgAmVktIDojnILAHlIjoDmg");
	this.shape_281.setTransform(307.425,55.85);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AErjtIDojoInhLEIjnDngAlSlsIAaARIhmCWIh0B0g");
	this.shape_282.setTransform(307.425,98);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("Ai2g6IB/h+IDuD0Ih/B9g");
	this.shape_283.setTransform(301,79.55);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("ApbgFIJ9owIgdgpIJXJkIpgJZgAh8h0Ih0BzIDvD0IBshsICHiFIgBgBIjvjzg");
	this.shape_284.setTransform(295.175,85.35);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#282828").s().p("AoZEoIB0hzIDvD0IgHAIIhuBsgAkkk0IAPgPIDajZIJVJkIjnDog");
	this.shape_285.setTransform(324.9,55.55);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#363636").s().p("AEnFzIB/h+IABABIiHCEgADIl5IgOAPIAdApIp9Ivg");
	this.shape_286.setTransform(277.075,60.9875);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AANC0IivkBICVhnICwECIiWBng");
	this.shape_287.setTransform(316.55,79.575);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("ApQhvIK+nlIHjLEIq+HlgAhniGIiFBbIDBEaIEZjCIgRgZIiwkBg");
	this.shape_288.setTransform(310.725,85.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#181818").s().p("AoSD7ICEhcICwEDIh0BzgAi3ktIDnjnIHjLEIjoDng");
	this.shape_289.setTransform(340.15,55.85);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#454545").s().p("ADFGiIAAAAICVhnIARAZIkaDBgAjrgwIK/nkIjoDnIq/Hkg");
	this.shape_290.setTransform(298.2,55.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AiRhZICohRIB7EEIinBRg");
	this.shape_291.setTransform(330.2375,79.55);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("Ao4jKIMBlyIFwMHIsBFxgAhXiTIiMBDICUE1IEziUIgYgxIh8kEg");
	this.shape_292.setTransform(324.45,85.35);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#515151").s().p("ABnGRICphRIAYAwIkzCVgAkMiSIMBlyIjoDoIsBFxg");
	this.shape_293.setTransform(317.65,56.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0D0D0D").s().p("AoBDOICLhCIB8EFIh0B0gAhVkcIDnjoIFwMHIjoDog");
	this.shape_294.setTransform(353.1,56.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AiFhhIC5g8IBSD/Ii5A8g");
	this.shape_295.setTransform(342.05,79.55);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AoYkVIMrkGIEGMxIsrEGgAhLibIiLAtIBpFGIFEhpIgXhHIhSj/g");
	this.shape_296.setTransform(336.225,85.35);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#585858").s().p("AAVF6IC6g8IAXBHIlEBpgAkhjmIMrkHIjoDoIsrEFg");
	this.shape_297.setTransform(334.725,57.55);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#050505").s().p("AgCkkIDojoIEGMxIjoDogAnrCIICLgsIBSD/Ih1B0g");
	this.shape_298.setTransform(363.975,60.625);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("Ah9hmIDIgqIAyD4IjHAog");
	this.shape_299.setTransform(351.8,79.55);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("An3lPINEiqICrNIItECrgAhDihIiFAcIBDFPIFOhEIgShYIgyj4g");
	this.shape_300.setTransform(346,85.375);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#5C5C5C").s().p("AguFiIDHgoIASBYIlOBEgAktkqINDirIjoDoItDCqg");
	this.shape_301.setTransform(349.05,58.575);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#020202").s().p("ABCkwIDojoICrNJIjoDogAnTBDICFgbIAzD4Ih1B0g");
	this.shape_302.setTransform(372.7,65.225);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AhbCEIgcjvIDTgYIAcDvIjTAYg");
	this.shape_303.setTransform(359.475,79.55);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AnYl5INPhhIBiNUItPBhgAg9ilIh/APIAnFUIFSgnIgLhlIgcjvg");
	this.shape_304.setTransform(353.675,85.35);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#5E5E5E").s().p("AhkFNIDSgYIAMBkIlSAngAkyleINOhhIjoDoItPBgg");
	this.shape_305.setTransform(360.4,59.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AB2k1IDnjoIBiNUIjoDngAm+AOIB/gOIAcDvIAAAAIh0Bzg");
	this.shape_306.setTransform(379.45,68.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AhnB6IgMjoIDbgLIAMDoIjbALg");
	this.shape_307.setTransform(365.0375,79.575);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("Am/mWINTgrIAsNYItTAsgAg5ioIh5AHIARFWIFVgSIgGhuIgMjog");
	this.shape_308.setTransform(359.225,85.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#5E5E5E").s().p("AiLE7IDbgLIAGBuIlVARgAk1mDINTgrIjoDnItTAsg");
	this.shape_309.setTransform(368.625,60.275);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("ACak4IDnjoIAtNZIjpDogAmtgYIB5gHIANDpIAAAAIh0B0g");
	this.shape_310.setTransform(384.3,71.625);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AhxhwIDggDIADDkIjfADg");
	this.shape_311.setTransform(368.3875,79.575);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AmwmnINUgLIAMNaItUALgAg3iqIh2ABIAGFXIFUgFIgChyIgDjkg");
	this.shape_312.setTransform(362.6,85.375);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#5D5D5D").s().p("AiiEwIDfgDIACBzIlVAEgAk2mYINVgLIjpDoItUAKg");
	this.shape_313.setTransform(373.625,60.725);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("ACvk4IDojoIAMNaIjoDngAmigvIB2gCIADDkIh0B0g");
	this.shape_314.setTransform(387.15,73.225);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDhAAIAAB0gAoei2IDojoINVAAIjpDog");
	this.shape_315.setTransform(375.4,61.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AC2k2IDpjoIAANUIjpDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_316.setTransform(388.2,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]}).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).wait(1));

	// Wheel_2_0
	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjoDpg");
	this.shape_317.setTransform(-179.275,74);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AojIcIAKtaIDojoINVALIgKNaIjoDog");
	this.shape_318.setTransform(-178.25,73.775);
	this.shape_318._off = true;

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AoyILIAqtZIDojnINTArIgpNZIjpDng");
	this.shape_319.setTransform(-174.925,73.775);
	this.shape_319._off = true;

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("ApKHuIBetUIDpjoINOBhIheNUIjoDog");
	this.shape_320.setTransform(-169.35,73.775);
	this.shape_320._off = true;

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("ApqHDICptIIDpjoINDCrIipNIIjoDog");
	this.shape_321.setTransform(-161.675,73.775);
	this.shape_321._off = true;

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AqMGJIEEsxIDpjnIMrEHIkEMwIjoDog");
	this.shape_322.setTransform(-151.9,73.8);
	this.shape_322._off = true;

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AqrE/IFtsGIDpjoIMCFxIlvMGIjoDog");
	this.shape_323.setTransform(-140.1,73.775);
	this.shape_323._off = true;

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("ArEDkIHhrEIDnjoILBHlInhLEIjnDog");
	this.shape_324.setTransform(-126.4,73.8);
	this.shape_324._off = true;

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("ArOB6IJUplIDnjnIJjJZIpWJkIjmDog");
	this.shape_325.setTransform(-110.85,73.75);
	this.shape_325._off = true;

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("ArEAEIDnjmILAnlIHiLDIjoDnIq/Hlg");
	this.shape_326.setTransform(-93.7,73.75);
	this.shape_326._off = true;

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("Aqgh2IDojnIMVlFIFEMZIjoDoIsVFFg");
	this.shape_327.setTransform(-74.95,73.75);
	this.shape_327._off = true;

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("ApdjvIDojnINKiJICJNPIjpDnItJCJg");
	this.shape_328.setTransform(-54.8,73.75);
	this.shape_328._off = true;

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("Ao/H8IBFtWIDojoINSBGIhFNXIjoDog");
	this.shape_329.setTransform(-33.475,73.75);
	this.shape_329._off = true;

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AqTF7IEZspIDojoIMlEcIkXMpIjpDog");
	this.shape_330.setTransform(-11.05,73.75);
	this.shape_330._off = true;

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLCIjnDog");
	this.shape_331.setTransform(12.225,73.75);
	this.shape_331._off = true;

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("ArMBAIDojnIKMopIImKSIjpDnIqLIog");
	this.shape_332.setTransform(36.25,73.725);
	this.shape_332._off = true;

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AqnhjIDojoIMJlfIFeMOIjoDoIsJFfg");
	this.shape_333.setTransform(60.75,73.725);
	this.shape_333._off = true;

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("ApWj4IDojoINMh4IB5NRIjoDoItMB4g");
	this.shape_334.setTransform(85.55,73.725);
	this.shape_334._off = true;

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("ApVHhIB3tSIDojnINMB4Ih3NSIjoDng");
	this.shape_335.setTransform(110.4,73.725);
	this.shape_335._off = true;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AqnFMIFdsPIDojnIMKFfIlcMOIjoDog");
	this.shape_336.setTransform(135.2,73.725);
	this.shape_336._off = true;

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("ArNCoIIlqQIDojoIKOIoIolKRIjnDog");
	this.shape_337.setTransform(159.7,73.775);
	this.shape_337._off = true;

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("ArFAEIDpjmIK/nlIHjLEIjpDmIq+Hlg");
	this.shape_338.setTransform(183.65,73.75);
	this.shape_338._off = true;

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AqTiSIDojoIMlkcIEaMpIjoDoIslEcg");
	this.shape_339.setTransform(206.975,73.75);
	this.shape_339._off = true;

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("ApAkUIDojoINShGIBHNXIjoDnItSBHg");
	this.shape_340.setTransform(229.425,73.75);
	this.shape_340._off = true;

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("ApcHXICHtOIDojoINKCJIiHNOIjoDog");
	this.shape_341.setTransform(250.8,73.75);
	this.shape_341._off = true;

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AqfFfIFBsaIDpjnIMVFFIlBMZIjpDog");
	this.shape_342.setTransform(270.925,73.75);
	this.shape_342._off = true;

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLDIjnDng");
	this.shape_343.setTransform(289.625,73.75);
	this.shape_343._off = true;

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("ArPBuINItAIJXJlItINAg");
	this.shape_344.setTransform(306.775,73.75);
	this.shape_344._off = true;

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("ArFAEIDojnIK/nkIHjLFIjoDmIq/Hkg");
	this.shape_345.setTransform(322.35,73.75);
	this.shape_345._off = true;

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AqshWIDojoIMBlxIFwMGIjoDoIsBFxg");
	this.shape_346.setTransform(336.05,73.775);
	this.shape_346._off = true;

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AqMihIDojnIMrkHIEGMxIjoDoIsrEGg");
	this.shape_347.setTransform(347.85,73.75);
	this.shape_347._off = true;

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AprjbIDpjnINDirICrNIIjoDoItECrg");
	this.shape_348.setTransform(357.6,73.775);
	this.shape_348._off = true;

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("ApMkFIDpjoINOhhIBiNUIjoDoItPBhg");
	this.shape_349.setTransform(365.275,73.75);
	this.shape_349._off = true;

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("Ao0kiIDpjoINTgrIAtNYIjpDoItTArg");
	this.shape_350.setTransform(370.85,73.775);
	this.shape_350._off = true;

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AokkzIDojoINVgLIALNaIjoDoItUALg");
	this.shape_351.setTransform(374.2,73.775);
	this.shape_351._off = true;

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjpDpg");
	this.shape_352.setTransform(375.4,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_317}]}).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_318).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_319).wait(2).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_320).wait(3).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_321).wait(4).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_322).wait(5).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_323).wait(6).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_324).wait(7).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_325).wait(8).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_326).wait(9).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_327).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_328).wait(11).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_329).wait(12).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_330).wait(13).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_331).wait(14).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_332).wait(15).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_333).wait(16).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_334).wait(17).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_335).wait(18).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_336).wait(19).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_337).wait(20).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_338).wait(21).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_339).wait(22).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_340).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_341).wait(24).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_342).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_343).wait(26).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_344).wait(27).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_345).wait(28).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_346).wait(29).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_347).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_348).wait(31).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_349).wait(32).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_350).wait(33).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_351).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(34));

	// Car
	this.Car3Color = new lib.Car_3_Color();
	this.Car3Color.name = "Car3Color";
	this.Car3Color.setTransform(-231.3,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.Car3Color).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.7,-146,951.5,292.1);


(lib.Car_2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(35).call(this.frame_105).wait(35).call(this.frame_140).wait(35).call(this.frame_175).wait(36));

	// Wheel_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADgg");
	this.shape.setTransform(-342.725,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFVAAIAAh1IAAjgIjhAAIh0AAg");
	this.shape_1.setTransform(-348.525,85.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDgAAIAAB0gAoei2IDojoINVAAIjoDog");
	this.shape_2.setTransform(-336.9,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC3k2IDojoIAANUIjoDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_3.setTransform(-324.1,74);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyBwIACjiIDjADIgDDig");
	this.shape_4.setTransform(-341.675,79.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AmvGoIAKtaINUALIgJNagAisCpIFVAFIABh1IADjiIjigDIhzgBg");
	this.shape_5.setTransform(-347.5,85.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AklGgIB1h0IDiADIgCB1gAoei7IDpjoINUALIjoDng");
	this.shape_6.setTransform(-335.425,60.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AC6k5IDojnIgJNZIjoDogAmdg+IByABIgCDhIh0B0g");
	this.shape_7.setTransform(-322.975,74.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4BpIALjdIDmAMIgLDcg");
	this.shape_8.setTransform(-338.35,79.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Am+GXIAqtYINTArIgqNZgAiyCjIFVASIAFh6IALjcIjmgMIhugGg");
	this.shape_9.setTransform(-344.15,85.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("Ak7GeIB0h0IDmALIgGB6gAodjHIDojnINTArIjoDog");
	this.shape_10.setTransform(-330.425,60.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ADFk4IDojoIgqNZIjoDogAmchVIBvAGIgLDcIh0B0g");
	this.shape_11.setTransform(-319.125,75.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiCBdIAAAAIAYjUIDtAbIgYDUg");
	this.shape_12.setTransform(-332.775,79.5625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AnWF7IBetVINQBhIhgNUgAi8CYIFTAmIAOh/IAYjVIjtgbIhmgMg");
	this.shape_13.setTransform(-338.6,85.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B5B5B").s().p("AlgGaIB1h0IAAAAIDtAbIgOB/gAobjYIDojnINPBgIjoDog");
	this.shape_14.setTransform(-322.225,59.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADWk2IDojnIhfNUIjoDngAmYh6IBnAMIgYDVIh0B0g");
	this.shape_15.setTransform(-312.85,78.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiOBMIAAAAIAojJID1AyIgoDJg");
	this.shape_16.setTransform(-325.075,79.5625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("An2FPICptIINECqIipNJgAjJCGIFPBEIAbiGIAojJIj0gzIhagSg");
	this.shape_17.setTransform(-330.9,85.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#575757").s().p("AmRGSIB1h0IAAAAID1AyIgbCGgAoWjtIDpjoINDCrIjoDng");
	this.shape_18.setTransform(-310.85,58.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ADskwIDojoIipNJIjoDogAmQirIBaASIgpDJIh0B0g");
	this.shape_19.setTransform(-304.225,82.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AicA1IA8i7ID9BSIg8C7g");
	this.shape_20.setTransform(-315.325,79.5875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AoXEVIEEswIMsEHIkFMwgAjWBvIFFBpIAsiLIA8i7Ij9hSIhIgXg");
	this.shape_21.setTransform(-321.15,85.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#515151").s().p("AnMGFIB0h0ID+BSIgsCLgAoJkFIDojoIMrEHIjoDng");
	this.shape_22.setTransform(-296.525,57.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AEEkkIDojoIkEMxIjoDogAmDjnIBIAYIg7C7Ih1Bzg");
	this.shape_23.setTransform(-293.475,86.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AioAXIAAAAIBQipIECB8IhRCpg");
	this.shape_24.setTransform(-303.55,79.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ao4DLIFvsGIMBFxIltMGgAjjBRIE0CUIBCiMIBRipIkCh8IgygYg");
	this.shape_25.setTransform(-309.35,85.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#474747").s().p("AoBFwIB0h0IAAABIECB8IhCCMgAnokbIDojpIMCFyIjoDng");
	this.shape_26.setTransform(-280.675,56.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AEakPIDojnIluMGIjnDngAlvkpIAyAYIhQCqIh0Bzg");
	this.shape_27.setTransform(-280.675,92.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiygMIgBAAIBmiWIEBCvIhmCWg");
	this.shape_28.setTransform(-289.85,79.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjtAtIEaDCIBbiGIBmiVIkBiwIgZgSg");
	this.shape_29.setTransform(-295.65,85.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3A3A").s().p("AoSFTIB0h0IEBCxIhbCGgAmVktIDpjoIK/HlIjoDng");
	this.shape_30.setTransform(-266.275,55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AErjuIDojnInhLDIjnDogAlSlsIAaARIhmCWIAAAAIh0B0g");
	this.shape_31.setTransform(-266.275,98.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai3g3IB9h/IDxDuIh8B/g");
	this.shape_32.setTransform(-274.3,79.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("ApbAGIJWpkIJgJZInhHwIh0B0gAi3g3Ig6A5ID0DxIByh2IB8h+IjxjvIgCgCg");
	this.shape_33.setTransform(-280.1,85.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#292929").s().p("AoaEsIA6g6IA6g6IDzDwIhyB1gAkvk0IDpjoIJhJYIh0B1Ih1Bzg");
	this.shape_34.setTransform(-250.375,55.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AFPiBIB1hzInhHvIh1B0gAkOluIABACIh8B/Ig6A6g");
	this.shape_35.setTransform(-253.2625,97.7125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiihNICVhnICwECIiUBmIgBABg");
	this.shape_36.setTransform(-257.15,79.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("ApQhvIK+nlIHkLEIq/HlgAhoiHIiFBbIDCEbIEYjCIgQgZIixkCg");
	this.shape_37.setTransform(-262.95,85.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#454545").s().p("ADGGhICUhmIARAZIkaDBgAjrgvIK/nlIjoDnIq/Hkg");
	this.shape_38.setTransform(-275.5,55.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#181818").s().p("AoTD6ICFhbICxECIABAAIh1B0gAi3ktIDojnIHjLCIjoDog");
	this.shape_39.setTransform(-233.55,55.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiMhdICvhIIBqEDIivBIg");
	this.shape_40.setTransform(-238.425,79.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AosjqIMVlFIFEMaIsVFFgAhSiXIiMA6ICCE9IE7iCIgYg6IhqkDg");
	this.shape_41.setTransform(-244.2,85.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#545454").s().p("ABFGIICwhIIAYA6Ik7CCgAkWi2IMVlFIjoDoIsVFEg");
	this.shape_42.setTransform(-248.8,56.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#090909").s().p("AgxkZIDnjnIFEMaIjoDngAn5C4ICMg5IBqEDIh0B0g");
	this.shape_43.setTransform(-215.9,57.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ah6hpIDNghIAnD0IjMAhg");
	this.shape_44.setTransform(-218.275,79.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AnpljINKiIICJNOItKCJgAhAijIiDAVIA3FTIFQg2IgQhfIgnj0g");
	this.shape_45.setTransform(-224.075,85.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5D5D5D").s().p("AhHFYIDMghIAPBfIlPA2gAkwlDINKiIIjoDoItLCIg");
	this.shape_46.setTransform(-219.3,59);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#010101").s().p("ABakyIDojoICJNOIjpDogAnKAqICDgVIAoD0Ih0B0g");
	this.shape_47.setTransform(-197.75,66.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ah9BjIAAAAIASjZIDpATIgSDag");
	this.shape_48.setTransform(-196.925,79.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AnLGIIBFtWINSBGIhFNXgAi3CdIFTAcIAKh8IASjaIjpgTIhqgJg");
	this.shape_49.setTransform(-202.725,85.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5C5C5C").s().p("AlNGcIB0h0IAAAAIDpATIgKB9gAodjPIDpjoINSBGIjpDog");
	this.shape_50.setTransform(-187.675,59.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ADNk3IDpjoIhFNXIjoDogAmZhoIBqAJIgSDZIh0B0g");
	this.shape_51.setTransform(-177.3,77.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AieAwIAAAAIBAi4ID9BZIhAC4g");
	this.shape_52.setTransform(-174.475,79.5375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AoeEIIEYsqIMlEcIkYMpgAjYBqIFBBxIAwiMIBAi4Ij9hZIhEgYg");
	this.shape_53.setTransform(-180.275,85.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4F4F4F").s().p("AnYGBIB0h0ID+BaIgwCMgAoHkKIDpjoIMmEbIjpDng");
	this.shape_54.setTransform(-154.65,57.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AEIkgIDpjoIkZMpIjnDogAmAjzIBFAXIhBC5IABAAIh0Bzg");
	this.shape_55.setTransform(-152.35,87.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhmCWg");
	this.shape_56.setTransform(-151.225,79.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEZDCIBaiGIBmiVIj/iwIgagSg");
	this.shape_57.setTransform(-157.025,85.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A3A3A").s().p("AoSFUIB0h0IEACwIhaCFgAmVktIDojnILAHlIjoDmg");
	this.shape_58.setTransform(-127.625,55.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AErjtIDojoInhLDIjnDogAlSlsIAaARIhmCWIh0B0g");
	this.shape_59.setTransform(-127.625,98);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AithDICJh0IDSD7IiJB0g");
	this.shape_60.setTransform(-127.175,79.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("ApYgzIKLopIInKRIqMIogAhzh9Ih9BpIDcEGIEFjdIgJgLIjTj7g");
	this.shape_61.setTransform(-133,85.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#212121").s().p("AoYEVIB9hqIDTD8Ih0B0gAj0kzIDojoIIlKRIjoDog");
	this.shape_62.setTransform(-103.35,55.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D3D3D").s().p("AD+GnICJh0IAJALIkGDdgAjRANIKLooIjoDoIqLIog");
	this.shape_63.setTransform(-148.9,55.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgbCpIh0kEICrhNIB0EEIirBNg");
	this.shape_64.setTransform(-102.675,79.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AozjXIMJlgIFeMPIsJFfgAhViUIiMA/ICME4IE3iMIgYg1Ih0kEg");
	this.shape_65.setTransform(-108.475,85.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#525252").s().p("ABZGNIAAABICshOIAYA1Ik3CMgAkQigIMJlgIjoDnIsJFfg");
	this.shape_66.setTransform(-114.4,56.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0B0B0B").s().p("An+DIICMg/IB0EEIh0B0gAhGkZIDnjnIFeMPIjoDng");
	this.shape_67.setTransform(-79.975,56.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhWCIIgijxIDPgeIAiDxIjPAeg");
	this.shape_68.setTransform(-77.8875,79.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AnilrINMh6IB5NSItMB4gAg+ijIiDASIAxFUIFRgxIgOhhIgijyg");
	this.shape_69.setTransform(-83.7,85.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5D5D5D").s().p("AhTFUIDPgeIAOBhIlRAxgAkxlOINLh5IjoDoItMB5g");
	this.shape_70.setTransform(-78.15,59.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("ABlk1IDojnIB5NRIjoDogAnFAeICCgSIAiDzIABAAIh1B0g");
	this.shape_71.setTransform(-57.625,67.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AiGBYIAAAAIAdjRIDwAiIgdDRg");
	this.shape_72.setTransform(-53.05,79.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AnhFtIB3tSINMB5Ih3NRgAjACSIFSAwIASiCIAdjRIjwgiIhigOg");
	this.shape_73.setTransform(-58.85,85.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5A5A5A").s().p("AlvGYIB0h1IDwAjIgSCBgAoZjfIDojoINLB5IjnDng");
	this.shape_74.setTransform(-41.3,59.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ADek1IDnjnIh2NRIjpDogAmViKIBiAPIgdDQIAAAAIh0B1g");
	this.shape_75.setTransform(-32.8,79.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AinAcIBNisIECB1IhNCsg");
	this.shape_76.setTransform(-28.225,79.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AozDYIFdsPIMKFgIldMOgAjhBXIE3CMIA/iMIBNisIkCh0Ig2gZg");
	this.shape_77.setTransform(-34.025,85.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#494949").s().p("An+F1IB0h1IEDB1Ig/CMgAnzkZIDojnIMKFfIjoDng");
	this.shape_78.setTransform(-5.525,56.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AEXkTIDojoIldMPIjnDogAlzkeIA2AZIhNCtIh0Bzg");
	this.shape_79.setTransform(-5.525,91.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ai2gkIBziKID6DTIhzCKg");
	this.shape_80.setTransform(-3.725,79.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("ArMCoIIkqQIDnjoIKOIoIjoDnIojKSgAAKDoIBziJIj6jTIgLgJIjcEGIB0h0g");
	this.shape_81.setTransform(2.075,73.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AExjUIDojoIojKRIjoDogAk8mRIALAJIhzCKIh0B0g");
	this.shape_82.setTransform(20.1,101.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAOC1IiwkDICVhmICwECIiVBng");
	this.shape_83.setTransform(20.2125,79.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("ApQhvIK3nfIAIgGIHiLEIq/HlgAhoiHIiFBbIDCEbIEYjCIgQgYIixkDg");
	this.shape_84.setTransform(14.425,85.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#454545").s().p("ADFGiIABAAICUhnIARAZIkaDBgAjrgvIK/nlIjwDsIq3Hfg");
	this.shape_85.setTransform(1.9,55.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#181818").s().p("AoTD6ICGhcICwEEIh0BzgAi2ktIgIAFIDvjsIHiLDIjoDng");
	this.shape_86.setTransform(43.8,55.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AiHhgIC1hAIBaEBIi1BAg");
	this.shape_87.setTransform(43.5125,79.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AofkGIMlkcIEaMqIslEbgAhOiaIiLAxIByFEIFBhxIgYhDIhakBg");
	this.shape_88.setTransform(37.725,85.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#575757").s().p("AAlF/IC2hAIAYBCIlBBygAkdjXIMkkbIjoDoIslEag");
	this.shape_89.setTransform(35.2,57.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#070707").s().p("AgQkgIDnjoIEaMpIjoDogAnwCYICLgyIBaEDIh0B0g");
	this.shape_90.setTransform(65.65,59.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ah1htIDXgSIATDtIjWASg");
	this.shape_91.setTransform(65.975,79.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AnMmIINShGIBHNWItSBHgAg7inIh8AKIAcFWIFTgcIgJhpIgTjtg");
	this.shape_92.setTransform(60.2,85.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5E5E5E").s().p("Ah4FEIDXgSIAIBqIlSAcgAk1lxINThGIjpDoItRBGg");
	this.shape_93.setTransform(68.25,59.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("ACHk3IDpjoIBHNXIjoDogAm2gFIB9gLIAUDtIh0B0g");
	this.shape_94.setTransform(85.625,70.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AiIBVIAgjPIDxAmIggDPg");
	this.shape_95.setTransform(87.35,79.55);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AnoFjICGtOINLCIIiHNPgAjCCPIFPA2IAWiEIAgjPIjxgmIhegQg");
	this.shape_96.setTransform(81.55,85.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#595959").s().p("Al6GWIB0h0IDyAnIgVCDgAoZjjIDpjoINKCIIjoDog");
	this.shape_97.setTransform(99.875,59);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("ADikzIDojoIiHNOIjoDpgAmTiVIBfAQIghDPIh0B0g");
	this.shape_98.setTransform(107.825,80.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AijAkIAAAAIBIixID/BpIhICyg");
	this.shape_99.setTransform(107.5,79.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AorDrIFCsaIMVFFIlBMagAjdBeIE7CCIA4iMIBJixIkAhpIg8gZg");
	this.shape_100.setTransform(101.675,85.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4C4C4C").s().p("AnyF6IB0h0IEABqIg4CMgAn/kTIDojoIMWFFIjoDng");
	this.shape_101.setTransform(129.4,56.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AERkZIDojnIlCMaIjmDngAl4kOIA8AZIhICyIAAAAIh0Bzg");
	this.shape_102.setTransform(130,90);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AiygMIABgBIBliVID/CvIhmCWg");
	this.shape_103.setTransform(126.2,79.5375);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("ApQBwIHhrEILAHmInhLDgAjsAtIEYDCIBbiFIBmiWIj/iwIgagSg");
	this.shape_104.setTransform(120.4,85.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3A3A3A").s().p("AoSFUIB1h1IgBABIEACwIhbCFgAmVktIDojnILAHlIjoDmg");
	this.shape_105.setTransform(149.8,55.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AErjtIDojoIngLEIjoDngAlSlsIAaARIhlCWIh1B0g");
	this.shape_106.setTransform(149.8,98);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ai2g6IB/h+IDuD0IgPAPIgIAHIhoBng");
	this.shape_107.setTransform(143.35,79.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("ApagFIJ9owIgegpIJXJkIpgJZgAh8h0Ih0BzIDvD0IDMjMIAnglIgBgBIjvjzg");
	this.shape_108.setTransform(137.55,85.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#282828").s().p("AoZEoIB0hzIDvD0IBohnIgBACIgOANIjNDMgAkjk0IAOgPIDajZIJWJkIjoDog");
	this.shape_109.setTransform(167.25,55.55);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#363636").s().p("AGOE9IAJgJIAPgPIABAAIgnAmgADIlKIgOAPIAeApIp9Ivg");
	this.shape_110.setTransform(119.45,56.2375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AiihNICWhnICvECIiVBng");
	this.shape_111.setTransform(158.9,79.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("ApQhvIK/nlIHjLEIrAHlgAhoiGIiFBbIDCEaIEYjCIgQgZIiwkBg");
	this.shape_112.setTransform(153.1,85.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#181818").s().p("AoTD7ICFhcICxEDIh0BzgAi2ktIDnjnIHiLEIjnDng");
	this.shape_113.setTransform(182.5,55.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#454545").s().p("ADFGiICVhnIARAZIkaDBgAjrgwIK/nkIjoDnIq/Hkg");
	this.shape_114.setTransform(140.55,55.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AiRhZICnhRIB8EEIioBRg");
	this.shape_115.setTransform(172.625,79.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("Ao4jKIMAlyIFxMHIsBFxgAhXiTIiMBDICUE1IEziUIgXgxIh8kEg");
	this.shape_116.setTransform(166.8,85.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#515151").s().p("ABoGRICphSIAXAxIkzCVgAkMiSIMBlyIjpDoIsAFxg");
	this.shape_117.setTransform(160,56.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0D0D0D").s().p("AoCDOICMhCIB8EFIh0B0gAhVkcIDnjoIFxMHIjpDog");
	this.shape_118.setTransform(195.475,56.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgzCeIhSj/IC5g8IBSD/Ii5A8g");
	this.shape_119.setTransform(184.4,79.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AoYkVIMrkGIEGMxIsrEGgAhMibIiKAtIBpFGIFEhpIgXhHIhSj/g");
	this.shape_120.setTransform(178.625,85.35);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#585858").s().p("AAVF6IC6g8IAXBHIlEBpgAkhjmIMrkHIjoDoIsrEFg");
	this.shape_121.setTransform(177.1,57.55);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#050505").s().p("AgBkkIDnjoIEGMxIjoDogAnrCIICKgsIBTD/IAAAAIh0B0g");
	this.shape_122.setTransform(206.325,60.625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AhKCQIgzj2IDIgqIAzD4IjIAog");
	this.shape_123.setTransform(194.1625,79.55);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("An3lPINDiqICrNIItDCrgAhCihIiGAcIBEFPIFOhEIgShYIgzj4g");
	this.shape_124.setTransform(188.35,85.375);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5C5C5C").s().p("AguFiIDHgoIASBYIlOBEgAktkqINDirIjoDoItDCqg");
	this.shape_125.setTransform(191.425,58.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#020202").s().p("ABBkwIDpjoICrNJIjpDogAnUBDICGgbIAzD4IAAAAIh0B0g");
	this.shape_126.setTransform(215.075,65.225);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AhbCEIgcjvIDTgYIAcDvIjTAYg");
	this.shape_127.setTransform(201.875,79.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AnYl5INPhhIBhNUItOBhgAg9ilIh/APIAnFUIFTgnIgMhlIgbjvg");
	this.shape_128.setTransform(196.05,85.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#5E5E5E").s().p("AhkFNIDSgYIAMBkIlSAngAkzleINPhhIjoDoItPBgg");
	this.shape_129.setTransform(202.8,59.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AB1k1IDojoIBiNUIjpDngAm+AOIB/gOIAcDvIAAAAIh0Bzg");
	this.shape_130.setTransform(221.85,68.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhnB6IgMjoIDbgLIAMDoIjbALg");
	this.shape_131.setTransform(207.4125,79.575);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("Am/mWINTgrIAsNYItTAsgAg5ioIh5AHIARFWIFUgSIgFhuIgMjog");
	this.shape_132.setTransform(201.6,85.35);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5E5E5E").s().p("AiLE7IAAAAIDbgLIAFBuIlUARgAk1mDINTgrIjoDnItTAsg");
	this.shape_133.setTransform(211,60.275);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("ACak4IDojoIAsNZIjoDogAmtgYIB6gHIAMDoIh1B1g");
	this.shape_134.setTransform(226.65,71.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhuB0IgDjkIDfgDIAEDkIjfADg");
	this.shape_135.setTransform(210.7625,79.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AmvmnINTgLIANNaItVALgAg2iqIh3ABIAFFXIFWgFIgChyIgEjkg");
	this.shape_136.setTransform(204.95,85.375);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#5D5D5D").s().p("AihEwIDfgDIABBzIlVAEgAk2mYINVgLIjpDoItUAKg");
	this.shape_137.setTransform(215.975,60.725);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ACvk4IDojoIAMNaIjoDngAmigvIB2gCIADDkIAAAAIh0B0g");
	this.shape_138.setTransform(229.525,73.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDgAAIAADgg");
	this.shape_139.setTransform(211.95,79.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFUAAIAAh1IAAjgIjgAAIh0AAg");
	this.shape_140.setTransform(206.15,85.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Wheel_1_0
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjoDpg");
	this.shape_141.setTransform(-336.9,74);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AojIcIAKtaIDojoINUALIgJNaIjoDog");
	this.shape_142.setTransform(-335.9,73.775);
	this.shape_142._off = true;

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AoyILIAqtZIDojnINTArIgqNZIjoDng");
	this.shape_143.setTransform(-332.525,73.775);
	this.shape_143._off = true;

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("ApLHuIBftUIDpjoINPBhIhgNUIjoDog");
	this.shape_144.setTransform(-326.975,73.775);
	this.shape_144._off = true;

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("ApqHDICptIIDojoINECrIipNIIjoDog");
	this.shape_145.setTransform(-319.275,73.775);
	this.shape_145._off = true;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AqLGJIEEsxIDojnIMsEHIkEMwIjpDog");
	this.shape_146.setTransform(-309.55,73.8);
	this.shape_146._off = true;

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AqsE/IFusGIDpjoIMCFxIlvMGIjoDog");
	this.shape_147.setTransform(-297.725,73.775);
	this.shape_147._off = true;

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("ArEDkIHhrEIDojoILAHlInhLEIjnDog");
	this.shape_148.setTransform(-284.05,73.8);
	this.shape_148._off = true;

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("ArPB6IJVplIDojnIJiJZIpWJkIjnDog");
	this.shape_149.setTransform(-268.475,73.75);
	this.shape_149._off = true;

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("ArEAEIDojmIK/nlIHjLDIjoDnIq/Hlg");
	this.shape_150.setTransform(-251.35,73.75);
	this.shape_150._off = true;

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("Aqgh2IDojnIMVlFIFEMZIjoDoIsVFFg");
	this.shape_151.setTransform(-232.6,73.75);
	this.shape_151._off = true;

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("ApdjvIDojnINKiJICJNPIjpDnItJCJg");
	this.shape_152.setTransform(-212.45,73.75);
	this.shape_152._off = true;

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("Ao/H8IBFtWIDojoINSBGIhFNXIjoDog");
	this.shape_153.setTransform(-191.1,73.75);
	this.shape_153._off = true;

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AqTF7IEYspIDpjoIMmEcIkZMpIjoDog");
	this.shape_154.setTransform(-168.65,73.75);
	this.shape_154._off = true;

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLCIjnDog");
	this.shape_155.setTransform(-145.425,73.75);
	this.shape_155._off = true;

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("ArMBAIDojnIKLopIImKSIjnDnIqMIog");
	this.shape_156.setTransform(-121.4,73.725);
	this.shape_156._off = true;

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AqnhjIDojoIMJlfIFeMOIjoDoIsJFfg");
	this.shape_157.setTransform(-96.875,73.725);
	this.shape_157._off = true;

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("ApWj4IDpjoINLh4IB5NRIjoDoItMB4g");
	this.shape_158.setTransform(-72.1,73.725);
	this.shape_158._off = true;

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("ApVHhIB3tSIDojnINMB4Ih2NSIjpDng");
	this.shape_159.setTransform(-47.25,73.725);
	this.shape_159._off = true;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AqnFMIFdsPIDojnIMKFfIldMOIjoDog");
	this.shape_160.setTransform(-22.425,73.725);
	this.shape_160._off = true;

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("ArMCoIIkqQIDnjoIKOIoIokKRIjnDog");
	this.shape_161.setTransform(2.075,73.775);
	this.shape_161._off = true;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("ArEAEIDojmIK/nlIHiLEIjoDmIq/Hlg");
	this.shape_162.setTransform(26.025,73.75);
	this.shape_162._off = true;

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AqTiSIDojoIMlkcIEaMpIjoDoIslEcg");
	this.shape_163.setTransform(49.325,73.75);
	this.shape_163._off = true;

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("ApAkUIDojoINShGIBHNXIjoDnItSBHg");
	this.shape_164.setTransform(71.8,73.75);
	this.shape_164._off = true;

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("ApcHXICGtOIDpjoINKCJIiHNOIjoDog");
	this.shape_165.setTransform(93.15,73.75);
	this.shape_165._off = true;

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AqfFfIFBsaIDojnIMWFFIlCMZIjnDog");
	this.shape_166.setTransform(113.3,73.75);
	this.shape_166._off = true;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLDIjnDng");
	this.shape_167.setTransform(132.025,73.75);
	this.shape_167._off = true;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("ArOBuINHtAIJXJlItINAgABmCMIgBACIAJgJg");
	this.shape_168.setTransform(149.15,73.75);
	this.shape_168._off = true;

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("ArEAEIDojnIK/nkIHiLFIjnDmIrAHkg");
	this.shape_169.setTransform(164.7,73.75);
	this.shape_169._off = true;

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AqshWIDojoIMBlxIFwMGIjoDoIsBFxg");
	this.shape_170.setTransform(178.425,73.775);
	this.shape_170._off = true;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AqMihIDojnIMrkHIEGMxIjoDoIsrEGg");
	this.shape_171.setTransform(190.225,73.75);
	this.shape_171._off = true;

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AprjbIDojnINEirICrNIIjpDoItDCrg");
	this.shape_172.setTransform(199.975,73.775);
	this.shape_172._off = true;

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("ApMkFIDojoINPhhIBiNUIjpDoItOBhg");
	this.shape_173.setTransform(207.675,73.75);
	this.shape_173._off = true;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AozkiIDojoINTgrIAsNYIjoDoItTArg");
	this.shape_174.setTransform(213.225,73.775);
	this.shape_174._off = true;

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AokkzIDojoINVgLIAMNaIjpDoItUALg");
	this.shape_175.setTransform(216.575,73.775);
	this.shape_175._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_141).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_143).wait(2).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(3).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_145).wait(4).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_146).wait(5).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_147).wait(6).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(7).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(8).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_150).wait(9).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(11).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_153).wait(12).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_154).wait(13).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_155).wait(14).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_156).wait(15).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_157).wait(16).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_158).wait(17).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(18).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(19).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_161).wait(20).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(21).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_163).wait(22).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_164).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_165).wait(24).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_167).wait(26).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_168).wait(27).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_169).wait(28).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_170).wait(29).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_171).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_172).wait(31).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_173).wait(32).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_174).wait(33).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_175).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(34));

	// Wheel_2
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADgg");
	this.shape_176.setTransform(-185.075,79.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFVAAIAAh1IAAjgIjhAAIh0AAg");
	this.shape_177.setTransform(-190.875,85.625);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDhAAIAAB0gAoei2IDojoINVAAIjoDog");
	this.shape_178.setTransform(-179.275,61.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AC3k2IDojoIAANUIjoDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_179.setTransform(-166.475,74);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AhyBwIADjiIDiADIgDDig");
	this.shape_180.setTransform(-184.075,79.575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AmvGoIAKtaINUALIgJNagAisCpIFVAFIABh1IACjiIjhgDIhzgBg");
	this.shape_181.setTransform(-189.85,85.375);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5D5D5D").s().p("AklGgIB0h0IDiADIgBB1gAoei7IDpjoINUALIjoDng");
	this.shape_182.setTransform(-177.775,60.725);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AC6k5IDojnIgJNZIjpDogAmdg+IBzABIgDDhIh0B0g");
	this.shape_183.setTransform(-165.325,74.325);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("Ah4BpIALjdIDmAMIgLDcg");
	this.shape_184.setTransform(-180.7,79.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("Am+GXIAqtYINTArIgqNZgAiyCjIFUASIAGh6IALjcIjmgMIhugGg");
	this.shape_185.setTransform(-186.525,85.35);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5D5D5D").s().p("Ak7GeIB0h0IDmALIgGB6gAodjHIDojnINTArIjoDog");
	this.shape_186.setTransform(-172.825,60.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("ADFk4IDojoIgqNZIjoDogAmchVIBvAGIgLDcIh0B0g");
	this.shape_187.setTransform(-161.5,75.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AiCBdIAYjUIDtAbIgYDUg");
	this.shape_188.setTransform(-175.15,79.5625);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AnWF7IBetVINPBhIheNUgAi8CYIFTAmIAOh/IAYjVIjtgbIhmgMg");
	this.shape_189.setTransform(-180.95,85.35);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5B5B5B").s().p("AlgGaIB0h0IDuAbIgOB/gAobjYIDojnINPBgIjoDog");
	this.shape_190.setTransform(-164.6,59.525);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("ADWk2IDojnIhfNUIjoDngAmXh6IBlAMIgXDVIh0B0g");
	this.shape_191.setTransform(-155.225,78.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AiOBMIApjJID0AyIgoDJg");
	this.shape_192.setTransform(-167.475,79.5625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("An2FPICptIINECqIipNJgAjICGIFOBEIAbiGIAojJIj0gzIhagSg");
	this.shape_193.setTransform(-173.275,85.375);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#575757").s().p("AmRGSIB0h0ID2AyIgbCGgAoVjtIDojoINDCrIjoDng");
	this.shape_194.setTransform(-153.225,58.575);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("ADskwIDojoIioNJIjpDogAmQirIBaASIgpDKIh0Bzg");
	this.shape_195.setTransform(-146.6,82.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AibA1IgBAAIA8i7ID9BSIg8C7g");
	this.shape_196.setTransform(-157.725,79.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AoYEVIEEswIMsEHIkEMwgAjWBvIFEBpIAtiLIA8i7Ij9hSIhIgXg");
	this.shape_197.setTransform(-163.5,85.375);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#515151").s().p("AnMGFIB1h0ID9BSIgtCLgAoKkFIDpjoIMrEHIjoDng");
	this.shape_198.setTransform(-138.9,57.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AEEkkIDojoIkEMxIjoDogAmDjnIBIAYIg8C7IABAAIh1Bzg");
	this.shape_199.setTransform(-135.825,86.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AioAXIAAgBIBQioIEBB7IhQCqg");
	this.shape_200.setTransform(-145.9,79.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("Ao3DLIFtsGIMCFxIluMGgAjiBRIEzCUIBCiMIBQipIkBh8IgygYg");
	this.shape_201.setTransform(-151.7,85.375);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#474747").s().p("AoBFwIB0h0IAAABIEDB8IhDCMgAnokbIDpjpIMBFyIjoDng");
	this.shape_202.setTransform(-123.05,56.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AEakPIDojnIluMGIjnDngAlvkpIAyAYIhQCqIh0Bzg");
	this.shape_203.setTransform(-123.05,92.25);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhlCWg");
	this.shape_204.setTransform(-132.225,79.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEZDCIBaiGIBmiVIkAiwIgZgSg");
	this.shape_205.setTransform(-138,85.375);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#3A3A3A").s().p("AoSFTIB0h0IEBCxIhbCGgAmVktIDojoILAHlIjoDng");
	this.shape_206.setTransform(-108.625,55.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AErjuIDojnInhLDIjnDogAlSlsIAaARIhmCWIh0B0g");
	this.shape_207.setTransform(-108.625,98.025);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("Ai3g3IB9h/IDyDuIh9B/g");
	this.shape_208.setTransform(-116.65,79.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("ApaAGIJUpkIJhJZInhHwIhzB0gAi3g3Ig6A5IDzDxIBzh2IB9h+IjyjvIgCgCg");
	this.shape_209.setTransform(-122.45,85.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#292929").s().p("AoaEsIA6g6IA6g6IDzDvIhzB2gAkvk0IDojoIJiJYIh0B1Ih1Bzg");
	this.shape_210.setTransform(-92.75,55.525);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AFPiBIB1hzInhHvIh0B0gAkOluIABACIh8B/Ig6A6g");
	this.shape_211.setTransform(-95.6375,97.7125);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AiihNICVhnICvEDIiTBlIgBABg");
	this.shape_212.setTransform(-99.525,79.525);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("ApQhvIK/nlIHiLEIq+HlgAhoiHIiEBbIDBEbIEYjCIgRgYIiwkDg");
	this.shape_213.setTransform(-105.325,85.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#454545").s().p("ADGGhICUhmIAQAZIkZDBgAjrgvIK/nlIjoDnIq/Hkg");
	this.shape_214.setTransform(-117.85,55.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#181818").s().p("AoTD6ICFhbICxECIABAAIh1B0gAi2ktIDnjnIHiLCIjoDog");
	this.shape_215.setTransform(-75.9,55.85);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgiCmIhqkDICvhIIBqEDIivBIg");
	this.shape_216.setTransform(-80.775,79.55);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AosjqIMVlFIFEMaIsVFFgAhSiXIiMA6ICCE9IE7iCIgYg6IhqkDg");
	this.shape_217.setTransform(-86.575,85.325);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#545454").s().p("ABFGIIAAAAICwhJIAYA7Ik8CCgAkWi2IMVlFIjoDoIsVFEg");
	this.shape_218.setTransform(-91.15,56.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#090909").s().p("AgxkZIDnjnIFEMaIjoDngAn5C4ICMg5IBqEDIh1B0g");
	this.shape_219.setTransform(-58.25,57.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AhSCLIgnj0IDMghIAnD0IjMAhg");
	this.shape_220.setTransform(-60.625,79.55);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AnpljINKiIICJNOItKCJgAg/ijIiEAVIA3FTIFQg2IgQhfIgnj0g");
	this.shape_221.setTransform(-66.425,85.35);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5D5D5D").s().p("AhIFYIAAAAIDNghIAPBfIlQA2gAkwlDINJiIIjoDoItJCIg");
	this.shape_222.setTransform(-61.65,59);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#010101").s().p("ABakyIDojoICJNOIjpDogAnKAqICDgVIAoD0Ih1B0g");
	this.shape_223.setTransform(-40.1,66.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("Ah9BjIAAAAIASjZIDpATIgSDag");
	this.shape_224.setTransform(-39.275,79.55);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AnLGIIBFtWINSBGIhFNXgAi3CdIFUAcIAKh8IARjaIjpgTIhqgJg");
	this.shape_225.setTransform(-45.1,85.35);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#5C5C5C").s().p("AlOGcIB1h0IAAAAIDpATIgKB9gAodjPIDojoINTBGIjpDog");
	this.shape_226.setTransform(-30.025,59.875);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("ADOk3IDojoIhFNXIjoDogAmZhoIBqAJIgSDZIh0B0g");
	this.shape_227.setTransform(-19.675,77.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AieAwIA/i4ID+BZIhAC4g");
	this.shape_228.setTransform(-16.825,79.5375);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AofEIIEZsqIMlEcIkYMpgAjYBqIFBBxIAxiMIA/i4Ij9hZIhEgYg");
	this.shape_229.setTransform(-22.65,85.325);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4F4F4F").s().p("AnZGBIB1h0ID+BaIgwCMgAoGkKIDojoIMlEbIjoDng");
	this.shape_230.setTransform(2.975,57.375);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AEIkgIDojoIkXMpIjoDogAl/jzIBEAXIhAC5Ih0Bzg");
	this.shape_231.setTransform(5.25,87.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AiygMIAAgBIBmiVID/CvIhmCWg");
	this.shape_232.setTransform(6.425,79.525);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEYDCIBbiGIBniVIkAiwIgagSg");
	this.shape_233.setTransform(0.6,85.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#3A3A3A").s().p("AoSFUIB1h1IgBABIEACwIhbCFgAmVktIDojnILBHlIjpDmg");
	this.shape_234.setTransform(30,55.85);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AErjtIDpjoIniLDIjnDogAlSlsIAaARIhlCWIh1B0g");
	this.shape_235.setTransform(30,98);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AithEICJhzIDSD7IiIB0g");
	this.shape_236.setTransform(30.45,79.525);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("ApYgzIKLopIImKRIqLIogAhzh+Ih8BqIDbEGIEEjdIgIgLIjTj7g");
	this.shape_237.setTransform(24.65,85.325);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#212121").s().p("AoYEVIB9hqIDTD8Ih0B0gAj0kzIDojoIIlKRIjoDog");
	this.shape_238.setTransform(54.3,55.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3D3D3D").s().p("AD/GnICIhzIAIAKIkFDdgAjRANIKMooIjpDoIqLIog");
	this.shape_239.setTransform(8.75,55.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgbCpIh0kEICqhNIB1EEIiqBNg");
	this.shape_240.setTransform(54.95,79.525);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AozjXIMJlgIFeMPIsJFfgAhViUIiMA/ICME4IE3iMIgYg1Ih0kEg");
	this.shape_241.setTransform(49.125,85.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#525252").s().p("ABZGNIABABICrhOIAYA1Ik3CMgAkQigIMJlgIjoDnIsJFfg");
	this.shape_242.setTransform(43.225,56.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0B0B0B").s().p("An+DIICMg/IB0EEIh0B0gAhHkZIDojnIFeMPIjoDng");
	this.shape_243.setTransform(77.675,56.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("Ah5hpIDQgeIAiDxIjPAeg");
	this.shape_244.setTransform(79.75,79.525);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AnilrINLh6IB6NSItMB4gAg/ijIiBASIAwFUIFSgxIgPhhIgijyg");
	this.shape_245.setTransform(73.95,85.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#5D5D5D").s().p("AhUFUIDQgeIAOBhIlRAxgAkxlOINMh5IjpDoItMB5g");
	this.shape_246.setTransform(79.5,59.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("ABlk1IDojnIB5NRIjoDogAnFAeICCgSIAiDzIh0B0g");
	this.shape_247.setTransform(100.025,67.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AiGBYIAdjRIDwAiIgdDRg");
	this.shape_248.setTransform(104.6,79.525);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AnhFtIB3tSINMB5Ih3NRgAjACSIFRAwIATiCIAdjRIjwgiIhigOg");
	this.shape_249.setTransform(98.8,85.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5A5A5A").s().p("AlwGYIB0h1IDxAjIgSCBgAoajfIDojoINMB5IjoDng");
	this.shape_250.setTransform(116.35,59.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("ADdk1IDojnIh2NRIjpDogAmViKIBiAPIgeDQIh0B1g");
	this.shape_251.setTransform(124.85,79.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AimAcIBMisIECB1IhNCsg");
	this.shape_252.setTransform(129.4,79.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AozDYIFdsPIMKFgIlcMOgAjgBXIE3CMIA+iMIBNisIkCh1Ig1gYg");
	this.shape_253.setTransform(123.575,85.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#494949").s().p("An+F1IB0h1IECB1Ig+CMgAn0kZIDpjnIMKFfIjpDng");
	this.shape_254.setTransform(152.125,56.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AEWkTIDpjoIldMPIjnDogAlzkeIA2AZIhNCtIh0Bzg");
	this.shape_255.setTransform(152.125,91.275);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("Ai2gkIBziJID6DSIhzCJg");
	this.shape_256.setTransform(153.9,79.5625);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("ArNCoIIlqQIDojoIKOIoIjpDnIojKSgAAKDoIBziJIj6jSIgLgKIjcEGIB0h0g");
	this.shape_257.setTransform(159.7,73.775);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AEwjUIDpjoIokKRIjoDogAk9mRIALAKIhyCJIh0B0g");
	this.shape_258.setTransform(177.75,101.375);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAOC1IiwkCICVhnICwECIiVBng");
	this.shape_259.setTransform(177.85,79.55);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("ApRhvIK4nfIAHgGIHjLEIq+HlgAhoiHIiEBbIDBEbIEZjCIgRgYIixkDg");
	this.shape_260.setTransform(172.05,85.325);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#454545").s().p("ADFGiIAAAAICVhnIARAZIkaDBgAjrgvIK/nlIjwDsIq3Hfg");
	this.shape_261.setTransform(159.525,55.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#181818").s().p("AoSD6ICEhbICxEDIh0BzgAi3ktIgHAFIDvjsIHjLDIjpDng");
	this.shape_262.setTransform(201.45,55.85);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AiHhgIC2hAIBZEBIi1BAIgBAAg");
	this.shape_263.setTransform(201.15,79.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AofkGIMkkcIEbMqIslEbgAhNiZIiLAwIBwFEIFBhxIgXhDIhZkBg");
	this.shape_264.setTransform(195.35,85.325);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#575757").s().p("AAlF/IC2hAIAXBCIlBBygAkejXIMlkbIjpDoIskEag");
	this.shape_265.setTransform(192.85,57.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#070707").s().p("AgRkgIDnjoIEbMpIjpDogAnwCYICLgxIBaECIABgBIh1B1g");
	this.shape_266.setTransform(223.3,59.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("Ah0htIDWgSIAUDtIjXASg");
	this.shape_267.setTransform(223.625,79.55);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AnMmIINShGIBHNWItSBHgAg6inIh9AKIAcFWIFUgcIgJhpIgUjtg");
	this.shape_268.setTransform(217.8,85.35);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#5E5E5E").s().p("Ah3FEIDWgSIAJBqIlTAcgAk0lxINRhGIjoDoItRBGg");
	this.shape_269.setTransform(225.85,59.875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("ACHk3IDojoIBINXIjpDogAm2gFIB9gLIAUDtIh0B0g");
	this.shape_270.setTransform(243.275,70.225);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AiIBVIAAgBIAgjOIDxAmIghDPg");
	this.shape_271.setTransform(244.975,79.55);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AnoFjICHtOINKCIIiHNPgAjDCPIFQA2IAViEIAhjPIjxgmIhfgQg");
	this.shape_272.setTransform(239.175,85.35);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#595959").s().p("Al6GWIB0h0IAAAAIDyAnIgVCDgAoZjjIDojoINLCIIjpDog");
	this.shape_273.setTransform(257.525,59);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("ADikzIDpjoIiHNOIjpDpgAmTiVIBfAQIghDPIh1B0g");
	this.shape_274.setTransform(265.45,80.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AijAkIBIixID/BqIhICxg");
	this.shape_275.setTransform(265.125,79.5375);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AorDrIFBsaIMWFFIlCMagAjeBeIE8CCIA4iMIBIixIj/hpIg8gZg");
	this.shape_276.setTransform(259.325,85.325);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#4C4C4C").s().p("AnyF6IB0h0IEBBpIg5CNgAn+kTIDojoIMVFFIjoDng");
	this.shape_277.setTransform(287,56.975);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AERkZIDojnIlBMaIjnDngAl4kOIA8AZIhICyIh0Bzg");
	this.shape_278.setTransform(287.6,90);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhmCWg");
	this.shape_279.setTransform(283.825,79.5625);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("ApQBwIHhrEILAHmInhLDgAjsAtIEZDCIBaiFIBmiWIj/iwIgagSg");
	this.shape_280.setTransform(278.025,85.325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#3A3A3A").s().p("AoSFUIB0h0IEACxIhaCEgAmVktIDojnILAHlIjoDmg");
	this.shape_281.setTransform(307.425,55.85);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AErjtIDojoInhLEIjnDngAlSlsIAaARIhmCWIh0B0g");
	this.shape_282.setTransform(307.425,98);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("Ai2g6IB/h+IDuD0Ih/B9g");
	this.shape_283.setTransform(301,79.55);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("ApbgFIJ9owIgdgpIJXJkIpgJZgAh8h0Ih0BzIDvD0IBshsICHiFIgBgBIjvjzg");
	this.shape_284.setTransform(295.175,85.35);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#282828").s().p("AoZEoIB0hzIDvD0IgHAIIhuBsgAkkk0IAPgPIDajZIJVJkIjnDog");
	this.shape_285.setTransform(324.9,55.55);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#363636").s().p("AEnFzIB/h+IABABIiHCEgADIl5IgOAPIAdApIp9Ivg");
	this.shape_286.setTransform(277.075,60.9875);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AANC0IivkBICVhnICwECIiWBng");
	this.shape_287.setTransform(316.55,79.575);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("ApQhvIK+nlIHjLEIq+HlgAhniGIiFBbIDBEaIEZjCIgRgZIiwkBg");
	this.shape_288.setTransform(310.725,85.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#181818").s().p("AoSD7ICEhcICwEDIh0BzgAi3ktIDnjnIHjLEIjoDng");
	this.shape_289.setTransform(340.15,55.85);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#454545").s().p("ADFGiIAAAAICVhnIARAZIkaDBgAjrgwIK/nkIjoDnIq/Hkg");
	this.shape_290.setTransform(298.2,55.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AiRhZICohRIB7EEIinBRg");
	this.shape_291.setTransform(330.2375,79.55);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("Ao4jKIMBlyIFwMHIsBFxgAhXiTIiMBDICUE1IEziUIgYgxIh8kEg");
	this.shape_292.setTransform(324.45,85.35);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#515151").s().p("ABnGRICphRIAYAwIkzCVgAkMiSIMBlyIjoDoIsBFxg");
	this.shape_293.setTransform(317.65,56.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0D0D0D").s().p("AoBDOICLhCIB8EFIh0B0gAhVkcIDnjoIFwMHIjoDog");
	this.shape_294.setTransform(353.1,56.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AiFhhIC5g8IBSD/Ii5A8g");
	this.shape_295.setTransform(342.05,79.55);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AoYkVIMrkGIEGMxIsrEGgAhLibIiLAtIBpFGIFEhpIgXhHIhSj/g");
	this.shape_296.setTransform(336.225,85.35);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#585858").s().p("AAVF6IC6g8IAXBHIlEBpgAkhjmIMrkHIjoDoIsrEFg");
	this.shape_297.setTransform(334.725,57.55);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#050505").s().p("AgCkkIDojoIEGMxIjoDogAnrCIICLgsIBSD/Ih1B0g");
	this.shape_298.setTransform(363.975,60.625);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("Ah9hmIDIgqIAyD4IjHAog");
	this.shape_299.setTransform(351.8,79.55);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("An3lPINEiqICrNIItECrgAhDihIiFAcIBDFPIFOhEIgShYIgyj4g");
	this.shape_300.setTransform(346,85.375);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#5C5C5C").s().p("AguFiIDHgoIASBYIlOBEgAktkqINDirIjoDoItDCqg");
	this.shape_301.setTransform(349.05,58.575);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#020202").s().p("ABCkwIDojoICrNJIjoDogAnTBDICFgbIAzD4Ih1B0g");
	this.shape_302.setTransform(372.7,65.225);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AhbCEIgcjvIDTgYIAcDvIjTAYg");
	this.shape_303.setTransform(359.475,79.55);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AnYl5INPhhIBiNUItPBhgAg9ilIh/APIAnFUIFSgnIgLhlIgcjvg");
	this.shape_304.setTransform(353.675,85.35);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#5E5E5E").s().p("AhkFNIDSgYIAMBkIlSAngAkyleINOhhIjoDoItPBgg");
	this.shape_305.setTransform(360.4,59.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AB2k1IDnjoIBiNUIjoDngAm+AOIB/gOIAcDvIAAAAIh0Bzg");
	this.shape_306.setTransform(379.45,68.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AhnB6IgMjoIDbgLIAMDoIjbALg");
	this.shape_307.setTransform(365.0375,79.575);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("Am/mWINTgrIAsNYItTAsgAg5ioIh5AHIARFWIFVgSIgGhuIgMjog");
	this.shape_308.setTransform(359.225,85.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#5E5E5E").s().p("AiLE7IDbgLIAGBuIlVARgAk1mDINTgrIjoDnItTAsg");
	this.shape_309.setTransform(368.625,60.275);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("ACak4IDnjoIAtNZIjpDogAmtgYIB5gHIANDpIAAAAIh0B0g");
	this.shape_310.setTransform(384.3,71.625);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AhxhwIDggDIADDkIjfADg");
	this.shape_311.setTransform(368.3875,79.575);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AmwmnINUgLIAMNaItUALgAg3iqIh2ABIAGFXIFUgFIgChyIgDjkg");
	this.shape_312.setTransform(362.6,85.375);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#5D5D5D").s().p("AiiEwIDfgDIACBzIlVAEgAk2mYINVgLIjpDoItUAKg");
	this.shape_313.setTransform(373.625,60.725);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("ACvk4IDojoIAMNaIjoDngAmigvIB2gCIADDkIh0B0g");
	this.shape_314.setTransform(387.15,73.225);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDhAAIAAB0gAoei2IDojoINVAAIjpDog");
	this.shape_315.setTransform(375.4,61.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AC2k2IDpjoIAANUIjpDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_316.setTransform(388.2,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]}).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).wait(1));

	// Wheel_2_0
	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjoDpg");
	this.shape_317.setTransform(-179.275,74);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AojIcIAKtaIDojoINVALIgKNaIjoDog");
	this.shape_318.setTransform(-178.25,73.775);
	this.shape_318._off = true;

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AoyILIAqtZIDojnINTArIgpNZIjpDng");
	this.shape_319.setTransform(-174.925,73.775);
	this.shape_319._off = true;

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("ApKHuIBetUIDpjoINOBhIheNUIjoDog");
	this.shape_320.setTransform(-169.35,73.775);
	this.shape_320._off = true;

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("ApqHDICptIIDpjoINDCrIipNIIjoDog");
	this.shape_321.setTransform(-161.675,73.775);
	this.shape_321._off = true;

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AqMGJIEEsxIDpjnIMrEHIkEMwIjoDog");
	this.shape_322.setTransform(-151.9,73.8);
	this.shape_322._off = true;

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AqrE/IFtsGIDpjoIMCFxIlvMGIjoDog");
	this.shape_323.setTransform(-140.1,73.775);
	this.shape_323._off = true;

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("ArEDkIHhrEIDnjoILBHlInhLEIjnDog");
	this.shape_324.setTransform(-126.4,73.8);
	this.shape_324._off = true;

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("ArOB6IJUplIDnjnIJjJZIpWJkIjmDog");
	this.shape_325.setTransform(-110.85,73.75);
	this.shape_325._off = true;

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("ArEAEIDnjmILAnlIHiLDIjoDnIq/Hlg");
	this.shape_326.setTransform(-93.7,73.75);
	this.shape_326._off = true;

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("Aqgh2IDojnIMVlFIFEMZIjoDoIsVFFg");
	this.shape_327.setTransform(-74.95,73.75);
	this.shape_327._off = true;

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("ApdjvIDojnINKiJICJNPIjpDnItJCJg");
	this.shape_328.setTransform(-54.8,73.75);
	this.shape_328._off = true;

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("Ao/H8IBFtWIDojoINSBGIhFNXIjoDog");
	this.shape_329.setTransform(-33.475,73.75);
	this.shape_329._off = true;

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AqTF7IEZspIDojoIMlEcIkXMpIjpDog");
	this.shape_330.setTransform(-11.05,73.75);
	this.shape_330._off = true;

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLCIjnDog");
	this.shape_331.setTransform(12.225,73.75);
	this.shape_331._off = true;

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("ArMBAIDojnIKMopIImKSIjpDnIqLIog");
	this.shape_332.setTransform(36.25,73.725);
	this.shape_332._off = true;

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AqnhjIDojoIMJlfIFeMOIjoDoIsJFfg");
	this.shape_333.setTransform(60.75,73.725);
	this.shape_333._off = true;

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("ApWj4IDojoINMh4IB5NRIjoDoItMB4g");
	this.shape_334.setTransform(85.55,73.725);
	this.shape_334._off = true;

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("ApVHhIB3tSIDojnINMB4Ih3NSIjoDng");
	this.shape_335.setTransform(110.4,73.725);
	this.shape_335._off = true;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AqnFMIFdsPIDojnIMKFfIlcMOIjoDog");
	this.shape_336.setTransform(135.2,73.725);
	this.shape_336._off = true;

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("ArNCoIIlqQIDojoIKOIoIolKRIjnDog");
	this.shape_337.setTransform(159.7,73.775);
	this.shape_337._off = true;

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("ArFAEIDpjmIK/nlIHjLEIjpDmIq+Hlg");
	this.shape_338.setTransform(183.65,73.75);
	this.shape_338._off = true;

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AqTiSIDojoIMlkcIEaMpIjoDoIslEcg");
	this.shape_339.setTransform(206.975,73.75);
	this.shape_339._off = true;

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("ApAkUIDojoINShGIBHNXIjoDnItSBHg");
	this.shape_340.setTransform(229.425,73.75);
	this.shape_340._off = true;

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("ApcHXICHtOIDojoINKCJIiHNOIjoDog");
	this.shape_341.setTransform(250.8,73.75);
	this.shape_341._off = true;

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AqfFfIFBsaIDpjnIMVFFIlBMZIjpDog");
	this.shape_342.setTransform(270.925,73.75);
	this.shape_342._off = true;

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLDIjnDng");
	this.shape_343.setTransform(289.625,73.75);
	this.shape_343._off = true;

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("ArPBuINItAIJXJlItINAg");
	this.shape_344.setTransform(306.775,73.75);
	this.shape_344._off = true;

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("ArFAEIDojnIK/nkIHjLFIjoDmIq/Hkg");
	this.shape_345.setTransform(322.35,73.75);
	this.shape_345._off = true;

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AqshWIDojoIMBlxIFwMGIjoDoIsBFxg");
	this.shape_346.setTransform(336.05,73.775);
	this.shape_346._off = true;

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AqMihIDojnIMrkHIEGMxIjoDoIsrEGg");
	this.shape_347.setTransform(347.85,73.75);
	this.shape_347._off = true;

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AprjbIDpjnINDirICrNIIjoDoItECrg");
	this.shape_348.setTransform(357.6,73.775);
	this.shape_348._off = true;

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("ApMkFIDpjoINOhhIBiNUIjoDoItPBhg");
	this.shape_349.setTransform(365.275,73.75);
	this.shape_349._off = true;

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("Ao0kiIDpjoINTgrIAtNYIjpDoItTArg");
	this.shape_350.setTransform(370.85,73.775);
	this.shape_350._off = true;

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AokkzIDojoINVgLIALNaIjoDoItUALg");
	this.shape_351.setTransform(374.2,73.775);
	this.shape_351._off = true;

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjpDpg");
	this.shape_352.setTransform(375.4,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_317}]}).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_318).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_319).wait(2).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_320).wait(3).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_321).wait(4).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_322).wait(5).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_323).wait(6).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_324).wait(7).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_325).wait(8).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_326).wait(9).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_327).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_328).wait(11).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_329).wait(12).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_330).wait(13).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_331).wait(14).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_332).wait(15).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_333).wait(16).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_334).wait(17).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_335).wait(18).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_336).wait(19).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_337).wait(20).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_338).wait(21).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_339).wait(22).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_340).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_341).wait(24).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_342).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_343).wait(26).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_344).wait(27).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_345).wait(28).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_346).wait(29).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_347).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_348).wait(31).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_349).wait(32).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_350).wait(33).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_351).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(34));

	// Car
	this.Car2Color = new lib.Car_2_Color();
	this.Car2Color.name = "Car2Color";
	this.Car2Color.setTransform(-231.3,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.Car2Color).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.7,-146,951.5,292.1);


(lib.Car_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_70 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(35).call(this.frame_70).wait(35).call(this.frame_105).wait(35).call(this.frame_140).wait(35).call(this.frame_175).wait(36));

	// Wheel_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADgg");
	this.shape.setTransform(-342.725,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFVAAIAAh1IAAjgIjhAAIh0AAg");
	this.shape_1.setTransform(-348.525,85.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDgAAIAAB0gAoei2IDojoINVAAIjoDog");
	this.shape_2.setTransform(-336.9,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AC3k2IDojoIAANUIjoDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_3.setTransform(-324.1,74);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyBwIACjiIDjADIgDDig");
	this.shape_4.setTransform(-341.675,79.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AmvGoIAKtaINUALIgJNagAisCpIFVAFIABh1IADjiIjigDIhzgBg");
	this.shape_5.setTransform(-347.5,85.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AklGgIB1h0IDiADIgCB1gAoei7IDpjoINUALIjoDng");
	this.shape_6.setTransform(-335.425,60.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AC6k5IDojnIgJNZIjoDogAmdg+IByABIgCDhIh0B0g");
	this.shape_7.setTransform(-322.975,74.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4BpIALjdIDmAMIgLDcg");
	this.shape_8.setTransform(-338.35,79.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Am+GXIAqtYINTArIgqNZgAiyCjIFVASIAFh6IALjcIjmgMIhugGg");
	this.shape_9.setTransform(-344.15,85.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("Ak7GeIB0h0IDmALIgGB6gAodjHIDojnINTArIjoDog");
	this.shape_10.setTransform(-330.425,60.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ADFk4IDojoIgqNZIjoDogAmchVIBvAGIgLDcIh0B0g");
	this.shape_11.setTransform(-319.125,75.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiCBdIAAAAIAYjUIDtAbIgYDUg");
	this.shape_12.setTransform(-332.775,79.5625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AnWF7IBetVINQBhIhgNUgAi8CYIFTAmIAOh/IAYjVIjtgbIhmgMg");
	this.shape_13.setTransform(-338.6,85.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B5B5B").s().p("AlgGaIB1h0IAAAAIDtAbIgOB/gAobjYIDojnINPBgIjoDog");
	this.shape_14.setTransform(-322.225,59.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADWk2IDojnIhfNUIjoDngAmYh6IBnAMIgYDVIh0B0g");
	this.shape_15.setTransform(-312.85,78.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiOBMIAAAAIAojJID1AyIgoDJg");
	this.shape_16.setTransform(-325.075,79.5625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("An2FPICptIINECqIipNJgAjJCGIFPBEIAbiGIAojJIj0gzIhagSg");
	this.shape_17.setTransform(-330.9,85.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#575757").s().p("AmRGSIB1h0IAAAAID1AyIgbCGgAoWjtIDpjoINDCrIjoDng");
	this.shape_18.setTransform(-310.85,58.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ADskwIDojoIipNJIjoDogAmQirIBaASIgpDJIh0B0g");
	this.shape_19.setTransform(-304.225,82.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AicA1IA8i7ID9BSIg8C7g");
	this.shape_20.setTransform(-315.325,79.5875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AoXEVIEEswIMsEHIkFMwgAjWBvIFFBpIAsiLIA8i7Ij9hSIhIgXg");
	this.shape_21.setTransform(-321.15,85.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#515151").s().p("AnMGFIB0h0ID+BSIgsCLgAoJkFIDojoIMrEHIjoDng");
	this.shape_22.setTransform(-296.525,57.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AEEkkIDojoIkEMxIjoDogAmDjnIBIAYIg7C7Ih1Bzg");
	this.shape_23.setTransform(-293.475,86.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AioAXIAAAAIBQipIECB8IhRCpg");
	this.shape_24.setTransform(-303.55,79.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ao4DLIFvsGIMBFxIltMGgAjjBRIE0CUIBCiMIBRipIkCh8IgygYg");
	this.shape_25.setTransform(-309.35,85.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#474747").s().p("AoBFwIB0h0IAAABIECB8IhCCMgAnokbIDojpIMCFyIjoDng");
	this.shape_26.setTransform(-280.675,56.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AEakPIDojnIluMGIjnDngAlvkpIAyAYIhQCqIh0Bzg");
	this.shape_27.setTransform(-280.675,92.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiygMIgBAAIBmiWIEBCvIhmCWg");
	this.shape_28.setTransform(-289.85,79.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjtAtIEaDCIBbiGIBmiVIkBiwIgZgSg");
	this.shape_29.setTransform(-295.65,85.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3A3A").s().p("AoSFTIB0h0IEBCxIhbCGgAmVktIDpjoIK/HlIjoDng");
	this.shape_30.setTransform(-266.275,55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AErjuIDojnInhLDIjnDogAlSlsIAaARIhmCWIAAAAIh0B0g");
	this.shape_31.setTransform(-266.275,98.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ai3g3IB9h/IDxDuIh8B/g");
	this.shape_32.setTransform(-274.3,79.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("ApbAGIJWpkIJgJZInhHwIh0B0gAi3g3Ig6A5ID0DxIByh2IB8h+IjxjvIgCgCg");
	this.shape_33.setTransform(-280.1,85.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#292929").s().p("AoaEsIA6g6IA6g6IDzDwIhyB1gAkvk0IDpjoIJhJYIh0B1Ih1Bzg");
	this.shape_34.setTransform(-250.375,55.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AFPiBIB1hzInhHvIh1B0gAkOluIABACIh8B/Ig6A6g");
	this.shape_35.setTransform(-253.2625,97.7125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiihNICVhnICwECIiUBmIgBABg");
	this.shape_36.setTransform(-257.15,79.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("ApQhvIK+nlIHkLEIq/HlgAhoiHIiFBbIDCEbIEYjCIgQgZIixkCg");
	this.shape_37.setTransform(-262.95,85.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#454545").s().p("ADGGhICUhmIARAZIkaDBgAjrgvIK/nlIjoDnIq/Hkg");
	this.shape_38.setTransform(-275.5,55.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#181818").s().p("AoTD6ICFhbICxECIABAAIh1B0gAi3ktIDojnIHjLCIjoDog");
	this.shape_39.setTransform(-233.55,55.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiMhdICvhIIBqEDIivBIg");
	this.shape_40.setTransform(-238.425,79.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AosjqIMVlFIFEMaIsVFFgAhSiXIiMA6ICCE9IE7iCIgYg6IhqkDg");
	this.shape_41.setTransform(-244.2,85.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#545454").s().p("ABFGIICwhIIAYA6Ik7CCgAkWi2IMVlFIjoDoIsVFEg");
	this.shape_42.setTransform(-248.8,56.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#090909").s().p("AgxkZIDnjnIFEMaIjoDngAn5C4ICMg5IBqEDIh0B0g");
	this.shape_43.setTransform(-215.9,57.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ah6hpIDNghIAnD0IjMAhg");
	this.shape_44.setTransform(-218.275,79.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AnpljINKiIICJNOItKCJgAhAijIiDAVIA3FTIFQg2IgQhfIgnj0g");
	this.shape_45.setTransform(-224.075,85.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5D5D5D").s().p("AhHFYIDMghIAPBfIlPA2gAkwlDINKiIIjoDoItLCIg");
	this.shape_46.setTransform(-219.3,59);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#010101").s().p("ABakyIDojoICJNOIjpDogAnKAqICDgVIAoD0Ih0B0g");
	this.shape_47.setTransform(-197.75,66.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ah9BjIAAAAIASjZIDpATIgSDag");
	this.shape_48.setTransform(-196.925,79.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AnLGIIBFtWINSBGIhFNXgAi3CdIFTAcIAKh8IASjaIjpgTIhqgJg");
	this.shape_49.setTransform(-202.725,85.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5C5C5C").s().p("AlNGcIB0h0IAAAAIDpATIgKB9gAodjPIDpjoINSBGIjpDog");
	this.shape_50.setTransform(-187.675,59.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ADNk3IDpjoIhFNXIjoDogAmZhoIBqAJIgSDZIh0B0g");
	this.shape_51.setTransform(-177.3,77.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AieAwIAAAAIBAi4ID9BZIhAC4g");
	this.shape_52.setTransform(-174.475,79.5375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AoeEIIEYsqIMlEcIkYMpgAjYBqIFBBxIAwiMIBAi4Ij9hZIhEgYg");
	this.shape_53.setTransform(-180.275,85.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4F4F4F").s().p("AnYGBIB0h0ID+BaIgwCMgAoHkKIDpjoIMmEbIjpDng");
	this.shape_54.setTransform(-154.65,57.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AEIkgIDpjoIkZMpIjnDogAmAjzIBFAXIhBC5IABAAIh0Bzg");
	this.shape_55.setTransform(-152.35,87.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhmCWg");
	this.shape_56.setTransform(-151.225,79.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEZDCIBaiGIBmiVIj/iwIgagSg");
	this.shape_57.setTransform(-157.025,85.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A3A3A").s().p("AoSFUIB0h0IEACwIhaCFgAmVktIDojnILAHlIjoDmg");
	this.shape_58.setTransform(-127.625,55.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AErjtIDojoInhLDIjnDogAlSlsIAaARIhmCWIh0B0g");
	this.shape_59.setTransform(-127.625,98);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AithDICJh0IDSD7IiJB0g");
	this.shape_60.setTransform(-127.175,79.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("ApYgzIKLopIInKRIqMIogAhzh9Ih9BpIDcEGIEFjdIgJgLIjTj7g");
	this.shape_61.setTransform(-133,85.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#212121").s().p("AoYEVIB9hqIDTD8Ih0B0gAj0kzIDojoIIlKRIjoDog");
	this.shape_62.setTransform(-103.35,55.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D3D3D").s().p("AD+GnICJh0IAJALIkGDdgAjRANIKLooIjoDoIqLIog");
	this.shape_63.setTransform(-148.9,55.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgbCpIh0kEICrhNIB0EEIirBNg");
	this.shape_64.setTransform(-102.675,79.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AozjXIMJlgIFeMPIsJFfgAhViUIiMA/ICME4IE3iMIgYg1Ih0kEg");
	this.shape_65.setTransform(-108.475,85.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#525252").s().p("ABZGNIAAABICshOIAYA1Ik3CMgAkQigIMJlgIjoDnIsJFfg");
	this.shape_66.setTransform(-114.4,56.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0B0B0B").s().p("An+DIICMg/IB0EEIh0B0gAhGkZIDnjnIFeMPIjoDng");
	this.shape_67.setTransform(-79.975,56.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhWCIIgijxIDPgeIAiDxIjPAeg");
	this.shape_68.setTransform(-77.8875,79.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AnilrINMh6IB5NSItMB4gAg+ijIiDASIAxFUIFRgxIgOhhIgijyg");
	this.shape_69.setTransform(-83.7,85.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5D5D5D").s().p("AhTFUIDPgeIAOBhIlRAxgAkxlOINLh5IjoDoItMB5g");
	this.shape_70.setTransform(-78.15,59.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("ABlk1IDojnIB5NRIjoDogAnFAeICCgSIAiDzIABAAIh1B0g");
	this.shape_71.setTransform(-57.625,67.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AiGBYIAAAAIAdjRIDwAiIgdDRg");
	this.shape_72.setTransform(-53.05,79.525);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AnhFtIB3tSINMB5Ih3NRgAjACSIFSAwIASiCIAdjRIjwgiIhigOg");
	this.shape_73.setTransform(-58.85,85.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5A5A5A").s().p("AlvGYIB0h1IDwAjIgSCBgAoZjfIDojoINLB5IjnDng");
	this.shape_74.setTransform(-41.3,59.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ADek1IDnjnIh2NRIjpDogAmViKIBiAPIgdDQIAAAAIh0B1g");
	this.shape_75.setTransform(-32.8,79.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AinAcIBNisIECB1IhNCsg");
	this.shape_76.setTransform(-28.225,79.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AozDYIFdsPIMKFgIldMOgAjhBXIE3CMIA/iMIBNisIkCh0Ig2gZg");
	this.shape_77.setTransform(-34.025,85.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#494949").s().p("An+F1IB0h1IEDB1Ig/CMgAnzkZIDojnIMKFfIjoDng");
	this.shape_78.setTransform(-5.525,56.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AEXkTIDojoIldMPIjnDogAlzkeIA2AZIhNCtIh0Bzg");
	this.shape_79.setTransform(-5.525,91.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ai2gkIBziKID6DTIhzCKg");
	this.shape_80.setTransform(-3.725,79.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("ArMCoIIkqQIDnjoIKOIoIjoDnIojKSgAAKDoIBziJIj6jTIgLgJIjcEGIB0h0g");
	this.shape_81.setTransform(2.075,73.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AExjUIDojoIojKRIjoDogAk8mRIALAJIhzCKIh0B0g");
	this.shape_82.setTransform(20.1,101.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAOC1IiwkDICVhmICwECIiVBng");
	this.shape_83.setTransform(20.2125,79.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("ApQhvIK3nfIAIgGIHiLEIq/HlgAhoiHIiFBbIDCEbIEYjCIgQgYIixkDg");
	this.shape_84.setTransform(14.425,85.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#454545").s().p("ADFGiIABAAICUhnIARAZIkaDBgAjrgvIK/nlIjwDsIq3Hfg");
	this.shape_85.setTransform(1.9,55.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#181818").s().p("AoTD6ICGhcICwEEIh0BzgAi2ktIgIAFIDvjsIHiLDIjoDng");
	this.shape_86.setTransform(43.8,55.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AiHhgIC1hAIBaEBIi1BAg");
	this.shape_87.setTransform(43.5125,79.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AofkGIMlkcIEaMqIslEbgAhOiaIiLAxIByFEIFBhxIgYhDIhakBg");
	this.shape_88.setTransform(37.725,85.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#575757").s().p("AAlF/IC2hAIAYBCIlBBygAkdjXIMkkbIjoDoIslEag");
	this.shape_89.setTransform(35.2,57.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#070707").s().p("AgQkgIDnjoIEaMpIjoDogAnwCYICLgyIBaEDIh0B0g");
	this.shape_90.setTransform(65.65,59.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ah1htIDXgSIATDtIjWASg");
	this.shape_91.setTransform(65.975,79.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AnMmIINShGIBHNWItSBHgAg7inIh8AKIAcFWIFTgcIgJhpIgTjtg");
	this.shape_92.setTransform(60.2,85.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5E5E5E").s().p("Ah4FEIDXgSIAIBqIlSAcgAk1lxINThGIjpDoItRBGg");
	this.shape_93.setTransform(68.25,59.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("ACHk3IDpjoIBHNXIjoDogAm2gFIB9gLIAUDtIh0B0g");
	this.shape_94.setTransform(85.625,70.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AiIBVIAgjPIDxAmIggDPg");
	this.shape_95.setTransform(87.35,79.55);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AnoFjICGtOINLCIIiHNPgAjCCPIFPA2IAWiEIAgjPIjxgmIhegQg");
	this.shape_96.setTransform(81.55,85.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#595959").s().p("Al6GWIB0h0IDyAnIgVCDgAoZjjIDpjoINKCIIjoDog");
	this.shape_97.setTransform(99.875,59);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("ADikzIDojoIiHNOIjoDpgAmTiVIBfAQIghDPIh0B0g");
	this.shape_98.setTransform(107.825,80.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AijAkIAAAAIBIixID/BpIhICyg");
	this.shape_99.setTransform(107.5,79.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AorDrIFCsaIMVFFIlBMagAjdBeIE7CCIA4iMIBJixIkAhpIg8gZg");
	this.shape_100.setTransform(101.675,85.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4C4C4C").s().p("AnyF6IB0h0IEABqIg4CMgAn/kTIDojoIMWFFIjoDng");
	this.shape_101.setTransform(129.4,56.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AERkZIDojnIlCMaIjmDngAl4kOIA8AZIhICyIAAAAIh0Bzg");
	this.shape_102.setTransform(130,90);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AiygMIABgBIBliVID/CvIhmCWg");
	this.shape_103.setTransform(126.2,79.5375);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("ApQBwIHhrEILAHmInhLDgAjsAtIEYDCIBbiFIBmiWIj/iwIgagSg");
	this.shape_104.setTransform(120.4,85.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3A3A3A").s().p("AoSFUIB1h1IgBABIEACwIhbCFgAmVktIDojnILAHlIjoDmg");
	this.shape_105.setTransform(149.8,55.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AErjtIDojoIngLEIjoDngAlSlsIAaARIhlCWIh1B0g");
	this.shape_106.setTransform(149.8,98);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ai2g6IB/h+IDuD0IgPAPIgIAHIhoBng");
	this.shape_107.setTransform(143.35,79.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("ApagFIJ9owIgegpIJXJkIpgJZgAh8h0Ih0BzIDvD0IDMjMIAnglIgBgBIjvjzg");
	this.shape_108.setTransform(137.55,85.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#282828").s().p("AoZEoIB0hzIDvD0IBohnIgBACIgOANIjNDMgAkjk0IAOgPIDajZIJWJkIjoDog");
	this.shape_109.setTransform(167.25,55.55);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#363636").s().p("AGOE9IAJgJIAPgPIABAAIgnAmgADIlKIgOAPIAeApIp9Ivg");
	this.shape_110.setTransform(119.45,56.2375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AiihNICWhnICvECIiVBng");
	this.shape_111.setTransform(158.9,79.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("ApQhvIK/nlIHjLEIrAHlgAhoiGIiFBbIDCEaIEYjCIgQgZIiwkBg");
	this.shape_112.setTransform(153.1,85.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#181818").s().p("AoTD7ICFhcICxEDIh0BzgAi2ktIDnjnIHiLEIjnDng");
	this.shape_113.setTransform(182.5,55.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#454545").s().p("ADFGiICVhnIARAZIkaDBgAjrgwIK/nkIjoDnIq/Hkg");
	this.shape_114.setTransform(140.55,55.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AiRhZICnhRIB8EEIioBRg");
	this.shape_115.setTransform(172.625,79.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("Ao4jKIMAlyIFxMHIsBFxgAhXiTIiMBDICUE1IEziUIgXgxIh8kEg");
	this.shape_116.setTransform(166.8,85.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#515151").s().p("ABoGRICphSIAXAxIkzCVgAkMiSIMBlyIjpDoIsAFxg");
	this.shape_117.setTransform(160,56.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0D0D0D").s().p("AoCDOICMhCIB8EFIh0B0gAhVkcIDnjoIFxMHIjpDog");
	this.shape_118.setTransform(195.475,56.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgzCeIhSj/IC5g8IBSD/Ii5A8g");
	this.shape_119.setTransform(184.4,79.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AoYkVIMrkGIEGMxIsrEGgAhMibIiKAtIBpFGIFEhpIgXhHIhSj/g");
	this.shape_120.setTransform(178.625,85.35);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#585858").s().p("AAVF6IC6g8IAXBHIlEBpgAkhjmIMrkHIjoDoIsrEFg");
	this.shape_121.setTransform(177.1,57.55);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#050505").s().p("AgBkkIDnjoIEGMxIjoDogAnrCIICKgsIBTD/IAAAAIh0B0g");
	this.shape_122.setTransform(206.325,60.625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AhKCQIgzj2IDIgqIAzD4IjIAog");
	this.shape_123.setTransform(194.1625,79.55);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("An3lPINDiqICrNIItDCrgAhCihIiGAcIBEFPIFOhEIgShYIgzj4g");
	this.shape_124.setTransform(188.35,85.375);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5C5C5C").s().p("AguFiIDHgoIASBYIlOBEgAktkqINDirIjoDoItDCqg");
	this.shape_125.setTransform(191.425,58.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#020202").s().p("ABBkwIDpjoICrNJIjpDogAnUBDICGgbIAzD4IAAAAIh0B0g");
	this.shape_126.setTransform(215.075,65.225);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AhbCEIgcjvIDTgYIAcDvIjTAYg");
	this.shape_127.setTransform(201.875,79.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AnYl5INPhhIBhNUItOBhgAg9ilIh/APIAnFUIFTgnIgMhlIgbjvg");
	this.shape_128.setTransform(196.05,85.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#5E5E5E").s().p("AhkFNIDSgYIAMBkIlSAngAkzleINPhhIjoDoItPBgg");
	this.shape_129.setTransform(202.8,59.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AB1k1IDojoIBiNUIjpDngAm+AOIB/gOIAcDvIAAAAIh0Bzg");
	this.shape_130.setTransform(221.85,68.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhnB6IgMjoIDbgLIAMDoIjbALg");
	this.shape_131.setTransform(207.4125,79.575);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("Am/mWINTgrIAsNYItTAsgAg5ioIh5AHIARFWIFUgSIgFhuIgMjog");
	this.shape_132.setTransform(201.6,85.35);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5E5E5E").s().p("AiLE7IAAAAIDbgLIAFBuIlUARgAk1mDINTgrIjoDnItTAsg");
	this.shape_133.setTransform(211,60.275);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("ACak4IDojoIAsNZIjoDogAmtgYIB6gHIAMDoIh1B1g");
	this.shape_134.setTransform(226.65,71.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhuB0IgDjkIDfgDIAEDkIjfADg");
	this.shape_135.setTransform(210.7625,79.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AmvmnINTgLIANNaItVALgAg2iqIh3ABIAFFXIFWgFIgChyIgEjkg");
	this.shape_136.setTransform(204.95,85.375);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#5D5D5D").s().p("AihEwIDfgDIABBzIlVAEgAk2mYINVgLIjpDoItUAKg");
	this.shape_137.setTransform(215.975,60.725);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ACvk4IDojoIAMNaIjoDngAmigvIB2gCIADDkIAAAAIh0B0g");
	this.shape_138.setTransform(229.525,73.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDgAAIAADgg");
	this.shape_139.setTransform(211.95,79.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFUAAIAAh1IAAjgIjgAAIh0AAg");
	this.shape_140.setTransform(206.15,85.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_3,p:{x:230.575}},{t:this.shape_2,p:{x:217.75}},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{x:-324.1}},{t:this.shape_2,p:{x:-336.9}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Wheel_1_0
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjoDpg");
	this.shape_141.setTransform(-336.9,74);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AojIcIAKtaIDojoINUALIgJNaIjoDog");
	this.shape_142.setTransform(-335.9,73.775);
	this.shape_142._off = true;

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AoyILIAqtZIDojnINTArIgqNZIjoDng");
	this.shape_143.setTransform(-332.525,73.775);
	this.shape_143._off = true;

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("ApLHuIBftUIDpjoINPBhIhgNUIjoDog");
	this.shape_144.setTransform(-326.975,73.775);
	this.shape_144._off = true;

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("ApqHDICptIIDojoINECrIipNIIjoDog");
	this.shape_145.setTransform(-319.275,73.775);
	this.shape_145._off = true;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AqLGJIEEsxIDojnIMsEHIkEMwIjpDog");
	this.shape_146.setTransform(-309.55,73.8);
	this.shape_146._off = true;

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AqsE/IFusGIDpjoIMCFxIlvMGIjoDog");
	this.shape_147.setTransform(-297.725,73.775);
	this.shape_147._off = true;

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("ArEDkIHhrEIDojoILAHlInhLEIjnDog");
	this.shape_148.setTransform(-284.05,73.8);
	this.shape_148._off = true;

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("ArPB6IJVplIDojnIJiJZIpWJkIjnDog");
	this.shape_149.setTransform(-268.475,73.75);
	this.shape_149._off = true;

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("ArEAEIDojmIK/nlIHjLDIjoDnIq/Hlg");
	this.shape_150.setTransform(-251.35,73.75);
	this.shape_150._off = true;

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("Aqgh2IDojnIMVlFIFEMZIjoDoIsVFFg");
	this.shape_151.setTransform(-232.6,73.75);
	this.shape_151._off = true;

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("ApdjvIDojnINKiJICJNPIjpDnItJCJg");
	this.shape_152.setTransform(-212.45,73.75);
	this.shape_152._off = true;

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("Ao/H8IBFtWIDojoINSBGIhFNXIjoDog");
	this.shape_153.setTransform(-191.1,73.75);
	this.shape_153._off = true;

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AqTF7IEYspIDpjoIMmEcIkZMpIjoDog");
	this.shape_154.setTransform(-168.65,73.75);
	this.shape_154._off = true;

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLCIjnDog");
	this.shape_155.setTransform(-145.425,73.75);
	this.shape_155._off = true;

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("ArMBAIDojnIKLopIImKSIjnDnIqMIog");
	this.shape_156.setTransform(-121.4,73.725);
	this.shape_156._off = true;

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AqnhjIDojoIMJlfIFeMOIjoDoIsJFfg");
	this.shape_157.setTransform(-96.875,73.725);
	this.shape_157._off = true;

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("ApWj4IDpjoINLh4IB5NRIjoDoItMB4g");
	this.shape_158.setTransform(-72.1,73.725);
	this.shape_158._off = true;

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("ApVHhIB3tSIDojnINMB4Ih2NSIjpDng");
	this.shape_159.setTransform(-47.25,73.725);
	this.shape_159._off = true;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AqnFMIFdsPIDojnIMKFfIldMOIjoDog");
	this.shape_160.setTransform(-22.425,73.725);
	this.shape_160._off = true;

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("ArMCoIIkqQIDnjoIKOIoIokKRIjnDog");
	this.shape_161.setTransform(2.075,73.775);
	this.shape_161._off = true;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("ArEAEIDojmIK/nlIHiLEIjoDmIq/Hlg");
	this.shape_162.setTransform(26.025,73.75);
	this.shape_162._off = true;

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AqTiSIDojoIMlkcIEaMpIjoDoIslEcg");
	this.shape_163.setTransform(49.325,73.75);
	this.shape_163._off = true;

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("ApAkUIDojoINShGIBHNXIjoDnItSBHg");
	this.shape_164.setTransform(71.8,73.75);
	this.shape_164._off = true;

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("ApcHXICGtOIDpjoINKCJIiHNOIjoDog");
	this.shape_165.setTransform(93.15,73.75);
	this.shape_165._off = true;

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AqfFfIFBsaIDojnIMWFFIlCMZIjnDog");
	this.shape_166.setTransform(113.3,73.75);
	this.shape_166._off = true;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLDIjnDng");
	this.shape_167.setTransform(132.025,73.75);
	this.shape_167._off = true;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("ArOBuINHtAIJXJlItINAgABmCMIgBACIAJgJg");
	this.shape_168.setTransform(149.15,73.75);
	this.shape_168._off = true;

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("ArEAEIDojnIK/nkIHiLFIjnDmIrAHkg");
	this.shape_169.setTransform(164.7,73.75);
	this.shape_169._off = true;

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AqshWIDojoIMBlxIFwMGIjoDoIsBFxg");
	this.shape_170.setTransform(178.425,73.775);
	this.shape_170._off = true;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AqMihIDojnIMrkHIEGMxIjoDoIsrEGg");
	this.shape_171.setTransform(190.225,73.75);
	this.shape_171._off = true;

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AprjbIDojnINEirICrNIIjpDoItDCrg");
	this.shape_172.setTransform(199.975,73.775);
	this.shape_172._off = true;

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("ApMkFIDojoINPhhIBiNUIjpDoItOBhg");
	this.shape_173.setTransform(207.675,73.75);
	this.shape_173._off = true;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AozkiIDojoINTgrIAsNYIjoDoItTArg");
	this.shape_174.setTransform(213.225,73.775);
	this.shape_174._off = true;

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AokkzIDojoINVgLIAMNaIjpDoItUALg");
	this.shape_175.setTransform(216.575,73.775);
	this.shape_175._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_141).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).to({_off:true},1).wait(34).to({_off:false,x:217.75},0).to({_off:true},1).wait(34).to({_off:false,x:-336.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_143).wait(2).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(3).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_145).wait(4).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_146).wait(5).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_147).wait(6).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(7).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(8).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_150).wait(9).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(11).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_153).wait(12).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_154).wait(13).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_155).wait(14).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_156).wait(15).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_157).wait(16).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_158).wait(17).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(18).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(19).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_161).wait(20).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(21).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_163).wait(22).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_164).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_165).wait(24).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_167).wait(26).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_168).wait(27).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_169).wait(28).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_170).wait(29).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_171).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_172).wait(31).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_173).wait(32).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_174).wait(33).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_175).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(34));

	// Wheel_2
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADgg");
	this.shape_176.setTransform(-185.075,79.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AmqGrIAAtVINVAAIAANVgAiqCrIFVAAIAAh1IAAjgIjhAAIh0AAg");
	this.shape_177.setTransform(-190.875,85.625);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDhAAIAAB0gAoei2IDojoINVAAIjoDog");
	this.shape_178.setTransform(-179.275,61.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AC3k2IDojoIAANUIjoDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_179.setTransform(-166.475,74);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AhyBwIADjiIDiADIgDDig");
	this.shape_180.setTransform(-184.075,79.575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AmvGoIAKtaINUALIgJNagAisCpIFVAFIABh1IACjiIjhgDIhzgBg");
	this.shape_181.setTransform(-189.85,85.375);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5D5D5D").s().p("AklGgIB0h0IDiADIgBB1gAoei7IDpjoINUALIjoDng");
	this.shape_182.setTransform(-177.775,60.725);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AC6k5IDojnIgJNZIjpDogAmdg+IBzABIgDDhIh0B0g");
	this.shape_183.setTransform(-165.325,74.325);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("Ah4BpIALjdIDmAMIgLDcg");
	this.shape_184.setTransform(-180.7,79.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("Am+GXIAqtYINTArIgqNZgAiyCjIFUASIAGh6IALjcIjmgMIhugGg");
	this.shape_185.setTransform(-186.525,85.35);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5D5D5D").s().p("Ak7GeIB0h0IDmALIgGB6gAodjHIDojnINTArIjoDog");
	this.shape_186.setTransform(-172.825,60.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("ADFk4IDojoIgqNZIjoDogAmchVIBvAGIgLDcIh0B0g");
	this.shape_187.setTransform(-161.5,75.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AiCBdIAYjUIDtAbIgYDUg");
	this.shape_188.setTransform(-175.15,79.5625);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AnWF7IBetVINPBhIheNUgAi8CYIFTAmIAOh/IAYjVIjtgbIhmgMg");
	this.shape_189.setTransform(-180.95,85.35);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5B5B5B").s().p("AlgGaIB0h0IDuAbIgOB/gAobjYIDojnINPBgIjoDog");
	this.shape_190.setTransform(-164.6,59.525);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("ADWk2IDojnIhfNUIjoDngAmXh6IBlAMIgXDVIh0B0g");
	this.shape_191.setTransform(-155.225,78.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AiOBMIApjJID0AyIgoDJg");
	this.shape_192.setTransform(-167.475,79.5625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("An2FPICptIINECqIipNJgAjICGIFOBEIAbiGIAojJIj0gzIhagSg");
	this.shape_193.setTransform(-173.275,85.375);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#575757").s().p("AmRGSIB0h0ID2AyIgbCGgAoVjtIDojoINDCrIjoDng");
	this.shape_194.setTransform(-153.225,58.575);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("ADskwIDojoIioNJIjpDogAmQirIBaASIgpDKIh0Bzg");
	this.shape_195.setTransform(-146.6,82.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AibA1IgBAAIA8i7ID9BSIg8C7g");
	this.shape_196.setTransform(-157.725,79.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AoYEVIEEswIMsEHIkEMwgAjWBvIFEBpIAtiLIA8i7Ij9hSIhIgXg");
	this.shape_197.setTransform(-163.5,85.375);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#515151").s().p("AnMGFIB1h0ID9BSIgtCLgAoKkFIDpjoIMrEHIjoDng");
	this.shape_198.setTransform(-138.9,57.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AEEkkIDojoIkEMxIjoDogAmDjnIBIAYIg8C7IABAAIh1Bzg");
	this.shape_199.setTransform(-135.825,86.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AioAXIAAgBIBQioIEBB7IhQCqg");
	this.shape_200.setTransform(-145.9,79.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("Ao3DLIFtsGIMCFxIluMGgAjiBRIEzCUIBCiMIBQipIkBh8IgygYg");
	this.shape_201.setTransform(-151.7,85.375);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#474747").s().p("AoBFwIB0h0IAAABIEDB8IhDCMgAnokbIDpjpIMBFyIjoDng");
	this.shape_202.setTransform(-123.05,56.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AEakPIDojnIluMGIjnDngAlvkpIAyAYIhQCqIh0Bzg");
	this.shape_203.setTransform(-123.05,92.25);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhlCWg");
	this.shape_204.setTransform(-132.225,79.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEZDCIBaiGIBmiVIkAiwIgZgSg");
	this.shape_205.setTransform(-138,85.375);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#3A3A3A").s().p("AoSFTIB0h0IEBCxIhbCGgAmVktIDojoILAHlIjoDng");
	this.shape_206.setTransform(-108.625,55.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AErjuIDojnInhLDIjnDogAlSlsIAaARIhmCWIh0B0g");
	this.shape_207.setTransform(-108.625,98.025);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("Ai3g3IB9h/IDyDuIh9B/g");
	this.shape_208.setTransform(-116.65,79.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("ApaAGIJUpkIJhJZInhHwIhzB0gAi3g3Ig6A5IDzDxIBzh2IB9h+IjyjvIgCgCg");
	this.shape_209.setTransform(-122.45,85.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#292929").s().p("AoaEsIA6g6IA6g6IDzDvIhzB2gAkvk0IDojoIJiJYIh0B1Ih1Bzg");
	this.shape_210.setTransform(-92.75,55.525);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AFPiBIB1hzInhHvIh0B0gAkOluIABACIh8B/Ig6A6g");
	this.shape_211.setTransform(-95.6375,97.7125);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AiihNICVhnICvEDIiTBlIgBABg");
	this.shape_212.setTransform(-99.525,79.525);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("ApQhvIK/nlIHiLEIq+HlgAhoiHIiEBbIDBEbIEYjCIgRgYIiwkDg");
	this.shape_213.setTransform(-105.325,85.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#454545").s().p("ADGGhICUhmIAQAZIkZDBgAjrgvIK/nlIjoDnIq/Hkg");
	this.shape_214.setTransform(-117.85,55.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#181818").s().p("AoTD6ICFhbICxECIABAAIh1B0gAi2ktIDnjnIHiLCIjoDog");
	this.shape_215.setTransform(-75.9,55.85);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgiCmIhqkDICvhIIBqEDIivBIg");
	this.shape_216.setTransform(-80.775,79.55);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AosjqIMVlFIFEMaIsVFFgAhSiXIiMA6ICCE9IE7iCIgYg6IhqkDg");
	this.shape_217.setTransform(-86.575,85.325);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#545454").s().p("ABFGIIAAAAICwhJIAYA7Ik8CCgAkWi2IMVlFIjoDoIsVFEg");
	this.shape_218.setTransform(-91.15,56.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#090909").s().p("AgxkZIDnjnIFEMaIjoDngAn5C4ICMg5IBqEDIh1B0g");
	this.shape_219.setTransform(-58.25,57.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AhSCLIgnj0IDMghIAnD0IjMAhg");
	this.shape_220.setTransform(-60.625,79.55);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AnpljINKiIICJNOItKCJgAg/ijIiEAVIA3FTIFQg2IgQhfIgnj0g");
	this.shape_221.setTransform(-66.425,85.35);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5D5D5D").s().p("AhIFYIAAAAIDNghIAPBfIlQA2gAkwlDINJiIIjoDoItJCIg");
	this.shape_222.setTransform(-61.65,59);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#010101").s().p("ABakyIDojoICJNOIjpDogAnKAqICDgVIAoD0Ih1B0g");
	this.shape_223.setTransform(-40.1,66.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("Ah9BjIAAAAIASjZIDpATIgSDag");
	this.shape_224.setTransform(-39.275,79.55);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AnLGIIBFtWINSBGIhFNXgAi3CdIFUAcIAKh8IARjaIjpgTIhqgJg");
	this.shape_225.setTransform(-45.1,85.35);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#5C5C5C").s().p("AlOGcIB1h0IAAAAIDpATIgKB9gAodjPIDojoINTBGIjpDog");
	this.shape_226.setTransform(-30.025,59.875);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("ADOk3IDojoIhFNXIjoDogAmZhoIBqAJIgSDZIh0B0g");
	this.shape_227.setTransform(-19.675,77.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AieAwIA/i4ID+BZIhAC4g");
	this.shape_228.setTransform(-16.825,79.5375);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AofEIIEZsqIMlEcIkYMpgAjYBqIFBBxIAxiMIA/i4Ij9hZIhEgYg");
	this.shape_229.setTransform(-22.65,85.325);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4F4F4F").s().p("AnZGBIB1h0ID+BaIgwCMgAoGkKIDojoIMlEbIjoDng");
	this.shape_230.setTransform(2.975,57.375);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AEIkgIDojoIkXMpIjoDogAl/jzIBEAXIhAC5Ih0Bzg");
	this.shape_231.setTransform(5.25,87.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AiygMIAAgBIBmiVID/CvIhmCWg");
	this.shape_232.setTransform(6.425,79.525);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("ApQBwIHhrEILAHlInhLEgAjsAtIEYDCIBbiGIBniVIkAiwIgagSg");
	this.shape_233.setTransform(0.6,85.325);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#3A3A3A").s().p("AoSFUIB1h1IgBABIEACwIhbCFgAmVktIDojnILBHlIjpDmg");
	this.shape_234.setTransform(30,55.85);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AErjtIDpjoIniLDIjnDogAlSlsIAaARIhlCWIh1B0g");
	this.shape_235.setTransform(30,98);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AithEICJhzIDSD7IiIB0g");
	this.shape_236.setTransform(30.45,79.525);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("ApYgzIKLopIImKRIqLIogAhzh+Ih8BqIDbEGIEEjdIgIgLIjTj7g");
	this.shape_237.setTransform(24.65,85.325);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#212121").s().p("AoYEVIB9hqIDTD8Ih0B0gAj0kzIDojoIIlKRIjoDog");
	this.shape_238.setTransform(54.3,55.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3D3D3D").s().p("AD/GnICIhzIAIAKIkFDdgAjRANIKMooIjpDoIqLIog");
	this.shape_239.setTransform(8.75,55.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgbCpIh0kEICqhNIB1EEIiqBNg");
	this.shape_240.setTransform(54.95,79.525);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AozjXIMJlgIFeMPIsJFfgAhViUIiMA/ICME4IE3iMIgYg1Ih0kEg");
	this.shape_241.setTransform(49.125,85.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#525252").s().p("ABZGNIABABICrhOIAYA1Ik3CMgAkQigIMJlgIjoDnIsJFfg");
	this.shape_242.setTransform(43.225,56.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0B0B0B").s().p("An+DIICMg/IB0EEIh0B0gAhHkZIDojnIFeMPIjoDng");
	this.shape_243.setTransform(77.675,56.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("Ah5hpIDQgeIAiDxIjPAeg");
	this.shape_244.setTransform(79.75,79.525);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AnilrINLh6IB6NSItMB4gAg/ijIiBASIAwFUIFSgxIgPhhIgijyg");
	this.shape_245.setTransform(73.95,85.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#5D5D5D").s().p("AhUFUIDQgeIAOBhIlRAxgAkxlOINMh5IjpDoItMB5g");
	this.shape_246.setTransform(79.5,59.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("ABlk1IDojnIB5NRIjoDogAnFAeICCgSIAiDzIh0B0g");
	this.shape_247.setTransform(100.025,67.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AiGBYIAdjRIDwAiIgdDRg");
	this.shape_248.setTransform(104.6,79.525);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AnhFtIB3tSINMB5Ih3NRgAjACSIFRAwIATiCIAdjRIjwgiIhigOg");
	this.shape_249.setTransform(98.8,85.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5A5A5A").s().p("AlwGYIB0h1IDxAjIgSCBgAoajfIDojoINMB5IjoDng");
	this.shape_250.setTransform(116.35,59.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("ADdk1IDojnIh2NRIjpDogAmViKIBiAPIgeDQIh0B1g");
	this.shape_251.setTransform(124.85,79.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AimAcIBMisIECB1IhNCsg");
	this.shape_252.setTransform(129.4,79.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AozDYIFdsPIMKFgIlcMOgAjgBXIE3CMIA+iMIBNisIkCh1Ig1gYg");
	this.shape_253.setTransform(123.575,85.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#494949").s().p("An+F1IB0h1IECB1Ig+CMgAn0kZIDpjnIMKFfIjpDng");
	this.shape_254.setTransform(152.125,56.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AEWkTIDpjoIldMPIjnDogAlzkeIA2AZIhNCtIh0Bzg");
	this.shape_255.setTransform(152.125,91.275);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("Ai2gkIBziJID6DSIhzCJg");
	this.shape_256.setTransform(153.9,79.5625);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("ArNCoIIlqQIDojoIKOIoIjpDnIojKSgAAKDoIBziJIj6jSIgLgKIjcEGIB0h0g");
	this.shape_257.setTransform(159.7,73.775);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AEwjUIDpjoIokKRIjoDogAk9mRIALAKIhyCJIh0B0g");
	this.shape_258.setTransform(177.75,101.375);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAOC1IiwkCICVhnICwECIiVBng");
	this.shape_259.setTransform(177.85,79.55);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("ApRhvIK4nfIAHgGIHjLEIq+HlgAhoiHIiEBbIDBEbIEZjCIgRgYIixkDg");
	this.shape_260.setTransform(172.05,85.325);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#454545").s().p("ADFGiIAAAAICVhnIARAZIkaDBgAjrgvIK/nlIjwDsIq3Hfg");
	this.shape_261.setTransform(159.525,55.85);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#181818").s().p("AoSD6ICEhbICxEDIh0BzgAi3ktIgHAFIDvjsIHjLDIjpDng");
	this.shape_262.setTransform(201.45,55.85);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AiHhgIC2hAIBZEBIi1BAIgBAAg");
	this.shape_263.setTransform(201.15,79.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AofkGIMkkcIEbMqIslEbgAhNiZIiLAwIBwFEIFBhxIgXhDIhZkBg");
	this.shape_264.setTransform(195.35,85.325);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#575757").s().p("AAlF/IC2hAIAXBCIlBBygAkejXIMlkbIjpDoIskEag");
	this.shape_265.setTransform(192.85,57.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#070707").s().p("AgRkgIDnjoIEbMpIjpDogAnwCYICLgxIBaECIABgBIh1B1g");
	this.shape_266.setTransform(223.3,59.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("Ah0htIDWgSIAUDtIjXASg");
	this.shape_267.setTransform(223.625,79.55);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AnMmIINShGIBHNWItSBHgAg6inIh9AKIAcFWIFUgcIgJhpIgUjtg");
	this.shape_268.setTransform(217.8,85.35);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#5E5E5E").s().p("Ah3FEIDWgSIAJBqIlTAcgAk0lxINRhGIjoDoItRBGg");
	this.shape_269.setTransform(225.85,59.875);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("ACHk3IDojoIBINXIjpDogAm2gFIB9gLIAUDtIh0B0g");
	this.shape_270.setTransform(243.275,70.225);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AiIBVIAAgBIAgjOIDxAmIghDPg");
	this.shape_271.setTransform(244.975,79.55);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AnoFjICHtOINKCIIiHNPgAjDCPIFQA2IAViEIAhjPIjxgmIhfgQg");
	this.shape_272.setTransform(239.175,85.35);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#595959").s().p("Al6GWIB0h0IAAAAIDyAnIgVCDgAoZjjIDojoINLCIIjpDog");
	this.shape_273.setTransform(257.525,59);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("ADikzIDpjoIiHNOIjpDpgAmTiVIBfAQIghDPIh1B0g");
	this.shape_274.setTransform(265.45,80.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AijAkIBIixID/BqIhICxg");
	this.shape_275.setTransform(265.125,79.5375);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AorDrIFBsaIMWFFIlCMagAjeBeIE8CCIA4iMIBIixIj/hpIg8gZg");
	this.shape_276.setTransform(259.325,85.325);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#4C4C4C").s().p("AnyF6IB0h0IEBBpIg5CNgAn+kTIDojoIMVFFIjoDng");
	this.shape_277.setTransform(287,56.975);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AERkZIDojnIlBMaIjnDngAl4kOIA8AZIhICyIh0Bzg");
	this.shape_278.setTransform(287.6,90);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AiygMIBmiWID/CvIhmCWg");
	this.shape_279.setTransform(283.825,79.5625);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("ApQBwIHhrEILAHmInhLDgAjsAtIEZDCIBaiFIBmiWIj/iwIgagSg");
	this.shape_280.setTransform(278.025,85.325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#3A3A3A").s().p("AoSFUIB0h0IEACxIhaCEgAmVktIDojnILAHlIjoDmg");
	this.shape_281.setTransform(307.425,55.85);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AErjtIDojoInhLEIjnDngAlSlsIAaARIhmCWIh0B0g");
	this.shape_282.setTransform(307.425,98);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("Ai2g6IB/h+IDuD0Ih/B9g");
	this.shape_283.setTransform(301,79.55);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("ApbgFIJ9owIgdgpIJXJkIpgJZgAh8h0Ih0BzIDvD0IBshsICHiFIgBgBIjvjzg");
	this.shape_284.setTransform(295.175,85.35);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#282828").s().p("AoZEoIB0hzIDvD0IgHAIIhuBsgAkkk0IAPgPIDajZIJVJkIjnDog");
	this.shape_285.setTransform(324.9,55.55);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#363636").s().p("AEnFzIB/h+IABABIiHCEgADIl5IgOAPIAdApIp9Ivg");
	this.shape_286.setTransform(277.075,60.9875);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AANC0IivkBICVhnICwECIiWBng");
	this.shape_287.setTransform(316.55,79.575);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("ApQhvIK+nlIHjLEIq+HlgAhniGIiFBbIDBEaIEZjCIgRgZIiwkBg");
	this.shape_288.setTransform(310.725,85.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#181818").s().p("AoSD7ICEhcICwEDIh0BzgAi3ktIDnjnIHjLEIjoDng");
	this.shape_289.setTransform(340.15,55.85);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#454545").s().p("ADFGiIAAAAICVhnIARAZIkaDBgAjrgwIK/nkIjoDnIq/Hkg");
	this.shape_290.setTransform(298.2,55.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AiRhZICohRIB7EEIinBRg");
	this.shape_291.setTransform(330.2375,79.55);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("Ao4jKIMBlyIFwMHIsBFxgAhXiTIiMBDICUE1IEziUIgYgxIh8kEg");
	this.shape_292.setTransform(324.45,85.35);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#515151").s().p("ABnGRICphRIAYAwIkzCVgAkMiSIMBlyIjoDoIsBFxg");
	this.shape_293.setTransform(317.65,56.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0D0D0D").s().p("AoBDOICLhCIB8EFIh0B0gAhVkcIDnjoIFwMHIjoDog");
	this.shape_294.setTransform(353.1,56.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AiFhhIC5g8IBSD/Ii5A8g");
	this.shape_295.setTransform(342.05,79.55);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AoYkVIMrkGIEGMxIsrEGgAhLibIiLAtIBpFGIFEhpIgXhHIhSj/g");
	this.shape_296.setTransform(336.225,85.35);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#585858").s().p("AAVF6IC6g8IAXBHIlEBpgAkhjmIMrkHIjoDoIsrEFg");
	this.shape_297.setTransform(334.725,57.55);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#050505").s().p("AgCkkIDojoIEGMxIjoDogAnrCIICLgsIBSD/Ih1B0g");
	this.shape_298.setTransform(363.975,60.625);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("Ah9hmIDIgqIAyD4IjHAog");
	this.shape_299.setTransform(351.8,79.55);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("An3lPINEiqICrNIItECrgAhDihIiFAcIBDFPIFOhEIgShYIgyj4g");
	this.shape_300.setTransform(346,85.375);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#5C5C5C").s().p("AguFiIDHgoIASBYIlOBEgAktkqINDirIjoDoItDCqg");
	this.shape_301.setTransform(349.05,58.575);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#020202").s().p("ABCkwIDojoICrNJIjoDogAnTBDICFgbIAzD4Ih1B0g");
	this.shape_302.setTransform(372.7,65.225);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AhbCEIgcjvIDTgYIAcDvIjTAYg");
	this.shape_303.setTransform(359.475,79.55);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AnYl5INPhhIBiNUItPBhgAg9ilIh/APIAnFUIFSgnIgLhlIgcjvg");
	this.shape_304.setTransform(353.675,85.35);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#5E5E5E").s().p("AhkFNIDSgYIAMBkIlSAngAkyleINOhhIjoDoItPBgg");
	this.shape_305.setTransform(360.4,59.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AB2k1IDnjoIBiNUIjoDngAm+AOIB/gOIAcDvIAAAAIh0Bzg");
	this.shape_306.setTransform(379.45,68.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AhnB6IgMjoIDbgLIAMDoIjbALg");
	this.shape_307.setTransform(365.0375,79.575);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("Am/mWINTgrIAsNYItTAsgAg5ioIh5AHIARFWIFVgSIgGhuIgMjog");
	this.shape_308.setTransform(359.225,85.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#5E5E5E").s().p("AiLE7IDbgLIAGBuIlVARgAk1mDINTgrIjoDnItTAsg");
	this.shape_309.setTransform(368.625,60.275);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("ACak4IDnjoIAtNZIjpDogAmtgYIB5gHIANDpIAAAAIh0B0g");
	this.shape_310.setTransform(384.3,71.625);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AhxhwIDggDIADDkIjfADg");
	this.shape_311.setTransform(368.3875,79.575);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AmwmnINUgLIAMNaItUALgAg3iqIh2ABIAGFXIFUgFIgChyIgDjkg");
	this.shape_312.setTransform(362.6,85.375);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#5D5D5D").s().p("AiiEwIDfgDIACBzIlVAEgAk2mYINVgLIjpDoItUAKg");
	this.shape_313.setTransform(373.625,60.725);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("ACvk4IDojoIAMNaIjoDngAmigvIB2gCIADDkIh0B0g");
	this.shape_314.setTransform(387.15,73.225);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#5B5B5B").s().p("AkeGfIB0h0IDhAAIAAB0gAoei2IDojoINVAAIjpDog");
	this.shape_315.setTransform(375.4,61.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AC2k2IDpjoIAANUIjpDpgAmeg1IB0AAIAADgIh0B0g");
	this.shape_316.setTransform(388.2,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]}).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_177,p:{x:363.775}},{t:this.shape_176,p:{x:369.575}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-190.875}},{t:this.shape_176,p:{x:-185.075}}]},1).wait(1));

	// Wheel_2_0
	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjoDpg");
	this.shape_317.setTransform(-179.275,74);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AojIcIAKtaIDojoINVALIgKNaIjoDog");
	this.shape_318.setTransform(-178.25,73.775);
	this.shape_318._off = true;

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AoyILIAqtZIDojnINTArIgpNZIjpDng");
	this.shape_319.setTransform(-174.925,73.775);
	this.shape_319._off = true;

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("ApKHuIBetUIDpjoINOBhIheNUIjoDog");
	this.shape_320.setTransform(-169.35,73.775);
	this.shape_320._off = true;

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("ApqHDICptIIDpjoINDCrIipNIIjoDog");
	this.shape_321.setTransform(-161.675,73.775);
	this.shape_321._off = true;

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AqMGJIEEsxIDpjnIMrEHIkEMwIjoDog");
	this.shape_322.setTransform(-151.9,73.8);
	this.shape_322._off = true;

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AqrE/IFtsGIDpjoIMCFxIlvMGIjoDog");
	this.shape_323.setTransform(-140.1,73.775);
	this.shape_323._off = true;

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("ArEDkIHhrEIDnjoILBHlInhLEIjnDog");
	this.shape_324.setTransform(-126.4,73.8);
	this.shape_324._off = true;

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("ArOB6IJUplIDnjnIJjJZIpWJkIjmDog");
	this.shape_325.setTransform(-110.85,73.75);
	this.shape_325._off = true;

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("ArEAEIDnjmILAnlIHiLDIjoDnIq/Hlg");
	this.shape_326.setTransform(-93.7,73.75);
	this.shape_326._off = true;

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("Aqgh2IDojnIMVlFIFEMZIjoDoIsVFFg");
	this.shape_327.setTransform(-74.95,73.75);
	this.shape_327._off = true;

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("ApdjvIDojnINKiJICJNPIjpDnItJCJg");
	this.shape_328.setTransform(-54.8,73.75);
	this.shape_328._off = true;

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("Ao/H8IBFtWIDojoINSBGIhFNXIjoDog");
	this.shape_329.setTransform(-33.475,73.75);
	this.shape_329._off = true;

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AqTF7IEZspIDojoIMlEcIkXMpIjpDog");
	this.shape_330.setTransform(-11.05,73.75);
	this.shape_330._off = true;

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLCIjnDog");
	this.shape_331.setTransform(12.225,73.75);
	this.shape_331._off = true;

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("ArMBAIDojnIKMopIImKSIjpDnIqLIog");
	this.shape_332.setTransform(36.25,73.725);
	this.shape_332._off = true;

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AqnhjIDojoIMJlfIFeMOIjoDoIsJFfg");
	this.shape_333.setTransform(60.75,73.725);
	this.shape_333._off = true;

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("ApWj4IDojoINMh4IB5NRIjoDoItMB4g");
	this.shape_334.setTransform(85.55,73.725);
	this.shape_334._off = true;

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("ApVHhIB3tSIDojnINMB4Ih3NSIjoDng");
	this.shape_335.setTransform(110.4,73.725);
	this.shape_335._off = true;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AqnFMIFdsPIDojnIMKFfIlcMOIjoDog");
	this.shape_336.setTransform(135.2,73.725);
	this.shape_336._off = true;

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("ArNCoIIlqQIDojoIKOIoIolKRIjnDog");
	this.shape_337.setTransform(159.7,73.775);
	this.shape_337._off = true;

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("ArFAEIDpjmIK/nlIHjLEIjpDmIq+Hlg");
	this.shape_338.setTransform(183.65,73.75);
	this.shape_338._off = true;

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AqTiSIDojoIMlkcIEaMpIjoDoIslEcg");
	this.shape_339.setTransform(206.975,73.75);
	this.shape_339._off = true;

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("ApAkUIDojoINShGIBHNXIjoDnItSBHg");
	this.shape_340.setTransform(229.425,73.75);
	this.shape_340._off = true;

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("ApcHXICHtOIDojoINKCJIiHNOIjoDog");
	this.shape_341.setTransform(250.8,73.75);
	this.shape_341._off = true;

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AqfFfIFBsaIDpjnIMVFFIlBMZIjpDog");
	this.shape_342.setTransform(270.925,73.75);
	this.shape_342._off = true;

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("ArEDjIHhrDIDnjnILBHlInhLDIjnDng");
	this.shape_343.setTransform(289.625,73.75);
	this.shape_343._off = true;

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("ArPBuINItAIJXJlItINAg");
	this.shape_344.setTransform(306.775,73.75);
	this.shape_344._off = true;

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("ArFAEIDojnIK/nkIHjLFIjoDmIq/Hkg");
	this.shape_345.setTransform(322.35,73.75);
	this.shape_345._off = true;

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AqshWIDojoIMBlxIFwMGIjoDoIsBFxg");
	this.shape_346.setTransform(336.05,73.775);
	this.shape_346._off = true;

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AqMihIDojnIMrkHIEGMxIjoDoIsrEGg");
	this.shape_347.setTransform(347.85,73.75);
	this.shape_347._off = true;

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AprjbIDpjnINDirICrNIIjoDoItECrg");
	this.shape_348.setTransform(357.6,73.775);
	this.shape_348._off = true;

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("ApMkFIDpjoINOhhIBiNUIjoDoItPBhg");
	this.shape_349.setTransform(365.275,73.75);
	this.shape_349._off = true;

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("Ao0kiIDpjoINTgrIAtNYIjpDoItTArg");
	this.shape_350.setTransform(370.85,73.775);
	this.shape_350._off = true;

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AokkzIDojoINVgLIALNaIjoDoItUALg");
	this.shape_351.setTransform(374.2,73.775);
	this.shape_351._off = true;

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AoeIfIAAtVIDojoINVAAIAANUIjpDpg");
	this.shape_352.setTransform(375.4,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_317}]}).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_318).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_319).wait(2).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_320).wait(3).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_321).wait(4).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_322).wait(5).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_323).wait(6).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_324).wait(7).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_325).wait(8).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_326).wait(9).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_327).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_328).wait(11).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_329).wait(12).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_330).wait(13).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_331).wait(14).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_332).wait(15).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_333).wait(16).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_334).wait(17).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_335).wait(18).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_336).wait(19).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_337).wait(20).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_338).wait(21).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_339).wait(22).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_340).wait(23).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_341).wait(24).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_342).wait(25).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_343).wait(26).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_344).wait(27).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_345).wait(28).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_346).wait(29).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_347).wait(30).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_348).wait(31).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_349).wait(32).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_350).wait(33).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_351).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(34));

	// Car
	this.Car1Color = new lib.Car_1_Color();
	this.Car1Color.name = "Car1Color";
	this.Car1Color.setTransform(-231.3,-30.2);

	this.RC = new lib.Car_1_Color();
	this.RC.name = "RC";
	this.RC.setTransform(-231.3,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Car1Color}]}).to({state:[{t:this.Car1Color}]},35).to({state:[{t:this.Car1Color}]},35).to({state:[{t:this.Car1Color}]},35).to({state:[{t:this.Car1Color}]},35).to({state:[{t:this.Car1Color}]},35).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.Car1Color}]},1).to({state:[{t:this.RC}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.Car1Color).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).to({x:323.35},35,cjs.Ease.sineInOut).to({x:-231.3},35,cjs.Ease.sineInOut).to({x:323.35},35,cjs.Ease.sineInOut).to({x:322.25},1).wait(1).to({x:318.3401},0).wait(1).to({x:312.9187},0).wait(1).to({x:305.9076},0).wait(1).to({x:297.2305},0).wait(1).to({x:286.816},0).wait(1).to({x:274.6009},0).wait(1).to({x:260.536},0).wait(1).to({x:244.5919},0).wait(1).to({x:226.7665},0).wait(1).to({x:207.0939},0).wait(1).to({x:185.6527},0).wait(1).to({x:162.5745},0).wait(1).to({x:138.0496},0).wait(1).to({x:112.3289},0).wait(1).to({x:85.7195},0).wait(1).to({x:58.5748},0).wait(1).to({x:31.277},0).wait(1).to({x:4.2166},0).wait(1).to({x:-22.2306},0).wait(1).to({x:-47.7232},0).wait(1).to({x:-71.9693},0).wait(1).to({x:-94.7352},0).wait(1).to({x:-115.8473},0).wait(1).to({x:-135.1889},0).wait(1).to({x:-152.6939},0).wait(1).to({x:-168.3379},0).wait(1).to({x:-182.1299},0).wait(1).to({x:-194.1039},0).wait(1).to({x:-204.3121},0).wait(1).to({x:-212.8184},0).wait(1).to({x:-219.6945},0).wait(1).to({x:-225.0157},0).wait(1).to({x:-228.8588},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.7,-146,951.5,292.1);


// stage content:
(lib.ToyCars_Final = function(mode,startPosition,loop,reversed) {
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
		this.Car1.addEventListener("click", f_Click_Car1.bind(this));

		function f_Click_Car1()
		{
			this.Car1.play();
			this.Car1.Car1Color.play();
		}



		this.Car2.addEventListener("click", f_Click_Car2.bind(this));

		function f_Click_Car2()
		{
			this.Car2.play();
			this.Car2.Car2Color.play();
		}



		this.Car3.addEventListener("click", f_Click_Car3.bind(this));

		function f_Click_Car3()
		{
			this.Car3.play();
			this.Car3.Car3Color.play();
		}



		this.BackgroundColor.addEventListener("click", f_Click_Background.bind(this));

		function f_Click_Background()
		{
		    var clip = this.Background;

		    if (clip.paused) {
		        clip.play();
		    }

		    else {
		        clip.stop();
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Car_1
	this.Car1 = new lib.Car_1();
	this.Car1.name = "Car1";
	this.Car1.setTransform(493.95,210.25);

	this.timeline.addTween(cjs.Tween.get(this.Car1).wait(1));

	// Car_2
	this.Car2 = new lib.Car_2();
	this.Car2.name = "Car2";
	this.Car2.setTransform(262.65,540,1,1,0,0,0,-231.3,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.Car2).wait(1));

	// Car_3
	this.Car3 = new lib.Car_3();
	this.Car3.name = "Car3";
	this.Car3.setTransform(262.65,878.6,1,1,0,0,0,-231.3,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.Car3).wait(1));

	// Background
	this.Background = new lib.Background();
	this.Background.name = "Background";
	this.Background.setTransform(540,540);

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(1));

	// Background_Color
	this.BackgroundColor = new lib.Background_Color();
	this.BackgroundColor.name = "BackgroundColor";
	this.BackgroundColor.setTransform(540,540);

	this.timeline.addTween(cjs.Tween.get(this.BackgroundColor).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,540,540,540);
// library properties:
lib.properties = {
	id: '38330B1C882A4834A5CA8F9EC9130EBC',
	width: 1080,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['38330B1C882A4834A5CA8F9EC9130EBC'] = {
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
