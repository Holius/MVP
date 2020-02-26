DROP DATABASE IF EXISTS apod;

CREATE DATABASE apod;

USE apod;

CREATE TABLE users (
username VARCHAR(50) PRIMARY KEY,
password VARCHAR(200)
);

CREATE TABLE entries (
    date CHAR(10) PRIMARY KEY,
    url VARCHAR(250),
    description text,
    title VARCHAR(150),
    media_type VARCHAR(20),
    likes INT
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment text, 
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),
    entries_date CHAR(10),
    users_username VARCHAR(50),
    FOREIGN KEY (entries_date) REFERENCES entries(date),
    FOREIGN KEY (users_username) REFERENCES users(username)
);

CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entries_date CHAR(10),
    users_username VARCHAR(50),
    FOREIGN KEY (entries_date) REFERENCES entries(date),
    FOREIGN KEY (users_username) REFERENCES users(username)
);