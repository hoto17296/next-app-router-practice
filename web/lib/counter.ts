'use server'

import { redisClient } from '@/lib/redis'

const COUNT_KEY = 'count'

export async function fetchCount(): Promise<number> {
  return parseInt((await redisClient.get(COUNT_KEY)) || '0')
}

export async function incrementCount(): Promise<number> {
  await redisClient.incr(COUNT_KEY)
  return await fetchCount()
}
