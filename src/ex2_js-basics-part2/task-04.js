function checkDuplicate (el) {
	for (let counter = 0; counter < el.length; counter++){
		for (let counter2 = counter +1; counter2 < el.length; counter2++){
			if (el[counter] !== el[counter2]) {
				return false;
			}
		}
	}
	return true;
}

module.exports = checkDuplicate;