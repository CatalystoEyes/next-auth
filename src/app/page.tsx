'use client'
import { useSession } from 'next-auth/react'
import AuthPage from './(lk)/auth/page'
import ProfilePage from './(lk)/profile/page'

export default function Home() {
  const session = useSession()

  console.log(session)
  return (
    <>
      {session?.data ? <ProfilePage /> : <AuthPage />}
    </>
  )
}