class Person {
  final String name;
  final int age;

  Person(this.name, this.age);

  void greet() {
    print("Hello, I'm $name and I'm $age years old");
  }
}

void main() {
  var person = Person("Eve", 26);
  person.greet();
}
