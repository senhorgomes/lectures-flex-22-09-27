require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const pokemonQueries = require("./database/pokemon-queries")


const port = process.env.PORT || 8000;
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  //Browse - Select all entries in table of database
  pokemonQueries.getPokemon()
  .then((databaseResponse)=>{
    res.json(databaseResponse)
  })
});
// app.get('/:id', (req, res) => {
//   //Read - Select all entries in table of database that equal to the id
//   client.query(
//     'SELECT * FROM pokemon WHERE id = $1;',
//     [req.params.id]
//   )
//   .then((databaseResponse)=>{
//     res.json(databaseResponse.rows[0])
//   })
// });
// app.get('/delete/:id', (req, res) => {
//   //Read - Select all entries in table of database that equal to the id
//   client.query(
//     'DELETE FROM pokemon WHERE id = $1;',
//     [req.params.id]
//   )
//   .then((databaseResponse)=>{
//     //Send a response to the client
//     res.json("Row deleted")
//   })
// });

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});
