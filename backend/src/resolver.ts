import { authResolvers } from './auth/auth.resolver';
import { mergeResolvers } from '@graphql-tools/merge';

export const resolvers = mergeResolvers([authResolvers]);