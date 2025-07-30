import { UserModel } from './auth.types';

export const authResolvers = {
    Mutation: {
        signup: async (_:any, args: any) => {
            try {
                const newUser = await UserModel.create({
                    firstname: args.firstname,
                    lastname: args.lastname,
                    email: args.email,
                    password: args.password,
                });
                return newUser;
            } catch (err) {
                throw new Error('Signup falied: ' + err);
            }
        }
    }
}