function mapArray (array, callback) {
	let newArr = [];
	let item = undefined;
	for (let i=0; i<array.length; i++){
		item = array[i];
		newArr[i] = callback(item, i, array)
	}
	return newArr;
}

module.exports = mapArray;