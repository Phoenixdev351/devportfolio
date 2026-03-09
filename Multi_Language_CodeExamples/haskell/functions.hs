-- Haskell Functions

add :: Int -> Int -> Int
add a b = a + b

multiply :: Int -> Int -> Int
multiply a b = a * b

main :: IO ()
main = do
    putStrLn $ "5 + 3 = " ++ show (add 5 3)
    putStrLn $ "5 * 3 = " ++ show (multiply 5 3)
