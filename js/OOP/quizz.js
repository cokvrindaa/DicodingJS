class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }
    // METOD
    eat() {
        return `${this.name} sedang makan!`
    }
}
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false)
    }
    fly() {
        return `${this.name} sedang terbang!`
    }
}

// instance
const myRabbit = new Rabbit("Labi", 2)
console.log(myRabbit.isMammal)
console.log(myRabbit.age)
console.log(myRabbit.eat())

const myEagle = new Eagle("Elo", 4);
console.log(myEagle.isMammal)
console.log(myEagle.age)
console.log(myEagle.fly())