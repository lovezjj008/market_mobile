import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'

const baseURL = '/'
axios.interceptors.request.use(config => {
  if (config.isloading) {
    Indicator.open()
  }
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function errorState (response) {
  Indicator.close()
  console.log(response)
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    Toast('网络异常')
  }
}

function successState (res) {
  Indicator.close()
}
const httpServer = (opts, data) => {
  let Public = {
  }

  let httpDefaultOpts = { // http默认配置
    method: opts.method,
    baseURL,
    url: opts.url,
    isloading: opts.isloading || false,
    timeout: opts.timeout || 30000,
    params: Object.assign(Public, data),
    data: JSON.stringify(Object.assign(Public, data)),
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }

  if (opts.method === 'get' || opts.method === 'GET') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        successState(res)
        resolve(res)
      }
    ).catch(
      (response) => {
        errorState(response)
        reject(response)
      }
    )
  })
  return promise
}

export default httpServer
