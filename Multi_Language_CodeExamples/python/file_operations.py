import os

# Write to file
with open('test.txt', 'w') as f:
    f.write('Hello, File!')

# Read from file
with open('test.txt', 'r') as f:
    content = f.read()
    print(content)

# Clean up
if os.path.exists('test.txt'):
    os.remove('test.txt')