const bcrypt = require('bcryptjs');
const saltRounds = 10;
const myPlaintextPassword = 'longandhardP4$$w0rD';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // spara lösenord i databasen.
});

const bcrypt = require('bcryptjs');
const myPlaintextPassword = 'longandhardP4$$w0rD';
const hash = 'superlonghashedpasswordfetchedfromthedatabase';

bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res innehåller nu true eller false beroende på om det är rätt lösenord.
});
