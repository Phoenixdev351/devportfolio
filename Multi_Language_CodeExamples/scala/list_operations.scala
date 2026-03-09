/* Scala Collections */

object ListOperations {
  def main(args: Array[String]): Unit = {
    val numbers = List(1, 2, 3, 4, 5)
    
    val doubled = numbers.map(_ * 2)
    println(s"Doubled: $doubled")
    
    val sum = numbers.sum
    println(s"Sum: $sum")
  }
}
