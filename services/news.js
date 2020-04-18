const axios = require("axios");
const keys = require("../config/keys");

exports.news = axios.create({
  baseURL: `http://newsapi.org/v2`,
  headers: {
    "X-Api-Key": keys.NEWS_API_KEY
  }
});
