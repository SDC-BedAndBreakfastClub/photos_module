require('dotenv').config();
const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const db = require('./db/index.js');
const redis = require('./db/redis.js');
const app = express();
const port = process.env.PORT || 3002;


app.use(morgan('dev'));
app.use(express.json());
app.use(compression());
app.use(cors());

// app.use('/rooms/:listingId', express.static('public'));

app.get('/loaderio-48a575d1a9c2a9bcf1fe1d7afe2f5886/',(req, res) => {
 res.sendFile(path.join(__dirname,'./loaderredis.txt'));
});


app.use('/rooms/:listingId', express.static(path.resolve(__dirname, '../public')));

//app.get('/loaderio-07d2b6e8aaaa095d6d69a34d556458d3/',(req, res) => {
// res.sendFile(path.join(__dirname, '../loader.txt'));
//});

app.get('/rooms/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});


app.get('/api/rooms/:listingId/images', (req, res) => {
  // res.set('Cache-Control', 'no-cache');
  const photos_id = req.params.listingId;
  redis.exists(photos_id, (err, reply) => {
    if (reply) {
console.log('cached');
      redis.get(photos_id, (err, json) => {
        if (err) {
          res.send(err);
        } else {
          res.send(json);
        }
      });
    } else {
console.log('cached not found');
  db.photos(photos_id, (err, results) => {
    if (err) {
      throw err
    } else {
      redis.set(photos_id, JSON.stringify(results));
      res.status(200).send(JSON.stringify(results));
    }
  })
    }
  })
});



app.post('/api/rooms/:listingId/images', (req, res) => {
  const { body } = req;
  body.listing_id = req.params.listingId;
  console.log(body);
  db.addPhotos(body, (err, data) => {
    if (err) {
      throw err
    } else {
      res.status(201).send(data);
    }
  });
});

app.put('/api/rooms/:listingId/images/:imageId', (req, res) => {
  const { body } = req;
  db.updatePhotos(body, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(209).send(data)
    }
  })
});

app.delete('/api/rooms/:listingId/images/:imageId', (req, res) => {
  const { body } = req;
  db.deletePhotos(body.id, (err) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.status(204).send('image removed')
    }
  })
});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on localhost:${port}`);
});
