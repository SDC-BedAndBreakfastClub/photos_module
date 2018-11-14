require('dotenv').config();
const faker = require('faker');
const { sprintf } = require('sprintf-js');
const db = require('../../server/db');
const Photo = require('../../server/model');
// const fs = require('fs');

const mockImageCount = 34; // Number of mock images currently uploaded to AWS


// Generate a random number between the initial value(inclusive) and max value(inclusive)
const generateRandomNumber = (initVal, maxVal) => (
  Math.floor((Math.random() * (maxVal + 1 - initVal)) + initVal)
);

/* Given a max value, generates a random image formatted to match images hosted on AWS
* Example: https://s3-us-west-1.amazonaws.com/airbnb-clone-photo-module-photos/photos/00001.jpg
*/
const getRandomImageUrl = (maxImageCount) => {
  const baseUrl = 'https://s3-us-west-1.amazonaws.com/airbnb-clone-photo-module-photos/photos/';
  const randomImageNumber = generateRandomNumber(1, maxImageCount);
  return `${baseUrl}${sprintf('%05s.jpg', randomImageNumber)}`;
};

// Create object to create Photo instance

const createRandomImageObject = (displayIndex, imageUrl, listingId) => ({
  display_index: displayIndex,
  alt_text: faker.lorem.sentences(2),
  verified_photo: faker.random.boolean(),
  listing_id: listingId,
  image_url: imageUrl,
});

// Create a photos array for a given number of listings

const createPhotosArray = (numListings) => {
  const photosArray = [];
  for (let i = 1; i <= numListings; i += 1) {
    // Randomly determine number of images for a listing id
    // between 5 and 20 then create that many image objects
    for (let j = 1; j <= generateRandomNumber(5, 20); j += 1) {
      const newImageObject = createRandomImageObject(j, getRandomImageUrl(mockImageCount), i);
      photosArray.push(newImageObject);
    }
  }
  return photosArray;
};

// Create and save records for 100 listings
db.sync()
  .then(() => Photo.bulkCreate(createPhotosArray(100)))
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Records seeded into the database');
  })
  .finally(() => {
    db.close();
  })
  // eslint-disable-next-line no-console
  .catch(e => console.error(e));
