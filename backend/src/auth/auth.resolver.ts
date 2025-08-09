import { UserModel } from './auth.types';
import { ApolloError } from 'apollo-server';
import { z } from 'zod';

const signupSchema = z.object({
    firstname: z
        .string()
        .min(1, { message: "Firstname is required" }) 
        .min(2, { message: "Firstname must be at least 2 characters long" }),

    lastname: z
        .string()
        .min(1, { message: "Lastname is required" })
        .min(2, { message: "Lastname must be at least 2 characters long" }),

    email: z
        .string()
        .min(1, { message: "Email is required" })
        .min(5, { message: "Email must be at least 5 characters long" }),

    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" })
});

export const authResolvers = {
    Mutation: {
        signup: async (_: unknown, args: unknown) => {
            const parsedInput = signupSchema.safeParse(args);

            if (!parsedInput.success) {
                const errors: Record<string, string> = {};

                parsedInput.error.issues.forEach(issue => {
                    const field = issue.path[0] as string;

                    if (!errors[field]) {
                        errors[field] = issue.message;
                    }
                });

                throw new ApolloError(JSON.stringify(errors));
            }

            const existingUser = await UserModel.findOne({ email: parsedInput.data.email });
            if (existingUser) {
                throw new ApolloError(JSON.stringify({ email: "Email is already taken." }));
            }

            try {
                const newUser = await UserModel.create(parsedInput.data);
                return newUser;
            } catch (err) {
                throw new ApolloError('Signup failed: ' + err);
            }
        }
    }
};
