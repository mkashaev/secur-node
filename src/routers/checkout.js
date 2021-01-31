const express = require("express");
const controller = require("../controllers/checkout");
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.checkout);

module.exports = router;
