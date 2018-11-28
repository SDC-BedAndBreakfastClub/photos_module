require('dotenv').config();
const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const db = require('./db/index.js');
const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(express.json());
app.use(compression());
app.use(cors());

app.use('/rooms/:listingId', express.static('public'));

app.get('/api/rooms/:listingId/images', (req, res) => {
  // res.set('Cache-Control', 'no-cache');
  const photos_id = req.params.listingId;
  db.photos(photos_id, (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).send(results)
  })
    // .then(photos => res.json(photos))
    // // eslint-disable-next-line no-console
    // .catch(e => console.error(e));
});


// app.post('/api/rooms/:listingId/images', (req, res) => {
//   db.addPhoto((err, result) => {
//     if (err) {
//       throw err
//     } else {
//       res.status(201).send(result);
//     }
//   })
// });


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on localhost:${port}`);
});
