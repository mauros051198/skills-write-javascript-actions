const request = require("request-promise");

const options = {
  method: "GET",
  url: "https://icanhazdadjoke.com/",
  headers:{
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action Github Skill course.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;
