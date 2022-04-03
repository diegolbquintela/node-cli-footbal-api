const axios = require('axios').default;
const writeLeague = require('./writeLeague');
const league = process.argv[2];
require('dotenv').config();

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
  params: { country: `${league}` },
  headers: {
    'X-RapidAPI-Host': process.env.API_HOST,
    'X-RapidAPI-Key': process.env.API_KEY,
  },
};

axios
  .request(options)
  .then(function (response) {
    const responseData = response.data.response[0].league.name;

    writeLeague(`League: ${responseData}`);
    console.log(responseData);
  })
  .catch(function (error) {
    console.error(error);
  });
