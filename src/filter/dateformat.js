import Vue from 'vue'

function Format (date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

Vue.filter('dateformat', (value, format = 'yyyy-MM-dd hh:mm:ss') => {
  if (!value) {
    return ''
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return value.substring(0, 10)
  }
  if (value instanceof Object) {
    if (value.time) {
      return Format(new Date(value.time), format)
    }
  }
  return Format(new Date(value), format)
})
