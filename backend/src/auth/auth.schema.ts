import { gql } from 'apollo-server'

export const authTypeDefs = gql `
    type User {
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
    }

    type Query {
        _placeholder: String
    }

    type Mutation {
        signup(firstname: String!, lastname: String!, email: String!, password: String!): User!
    }
`;