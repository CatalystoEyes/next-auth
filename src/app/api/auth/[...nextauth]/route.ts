import NextAuth from "next-auth/next";
import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import Credentials from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null
                // Добавить извлечение users из db (prisma provider, mongoDB) 
                const currentUser = users.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const { password, userWithoutPassword } = currentUser

                    return userWithoutPassword as User
                }
                return null
            }
        }),
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
        })
    ],

    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string
            return session
        },
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@email.com")
            }
            else if (account.provider === "github") {
                return profile.email_verified && profile.email.endsWith("@email.com")
            }
            return true
        },
    },
    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
    pages: {
        signIn: '/auth/signin'
    }
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST };