class Calculator {
    fun add(a: Int, b: Int): Int = a + b
    fun multiply(a: Int, b: Int): Int = a * b
}

fun main() {
    val calc = Calculator()
    println("5 + 3 = ${calc.add(5, 3)}")
    println("5 * 3 = ${calc.multiply(5, 3)}")
}
