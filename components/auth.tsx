import { useAuth } from '@/hooks'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'

interface AuthProps {
  children: ReactNode
}

function Auth({ children }: AuthProps) {
  const { profile, isLoadProfile } = useAuth()

  if (isLoadProfile) {
    return <p>Loading...</p>
  }

  console.log(profile)

  if (!profile) {
    // redirect('/login')
    return <p>Redirect to login page</p>
  }

  return <>{children}</>
}

export default Auth
