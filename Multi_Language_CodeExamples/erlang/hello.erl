-module(hello).
-export([main/0, greet/1]).

main() ->
    io:fwrite("Hello, World!~n"),
    io:fwrite(greet("Erlang")).

greet(Name) ->
    "Hello, " ++ Name ++ "!~n".
