const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class Ninja {
    constructor(name,health,speed,strength,){
        this.name=name;
        this.health=health / 90;
        this.speed=speed  /3;
        this.strength=strength /3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats() {
        console.log(`name: ${this.name}, health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}`);
    }
    drinkSake() {
        console.log(this.health+10)
    }
}