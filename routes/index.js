const express = require("express");
const router = express.Router();
const path = require("path");

const reports = require("./reports");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../static/me.html"));
});

router.use("/reports/", reports);

module.exports = router;
