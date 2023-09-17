import { fetchCount } from '@/server/actions/counter'
import Counter from '@/components/Counter'

export default async function Home() {
  return <Counter initialCount={await fetchCount()} />
}
