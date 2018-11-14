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
  is_verified_photo
  createdAt DATE NOT NULL,
  updatedAt DATE NOT NULL,


);


CREATE TABLE photos (
  id INT UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
  display_index INT NOT NULL,
  alt_text VARCHAR(255),
  is_verified_photo BOOLEAN DEFAULT false,
  listing_id INT NOT NULL,
  image_url VARCHAR(2000) NOT NULL,
  createdAt DATE,
  updatedAt DATE
);




