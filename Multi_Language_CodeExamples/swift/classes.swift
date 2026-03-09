import Foundation

class Calculator {
    func add(_ a: Int, _ b: Int) -> Int {
        return a + b
    }
    
    func multiply(_ a: Int, _ b: Int) -> Int {
        return a * b
    }
}

let calc = Calculator()
print("5 + 3 = \(calc.add(5, 3))")
print("5 * 3 = \(calc.multiply(5, 3))")
