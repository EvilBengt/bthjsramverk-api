const sqlite = require("sqlite3");

const db = {
    run: (callback) => {
        const connection = new sqlite.Database("./db/texts.sqlite");

        const result = callback(connection)

        connection.close();

        return result;
    }
}

module.exports = db;
