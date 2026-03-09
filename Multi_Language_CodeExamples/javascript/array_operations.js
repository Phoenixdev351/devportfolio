const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);