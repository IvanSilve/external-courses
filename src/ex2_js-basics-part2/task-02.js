function getElementsFromArray (el) {
	for (let i=0; i<el.length; i++){
		console.log((i+1) + ' = ' + el[i])
	}
	console.log('array length = ' + el.length)
}

module.exports = getElementsFromArray;