import HttpRequest from './axios'
import config from './config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)


export const getdata = (info) => {
  return axios.request({
    url: `getLoadingView`,
    method: 'get',
    params: info
  })
}

export const getdata2 = (info) => {
  return axios.request({
    url: `getPickPointList`,
    method: 'get',
    params: info
  })
}
