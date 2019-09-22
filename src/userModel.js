const connection = require("./db");
const bcrypt = require("bcryptjs");
const jwtModel = require("./jwtModel");

const userModel = {
    login: (email, password, callback) => {
        connection.run((db) => {
            db.get(`SELECT password FROM users WHERE email = $email`, {
                $email: email
            }, (err, row) => {
                if (row && bcrypt.compareSync(password, row.password)) {
                    callback(jwtModel.sign(email));
                } else {
                    callback(false);
                }
            });
        });
    },
    register: (email, password, callback) => {
        connection.run((db) => {
            db.run(`INSERT INTO users (email, password) VALUES ($email, $password)`, {
                $email: email,
                $password: bcrypt.hashSync(password, 5)
            }, (err) => {
                if (err) {
                    callback(false);
                } else {
                    callback(true);
                }
            });
        });
    }
};

module.exports = userModel;
