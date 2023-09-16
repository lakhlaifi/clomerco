// src/graphql/types/index.js

const { gql } = require('apollo-server-express');
const categoryTypeDefs = require('./types/category.graphql');  // Assuming you used the .graphql extension

const typeDefs = gql`
    ${categoryTypeDefs}
    # ... other type definitions if any
`;

module.exports = typeDefs;
