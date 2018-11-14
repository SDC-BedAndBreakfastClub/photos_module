const pg = require('pg');

// connect to database
const connection = pg.createConnection({
  user:'dannyngos',
  database: 'airbnb_photos',
});

connection.connect();


