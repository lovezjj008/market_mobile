import axios from '@/config/httpServer'
export var getsearchsuggest = function (malltype, keyword) {
  return axios({ url: '/mall-basedoc/search/mall/suggest/materialClass?mall_type=' + malltype + '&keyWord=' + keyword, method: 'get' })
}
export var getsearchlist = function (url, data) {
  return axios({ url, method: 'post', isloading: true }, data)
}
