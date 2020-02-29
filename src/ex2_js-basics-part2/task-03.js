function getEvenOddNumbers2 (e) {
	let counterEven = 0;
	let counterOdd = 0;
	let counterZero = 0;
	
	for (let i=0; i<e.length; i++){
		if (e[i] === 0) {
			counterZero++
		}
		else if (e[i]%2 === 0) {
			counterEven++;
		}
		else if (e[i]%2 === 1) {
			counterOdd++;
		}
	}
	return [counterEven, counterOdd, counterZero];
}
	
	module.exports = getEvenOddNumbers; 