class Ninja {
    constructor(ninjaName, health) {
        this.name = ninjaName
        this.health = health
        this.speed = 3
        this.strength = 3 
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(
        `${this.name} has health of ${this.health}, speed of ${this.speed} and strength of ${this.strength} suck it.`
        )
    }
    drinkSake() {
        this.health += 10;
    }
}


class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.wisdom = 10;
    }
    showSenseiStats() {
        super.showStats();
        console.log(this.wisdom);
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter", 300);

superSensei.speakWisdom();
superSensei.showSenseiStats();

