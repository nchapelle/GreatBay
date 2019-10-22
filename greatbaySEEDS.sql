CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE Auction (
  id INT NOT NULL AUTO_INCREMENT,
  Post an item INT NULL,
  Bid an item INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO Auction (Post)
VALUES (50);

INSERT INTO Song (Bid)
VALUES (50);


