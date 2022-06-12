import axios, { Axios } from 'axios'

const { CancelToken } = axios
const cancelInstanceMap: Record<string, () => void> = Object.create({})

/**
 * 提供取消接口接口能力。当上一个接口未请求结束时会直接取消接口。 使用：header中添加allowCancelRequest字段，值为true时，可以取消接口调用。
 * @param http axios实例
 */
export const cancelRequestInterceptors = (http: Axios) => {
  http.interceptors.request.use((config) => {
    if (
      config?.headers?.allowCancelRequest &&
      !config?.cancelToken &&
      config.url
    ) {
      if (cancelInstanceMap[config.url]) {
        cancelInstanceMap[config.url]?.()
        delete cancelInstanceMap[config.url]
      }
      config.cancelToken = new CancelToken((cancel) => {
        config.url && (cancelInstanceMap[config.url] = cancel)
      })
    }
    return config
  })

  http.interceptors.response.use(
    function (response) {
      const { config } = response
      if (
        config?.headers?.allowCancelRequest &&
        config.url &&
        !config?.cancelToken &&
        cancelInstanceMap[config.url]
      ) {
        delete cancelInstanceMap[config.url]
      }
      return response
    },
    function (error) {
      return Promise.reject(error)
    },
  )
}

/**
 * 查看接口日志
 * @param http axios实例
 */
export const getRequestLog = (http: Axios) => {
  http.interceptors.request.use((config) => {
    console.info(`---[Request:]`, config?.url, `\n`, config)
    return config
  })

  http.interceptors.response.use(
    function (response) {
      console.info(`---[Response:]`, response.config?.url, `\n`, response)
      return response
    },
    function (error) {
      console.error(`---[Response-error:]`, error)
      return Promise.reject(error)
    },
  )
}
