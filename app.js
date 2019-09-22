const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors")
const morgan     = require("morgan");

const index = require("./routes/index");

const app = express();
const port = 1337;

if (process.env.NODE_ENV !== "test") {
    app.use(morgan("combined"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Logging incoming requests to the console
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

// Routers

app.use("/", index);

app.use(express.static("static/"));

// Error handlers
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        errors: [
            {
                status: err.status,
                title: err.message,
                detail: err.message
            }
        ]
    });
});

app.listen(port, () => console.log(`Listening on ${port}`))