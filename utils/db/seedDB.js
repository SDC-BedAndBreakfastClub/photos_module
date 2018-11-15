const faker = require('faker');
const path =  require('path');
const fs = require('fs');
const moment = require('moment');

let i = 0;
let j = 0;

const streamListing = fs.createWriteStream(path.join(__dirname, 'listings.csv'));
const streamPhotos = fs.createWriteStream(path.join(__dirname, 'photos.csv'));

function writeListings() {
  streamListing.write('listing_id, name\n');
  while (i < 10000000) {
    i++;
    const listing_id = i;
    const name = faker.commerce.productName();
    if (!streamListing.write(`${listing_id},${name}\n`)) {
      return;
    }
  }
  streamListing.end();
}

function writePhotos () {
  streamPhotos.write('id, listing_id, image_url, description, is_verified_photo, createdAt, updatedAt\n');
  while (j < 100000000) {
    j++;
    const urlPath = 'https://s3-us-west-1.amazonaws.com/hrsdc/';
    const id = j;
    const listing_id = Math.floor(Math.random() * 10000000) + 1;
    const image_url = urlPath + Math.floor(Math.random() * 33 +1) + '.jpg'; //33 images in S3
    const description = faker.lorem.text();
    const is_verified_photo = !!Math.floor(Math.random() * 2);
    const createdAt = moment(faker.date.past()).format('YYYY-MM-DD');
    const updatedAt = moment(faker.date.recent()).format('YYYY-MM-DD');
    if (!streamPhotos.write(`${id},${listing_id},${image_url},${description},${is_verified_photo},${createdAt},${updatedAt}\n`)) {
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


// create photos table
// const photosInfo =[];
// for (let i = 0; i < 100000; i++) {
//   let photos = {};
//   let urlPath = 'https://s3-us-west-1.amazonaws.com/hrsdc/';
//   photos.id = i + 1;
//   photos.listing_id = Math.floor(Math.random() * 100000) +1;
//   photos.image_url = urlPath + Math.floor(Math.random() *33 +1) + '.jpg';
//   photos.description = faker.lorem.text();
//   photos.is_verified_photo = !!Math.floor(Math.random() * 2);
//   photos.createdAt = faker.date.past();
//   photos.createdAt = moment(photos.createdAt).format('YYYY-MM-DD');
//   photos.updatedAt = faker.date.recent();
//   photos.updatedAt = moment(photos.updatedAt).format('YYYY-MM-DD');
//   photosInfo.push(photos);
// }



// const csvConverter = (arr) => {
//   let output = '';
//   let column = [];
//   for (let key in arr[0]) {
//     column.push(key);
//   }
//   output += `${column.join()}\n`;
//   for (let i = 0; i < arr.length; i++) {
//     column = [];
//     for (let key in arr[i]) {
//       column.push(arr[i][key]);
//     }
//     output += `${column.join()}\n`;
//   }
//   return output;
// };
//
// const listingsCSV = csvConverter(listingInfo);
// const photosCSV = csvConverter(photosInfo);
//
// fs.createWriteStream(path.join(__dirname, 'listings.csv'), listingsCSV, (err) => {
//   if (err) throw err;
//   console.log('saved');
// });
//
// fs.createWriteStream(path.join(__dirname, 'photos.csv'), photosCSV, (err) => {
//   if (err) throw err;
//   console.log('saved');
// });