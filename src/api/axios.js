import axios from 'axios'
// axios.defaults.withCredentials = true
// import { Spin } from 'iview'
// import APPVUE from '../main'


class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      },
    }
    return config;
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // config.headers['Access-Control-Allow-Origin'] = '*';
      // config.headers['Access-Control-Allow-Headers'] = '*';
      // config.headers['Access-Control-Allow-Methods'] = '*';
      // config.withCredentials = true
      config.withCredentials = true;
      if (config.method === 'get') {
        for (let item in config.params) {
          if (!config.params[item]) {
            delete config.params[item];
          }
        }
        for (let item in config.data) {
          if (!config.data[item]) {
            delete config.data[item];
          }
        }
      }
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好kiiui
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    });
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      console.log(error)
      this.destroy(url)
      console.log(error.response.data.msg)
      if (error.response.status !== 401) {
      } else if (error.response.status === 401) {
        console.log(error.response)
        // APPVUE.$router.push(error.response.data.msg)
      }
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
