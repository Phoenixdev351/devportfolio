defmodule ListOps do
  def run do
    numbers = [1, 2, 3, 4, 5]
    
    doubled = Enum.map(numbers, fn x -> x * 2 end)
    IO.inspect(doubled, label: "Doubled")
    
    sum = Enum.sum(numbers)
    IO.puts("Sum: #{sum}")
  end
end

ListOps.run()
