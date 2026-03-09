using System;

class Calculator {
    static int Add(int a, int b) => a + b;
    static int Multiply(int a, int b) => a * b;
    
    static void Main() {
        Console.WriteLine($"5 + 3 = {Add(5, 3)}");
        Console.WriteLine($"5 * 3 = {Multiply(5, 3)}");
    }
}
