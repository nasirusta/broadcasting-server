const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.apiIndex);
router.post("/stream", indexController.stream);

module.exports = router;
