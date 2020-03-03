function createObjectProperty (str, obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key) && key === str){
			return obj;
		}
	}
	obj[str] = 'new'; // eslint-disable-line no-param-reassign
	return obj; 
}

module.exports = createObjectProperty;