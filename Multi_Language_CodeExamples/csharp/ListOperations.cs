using System;
using System.Linq;
using System.Collections.Generic;

class ListOperations {
    static void Main() {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
        
        var doubled = numbers.Select(n => n * 2).ToList();
        Console.WriteLine("Doubled: " + string.Join(", ", doubled));
        
        int sum = numbers.Sum();
        Console.WriteLine("Sum: " + sum);
    }
}
