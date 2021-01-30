const querystring = require("querystring");

module.exports.getAll = async (req, res) => {
  const { url, query } = req;

  console.log({ query });

  const sqlQuery = `
    SELECT * FROM categories
    WHERE name='${query.name}'
  `;

  global.db.all(sqlQuery, [], (err, rows) => {
    if (err) {
      console.log({ err });
      res.status(501).json({
        message: "Error",
      });
    }

    res.status(200).json({
      data: rows,
    });
  });
};

module.exports.create = async (req, res) => {
  const {
    body: { name, description },
  } = req;

  const query = `
    INSERT INTO categories (name, description)
    VALUES ('${name}', '${description}')
  `;

  global.db.run(query, [], (err) => {
    if (err) {
      console.log({ err });
      res.status(501).json({
        message: "Error!",
      });
    }

    res.status(201).json({
      message: "Created!",
    });
  });
};
