import { temporaryRedisConnection } from '@/lib/redis'
import styles from './page.module.css'

const COUNT_KEY = 'count'

async function fetchCount(): Promise<number> {
  return await temporaryRedisConnection<number>(async (redisClient) =>
    parseInt((await redisClient.get(COUNT_KEY)) || '0')
  )
}

export default async function Home() {
  const count = await fetchCount()
  return (
    <main>
      <p>Count: {count}</p>
      <input type="button" value="Increment" />
    </main>
  )
}
