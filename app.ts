import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import { graphql } from 'graphql';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import schema from './routes/schema';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text({ type: 'application/graphql' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/graphql', (req, res) => {
  // res.send(`Hello!\n`);
  graphql(schema, req.body)
    .then(result => res.send(JSON.stringify(result, null, 2)));
});

module.exports = app;
