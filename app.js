const express = require('express');
const axios = require('axios');
const router = express.Router();

// NASA FIRMS API endpoint
const NASA_FIRMS_API = 'https://firms.modaps.eosdis.nasa.gov/data/active_fire';

