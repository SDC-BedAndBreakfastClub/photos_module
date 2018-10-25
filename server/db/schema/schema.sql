CREATE DATABASE IF NOT EXISTS airbnb_clone;

USE airbnb_clone;

CREATE TABLE IF NOT EXISTS photos (
  id INT UNIQUE NOT NULL AUTO_INCREMENT,
  display_index INT NOT NULL,
  alt_text VARCHAR(255),
  is_verified_photo BOOLEAN DEFAULT false,
  listing_id INT NOT NULL,
  image_url VARCHAR(2000)
);



