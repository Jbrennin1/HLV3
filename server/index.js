const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== "production"; //checks if production or dev mode
const PORT = 3000
const app = next({ dev })
const handle = app.getRequestHandler();
const { connectToDb } = require('./db/db')

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/test', (req, res) => {
      res.send('test')
    })

    server.get('/houses', (req, res) => {
        async function fetchData() {
          const db = await connectToDb();
          const houses = await db.collection('houses').find().toArray();
          res.send(houses)
        }
        fetchData();
    })

    server.get("*", (req, res) => {       //used for next.js to handle out routes
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`Ready on port ${PORT}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1);
  })