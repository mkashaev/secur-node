const { success } = require("../assets/components/sucess");
const { error } = require("../assets/components/error");

module.exports.success = (req, res) => {
  res.status(200).send(success());
};

module.exports.error = (req, res) => {
  res.status(402).send(error());
};
