const faker = require('faker');
const path =  require('path');
const fs = require('fs');
const moment = require('moment');

const streamListing = fs.createWriteStream(path.join(__dirname, 'listings.csv'));
streamListing.write('name\n');

let i = 0;
function writeListings() {
  while (i < 10000000) {
    i++;
    const name = faker.commerce.productName();
    if (!streamListing.write(`${name}\n`)) {
      return;
    }
  }
  streamListing.end();
}

const streamPhotos = fs.createWriteStream(path.join(__dirname, 'photos.csv'));
streamPhotos.write('listing_id, image_url, description, is_verified_photo, createdAt, updatedAt\n');

let j = 0;
function writePhotos () {
  while (j < 100000000) {
    j++;
    const urlPath = 'https://s3-us-west-1.amazonaws.com/hrsdc/';
    const listing_id = Math.floor(Math.random() * 10000000) + 1;
    const image_url = urlPath + Math.floor(Math.random() * 33 +1) + '.jpg'; //33 images in S3
    const description = faker.lorem.words();
    const is_verified_photo = !!Math.floor(Math.random() * 2);
    const createdAt = moment(faker.date.past()).format('YYYY-MM-DD');
    const updatedAt = moment(faker.date.recent()).format('YYYY-MM-DD');
    if (!streamPhotos.write(`${listing_id},${image_url},${description},${is_verified_photo},${createdAt},${updatedAt}\n`)) {
      return;
    }
  }
  streamPhotos.end();
}

streamListing.on('drain', function() {
  writeListings();
});
writeListings();

streamPhotos.on('drain', function () {
  writePhotos();
});
writePhotos();
