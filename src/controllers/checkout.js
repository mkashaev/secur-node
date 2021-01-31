const { checkout } = require("../assets/components/checkout");

module.exports.getAll = async (req, res) => {
  const { db } = global;
  const { cookies } = req;

  let balance = 0;

  const sqlQuery1 = `
    SELECT * FROM users
    WHERE token = '${cookies.token}'
  `;

  db.all(sqlQuery1, [], (err, rows) => {
    if (err || rows.length === 0) {
      res.send(401).redirect("/login");
    } else {
      balance = rows[0].money;
      const html = checkout(balance / 100);
      res.send(html);
    }
  });
};

module.exports.checkout = async (req, res) => {
  const { cookies } = req;

  const sqlQuery = `
    SELECT * FROM users
    WHERE token = '${cookies.token}'
  `;

  global.db.all(sqlQuery, [], (err, rows) => {
    const { db } = global;
    if (err || rows.length === 0) {
      res.status(501).redirect("/checkout");
    } else {
      if (+rows[0].money < 2099) {
        res.status(200).redirect("/utils/error");
      } else {
        const restMoney = +rows[0].money - 2099;
        const sqlQuery = `
          UPDATE users
          SET money = '${restMoney}'
          WHERE token = '${cookies.token}'
        `;

        db.run(sqlQuery, [], (err) => {
          if (err) {
            res.status(500).redirect("/checkout");
          } else {
            res.status(200).redirect("/utils/success");
          }
        });
      }
    }
  });
};
