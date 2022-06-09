// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//                 class 
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class GameConsole {
    constructor(title, year, manufacturer, bluerayReader, portable) {
        this.title = title;
        this.manufacturer = manufacturer;
        this.year = year;
        this.bluerayReader = bluerayReader;
        this.portable = portable;
    }

    getManufacturer() {
        return this.manufacturer.toUpperCase();
    }

    isPortable() {
        if (this.portable === true) {
            return console.log(`${this.title} is portable game console.`);
        }
        return console.log(`${this.title} is not portable game console.`);
    }

    isBluerayReaderExist() {
        if (this.bluerayReader === true) {
            return console.log(`${this.title} has blueray reader.`);
        }
        return console.log(`${this.title} doesn't have blueray reader.`);
    }
}

class PortableGameConsole extends GameConsole {
    constructor(title, year, manufacturer, bluerayReader, portable, batteryLife, weight) {
        super(title, year, manufacturer, bluerayReader, portable);
        this.batteryLife = batteryLife;
        this.weight = weight;
    }

    isBluerayReaderExist() {
        return console.log(`Because ${this.title} is portable game console. It doesn't have blueray reader.`);
    }

    getBatteryLife() {
        return console.log(`Battery life is about ${this.batteryLife} hours.`);
    }

    getWeight() {
        return console.log(`${this.title} weight ${this.weight} grams`);
    }

}

const Ps5BlueRay = new GameConsole("PlayStation 5 blue ray", 2020, "Sony", true, false);
const PS5Digital = new GameConsole("PlayStation 5 digital", 2020, "Sony", false, false);
const XboxOnes = new GameConsole("XBOX One S", 2020, "Microsoft", false, false);
const Switch = new PortableGameConsole("Switch", 2020, "Nintendo", false, true, 8, 300)
const PSP = new PortableGameConsole("PSP", 2004, "Sony", false, true, 6, 256);

// const gameConsoles = [Ps5BlueRay, PS5Digital, XboxOnes, Switch, PSP];

console.log("\n-=-=-=-=" + Ps5BlueRay.getManufacturer() + "-=-=-=-=-=-");
console.log(Ps5BlueRay.title);
Ps5BlueRay.isPortable();
Ps5BlueRay.isBluerayReaderExist();

console.log("\n-=-=-=-=" + XboxOnes.getManufacturer() + "-=-=-=-=-=-");
console.log(XboxOnes.title);
XboxOnes.isPortable();
XboxOnes.isBluerayReaderExist();

console.log("\n-=-=-=-=" + Switch.getManufacturer() + "-=-=-=-=-=-");
console.log(Switch.title);
Switch.isPortable();
Switch.isBluerayReaderExist();
Switch.getBatteryLife();
Switch.getWeight();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//                 function constructor 
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function Game(name, genre, platform, year) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
    this.year = year;

    this.getPlatform = function () {
        console.log(`Available on: ${this.platform.join(', ')}.`);
    };

    this.getGenre = function () {
        console.log(`Genre is ${this.genre}.`);
    };

    this.getYear = function () {
        console.log(`Released in ${this.year}.`);
    }

}

const GodOfWar = new Game("Gof of War 4", "Action-adventure", ["PS4", "Windows"], 2018);
const MarioKart = new Game("Mario Kart 8", "Kart racing game", ["Nintendo Switch", "Wii U"], 2014);

console.log("\n-=-=-=-=-=-=" + GodOfWar.name + "-=-=-=-=-=-=");
GodOfWar.getPlatform();
GodOfWar.getGenre();
GodOfWar.getYear();

console.log("\n-=-=-=-=-=-=" + MarioKart.name + "-=-=-=-=-=-=");
MarioKart.getPlatform();
MarioKart.getGenre();
MarioKart.getYear();
