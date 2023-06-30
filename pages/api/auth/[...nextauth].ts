import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

import { dbUsers } from '../../../database';


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [


        // ...add more providers here
        CredentialsProvider({
            name: 'Custom Login',
            credentials: {
                email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com' },
                password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña' },
            },
            async authorize(credentials) {
                try {
                    const user = await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password)
                    console.log("desde el api", user)

                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        return { ...user, id: user._id }
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null
                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                } catch (err) {
                    return null
                }


            }
        }),
    ],
    // Custom Pages

    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register'
    },
    // Callbacks
    jwt: {
        // secret: process.env.JWT_SECRET_SEED, // deprecated
    },

    session: {
        maxAge: 2592000, /// 30d
        strategy: 'jwt',
        updateAge: 86400, // cada día
    },



    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {


            //console.log('signIn', user)
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return '/unauthorized'
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },

        async session({ session, token, user }) {
            //console.log({ session, token, user });

            //session.accessToken = token;
            session.user = token.user as any;

            return session;
        },
        async jwt({ token, account, user }) {
            //console.log({ token, account, user });


            if (account) {
                token.accessToken = account.access_token;

                switch (account.type) {

                    case 'oauth':
                        token.user = await dbUsers.oAUthToDbUser(user?.email || '', user?.name || '', user?.image || '');
                        break;

                    case 'credentials':
                        token.user = user;
                        break;
                }

            }

            return token;
        },





    }

}



export default NextAuth(authOptions)  