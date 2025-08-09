import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema'
import { resolvers } from './resolver';
import { connectDB } from './db';

const startServer = async () => {
    await connectDB();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        formatError: (err) => {
            return {
                message: err.message,
                code: err.extensions.code || "INTERNAL SERVER ERROR"
            };
        }
    });

    server.listen().then(({ url }) => {
        console.log(`Server ready at ${url}`)
    });
};

startServer();