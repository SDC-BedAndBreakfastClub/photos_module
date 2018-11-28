const { Pool, Client } = require('pg');

// connect to database
const client = new Client ({
  user: 'dannyngos',
  database: 'airbnb_photos',
});

client.connect();

const photos = function (id, callback) {
  const query =`
 select listings.name, photos.image_url, photos.description, photos.is_verified_photo, photos.createdAt, photos.updatedAt FROM photos
INNER JOIN listings ON listings.listing_id = photos.listing_id
WHERE listings.listing_id = ${id}
ORDER BY photos.updatedAt desc 
  `;
  client.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
};

const addPhotos = (newPhotos, cb) => {
  const {
    listing_id,
    image_url,
    description,
    is_verified_photo,
  } = newPhotos;
  const queryStr = `INSERT INTO photos (listing_id, image_url, description, is_verified_photo) VALUES ($1, $2, $3, $4) RETURNING id`;
  const values = [listing_id, image_url, description, is_verified_photo];
  client.query(queryStr, values)
    .then((res) => cb(null, res))
    .catch(err => cb(err));
};

const updatePhotos = (update, cb) => {
  const {
    id,
    image_url,
    description,
    is_verified_photo,
  } = update;
  const queryStr = `UPDATE photos SET image_url = $1, description = $2, is_verified_photo = $3 WHERE id =$4 RETURNING *`;
  const values = [image_url, description, is_verified_photo, id];
  client.query(queryStr, values)
    .then((res) => cb(null, res))
    .catch(err => cb(err));
};

const deletePhotos = (id, cb) => {
  const queryStr = `DELETE FROM photos WHERE id = $1`;
  client.query(queryStr, [id])
    .then((res) => cb(null, res))
    .catch(err => cb(err));
};



module.exports = { photos, addPhotos, updatePhotos, deletePhotos };

