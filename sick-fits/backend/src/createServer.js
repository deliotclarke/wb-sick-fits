const { GraphQLServer } = require('graphql-yoga');

const Mutaion = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const db = require('./db');

// create graphql yoga server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation: Mutation,
      Query: Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;