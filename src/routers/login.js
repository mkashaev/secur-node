const express = require("express");
const controller = require("../controllers/login");
const router = express.Router();

router.get("/", controller.getPage);
router.post("/", controller.login);

module.exports = router;
