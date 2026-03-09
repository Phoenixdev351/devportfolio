user = {
  name: "John",
  age: 25,
  email: "john@example.com"
}

puts "Name: #{user[:name]}"
puts "Age: #{user[:age]}"

user.each do |key, value|
  puts "#{key}: #{value}"
end