function getMaxValue (el) {
	let maxValue = el[0];
	for (let counter = 0; counter < el.length; counter++){
		for (let counter2 = 1; counter2 < el.length; counter2++){ 
			if (el[counter] < el[counter2]) {
				maxValue = el[counter2];
			}
		}
	}
	return maxValue;
}

module.exports = getMaxValue;