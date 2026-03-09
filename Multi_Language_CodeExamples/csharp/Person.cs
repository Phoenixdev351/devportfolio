using System;

class Person {
    public string Name { get; set; }
    public int Age { get; set; }
    
    public void Greet() {
        Console.WriteLine($"Hello, I'm {Name} and I'm {Age} years old");
    }
    
    static void Main() {
        Person person = new Person { Name = "Bob", Age = 30 };
        person.Greet();
    }
}
