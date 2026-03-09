/* Scala Functions */

object Calculator {
  def add(a: Int, b: Int): Int = a + b
  def multiply(a: Int, b: Int): Int = a * b
  
  def main(args: Array[String]): Unit = {
    println(s"5 + 3 = ${add(5, 3)}")
    println(s"5 * 3 = ${multiply(5, 3)}")
  }
}
