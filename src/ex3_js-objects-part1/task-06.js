function cloneObject (obj) {
	let clonedObject = {}
	if(Array.isArray(obj)){
		clonedObject = []
	} 
	for (let key in obj){
		if ({}.hasOwnProperty.call(obj, key)){
	clonedObject[key] = obj[key];
		}
	}
	for (let key in clonedObject){
		if ((typeof(clonedObject[key]) === 'object' || typeof(clonedObject[key]) === 'function') && clonedObject.hasOwnProperty(key)){
			clonedObject[key] = cloneObject(clonedObject[key]); 
		}
	}
	return clonedObject;
}
module.exports = cloneObject; 