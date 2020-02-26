const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "apod"
});

connection.connect();

app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["nvalsdjflkasdjfiow"]
  })
);

app.post("/user/signup", async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10);
  const username = req.body.name;
  connection.query(
    `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`,
    function(error, results) {
      if (error) {
        res.status(500).send();
      } else {
        console.log("user signed up");
        req.session.id = 1234;
        req.session.username = username;
        res.status(201).send();
      }
    }
  );
});

app
  .route("/apod")
  .get((req, res) => {
    const date = req.query.date;
    connection.query(
      `SELECT * FROM entries WHERE date="${date}" `,
      async function(error, results) {
        if (error || results.length === 0) {
          res.status(500).send();
        } else {
          res.status(200).send(results);
        }
      }
    );
  })
  .post((req, res) => {
    const date = req.body.date;
    const url = req.body.url;
    const explanation = req.body.explanation;
    const title = req.body.title;
    const type = req.body.type;
    connection.query(
      `INSERT INTO entries (date, url, explanation, title, media_type) VALUES ("${date}", "${url}", "${explanation}", "${title}", "${type}")`,
      async function(error, results) {
        if (error) {
          res.status(500).send();
        } else {
          res.status(201).send();
        }
      }
    );
  });

app.post("/user/login", (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE username='${req.body.name}'`,
    async function(error, results) {
      if (results[0] !== undefined) {
        if (await bcrypt.compare(req.body.password, results[0].password)) {
          req.session.id = 1234;
          req.session.username = req.body.name;
          res.status(201).send();
        }
      } else {
        res.status(500).send();
      }
    }
  );
});

app.get("/user/logout", (req, res) => {
  req.session = null;
  res.status(201).send();
});

app.get("/apples", (req, res) => {
  console.log(req.session);
  if (req.session.id === 1234) {
    res.status(200).send("appppppppplllllllless");
  } else {
    res.status(404).send("noooooooooooooppppppppppppppeeee");
  }
});

app
  .route("/comment")
  .get((req, res) => {
    const date = req.query.date;
    connection.query(
      `SELECT * FROM comments WHERE entries_date="${date}" ORDER BY created_on DESC`,
      async function(error, results) {
        if (error) {
          console.log(error);
          res.status(500).send();
        } else {
          res.status(201).send(results);
        }
      }
    );
  })
  .post(async (req, res) => {
    const comment = req.body.comment;
    const date = req.body.date;
    const username = req.session.username;
    console.log(date, date.length);
    if (req.session.id !== 1234) {
      res.status(404).send();
    } else {
      connection.query(
        `INSERT INTO comments (comment, entries_date, users_username) VALUES ("${comment}", "${date}", "${username}")`,
        async function(error, results) {
          if (error) {
            console.log(error);
            res.status(500).send();
          } else {
            res.status(201).send();
          }
        }
      );
    }
  });
app.listen(port, () => console.log("port " + port + " is on"));
