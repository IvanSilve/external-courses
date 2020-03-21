function getEvenOddNumbers (arr) {
	let counterEven = 0, 
		counterOdd = 0, 
		counterZero = 0;
	for (let i=0; i<arr.length; i++){
		if (arr[i] === 0) {
			counterZero++
		}
		else if (arr[i]%2 === 0 && arr[i] !== null) {
			counterEven++;
		}
		else if (arr[i]%2 === 1) {
			counterOdd++;
		}
	}
	return [counterEven, counterOdd, counterZero];
}
	
	module.exports = getEvenOddNumbers; 