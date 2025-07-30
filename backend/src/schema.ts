import { authTypeDefs } from './auth/auth.schema';
import { mergeTypeDefs } from '@graphql-tools/merge'

export const typeDefs = mergeTypeDefs([authTypeDefs]);