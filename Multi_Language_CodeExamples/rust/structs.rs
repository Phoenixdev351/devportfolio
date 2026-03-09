struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn greet(&self) {
        println!("Hello, I'm {} and I'm {} years old", self.name, self.age);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 28,
    };
    person.greet();
}