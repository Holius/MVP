const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
require("dotenv").config();

var pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

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
  pool.query(
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
    console.log(req.baseUrl, "stuff");
    const date = req.query.date;
    pool.query(`SELECT * FROM entries WHERE date="${date}" `, async function(
      error,
      results
    ) {
      if (error || results.length === 0) {
        res.status(500).send();
      } else {
        res.status(200).send(results);
      }
    });
  })
  .post((req, res) => {
    function convertString(string) {
      let result = "";
      for (let i = 0; i < string.length; i++) {
        if (string[i] === '"') {
          result += "'";
        } else {
          result += string[i];
        }
      }
      return result;
    }
    const date = req.body.date;
    const url = req.body.url;
    const explanation = convertString(req.body.explanation);
    const title = convertString(req.body.title);
    const type = req.body.type;
    console.log(explanation);
    pool.query(
      `INSERT INTO entries (date, url, explanation, title, media_type) VALUES ("${date}", "${url}", "${explanation}", "${title}", "${type}")`,
      async function(error, results) {
        if (error) {
          console.log(error);
          res.status(500).send();
        } else {
          res.status(201).send();
        }
      }
    );
  });

app.post("/user/login", (req, res) => {
  pool.query(
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
    pool.query(
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
      pool.query(
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

app
  .route("/favorite")
  .get((req, res) => {
    const name = req.session.username;
    pool.query(
      `SELECT title, entries_date FROM favorites WHERE users_username="${name}"`,
      async function(error, results) {
        if (error) {
          res.status(500).send();
        } else {
          res.status(201).send(results);
        }
      }
    );
  })
  .post(async (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const name = req.session.username;
    console.log(title, date, name);
    if (req.session.id !== 1234) {
      res.status(404).send();
    } else {
      pool.query(
        `INSERT INTO favorites (title, entries_date, users_username) VALUES ("${title}", "${date}", "${name}")`,
        async function(error, results) {
          if (error) {
            res.status(500).send();
          } else {
            res.status(201).send();
          }
        }
      );
    }
  });
app.listen(port, () => console.log("port " + port + " is on"));
