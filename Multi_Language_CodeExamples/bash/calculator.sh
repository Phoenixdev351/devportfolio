#!/bin/bash

add() {
    echo $((1 + 2))
}

multiply() {
    echo $((1 * 2))
}

echo "5 + 3 = $(add)"
echo "5 * 3 = $(multiply)"
