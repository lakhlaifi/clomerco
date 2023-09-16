// src/graphql/resolvers/index.js

const categoryResolvers = require('./resolvers/categoryResolvers');

const resolvers = {
    ...categoryResolvers,
    // ... other resolvers if any
};

module.exports = resolvers;
