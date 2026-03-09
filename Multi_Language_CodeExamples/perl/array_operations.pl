#!/usr/bin/perl

my @numbers = (1, 2, 3, 4, 5);

my @doubled = map { $_ * 2 } @numbers;
print "Doubled: @doubled\n";

my $sum = 0;
$sum += $_ for @numbers;
print "Sum: $sum\n";
