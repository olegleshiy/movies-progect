const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dg = require('debug');
const debugSrv = dg('server:main');
const { NotFoundError } = require('./helpers/errors');
const { getDbName, getDbUrl, getDbPort, getPort } = require('./helpers/env');
require('dotenv').config();

// Routers
const { movies } = require('./routers');

const app = express();
const debug = dg('server:init');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '60kb', }));

//Routes
app.use('/api/movies', movies);


if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        const body
            = req.method === 'GET'
            ? 'Body not supported for GET'
            : JSON.stringify(req.body, null, 2);

        debug(`${req.method}\n${body}`);
        next();
    });
}

app.use('*', (req, res, next) => {
    const error = new NotFoundError(
        `Can not find right route for method ${req.method} and path ${req.originalUrl}`,
        404,
    );
    next(error);
});

if (process.env.NODE_ENV !== 'test') {
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorMessage = `${name}: ${message}`;

        debug(`Error: ${errorMessage}`);

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message });
    });
}

const PORT = getPort();
const DB_NAME = getDbName();
const DB_URL = getDbUrl();
const DB_PORT = getDbPort();

//Options mongoose connections
const mongooseOptions = {
    promiseLibrary:     global.Promise,
    poolSize:           10,
    keepAlive:          30000,
    connectTimeoutMS:   5000,
    useNewUrlParser:    true,
    useFindAndModify:   false,
    useCreateIndex:     true,
    useUnifiedTopology: true,
};

//Start server and connect DB
async function start() {
    try {
        try {
            await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`, mongooseOptions);
            debug(`DB '${DB_NAME}' connected`);
        } catch (err) {
            debug(`DB ${DB_NAME} connectionError: ${message}`);
        }

        app.listen(PORT, () => {
            debugSrv(`Server API is up on port: ${PORT}`);
        });
    } catch (e) {
        debug(e);
    }
}
start();
