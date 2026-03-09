defmodule Person do
  defstruct name: "", age: 0
  
  def greet(%Person{name: name, age: age}) do
    "Hello, I'm #{name} and I'm #{age} years old"
  end
end

person = %Person{name: "Karen", age: 33}
IO.puts(Person.greet(person))
