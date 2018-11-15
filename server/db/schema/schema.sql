CREATE DATABASE IF NOT EXISTS airbnb_photos;

USE airbnb_photos;

DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  listing_id INT UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE photos (
  id INT UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
  listing_id INT NOT NULL,
  image_url text NOT NULL,
  description text NOT NULL,
  is_verified_photo BOOLEAN NOT NULL,
  createdAt DATE NOT NULL,
  updatedAt DATE NOT NULL,
  foreign key (listing_id) references listings (listing_id)
);




