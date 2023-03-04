class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    sayHi() {
        console.log(`姓名 ${this.name}，学号 ${this.number}`);
    }
}
const ysx = new Student('yushixin', 77);
console.log(ysx.name);
console.log(ysx.number);
ysx.sayHi();

class Game {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class Moba extends Game {
    constructor(name, year, players) {
        super(name, year);
        this.players = players;
    }
    publish() {
        console.log(`${this.name} is a ${this.players} players game, coming into the market in the ${this.year}`);
    }
}
const dota = new Moba('dota', 2011, 5);
console.log(dota.name);
dota.publish();