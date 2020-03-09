function everyFirstLetterToUpperCase (str) {
	let everyWordArr = str.split(" ");
	for (let i = 0; i<everyWordArr.length; i++){
		everyLetter = everyWordArr[i].split('');
		if (everyLetter[0] !== everyLetter[0].toUpperCase()){
		everyLetter[0] = String.fromCharCode(everyLetter[0].charCodeAt(0) - 32);
		}
		if (i<everyWordArr.length-1){
		everyWordArr[i] = everyLetter.join('') + " ";
		}
		else {
			everyWordArr[i] = everyLetter.join('');
		}
	}	
	return everyWordArr.join('');
}

module.exports = everyFirstLetterToUpperCase;