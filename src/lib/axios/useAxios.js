import { useAuth } from 'reactfire'
import axios from 'axios'
import { useRouter } from 'next/router'

export const useAxios = () => {
  const router = useRouter()
  const baseURL = router.basePath
  const auth = useAuth()

  const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  apiClient.interceptors.request.use(async config => {
    const token = await auth?.currentUser?.getIdToken()
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  return apiClient
}
