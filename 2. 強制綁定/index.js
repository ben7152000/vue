const vm = new Vue ({
  el: '#app',
  data: {
    msg: 'I will Back!',
    imgUrl: 'https://book.vue.tw/assets/img/1-1-vue-logo.402955e1.png'
  },
  methods: {
    test () {
      alert('good')
    },
    test2 (content) {
      alert(content)
    }
  }
})