data class Person(val name: String, val age: Int) {
    fun greet() = "Hello, I'm $name and I'm $age years old"
}

fun main() {
    val person = Person("Diana", 27)
    println(person.greet())
}
