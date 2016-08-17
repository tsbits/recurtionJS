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
	console.log('Adding a new recurtion : ' + recurtion.name);
	recurtion.owner = this;
	this.recurtion[recurtion.name] = recurtion;
}

Recurtion.prototype.addState = function( args ){
	console.log('Adding a new state : ' + args.name);
	this.states[args.name] = args.setup;
}

Recurtion.prototype.gotoState = function( state ){
	console.log('Going to state : ' + state);
	this.states[state]();
}

Recurtion.prototype.bindEvents = function( bind ){
	bind(this);
}

Recurtion.prototype.get = function( recurtion ){
	console.log('Getting : ' + recurtion);
	return this.recurtions[recurtion] || undefined;
}