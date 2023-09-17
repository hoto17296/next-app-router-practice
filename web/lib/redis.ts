import { createClient } from 'redis'

const redisClient = createClient({ url: process.env.REDIS_URL })

export async function temporaryRedisConnection<T>(
  callback: (redisClient: ReturnType<typeof createClient>) => Promise<T>
): Promise<T> {
  await redisClient.connect()
  const result = await callback(redisClient)
  await redisClient.disconnect()
  return result
}
