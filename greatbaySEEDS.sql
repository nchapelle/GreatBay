CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE Auction (
  id INT NOT NULL AUTO_INCREMENT,
  ForSale VARCHAR(45) INT NULL,
  category VARCHAR(45) NOT NULL,
  startingPrice INTEGER(10) INT default 0,
  highestBid INTEGER(10) INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO Auction (ForSale, category, startingPrice, highestBid)
VALUES ("car", "item", 100, 5000);



