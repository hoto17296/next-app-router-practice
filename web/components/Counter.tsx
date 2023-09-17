'use client'

import { useState } from 'react'
import type { FC } from 'react'

import { incrementCount } from '@/lib/counter'

interface CouterProps {
  initialCount: number
}

const Counter: FC<CouterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount)
  async function onIncrement(formData: FormData): Promise<void> {
    setCount(await incrementCount())
  }
  return (
    <form action={onIncrement}>
      <p>Count: {count}</p>
      <input type="submit" value="Increment" />
    </form>
  )
}

export default Counter
