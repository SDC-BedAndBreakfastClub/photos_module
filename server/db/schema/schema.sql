CREATE DATABASE IF NOT EXISTS airbnb_photos;

\connect airbnb_photos;

DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  listing_id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE photos (
  id serial PRIMARY KEY,
  listing_id INT NOT NULL,
  image_url text NOT NULL,
  description text NOT NULL,
  is_verified_photo BOOLEAN NOT NULL,
  createdAt DATE,
  updatedAt DATE,
  foreign key (listing_id) references listings (listing_id)
);

\copy listings(name) FROM '/Users/dannyngos/HRSF105/SDC/airbnb-clone-photo-module/utils/db/listings.csv' DELIMITER ',' CSV HEADER;

\copy photos(listing_id,image_url,description,is_verified_photo,createdAt,updatedAt) FROM '/Users/dannyngos/HRSF105/SDC/airbnb-clone-photo-module/utils/db/photos.csv' DELIMITER ',' CSV HEADER;

