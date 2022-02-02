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

const lisa = new Ninja("Lisa", 30)
lisa.showStats()