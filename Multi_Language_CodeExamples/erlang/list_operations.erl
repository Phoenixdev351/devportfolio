-module(list_ops).
-export([main/0]).

main() ->
    Numbers = [1, 2, 3, 4, 5],
    Doubled = [X * 2 || X <- Numbers],
    io:format("Doubled: ~w~n", [Doubled]),
    
    Sum = lists:sum(Numbers),
    io:format("Sum: ~w~n", [Sum]).
