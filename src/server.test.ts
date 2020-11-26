import {ApolloServer} from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const {createTestClient} = require('apollo-server-testing');

it('fetches single launch', async done => {
  // create a test server to test against, using our production typeDefs,
  // resolvers, and dataSources.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({user: {id: 1, email: 'a@a.a'}}),
  });

  // use the test server to create a query function
  const {query} = createTestClient(server);

  // run query against the server and snapshot the output
  const res = await query({query: '{ ideas { id title} }', variables: {id: 1}});
  expect(res.data).toMatchSnapshot();
  done();
});
