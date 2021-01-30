// const express = require("express");
const sqlite3 = require("sqlite3");
// const Promise = require("bluebird");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const userRouter = require("./routers/user");
// const categoryRouter = require("./routers/category");
// const loginRouter = require("./routers/login");

// const app = express();

const db = new sqlite3.Database("./test", (err) => {
  if (err) {
    console.log({ err });
  } else {
    console.log("Connected!");
  }
});

global.db = db;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// app.use("/login", loginRouter);
// app.use("/api/users", userRouter);
// app.use("/api/categories", categoryRouter);

// module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
    <span class="tmp">Ребят, нашел на алиэкспресс выгоднее, оставлю ссылку</span>
    <form action="http://localhost:5050/" method="POST">
      <input class="tmp" type="submit" value="Выгодного предложения" />
    </form>
  `);
});

app.post("/posts", (req, res) => {
  const { body } = req;
  const { author, description } = body;

  const sqlQuery = `
    INSERT INTO posts (author, description)
    VALUES ('${author}', '${description}')
  `;

  db.run(sqlQuery);

  res.status(201).json({
    message: "Success!",
  });
});

app.get("/posts", (req, res) => {
  const sqlQuery = `
  SELECT * FROM posts
  `;
  db.all(sqlQuery, [], (err, row) => {
    console.log({ row });
    let comments = [];

    comments = row.map((elem) => `${elem.author}: ${elem.description}`);
    comments = comments.join("<br>");

    console.log({ comments });
    res.send(`
      <span>Все посты:</span>
      <div>
        ${comments}
      </div>
      <spna>Оставить свой пост</span>
      <form action="/posts" method="POST">
        <input name="author" />
        <input name="description" />
        <input class="tmp" type="submit" value="Выгодного предложения" />
      </form>
    `);
  });
});

// app.post("localhost:5050", (req, res) => {
//   console.log(`Message received: ${req.body.message}`);
//   res.send(`Message received: ${req.body.message}`);
// });

module.exports = app;
