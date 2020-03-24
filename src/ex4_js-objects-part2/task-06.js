function everyFirstLetterToUpperCase (str) {
	let words = str.split(" ");
	for (let i = 0; i<words.length; i++){
		let letters = words[i].split('');
		if (letters[0] !== letters[0].toUpperCase()){
		letters[0] = String.fromCharCode(letters[0].charCodeAt(0) - 32);
		}
		if (i<words.length-1){
		words[i] = letters.join('') + " ";
		}
		else {
			words[i] = letters.join('');
		}
	}	
	return words.join('');
}

module.exports = everyFirstLetterToUpperCase;