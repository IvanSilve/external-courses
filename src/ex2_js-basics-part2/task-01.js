function getType (el) {
	if (typeof el === 'string'){
		return 'string';
	}
	if (typeof el === 'number' && !Number.isNaN(el)){
		return 'number';
	}
	return undefined;
}

module.exports = getType;

