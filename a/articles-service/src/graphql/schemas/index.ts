import { mergeTypeDefs } from '@graphql-tools/merge';
import { helloArticlesSchema } from './hello.schema';
import { TestSchema } from './test.schema';

export const typeDefs = mergeTypeDefs([helloArticlesSchema, TestSchema]);
