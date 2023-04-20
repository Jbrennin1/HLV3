const express = require('express')
const next = require('next')
const AuthController = require('./db/controllers/AuthController')
const bodyParser = require('body-parser');
const session = require('express-session')
const dev = process.env.NODE_ENV !== "production"; //checks if production or dev mode
const PORT = 3000
const app = next({ dev })
const handle = app.getRequestHandler();
const { connectToDb } = require('./db/db')

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json())

    server.use(session({
      secret: 'mySecretKey',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 3600000}
    }))


    server.get('/logout', (req, res) => {
      req.session.destroy(err => {
        if (err) {
          console.log(err)
        } else {
          res.redirect('/')
        }
      })
    })

    server.get('/houses', (req, res) => {
        async function fetchData() {
          const db = await connectToDb();
          const houses = await db.collection('houses').find().toArray();
          res.send(houses)
        }
        fetchData();
    })

    server.get('/get-name', (req, res) => {
      const name = req.session.name;
      const highScore = req.session.highScore;

      if (!name) {
        res.json({ name: null });
        return;
      }

      res.json({ name: name, highScore: highScore});
    });

    server.post('/highScore', (req, res) => {
      const name = req.body.name
      const highScore = req.body.highScore
      req.session.highScore = highScore
      async function setHighScore() {
        const db = await connectToDb();
        await db.collection('users').updateOne({"name": name}, {"$set": {"highScore": highScore}})
        res.send("HighScore Updated")
      }
      setHighScore();
    })

    server.get('/leaderBoard', (req, res) => {
      async function getLeaderBoard() {
        const db = await connectToDb();
        results = await db.collection('users').find().sort({highScore: -1}).limit(5).toArray();
        const leaderBoard = results.map((user) => {
          return {name: user.name, highScore: user.highScore};
        });
        res.send(leaderBoard)
      }
      getLeaderBoard();
    })

    server.post('/register', AuthController.register)
    server.post('/login', AuthController.login)

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