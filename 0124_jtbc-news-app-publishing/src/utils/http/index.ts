import axios from 'axios'
import { setInterceptors } from '@/utils/http/interceptors'

const isDev = process.env.NODE_ENV === 'development'

const axiosInstance = axios.create({
	baseURL: isDev ? '/' : process.env.SITE_URL,
	withCredentials: true,
})

export const http = setInterceptors(axiosInstance)
