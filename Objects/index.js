// Arrays can have multiple data types
let myArray = [10,3,2,'str',true, () => Math.pow(myArray[0],myArray[1])]

console.log(myArray); // output [ 10, 3, 2, "str", true, myArray() ]

console.log(myArray[5]()); // 1000
console.log(typeof(myArray[5])); // function

function myArrayOperations(arr) {
    
    for (const key in arr) {
        if (Object.hasOwnProperty.call(arr, key)) {
            const element = arr[key];

            if(typeof(element) !== 'function'){
                console.log(`Hi, I am ${element} an element from myArray`);
            }else{
                console.log(`Hi, I am ${myArray[5]()} the returned value from a function inside myArray`);
            }
            
        }
    }

    console.log(myArray.sort()); // [ myArray(), 10, 2, 3, "str", true ] you can sort anything

    // Use map to return a new array with 'transformed' values
    let mappedArray = myArray.map( element => { 
        if(typeof(element) === 'number') return Math.pow(element,5)
        else return element;
    })
    console.log(mappedArray);

    // reduce to sum all the data inside the array (you can specify which things you want to sum)
    let arrayReduced = myArray.reduce((sum, value) => (typeof(value) === "number" ? sum + value : sum), 0);
    console.log(arrayReduced);
};

myArrayOperations(myArray);

// Objects are collections key-value, extended by prototype
let myObject = {
    'name': 'Oscar',
    'doing': 'training',
    'work': 'JSEngineer',
    'expertice': 'Novice',
    'likes': 'Tetris',
    'age': 24,
    dream: 'sleep 8 hours',
    greet () {console.log(`Hi my name is  ${this.name} and my age is ${this.age} `)},
    get hobbie() {
        return this.likes
    },
    set setDream(v) { this.dream = v; }
}


console.log(myObject);
console.log(myObject.greet());

// Getters and setters
console.log(myObject.hobbie);

myObject.setDream = 'Play every videogame and read every book I want';
console.log(myObject.dream); // Play every videogame and read every book I want

myObject.setDream = 'Be a better software engineer';
console.log(myObject.dream); // Be a better software engineer

// flags and descriptors
let descriptor = Object.getOwnPropertyDescriptor(myObject, 'name');
let descriptor2 = Object.getOwnPropertyDescriptor(myObject, 'greet');
let descriptor3 = Object.getOwnPropertyDescriptor(myObject, 'hobbie');


alert( JSON.stringify(descriptor, null, 2 ) );
alert( JSON.stringify(descriptor2, null, 2 ) );
alert( JSON.stringify(descriptor3, null, 2 ) );
