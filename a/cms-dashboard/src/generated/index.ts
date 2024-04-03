// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  helloMutationFromArticlesService?: Maybe<Scalars['String']['output']>;
  helloMutationFromAssessmentService?: Maybe<Scalars['String']['output']>;
  helloMutationFromChallengeService?: Maybe<Scalars['String']['output']>;
  helloMutationFromCommentsService?: Maybe<Scalars['String']['output']>;
  helloMutationFromCoursesService?: Maybe<Scalars['String']['output']>;
  helloMutationFromDocumentsService?: Maybe<Scalars['String']['output']>;
  helloMutationFromEmployeeDetailsService?: Maybe<Scalars['String']['output']>;
  helloMutationFromLeaderboardService?: Maybe<Scalars['String']['output']>;
  helloMutationFromLeavingService?: Maybe<Scalars['String']['output']>;
  helloMutationFromPayrollService?: Maybe<Scalars['String']['output']>;
  helloMutationFromProfileService?: Maybe<Scalars['String']['output']>;
  helloMutationFromReactionsService?: Maybe<Scalars['String']['output']>;
  helloMutationFromRecruitingService?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  exampleQueryFromProfileService?: Maybe<Scalars['String']['output']>;
  helloQueryFromArticlesService?: Maybe<Scalars['String']['output']>;
  helloQueryFromAssessmentService?: Maybe<Scalars['String']['output']>;
  helloQueryFromChallengeService?: Maybe<Scalars['String']['output']>;
  helloQueryFromCommentsService?: Maybe<Scalars['String']['output']>;
  helloQueryFromCoursesService?: Maybe<Scalars['String']['output']>;
  helloQueryFromDocumentsService?: Maybe<Scalars['String']['output']>;
  helloQueryFromEmployeeDetailsService?: Maybe<Scalars['String']['output']>;
  helloQueryFromLeaderboardService?: Maybe<Scalars['String']['output']>;
  helloQueryFromLeavingService?: Maybe<Scalars['String']['output']>;
  helloQueryFromPayrollService?: Maybe<Scalars['String']['output']>;
  helloQueryFromProfileService?: Maybe<Scalars['String']['output']>;
  helloQueryFromReactionsService?: Maybe<Scalars['String']['output']>;
  helloQueryFromRecruitingService?: Maybe<Scalars['String']['output']>;
};

export type HelloMutationFromArticlesServiceMutationVariables = Exact<{ [key: string]: never; }>;


export type HelloMutationFromArticlesServiceMutation = { __typename?: 'Mutation', helloMutationFromArticlesService?: string | null };

export type HelloQueryFromArticlesServiceQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQueryFromArticlesServiceQuery = { __typename?: 'Query', helloQueryFromArticlesService?: string | null };

export type HelloMutationFromCommentsServiceMutationVariables = Exact<{ [key: string]: never; }>;


export type HelloMutationFromCommentsServiceMutation = { __typename?: 'Mutation', helloMutationFromCommentsService?: string | null };

export type HelloQueryFromCommentsServiceQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQueryFromCommentsServiceQuery = { __typename?: 'Query', helloQueryFromCommentsService?: string | null };


export const HelloMutationFromArticlesServiceDocument = gql`
    mutation HelloMutationFromArticlesService {
  helloMutationFromArticlesService
}
    `;
export type HelloMutationFromArticlesServiceMutationFn = Apollo.MutationFunction<HelloMutationFromArticlesServiceMutation, HelloMutationFromArticlesServiceMutationVariables>;
export type HelloMutationFromArticlesServiceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<HelloMutationFromArticlesServiceMutation, HelloMutationFromArticlesServiceMutationVariables>
    } & TChildProps;
export function withHelloMutationFromArticlesService<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloMutationFromArticlesServiceMutation,
  HelloMutationFromArticlesServiceMutationVariables,
  HelloMutationFromArticlesServiceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, HelloMutationFromArticlesServiceMutation, HelloMutationFromArticlesServiceMutationVariables, HelloMutationFromArticlesServiceProps<TChildProps, TDataName>>(HelloMutationFromArticlesServiceDocument, {
      alias: 'helloMutationFromArticlesService',
      ...operationOptions
    });
};

/**
 * __useHelloMutationFromArticlesServiceMutation__
 *
 * To run a mutation, you first call `useHelloMutationFromArticlesServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHelloMutationFromArticlesServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [helloMutationFromArticlesServiceMutation, { data, loading, error }] = useHelloMutationFromArticlesServiceMutation({
 *   variables: {
 *   },
 * });
 */
export function useHelloMutationFromArticlesServiceMutation(baseOptions?: Apollo.MutationHookOptions<HelloMutationFromArticlesServiceMutation, HelloMutationFromArticlesServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HelloMutationFromArticlesServiceMutation, HelloMutationFromArticlesServiceMutationVariables>(HelloMutationFromArticlesServiceDocument, options);
      }
export type HelloMutationFromArticlesServiceMutationHookResult = ReturnType<typeof useHelloMutationFromArticlesServiceMutation>;
export type HelloMutationFromArticlesServiceMutationResult = Apollo.MutationResult<HelloMutationFromArticlesServiceMutation>;
export type HelloMutationFromArticlesServiceMutationOptions = Apollo.BaseMutationOptions<HelloMutationFromArticlesServiceMutation, HelloMutationFromArticlesServiceMutationVariables>;
export const HelloQueryFromArticlesServiceDocument = gql`
    query HelloQueryFromArticlesService {
  helloQueryFromArticlesService
}
    `;
export type HelloQueryFromArticlesServiceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>
    } & TChildProps;
export function withHelloQueryFromArticlesService<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloQueryFromArticlesServiceQuery,
  HelloQueryFromArticlesServiceQueryVariables,
  HelloQueryFromArticlesServiceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables, HelloQueryFromArticlesServiceProps<TChildProps, TDataName>>(HelloQueryFromArticlesServiceDocument, {
      alias: 'helloQueryFromArticlesService',
      ...operationOptions
    });
};

/**
 * __useHelloQueryFromArticlesServiceQuery__
 *
 * To run a query within a React component, call `useHelloQueryFromArticlesServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQueryFromArticlesServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQueryFromArticlesServiceQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQueryFromArticlesServiceQuery(baseOptions?: Apollo.QueryHookOptions<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>(HelloQueryFromArticlesServiceDocument, options);
      }
export function useHelloQueryFromArticlesServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>(HelloQueryFromArticlesServiceDocument, options);
        }
export function useHelloQueryFromArticlesServiceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>(HelloQueryFromArticlesServiceDocument, options);
        }
export type HelloQueryFromArticlesServiceQueryHookResult = ReturnType<typeof useHelloQueryFromArticlesServiceQuery>;
export type HelloQueryFromArticlesServiceLazyQueryHookResult = ReturnType<typeof useHelloQueryFromArticlesServiceLazyQuery>;
export type HelloQueryFromArticlesServiceSuspenseQueryHookResult = ReturnType<typeof useHelloQueryFromArticlesServiceSuspenseQuery>;
export type HelloQueryFromArticlesServiceQueryResult = Apollo.QueryResult<HelloQueryFromArticlesServiceQuery, HelloQueryFromArticlesServiceQueryVariables>;
export const HelloMutationFromCommentsServiceDocument = gql`
    mutation HelloMutationFromCommentsService {
  helloMutationFromCommentsService
}
    `;
export type HelloMutationFromCommentsServiceMutationFn = Apollo.MutationFunction<HelloMutationFromCommentsServiceMutation, HelloMutationFromCommentsServiceMutationVariables>;
export type HelloMutationFromCommentsServiceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<HelloMutationFromCommentsServiceMutation, HelloMutationFromCommentsServiceMutationVariables>
    } & TChildProps;
export function withHelloMutationFromCommentsService<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloMutationFromCommentsServiceMutation,
  HelloMutationFromCommentsServiceMutationVariables,
  HelloMutationFromCommentsServiceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, HelloMutationFromCommentsServiceMutation, HelloMutationFromCommentsServiceMutationVariables, HelloMutationFromCommentsServiceProps<TChildProps, TDataName>>(HelloMutationFromCommentsServiceDocument, {
      alias: 'helloMutationFromCommentsService',
      ...operationOptions
    });
};

/**
 * __useHelloMutationFromCommentsServiceMutation__
 *
 * To run a mutation, you first call `useHelloMutationFromCommentsServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHelloMutationFromCommentsServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [helloMutationFromCommentsServiceMutation, { data, loading, error }] = useHelloMutationFromCommentsServiceMutation({
 *   variables: {
 *   },
 * });
 */
export function useHelloMutationFromCommentsServiceMutation(baseOptions?: Apollo.MutationHookOptions<HelloMutationFromCommentsServiceMutation, HelloMutationFromCommentsServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HelloMutationFromCommentsServiceMutation, HelloMutationFromCommentsServiceMutationVariables>(HelloMutationFromCommentsServiceDocument, options);
      }
export type HelloMutationFromCommentsServiceMutationHookResult = ReturnType<typeof useHelloMutationFromCommentsServiceMutation>;
export type HelloMutationFromCommentsServiceMutationResult = Apollo.MutationResult<HelloMutationFromCommentsServiceMutation>;
export type HelloMutationFromCommentsServiceMutationOptions = Apollo.BaseMutationOptions<HelloMutationFromCommentsServiceMutation, HelloMutationFromCommentsServiceMutationVariables>;
export const HelloQueryFromCommentsServiceDocument = gql`
    query HelloQueryFromCommentsService {
  helloQueryFromCommentsService
}
    `;
export type HelloQueryFromCommentsServiceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>
    } & TChildProps;
export function withHelloQueryFromCommentsService<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloQueryFromCommentsServiceQuery,
  HelloQueryFromCommentsServiceQueryVariables,
  HelloQueryFromCommentsServiceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables, HelloQueryFromCommentsServiceProps<TChildProps, TDataName>>(HelloQueryFromCommentsServiceDocument, {
      alias: 'helloQueryFromCommentsService',
      ...operationOptions
    });
};

/**
 * __useHelloQueryFromCommentsServiceQuery__
 *
 * To run a query within a React component, call `useHelloQueryFromCommentsServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQueryFromCommentsServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQueryFromCommentsServiceQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQueryFromCommentsServiceQuery(baseOptions?: Apollo.QueryHookOptions<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>(HelloQueryFromCommentsServiceDocument, options);
      }
export function useHelloQueryFromCommentsServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>(HelloQueryFromCommentsServiceDocument, options);
        }
export function useHelloQueryFromCommentsServiceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>(HelloQueryFromCommentsServiceDocument, options);
        }
export type HelloQueryFromCommentsServiceQueryHookResult = ReturnType<typeof useHelloQueryFromCommentsServiceQuery>;
export type HelloQueryFromCommentsServiceLazyQueryHookResult = ReturnType<typeof useHelloQueryFromCommentsServiceLazyQuery>;
export type HelloQueryFromCommentsServiceSuspenseQueryHookResult = ReturnType<typeof useHelloQueryFromCommentsServiceSuspenseQuery>;
export type HelloQueryFromCommentsServiceQueryResult = Apollo.QueryResult<HelloQueryFromCommentsServiceQuery, HelloQueryFromCommentsServiceQueryVariables>;