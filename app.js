"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const graphql_1 = require("graphql");
const index_1 = require("./routes/index");
const users_1 = require("./routes/users");
const schema_1 = require("./routes/schema");
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text({ type: 'application/graphql' }));
app.use('/', index_1.default);
app.use('/users', users_1.default);
app.post('/graphql', (req, res) => {
    // res.send(`Hello!\n`);
    graphql_1.graphql(schema_1.default, req.body)
        .then(result => res.send(JSON.stringify(result, null, 2)));
});
module.exports = app;
