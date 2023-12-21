// Unit Cards:
class Ninja {
    constructor(color,belt) {
        this.color=color;
        this.belt=belt;
       
    
    };
}
const redBeltNinja = new Ninja("red", "black");
console.log(redBeltNinja.color);
console.log(redBeltNinja.belt);

// Effect Cards :
// class Effect {
//     constructor(cost,stat,magnitude){
//         this.cost=cost;
//         this.stat=stat;
//         this.magnitude=magnitude;
        

//     }

// }
// const hardAlgorithm = new Effect("2","resilience","+3");
// const UnhandledPromiseRejection = new Effect("1","resilience","-2")
// const PairProgramming = new Effect("3","power","+2");
// console.log(hardAlgorithm.cost);
// console.log(hardAlgorithm.stat);
// console.log(hardAlgorithm.magnitude);
// console.log(UnhandledPromiseRejection.cost);
// console.log(UnhandledPromiseRejection.stat);
// console.log(UnhandledPromiseRejection.magnitude);
// console.log(PairProgramming.cost);
// console.log(PairProgramming.stat);
// console.log(PairProgramming.magnitude);


class Effect{
    constructor(name){
        this.name=name;
       

    }
}
const Algorithm = new Effect("hardAlgorithm");
const rejection= new Effect("Unhandled Promise Rejection");
const prog= new Effect("Pair Programming");
console.log(Algorithm.name);
console.log(rejection.name);
console.log(prog.name);
