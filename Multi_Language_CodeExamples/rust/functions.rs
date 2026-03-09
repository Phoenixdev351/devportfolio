fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

fn main() {
    let result1 = add(5, 3);
    let result2 = multiply(5, 3);
    
    println!("5 + 3 = {}", result1);
    println!("5 * 3 = {}", result2);
}