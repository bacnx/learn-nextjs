import useSWR from 'swr'
import { authApi } from '@/api-client'
import { PublicConfiguration } from 'swr/_internal'

const MILISECONDS_PER_HOUR = 60 * 60 * 1000

interface AccountInfo {
  username: string
  password: string
}

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
    isLoading: isLoadProfile,
  } = useSWR('/profile', {
    dedupingInterval: MILISECONDS_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
  })

  const login = async (accountInfo: AccountInfo) => {
    await authApi.login(accountInfo)

    await mutate()
  }

  const logout = async () => {
    await authApi.logout()
    mutate(undefined, false)
  }

  const getProfile = async () => {
    await mutate()
  }

  return { profile, error, isLoadProfile, login, logout, getProfile }
}
