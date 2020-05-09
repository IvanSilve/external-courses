function Candies (name, weight, price){
    this.name = name;
    this.weight = weight;
    this.price = price;
}

function Waffle (name, candyFilling, weight, price){
    Candies.call(this, name, weight, price);
    Waffle.prototype = Candies.prototype;
    this.candyFilling = candyFilling;
    this.type = "waffle";
}
function Chocolate (name, candyFilling, weight, price) {
    Candies.call(this, name, weight, price);
    Chocolate.prototype = Candies.prototype;
    this.candyFilling = candyFilling;
    this.type = "chocolate";
}
function Truffle (name, weight, price){
    Candies.call(this, name, weight, price);
    Truffle.prototype = Candies.prototype;

    this.type = "truffle";
}

function Gift (sweets) {
    this.sweets = sweets;

    this.price = 0;
    for (var i = 0; i < this.sweets.length; i+=1) {
        this.price += this.sweets[i].price;
    }
    this.weight =0;
    for (i = 0; i < this.sweets.length; i+=1) {
        this.weight += this.sweets[i].weight;
    }
    this.sortByParameter("name");
}
Gift.prototype.find = function (name) {
    for(var i = 0; i < this.sweets.length; i+=1) {
        if (this.sweets[i].name === name) {
            return this.sweets[i];
        }
    }
    return undefinde;
};
Gift.prototype.sortByParameter = function (parameter){
        do {
            for (var i = 0; i < this.sweets.length - 1; i+=1) {
                if (this.sweets[i + 1][parameter] < this.sweets[i][parameter]) {
                    var nextCandy = this.sweets[i+1];
                    this.sweets[i+1] = this.sweets[i];
                    this.sweets[i] = nextCandy;
                }
            }
        }
        while (check.call(this));
        function check () {
            for (i = 0; i < this.sweets.length - 1; i+=1) {
                if (this.sweets[i + 1][parameter] < this.sweets[i][parameter]) {
                    return true;
                }
            }
            return false;
        }
    };
var kontiJeck = new Waffle("Konti Jeck", "chocolate", 520, 211);
var santa = new Waffle("Santa", "hazelnut", 250, 172);
var bambino = new Waffle("Banbino", "cream",200,90);

var monCheri = new Chocolate("Mon Cheri", "apricot", 262, 500);
var ferreroRocher = new Chocolate("Ferrero Rocher", "hazelnut", 125, 264);
var merci = new Chocolate("Merci", "mixed", 250, 206);
var afterEight = new Chocolate("After Eight", "mint", 200, 313);

var bucheron = new Truffle("Bucheron",225, 439);
var sorceressHeart = new Truffle("Sorceress Heart", 200, 142);
var laPerla = new Truffle("La Perla", 200, 1350);

var childrenGift =
    new Gift([santa, monCheri, merci, merci, ferreroRocher, bucheron, bambino]);
