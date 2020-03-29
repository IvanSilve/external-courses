function everyFirstLetterToUpperCase (str) {
	let words = str.split(" ");
	for (let i = 0; i<words.length; i++){
		words[i] = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase())+" ";
	}
	return words.join('').substring(0, words.join('').length - 1);
}
module.exports = everyFirstLetterToUpperCase;