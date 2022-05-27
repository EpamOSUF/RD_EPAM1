const map = (arr, func) =>
    arr.reduce((acc, x) => [
        ...acc,
        func(x),
    ], []);

console.log(map([1, 2, 3], x => x * 2));
console.log(map([5, 6, 7, 8, 9, 10], x => -x));
console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));