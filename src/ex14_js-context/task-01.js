const Calculator = {
    result: 0,
    add: function (a = 0){
        Calculator.result += a;
        return this;
    },

    subtract: function (a = 0){
        Calculator.result -= a;
        return this;
    },

    divide: function (a = 1){
        Calculator.result /= a;
        return this;
    },

    multiply: function (a = 0){
        Calculator.result *= a;
        return this;
    },

    getResult: function () {
        return this.result;
    },
    reset: function(){
        this.result = 0;
        return this;
    },
    setState: function(value = 0){
        this.result = value;
        return this
    },
    fetchData: function(callback){
        let promise = new Promise (function(resolve, reject){
            setTimeout(callback, 0, 500);
            resolve(500);
        });
        promise.then(function(value){
            this.result = value;
        });
        return this;
    }
}
module.exports = Calculator;
