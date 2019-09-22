const express = require("express");
const router = express.Router();
const path = require("path");

const reports = require("./reports");
const users = require("./users");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../static/me.html"));
});

router.use("/reports/", reports);

router.use("/", users)

module.exports = router;
