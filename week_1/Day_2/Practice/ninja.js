


class Ninja {
    constructor(name,health =90,speed=3,strength=3,){
        this.name=name;
        this.health=health ;
        this.speed=speed  ;
        this.strength=strength ;
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();