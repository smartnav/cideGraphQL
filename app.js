'use strict';
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./app/config/database').db;
const { ApolloServer, gql } = require('apollo-server-express');

var app = express();
const typeDefs = require('./graphql/typeDefs');
// const typeDefs = gql`
  
// type Query {
//   hello1: String
// }

// schema {
//   query: Query
// }
// `;
const resolvers = require('./graphql/resolvers');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  process.env.URL = req.protocol + '://' + req.headers.host;
  console.log(process.env.URL)
  next();
})



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
