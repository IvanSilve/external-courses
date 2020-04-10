function addWordsInString (baseString, newWords, place) {
	let baseStringWords = baseString.split(" ");
	for (let i = 0; i< baseStringWords.length-1; i++){
		baseStringWords[i] += " ";
	}
	let baseStringBefor = baseStringWords.slice(0, place + 1);
	let baseStringAfter = baseStringWords.slice(place + 1, baseStringWords.length);
	return baseStringBefor.join("") + newWords + " " + baseStringAfter.join("")
}
module.exports = addWordsInString;