-module(math_ops).
-export([add/2, multiply/2, main/0]).

add(A, B) -> A + B.
multiply(A, B) -> A * B.

main() ->
    io:format("5 + 3 = ~w~n", [add(5, 3)]),
    io:format("5 * 3 = ~w~n", [multiply(5, 3)]).
