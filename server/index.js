const express = require('express');
const morgan = require('morgan');
const Photo = require('./model/index');

const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/api/rooms/:listingId/images', (req, res) => {
  Photo.readAll(req.params.listingId)
    .then(photos => res.json(photos))
    // eslint-disable-next-line no-console
    .catch(e => console.error(e));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on localhost:${port}`);
});
