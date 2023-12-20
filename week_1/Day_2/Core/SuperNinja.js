
class Ninja {
    constructor(name, health, speed=3, strength=3) {
      this.name = name;
      this.health = health;
      this.speed = speed ;
      this.strength = strength ;
    }
    sayName() {
      console.log(this.name);
    }
    showStats() {
      console.log(`name: ${this.name}, health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}`);
    }
    drinkSake() {
        console.log(this.name);
    }
  }
  
  class Sensei extends Ninja {
    constructor(name, health, wisdom) {
      super(name, health);
      this.wisdom = wisdom /10;
    }
   
  }