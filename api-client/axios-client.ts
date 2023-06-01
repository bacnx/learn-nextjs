import axios, { AxiosError } from 'axios'

export const axiosClient = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  }
)
