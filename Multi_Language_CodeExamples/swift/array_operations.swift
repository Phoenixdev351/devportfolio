import Foundation

let numbers = [1, 2, 3, 4, 5]

let doubled = numbers.map { $0 * 2 }
print("Doubled: \(doubled)")

let sum = numbers.reduce(0, +)
print("Sum: \(sum)")
