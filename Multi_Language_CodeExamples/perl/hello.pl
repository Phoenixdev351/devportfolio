#!/usr/bin/perl

print "Hello, World!\n";

sub greet {
    my ($name) = @_;
    return "Hello, $name!";
}

print greet("Perl"), "\n";
