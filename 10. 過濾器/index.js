// 自訂過濾器
Vue.filter('dateString', (value, format='YYYY-MM-DD HH:mm:ss') => {
  return moment(value).format(format)
})

new Vue ({
  el: '#app',
  data () {
    return {
      date: new Date()
    }
  }
})