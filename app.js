const express = require('express');
// const axios = require('axios');
// const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
// NASA FIRMS API endpoint
// const NASA_FIRMS_API = 'https://firms.modaps.eosdis.nasa.gov/data/active_fire';
const database = require('./database/db');
require('dotenv').config();

app = express();

const fireRoute = require('./routes/fireRoutes');
const socialRoute = require('./routes/socialRoute');
const sendRoute = require('./routes/send');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/fire', fireRoute);
app.use('/api/social', socialRoute);
app.use('/api/message', sendRoute);

const port = process.env.PORT; //|| 3000;

app.listen(port, () => {
    console.log(`Server running on ${process.env.BASE_URL}:${port}`);
});
