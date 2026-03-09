#!/bin/bash

FILE="test.txt"

if [ -f "$FILE" ]; then
    echo "$FILE exists."
    cat "$FILE"
else
    echo "Creating $FILE..."
    echo "Hello, Bash!" > "$FILE"
fi
