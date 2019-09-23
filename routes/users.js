const express = require("express");
const userModel = require("../src/userModel");

const router = express.Router();

router.post("/login", (req, res) => {
    userModel.login(req.body.login, req.body.password, (token) => {
        if (token) {
            res.json({
                data: {
                    token: token
                }
            });
        } else {
            res.status(401).send();
        }
    })
});

router.post("/register", (req, res) => {
    userModel.register(req.body.name, req.body.email, req.body.password, req.body.birthdate, (success) => {
        if (success) {
            res.status(201).send();
        } else {
            res.status(500).send();
        }
    });
});

module.exports = router;
