function filterArray (array, callback) {
	let newArr = [];
	for (let i=0; i<array.length; i++){
		let item = array[i];
		if(callback(item, i, array)) {
			newArr.push(item);
		}
	}
	return newArr;
}

module.exports = filterArray;