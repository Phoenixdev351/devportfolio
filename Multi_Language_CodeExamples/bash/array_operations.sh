#!/bin/bash

numbers=(1 2 3 4 5)

echo "Original: ${numbers[@]}"

sum=0
for num in "${numbers[@]}"; do
    sum=$((sum + num))
done

echo "Sum: $sum"
echo "Average: $((sum / ${#numbers[@]}))"
