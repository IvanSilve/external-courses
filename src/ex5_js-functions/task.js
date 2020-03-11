const Calculator = {
	result: 0,
	add: function (a){ 
	if (a === undefined){
		return Calculator.add;
	}
	Calculator.result += a;
	return Calculator.add;
	},
	
	subtract: function (a){ 
	if (a === undefined){
		return Calculator.subtract;
	}
	Calculator.result -= a;
	return Calculator.subtract;
	},
	
	divide: function (a){ 
	if (a === undefined){
		return Calculator.divide;
	}
	Calculator.result /= a;
	return Calculator.divide;
	},
	
	multiply: function (a){ 
	if (a === undefined){
		return Calculator.multiply;
	}
	Calculator.result *= a;
	return Calculator.multiply;
	},
	
	getResult: function () {
		return this.result;
	},
	reset: function(){
		this.result = 0;
		return this.result;
	},
}
module.exports = Calculator;