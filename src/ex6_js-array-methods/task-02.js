function someArray (array, callback) {
	for (let i=0; i<array.length; i++){
		let item = array[i];
		if(callback(item, i, array)) {
			return true;
		}
	}
	return false;
}
module.exports = someArray;