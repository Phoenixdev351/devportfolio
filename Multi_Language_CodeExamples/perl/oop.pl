#!/usr/bin/perl

package Person;

sub new {
    my ($class, $name, $age) = @_;
    my $self = {
        name => $name,
        age => $age
    };
    bless $self, $class;
    return $self;
}

sub greet {
    my $self = shift;
    print "Hello, I'm $self->{name} and I'm $self->{age} years old\n";
}

package main;
my $person = Person->new("Frank", 40);
$person->greet();
