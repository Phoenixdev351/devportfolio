class Person {
    String name
    int age
    
    void greet() {
        println "Hello, I'm ${name} and I'm ${age} years old"
    }
}

Person person = new Person(name: "Maya", age: 29)
person.greet()
