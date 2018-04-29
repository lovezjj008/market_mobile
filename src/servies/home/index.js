import axios from '@/config/httpServer'
export var getchannel = function () {
  return axios({url: '/mall-basedoc/ware_category/channel?' + new Date().getTime(), method: 'get'})
}
export var getcategory = function (status) {
  return axios({url: '/mall-basedoc/ware_category/channel/' + status + '?' + new Date().getTime(), method: 'get'})
}
