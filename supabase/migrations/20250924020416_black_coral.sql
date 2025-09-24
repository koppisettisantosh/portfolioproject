-- SQL script to create the contact_details table if it doesn't exist
-- Run this in your MySQL database if you haven't created the table yet

USE portfolio_db;

CREATE TABLE IF NOT EXISTS contact_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Add indexes for better performance
CREATE INDEX idx_email ON contact_details(email);
CREATE INDEX idx_created_at ON contact_details(created_at);