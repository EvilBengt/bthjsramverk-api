const express = require("express");
const jwtModel = require("../src/jwtModel");
const reportsModel = require("../src/reportsModel");

const router = express.Router();

router.get("/weeks", (req, res) => {
    reportsModel.weeks((rows) => {
        res.json(rows);
    })
})

router.get("/week/:id", (req, res) => {
    reportsModel.get(req.params.id, (row) => {
        res.json(row);
    })
});

router.post("/", jwtModel.test, (req, res) => {
    reportsModel.create(req.body.week, req.body.text, (success) => {
        if (success) {
            res.status(201).send();
        } else {
            res.status(500).send();
        }
    });
});

router.put("/", jwtModel.test, (req, res) => {
    reportsModel.update(week, text, (success) => {
        if (success) {
            res.status(201).send();
        } else {
            res.status(500).send();
        }
    })
});

module.exports = router;
