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
    password TEXT NOT NULL
  )
`;

const categories = `
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
  )
`;

const posts = `
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    description TEXT
  )
`;

db.run(users, [], (err) => {
  if (err) {
    console.log({ err });
  }
});
db.run(categories, [], (err) => {
  if (err) {
    console.log({ err });
  }
});

db.run(posts, [], (err) => {
  if (err) {
    console.log({ err });
  }
});
