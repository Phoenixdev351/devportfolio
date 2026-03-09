class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def greet
    "Hello, I'm #{@name} and I'm #{@age} years old"
  end
end

person = Person.new("Bob", 30)
puts person.greet