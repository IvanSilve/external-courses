function inputStringInString (baseString, newString, numberOfWord) {
	let baseStringWords = baseString.split(" ");
	for (let i = 0; i< baseStringWords.length-1; i++){
		baseStringWords[i] += " ";
	}
	let baseStringBefor = baseStringWords.slice(0, numberOfWord + 1);
	let baseStringAfter = baseStringWords.slice(numberOfWord + 1, baseStringWords.length);
	return baseStringBefor.join("") + newString + " " + baseStringAfter.join("")
}
module.exports = inputStringInString;