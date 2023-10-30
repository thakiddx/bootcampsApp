const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('./config/db.js');
const path = require('path');
const PORT = 3000;
const app = express();
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE //
// START ROUTES //
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
// END ROUTES //
app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});