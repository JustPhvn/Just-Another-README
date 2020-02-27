const axios = require("axios");

const api = {
  getUser(username) {
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      )
      .then(({ data }) => console.log(data.repos_url));
  }
};

module.exports = api;
