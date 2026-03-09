numbers = [1, 2, 3, 4, 5]

doubled = numbers.map { |num| num * 2 }
puts "Doubled: #{doubled.inspect}"

sum = numbers.reduce(:+)
puts "Sum: #{sum}"