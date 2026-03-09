def numbers = [1, 2, 3, 4, 5]

def doubled = numbers.collect { it * 2 }
println "Doubled: ${doubled}"

def sum = numbers.sum()
println "Sum: ${sum}"

def average = numbers.average()
println "Average: ${average}"
