require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const Photo = require('./model/index');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(compression());
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/api/rooms/:listingId/images', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  Photo.readAll(req.params.listingId)
    .then(photos => res.json(photos))
    // eslint-disable-next-line no-console
    .catch(e => console.error(e));
});

app.get('/rooms/:listingId', (req, res) => {
  const options = {
    root: path.join(__dirname, '..', 'public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  };
  res.sendFile('index.html', options, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.sendStatus(500);
    } else {
      // eslint-disable-next-line no-console
      console.log('Index sent');
    }
  });
});

app.post('/api/rooms/:listingId/images', (req, res) => {
  Photo.insert(req.body)
    .then(res.send())
});

app.put('api/rooms/:listingId/images', (req,res, next) => {
  Photo.update(
    {
      display_index: req.body.display_index,
    alt_text: req.body.alt_text,
    is_verified_photo: req.body.is_verified_photo,
    image_url: req.body.image_url
    },
    {
      returning: true, where: {id: req.params.listingId}
    }).then(function ([ rowsUpdate, [updatedPhotos] ]) {
      res.json(updatedPhotos)
  })
    .catch(next)
});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on localhost:${port}`);
});
