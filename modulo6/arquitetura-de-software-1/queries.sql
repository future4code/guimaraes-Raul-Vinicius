-- Active: 1657909499156@@35.226.146.116@3306@guimaraes-4211089-raul-rita
CREATE TABLE Arq_User(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);