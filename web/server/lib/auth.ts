import type { AuthOptions, Session } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { getServerSession } from 'next-auth/next'

export const options: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_OAUTH_APP_CLIENT_ID!,
      clientSecret: process.env.GITHUB_OAUTH_APP_CLIENT_SECRET!,
    }),
  ],
}

export async function getUser(): Promise<Session['user'] | null> {
  const session = await getServerSession(options)
  return session?.user
}
