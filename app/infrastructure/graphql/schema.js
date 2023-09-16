const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./types');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // This function returns the context for your resolvers. 
        // You can extract user from request headers, etc. and add them to the context.
        // The context is shared by all resolvers in a particular query/mutation.
        return {
            // user: req.user, // Example: if you want to add user info to the context
        };
    },
    formatError: (error) => {
        // This function allows you to format your errors before sending them to the client.
        // Useful for logging, masking sensitive errors, etc.
        console.error(error); // Log the error to the server console (optional)
        return error;
    },
    playground: true, // Enables the Apollo Playground interface. Set to false in production.
    introspection: true, // Enables schema introspection. This includes the playground.
});

module.exports = server;
