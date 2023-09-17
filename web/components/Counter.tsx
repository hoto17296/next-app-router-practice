'use client'

import { useState } from 'react'
import type { FC } from 'react'

import { incrementCount } from '@/server/actions/counter'

interface CouterProps {
  initialCount: number
}

const Counter: FC<CouterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount)
  async function onClick() {
    setCount(await incrementCount())
  }
  return (
    <>
      <p>Count: {count}</p>
      <input type="button" value="Increment" onClick={onClick} />
    </>
  )
}

export default Counter
