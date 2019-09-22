const connection = require("./db");

const reportsModel = {
    weeks: (callback) => {
        connection.run((db) => {
            db.all(`SELECT week FROM reports`, (err, rows) => {
                callback(rows);
            });
        })
    },
    get: (week, callback) => {
        connection.run((db) => {
            db.get(`SELECT week, text FROM reports WHERE week = $week`, {
                $week: week
            }, (err, row) => {
                callback(row);
            });
        });
    },
    create: (week, text, callback) => {
        connection.run((db) => {
            db.run(`INSERT INTO reports (week, text) VALUES ($week, $text)`, {
                $week: week,
                $text: text
            }, (err) => {
                if (err) {
                    callback(false);
                } else {
                    callback(true);
                }
            });
        })
    },
    update: (week, text, callback) => {
        connection.run((db) => {
            db.run(`UPDATE reports SET text = $text WHERE week = $week`, {
                $text: text,
                $week: week
            }, (err) => {
                if (err) {
                    callback(false);
                } else {
                    callback(true);
                }
            });
        })
    },
    delete: (week, callback) => {
        connection.run((db) => {
            db.run(`DELETE FROM reports WHERE week = $week LIMIT 1`, {
                $week: week
            }, (err) => {
                if (err) {
                    callback(false);
                } else {
                    callback(true);
                }
            });
        })
    }
};

module.exports = reportsModel;
