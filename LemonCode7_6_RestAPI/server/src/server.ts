const express = require('express');
const path = require('path'),
   cookieParser = require('cookie-parser'),
   bodyParser = require('body-parser'),
   cors = require('cors');

const expressjwt = require('express-jwt');
var jwt = require('jsonwebtoken');

const users = require('./api/users');
const cars = require('./api/cars');

import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const app = express();
const secretWord = 'todo_var_enviroment';

// setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
const jwtCheck = expressjwt({
   secret: secretWord,
});

app.use('/api/users', jwtCheck, users);
app.use('/api/cars', jwtCheck, cars);

const graphqlServer = new ApolloServer({
   typeDefs,
   resolvers,
   context: ({ req }) => {
      // get the user token from the headers
      const token = req.headers.authorization || '';

      const validToken = jwt.verify(token.replace('Bearer ',''), secretWord);
      console.log(validToken);

      return validToken;
   }
});
graphqlServer.applyMiddleware({ app });

app.set('port', process.env.PORT || 3050);
app.listen(app.get('port'), () => {
   console.log(`Server running http://localhost:${app.get('port')}`);
   console.log(
      `GraphQL server ready at http://localhost:${app.get('port')}${graphqlServer.graphqlPath}`
   )
});

console.log('Listening on port: ' + app.get('port'));

//module.exports = app;
