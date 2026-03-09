/* Scala Classes */

case class Person(name: String, age: Int) {
  def greet(): String = s"Hello, I'm $name and I'm $age years old"
}

object PersonApp {
  def main(args: Array[String]): Unit = {
    val person = Person("Iris", 28)
    println(person.greet())
  }
}
