import Foundation

struct Person {
    var name: String
    var age: Int
    
    func greet() {
        print("Hello, I'm \(name) and I'm \(age) years old")
    }
}

let person = Person(name: "Charlie", age: 35)
person.greet()
