const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./test", (err) => {
  if (err) {
    console.log({ err });
  } else {
    console.log("Connected!");
  }
});

const users = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT,
    money NUMBER
  )
`;

const insertUsers = `
  INSERT INTO users (login, password, token, money)
  VALUES 
    ('ivan', '123', 'ivan_abcd', '100'),
    ('alex', '321', 'alex_abcd', '100000')

`;

const comments = `
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    desc TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;

db.run(users, [], (err) => {
  if (err) {
    console.log({ err });
  } else {
    db.run(insertUsers, [], (err) => {
      if (err) {
        console.log({ err });
      }
    });
  }
});

db.run(comments, [], (err) => {
  if (err) {
    console.log({ err });
  }
});
