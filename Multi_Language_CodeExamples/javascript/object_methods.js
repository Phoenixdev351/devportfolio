const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

user.greet();
console.log(Object.keys(user));