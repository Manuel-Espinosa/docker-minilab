-- Create the 'test' database if it doesn't exist
CREATE DATABASE IF NOT EXISTS test;

-- Use the 'test' database
USE test;

-- Create the 'users' table with the required columns
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert a record into the 'users' table
INSERT INTO users (name) VALUES ('Manuel');
