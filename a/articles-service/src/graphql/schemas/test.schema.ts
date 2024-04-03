import { gql } from 'graphql-tag';

export const TestSchema = gql`
  type Query {
    test: Int
  }

  # ******************** Mutations ********************
  type Mutation {
    helloMutationFromArticlesService: String
  }
`;
