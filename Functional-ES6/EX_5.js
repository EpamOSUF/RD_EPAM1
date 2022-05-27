const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// this produce the same output, but in this case
// we can define the filter function before, this
// helps to not write the same logic over again
const isEven = x => x % 2 === 0;

const evenNumbers = numbers.filter(x => x % 2 === 0);
const evenNumbers2 = numbers.filter(isEven);

console.log(evenNumbers);
console.log(evenNumbers2);

const superheroes = [
    'Ironman',
    'Superman',
    'Dr. Manhattan',
    'Spidernman',
    'Green Lantern',
    'Antman'
];

const createLengthTest = minLength =>
    hero => hero.length > minLength;

const longWords = superheroes.filter(createLengthTest(8));

console.log(longWords);