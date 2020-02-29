function getType (e) {  
	let result;
	if (typeof e === 'string') {
		result = 'string';}
	else if (typeof e === 'number') {
		if (Number.isNaN(e)){  
			result = 'NaN'}
		else{
		result = 'number';}}
	
	return result; 
}

module.exports = getType;