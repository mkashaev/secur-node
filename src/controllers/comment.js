const { page } = require("../assets/components/page");
const { comment } = require("../assets/components/comment");

module.exports.getAll = (req, res) => {
  console.log(" Error happend here!");
  const { db } = global;
  const { cookies } = req;

  let balance = 0;

  const sqlQuery1 = `
    SELECT * FROM users
    WHERE token = '${cookies.token}'
  `;

  const sqlQuery2 = `
    SELECT * FROM comments
    ORDER BY timestamp DESC
  `;

  db.all(sqlQuery1, [], (err, rows) => {
    if (err || rows.length === 0) {
      res.status(401).redirect("/login");
    } else {
      balance = rows[0].money;

      db.all(sqlQuery2, [], (err, rows) => {
        if (err) {
          console.log({ err });
        }

        const htmlComments = rows.map((elem) => {
          return comment(elem.author, elem.desc);
        });

        const inner = htmlComments.join("");
        const respHtml = page(inner, balance / 100);

        res.status(200).send(respHtml);
      });
    }
  });
};

module.exports.create = async (req, res) => {
  const { body } = req;

  const sqlQuery = `
    INSERT INTO comments (author, desc)
    VALUES ('${"anonymous"}', '${body.comment}')
  `;

  global.db.run(sqlQuery, [], (err) => {
    res.redirect("/comments");
  });
};
