const client = require('./connection');

const getPokemon = () => {
  return client.query('SELECT * FROM pokemon;')
    .then((response) => {
      return response.rows;
    });
};

module.exports = {
  getPokemon
};
