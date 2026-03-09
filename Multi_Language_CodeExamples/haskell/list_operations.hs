-- Haskell List Operations

numbers :: [Int]
numbers = [1, 2, 3, 4, 5]

main :: IO ()
main = do
    let doubled = map (* 2) numbers
    putStrLn $ "Doubled: " ++ show doubled
    
    let sumTotal = sum numbers
    putStrLn $ "Sum: " ++ show sumTotal
