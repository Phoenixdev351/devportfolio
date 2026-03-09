-- Lua Classes

Person = {}
Person.__index = Person

function Person:new(name, age)
    local self = setmetatable({}, Person)
    self.name = name
    self.age = age
    return self
end

function Person:greet()
    print("Hello, I'm " .. self.name .. " and I'm " .. self.age .. " years old")
end

local person = Person:new("Grace", 32)
person:greet()
