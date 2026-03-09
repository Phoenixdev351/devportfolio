<?php
$numbers = [1, 2, 3, 4, 5];

$doubled = array_map(fn($n) => $n * 2, $numbers);
echo "Doubled: " . implode(", ", $doubled) . "\n";

$sum = array_sum($numbers);
echo "Sum: " . $sum . "\n";
?>
