CREATE DATABASE IF NOT EXISTS airbnb_clone;

USE airbnb_clone;

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id INT UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
  display_index INT NOT NULL,
  alt_text VARCHAR(255),
  is_verified_photo BOOLEAN DEFAULT false,
  listing_id INT NOT NULL,
  image_url VARCHAR(2000) NOT NULL
);



