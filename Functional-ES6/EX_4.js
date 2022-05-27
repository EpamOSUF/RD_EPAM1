const divide = (x, y) => x / y;

// this function will handle if someone tries to divide by 0
const secondArgumentIsntZero = func =>
    (...args) => {
        if (args[1] === 0) {
            console.log('Error: dividing by zero');
            return null;
        }

        return func(...args);
    }

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(5, 3));

