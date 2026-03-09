package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5}
    
    fmt.Println("Slice:", numbers)
    
    for i, num := range numbers {
        fmt.Printf("Index %d: %d\n", i, num)
    }
}