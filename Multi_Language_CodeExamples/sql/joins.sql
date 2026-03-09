-- SQL Joins and Aggregates

CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO orders (id, user_id, amount) VALUES
(1, 1, 100.00),
(2, 2, 150.00),
(3, 1, 200.00);

SELECT u.name, SUM(o.amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
