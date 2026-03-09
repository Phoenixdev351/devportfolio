-- Haskell Pattern Matching

data Person = Person { name :: String, age :: Int }

greet :: Person -> String
greet (Person n a) = "Hello, I'm " ++ n ++ " and I'm " ++ show a ++ " years old"

main :: IO ()
main = do
    let person = Person "Henry" 42
    putStrLn $ greet person
