function isPrime (el) {
	if (el === 1 || el ===0) return '0 and 1 are not simple or composite number'
		else if (el>1 && el<1000 && el%1===0){
			for (let i=2; i<el-1; i++){
				if (el%i===0) {
					return 'Число ' + el + ' - составное число';
				}
			}
			return 'Число ' + el + ' - простое число';
		}
			return 'Данные неверны';
	}

module.exports = isPrime; 