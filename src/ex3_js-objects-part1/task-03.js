function checkObjectProperty (str, obj) {
	for (let key in obj) {
	
		if (obj.hasOwnProperty(key) && key === str){
			return true;
		}
	}
	return false; 
}

module.exports = checkObjectProperty;