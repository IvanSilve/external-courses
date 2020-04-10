function countCharReiterations (str) {
	let strArr = str.split("");
	let done = [];
	for (let i = 0; i<strArr.length; i++){
		if (done.indexOf(strArr[i]) === -1){
			let result = 1;
			for (let b = i+1; b<strArr.length; b++){
				if(strArr[i] === strArr[b]){
					result++;
				}
			}
			console.log(strArr[i] + ' meets: ' + result + ' times');
			done.push(strArr[i]);
		}
	}
}
module.exports = countCharReiterations;