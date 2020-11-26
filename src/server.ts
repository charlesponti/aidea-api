import * as dotenv from 'dotenv';
import {ApolloServer} from 'apollo-server';

// Load environment variables
dotenv.config();

import logger from './logger';
import typeDefs from './schema';
import resolvers from './resolvers';
import {sequelize} from './data';

const {PORT, APP_URL, NODE_ENV = 'development'} = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {origin: APP_URL},
});

if (require.main === module) {
  sequelize
    .authenticate()
    .then(() => {
      logger.info('✅ Connected to PostgreSQL 🎒');
    })
    .catch(e => {
      logger.info(`🛑 Unable to connect to PostgreSQL 🎒... \n ${e}`);
    });

  server.listen(PORT, () => {
    logger.info(
      `🚀 ${NODE_ENV.toUpperCase()} GraphQL Server running @ port ${PORT}`
    );
  });
}

export default server;
