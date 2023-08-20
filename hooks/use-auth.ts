import useSWR, { SWRConfiguration } from 'swr'
import { authApi } from '@/api-client'
import type { LoginPayload, UserProfile } from '@/models'
import { StorageKeys } from '@/constants'

const MILISECONDS_PER_HOUR = 60 * 60 * 1000

function getUserInfo(): UserProfile | undefined {
  try {
    return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || '')
  } catch (err) {
    return undefined
  }
}

export const useAuth = (options?: Partial<SWRConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
    isLoading: isLoadProfile,
  } = useSWR<UserProfile>('/profile', {
    dedupingInterval: MILISECONDS_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(),
    onSuccess: (data) => {
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data))
    },
    onError: () => {
      localStorage.removeItem(StorageKeys.USER_INFO)
    },
  })

  const login = async (payload: LoginPayload) => {
    await authApi.login(payload)

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
