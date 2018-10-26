const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on localhost:${port}`);
});
