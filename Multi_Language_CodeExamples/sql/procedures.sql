-- SQL Stored Procedure

CREATE PROCEDURE GetUsersByAge(IN minAge INT)
BEGIN
    SELECT * FROM users WHERE age >= minAge;
END;

-- Call Procedure
CALL GetUsersByAge(25);
