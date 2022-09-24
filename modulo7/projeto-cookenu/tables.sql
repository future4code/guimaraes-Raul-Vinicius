-- Active: 1660770465650@@35.226.146.116@3306@guimaraes-4211089-raul-rita2

CREATE TABLE IF NOT EXISTS Cookenu_Users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL, 
    role VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_Recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_Users(id)
);

CREATE TABLE IF NOT EXISTS Cookenu_Follow (
    user_id VARCHAR(64),
    follow_id VARCHAR(64),
    PRIMARY KEY (follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES Cookenu_users(id),
    FOREIGN KEY (followed_id) REFERENCES Cookenu_users(id)
);