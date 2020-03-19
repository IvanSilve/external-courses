function someAnalog (array, callback) {
	let item = undefined;
		for (let i=0; i<array.length; i++){
			item = array[i];
			if(callback(item, i, array)) {
				return true;
			}
	}
	return false;
	}
module.exports = someAnalog;