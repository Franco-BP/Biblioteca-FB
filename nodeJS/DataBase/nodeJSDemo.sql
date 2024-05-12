CREATE DATABASE nodejsdemo;

USE nodejsdemo;

CREATE TABLE person (
	id INT PRIMARY KEY NOT NULL auto_increment,
    name VARCHAR(50),
    contactNumber VARCHAR(50)
);

CREATE TABLE car (
	id INT PRIMARY KEY NOT NULL auto_increment,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50),
    productionYear INT NOT NULL,
    personId INT,
    FOREIGN KEY (personId) REFERENCES person(id)
);