import { buildSubgraphSchema } from '@apollo/subgraph';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServer } from 'apollo-server-cloud-functions';
import { resolvers, typeDefs } from '../../graphql';
import { connectToDatabase } from '@/config';

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: resolvers as GraphQLResolverMap<unknown>,
  }),
  introspection: true,
  csrfPrevention: true,
  cache: new InMemoryLRUCache(),
  context: ({ req, res }: { req: Request; res: Response }) => ({
    headers: req.headers,
    req,
    res,
  }),
});
connectToDatabase({ username: 'zorurunn', password: 'test' });

export const config = { api: { bodyParser: false, externalResolver: true } };

const graphqlHandler = server.createHandler();
export default graphqlHandler;
