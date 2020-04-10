function sliceArray (array, begin, end) {
	let newArr = [];
	if (begin<0 && end<0){
		for (let i = (array.length + begin); i<(array.length + end); i++){
			newArr.push(array[i])
		}
		return newArr;
	}
	if(begin === undefined){
		for (let i = 0; i<array.length; i++){
			newArr.push(array[i])
		}
		return newArr;
	}
	if(end === undefined ){
		for (let i = begin; i<array.length; i++){
			newArr.push(array[i])
		}
		return newArr;
	}
	for (let i = begin; i<end; i++){
		newArr.push(array[i])
	}
	return newArr; 
}
module.exports = sliceArray;