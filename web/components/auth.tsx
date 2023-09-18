'use client'

import { FC } from 'react'
import { signIn, signOut } from 'next-auth/react'

export const SignInButton: FC = () => {
  return (
    <button type="button" onClick={() => signIn('github')}>
      SignIn with GitHub
    </button>
  )
}

export const SignOutButton: FC = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      SignOut
    </button>
  )
}
