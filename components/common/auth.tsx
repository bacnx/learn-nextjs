import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export interface AuthProps {
  children: ReactNode
}

function Auth({ children }: AuthProps) {
  const router = useRouter()
  const { profile, isLoadProfile } = useAuth()

  if (isLoadProfile) {
    return <p>Loading...</p>
  }

  if (!profile) {
    router.push('/login')
  }

  return <>{children}</>
}

export default Auth
