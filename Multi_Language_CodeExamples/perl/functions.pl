#!/usr/bin/perl

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

sub multiply {
    my ($a, $b) = @_;
    return $a * $b;
}

print "5 + 3 = ", add(5, 3), "\n";
print "5 * 3 = ", multiply(5, 3), "\n";
