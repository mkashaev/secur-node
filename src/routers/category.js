const express = require("express");
const controller = require("../controllers/category");
const { route } = require("./user");
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.create);

module.exports = router;
