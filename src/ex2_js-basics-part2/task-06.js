function primeOrComposit (e) {
	if (e === 1 || e ===0) return '0 and 1 are not simple or composite number'
		else if (e>1 && e<1000 && e%1===0){
			for (let i=2; i<e-1; i++){
				if (e%i===0) {
					return 'Число ' + e + ' - составное число';
				}
			}
			return 'Число ' + e + ' - простое число';
		}
			return 'Данные неверны';
	}

module.exports = primeOrComposit; 