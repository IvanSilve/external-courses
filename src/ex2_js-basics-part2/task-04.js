function checkDuplications (e) {
	for (let counter = 0; counter < e.length; counter++){
		for (let counter2 = counter +1; counter2 < e.length; counter2++){
			if (e[counter] !== e[counter2]) {
				return false;
			}
		}
	}
	return true;
}

module.exports = checkDuplications;