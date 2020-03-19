function filterAnalog (array, callback) {
	let newArr = [];
	let item = undefined;
		for (let i=0; i<array.length; i++){
			item = array[i];
			if(callback(item, i, array)) {
				newArr.push(item);
			}
	}
	return newArr;
	}

module.exports = filterAnalog;