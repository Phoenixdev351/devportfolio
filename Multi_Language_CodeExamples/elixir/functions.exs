defmodule Math do
  def add(a, b), do: a + b
  def multiply(a, b), do: a * b
end

defmodule Main do
  def run do
    IO.puts("5 + 3 = #{Math.add(5, 3)}")
    IO.puts("5 * 3 = #{Math.multiply(5, 3)}")
  end
end

Main.run()
