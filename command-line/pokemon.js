const { Client } = require('pg')

const config = {
  host: 'localhost',
  database: 'lecture',
  user: 'development', //labber
  password: 'development', //labber
  port: 5432,//This is the default port for psql, everyone will have the same port
}

const client = new Client(config)
client.connect(() => {
  console.log("Connected via callbacks")
})
// client.connect().then(()=> console.log("Connected!"))

const term = process.argv[2]
const id = process.argv[3]
const name = process.argv[4]
const type = process.argv[5]
//Browse
//Read
//Edit
//Add
//Delete
if (term === "browse") {
  client.query('SELECT * FROM pokemon;', (err, res) => {
    if (err) {
      console.log(`Uh ohhhh ${err}`)
    } else {
      console.log(res.rows)
    }
    client.end()
  })
} else if (term === "read") {
  client.query('SELECT * FROM pokemon WHERE id = $1;', [id], (err, res) => {
    if (err) {
      console.log(`Uh ohhhh ${err}`)
    } else {
      console.log(res.rows[0])
    }
    client.end()
  })
} else if (term === "edit") {
  client.query('UPDATE pokemon SET name = $1 WHERE id = $2 RETURNING *;', [name, id], (err, res) => {
    if (err) {
      console.log(`Uh ohhhh ${err}`)
    } else {
      console.log(res.rows[0])
    }
    client.end()
  })
} else if (term === "add") {
  client.query('INSERT INTO pokemon (name, type) VALUES ($1, $2) RETURNING *;', [name, type], (err, res) => {
    if (err) {
      console.log(`Uh ohhhh ${err}`)
    } else {
      console.log(res.rows[0])
    }
    client.end()
  })
} else if (term === "delete") {
  client.query('DELETE FROM pokemon WHERE id = $1;', [id], (err, res) => {
    if (err) {
      console.log(`Uh ohhhh ${err}`)
    } else {
      console.log("Successfully deleted!")
    }
    client.end()
  })
} else {
  client.end()
}
