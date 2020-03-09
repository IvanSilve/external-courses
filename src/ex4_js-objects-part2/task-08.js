function stringToLowerCamelCase (str) {
	let everyword = str.split(" ");
	everyword[0] = everyword[0][0].toLowerCase() + everyword[0].slice(1, everyword[0].length).toLowerCase();
	for (let i = 1; i<everyword.length; i++){
		everyword[i] = everyword[i][0].toUpperCase() + everyword[i].slice(1, everyword[i].length).toLowerCase();
	}
	return everyword.join("");
}
module.exports = stringToLowerCamelCase;