public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void greet() {
        System.out.println("Hello, I'm " + name + " and I'm " + age + " years old");
    }
    
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        person.greet();
    }
}
