const x = 5;

// x = 6; can't assing new value to constants

// some uses of arrays and how they mutates
const numbers = [1,2,3,4,5];
numbers[0] = 100;
numbers.reverse();

console.log(numbers);

// object mutation
const person = {
    name: 'John Doe',
    age: 34,
};
person.name = 'Bob';

console.log(person);