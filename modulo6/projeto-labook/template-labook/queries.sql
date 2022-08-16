-- Active: 1657909499156@@35.226.146.116@3306@guimaraes-4211089-raul-rita
CREATE TABLE
    IF NOT EXISTS labook_friendship(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        friend_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labook_users (id),
        FOREIGN KEY (friend_id) REFERENCES labook_users (id)
    );