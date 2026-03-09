fn main() {
    let mut numbers = vec![1, 2, 3, 4, 5];
    
    numbers.push(6);
    println!("Vector: {:?}", numbers);
    
    for num in &numbers {
        println!("Number: {}", num);
    }
}