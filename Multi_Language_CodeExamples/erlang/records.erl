-module(person).
-export([new/2, greet/1]).

new(Name, Age) ->
    {person, Name, Age}.

greet({person, Name, Age}) ->
    io:format("Hello, I'm ~s and I'm ~w years old~n", [Name, Age]).

main() ->
    Person = new("Leo", 48),
    greet(Person).
