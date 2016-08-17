var Recrution = function( name, $dom ){
	var self = this;
	this.name = name;
	this.$dom = $dom;
	this.recurtions = {};
	this.states = {
		base: function(){ console.log('base state') }
	};
	this.currentState = 'base';
	this.owner;
}

Recurtion.prototype.addRecurtion = function( recurtion ){
	recurtion.owner = this;
	this.recurtion[recurtion.name] = recurtion;
}

Recurtion.prototype.addState = function( args ){
	console.log('Going to state : ' + state);
	this.states[args.name] = args.setup;
}

Recurtion.prototype.gotoState = function( state ){
	console.log('Going to state : ' + state);
	this.states[state]();
}