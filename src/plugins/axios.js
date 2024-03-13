import Axios from 'axios'
import { setCurrentUser, getCurrentUser } from '../utils'

export const authAxios = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_BASE_API
      : process.env.VUE_APP_BASE_API_dev,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ทุก request มีการเรียกใช้ function นี้
authAxios.interceptors.request.use(
  function (config) {
    const localCurrentUser = getCurrentUser() || {}
    config.headers = {
      Authorization: `Bearer ${localCurrentUser.token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// ทุก response มีการเรียกใช้ function นี้
authAxios.interceptors.response.use(undefined, async (err) => {
  const error = err.response
  if (error) {
    let originalRequest = error.config
    if (error.status === 401) {
      originalRequest.__isRetryRequest = true
      const localCurrentUser = getCurrentUser() || {}
      let headers = {
        Authorization: `Bearer ${localCurrentUser.token}`
      }
      let body = {
        username: localCurrentUser.username,
        refreshToken: localCurrentUser.refreshToken
      }
      try {
        const response = await Axios.post(
          `${
            process.env.NODE_ENV === 'production'
              ? process.env.VUE_APP_BASE_API
              : process.env.VUE_APP_BASE_API_dev
          }/backoffice/v1/auth/token`,
          body,
          {
            headers: headers
          }
        )

        if (response.status === 200) {
          if (process.browser) {
            setCurrentUser({ ...localCurrentUser, ...response.data })
          }
          originalRequest.headers['Authorization'] = response.data.token
          return await authAxios(originalRequest)
        } else {
          throw 'reject refreshtoken'
        }
      } catch (e) {
        setCurrentUser(null)
        console.log('LOGOUT TOKEN EXPIRE')
        location.replace(
          `${
            process.env.NODE_ENV === 'production'
              ? process.env.VUE_APP_ENDPOINT
              : process.env.VUE_APP_ENDPOINT_dev
          }/auth/logout`
        )
      }
    } else {
      return Promise.reject(err)
    }
  } else {
    return Promise.reject(err)
  }
})
