function cutAnArray (e) {
	for (let i=0; i<e.length; i++){
		console.log((i+1) + ' = ' + e[i])
	}
	console.log('array length = ' + e.length)
}

module.exports = cutAnArray;