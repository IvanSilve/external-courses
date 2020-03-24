function getShortString (str, length) {
	if (str.length>length) {
		return str.slice(0, length-1) + "…";
	}
	return str;
}
module.exports = getShortString;