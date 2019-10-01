const sqlite3 = require('sqlite3').verbose();

const dbAccess = {
    get: () => {
        if (process.env.NODE_ENV === 'test') {
            return new sqlite3.Database('./db/test.sqlite');
        }

        return new sqlite3.Database('./db/texts.sqlite');
    }
};

module.exports = dbAccess;
