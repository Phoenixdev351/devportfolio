-- Lua Tables

local numbers = {1, 2, 3, 4, 5}

print("Original: ")
for i, v in ipairs(numbers) do
    print(v)
end

local sum = 0
for i, v in ipairs(numbers) do
    sum = sum + v
end

print("Sum: " .. sum)
