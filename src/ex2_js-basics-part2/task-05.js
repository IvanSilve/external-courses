function getMaxValue (e) {
	let maxValue = e[0];
	for (let counter = 0; counter < e.length; counter++){
		for (let counter2 = 1; counter2 < e.length; counter2++){ 
			if (e[counter] < e[counter2]) {
				maxValue = e[counter2];
			}
		}
	}
	return maxValue;
}

module.exports = getMaxValue;