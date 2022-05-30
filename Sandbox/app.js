let mixin = {
    madeIn(){
        console.log('This car was made in 2018');
    }
}

let carMixin = {
    __proto__: mixin,

    madeIn(){
        super.madeIn();
    }
}

// Hoisting
sayHello();

class Car {
    constructor(doors, engine, color){
        this.doors = doors
        this.engine = engine,
        this.color = color
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine \nand a beautiful ${this.color} color`
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

function sayHello() {
    console.log(`Hello sunny day!!!`);
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats){
        super(doors, engine, color, brand, carStats);

        this.brand = brand;
        this.wheels = 4,
        this.ac = true;

        // assign mixin 

        Object.assign(this, carMixin);

    }

    myBrand(){
        console.log(`This SUV is ${this.brand}`);
    }
}

const cx5 = new SUV(4, 'V6', 'Blue', 'Mazda');
const corolla = new Car(4, 'V7', 'Sand');

console.log(cx5);

console.log(cx5.carStats());
console.log(cx5.myBrand());
// console.log(cx5.totalDoors());  error

console.log(Car.totalDoors(cx5,corolla)); 
console.log(cx5.madeIn());