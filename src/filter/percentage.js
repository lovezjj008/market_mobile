import Vue from 'vue'

Vue.filter('percentage', (value) => {
  return value ? (value + '%') : '0%'
})
