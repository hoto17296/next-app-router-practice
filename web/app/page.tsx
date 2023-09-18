import { getUser } from '@/server/lib/auth'
import { fetchCount } from '@/server/actions/counter'
import { SignInButton, SignOutButton } from '@/components/auth'
import Counter from '@/components/Counter'

export default async function Home() {
  const user = await getUser()

  if (!user) {
    return (
      <main>
        <SignInButton />
      </main>
    )
  }

  return (
    <main>
      <header>
        <p>Hello, {user.name}</p>
        <SignOutButton />
      </header>
      <Counter initialCount={await fetchCount()} />
    </main>
  )
}
