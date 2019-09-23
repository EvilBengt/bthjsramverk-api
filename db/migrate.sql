BEGIN TRANSACTION;
DROP TABLE IF EXISTS "users";
CREATE TABLE IF NOT EXISTS "users" (
	"name"	VARCHAR(255) NOT NULL UNIQUE,
	"email"	VARCHAR(255) NOT NULL UNIQUE,
	"password"	VARCHAR(60) NOT NULL,
	"birthdate"	DATE NOT NULL,
	PRIMARY KEY("name")
);
DROP TABLE IF EXISTS "reports";
CREATE TABLE IF NOT EXISTS "reports" (
	"week"	INTEGER,
	"text"	TEXT,
	PRIMARY KEY("week")
);
INSERT INTO "users" ("name","email","password","birthdate") VALUES ('test','test@test.se','$2a$08$.kxdsTPomiuIvWuWOf4NsOKqf/Pe2q0SDy6NICBdbzsUYSYkD1Hrm','');
INSERT INTO "reports" ("week","text") VALUES (1,'[Länk till GitHub-repo](https://github.com/EvilBengt/bthjsramverk-me)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
'),
 (2,'[Länk till GitHub-repo](https://github.com/EvilBengt/bthjsramverk-me)

Jag ville få formuläret att bli lite lagom intressant samtidigt som det smälter in i sidan och passar till resten av designen. Självklart har jag till exempel fält på var sin "rad" osv.

Nästan den enda funktionen jag gillar hos Chromes datumväljare är att man kan klicka på den och börja skriva direkt. Man behöver alltså inte bläddra igenom en massa menyer och klicka hit och dit, om man inte vill.

Eftersom man ändå skriver allt annat i formuläret med tangentbordet tycker jag att någon slags grafisk väljare kan känns lite klumpig. Tanken är att göra det så enkelt och tydligt som möjligt. Därför har jag endast ett enkel text-fält för datuminmatning.

Självklart får dock användaren så mycket hjälp på vägen som möjligt. Bindestreck för att separera år-månad och månad-dag fylls i automatiskt, och formatet valideras vid varje inmatning, även copy-paste.
'),
 (3,'[Länk till GitHub-repo](https://github.com/EvilBengt/bthjsramverk-me)

Detta kurmomentet var bra mycket större än jag tänkt mig, och jag räknade ändå med att det skulle vara rätt så stort. Jag har nog lärt mig en hel del dock. För att nämna något, vet jag nu hur enkelt det är att skaffa ett domännamn, något som jag tänkt göra till mitt egna projekt senare.

Jag har refreshat kunskaperna om Express webbserver och SQLite, och även blivit påmind om hur mycket längre tid UI tar än man tror. Större delen av denna veckan (det känns så i alla fall) har jag suttit och brottats med React. Trots slagsmål mellan mig och React finns det en del saker som jag verkligen gillar, självklart blandade med saker jag hellre hade sluppit.
');
COMMIT;
