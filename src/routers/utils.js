const express = require("express");
const controller = require("../controllers/utils");
const router = express.Router();

router.get("/success", controller.success);
router.get("/error", controller.error);

module.exports = router;
