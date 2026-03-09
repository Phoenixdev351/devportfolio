package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func multiply(a, b int) int {
    return a * b
}

func main() {
    result1 := add(5, 3)
    result2 := multiply(5, 3)
    
    fmt.Printf("5 + 3 = %d\n", result1)
    fmt.Printf("5 * 3 = %d\n", result2)
}