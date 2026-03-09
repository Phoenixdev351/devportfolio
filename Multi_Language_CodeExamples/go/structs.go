package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() {
    fmt.Printf("Hello, I'm %s and I'm %d years old\n", p.Name, p.Age)
}

func main() {
    person := Person{Name: "Charlie", Age: 35}
    person.Greet()
}