module.exports = Scale;

function Scale (domain, range) {
	this._domain = domain || [0, 1]
	this._range = range || [0, 1]
}

Scale.prototype.range = function (range) {
	if (typeof range === 'undefined') {
		return this._range;
	}

	this._range = range;
};

Scale.prototype.domain = function (domain) {
	if (typeof domain === 'undefined') {
		return this._domain;
	}

	this._domain = domain;
};

Scale.prototype.map = function (x) {
	if (typeof x === 'undefined') {
		return this._domain;
	}
	var range = this._range
	var domain = this._domain
	var factor = (range[1] - range[0]) / (domain[1] - domain[0])
	return range[0] + factor * (x - domain[0])
};

Scale.prototype.invert = function (y) {
	if (typeof y === 'undefined' ) {
		return new Scale(this._range, this._domain);
	}
	
	var range = this._range
	var domain = this._domain
	var factor = (range[1] - range[0]) / (domain[1] - domain[0])
	return domain[0] + (y - range[0]) / factor
};

Scale.prototype.scale = function (factor) {
	var range = this._range
	this.range([range[0] * factor, range[1] * factor])
	return this
}