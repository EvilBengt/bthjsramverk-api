const express = require("express");
const jwtModel = require("../src/jwtModel");
const reportsModel = require("../src/reportsModel");

const router = express.Router();

router.get("/weeks", (req, res) => {
    reportsModel.weeks((rows) => {
        res.json({
            data: {
                weeks: rows
            }
        });
    })
});

router.get("/week/:id", (req, res) => {
    reportsModel.get(req.params.id, (row) => {
        res.json({
            data: {
                week: row
            }
        });
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
    reportsModel.update(req.body.week, req.body.text, (success) => {
        if (success) {
            res.status(201).send();
        } else {
            res.status(500).send();
        }
    })
});

router.delete("/", jwtModel.test, (req, res) => {
    reportsModel.delete(req.body.week, (success) => {
        if (success) {
            res.status(204).send();
        } else {
            res.status(500).send();
        }
    })
});

module.exports = router;
