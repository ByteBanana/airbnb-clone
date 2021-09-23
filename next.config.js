require('dotenv').config();

module.exports = {
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
};
