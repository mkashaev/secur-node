const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const loginRouter = require("./routers/login");
const commentRouter = require("./routers/comment");
const checkoutRouter = require("./routers/checkout");
const utilsRouter = require("./routers/utils");

const app = express();

const db = new sqlite3.Database("./test", (err) => {
  if (err) {
    console.log({ err });
  } else {
    console.log("Connected!");
  }
});

global.db = db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser("secret kye"));
app.use(cors());

app.use("/", loginRouter);
app.use("/login", loginRouter);
app.use("/comments", commentRouter);
app.use("/checkout", checkoutRouter);
app.use("/utils", utilsRouter);

module.exports = app;

/* 4
Guys, a found cheaper and better, good luck
<form action="/checkout" method="post">
  <input hidden name="city" value="423" />
  <input hidden name="street" value="Universitetskaya" />
  <input hidden name="building" value="1" />
  <input hidden name="appartment" value="1" />
  <button type="submit" class="btn btn-link">http://aliexpress.com/best/cheap/iron</button>
</form>
*/

/* 3
<form action="/checkout" method="post">
  <input hidden name="city" value="423" />
  <input hidden name="street" value="Universitetskaya" />
  <input hidden name="building" value="1" />
  <input hidden name="appartment" value="1" />
  <button type="submit" class="btn btn-link">http://aliexpress.com/best/cheap/iron</button>
</form>
*/

/* 2
<form action="/checkout" method="post">
  <input name="city" value="423" />
  <input hidden name="street" value="Universitetskaya" />
  <input hidden name="building" value="1" />
  <input hidden name="appartment" value="1" />
  <button type="submit">http://aliexpress.com/best/cheap/iron</button>
</form>
*/

/* 1
<form action="/checkout" method="post">
  <input name="city" value="423" />
  <input name="street" value="Universitetskaya" />
  <input name="building" value="1" />
  <input name="appartment" value="1" />
  <button type="submit">http://aliexpress.com/best/cheap/iron</button>
</form>
*/
