const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const Photo = require('./model/index');

const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());

app.get('/api/rooms/:listingId/images', (req, res) => {
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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on localhost:${port}`);
});
