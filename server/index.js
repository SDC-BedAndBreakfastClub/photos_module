const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
