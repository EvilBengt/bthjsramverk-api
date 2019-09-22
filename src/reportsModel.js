const sqlite = require("sqlite3");

const db = new sqlite.Database("../db/texts.sqlite");

const reportsModel = {
    get: (week) => {
        return db.run(`SELECT week, text FROM reports WHERE week = $?`, {
            $week: week
        });
    },
    create: (week) => {
        db.run(`INSERT INTO reports (week) VALUES ($week)`, {
            $week: week
        });
    },
    update: (week, text) => {
        db.run(`UPDATE reports SET text = $text WHERE week = $week`, {
            $text: text,
            $week: week
        });
    },
    delete: (week) => {
        db.run(`DELETE FROM reports WHERE week = $week LIMIT 1`, {
            $week: week
        });
    }
};

module.exports = reportsModel;
