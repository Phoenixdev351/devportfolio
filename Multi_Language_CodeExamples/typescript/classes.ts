class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calc = new Calculator();
console.log(`5 + 3 = ${calc.add(5, 3)}`);
console.log(`5 * 3 = ${calc.multiply(5, 3)}`);
