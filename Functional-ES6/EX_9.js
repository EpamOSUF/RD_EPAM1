const add = (x, y, z) => x + y + z;
const args = [1, 2, 3];
// the bind function has the same boyd of add but the parameters take the 'this'
const add1 = add.bind(null, 1);
console.log(add1(...args));
console.log(add1(2, 3));