-- SQL Queries

INSERT INTO users (id, name, age, email) VALUES
(1, 'Alice', 25, 'alice@example.com'),
(2, 'Bob', 30, 'bob@example.com'),
(3, 'Charlie', 35, 'charlie@example.com');

SELECT * FROM users;

SELECT name, age FROM users WHERE age > 25;

SELECT AVG(age) AS average_age FROM users;
