function everyAnalog (array, callback) {
	let item = undefined;
		for (let i=0; i<array.length; i++){
			item = array[i];
			if(!callback(item, i, array)) {
				return false;
			}
	}
	return true;
	}

module.exports = everyAnalog;