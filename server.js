const express = require('express');
const server = require('./app/infrastructure/graphql/schema');

const app = express();

// Apply the Apollo GraphQL middleware to our Express app
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
