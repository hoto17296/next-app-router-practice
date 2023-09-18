'use server'

import { getUser } from '@/server/lib/auth'
import { redisClient } from '@/server/lib/redis'

async function getCountKey(): Promise<string> {
  const user = await getUser()
  if (!user) throw new Error()
  return `count:${user.email}`
}

export async function fetchCount(): Promise<number> {
  const key = await getCountKey()
  return parseInt((await redisClient.get(key)) || '0')
}

export async function incrementCount(): Promise<number> {
  const key = await getCountKey()
  await redisClient.incr(key)
  return await fetchCount()
}
