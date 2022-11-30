import axios from 'axios'
import { BASE_URL } from 'common/constants'

// Set config defaults when creating the instance
export const requester = axios.create({
  baseURL: BASE_URL,
})

// const localLang = localStorage.getItem('lang')

requester.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  // config.headers['Accept-Language'] = localLang ? localLang : 'ru'
  return config
})
