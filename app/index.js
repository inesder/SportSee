const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
console.log('Initializing server...');

app.use(cors());
console.log('Middleware CORS initialized.');

const port = process.env.PORT || 3000;

app.use(router);
console.log('Router initialized.');

app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
