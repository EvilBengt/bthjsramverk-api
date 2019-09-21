const express = require("express");
const router = express.Router();

router.get("/week/:id", (req, res) => {
    res.send("Week nr: " + req.params.id);
});

module.exports = router;
