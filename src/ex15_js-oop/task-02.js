class ElectricalAppliances {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.swichedOn = false;
    }

    plugIn (){
        this.swichedOn = true;
    }
    plugOut(){
        this.swichedOn = false;
    }
}

class Kettle extends ElectricalAppliances {
    constructor(name, power, volume, weight) {
        super (name, power);
        this.volume = volume;
        this.weight = weight;
    }
}
class Washer extends ElectricalAppliances {
    constructor(name, power, washingCapacity) {
        super(name, power);
        this.washingCapacity = washingCapacity;
    }
}
class Refrigerator extends ElectricalAppliances {
    constructor(name, power, Capacity) {
        super(name, power);
        this.Capacity = Capacity;
    }
}
class VacuumCleaner extends ElectricalAppliances {
    constructor(name, power, typeOfCleaning) {
        super(name, power);
        this.typeofCleaning = typeOfCleaning;
    }
}
class Iron extends ElectricalAppliances {
    constructor(name, power, waterTank, weight) {
        super(name, power);
        this.waterTank = waterTank;
        this.weight = weight;
    }
}
class Computer extends ElectricalAppliances {
    constructor(name, power, processor, videoCard) {
        super(name, power);
        this.processor = processor;
        this.videoCard = videoCard;
    }
}
class LightBulbs extends ElectricalAppliances {
    constructor(name, power, type, bulbBase) {
        super(name, power);
        this.type = type;
        this.bulbBase = bulbBase;
    }
}

let browV703 = new VacuumCleaner( 'BROW V703', 2100, 'dry');
let borkI604 = new Iron ('BORK i604', 2400, 350, 1.7);
let myComputer = new Computer('my computer', 600, 'i5 7500', 'nvidia gtx 1070');
let boschSerie = new Refrigerator('Bosch Serie', 300, 351);
let hotpointAriston = new Washer (' Hotpoint-Ariston', 800, 5.5);
let boschTWK7801 = new Kettle ('Bosch TWK7801', 2200, 1.7, 1.2);
let camelionLH20 = new LightBulbs('Camelion LH20', 20, 'energy saving', 'e27');
let start9WGlobe = new LightBulbs('Start 9WGlobe', 9, 'luminescent', 'e27');

class Room {
    constructor(electricalAppliances) {
        this.electricalAppliances = electricalAppliances;
    }
}
class Flat {
    constructor(rooms){
        this.rooms = rooms;
    }
    get powerConsumption() {
        let result = 0;
        this.rooms.forEach(function (element) {
            element.electricalAppliances.forEach(function (element) {
                if (element.swichedOn) {
                    result += element.power;
                }
            });
        });
        return result;
    }
    findElectricalAppliance(name){
        let result;
         this.rooms.forEach(function(element){
            element.electricalAppliances.forEach(function(element){
                if(element.name === name){
                    result = element;
                   return result;
                }
                return undefinde;
            });
        });
         return result;
    }
}
let hall = new Room([borkI604, myComputer, camelionLH20, browV703]);
let kitchen = new Room([boschSerie, hotpointAriston, boschTWK7801, start9WGlobe]);

let myFlat = new Flat([hall, kitchen]);

console.log(myFlat.powerConsumption);

camelionLH20.plugIn();
start9WGlobe.plugIn();
boschSerie.plugIn();
myComputer.plugIn();

console.log(myFlat.powerConsumption);

myComputer.plugOut();

console.log(myFlat.powerConsumption);

console.log(myFlat.findElectricalAppliance('BROW V703'));
console.log(myFlat.findElectricalAppliance('mumComputer'));
