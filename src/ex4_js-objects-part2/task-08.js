function transformToCamelCase (str) {
	let words = str.split(" ");
	words[0] = words[0][0].toLowerCase() + words[0].slice(1, words[0].length).toLowerCase();
	for (let i = 1; i<words.length; i++){
		words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length).toLowerCase();
	}
	return words.join("");
}
module.exports = transformToCamelCase;