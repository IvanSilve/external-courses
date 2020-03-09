function getKeyFromPrototype (key, obj) {
	if (!obj.hasOwnProperty(key)) {
		return obj[key];
	}
	return undefined;
} 
module.exports = getKeyFromPrototype;